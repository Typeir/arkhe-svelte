/**
 * @fileoverview App-wide adapters for the Svelte port: translated labels,
 * icon sets, the link component, the announcer and the canvas effect
 * engine, passed down through Svelte context. Without a provider the
 * announcer makes its regions on first use, and a shared default engine is
 * used.
 *
 * @module packages/svelte/src/context
 * @version 1.0.0
 * @author Typeir
 * @since 0.1.0
 */
import { Announcer, FxLoader, resolveLabels, } from '@arkhe/core';
import { getContext, setContext } from 'svelte';
const KEY = Symbol.for('arkhe.context');
/**
 * Imports the effect engine, a chunk of its own.
 *
 * @function loadFx
 * @returns {Promise<FxModule>} Engine module.
 */
export function loadFx() {
    return import('@arkhe/core/fx');
}
const DEFAULT_CONTEXT = {
    labels: resolveLabels(),
    icons: [],
    link: undefined,
    announcer: new Announcer(),
    effects: new FxLoader({}, loadFx),
};
/**
 * Publishes adapters to every Arkhé component below the caller.
 *
 * @function provideArkhe
 * @param {() => ArkheContextValue} read - Returns the current adapters.
 * @returns {void}
 */
export function provideArkhe(read) {
    setContext(KEY, read);
}
/**
 * Returns a reader for the nearest provider's adapters, or the defaults
 * outside any provider. Call during component initialisation.
 *
 * @function useArkhe
 * @returns {() => ArkheContextValue} Adapter reader.
 */
export function useArkhe() {
    return (getContext(KEY) ??
        (() => DEFAULT_CONTEXT));
}
