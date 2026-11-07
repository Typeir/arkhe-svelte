import { type FieldControlAttrs } from '@arkhe/core';
import type { Snippet } from 'svelte';
/**
 * Props of Field.
 *
 * @interface Props
 * @property {string} label - Visible label.
 * @property {string | number} [readout] - Current value shown beside the label; not announced as it changes.
 * @property {string} [hint] - Help text under the control.
 * @property {string} [error] - Error text; replaces the hint and marks the control invalid.
 * @property {Snippet<[FieldControlAttrs]>} children - Renders the control with the given attributes.
 */
interface Props {
    label: string;
    readout?: string | number;
    hint?: string;
    error?: string;
    children: Snippet<[FieldControlAttrs]>;
}
/**
 * Renders a labelled control. The control receives its id, description ids and
 * invalid state through the `children` snippet.
 */
declare const Field: import("svelte").Component<Props, {}, "">;
type Field = ReturnType<typeof Field>;
export default Field;
