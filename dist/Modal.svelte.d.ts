import { type DialogRole } from '@arkhe/core';
import { type Snippet } from 'svelte';
/**
 * Props of Modal.
 *
 * @interface Props
 * @property {string} title - Heading; names the dialog.
 * @property {string} [description] - Text under the heading; describes the dialog.
 * @property {string} [trigger] - Text of a built-in open button. Omit to open from state only.
 * @property {boolean} [open] - Open state; bindable. A function binding vetoes.
 * @property {boolean} [defaultOpen] - First open state when uncontrolled.
 * @property {(open: boolean) => void} [onOpenChange] - Reports open-state changes.
 * @property {DialogRole} [role] - `alertdialog` for confirmations. Defaults to `dialog`.
 * @property {() => HTMLElement | null} [finalFocus] - Element to focus on close; for when the opener is gone.
 * @property {Snippet} [children] - Body.
 */
interface Props {
    title: string;
    description?: string;
    trigger?: string;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    role?: DialogRole;
    finalFocus?: () => HTMLElement | null;
    children?: Snippet;
}
/**
 * Renders a modal dialog on Zag's dialog machine, portalled into the
 * environment's container. The portal mounts on the client only, and Zag stays
 * closed until then, matching the React port. Once mounted it stays; the
 * `hidden` attribute plus CSS transitions animate entry and exit, so no presence
 * machine is needed.
 */
declare const Modal: import("svelte").Component<Props, {}, "open">;
type Modal = ReturnType<typeof Modal>;
export default Modal;
