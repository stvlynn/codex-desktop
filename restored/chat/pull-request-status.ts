// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Pull-request state helpers + tooltip copy (`_Hl`/`vHl`/`bHl`/`wHl`).

import type { IntlShape } from "react-intl";

/** Normalized sidebar PR badge status. */
export type SidebarPullRequestStatus = "draft" | "open" | "merged" | "closed";

export type GithubPullRequestLike = {
  merged?: boolean | null;
  draft?: boolean | null;
  state: string;
};

export type TaskWithPullRequests = {
  task: {
    pull_requests?: Array<{
      pull_request?: GithubPullRequestLike | null;
    }> | null;
  };
};

/**
 * Map a GitHub PR payload onto the sidebar status enum (`_Hl` / `io`).
 */
export function mapPullRequestToSidebarStatus(
  pullRequest: GithubPullRequestLike,
): SidebarPullRequestStatus {
  if (pullRequest.merged) return "merged";
  switch (pullRequest.state.toUpperCase()) {
    case "OPEN":
      return pullRequest.draft ? "draft" : "open";
    case "MERGED":
      return "merged";
    case "CLOSED":
      return "closed";
    default:
      return "closed";
  }
}

/**
 * Parse a PR number from a GitHub pull URL (`vHl` / `ro`).
 */
export function extractPullRequestNumber(url: string): number | null {
  const match = /\/pull\/(\d+)(?:$|[/?#])/.exec(url);
  return match ? Number(match[1]) : null;
}

/**
 * Read the first PR on a cloud/local task and normalize its status (`bHl` / `$a`).
 */
export function getTaskPullRequestStatus(
  taskRow: TaskWithPullRequests | null | undefined,
): SidebarPullRequestStatus | null {
  if (taskRow == null) return null;
  const pullRequest = taskRow.task.pull_requests?.[0]?.pull_request ?? null;
  return pullRequest ? mapPullRequestToSidebarStatus(pullRequest) : null;
}

/**
 * Localized tooltip label for a sidebar PR badge (`wHl`).
 */
export function formatPullRequestStatusLabel(
  status: SidebarPullRequestStatus,
  intl: Pick<IntlShape, "formatMessage">,
): string {
  switch (status) {
    case "draft":
      return intl.formatMessage({
        id: "sidebar.taskRow.pr.draft",
        defaultMessage: "Draft PR",
        description: "Tooltip shown for a draft pull request badge",
      });
    case "open":
      return intl.formatMessage({
        id: "sidebar.taskRow.pr.open",
        defaultMessage: "Open PR",
        description: "Tooltip shown for an open pull request badge",
      });
    case "merged":
      return intl.formatMessage({
        id: "sidebar.taskRow.pr.merged",
        defaultMessage: "Merged PR",
        description: "Tooltip shown for a merged pull request badge",
      });
    case "closed":
      return intl.formatMessage({
        id: "sidebar.taskRow.pr.closed",
        defaultMessage: "Closed PR",
        description: "Tooltip shown for a closed pull request badge",
      });
  }
}
