/**
 * @fileoverview Client flags of a component: whether it has mounted, and
 * whether a condition has held once. Both stay false on the server, so
 * server markup and the first client render agree.
 *
 * @module packages/svelte/src/base/mounted.svelte
 * @version 1.0.0
 * @author Typeir
 * @since 0.4.0
 */
/**
 * Turns on once the component has mounted on the client. Call during
 * component initialisation.
 *
 * @function useMounted
 * @returns {Flag} Mount flag.
 */
export function useMounted() {
    let mounted = $state(false);
    const mount = () => {
        mounted = true;
    };
    $effect(mount);
    return {
        get current() {
            return mounted;
        },
    };
}
/**
 * Turns on the first time `read()` is true, before the DOM updates, and
 * stays on. Call during component initialisation.
 *
 * @function useLatch
 * @param {() => boolean} read - Reads the condition.
 * @returns {Latch} Latch.
 */
export function useLatch(read) {
    let raised = $state(false);
    $effect.pre(() => {
        if (read())
            raised = true;
    });
    return {
        get current() {
            return raised;
        },
        raise: () => {
            raised = true;
        },
    };
}
