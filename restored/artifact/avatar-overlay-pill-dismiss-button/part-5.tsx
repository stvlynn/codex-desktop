// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-DqyLuTaP.js
// Wave FZ — full polished body from `avatar-overlay-pill-dismiss-button-DqyLuTaP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 14 (verified 20/33).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 5/5
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
const avatarOverlayPillDismissButtonL: any = undefined;
const avatarOverlayPillDismissButtonP: any = undefined;
const avatarOverlayPillDismissButtonV: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
export function avatarOverlayPillDismissButtonO(bravo: any) {
  return [
    bravo.value,
    bravo.selectionStart,
    bravo.selectionEnd,
    bravo.selectionDirection,
    bravo.scrollLeft,
    bravo.scrollTop,
  ].join("\0");
}
export const avatarOverlayPillDismissButtonS = esmInit(() => {});
export function avatarOverlayPillDismissButtonR(
  copper: any,
  delta: any,
  echo: any = false,
) {
  return !delta && (!copper || echo) ? "pet" : delta ? "voice-orb" : "hidden";
}
export const avatarOverlayPillDismissButtonI = esmInit(() => {});
export function avatarOverlayPillDismissButtonT(falcon: any) {
  let { ariaLabel, onClick } = falcon,
    gamma = (
      <svg
        aria-hidden={true}
        className="size-3"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M3 3 9 9M9 3 3 9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  return (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": ariaLabel,
        className:
          "size-5 !rounded-full !border-token-border-heavy !bg-token-main-surface-primary/65 !text-token-foreground shadow-[0_2px_6px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-transform duration-basic ease-out focus-visible:ring-2 focus-visible:ring-token-focus-border active:scale-95 enabled:hover:!bg-token-main-surface-primary/80 motion-reduce:transition-none motion-reduce:active:scale-100 forced-colors:!border-[ButtonBorder] forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText] forced-colors:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:!bg-token-main-surface-primary/95 [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none",
        color: "ghost",
        size: "icon",
        onClick,
        children: gamma,
      }}
    />
  );
}
var alpha, $;
export const avatarOverlayPillDismissButtonN = esmInit(() => {
  alpha = reactCompilerRuntime();
  ensureSettingsQueryAtomsInit();
});
export {
  avatarOverlayPillDismissButtonL,
  avatarOverlayPillDismissButtonP,
  avatarOverlayPillDismissButtonV,
};
