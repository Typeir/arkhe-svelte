import type { HoverCardProps } from './HoverCard.svelte';
import type { Sleep } from './sleep.svelte.js';
/**
 * Props of LiveHoverCard.
 *
 * @interface LiveHoverCardProps
 * @template T
 * @property {string} id - Machine id.
 * @property {NonNullable<Sleep['waking']>} waking - What woke the machine; replayed once.
 * @property {Sleep} sleeper - The sleeping trigger: report, hover, press and sleep.
 */
export interface LiveHoverCardProps<T> extends Omit<HoverCardProps<T>, 'children'> {
    id: string;
    waking: NonNullable<Sleep['waking']>;
    sleeper: Sleep;
}
declare function $$render<T>(): {
    props: LiveHoverCardProps<T>;
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
 * The running half of HoverCard: Zag's hover-card machine, started on the
 * first hover, focus or tap. Hands its trigger props to the sleeping trigger,
 * replays the waking event, and renders the card once opened: pinning,
 * moving, loading and nested cards all live here.
 */
declare const LiveHoverCard: $$IsomorphicComponent;
type LiveHoverCard<T> = InstanceType<typeof LiveHoverCard<T>>;
export default LiveHoverCard;
