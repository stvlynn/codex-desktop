// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Background subagents panel header copy (`TCs` / export `tb` init thunk).

import { defineMessages } from "react-intl";

export const backgroundSubagentsMessages = defineMessages({
  summary: {
    id: "composer.backgroundSubagents.summary",
    defaultMessage:
      "{count, plural, one {# background agent} other {# background agents}}",
    description: "Summary label for the background subagents panel header.",
  },
  invokeAgents: {
    id: "composer.backgroundSubagents.invokeAgents",
    defaultMessage: "(@ to tag agents)",
    description:
      "Hint shown after the background agent summary when the panel is expanded.",
  },
  summaryExpanded: {
    id: "composer.backgroundSubagents.summary.expanded",
    defaultMessage: "{summary} {hint}",
    description: "Background agent summary label when the panel is expanded.",
  },
  collapse: {
    id: "composer.backgroundSubagents.collapse",
    defaultMessage: "Collapse background agent details",
    description:
      "Aria label for button that collapses background agent progress details.",
  },
});
