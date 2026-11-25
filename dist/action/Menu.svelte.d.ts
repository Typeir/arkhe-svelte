import type { MenuEntry, Placement } from '@arkhe/core';
/**
 * Props of Menu.
 *
 * @interface MenuProps
 * @property {string} trigger - Text of the open button; its accessible name when `icon` is set.
 * @property {string} [icon] - Lucide name; makes the open button icon-only.
 * @property {readonly MenuEntry[]} items - Actions and separators.
 * @property {(value: string) => void} onSelect - Called with the chosen action.
 * @property {Placement} [placement] - Side. Defaults to `bottom-start`.
 */
export interface MenuProps {
    trigger: string;
    icon?: string;
    items: readonly MenuEntry[];
    onSelect: (value: string) => void;
    placement?: Placement;
}
/**
 * Renders a menu button and its action list, on Zag's menu machine, portalled
 * into the environment's container once mounted on the client. Arrow keys,
 * Home, End and typeahead move; focus returns to the button on close.
 */
declare const Menu: import("svelte").Component<MenuProps, {}, "">;
type Menu = ReturnType<typeof Menu>;
export default Menu;
