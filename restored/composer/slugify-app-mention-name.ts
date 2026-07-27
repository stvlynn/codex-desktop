// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Slugify an app display name for mention paths (bundle `f1r`).

/** Lowercase kebab slug; empty input becomes `"app"`. */
export function slugifyAppMentionName(name: string): string {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug === "" ? "app" : slug;
}

/** Computer-use plugin id constant (`u1r` / init `d1r`). */
export const COMPUTER_USE_PLUGIN_NAME = "computer-use";
