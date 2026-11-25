import type { HeadingLevel } from '@arkhe/core';
import type { Snippet } from 'svelte';
/**
 * Props of Collapsible.
 *
 * @interface CollapsibleProps
 * @property {string} title - Trigger text; names the button and never changes.
 * @property {boolean} [open] - Open state; bindable.
 * @property {boolean} [defaultOpen] - First state when uncontrolled.
 * @property {(open: boolean) => void} [onOpenChange] - Reports changes, find-in-page included.
 * @property {HeadingLevel} [heading] - Wraps the trigger in a heading of this level.
 * @property {Snippet} [actions] - Controls beside the trigger, outside it.
 * @property {boolean} [lazy] - Mounts the content on first open, then keeps it.
 * @property {boolean} [disabled] - The trigger stays focusable and ignores presses.
 * @property {Snippet} children - Content.
 */
export interface CollapsibleProps {
    title: string;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    heading?: HeadingLevel;
    actions?: Snippet;
    lazy?: boolean;
    disabled?: boolean;
    children: Snippet;
}
/**
 * Renders a collapsible section: a trigger button, optionally inside a heading,
 * actions beside it, and a region find-in-page can open; when the browser
 * reveals it, the section opens. Height animates in CSS. `open` binds.
 */
declare const Collapsible: import("svelte").Component<CollapsibleProps, {}, "open">;
type Collapsible = ReturnType<typeof Collapsible>;
export default Collapsible;
