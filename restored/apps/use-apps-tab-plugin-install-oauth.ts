// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `w2i`) / export `eB`.

export type UseAppsTabPluginInstallOAuthPeers = {
  A2i: (...args: unknown[]) => unknown;
  D2i: (...args: unknown[]) => unknown;
  I2i: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  L2i: (...args: unknown[]) => unknown;
  M2i: (...args: unknown[]) => unknown;
  N2i: (...args: unknown[]) => unknown;
  P2i: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  k2i: (...args: unknown[]) => unknown;
  nd: (...args: unknown[]) => unknown;
  yz: (...args: unknown[]) => unknown;
};
let peers: UseAppsTabPluginInstallOAuthPeers | null = null;

/** Wire useAppsTabPluginInstallOAuth peers once companions land. */
export function setUseAppsTabPluginInstallOAuthPeers(
  next: UseAppsTabPluginInstallOAuthPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eB` / internal `w2i`.
 */
export function useAppsTabPluginInstallOAuth() {
  if (peers == null) {
    throw new Error("useAppsTabPluginInstallOAuth peers are not configured");
  }
  let t = peers.Io(peers.Q),
    n = peers.Y(peers.yz),
    r = (e) => {
      let { oauthState, appId, resumeTarget } = e;
      t.set(peers.yz, (e) => {
        return peers.k2i(e, {
          oauthState,
          appId,
          resumeTarget,
        });
      });
      t.set(peers.L2i, (e) => {
        return peers.k2i(e ?? peers.N2i, {
          oauthState,
          appId,
          resumeTarget,
        });
      });
    };
  let i = r,
    a = (e) => {
      let n = peers.D2i(e);
      if (n == null) return false;
      let r = t.get(peers.yz)[n] ?? peers.nd(peers.I2i, peers.N2i)[n] ?? null;
      return r == null || r.claimed || r.callbackOwnerId !== peers.P2i
        ? false
        : (t.set(peers.yz, (e) => {
            return {
              ...e,
              [n]: {
                ...r,
                claimed: true,
              },
            };
          }),
          true);
    };
  let o = a,
    s = (e) => {
      t.set(peers.yz, (t) => {
        let n = t[e];
        return n == null || !n.claimed
          ? t
          : {
              ...t,
              [e]: {
                ...n,
                claimed: false,
              },
            };
      });
    };
  let c = s,
    l = (e) => {
      let t = peers.D2i(e);
      return t == null
        ? null
        : (n[t] ?? peers.nd(peers.I2i, peers.N2i)[t] ?? null);
    };
  let u = l,
    d = (e, t) => {
      return Object.values(n).some((item) => {
        return (
          item.appId === e && item.completed && peers.A2i(item.resumeTarget, t)
        );
      });
    };
  let f = d,
    p = (e, t) => {
      return Object.values(n).some((item) => {
        return (
          item.appId === e && item.claimed && peers.A2i(item.resumeTarget, t)
        );
      });
    };
  let m = p,
    h = (e, t) => {
      return Object.values(n).some((item) => {
        return item.appId === e && peers.A2i(item.resumeTarget, t);
      });
    };
  let g = h,
    _ = (e) => {
      let {
          app,
          hostId,
          marketplaceAnalytics,
          redirectUrl,
          returnTo,
          resumeTarget,
        } = e,
        c =
          resumeTarget === undefined
            ? {
                kind: "apps-tab",
              }
            : resumeTarget,
        l = peers.D2i(redirectUrl);
      if (l == null) return;
      let u = {
        appId: app.id,
        appName: app.name,
        callbackOwnerId: peers.P2i,
        claimed: false,
        completed: false,
        hostId: hostId ?? "local",
        marketplaceAnalytics,
        oauthState: l,
        returnTo,
        resumeTarget: c,
      };
      t.set(peers.yz, (e) => {
        return {
          ...e,
          [l]: u,
        };
      });
      c.kind === "plugin-install" &&
        t.set(peers.L2i, (e) => {
          return {
            ...(e ?? peers.N2i),
            [l]: u,
          };
        });
    };
  let v = _,
    y = (e) => {
      t.set(peers.yz, (t) => {
        let n = t[e];
        return n == null
          ? t
          : {
              ...t,
              [e]: {
                ...n,
                completed: true,
              },
            };
      });
    };
  let b = y;
  return {
    claimAppConnectOAuthCallback: o,
    clearPendingAppConnect: i,
    getPendingAppConnectForCallbackUrl: u,
    hasAppConnectCallbackCompleted: f,
    isAppConnectCallbackClaimed: m,
    isAppConnectPending: g,
    markAppConnectOAuthCallbackCompleted: b,
    markAppConnectOAuthPending: v,
    releaseAppConnectOAuthCallbackClaim: c,
  };
}
