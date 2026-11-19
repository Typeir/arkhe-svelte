import { type Placement, type SearchRun, type SelectOption } from '@arkhe/core';
import { type Snippet } from 'svelte';
declare function $$render<T extends SelectOption>(): {
    props: {
        label: string;
        search?: SearchRun<T>;
        debounce?: number;
        items?: readonly T[];
        onInputChange?: (text: string) => void;
        onSubmit?: (text: string) => void;
        onSelect?: (item: T) => void;
        placeholder?: string;
        loading?: boolean;
        item?: Snippet<[T]>;
        disabled?: boolean;
        placement?: Placement;
        size?: "s" | "m" | "l";
        labelHidden?: boolean;
        hint?: string;
        error?: string;
        rowPitch?: number;
    };
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
 * Renders a labelled text input whose host answers each query, grouped when
 * results name groups. Enter with nothing highlighted submits the text. Nothing
 * filters here: with `search`, each query runs the host's request once typing
 * pauses, aborting the one before, so the host filters where the data lives;
 * without it, the host answers `onInputChange` with `items`. At phone width it
 * opens a sheet that closes on a choice or a submit. On Zag's combobox
 * machine. Give `search`, or `items` with `onInputChange`.
 */
declare const Search: $$IsomorphicComponent;
type Search<T extends SelectOption> = InstanceType<typeof Search<T>>;
export default Search;
