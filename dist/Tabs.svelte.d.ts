import { type TabItem } from '@arkhe/core';
import type { Snippet } from 'svelte';
/**
 * Props of Tabs. Extra props named after a value are that value's slot.
 *
 * @interface Props
 * @property {readonly TabItem[]} items - Tabs, in order; a repeated value is dropped.
 * @property {string} label - Accessible name of the tab list.
 * @property {string} [value] - Selected value; bindable.
 * @property {string} [defaultValue] - First value when uncontrolled.
 * @property {(value: string) => void} [onValueChange] - Reports selection changes.
 * @property {Snippet<[string]>} [panel] - Renders the panel for a value.
 */
interface Props {
    items: readonly TabItem[];
    label: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    panel?: Snippet<[string]>;
    [slot: string]: unknown;
}
/**
 * Renders a tab list and its panels on Zag's tabs machine. Panels come from the
 * `panel` snippet, called per value, or, for Astro, which cannot pass a
 * parameterised snippet, from one named slot per value. `value` binds; a
 * function binding vetoes. A value from the host that matches no enabled tab
 * shows the first enabled tab and warns once. A value the tabs chose themselves
 * moves there silently, and writes the binding, when its tab is removed or
 * disabled.
 */
declare const Tabs: import("svelte").Component<Props, {}, "value">;
type Tabs = ReturnType<typeof Tabs>;
export default Tabs;
