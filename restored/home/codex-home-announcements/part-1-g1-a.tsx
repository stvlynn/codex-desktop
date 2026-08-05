// Restored from ref/webview/assets/codex-home-announcements-CvdZr0JN.js
// Wave FZ — full polished body from `codex-home-announcements-CvdZr0JN/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 45 (verified 89/133).
// AST split 1/4
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
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/ide-context.tsx) */
const AppInitialJh: any = undefined;
/** Wave FZ unresolved companion (missing-export:composer/cloud4.tsx) */
const AppInitialMh: any = undefined;
/** Wave FZ unresolved companion (sib-missing:home/codex-app-home-beacon-debug-state.ts) */
const codexAppHomeBeaconDebugStateIState: any = undefined;
/** Wave FZ unresolved companion (sib-missing:home/codex-app-home-beacon-debug-state.ts) */
const codexAppHomeBeaconDebugStateNState: any = undefined;
/** Wave FZ unresolved companion (sib-missing:home/codex-app-home-beacon-debug-state.ts) */
const codexAppHomeBeaconDebugStateRState: any = undefined;
/** Wave FZ unresolved companion (sib-missing:home/codex-app-home-beacon-debug-state.ts) */
const codexAppHomeBeaconDebugStateTState: any = undefined;

const __vite__mapDeps = (
  juniper,
  lagoon = __vite__mapDeps,
  meadow = lagoon.f ||
    (lagoon.f = [
      "./realtime-voice-home-announcement-BBLBSud5.js",
      "./rolldown-runtime-BG2f4sTM.js",
      "./app-initial-C-fROkKo.js",
      "./app-initial-Czet5G9g.css",
      "./onboarding-banner-C3hNSPU0.js",
    ]),
) => juniper.map((item) => meadow[item]);
function alpha({ actionId, beaconId }) {
  return `${beaconId}:${actionId}`;
}
function bravo(nest) {
  let oak = nest.beacon_ui_response;
  return oak?.ui_info.type === "beacon_banner_info"
    ? {
        ...oak,
        ui_info: oak.ui_info,
      }
    : null;
}
function copper({ accountId, response }) {
  return response.beacon_ui_response == null
    ? {
        accountId,
        beacon: null,
        shouldKeepLastServedBeacon: true,
      }
    : {
        accountId,
        beacon: bravo(response),
        shouldKeepLastServedBeacon: false,
      };
}
function delta(petal) {
  let quiet = echo(petal.action_v2);
  return quiet != null && falcon(quiet) ? quiet : null;
}
function echo(rain) {
  return "url" in rain && rain.url != null
    ? rain.url
    : "web_url" in rain && rain.web_url != null
      ? rain.web_url
      : null;
}
function falcon(seed) {
  return (
    seed.startsWith("http://") ||
    seed.startsWith("https://") ||
    (seed.startsWith("/") && !seed.startsWith("//"))
  );
}
function gamma({ accountId, authMethod, isAuthLoading }) {
  return !isAuthLoading && authMethod === "chatgpt" && accountId != null;
}
function harbor({ isAuthLoading }) {
  return isAuthLoading;
}
async function indigo(trail, urn, vine) {
  if (!codexAppHomeBeaconDebugStateIState(trail.beacon_id))
    try {
      await decodeBase64ToBytes.safePost("/beacons/event", {
        requestBody:
          vine == null
            ? {
                beacon_id: trail.beacon_id,
                event_type: urn,
              }
            : {
                beacon_id: trail.beacon_id,
                event_type: urn,
                event_cta_id: vine,
              },
      });
    } catch {}
}
function jade(wind, yarrow) {
  return `${wind}:${yarrow}`;
}
function kite(azure, birch, canyon) {
  let dew = jade(birch, canyon.beacon_id);
  azure.get(river).has(dew) ||
    (azure.set(river, (ever) => {
      let field = new Set(ever);
      return (field.add(dew), field);
    }),
    indigo(canyon, "view"));
}
function lemon(grain, haven, ink) {
  if (codexAppHomeBeaconDebugStateIState(ink.beacon_id)) {
    grain.set(codexAppHomeBeaconDebugStateNState, false);
    return;
  }
  let jadeite = jade(haven, ink.beacon_id);
  grain.set(slate, (kernel) => {
    let leaf = new Set(kernel);
    return (leaf.add(jadeite), leaf);
  });
  indigo(ink, "dismiss");
}
function marble() {
  let maple = CodexPluginActionType(appScopeAtom),
    { accountId, authMethod, isLoading, userId } = useAuth(),
    { data } = reuseArrayIfShallowEqual(),
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
      isAuthLoading: isLoading,
    });
  }
  let vista = upland,
    wisp = harbor({
      isAuthLoading: isLoading,
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
    quillow.data?.accountId != null &&
      quillow.data.beacon != null &&
      maple.set($t, {
        accountId: quillow.data.accountId,
        beacon: quillow.data.beacon,
      });
  };
  dome = [quillow.data, maple];
  onyx.useLayoutEffect(crag, dome);
  let eddy =
      quillow.data?.accountId === thorn
        ? (quillow.data.beacon ??
          (quillow.data.shouldKeepLastServedBeacon && silk?.accountId === thorn
            ? silk.beacon
            : null))
        : null,
    fjord;
  {
    let ledge =
      eddy != null && thorn != null ? jade(thorn, eddy.beacon_id) : null;
    fjord = null;
    plume
      ? (fjord = timber)
      : vista &&
        eddy != null &&
        ledge != null &&
        !opal.has(ledge) &&
        (fjord = eddy);
  }
  let glen = yonder || fjord != null,
    hearth = plume ? "debug" : thorn,
    inlet = fjord != null,
    jetty = !plume && (yonder || (vista && (!root || quillow.isLoading)));
  return {
    accountId: hearth,
    beacon: fjord,
    isEligible: inlet,
    isLoading: jetty,
    shouldSuppressVanillaPromos: glen,
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
        dismiss_variant: "dismiss_on_send",
      },
      action_items: [
        {
          id: "learn_more",
          action_v2: {
            action_enum: "open_url",
            url: "/settings",
          },
          text: "Learn more",
          type: "primary",
          icon_url: null,
          description: null,
        },
      ],
    };
    umbra = createAppScopeQueryAtom(appScopeAtom, ({ get }) => {
      let mire = get(pearl);
      return {
        queryKey: [
          "codex-app-home-beacon",
          mire,
          get(localeMessagesAtom).locale,
        ],
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
              "Cache-Control": "no-store",
            },
            parameters: {
              query: {
                product: "codex",
              },
            },
          }),
        }),
        select: copper,
      };
    });
  });
