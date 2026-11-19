import type { Snippet } from 'svelte';
/**
 * Props of Button.
 *
 * @interface Props
 * @property {Snippet} [children] - Visible text. Omit for an icon-only button.
 * @property {'default' | 'primary' | 'ghost' | 'danger'} [variant] - Visual weight. Defaults to `default`.
 * @property {string} [icon] - Lucide name of the icon.
 * @property {'start' | 'end'} [iconSide] - Side of the text the icon sits on. Defaults to `start`.
 * @property {string} [label] - Accessible name of an icon-only button; visible text names the others.
 * @property {'square' | 'rhombus' | 'plain'} [shape] - Outline. Icon-only: the box, or `plain` for the glyph alone. Labelled: `rhombus` is a ghost label with the icon in a rhombus. Defaults to `square`.
 * @property {'xs' | 's' | 'm' | 'l' | 'xl'} [size] - Glyph scale; an icon-only box scales with it. Unset keeps the text-sized glyph.
 * @property {'accent' | 'danger' | 'inherit'} [tone] - Hover and focus colour. Defaults to `accent`.
 * @property {boolean} [dashed] - Dashed emphasis outline, for an add action.
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
    iconSide?: 'start' | 'end';
    label?: string;
    shape?: 'square' | 'rhombus' | 'plain';
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    tone?: 'accent' | 'danger' | 'inherit';
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
declare const Button: import("svelte").Component<Props, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
