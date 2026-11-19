import { type SelectOption, type Placement } from '@arkhe/core';
import { type Snippet } from 'svelte';
declare function $$render<T extends SelectOption>(): {
    props: {
        label: string;
        items: readonly T[];
        placeholder?: string;
        value?: string | null;
        defaultValue?: string | null;
        onValueChange?: (value: string | null) => void;
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
 * Renders a labelled button that opens a list of options, on Zag's select
 * machine, with the list portalled into the environment's container. Not
 * exported: it is the body of Select when not searchable. A hidden native
 * select mirrors the value for forms; with virtual rows it holds only the chosen
 * option. The list portals in once mounted on the
 * client, so server markup holds none.
 */
declare const SelectMenu: $$IsomorphicComponent;
type SelectMenu<T extends SelectOption> = InstanceType<typeof SelectMenu<T>>;
export default SelectMenu;
