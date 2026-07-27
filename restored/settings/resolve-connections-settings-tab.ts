// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `W1l` / export `hi`.

export type ConnectionsSettingsTab =
  | "wsl"
  | "ssh"
  | "control-this-mac"
  | "access-other-devices"
  | string;

/** Resolve the visible connections-settings tab under feature flags. */
export function resolveConnectionsSettingsTab(args: {
  selectedConnectionsTab: ConnectionsSettingsTab;
  showControlOtherDevices: boolean;
  showControlThisMacTab: boolean;
  showRemoteControlConnectionsSection: boolean;
  showRemoteSshConnections: boolean;
  showTabbedSshPage: boolean;
  isWslConnectionsLoading: boolean;
  showWslConnections: boolean;
}): ConnectionsSettingsTab {
  const {
    selectedConnectionsTab,
    showControlOtherDevices,
    showControlThisMacTab,
    showRemoteControlConnectionsSection,
    showRemoteSshConnections,
    showTabbedSshPage,
    isWslConnectionsLoading,
    showWslConnections,
  } = args;
  if (selectedConnectionsTab === "wsl" && isWslConnectionsLoading) return "wsl";
  if (showRemoteControlConnectionsSection) {
    if (
      selectedConnectionsTab === "control-this-mac" &&
      !showControlThisMacTab
    ) {
      return showControlOtherDevices ? "access-other-devices" : "ssh";
    }
    if (
      selectedConnectionsTab === "access-other-devices" &&
      !showControlOtherDevices
    ) {
      return showControlThisMacTab ? "control-this-mac" : "ssh";
    }
    if (selectedConnectionsTab === "ssh" && !showTabbedSshPage) {
      return showControlOtherDevices
        ? "access-other-devices"
        : "control-this-mac";
    }
    if (selectedConnectionsTab === "wsl" && !showWslConnections) return "ssh";
    return selectedConnectionsTab;
  }
  if (selectedConnectionsTab === "wsl" && showWslConnections) return "wsl";
  return showRemoteSshConnections ? "ssh" : "access-other-devices";
}
