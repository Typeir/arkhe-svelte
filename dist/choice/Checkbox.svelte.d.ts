import type { CheckboxLook, CheckboxSize } from '@arkhe/core';
/**
 * Props of Checkbox.
 *
 * @interface CheckboxProps
 * @property {string} label - Visible label; names the box.
 * @property {boolean} [checked] - Checked state; bindable.
 * @property {boolean} [defaultChecked] - First state when uncontrolled.
 * @property {(checked: boolean) => void} [onCheckedChange] - Reports changes.
 * @property {boolean} [indeterminate] - Mixed state.
 * @property {CheckboxLook} [look] - Pip or box. Defaults to `pip`.
 * @property {CheckboxSize} [size] - s, m or l. Defaults to `m`.
 * @property {boolean} [labelHidden] - Hides the label visually.
 * @property {string} [name] - Form field name.
 * @property {string} [value] - Value submitted while checked.
 * @property {boolean} [required] - Must be checked to submit.
 * @property {boolean} [disabled] - Blocks changes.
 * @property {string} [hint] - Help text.
 * @property {string} [error] - Error text; replaces the hint.
 */
export interface CheckboxProps {
    label: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    indeterminate?: boolean;
    look?: CheckboxLook;
    size?: CheckboxSize;
    labelHidden?: boolean;
    name?: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    hint?: string;
    error?: string;
}
/**
 * Renders a checkbox on a native input: a rhombus pip or a square box, a label
 * beside it, then a hint or an error. Space toggles it; a `<fieldset disabled>`
 * around it disables it; `checked` binds; a new error is announced politely.
 */
declare const Checkbox: import("svelte").Component<CheckboxProps, {}, "checked">;
type Checkbox = ReturnType<typeof Checkbox>;
export default Checkbox;
