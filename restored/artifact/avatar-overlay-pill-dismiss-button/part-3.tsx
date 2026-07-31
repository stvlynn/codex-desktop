// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-DqyLuTaP.js
// Wave FZ — full polished body from `avatar-overlay-pill-dismiss-button-DqyLuTaP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 20/33).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 3/5
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Rst_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Ist_Init } from "../../conversation/conversation-page-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { dictationErrorMessages } from "../../composer/dictation-error-messages";
import { activeTurnsOrNull } from "../../conversation/active-turns-or-null";
import { lastTurnFromConversation } from "../../conversation/last-turn-from-conversation";
import {
  emptySubAgentSourceFields,
  subAgentFromThreadSource,
} from "../../conversation/sub-agent-source-from-thread-source";
import { summarizeVisualizationFileChanges } from "../../files/visualization-html-path";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { isPleaseImplementThisPlan } from "../../prompts/is-please-implement-this-plan";
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ChartsPurpleBadge } from "../../ui/charts-purple-badge";
import { cloud2 } from "../../ui/cloud2";
import { vot } from "../../ui/vot";
import { identity } from "../../utils/identity";
import { quoteShellArgs } from "../../utils/quote-shell-args";

// Wave5d soft stubs.
const AppInitialGst: any = undefined;
const AppInitialIct: any = undefined;
const AppInitialIot: any = undefined;
const AppInitialQst: any = undefined;
const AppInitialYst: any = undefined;
const DeferredYot: any = undefined;
const ReadFile: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
var gamma,
  avatarOverlayPillDismissButtonP = esmInit(() => {
    ensureIntlFormattersInit();
    DeferredYot();
    ReadFile();
    gamma = identity({
      allow: {
        id: "avatarOverlay.waitingRequest.allow",
        defaultMessage: "Allow",
        description:
          "Compact action button label for allowing a waiting request",
      },
      allowNetwork: {
        id: "avatarOverlay.waitingRequest.allowNetwork",
        defaultMessage: "Allow network",
        description: "Compact title for a waiting network access request",
      },
      allowOnce: {
        id: "avatarOverlay.waitingRequest.allowOnce",
        defaultMessage: "Allow once",
        description:
          "Accessible label for allowing a waiting request for the current turn",
      },
      allowTarget: {
        id: "avatarOverlay.waitingRequest.allowTarget",
        defaultMessage: "Allow {target}",
        description:
          "Compact action button label or title for allowing access to a named connector, plugin, tool, or server",
      },
      apply: {
        id: "avatarOverlay.waitingRequest.apply",
        defaultMessage: "Apply",
        description:
          "Compact action button label for applying a file change request",
      },
      applyChanges: {
        id: "avatarOverlay.waitingRequest.applyChanges",
        defaultMessage: "Apply changes",
        description: "Compact title for a waiting file change approval request",
      },
      askQuestion: {
        id: "avatarOverlay.waitingRequest.askQuestion",
        defaultMessage: "Ask a question",
        description: "Compact title for a waiting user-input question request",
      },
      answerTarget: {
        id: "avatarOverlay.waitingRequest.answerTarget",
        defaultMessage: "Answer {target}",
        description: "Compact title for answering a named tool server request",
      },
      command: {
        id: "avatarOverlay.waitingRequest.command",
        defaultMessage: "Command",
        description:
          "Fallback compact summary for a waiting command approval request",
      },
      cancel: {
        id: "avatarOverlay.waitingRequest.cancel",
        defaultMessage: "Cancel",
        description:
          "Compact action button label for cancelling a waiting request",
      },
      connector: {
        id: "avatarOverlay.waitingRequest.connector",
        defaultMessage: "Connector",
        description: "Compact label for a suggested connector waiting request",
      },
      connectTarget: {
        id: "avatarOverlay.waitingRequest.connectTarget",
        defaultMessage: "Connect {target}",
        description: "Compact title for connecting a named connector",
      },
      connect: {
        id: "avatarOverlay.waitingRequest.connect",
        defaultMessage: "Connect",
        description: "Compact action button label for connecting a connector",
      },
      continue: {
        id: "avatarOverlay.waitingRequest.continue",
        defaultMessage: "Continue",
        description:
          "Compact action button label for continuing a connector flow",
      },
      deny: {
        id: "avatarOverlay.waitingRequest.deny",
        defaultMessage: "Deny",
        description:
          "Compact action button label for denying a waiting request",
      },
      enableTool: {
        id: "avatarOverlay.waitingRequest.enableTool",
        defaultMessage: "Enable {toolName}",
        description: "Compact title for enabling a named connector or plugin",
      },
      fileAccess: {
        id: "avatarOverlay.waitingRequest.fileAccess",
        defaultMessage: "File access",
        description: "Compact title for a waiting file permission request",
      },
      fileCount: {
        id: "avatarOverlay.waitingRequest.fileCount",
        defaultMessage: "{count, plural, one {# file} other {# files}}",
        description:
          "Compact file count used in a waiting patch request accessibility summary",
      },
      installTool: {
        id: "avatarOverlay.waitingRequest.installTool",
        defaultMessage: "Install {toolName}",
        description: "Compact title for installing a named connector or plugin",
      },
      implementPlan: {
        id: "avatarOverlay.waitingRequest.implementPlan",
        defaultMessage: "Implement plan",
        description: "Compact action button label for starting a proposed plan",
      },
      networkAccess: {
        id: "avatarOverlay.waitingRequest.networkAccess",
        defaultMessage: "Network access",
        description: "Compact title for a waiting network permission request",
      },
      openLink: {
        id: "avatarOverlay.waitingRequest.openLink",
        defaultMessage: "Open link",
        description:
          "Compact title or action label for a waiting URL action request",
      },
      oneFileChanged: {
        id: "avatarOverlay.waitingRequest.oneFileChanged",
        defaultMessage: "1 file changed",
        description:
          "Fallback compact summary for a waiting file change approval request",
      },
      option: {
        id: "avatarOverlay.waitingRequest.option",
        defaultMessage: "Option",
        description: "Fallback compact label for a waiting question option",
      },
      plan: {
        id: "avatarOverlay.waitingRequest.plan",
        defaultMessage: "Plan",
        description: "Compact title for a waiting plan implementation request",
      },
      plugin: {
        id: "avatarOverlay.waitingRequest.plugin",
        defaultMessage: "Plugin",
        description: "Compact label for a suggested plugin waiting request",
      },
      review: {
        id: "avatarOverlay.waitingRequest.review",
        defaultMessage: "Review",
        description:
          "Compact action button label for reviewing a waiting request",
      },
      reviewCommand: {
        id: "avatarOverlay.waitingRequest.reviewCommand",
        defaultMessage: "Review command",
        description: "Compact title for a waiting command approval request",
      },
      additionalAccessTarget: {
        id: "avatarOverlay.waitingRequest.moreAccessTarget",
        defaultMessage: "ChatGPT needs more {target} access",
        description:
          "Compact title for granting additional access to a named connector",
      },
      reconnectTarget: {
        id: "avatarOverlay.waitingRequest.reconnectTarget",
        defaultMessage: "Reconnect {target}",
        description:
          "Compact title or action label for reconnecting a named connector",
      },
      reconnect: {
        id: "avatarOverlay.waitingRequest.reconnect",
        defaultMessage: "Reconnect",
        description:
          "Compact action button label for reconnecting expired connector credentials",
      },
      runCommand: {
        id: "avatarOverlay.waitingRequest.runCommand",
        defaultMessage: "Run command",
        description:
          "Compact operation label for a waiting command approval request",
      },
      runOnce: {
        id: "avatarOverlay.waitingRequest.runOnce",
        defaultMessage: "Run once",
        description: "Compact action button label for running a command once",
      },
      updateAccess: {
        id: "avatarOverlay.waitingRequest.updateAccess",
        defaultMessage: "Update access",
        description:
          "Compact action button label for updating connector permissions",
      },
      tool: {
        id: "avatarOverlay.waitingRequest.tool",
        defaultMessage: "tool",
        description: "Fallback compact label for a suggested tool",
      },
      toolServer: {
        id: "avatarOverlay.waitingRequest.toolServer",
        defaultMessage: "Tool server",
        description: "Fallback compact label for an unnamed tool server",
      },
    });
  });
