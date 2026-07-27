// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `YGt` / export `Hnt`.

/** Basename of a URL path (strips hash/query first). */
export function urlPathBasename(urlOrPath: string): string {
  const [withoutHashQuery] = urlOrPath.split(/[#?]/u, 1);
  const value = withoutHashQuery ?? urlOrPath;
  return value.substring(value.lastIndexOf("/") + 1);
}
