// Restored from ref/webview/assets/codex-home-announcements-CvdZr0JN.js
// Wave FZ — full polished body from `codex-home-announcements-CvdZr0JN/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 45 (verified 89/133).
// AST split 2/4
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

/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FZ unresolved companion (missing-export:composer/deferred-composer-qq.ts) */
const deferredComposerQq: any = undefined;

function CodexHomeAnnouncementsHelper17(screw) {
  let { message, setHasSeenAppUpsellBanner } = screw,
    torque = useIntl(),
    valve = (
      <MemoizedFormattedMessage
        {...{
          id: "codex.appUpsellBanner.title",
          defaultMessage: "ChatGPT app",
          description: "Title shown in the app upsell banner",
        }}
      />
    );
  let axle, bracket;
  axle = <img alt="" src={appIconUrl} className="h-8 w-8 shrink-0" />;
  bracket = (
    <MemoizedFormattedMessage
      {...{
        id: "codex.appUpsellBanner.download",
        defaultMessage: "Download",
        description: "Primary action label to download the ChatGPT app",
      }}
    />
  );
  let clamp = {
    label: bracket,
    onClick: (gasket) => {
      setHasSeenAppUpsellBanner(true);
      deferredUiEnt({
        event: gasket,
        href: "https://persistent.oaistatic.com/codex-app-prod/Codex.dmg",
        initiator: "open_in_browser_bridge",
      });
    },
  };
  let drill = torque.formatMessage({
    id: "codex.appUpsellBanner.dismissLabel",
    defaultMessage: "Dismiss ChatGPT app banner",
    description:
      "Accessible label for dismissing the ChatGPT app upsell banner",
  });
  let engine = () => {
    setHasSeenAppUpsellBanner(true);
  };
  let frame = {
    ariaLabel: drill,
    icon: chatgpt2,
    onClick: engine,
  };
  return (
    <EnsureOnboardingBannerInit
      {...{
        title: valve,
        description: message,
        leadingVisual: axle,
        primaryAction: clamp,
        dismissAction: frame,
      }}
    />
  );
}
var basalt,
  cedar,
  daisy = esmInit(() => {
    basalt = reactCompilerRuntime();
    ensureIntlFormattersInit();
    initAppIconUrl();
    ensureComposerEsm_Qtt_Init();
    OnboardingBanner();
    ensureConversationPageEsm_Act_Init();
  });
function ember(handle) {
  let { platform, isLoading } = useHostPlatformModifierSymbol(),
    { authMethod, planAtLogin, isLoading: _isLoading } = useAuth(),
    insert = authMethod === "chatgpt",
    jacket = authMethod === "apikey",
    knurl = insert || jacket,
    lever = {
      enabled: knurl,
    };
  let { data, isLoading: __isLoading } = getAccountInfoQueryConfig(lever),
    mount = authMethod === "copilot",
    nozzle = platform === "macOS",
    platen = data?.plan ?? planAtLogin,
    ratchet = platen === ChatGptPlanId.FREE || platen === ChatGptPlanId.GO,
    shim = !handle && (_isLoading || isLoading || (insert && __isLoading)),
    tappet = null;
  if (
    !shim &&
    nozzle &&
    !handle &&
    !mount &&
    authMethod &&
    data &&
    ((insert && !ratchet) || jacket)
  ) {
    let arbor;
    arbor = (
      <MemoizedFormattedMessage
        {...{
          id: "codex.appUpsellBanner.cbpApi.message",
          defaultMessage:
            "Build faster with the ChatGPT app. Download now or {learnMoreLink}",
          description:
            "Message shown in the app upsell banner for paid ChatGPT and API key users",
          values: {
            learnMoreLink: (
              <a
                className="text-token-link focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none"
                href="https://chatgpt.com/codex"
                target="_blank"
                rel="noopener noreferrer"
              >
                {
                  <MemoizedFormattedMessage
                    {...{
                      id: "codex.appUpsellBanner.learnMoreLowercase",
                      defaultMessage: "learn more",
                      description:
                        "Lowercase learn more link text in the app upsell banner",
                    }}
                  />
                }
              </a>
            ),
          },
        }}
      />
    );
    tappet = arbor;
  }
  return {
    isLoading: shim,
    message: tappet,
  };
}
function flint() {
  let [bushing, collar] = useAtomPair(_n),
    { isLoading, message } = ember(bushing),
    dowel = message != null;
  return {
    isEligible: dowel,
    isLoading,
    message,
    setHasSeenAppUpsellBanner: collar,
  };
}
var garnet,
  hazel,
  _n,
  ivory = esmInit(() => {
    garnet = reactCompilerRuntime();
    countLeadingZeroBits32();
    ensureIntlFormattersInit();
    ensureAuthProviderInit();
    deferredComposerQq();
    macOS4();
    ensurePersistedAtomInit();
    ensureChatGptPlanIdInit();
    _n = createPersistedAtom("has-seen-app-upsell-banner", false);
  });
