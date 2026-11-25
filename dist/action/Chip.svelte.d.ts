/**
 * Colour of a chip.
 *
 * @typedef {'neutral' | 'accent' | 'emphasis' | 'warning' | 'danger'} ChipTone
 */
export type ChipTone = 'neutral' | 'accent' | 'emphasis' | 'warning' | 'danger';
/**
 * Props of Chip.
 *
 * @interface ChipProps
 * @property {string} label - Text.
 * @property {ChipTone} [tone] - Colour. Defaults to `neutral`.
 * @property {string} [icon] - Lucide name of a leading icon.
 * @property {() => void} [onRemove] - Shows a remove button that calls this.
 */
export interface ChipProps {
    label: string;
    tone?: ChipTone;
    icon?: string;
    onRemove?: () => void;
}
/**
 * Renders a chip. The remove button's name comes from the `chipRemove` label;
 * when the host drops the chip, focus moves to the next chip's remove button.
 */
declare const Chip: import("svelte").Component<ChipProps, {}, "">;
type Chip = ReturnType<typeof Chip>;
export default Chip;
