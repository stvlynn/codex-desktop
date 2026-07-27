// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Disabled-state tooltips for the review commit button (`sUo` / export `UD` init thunk).

import { defineMessages } from "react-intl";

export const reviewCommitDisabledMessages = defineMessages({
  loadingDiff: {
    id: "review.commit.disabled.loadingDiff",
    defaultMessage: "Loading diff…",
    description: "Tooltip shown on the commit button while changes are loading",
  },
  unavailable: {
    id: "review.commit.disabled.unavailable",
    defaultMessage: "Commit is unavailable right now",
    description:
      "Fallback tooltip shown when commit is disabled for an unknown reason",
  },
  noChanges: {
    id: "review.commit.disabled.noChanges",
    defaultMessage: "No changes to commit",
    description: "Tooltip shown when there are no changes to commit",
  },
});
