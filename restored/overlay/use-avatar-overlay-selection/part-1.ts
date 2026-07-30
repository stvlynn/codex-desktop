// Restored from ref/webview/assets/use-avatar-overlay-selection-AlDkSEsR.js
// UseAvatarOverlaySelection chunk restored from the Codex webview bundle.
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/4
/* split-lane-import-depth:1 */

import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";
// prettier-ignore
import { appInitial4, appInitial9, appInitialA5, appInitialA7, appInitialAC, appInitialAot, appInitialAr, appInitialC, appInitialC5, appInitialCdt, appInitialCot, appInitialCq, appInitialDdt, appInitialDot, appInitialDr, AppInitialDtt, appInitialEC, appInitialEl, appInitialFC, appInitialFft, appInitialFot, AppInitialFtt, AppInitialG4, appInitialG8, appInitialG9, AppInitialGC, appInitialGut, AppInitialH, appInitialHdt, appInitialHft, appInitialHut, AppInitialI5, appInitialIC, appInitialIft, appInitialIlt, appInitialIq, appInitialIT, appInitialIvt, appInitialJ7, appInitialJ9, appInitialJC, AppInitialJc, appInitialJft, appInitialJot, appInitialJY, appInitialK9, appInitialKC, AppInitialKC, appInitialKq, appInitialKut, appInitialL5, appInitialLC, appInitialLdt, appInitialLlt, appInitialLq, appInitialLT, appInitialLvt, appInitialLX, appInitialM4, appInitialMdt, appInitialMq, appInitialMr, appInitialMT, appInitialNC, appInitialNr, AppInitialO5, appInitialOpt, appInitialOr, appInitialOw, appInitialPC, AppInitialPot, appInitialPt, appInitialQC, AppInitialQc, AppInitialQT, appInitialRC, appInitialRT, appInitialRX, appInitialS, AppInitialS5, appInitialSdt, appInitialSot, appInitialSq, appInitialSw, appInitialTot, appInitialUC, appInitialUdt, appInitialUi, appInitialUtt, appInitialUut, AppInitialW, appInitialW8, appInitialWC, AppInitialWi, appInitialXC, appInitialXot, AppInitialXS, appInitialXT, appInitialY4, appInitialYC, AppInitialYT, appInitialYY, appInitialZC, appInitialZht, appInitialZS, AppInitialZT } from "./host-stubs";
import {
  avatarOverlayPillDismissButtonD,
  avatarOverlayPillDismissButtonF,
  avatarOverlayPillDismissButtonP,
} from "../../artifact/avatar-overlay-pill-dismiss-button";
import {
  customAvatarsQueryI,
  customAvatarsQueryN,
} from "../../desktop/custom-avatars-query";
function useAvatarOverlaySelectionHelper1(delta, echo) {
  switch (delta.kind) {
    case "thread-created":
      return {
        body:
          delta.prompt ??
          echo.formatMessage({
            id: "realtimeVoice.taskCreated.body",
            defaultMessage: "Working on delegated request",
            description:
              "Body shown when realtime voice delegates work to another Codex task",
          }),
        title:
          delta.taskTitle == null
            ? echo.formatMessage({
                id: "realtimeVoice.taskCreated.title",
                defaultMessage: "Created task",
                description:
                  "Title shown when realtime voice creates another Codex task",
              })
            : echo.formatMessage(
                {
                  id: "realtimeVoice.taskCreatedWithTitle.title",
                  defaultMessage: "Created task: {title}",
                  description:
                    "Title shown when realtime voice creates a named Codex task",
                },
                {
                  title: delta.taskTitle,
                },
              ),
      };
    case "thread-message": {
      let falcon;
      return (
        (falcon =
          delta.direction === "from-task"
            ? delta.taskStatus === "completed"
              ? delta.taskTitle == null
                ? echo.formatMessage({
                    id: "realtimeVoice.taskReturned.title",
                    defaultMessage: "Task returned",
                    description:
                      "Title shown when another Codex task finishes work for realtime voice",
                  })
                : echo.formatMessage(
                    {
                      id: "realtimeVoice.taskReturnedWithTitle.title",
                      defaultMessage: "Returned from {title}",
                      description:
                        "Title shown when a named Codex task finishes work for realtime voice",
                    },
                    {
                      title: delta.taskTitle,
                    },
                  )
              : delta.taskTitle == null
                ? echo.formatMessage({
                    id: "realtimeVoice.taskUpdate.title",
                    defaultMessage: "Task update",
                    description:
                      "Title shown when another Codex task sends a progress update to realtime voice",
                  })
                : echo.formatMessage(
                    {
                      id: "realtimeVoice.taskUpdateWithTitle.title",
                      defaultMessage: "Update from {title}",
                      description:
                        "Title shown when a named Codex task sends a progress update to realtime voice",
                    },
                    {
                      title: delta.taskTitle,
                    },
                  )
            : delta.taskTitle == null
              ? echo.formatMessage({
                  id: "realtimeVoice.taskMessageSent.title",
                  defaultMessage: "Message sent",
                  description:
                    "Title shown when realtime voice sends another Codex task a message",
                })
              : echo.formatMessage(
                  {
                    id: "realtimeVoice.taskMessageSentWithTitle.title",
                    defaultMessage: "Sent to {title}",
                    description:
                      "Title shown when realtime voice sends a named Codex task a message",
                  },
                  {
                    title: delta.taskTitle,
                  },
                )),
        {
          body: delta.message ?? useAvatarOverlaySelectionHelper2(delta, echo),
          title: falcon,
        }
      );
    }
  }
}
function useAvatarOverlaySelectionHelper2(gamma, harbor) {
  switch (gamma.taskStatus) {
    case "pending":
    case "running":
      return harbor.formatMessage({
        id: "realtimeVoice.taskUpdate.running",
        defaultMessage: "Task is still working",
        description: "Fallback body for a running delegated task update",
      });
    case "completed":
      return harbor.formatMessage({
        id: "realtimeVoice.taskUpdate.completed",
        defaultMessage: "Task finished",
        description: "Fallback body for a completed delegated task update",
      });
    case "interrupted":
      return harbor.formatMessage({
        id: "realtimeVoice.taskUpdate.interrupted",
        defaultMessage: "Task was interrupted",
        description: "Fallback body for an interrupted delegated task update",
      });
    case "failed":
      return harbor.formatMessage({
        id: "realtimeVoice.taskUpdate.failed",
        defaultMessage: "Task failed",
        description: "Fallback body for a failed delegated task update",
      });
    case "stopped":
      return harbor.formatMessage({
        id: "realtimeVoice.taskUpdate.stopped",
        defaultMessage: "Task stopped",
        description: "Fallback body for a stopped delegated task update",
      });
    case "not-found":
      return harbor.formatMessage({
        id: "realtimeVoice.taskUpdate.notFound",
        defaultMessage: "Task is no longer available",
        description: "Fallback body for a missing delegated task update",
      });
    case null:
      return harbor.formatMessage({
        id: "realtimeVoice.taskUpdate.generic",
        defaultMessage: "Task sent an update",
        description: "Fallback body for a delegated task update",
      });
  }
}
var alpha = rolldownRuntimeN(() => {});
export function useAvatarOverlaySelectionS({
  activities,
  intl,
  nowMs = Date.now(),
  realtimeThreadId,
}: any) {
  return activities.flatMap((item) => {
    if (
      realtimeThreadId == null ||
      item.realtimeThread.conversationId !== realtimeThreadId ||
      nowMs >= useAvatarOverlaySelectionHelper4(item)
    )
      return [];
    let indigo = useAvatarOverlaySelectionHelper1(item, intl);
    return [
      {
        action: {
          path: appInitialPt(item.task.threadId),
        },
        body: indigo.body,
        controlTarget:
          item.task.pendingWorktreeId == null
            ? {
                type: "app-server-conversation",
                conversationId: item.task.threadId,
              }
            : null,
        expiresAtMs: useAvatarOverlaySelectionHelper4(item),
        id: item.id,
        isLoading: false,
        kind: "multi-agent",
        level: useAvatarOverlaySelectionHelper3(item),
        localConversationId:
          item.task.pendingWorktreeId == null ? item.task.threadId : null,
        notificationPreferenceId:
          item.task.pendingWorktreeId == null
            ? appInitialXot(item.task.threadId, item.task.hostId)
            : null,
        source: item.task.hostId === "local" ? "local" : "remote-host",
        title: indigo.title,
        turnKey: item.id,
        updatedAtMs: item.occurredAtMs,
        usesLiveConversationState: false,
        waitingRequest: null,
      },
    ];
  });
}
function useAvatarOverlaySelectionHelper3(jade) {
  return jade.kind === "thread-created" || jade.direction === "to-task"
    ? "info"
    : jade.taskStatus === "failed" || jade.taskStatus === "not-found"
      ? "danger"
      : jade.taskStatus === "completed"
        ? "success"
        : "info";
}
function useAvatarOverlaySelectionHelper4(kite) {
  return kite.occurredAtMs + bravo;
}
var bravo;
export const useAvatarOverlaySelectionC = rolldownRuntimeN(() => {
  appInitialOpt();
  appInitialSot();
  appInitialCot();
  alpha();
  bravo = 5e3;
});
