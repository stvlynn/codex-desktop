// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hrr`) / export `H0`.

export type UseBrowserOpenTargetPeers = {
  AD: (...args: unknown[]) => unknown;
  IEe: (...args: unknown[]) => unknown;
  K_e: (...args: unknown[]) => unknown;
  Urr: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  bp: (...args: unknown[]) => unknown;
  hXt: (...args: unknown[]) => unknown;
  jrr: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
};

let peers: UseBrowserOpenTargetPeers | null = null;

/** Wire useBrowserOpenTarget peers once companions land. */
export function setUseBrowserOpenTargetPeers(
  next: UseBrowserOpenTargetPeers,
): void {
  peers = next;
}

/**
 * Bundle export `H0` / internal `Hrr`.
 */
export function useBrowserOpenTarget(e: unknown) {
  if (peers == null) {
    throw new Error("useBrowserOpenTarget peers are not configured");
  }

  let t = (0, peers.Urr.c)(9),
    {
      href: n,
      isBrowserSidebarEnabled: r,
      openTarget: i,
      openTargetIntent: a,
      useExternalBrowser: o,
    } = e,
    s = peers.Y(peers.AD),
    c = r ?? s,
    l = peers.kh(`1834314516`),
    u = peers.jrr(),
    d = peers.bp(peers.IEe.openLocalUrlInTargetPreference),
    f;
  return (
    t[0] !== n ||
    t[1] !== c ||
    t[2] !== l ||
    t[3] !== u ||
    t[4] !== d ||
    t[5] !== i ||
    t[6] !== a ||
    t[7] !== o
      ? ((f = peers.K_e({
          browserPaneEnabled: c,
          linksDefaultInAppBrowser: l,
          openLinkInTargetPreference: u,
          openLocalUrlInTargetPreference: d,
          openTarget: i,
          openTargetIntent: a,
          url: peers.hXt(n),
          useExternalBrowser: o,
        })),
        (t[0] = n),
        (t[1] = c),
        (t[2] = l),
        (t[3] = u),
        (t[4] = d),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o),
        (t[8] = f))
      : (f = t[8]),
    f
  );
}
