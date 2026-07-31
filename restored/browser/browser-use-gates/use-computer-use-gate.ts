// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `V3r` / export `XK` (public map name `useComputerUseGate`).

import { requireBrowserUseGatePeers } from "./peers";
import type { PluginInstallFlowController } from "./types";

/**
 * Public map name is `useComputerUseGate`; body is the plugin-install flow
 * controller (install / details / status) that consumers historically pulled
 * via this alias.
 */
export function useComputerUseGate(): PluginInstallFlowController {
  const peers = requireBrowserUseGatePeers();
  const scope = peers.useAppScopeNode();
  const status = peers.readAtom(peers.pluginInstallStatusAtom);
  const uninstalling = peers.readAtom(peers.pluginUninstallingAtom);
  const open = (
    mode: string,
    plugin: unknown,
    options: Record<string, unknown> = {},
  ) => {
    const { hostId, onSuccess, ...rest } = options as {
      hostId: string;
      onSuccess?: unknown;
    } & Record<string, unknown>;
    return peers.openPluginInstallFlow(scope, {
      hostId,
      mode,
      onSuccess,
      options: rest,
      plugin,
    });
  };
  return {
    installPlugin: (plugin, options) => open("install", plugin, options ?? {}),
    showPluginInstallDetails: (plugin, options) =>
      open("details", plugin, options ?? {}),
    status,
    uninstalling,
  };
}
