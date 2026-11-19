import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
/**
 * Props of HintTrigger.
 *
 * @interface Props
 * @property {HTMLAttributes<HTMLElement>} attrs - Trigger props from `useHint`.
 * @property {string} [href] - Renders a link to this address.
 * @property {boolean} [inline] - Renders inline text with a tab stop.
 * @property {Snippet} children - Trigger content.
 */
interface Props {
    attrs: HTMLAttributes<HTMLElement>;
    href?: string;
    inline?: boolean;
    children: Snippet;
}
/**
 * Renders a Tooltip or HoverCard trigger: a button by default, the provider's
 * link (or an `a`) with `href`, or a `span` with a tab stop when `inline`,
 * which may hold other triggers. `href` wins over `inline`.
 */
declare const HintTrigger: import("svelte").Component<Props, {}, "">;
type HintTrigger = ReturnType<typeof HintTrigger>;
export default HintTrigger;
