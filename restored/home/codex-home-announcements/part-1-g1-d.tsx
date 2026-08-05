// Restored from ref/webview/assets/codex-home-announcements-CvdZr0JN.js
// Wave FZ — full polished body from `codex-home-announcements-CvdZr0JN/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 45 (verified 89/133).
// AST split 4/4
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

/** Wave FZ unresolved companion (missing-export:hosts/remote-ssh-connections-2.ts) */
const remoteSshConnections: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureSelectWorkspaceEMInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialEM: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/thread2.ts) */
const thread2: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ql.tsx) */
const DeferredUiQl: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureShapeColorTokenClusterInit@ui/ensure-shape-color-token-cluster-init.ts) */
const AppInitialTM: any = undefined;
/** Wave FZ unresolved companion (missing-export:browser/list.ts) */
const list: any = undefined;
/** Wave FZ unresolved companion (missing-export:browser/deferred-browser-y0.ts) */
const deferredBrowserY0: any = undefined;

function sage() {
  let { hostId } = useVoiceSettingsHostConfig(DeferredUiQl()),
    pad = AppInitialEM(),
    [quillshaft] = useAtomPair(wheat),
    { data, isLoading } = CodexBrowserSurfaceActionType(
      deferredBrowserY0,
      hostId,
    ),
    roller = data?.some(topaz) ?? false;
  let spindle = roller,
    thrust = pad && !quillshaft && isLoading,
    yoke = pad && !quillshaft && !spindle;
  return {
    isEligible: yoke,
    isLoading: thrust,
  };
}
function topaz(baffle) {
  return baffle.name === vapor && baffle.enabled;
}
var ultra,
  vapor,
  wheat,
  yarn = esmInit(() => {
    ultra = reactCompilerRuntime();
    countLeadingZeroBits32();
    ensureComposerEsm_MT_Init();
    thread2();
    AppInitialTM();
    copilotDefaultModel();
    list();
    ensurePersistedAtomInit();
    vapor = "multi_agent";
    wheat = createPersistedAtom("has-seen-multi-agent-composer-banner", false);
  });
function CodexHomeAnnouncementsHelper24(capstan) {
  let { onTryNow } = capstan,
    diaphragm = CodexPluginActionType(appScopeAtom),
    elbow = useIntl(),
    ferrule = {
      hostId: LOCAL_HOST_ID,
    };
  let grommet = HostFeatureConfigToggles(ferrule),
    [, header] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("composer_prefill"),
    [injector, jumper] = useAtomPair(wheat),
    [kerf, louver] = acorn.useState(false),
    manifold = acorn.useRef(false),
    nip = !injector,
    outlet,
    packing;
  if (
    ((outlet = () => {
      !nip ||
        manifold.current ||
        ((manifold.current = true),
        logProductEvent(diaphragm, CODEX_MULTI_AGENT_BANNER_VIEWED_TYPE, {}));
    }),
    (packing = [diaphragm, nip]),
    acorn.useEffect(outlet, packing),
    !nip)
  )
    return null;
  let reducer, strainer, tee, union;
  reducer = (
    <MemoizedFormattedMessage
      {...{
        id: "codex.multiAgentComposerBanner.title",
        defaultMessage: "Subagents in Codex",
        description: "Title shown in the multi-agent composer banner",
      }}
    />
  );
  strainer = (
    <MemoizedFormattedMessage
      {...{
        id: "codex.multiAgentComposerBanner.body",
        defaultMessage:
          "Delegate work to subagents that work in parallel. Note: may increase token usage.",
        description: "Body shown in the multi-agent composer banner",
      }}
    />
  );
  tee = (
    <EnsureTeamIconInit
      {...{
        className: "icon-sm",
      }}
    />
  );
  union = (
    <MemoizedFormattedMessage
      {...{
        id: "codex.multiAgentComposerBanner.cta.primary",
        defaultMessage: "Try now",
        description: "Primary CTA shown in the multi-agent composer banner",
      }}
    />
  );
  let vent = () => {
    louver(true);
    let copperPrime = elbow.formatMessage({
      id: "composer.multiAgentBanner.tryNow.prompt",
      defaultMessage: "Spawn a subagent to explore this repo.",
      description:
        "Prompt inserted when the user clicks Try now on the multi-agent composer banner",
    });
    logProductEvent(diaphragm, CODEX_PRICING_PLAN_PAGE_CTA_CLICKED_TYPE, {
      action: "try_now",
    });
    grommet
      .mutateAsync({
        featureName: coral,
        enabled: true,
      })
      .finally(() => {
        onTryNow
          ? onTryNow()
          : header({
              text: copperPrime,
            });
        jumper(true);
        louver(false);
      });
  };
  let wye = {
    label: union,
    onClick: vent,
    disabled: kerf,
  };
  let zener = elbow.formatMessage({
    id: "codex.multiAgentComposerBanner.dismissLabel",
    defaultMessage: "Dismiss subagent banner",
    description:
      "Accessible label for dismissing the multi-agent composer banner",
  });
  let alphaPrime = () => {
    logProductEvent(diaphragm, CODEX_MULTI_AGENT_BANNER_DISMISSED_TYPE, {});
    jumper(true);
  };
  let bravoPrime = {
    ariaLabel: zener,
    icon: chatgpt2,
    onClick: alphaPrime,
    disabled: kerf,
  };
  return (
    <EnsureOnboardingBannerInit
      {...{
        title: reducer,
        description: strainer,
        leadingVisual: tee,
        primaryAction: wye,
        dismissAction: bravoPrime,
      }}
    />
  );
}
var zephyr,
  acorn,
  bloom,
  coral,
  drift = esmInit(() => {
    zephyr = reactCompilerRuntime();
    ensureComposerEsm_Utt_Init();
    countLeadingZeroBits32();
    ensureComposerEsm_MT_Init();
    acorn = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    OnboardingBanner();
    TeamIcon();
    ensureConversationPageEsm_Act_Init();
    ensureComposerEsm_K9_Init();
    list();
    ensureAppScopeInit();
    ensureAppShellAtomsInit();
    remoteSshConnections();
    yarn();
    coral = "multi_agent";
  });
