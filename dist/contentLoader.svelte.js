/**
 * @fileoverview Svelte glue for `ContentLoader`: one loader per source, read
 * through a Svelte subscriber.
 *
 * @module packages/svelte/src/contentLoader.svelte
 * @version 1.0.0
 * @author Typeir
 * @since 0.1.0
 */
import { ContentLoader } from '@arkhe/core';
import { createSubscriber } from 'svelte/reactivity';
const IDLE = { status: 'idle' };
/**
 * Wraps a loader so reading its state inside an effect subscribes to it.
 *
 * @function watch
 * @template T
 * @param {ContentLoader<T>} loader - Loader.
 * @returns {() => LoadState<T>} Reads the state.
 */
function watch(loader) {
    const track = createSubscriber((update) => loader.subscribe(update));
    return () => {
        track();
        return loader.snapshot();
    };
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
export function useContentLoader(source) {
    const current = $derived.by(() => {
        const next = source();
        if (!next)
            return undefined;
        const loader = new ContentLoader(next);
        return { loader, read: watch(loader) };
    });
    return {
        get state() {
            return current?.read() ?? IDLE;
        },
        load: () => void current?.loader.load(),
    };
}
