// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zkl` / export `mc`.
// `classifyActivityItemGrouping` used to detect agent-activity-ish rows.

import uniqBy from "lodash/uniqBy";
import { classifyActivityItemGrouping } from "./classify-activity-item-grouping";

export type TurnItem = {
  type: string;
  completed?: boolean;
  heartbeatTrigger?: unknown;
  phase?: string;
  content?: string;
  structuredOutput?: unknown;
  elicitation?: {
    kind?: string;
    serverName?: string;
    approval?: { connector_id?: string };
    connector?: { connector_id?: string };
  };
  invocation?: { server?: string };
  callId?: string;
  arguments?: { id?: string };
  result?: { automationId?: string };
  approvalRequestId?: string | null;
  success?: unknown;
  output?: { exitCode?: number };
  commandExecutionItemId?: string;
  [key: string]: unknown;
};

function isPendingPatchApproval(item: TurnItem): boolean {
  return (
    item.type === "patch" &&
    item.approvalRequestId != null &&
    item.success == null
  );
}

function isPendingExecApproval(item: TurnItem): boolean {
  return (
    item.type === "exec" &&
    item.approvalRequestId != null &&
    item.output?.exitCode === undefined
  );
}

function isAssistantMessage(item: TurnItem | null | undefined): boolean {
  return item?.type === "assistant-message";
}

function isSystemError(item: TurnItem | null | undefined): boolean {
  return item?.type === "system-error";
}

function popTrailingAutoReviews(items: TurnItem[]): TurnItem[] {
  const out: TurnItem[] = [];
  for (;;) {
    const last = items[items.length - 1];
    if (last?.type !== "automatic-approval-review") break;
    items.pop();
    out.push(last);
  }
  return out.reverse();
}

function itemCallId(item: TurnItem): string | null {
  if (
    item.type === "exec" ||
    item.type === "patch" ||
    item.type === "mcp-tool-call"
  ) {
    return item.type === "exec"
      ? ((item.commandExecutionItemId as string | undefined) ??
          (item.callId as string | undefined) ??
          null)
      : ((item.callId as string | undefined) ?? null);
  }
  return null;
}

function attachAutoReviews(items: TurnItem[]): TurnItem[] {
  const reviewsByTarget = new Map<string, TurnItem[]>();
  const targets = new Set<string>();
  for (const item of items) {
    const id = itemCallId(item);
    if (id != null) targets.add(id);
  }
  for (const item of items) {
    if (
      item.type === "automatic-approval-review" &&
      item.targetItemId != null &&
      targets.has(item.targetItemId as string)
    ) {
      const key = item.targetItemId as string;
      const list = reviewsByTarget.get(key);
      if (list == null) reviewsByTarget.set(key, [item]);
      else list.push(item);
    }
  }
  return items.flatMap((item) => {
    if (
      item.type === "automatic-approval-review" &&
      item.targetItemId != null &&
      reviewsByTarget.has(item.targetItemId as string)
    ) {
      return [];
    }
    const id = itemCallId(item);
    const reviews = id == null ? null : (reviewsByTarget.get(id) ?? null);
    return reviews == null
      ? [item]
      : [{ ...item, automaticApprovalReviews: reviews }];
  });
}

function elicitationServerName(item: TurnItem): string | null {
  const kind = item.elicitation?.kind;
  switch (kind) {
    case "formElicitation":
    case "openaiForm":
    case "generic":
    case "urlAction":
      return item.elicitation?.serverName?.trim() || null;
    case "mcpToolCall":
      return item.elicitation?.approval?.connector_id ?? null;
    case "connectorAuth":
      return item.elicitation?.connector?.connector_id ?? null;
    default:
      return null;
  }
}

function isClassifiableAgentItem(item: TurnItem): boolean {
  return classifyActivityItemGrouping(item) != null;
}

