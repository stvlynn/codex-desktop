// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Kjr`) / export `BQ`.

export type BindBindCodexMobileMfaSetupRequiredPeers = {
  A6n: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  Bjr: (...args: unknown[]) => unknown;
  Dh: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  Fjr: (...args: unknown[]) => unknown;
  Gjr: (...args: unknown[]) => unknown;
  H_: (...args: unknown[]) => unknown;
  Hjr: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  Ijr: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Ljr: (...args: unknown[]) => unknown;
  Mjr: (...args: unknown[]) => unknown;
  Ojr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  R6n: (...args: unknown[]) => unknown;
  Rjr: (...args: unknown[]) => unknown;
  Tjr: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Ujr: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Vjr: (...args: unknown[]) => unknown;
  Wjr: (...args: unknown[]) => unknown;
  cE: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  environmentId: (...args: unknown[]) => unknown;
  expiresAt: (...args: unknown[]) => unknown;
  hjr: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  mjr: (...args: unknown[]) => unknown;
  pjr: (...args: unknown[]) => unknown;
  sE: (...args: unknown[]) => unknown;
  zjr: (...args: unknown[]) => unknown;
};

let peers: BindBindCodexMobileMfaSetupRequiredPeers | null = null;

/** Wire bindBindCodexMobileMfaSetupRequired peers once companions land. */
export function setBindBindCodexMobileMfaSetupRequiredPeers(next: BindBindCodexMobileMfaSetupRequiredPeers): void {
  peers = next;
}

/**
 * Bundle export `BQ` / internal `Kjr`.
 */
export function bindBindCodexMobileMfaSetupRequired() {
  if (peers == null) {
    throw new Error("bindBindCodexMobileMfaSetupRequired peers are not configured");
  }

  return peers.e(() => {
    peers.Qt(), peers.Ho(), peers.Tjr(), peers.cE(), peers.Vf(), peers.Mjr(), peers.ed(), peers.K_(), peers.Dh(), peers.Uf(), Ijr = 3e4, Ljr = 6e4, Rjr = [`codex-mobile-mfa-setup-required`], zjr = `2055603567`, Bjr = `3936985709`, Vjr = [`remote-control-server-pairing`], Hjr = peers.Ia(peers.Q, () => ({
      queryKey: [`remote-control-mfa-requirement`],
      queryFn: peers.pjr,
      retry: !1,
      staleTime: peers.Ijr
    })), Ujr = peers.Ia(peers.Q, ({
      get: e
    }) => ({
      enabled: peers.e(peers.Hjr).data === `required`,
      queryKey: [`remote-control-mfa-enabled`],
      queryFn: peers.mjr,
      refetchOnWindowFocus: `always`,
      staleTime: 0
    })), Wjr = peers.Ia(peers.Q, ({
      get: e
    }) => {
      let t = peers.e(peers.Eh, `2055603567`),
        n = peers.e(peers.sE, `local`)?.environmentId ?? null;
      return {
        enabled: peers.e(peers.R6n, `local`) && (!t || n != null),
        queryKey: [`codex-mobile-setup-resume-client`, t, n],
        queryFn: async () => t ? n == null ? !1 : (await peers.Ojr(peers.H_, n)).length > 0 : peers.hjr(),
        staleTime: 0
      };
    }), Gjr = peers.ka(peers.Q, ({
      hostId: e,
      openId: t
    }, {
      get: n,
      scope: r
    }) => ({
      enabled: n(peers.Eh, `2055603567`) && !n(peers.Eh, `3936985709`) && n(peers.R6n, peers.e),
      queryKey: [...peers.Vjr, peers.e, t],
      queryFn: async () => (await peers.A6n(r, peers.e), peers.Bf(`start-remote-control-pairing-for-host`, {
        hostId: peers.e,
        manualCode: !0
      })),
      retry: !1,
      gcTime: 0,
      staleTime: e => {
        let t = peers.e.state.data?.expiresAt;
        return t == null ? 0 : Math.max(0, peers.Fjr(t) - peers.e.state.dataUpdatedAt);
      },
      refetchInterval: e => {
        let t = peers.e.state.data?.expiresAt;
        return t == null || peers.e.state.fetchStatus === `fetching` || peers.e.state.error != null ? !1 : Math.max(1, peers.Fjr(t) - Date.now() - peers.Ljr);
      }
    }), {
      key: ({
        hostId: e,
        openId: t
      }) => `${peers.e}:${t}`
    });
  });
}
