// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Pure PR side-panel / auto-fix / reviewer helpers from the local page chunk.

export type GhPrMutationKeyParts = {
  cwd?: string | null;
  headBranch?: string | null;
  hostId?: string | null;
};

/** Bundle: react-query mutation key for `gh-pr-merge`. */
export function ghPrMergeMutationKey(
  parts: GhPrMutationKeyParts,
): Array<string | null> {
  return [
    "vscode",
    "gh-pr-merge",
    parts.cwd ?? null,
    parts.headBranch ?? null,
    parts.hostId ?? null,
  ];
}

/** Bundle: react-query mutation key for `gh-pr-update`. */
export function ghPrUpdateMutationKey(
  parts: GhPrMutationKeyParts,
): Array<string | null> {
  return [
    "vscode",
    "gh-pr-update",
    parts.cwd ?? null,
    parts.headBranch ?? null,
    parts.hostId ?? null,
  ];
}

export type GhPrStatusCacheEntry = {
  status?: string;
  canMerge?: boolean;
  checks?: unknown[];
  ciStatus?: string;
  commentAttachments?: unknown[];
  hasOpenPr?: boolean;
  isDraft?: boolean;
  mergeBlocker?: unknown;
  state?: string;
  reviewers?: {
    approved: unknown[];
    commentCounts: unknown[];
    commented: unknown[];
    changesRequested: unknown[];
    requested: unknown[];
    requestedTeams: unknown[];
    unresolvedCommentCount: number;
  };
  [key: string]: unknown;
};

/**
 * Bundle: optimistic cache patch after a successful merge:
 * force merged / non-mergeable status shape.
 */
export function markGhPrStatusMerged<
  T extends GhPrStatusCacheEntry | null | undefined,
>(entry: T): T {
  if (entry == null || entry.status !== "success") return entry;
  return {
    ...entry,
    canMerge: false,
    checks: [],
    ciStatus: "none",
    commentAttachments: [],
    hasOpenPr: false,
    isDraft: false,
    mergeBlocker: null,
    state: "merged",
    reviewers: {
      approved: [],
      commentCounts: [],
      commented: [],
      changesRequested: [],
      requested: [],
      requestedTeams: [],
      unresolvedCommentCount: 0,
    },
  };
}

export type PrAutoFixItem = {
  number: number | string;
  url: string;
  headBranch: string;
  baseBranch: string;
  repo?: string | null;
};

const PR_AUTO_FIX_HEARTBEAT_MINUTES = 10;
const PR_URL_LINE_PREFIX = "Pull request URL: ";

/** Bundle: standing instructions for PR auto-fix heartbeats. */
export function prAutoFixStandingInstructions(
  heartbeatMinutes: number = PR_AUTO_FIX_HEARTBEAT_MINUTES,
): string[] {
  return [
    "Inspect the latest PR state with `gh`, including mergeability and all current checks.",
    "Fix only failing checks caused by this PR and merge conflicts with its base branch. Do not change code for unrelated failures, infrastructure outages, or flakes that are not caused by the PR.",
    "Start from logs and annotations before changing code. Use installed CI skills or tools for external providers such as Buildkite, and report the exact missing credential or access if blocked.",
    "Do not modify the configured checkout, switch its branch, clean it, reset it, or commit from it.",
    "Inspect from the configured checkout, then create an isolated git worktree only when a code change or conflict resolution is required. Make every mutation in that isolated worktree so the user's active checkout is not disturbed.",
    "Keep changes minimal and PR-related. Run the narrowest useful verification, commit, and push only to the PR branch.",
    "Do not merge the pull request directly; the user controls GitHub auto-merge separately.",
    "Clean up a temporary worktree when it is safe. Never remove a worktree that contains uncommitted work or that you did not create for this task.",
    "Re-check live GitHub state instead of trusting prior turns.",
    `If checks are still pending, finish the useful work for this turn without sleeping; the heartbeat will check again in ${heartbeatMinutes} minutes.`,
    "When the PR is green and conflict-free, merged, or closed, pause this heartbeat automation with the automation update tool before your final response.",
    "If progress requires user input or unavailable credentials, ask one concise question in this thread, report the exact blocker, and pause this heartbeat automation. The user can reply here and resume it when ready.",
    "Do not create or suggest another automation.",
  ];
}

/** Bundle: repository / PR identity lines. */
export function prAutoFixIdentityLines(args: {
  item: PrAutoFixItem;
  repo?: string | null;
}): string[] {
  const { item, repo } = args;
  return [
    `Repository: ${repo ?? item.repo ?? "the current repository"}`,
    `Pull request: #${item.number}`,
    `${PR_URL_LINE_PREFIX}${item.url}`,
    `Branch: ${item.headBranch} -> ${item.baseBranch}`,
  ];
}

