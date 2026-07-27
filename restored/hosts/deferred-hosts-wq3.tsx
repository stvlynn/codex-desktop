// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Gjr`) / export `WQ`.

export type BindBinddeferredHostsWQ3Peers = {
  A6n: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  Fjr: (...args: unknown[]) => unknown;
  Ljr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R6n: (...args: unknown[]) => unknown;
  Vjr: (...args: unknown[]) => unknown;
  expiresAt: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
};

let peers: BindBinddeferredHostsWQ3Peers | null = null;

/** Wire bindBinddeferredHostsWQ3 peers once companions land. */
export function setBindBinddeferredHostsWQ3Peers(next: BindBinddeferredHostsWQ3Peers): void {
  peers = next;
}

/**
 * Bundle export `WQ` / internal `Gjr`.
 */
export function bindBinddeferredHostsWQ3() {
  if (peers == null) {
    throw new Error("bindBinddeferredHostsWQ3 peers are not configured");
  }

  return peers.ka(peers.Q, ({
    hostId: e,
    openId: t
  }, {
    get: n,
    scope: r
  }) => ({
    enabled: n(peers.Eh, `2055603567`) && !n(peers.Eh, `3936985709`) && n(peers.R6n, e),
    queryKey: [...peers.Vjr, e, t],
    queryFn: async () => (await peers.A6n(r, e), peers.Bf(`start-remote-control-pairing-for-host`, {
      hostId: e,
      manualCode: !0
    })),
    retry: !1,
    gcTime: 0,
    staleTime: e => {
      let t = e.state.data?.expiresAt;
      return t == null ? 0 : Math.max(0, peers.Fjr(t) - e.state.dataUpdatedAt);
    },
    refetchInterval: e => {
      let t = e.state.data?.expiresAt;
      return t == null || e.state.fetchStatus === `fetching` || e.state.error != null ? !1 : Math.max(1, peers.Fjr(t) - Date.now() - peers.Ljr);
    }
  }), {
    key: ({
      hostId: e,
      openId: t
    }) => `${e}:${t}`
  });
}
