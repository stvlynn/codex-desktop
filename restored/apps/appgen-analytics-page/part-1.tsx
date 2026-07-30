// Restored from ref/webview/assets/page-D9xkFXMg.js
// Strict QG split (no --allow-flat): Wave5d-style careful split into parts; public API exported; cross-part refs soft-stubbed; bind in runtime-bridges.
// Stage 3 deep fill from `page-D9xkFXMg/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 10 (verified 71/81).
// JSX calls converted: 116; mechanical renames: 324.

// Wave5d careful split 1/4
/* split-lane-import-depth:1 */

import type { ReactNode } from "react";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { AppShellLayout } from "../../app-shell/app-shell-layout";
import { ensureChatgptSiteSuffixesInit } from "../../appgen/chatgpt-site-suffixes";
import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
} from "../../boundaries/app-scope-runtime";
import {
  _chartWidgetStoresC,
  _chartWidgetStoresS,
  chartWidgetStoresA,
  chartWidgetStoresI as ChartWidgetStoresI,
  chartWidgetStoresN,
  chartWidgetStoresO,
  chartWidgetStoresR,
  chartWidgetStoresW,
} from "../../boundaries/chart-widget-stores/index";
import {
  createAppScopeSelectAtom,
  useAppScopeAtomValue,
} from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm__U_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_pdt_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_tlt_Init,
} from "../../boundaries/composer-esm-inits";
import {
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_B0_Init,
} from "../../boundaries/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  Navigate,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { QueryStaleTimes } from "../../config/query-stale-times";
import { useFeatureGateEnabled } from "../../feature-gates/use-feature-gate-enabled";
import { usePreferredColorScheme } from "../../hooks/use-preferred-color-scheme";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconeL } from "../../icons/app-icon-el";
import { AppIconsz } from "../../icons/app-icon-sz";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { CloseIcon } from "../../icons/close-icon";
import { handleAnchorOpenHref } from "../../navigation/handle-anchor-open-href";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { getAppearanceThemeMode } from "../../settings/get-appearance-theme-mode";
import { ensureSettingsSectionTitleInit } from "../../settings/settings-section-title";
import { Button } from "../../ui/button";
import { cx } from "../../ui/cx";
import { deferredUicz } from "../../ui/deferred-uicz";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { ExternalLinkIconButton } from "../../ui/external-link-icon-button";
import { Spinner } from "../../ui/spinner";
import {
  initToolbarBreadcrumb,
  ToolbarBreadcrumb,
} from "../../ui/toolbar-breadcrumb";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { identity } from "../../utils/identity";
import {
  ensureZodRuntime,
  zodArray,
  zodEnum,
  zodLiteral,
  zodNumber,
  zodObject,
  zodUnknown,
} from "../../vendor/zod";

