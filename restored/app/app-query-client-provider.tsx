// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oMe`) / export `Nft`.

export type AppQueryClientProviderPeers = {
  Zee: (...args: unknown[]) => unknown;
  cMe: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  sMe: (...args: unknown[]) => unknown;
};
let peers: AppQueryClientProviderPeers | null = null;

/** Wire AppQueryClientProvider peers once companions land. */
export function setAppQueryClientProviderPeers(
  next: AppQueryClientProviderPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Nft` / internal `oMe`.
 */
export function AppQueryClientProvider(props: unknown) {
  const Zee = peers.Zee;
  if (peers == null) {
    throw new Error("AppQueryClientProvider peers are not configured");
  }
  let { children } = props,
    r = peers.rt();
  return <Zee queryClient={r}>{children}</Zee>;
}
