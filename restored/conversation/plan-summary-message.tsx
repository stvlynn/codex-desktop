// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `ufl`) / export `yc`.
// Init `vfl` / export `bc` retained as no-op.

import type { ReactNode } from "react";

export type PlanSummaryMessageItem = {
  type: string;
  content: string;
  sentAtMs: number | null;
  completed: boolean;
  phase: string | null;
  structuredOutput?: unknown;
};

export type PlanSummaryMessageProps = {
  item: PlanSummaryMessageItem;
  conversationId: string;
  cwd?: string | null;
  hideCodeBlocks?: boolean;
  defaultCollapsed?: boolean;
  hasArtifacts?: boolean;
  reportEntityType?: string;
  showOpenButton?: boolean;
  turnId?: string;
  isThreadPreview?: boolean;
  isThreadPreviewCollapsed?: boolean;
  onOpenInSidePanel?: () => void;
};

export type PlanSummaryMessageParts = {
  PlatformGate: (props: {
    electron?: boolean;
    browser?: boolean;
    chromeExtension?: boolean;
    extension?: boolean;
    children?: ReactNode;
  }) => ReactNode;
  CompactCard: (props: PlanSummaryMessageProps) => ReactNode;
  OpenableCard: (props: PlanSummaryMessageProps) => ReactNode;
};

let parts: PlanSummaryMessageParts | null = null;

/** Wire plan-summary card parts once companions land. */
export function setPlanSummaryMessageParts(
  next: PlanSummaryMessageParts,
): void {
  parts = next;
}

/**
 * Bundle export `yc` / internal `ufl`.
 * Plan summary message card with platform-gated open button variants.
 */
export function PlanSummaryMessage(props: PlanSummaryMessageProps): ReactNode {
  if (parts == null) {
    throw new Error("PlanSummaryMessage parts are not configured");
  }
  if (props.showOpenButton === false) {
    return <parts.CompactCard {...props} />;
  }
  const electronCard = (
    <parts.PlatformGate electron>
      <parts.OpenableCard {...props} />
    </parts.PlatformGate>
  );
  const browserCard = (
    <parts.PlatformGate browser chromeExtension extension>
      <parts.CompactCard {...props} />
    </parts.PlatformGate>
  );
  return (
    <>
      {electronCard}
      {browserCard}
    </>
  );
}

/** Bundle export `bc` — Rolldown ESM init retained as no-op. */
export function ensurePlanSummaryMessageInit(): void {}
