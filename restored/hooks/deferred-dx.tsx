// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `EM`) / export `DX`.

export type BindBindDeferredDXPeers = {
  Ft: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Ra: (...args: unknown[]) => unknown;
  SKr: (...args: unknown[]) => unknown;
  TM: (...args: unknown[]) => unknown;
  U8n: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  bKr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  wM: (...args: unknown[]) => unknown;
  xKr: (...args: unknown[]) => unknown;
  yE: (...args: unknown[]) => unknown;
  yKr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredDXPeers | null = null;

/** Wire bindBindDeferredDX peers once companions land. */
export function setBindBindDeferredDXPeers(
  next: BindBindDeferredDXPeers,
): void {
  peers = next;
}

/**
 * Bundle export `DX` / internal `EM`.
 */
export function bindBindDeferredDX() {
  if (peers == null) {
    throw new Error("bindBindDeferredDX peers are not configured");
  }

  return peers.e(() => {
    (peers.Qt(),
      peers.Ho(),
      peers.yE(),
      peers._p(),
      peers.yKr(),
      peers.ed(),
      peers.Uf(),
      (TM = peers.ka(peers.Q, (e) =>
        peers.Ft({
          queryKey: peers.bKr(peers.e),
          queryFn: ({ signal: t }) => peers.xKr(peers.e, t),
          staleTime: peers.Hf.ONE_MINUTE,
        }),
      )),
      (SKr = peers.Ra(peers.Q, ({ scope: e }) => ({
        mutationFn: async (e) =>
          peers.wM(peers.gp.openIn.setGlobalPreferredTarget(peers.e)),
        networkMode: `always`,
        onSuccess: async (t, { target: n }) => {
          let r = peers.e.query.snapshot(peers.TM, {
            cwd: null,
          });
          (r.setData((e) =>
            peers.e == null
              ? peers.e
              : {
                  ...peers.e,
                  preferredTarget: n,
                },
          ),
            await peers.U8n(peers.e.queryClient, r.queryKey));
        },
      }))));
  });
}
