// Restored from ref/webview/assets/codex-micro-keyboard-surface-Bhpd7qkO.js
// Wave FZ — full polished body from `codex-micro-keyboard-surface-Bhpd7qkO/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 23 (verified 54/76).
// Group 2/5
/* split-lane-import-depth:1 */

import { deferredAccountUv } from "../../account/deferred-account-uv";
import { resolveReferralProgram } from "../../account/resolve-referral-program";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { CodexPluginDirectoryEntrypoint } from "../../analytics/codex-plugin-directory-entrypoint";
import { CodexReferralInviteModalBackendErrorType } from "../../analytics/codex-referral-invite-modal-backend-error-type";
import { ensureComposerEsm_CU_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Kg_Init, ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { chatgpt2 } from "../../browser/chatgpt2";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { deferredConversationR } from "../../conversation/deferred-conversation-r";
import { normalizeGithubHostname } from "../../conversation/github-hostname";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAA } from "../../icons/app-icon-aa";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconF0 } from "../../icons/app-icon-f0";
import { AppIconGg } from "../../icons/app-icon-gg";
import { AppIconMlt } from "../../icons/app-icon-mlt";
import { AppIconUD } from "../../icons/app-icon-review-commit-glyph";
import { AppIconRo } from "../../icons/app-icon-ro";
import { AppIconSR } from "../../icons/app-icon-sr";
import { AppIconTv } from "../../icons/app-icon-tv";
import { AppIconYm } from "../../icons/app-icon-ym";
import { ensureFlaskIconInit, FlaskIcon } from "../../icons/flask-icon";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ensurePlayOutlineIconInit, PlayOutlineIcon } from "../../icons/play-outline-icon";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { ensureStarOutlineIconInit, StarOutlineIcon } from "../../icons/star-outline-icon";
import { TerminalFileIcon } from "../../icons/terminal-file-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { esmInit } from "../../runtime/rolldown-runtime";
import { useChronicleSettingsSection } from "../../settings/use-chronicle-settings-section";
import { threadActionErrorMessages } from "../../sidebar/thread-action-error-messages";
import { usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { deferredT } from "../../ui/deferred-t";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { identity } from "../../utils/identity";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { ensureSettingsGlyphI0Init, ensureSettingsGlyphNltInit, ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";

/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const codexMicroKeyboardSurfaceU: any = undefined;

export const codexMicroKeyboardSurfaceS = esmInit(() => {
  $e = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  strongMarkerFromOptions();
  ensureIntlFormattersInit();
  ensureComposerEsm_Hlt_Init();
  codexMicroKeyboardSurfaceU();
  eagle = identity({
    working: {
      id: "settings.codexMicro.agentKeyPreview.status.working",
      defaultMessage: "Working",
      description: "Working status for a Codex Micro agent key"
    },
    unread: {
      id: "settings.codexMicro.agentKeyPreview.status.unread",
      defaultMessage: "Unread",
      description: "Unread status for a Codex Micro agent key"
    },
    idle: {
      id: "settings.codexMicro.agentKeyPreview.status.idle",
      defaultMessage: "Idle",
      description: "Idle status for a Codex Micro agent key"
    },
    "awaiting-approval": {
      id: "settings.codexMicro.agentKeyPreview.status.awaitingApproval",
      defaultMessage: "Awaiting approval",
      description: "Awaiting approval status for a Codex Micro agent key"
    },
    "awaiting-response": {
      id: "settings.codexMicro.agentKeyPreview.status.awaitingResponse",
      defaultMessage: "Awaiting response",
      description: "Awaiting response status for a Codex Micro agent key"
    },
    error: {
      id: "settings.codexMicro.agentKeyPreview.status.error",
      defaultMessage: "Error",
      description: "Error status for a Codex Micro agent key"
    },
    off: {
      id: "settings.codexMicro.agentKeyPreview.status.off",
      defaultMessage: "Off",
      description: "Off status for an unassigned Codex Micro agent key"
    }
  });
});
export function codexMicroKeyboardSurfaceI(alpha: unknown) {
  let {
      children,
      className
    } = alpha,
    bravo = IntlProvider("relative grid aspect-square w-full max-w-[15rem] grid-cols-4 grid-rows-4 gap-1 rounded-xl border border-white/[0.82] bg-[#ebe8e2] p-2.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.72),0_1px_0_rgba(255,255,255,0.65)] dark:border-white/[0.1] dark:bg-[#18191e] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_1px_0_rgba(0,0,0,0.28)]", className);
  let copper = <div className="pointer-events-none absolute top-[2.85rem] right-2.5 left-[3.1rem] h-[4.85rem] rounded-full bg-[#8db5ff]/28 blur-2xl" />;
  return <div className={bravo}>
      {copper}
      {children}
    </div>;
}
