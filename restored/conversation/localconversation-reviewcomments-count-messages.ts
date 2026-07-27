// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `Mkl`).

import { defineMessages } from "react-intl";

export const localconversationReviewcommentsCountMessages = defineMessages({
  count: {
    id: "localConversation.reviewComments.count",
    defaultMessage: "{count, plural, one {# comment} other {# comments}}",
    description:
      "Title for the turn-end card summarizing model-authored code review comments",
  },
  openComment: {
    id: "localConversation.reviewComments.openComment",
    defaultMessage: "View {title} in {location}",
    description:
      "Accessible label for opening one model-authored code review comment from a conversation turn",
  },
  showMoreComments: {
    id: "localConversation.reviewComments.showMore",
    defaultMessage:
      "{count, plural, one {Show # more comment} other {Show # more comments}}",
    description:
      "Button label that expands hidden model-authored code review comments",
  },
  collapseComments: {
    id: "localConversation.reviewComments.collapse",
    defaultMessage: "Collapse comments",
    description:
      "Button label that collapses expanded model-authored code review comments",
  },
});
