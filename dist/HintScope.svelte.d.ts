import type { HintNode } from '@arkhe/core';
import { type Snippet } from 'svelte';
/**
 * Props of HintScope.
 *
 * @interface Props
 * @property {HintNode} node - The card's node.
 * @property {Snippet} children - Card body.
 */
interface Props {
    node: HintNode;
    children: Snippet;
}
/**
 * Makes a card's hint node the parent of the hints rendered in its body, so
 * only the body links nested hints to the card, not its trigger.
 */
declare const HintScope: import("svelte").Component<Props, {}, "">;
type HintScope = ReturnType<typeof HintScope>;
export default HintScope;
