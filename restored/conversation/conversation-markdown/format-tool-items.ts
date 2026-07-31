// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (exec/patch/todo/mcp/image item formatters).

import { quoteShellArgs } from "../../utils/quote-shell-args";
import { formatFileChangeDiff } from "../../utils/format-file-change-diff";
import { wrapFencedCodeBlock, wrapHtmlCode, prettyJson } from "./code-fences";
import { escapeDetailsInNormalizedText } from "./escape-html";
import {
  formatTitledLinesBlock,
  pushNonEmptyMarkdown,
  todoStatusCheckboxMark,
  wrapDetailsBlock,
} from "./details-blocks";
import {
  countDiffLineChanges,
  formatExecStatusLine,
  patchChangeVerb,
} from "./diff-and-exec-status";

type AutomaticApprovalReview = {
  status: string;
  riskLevel?: string | null;
  rationale?: string | null;
};

type ExecItem = {
  cmd: string[];
  output?: {
    aggregatedOutput?: string | null;
    exitCode?: number | null;
  } | null;
  executionStatus?: string;
  automaticApprovalReviews?: AutomaticApprovalReview[] | null;
};

type PatchItem = {
  changes: Record<string, { type: string }>;
  automaticApprovalReviews?: AutomaticApprovalReview[] | null;
};

type TurnDiffItem = { unifiedDiff: string };

type TodoListItem = {
  explanation?: string | null;
  plan: Array<{ status: string; step: string }>;
};

type McpToolCallItem = {
  invocation: { server: string; tool: string; arguments: unknown };
  completed?: boolean;
  result?:
    | { type: "error"; error: string }
    | {
        type?: string;
        content: unknown[];
        structuredContent?: unknown;
      }
    | null;
  automaticApprovalReviews?: AutomaticApprovalReview[] | null;
};

type McpContentPart =
  | { type: "text"; text: string }
  | { type: "image"; mimeType: string }
  | { type: "audio"; mimeType: string }
  | {
      type: "resource_link";
      title?: string | null;
      name?: string | null;
      uri: string;
    }
  | {
      type: "embedded_resource";
      resource: {
        title?: string | null;
        name?: string | null;
        uri: string;
        text?: string | null;
      };
    }
  | { type: "unknown"; raw: unknown };

export function formatAutomaticApprovalReview(
  review: AutomaticApprovalReview,
): string {
  return formatTitledLinesBlock("Auto-review", [
    `Status: ${review.status}`,
    review.riskLevel == null ? null : `Risk: ${review.riskLevel}`,
    review.rationale == null ? null : `Rationale: ${review.rationale}`,
  ]);
}

export function formatAutomaticApprovalReviews(
  reviews: AutomaticApprovalReview[] | null | undefined,
): string | null {
  return reviews == null
    ? null
    : reviews.map(formatAutomaticApprovalReview).join("\n\n");
}

export function formatExecItem(item: ExecItem): string {
  const parts: string[] = [];
  const quotedCmd = quoteShellArgs(item.cmd);
  parts.push(wrapFencedCodeBlock("bash", `$ ${quotedCmd}`));
  const aggregated = item.output?.aggregatedOutput;
  if (aggregated != null) {
    const normalized = aggregated.replaceAll(/\r\n?/g, "\n");
    if (normalized.trim().length > 0) {
      parts.push(wrapFencedCodeBlock("text", normalized));
    }
  }
  parts.push(formatExecStatusLine(item));
  pushNonEmptyMarkdown(
    parts,
    formatAutomaticApprovalReviews(item.automaticApprovalReviews),
  );
  return wrapDetailsBlock(`Ran ${wrapHtmlCode(quotedCmd)}`, parts.join("\n\n"));
}

