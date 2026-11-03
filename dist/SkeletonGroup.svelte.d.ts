import { type Snippet } from 'svelte';
/**
 * Props of SkeletonGroup.
 *
 * @interface Props
 * @property {boolean} loading - True: show `skeleton` and animate. False: show `children` and reveal them.
 * @property {Snippet} skeleton - Shapes in the final layout's shape.
 * @property {Snippet} [children] - The real content, mounted only once loading ends.
 * @property {boolean} [effect] - False keeps the CSS skeleton for this group. Defaults to true.
 * @property {() => void} [onRevealed] - Called when the reveal has finished, or at once without an effect.
 */
interface Props {
    loading: boolean;
    skeleton: Snippet;
    children?: Snippet;
    effect?: boolean;
    onRevealed?: () => void;
}
/**
 * Owns a skeleton and its content. While loading, its only text is the hidden
 * `loading` label, which the announcer speaks. The engine attaches on mount and
 * whenever loading starts, is told the content is ready in an effect, which
 * runs after the DOM update and before paint, so the cover paints first, and
 * detaches on unmount. Without a loaded engine the content just shows.
 */
declare const SkeletonGroup: import("svelte").Component<Props, {}, "">;
type SkeletonGroup = ReturnType<typeof SkeletonGroup>;
export default SkeletonGroup;
