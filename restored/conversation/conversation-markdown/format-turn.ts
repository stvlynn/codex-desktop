// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (single-turn markdown assembly).

import {
  identityCwd,
  isUnderProjectlessOutput,
} from "../../utils/workspace-paths";
import { rewriteFileCitationMarkers } from "../../markdown/rewrite-file-citation-markers";
import { partitionTurnItems } from "../partition-turn-items";
import { groupClassifiedAgentItems } from "../group-classified-agent-items";
import { createPathContext } from "./path-context";
import {
  formatAssistantMessage,
  formatUserMessageAsQuote,
} from "./format-messages";
import { formatTurnItemMarkdown } from "./format-turn-item";
import { formatClassifiedAgentGroup } from "./format-agent-activity";
import {
  previousMessagesSummary,
  pushNonEmptyMarkdown,
  wrapQuotedDetailsBlock,
} from "./details-blocks";
import type { PathContext } from "./types";

type TurnLike = {
  cwd?: string | null;
  status?: string;
  items: unknown[];
};

export function formatTurnMarkdown(
  turn: TurnLike,
  conversationCwd: string | null | undefined,
  fallbackPathContext: PathContext,
  projectlessOutputDirectory: string | null | undefined,
): string | null {
  const sections: string[] = [];
  const pathContext =
    turn.cwd == null ? fallbackPathContext : createPathContext(turn.cwd);
  const shouldKeepCitationPath =
    projectlessOutputDirectory == null
      ? undefined
      : (resourcePath: string) =>
          isUnderProjectlessOutput({
            cwd:
              turn.cwd ??
              (conversationCwd == null ? null : identityCwd(conversationCwd)),
            projectlessOutputDirectory,
            resourcePath,
          });
  const {
    userItems,
    assistantItem,
    agentItems,
    automationUpdateItems,
    toolOutputItems,
    postAssistantItems,
    systemEventItem,
    remoteTaskCreatedItems,
    personalityChangedItems,
    forkedFromConversationItems,
    modelChangedItems,
    modelReroutedItems,
    todoListItem,
    proposedPlanItem,
    planImplementationItem,
    mcpServerElicitationItems,
    permissionRequestItems,
    approvalItem,
    userInputItem,
  } = partitionTurnItems(
    shouldKeepCitationPath == null
      ? turn.items
      : turn.items.map((rawItem) => {
          const item = rawItem as { type?: string; content?: string };
          return item.type === "assistant-message"
            ? {
                ...item,
                content: rewriteFileCitationMarkers(
                  item.content as string,
                  shouldKeepCitationPath,
                ),
              }
            : rawItem;
        }),
    turn.status,
  );

  for (const item of modelChangedItems) {
    pushNonEmptyMarkdown(
      sections,
      formatTurnItemMarkdown(item as never, pathContext),
    );
  }
  for (const item of userItems) {
    pushNonEmptyMarkdown(
      sections,
      formatUserMessageAsQuote(item as never, pathContext),
    );
  }
  for (const item of modelReroutedItems) {
    pushNonEmptyMarkdown(
      sections,
      formatTurnItemMarkdown(item as never, pathContext),
    );
  }

  const priorSections: string[] = [];
  for (const group of groupClassifiedAgentItems(agentItems)) {
    pushNonEmptyMarkdown(
      priorSections,
      formatClassifiedAgentGroup(group as never, pathContext),
    );
  }
  for (const item of automationUpdateItems) {
    pushNonEmptyMarkdown(
      priorSections,
      formatTurnItemMarkdown(item as never, pathContext),
    );
  }
  if (systemEventItem != null) {
    pushNonEmptyMarkdown(
      priorSections,
      formatTurnItemMarkdown(systemEventItem as never, pathContext),
    );
  }
  for (const item of toolOutputItems) {
    pushNonEmptyMarkdown(
      priorSections,
      formatTurnItemMarkdown(item as never, pathContext),
    );
  }
  for (const group of groupClassifiedAgentItems(postAssistantItems)) {
    pushNonEmptyMarkdown(
      priorSections,
      formatClassifiedAgentGroup(group as never, pathContext),
    );
  }
  if (todoListItem != null) {
    pushNonEmptyMarkdown(
      priorSections,
      formatTurnItemMarkdown(todoListItem as never, pathContext),
    );
  }
  if (proposedPlanItem != null) {
    pushNonEmptyMarkdown(
      priorSections,
      formatTurnItemMarkdown(proposedPlanItem as never, pathContext),
    );
  }
  if (planImplementationItem != null) {
    pushNonEmptyMarkdown(
      priorSections,
      formatTurnItemMarkdown(planImplementationItem as never, pathContext),
    );
  }
  for (const item of mcpServerElicitationItems) {
    pushNonEmptyMarkdown(
      priorSections,
      formatTurnItemMarkdown(item as never, pathContext),
    );
  }
  for (const item of permissionRequestItems) {
    pushNonEmptyMarkdown(
      priorSections,
      formatTurnItemMarkdown(item as never, pathContext),
    );
  }
  if (approvalItem != null) {
    pushNonEmptyMarkdown(
      priorSections,
      formatTurnItemMarkdown(approvalItem as never, pathContext),
    );
  }
  if (userInputItem != null) {
    pushNonEmptyMarkdown(
      priorSections,
      formatTurnItemMarkdown(userInputItem as never, pathContext),
    );
  }
  if (priorSections.length > 0) {
    sections.push(
      wrapQuotedDetailsBlock(
        previousMessagesSummary(priorSections.length),
        priorSections.join("\n\n"),
      ),
    );
  }
  if (assistantItem != null) {
    pushNonEmptyMarkdown(
      sections,
      formatAssistantMessage(assistantItem as never, { pathContext }),
    );
  }
  for (const item of remoteTaskCreatedItems) {
    pushNonEmptyMarkdown(
      sections,
      formatTurnItemMarkdown(item as never, pathContext),
    );
  }
  for (const item of personalityChangedItems) {
    pushNonEmptyMarkdown(
      sections,
      formatTurnItemMarkdown(item as never, pathContext),
    );
  }
  for (const item of forkedFromConversationItems) {
    pushNonEmptyMarkdown(
      sections,
      formatTurnItemMarkdown(item as never, pathContext),
    );
  }
  return sections.length === 0 ? null : sections.join("\n\n");
}
