// Restored from ref/webview/assets/worktree-setup-auto-fix-CqsFmOeg.js
// Wave FY — full polished body from `worktree-setup-auto-fix-CqsFmOeg/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 10/14).

import { GuardianApprovals } from "../apps/guardian-approvals";
import { getPersistedAtomItem } from "../boundaries/persisted-atom-store";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { UPDATED_AT_KEY } from "../config/updated-at-key";
import { AppActionSelector } from "../navigation/app-action-selectors";
import { esmInit } from "../runtime/rolldown-runtime";
import { deferredDefaultHelper } from "../ui/deferred-default-helper";
import { canonicalizeWorkspacePathKey } from "../utils/workspace-path-keys";
import { WorktreeSetupActivityFeed } from "./worktree-setup-activity-feed";

/** Wave FY unresolved companion (missing-export:conversation/thread.tsx) */
const Thread: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/formatted-message.tsx) */
const FormattedMessage: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setRemoteControlEnabledForHost@hosts/set-remote-control-enabled-for-host.ts) */
const AppInitialV: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-vv.ts) */
const deferredUiVV: any = undefined;
function alpha({
  pendingWorktree,
  isConversationStarting,
  isConversationStartFailed,
}) {
  let indigo =
      pendingWorktree.worktreeGitRoot != null &&
      pendingWorktree.worktreeWorkspaceRoot != null,
    jade = [
      {
        id: `${pendingWorktree.id}:${pendingWorktree.attempt}:worktree`,
        kind: "worktree",
        status: bravo(pendingWorktree.phase, indigo),
        outputText: pendingWorktree.worktreeOutputText,
      },
    ],
    kite = copper(pendingWorktree, indigo);
  return (
    kite != null &&
      jade.push({
        id: `${pendingWorktree.id}:${pendingWorktree.attempt}:setup`,
        kind: "setup",
        status: kite,
        outputText: pendingWorktree.setupOutputText,
      }),
    (isConversationStarting || isConversationStartFailed) &&
      jade.push({
        id: `${pendingWorktree.id}:${pendingWorktree.attempt}:conversation`,
        kind: "conversation",
        status: isConversationStartFailed ? "failed" : "running",
        outputText: "",
      }),
    jade
  );
}
function bravo(lemon, marble) {
  switch (lemon) {
    case "queued":
    case "creating":
      return "running";
    case "setting-up":
    case "worktree-ready":
      return "completed";
    case "failed":
      return marble ? "completed" : "failed";
  }
}
function copper(nickel, onyx) {
  switch (nickel.phase) {
    case "queued":
    case "creating":
      return null;
    case "setting-up":
      return "running";
    case "worktree-ready":
      return nickel.localEnvironmentConfigPath == null
        ? null
        : nickel.errorMessage == null
          ? "completed"
          : "skipped";
    case "failed":
      return onyx ? "failed" : null;
  }
}
var delta = esmInit(() => {});
export function worktreeSetupAutoFixR(violet: unknown) {
  let {
      pendingWorktree,
      isConversationStarting,
      isConversationStartFailed,
      children,
    } = violet,
    willow = alpha({
      pendingWorktree,
      isConversationStarting,
      isConversationStartFailed,
    });
  return (
    <WorktreeSetupActivityFeed
      {...{
        activities: willow,
        children,
      }}
    />
  );
}
var echo, falcon;
export const worktreeSetupAutoFixI = esmInit(() => {
  echo = reactCompilerRuntime();
  deferredDefaultHelper();
  delta();
});
export async function worktreeSetupAutoFixT({
  createPendingWorktree,
  intl,
  pendingWorktree,
  serviceTier,
}: {
  createPendingWorktree?: unknown;
  intl?: unknown;
  pendingWorktree?: unknown;
  serviceTier?: unknown;
  [key: string]: unknown;
}) {
  let xenon = harbor(pendingWorktree, intl),
    yellow = await gamma(pendingWorktree, xenon, serviceTier),
    zinc = intl.formatMessage({
      id: "worktreeInitV2.autoFix.label",
      defaultMessage: "Fix worktree setup",
      description:
        "Pending worktree label for a repair thread created after local environment setup fails",
    });
  return AppInitialV(createPendingWorktree, {
    hostId: pendingWorktree.hostId,
    label: zinc,
    initialThreadTitle: zinc,
    sourceWorkspaceRoot: pendingWorktree.sourceWorkspaceRoot,
    startingState: pendingWorktree.startingState,
    localEnvironmentConfigPath: null,
    launchMode: "start-conversation",
    prompt: xenon,
    startConversationParamsInput: yellow,
    sourceConversationId: null,
    sourceCollaborationMode: null,
  });
}
async function gamma(pearl, quartz, river) {
  let slate = [
    {
      type: "text",
      text: quartz,
      text_elements: [],
    },
  ];
  if (pearl.launchMode === "start-conversation")
    return {
      ...pearl.startConversationParamsInput,
      input: slate,
      commentAttachments: [],
      workspaceRoots: [pearl.sourceWorkspaceRoot],
      cwd: pearl.sourceWorkspaceRoot,
      fileAttachments: [],
      addedFiles: [],
      threadSource: "system",
      serviceTier: river,
    };
  let { config } = await canonicalizeWorkspacePathKey("read-config-for-host", {
    hostId: pearl.hostId,
    includeLayers: false,
    cwd: pearl.sourceWorkspaceRoot,
    priority: "critical",
  });
  return {
    input: slate,
    commentAttachments: [],
    workspaceRoots: [pearl.sourceWorkspaceRoot],
    cwd: pearl.sourceWorkspaceRoot,
    fileAttachments: [],
    addedFiles: [],
    agentMode:
      getPersistedAtomItem("agent-mode-by-host-id", {})[pearl.hostId] ?? "auto",
    shouldSendPermissionOverrides: true,
    model: null,
    serviceTier: river,
    reasoningEffort: null,
    collaborationMode:
      pearl.launchMode === "fork-conversation"
        ? pearl.sourceCollaborationMode
        : null,
    config: Thread(config),
    threadSource: "system",
    workspaceKind: "project",
  };
}
function harbor(timber, umbra) {
  return umbra.formatMessage(
    {
      id: "worktreeInitV2.autoFix.prompt",
      defaultMessage:
        "Fix this project's local environment setup.{paragraphBreak}The original worktree setup failed before its thread could start. Do not continue the original user request. Start a one-off repair task in this new worktree without running the broken setup automatically. Paths in the failure output refer to the original source or failed worktree, so edit the corresponding files in this current repair worktree. Inspect the selected local environment config and related setup files, reproduce the failure manually if useful, make the smallest source-controlled fix, verify the setup succeeds, and leave the proposed fix here for user review before they retry the original task. If the fix should not be made automatically, explain exactly what the user should change.{paragraphBreak}Selected local environment config: {configPath}{lineBreak}Original setup error: {errorMessage}{paragraphBreak}Original setup output:{lineBreak}```text{lineBreak}{outputText}{lineBreak}```",
      description:
        "Prompt sent to a repair thread created after local environment setup fails",
    },
    {
      configPath: timber.localEnvironmentConfigPath ?? "",
      errorMessage: timber.errorMessage ?? "",
      lineBreak: "\n",
      outputText: timber.setupOutputText,
      paragraphBreak: "\n\n",
    },
  );
}
export const worktreeSetupAutoFixN = esmInit(() => {
  AppActionSelector();
  UPDATED_AT_KEY();
  GuardianApprovals();
  FormattedMessage();
  deferredUiVV();
});

/** Wave FY: bind no longer required after full body promote */
export function bindWorktreeSetupAutoFixActivity(_next: unknown): void {}
export function ensureWorktreeSetupAutoFixActivityInit(): void {}

/** Semantic aliases matching IMPORT_MAP (r/t/n surface). */
export {
  worktreeSetupAutoFixR as WorktreeSetupAutoFixActivity,
  worktreeSetupAutoFixT as createWorktreeSetupAutoFix,
  worktreeSetupAutoFixN as ensureWorktreeSetupAutoFixCreateInit,
};