export function avatarOverlayPillDismissButtonC({
  includeCompactWaitingRequests,
  includeMcpElicitationCancelAction = false,
  intl,
  localConversations,
  excludedConversationId,
  remoteTasks,
}: any) {
  let lemon = [],
    marble = new Set();
  for (let nickel of localConversations) {
    let onyx = harbor({
      conversation: nickel,
      includeCompactWaitingRequests,
      includeMcpElicitationCancelAction,
      intl,
      excludedConversationId,
    });
    onyx == null ||
      marble.has(onyx.key) ||
      (marble.add(onyx.key), lemon.push(onyx));
  }
  for (let pearl of remoteTasks) {
    let quartz = indigo(pearl, intl);
    marble.has(quartz.key) || (marble.add(quartz.key), lemon.push(quartz));
  }
  return lemon;
}
function harbor({
  conversation,
  includeCompactWaitingRequests,
  includeMcpElicitationCancelAction,
  intl,
  excludedConversationId,
}) {
  if (AppInitialGst(conversation)) return null;
  let river = conversation.hostId ?? "local",
    slate = river === "local" ? "local" : "remote-host",
    timber = delta(conversation),
    umbra = conversation.threadSource === "automation" || false,
    violet = umbra ? kite(conversation) : jade(conversation, intl);
  if (
    (conversation.threadSource === "realtime_voice" ||
      conversation.id === excludedConversationId) &&
    timber !== "waiting" &&
    timber !== "failed"
  )
    return null;
  let willow =
    includeCompactWaitingRequests && timber === "waiting"
      ? AppInitialIot(conversation)
      : null;
  return {
    actionPath: "/local/" + conversation.id,
    controlTarget: {
      type: "app-server-conversation",
      conversationId: conversation.id,
    },
    hostId: river,
    key: isPleaseImplementThisPlan(conversation.id, river),
    localConversationId: conversation.id,
    source: slate,
    showInNotificationTray:
      !umbra || timber === "waiting" || timber === "failed" || violet != null,
    sortAtMs:
      lastTurnFromConversation(conversation)?.turnStartedAtMs ??
      conversation.updatedAt,
    status: timber,
    subtitle: violet,
    title:
      ensureComposerEsm_Rst_Init(conversation) ??
      intl.formatMessage(falcon.newThread),
    turnKey: String(AppInitialQst(conversation)),
    updatedAtMs: conversation.updatedAt,
    waitingRequest: alpha(willow, intl, {
      includeMcpElicitationCancelAction,
      planStartCollaborationMode: {
        mode: "default",
        settings: {
          ...conversation.latestCollaborationMode.settings,
          developer_instructions: null,
        },
      },
    }),
  };
}
function indigo(xenon, yellow) {
  let zinc = (xenon.updated_at ?? xenon.created_at ?? 0) * 1e3,
    amber =
      xenon.task_status_display?.latest_turn_status_display?.turn_id ?? null;
  return {
    actionPath: "/remote/" + xenon.id,
    controlTarget:
      amber == null
        ? null
        : {
            type: "cloud-task",
            taskId: xenon.id,
            turnId: amber,
          },
    hostId: null,
    key: quoteShellArgs(xenon.id),
    localConversationId: null,
    source: "cloud",
    showInNotificationTray: true,
    sortAtMs: zinc,
    status: echo(xenon),
    subtitle: null,
    title: xenon.title?.trim() || yellow.formatMessage(falcon.newThread),
    turnKey: amber,
    updatedAtMs: zinc,
    waitingRequest: null,
  };
}
function jade(basalt, cedar) {
  return avatarOverlayPillDismissButtonL(
    lastTurnFromConversation(basalt)?.items ?? [],
    cedar,
  );
}
function avatarOverlayPillDismissButtonL(daisy, ember) {
  for (let flint = daisy.length - 1; flint >= 0; --flint) {
    let garnet = daisy[flint];
    if (garnet?.type === "reasoning")
      for (let hazel = garnet.summary.length - 1; hazel >= 0; --hazel) {
        let ivory = copper(garnet.summary[hazel]);
        if (ivory != null) return ivory;
      }
    if (garnet?.type === "agentMessage") {
      let jasper = AppInitialYst(garnet.text),
        kelp = AppInitialIct(jasper),
        lotus =
          kelp?.decision === "DONT_NOTIFY"
            ? null
            : copper(kelp?.notificationMessage ?? kelp?.visibleText ?? jasper);
      if (lotus != null) return lotus;
    }
  }
  for (let mint = daisy.length - 1; mint >= 0; --mint) {
    let nova = bravo(daisy[mint], ember);
    if (nova != null) return nova;
  }
  return null;
}
function kite(olive) {
  let prism = lastTurnFromConversation(olive)?.items;
  if (prism == null) return null;
  for (let quill = prism.length - 1; quill >= 0; --quill) {
    let reef = prism[quill];
    if (reef?.type !== "agentMessage") continue;
    let sage = AppInitialYst(reef.text),
      topaz = AppInitialIct(sage);
    if (topaz != null)
      return topaz.decision === "DONT_NOTIFY"
        ? null
        : copper(topaz.notificationMessage ?? topaz.visibleText);
    if (reef.phase !== "commentary") {
      let ultra = copper(sage);
      if (ultra != null) return ultra;
    }
  }
  return null;
}
