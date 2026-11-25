/**
 * @fileoverview A hint trigger that sleeps until its first hover, focus or
 * tap. Asleep, it carries Zag's closed trigger attributes and wake handlers.
 * Awake, the machine runs in a child that reports its trigger props back;
 * the spread updates the same trigger node, so its focus survives. Waking
 * flushes at once, so the press's click already meets the live machine.
 * Zag's focus-visible tracking starts with the first sleeping trigger, as it
 * would with the first machine, so the press that wakes a hint still counts
 * as a pointer and the focus after it does not open the hint.
 *
 * @module packages/svelte/src/hint/sleep.svelte
 * @version 1.0.0
 * @author Typeir
 * @since 0.4.0
 */
import { afterExit, sleepingTrigger, SVELTE_EVENTS, WakeWatch, } from '@arkhe/core';
import { trackFocusVisible } from '@zag-js/focus-visible';
import { flushSync, onMount, untrack } from 'svelte';
import { useArkheEnvironment } from '../base/environment.js';
/**
 * Sleeping trigger state for one hint.
 *
 * @function useSleep
 * @param {HintScope} scope - Machine scope.
 * @param {string} id - Machine id.
 * @param {() => boolean} open - Held open by the host; wakes at once.
 * @param {() => boolean} defaultOpen - Starts open; counts until the first sleep.
 * @returns {Sleep} Wake state, trigger props, report and sleep callbacks.
 */
export function useSleep(scope, id, open, defaultOpen) {
    const env = useArkheEnvironment();
    onMount(() => {
        trackFocusVisible({ root: env().getRootNode() })();
    });
    let slept = $state(false);
    const held = () => open() || (defaultOpen() && !slept);
    let waking = $state(untrack(held) ? 'open' : null);
    let live = $state.raw(null);
    $effect.pre(() => {
        if (held() && untrack(() => waking) === null)
            waking = 'open';
    });
    const watch = new WakeWatch(SVELTE_EVENTS, (kind) => {
        flushSync(() => {
            waking = kind;
        });
    });
    const asleep = {
        ...sleepingTrigger(scope, id),
        ...watch.handlers,
    };
    const leave = (event) => {
        watch.leave();
        live?.onpointerleave?.(event);
    };
    return {
        get waking() {
            return waking;
        },
        get attrs() {
            return live === null ? asleep : { ...live, onpointerleave: leave };
        },
        report: (props) => {
            live = props;
        },
        hovering: () => watch.hovering,
        get fresh() {
            return !slept;
        },
        get press() {
            return watch.press;
        },
        sleep: () => {
            watch.reset();
            live = null;
            waking = null;
            slept = true;
        },
    };
}
/**
 * Sends a live hint back to sleep once it is closed and its exit animations
 * have ended, unless a press still waits for its click, or it never opened
 * and the pointer is still on the trigger.
 *
 * @function useSleepAgain
 * @param {() => SleepAgainInput} read - Machine state and the sleep callback.
 * @returns {void}
 */
export function useSleepAgain(read) {
    const env = useArkheEnvironment();
    $effect(() => {
        const { closed, positionerId } = read();
        if (!closed)
            return undefined;
        return afterExit(env().getRootNode(), positionerId, () => {
            untrack(() => {
                const now = read();
                const ready = now.closed &&
                    now.idle() &&
                    !now.pressing() &&
                    (now.opened || !now.hovering());
                if (ready)
                    now.sleep();
            });
        });
    });
}
