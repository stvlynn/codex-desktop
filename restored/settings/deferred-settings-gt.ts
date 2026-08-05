// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `m_u`) / export `gt`.

export type BindDeferredSettingsGtPeers = {
  Hf: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  wM: (...args: unknown[]) => unknown;
};

let peers: BindDeferredSettingsGtPeers | null = null;

/** Wire bindDeferredSettingsGt peers once companions land. */
export function setBindDeferredSettingsGtPeers(
  next: BindDeferredSettingsGtPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gt` / internal `m_u`.
 */
export function bindDeferredSettingsGt() {
  if (peers == null) {
    throw new Error("bindDeferredSettingsGt peers are not configured");
  }

  return peers.Ia(peers.Q, () => ({
    queryFn: ({ signal: e }) =>
      peers.wM(peers.gp.computerUseSettings.getSoundMode(), e),
    queryKey: [`computer-use-sound-mode`],
    refetchOnMount: `always`,
    refetchOnWindowFocus: !0,
    staleTime: peers.Hf.FIVE_SECONDS,
  }));
}