/** Unresolved companion (jsx-collision:coalesceTruthy@utils/coalesce-truthy.ts) */
const AppInitialCT: any = undefined;
/** Unresolved companion (jsx-collision:siteAnalyticsPath@appgen/site-analytics-paths.ts) */
const AppInitialET: any = undefined;
/** Unresolved companion (jsx-collision:ensureConversationPageEsm_oZ_Init@boundaries/conversation-page-esm-inits.ts) */
const AppInitialOZ: any = undefined;
/** Unresolved companion (jsx-collision:ensureAccountPlanQueryInit@account/ensure-account-plan-query-init.ts) */
const AppInitialST: any = undefined;
/** Unresolved companion (jsx-collision:ensureAppgenSiteQueriesInit@appgen/site-query-atoms.ts) */
const AppInitialT5: any = undefined;
/** Unresolved companion (jsx-collision:deferredUiTL@ui/deferred-ui-tl.tsx) */
const AppInitialTL: any = undefined;
/** Unresolved companion (jsx-collision:siteAnalyticsEventsPath@appgen/site-analytics-paths.ts) */
const AppInitialTT: any = undefined;
/** Unresolved companion (jsx-collision:useRouteParams@hooks/use-route-params.ts) */
const AppInitialU5: any = undefined;
/** Unresolved companion (missing-export:appgen/site-query-atoms.ts) */
const sitesGetSiteQueryAtom: any = undefined;
/** Unresolved companion (missing-export:apps/call-sites-connector-app-tool.ts) */
const callSitesConnectorAppTool: any = undefined;
export type AppgenAnalyticsPageProps = Record<string, unknown>;
function AppgenAnalyticsHelper1(copper) {
  let {
      tabs,
      selectedKey,
      onSelect,
      className,
      scrollable = false,
      tabListRef,
      variant,
      ariaLabel,
      ariaLabelledBy,
    } = copper,
    gamma = onyx[variant === undefined ? "segmented" : variant],
    reef = scrollable && "hide-scrollbar overflow-x-auto overflow-y-hidden",
    amber = cx(gamma.listClassName, reef, className);
  let birch = scrollable ? AppgenAnalyticsHelper2 : undefined,
    cedar;
  {
    let delta;
    delta = (event, ember) => {
      let flint = event.key === selectedKey,
        grove = ember === 0,
        haven = ember === tabs.length - 1;
      return (
        <div
          key={event.key}
          className={cx(
            "relative flex min-w-0 items-center",
            gamma.itemClassName,
            event.onClose != null && "group/tab",
          )}
        >
          <button
            type="button"
            role="tab"
            aria-controls={event.panelId}
            aria-selected={flint}
            aria-pressed={flint}
            className={cx(
              "cursor-interaction items-center text-sm font-medium",
              flint ? "text-token-text-primary" : "text-token-text-secondary",
              gamma.tabButtonClassName,
              gamma.segmentedEdges && grove && "rounded-l-md",
              gamma.segmentedEdges && haven && "rounded-r-md",
              flint ? gamma.selectedClassName : gamma.unselectedClassName,
            )}
            onClick={() => {
              flint || onSelect(event.key);
            }}
          >
            {event.icon == null ? null : (
              <span
                aria-hidden="true"
                className="icon-xs flex shrink-0 items-center justify-center"
              >
                {event.icon}
              </span>
            )}
            {event.name}
          </button>
          {gamma.selectionIndicator === "underline" && flint ? (
            <div className="absolute inset-x-0 bottom-[-1px] h-px bg-token-text-primary" />
          ) : null}
          {event.onClose == null ? null : (
            <button
              type="button"
              aria-label={event.closeLabel}
              className={cx(
                "cursor-interaction text-token-text-tertiary hover:text-token-text-primary",
                gamma.closeButtonClassName,
              )}
              onClick={event.onClose}
            >
              {
                <CloseIcon
                  {...{
                    className: "icon-2xs",
                  }}
                />
              }
            </button>
          )}
          {gamma.segmentedEdges && !haven ? (
            <div className="h-full w-px self-stretch bg-token-border" />
          ) : null}
        </div>
      );
    };
    cedar = tabs.map(delta);
  }
  return (
    <div
      ref={tabListRef}
      role="tablist"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={amber}
      onWheel={birch}
    >
      {cedar}
    </div>
  );
}
function AppgenAnalyticsHelper2(event) {
  let ivory = event.deltaX || event.deltaY;
  ivory !== 0 &&
    (event.currentTarget.scrollLeft = event.currentTarget.scrollLeft + ivory);
}
var jade,
  kelp,
  onyx,
  lotus = esmInit(() => {
    jade = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureConversationPageEsm_Act_Init();
    onyx = {
      segmented: {
        closeButtonClassName: "px-1",
        itemClassName: "flex-1",
        listClassName:
          "bg-token-surface-secondary border-token-border flex items-center rounded-lg border",
        segmentedEdges: true,
        selectedClassName:
          "bg-token-radio-active-foreground/25 text-token-text-primary",
        selectionIndicator: null,
        tabButtonClassName: "relative flex-1 rounded-none px-4 py-1.5",
        unselectedClassName: "hover:bg-token-radio-active-foreground/5",
      },
      toolbar: {
        closeButtonClassName: "flex h-7 w-5 items-center justify-center",
        itemClassName: "shrink-0",
        listClassName: "flex min-w-0 items-center gap-0.5",
        segmentedEdges: false,
        selectedClassName: "bg-token-bg-primary text-token-text-primary",
        selectionIndicator: null,
        tabButtonClassName: "flex min-w-0 gap-1.5 rounded-md px-2 py-1",
        unselectedClassName: "hover:bg-token-bg-primary",
      },
      underline: {
        closeButtonClassName: "px-1",
        itemClassName: "shrink-0 pb-2",
        listClassName:
          "border-token-border flex min-w-0 items-start gap-8 border-b",
        segmentedEdges: false,
        selectedClassName: "text-token-text-primary",
        selectionIndicator: "underline",
        tabButtonClassName: "flex min-w-0 gap-1.5",
        unselectedClassName: "hover:text-token-text-primary",
      },
    };
  });
