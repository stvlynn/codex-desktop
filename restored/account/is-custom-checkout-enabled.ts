// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Statsig gate lookup for embedded / custom credit checkout (`STs` / `dy`).

import {
  PERSONAL_CUSTOM_CHECKOUT_LAYER_ID,
  WORKSPACE_CUSTOM_CHECKOUT_LAYER_ID,
} from "../feature-gates/feature-gate-ids";

/** Personal vs workspace credit-checkout layer ids (`OTs`). */
export const CUSTOM_CHECKOUT_LAYER_IDS = {
  personal: PERSONAL_CUSTOM_CHECKOUT_LAYER_ID,
  workspace: WORKSPACE_CUSTOM_CHECKOUT_LAYER_ID,
} as const;

export type CustomCheckoutAudience = keyof typeof CUSTOM_CHECKOUT_LAYER_IDS;

export type StatsigLayerLike = {
  get(key: string, defaultValue: boolean): boolean;
};

export type StatsigClientLike = {
  getLayer(
    layerId: string,
    options?: { disableExposureLog?: boolean },
  ): StatsigLayerLike;
};

/**
 * Bundle `STs` / export `dy`.
 * Reads `is_custom_checkout_enabled` from the audience-specific Statsig layer.
 */
export function isCustomCheckoutEnabled(statsigClient: StatsigClientLike, audience: CustomCheckoutAudience): boolean {
  return statsigClient
    .getLayer(CUSTOM_CHECKOUT_LAYER_IDS[audience], {
      disableExposureLog: false,
    })
    .get("is_custom_checkout_enabled", false);
}
