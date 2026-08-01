// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-DqyLuTaP.js
// Wave FZ — full polished body from `avatar-overlay-pill-dismiss-button-DqyLuTaP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 20/33).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 4/4
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Rst_Init } from "../../composer/composer-esm-inits";
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
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const be: any = undefined;
const AppInitialEut: any = undefined;
export function avatarOverlayPillDismissButtonD(indigo: any, jade: any) {
  return `${jade.title} ${jade.notificationTitleSeparator ?? "·"} ${indigo}`;
}
function echo(kite, lemon) {
  let marble = kite.item.questions[0];
  if (marble == null) return null;
  let nickel = bravo(marble.question) ?? bravo(marble.header);
  return nickel == null || marble.options.length === 0
    ? null
    : {
        kind: "question",
        requestId: kite.item.requestId,
        title: lemon.formatMessage(delta.askQuestion),
        prompt: nickel,
        options: marble.options.map((item) => ({
          label: bravo(item.label) ?? lemon.formatMessage(delta.option),
          description: bravo(item.description),
          questionId: marble.id,
        })),
      };
}
function falcon(onyx, pearl) {
  if (onyx.type !== "exec") throw Error("Expected exec approval item");
  if (onyx.approvalRequestId == null) return null;
  let quartz = bravo(onyx.networkApprovalContext?.host ?? "");
  return quartz == null
    ? {
        kind: "exec",
        requestId: onyx.approvalRequestId,
        operation: pearl.formatMessage(delta.runCommand),
        summary:
          bravo(onyx.cmd.join(" && ")) ?? pearl.formatMessage(delta.command),
        title: pearl.formatMessage(delta.reviewCommand),
        actions: [
          {
            commandDecision: "accept",
            intent: "command-approval",
            label: pearl.formatMessage(delta.runOnce),
            tone: "primary",
          },
          {
            commandDecision: "decline",
            intent: "command-approval",
            label: pearl.formatMessage(delta.deny),
            tone: "danger",
          },
        ],
      }
    : {
        kind: "network",
        requestId: onyx.approvalRequestId,
        operation: pearl.formatMessage(delta.allowNetwork),
        target: quartz,
        title: pearl.formatMessage(delta.allowNetwork),
        actions: [
          {
            ariaLabel: pearl.formatMessage(delta.allowOnce),
            commandDecision: "accept",
            intent: "command-approval",
            label: pearl.formatMessage(delta.allow),
            tone: "primary",
          },
          {
            commandDecision: "decline",
            intent: "command-approval",
            label: pearl.formatMessage(delta.deny),
            tone: "danger",
          },
        ],
      };
}
function _e(river, slate) {
  if (river.type !== "patch" || river.approvalRequestId == null) return null;
  let timber = Object.entries(river.changes);
  if (timber.length === 0) return null;
  let umbra = alpha(river.changes);
  return {
    kind: "patch",
    requestId: river.approvalRequestId,
    operation: slate.formatMessage(delta.applyChanges),
    summary: timber[0]?.[0] ?? slate.formatMessage(delta.oneFileChanged),
    title: slate.formatMessage(delta.applyChanges),
    files: timber.map(([violet]) => violet),
    fileCount: timber.length,
    additions: umbra.additions,
    deletions: umbra.deletions,
    actions: [
      {
        fileDecision: "accept",
        intent: "file-approval",
        label: slate.formatMessage(delta.apply),
        tone: "primary",
      },
      {
        intent: "open",
        label: slate.formatMessage(delta.review),
        tone: "secondary",
      },
    ],
  };
}
function gamma(willow, xenon) {
  let { permissions } = willow,
    yellow = summarizeVisualizationFileChanges(permissions)[0];
  if (yellow == null) return null;
  let zinc, amber;
  if (yellow.kind === "network") {
    amber = xenon.formatMessage(delta.networkAccess);
    zinc = amber;
  } else {
    amber = xenon.formatMessage(delta.fileAccess);
    let basalt = yellow.paths[0] ?? amber,
      cedar = Math.max(0, yellow.paths.length - 1);
    zinc = cedar === 0 ? basalt : `${basalt} +${cedar}`;
  }
  return {
    kind: "permission",
    requestId: willow.requestId,
    operation: amber,
    target: zinc,
    title: amber,
    actions: [
      {
        intent: "permission-response",
        ariaLabel: xenon.formatMessage(delta.allowOnce),
        label: xenon.formatMessage(delta.allow),
        permissionResponse: {
          permissions: copper(permissions),
          scope: "turn",
        },
        tone: "primary",
      },
      {
        intent: "permission-response",
        label: xenon.formatMessage(delta.deny),
        permissionResponse: {
          permissions: {},
          scope: "turn",
        },
        tone: "danger",
      },
    ],
  };
}
function harbor(daisy, ember, flint) {
  let { planContent } = daisy,
    garnet = bravo(
      planContent
        .split(/\r?\n/)
        .map((item) => item.replace(/^[-*]\s+\[[ x]\]\s+/i, "").trim())
        .find((item) => item.length > 0) ?? "",
    );
  return garnet == null
    ? null
    : {
        kind: "plan",
        operation: ember.formatMessage(delta.plan),
        planContent,
        summary: garnet,
        title: ember.formatMessage(delta.plan),
        turnId: daisy.turnId,
        actions: [
          {
            intent: "plan-start",
            label: ember.formatMessage(delta.implementPlan),
            planStartCollaborationMode: flint,
            tone: "primary",
          },
        ],
      };
}
