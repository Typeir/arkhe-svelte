import { type Placement } from '@arkhe/core';
import { type Snippet } from 'svelte';
/**
 * Props of Tooltip.
 *
 * @interface Props
 * @property {string | Snippet} content - Description; non-interactive phrasing content.
 * @property {Snippet} children - Trigger content.
 * @property {boolean} [inline] - Makes the trigger inline text with a tab stop; it may hold other triggers.
 * @property {boolean} [open] - Open state; bindable. A function binding vetoes.
 * @property {boolean} [defaultOpen] - First open state when uncontrolled.
 * @property {(open: boolean) => void} [onOpenChange] - Reports open-state changes.
 * @property {Placement} [placement] - Side. Defaults to `top`.
 * @property {number} [openDelay] - Milliseconds before opening. Defaults to 400.
 * @property {number} [closeDelay] - Milliseconds before closing. Defaults to 150.
 */
interface Props {
    content: string | Snippet;
    children: Snippet;
    inline?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    placement?: Placement;
    openDelay?: number;
    closeDelay?: number;
}
/**
 * Renders a trigger that shows a short description on hover, keyboard focus
 * and tap, on Zag's tooltip machine; a tap outside or Escape closes it. One is
 * open at a time. The content is phrasing only, never links or controls (an
 * ARIA tooltip); anything interactive, a link trigger included, belongs in a
 * HoverCard. The body mounts
 * on first open, portalled into the environment's container, so server markup
 * holds the trigger alone.
 */
declare const Tooltip: import("svelte").Component<Props, {}, "open">;
type Tooltip = ReturnType<typeof Tooltip>;
export default Tooltip;
