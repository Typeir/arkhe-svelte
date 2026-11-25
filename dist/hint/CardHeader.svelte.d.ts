import type { Snippet } from 'svelte';
/**
 * Props of CardHeader.
 *
 * @interface CardHeaderProps
 * @property {string} title - Card title; names the buttons.
 * @property {string} titleId - Id of the title, which names the card.
 * @property {string} [href] - Address of the built-in link.
 * @property {Snippet} [actions] - Host controls of the card's chrome.
 * @property {boolean} pinnable - Shows the pin button.
 * @property {boolean} pinned - The card is pinned.
 * @property {() => void} onTogglePin - Pins or unpins.
 * @property {() => void} onClose - Closes a pinned card.
 * @property {boolean} detached - The card is dragged free.
 * @property {(value: string) => void} onMove - A move menu choice: a corner or back.
 */
export interface CardHeaderProps {
    title: string;
    titleId: string;
    href?: string;
    actions?: Snippet;
    pinnable: boolean;
    pinned: boolean;
    onTogglePin: () => void;
    onClose: () => void;
    detached: boolean;
    onMove: (value: string) => void;
}
/**
 * Renders a hover card's header: the grip that drags the card and opens its move
 * menu, its small chrome title, the host's actions, then the built-in link, pin
 * and close buttons. Not exported: HoverCard draws it.
 */
declare const CardHeader: import("svelte").Component<CardHeaderProps, {}, "">;
type CardHeader = ReturnType<typeof CardHeader>;
export default CardHeader;
