// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Turn timeline body — live turn renderer (`ac`) soft-bridged.

import type { ReactElement, ReactNode, RefObject } from "react";
import { useRef } from "react";

import { joinColonKey } from "../../utils/join-colon-key";
import { pickPreferredById } from "../../utils/pick-preferred-by-id";
import {
  LiveAssistantTurn,
  remoteConversationIdForTurn,
} from "./live-assistant-turn";
import { type RemoteTurnLike } from "./turn-diff-helpers";
import {
  buildTimelineNavigatorItems,
  joinTextContentParts,
  type TurnGrouping,
} from "./turn-timeline-nav-helpers";
import {
  EnvironmentSetupFailedPanel,
  EnvironmentSetupRunningPanel,
  RemoteTaskFailedCallout,
  RemoteTurnCancelledLabel,
} from "./environment-setup-panel";
import {
  mergeStoredAndLiveThreadEvents,
  storedTurnEventsToNotifications,
  type StoredThreadEvent,
} from "./turn-stream-helpers";

export type RemoteTurnTimelineProps = {
  hostId?: unknown;
  taskId?: string | null;
  groupings?: TurnGrouping[];
  unifiedDiff?: string | null;
  turnsLoading?: boolean;
  focusedAssistantId?: string | null;
  conversationDetailLevel?: unknown;
  hideCodeBlocks?: boolean;
  /**
   * Live turn body. Defaults to soft `LiveAssistantTurn` (`ac` / deferredAc peer).
   * Pass null to force the empty status shell.
   */
  renderAssistantTurn?:
    | ((args: {
        hostId?: unknown;
        taskId?: string | null;
        userTurn: RemoteTurnLike;
        assistantTurn: RemoteTurnLike;
        conversationDetailLevel?: unknown;
        fallbackDiff: string | null;
      }) => ReactNode)
    | null;
  /** Optional live stream events keyed by assistant turn id. */
  liveEventsByTurnId?: Map<string, StoredThreadEvent[]>;
  setupLogsByTurnId?: Map<
    string,
    Array<{ id?: string; line: string; createdAt?: string }>
  >;
  containerRef?: RefObject<HTMLDivElement | null>;
};

function defaultGroupings(): TurnGrouping[] {
  return [];
}

/** Scrollable remote turn timeline (staging staging helper surface). */
export function RemoteTurnTimeline({
  hostId,
  taskId,
  groupings = defaultGroupings(),
  unifiedDiff = null,
  turnsLoading = false,
  focusedAssistantId = null,
  conversationDetailLevel,
  hideCodeBlocks = false,
  renderAssistantTurn,
  liveEventsByTurnId,
  setupLogsByTurnId,
  containerRef: externalRef,
}: RemoteTurnTimelineProps): ReactElement {
  const localRef = useRef<HTMLDivElement | null>(null);
  const containerRef = externalRef ?? localRef;

  // Keep navigator item builder reachable for peer local-thread list wiring.
  void buildTimelineNavigatorItems(groupings, (turns, activeId) =>
    pickPreferredById(
      turns as Array<RemoteTurnLike & { discarded?: boolean }>,
      activeId ?? "",
    ),
  );

  if (groupings.length === 0 && !turnsLoading) {
    return (
      <div
        className="flex flex-col gap-1.5 pt-2"
        data-remote-turn-timeline=""
        data-empty="true"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      data-thread-find-target="conversation"
      data-remote-turn-timeline=""
      data-hide-code-blocks={hideCodeBlocks ? "true" : undefined}
      data-turns-loading={turnsLoading ? "true" : undefined}
      data-focused-assistant={focusedAssistantId ?? undefined}
      className="relative flex flex-col gap-2"
    >
      {turnsLoading
        ? null
        : groupings.map(({ node, activeId }) => {
            const assistant = pickPreferredById(
              node.assistantTurns as Array<
                RemoteTurnLike & { discarded?: boolean }
              >,
              activeId ?? "",
            );
            const userKey = joinColonKey("user", node.userTurn.id);
            const isFocused =
              !!focusedAssistantId && assistant?.id === focusedAssistantId;
            const userText = joinTextContentParts(
              (
                (node.userTurn.input_items ?? []) as Array<{
                  type?: string;
                  content?: Array<{ content_type?: string; text?: string }>;
                }>
              ).filter((item) => item.type === "message"),
            );
            const stored = storedTurnEventsToNotifications(assistant);
            const live = liveEventsByTurnId?.get(assistant?.id ?? "") ?? [];
            const merged = assistant
              ? mergeStoredAndLiveThreadEvents({
                  turnStatus: (assistant.turn_status as string) ?? null,
                  storedEvents: stored,
                  liveEvents: live,
                })
              : [];
            void merged;
            const setupLogs = setupLogsByTurnId?.get(assistant?.id ?? "") ?? [];
            const startupFailed =
              (assistant as { error?: { code?: string } } | null)?.error
                ?.code === "startup_script_failed";
            const waitingForEvents =
              merged.length === 0 &&
              (assistant?.turn_status === "pending" ||
                assistant?.turn_status === "in_progress");

            let assistantBody: ReactNode = null;
            if (assistant) {
              if (startupFailed && assistant.turn_status === "failed") {
                assistantBody = (
                  <EnvironmentSetupFailedPanel logs={setupLogs} />
                );
              } else if (waitingForEvents) {
                assistantBody = (
                  <EnvironmentSetupRunningPanel logs={setupLogs} />
                );
              } else if (renderAssistantTurn === null) {
                assistantBody = (
                  <div
                    className="px-4 py-2 text-sm text-token-description-foreground"
                    data-remote-assistant-stub=""
                    data-turn-id={assistant.id}
                    data-event-count={merged.length}
                  />
                );
              } else if (renderAssistantTurn) {
                assistantBody = renderAssistantTurn({
                  hostId,
                  taskId,
                  userTurn: node.userTurn,
                  assistantTurn: assistant,
                  conversationDetailLevel,
                  fallbackDiff:
                    isFocused && !hideCodeBlocks ? unifiedDiff : null,
                });
              } else {
                assistantBody = (
                  <LiveAssistantTurn
                    conversationId={remoteConversationIdForTurn(
                      taskId,
                      assistant.id,
                    )}
                    hostId={hostId}
                    turnSearchKey={joinColonKey("assistant", assistant.id)}
                    turn={assistant}
                    conversationDetailLevel={conversationDetailLevel}
                    cwd={null}
                    reportEntityType="task"
                    modelProvider={null}
                  >
                    <span className="sr-only" data-event-count={merged.length} />
                  </LiveAssistantTurn>
                );
              }
            }

            return (
              <div
                key={node.userTurn.id}
                className="flex flex-col gap-2"
                data-content-search-turn-key={userKey}
                data-content-search-assistant-turn-key={
                  assistant
                    ? joinColonKey("assistant", assistant.id)
                    : undefined
                }
              >
                <div
                  className="scroll-mt-4 self-end max-w-[85%] rounded-lg bg-token-surface-secondary px-3 py-2 text-sm text-token-foreground"
                  data-remote-user-message=""
                >
                  {userText}
                </div>
                {assistantBody}
                {assistant?.turn_status === "cancelled" ? (
                  <RemoteTurnCancelledLabel />
                ) : null}
                {assistant?.turn_status === "failed" && !startupFailed ? (
                  <RemoteTaskFailedCallout
                    message={
                      (
                        assistant as {
                          error?: { message?: string | null };
                        }
                      ).error?.message ?? null
                    }
                  />
                ) : null}
              </div>
            );
          })}
    </div>
  );
}
