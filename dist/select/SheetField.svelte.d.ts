import type { Snippet } from 'svelte';
/**
 * Props of SheetField.
 *
 * @interface SheetFieldProps
 * @property {string} label - Visible label; titles the sheet.
 * @property {string} [text] - The current choice, shown on the button.
 * @property {string} [placeholder] - Shown on the button without a choice.
 * @property {'s' | 'm' | 'l'} [size] - Control size. Defaults to `m`.
 * @property {boolean} [labelHidden] - Keeps the label for assistive tech only.
 * @property {boolean} [disabled] - Blocks opening.
 * @property {string} [name] - Form field name, carried by a stand-in input.
 * @property {string | null} [value] - Value the stand-in input submits.
 * @property {boolean} [required] - A value must be chosen; a stand-in input takes part in form validation.
 * @property {string} [hint] - Help text under the button.
 * @property {string} [error] - Error text; replaces the hint and marks the button invalid.
 * @property {Snippet<[() => void]>} children - Sheet body; its argument shuts the sheet.
 */
export interface SheetFieldProps {
    label: string;
    text?: string;
    placeholder?: string;
    size?: 's' | 'm' | 'l';
    labelHidden?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string | null;
    required?: boolean;
    hint?: string;
    error?: string;
    children: Snippet<[() => void]>;
}
/**
 * Renders how Select, Picker and Search look at phone width: a button shows the
 * choice and opens a sheet from the bottom edge, titled by the label, holding
 * the search box and the list, so the on-screen keyboard never covers them.
 * The sheet focuses its search box. Not exported.
 */
declare const SheetField: import("svelte").Component<SheetFieldProps, {}, "">;
type SheetField = ReturnType<typeof SheetField>;
export default SheetField;
