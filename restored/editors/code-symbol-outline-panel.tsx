// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — Stage-3 scaffold via extractFn(internal `m$a`) / export `Nj`.
// Diff/theme peers bind via setCodeSymbolOutlinePanelParts.

import type { ReactElement, ReactNode } from "react";

export type CodeSymbolOutlinePanelProps = {
  fileDiff?: unknown;
  className?: string;
  hunkSeparators?: "line-info" | string;
  lineAnnotations?: unknown;
  lineDiffType?: unknown;
  metrics?: unknown;
  onGutterUtilityClick?: unknown;
  onPostRender?: unknown;
  renderAnnotation?: unknown;
  selectedLines?: unknown;
  overflow?: "scroll" | string;
  useReviewLineInfoSeparators?: boolean;
  children?: ReactNode;
  [key: string]: unknown;
};

export type CodeSymbolOutlinePanelParts = {
  render: (props: CodeSymbolOutlinePanelProps) => ReactNode;
};

let parts: CodeSymbolOutlinePanelParts | null = null;

/** Wire full outline/diff panel once companions land. */
export function setCodeSymbolOutlinePanelParts(
  next: CodeSymbolOutlinePanelParts,
): void {
  parts = next;
}

/** @deprecated Prefer setCodeSymbolOutlinePanelParts */
export function bindCodeSymbolOutlinePanel(
  next: (props: CodeSymbolOutlinePanelProps) => ReactNode,
): void {
  parts = { render: next };
}

/**
 * Bundle export `Nj` / internal `m$a`.
 * Editor line-info/scroll/symbols outline panel scaffold.
 */
export function CodeSymbolOutlinePanel(
  props: CodeSymbolOutlinePanelProps,
): ReactElement {
  if (parts != null) return parts.render(props) as ReactElement;
  const {
    className,
    overflow = "scroll",
    hunkSeparators = "line-info",
    children,
  } = props;
  return (
    <div
      className={className ?? "min-h-0 flex-1 overflow-auto"}
      data-hunk-separators={hunkSeparators}
      data-overflow={overflow}
    >
      {children}
    </div>
  );
}
