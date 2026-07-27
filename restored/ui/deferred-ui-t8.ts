// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wYn`) / export `T8`.

export type BindDeferredUiT8Peers = {
  $Te: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  CYn: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  SYn: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  _Yn: (...args: unknown[]) => unknown;
  cT: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  lT: (...args: unknown[]) => unknown;
  sT: (...args: unknown[]) => unknown;
  uT: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiT8Peers | null = null;

/** Wire bindDeferredUiT8 peers once companions land. */
export function setBindDeferredUiT8Peers(next: BindDeferredUiT8Peers): void {
  peers = next;
}

/**
 * Bundle export `T8` / internal `wYn`.
 */
export function bindDeferredUiT8() {
  if (peers == null) {
    throw new Error("bindDeferredUiT8 peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.Au(), peers._Yn(), peers.ed(), cT = peers.Ta(peers.Q, () => ({})), lT = peers.Ma(peers.Q, ({
      get: e
    }) => peers.e(peers.sT, peers.$Te).data === !0), uT = peers.lT, SYn = peers.Oa(peers.Q, (e, {
      get: t
    }) => {
      let n = t(peers.cT)[peers.e] ?? [];
      return t(peers.uT) || n.length > 0;
    }), CYn = peers.Oa(peers.Q, ({
      browserTabId: e,
      conversationId: t
    }, {
      get: n
    }) => {
      let r = n(peers.cT)[t] ?? [];
      return n(peers.uT) || r.includes(peers.e);
    });
  });
}
