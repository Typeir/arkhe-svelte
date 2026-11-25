import type { HTMLInputAttributes } from 'svelte/elements';
/**
 * Props of TextInput: native input attributes, minus `class`.
 *
 * @typedef {Omit<HTMLInputAttributes, 'class'>} TextInputProps
 */
export type TextInputProps = Omit<HTMLInputAttributes, 'class'>;
/**
 * Renders a single-line text input. Native attributes pass through; `value`
 * binds. Type defaults to `text`.
 */
declare const TextInput: import("svelte").Component<TextInputProps, {}, "value">;
type TextInput = ReturnType<typeof TextInput>;
export default TextInput;
