/**
 * Props of Progress.
 *
 * @interface Props
 * @property {number} value - Current amount; may exceed `max`.
 * @property {number} max - Amount that fills the rail.
 * @property {string} label - Accessible name.
 * @property {readonly number[]} [markers] - Thresholds, in the value's units; repeats are dropped.
 * @property {boolean} [showValue] - Prints the value text above the rail.
 */
interface Props {
    value: number;
    max: number;
    label: string;
    markers?: readonly number[];
    showValue?: boolean;
}
/**
 * Renders a progress bar. Past `max` it reads as full, marks `data-over`, and its
 * value text says by how much. Throws a RangeError when `max` is not positive.
 */
declare const Progress: import("svelte").Component<Props, {}, "">;
type Progress = ReturnType<typeof Progress>;
export default Progress;
