// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qm`) / export `Klt`.

export type BindCodexDismissTooltipsPeers = {
  H7e: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  U7e: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindCodexDismissTooltipsPeers | null = null;

/** Wire bindCodexDismissTooltips peers once companions land. */
export function setBindCodexDismissTooltipsPeers(
  next: BindCodexDismissTooltipsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Klt` / internal `qm`.
 */
export function bindCodexDismissTooltips() {
  if (peers == null) {
    throw new Error("bindCodexDismissTooltips peers are not configured");
  }

  return peers.e(() => {
    ((H7e = peers.c()), peers.sd(), (U7e = peers.J()));
  });
}
