// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tQl` / export `aa`.
// Constants: AQl=20, MQl=/\s/g.

const USERNAME_MAX_LEN = 20;
const WHITESPACE_RE = /\s/g;

/** Strip whitespace and clamp username draft length. */
export function sanitizeUsernameInput(value: string): string {
  return value.replace(WHITESPACE_RE, "").slice(0, USERNAME_MAX_LEN);
}
