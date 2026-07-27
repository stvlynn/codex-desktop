// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Upo`) / export `yj`.

export type BindBindDiffCommentsPeers = {
  Bpo: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Hpo: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R_: (...args: unknown[]) => unknown;
  Vpo: (...args: unknown[]) => unknown;
  a_: (...args: unknown[]) => unknown;
  c_: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  oT: (...args: unknown[]) => unknown;
  zJn: (...args: unknown[]) => unknown;
  z_: (...args: unknown[]) => unknown;
};

let peers: BindBindDiffCommentsPeers | null = null;

/** Wire bindBindDiffComments peers once companions land. */
export function setBindBindDiffCommentsPeers(next: BindBindDiffCommentsPeers): void {
  peers = next;
}

/**
 * Bundle export `yj` / internal `Upo`.
 */
export function bindBindDiffComments() {
  if (peers == null) {
    throw new Error("bindBindDiffComments peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.c_(), peers.ed(), peers.oT(), peers.z_(), Vpo = [], Hpo = peers.Oa(peers.Q, (e, {
      get: t
    }) => peers.e == null ? peers.Vpo : peers.R_(t, `diff_comments`)?.[peers.e] ?? peers.Vpo), peers.zJn((e, {
      clientThreadId: t,
      conversationId: n
    }) => {
      let r = peers.e.get(peers.Hpo, t);
      r.length !== 0 && (peers.Bpo(peers.e, n, e => {
        let t = new Set(peers.e.map(peers.a_)),
          n = r.filter(e => {
            let n = peers.a_(peers.e);
            return t.has(n) ? !1 : (t.add(n), !0);
          });
        return n.length === 0 ? peers.e : [...peers.e, ...n];
      }), peers.Bpo(peers.e, t, []));
    });
  });
}
