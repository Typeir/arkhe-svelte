import { type ComboboxOption, type OptionFilter, type Placement } from '@arkhe/core';
import { type Snippet } from 'svelte';
declare function $$render<T extends ComboboxOption>(): {
    props: {
        label: string;
        items: readonly T[];
        placeholder?: string;
        value?: string | null;
        defaultValue?: string | null;
        onValueChange?: (value: string | null) => void;
        onSelect?: (item: T) => void;
        clearOnSelect?: boolean;
        onInputChange?: (text: string) => void;
        filter?: OptionFilter<T>;
        loading?: boolean;
        onSubmit?: (text: string) => void;
        item?: Snippet<[T]>;
        disabled?: boolean;
        placement?: Placement;
    };
    exports: {};
    bindings: "value";
    slots: {};
    events: {};
};
declare class __sveltets_Render<T extends ComboboxOption> {
    props(): ReturnType<typeof $$render<T>>['props'];
    events(): ReturnType<typeof $$render<T>>['events'];
    slots(): ReturnType<typeof $$render<T>>['slots'];
    bindings(): "value";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T extends ComboboxOption>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T extends ComboboxOption>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
/**
 * Renders a labelled text input that filters a list of options, on Zag's
 * combobox machine, with the list portalled into the environment's container.
 * Serves three jobs: a searchable select, a picker that adds the chosen option
 * elsewhere and empties itself, and a search box whose host supplies results
 * and takes free text on Enter. Tab completes the highlighted option. The list
 * filters once Svelte has flushed the keystroke: a list change inside it makes
 * Zag move the caret to the end of the text. The filter still lands before the
 * next key, so Enter never acts on a stale list. The list portals in once
 * mounted on the client, so server markup holds none.
 */
declare const Combobox: $$IsomorphicComponent;
type Combobox<T extends ComboboxOption> = InstanceType<typeof Combobox<T>>;
export default Combobox;
