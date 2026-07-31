// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (agent/exploration group formatters).

import { quoteShellArgs } from "../../utils/quote-shell-args";
import { formatFileChangeDiff } from "../../utils/format-file-change-diff";
import { buildRenderableAgentItems } from "../build-renderable-agent-items";
import { summarizeAgentToolActivity } from "../summarize-agent-tool-activity";
import {
  explorationGroupSummary,
  formatToolActivitySummary,
  formatToolCallCountLabel,
} from "./activity-summaries";
import { wrapInlineCode } from "./code-fences";
import { escapeDetailsInNormalizedText } from "./escape-html";
import { wrapDetailsBlock } from "./details-blocks";
import { countDiffLineChanges } from "./diff-and-exec-status";
import {
  createPathContext,
  formatQuotedRelativePath,
  formatQuotedWorkspacePath,
} from "./path-context";
import { formatTurnItemMarkdown } from "./format-turn-item";
import type { PathContext } from "./types";

type AutoReview = {
  status: string;
  riskLevel?: string | null;
  rationale?: string | null;
};

type ExecLike = {
  type: "exec";
  cmd: string[];
  parsedCmd: {
    cmd: string;
    type?: string;
    path?: string;
    name?: string;
    query?: string;
  };
  cwd?: string | null;
  automaticApprovalReviews?: AutoReview[] | null;
};

type PatchLike = {
  type: "patch";
  changes: Record<string, { type: string }>;
  grantRoot?: string | null;
  automaticApprovalReviews?: AutoReview[] | null;
};

type ClassifiedGroup =
  | { kind: "standalone"; item: { item: unknown } }
  | { kind: string; items: Array<{ item: unknown }> };

type RenderableAgentItem =
  | { kind: "exploration"; items: unknown[] }
  | { kind: "item"; item: ExecLike | PatchLike | { type: string } };

export function formatAutoReviewBulletLines(
  reviews: AutoReview[] | null | undefined,
): string[] {
  if (reviews == null) return [];
  return reviews.flatMap((review) => [
    `Auto-review: ${review.status}`,
    ...(review.riskLevel == null
      ? []
      : [`Auto-review risk: ${review.riskLevel}`]),
    ...(review.rationale == null
      ? []
      : [
          `Auto-review rationale: ${escapeDetailsInNormalizedText(review.rationale)}`,
        ]),
  ]);
}

export function resolveExecCommandLabel(item: ExecLike): string {
  const parsed = item.parsedCmd.cmd.trim();
  return parsed.length === 0 ? quoteShellArgs(item.cmd) : parsed;
}

export function patchExplorationVerb(changeType: string): string | undefined {
  switch (changeType) {
    case "add":
    case "update":
      return "Wrote";
    case "delete":
      return "Deleted";
    default:
      return undefined;
  }
}

export function formatPatchChangeBulletLines(
  item: PatchLike,
  pathContext: PathContext,
): string[] {
  const context =
    item.grantRoot == null ? pathContext : createPathContext(item.grantRoot);
  return Object.entries(item.changes).flatMap(([path, change]) => {
    const diff = formatFileChangeDiff(path, change);
    if (diff == null || diff.trim().length === 0) return [];
    const counts = countDiffLineChanges(diff);
    return [
      `${patchExplorationVerb(change.type)} ${formatQuotedRelativePath(path, context)} (+${counts.additions} -${counts.deletions})`,
    ];
  });
}

export function formatExecOrPatchBulletLines(
  renderable: RenderableAgentItem,
  pathContext: PathContext,
): string[] {
  if (renderable.kind !== "item") return [];
  if (renderable.item.type === "exec") {
    return [
      `Ran ${wrapInlineCode(resolveExecCommandLabel(renderable.item as ExecLike))}`,
      ...formatAutoReviewBulletLines(
        (renderable.item as ExecLike).automaticApprovalReviews,
      ),
    ];
  }
  if (renderable.item.type === "patch") {
    return [
      ...formatPatchChangeBulletLines(
        renderable.item as PatchLike,
        pathContext,
      ),
      ...formatAutoReviewBulletLines(
        (renderable.item as PatchLike).automaticApprovalReviews,
      ),
    ];
  }
  return [];
}

