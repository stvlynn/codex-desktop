// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gKr`) / export `MX`.

export type BindCodexProfileDropdownOpenConfigTomlPeers = {
  Ho: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hKr: (...args: unknown[]) => unknown;
  pKr: (...args: unknown[]) => unknown;
};

let peers: BindCodexProfileDropdownOpenConfigTomlPeers | null = null;

/** Wire bindCodexProfileDropdownOpenConfigToml peers once companions land. */
export function setBindCodexProfileDropdownOpenConfigTomlPeers(next: BindCodexProfileDropdownOpenConfigTomlPeers): void {
  peers = next;
}

/**
 * Bundle export `MX` / internal `gKr`.
 */
export function bindCodexProfileDropdownOpenConfigToml() {
  if (peers == null) {
    throw new Error("bindCodexProfileDropdownOpenConfigToml peers are not configured");
  }

  return peers.e(() => {
    hKr = peers.c(), peers.Ho(), peers.pKr();
  });
}
