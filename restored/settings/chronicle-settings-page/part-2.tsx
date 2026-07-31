// Restored from ref/webview/assets/chronicle-settings-page-BM3S8jwp.js
// Wave5 stub-pass soft companions.
const deferredHostsS3: any = undefined;
const ensureConfigQueryAtomsInit: any = undefined;
// Wave FX — full polished body from `chronicle-settings-page-BM3S8jwp/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 70/92).
// Wave5d — FZ repair from fy-clean L=4010 sus=50; JSX PascalCase + careful split.
// Wave5d careful split 2/7
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { createAppScopeQueryAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wlt_Init, ensureComposerEsm_Ytt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { USER_CONFIG_PATH } from "../../config/user-config-path";
import { appServices } from "../../desktop/desktop-services";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { AppIconKA } from "../../icons/app-icon-ka";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { MarkdownContentCssClass } from "../../markdown/markdown-content-css-classes";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { isRestoring } from "../../ui/is-restoring";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { identity } from "../../utils/identity";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { applyChronicleConfigFeature, ensureChronicleConfigQueriesInit } from "../chronicle-config-queries";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

// Wave5d soft stubs.
const AppInitialC3: any = undefined;
const AppInitialCm: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialFZ: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
var slate,
  timber,
  umbra,
  violet,
  willow = esmInit(() => {
    slate = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    timber = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialCm();
    ensureSettingsQueryAtomsInit();
    ensureClientCoordinationServiceInit();
    AppInitialFZ();
    AppInitialFC();
    river();
    alpha();
    violet = [{
      key: "follow-up",
      user: identity({
        id: "settings.chronicle.off.example.followUp.user",
        defaultMessage: "What did I promise to send Sarah after yesterday’s meeting?",
        description: "Example Computer history question about a follow-up"
      }),
      assistant: identity({
        id: "settings.chronicle.off.example.followUp.assistant",
        defaultMessage: "You told Sarah in Slack you’d send the Q3 budget by Friday. The latest version is in Google Sheets, and your meeting notes in Google Docs list two numbers to confirm: hiring and travel.",
        description: "Example Computer history answer about a follow-up"
      })
    }, {
      key: "travel",
      user: identity({
        id: "settings.chronicle.off.example.travel.user",
        defaultMessage: "Help me get ready for my trip to Chicago",
        description: "Example Computer history question about travel"
      }),
      assistant: identity({
        id: "settings.chronicle.off.example.travel.assistant",
        defaultMessage: "Your flight confirmation is in Gmail, the hotel is in Google Calendar, and you saved three restaurants in Chrome. You still need a dinner reservation for Thursday.",
        description: "Example Computer history answer about travel"
      })
    }, {
      key: "remodel",
      user: identity({
        id: "settings.chronicle.off.example.remodel.user",
        defaultMessage: "Where was I on the home remodel?",
        description: "Example Computer history question about a home project"
      }),
      assistant: identity({
        id: "settings.chronicle.off.example.remodel.assistant",
        defaultMessage: "You narrowed the backsplash to two options in Chrome, compared quotes in Google Sheets, and saved the contractor’s revised estimate in Google Drive. The next decision is white subway tile or blue zellige.",
        description: "Example Computer history answer about a home project"
      })
    }];
  }),
  xenon,
  yellow,
  zinc,
  amber,
  basalt = esmInit(() => {
    xenon = ["chronicle-state"];
    yellow = ["chronicle-settings"];
    zinc = ["chronicle-applications"];
    amber = ["chronicle-history"];
  });
function cedar(glide) {
  return {
    defaultApplicationBehavior: glide.observation.defaultApplicationBehavior,
    applicationBundleIdentifiers: garnet(glide, "app", glide.observation.defaultApplicationBehavior),
    defaultURLBehavior: glide.observation.defaultURLBehavior,
    urlDomains: garnet(glide, "url", glide.observation.defaultURLBehavior)
  };
}
function daisy(honey, iris) {
  let jewel = honey.observation.allowlist.filter(item => item.scope !== "app" && item.scope !== "url"),
    knoll = honey.observation.blocklist.filter(item => item.scope !== "app" && item.scope !== "url"),
    lunar = iris.applicationBundleIdentifiers.map(item => ({
      scope: "app",
      bundleID: item,
      urlDomain: null
    })),
    moss = iris.urlDomains.map(item => ({
      scope: "url",
      bundleID: null,
      urlDomain: item
    }));
  return hazel(iris.defaultApplicationBehavior, jewel, knoll).push(...lunar), hazel(iris.defaultURLBehavior, jewel, knoll).push(...moss), {
    observation: {
      ...honey.observation,
      defaultApplicationBehavior: iris.defaultApplicationBehavior,
      defaultURLBehavior: iris.defaultURLBehavior,
      allowlist: jewel,
      blocklist: knoll
    }
  };
}
function ember(north, orbit) {
  let pine = north.observation,
    quest = pine.allowlist.some(item => item.scope === "app" && item.bundleID === orbit),
    ridge = pine.blocklist.some(item => item.scope === "app" && item.bundleID === orbit);
  return pine.defaultApplicationBehavior === "observe" ? !ridge : quest;
}
function flint(storm, tide, unity) {
  let vale = {
      scope: "app",
      bundleID: tide,
      urlDomain: null
    },
    wave = ivory(storm.observation.allowlist, tide),
    apex = ivory(storm.observation.blocklist, tide);
  return storm.observation.defaultApplicationBehavior === "observe" ? unity || apex.push(vale) : unity && wave.push(vale), {
    observation: {
      ...storm.observation,
      allowlist: wave,
      blocklist: apex
    }
  };
}
function garnet(brook, cliff, dusk) {
  return hazel(dusk, brook.observation.allowlist, brook.observation.blocklist).flatMap(item => {
    if (item.scope !== cliff) return [];
    let elm = cliff === "app" ? item.bundleID : item.urlDomain;
    return elm == null ? [] : [elm];
  });
}
function hazel(fern, grove, hill) {
  return fern === "observe" ? hill : grove;
}
function ivory(isle, juniper) {
  return isle.filter(item => item.scope !== "app" || item.bundleID !== juniper);
}
var jasper = esmInit(() => {});
function kelp() {
  let lagoon = appServices.chronicle;
  if (lagoon == null) throw Error("Computer history is unavailable");
  return lagoon;
}
var lotus,
  mint,
  nova,
  olive,
  prism,
  quill,
  reef,
  sage,
  topaz,
  ultra,
  vapor,
  wheat = esmInit(() => {
    ensureComposerEsm_MT_Init();
    ensureConfigQueryAtomsInit();
    deferredHostsS3();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    ensureChronicleConfigQueriesInit();
    basalt();
    jasper();
    lotus = createAppScopeQueryAtom(appScopeAtom, () => ({
      enabled: appServices.chronicle != null,
      queryKey: xenon,
      queryFn: () => kelp().getState(),
      refetchOnMount: "always",
      refetchOnWindowFocus: true,
      retry: false,
      staleTime: 1e3
    }));
    mint = createAppScopeQueryAtom(appScopeAtom, () => ({
      enabled: appServices.chronicle != null,
      queryKey: yellow,
      queryFn: () => kelp().getSettings(),
      refetchOnMount: "always",
      retry: false,
      staleTime: 0
    }));
    nova = createAppScopeQueryAtom(appScopeAtom, () => ({
      enabled: appServices.chronicle != null,
      queryKey: amber,
      queryFn: () => kelp().listHistory(),
      refetchOnWindowFocus: true,
      retry: false,
      staleTime: 0
    }));
    olive = createAppScopeQueryAtom(appScopeAtom, () => ({
      enabled: appServices.chronicle != null,
      queryKey: zinc,
      queryFn: () => kelp().listApplications(),
      retry: false,
      staleTime: 1 / 0
    }));
    prism = useQuery(appScopeAtom, meadow => ({
      enabled: appServices.chronicle != null && meadow.length > 0,
      queryKey: [...zinc, "selected", meadow],
      queryFn: () => kelp().resolveApplications(meadow),
      retry: false,
      staleTime: 1 / 0
    }));
    quill = isRestoring(appScopeAtom, ({
      scope
    }) => ({
      mutationKey: ["chronicle", "set-enabled"],
      mutationFn: ({
        enabled
      }) => kelp().setEnabled(enabled),
      onSuccess: (nest, {
        hostId
      }) => {
        scope.query.setData(lotus, nest);
        scope.query.setData(homeDirectoryQueryAtom, hostId, oak => oak == null ? oak : {
          ...oak,
          config: applyChronicleConfigFeature(oak.config, nest.enabled)
        });
        Promise.all([AppInitialC3(scope.queryClient, USER_CONFIG_PATH), AppInitialC3(scope.queryClient, ["user-saved-config"]), AppInitialC3(scope.queryClient, xenon), scope.queryClient.invalidateQueries({
          queryKey: ["plugins"]
        }), scope.queryClient.invalidateQueries({
          queryKey: ["skills"]
        }), AppInitialC3(scope.queryClient, yellow), AppInitialC3(scope.queryClient, amber)]);
      }
    }));
    reef = isRestoring(appScopeAtom, ({
      scope
    }) => ({
      mutationKey: ["chronicle", "retry-activation"],
      mutationFn: () => kelp().retryActivation(),
      onSuccess: async petal => {
        scope.query.setData(lotus, petal);
        await AppInitialC3(scope.queryClient, xenon);
        petal.enabled || (await Promise.all([AppInitialC3(scope.queryClient, USER_CONFIG_PATH), AppInitialC3(scope.queryClient, ["user-saved-config"])]));
      }
    }));
    sage = isRestoring(appScopeAtom, ({
      scope
    }) => ({
      mutationKey: ["chronicle", "pause-resume"],
      mutationFn: quiet => quiet === "paused" ? kelp().resume() : kelp().pause(),
      onSuccess: async rain => {
        scope.query.setData(lotus, rain);
        await AppInitialC3(scope.queryClient, xenon);
      }
    }));
    topaz = isRestoring(appScopeAtom, ({
      scope
    }) => ({
      mutationKey: ["chronicle", "update-application"],
      mutationFn: async ({
        application,
        observed
      }) => {
        let seed = kelp(),
          trail = await seed.getSettings();
        return seed.updateSettings(flint(trail, application.bundleIdentifier, observed));
      },
      onSuccess: async urn => {
        scope.query.setData(mint, urn);
        await AppInitialC3(scope.queryClient, yellow);
      }
    }));
    ultra = isRestoring(appScopeAtom, ({
      scope
    }) => ({
      mutationKey: ["chronicle", "clear-history"],
      mutationFn: ({
        interval,
        scope: _scope
      }) => kelp().clearHistory(_scope, interval),
      onSuccess: () => AppInitialC3(scope.queryClient, amber)
    }));
    vapor = isRestoring(appScopeAtom, ({
      scope
    }) => ({
      mutationKey: ["chronicle", "save-settings"],
      mutationFn: async vine => {
        let wind = kelp(),
          yarrow = await wind.getSettings();
        return wind.updateSettings(daisy(yarrow, vine));
      },
      onSuccess: async azure => {
        scope.query.setData(mint, azure);
        await AppInitialC3(scope.queryClient, yellow);
      }
    }));
  }),
  yarn,
  zephyr,
  acorn,
  $t,
  bloom,
  coral,
  drift,
  eagle,
  frost,
  on = esmInit(() => {
    yarn = "_timelineItem_1mjve_1";
    zephyr = "_timelineTime_1mjve_5";
    acorn = "_timelineRail_1mjve_10";
    $t = "_timelineRailGapBefore_1mjve_29";
    bloom = "_timelineRailGapAfter_1mjve_30";
    coral = "_timelineDot_1mjve_43";
    drift = "_timelineContent_1mjve_47";
    eagle = "_timelineDelete_1mjve_55";
    frost = {
      timelineItem: yarn,
      timelineTime: zephyr,
      timelineRail: acorn,
      timelineRailGapBefore: $t,
      timelineRailGapAfter: bloom,
      timelineDot: coral,
      timelineContent: drift,
      timelineDelete: eagle
    };
  });
