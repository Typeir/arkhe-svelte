/**
 * @fileoverview The ground a tab set's panels leave for tab sets inside
 * them, passed down by context so folder tabs alternate as they nest.
 *
 * @module packages/svelte/src/section/tabsGround
 * @version 1.0.0
 * @author Typeir
 * @since 0.4.0
 */
import { type TabsGround } from '@arkhe/core';
/**
 * Leaves `inner` as the ground for tab sets inside this one. Call during
 * component initialisation.
 *
 * @function provideTabsGround
 * @param {() => TabsGround} inner - Ground inside the panels.
 * @returns {void}
 */
export declare function provideTabsGround(inner: () => TabsGround): void;
/**
 * Reads the ground the nearest enclosing tab set leaves; the page's with
 * none. Call during component initialisation.
 *
 * @function useTabsGround
 * @returns {() => TabsGround} Current ground.
 */
export declare function useTabsGround(): () => TabsGround;
