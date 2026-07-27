// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `Pll`).

import { defineMessages } from "react-intl";

export const unifieddiffFileschangedMessages = defineMessages({
  filesChanged: {
    id: "codex.unifiedDiff.filesChanged",
    defaultMessage:
      "{fileCount, plural, one {# file changed} other {# files changed}}",
    description: "Label for the number of files changed in a Codex task",
  },
  linesAdded: {
    id: "codex.unifiedDiff.linesAdded",
    defaultMessage: "+{linesAdded}",
    description: "Label for the number of lines added in a Codex task",
  },
  linesDeleted: {
    id: "codex.unifiedDiff.linesDeleted",
    defaultMessage: "-{linesDeleted}",
    description: "Label for the number of lines deleted in a Codex task",
  },
  review: {
    id: "codex.unifiedDiff.viewDiffTooltip",
    defaultMessage: "Review",
    description:
      "Label for button that views the diff of a Codex task in an editor view",
  },
});
