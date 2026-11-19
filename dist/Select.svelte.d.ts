import type { SelectOption, OptionFilter, Placement } from '@arkhe/core';
import { type Snippet } from 'svelte';
declare function $$render<T extends SelectOption>(): {
    props: {
        label: string;
        items: readonly T[];
        placeholder?: string;
        value?: string | null;
        defaultValue?: string | null;
        onValueChange?: (value: string | null) => void;
        searchable?: boolean;
        filter?: OptionFilter<T>;
        item?: Snippet<[T]>;
        name?: string;
        required?: boolean;
        autoComplete?: string;
        disabled?: boolean;
        placement?: Placement;
        emptyLabel?: string;
        size?: "s" | "m" | "l";
        labelHidden?: boolean;
        hint?: string;
        error?: string;
        rowPitch?: number;
    };
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
 * Renders one choice from a list of options: a button that opens the list
 * (Zag select) by default; with `searchable`, a text input that filters it
 * (Zag combobox). At phone width it opens a sheet with a search box and the
 * list instead; choosing closes it.
 */
declare const Select: $$IsomorphicComponent;
type Select<T extends SelectOption> = InstanceType<typeof Select<T>>;
export default Select;
