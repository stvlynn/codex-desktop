// Restored from ref/webview/assets/artifact-annotation-comment-CqUwe9RC.js
// Helpers for artifact-annotation comments in the composer attachment list.
// Stage 3: hgt/pgt → composer helpers; opt init dropped.

import {
  buildArtifactAnnotationComment,
  type BuildArtifactAnnotationCommentProps,
} from "../composer/build-artifact-annotation-comment";
import {
  isArtifactAnnotationAttachment,
  type LocalAttachmentLike,
} from "../composer/is-artifact-annotation-attachment";

export type ArtifactAnnotationCommentPayload = {
  annotationId: string;
  artifactKind: string;
  body: string;
  label?: string | null;
  target: { type: string } & Record<string, unknown>;
};

export type ArtifactAnnotationCommentAttachment = LocalAttachmentLike & {
  localArtifactAnnotationContext?: {
    annotationId?: string;
    path?: string;
  } | null;
  position?: { line: number };
};

/**
 * Bundle export `t` — build a comment attachment for supported annotation targets.
 */
export function buildArtifactAnnotationCommentForTarget({
  line,
  path,
  payload,
  title,
}: {
  line: number;
  path: string;
  payload: ArtifactAnnotationCommentPayload;
  title: string;
}): ReturnType<typeof buildArtifactAnnotationComment> | undefined {
  switch (payload.target.type) {
    case "presentation-element-selection":
    case "presentation-region":
    case "workbook-floating-element":
    case "workbook-range":
      return buildArtifactAnnotationComment({
        annotationId: payload.annotationId,
        artifactKind: payload.artifactKind,
        body: payload.body,
        label: payload.label,
        line,
        metadata: { target: payload.target },
        path,
        title,
      } satisfies BuildArtifactAnnotationCommentProps);
  }
}

/** Bundle export `n` — annotation comments for a path. */
export function filterArtifactAnnotationCommentsForPath(
  comments: ArtifactAnnotationCommentAttachment[],
  path: string,
): ArtifactAnnotationCommentAttachment[] {
  return comments.filter(
    (item) =>
      isArtifactAnnotationAttachment(item) &&
      item.localArtifactAnnotationContext?.path === path,
  );
}

/**
 * Bundle export `i` — annotation ids present previously but not currently.
 */
export function collectRemovedArtifactAnnotationIds({
  currentComments,
  path,
  previousComments,
}: {
  currentComments: ArtifactAnnotationCommentAttachment[];
  path: string;
  previousComments: ArtifactAnnotationCommentAttachment[];
}): string[] {
  const current = new Set<string>();
  for (const item of filterArtifactAnnotationCommentsForPath(
    currentComments,
    path,
  )) {
    const id = item.localArtifactAnnotationContext?.annotationId;
    if (id != null) current.add(id);
  }
  const removed: string[] = [];
  for (const item of filterArtifactAnnotationCommentsForPath(
    previousComments,
    path,
  )) {
    const id = item.localArtifactAnnotationContext?.annotationId;
    if (id != null && !current.has(id)) removed.push(id);
  }
  return removed;
}

/**
 * Bundle export `o` — strip annotation comments for a path from a list.
 */
export function removeArtifactAnnotationCommentsForPath(
  comments: ArtifactAnnotationCommentAttachment[],
  path: string,
): ArtifactAnnotationCommentAttachment[] {
  const next = comments.filter(
    (item) =>
      !isArtifactAnnotationAttachment(item) ||
      item.localArtifactAnnotationContext?.path !== path,
  );
  return next.length === comments.length ? comments : next;
}

/** Bundle export `r` — next free line after existing comment positions. */
export function nextArtifactAnnotationCommentLine(
  comments: ArtifactAnnotationCommentAttachment[],
): number {
  return Math.max(0, ...comments.map((item) => item.position?.line ?? 0)) + 1;
}

/** Bundle export `a` — Rolldown ESM init retained as no-op. */
export function ensureArtifactAnnotationCommentInit(): void {}
