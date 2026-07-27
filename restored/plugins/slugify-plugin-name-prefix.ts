// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `A6r` companion for export `yK` (strip email-prefix then slugify).

/** Slugify the local-part before `@`, else the full string. */
export function slugifyPluginNamePrefix(value: string): string {
  return (value.split("@")[0] ?? "")
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((part) => part.length > 0)
    .join("-");
}
