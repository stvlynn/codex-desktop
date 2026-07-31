// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (per-item type dispatch).

import { formatAssistantMessage, formatUserMessage } from "./format-messages";
import {
  formatAutomaticApprovalReview,
  formatExecItem,
  formatGeneratedImage,
  formatMcpToolCallItem,
  formatPatchItem,
  formatTodoListItem,
  formatTurnDiffItem,
} from "./format-tool-items";
import {
  formatTitledContentBlock,
  formatTitledLinesBlock,
} from "./details-blocks";
import { wrapInlineCode } from "./code-fences";
import type { PathContext } from "./types";

export function formatTurnItemMarkdown(
  item: { type: string; [key: string]: unknown },
  pathContext: PathContext,
): string | null {
  switch (item.type) {
    case "user-message":
      return formatUserMessage(item as never, {
        escapeDetailsTags: true,
        pathContext,
      });
    case "assistant-message":
      return formatAssistantMessage(item as never, {
        escapeDetailsTags: true,
        pathContext,
      });
    case "reasoning":
      return null;
    case "proposed-plan":
      return formatTitledContentBlock("Plan", item.content as string);
    case "todo-list":
      return formatTodoListItem(item as never);
    case "exec":
      return formatExecItem(item as never);
    case "patch":
      return formatPatchItem(item as never);
    case "turn-diff":
      return formatTurnDiffItem(item as never);
    case "web-search":
      return `Searched the web for ${wrapInlineCode(item.query as string)}`;
    case "generated-image":
      return formatGeneratedImage(
        item.src as string | null | undefined,
        item.status as string,
      );
    case "image-view":
      return item.imageCount === 1
        ? "Viewed an image"
        : `Viewed ${item.imageCount as number} images`;
    case "userInput":
      return formatTitledLinesBlock(
        (item.completed as boolean)
          ? "User input request"
          : "User input requested",
        (item.questions as Array<{ question: string }>).map(
          (question) => `- ${question.question}`,
        ),
      );
    case "user-input-response":
      return formatTitledLinesBlock(
        "User input response",
        (
          item.questionsAndAnswers as Array<{
            question: string;
            answers: string[];
          }>
        ).flatMap((entry) => [
          `- ${entry.question}`,
          ...entry.answers.map((answer) => `  - ${answer}`),
        ]),
      );
    case "mcp-server-elicitation":
      return formatTitledLinesBlock("MCP server elicitation", [
        (item.completed as boolean) ? "Status: completed" : "Status: pending",
        `Action: ${(item.action as string | null | undefined) ?? "none"}`,
      ]);
    case "permission-request":
      return formatTitledLinesBlock("Permission request", [
        (item.completed as boolean) ? "Status: completed" : "Status: pending",
        `Reason: ${(item.reason as string | null | undefined) ?? "Not provided"}`,
        `Response: ${item.response == null ? "none" : "granted"}`,
      ]);
    case "mcp-tool-call":
      return formatMcpToolCallItem(item as never);
    case "automation-update":
      return formatTitledLinesBlock("Scheduled task update", [
        `Mode: ${(item.result as { mode?: string } | null | undefined)?.mode ?? "pending"}`,
        `Automation ID: ${(item.result as { automationId?: string } | null | undefined)?.automationId ?? "pending"}`,
      ]);
    case "dynamic-tool-call":
      return formatTitledLinesBlock("Tool call", [
        `Tool: ${item.tool as string}`,
        (item.completed as boolean) ? "Status: completed" : "Status: running",
      ]);
    case "worktree-init":
      return formatTitledLinesBlock("Worktree initialization", [
        "Worktree: created",
        item.setup == null
          ? null
          : `Environment setup: ${(item.setup as { outcome: string }).outcome}`,
      ]);
    case "automatic-approval-review":
      return formatAutomaticApprovalReview(item as never);
    case "multi-agent-action":
      return formatTitledLinesBlock("Subagent action", [
        `Action: ${item.action as string}`,
        `Status: ${item.status as string}`,
        `Receiver threads: ${(item.receiverThreads as unknown[]).length}`,
        item.prompt == null ? null : `Prompt: ${item.prompt as string}`,
      ]);
    case "subagent-activity":
      return null;
    case "plan-implementation":
      return formatTitledLinesBlock("Plan implementation", [
        (item.isCompleted as boolean) ? "Status: completed" : "Status: running",
        item.planContent as string,
      ]);
    case "remote-task-created":
      return formatTitledLinesBlock("Remote task created", [
        `Task ID: ${item.taskId as string}`,
      ]);
    case "context-compaction":
      return formatTitledLinesBlock("Context compaction", [
        `Source: ${item.source as string}`,
        (item.completed as boolean) ? "Status: completed" : "Status: running",
      ]);
    case "personality-changed":
      return formatTitledLinesBlock("Personality changed", [
        `Personality: ${item.personality as string}`,
      ]);
    case "forked-from-conversation":
      return formatTitledLinesBlock("Copied conversation", [
        `Source conversation: ${item.sourceConversationId as string}`,
      ]);
    case "model-changed":
      return formatTitledLinesBlock("Model changed", [
        `${item.fromModel as string} -> ${item.toModel as string}`,
      ]);
    case "model-rerouted":
      return formatTitledLinesBlock("Model rerouted", [
        `${item.fromModel as string} -> ${item.toModel as string}`,
        `Reason: ${item.reason as string}`,
      ]);
    case "auto-review-interruption-warning":
      return null;
    case "system-error":
      return formatTitledContentBlock("System error", item.content as string);
    case "stream-error":
      return formatTitledLinesBlock("Stream error", [
        item.content as string,
        item.additionalDetails as string,
      ]);
    case "realtime-transcript":
      return formatTitledLinesBlock(
        "Realtime transcript",
        (item.entries as Array<{ role: string; text: string }>).map(
          ({ role, text }) => `${role}: ${text}`,
        ),
      );
    case "steered":
    case "worked-for":
      return null;
    default:
      return null;
  }
}
