// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `V_s` / export `Vb`.

import { normalizeLimitName } from "../utils/normalize-limit-name";

/** Find a rate-limit row by normalized limitName. */
export function findRateLimitByName<T extends { limitName?: string | null }>(
  limits: T[],
  limitName: string | null | undefined,
): T | null {
  const needle = normalizeLimitName(limitName);
  if (needle == null) return null;
  return (
    limits.find((row) => normalizeLimitName(row.limitName) === needle) ?? null
  );
}
