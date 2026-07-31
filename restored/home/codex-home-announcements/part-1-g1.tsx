// Restored from ref/webview/assets/codex-home-announcements-CvdZr0JN.js
// Wave FZ — full polished body from `codex-home-announcements-CvdZr0JN/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 45 (verified 89/133).
// Group 1/2
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
import { createAppScopeQueryAtom, localeMessagesAtom } from "../../boundaries/composer-appscope-atoms";
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

const ensureSelectWorkspaceCqInit: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/models.tsx) */
const Models: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:uniqueNodesByNodeId@utils/unique-nodes-by-node-id.ts) */
const AppInitialAm: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/remote-ssh-connections-2.ts) */
const remoteSshConnections: any = undefined;
/** Wave FZ unresolved companion (missing-export:voice/deferred-voice-c4.ts) */
const deferredVoiceC4: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceCqInitStub: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-cr.tsx) */
const deferredUiCR: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:buildGithubPullRequestUrl@conversation/github-pull-request-urls.ts) */
const AppInitialDm: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureSelectWorkspaceEMInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialEM: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:installModalBrowserExtensionMessages@plugins/install-modal-browser-extension-messages.ts) */
const AppInitialEt: any = undefined;
/** Wave FZ unresolved companion (missing-export:settings/chatgpt2.tsx) */
const Chatgpt2: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/ide-context.tsx) */
const AppInitialJh: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:isObjectPrototypePlain@utils/is-object-prototype-plain.ts) */
const AppInitialJi: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/thread2.ts) */
const thread2: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-kt-2.ts) */
const deferredUiKT: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-kv.tsx) */
const DeferredKv: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:openGiftCreditsInBrowser@navigation/open-gift-credits-in-browser.ts) */
const AppInitialLi: any = undefined;
/** Wave FZ unresolved companion (missing-export:composer/cloud4.tsx) */
const AppInitialMh: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredAccountMi@account/deferred-account-mi-2.ts) */
const AppInitialMi: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:hasSeenRealtimeVoiceNuxAtom@home/realtime-voice-nux.ts) */
const AppInitialNh: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredAccountNi@account/deferred-account-ni.ts) */
const AppInitialNi: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureHasSeenRealtimeVoiceNuxAtomInit@home/realtime-voice-nux.ts) */
const AppInitialPh: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:hasSeenGiftCreditsHomeBanner@account/has-seen-gift-credits-home-banner.ts) */
const AppInitialPi: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ql.tsx) */
const DeferredUiQl: any = undefined;
/** Wave FZ unresolved companion (missing-export:composer/deferred-composer-qq.ts) */
const deferredComposerQq: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/models.tsx) */
const ModelsStub: any = undefined;
/** Wave FZ unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FZ unresolved companion (missing-export:settings/settings-ipc.ts) */
const persistSettingValue: any = undefined;
/** Wave FZ unresolved companion (missing-export:voice/realtime-voice-config-override-2.ts) */
const realtimeVoiceConfigOverride: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureShapeColorTokenClusterInit@ui/ensure-shape-color-token-cluster-init.ts) */
const AppInitialTM: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:shouldHideFirstNewThreadOnboardingPromos@home/should-hide-first-new-thread-onboarding-promos.ts) */
const AppInitialTq: any = undefined;
/** Wave FZ unresolved companion (missing-export:models/seen-model-upgrade-list.tsx) */
const SeenModelUpgradeList: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (missing-export:runtime/vite-preload.ts) */
const vitePreload: any = undefined;
/** Wave FZ unresolved companion (missing-export:browser/list.ts) */
const list: any = undefined;
/** Wave FZ unresolved companion (missing-export:browser/deferred-browser-y0.ts) */
const deferredBrowserY0: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave FZ unresolved companion (sib-missing:home/codex-app-home-beacon-debug-state.ts) */
const codexAppHomeBeaconDebugStateIState: any = undefined;
/** Wave FZ unresolved companion (sib-missing:home/codex-app-home-beacon-debug-state.ts) */
const codexAppHomeBeaconDebugStateNState: any = undefined;
/** Wave FZ unresolved companion (sib-missing:home/codex-app-home-beacon-debug-state.ts) */
const codexAppHomeBeaconDebugStateRState: any = undefined;
/** Wave FZ unresolved companion (sib-missing:home/codex-app-home-beacon-debug-state.ts) */
const codexAppHomeBeaconDebugStateTState: any = undefined;
const __vite__mapDeps = (juniper, lagoon = __vite__mapDeps, meadow = lagoon.f || (lagoon.f = ["./realtime-voice-home-announcement-BBLBSud5.js", "./rolldown-runtime-BG2f4sTM.js", "./app-initial-C-fROkKo.js", "./app-initial-Czet5G9g.css", "./onboarding-banner-C3hNSPU0.js"])) => juniper.map(item => meadow[item]);
function alpha({
  actionId,
  beaconId
}) {
  return `${beaconId}:${actionId}`;
}
function bravo(nest) {
  let oak = nest.beacon_ui_response;
  return oak?.ui_info.type === "beacon_banner_info" ? {
    ...oak,
    ui_info: oak.ui_info
  } : null;
}
function copper({
  accountId,
  response
}) {
  return response.beacon_ui_response == null ? {
    accountId,
    beacon: null,
    shouldKeepLastServedBeacon: true
  } : {
    accountId,
    beacon: bravo(response),
    shouldKeepLastServedBeacon: false
  };
}
function delta(petal) {
  let quiet = echo(petal.action_v2);
  return quiet != null && falcon(quiet) ? quiet : null;
}
function echo(rain) {
  return "url" in rain && rain.url != null ? rain.url : "web_url" in rain && rain.web_url != null ? rain.web_url : null;
}
function falcon(seed) {
  return seed.startsWith("http://") || seed.startsWith("https://") || seed.startsWith("/") && !seed.startsWith("//");
}
function gamma({
  accountId,
  authMethod,
  isAuthLoading
}) {
  return !isAuthLoading && authMethod === "chatgpt" && accountId != null;
}
function harbor({
  isAuthLoading
}) {
  return isAuthLoading;
}
async function indigo(trail, urn, vine) {
  if (!codexAppHomeBeaconDebugStateIState(trail.beacon_id)) try {
    await decodeBase64ToBytes.safePost("/beacons/event", {
      requestBody: vine == null ? {
        beacon_id: trail.beacon_id,
        event_type: urn
      } : {
        beacon_id: trail.beacon_id,
        event_type: urn,
        event_cta_id: vine
      }
    });
  } catch {}
}
function jade(wind, yarrow) {
  return `${wind}:${yarrow}`;
}
function kite(azure, birch, canyon) {
  let dew = jade(birch, canyon.beacon_id);
  azure.get(river).has(dew) || (azure.set(river, ever => {
    let field = new Set(ever);
    return field.add(dew), field;
  }), indigo(canyon, "view"));
}
function lemon(grain, haven, ink) {
  if (codexAppHomeBeaconDebugStateIState(ink.beacon_id)) {
    grain.set(codexAppHomeBeaconDebugStateNState, false);
    return;
  }
  let jadeite = jade(haven, ink.beacon_id);
  grain.set(slate, kernel => {
    let leaf = new Set(kernel);
    return leaf.add(jadeite), leaf;
  });
  indigo(ink, "dismiss");
}
function marble() {
  let maple = CodexPluginActionType(appScopeAtom),
    {
      accountId,
      authMethod,
      isLoading,
      userId
    } = useAuth(),
    {
      data
    } = reuseArrayIfShallowEqual(),
    nimbus = AppIconAlt(),
    opal = CodexPluginActionResult(slate),
    plume = CodexPluginActionResult(codexAppHomeBeaconDebugStateNState),
    quillow = CodexPluginActionResult(umbra),
    root = CodexPluginActionResult(quartz),
    silk = CodexPluginActionResult($t),
    thorn,
    upland;
  {
    let knob = nimbus.getContext().user?.customIDs?.account_id;
    thorn = accountId ?? data?.id ?? knob ?? userId ?? null;
    upland = gamma({
      accountId: thorn,
      authMethod,
      isAuthLoading: isLoading
    });
  }
  let vista = upland,
    wisp = harbor({
      isAuthLoading: isLoading
    });
  let yonder = wisp,
    zenith,
    anvil;
  zenith = () => {
    maple.set(pearl, thorn);
    maple.set(quartz, vista);
  };
  anvil = [thorn, maple, vista];
  onyx.useLayoutEffect(zenith, anvil);
  let crag, dome;
  crag = () => {
    quillow.data?.accountId != null && quillow.data.beacon != null && maple.set($t, {
      accountId: quillow.data.accountId,
      beacon: quillow.data.beacon
    });
  };
  dome = [quillow.data, maple];
  onyx.useLayoutEffect(crag, dome);
  let eddy = quillow.data?.accountId === thorn ? quillow.data.beacon ?? (quillow.data.shouldKeepLastServedBeacon && silk?.accountId === thorn ? silk.beacon : null) : null,
    fjord;
  {
    let ledge = eddy != null && thorn != null ? jade(thorn, eddy.beacon_id) : null;
    fjord = null;
    plume ? fjord = timber : vista && eddy != null && ledge != null && !opal.has(ledge) && (fjord = eddy);
  }
  let glen = yonder || fjord != null,
    hearth = plume ? "debug" : thorn,
    inlet = fjord != null,
    jetty = !plume && (yonder || vista && (!root || quillow.isLoading));
  return {
    accountId: hearth,
    beacon: fjord,
    isEligible: inlet,
    isLoading: jetty,
    shouldSuppressVanillaPromos: glen
  };
}
var nickel,
  onyx,
  pearl,
  quartz,
  river,
  slate,
  $t,
  timber,
  umbra,
  violet = esmInit(() => {
    nickel = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    onyx = commonJsInit(react(), 1);
    ensureAuthProviderInit();
    RealtimeVoiceHostId();
    codexAppHomeBeaconDebugStateRState();
    ensureComposerEsm_E4_Init();
    ensureAppScopeInit();
    ensureSkillsPageHelpersInit();
    ensureCloudApiClientInit();
    pearl = reactCompilerRuntime(appScopeAtom, null);
    quartz = reactCompilerRuntime(appScopeAtom, false);
    river = reactCompilerRuntime(appScopeAtom, () => new Set());
    slate = reactCompilerRuntime(appScopeAtom, () => new Set());
    $t = reactCompilerRuntime(appScopeAtom, null);
    timber = {
      type: "beacon_ui_response",
      beacon_id: codexAppHomeBeaconDebugStateTState,
      beacon_name: "Codex App Home Beacon Debug",
      show_timing: "immediate",
      ui_info: {
        type: "beacon_banner_info",
        title: "Codex app home banner",
        description: "Local debug preview",
        informational_link: null,
        icon_image_url: null,
        icon_image_url_dark: null,
        icon_image_size: "large",
        banner_position: null,
        banner_design: "default",
        dismiss_variant: "dismiss_on_send"
      },
      action_items: [{
        id: "learn_more",
        action_v2: {
          action_enum: "open_url",
          url: "/settings"
        },
        text: "Learn more",
        type: "primary",
        icon_url: null,
        description: null
      }]
    };
    umbra = createAppScopeQueryAtom(appScopeAtom, ({
      get
    }) => {
      let mire = get(pearl);
      return {
        queryKey: ["codex-app-home-beacon", mire, get(localeMessagesAtom).locale],
        enabled: get(quartz),
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 6e4,
        queryFn: async () => ({
          accountId: mire,
          response: await decodeBase64ToBytes.safeGet("/beacons/home", {
            additionalHeaders: {
              "Cache-Control": "no-store"
            },
            parameters: {
              query: {
                product: "codex"
              }
            }
          })
        }),
        select: copper
      };
    });
  });