function AppgenAnalyticsHelper3(maple) {
  let { className, ariaLabel, data, series, xAxis } = maple,
    nova = useIntl(),
    olive = AppgenAnalyticsHelper6(data, series, xAxis, nova);
  let pearl = {
    axisLine: false,
    tickLine: false,
    width: 44,
  };
  let quartz = (
    <_chartWidgetStoresC
      {...{
        data,
        disableAnimation: true,
        height: "100%",
        series,
        showGrid: true,
        showLegend: false,
        showTooltipCursor: true,
        showTooltipMarkers: true,
        showYAxis: true,
        tooltipAnimationDuration: 0,
        width: "100%",
        xAxis,
        yAxis: pearl,
      }}
    />
  );
  return (
    <AppgenAnalyticsHelper4
      {...{
        className,
        accessibleRows: olive,
        ariaLabel,
        children: quartz,
      }}
    />
  );
}
function AppgenAnalyticsHelper4(raven) {
  let { accessibleRows, ariaLabel, children, className } = raven,
    sage = chartWidgetStoresR(),
    tide = usePreferredColorScheme(getAppearanceThemeMode()),
    umber = violet.useId(),
    willow = useIntl(),
    xenon = cx("min-w-0", className);
  let yarn = accessibleRows.length === 0 ? undefined : umber,
    zinc = willow.locale,
    apex = ChartWidgetStoresI(tide, sage);
  let bloom = (
    <div className={coral} data-theme={tide} dir="auto">
      {children}
    </div>
  );
  let drift = (
    <chartWidgetStoresW.Provider
      {...{
        value: apex,
        children: bloom,
      }}
    />
  );
  let echo = (
    <ChartWidgetStoresI
      {...{
        locale: zinc,
        children: drift,
      }}
    />
  );
  let fern = (
    <div
      className={xenon}
      aria-details={yarn}
      aria-label={ariaLabel}
      role="img"
    >
      {echo}
    </div>
  );
  let glade =
    accessibleRows.length === 0 ? null : (
      <ul id={umber} className="sr-only">
        {accessibleRows.map(AppgenAnalyticsHelper5)}
      </ul>
    );
  return (
    <>
      {fern}
      {glade}
    </>
  );
}
function AppgenAnalyticsHelper5(haze) {
  return <li key={haze}>{haze}</li>;
}
function AppgenAnalyticsHelper6(iris, jazz, kite, lane) {
  let mist = typeof kite == "string" ? kite : kite.dataKey;
  return iris
    .map((item) => {
      let nook = $e(item[mist]);
      if (nook == null) return null;
      let opal = jazz
        .map((_item) => {
          let pine = item[_item.dataKey];
          return typeof pine != "number" || !Number.isFinite(pine)
            ? null
            : `${_item.label ?? _item.dataKey} ${AppgenAnalyticsHelper7(pine, _item, lane)}`;
        })
        .filter((_item) => _item != null);
      return opal.length === 0 ? null : `${nook}: ${opal.join(", ")}`;
    })
    .filter((item) => item != null);
}
function $e(quill) {
  if (typeof quill == "string") {
    let ridge = quill.trim();
    return ridge.length === 0 ? null : ridge;
  }
  return typeof quill == "number" || typeof quill == "boolean"
    ? String(quill)
    : null;
}
function AppgenAnalyticsHelper7(silk, talon, ultra) {
  let vale = AppgenAnalyticsHelper8(silk, talon.valueFormat, ultra);
  return `${talon.valuePrefix ?? ""}${vale}${talon.valueSuffix ?? ""}`;
}
function AppgenAnalyticsHelper8(wave, yarn2, zephyr) {
  switch (yarn2) {
    case "integer":
      return zephyr.formatNumber(wave, {
        maximumFractionDigits: 0,
      });
    case "raw":
      return String(wave);
    case "compact":
    case undefined:
      return zephyr.formatNumber(wave, {
        compactDisplay: "short",
        maximumFractionDigits: 1,
        notation: "compact",
      });
  }
}
var atlas,
  violet,
  brine,
  coral,
  at = esmInit(() => {
    atlas = reactCompilerRuntime();
    _chartWidgetStoresS();
    chartWidgetStoresO();
    chartWidgetStoresA();
    ensureComposerEsm_Tft_Init();
    violet = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    chartWidgetStoresN();
    ensureComposerEsm__U_Init();
    coral = cx(
      "h-full w-full",
      "[--alpha-05:rgba(127,127,127,0.08)]",
      "[--alpha-10:rgba(127,127,127,0.16)]",
      "[--color-border:var(--color-token-border-light)]",
      "[--color-ring:var(--color-token-focus-border)]",
      "[--color-surface-elevated:var(--color-token-main-surface-primary)]",
      "[--color-surface-tertiary:var(--color-token-bg-secondary)]",
      "[--color-surface:var(--color-token-main-surface-primary)]",
      "[--color-text-prose:var(--color-token-text-primary)]",
      "[--color-text-secondary:var(--color-token-text-secondary)]",
      "[--color-text:var(--color-token-text-primary)]",
      "[--font-heading-xs-line-height:1.25rem]",
      "[--font-heading-xs-size:0.875rem]",
      "[--font-text-lg-line-height:1.75rem]",
      "[--font-text-lg-size:1.125rem]",
      "[--font-text-md-line-height:1.5rem]",
      "[--font-text-md-size:1rem]",
      "[--font-text-sm-line-height:1.125rem]",
      "[--font-text-sm-size:0.875rem]",
      "[--font-text-xs-line-height:1rem]",
      "[--font-text-xs-size:0.75rem]",
      "[--font-weight-normal:400]",
      "[--radius-full:9999px]",
      "[--radius-md:0.5rem]",
      "[--radius-sm:0.375rem]",
      "[--shadow-hairline:0_0_0_1px_var(--color-token-border-light)]",
      "[--shadow:none]",
      "[--text-tracking:0em]",
    );
  });
