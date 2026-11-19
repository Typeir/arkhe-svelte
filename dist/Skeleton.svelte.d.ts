/**
 * Props of Skeleton.
 *
 * @interface Props
 * @property {'line' | 'block'} [shape] - A text line or a block. Defaults to `line`.
 * @property {string} [width] - CSS width. Defaults to the full row.
 * @property {string} [height] - CSS height. Defaults by shape.
 */
interface Props {
    shape?: 'line' | 'block';
    width?: string;
    height?: string;
}
/** Renders one placeholder bar, hidden from assistive technology. */
declare const Skeleton: import("svelte").Component<Props, {}, "">;
type Skeleton = ReturnType<typeof Skeleton>;
export default Skeleton;
