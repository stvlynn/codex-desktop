// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iJn` / export `H8`.

import { wrapMcpToolCallResult } from "./wrap-mcp-tool-call-result";
import { nodeReplToolSurfaceFromMeta } from "./node-repl-tool-surface-from-meta";

export type McpToolCallItemInput = {
  id: string;
  server: string;
  tool: string;
  arguments?: unknown;
  pluginId?: string | null;
  appContext?: { resourceUri?: string | null } | null;
  mcpAppResourceUri?: string | null;
  result?: {
    content: unknown[];
    structuredContent?: unknown;
    _meta?: Record<string, unknown> | null;
  } | null;
  error?: Error | null;
  durationMs?: number | null;
  status?: string;
};

/** Build an `mcp-tool-call` conversation item from a tool invocation. */
export function buildMcpToolCallItem(
  thread: { params: { threadId: string } },
  toolCall: McpToolCallItemInput,
): {
  type: "mcp-tool-call";
  threadId: string;
  callId: string;
  functionName: string;
  mcpAppResourceUri: string | null | undefined;
  pluginId: string | null | undefined;
  source: unknown;
  invocation: { server: string; tool: string; arguments: unknown };
  result: ReturnType<typeof wrapMcpToolCallResult>;
  durationMs: number | null | undefined;
  completed: boolean;
} {
  return {
    type: "mcp-tool-call",
    threadId: thread.params.threadId,
    callId: toolCall.id,
    functionName: `${toolCall.server}__${toolCall.tool}`,
    mcpAppResourceUri:
      toolCall.appContext?.resourceUri ?? toolCall.mcpAppResourceUri,
    pluginId: toolCall.pluginId,
    source: nodeReplToolSurfaceFromMeta({
      resultMeta: toolCall.result?._meta ?? null,
      serverName: toolCall.server,
    }),
    invocation: {
      server: toolCall.server,
      tool: toolCall.tool,
      arguments: toolCall.arguments,
    },
    result: wrapMcpToolCallResult(toolCall.result, toolCall.error),
    durationMs: toolCall.durationMs,
    completed:
      toolCall.status !== "inProgress" && toolCall.status !== "pending",
  };
}
