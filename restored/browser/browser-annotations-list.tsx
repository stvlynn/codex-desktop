// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `Uxs`) / export `ab`.

import type { ReactElement, ReactNode } from "react";

export type BrowserAnnotationsListProps = {
  annotations: unknown[];
  browserAnnotations?: {
    count?: number;
    icon?: ReactNode;
    selectionCount?: number;
  } | null;
  onEditAnnotation?: (...args: unknown[]) => void;
  onRemove?: (...args: unknown[]) => void;
  onRemoveAnnotation?: (...args: unknown[]) => void;
};

export type BrowserAnnotationsListParts = {
  Details: (props: {
    annotations: unknown[];
    browserAnnotations?: BrowserAnnotationsListProps["browserAnnotations"];
    onEditAnnotation?: BrowserAnnotationsListProps["onEditAnnotation"];
    onRemoveAnnotation?: BrowserAnnotationsListProps["onRemoveAnnotation"];
  }) => ReactElement;
  AttachmentChip: (props: {
    attachmentKind: "annotation";
    count: number;
    icon?: ReactNode;
    onRemove?: BrowserAnnotationsListProps["onRemove"];
    selectionCount?: number;
    tooltipContent: ReactNode;
  }) => ReactElement;
};

let parts: BrowserAnnotationsListParts | null = null;

/** Wire annotation list parts once companions land. */
export function setBrowserAnnotationsListParts(
  next: BrowserAnnotationsListParts,
): void {
  parts = next;
}

/**
 * Bundle export `ab` / internal `Uxs`.
 * Attachment chip wrapping browser + page annotations.
 */
export function BrowserAnnotationsList(
  props: BrowserAnnotationsListProps,
): ReactElement | null {
  if (parts == null) {
    throw new Error("BrowserAnnotationsList parts are not configured");
  }
  const {
    annotations,
    browserAnnotations,
    onEditAnnotation,
    onRemove,
    onRemoveAnnotation,
  } = props;
  const count = annotations.length + (browserAnnotations?.count ?? 0);
  if (count === 0) return null;
  const details = (
    <parts.Details
      annotations={annotations}
      browserAnnotations={browserAnnotations}
      onEditAnnotation={onEditAnnotation}
      onRemoveAnnotation={onRemoveAnnotation}
    />
  );
  return (
    <parts.AttachmentChip
      attachmentKind="annotation"
      count={count}
      icon={browserAnnotations?.icon}
      onRemove={onRemove}
      selectionCount={browserAnnotations?.selectionCount}
      tooltipContent={details}
    />
  );
}