function AppgenAnalyticsHelper9(crest, dusk, eddy = Date.now()) {
  let fjord = AppgenAnalyticsHelper10(crest, dusk),
    gust = Math.floor((eddy - helm) / ink) * ink + helm;
  return {
    endTimeMs: fjord === "daily" ? gust + ink : Math.ceil(eddy / jewel) * jewel,
    interval: fjord,
    startTimeMs: gust - (knoll[crest] - 1) * ink,
  };
}
function AppgenAnalyticsHelper10(lagoon, meadow) {
  switch (meadow) {
    case "auto":
      return lagoon === "7d" ? "hourly" : "daily";
    case "hourly":
    case "daily":
      return meadow;
  }
}
var jewel,
  ink,
  helm,
  knoll,
  nimbus,
  orbit,
  plume,
  quill2,
  ripple,
  shard,
  thorn,
  umbra,
  _t,
  vista,
  wisp = esmInit(() => {
    ensureZodRuntime();
    jewel = 3600000;
    ink = 24 * jewel;
    helm = 8 * jewel;
    knoll = {
      "7d": 7,
      "30d": 30,
    };
    nimbus = zodObject({
      start_time_ms: zodNumber().int().nonnegative(),
      end_time_ms: zodNumber().int().nonnegative(),
      granularity: zodEnum(["1h", "1d"]),
    });
    orbit = zodObject({
      project_id: ensureZodRuntime(),
      window: nimbus,
      overall: zodObject({
        page_views: zodObject({
          value: zodNumber().nonnegative(),
        }),
        unique_visitors: zodObject({
          value: zodNumber().nonnegative(),
        }),
      }),
      timeseries: zodObject({
        points: zodArray(
          zodObject({
            timestamp_ms: zodNumber().int().nonnegative(),
            page_views: zodNumber().nonnegative(),
            unique_visitors: zodNumber().nonnegative(),
          }),
        ),
      }),
      top_pages: zodArray(
        zodObject({
          path: ensureZodRuntime().min(1),
          page_views: zodNumber().nonnegative(),
          unique_visitors: zodNumber().nonnegative(),
        }),
      ),
    });
    plume = zodObject({
      project_id: ensureZodRuntime(),
      event_names: zodArray(ensureZodRuntime().min(1).max(64)),
    });
    quill2 = zodObject({
      project_id: ensureZodRuntime(),
      event_name: ensureZodRuntime().min(1).max(64),
      window: nimbus.extend({
        granularity: zodLiteral("1d"),
      }),
      overall: zodObject({
        occurrences: zodObject({
          value: zodNumber().nonnegative(),
        }),
        unique_visitors: zodObject({
          value: zodNumber().nonnegative(),
        }),
      }),
      timeseries: zodObject({
        points: zodArray(
          zodObject({
            timestamp_ms: zodNumber().int().nonnegative(),
            occurrences: zodNumber().nonnegative(),
          }),
        ),
      }),
    });
    ripple = ["7d", "30d"];
    shard = ["auto", "hourly", "daily"];
    thorn = "Etc/GMT+8";
    umbra = orbit.transform((yonder) => ({
      endTimeMs: yonder.window.end_time_ms,
      interval: yonder.window.granularity === "1h" ? "hourly" : "daily",
      projectId: yonder.project_id,
      startTimeMs: yonder.window.start_time_ms,
      summary: {
        pageViews: yonder.overall.page_views.value,
        uniqueVisitors: yonder.overall.unique_visitors.value,
      },
      topPages: yonder.top_pages.map(
        ({ page_views, path, unique_visitors }) => ({
          pageViews: page_views,
          path,
          uniqueVisitors: unique_visitors,
        }),
      ),
      traffic: yonder.timeseries.points.map(
        ({ page_views, timestamp_ms, unique_visitors }) => ({
          pageViews: page_views,
          timestampMs: timestamp_ms,
          uniqueVisitors: unique_visitors,
        }),
      ),
    }));
    _t = plume.transform((zeal) => ({
      eventNames: zeal.event_names,
      projectId: zeal.project_id,
    }));
    vista = quill2.transform((anvil) => ({
      endTimeMs: anvil.window.end_time_ms,
      eventName: anvil.event_name,
      interval: "daily",
      occurrences: anvil.timeseries.points.map(
        ({ occurrences, timestamp_ms }) => ({
          count: occurrences,
          timestampMs: timestamp_ms,
        }),
      ),
      projectId: anvil.project_id,
      startTimeMs: anvil.window.start_time_ms,
      totalOccurrences: anvil.overall.occurrences.value,
      uniqueVisitors: anvil.overall.unique_visitors.value,
    }));
  });
