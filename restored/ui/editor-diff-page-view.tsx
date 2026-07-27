// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — Stage-3 scaffold via extractFn(internal `OBo`) / export `JD`.
// Full diff enrichment peers bind via setEditorDiffPageParts.

import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

export type EditorDiffPageProps = {
  containerClassName?: string;
  diffViewClassName?: string;
  diff?: unknown;
  viewType?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  isLoading?: boolean;
  children?: ReactNode;
  [key: string]: unknown;
};

export type EditorDiffPageParts = {
  render: (props: EditorDiffPageProps) => ReactNode;
};

let parts: EditorDiffPageParts | null = null;

/** Wire full EditorDiffPage once companions land. */
export function setEditorDiffPageParts(next: EditorDiffPageParts): void {
  parts = next;
}

/** @deprecated Prefer setEditorDiffPageParts */
export function bindEditorDiffPage(
  next: (props: EditorDiffPageProps) => ReactNode,
): void {
  parts = { render: next };
}

/**
 * Bundle export `JD` / internal `OBo`.
 * Editor diff page scaffold (containerClassName + PR/diff enrichment).
 */
export function EditorDiffPage(
  props: EditorDiffPageProps,
): ReactElement | null {
  if (parts != null) return parts.render(props) as ReactElement | null;
  const {
    containerClassName,
    open = true,
    isLoading = false,
    children,
  } = props;
  if (!open) return null;
  return (
    <div className={containerClassName ?? "flex min-h-0 flex-1 flex-col"}>
      {isLoading ? (
        <div className="p-4 text-sm text-token-description-foreground">
          <FormattedMessage
            id="editor.diff.loading"
            defaultMessage="Loading diff…"
            description="Loading state for editor diff page"
          />
        </div>
      ) : (
        (children ?? (
          <div className="p-4 text-sm text-token-description-foreground">
            <FormattedMessage
              id="editor.diff.empty"
              defaultMessage="Toggle file diff"
              description="Empty/scaffold state for editor diff page"
            />
          </div>
        ))
      )}
    </div>
  );
}