/** Bundle: first-turn prompt that starts PR auto-fix. */
export function buildPrAutoFixStartPrompt(args: {
  item: PrAutoFixItem;
  repo?: string | null;
}): string {
  return [
    `Begin automatically fixing PR #${args.item.number}.`,
    "A 10-minute heartbeat is attached to this thread and will continue checking the pull request until the task is complete or blocked.",
    "",
    ...prAutoFixIdentityLines(args),
    ...prAutoFixStandingInstructions(),
  ].join("\n");
}

export type ReviewerLike = {
  login: string;
  avatarUrl?: string;
};

/** Bundle: drop search hits already pending as reviewers. */
export function filterAvailableReviewerSearchResults(args: {
  pendingReviewerLogins: string[];
  searchResults: ReviewerLike[];
}): ReviewerLike[] {
  const pending = new Set(
    args.pendingReviewerLogins.map((login) => login.toLowerCase()),
  );
  return args.searchResults.filter(
    ({ login }) => !pending.has(login.toLowerCase()),
  );
}

function uniqueByLogin(reviewers: ReviewerLike[]): ReviewerLike[] {
  const seen = new Set<string>();
  const out: ReviewerLike[] = [];
  for (const reviewer of reviewers) {
    const key = reviewer.login.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(reviewer);
  }
  return out;
}

/**
 * Bundle: pick the reviewer list shown for the current query.
 * Returns `undefined` while a fresh search is still in flight.
 */
export function resolveReviewerPickerOptions(args: {
  availableReviewers?: ReviewerLike[] | null;
  isCurrentQuery: boolean;
  query: string;
  searchHasError: boolean;
  selectedReviewers: ReviewerLike[];
}): ReviewerLike[] | undefined {
  if (args.searchHasError && args.isCurrentQuery) return [];
  if (args.query.length > 0 && !args.isCurrentQuery) return undefined;
  if (args.availableReviewers == null) {
    if (args.selectedReviewers.length > 0) return args.selectedReviewers;
    return args.query.length === 0 ? [] : undefined;
  }
  return uniqueByLogin([...args.selectedReviewers, ...args.availableReviewers]);
}

/** Bundle: toggle a reviewer in the selection list. */
export function toggleSelectedReviewer(
  selected: ReviewerLike[],
  candidate: ReviewerLike,
): ReviewerLike[] {
  const existing = selected.find(
    ({ login }) => login.toLowerCase() === candidate.login.toLowerCase(),
  );
  return existing == null
    ? [...selected, candidate]
    : selected.filter((item) => item !== existing);
}

/** Bundle: share-invite option shape for a GitHub user. */
export function reviewerToInviteOption(reviewer: ReviewerLike): {
  id: string;
  imageUrl?: string;
  label: string;
  login: string;
  avatarUrl?: string;
} {
  return {
    ...reviewer,
    id: reviewer.login.toLowerCase(),
    imageUrl: reviewer.avatarUrl,
    label: reviewer.login,
  };
}

export type PrPresentationState = "merged" | "draft" | "open" | "closed";

/** Bundle: derive side-panel presentation state from item + detail. */
export function resolvePrPresentationState(
  item: { state?: string; isDraft?: boolean },
  detail?: { state?: string; isDraft?: boolean } | null,
): PrPresentationState {
  if (item.state === "merged" || detail?.state === "merged") return "merged";
  if (detail == null) return item.state === "draft" ? "draft" : "open";
  if (detail.state === "closed") return "closed";
  return detail.isDraft ? "draft" : "open";
}

export type PrBoardAction =
  | "close"
  | "mark-draft"
  | "mark-ready"
  | "reopen"
  | "reopen-ready";

/** Bundle: map UI action ids to gh-pr-update operation names. */
export function mapPrBoardActionToUpdateOp(
  action: PrBoardAction,
): "close" | "mark_draft" | "mark_ready" | "reopen" | undefined {
  switch (action) {
    case "close":
      return "close";
    case "mark-draft":
      return "mark_draft";
    case "mark-ready":
      return "mark_ready";
    case "reopen":
    case "reopen-ready":
      return "reopen";
    default:
      return undefined;
  }
}

/** Detect merge-commit policy failures that should retry as squash. */
export function isMergeCommitsDisallowedError(error: string): boolean {
  return /merge commits are not allowed on this repository/i.test(error);
}
