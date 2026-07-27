// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nQl` / export `oa`; companions `eQl`/`kQl`/`AQl`/`jQl`.

import { stripAtPrefix } from "../utils/strip-at-prefix";

const USERNAME_MIN = 3;
const USERNAME_MAX = 20;
const USERNAME_RE = /^[a-z0-9._-]+$/;

export type UsernameValidation =
  | { ok: true; username: string }
  | {
      ok: false;
      reason: "empty" | "tooShort" | "tooLong" | "invalidCharacters";
    };

/** Validate a username after stripping `@`. */
export function validateUsername(raw: string): UsernameValidation {
  const username = stripAtPrefix(raw);
  if (username.length === 0) return { ok: false, reason: "empty" };
  if (username.length < USERNAME_MIN) return { ok: false, reason: "tooShort" };
  if (username.length > USERNAME_MAX) return { ok: false, reason: "tooLong" };
  return USERNAME_RE.test(username)
    ? { ok: true, username }
    : { ok: false, reason: "invalidCharacters" };
}
