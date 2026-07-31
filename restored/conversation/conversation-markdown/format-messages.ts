// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (user/assistant message formatters).

import { stripPrivateUseMentionMarkers } from "../../composer/strip-private-use-mention-markers";
import { stripWritingDirectiveBlocks } from "../../markdown/strip-writing-directive-blocks";
import { EMPTY_PATH_CONTEXT } from "./constants";
import { escapeEmbeddedDetailsTags, normalizeNewlines } from "./escape-html";
import { wrapInlineCode } from "./code-fences";
import { formatAsBlockquote, formatTitledLinesBlock } from "./details-blocks";
import { formatQuotedWorkspacePath, formatWorkspacePath } from "./path-context";
import { prepareMessageContent } from "./message-content";
import type { MessageFormatOptions, PathContext } from "./types";

type UserMessageItem = {
  message: string;
  attachments: Array<{ label: string; path: string }>;
  images: string[];
  comments?: Array<{
    path: string;
    body: string;
    lineRange?: string | null;
  }> | null;
  referencesPriorConversation?: boolean;
  reviewMode?: boolean;
  pullRequestFixMode?: boolean;
  autoResolveSync?: boolean;
  pullRequestCheckNames?: string[] | null;
  pullRequestMergeConflictNumber?: number | null;
};

type AssistantMessageItem = {
  content: string;
};

export function formatUserMessageContextLines(
  item: UserMessageItem,
  pathContext: PathContext,
): string[] {
  const lines: string[] = [];
  if (item.attachments.length > 0) {
    lines.push("Attachments:");
    for (const attachment of item.attachments) {
      lines.push(
        `- ${attachment.label}: ${formatQuotedWorkspacePath(attachment.path, pathContext)}`,
      );
    }
  }
  if (item.images.length > 0) {
    lines.push("Images:");
    for (const imagePath of item.images) {
      lines.push(`- ${formatQuotedWorkspacePath(imagePath, pathContext)}`);
    }
  }
  if (item.comments != null && item.comments.length > 0) {
    lines.push("Comments:");
    for (const comment of item.comments) {
      const lineRangeSuffix =
        comment.lineRange == null
          ? ""
          : ` ${wrapInlineCode(comment.lineRange)}`;
      lines.push(
        `- ${formatWorkspacePath(comment.path, pathContext)}${lineRangeSuffix}: ${normalizeNewlines(comment.body).replaceAll("\n", " ")}`,
      );
    }
  }
  if (item.referencesPriorConversation) {
    lines.push("Referenced prior conversation");
  }
  if (item.reviewMode) lines.push("Mode: code review");
  if (item.pullRequestFixMode) lines.push("Mode: pull request fix");
  if (item.autoResolveSync) lines.push("Mode: auto resolve merge");
  if (
    item.pullRequestCheckNames != null &&
    item.pullRequestCheckNames.length > 0
  ) {
    lines.push(`Pull request checks: ${item.pullRequestCheckNames.join(", ")}`);
  }
  if (item.pullRequestMergeConflictNumber !== undefined) {
    lines.push(
      item.pullRequestMergeConflictNumber == null
        ? "Pull request merge conflict"
        : `Pull request merge conflict: #${item.pullRequestMergeConflictNumber}`,
    );
  }
  return lines;
}

export function formatUserMessage(
  item: UserMessageItem,
  {
    escapeDetailsTags = false,
    pathContext = EMPTY_PATH_CONTEXT,
  }: MessageFormatOptions = {},
): string | null {
  const parts: string[] = [];
  const messageBody = prepareMessageContent(item.message, pathContext).trim();
  if (messageBody.length > 0) parts.push(messageBody);
  const contextLines = formatUserMessageContextLines(item, pathContext);
  if (contextLines.length > 0) {
    parts.push(formatTitledLinesBlock("User context", contextLines));
  }
  if (parts.length === 0) return null;
  const joined = parts.join("\n\n");
  return escapeDetailsTags ? escapeEmbeddedDetailsTags(joined) : joined;
}

export function formatUserMessageAsQuote(
  item: UserMessageItem,
  pathContext: PathContext,
): string | null {
  const formatted = formatUserMessage(item, { pathContext });
  return formatted == null ? null : formatAsBlockquote(formatted);
}

export function formatAssistantMessage(
  item: AssistantMessageItem,
  {
    escapeDetailsTags = false,
    pathContext = EMPTY_PATH_CONTEXT,
  }: MessageFormatOptions = {},
): string | null {
  const body = prepareMessageContent(
    stripWritingDirectiveBlocks(stripPrivateUseMentionMarkers(item.content)),
    pathContext,
  ).trim();
  if (body.length === 0) return null;
  return escapeDetailsTags ? escapeEmbeddedDetailsTags(body) : body;
}
