// Restored from ref/webview/assets/codex-home-announcements-CvdZr0JN.js
// Wave FZ — full polished body from `codex-home-announcements-CvdZr0JN/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 45 (verified 89/133).
// AST split 2/3
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
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { localeMessagesAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_E4_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../boundaries/conversation-page-esm-inits";
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
const jewel: any = undefined;
/** split companion stub */
const knoll: any = undefined;
/** split companion stub */
const sage: any = undefined;

/** app-initial companion (stub only; never promote) */
const AppInitialJi: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialNh: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialPh: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialTq: any = undefined;
/** split companion stub */
const DeferredKv: any = undefined;
/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const RealtimeVoiceHostId: any = undefined;
/** split companion stub */
const chatProcessRegister: any = undefined;
/** split companion stub */
const deferredUiCR: any = undefined;
/** split companion stub */
const eagle: any = undefined;
/** split companion stub */
const flint: any = undefined;
/** split companion stub */
const marble: any = undefined;
/** split companion stub */
const mint: any = undefined;
/** split companion stub */
const persistSettingValue: any = undefined;

const CodexHomeAnnouncementsHelper24: any = undefined;
const CodexHomeAnnouncementsHelper20: any = undefined;
const CodexHomeAnnouncementsHelper17: any = undefined;
const CodexHomeAnnouncementsHelper14: any = undefined;

function CodexHomeAnnouncementsHelper27(willowPrime) {
  let {
      onDismiss,
      onOpenGiftCredits
    } = willowPrime,
    xenonPrime = CodexPluginActionType(appScopeAtom),
    yellowPrime = useIntl(),
    zincPrime = north.useRef(false),
    amberPrime = () => {
      zincPrime.current || (zincPrime.current = true, xenonPrime.set(jewel, lunar));
    };
  let basaltPrime = north.useEffectEvent(amberPrime),
    cedarPrime = () => {
      basaltPrime();
    };
  let daisyPrime;
  daisyPrime = [];
  north.useEffect(cedarPrime, daisyPrime);
  let emberPrime, flintPrime, garnetPrime, hazelPrime;
  emberPrime = <MemoizedFormattedMessage {...{
    id: "codex.giftCredits.homeBanner.chatgptCredits.title",
    defaultMessage: "Gift credits",
    description: "Title shown in the Codex home banner promoting gift credits"
  }} />;
  flintPrime = <MemoizedFormattedMessage {...{
    id: "codex.giftCredits.homeBanner.chatgptCredits.description",
    defaultMessage: "Send a friend credits they can use for work or Codex tasks",
    description: "Description shown in the Codex home banner promoting gift credits"
  }} />;
  garnetPrime = <AppIconAi aria-hidden={true} className="icon-sm" />;
  hazelPrime = <MemoizedFormattedMessage {...{
    id: "codex.giftCredits.homeBanner.action",
    defaultMessage: "Gift credits",
    description: "Button label that opens the ChatGPT gift credits purchase flow"
  }} />;
  let ivoryPrime = {
    label: hazelPrime,
    onClick: onOpenGiftCredits
  };
  let jasperPrime = yellowPrime.formatMessage({
    id: "codex.giftCredits.homeBanner.dismiss",
    defaultMessage: "Dismiss gift credits banner",
    description: "Accessible label for dismissing the Codex gift credits home banner"
  });
  let kelpPrime = {
    ariaLabel: jasperPrime,
    icon: chatgpt2,
    onClick: onDismiss
  };
  return <EnsureOnboardingBannerInit {...{
    title: emberPrime,
    description: flintPrime,
    leadingVisual: garnetPrime,
    primaryAction: ivoryPrime,
    dismissAction: kelpPrime
  }} />;
}
function lunar(lotusPrime) {
  return {
    lastShownAtMs: Date.now(),
    shownCount: (lotusPrime?.shownCount ?? 0) + 1
  };
}
var moss,
  north,
  orbit,
  pine = esmInit(() => {
    moss = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    north = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    OnboardingBanner();
    AppInitialJi();
    ensureConversationPageEsm_Act_Init();
    ensureAppScopeInit();
    knoll();
  });
function quest(mintPrime) {
  for (let [novaPrime, olivePrime] of mintPrime.entries()) {
    if (olivePrime.isEligible) return novaPrime;
    if (olivePrime.isLoading) return;
  }
  return null;
}
function CodexHomeAnnouncementsHelper30({
  entries
}) {
  let prismPrime = storm.useRef(undefined),
    quillPrime = prismPrime.current;
  if (quillPrime === undefined) {
    let sagePrime = quest(entries);
    sagePrime !== undefined && (prismPrime.current = sagePrime, quillPrime = sagePrime);
  }
  if (quillPrime == null) return null;
  let reefPrime = entries[quillPrime];
  return reefPrime == null || reefPrime.isLoading || !reefPrime.isEligible || reefPrime.content == null ? null : <$n {...{
    children: reefPrime.content
  }} />;
}
function $n(topazPrime) {
  let {
      children
    } = topazPrime,
    ultraPrime = CodexPluginActionType(appScopeAtom),
    vaporPrime,
    wheatPrime;
  vaporPrime = () => (ultraPrime.set(AppInitialNh, true), () => {
    ultraPrime.set(AppInitialNh, false);
  });
  wheatPrime = [ultraPrime];
  storm.useLayoutEffect(vaporPrime, wheatPrime);
  return <>{children}</>;
}
var ridge,
  storm,
  tide,
  unity = esmInit(() => {
    ridge = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    storm = commonJsInit(react(), 1);
    AppInitialPh();
    ensureAppScopeInit();
  });
function CodexHomeAnnouncementsHelper31(yarnPrime) {
  let {
      availableCount,
      onDismiss
    } = yarnPrime,
    zephyrPrime = CodexPluginActionType(appScopeAtom),
    acornPrime = () => {
      chatProcessRegister(zephyrPrime, RateLimitResetCreditsDialog, {
        initialAvailableCount: availableCount,
        isRateLimitReached: false,
        onResetComplete: vale
      });
    };
  return <Or {...{
    onDismiss,
    onSeeResets: acornPrime
  }} />;
}
function vale() {}
function Or(bloomPrime) {
  let {
      onDismiss,
      onSeeResets
    } = bloomPrime,
    coralPrime = useIntl(),
    driftPrime,
    eaglePrime,
    frostPrime,
    glidePrime;
  driftPrime = <MemoizedFormattedMessage {...{
    id: "codex.rateLimitResetHomeBanner.title",
    defaultMessage: "You have a new rate limit reset available",
    description: "Title shown in the home banner when a Codex rate limit reset credit is available"
  }} />;
  eaglePrime = <MemoizedFormattedMessage {...{
    id: "codex.rateLimitResetHomeBanner.description",
    defaultMessage: "You were granted a rate limit reset that will expire in 30 days.",
    description: "Description shown in the home banner when a Codex rate limit reset credit is available"
  }} />;
  frostPrime = <AppIconSR {...{
    className: "size-8"
  }} />;
  glidePrime = <MemoizedFormattedMessage {...{
    id: "codex.rateLimitResetHomeBanner.seeResets",
    defaultMessage: "See resets",
    description: "Button label that opens the available Codex rate limit resets modal"
  }} />;
  let honeyPrime = {
    label: glidePrime,
    onClick: onSeeResets
  };
  let irisPrime = coralPrime.formatMessage({
    id: "codex.rateLimitResetHomeBanner.dismiss",
    defaultMessage: "Dismiss rate limit reset banner",
    description: "Accessible label for dismissing the Codex rate limit reset home banner"
  });
  let jewelPrime = {
    ariaLabel: irisPrime,
    icon: chatgpt2,
    onClick: onDismiss
  };
  return <EnsureOnboardingBannerInit {...{
    title: driftPrime,
    description: eaglePrime,
    leadingVisual: frostPrime,
    primaryAction: honeyPrime,
    dismissAction: jewelPrime
  }} />;
}
var wave,
  apex,
  brook = esmInit(() => {
    wave = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    collectUniqueMappedPresenceEntries();
    OnboardingBanner();
    deferredUiCR();
    ensureConversationPageEsm_Act_Init();
    ReferralInviteEligibility();
    ensureAppScopeInit();
  });
function cliff() {
  let knollPrime = CodexPluginActionType(appScopeAtom),
    {
      accountId,
      isLoading
    } = useAuth(),
    {
      data,
      isLoading: _isLoading
    } = reuseArrayIfShallowEqual(),
    lunarPrime = AppIconAlt(),
    mossPrime = CodexPluginActionResult(fern),
    {
      data: _data = null,
      isLoading: __isLoading
    } = CodexPluginActionResult(titleCaseColonSegments),
    northPrime = _data?.rate_limit_reset_credits?.available_count ?? 0,
    orbitPrime = pickHighestUsageWindow(_data);
  let pinePrime = orbitPrime,
    questPrime = useCurrentAccountExposureGate(lunarPrime, {
      currentAccount: data,
      disableExposureLog: true
    });
  let {
      config
    } = questPrime,
    ridgePrime = accountId == null ? null : mossPrime?.[accountId],
    stormPrime = Date.now(),
    tidePrime = () => {
      accountId != null && knollPrime.set(fern, wavePrime => ({
        ...wavePrime,
        [accountId]: {
          dismissedAtMs: Date.now()
        }
      }));
    };
  let unityPrime = accountId != null && northPrime > 0 && pinePrime != null && pinePrime.remainingPercent <= config.remainingThresholdPercent && (ridgePrime == null || stormPrime - ridgePrime.dismissedAtMs >= elm),
    valePrime = isLoading || _isLoading || _data == null && __isLoading;
  return {
    availableCount: northPrime,
    dismiss: tidePrime,
    isEligible: unityPrime,
    isLoading: valePrime
  };
}
var dusk,
  elm,
  fern,
  grove = esmInit(() => {
    dusk = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureAuthProviderInit();
    RealtimeVoiceHostId();
    ensureHostRpcClientsInit();
    DeferredKv();
    ensureAppScopeInit();
    deferredConversationP();
    ensureSkillsPageHelpersInit();
    getSettingValue();
    elm = 86400000;
    fern = persistSettingValue("rate-limit-reset-home-announcement-dismissal-by-account-id", {});
  });
export function codexHomeAnnouncementsN(isle: unknown) {
  let {
      entryPoint
    } = isle,
    uplandPrime = entryPoint === "codex" && "electron:mx-[var(--home-composer-inline-inset)]",
    vistaPrime = IntlProvider("empty:hidden", uplandPrime);
  let wispPrime = <Isle {...{
    entryPoint
  }} />;
  return <ElectronOnly {...{
    electron: true,
    children: <div className={vistaPrime}>
            {wispPrime}
          </div>
  }} />;
}
export function codexHomeAnnouncementsT(yonderPrime: unknown) {
  let {
      homeRunLocationRemoteProject = null,
      includeGitCheckoutWarning = true
    } = yonderPrime,
    zenithPrime = useLocation(),
    anvilPrime = useDvtBindable(ONBOARDING_STORAGE_KEYS),
    beaconPrime = AppInitialTq({
      hideFirstNewThreadOnboardingPromos: anvilPrime,
      pathname: zenithPrime.pathname
    });
  let cragPrime = beaconPrime,
    domePrime = <ElectronOnly {...{
      electron: true,
      children: <CodexHomeAnnouncementsHelper34 {...{
        homeRunLocationRemoteProject: homeRunLocationRemoteProject,
        includeGitCheckoutWarning: includeGitCheckoutWarning,
        shouldHideOnboardingPromos: cragPrime
      }} />
    }} />;
  let eddyPrime = <ElectronOnly {...{
    extension: true,
    children: <_r {...{
      shouldHideOnboardingPromos: cragPrime
    }} />
  }} />;
  return <>
      {domePrime}
      {eddyPrime}
    </>;
}
function CodexHomeAnnouncementsHelper34(apexPrime) {
  let {
      homeRunLocationRemoteProject,
      includeGitCheckoutWarning,
      shouldHideOnboardingPromos
    } = apexPrime,
    brookPrime = cliff(),
    cliffPrime = eagle(),
    duskPrime = marble(),
    elmPrime = sage(),
    fernPrime = mint(),
    grovePrime = !duskPrime.shouldSuppressVanillaPromos,
    hillPrime = !shouldHideOnboardingPromos && cliffPrime.isEligible,
    islePrime = !shouldHideOnboardingPromos && cliffPrime.isLoading,
    juniperPrime = cliffPrime.isEligible ? <CodexHomeAnnouncementsHelper27 {...{
      onDismiss: cliffPrime.dismiss,
      onOpenGiftCredits: cliffPrime.openGiftCredits
    }} /> : null;
  let lagoonPrime = {
    isEligible: hillPrime,
    isLoading: islePrime,
    content: juniperPrime
  };
  let meadowPrime = <CodexHomeAnnouncementsHelper31 {...{
    availableCount: brookPrime.availableCount,
    onDismiss: brookPrime.dismiss
  }} />;
  let nestPrime = {
    isEligible: brookPrime.isEligible,
    isLoading: brookPrime.isLoading,
    content: meadowPrime
  };
  let oakPrime = !shouldHideOnboardingPromos && duskPrime.isEligible,
    petalPrime = !shouldHideOnboardingPromos && duskPrime.isLoading,
    quietPrime = duskPrime.beacon != null && duskPrime.accountId != null ? <CodexHomeAnnouncementsHelper14 {...{
      accountId: duskPrime.accountId,
      beacon: duskPrime.beacon
    }} /> : null;
  let rainPrime = {
    isEligible: oakPrime,
    isLoading: petalPrime,
    content: quietPrime
  };
  let seedPrime = !shouldHideOnboardingPromos && grovePrime && elmPrime.isEligible,
    trailPrime = !shouldHideOnboardingPromos && grovePrime && elmPrime.isLoading,
    urnPrime = <CodexHomeAnnouncementsHelper24 {...{}} />;
  let vinePrime = {
    isEligible: seedPrime,
    isLoading: trailPrime,
    content: urnPrime
  };
  let windPrime = !shouldHideOnboardingPromos && grovePrime && fernPrime.isEligible,
    yarrowPrime = !shouldHideOnboardingPromos && grovePrime && fernPrime.isLoading,
    azurePrime = fernPrime.content == null ? null : <CodexHomeAnnouncementsHelper20 {...{
      ...fernPrime
    }} />;
  let birchPrime = {
    isEligible: windPrime,
    isLoading: yarrowPrime,
    content: azurePrime
  };
  let canyonPrime = [lagoonPrime, nestPrime, rainPrime, vinePrime, birchPrime];
  let dewPrime = canyonPrime;
  return <CodexHomeAnnouncementsHelper30 {...{
    entries: dewPrime
  }} />;
}
function _r(everPrime) {
  let {
      shouldHideOnboardingPromos
    } = everPrime,
    fieldPrime = flint(),
    grainPrime = sage(),
    havenPrime = mint(),
    inkPrime = !shouldHideOnboardingPromos && fieldPrime.isEligible,
    jadeitePrime = !shouldHideOnboardingPromos && fieldPrime.isLoading,
    kernelPrime = fieldPrime.message == null ? null : <CodexHomeAnnouncementsHelper17 {...{
      message: fieldPrime.message,
      setHasSeenAppUpsellBanner: fieldPrime.setHasSeenAppUpsellBanner
    }} />;
  let leafPrime = {
    isEligible: inkPrime,
    isLoading: jadeitePrime,
    content: kernelPrime
  };
  let maplePrime = !shouldHideOnboardingPromos && grainPrime.isEligible,
    nimbusPrime = !shouldHideOnboardingPromos && grainPrime.isLoading,
    opalPrime = <CodexHomeAnnouncementsHelper24 {...{}} />;
  let plumePrime = {
    isEligible: maplePrime,
    isLoading: nimbusPrime,
    content: opalPrime
  };
  let quillowPrime = !shouldHideOnboardingPromos && havenPrime.isEligible,
    rootPrime = !shouldHideOnboardingPromos && havenPrime.isLoading,
    silkPrime = havenPrime.content == null ? null : <CodexHomeAnnouncementsHelper20 {...{
      ...havenPrime
    }} />;
  let thornPrime = {
    isEligible: quillowPrime,
    isLoading: rootPrime,
    content: silkPrime
  };
  return <CodexHomeAnnouncementsHelper30 {...{
    entries: [leafPrime, plumePrime, thornPrime]
  }} />;
}
var hill, $, Isle;
