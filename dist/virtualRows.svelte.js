/**
 * @fileoverview useVirtualRows: the rows of a fixed-pitch list to draw for
 * its scroll box, the spacer properties for the rest, and a scroll that
 * brings any row into view. Without a pitch it draws every row.
 *
 * @module packages/svelte/src/virtualRows.svelte
 * @version 1.0.0
 * @author Typeir
 * @since 0.2.0
 */
import { UNMEASURED_VIEW, VIRTUAL_OVERSCAN, rowPosition, scrollToRow, virtualRange, virtualVars, watchView, } from '@arkhe/core';
/**
 * Tracks which of `count()` rows, each `pitch()` rem high, to draw.
 *
 * @function useVirtualRows
 * @param {() => number} count - Rows in the set.
 * @param {() => number | undefined} pitch - Row height in rem; none draws every row.
 * @param {number} [overscan] - Rows past each edge of the view.
 * @returns {VirtualRows} Rows to draw and their wiring.
 */
export function useVirtualRows(count, pitch, overscan = VIRTUAL_OVERSCAN) {
    let view = $state.raw(UNMEASURED_VIEW);
    let box;
    const range = $derived.by(() => pitch() === undefined
        ? { start: 0, end: count() }
        : virtualRange(count(), view, overscan));
    const visible = $derived.by(() => pitch() === undefined
        ? { start: 0, end: count() }
        : virtualRange(count(), view, 0));
    return {
        get on() {
            return pitch() !== undefined;
        },
        get range() {
            return range;
        },
        get visible() {
            return visible;
        },
        attach: (node) => {
            box = node;
            const rem = pitch();
            return rem === undefined
                ? undefined
                : watchView(node, rem, (next) => {
                    view = next;
                });
        },
        scrollTo: ({ index }) => {
            const rem = pitch();
            const next = box && rem !== undefined && scrollToRow(box, index, rem);
            if (next)
                view = next;
        },
        get vars() {
            const rem = pitch();
            return rem === undefined ? undefined : virtualVars(range, count(), rem);
        },
        position: (index) => pitch() === undefined ? undefined : rowPosition(index, count()),
    };
}
