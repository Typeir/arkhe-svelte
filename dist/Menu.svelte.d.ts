import { type MenuEntry, type Placement } from '@arkhe/core';
/**
 * Props of Menu.
 *
 * @interface Props
 * @property {string} trigger - Text of the open button.
 * @property {readonly MenuEntry[]} items - Actions and separators.
 * @property {(value: string) => void} onSelect - Called with the chosen action.
 * @property {Placement} [placement] - Side. Defaults to `bottom-start`.
 */
interface Props {
    trigger: string;
    items: readonly MenuEntry[];
    onSelect: (value: string) => void;
    placement?: Placement;
}
/**
 * Renders a menu button and its action list, on Zag's menu machine, portalled
 * into the environment's container. Arrow keys, Home, End and typeahead move;
 * focus returns to the button on close.
 */
declare const Menu: import("svelte").Component<Props, {}, "">;
type Menu = ReturnType<typeof Menu>;
export default Menu;