function CodexHomeAnnouncementsHelper14(nook) {
  let {
      accountId,
      beacon,
      localActionHandlers
    } = nook,
    oxbow = CodexPluginActionType(appScopeAtom),
    pond,
    quarry;
  pond = () => {
    kite(oxbow, accountId, beacon);
  };
  quarry = [accountId, beacon, oxbow];
  yellow.useEffect(pond, quarry);
  let rapids = () => {
    lemon(oxbow, accountId, beacon);
  };
  return <CodexHomeAnnouncementsHelper15 {...{
    beacon,
    localActionHandlers,
    onDismiss: rapids
  }} />;
}
function CodexHomeAnnouncementsHelper15(spur) {
  let {
      beacon,
      localActionHandlers,
      onDismiss
    } = spur,
    tor = useIntl(),
    updraft = useNavigate(),
    verge,
    weir,
    yard,
    anchor,
    bolt,
    cog,
    disc;
  {
    let hinge = beacon.action_items.find(willow),
      iron = beacon.action_items.find(on),
      joint = keystone => {
        if (keystone == null || keystone.text == null) return;
        let latch = localActionHandlers?.[alpha({
            actionId: keystone.id,
            beaconId: beacon.beacon_id
          })],
          motor = delta(keystone);
        if (!(motor == null && latch == null)) return {
          label: keystone.text,
          onClick: nut => {
            if (indigo(beacon, "click", keystone.id), latch?.({
              action: keystone,
              beacon
            }) !== true && motor != null) {
              if (!motor.startsWith("/")) {
                deferredUiEnt({
                  event: nut,
                  href: motor,
                  initiator: "open_in_browser_bridge"
                });
                return;
              }
              updraft(motor);
            }
          }
        };
      };
    disc = AppInitialJh;
    verge = EnsureOnboardingBannerInit;
    weir = beacon.ui_info.title;
    yard = beacon.ui_info.description;
    anchor = beacon.ui_info.icon_image_url ? <img alt="" src={beacon.ui_info.icon_image_url} className="h-8 w-8 shrink-0" /> : undefined;
    bolt = joint(hinge);
    cog = joint(iron);
  }
  let edge = tor.formatMessage({
    id: "codexAppHomeBeaconAnnouncement.dismiss",
    defaultMessage: "Dismiss {appName} beacon banner",
    description: "Accessible label for dismissing the backend-driven Codex app home banner"
  }, {
    appName: ensureImportSettingsGctInit
  });
  let forge = {
    ariaLabel: edge,
    icon: chatgpt2,
    onClick: onDismiss
  };
  let gear = <EnsureOnboardingBannerInit {...{
    title: weir,
    description: yard,
    leadingVisual: anchor,
    primaryAction: bolt,
    secondaryAction: cog,
    dismissAction: forge
  }} />;
  return <div className={disc}>
      {gear}
    </div>;
}
function on(piston) {
  return piston.type === "secondary";
}
function willow(rivet) {
  return rivet.type == null || rivet.type === "primary";
}
var xenon,
  yellow,
  zinc,
  amber = esmInit(() => {
    xenon = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    yellow = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    chatgpt2();
    violet();
    ensureComposerEsm_Qtt_Init();
    OnboardingBanner();
    AppInitialMh();
    ensureConversationPageEsm_Act_Init();
    ensureAppScopeInit();
  });
