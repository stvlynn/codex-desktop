// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Open-file cache key for review source tabs (bundle `jWi` / export `tH`).

export type OpenFileCacheKeyArgs = {
  hostId: string;
  path: string;
};

/** Stable `\0`-joined cache key for a host-scoped open file. */
export function buildOpenFileCacheKey({
  hostId,
  path,
}: OpenFileCacheKeyArgs): string {
  return `${hostId}\0${path}`;
}
