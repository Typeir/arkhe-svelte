/**
 * Props of Chip.
 *
 * @interface Props
 * @property {string} label - Text.
 * @property {'neutral' | 'accent' | 'emphasis' | 'warning' | 'danger'} [tone] - Colour. Defaults to `neutral`.
 * @property {string} [icon] - Lucide name of a leading icon.
 * @property {() => void} [onRemove] - Shows a remove button that calls this.
 */
interface Props {
    label: string;
    tone?: 'neutral' | 'accent' | 'emphasis' | 'warning' | 'danger';
    icon?: string;
    onRemove?: () => void;
}
/**
 * Renders a chip. The remove button's name comes from the `chipRemove` label;
 * when the host drops the chip, focus moves to the next chip's remove button.
 */
declare const Chip: import("svelte").Component<Props, {}, "">;
type Chip = ReturnType<typeof Chip>;
export default Chip;
