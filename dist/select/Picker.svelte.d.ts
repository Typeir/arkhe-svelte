import type { OptionFilter, Placement, SelectOption } from '@arkhe/core';
import type { Snippet } from 'svelte';
/**
 * Props of Picker.
 *
 * @interface PickerProps
 * @template {SelectOption} T
 * @property {string} label - Visible label.
 * @property {readonly T[]} items - Options; a repeated value is dropped.
 * @property {(item: T) => void} onSelect - Every choice, even a repeat.
 * @property {string} [placeholder] - Input placeholder.
 * @property {(text: string) => void} [onInputChange] - Every edit of the text.
 * @property {OptionFilter<T>} [filter] - Match rule; `false` when the host filters. Defaults to `matchOption`.
 * @property {boolean} [loading] - Shows the loading line instead of options.
 * @property {Snippet<[T]>} [item] - Option body. Defaults to label and description.
 * @property {boolean} [disabled] - Blocks input.
 * @property {Placement} [placement] - Side of the list. Defaults to `bottom-start`.
 * @property {'s' | 'm' | 'l'} [size] - Control size. Defaults to `m`.
 * @property {boolean} [labelHidden] - Keeps the label for assistive tech only.
 * @property {string} [hint] - Help text under the control.
 * @property {string} [error] - Error text; replaces the hint and marks the control invalid.
 * @property {number} [rowPitch] - Row height in rem; draws only the rows in view, for long lists. Flat lists only.
 */
export interface PickerProps<T extends SelectOption> {
    label: string;
    items: readonly T[];
    onSelect: (item: T) => void;
    placeholder?: string;
    onInputChange?: (text: string) => void;
    filter?: OptionFilter<T>;
    loading?: boolean;
    item?: Snippet<[T]>;
    disabled?: boolean;
    placement?: Placement;
    size?: 's' | 'm' | 'l';
    labelHidden?: boolean;
    hint?: string;
    error?: string;
    rowPitch?: number;
}
declare function $$render<T extends SelectOption>(): {
    props: PickerProps<T>;
    exports: {};
    bindings: "";
    slots: {};
    events: {};
};
declare class __sveltets_Render<T extends SelectOption> {
    props(): ReturnType<typeof $$render<T>>['props'];
    events(): ReturnType<typeof $$render<T>>['events'];
    slots(): ReturnType<typeof $$render<T>>['slots'];
    bindings(): "";
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
 * Renders a labelled text input that filters a list of options, reports every
 * choice and empties itself, for adding to a list kept elsewhere. At phone width
 * it opens a sheet that stays open while choices are added. On Zag's combobox
 * machine.
 */
declare const Picker: $$IsomorphicComponent;
type Picker<T extends SelectOption> = InstanceType<typeof Picker<T>>;
export default Picker;
