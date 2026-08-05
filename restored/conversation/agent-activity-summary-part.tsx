// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `LKc` / export `vd` — agent activity summary row part.

import type { ReactNode } from "react";

type Item = { [key: string]: unknown };

let SummaryImpl:
  | ((props: {
      conversationId?: string;
      enableTimelineTargets?: boolean;
      agentActivityIcon?: ReactNode;
      isLeadingSummaryPart?: boolean;
      item: Item;
      variant?: string;
    }) => ReactNode)
  | null = null;

export function setAgentActivitySummaryPartImpl(
  impl: NonNullable<typeof SummaryImpl>,
): void {
  SummaryImpl = impl;
}

export type AgentActivitySummaryPartProps = {
  conversationId?: string;
  enableTimelineTargets?: boolean;
  agentActivityIcon?: ReactNode;
  isLeadingSummaryPart?: boolean;
  item: Item;
  variant?: string;
};

export function AgentActivitySummaryPart(
  props: AgentActivitySummaryPartProps,
): ReactNode {
  if (SummaryImpl == null) {
    throw new Error("AgentActivitySummaryPart impl has not been configured");
  }
  return (
    <SummaryImpl
      isLeadingSummaryPart={false}
      enableTimelineTargets={false}
      {...props}
    />
  );
}
