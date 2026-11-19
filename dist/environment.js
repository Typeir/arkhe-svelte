/**
 * @fileoverview Svelte context for the Arkhé environment: the root node Zag
 * queries and the element portals mount into.
 *
 * @module packages/svelte/src/environment
 * @version 1.0.0
 * @author Typeir
 * @since 0.1.0
 */
import { DEFAULT_ENVIRONMENT } from '@arkhe/core';
import { getContext, setContext } from 'svelte';
const KEY = Symbol.for('arkhe.environment');
/**
 * Publishes an environment to every Arkhé component below the caller.
 *
 * @function provideArkheEnvironment
 * @param {() => ArkheEnvironmentValue} read - Returns the current environment.
 * @returns {void}
 */
export function provideArkheEnvironment(read) {
    setContext(KEY, read);
}
/**
 * Returns a reader for the nearest environment, or the main document's.
 * Call during component initialisation.
 *
 * @function useArkheEnvironment
 * @returns {() => ArkheEnvironmentValue} Environment reader.
 */
export function useArkheEnvironment() {
    return (getContext(KEY) ??
        (() => DEFAULT_ENVIRONMENT));
}
