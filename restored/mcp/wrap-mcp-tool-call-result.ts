// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dDt` / export `Hot`. Content parts kept as opaque unknowns (zod parser deferred).

export type McpToolCallSuccess = {
  type: "success";
  content: unknown[];
  structuredContent: unknown;
  raw: unknown;
};

export type McpToolCallFailure = {
  type: "error";
  kind: "protocol";
  error: string;
  rawError: Error;
};

/** Wrap an MCP tool result / error into the app's success|error envelope. */
export function wrapMcpToolCallResult(
  result:
    | {
        content: unknown[];
        structuredContent?: unknown;
      }
    | null
    | undefined,
  error: Error | null | undefined,
): McpToolCallSuccess | McpToolCallFailure | null {
  if (!result && !error) return null;
  if (error) {
    return {
      type: "error",
      kind: "protocol",
      error: error.message,
      rawError: error,
    };
  }
  if (result) {
    return {
      type: "success",
      content: result.content,
      structuredContent: result.structuredContent,
      raw: result,
    };
  }
  return null;
}