export function formatPatchItem(item: PatchItem): string | null {
  const parts = Object.entries(item.changes).flatMap(([path, change]) => {
    const diff = formatFileChangeDiff(path, change);
    if (diff == null || diff.trim().length === 0) return [];
    const counts = countDiffLineChanges(diff);
    return [
      wrapDetailsBlock(
        `${patchChangeVerb(change.type)} ${wrapHtmlCode(path)} +${counts.additions} -${counts.deletions}`,
        wrapFencedCodeBlock("diff", diff),
      ),
    ];
  });
  pushNonEmptyMarkdown(
    parts,
    formatAutomaticApprovalReviews(item.automaticApprovalReviews),
  );
  return parts.length === 0 ? null : parts.join("\n");
}

export function formatTurnDiffItem(item: TurnDiffItem): string {
  return wrapDetailsBlock(
    "Diff",
    wrapFencedCodeBlock("diff", item.unifiedDiff),
  );
}

export function formatTodoListItem(item: TodoListItem): string {
  const parts: string[] = [];
  if (item.explanation != null && item.explanation.trim().length > 0) {
    parts.push(escapeDetailsInNormalizedText(item.explanation).trim());
  }
  parts.push(
    item.plan
      .map(
        (step) =>
          `- [${todoStatusCheckboxMark(step.status)}] ${escapeDetailsInNormalizedText(step.step)}`,
      )
      .join("\n"),
  );
  return wrapDetailsBlock("Plan", parts.join("\n\n"));
}

export function formatMcpResultContentPart(part: McpContentPart): string {
  switch (part.type) {
    case "text":
      return wrapFencedCodeBlock("text", part.text);
    case "image":
      return escapeDetailsInNormalizedText(`Image output: ${part.mimeType}`);
    case "audio":
      return escapeDetailsInNormalizedText(`Audio output: ${part.mimeType}`);
    case "resource_link":
      return escapeDetailsInNormalizedText(
        `Resource: ${part.title ?? part.name ?? part.uri} (${part.uri})`,
      );
    case "embedded_resource": {
      const label =
        part.resource.title ?? part.resource.name ?? part.resource.uri;
      return part.resource.text != null && part.resource.text.trim().length > 0
        ? `${escapeDetailsInNormalizedText(`Resource: ${label}`)}\n\n${wrapFencedCodeBlock("text", part.resource.text)}`
        : escapeDetailsInNormalizedText(`Resource: ${label}`);
    }
    case "unknown":
      return wrapFencedCodeBlock("json", prettyJson(part.raw));
    default:
      return "";
  }
}

export function formatMcpToolCallItem(item: McpToolCallItem): string {
  const parts: string[] = [];
  parts.push(
    `MCP tool call\n\n${escapeDetailsInNormalizedText(`${item.invocation.server}.${item.invocation.tool}`)}`,
  );
  parts.push(
    wrapFencedCodeBlock("json", prettyJson(item.invocation.arguments)),
  );
  pushNonEmptyMarkdown(
    parts,
    formatAutomaticApprovalReviews(item.automaticApprovalReviews),
  );
  if (item.result == null) {
    parts.push(item.completed ? "Result: none" : "Status: running");
    return parts.join("\n\n");
  }
  if (item.result.type === "error") {
    parts.push(escapeDetailsInNormalizedText(`Error: ${item.result.error}`));
    return parts.join("\n\n");
  }
  const content = (item.result.content as McpContentPart[])
    .map(formatMcpResultContentPart)
    .filter((chunk) => chunk.length > 0)
    .join("\n\n");
  if (content.length > 0) parts.push(content);
  if (item.result.structuredContent != null) {
    parts.push(
      wrapFencedCodeBlock("json", prettyJson(item.result.structuredContent)),
    );
  }
  return parts.join("\n\n");
}

export function formatGeneratedImage(
  src: string | null | undefined,
  status: string,
): string {
  return src == null
    ? formatTitledLinesBlock("Generated image", [`Status: ${status}`])
    : `Generated image\n\n![Generated image](${src})`;
}
