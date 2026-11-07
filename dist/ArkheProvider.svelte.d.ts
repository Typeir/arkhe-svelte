import { type ArkheLabels, type EffectsSetting, type IconSet } from '@arkhe/core';
import { type Snippet } from 'svelte';
import { type IconComponent, type LinkComponent } from './context.js';
/**
 * Props of ArkheProvider.
 *
 * @interface Props
 * @property {Partial<ArkheLabels>} [labels] - Translated label templates.
 * @property {string} [locale] - BCP 47 locale for plurals and numbers. Defaults to `en`.
 * @property {IconSet<IconComponent>} [icons] - Icons by Lucide name; win over Lucide.
 * @property {LinkComponent} [link] - Link renderer. Defaults to `a`.
 * @property {EffectsSetting} [effects] - Canvas effect options, or `false` for CSS skeletons everywhere. Read once.
 * @property {Snippet} children - App subtree.
 */
interface Props {
    labels?: Partial<ArkheLabels>;
    locale?: string;
    icons?: IconSet<IconComponent>;
    link?: LinkComponent;
    effects?: EffectsSetting;
    children: Snippet;
}
/**
 * Supplies labels, icons, the link renderer, the announcer and the effect
 * engine to every Arkhé component below. Mounts the announcer's live regions
 * with itself, and destroys its engine with itself.
 */
declare const ArkheProvider: import("svelte").Component<Props, {}, "">;
type ArkheProvider = ReturnType<typeof ArkheProvider>;
export default ArkheProvider;
