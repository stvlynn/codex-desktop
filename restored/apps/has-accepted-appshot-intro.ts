// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Sis`) / export `xC`.

export type HasAcceptedAppshotIntroPeers = {
  Gk: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  xis: (...args: unknown[]) => unknown;
  yis: (...args: unknown[]) => unknown;
};

let peers: HasAcceptedAppshotIntroPeers | null = null;

/** Wire hasAcceptedAppshotIntro peers once companions land. */
export function setHasAcceptedAppshotIntroPeers(
  next: HasAcceptedAppshotIntroPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xC` / internal `Sis`.
 */
export function hasAcceptedAppshotIntro() {
  if (peers == null) {
    throw new Error("hasAcceptedAppshotIntro peers are not configured");
  }

  return peers.e(() => {
    (peers.Gk(),
      peers.Yf(),
      peers.Im(),
      peers.yis(),
      (xis = peers.Pm(`has-accepted-appshot-intro`, !1)));
  });
}
