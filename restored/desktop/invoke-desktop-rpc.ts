// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `rp`) / export `Zut`.

export type InvokeDesktopRpcPeers = {
  invoke: (
    method: unknown,
    params: unknown,
    select: unknown,
    signal: unknown,
    source: unknown,
  ) => unknown;
};

let peers: InvokeDesktopRpcPeers | null = null;

/** Wire invokeDesktopRpc peers once companions land. */
export function setInvokeDesktopRpcPeers(next: InvokeDesktopRpcPeers): void {
  peers = next;
}

/**
 * Bundle export `Zut` / internal `rp`.
 * Invoke a desktop RPC with optional params/select/signal/source.
 */
export function invokeDesktopRpc(
  method: unknown,
  options: {
    params?: unknown;
    select?: unknown;
    signal?: unknown;
    source?: unknown;
  } = {},
): unknown {
  if (peers == null) {
    throw new Error("InvokeDesktopRpc peers are not configured");
  }
  const { params, select, signal, source } = options;
  return peers.invoke(method, params, select, signal, source);
}

// --- qg-full-green: missing-relative-exports stubs (open-runtime wiring) ---
export const InvokeDesktopRpc: any = undefined;
