// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `NGc` / export `Od` — attach grouping mode for activity rows.
// Normalizers / mcp-status helpers left injectable.

export type ActivityGrouping = "groupable" | "standalone";

export type ActivityItemLike = {
  type?: string;
  query?: string;
  completed?: boolean;
  status?: string;
  elicitation?: {
    kind?: string;
    schema?: { properties?: Record<string, unknown> };
  };
  [key: string]: unknown;
};

type WrapFn = (item: ActivityItemLike, grouping: ActivityGrouping) => unknown;

type NormalizeFn = (item: ActivityItemLike) => ActivityItemLike;
type McpStandaloneFn = (args: {
  item: ActivityItemLike;
  mcpServerStatuses?: unknown;
}) => boolean;
type DynamicRendererFn = (
  item: ActivityItemLike,
) => { standaloneInConversation?: boolean } | null | undefined;
type HasOpenAiFormFieldsFn = (propertySchema: unknown) => boolean;

let wrapActivityItem: WrapFn | null = null;
let normalizeActivityItem: NormalizeFn | null = null;
let isMcpStandalone: McpStandaloneFn | null = null;
let resolveDynamicRenderer: DynamicRendererFn | null = null;
let hasOpenAiFormFields: HasOpenAiFormFieldsFn | null = null;

export function setActivityItemWrapper(fn: WrapFn): void {
  wrapActivityItem = fn;
}
export function setActivityItemNormalizer(fn: NormalizeFn): void {
  normalizeActivityItem = fn;
}
export function setMcpStandaloneChecker(fn: McpStandaloneFn): void {
  isMcpStandalone = fn;
}
export function setDynamicToolCallRendererResolver(
  fn: DynamicRendererFn,
): void {
  resolveDynamicRenderer = fn;
}
export function setOpenAiFormFieldsChecker(fn: HasOpenAiFormFieldsFn): void {
  hasOpenAiFormFields = fn;
}

function wrap(
  item: ActivityItemLike,
  grouping: ActivityGrouping,
): unknown | null {
  return wrapActivityItem?.(item, grouping) ?? { item, grouping };
}

export function classifyActivityItemGrouping(
  item: ActivityItemLike,
  options: {
    dynamicToolCallRenderer?: {
      standaloneInConversation?: boolean;
    } | null;
    mcpServerStatuses?: unknown;
  } = {},
): unknown | null {
  const normalize = normalizeActivityItem ?? ((value) => value);
  switch (item.type) {
    case "exec":
    case "patch":
      return wrap(normalize(item), "groupable");
    case "web-search":
      return typeof item.query === "string" && item.query.trim().length === 0
        ? null
        : wrap(item, "groupable");
    case "mcp-tool-call":
      return wrap(
        normalize(item),
        isMcpStandalone?.({
          item,
          mcpServerStatuses: options.mcpServerStatuses,
        })
          ? "standalone"
          : "groupable",
      );
    case "dynamic-tool-call":
      return wrap(
        item,
        (options.dynamicToolCallRenderer ?? resolveDynamicRenderer?.(item))
          ?.standaloneInConversation === true
          ? "standalone"
          : "groupable",
      );
    case "image-view":
      return wrap(item, "standalone");
    case "mcp-server-elicitation":
      if (
        !item.completed ||
        item.elicitation?.kind === "unsupportedOpenAIForm"
      ) {
        return null;
      }
      return wrap(
        item,
        item.elicitation?.kind === "openaiForm" &&
          Object.values(item.elicitation.schema?.properties ?? {}).some((p) =>
            hasOpenAiFormFields?.(p),
          )
          ? "groupable"
          : "standalone",
      );
    case "automatic-approval-review":
      switch (item.status) {
        case "approved":
          return null;
        case "inProgress":
          return wrap(item, "groupable");
        case "aborted":
        case "denied":
        case "timedOut":
          return wrap(item, "standalone");
        default:
          return null;
      }
    case "assistant-message":
    case "auto-review-interruption-warning":
    case "context-compaction":
    case "multi-agent-action":
    case "realtime-transcript":
    case "stream-error":
    case "subagent-activity":
    case "system-error":
    case "user-input-response":
    case "user-message":
    case "worked-for":
    case "worktree-init":
      return wrap(item, "standalone");
    case "reasoning":
    case "automation-update":
    case "forked-from-conversation":
    case "generated-image":
    case "model-changed":
    case "model-rerouted":
    case "permission-request":
    case "personality-changed":
    case "plan-implementation":
    case "proposed-plan":
    case "remote-task-created":
    case "todo-list":
    case "turn-diff":
    case "userInput":
    case "steered":
      return null;
    default:
      return null;
  }
}
