// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Build ChatGPT Codex credits checkout URLs (`yTs` / export `py`).

import { CHATGPT_CODEX_ROOT_URL } from "../docs/chatgpt-codex-root-url";

export type BuildCreditsPurchaseUrlOptions = {
  /** When `false`, force-disable auto top-up on the checkout page. */
  autoTopUpEnabled?: boolean;
  /** Analytics / funnel source query param (default `codex`). */
  source?: string;
};

/**
 * Bundle `yTs` / export `py`.
 * `${Uo}/purchase/credits?quantity=…&source=…&checkout_from=codex_app`.
 */
export function buildCreditsPurchaseUrl(
  quantity: string,
  { autoTopUpEnabled, source = "codex" }: BuildCreditsPurchaseUrlOptions = {},
): string {
  const url = new URL(`${CHATGPT_CODEX_ROOT_URL}/purchase/credits`);
  url.searchParams.set("quantity", quantity);
  url.searchParams.set("source", source);
  url.searchParams.set("checkout_from", "codex_app");
  if (autoTopUpEnabled === false) {
    url.searchParams.set("auto_top_up_enabled", "false");
  }
  return url.toString();
}
