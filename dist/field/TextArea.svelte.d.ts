import type { HTMLTextareaAttributes } from 'svelte/elements';
/**
 * Props of TextArea: native textarea attributes, minus `class`.
 *
 * @typedef {Omit<HTMLTextareaAttributes, 'class'>} TextAreaProps
 */
export type TextAreaProps = Omit<HTMLTextareaAttributes, 'class'>;
/** Renders a multi-line text area. Native attributes pass through; `value` binds. */
declare const TextArea: import("svelte").Component<TextAreaProps, {}, "value">;
type TextArea = ReturnType<typeof TextArea>;
export default TextArea;
