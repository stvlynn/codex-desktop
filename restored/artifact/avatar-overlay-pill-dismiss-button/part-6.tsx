// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-DqyLuTaP.js
// Wave FZ — full polished body from `avatar-overlay-pill-dismiss-button-DqyLuTaP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 20/33).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 2/4
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
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const be: any = undefined;
const AppInitialEut: any = undefined;
export const avatarOverlayPillDismissButtonUnderscore = esmInit(() => {
  AppInitialEut();
  indigo = 22.5;
  jade = 16;
  kite = 9;
  lemon = 8;
  marble = 1;
});
export function avatarOverlayPillDismissButtonM(harbor: any) {
  if (harbor == null) return falcon;
  if (harbor.kind === "first-awake") return gamma;
  if (harbor.isLoading)
    return {
      badgeBackgroundColor: "var(--color-token-activity-bar-badge-background)",
      badgeForegroundColor: "var(--color-token-activity-bar-badge-foreground)",
      fallbackBodyMessage: echo.runningFallbackBody,
      iconClassName: "icon-xs shrink-0 text-token-text-secondary",
      iconType: "spinner",
      labelMessage: echo.running,
      mascotState: "running",
    };
  switch (harbor.level) {
    case "warning":
      return {
        badgeBackgroundColor: "var(--color-token-editor-warning-foreground)",
        badgeForegroundColor: "var(--color-token-bg-primary)",
        fallbackBodyMessage: echo.waiting,
        iconClassName: "icon-xs shrink-0 text-token-editor-warning-foreground",
        iconType: "clock",
        labelMessage: echo.waiting,
        mascotState: "waiting",
      };
    case "danger":
      return {
        badgeBackgroundColor: "var(--color-token-error-foreground)",
        badgeForegroundColor: "var(--color-token-bg-primary)",
        fallbackBodyMessage: echo.failed,
        iconClassName: "icon-xs shrink-0 text-token-error-foreground",
        iconType: "warning",
        labelMessage: echo.failed,
        mascotState: "failed",
      };
    case "success":
      return {
        badgeBackgroundColor: "var(--color-token-charts-green)",
        badgeForegroundColor: "var(--color-token-bg-primary)",
        fallbackBodyMessage: echo.review,
        iconClassName: "icon-xs shrink-0 text-token-charts-green",
        iconType: "check-circle",
        labelMessage: echo.review,
        mascotState: "review",
      };
    case "info":
      return falcon;
  }
}
var echo, falcon, gamma;
