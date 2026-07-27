// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Build a local artifact-annotation comment attachment (`Oge` / `kge`).

import {
  LOCAL_ATTACHMENT_ORIGIN,
  type LocalAttachmentOrigin,
} from "./is-artifact-annotation-attachment";

/** Bundle `_ge` (co-located) — stamp an attachment origin. */
export function withLocalAttachmentOrigin<T extends object>(
  attachment: T,
  origin: LocalAttachmentOrigin,
): T & { origin: LocalAttachmentOrigin } {
  return { ...attachment, origin };
}

/**
 * Bundle `Oge` (co-located).
 * Synthetic path label shown in the comment position for an annotation.
 */
export function formatArtifactAnnotationPositionPath({
  path,
  title,
}: {
  path: string;
  title: string;
}): string {
  return `artifact:${title.trim() || path.trim() || "Selected artifact annotation"}`;
}

export type BuildArtifactAnnotationCommentProps = {
  annotationId: string;
  artifactKind: string;
  body: string;
  label: string | null | undefined;
  line: number;
  metadata: unknown;
  path: string;
  title: string;
};

/**
 * Bundle `kge` / export `pgt`.
 * Create a composer comment attachment for an artifact annotation.
 */
export function buildArtifactAnnotationComment({
  annotationId,
  artifactKind,
  body,
  label,
  line,
  metadata,
  path,
  title,
}: BuildArtifactAnnotationCommentProps) {
  return withLocalAttachmentOrigin(
    {
      type: "comment" as const,
      content: [{ content_type: "text" as const, text: body }],
      position: {
        side: "right" as const,
        path: formatArtifactAnnotationPositionPath({ path, title }),
        line,
      },
      localArtifactAnnotationContext: {
        annotationId,
        artifactKind,
        path,
        title,
        label,
      },
      localArtifactAnnotationMetadata: metadata,
    },
    LOCAL_ATTACHMENT_ORIGIN.ARTIFACT_ANNOTATION,
  );
}
