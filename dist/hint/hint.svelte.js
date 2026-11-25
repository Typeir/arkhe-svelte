/**
 * @fileoverview What Tooltip and HoverCard share in the Svelte port: a body
 * mounted on first open on the client and kept after, a place in the hint
 * tree, and tap handling on the trigger.
 *
 * @module packages/svelte/src/hint/hint.svelte
 * @version 1.0.0
 * @author Typeir
 * @since 0.1.0
 */
import { HintNode, hintTriggerProps, SVELTE_EVENTS, watchOutsideTap, } from '@arkhe/core';
import { getContext, setContext, untrack } from 'svelte';
import { useLatch, useMounted } from '../base/mounted.svelte.js';
/**
 * Context key of the enclosing card's hint node, shared by every copy of
 * Arkhé.
 *
 * @constant KEY
 * @type {symbol}
 */
const KEY = Symbol.for('arkhe.hint');
/**
 * Makes the node `read` returns the parent of hints rendered below. Call
 * during component initialisation.
 *
 * @function provideHintNode
 * @param {() => HintNode} read - Returns the card's node.
 * @returns {void}
 */
export function provideHintNode(read) {
    setContext(KEY, read);
}
/**
 * Returns this hint's tree node, a child of the card it renders in. Call
 * during component initialisation.
 *
 * @function useHintNode
 * @returns {HintNode} Node.
 */
export function useHintNode() {
    return new HintNode(getContext(KEY)?.());
}
/**
 * Wires a hint's trigger for taps, keeps its node in the hint tree and
 * closes it on a tap outside it and the hints it holds. The body mounts on
 * first open on the client, so server markup holds none and CSS exit
 * transitions still run after. Call inside a component or effect root.
 *
 * @function useHint
 * @template {object} P
 * @param {() => HintInput<P>} read - Reads open state, trigger props, positioner id, root node, node.
 * @returns {Hint<P>} Trigger props and mount flag.
 */
export function useHint(read) {
    const memory = {
        current: untrack(() => read().pressed) ?? null,
    };
    const node = untrack(() => read().node);
    const triggerId = $derived(read().trigger.id ?? '');
    const positionerId = $derived(read().positionerId);
    const client = useMounted();
    const opened = useLatch(() => client.current && read().open);
    $effect(() => {
        const ids = [triggerId, positionerId];
        return untrack(() => node.attach({
            close: () => {
                read().setOpen(false);
            },
            leaving: () => read().leaving(),
            ids: () => ids,
        }));
    });
    $effect(() => {
        const { open } = read();
        untrack(() => {
            node.report(open);
        });
    });
    $effect(() => {
        const { open, getRootNode } = read();
        if (!open)
            return undefined;
        const root = getRootNode();
        return untrack(() => watchOutsideTap(root, () => node.ids(), () => {
            read().setOpen(false);
        }));
    });
    return {
        get trigger() {
            const { open, setOpen, trigger, getRootNode } = read();
            return hintTriggerProps(trigger, {
                open,
                setOpen,
                memory,
                names: SVELTE_EVENTS,
                holds: (target) => node.holds(getRootNode(), target),
                activate: read().activate,
                keys: read().keys,
            });
        },
        get mounted() {
            return opened.current;
        },
        pressing: () => memory.current !== null,
    };
}
