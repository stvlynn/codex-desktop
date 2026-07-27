// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `xul` / export `Pc` — render grouped turn units ("worked for", etc.).
// Unit renderers left injectable.

import type { ComponentType, ReactNode } from "react";

type AnyProps = Record<string, unknown>;

let UnitsImpl: ComponentType<AnyProps> | null = null;

export function setConversationTurnUnitsImpl(impl: ComponentType<AnyProps>): void {
  UnitsImpl = impl;
}

export type ConversationTurnUnitsProps = {
  units: unknown[];
  combinedUnitKey?: string;
  completedHeader?: ReactNode;
  conversationId?: string;
  hostId?: string;
  isTurnInProgress?: boolean;
  isTurnCancelled?: boolean;
  [key: string]: unknown;
};

export function ConversationTurnUnits(props: ConversationTurnUnitsProps): ReactNode {
  if (UnitsImpl == null) {
    throw new Error("ConversationTurnUnits impl has not been configured");
  }
  return (
    <div className="flex flex-col gap-[var(--conversation-item-gap,16px)]">
      <UnitsImpl {...props} />
    </div>
  );
}
