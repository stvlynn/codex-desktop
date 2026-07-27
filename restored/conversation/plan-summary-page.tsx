// Restored from ref/webview/assets/plan-summary-page-c9VO7iqd.js
// Side-panel plan summary page: location state → PlanSummaryMessage.
// Stage 3: yc→PlanSummaryMessage (exact lowercase); bc init dropped;
// B5→useLocation; P5/Ivt/jvt ESM inits dropped.

import type { ReactNode } from "react";
import { useLocation } from "../boundaries/react-router-navigation";
import {
  PlanSummaryMessage,
  type PlanSummaryMessageItem,
} from "./plan-summary-message";

type PlanSummaryLocationState = {
  planContent?: string;
  conversationId?: string;
};

function PlanSummarySkeleton(): ReactNode {
  return (
    <div className="p-[var(--padding-panel)]">
      <div className="animate-pulse overflow-hidden rounded-2xl border border-token-border bg-token-editor-background/50">
        <div className="flex items-center gap-3 border-b border-token-border/60 px-4 py-3">
          <div className="size-8 rounded-lg bg-token-foreground/10" />
          <div className="h-4 w-24 rounded bg-token-foreground/20" />
        </div>
        <div className="space-y-3 px-4 py-4">
          <div className="h-3 w-5/6 rounded bg-token-foreground/10" />
          <div className="h-3 w-4/6 rounded bg-token-foreground/10" />
          <div className="h-3 w-3/6 rounded bg-token-foreground/10" />
        </div>
      </div>
    </div>
  );
}

function PlanSummaryBody({
  planContent,
  conversationId,
}: {
  planContent: string;
  conversationId: string;
}): ReactNode {
  const item: PlanSummaryMessageItem = {
    type: "assistant-message",
    content: planContent,
    sentAtMs: null,
    completed: true,
    phase: null,
    structuredOutput: undefined,
  };
  return (
    <div className="overflow-y-auto p-[var(--padding-panel)]">
      <PlanSummaryMessage
        item={item}
        conversationId={conversationId}
        cwd={null}
        showOpenButton={false}
      />
    </div>
  );
}

/**
 * Bundle export `PlanSummaryPage` — reads router state and renders the plan card.
 */
export function PlanSummaryPage(): ReactNode {
  const location = useLocation();
  const state = location.state as PlanSummaryLocationState | null | undefined;
  if (!state?.planContent || !state?.conversationId) {
    return <PlanSummarySkeleton />;
  }
  return (
    <PlanSummaryBody
      planContent={state.planContent}
      conversationId={state.conversationId}
    />
  );
}

/** Bundle path ESM init retained as no-op. */
export function ensurePlanSummaryPageInit(): void {}
