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
  let alpha = peers.Io(peers.Q),
    bravo = peers.Y(peers.zN),
    copper = (zinc) => {
      alpha.set(peers.zN, zinc);
    };
  let i = copper,
    a = (amber) => {
      return peers.D3r(alpha, amber);
    };
  let delta = a,
    s = (basalt, cedar, daisy) => {
      let ember = daisy === undefined ? {} : daisy,
        a = false;
      return (
        i((flint) => {
          return flint.kind !== "installing" ||
            flint.installStarted ||
            flint.hostId !== basalt ||
            flint.plugin.plugin.id !== cedar.plugin.id
            ? flint
            : ((a = true),
              {
                ...ember,
                kind: "preparingApp",
                hostId: basalt,
                plugin: cedar,
              });
        }),
        a
      );
    };
  let echo = s,
    falcon = (garnet) => {
      let {
        app,
        connectMode = "interactive",
        hostId,
        options,
        plugin,
        status = "pending",
      } = garnet;
      i((hazel) => {
        return (hazel.kind !== "preparingApp" &&
          hazel.kind !== "connectAppBeforeInstall") ||
          hazel.hostId !== hostId ||
          hazel.plugin.plugin.id !== plugin.plugin.id ||
          (hazel.kind === "connectAppBeforeInstall" && hazel.app.id !== app.id)
          ? hazel
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
  let u = falcon,
    gamma = (ivory) => {
      let { hostId, pluginId } = ivory;
      i((jasper) => {
        return jasper.kind === "preparingApp" &&
          jasper.hostId === hostId &&
          jasper.plugin.plugin.id === pluginId
          ? peers.O3r(jasper)
          : jasper;
      });
    };
  let harbor = gamma,
    p = (kelp) => {
      let { hostId, pluginId } = kelp;
      i((lotus) => {
        return lotus.kind === "preparingApp" &&
          lotus.hostId === hostId &&
          lotus.plugin.plugin.id === pluginId
          ? peers.E3r(lotus, false)
          : lotus;
      });
    };
  let indigo = p,
    jade = (mint) => {
      let { appId, hostId, pluginId } = mint;
      i((nova) => {
        return nova.kind === "connectAppBeforeInstall" &&
          nova.app.id === appId &&
          nova.hostId === hostId &&
          nova.plugin.plugin.id === pluginId
          ? peers.E3r(nova, false)
          : nova;
      });
    };
  let kite = jade,
    lemon = (olive, prism, quill) => {
      i({
        ...(quill === undefined ? {} : quill),
        kind: "details",
        hostId: olive,
        plugin: prism,
      });
    };
  let value = lemon,
    marble = () => {
      i(peers.T3r);
    };
  let b = marble,
    nickel = (reef) => {
      i((sage) => {
        return sage.kind === "installing"
          ? {
              ...sage,
              progressPercent: reef,
            }
          : sage;
      });
    };
  let onyx = nickel,
    pearl = (topaz) => {
      let {
          apps,
          browserExtensions,
          connectingAppId,
          hostId,
          options,
          plugin,
        } = topaz,
        ultra = apps.map(peers.w3r),
        vapor = ultra.find((item) => {
          return item.app.id === connectingAppId;
        });
      if (vapor == null) {
        i({
          ...options,
          kind: "needsApps",
          hostId,
          plugin,
          requiredApps: ultra,
          requiredBrowserExtensions: browserExtensions,
        });
        return;
      }
      i({
        ...options,
        kind: "connectApp",
        hostId,
        plugin,
        app: vapor.app,
        requiredApps: ultra,
        requiredBrowserExtensions: browserExtensions,
      });
    };
  let quartz = pearl,
    river = (wheat) => {
      i((yarn) => {
        if (yarn.kind !== "needsApps") return yarn;
        let zephyr = yarn.requiredApps.find((item) => {
          return item.app.id === wheat;
        });
        return zephyr == null
          ? yarn
          : {
              ...yarn,
              kind: "connectApp",
              app: zephyr.app,
            };
      });
    };
  let slate = river,
    timber = () => {
      i(peers.C3r);
    };
  let umbra = timber,
    violet = () => {
      i(peers.S3r);
    };
  let willow = violet,
    xenon = (acorn) => {
      let { appId, status } = acorn;
      i((bloom) => {
        return bloom.kind === "connectAppBeforeInstall"
          ? bloom.app.id === appId
            ? {
                ...bloom,
                status,
              }
            : bloom
          : bloom.kind !== "needsApps" && bloom.kind !== "connectApp"
            ? bloom
            : {
                ...bloom,
                requiredApps: bloom.requiredApps.map((item) => {
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
  let yellow = xenon;
  return {
    cancelPluginInstallAppPreparation: harbor,
    claimPluginInstall: delta,
    closePluginInstallAppConnectBeforeInstall: willow,
    closePluginInstallAppConnect: umbra,
    closePluginInstall: b,
    markRequiredAppStatus: yellow,
    openPluginInstallDetails: value,
    openPluginInstallAppConnectBeforeInstall: u,
    openRequiredAppConnect: slate,
    preparePluginInstallAppConnect: echo,
    session: bravo,
    setPluginInstallProgress: onyx,
    setPluginInstallNeedsApps: quartz,
    startPluginInstallAfterAppPreparation: indigo,
    startPluginInstallAfterAppConnect: kite,
  };
}
