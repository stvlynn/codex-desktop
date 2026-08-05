// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `G$o`) / export `gE`.

export type OpenThreadBrowserSidePanelTabWithoutAnimationPeers = {
  Jar: (...args: unknown[]) => unknown;
  SY: (...args: unknown[]) => unknown;
  Z$o: (...args: unknown[]) => unknown;
  browserConversationId: (...args: unknown[]) => unknown;
  browserTabId: (...args: unknown[]) => unknown;
  eL: (...args: unknown[]) => unknown;
  iL: (...args: unknown[]) => unknown;
  qar: (...args: unknown[]) => unknown;
  target: (...args: unknown[]) => unknown;
  yT: (...args: unknown[]) => unknown;
};

let peers: OpenThreadBrowserSidePanelTabWithoutAnimationPeers | null = null;

/** Wire openThreadBrowserSidePanelTabWithoutAnimation peers once companions land. */
export function setOpenThreadBrowserSidePanelTabWithoutAnimationPeers(
  next: OpenThreadBrowserSidePanelTabWithoutAnimationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gE` / internal `G$o`.
 */
export function openThreadBrowserSidePanelTabWithoutAnimation(
  e: unknown,
  t: unknown,
  n: unknown = `right`,
) {
  if (peers == null) {
    throw new Error(
      "openThreadBrowserSidePanelTabWithoutAnimation peers are not configured",
    );
  }
  let r = t?.browserConversationId ?? peers.yT(e);
  if (r == null) return !1;
  let i = peers.Z$o(e, r, t?.browserTabId),
    a = peers.iL(e, r, i, n)?.target ?? n;
  if (
    !peers.SY(
      e,
      !1,
      {
        ...t,
        browserConversationId: r,
        browserTabId: i,
      },
      a,
    ) ||
    !peers.eL(e, a, i)
  )
    return !1;
  let o = e.get(a === `bottom` ? peers.qar : peers.Jar);
  return (o.stop(), o.set(1), !0);
}
