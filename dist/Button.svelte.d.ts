import type { Snippet } from 'svelte';
/**
 * Props of Button.
 *
 * @interface Props
 * @property {Snippet} [children] - Visible text. Omit for an icon-only button.
 * @property {'default' | 'primary' | 'ghost' | 'danger'} [variant] - Visual weight. Defaults to `default`.
 * @property {string} [icon] - Lucide name of a leading icon.
 * @property {string} [label] - Accessible name; required for icon-only buttons.
 * @property {'square' | 'rhombus'} [shape] - Icon-only outline. Defaults to `square`.
 * @property {boolean} [pressed] - Toggle state; sets `aria-pressed`.
 * @property {string} [href] - Renders a link to this address.
 * @property {boolean} [disabled] - Blocks interaction.
 * @property {'button' | 'submit' | 'reset'} [type] - Button type. Defaults to `button`.
 * @property {(event: MouseEvent) => void} [onclick] - Click handler.
 */
interface Props {
    children?: Snippet;
    variant?: 'default' | 'primary' | 'ghost' | 'danger';
    icon?: string;
    label?: string;
    shape?: 'square' | 'rhombus';
    pressed?: boolean;
    href?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onclick?: (event: MouseEvent) => void;
}
/**
 * Renders a button, or a link when `href` is set. A disabled link is a plain
 * anchor that keeps its text but loses its address, click and tab stop.
 */
declare const Button: import("svelte").Component<Props, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
