import type { ToggleItem, ToggleOrientation } from '@arkhe/core';
import type { Snippet } from 'svelte';
/**
 * Props of ToggleGroup.
 *
 * @interface ToggleGroupProps
 * @property {string} label - Accessible name of the group.
 * @property {readonly ToggleItem[]} items - Toggles, in order; a repeated value is dropped.
 * @property {readonly string[]} [value] - Pressed values; bindable.
 * @property {readonly string[]} [defaultValue] - First pressed values when uncontrolled.
 * @property {(value: readonly string[]) => void} [onValueChange] - Reports presses.
 * @property {boolean} [multiple] - Several may be pressed at once.
 * @property {boolean} [deselectable] - A single pressed toggle may be released.
 * @property {ToggleOrientation} [orientation] - Direction. Defaults to `horizontal`.
 * @property {number} [limit] - Toggles shown until the reader asks for more; pressed ones always show.
 * @property {boolean} [clearable] - Adds a clear button while anything is pressed.
 * @property {Snippet<[ToggleItem, boolean]>} [item] - Content of a toggle; it must carry the toggle's name.
 */
export interface ToggleGroupProps {
    label: string;
    items: readonly ToggleItem[];
    value?: readonly string[];
    defaultValue?: readonly string[];
    onValueChange?: (value: readonly string[]) => void;
    multiple?: boolean;
    deselectable?: boolean;
    orientation?: ToggleOrientation;
    limit?: number;
    clearable?: boolean;
    item?: Snippet<[ToggleItem, boolean]>;
}
/**
 * Renders a toggle group: a toolbar of pressed / released buttons with one tab
 * stop, an optional limit with a show more button, and a clear button. Tab
 * enters it once; arrows, Home and End move between its buttons. A disabled
 * toggle stays reachable and ignores presses. `value` binds.
 */
declare const ToggleGroup: import("svelte").Component<ToggleGroupProps, {}, "value">;
type ToggleGroup = ReturnType<typeof ToggleGroup>;
export default ToggleGroup;