function CodexHomeAnnouncementsHelper17(screw) {
  let {
      message,
      setHasSeenAppUpsellBanner
    } = screw,
    torque = useIntl(),
    valve = <MemoizedFormattedMessage {...{
      id: "codex.appUpsellBanner.title",
      defaultMessage: "ChatGPT app",
      description: "Title shown in the app upsell banner"
    }} />;
  let axle, bracket;
  axle = <img alt="" src={appIconUrl} className="h-8 w-8 shrink-0" />;
  bracket = <MemoizedFormattedMessage {...{
    id: "codex.appUpsellBanner.download",
    defaultMessage: "Download",
    description: "Primary action label to download the ChatGPT app"
  }} />;
  let clamp = {
    label: bracket,
    onClick: gasket => {
      setHasSeenAppUpsellBanner(true);
      deferredUiEnt({
        event: gasket,
        href: "https://persistent.oaistatic.com/codex-app-prod/Codex.dmg",
        initiator: "open_in_browser_bridge"
      });
    }
  };
  let drill = torque.formatMessage({
    id: "codex.appUpsellBanner.dismissLabel",
    defaultMessage: "Dismiss ChatGPT app banner",
    description: "Accessible label for dismissing the ChatGPT app upsell banner"
  });
  let engine = () => {
    setHasSeenAppUpsellBanner(true);
  };
  let frame = {
    ariaLabel: drill,
    icon: chatgpt2,
    onClick: engine
  };
  return <EnsureOnboardingBannerInit {...{
    title: valve,
    description: message,
    leadingVisual: axle,
    primaryAction: clamp,
    dismissAction: frame
  }} />;
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
  let {
      platform,
      isLoading
    } = useHostPlatformModifierSymbol(),
    {
      authMethod,
      planAtLogin,
      isLoading: _isLoading
    } = useAuth(),
    insert = authMethod === "chatgpt",
    jacket = authMethod === "apikey",
    knurl = insert || jacket,
    lever = {
      enabled: knurl
    };
  let {
      data,
      isLoading: __isLoading
    } = getAccountInfoQueryConfig(lever),
    mount = authMethod === "copilot",
    nozzle = platform === "macOS",
    platen = data?.plan ?? planAtLogin,
    ratchet = platen === ChatGptPlanId.FREE || platen === ChatGptPlanId.GO,
    shim = !handle && (_isLoading || isLoading || insert && __isLoading),
    tappet = null;
  if (!shim && nozzle && !handle && !mount && authMethod && data && (insert && !ratchet || jacket)) {
    let arbor;
    arbor = <MemoizedFormattedMessage {...{
      id: "codex.appUpsellBanner.cbpApi.message",
      defaultMessage: "Build faster with the ChatGPT app. Download now or {learnMoreLink}",
      description: "Message shown in the app upsell banner for paid ChatGPT and API key users",
      values: {
        learnMoreLink: <a className="text-token-link focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none" href="https://chatgpt.com/codex" target="_blank" rel="noopener noreferrer">
                {<MemoizedFormattedMessage {...{
            id: "codex.appUpsellBanner.learnMoreLowercase",
            defaultMessage: "learn more",
            description: "Lowercase learn more link text in the app upsell banner"
          }} />}
              </a>
      }
    }} />;
    tappet = arbor;
  }
  return {
    isLoading: shim,
    message: tappet
  };
}
function flint() {
  let [bushing, collar] = useAtomPair(_n),
    {
      isLoading,
      message
    } = ember(bushing),
    dowel = message != null;
  return {
    isEligible: dowel,
    isLoading,
    message,
    setHasSeenAppUpsellBanner: collar
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
function CodexHomeAnnouncementsHelper20(flange) {
  let {
      content,
      fastModeModel,
      intl,
      isSubmitting,
      setHasSeenFastModeHomeBanner,
      setIsSubmitting,
      setServiceTier
    } = flange,
    gib = CodexPluginActionType(appScopeAtom),
    hub = <MemoizedFormattedMessage {...{
      id: "codex.fastModeHomeBanner.title",
      defaultMessage: "Enable Fast mode",
      description: "Title shown in the Fast mode home banner"
    }} />;
  let idler, jig;
  idler = <AppInitialAm className="icon-sm text-token-charts-yellow" />;
  jig = <MemoizedFormattedMessage {...{
    id: "codex.fastModeHomeBanner.cta.primary",
    defaultMessage: "Enable now",
    description: "Primary CTA shown in the Fast mode home banner"
  }} />;
  let keeper = () => {
    fastModeModel != null && (setIsSubmitting(true), logProductEvent(gib, CODEX_PRICING_PLAN_PAGE_SHOWN_TYPE, {}), setServiceTier(realtimeVoiceConfigOverride(fastModeModel)?.id ?? "priority", "home_banner").finally(() => {
      setHasSeenFastModeHomeBanner(true);
      setIsSubmitting(false);
    }));
  };
  let lug = {
    label: jig,
    onClick: keeper,
    disabled: isSubmitting
  };
  let mandrel = intl.formatMessage({
    id: "codex.fastModeHomeBanner.dismissLabel",
    defaultMessage: "Dismiss Fast mode banner",
    description: "Accessible label for dismissing the Fast mode home banner"
  });
  let nipple = () => {
    logProductEvent(gib, AppInitialEt, {});
    setHasSeenFastModeHomeBanner(true);
  };
  let orifice = {
    ariaLabel: mandrel,
    icon: chatgpt2,
    onClick: nipple,
    disabled: isSubmitting
  };
  return <EnsureOnboardingBannerInit {...{
    title: hub,
    description: content,
    leadingVisual: idler,
    primaryAction: lug,
    dismissAction: orifice
  }} />;
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
    {
      isServiceTierAllowed
    } = useHostChatgptAuthMethod(),
    {
      data
    } = findProcessManagerRow(),
    [sleeve, trunnion] = useAtomPair(quill),
    {
      modelSettings
    } = Models(),
    {
      serviceTierSettings,
      setServiceTier
    } = ensureSelectWorkspaceCqInit(),
    [boss, cam] = olive.useState(false),
    detent = olive.useRef(false),
    eccentric = data?.models,
    follower = deferredVoiceC4(eccentric, modelSettings.model, macOS3);
  let guide = follower,
    helix = isServiceTierAllowed && guide != null && !sleeve && serviceTierSettings.selectedServiceTier == null && !serviceTierSettings.isLoading,
    {
      estimate,
      estimateStatus
    } = parsePullRequestRouteParams(helix),
    impeller = !sleeve && helix && estimateStatus !== "ready" && estimateStatus !== "failed",
    journal = helix && estimateStatus === "ready" && estimate != null,
    kingpin,
    land;
  kingpin = () => {
    !journal || detent.current || (detent.current = true, logProductEvent(pin, CodexPluginDirectoryEntrypoint, {}));
  };
  land = [pin, journal];
  olive.useEffect(kingpin, land);
  let mesh = !journal || estimate == null ? null : <MemoizedFormattedMessage {...{
    id: "codex.fastModeHomeBanner.body.personalizedEstimate",
    defaultMessage: "Based on your work last week across {threadCount, plural, one {# chat} other {# chats}}, Fast could have saved about {savedHours, plural, =0 {{savedMinutes, plural, one {# minute} other {# minutes}}} one {# hour{savedMinutes, plural, =0 {} one { # minute} other { # minutes}}} other {# hours{savedMinutes, plural, =0 {} one { # minute} other { # minutes}}}}. Increases plan usage.",
    description: "Personalized estimate shown in the Fast mode home banner",
    values: {
      savedHours: estimate.savedHours,
      savedMinutes: estimate.savedMinutes,
      threadCount: estimate.threadCount
    }
  }} />;
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
    setServiceTier
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
function sage() {
  let {
      hostId
    } = useVoiceSettingsHostConfig(DeferredUiQl()),
    pad = AppInitialEM(),
    [quillshaft] = useAtomPair(wheat),
    {
      data,
      isLoading
    } = CodexBrowserSurfaceActionType(deferredBrowserY0, hostId),
    roller = data?.some(topaz) ?? false;
  let spindle = roller,
    thrust = pad && !quillshaft && isLoading,
    yoke = pad && !quillshaft && !spindle;
  return {
    isEligible: yoke,
    isLoading: thrust
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
  let {
      onTryNow
    } = capstan,
    diaphragm = CodexPluginActionType(appScopeAtom),
    elbow = useIntl(),
    ferrule = {
      hostId: LOCAL_HOST_ID
    };
  let grommet = HostFeatureConfigToggles(ferrule),
    [, header] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("composer_prefill"),
    [injector, jumper] = useAtomPair(wheat),
    [kerf, louver] = acorn.useState(false),
    manifold = acorn.useRef(false),
    nip = !injector,
    outlet,
    packing;
  if (outlet = () => {
    !nip || manifold.current || (manifold.current = true, logProductEvent(diaphragm, CODEX_MULTI_AGENT_BANNER_VIEWED_TYPE, {}));
  }, packing = [diaphragm, nip], acorn.useEffect(outlet, packing), !nip) return null;
  let reducer, strainer, tee, union;
  reducer = <MemoizedFormattedMessage {...{
    id: "codex.multiAgentComposerBanner.title",
    defaultMessage: "Subagents in Codex",
    description: "Title shown in the multi-agent composer banner"
  }} />;
  strainer = <MemoizedFormattedMessage {...{
    id: "codex.multiAgentComposerBanner.body",
    defaultMessage: "Delegate work to subagents that work in parallel. Note: may increase token usage.",
    description: "Body shown in the multi-agent composer banner"
  }} />;
  tee = <EnsureTeamIconInit {...{
    className: "icon-sm"
  }} />;
  union = <MemoizedFormattedMessage {...{
    id: "codex.multiAgentComposerBanner.cta.primary",
    defaultMessage: "Try now",
    description: "Primary CTA shown in the multi-agent composer banner"
  }} />;
  let vent = () => {
    louver(true);
    let copperPrime = elbow.formatMessage({
      id: "composer.multiAgentBanner.tryNow.prompt",
      defaultMessage: "Spawn a subagent to explore this repo.",
      description: "Prompt inserted when the user clicks Try now on the multi-agent composer banner"
    });
    logProductEvent(diaphragm, CODEX_PRICING_PLAN_PAGE_CTA_CLICKED_TYPE, {
      action: "try_now"
    });
    grommet.mutateAsync({
      featureName: coral,
      enabled: true
    }).finally(() => {
      onTryNow ? onTryNow() : header({
        text: copperPrime
      });
      jumper(true);
      louver(false);
    });
  };
  let wye = {
    label: union,
    onClick: vent,
    disabled: kerf
  };
  let zener = elbow.formatMessage({
    id: "codex.multiAgentComposerBanner.dismissLabel",
    defaultMessage: "Dismiss subagent banner",
    description: "Accessible label for dismissing the multi-agent composer banner"
  });
  let alphaPrime = () => {
    logProductEvent(diaphragm, CODEX_MULTI_AGENT_BANNER_DISMISSED_TYPE, {});
    jumper(true);
  };
  let bravoPrime = {
    ariaLabel: zener,
    icon: chatgpt2,
    onClick: alphaPrime,
    disabled: kerf
  };
  return <EnsureOnboardingBannerInit {...{
    title: reducer,
    description: strainer,
    leadingVisual: tee,
    primaryAction: wye,
    dismissAction: bravoPrime
  }} />;
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
