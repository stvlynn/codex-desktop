// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `s3i`) / export `hz`.

export type ResolvePluginDirectoryEntrypointArgs = {
  explicitEntrypoint?: unknown;
  locationKey?: string;
  locationState?: unknown;
};

export type ResolvePluginDirectoryEntrypointPeers = {
  safeParse: (value: unknown) => {
    success: boolean;
    data?: { pluginDirectoryEntrypoint?: unknown };
  };
  directEntrypoint: unknown;
  otherEntrypoint: unknown;
};

let peers: ResolvePluginDirectoryEntrypointPeers | null = null;

/** Wire location-state schema once companions land. */
export function setResolvePluginDirectoryEntrypointPeers(
  next: ResolvePluginDirectoryEntrypointPeers,
): void {
  peers = next;
}

/**
 * Bundle export `hz` / internal `s3i`.
 * Resolve the Codex plugin directory entrypoint from location state.
 */
export function resolvePluginDirectoryEntrypoint(
  args: ResolvePluginDirectoryEntrypointArgs,
): unknown {
  if (peers == null) {
    throw new Error(
      "ResolvePluginDirectoryEntrypoint peers are not configured",
    );
  }
  const { explicitEntrypoint, locationKey, locationState } = args;
  if (explicitEntrypoint != null) return explicitEntrypoint;
  const parsed = peers.safeParse(locationState);
  if (parsed.success && parsed.data?.pluginDirectoryEntrypoint != null) {
    return parsed.data.pluginDirectoryEntrypoint;
  }
  return locationKey === "default"
    ? peers.directEntrypoint
    : peers.otherEntrypoint;
}
