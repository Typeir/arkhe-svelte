import type { Snippet } from 'svelte';
/**
 * Visual weight of a button.
 *
 * @typedef {'default' | 'primary' | 'ghost' | 'danger'} ButtonVariant
 */
export type ButtonVariant = 'default' | 'primary' | 'ghost' | 'danger';
/**
 * Glyph scale of a button; an icon-only box scales with it.
 *
 * @typedef {'xs' | 's' | 'm' | 'l' | 'xl'} ButtonSize
 */
export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';
/**
 * Colour a button lights up in on hover and focus.
 *
 * @typedef {'accent' | 'danger' | 'inherit'} ButtonTone
 */
export type ButtonTone = 'accent' | 'danger' | 'inherit';
/**
 * Props of Button.
 *
 * @interface ButtonProps
 * @property {Snippet} [children] - Visible text. Omit for an icon-only button.
 * @property {ButtonVariant} [variant] - Visual weight. Defaults to `default`.
 * @property {string} [icon] - Lucide name of the icon.
 * @property {'start' | 'end'} [iconSide] - Side of the text the icon sits on. Defaults to `start`.
 * @property {string} [label] - Accessible name of an icon-only button; visible text names the others.
 * @property {'square' | 'rhombus' | 'plain'} [shape] - Outline. Icon-only: the box, or `plain` for the glyph alone. Labelled: `rhombus` is a ghost label with the icon in a rhombus. Defaults to `square`.
 * @property {ButtonSize} [size] - Glyph scale; an icon-only box scales with it. Unset keeps the text-sized glyph.
 * @property {ButtonTone} [tone] - Hover and focus colour. Defaults to `accent`.
 * @property {boolean} [dashed] - Dashed emphasis outline, for an add action.
 * @property {boolean} [pressed] - Toggle state; sets `aria-pressed`.
 * @property {string} [href] - Renders a link to this address.
 * @property {boolean} [disabled] - Blocks interaction.
 * @property {'button' | 'submit' | 'reset'} [type] - Button type. Defaults to `button`.
 * @property {(event: MouseEvent) => void} [onclick] - Click handler.
 */
export interface ButtonProps {
    children?: Snippet;
    variant?: ButtonVariant;
    icon?: string;
    iconSide?: 'start' | 'end';
    label?: string;
    shape?: 'square' | 'rhombus' | 'plain';
    size?: ButtonSize;
    tone?: ButtonTone;
    dashed?: boolean;
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
declare const Button: import("svelte").Component<ButtonProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
