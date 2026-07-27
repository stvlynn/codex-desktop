// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zFc`) / export `lf`.

export type LocalThreadActiveConversationBridgePeers = {
  BFc: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  HFc: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  UFc: (...args: unknown[]) => unknown;
  VFc: (...args: unknown[]) => unknown;
  WFc: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  ztr: (...args: unknown[]) => unknown;
};
let peers: LocalThreadActiveConversationBridgePeers | null = null;

/** Wire LocalThreadActiveConversationBridge peers once companions land. */
export function setLocalThreadActiveConversationBridgePeers(
  next: LocalThreadActiveConversationBridgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `lf` / internal `zFc`.
 */
export function LocalThreadActiveConversationBridge(e: unknown) {
  const BFc = peers.BFc;
  if (peers == null) {
    throw new Error(
      "LocalThreadActiveConversationBridge peers are not configured",
    );
  }
  let n = e === undefined ? {} : e;
  let { conversationId, hostId } = n,
    a = peers.Io(peers.hT),
    o = peers.Y(peers.WFc),
    s = a.value.routeKind === "local-thread" ? a.value.conversationId : null,
    c = conversationId ?? s,
    l = conversationId == null ? o : hostId,
    u,
    d;
  u = () => {
    if (!(c == null || l == null))
      return (
        peers.ztr(a, c, l),
        peers.Bf("set-active-conversation", {
          hostId: l,
          conversationId: c,
          active: true,
        }),
        peers.gp.requestUserInputAutoResolution.setConversationPresented?.({
          conversationId: c,
          hostId: l,
          presented: true,
        }),
        () => {
          peers.ztr(a, c, null);
          peers.Bf("set-active-conversation", {
            hostId: l,
            conversationId: c,
            active: false,
          });
          peers.gp.requestUserInputAutoResolution.setConversationPresented?.({
            conversationId: c,
            hostId: l,
            presented: false,
          });
        }
      );
  };
  d = [c, l, a];
  peers.HFc.useLayoutEffect(u, d);
  return c != null && l != null ? <BFc conversationId={c} hostId={l} /> : null;
}
