// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JHr`) / export `cZ`.

export type BindDataAppShellFocusAreaPeers = {
  GHr: (...args: unknown[]) => unknown;
  KHr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  qHr: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindDataAppShellFocusAreaPeers | null = null;

/** Wire bindDataAppShellFocusArea peers once companions land. */
export function setBindDataAppShellFocusAreaPeers(next: BindDataAppShellFocusAreaPeers): void {
  peers = next;
}

/**
 * Bundle export `cZ` / internal `JHr`.
 */
export function bindDataAppShellFocusArea() {
  if (peers == null) {
    throw new Error("bindDataAppShellFocusArea peers are not configured");
  }

  return peers.e(() => {
    GHr = peers.r(peers.o(), 1), KHr = (0, peers.GHr.createContext)({
      current: null
    }), qHr = (0, peers.GHr.createContext)(null);
  });
}
