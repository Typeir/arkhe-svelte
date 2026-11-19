/**
 * Props of Icon.
 *
 * @interface Props
 * @property {string} name - Lucide name, e.g. `triangle-alert`.
 * @property {string} [label] - Accessible name; without it the icon is decorative.
 */
interface Props {
    name: string;
    label?: string;
}
/**
 * Draws the icon named `name` from the app's sets, then the bundled Lucide
 * default. Only Icon imports Lucide, so components without icons skip it. An
 * unknown name renders an empty slot marked `data-missing`.
 */
declare const Icon: import("svelte").Component<Props, {}, "">;
type Icon = ReturnType<typeof Icon>;
export default Icon;