function AppgenAnalyticsHelper11({ granularity, projectId, range }) {
  return [
    ...basalt,
    projectId,
    range,
    AppgenAnalyticsHelper10(range, granularity),
  ];
}
function AppgenAnalyticsHelper12(cinder) {
  return [...dune, cinder];
}
function AppgenAnalyticsHelper13({ eventName, projectId, range }) {
  return [...ember2, projectId, eventName, range];
}
var basalt,
  dune,
  ember2,
  forge,
  granite,
  harbor,
  inlet = esmInit(() => {
    ensureAppScopeHostInit();
    ensureZodRuntime();
    ensureAppScopeInit();
    ensureComposerEsm_pdt_Init();
    AppInitialT5();
    wisp();
    basalt = ["appgen", "analytics", "overview"];
    dune = ["appgen", "analytics", "events"];
    ember2 = ["appgen", "analytics", "event"];
    forge = createAppScopeSelectAtom(appScopeAtom, (jasper) => ({
      queryKey: AppgenAnalyticsHelper11(jasper),
      queryFn: async () => {
        let { endTimeMs, interval, startTimeMs } = AppgenAnalyticsHelper9(
          jasper.range,
          jasper.granularity,
        );
        return umbra.parse(
          await callSitesConnectorAppTool(
            "sites_get_site_analytics_overview",
            {
              project_id: jasper.projectId,
              start_time_ms: startTimeMs,
              end_time_ms: endTimeMs,
              granularity: interval === "hourly" ? "1h" : "1d",
            },
            zodUnknown(),
          ),
        );
      },
      retry: false,
      staleTime: QueryStaleTimes.FIVE_MINUTES,
    }));
    granite = createAppScopeSelectAtom(appScopeAtom, (keel) => ({
      queryKey: AppgenAnalyticsHelper12(keel),
      queryFn: async () => {
        let { endTimeMs, startTimeMs } = AppgenAnalyticsHelper9("30d", "daily");
        return _t.parse(
          await callSitesConnectorAppTool(
            "sites_list_site_analytics_events",
            {
              project_id: keel,
              start_time_ms: startTimeMs,
              end_time_ms: endTimeMs,
            },
            zodUnknown(),
          ),
        );
      },
      retry: false,
      staleTime: QueryStaleTimes.FIVE_MINUTES,
    }));
    harbor = createAppScopeSelectAtom(appScopeAtom, (ledge) => ({
      queryKey: AppgenAnalyticsHelper13(ledge),
      queryFn: async () => {
        let { endTimeMs, startTimeMs } = AppgenAnalyticsHelper9(
          ledge.range,
          "daily",
        );
        return vista.parse(
          await callSitesConnectorAppTool(
            "sites_query_site_analytics_event",
            {
              project_id: ledge.projectId,
              event_name: ledge.eventName,
              start_time_ms: startTimeMs,
              end_time_ms: endTimeMs,
            },
            zodUnknown(),
          ),
        );
      },
      retry: false,
      staleTime: QueryStaleTimes.FIVE_MINUTES,
    }));
  });
