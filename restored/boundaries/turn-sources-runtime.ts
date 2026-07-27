// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `W0i`) / export `cB`.

export type BindCallMcpToolPeers = {
  Bf: (...args: unknown[]) => unknown;
  G0i: (...args: unknown[]) => unknown;
  qwt: (...args: unknown[]) => unknown;
};
let peers: BindCallMcpToolPeers | null = null;

/** Wire bindCallMcpTool peers once companions land. */
export function setBindCallMcpToolPeers(next: BindCallMcpToolPeers): void {
  peers = next;
}

/**
 * Bundle export `cB` / internal `W0i`.
 */
export async function bindCallMcpTool(
  e: unknown,
  t: unknown,
  n: unknown,
  r: unknown,
  i: unknown,
  { hostToolCallMetadata, threadId }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("bindCallMcpTool peers are not configured");
  }
  return peers.qwt.parse(
    await peers.Bf("call-mcp-tool", {
      arguments: i,
      hostId: t,
      ...(hostToolCallMetadata == null
        ? {}
        : {
            _meta: hostToolCallMetadata,
          }),
      server: n,
      threadId: threadId ?? (await peers.G0i(e, t)),
      tool: r,
    }),
  );
}
