// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Tko`) / export `ak`.

export type BindDeferredOnboardingAkPeers = {
  URL: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  import: (...args: unknown[]) => unknown;
  meta: (...args: unknown[]) => unknown;
  wko: (...args: unknown[]) => unknown;
};

let peers: BindDeferredOnboardingAkPeers | null = null;

/** Wire bindDeferredOnboardingAk peers once companions land. */
export function setBindDeferredOnboardingAkPeers(
  next: BindDeferredOnboardingAkPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ak` / internal `Tko`.
 */
export function bindDeferredOnboardingAk() {
  if (peers == null) {
    throw new Error("bindDeferredOnboardingAk peers are not configured");
  }

  return peers.e(() => {
    wko = `` + new peers.URL(`atlas-app-BbZ7-u67.png`, import.meta.url).href;
  });
}
