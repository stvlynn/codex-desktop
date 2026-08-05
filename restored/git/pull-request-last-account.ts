// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yac`) / export `Bp`.

export type PullRequestLastAccountPeers = {
  B8s: (...args: unknown[]) => unknown;
  Fm: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  _ac: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fac: (...args: unknown[]) => unknown;
  gac: (...args: unknown[]) => unknown;
  hac: (...args: unknown[]) => unknown;
  mac: (...args: unknown[]) => unknown;
  pac: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  vac: (...args: unknown[]) => unknown;
};

let peers: PullRequestLastAccountPeers | null = null;

/** Wire pullRequestLastAccount peers once companions land. */
export function setPullRequestLastAccountPeers(
  next: PullRequestLastAccountPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Bp` / internal `yac`.
 */
export function pullRequestLastAccount() {
  if (peers == null) {
    throw new Error("pullRequestLastAccount peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers.Im(),
      peers.B8s(),
      (fac = `/pull-requests`),
      (pac = /^\/pull-requests\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)$/u),
      (mac = peers.sl({
        route: peers.X().nullable(),
      })),
      (hac = peers.sl({
        hostId: peers.X().min(1),
        hostname: peers.X().min(1),
        login: peers.X().min(1),
      })),
      (gac = peers.sl({
        hostId: peers.X().min(1),
        hostname: peers.X().min(1),
      })),
      (_ac = peers.Fm((e) => `pull-request-view:${peers.e}`, null)),
      (vac = peers.Pm(`pull-request-last-account`, null)));
  });
}
