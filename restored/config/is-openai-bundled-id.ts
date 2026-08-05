// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Openai-bundled marketplace id helpers (bundle `Wl`/`j_e`/`A_e`).

import { OPENAI_BUNDLED_ID } from "./openai-bundled-id";

/**
 * Bundle `j_e` / export `Fht` — whether a marketplace name is openai-bundled.
 */
export function isOpenaiBundledId(
  marketplaceName: string | null | undefined,
): boolean {
  return marketplaceName === OPENAI_BUNDLED_ID;
}

/**
 * Bundle `A_e` / export `Nht` — always resolves to the openai-bundled id
 * (build-flavor arg ignored in the bundled body).
 */
export function resolveOpenaiBundledId(_flavor?: unknown): string {
  return OPENAI_BUNDLED_ID;
}
