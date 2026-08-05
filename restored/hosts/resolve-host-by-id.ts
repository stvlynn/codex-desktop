// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Resolve a host-config row by id from host_config or remote connections (`W_` / `wot`).

import {
  DEFAULT_LOCAL_HOST,
  LOCAL_HOST_ID,
  type LocalHostConfig,
} from "./local-host-id";
import type { RemoteConnection } from "./merge-remote-connections";

export type HostConfig = {
  id: string;
  display_name: string;
  kind: string;
  codex_cli_command?: string[];
  terminal_command?: string[];
  distro?: string;
  env_id?: string;
  host_name?: string;
  environment_kind?: string;
  online?: boolean;
  busy?: boolean;
  os?: string;
  arch?: string;
  app_server_version?: string;
  last_seen_at?: string | number | null;
};

/**
 * Convert a remote shared-object connection into a host-config row
 * (inlined from `wxe` / SSH+WSL+remote-control mappers used by `G_`).
 */
export function remoteConnectionToHostConfig(
  connection: RemoteConnection,
): HostConfig {
  if (connection.source === "remote-control") {
    return {
      id: connection.hostId,
      display_name: connection.displayName,
      kind: "remote-control",
      codex_cli_command: [],
      terminal_command: [],
      env_id: connection.envId as string | undefined,
      host_name: connection.hostName as string | undefined,
      environment_kind: connection.environmentKind as string | undefined,
      online: connection.online as boolean | undefined,
      busy: connection.busy as boolean | undefined,
      os: connection.os as string | undefined,
      arch: connection.arch as string | undefined,
      app_server_version: connection.appServerVersion as string | undefined,
      last_seen_at: connection.lastSeenAt as string | number | null | undefined,
    };
  }

  if (connection.source === "wsl") {
    const distro = String(connection.distro ?? "");
    return {
      id: connection.hostId,
      display_name: connection.displayName,
      kind: "wsl",
      codex_cli_command: [],
      terminal_command: ["wsl.exe", "-d", distro],
      distro,
    };
  }

  // Default: SSH remote
  const terminalCommand = [
    "ssh",
    ...buildSshArgv({
      alias: connection.sshAlias as string | undefined,
      hostname: connection.sshHost as string | undefined,
      sshPort: connection.sshPort as number | string | undefined,
      identity: connection.identity as string | undefined,
    }),
  ];

  return {
    id: connection.hostId,
    display_name: connection.displayName,
    kind: "ssh",
    codex_cli_command: [],
    terminal_command: terminalCommand,
  };
}

function buildSshArgv(options: {
  alias?: string;
  hostname?: string;
  sshPort?: number | string;
  identity?: string;
}): string[] {
  const alias = options.alias?.trim();
  if (alias) {
    return [alias];
  }

  const args: string[] = [];
  if (options.identity) {
    args.push("-i", options.identity);
  }
  if (options.sshPort != null) {
    args.push("-p", String(options.sshPort));
  }
  args.push(String(options.hostname ?? ""));
  return args;
}

function findRemoteHostConfig(
  hostId: string | undefined,
  remoteConnections: RemoteConnection[] | null | undefined,
): HostConfig | undefined {
  if (hostId == null || remoteConnections == null) {
    return undefined;
  }
  const match = remoteConnections.find(
    (connection) => connection.hostId === hostId,
  );
  return match ? remoteConnectionToHostConfig(match) : undefined;
}

/**
 * Resolve host config for `hostId`, preferring the active `host_config`
 * shared object when ids match, else looking up remote connections, else
 * falling back to the local host (`W_` / `wot`, helpers `G_` / `dOt`).
 */
export function resolveHostById(
  hostId: string | undefined,
  remoteConnections: RemoteConnection[] | null | undefined,
  hostConfig: HostConfig | null | undefined,
  localHost: LocalHostConfig | HostConfig = DEFAULT_LOCAL_HOST,
): HostConfig {
  if (hostId === hostConfig?.id) {
    return hostConfig ?? localHost;
  }
  return findRemoteHostConfig(hostId, remoteConnections) ?? localHost;
}

export { LOCAL_HOST_ID, DEFAULT_LOCAL_HOST };
