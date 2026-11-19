/**
 * @fileoverview Svelte glue for `ContentLoader`: one loader per source, read
 * through a Svelte subscriber.
 *
 * @module packages/svelte/src/contentLoader.svelte
 * @version 1.0.0
 * @author Typeir
 * @since 0.1.0
 */
import { type LoadState } from '@arkhe/core';
/**
 * What `useContentLoader` returns.
 *
 * @interface ContentLoaderHandle
 * @template T
 * @property {LoadState<T>} state - Current load state; reactive.
 * @property {() => void} load - Starts the load once.
 */
export interface ContentLoaderHandle<T> {
    readonly state: LoadState<T>;
    readonly load: () => void;
}
/**
 * Keeps one loader per source. A new source gets a new loader. Without a
 * source the state stays idle. Call during component initialisation.
 *
 * @function useContentLoader
 * @template T
 * @param {() => (() => Promise<T>) | undefined} source - Reads the current source.
 * @returns {ContentLoaderHandle<T>} State and start.
 */
export declare function useContentLoader<T>(source: () => (() => Promise<T>) | undefined): ContentLoaderHandle<T>;
