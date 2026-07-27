// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pei` companion for connector helpers.

/** Lowercase kebab slug from an arbitrary plugin/connector token. */
export function slugifyPluginToken(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((part) => part.length > 0)
    .join("-");
}
