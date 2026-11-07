import { type Placement } from '@arkhe/core';
import { type Snippet } from 'svelte';
declare function $$render<T>(): {
    props: {
        title: string;
        children: Snippet;
        href?: string;
        inline?: boolean;
        content?: Snippet;
        load?: () => Promise<T>;
        loaded?: Snippet<[T]>;
        pinnable?: boolean;
        open?: boolean;
        defaultOpen?: boolean;
        onOpenChange?: (open: boolean) => void;
        placement?: Placement;
        openDelay?: number;
        closeDelay?: number;
    };
    exports: {};
    bindings: "open";
    slots: {};
    events: {};
};
declare class __sveltets_Render<T> {
    props(): ReturnType<typeof $$render<T>>['props'];
    events(): ReturnType<typeof $$render<T>>['events'];
    slots(): ReturnType<typeof $$render<T>>['slots'];
    bindings(): "open";
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
 * Renders a trigger that opens a rich reference card on hover, focus or tap,
 * on Zag's hover-card machine; a tap outside or Escape closes it, unless
 * pinned. A tap on a link trigger opens the card; the header's link follows
 * it. Cards nest, load content on first open, and pin open until unpinned;
 * unpinning hands the card back to hover, so it stays open while the pointer
 * is over it. A card stays open while a card nested in it is open. A new
 * `load` loads afresh. The card mounts on first open, portalled into the
 * environment's container, so server markup holds the trigger alone and the
 * body may hold any content. Give `content`, or `load` with `loaded`.
 */
declare const HoverCard: $$IsomorphicComponent;
type HoverCard<T> = InstanceType<typeof HoverCard<T>>;
export default HoverCard;
