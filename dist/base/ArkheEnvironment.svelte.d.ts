import type { RootNode } from '@arkhe/core';
import type { Snippet } from 'svelte';
/**
 * Props of ArkheEnvironment.
 *
 * @interface ArkheEnvironmentProps
 * @property {() => RootNode} [rootNode] - Returns the root node, e.g. a shadow root.
 * @property {HTMLElement} [container] - Portal target. Defaults to the root node's body.
 * @property {Snippet} children - Subtree.
 */
export interface ArkheEnvironmentProps {
    rootNode?: () => RootNode;
    container?: HTMLElement;
    children: Snippet;
}
/**
 * Sets where the Arkhé components below live: the root node Zag queries, and
 * the element portals mount into.
 */
declare const ArkheEnvironment: import("svelte").Component<ArkheEnvironmentProps, {}, "">;
type ArkheEnvironment = ReturnType<typeof ArkheEnvironment>;
export default ArkheEnvironment;
