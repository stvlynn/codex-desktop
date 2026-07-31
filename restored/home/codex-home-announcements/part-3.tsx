// Restored from ref/webview/assets/codex-home-announcements-CvdZr0JN.js
// Wave FZ — full polished body from `codex-home-announcements-CvdZr0JN/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 45 (verified 89/133).
// AST split 3/3
/* split-lane-import-depth:1 */


import { ChatGptPlanId, ensureChatGptPlanIdInit } from "../../account/chatgpt-plan-ids";
import { openInBrowser } from "../../account/open-in-browser";
import { RateLimitResetCreditsDialog } from "../../account/rate-limit-reset-credits-dialog";
import { pickHighestUsageWindow } from "../../account/rate-limit-window-usage";
import { ReferralInviteEligibility } from "../../account/referral-invite-eligibility";
import { useCurrentAccountExposureGate } from "../../account/use-current-account-exposure-gate";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_MULTI_AGENT_BANNER_DISMISSED_TYPE } from "../../analytics/codex-multi-agent-banner-dismissed-type";
import { CODEX_MULTI_AGENT_BANNER_VIEWED_TYPE } from "../../analytics/codex-multi-agent-banner-viewed-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_PRICING_PLAN_PAGE_CTA_CLICKED_TYPE } from "../../analytics/codex-pricing-plan-page-cta-clicked-type";
import { CODEX_PRICING_PLAN_PAGE_SHOWN_TYPE } from "../../analytics/codex-pricing-plan-page-shown-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { localeMessagesAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_E4_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import { createPersistedAtom, ensurePersistedAtomInit, useAtomPair } from "../../boundaries/persisted-atom";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { chatgpt2 } from "../../browser/chatgpt2";
import { getAccountInfoQueryConfig } from "../../cloud/account-info-query";
import { managedConfigFilePath } from "../../config/managed-config-file-path";
import { deferredConversationP } from "../../conversation/deferred-conversation-p";
import { normalizeGithubHostname } from "../../conversation/github-hostname";
import { parsePullRequestRouteParams } from "../../conversation/github-pull-request-urls";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { lazyWithSuspense } from "../../environments/lazy-with-suspense";
import { GIFTS_CREDITS_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { ensureHostRpcClientsInit } from "../../hooks/host-rpc-client";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useDvtBindable } from "../../hooks/use-dvt-bindable";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useHostChatgptAuthMethod } from "../../hosts/use-host-chatgpt-auth-method";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AddContextSquareIcon } from "../../icons/add-context-square-icon";
import { AppIconAi } from "../../icons/app-icon-ai";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconSR } from "../../icons/app-icon-sr";
import { ensureTeamIconInit as EnsureTeamIconInit, TeamIcon } from "../../icons/team-icon";
import { copilotDefaultModel } from "../../models/copilot-default-model";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { ensureOnboardingBannerInit as EnsureOnboardingBannerInit, OnboardingBanner } from "../../onboarding/onboarding-banner";
import { CodexPluginDirectoryEntrypoint } from "../../plugins/codex-plugin-directory-entrypoint";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../../runtime/vite-preload";
import { ensureCloudApiClientInit } from "../../settings/cloud-api-client";
import { getSettingValue } from "../../settings/settings-values";
import { useVoiceSettingsHostConfig } from "../../settings/use-voice-settings-host-config";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { ElectronOnly } from "../../ui/electron-only";
import { macOS3 } from "../../ui/mac-os3";
import { macOS4 } from "../../ui/mac-os4";
import { appIconUrl, initAppIconUrl } from "../../utils/app-icon-url";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { ensureImportSettingsGctInit } from "../../utils/wave-as-gap-ensure-inits";
import { ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY } from "../onboarding-preference-keys";
import { ONBOARDING_STORAGE_KEYS } from "../onboarding-storage-keys";

/** split companion stub */
const __vite__mapDeps: any = undefined;
/** split companion stub */
const amber: any = undefined;
/** split companion stub */
const brook: any = undefined;
/** split companion stub */
const daisy: any = undefined;
/** split companion stub */
const deferredUiKT: any = undefined;
/** split companion stub */
const drift: any = undefined;
/** split companion stub */
const ensureSelectWorkspaceCqInitStub: any = undefined;
/** split companion stub */
const grove: any = undefined;
/** split companion stub */
const ivory: any = undefined;
/** split companion stub */
const knoll: any = undefined;
/** split companion stub */
const lotus: any = undefined;
/** split companion stub */
const pine: any = undefined;
/** split companion stub */
const reef: any = undefined;
/** split companion stub */
const unity: any = undefined;
/** split companion stub */
const violet: any = undefined;
/** split companion stub */
const vitePreload: any = undefined;
/** split companion stub */
const yarn: any = undefined;

export const codexHomeAnnouncementsR = esmInit(() => {
  hill = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  countLeadingZeroBits32();
  ensureComposerEsm_P5_Init();
  amber();
  violet();
  daisy();
  ivory();
  lotus();
  reef();
  deferredUiKT();
  ensureComposerEsm_K1_Init();
  drift();
  yarn();
  pine();
  knoll();
  unity();
  ensureSelectWorkspaceCqInitStub();
  brook();
  grove();
  ensureViteModulepreloadRuntime();
  lazyWithSuspense(async () => () => null);
  Isle = lazyWithSuspense(async () => (await vitePreload(async () => {
    let {
      RealtimeVoiceHomeAnnouncement
    } = await import("../realtime-voice-home-announcement");
    return {
      RealtimeVoiceHomeAnnouncement
    };
  }, __vite__mapDeps([0, 1, 2, 3, 4]), import.meta.url)).RealtimeVoiceHomeAnnouncement);
});