function CodexHomeAnnouncementsHelper14(nook) {
  let { accountId, beacon, localActionHandlers } = nook,
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
  return (
    <CodexHomeAnnouncementsHelper15
      {...{
        beacon,
        localActionHandlers,
        onDismiss: rapids,
      }}
    />
  );
}
function CodexHomeAnnouncementsHelper15(spur) {
  let { beacon, localActionHandlers, onDismiss } = spur,
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
      joint = (keystone) => {
        if (keystone == null || keystone.text == null) return;
        let latch =
            localActionHandlers?.[
              alpha({
                actionId: keystone.id,
                beaconId: beacon.beacon_id,
              })
            ],
          motor = delta(keystone);
        if (!(motor == null && latch == null))
          return {
            label: keystone.text,
            onClick: (nut) => {
              if (
                (indigo(beacon, "click", keystone.id),
                latch?.({
                  action: keystone,
                  beacon,
                }) !== true && motor != null)
              ) {
                if (!motor.startsWith("/")) {
                  deferredUiEnt({
                    event: nut,
                    href: motor,
                    initiator: "open_in_browser_bridge",
                  });
                  return;
                }
                updraft(motor);
              }
            },
          };
      };
    disc = AppInitialJh;
    verge = EnsureOnboardingBannerInit;
    weir = beacon.ui_info.title;
    yard = beacon.ui_info.description;
    anchor = beacon.ui_info.icon_image_url ? (
      <img
        alt=""
        src={beacon.ui_info.icon_image_url}
        className="h-8 w-8 shrink-0"
      />
    ) : undefined;
    bolt = joint(hinge);
    cog = joint(iron);
  }
  let edge = tor.formatMessage(
    {
      id: "codexAppHomeBeaconAnnouncement.dismiss",
      defaultMessage: "Dismiss {appName} beacon banner",
      description:
        "Accessible label for dismissing the backend-driven Codex app home banner",
    },
    {
      appName: ensureImportSettingsGctInit,
    },
  );
  let forge = {
    ariaLabel: edge,
    icon: chatgpt2,
    onClick: onDismiss,
  };
  let gear = (
    <EnsureOnboardingBannerInit
      {...{
        title: weir,
        description: yard,
        leadingVisual: anchor,
        primaryAction: bolt,
        secondaryAction: cog,
        dismissAction: forge,
      }}
    />
  );
  return <div className={disc}>{gear}</div>;
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
