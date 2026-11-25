import type { FieldIds } from '@arkhe/core';
/**
 * Props of FieldNote.
 *
 * @interface FieldNoteProps
 * @property {FieldIds} ids - Field ids; the line takes the hint or error id.
 * @property {string} [hint] - Help text.
 * @property {string} [error] - Error text; replaces the hint.
 */
export interface FieldNoteProps {
    ids: FieldIds;
    hint?: string;
    error?: string;
}
/**
 * Renders the line under a control: the hint or, once there is one, the error.
 * A new error is announced politely. Not exported: Field, the select family and
 * NumericInput share it.
 */
declare const FieldNote: import("svelte").Component<FieldNoteProps, {}, "">;
type FieldNote = ReturnType<typeof FieldNote>;
export default FieldNote;
