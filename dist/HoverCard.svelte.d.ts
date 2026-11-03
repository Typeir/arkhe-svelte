import { type Placement } from '@arkhe/core';
import type { Snippet } from 'svelte';
declare function $$render<T>(): {
    props: {
        title: string;
        children: Snippet;
        content?: Snippet;
        load?: () => Promise<T>;
        loaded?: Snippet<[T]>;
        pinnable?: boolean;
        placement?: Placement;
        openDelay?: number;
        closeDelay?: number;
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
 * Renders a trigger that opens a rich reference card on hover or focus, on
 * Zag's hover-card machine. Cards nest, load content on first open, and pin
 * open until unpinned; unpinning hands the card back to hover, so it stays open
 * while the pointer is over it. A new `load` loads afresh. The card renders in place, so a nested card stays inside
 * its parent's layer. Give `content`, or `load` with `loaded`.
 */
declare const HoverCard: $$IsomorphicComponent;
type HoverCard<T> = InstanceType<typeof HoverCard<T>>;
export default HoverCard;
