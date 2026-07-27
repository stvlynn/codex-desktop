// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rp`) / export `Zut`.

export type InvokeDesktopRpcPeers = {
  PZe: (...args: unknown[]) => unknown;
};

let peers: InvokeDesktopRpcPeers | null = null;

/** Wire invokeDesktopRpc peers once companions land. */
export function setInvokeDesktopRpcPeers(next: InvokeDesktopRpcPeers): void {
  peers = next;
}

export type InvokeDesktopRpcOptions = {
  params?: unknown;
  select?: unknown;
  signal?: AbortSignal;
  source?: unknown;
};

export type InvokeDesktopRpc = (
  method: string,
  options?: InvokeDesktopRpcOptions,
) => Promise<unknown>;

/**
 * Bundle export `Zut` / internal `rp`.
 */
export const invokeDesktopRpc: InvokeDesktopRpc = async (
  method: string,
  options?: InvokeDesktopRpcOptions,
) => {
  if (peers == null) {
    throw new Error("invokeDesktopRpc peers are not configured");
  }

  const { params: r, select: i, signal: a, source: o } = options ?? {};
  return peers.PZe(method, r, i, a, o);
};
