// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Cxs`/`bxs`/`wxs` — export `sb`.

import type { MessageDescriptor } from "react-intl";

type IntlShape = {
  formatMessage: (
    message: MessageDescriptor,
    values?: Record<string, unknown>,
  ) => string;
};

const MESSAGES = {
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
  mixedSummary: {
    id: "commentAttachments.mixedSummary",
    defaultMessage: "{annotations}, {comments}",
    description:
      "Summary text for a queued message with both browser annotations and diff comments",
  },
} as const;

function formatKindCount(
  intl: IntlShape,
  count: number,
  kind: "annotation" | "comment",
): string {
  return intl.formatMessage(
    kind === "annotation" ? MESSAGES.annotationCount : MESSAGES.commentCount,
    { count },
  );
}

/** Summarize annotation + comment counts for a queued attachment. */
export function formatCommentAttachmentSummary(
  intl: IntlShape,
  counts: {
    annotationCount: number;
    commentCount: number;
    designTweakCount?: number;
  },
): string {
  const annotations = counts.annotationCount + (counts.designTweakCount ?? 0);
  const comments = counts.commentCount;
  if (annotations > 0 && comments > 0) {
    return intl.formatMessage(MESSAGES.mixedSummary, {
      annotations: formatKindCount(intl, annotations, "annotation"),
      comments: formatKindCount(intl, comments, "comment"),
    });
  }
  if (annotations > 0) return formatKindCount(intl, annotations, "annotation");
  if (comments > 0) return formatKindCount(intl, comments, "comment");
  return "";
}
