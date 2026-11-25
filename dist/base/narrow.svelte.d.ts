/**
 * @fileoverview useNarrow: whether the environment's window is phone-width,
 * kept current as it crosses. False on the server and until mounted.
 *
 * @module packages/svelte/src/base/narrow.svelte
 * @version 1.0.0
 * @author Typeir
 * @since 0.2.0
 */
/**
 * Reactive phone-width flag; read `current`.
 *
 * @interface Narrow
 * @property {boolean} current - True at phone width.
 */
export interface Narrow {
    readonly current: boolean;
}
/**
 * Tracks phone width. Call during component initialisation.
 *
 * @function useNarrow
 * @returns {Narrow} Reactive flag.
 */
export declare function useNarrow(): Narrow;
