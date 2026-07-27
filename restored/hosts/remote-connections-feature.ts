// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Remote-connections / Slingshot enablement helpers (`lGr` / `uGr` / `dGr`).

import {
  REMOTE_CONNECTIONS_FEATURE_GATE_ID,
  SLINGSHOT_FEATURE_GATE_ID,
} from "../feature-gates/feature-gate-ids";
import { readConfigFeatureFlag } from "../config/read-config-feature-flag";

/**
 * Bundle `uGr` / export `eZ`.
 * Thin wrapper around the Slingshot Statsig gate id.
 */
export function isSlingshotEnabled(isGateEnabled: (gateId: string) => boolean,
): boolean {
  return isGateEnabled(SLINGSHOT_FEATURE_GATE_ID);
}

export type IsRemoteConnectionsFeatureEnabledProps = {
  config: Record<string, unknown> | null | undefined;
  /** Statsig `4114442250` snapshot (`kh`). */
  remoteConnectionsGateEnabled: boolean;
};

/**
 * Pure core of bundle `lGr` (hook `$X` wraps this with AppScope + Statsig).
 * Config `features.remote_connections` wins; otherwise fall back to the gate.
 */
export function isRemoteConnectionsFeatureEnabled({
  config,
  remoteConnectionsGateEnabled,
}: IsRemoteConnectionsFeatureEnabledProps): boolean {
  if (readConfigFeatureFlag(config, "remote_connections") === true) {
    return true;
  }
  return remoteConnectionsGateEnabled;
}

/**
 * Bundle `lGr` / export `$X` — zero-arg React hook used by redirect pages.
 * Host binds the real AppScope+Statsig implementation before runtime use.
 */
let useIsRemoteConnectionsFeatureEnabledImpl: (() => boolean) | null = null;

export function useIsRemoteConnectionsFeatureEnabled(): boolean {
  if (useIsRemoteConnectionsFeatureEnabledImpl != null) {
    return useIsRemoteConnectionsFeatureEnabledImpl();
  }
  return false;
}

export function bindRemoteConnectionsFeatureHooks(next: {
  useIsRemoteConnectionsFeatureEnabled?: () => boolean;
}): void {
  if (next.useIsRemoteConnectionsFeatureEnabled) {
    useIsRemoteConnectionsFeatureEnabledImpl =
      next.useIsRemoteConnectionsFeatureEnabled;
  }
}

/** Bundle `ZX` / `mGr` co-located ESM init — no-op once modules are static. */
export function ensureRemoteConnectionsFeatureInit(): void {}

/** Re-export gate ids used by the remote-connections cluster. */
export { REMOTE_CONNECTIONS_FEATURE_GATE_ID, SLINGSHOT_FEATURE_GATE_ID };

export type RemoteConnectionAutoConnect = {
  hostId: string;
  autoConnect?: boolean;
};

/**
 * Bundle `dGr` / export `QX` (+ `fGr`).
 * Connections list plus the set of host ids marked `autoConnect`.
 */
export function getEnabledRemoteConnectionState(
  remoteConnections: readonly RemoteConnectionAutoConnect[] | null | undefined,
): {
  remoteConnections: readonly RemoteConnectionAutoConnect[];
  enabledRemoteHostIdSet: Set<string>;
} {
  const list = remoteConnections ?? [];
  return {
    remoteConnections: list,
    enabledRemoteHostIdSet: new Set(
      list.flatMap((connection) =>
        connection.autoConnect ? [connection.hostId] : [],
      ),
    ),
  };
}

export type AppServerLike = {
  getHostId(): string;
};

export type AppServerRegistryLike = {
  getDefault(): AppServerLike;
  getAll(): readonly AppServerLike[];
};

/**
 * Bundle `hGr` (co-located with `mGr` / `ZX` init).
 * Keep the default host plus any enabled remote hosts.
 */
export function filterAppServersForEnabledRemoteHosts({
  appServerRegistry,
  enabledRemoteHostIds,
}: {
  appServerRegistry: AppServerRegistryLike;
  enabledRemoteHostIds: ReadonlySet<string>;
}): AppServerLike[] {
  const defaultHostId = appServerRegistry.getDefault().getHostId();
  return appServerRegistry.getAll().filter((server) => {
    const hostId = server.getHostId();
    return hostId === defaultHostId || enabledRemoteHostIds.has(hostId);
  });
}
