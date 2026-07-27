// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Eqo` / export `rD`.

export type PullRequestListState = "merged" | "draft" | "open" | null;

/** Derive list-row PR state from open/draft/merged flags. */
export function pullRequestListState(input: {
  hasOpenPr: boolean;
  isDraft: boolean;
  state?: string | null;
  url?: string | null;
}): PullRequestListState {
  if (input.state === "merged") return "merged";
  if (input.hasOpenPr) return input.isDraft ? "draft" : "open";
  return input.url == null ? null : "merged";
}
