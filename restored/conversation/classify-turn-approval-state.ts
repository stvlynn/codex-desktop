// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `cTa` / export `wF` — classify a turn message into an approval / tool item.

import { z } from "../vendor/zod";

export type TurnMessageLike = {
  author: { role: string };
  recipient?: string | null;
  status?: string | null;
  metadata?: unknown;
};

export type TurnApprovalState = {
  completed: boolean;
  item: unknown;
  pairKey: string | null;
  targetMessageIds?: Array<string | null | undefined>;
  resolvedTargetMessageId?: string;
  rawPayload?: unknown;
  toolIcons?: unknown[];
} | null;

export type ClassifyTurnApprovalStateDeps = {
  /** Bundle `dwa` — raw message payload. */
  rawPayload: (message: TurnMessageLike) => unknown;
  /** Bundle `lwa` — content parts array. */
  contentParts: (message: TurnMessageLike) => unknown[];
  /** Bundle `oTa` — pending approval request item. */
  pendingApprovalItem: (message: TurnMessageLike) => {
    allowTargetMessageId: string;
    alwaysAllowTargetMessageId?: string | null;
    denyTargetMessageId: string;
  } | null;
  /** Bundle `sTa` — resolved approval target message id. */
  resolvedApprovalTargetId: (message: TurnMessageLike) => string | null;
  /** Bundle `dDt` — MCP tool result envelope. */
  buildMcpToolResult: (
    result: {
      _meta: unknown;
      content: unknown;
      structuredContent: unknown;
    } | null,
    error: { message: string } | null,
  ) => unknown;
  /** Bundle `UV` — record/object coerce. */
  asRecord: (value: unknown) => Record<string, unknown> | null | undefined;
  /** Bundle `WV` — string coerce. */
  asString: (value: unknown) => string | null | undefined;
  /** Bundle `HV` — stable call id from message. */
  callIdFromMessage: (message: TurnMessageLike) => string;
  /** Bundle `uwa` — normalize tool icon list. */
  normalizeToolIcons: (value: unknown) => unknown[];
};

let deps: ClassifyTurnApprovalStateDeps | null = null;

const turnPlanSchema = z.object({
  explanation: z.string().nullable().optional(),
  plan: z.array(
    z.object({
      status: z.enum(["pending", "in_progress", "completed"]),
      step: z.string(),
    }),
  ),
});

const mcpResultBodySchema = z.object({
  _meta: z.unknown().nullable().optional(),
  content: z.array(z.unknown()),
  structuredContent: z.unknown().nullable().optional(),
});

const mcpToolCallSchema = z.object({
  arguments: z.unknown(),
  durationMs: z.number().nullable().optional(),
  error: z.object({ message: z.string() }).nullable().optional(),
  id: z.string(),
  mcpAppResourceUri: z.string().nullish(),
  pluginId: z.string().nullable().optional(),
  result: mcpResultBodySchema.nullable().optional(),
  server: z.string(),
  status: z.string(),
  tool: z.string(),
  type: z.literal("mcpToolCall"),
});

const dynamicToolCallSchema = z.object({
  arguments: z.unknown(),
  contentItems: z.array(z.unknown()).nullable().optional(),
  id: z.string(),
  namespace: z.string().nullable().optional(),
  status: z.string(),
  success: z.unknown().nullable().optional(),
  tool: z.string(),
});

const apiToolCallSchema = z.object({
  args: z.unknown(),
  path: z.string(),
});

export function setClassifyTurnApprovalStateDeps(
  next: ClassifyTurnApprovalStateDeps,
): void {
  deps = next;
}

function requireDeps(): ClassifyTurnApprovalStateDeps {
  if (deps == null) {
    throw new Error("classifyTurnApprovalState deps have not been configured");
  }
  return deps;
}

/** Bundle `pTa`. */
function isToolCallCompleted(status: string): boolean {
  return status !== "inProgress" && status !== "in_progress";
}

/** Bundle `_Ta`. */
function invokingResourceFromMessage(
  message: TurnMessageLike,
): Record<string, unknown> | null | undefined {
  const { asRecord } = requireDeps();
  const metadata = asRecord(message.metadata);
  return (
    asRecord(asRecord(metadata?.__internal)?.invoking_resource) ??
    asRecord(metadata?.invoking_resource)
  );
}

/** Bundle `gTa`. */
function invocationResourceUriFromMessage(
  message: TurnMessageLike,
): string | null | undefined {
  const { asRecord, asString } = requireDeps();
  const metadata = asRecord(message.metadata);
  return asString(
    (
      invokingResourceFromMessage(message) ??
      asRecord(metadata?.invoked_resource)
    )?.resource_uri,
  );
}

/** Bundle `hTa`. */
function mcpPairKey(
  message: TurnMessageLike,
  fallback?: string | null,
): string {
  return `mcp:${invocationResourceUriFromMessage(message) ?? fallback ?? "api_tool"}`;
}

/** Bundle `mTa`. */
function toolIconsFromMessage(message: TurnMessageLike): unknown[] | undefined {
  const { asRecord, normalizeToolIcons } = requireDeps();
  const icons = normalizeToolIcons(asRecord(message.metadata)?.tool_icons);
  return icons.length === 0 ? undefined : icons;
}

/** Bundle `vTa`. */
function dynamicToolFromRecipient(message: TurnMessageLike): {
  completed: boolean;
  pairKey: string | null;
  tool: string;
} | null {
  const { asString } = requireDeps();
  const recipient = asString(message.recipient);
  if (recipient?.startsWith("functions.") === true) {
    const tool = recipient.slice("functions.".length);
    return { completed: false, pairKey: `dynamic:${tool}`, tool };
  }
  if (recipient?.startsWith("local.") === true) {
    return {
      completed: message.status !== "in_progress",
      pairKey: null,
      tool: recipient.slice("local.".length),
    };
  }
  return null;
}

