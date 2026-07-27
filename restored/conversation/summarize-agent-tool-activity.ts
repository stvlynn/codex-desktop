// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `QGc` / export `wd`.
// Full tool-activity aggregation (`WGc`/`EUc`/`xUc`/`yGc`) left injectable.

import {
  buildRenderableAgentItems,
  type AgentItem,
} from "./build-renderable-agent-items";

export type ToolActivitySummary = {
  createdFileCount: number;
  editedFileCount: number;
  deletedFileCount: number;
  exploredFileCount: number;
  searchCount: number;
  listCount: number;
  deniedRequestCount: number;
  timedOutRequestCount: number;
  commandCount: number;
  mcpToolCallCount: number;
  webSearchCount: number;
};

export type AgentToolActivityResult = {
  toolActivity: ToolActivitySummary;
  completedHeader: unknown;
};

type SummarizeFn = (
  items: Array<{ item: AgentItem }>,
  options?: {
    mcpServerStatuses?: unknown;
    resolvedApps?: unknown[];
    modelProvider?: unknown;
    isTurnCancelled?: boolean;
  },
) => AgentToolActivityResult;

const EMPTY_ACTIVITY: ToolActivitySummary = {
  createdFileCount: 0,
  editedFileCount: 0,
  deletedFileCount: 0,
  exploredFileCount: 0,
  searchCount: 0,
  listCount: 0,
  deniedRequestCount: 0,
  timedOutRequestCount: 0,
  commandCount: 0,
  mcpToolCallCount: 0,
  webSearchCount: 0,
};

let summarizeImpl: SummarizeFn | null = null;

/** Wire full tool-activity aggregator (`WGc` cluster). */
export function setAgentToolActivitySummarizer(fn: SummarizeFn): void {
  summarizeImpl = fn;
}

function defaultSummarize(
  items: Array<{ item: AgentItem }>,
): AgentToolActivityResult {
  // Lightweight fallback: count exec/patch/mcp/web-search for markdown headers.
  const activity = { ...EMPTY_ACTIVITY };
  buildRenderableAgentItems({
    agentItems: items.map(({ item }) => item),
    isTurnInProgress: false,
    isAnyNonAgentItemInProgress: false,
  });
  for (const { item } of items) {
    switch (item.type) {
      case "exec":
        activity.commandCount += 1;
        if (item.parsedCmd?.type === "read") activity.exploredFileCount += 1;
        if (item.parsedCmd?.type === "search") activity.searchCount += 1;
        if (item.parsedCmd?.type === "list_files") activity.listCount += 1;
        break;
      case "patch":
        activity.editedFileCount += 1;
        break;
      case "mcp-tool-call":
      case "dynamic-tool-call":
        activity.mcpToolCallCount += 1;
        break;
      case "web-search":
        activity.webSearchCount += 1;
        break;
    }
  }
  return { toolActivity: activity, completedHeader: null };
}

/** Summarize grouped agent items into tool-activity counts. */
export function summarizeAgentToolActivity(
  items: Array<{ item: AgentItem }>,
  options: {
    mcpServerStatuses?: unknown;
    resolvedApps?: unknown[];
    modelProvider?: unknown;
    isTurnCancelled?: boolean;
  } = {},
): AgentToolActivityResult {
  return (summarizeImpl ?? defaultSummarize)(items, options);
}
