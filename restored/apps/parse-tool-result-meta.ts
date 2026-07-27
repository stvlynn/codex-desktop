// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `Hqi`) / export `dV`.

export type ParseToolResultMetaPeers = {
  safeParse: (value: unknown) => { success: boolean; data?: unknown };
};

let peers: ParseToolResultMetaPeers | null = null;

/** Wire tool-result meta schema once companions land. */
export function setParseToolResultMetaPeers(
  next: ParseToolResultMetaPeers,
): void {
  peers = next;
}

/**
 * Bundle export `dV` / internal `Hqi`.
 * Parse `toolResult._meta` when it matches the Codex apps schema.
 */
export function parseToolResultMeta(args: {
  toolResult: { _meta?: unknown };
}): unknown {
  if (peers == null) {
    throw new Error("ParseToolResultMeta peers are not configured");
  }
  const parsed = peers.safeParse(args.toolResult._meta);
  return parsed.success ? parsed.data : null;
}