/** Bundle `dTa`. */
function completedToolResourceFallback(
  message: TurnMessageLike,
  rawPayload: unknown,
): TurnApprovalState {
  const { asRecord } = requireDeps();
  const invoked = asRecord(asRecord(message.metadata)?.invoked_resource);
  return message.author.role === "tool" && invoked != null
    ? {
        completed: true,
        item: null,
        pairKey: mcpPairKey(message),
        rawPayload,
        toolIcons: toolIconsFromMessage(message),
      }
    : null;
}

/** Bundle `cTa` / export `wF`. */
export function classifyTurnApprovalState(
  message: TurnMessageLike,
): TurnApprovalState {
  const d = requireDeps();
  const rawPayload = d.rawPayload(message);
  const parts = d.contentParts(message);
  const pending = d.pendingApprovalItem(message);
  if (pending != null) {
    return {
      completed: false,
      item: pending,
      pairKey: null,
      targetMessageIds: [
        pending.allowTargetMessageId,
        ...(pending.alwaysAllowTargetMessageId == null
          ? []
          : [pending.alwaysAllowTargetMessageId]),
        pending.denyTargetMessageId,
      ],
    };
  }
  const resolved = d.resolvedApprovalTargetId(message);
  if (resolved != null) {
    return {
      completed: true,
      item: null,
      pairKey: null,
      resolvedTargetMessageId: resolved,
    };
  }
  if (message.recipient === "turn_plan.update_turn_plan") {
    for (const part of parts) {
      const parsed = turnPlanSchema.safeParse(part);
      if (parsed.success) {
        return {
          completed: true,
          item: {
            explanation: parsed.data.explanation ?? null,
            plan: parsed.data.plan,
            type: "todo-list",
          },
          pairKey: null,
        };
      }
    }
    return null;
  }
  if (message.author.role === "tool") {
    for (const part of parts) {
      const mcp = mcpToolCallSchema.safeParse(part);
      if (mcp.success) {
        const data = mcp.data;
        const completed = isToolCallCompleted(data.status);
        return {
          completed,
          item: {
            callId: data.id,
            completed,
            durationMs: data.durationMs ?? null,
            functionName: `${data.server}__${data.tool}`,
            invocation: {
              arguments: data.arguments,
              server: data.server,
              tool: data.tool,
            },
            invocationResourceUri:
              invocationResourceUriFromMessage(message) ?? undefined,
            mcpAppResourceUri: data.mcpAppResourceUri ?? undefined,
            pluginId: data.pluginId,
            result: d.buildMcpToolResult(
              data.result == null
                ? null
                : {
                    _meta: data.result._meta ?? null,
                    content: data.result.content,
                    structuredContent: data.result.structuredContent ?? null,
                  },
              data.error ?? null,
            ),
            source: null,
            threadId: "chatgpt",
            toolIcons: toolIconsFromMessage(message),
            type: "mcp-tool-call",
          },
          pairKey: mcpPairKey(message, data.mcpAppResourceUri ?? undefined),
        };
      }
      const dynamic = dynamicToolCallSchema.safeParse(part);
      if (dynamic.success) {
        const data = dynamic.data;
        const completed = isToolCallCompleted(data.status);
        return {
          completed,
          item: {
            arguments: data.arguments,
            callId: data.id,
            completed,
            contentItems: data.contentItems ?? null,
            namespace: data.namespace ?? null,
            success: data.success ?? null,
            tool: data.tool,
            type: "dynamic-tool-call",
          },
          pairKey: `dynamic:${data.tool}`,
        };
      }
    }
  }
  if (parts[0] == null)
    return completedToolResourceFallback(message, rawPayload);
  const first = parts[0];
  const apiCall = apiToolCallSchema.safeParse(first);
  const invoking = invokingResourceFromMessage(message);
  if (
    message.author.role === "assistant" &&
    message.recipient === "api_tool.call_tool" &&
    apiCall.success
  ) {
    const path =
      d.asString(invoking?.recipient) ??
      apiCall.data.path.replace(/^\//, "").replace("/", ".");
    const [server = "mcp", ...rest] = path.split(".");
    const tool = rest.join(".") || path;
    return {
      completed: false,
      item: {
        callId: d.callIdFromMessage(message),
        completed: false,
        durationMs: null,
        functionName: `${server}__${tool}`,
        invocation: {
          arguments: apiCall.data.args,
          server,
          tool,
        },
        invocationResourceUri: d.asString(invoking?.resource_uri) ?? undefined,
        mcpAppResourceUri: undefined,
        result: null,
        source: null,
        threadId: "chatgpt",
        toolIcons: toolIconsFromMessage(message),
        type: "mcp-tool-call",
      },
      pairKey: mcpPairKey(message, apiCall.data.path),
    };
  }
  const dynamicRecipient = dynamicToolFromRecipient(message);
  const argsParsed = z.unknown().safeParse(first);
  return message.author.role === "assistant" &&
    dynamicRecipient != null &&
    argsParsed.success
    ? {
        completed: dynamicRecipient.completed,
        item: {
          arguments: argsParsed.data,
          callId: d.callIdFromMessage(message),
          completed: dynamicRecipient.completed,
          namespace: null,
          tool: dynamicRecipient.tool,
          type: "dynamic-tool-call",
        },
        pairKey: dynamicRecipient.pairKey,
      }
    : completedToolResourceFallback(message, rawPayload);
}
