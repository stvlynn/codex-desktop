// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kza`) / export `JM`.

export type LazyValueChildrenProviderPeers = {
  Aza: (...args: unknown[]) => unknown;
  Hza: (...args: unknown[]) => unknown;
  Lza: (...args: unknown[]) => unknown;
  VH: (...args: unknown[]) => unknown;
  zza: (...args: unknown[]) => unknown;
};
let peers: LazyValueChildrenProviderPeers | null = null;

/** Wire LazyValueChildrenProvider peers once companions land. */
export function setLazyValueChildrenProviderPeers(
  next: LazyValueChildrenProviderPeers,
): void {
  peers = next;
}

/**
 * Bundle export `JM` / internal `kza`.
 */
export function LazyValueChildrenProvider(props: unknown) {
  const Hza = peers.Hza;
  if (peers == null) {
    throw new Error("LazyValueChildrenProvider peers are not configured");
  }
  let { children } = props,
    [r] = peers.zza.useState(peers.Aza);
  return <Hza value={r}>{children}</Hza>;
}
