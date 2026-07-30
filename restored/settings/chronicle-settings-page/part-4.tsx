// Restored from ref/webview/assets/chronicle-settings-page-BM3S8jwp.js
// Wave5 stub-pass soft companions.
const on: any = undefined;

// Wave FX — full polished body from `chronicle-settings-page-BM3S8jwp/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 70/92).
// Wave5d — FZ repair from fy-clean L=4010 sus=50; JSX PascalCase + careful split.
// Wave5d careful split 4/7
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../boundaries/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Wlt_Init,
  ensureComposerEsm_Ytt_Init,
} from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../boundaries/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
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
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { isRestoring } from "../../ui/is-restoring";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { identity } from "../../utils/identity";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import {
  applyChronicleConfigFeature,
  ensureChronicleConfigQueriesInit,
} from "../chronicle-config-queries";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";

// Wave5d soft stubs.
const AppInitialFC: any = undefined;
const AppInitialVO: any = undefined;
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
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function garnet(prism) {
  let { disabled, onRequest } = prism,
    quill = [
      [
        <MemoizedFormattedMessage
          key={"last_ten_minutes"}
          {...{
            id: "settings.chronicle.history.clearTenMinutes",
            defaultMessage: "Clear last 10 minutes",
            description: "Clear Computer history range option",
          }}
        />,
        "last_ten_minutes",
      ],
      [
        <MemoizedFormattedMessage
          key={"last_hour"}
          {...{
            id: "settings.chronicle.history.clearHour",
            defaultMessage: "Clear last hour",
            description: "Clear Computer history range option",
          }}
        />,
        "last_hour",
      ],
      [
        <MemoizedFormattedMessage
          key={"last_day"}
          {...{
            id: "settings.chronicle.history.clearDay",
            defaultMessage: "Clear last day",
            description: "Clear Computer history range option",
          }}
        />,
        "last_day",
      ],
      [
        <MemoizedFormattedMessage
          key={"all"}
          {...{
            id: "settings.chronicle.history.clearAll",
            defaultMessage: "Clear all",
            description: "Clear all Computer history range option",
          }}
        />,
        "all",
      ],
    ];
  let reef = quill,
    sage = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.chronicle.history.clear",
          defaultMessage: "Clear history",
          description: "Clear Computer history menu button",
        }}
      />
    );
  let topaz = (
    <DropdownTriggerButton disabled={disabled}>{sage}</DropdownTriggerButton>
  );
  let ultra = reef.map((item) => {
    let [vapor, wheat] = item;
    return (
      <DropdownMenu.Item
        key={wheat}
        {...{
          className: wheat === "all" ? "!text-token-charts-red" : undefined,
          onSelect: () =>
            onRequest({
              scope: wheat,
              interval: null,
            }),
          children: vapor,
        }}
      />
    );
  });
  return (
    <DropdownMenuPopover
      {...{
        align: "end",
        contentWidth: "menu",
        disabled,
        triggerButton: topaz,
        children: ultra,
      }}
    />
  );
}
function hazel(yarn) {
  let { item } = yarn,
    zephyr = useIntl(),
    acorn = new Date(item.interval.startMs);
  if (item.summaryLevel === "ten_minute")
    return (
      <>
        {zephyr.formatTime(acorn, {
          hour: "numeric",
          minute: "2-digit",
        })}
      </>
    );
  let bloom = acorn.getHours();
  if (bloom >= 4 && bloom < 10) {
    let coral;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "settings.chronicle.history.morning",
          defaultMessage: "Morning",
          description: "Morning label for a six-hour Computer history summary",
        }}
      />
    );
  }
  if (bloom >= 10 && bloom < 16) {
    let drift;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "settings.chronicle.history.afternoon",
          defaultMessage: "Afternoon",
          description:
            "Afternoon label for a six-hour Computer history summary",
        }}
      />
    );
  }
  if (bloom >= 16 && bloom < 22) {
    let eagle;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "settings.chronicle.history.evening",
          defaultMessage: "Evening",
          description: "Evening label for a six-hour Computer history summary",
        }}
      />
    );
  }
  return (
    <MemoizedFormattedMessage
      {...{
        id: "settings.chronicle.history.overnight",
        defaultMessage: "Overnight",
        description: "Overnight label for a six-hour Computer history summary",
      }}
    />
  );
}
function ivory(frost, glide) {
  let honey = {
      hour: "numeric",
      minute: "2-digit",
    },
    iris = glide.formatTime(new Date(frost.interval.startMs), honey),
    jewel = glide.formatTime(new Date(frost.interval.endMs), honey);
  return glide.formatMessage(
    {
      id: "settings.chronicle.history.timeRange",
      defaultMessage: "{start} – {end}",
      description: "Local time range for a Computer history item",
    },
    {
      start: iris,
      end: jewel,
    },
  );
}
function jasper(knoll) {
  let { label } = knoll,
    lunar = useIntl();
  if (label.kind === "today") {
    let north;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "settings.chronicle.history.today",
          defaultMessage: "Today",
          description: "Computer history group label for today",
        }}
      />
    );
  }
  if (label.kind === "yesterday") {
    let orbit;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "settings.chronicle.history.yesterday",
          defaultMessage: "Yesterday",
          description: "Computer history group label for yesterday",
        }}
      />
    );
  }
  let moss = lunar.formatDate(label.date, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return <>{moss}</>;
}
function kelp(pine, quest) {
  let ridge = new Map();
  for (let tide of pine) {
    let unity = new Date(tide.interval.startMs),
      vale = `${unity.getFullYear()}-${unity.getMonth()}-${unity.getDate()}`,
      wave = ridge.get(vale) ?? [];
    wave.push(tide);
    ridge.set(vale, wave);
  }
  let storm = new Date(quest);
  return (
    storm.setDate(quest.getDate() - 1),
    [...ridge.entries()].flatMap(([apex, brook]) => {
      let cliff = brook[0];
      if (cliff == null) return [];
      let dusk = new Date(cliff.interval.startMs),
        elm;
      return (
        (elm = _n(dusk, quest)
          ? {
              kind: "today",
            }
          : _n(dusk, storm)
            ? {
                kind: "yesterday",
              }
            : {
                kind: "date",
                date: dusk,
              }),
        [
          {
            key: apex,
            label: elm,
            items: brook,
          },
        ]
      );
    })
  );
}
function _n(fern, grove) {
  return (
    fern.getFullYear() === grove.getFullYear() &&
    fern.getMonth() === grove.getMonth() &&
    fern.getDate() === grove.getDate()
  );
}
var lotus,
  mint,
  nova,
  olive = esmInit(() => {
    lotus = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    mint = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_Ilt_Init();
    ensureComposerEsm_Hlt_Init();
    AppIconYlt();
    AppInitialVO();
    ensureAppScopeInit();
    codexCommandTheme();
    ensureSettingsSectionTitleInit();
    AppInitialFC();
    flint();
    bravo();
    alpha();
    on();
  });
