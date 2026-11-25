import type { ListNote, SelectOption } from '@arkhe/core';
import type * as combobox from '@zag-js/combobox';
import type { PropTypes } from '@zag-js/svelte';
import type { Snippet } from 'svelte';
import type { VirtualRows } from '../list/virtualRows.svelte.js';
/**
 * Props of ComboboxList.
 *
 * @interface ComboboxListProps
 * @template {SelectOption} T
 * @property {combobox.Api<PropTypes, T>} api - Zag combobox API.
 * @property {ReturnType<typeof combobox.collection<T>>} collection - Shown options as Zag's collection.
 * @property {readonly T[]} shown - Shown options.
 * @property {ListNote} [note] - Line shown instead of the options.
 * @property {string} emptyText - Text of the empty line.
 * @property {Snippet<[T, number]>} option - Renders one option at its place in `shown`.
 * @property {boolean} [inline] - Renders in place and always open.
 * @property {VirtualRows} rows - Virtual rows of a flat list.
 * @property {boolean} [stale] - Dims the options while newer ones load.
 */
export interface ComboboxListProps<T extends SelectOption> {
    api: combobox.Api<PropTypes, T>;
    collection: ReturnType<typeof combobox.collection<T>>;
    shown: readonly T[];
    note?: ListNote;
    emptyText: string;
    option: Snippet<[T, number]>;
    inline?: boolean;
    rows: VirtualRows;
    stale?: boolean;
}
declare function $$render<T extends SelectOption>(): {
    props: ComboboxListProps<T>;
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
 * Renders the option list of ComboboxField, or the line that stands in for it
 * while results load, fail or are empty. Not exported. It renders in the
 * floating dropdown, or inline in a sheet.
 */
declare const ComboboxList: $$IsomorphicComponent;
type ComboboxList<T extends SelectOption> = InstanceType<typeof ComboboxList<T>>;
export default ComboboxList;
