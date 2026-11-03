import { type Placement } from '@arkhe/core';
import type { Snippet } from 'svelte';
/**
 * Props of Tooltip.
 *
 * @interface Props
 * @property {string} content - Hint text.
 * @property {Snippet} children - Trigger content; wrapped in a button.
 * @property {Placement} [placement] - Side. Defaults to `top`.
 * @property {number} [openDelay] - Milliseconds before opening. Defaults to 400.
 * @property {number} [closeDelay] - Milliseconds before closing. Defaults to 150.
 */
interface Props {
    content: string;
    children: Snippet;
    placement?: Placement;
    openDelay?: number;
    closeDelay?: number;
}
/**
 * Renders a trigger that shows a short text hint on hover and keyboard focus,
 * on Zag's tooltip machine. One is open at a time and it holds no controls;
 * rich or nested content belongs in a HoverCard.
 */
declare const Tooltip: import("svelte").Component<Props, {}, "">;
type Tooltip = ReturnType<typeof Tooltip>;
export default Tooltip;
