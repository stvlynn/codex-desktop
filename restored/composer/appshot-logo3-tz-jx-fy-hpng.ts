// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gis`) / export `wC`.

export type BindAppshotLogo3TzJxFyHPngPeers = {
  URL: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  his: (...args: unknown[]) => unknown;
  import: (...args: unknown[]) => unknown;
  meta: (...args: unknown[]) => unknown;
};

let peers: BindAppshotLogo3TzJxFyHPngPeers | null = null;

/** Wire bindAppshotLogo3TzJxFyHPng peers once companions land. */
export function setBindAppshotLogo3TzJxFyHPngPeers(
  next: BindAppshotLogo3TzJxFyHPngPeers,
): void {
  peers = next;
}

/**
 * Bundle export `wC` / internal `gis`.
 */
export function bindAppshotLogo3TzJxFyHPng() {
  if (peers == null) {
    throw new Error("bindAppshotLogo3TzJxFyHPng peers are not configured");
  }

  return peers.e(() => {
    his = `` + new peers.URL(`appshot-logo-3TzJxFyH.png`, import.meta.url).href;
  });
}
