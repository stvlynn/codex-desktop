// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — Stage-3 body via extractFn(internal `x1c`) / export `tu`.
// Heavy automation form peers bind via setPermissionDetailsPanelParts.

import type { ReactElement, ReactNode } from "react";

export type PermissionDetailsPanelDraft = {
  projectId?: string | null;
  kind?: string;
  targetThreadId?: string | null;
  id?: string;
  [key: string]: unknown;
};

export type PermissionDetailsPanelProps = {
  afterFrequency?: ReactNode;
  detailsTrailing?: ReactNode;
  disablePromptAutoFocus?: boolean;
  draft: PermissionDetailsPanelDraft;
  formId?: string;
  setDraft: (
    updater: (
      draft: PermissionDetailsPanelDraft,
    ) => PermissionDetailsPanelDraft,
  ) => void;
  workspaceGroups?: unknown[];
  onSubmit?: () => void;
  children?: ReactNode;
};

export type PermissionDetailsPanelParts = {
  render: (props: PermissionDetailsPanelProps) => ReactNode;
};

let parts: PermissionDetailsPanelParts | null = null;

/** Wire the full automations permission details form once companions land. */
export function setPermissionDetailsPanelParts(
  next: PermissionDetailsPanelParts,
): void {
  parts = next;
}

/**
 * Bundle export `tu` / internal `x1c`.
 * Permission / automation details panel — scaffold until full peers bind.
 */
export function PermissionDetailsPanel(
  props: PermissionDetailsPanelProps,
): ReactElement {
  if (parts != null) {
    return parts.render(props) as ReactElement;
  }
  const { afterFrequency, detailsTrailing, draft, formId, onSubmit, children } =
    props;
  return (
    <form
      id={formId}
      className="flex min-h-0 flex-1 flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.();
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1 text-sm text-token-description-foreground">
          {draft.kind === "heartbeat"
            ? "Scheduled task permissions"
            : "Permission details"}
        </div>
        {detailsTrailing}
      </div>
      {children}
      {afterFrequency}
    </form>
  );
}
