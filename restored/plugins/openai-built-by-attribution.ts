// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ges` / export `cw`.

import { isOpenaiCuratedMarketplaceToken } from "./is-openai-curated-marketplace-token";

/** Replace curated marketplace labels with Built by OpenAI. */
export function openaiBuiltByAttribution(label: string): string {
  return isOpenaiCuratedMarketplaceToken(label) ? "Built by OpenAI" : label;
}
