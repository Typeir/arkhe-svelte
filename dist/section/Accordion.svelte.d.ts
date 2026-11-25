import type { AccordionItem, HeadingLevel } from '@arkhe/core';
import type { Snippet } from 'svelte';
/**
 * Props of Accordion.
 *
 * @interface AccordionProps
 * @property {readonly AccordionItem[]} items - Sections, in order; a repeated value is dropped.
 * @property {Snippet<[string]>} panel - Panel for a value.
 * @property {readonly string[]} [value] - Open values; bindable.
 * @property {readonly string[]} [defaultValue] - First open values when uncontrolled.
 * @property {(value: readonly string[]) => void} [onValueChange] - Reports changes.
 * @property {boolean} [multiple] - Several open at once. Defaults to `true`.
 * @property {boolean} [collapsible] - The last open section may close. Defaults to `true`.
 * @property {HeadingLevel} [heading] - Heading level of every trigger. Defaults to `3`.
 * @property {boolean} [expandAll] - Adds an expand / collapse all button while `multiple`.
 */
export interface AccordionProps {
    items: readonly AccordionItem[];
    panel: Snippet<[string]>;
    value?: readonly string[];
    defaultValue?: readonly string[];
    onValueChange?: (value: readonly string[]) => void;
    multiple?: boolean;
    collapsible?: boolean;
    heading?: HeadingLevel;
    expandAll?: boolean;
}
/**
 * Renders an accordion: Collapsible sections under one state, each with a
 * heading, optionally one open at a time, one always open, or an expand all
 * button. Panels come from the `panel` snippet, as Tabs. No arrow keys between
 * triggers: arrows scroll long panels. `value` binds.
 */
declare const Accordion: import("svelte").Component<AccordionProps, {}, "value">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;
