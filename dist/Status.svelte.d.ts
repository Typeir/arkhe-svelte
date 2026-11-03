import { type StatusKind } from '@arkhe/core';
import type { Snippet } from 'svelte';
/**
 * Props of Status.
 *
 * @interface Props
 * @property {StatusKind} kind - Kind of status.
 * @property {Snippet} [children] - Text; defaults to the kind's label.
 */
interface Props {
    kind: StatusKind;
    children?: Snippet;
}
/**
 * Renders a status line: empty, loading, error or info. The app announcer
 * speaks its text on mount and on each change; errors interrupt, the rest wait.
 */
declare const Status: import("svelte").Component<Props, {}, "">;
type Status = ReturnType<typeof Status>;
export default Status;
