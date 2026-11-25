import type { OptionFilter, Placement, SelectOption } from '@arkhe/core';
import type { Snippet } from 'svelte';
/**
 * Props of ComboboxField.
 *
 * @interface ComboboxFieldProps
 * @template {SelectOption} T
 * @property {string} label - Visible label.
 * @property {readonly T[]} items - Options; a repeated value is dropped.
 * @property {string} [placeholder] - Input placeholder.
 * @property {string | null} [value] - Selected value; bindable. A function binding vetoes.
 * @property {string | null} [defaultValue] - First selection when uncontrolled.
 * @property {(value: string | null) => void} [onValueChange] - Reports selection changes.
 * @property {(item: T) => void} [onSelect] - Every choice, even a repeat.
 * @property {boolean} [clearOnSelect] - Picker mode: empties the input after a choice.
 * @property {(text: string) => void} [onInputChange] - Every edit of the text.
 * @property {(text: string) => void} [onQuery] - Text the user typed; not text a choice or clear wrote.
 * @property {OptionFilter<T>} [filter] - Match rule; `false` when the host filters.
 * @property {boolean} [loading] - Shows the loading line instead of options.
 * @property {boolean} [failed] - Shows the error line instead of options.
 * @property {boolean} [stale] - Dims the options while newer ones load.
 * @property {(text: string) => void} [onSubmit] - Takes free text on Enter when nothing is highlighted.
 * @property {Snippet<[T]>} [item] - Option body. Defaults to label and description.
 * @property {boolean} [disabled] - Blocks input.
 * @property {Placement} [placement] - Side of the list. Defaults to `bottom-start`.
 * @property {string} [emptyLabel] - Text of a first option that stands for no choice, such as "All".
 * @property {'s' | 'm' | 'l'} [size] - Control size. Defaults to `m`.
 * @property {boolean} [labelHidden] - Keeps the label for assistive tech only.
 * @property {boolean} [inline] - Renders the list in place and always shown, as inside a sheet; the input empties and the list opens as it takes focus.
 * @property {string} [name] - Form field name; a hidden input carries the value.
 * @property {string} [hint] - Help text under the control.
 * @property {string} [error] - Error text; replaces the hint and marks the control invalid.
 * @property {'search' | 'done' | 'go' | 'next' | 'enter'} [enterKeyHint] - Label of the on-screen keyboard's Enter key.
 * @property {boolean} [required] - The input must not be empty.
 * @property {number} [rowPitch] - Row height in rem; draws only the rows in view. Flat lists only.
 */
export interface ComboboxFieldProps<T extends SelectOption> {
    label: string;
    items: readonly T[];
    placeholder?: string;
    value?: string | null;
    defaultValue?: string | null;
    onValueChange?: (value: string | null) => void;
    onSelect?: (item: T) => void;
    clearOnSelect?: boolean;
    onInputChange?: (text: string) => void;
    onQuery?: (text: string) => void;
    filter?: OptionFilter<T>;
    loading?: boolean;
    failed?: boolean;
    stale?: boolean;
    onSubmit?: (text: string) => void;
    item?: Snippet<[T]>;
    disabled?: boolean;
    placement?: Placement;
    emptyLabel?: string;
    size?: 's' | 'm' | 'l';
    labelHidden?: boolean;
    inline?: boolean;
    name?: string;
    hint?: string;
    error?: string;
    enterKeyHint?: 'search' | 'done' | 'go' | 'next' | 'enter';
    required?: boolean;
    rowPitch?: number;
}
declare function $$render<T extends SelectOption>(): {
    props: ComboboxFieldProps<T>;
    exports: {};
    bindings: "value";
    slots: {};
    events: {};
};
declare class __sveltets_Render<T extends SelectOption> {
    props(): ReturnType<typeof $$render<T>>['props'];
    events(): ReturnType<typeof $$render<T>>['events'];
    slots(): ReturnType<typeof $$render<T>>['slots'];
    bindings(): "value";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T extends SelectOption>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T extends SelectOption>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
/**
 * Renders a labelled text input that filters a list of options, on Zag's
 * combobox machine, with the list portalled into the environment's container.
 * Not exported: it is the body of the searchable Select, of Picker and of
 * Search. Tab completes the highlighted option. The list filters, and the host
 * hears the new text, once Svelte has flushed the keystroke: a list change
 * inside it makes Zag move the caret to the end of the text. Both still land
 * before the next key, so Enter never acts on a stale list. The list portals in
 * once mounted on the client, so server markup holds none.
 */
declare const ComboboxField: $$IsomorphicComponent;
type ComboboxField<T extends SelectOption> = InstanceType<typeof ComboboxField<T>>;
export default ComboboxField;
