/**
 * @fileoverview useVirtualRows: the rows of a fixed-pitch list to draw for
 * its scroll box, the spacer properties for the rest, and a scroll that
 * brings any row into view. Without a pitch it draws every row.
 *
 * @module packages/svelte/src/list/virtualRows.svelte
 * @version 1.0.0
 * @author Typeir
 * @since 0.2.0
 */
import type { Attachment } from 'svelte/attachments';
import { type RowPosition, type VirtualRange, type VirtualVars } from '@arkhe/core';
/**
 * Virtual rows of one list; reactive.
 *
 * @interface VirtualRows
 * @property {boolean} on - Rows are virtual.
 * @property {VirtualRange} range - Rows to draw.
 * @property {VirtualRange} visible - Rows in view, without the overscan.
 * @property {Attachment<HTMLElement>} attach - Attachment of the scroll box.
 * @property {(details: { index: number }) => void} scrollTo - Shows a row; fits Zag's `scrollToIndexFn`.
 * @property {VirtualVars | undefined} vars - Spacer and pitch properties of the scroll box.
 * @property {(index: number) => RowPosition | undefined} position - Set position of a row.
 */
export interface VirtualRows {
    readonly on: boolean;
    readonly range: VirtualRange;
    readonly visible: VirtualRange;
    readonly attach: Attachment<HTMLElement>;
    readonly scrollTo: (details: {
        index: number;
    }) => void;
    readonly vars: VirtualVars | undefined;
    readonly position: (index: number) => RowPosition | undefined;
}
/**
 * Tracks which of `count()` rows, each `pitch()` rem high, to draw.
 *
 * @function useVirtualRows
 * @param {() => number} count - Rows in the set.
 * @param {() => number | undefined} pitch - Row height in rem; none draws every row.
 * @param {number} [overscan] - Rows past each edge of the view. Defaults to `VIRTUAL_OVERSCAN`.
 * @returns {VirtualRows} Rows to draw and their wiring.
 */
export declare function useVirtualRows(count: () => number, pitch: () => number | undefined, overscan?: number): VirtualRows;
