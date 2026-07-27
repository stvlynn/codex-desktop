// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yql`) / export `Fa`.

export type LogHostLoginSurfaceEventPeers = {
  B5: (...args: unknown[]) => unknown;
  _ql: (...args: unknown[]) => unknown;
  bql: (...args: unknown[]) => unknown;
};
let peers: LogHostLoginSurfaceEventPeers | null = null;

/** Wire logHostLoginSurfaceEvent peers once companions land. */
export function setLogHostLoginSurfaceEventPeers(
  next: LogHostLoginSurfaceEventPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Fa` / internal `yql`.
 */
export function logHostLoginSurfaceEvent(
  e: unknown,
  { canLogin, error, hostKind, state, surface }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("logHostLoginSurfaceEvent peers are not configured");
  }
  let o = e.formatMessage(peers.bql(state, error));
  if (state === "error" && error != null) {
    let i = peers._ql(e, error);
    switch (error.code) {
      case "login-required":
        if (canLogin)
          return {
            action: {
              kind: "login",
              label: e.formatMessage(peers.B5.login),
            },
            label: o,
            message: i,
          };
        if (surface === "connection-status-badge") {
          let t = e.formatMessage(peers.B5.goToSettings);
          return {
            action: {
              kind: "settings",
              label: t,
            },
            label: o,
            message: `${i} ${t}`,
          };
        }
        return {
          action: null,
          label: o,
          message: i,
        };
      case "remote-codex-not-found":
        return {
          action: {
            kind: "install-codex",
            label: e.formatMessage(peers.B5.installCodex),
            loadingLabel: e.formatMessage(peers.B5.installingCodex),
          },
          label: o,
          message: i,
        };
      case "restart-required":
        return {
          action: {
            kind: "restart",
            label: e.formatMessage(peers.B5.restartNow),
            tooltipText: e.formatMessage(peers.B5.restartNowTooltip),
          },
          label: o,
          message: i,
        };
      case "update-required":
        return hostKind === "wsl"
          ? {
              action: null,
              label: o,
              message: e.formatMessage(peers.B5.updateWslCodexMessage, {
                currentVersion: error.currentVersion,
                minRequiredVersion: error.minRequiredVersion,
              }),
            }
          : surface === "connections-row"
            ? {
                action: {
                  kind: "install-codex",
                  label: e.formatMessage(peers.B5.updateCodex),
                  loadingLabel: e.formatMessage(peers.B5.updatingCodex),
                  tooltipText: e.formatMessage(peers.B5.restartNowTooltip),
                },
                label: o,
                message: i,
              }
            : {
                action: {
                  kind: "settings",
                  label: e.formatMessage(peers.B5.goToSettings),
                },
                label: o,
                message: i,
              };
      case "connection-failed":
        return {
          action: null,
          label: o,
          message: i,
        };
    }
  }
  return {
    action: null,
    label: o,
    message: o,
  };
}
