// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `h5r` / export `AK`.

import { OPENAI_BUNDLED_ID } from "../config/openai-bundled-id";
import { normalizeMarketplaceToken } from "./normalize-marketplace-token";

const OPENAI_CURATED_TOKENS = new Set(
  [
    "codex-official",
    OPENAI_BUNDLED_ID,
    "openai-curated",
    "openai-curated-remote",
    "openai-primary-runtime",
  ].map(normalizeMarketplaceToken),
);

/** True when a marketplace name is an OpenAI curated/official token. */
export function isOpenaiCuratedMarketplaceToken(name: string): boolean {
  return OPENAI_CURATED_TOKENS.has(normalizeMarketplaceToken(name));
}
