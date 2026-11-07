import { type Placement } from '@arkhe/core';
import { type Snippet } from 'svelte';
/**
 * Props of Popover.
 *
 * @interface Props
 * @property {string} trigger - Text of the open button.
 * @property {string} [title] - Heading; names the panel. Without it the trigger text does.
 * @property {boolean} [open] - Open state; bindable. A function binding vetoes.
 * @property {boolean} [defaultOpen] - First open state when uncontrolled.
 * @property {(open: boolean) => void} [onOpenChange] - Reports open-state changes.
 * @property {Placement} [placement] - Side. Defaults to `bottom-start`.
 * @property {Snippet} [children] - Panel body.
 */
interface Props {
    trigger: string;
    title?: string;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    placement?: Placement;
    children?: Snippet;
}
/**
 * Renders a button that toggles a non-modal panel anchored to it, on Zag's
 * popover machine, portalled into the environment's container once mounted on
 * the client, so server markup holds the trigger alone. Escape and outside
 * clicks close it; focus returns to the button.
 */
declare const Popover: import("svelte").Component<Props, {}, "open">;
type Popover = ReturnType<typeof Popover>;
export default Popover;
