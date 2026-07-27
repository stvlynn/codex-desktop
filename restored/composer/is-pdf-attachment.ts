// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nCe` / export `gmt`.

import {
  LOCAL_ATTACHMENT_ORIGIN,
  resolveLocalAttachmentOrigin,
  type LocalAttachmentLike,
} from "./is-artifact-annotation-attachment";

export type PdfAttachmentLike = LocalAttachmentLike & {
  localPdfContext?: unknown;
  localPdfCommentMetadata?: unknown;
  localPdfScreenshot?: unknown;
};

/** True when the attachment is (or looks like) a PDF annotation. */
export function isPdfAttachment(attachment: PdfAttachmentLike): boolean {
  const origin = resolveLocalAttachmentOrigin(attachment);
  return origin == null
    ? attachment.localPdfContext != null ||
        attachment.localPdfCommentMetadata != null ||
        attachment.localPdfScreenshot != null
    : origin === LOCAL_ATTACHMENT_ORIGIN.PDF;
}
