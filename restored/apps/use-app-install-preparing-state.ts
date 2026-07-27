// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `x3r`) / export `QK`.

export type UseAppInstallPreparingStatePeers = {
  A3r: (...args: unknown[]) => unknown;
  C3r: (...args: unknown[]) => unknown;
  D3r: (...args: unknown[]) => unknown;
  E3r: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  O3r: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  S3r: (...args: unknown[]) => unknown;
  T3r: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  w3r: (...args: unknown[]) => unknown;
  zN: (...args: unknown[]) => unknown;
};
let peers: UseAppInstallPreparingStatePeers | null = null;

/** Wire useAppInstallPreparingState peers once companions land. */
export function setUseAppInstallPreparingStatePeers(
  next: UseAppInstallPreparingStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `QK` / internal `x3r`.
 */
export function useAppInstallPreparingState() {
  if (peers == null) {
    throw new Error("useAppInstallPreparingState peers are not configured");
  }
  let t = peers.Io(peers.Q),
    n = peers.Y(peers.zN),
    r = (e) => {
      t.set(peers.zN, e);
    };
  let i = r,
    a = (e) => {
      return peers.D3r(t, e);
    };
  let o = a,
    s = (e, t, n) => {
      let r = n === undefined ? {} : n,
        a = false;
      return (
        i((n) => {
          return n.kind !== "installing" ||
            n.installStarted ||
            n.hostId !== e ||
            n.plugin.plugin.id !== t.plugin.id
            ? n
            : ((a = true),
              {
                ...r,
                kind: "preparingApp",
                hostId: e,
                plugin: t,
              });
        }),
        a
      );
    };
  let c = s,
    l = (e) => {
      let {
        app,
        connectMode = "interactive",
        hostId,
        options,
        plugin,
        status = "pending",
      } = e;
      i((e) => {
        return (e.kind !== "preparingApp" &&
          e.kind !== "connectAppBeforeInstall") ||
          e.hostId !== hostId ||
          e.plugin.plugin.id !== plugin.plugin.id ||
          (e.kind === "connectAppBeforeInstall" && e.app.id !== app.id)
          ? e
          : {
              ...options,
              kind: "connectAppBeforeInstall",
              app,
              connectMode,
              hostId,
              plugin,
              status,
            };
      });
    };
  let u = l,
    d = (e) => {
      let { hostId, pluginId } = e;
      i((e) => {
        return e.kind === "preparingApp" &&
          e.hostId === hostId &&
          e.plugin.plugin.id === pluginId
          ? peers.O3r(e)
          : e;
      });
    };
  let f = d,
    p = (e) => {
      let { hostId, pluginId } = e;
      i((e) => {
        return e.kind === "preparingApp" &&
          e.hostId === hostId &&
          e.plugin.plugin.id === pluginId
          ? peers.E3r(e, false)
          : e;
      });
    };
  let m = p,
    h = (e) => {
      let { appId, hostId, pluginId } = e;
      i((e) => {
        return e.kind === "connectAppBeforeInstall" &&
          e.app.id === appId &&
          e.hostId === hostId &&
          e.plugin.plugin.id === pluginId
          ? peers.E3r(e, false)
          : e;
      });
    };
  let g = h,
    _ = (e, t, n) => {
      i({
        ...(n === undefined ? {} : n),
        kind: "details",
        hostId: e,
        plugin: t,
      });
    };
  let v = _,
    y = () => {
      i(peers.T3r);
    };
  let b = y,
    x = (e) => {
      i((t) => {
        return t.kind === "installing"
          ? {
              ...t,
              progressPercent: e,
            }
          : t;
      });
    };
  let S = x,
    C = (e) => {
      let {
          apps,
          browserExtensions,
          connectingAppId,
          hostId,
          options,
          plugin,
        } = e,
        c = apps.map(peers.w3r),
        l = c.find((item) => {
          return item.app.id === connectingAppId;
        });
      if (l == null) {
        i({
          ...options,
          kind: "needsApps",
          hostId,
          plugin,
          requiredApps: c,
          requiredBrowserExtensions: browserExtensions,
        });
        return;
      }
      i({
        ...options,
        kind: "connectApp",
        hostId,
        plugin,
        app: l.app,
        requiredApps: c,
        requiredBrowserExtensions: browserExtensions,
      });
    };
  let w = C,
    T = (e) => {
      i((t) => {
        if (t.kind !== "needsApps") return t;
        let n = t.requiredApps.find((item) => {
          return item.app.id === e;
        });
        return n == null
          ? t
          : {
              ...t,
              kind: "connectApp",
              app: n.app,
            };
      });
    };
  let E = T,
    D = () => {
      i(peers.C3r);
    };
  let O = D,
    k = () => {
      i(peers.S3r);
    };
  let A = k,
    j = (e) => {
      let { appId, status } = e;
      i((e) => {
        return e.kind === "connectAppBeforeInstall"
          ? e.app.id === appId
            ? {
                ...e,
                status,
              }
            : e
          : e.kind !== "needsApps" && e.kind !== "connectApp"
            ? e
            : {
                ...e,
                requiredApps: e.requiredApps.map((item) => {
                  return item.app.id === appId
                    ? {
                        ...item,
                        status,
                      }
                    : item;
                }),
              };
      });
    };
  let M = j;
  return {
    cancelPluginInstallAppPreparation: f,
    claimPluginInstall: o,
    closePluginInstallAppConnectBeforeInstall: A,
    closePluginInstallAppConnect: O,
    closePluginInstall: b,
    markRequiredAppStatus: M,
    openPluginInstallDetails: v,
    openPluginInstallAppConnectBeforeInstall: u,
    openRequiredAppConnect: E,
    preparePluginInstallAppConnect: c,
    session: n,
    setPluginInstallProgress: S,
    setPluginInstallNeedsApps: w,
    startPluginInstallAfterAppPreparation: m,
    startPluginInstallAfterAppConnect: g,
  };
}
