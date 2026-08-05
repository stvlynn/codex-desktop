// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hE`) / export `g3`.

export type RateLimitStatusPeers = {
  Ho: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qf: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  Xf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  mE: (...args: unknown[]) => unknown;
  Hf: { ONE_MINUTE: number; FIVE_MINUTES?: number; [k: string]: unknown };
  Uh: {
    safeGet: (...args: unknown[]) => Promise<unknown>;
    [k: string]: unknown;
  };
};

let peers: RateLimitStatusPeers | null = null;

/** Wire rateLimitStatus peers once companions land. */
export function setRateLimitStatusPeers(next: RateLimitStatusPeers): void {
  peers = next;
}

/**
 * Bundle export `g3` / internal `hE`.
 */
export function rateLimitStatus() {
  if (peers == null) {
    throw new Error("rateLimitStatus peers are not configured");
  }
  return peers.e(() => {
    (peers.Ho(),
      peers.ed(),
      peers.Uf(),
      peers.Wh(),
      peers.Qf(),
      (mE = peers.Ia(peers.Q, () => ({
        queryKey: [`rate-limit-status`],
        queryFn: async () => {
          try {
            return await peers.Uh.safeGet(`/wham/usage`);
          } catch (e) {
            if (
              peers.e instanceof peers.Xf &&
              (peers.e.status === 401 ||
                peers.e.status === 403 ||
                peers.e.status === 404)
            )
              return null;
            throw peers.e;
          }
        },
        retry: !1,
        refetchInterval: peers.Hf.ONE_MINUTE,
        refetchIntervalInBackground: !1,
        refetchOnWindowFocus: !0,
        staleTime: peers.Hf.ONE_MINUTE,
      }))));
  });
}
