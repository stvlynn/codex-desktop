// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Jms` / export `Ox`.

import { isArtifactAnnotationAttachment } from "./is-artifact-annotation-attachment";
import { isBrowserAttachment } from "./is-browser-attachment";
import { isPdfAttachment } from "./is-pdf-attachment";

export type CommentAttachmentLike = {
  localBrowserDesignChange?: unknown;
  origin?: string | null;
  localArtifactAnnotationContext?: unknown;
  localArtifactAnnotationMetadata?: unknown;
  localPdfContext?: unknown;
  localPdfCommentMetadata?: unknown;
  localPdfScreenshot?: unknown;
  localBrowserContext?: unknown;
  localBrowserCommentMetadata?: unknown;
  localBrowserScreenshot?: unknown;
  localBrowserAttachedImages?: unknown[] | null;
};

/** Partition comment attachments into annotation / design / diff buckets. */
export function partitionCommentAttachments<T extends CommentAttachmentLike>(
  attachments: readonly T[],
): {
  annotationCommentAttachments: T[];
  designTweakCommentAttachments: T[];
  diffCommentAttachments: T[];
} {
  const annotationCommentAttachments: T[] = [];
  const designTweakCommentAttachments: T[] = [];
  const diffCommentAttachments: T[] = [];
  for (const item of attachments) {
    if (item.localBrowserDesignChange != null) {
      designTweakCommentAttachments.push(item);
      continue;
    }
    if (
      isArtifactAnnotationAttachment(item) ||
      isBrowserAttachment(item) ||
      isPdfAttachment(item)
    ) {
      annotationCommentAttachments.push(item);
    } else {
      diffCommentAttachments.push(item);
    }
  }
  return {
    annotationCommentAttachments,
    designTweakCommentAttachments,
    diffCommentAttachments,
  };
}
