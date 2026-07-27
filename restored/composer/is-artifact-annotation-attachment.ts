// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Detect artifact-annotation attachments on composer payloads (`Age` / `hgt`).

export const LOCAL_ATTACHMENT_ORIGIN = {
  DIFF: "diff",
  BROWSER: "browser",
  PDF: "pdf",
  ARTIFACT_ANNOTATION: "artifact_annotation",
} as const;

export type LocalAttachmentOrigin =
  (typeof LOCAL_ATTACHMENT_ORIGIN)[keyof typeof LOCAL_ATTACHMENT_ORIGIN];

export type LocalAttachmentLike = {
  origin?: string | null;
  localArtifactAnnotationContext?: unknown;
  localArtifactAnnotationMetadata?: unknown;
};

/** Bundle `vge` (co-located). */
export function resolveLocalAttachmentOrigin(
  attachment: LocalAttachmentLike,
): LocalAttachmentOrigin | null {
  const origin = attachment.origin;
  return origin === LOCAL_ATTACHMENT_ORIGIN.DIFF ||
    origin === LOCAL_ATTACHMENT_ORIGIN.BROWSER ||
    origin === LOCAL_ATTACHMENT_ORIGIN.PDF ||
    origin === LOCAL_ATTACHMENT_ORIGIN.ARTIFACT_ANNOTATION
    ? origin
    : null;
}

/**
 * Bundle `Age` / export `hgt`.
 * True when the attachment is (or looks like) an artifact annotation.
 */
export function isArtifactAnnotationAttachment(
  attachment: LocalAttachmentLike,
): boolean {
  const origin = resolveLocalAttachmentOrigin(attachment);
  return origin == null
    ? attachment.localArtifactAnnotationContext != null ||
        attachment.localArtifactAnnotationMetadata != null
    : origin === LOCAL_ATTACHMENT_ORIGIN.ARTIFACT_ANNOTATION;
}
