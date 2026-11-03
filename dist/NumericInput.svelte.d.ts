import { type NumericValue } from '@arkhe/core';
/**
 * Props of NumericInput.
 *
 * @interface Props
 * @property {string} label - Visible label; also names the step buttons.
 * @property {NumericValue} [value] - Value; bindable. A function binding vetoes or clamps.
 * @property {NumericValue} [defaultValue] - First value when uncontrolled.
 * @property {(value: NumericValue) => void} [onValueChange] - Reports every draft change.
 * @property {(value: NumericValue) => void} [onValueCommit] - Blur or Enter, clamped.
 * @property {number} [min] - Lowest value.
 * @property {number} [max] - Highest value.
 * @property {number} [step] - Step size. Defaults to 1.
 */
interface Props {
    label: string;
    value?: NumericValue;
    defaultValue?: NumericValue;
    onValueChange?: (value: NumericValue) => void;
    onValueCommit?: (value: NumericValue) => void;
    min?: number;
    max?: number;
    step?: number;
}
/**
 * Renders a number field on Zag's number-input machine. Outside it is a number
 * or `null`. `value` always binds, even from undefined; `onValueChange` only
 * reports. A host that rejects or clamps a change uses a function binding, and
 * the field snaps back to what the getter returns on blur. A controlled value
 * set while typing waits until blur, so a parent that clamps cannot eat
 * keystrokes. The port keeps its own draft text: Zag hands the
 * input its formatted value, which Svelte would bind live and so erase a lone
 * "-".
 */
declare const NumericInput: import("svelte").Component<Props, {}, "value">;
type NumericInput = ReturnType<typeof NumericInput>;
export default NumericInput;
