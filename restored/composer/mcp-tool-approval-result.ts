// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `A_` / export `Zot`.

export type McpToolApprovalAction = "accept" | "decline" | "cancel";

/** Build MCP tool-call approval result payload. */
export function buildMcpToolApprovalResult(
  action: McpToolApprovalAction,
  meta: unknown = null,
  content: Record<string, unknown> = {},
): {
  action: McpToolApprovalAction;
  content: Record<string, unknown> | null;
  _meta: unknown;
} {
  switch (action) {
    case "accept":
      return { action, content, _meta: meta };
    case "decline":
    case "cancel":
      return { action, content: null, _meta: meta };
  }
}
