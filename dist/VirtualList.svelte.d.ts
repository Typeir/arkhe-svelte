import { type VirtualRange } from '@arkhe/core';
import { type Snippet } from 'svelte';
declare function $$render<T>(): {
    props: {
        items: readonly T[];
        rowPitch: number;
        item: Snippet<[T, number]>;
        label?: string;
        maxHeight?: string;
        overscan?: number;
        getKey?: (item: T, index: number) => string | number;
        onRange?: (visible: VirtualRange) => void;
    };
    exports: {};
    bindings: "";
    slots: {};
    events: {};
};
declare class __sveltets_Render<T> {
    props(): ReturnType<typeof $$render<T>>['props'];
    events(): ReturnType<typeof $$render<T>>['events'];
    slots(): ReturnType<typeof $$render<T>>['slots'];
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
/**
 * Renders a scroll box over a long list of fixed-pitch rows that draws only the
 * rows in view plus an overscan margin. Each row says its place in the whole
 * set.
 */
declare const VirtualList: $$IsomorphicComponent;
type VirtualList<T> = InstanceType<typeof VirtualList<T>>;
export default VirtualList;
