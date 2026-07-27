// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hqi`) / export `dV`.

export type ParseToolResultMetaPeers = {
  Zqi: (...args: unknown[]) => unknown;
};
let peers: ParseToolResultMetaPeers | null = null;

/** Wire parseToolResultMeta peers once companions land. */
export function setParseToolResultMetaPeers(
  next: ParseToolResultMetaPeers,
): void {
  peers = next;
}

/**
 * Bundle export `dV` / internal `Hqi`.
 */
export function parseToolResultMeta({ toolResult }: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("parseToolResultMeta peers are not configured");
  }
  let t = peers.Zqi.safeParse(toolResult._meta);
  return t.success ? t.data : null;
}
