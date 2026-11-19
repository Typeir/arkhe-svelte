import { type FieldIds } from '@arkhe/core';
/**
 * Props of FieldNote.
 *
 * @interface Props
 * @property {FieldIds} ids - Field ids; the line takes the hint or error id.
 * @property {string} [hint] - Help text.
 * @property {string} [error] - Error text; replaces the hint.
 */
interface Props {
    ids: FieldIds;
    hint?: string;
    error?: string;
}
/**
 * Renders the line under a control: the hint or, once there is one, the error.
 * A new error is announced politely. Not exported: Field, the select family and
 * NumericInput share it.
 */
declare const FieldNote: import("svelte").Component<Props, {}, "">;
type FieldNote = ReturnType<typeof FieldNote>;
export default FieldNote;