export function formatExplorationExecLine(
  item: { type: string } & Partial<ExecLike>,
  pathContext: PathContext,
): string | null {
  if (item.type !== "exec" || item.parsedCmd == null) return null;
  const execContext =
    item.cwd == null ? pathContext : createPathContext(item.cwd);
  const parsed = item.parsedCmd;
  switch (parsed.type) {
    case "read":
      return `Read ${formatQuotedWorkspacePath(parsed.path ?? parsed.name ?? "", execContext)}`;
    case "search":
      return parsed.query != null && parsed.path != null
        ? `Searched for ${wrapInlineCode(parsed.query)} in ${formatQuotedWorkspacePath(parsed.path, execContext)}`
        : parsed.query == null
          ? "Searched for files"
          : `Searched for ${wrapInlineCode(parsed.query)}`;
    case "list_files":
      return parsed.path == null
        ? "Listed files"
        : `Listed files in ${formatQuotedWorkspacePath(parsed.path, execContext)}`;
    case "format":
    case "test":
    case "lint":
    case "noop":
    case "unknown":
      return wrapInlineCode(parsed.cmd);
    default:
      return null;
  }
}

export function formatExplorationGroup(
  group: { items: Array<{ type: string } & Partial<ExecLike>> },
  pathContext: PathContext,
): string | null {
  const lines = group.items
    .map((item) => formatExplorationExecLine(item, pathContext))
    .filter((line): line is string => line != null)
    .map((line) => `- ${line}`);
  return lines.length === 0
    ? null
    : wrapDetailsBlock(explorationGroupSummary(group.items), lines.join("\n"));
}

export function formatRenderableAgentItem(
  renderable: RenderableAgentItem,
  pathContext: PathContext,
): string | null {
  if (renderable.kind === "exploration") {
    return formatExplorationGroup(
      renderable as { items: Array<{ type: string } & Partial<ExecLike>> },
      pathContext,
    );
  }
  if (renderable.item.type !== "exec" && renderable.item.type !== "patch") {
    return formatTurnItemMarkdown(renderable.item, pathContext);
  }
  const bullets = formatExecOrPatchBulletLines(renderable, pathContext);
  return bullets.length === 0
    ? null
    : bullets.map((line) => `- ${line}`).join("\n");
}

export function formatClassifiedAgentGroup(
  group: ClassifiedGroup,
  pathContext: PathContext,
): string | null {
  if (group.kind === "standalone") {
    return formatTurnItemMarkdown(group.item.item, pathContext);
  }
  const agentItems = group.items.map(({ item }) => item);
  const { renderableAgentItems } = buildRenderableAgentItems({
    agentItems: agentItems as never[],
    isTurnInProgress: false,
    isAnyNonAgentItemInProgress: false,
  });
  const first = renderableAgentItems[0] as RenderableAgentItem | undefined;
  if (renderableAgentItems.length === 1 && first?.kind === "exploration") {
    return formatExplorationGroup(
      first as { items: Array<{ type: string } & Partial<ExecLike>> },
      pathContext,
    );
  }
  const dynamicToolCallCount = agentItems.filter(
    (item) =>
      typeof item === "object" &&
      item != null &&
      (item as { type?: string }).type === "dynamic-tool-call",
  ).length;
  const activityLabel = formatToolActivitySummary(
    summarizeAgentToolActivity(group.items as never).toolActivity,
  );
  const summary =
    activityLabel === "Tool activity" && dynamicToolCallCount > 0
      ? formatToolCallCountLabel(dynamicToolCallCount)
      : activityLabel;
  const bodyParts = (renderableAgentItems as RenderableAgentItem[])
    .map((item) => formatRenderableAgentItem(item, pathContext))
    .filter((part): part is string => part != null);
  const body = bodyParts.join(
    bodyParts.every((part) => part.startsWith("- ")) ? "\n" : "\n\n",
  );
  return body.length === 0 ? summary : wrapDetailsBlock(summary, body);
}
