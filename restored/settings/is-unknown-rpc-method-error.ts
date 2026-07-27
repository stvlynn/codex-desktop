// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Stage 3: Wave BZ — small real body for RPC method-not-found detection.

type RpcErrorLike = {
  code?: number;
  message?: string;
};

/**
 * True when an RPC error indicates an unknown/unsupported method.
 * Bundle export `j9` / internal `Ten`.
 */
export function isUnknownRpcMethodError(
  error: unknown,
  methodName: string,
): boolean {
  if (error == null || typeof error !== "object") return false;
  const parsed = error as RpcErrorLike;
  if (parsed.code === -32601) return true;
  const message = parsed.message?.toLowerCase();
  if (message == null) return false;
  const method = methodName.toLowerCase();
  return (
    message.includes("method not found") ||
    (message.includes("unknown method") && message.includes(method)) ||
    (message.includes("unknown variant") && message.includes(method))
  );
}
