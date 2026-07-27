// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `fVa` / export `BM`.

/** Whether a mention/search item is an MCP capability. */
export function isMcpCapabilityKind(
  item: { kind?: string } | null | undefined,
): boolean {
  return item?.kind === "mcp-capability";
}
