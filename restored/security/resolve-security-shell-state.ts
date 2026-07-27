// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jFl` / export `es` — Codex Security shell readiness reducer.

export type SecurityShellState =
  | "gate-disabled"
  | "remote-host"
  | "loading"
  | "ready"
  | "disabled-by-admin"
  | "plugin-unavailable";

export type InstalledPluginRow = {
  plugin: {
    id: string;
    enabled?: boolean;
    availability?: string;
  };
};

/**
 * Bundle export `es` — derive Security shell state from gate/host/plugins.
 */
export function resolveSecurityShellState(args: {
  installedPlugins: InstalledPluginRow[];
  isGateEnabled: boolean;
  isLoading: boolean;
  isRemoteHost: boolean;
}): SecurityShellState {
  if (!args.isGateEnabled) return "gate-disabled";
  if (args.isRemoteHost) return "remote-host";
  if (args.isLoading) return "loading";
  const securityPlugins = args.installedPlugins.filter(({ plugin }) =>
    plugin.id.startsWith("codex-security@"),
  );
  if (
    securityPlugins.some(
      ({ plugin }) => plugin.enabled && plugin.availability === "AVAILABLE",
    )
  ) {
    return "ready";
  }
  if (
    securityPlugins.some(
      ({ plugin }) => plugin.availability === "DISABLED_BY_ADMIN",
    )
  ) {
    return "disabled-by-admin";
  }
  return "plugin-unavailable";
}

/** Bundle export `rs` — security shell constants ESM init retained as no-op. */
export function ensureSecurityShellStateInit(): void {}

/** Bundle export `ts` — security shell icons ESM init retained as no-op. */
export function ensureSecurityShellIconsInit(): void {}
