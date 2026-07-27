// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Inline Z() catalogs from bundle `Xll` / export `Rc`.

import { defineMessages } from "react-intl";

export const codexWebSearchSummaryMessages = defineMessages({
  withDetail: {
    id: "codex.webSearch.summary.withDetail",
    defaultMessage:
      "{status, select, completed {<label>Searched the web</label> <detailText>for {detail}</detailText>} other {<label>Searching the web</label> <detailText>for {detail}</detailText>}}",
    description:
      "Summary line for a web search with a detail such as a query, URL, or find pattern. The status selects the complete completed or in-progress phrase.",
  },
  withoutDetail: {
    id: "codex.webSearch.summary.withoutDetail",
    defaultMessage:
      "{status, select, completed {Searched the web} other {Searching the web}}",
    description:
      "Summary line for a web search without details. The status selects the complete completed or in-progress phrase.",
  },
});
