import type { CheckboxSize, RadioItem, RadioLook, RadioOrientation } from '@arkhe/core';
/**
 * Props of RadioGroup.
 *
 * @interface RadioGroupProps
 * @property {string} label - Legend; names the group.
 * @property {readonly RadioItem[]} items - Choices, in order; a repeated value is dropped.
 * @property {string | null} [value] - Chosen value; bindable, null chooses none.
 * @property {string} [defaultValue] - First choice when uncontrolled.
 * @property {(value: string) => void} [onValueChange] - Reports a new choice.
 * @property {RadioLook} [look] - Pips or segments. Defaults to `pip`.
 * @property {CheckboxSize} [size] - Pip size. Defaults to `m`.
 * @property {RadioOrientation} [orientation] - Direction. Defaults to `horizontal`.
 * @property {boolean} [labelHidden] - Hides the legend visually.
 * @property {string} [name] - Form field name; generated when absent.
 * @property {boolean} [required] - A choice is needed to submit.
 * @property {boolean} [disabled] - Blocks every choice.
 * @property {string} [hint] - Help text.
 * @property {string} [error] - Error text; replaces the hint.
 */
export interface RadioGroupProps {
    label: string;
    items: readonly RadioItem[];
    value?: string | null;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    look?: RadioLook;
    size?: CheckboxSize;
    orientation?: RadioOrientation;
    labelHidden?: boolean;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    hint?: string;
    error?: string;
}
/**
 * Renders a radio group on native radios in a fieldset: rhombus pips or joined
 * segments, the legend naming the group, then a hint or an error. Tab reaches
 * the chosen radio, arrows move the choice, all natively; `value` binds; a new
 * error is announced politely.
 */
declare const RadioGroup: import("svelte").Component<RadioGroupProps, {}, "value">;
type RadioGroup = ReturnType<typeof RadioGroup>;
export default RadioGroup;
