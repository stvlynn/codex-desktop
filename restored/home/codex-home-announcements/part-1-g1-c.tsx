// Restored from ref/webview/assets/codex-home-announcements-CvdZr0JN.js
// Wave FZ — full polished body from `codex-home-announcements-CvdZr0JN/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 45 (verified 89/133).
// AST split 3/4
/* split-lane-import-depth:1 */

import {
  ChatGptPlanId,
  ensureChatGptPlanIdInit,
} from "../../account/chatgpt-plan-ids";
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
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  createAppScopeQueryAtom,
  localeMessagesAtom,
} from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_E4_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import {
  createPersistedAtom,
  ensurePersistedAtomInit,
  useAtomPair,
} from "../../boundaries/persisted-atom";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
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
import {
  ensureTeamIconInit as EnsureTeamIconInit,
  TeamIcon,
} from "../../icons/team-icon";
import { copilotDefaultModel } from "../../models/copilot-default-model";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import {
  ensureOnboardingBannerInit as EnsureOnboardingBannerInit,
  OnboardingBanner,
} from "../../onboarding/onboarding-banner";
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

const ensureSelectWorkspaceCqInit: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/models.tsx) */
const Models: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:uniqueNodesByNodeId@utils/unique-nodes-by-node-id.ts) */
const AppInitialAm: any = undefined;
/** Wave FZ unresolved companion (missing-export:voice/deferred-voice-c4.ts) */
const deferredVoiceC4: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:buildGithubPullRequestUrl@conversation/github-pull-request-urls.ts) */
const AppInitialDm: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:installModalBrowserExtensionMessages@plugins/install-modal-browser-extension-messages.ts) */
const AppInitialEt: any = undefined;
/** Wave FZ unresolved companion (missing-export:settings/chatgpt2.tsx) */
const Chatgpt2: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/models.tsx) */
const ModelsStub: any = undefined;
/** Wave FZ unresolved companion (missing-export:voice/realtime-voice-config-override-2.ts) */
const realtimeVoiceConfigOverride: any = undefined;
/** Wave FZ unresolved companion (missing-export:models/seen-model-upgrade-list.tsx) */
const SeenModelUpgradeList: any = undefined;

function CodexHomeAnnouncementsHelper20(flange) {
  let {
      content,
      fastModeModel,
      intl,
      isSubmitting,
      setHasSeenFastModeHomeBanner,
      setIsSubmitting,
      setServiceTier,
    } = flange,
    gib = CodexPluginActionType(appScopeAtom),
    hub = (
      <MemoizedFormattedMessage
        {...{
          id: "codex.fastModeHomeBanner.title",
          defaultMessage: "Enable Fast mode",
          description: "Title shown in the Fast mode home banner",
        }}
      />
    );
  let idler, jig;
  idler = <AppInitialAm className="icon-sm text-token-charts-yellow" />;
  jig = (
    <MemoizedFormattedMessage
      {...{
        id: "codex.fastModeHomeBanner.cta.primary",
        defaultMessage: "Enable now",
        description: "Primary CTA shown in the Fast mode home banner",
      }}
    />
  );
  let keeper = () => {
    fastModeModel != null &&
      (setIsSubmitting(true),
      logProductEvent(gib, CODEX_PRICING_PLAN_PAGE_SHOWN_TYPE, {}),
      setServiceTier(
        realtimeVoiceConfigOverride(fastModeModel)?.id ?? "priority",
        "home_banner",
      ).finally(() => {
        setHasSeenFastModeHomeBanner(true);
        setIsSubmitting(false);
      }));
  };
  let lug = {
    label: jig,
    onClick: keeper,
    disabled: isSubmitting,
  };
  let mandrel = intl.formatMessage({
    id: "codex.fastModeHomeBanner.dismissLabel",
    defaultMessage: "Dismiss Fast mode banner",
    description: "Accessible label for dismissing the Fast mode home banner",
  });
  let nipple = () => {
    logProductEvent(gib, AppInitialEt, {});
    setHasSeenFastModeHomeBanner(true);
  };
  let orifice = {
    ariaLabel: mandrel,
    icon: chatgpt2,
    onClick: nipple,
    disabled: isSubmitting,
  };
  return (
    <EnsureOnboardingBannerInit
      {...{
        title: hub,
        description: content,
        leadingVisual: idler,
        primaryAction: lug,
        dismissAction: orifice,
      }}
    />
  );
}
var jasper,
  kelp,
  lotus = esmInit(() => {
    jasper = reactCompilerRuntime();
    ensureComposerEsm_Utt_Init();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    OnboardingBanner();
    normalizeGithubHostname();
    ensureConversationPageEsm_Act_Init();
    ensureComposerEsm_K9_Init();
    ensureAppScopeInit();
    managedConfigFilePath();
  });
