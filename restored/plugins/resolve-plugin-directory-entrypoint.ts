// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `s3i`) / export `hz`.

export type ResolvePluginDirectoryEntrypointPeers = {
  Fb: (...args: unknown[]) => unknown;
  y3i: (...args: unknown[]) => unknown;
};
let peers: ResolvePluginDirectoryEntrypointPeers | null = null;

/** Wire resolvePluginDirectoryEntrypoint peers once companions land. */
export function setResolvePluginDirectoryEntrypointPeers(
  next: ResolvePluginDirectoryEntrypointPeers,
): void {
  peers = next;
}

/**
 * Bundle export `hz` / internal `s3i`.
 */
export function resolvePluginDirectoryEntrypoint({
  explicitEntrypoint,
  locationKey,
  locationState,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error(
      "resolvePluginDirectoryEntrypoint peers are not configured",
    );
  }
  if (explicitEntrypoint != null) return explicitEntrypoint;
  let r = peers.y3i.safeParse(locationState);
  return r.success && r.data.pluginDirectoryEntrypoint != null
    ? r.data.pluginDirectoryEntrypoint
    : locationKey === "default"
      ? peers.Fb.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT
      : peers.Fb.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER;
}
