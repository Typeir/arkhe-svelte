import type { HTMLTextareaAttributes } from 'svelte/elements';
/**
 * Props of TextArea: native textarea attributes, minus `class`.
 *
 * @typedef {Omit<HTMLTextareaAttributes, 'class'>} Props
 */
type Props = Omit<HTMLTextareaAttributes, 'class'>;
/** Renders a multi-line text area. Native attributes pass through; `value` binds. */
declare const TextArea: import("svelte").Component<Props, {}, "value">;
type TextArea = ReturnType<typeof TextArea>;
export default TextArea;
