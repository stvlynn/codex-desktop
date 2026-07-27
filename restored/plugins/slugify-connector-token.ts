// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pei` companion for `BG` / `zG` / `LG`.

/** Slugify a connector/plugin token into lowercase kebab segments. */
export function slugifyConnectorToken(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((part) => part.length > 0)
    .join("-");
}
