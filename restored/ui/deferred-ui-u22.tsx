// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `drr`) / export `u2`.

export type BindBindDeferredUiU22Peers = {
  CD: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qtr: (...args: unknown[]) => unknown;
  eD: (...args: unknown[]) => unknown;
  kind: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  turnHistory: (...args: unknown[]) => unknown;
  urr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiU22Peers | null = null;

/** Wire bindBindDeferredUiU22 peers once companions land. */
export function setBindBindDeferredUiU22Peers(next: BindBindDeferredUiU22Peers): void {
  peers = next;
}

/**
 * Bundle export `u2` / internal `drr`.
 */
export function bindBindDeferredUiU22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiU22 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t, scope: n }) => {
    let { conversationId: r, entityKey: i } = e,
      a = peers.Qtr.get(n.node);
    a ?? ((a = new Map()), peers.Qtr.set(n.node, a));
    let o = a.get(r);
    if ((o ?? ((o = new Set()), a.set(r, o)), o.add(e), i == null)) return null;
    let s = t(peers.rD, r),
      c = (s == null ? null : t(peers.eD, s)) ?? t(peers.CD, r);
    if (c == null) return null;
    let { entityVersionByKey$: l, fullResetVersionByConversationId$: u } = t(
      peers.urr,
      c.getHostId(),
    );
    (t(u(r)),
      t(
        l({
          conversationId: r,
          entityKey: i,
        }),
      ));
    let d = c.getConversation(r);
    return d?.turnHistory?.kind === `canonical`
      ? (d.turnHistory.history.entitiesByKey[i] ?? null)
      : null;
  });
}