/** Partition a turn's items into markdown export buckets. */
export function partitionTurnItems(
  items: TurnItem[],
  status: string,
): {
  userItems: TurnItem[];
  agentItems: TurnItem[];
  automationUpdateItems: TurnItem[];
  assistantItem: TurnItem | null;
  toolOutputItems: TurnItem[];
  postAssistantItems: TurnItem[];
  systemEventItem: TurnItem | null;
  unifiedDiffItem: TurnItem | null;
  remoteTaskCreatedItems: TurnItem[];
  personalityChangedItems: TurnItem[];
  forkedFromConversationItems: TurnItem[];
  modelChangedItems: TurnItem[];
  modelReroutedItems: TurnItem[];
  subagentActivityItemGroups: TurnItem[][];
  todoListItem: TurnItem | null;
  proposedPlanItem: TurnItem | null;
  planImplementationItem: TurnItem | null;
  mcpServerElicitationItems: TurnItem[];
  permissionRequestItems: TurnItem[];
  approvalItem: TurnItem | null;
  userInputItem: TurnItem | null;
} {
  let approvalItem: TurnItem | null = null;
  let userInputItem: TurnItem | null = null;
  const userItems: TurnItem[] = [];
  let unifiedDiffItem: TurnItem | null = null;
  let todoListItem: TurnItem | null = null;
  let proposedPlanItem: TurnItem | null = null;
  let planImplementationItem: TurnItem | null = null;
  const mcpServerElicitationItems: TurnItem[] = [];
  const permissionRequestItems: TurnItem[] = [];
  const pendingElicitationServers = new Set<string>();
  const agentBucket: TurnItem[] = [];
  const automationUpdateItems: TurnItem[] = [];
  const toolOutputItems: TurnItem[] = [];
  const postAssistantItems: TurnItem[] = [];
  const remoteTaskCreatedItems: TurnItem[] = [];
  const personalityChangedItems: TurnItem[] = [];
  const forkedFromConversationItems: TurnItem[] = [];
  const modelChangedItems: TurnItem[] = [];
  const modelReroutedItems: TurnItem[] = [];
  const subagentActivityItemGroups: TurnItem[][] = [];
  let sawNonUser = false;
  let inSubagent = false;

  for (const item of items) {
    const startingSubagent = item.type === "subagent-activity" && !inSubagent;
    inSubagent = item.type === "subagent-activity";

    if (item.type === "user-message" && item.heartbeatTrigger != null) {
      userItems.push(item);
      continue;
    }
    if (!sawNonUser && item.type === "user-message") {
      userItems.push(item);
      continue;
    }
    sawNonUser = true;

    if (item.type === "turn-diff") unifiedDiffItem = item;
    if (item.type === "todo-list") todoListItem = item;
    if (item.type === "proposed-plan") {
      proposedPlanItem = item;
      continue;
    }
    if (item.type === "remote-task-created") remoteTaskCreatedItems.push(item);
    if (item.type === "personality-changed") personalityChangedItems.push(item);
    if (item.type === "forked-from-conversation") {
      forkedFromConversationItems.push(item);
    }
    if (item.type === "model-changed") {
      modelChangedItems.push(item);
      continue;
    }
    if (item.type === "model-rerouted") {
      modelReroutedItems.push(item);
      continue;
    }
    if (item.type === "plan-implementation") {
      planImplementationItem = item;
      continue;
    }
    if (item.type === "mcp-server-elicitation") {
      if (item.completed === true) {
        if (item.elicitation?.kind !== "unsupportedOpenAIForm") {
          agentBucket.push(item);
        }
        continue;
      }
      const server = elicitationServerName(item);
      if (server != null) pendingElicitationServers.add(server);
      mcpServerElicitationItems.push(item);
      continue;
    }
    if (item.type === "permission-request") {
      permissionRequestItems.push(item);
      continue;
    }
    if (isPendingPatchApproval(item) || isPendingExecApproval(item)) {
      approvalItem = item;
      continue;
    }
    if (item.type === "userInput" && item.completed !== true) {
      userInputItem = item;
      continue;
    }
    if (item.type === "user-message") {
      agentBucket.push(item);
      continue;
    }
    if (item.type === "generated-image") {
      toolOutputItems.push(item);
      continue;
    }
    if (item.type === "automation-update") {
      automationUpdateItems.push(item);
      continue;
    }
    if (item.type === "auto-review-interruption-warning") {
      postAssistantItems.push(item);
      continue;
    }
    if (item.type === "subagent-activity") {
      if (startingSubagent) {
        agentBucket.push(item);
        subagentActivityItemGroups.push([item]);
      } else {
        subagentActivityItemGroups.at(-1)?.push(item);
      }
      continue;
    }
    if (
      item.type === "reasoning" ||
      item.type === "automatic-approval-review" ||
      isClassifiableAgentItem(item)
    ) {
      agentBucket.push(item);
    }
  }

  const withReviews = attachAutoReviews(agentBucket);
  const trailingReviews = popTrailingAutoReviews(withReviews);
  let filtered =
    pendingElicitationServers.size > 0
      ? withReviews.filter(
          (item) =>
            item.type !== "mcp-tool-call" ||
            item.completed ||
            !pendingElicitationServers.has(
              (item.invocation?.server as string | undefined) ?? "",
            ),
        )
      : withReviews;

  let assistantIndex = filtered.length - 1;
  while (filtered[assistantIndex]?.type === "mcp-server-elicitation") {
    --assistantIndex;
  }
  if (!isAssistantMessage(filtered[assistantIndex])) {
    let i = assistantIndex;
    for (;;) {
      const cur = filtered[i];
      if (cur?.type !== "reasoning" || !cur.completed) break;
      --i;
    }
    const candidate = filtered[i];
    if (isAssistantMessage(candidate) && candidate.phase === "final_answer") {
      assistantIndex = i;
    }
  }

  const rawAssistant = filtered[assistantIndex];
  const assistant = isAssistantMessage(rawAssistant) ? rawAssistant : null;
  const hasAssistantBody =
    (assistant?.content?.trim().length ?? 0) > 0 ||
    !!assistant?.structuredOutput;
  if (assistant) {
    filtered.splice(assistantIndex, 1);
    postAssistantItems.push(...trailingReviews);
  } else {
    filtered.push(...trailingReviews);
  }

  const last = filtered[filtered.length - 1];
  const systemEventItem =
    status !== "in_progress" && !hasAssistantBody && isSystemError(last)
      ? last
      : null;
  if (systemEventItem) filtered.pop();

  const assistantItem =
    assistant != null && assistant.completed && automationUpdateItems.length > 0
      ? {
          ...assistant,
          automationCitations: uniqBy(
            [...automationUpdateItems].reverse(),
            (item) =>
              (item.result?.automationId as string | undefined) ??
              (item.arguments?.id as string | undefined) ??
              (item.callId as string | undefined),
          ).reverse(),
        }
      : assistant;

  return {
    userItems,
    agentItems: filtered,
    automationUpdateItems: assistant == null ? automationUpdateItems : [],
    assistantItem,
    toolOutputItems,
    postAssistantItems,
    systemEventItem,
    unifiedDiffItem,
    remoteTaskCreatedItems,
    personalityChangedItems,
    forkedFromConversationItems,
    modelChangedItems,
    modelReroutedItems,
    subagentActivityItemGroups,
    todoListItem,
    proposedPlanItem,
    planImplementationItem,
    mcpServerElicitationItems,
    permissionRequestItems,
    approvalItem,
    userInputItem,
  };
}
