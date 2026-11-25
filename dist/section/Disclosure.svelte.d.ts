import type { Snippet } from 'svelte';
/**
 * Props of Disclosure.
 *
 * @interface DisclosureProps
 * @property {string} summary - Summary text; never a heading.
 * @property {boolean} [defaultOpen] - Starts open.
 * @property {string} [name] - Group name; one disclosure of the group is open at a time.
 * @property {Snippet} children - Content.
 */
export interface DisclosureProps {
    summary: string;
    defaultOpen?: boolean;
    name?: string;
    children: Snippet;
}
/**
 * Renders a disclosure: a styled native `<details>`, working before hydration
 * and findable by the browser, which opens, closes and reveals it. Plain
 * summaries only; a section that needs a heading is a Collapsible.
 */
declare const Disclosure: import("svelte").Component<DisclosureProps, {}, "">;
type Disclosure = ReturnType<typeof Disclosure>;
export default Disclosure;
