// Restored from ref/webview/assets/codex-micro-keyboard-surface-Bhpd7qkO.js
// Wave FZ — full polished body from `codex-micro-keyboard-surface-Bhpd7qkO/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 23 (verified 54/76).
// Group 3/5
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

export function codexMicroKeyboardSurfaceN(alpha: unknown) {
  let {
      ariaLabel,
      pulse = null
    } = alpha,
    bravo = ariaLabel == null,
    copper = ariaLabel == null ? undefined : "img",
    delta = pulse != null && "border-[#8db5ff]/70 opacity-100 shadow-[0_0_0_1px_rgba(141,181,255,0.18),0_0_14px_rgba(141,181,255,0.38)]",
    echo = IntlProvider("pointer-events-none absolute inset-[-0.18rem] rounded-full border border-[#8db5ff]/0 opacity-0 transition-[border-color,opacity,box-shadow] duration-basic ease-out", delta);
  let falcon = <div className={echo} />;
  let gamma = pulse === "counterclockwise" && "bg-[#7da8ff]/90 opacity-100 shadow-[0_0_9px_rgba(125,168,255,0.92)]",
    harbor = IntlProvider("pointer-events-none absolute top-1/2 left-0 size-2 -translate-y-1/2 rounded-full bg-[#7da8ff]/0 opacity-0 blur-[1px] transition-[opacity,background-color,box-shadow] duration-basic ease-out", gamma);
  let indigo = <div className={harbor} />;
  let jade = pulse === "clockwise" && "bg-[#7da8ff]/90 opacity-100 shadow-[0_0_9px_rgba(125,168,255,0.92)]",
    kite = IntlProvider("pointer-events-none absolute top-1/2 right-0 size-2 -translate-y-1/2 rounded-full bg-[#7da8ff]/0 opacity-0 blur-[1px] transition-[opacity,background-color,box-shadow] duration-basic ease-out", jade);
  let lemon = <div className={kite} />;
  let marble = <div className="absolute inset-0 overflow-hidden rounded-full">
      <div className="absolute -top-4 left-3 h-24 w-12 rotate-45 bg-white/[0.5] dark:bg-white/[0.08]" />
    </div>;
  return <div aria-hidden={bravo} aria-label={ariaLabel} className="relative z-10 m-auto size-[92%] rounded-full bg-[#f5f3ee] shadow-[inset_0_-1px_2px_rgba(92,84,72,0.16),0_1px_2px_rgba(89,80,67,0.18)] dark:bg-[#262831] dark:shadow-[inset_0_-1px_2px_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.34)]" role={copper}>
      {falcon}
      {indigo}
      {lemon}
      {marble}
    </div>;
}
function CodexMicroKeyboardSurfaceHelper1(nickel) {
  let {
      className,
      joystick
    } = nickel,
    onyx = joystick.angle * Math.PI * 2,
    pearl = Math.min(joystick.distance, 1) * 7,
    quartz = IntlProvider("rounded-full bg-[#111111] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.12),0_1px_2px_rgba(44,40,35,0.28)] transition-transform duration-75 ease-out", className);
  let river = `translate(${Math.cos(onyx) * pearl}px, ${Math.sin(onyx) * pearl}px)`,
    slate = {
      transform: river
    };
  return <div className={quartz} style={slate} />;
}
export function codexMicroKeyboardSurfaceT(timber: unknown) {
  let {
      className,
      joystick
    } = timber,
    umbra = IntlProvider("relative z-10 flex items-center justify-center rounded-xl border border-white/[0.84] bg-[#dad4ca] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.52),0_1px_2px_rgba(89,80,67,0.18)] dark:border-white/[0.12] dark:bg-[#23252c] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.34)]", className);
  let violet = <CodexMicroKeyboardSurfaceHelper1 {...{
    className: "size-[72%]",
    joystick
  }} />;
  return <div className={umbra}>
      {violet}
    </div>;
}
