// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Live assistant-turn renderer (bundle `ac` → ui/deferred-ac.tsx).
// Public deferredAc throws without peers — local non-throwing shell matching
// the staging <AppInitialAc …/> call site props.

import type { ReactElement, ReactNode } from "react";

export type LiveAssistantTurnProps = {
  conversationId?: string | null;
  hostId?: unknown;
  turnSearchKey?: string | null;
  turn?: unknown;
  turnState?: unknown;
  conversationDetailLevel?: unknown;
  cwd?: string | null;
  resolvedApps?: unknown;
  reportEntityType?: string;
  modelProvider?: unknown;
  children?: ReactNode;
};

/**
 * Soft live-turn body for remote timeline slots.
 * IMPORT_MAP proves `ac` → deferredAc; peers stay unwired so we never call it.
 */
export function LiveAssistantTurn(props: LiveAssistantTurnProps): ReactElement {
  const {
    conversationId,
    hostId,
    turnSearchKey,
    turn,
    turnState,
    conversationDetailLevel,
    cwd,
    resolvedApps,
    reportEntityType = "task",
    modelProvider,
    children,
  } = props;

  const turnId =
    turn && typeof turn === "object" && "turnId" in turn
      ? String((turn as { turnId?: unknown }).turnId ?? "")
      : turn && typeof turn === "object" && "id" in turn
        ? String((turn as { id?: unknown }).id ?? "")
        : undefined;

  return (
    <div
      className="px-4 py-2"
      data-live-assistant-turn=""
      data-conversation-id={conversationId ?? undefined}
      data-turn-search-key={turnSearchKey ?? undefined}
      data-turn-id={turnId}
      data-report-entity={reportEntityType}
      data-has-turn-state={turnState != null ? "true" : undefined}
      data-has-resolved-apps={resolvedApps != null ? "true" : undefined}
      data-detail-level={
        conversationDetailLevel != null
          ? String(conversationDetailLevel)
          : undefined
      }
      data-cwd={cwd ?? undefined}
      data-model-provider={
        modelProvider != null ? String(modelProvider) : undefined
      }
      data-host-id={hostId != null ? String(hostId) : undefined}
    >
      {children}
    </div>
  );
}

/** Build conversation id the way staging `vgt(taskId ?? assistantTurn.id)` does. */
export function remoteConversationIdForTurn(
  taskId: string | null | undefined,
  assistantTurnId: string,
): string {
  return taskId ?? assistantTurnId;
}
