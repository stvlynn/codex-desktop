// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `PEs`) / export `Vv`.

export type BindDeferredVvPeers = {
  AEs: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Gk: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  MEs: (...args: unknown[]) => unknown;
  NEs: (...args: unknown[]) => unknown;
  Nw: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  SEs: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  TEs: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Uh: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  bEs: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fb: (...args: unknown[]) => unknown;
  jEs: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  vTs: (...args: unknown[]) => unknown;
  xM: (...args: unknown[]) => unknown;
};

let peers: BindDeferredVvPeers | null = null;

/** Wire bindDeferredVv peers once companions land. */
export function setBindDeferredVvPeers(next: BindDeferredVvPeers): void {
  peers = next;
}

/**
 * Bundle export `Vv` / internal `PEs`.
 */
export function bindDeferredVv() {
  if (peers == null) {
    throw new Error("bindDeferredVv peers are not configured");
  }

  return peers.e(() => {
    ((AEs = peers.c()),
      peers.Ho(),
      peers.Nw(),
      peers.Sl(),
      peers.xM(),
      peers.vTs(),
      peers.fb(),
      peers.Gk(),
      peers.bEs(),
      peers.ed(),
      peers.Fh(),
      peers.Uf(),
      peers.Wh(),
      peers.qx(),
      peers.SEs(),
      peers.TEs(),
      (jEs = `1640366510`),
      (MEs = peers.sl({
        email_domain_type: peers.X(),
      })),
      (NEs = peers.ka(peers.Q, (e) => ({
        queryKey: [`professional-email-domain`, peers.e],
        queryFn: async () => {
          let e = peers.MEs.safeParse(await peers.Uh.safeGet(`/me`));
          return (
            peers.e.success && peers.e.data.email_domain_type === `professional`
          );
        },
        retry: !1,
        staleTime: peers.Hf.INFINITE,
      }))));
  });
}
