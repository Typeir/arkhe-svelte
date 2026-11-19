import { type SelectOption, type OptionFilter, type Placement } from '@arkhe/core';
import { type Snippet } from 'svelte';
declare function $$render<T extends SelectOption>(): {
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
        onQuery?: (text: string) => void;
        filter?: OptionFilter<T>;
        loading?: boolean;
        failed?: boolean;
        onSubmit?: (text: string) => void;
        item?: Snippet<[T]>;
        disabled?: boolean;
        placement?: Placement;
        emptyLabel?: string;
        size?: "s" | "m" | "l";
        labelHidden?: boolean;
        inline?: boolean;
        name?: string;
        hint?: string;
        error?: string;
        enterKeyHint?: "search" | "done" | "go" | "next" | "enter";
        required?: boolean;
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
