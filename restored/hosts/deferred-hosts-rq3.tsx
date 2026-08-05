// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Wjr`) / export `RQ`.

export type BindBinddeferredHostsRQ3Peers = {
  Eh: (...args: unknown[]) => unknown;
  H_: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  Ojr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R6n: (...args: unknown[]) => unknown;
  environmentId: (...args: unknown[]) => unknown;
  hjr: (...args: unknown[]) => unknown;
  sE: (...args: unknown[]) => unknown;
};

let peers: BindBinddeferredHostsRQ3Peers | null = null;

/** Wire bindBinddeferredHostsRQ3 peers once companions land. */
export function setBindBinddeferredHostsRQ3Peers(
  next: BindBinddeferredHostsRQ3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `RQ` / internal `Wjr`.
 */
export function bindBinddeferredHostsRQ3() {
  if (peers == null) {
    throw new Error("bindBinddeferredHostsRQ3 peers are not configured");
  }

  return peers.Ia(peers.Q, ({ get: e }) => {
    let t = e(peers.Eh, `2055603567`),
      n = e(peers.sE, `local`)?.environmentId ?? null;
    return {
      enabled: e(peers.R6n, `local`) && (!t || n != null),
      queryKey: [`codex-mobile-setup-resume-client`, t, n],
      queryFn: async () =>
        t
          ? n == null
            ? !1
            : (await peers.Ojr(peers.H_, n)).length > 0
          : peers.hjr(),
      staleTime: 0,
    };
  });
}
