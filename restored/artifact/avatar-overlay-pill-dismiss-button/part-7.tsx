// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-DqyLuTaP.js
// Wave FZ — full polished body from `avatar-overlay-pill-dismiss-button-DqyLuTaP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 20/33).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 3/4
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Rst_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Ist_Init } from "../../boundaries/conversation-page-esm-inits";
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
let indigo: any;
let jade: any;
let kite: any;
const Lemon: any = (..._args: any[]) => null;
const Marble: any = (..._args: any[]) => null;
const Nickel: any = (..._args: any[]) => null;
const Onyx: any = (..._args: any[]) => null;
const _e: any = (..._args: any[]) => null;
export const avatarOverlayPillDismissButtonH = esmInit(() => {
  ensureIntlFormattersInit();
  indigo = identity({
    running: {
      id: "avatarOverlay.statusRunning",
      defaultMessage: "Running",
      description: "Status label shown for a loading notification",
    },
    runningFallbackBody: {
      id: "avatarOverlay.statusRunningSubtitle",
      defaultMessage: "Thinking",
      description:
        "Fallback body shown for a loading notification when no richer activity text is available",
    },
    waiting: {
      id: "avatarOverlay.statusWaiting",
      defaultMessage: "Needs input",
      description:
        "Status label shown for a notification waiting on user input",
    },
    review: {
      id: "avatarOverlay.statusReview",
      defaultMessage: "Ready",
      description:
        "Status label shown for a notification with unread completed output",
    },
    failed: {
      id: "avatarOverlay.statusFailed",
      defaultMessage: "Blocked",
      description: "Status label shown for a notification that failed",
    },
    info: {
      id: "avatarOverlay.statusInfo",
      defaultMessage: "Info",
      description: "Status label shown for an informational notification",
    },
  });
  jade = {
    badgeBackgroundColor: "var(--color-token-activity-bar-badge-background)",
    badgeForegroundColor: "var(--color-token-activity-bar-badge-foreground)",
    fallbackBodyMessage: indigo.info,
    iconClassName: "icon-xs shrink-0 text-token-text-secondary",
    iconType: "clock",
    labelMessage: indigo.info,
    mascotState: "idle",
  };
  kite = {
    ...jade,
    mascotState: "waving",
  };
});
function echo(
  falcon,
  gamma,
  {
    includeMcpElicitationCancelAction = false,
    planStartCollaborationMode,
  } = {},
) {
  switch (falcon?.type) {
    case "userInput":
      return falcon.isOnboardingDynamicInput === true
        ? null
        : Lemon(falcon, gamma);
    case "approval":
      return falcon.item.type === "exec"
        ? Marble(falcon.item, gamma)
        : _e(falcon.item, gamma);
    case "permissionRequest":
      return Nickel(falcon.item, gamma);
    case "implementPlan":
      return Onyx(falcon, gamma, planStartCollaborationMode);
    case "mcpServerElicitation":
      return be(falcon, gamma, includeMcpElicitationCancelAction);
    case "optionPicker":
    case "setupCodexContextPicker":
    case "setupCodexStep":
    case undefined:
      return null;
  }
}
export function avatarOverlayPillDismissButtonF(event: any, harbor: any) {
  switch (event.kind) {
    case "question":
      return [event.prompt, ...event.options.map((item) => item.label)]
        .filter(Boolean)
        .join(" ");
    case "plan":
      return event.summary;
    case "patch":
      return [
        harbor.formatMessage(delta.fileCount, {
          count: event.fileCount,
        }),
        event.additions > 0 ? `+${event.additions}` : null,
        event.deletions > 0 ? `-${event.deletions}` : null,
        event.summary,
      ]
        .filter(Boolean)
        .join(". ");
    case "exec":
      return event.summary;
    case "network":
      return event.target;
    case "permission":
      return event.target;
    case "tool":
      return [event.target, event.summary].filter(Boolean).join(". ");
  }
}
