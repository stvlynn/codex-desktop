// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rt`) / export `Avt`.

export type BindUseQueryClientPeers = {
  et: (...args: unknown[]) => unknown;
  nt: (...args: unknown[]) => unknown;
};
let peers: BindUseQueryClientPeers | null = null;

/** Wire bindUseQueryClient peers once companions land. */
export function setBindUseQueryClientPeers(
  next: BindUseQueryClientPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Avt` / internal `rt`.
 */
export const bindUseQueryClient = (e?: unknown) => {
  if (peers == null) {
    throw new Error("bindUseQueryClient peers are not configured");
  }
  let t = peers.et.useContext(peers.nt);
  if (e) return e;
  if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
};

/** Consumers import this under the bundle's original camelCase name. */
export const useQueryClient = bindUseQueryClient;
