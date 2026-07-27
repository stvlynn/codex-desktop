// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `aQ` — pure helper.

import { trimOrEmpty } from "../utils/trim-or-empty";

export type DigitStringParseResult =
  | { kind: "missing" }
  | { kind: "invalid" }
  | { kind: "valid"; value: number };

/** Parse a trimmed digit-only string into a non-negative integer. */
export function parseDigitString(
  value: string | null | undefined,
): DigitStringParseResult {
  const trimmed = trimOrEmpty(value);
  if (trimmed.length === 0) return { kind: "missing" };
  if (!/^\d+$/.test(trimmed)) return { kind: "invalid" };
  return { kind: "valid", value: Number.parseInt(trimmed, 10) };
}
