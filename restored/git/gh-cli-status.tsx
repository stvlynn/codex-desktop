// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Npo`) / export `Sj`.

export type BindBindGhCliStatusPeers = {
  $f: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  HG: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Mpo: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RSe: (...args: unknown[]) => unknown;
  SA: (...args: unknown[]) => unknown;
  U_: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  data: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  host: (...args: unknown[]) => unknown;
  isError: (...args: unknown[]) => unknown;
  isInstalled: (...args: unknown[]) => unknown;
  jpo: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  kpo: (...args: unknown[]) => unknown;
  originUrl: (...args: unknown[]) => unknown;
  origins: (...args: unknown[]) => unknown;
  xA: (...args: unknown[]) => unknown;
};

let peers: BindBindGhCliStatusPeers | null = null;

/** Wire bindBindGhCliStatus peers once companions land. */
export function setBindBindGhCliStatusPeers(next: BindBindGhCliStatusPeers): void {
  peers = next;
}

/**
 * Bundle export `Sj` / internal `Npo`.
 */
export function bindBindGhCliStatus() {
  if (peers == null) {
    throw new Error("bindBindGhCliStatus peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Au(),
      peers.SA(),
      peers._p(),
      peers.kpo(),
      peers.ed(),
      peers.U_(),
      peers.Uf(),
      peers.ap(),
      (jpo = peers.ka(peers.Q, (e) => ({
        gcTime: peers.Hf.INFINITE,
        meta: {
          hostId: peers.e.hostId ?? `local`,
        },
        queryFn: async ({ signal: t }) =>
          peers.gp.github == null
            ? {
                isInstalled: !1,
                isAuthenticated: !1,
              }
            : peers.HG(`gh-cli-status`, peers.e, {
                signal: t,
                source: `git_direct_call`,
              }),
        queryKey: peers.$f(`gh-cli-status`, peers.e),
        staleTime: (e) =>
          peers.e.state.data?.isInstalled === !0 &&
          peers.e.state.data.isAuthenticated === !0
            ? peers.Hf.INFINITE
            : peers.Hf.FIVE_SECONDS,
      }))),
      (Mpo = peers.Oa(
        peers.Q,
        (
          { cwd: e, hostId: t, hostname: n, operationSource: r },
          { get: i },
        ) => {
          let a =
            n == null
              ? i(peers.xA, {
                  params: {
                    dirs: peers.e == null ? [] : [peers.e],
                    hostId: t,
                  },
                  source: r,
                })
              : null;
          if (peers.e != null && a?.data == null)
            return a?.isError === !0 ? `error` : `loading`;
          let o = a?.data?.origins[0]?.originUrl,
            s = n ?? (o == null ? void 0 : peers.RSe(o)?.host),
            c = i(peers.jpo, {
              hostId: t,
              hostname: s,
            });
          return c.isError
            ? `error`
            : c.data == null
              ? `loading`
              : c.data.isInstalled
                ? c.data.isAuthenticated
                  ? `available`
                  : `unauthenticated`
                : `missing`;
        },
      )));
  });
}
