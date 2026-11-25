import type { Sleep } from './sleep.svelte.js';
import type { TooltipProps } from './Tooltip.svelte';
/**
 * Props of LiveTooltip.
 *
 * @interface LiveTooltipProps
 * @property {string} id - Machine id.
 * @property {NonNullable<Sleep['waking']>} waking - What woke the machine; replayed once.
 * @property {Sleep} sleeper - The sleeping trigger: report, hover, press and sleep.
 */
export interface LiveTooltipProps extends Omit<TooltipProps, 'children'> {
    id: string;
    waking: NonNullable<Sleep['waking']>;
    sleeper: Sleep;
}
/**
 * The running half of Tooltip: Zag's tooltip machine, started on the first
 * hover, focus or tap. Hands its trigger props to the sleeping trigger,
 * replays the waking event, and renders the body once opened.
 */
declare const LiveTooltip: import("svelte").Component<LiveTooltipProps, {}, "open">;
type LiveTooltip = ReturnType<typeof LiveTooltip>;
export default LiveTooltip;
