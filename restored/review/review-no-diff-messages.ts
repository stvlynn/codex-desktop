// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Empty-state copy for the review panel when no diffs are available (`CRo` / export `nO` init thunk).

import { defineMessages } from "react-intl";

export const reviewNoDiffMessages = defineMessages({
  gitRepoRequiredTitle: {
    id: "codex.review.noDiff.gitRepoRequired.title",
    defaultMessage: "Create a Git repository",
    description:
      "Empty state title shown when diffing isn't available without a git repo",
  },
  noDiff: {
    id: "codex.review.noDiff",
    defaultMessage: "No file changes yet",
    description: "Label indicating a code review has no changes",
  },
  gitRepoRequiredDescription: {
    id: "codex.review.noDiff.gitRepoRequired.description",
    defaultMessage: "Track, review, and undo changes in this project.",
    description:
      "Empty state description shown when diffing isn't available without a git repo",
  },
  orNoLongerAvailable: {
    id: "codex.review.noDiff.orNoLongerAvailable",
    defaultMessage: "The latest diffs are no longer available.",
    description: "Label indicating a code review is not available",
  },
});
