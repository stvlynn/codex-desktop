// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `w$r`) / export `VJ`.

export type BindDeferredConversationVJPeers = {
  C$r: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  b$r: (...args: unknown[]) => unknown;
  c$r: (...args: unknown[]) => unknown;
  current_assistant_turn: (...args: unknown[]) => unknown;
  d$r: (...args: unknown[]) => unknown;
  f$r: (...args: unknown[]) => unknown;
  h$r: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  u$r: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationVJPeers | null = null;

/** Wire bindDeferredConversationVJ peers once companions land. */
export function setBindDeferredConversationVJPeers(
  next: BindDeferredConversationVJPeers,
): void {
  peers = next;
}

/**
 * Bundle export `VJ` / internal `w$r`.
 */
export function bindDeferredConversationVJ() {
  if (peers == null) {
    throw new Error("bindDeferredConversationVJ peers are not configured");
  }

  return peers.Ma(peers.hT, ({ get: e }) => {
    let { data: t } = e(peers.b$r),
      n = t?.current_assistant_turn;
    if (n && !n.discarded) return n;
    let r = e(peers.C$r);
    if (!n) {
      let e = peers.h$r(peers.u$r(r), peers.d$r(r)).at(-1);
      return e ? peers.f$r(e.node.assistantTurns, e.activeId) : null;
    }
    return (
      peers.f$r(
        r.filter(
          (e) => !peers.c$r(e) && e.previous_turn_id === n.previous_turn_id,
        ),
        n.id,
      ) ?? n
    );
  });
}
