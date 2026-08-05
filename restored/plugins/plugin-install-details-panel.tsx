// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `S0s`) / export `Hh`.

export type PluginInstallDetailsPanelPeers = {
  C0s: (...args: unknown[]) => unknown;
  Fes: (...args: unknown[]) => unknown;
  LN: (...args: unknown[]) => unknown;
  U3r: (...args: unknown[]) => unknown;
  V3r: (...args: unknown[]) => unknown;
  _X: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  defaultPrompt: (...args: unknown[]) => unknown;
  gZ: (...args: unknown[]) => unknown;
  oFa: (...args: unknown[]) => unknown;
  sFa: (...args: unknown[]) => unknown;
  w3i: (...args: unknown[]) => unknown;
};

let peers: PluginInstallDetailsPanelPeers | null = null;

/** Wire PluginInstallDetailsPanel peers once companions land. */
export function setPluginInstallDetailsPanelPeers(
  next: PluginInstallDetailsPanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Hh` / internal `S0s`.
 */
export function PluginInstallDetailsPanel(e: unknown) {
  if (peers == null) {
    throw new Error("PluginInstallDetailsPanel peers are not configured");
  }

  let t = (0, peers.C0s.c)(15),
    {
      activeProject: n,
      availablePlugins: r,
      hostId: i,
      pendingPluginId: a,
      reloadPlugins: o,
      source: s,
    } = e,
    c = peers.gZ(),
    { showPluginInstallDetails: l, status: u } = peers.V3r(),
    d;
  t[0] === i
    ? (d = t[1])
    : ((d = {
        hostId: i,
      }),
      (t[0] = i),
      (t[1] = d));
  let { pendingPluginId: f, setPluginEnabled: p } = peers.w3i(d),
    m,
    h;
  if (
    t[2] !== n ||
    t[3] !== r ||
    t[4] !== a ||
    t[5] !== i ||
    t[6] !== f ||
    t[7] !== o ||
    t[8] !== p ||
    t[9] !== l ||
    t[10] !== s ||
    t[11] !== c ||
    t[12] !== u
  ) {
    h = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = peers.Fes(r);
      if (e == null) {
        h = null;
        break bb0;
      }
      let t = async () => {
        if (peers._X(e.plugin)) return;
        let t = peers.sFa({
          defaultPrompt: peers.oFa(e.plugin.interface?.defaultPrompt),
          pluginDisplayName: peers.LN(e),
          pluginId: e.plugin.id,
        });
        if (!e.plugin.installed) {
          l(e, {
            hostId: i,
            onSuccess: o,
            postInstallComposerPrefill: t,
            postInstallNewConversation: {
              activeProject: n,
              startInSidebar: !0,
            },
            source: s,
          });
          return;
        }
        if (!e.plugin.enabled)
          try {
            await p({
              enabled: !0,
              pluginDisplayName: peers.LN(e),
              pluginId: e.plugin.id,
            });
          } catch {
            return;
          }
        c({
          activeProject: n,
          prefillPrompt: t,
          startInSidebar: !0,
        });
      };
      m = {
        disabled:
          peers.U3r(u, {
            hostId: i,
          }) ||
          f === e.plugin.id ||
          a === e.plugin.id ||
          peers._X(e.plugin),
        onSelect: () => {
          t();
        },
      };
    }
    ((t[2] = n),
      (t[3] = r),
      (t[4] = a),
      (t[5] = i),
      (t[6] = f),
      (t[7] = o),
      (t[8] = p),
      (t[9] = l),
      (t[10] = s),
      (t[11] = c),
      (t[12] = u),
      (t[13] = m),
      (t[14] = h));
  } else ((m = t[13]), (h = t[14]));
  return h === Symbol.for(`react.early_return_sentinel`) ? m : h;
}
