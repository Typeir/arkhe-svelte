/**
 * Props of Progress.
 *
 * @interface ProgressProps
 * @property {number} [value] - Current amount; may exceed `max`. None while the amount is unknown.
 * @property {number} max - Amount that fills the rail.
 * @property {string} label - Accessible name.
 * @property {readonly number[]} [markers] - Thresholds, in the value's units; repeats are dropped.
 * @property {boolean} [showValue] - Prints the value text above the rail.
 */
export interface ProgressProps {
    value?: number;
    max: number;
    label: string;
    markers?: readonly number[];
    showValue?: boolean;
}
/**
 * Renders a native progress element on a rail with threshold markers. Past
 * `max` it reads as full, marks `data-over`, and its value text says by how
 * much; without a value it is indeterminate. The value text shown above it is
 * for sight only; the element itself carries it. Throws a RangeError when `max` is not positive.
 */
declare const Progress: import("svelte").Component<ProgressProps, {}, "">;
type Progress = ReturnType<typeof Progress>;
export default Progress;
