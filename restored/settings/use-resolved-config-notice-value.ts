// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `ePl`) / export `ys`.

export type UseResolvedConfigNoticeValuePeers = {
  useConfigNotice: (atom: unknown) => { value: unknown };
  configNoticeAtom: unknown;
  resolveNoticeValue: (value: unknown) => unknown;
};

let peers: UseResolvedConfigNoticeValuePeers | null = null;

/** Wire config-notice peers once companions land. */
export function setUseResolvedConfigNoticeValuePeers(
  next: UseResolvedConfigNoticeValuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `ys` / internal `ePl`.
 * Resolve the active config notice value for settings UI.
 */
export function useResolvedConfigNoticeValue(): unknown {
  if (peers == null) {
    throw new Error("UseResolvedConfigNoticeValue peers are not configured");
  }
  const { value } = peers.useConfigNotice(peers.configNoticeAtom);
  return peers.resolveNoticeValue(value);
}