function AppgenAnalyticsHelper14(mesa) {
  let { children } = mesa;
  return (
    <section className="flex min-w-0 flex-col gap-4 rounded-xl border border-token-border bg-token-bg-fog p-4">
      {children}
    </section>
  );
}
function AppgenAnalyticsHelper15(notch) {
  let { detail, title, trailing } = notch,
    oak = (
      <h3 className="text-sm font-medium text-token-text-primary">{title}</h3>
    );
  let prairie =
    detail == null ? null : (
      <div className="text-xs text-token-text-tertiary">{detail}</div>
    );
  let quarry = (
    <div className="flex flex-col gap-0.5">
      {oak}
      {prairie}
    </div>
  );
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      {quarry}
      {trailing}
    </div>
  );
}
function AppgenAnalyticsHelper16(reef2) {
  let { label, value } = reef2,
    spire = (
      <div className="truncate text-xs text-token-text-secondary">{label}</div>
    );
  let terrace = (
    <div className="truncate text-xl leading-7 font-medium text-token-text-primary">
      {value}
    </div>
  );
  return (
    <div className="flex min-w-0 flex-col gap-2 rounded-xl border border-token-border bg-token-bg-fog p-4">
      {spire}
      {terrace}
    </div>
  );
}
function AppgenAnalyticsHelper17(upland) {
  let { children, className, label } = upland,
    verge = cx("flex flex-col gap-1", className);
  let warren = (
    <span className="text-xs text-token-text-secondary">{label}</span>
  );
  return (
    <div className={verge}>
      {warren}
      {children}
    </div>
  );
}
function AppgenAnalyticsHelper18(xeric) {
  let { ariaLabel, children, label } = xeric,
    yarrow = <span className="truncate">{label}</span>;
  let zonal = (
    <DropdownTriggerButton
      className="!w-auto max-w-full min-w-32"
      aria-label={ariaLabel}
      color="outline"
    >
      {yarrow}
    </DropdownTriggerButton>
  );
  return (
    <DropdownMenuPopover
      {...{
        align: "end",
        contentWidth: "sm",
        triggerButton: zonal,
        children,
      }}
    />
  );
}