function mint() {
  let pin = CodexPluginActionType(appScopeAtom),
    race = useIntl(),
    { isServiceTierAllowed } = useHostChatgptAuthMethod(),
    { data } = findProcessManagerRow(),
    [sleeve, trunnion] = useAtomPair(quill),
    { modelSettings } = Models(),
    { serviceTierSettings, setServiceTier } = ensureSelectWorkspaceCqInit(),
    [boss, cam] = olive.useState(false),
    detent = olive.useRef(false),
    eccentric = data?.models,
    follower = deferredVoiceC4(eccentric, modelSettings.model, macOS3);
  let guide = follower,
    helix =
      isServiceTierAllowed &&
      guide != null &&
      !sleeve &&
      serviceTierSettings.selectedServiceTier == null &&
      !serviceTierSettings.isLoading,
    { estimate, estimateStatus } = parsePullRequestRouteParams(helix),
    impeller =
      !sleeve &&
      helix &&
      estimateStatus !== "ready" &&
      estimateStatus !== "failed",
    journal = helix && estimateStatus === "ready" && estimate != null,
    kingpin,
    land;
  kingpin = () => {
    !journal ||
      detent.current ||
      ((detent.current = true),
      logProductEvent(pin, CodexPluginDirectoryEntrypoint, {}));
  };
  land = [pin, journal];
  olive.useEffect(kingpin, land);
  let mesh =
    !journal || estimate == null ? null : (
      <MemoizedFormattedMessage
        {...{
          id: "codex.fastModeHomeBanner.body.personalizedEstimate",
          defaultMessage:
            "Based on your work last week across {threadCount, plural, one {# chat} other {# chats}}, Fast could have saved about {savedHours, plural, =0 {{savedMinutes, plural, one {# minute} other {# minutes}}} one {# hour{savedMinutes, plural, =0 {} one { # minute} other { # minutes}}} other {# hours{savedMinutes, plural, =0 {} one { # minute} other { # minutes}}}}. Increases plan usage.",
          description:
            "Personalized estimate shown in the Fast mode home banner",
          values: {
            savedHours: estimate.savedHours,
            savedMinutes: estimate.savedMinutes,
            threadCount: estimate.threadCount,
          },
        }}
      />
    );
  let neck = mesh;
  return {
    content: neck,
    intl: race,
    isEligible: journal,
    isLoading: impeller,
    isSubmitting: boss,
    fastModeModel: guide,
    setHasSeenFastModeHomeBanner: trunnion,
    setIsSubmitting: cam,
    setServiceTier,
  };
}
var nova,
  olive,
  prism,
  quill,
  reef = esmInit(() => {
    nova = reactCompilerRuntime();
    ensureComposerEsm_Utt_Init();
    countLeadingZeroBits32();
    ensureComposerEsm_MT_Init();
    olive = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    Chatgpt2();
    SeenModelUpgradeList();
    ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY();
    ensureComposerEsm_K9_Init();
    ModelsStub();
    ensureAppScopeInit();
    ensurePersistedAtomInit();
    managedConfigFilePath();
    AppInitialDm();
    quill = createPersistedAtom("has-seen-fast-mode-home-banner", false);
  });
