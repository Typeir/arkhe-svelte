import type { SelectOption, OptionFilter, Placement } from '@arkhe/core';
import type { Snippet } from 'svelte';
declare function $$render<T extends SelectOption>(): {
    props: {
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
 * Renders a labelled text input that filters a list of options, reports every
 * choice and empties itself, for adding to a list kept elsewhere. At phone width
 * it opens a sheet that stays open while choices are added. On Zag's combobox
 * machine.
 */
declare const Picker: $$IsomorphicComponent;
type Picker<T extends SelectOption> = InstanceType<typeof Picker<T>>;
export default Picker;
