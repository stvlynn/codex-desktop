// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `wxs` near export `cb`).

import { defineMessages } from "react-intl";

export const commentAttachmentsMessages = defineMessages({
  annotationCount: {
    id: "commentAttachments.numAnnotations",
    defaultMessage: "{count, plural, one {# annotation} other {# annotations}}",
    description: "Number of in-app browser annotations in the attachment",
  },
  commentCount: {
    id: "commentAttachments.numComments",
    defaultMessage: "{count, plural, one {# comment} other {# comments}}",
    description: "Number of comments in the comment attachment",
  },
  removeAnnotations: {
    id: "commentAttachments.removeAnnotationsAriaLabel",
    defaultMessage: "Remove annotations attachment",
    description: "Aria label for removing the annotations attachment",
  },
  removeComments: {
    id: "commentAttachments.removeAriaLabel",
    defaultMessage: "Remove comments attachment",
    description: "Aria label for removing the comment attachment",
  },
  mixedSummary: {
    id: "commentAttachments.mixedSummary",
    defaultMessage: "{annotations}, {comments}",
    description:
      "Summary text for a queued message with both browser annotations and diff comments",
  },
});
