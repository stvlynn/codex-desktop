// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `X9o` / export `Ow`.

import { marketplacePathsEqual } from "../browser/browser-use-helpers";

/** Local environment path when marketplace paths match; else null. */
export function localPathWhenMarketplaceMatches(
  left: string | null | undefined,
  right: string | null | undefined,
  environment: { type: string; path?: string | null },
): string | null {
  return !marketplacePathsEqual(left, right) || environment.type !== "local"
    ? null
    : (environment.path ?? null);
}
