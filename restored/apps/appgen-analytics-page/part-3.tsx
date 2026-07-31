// Restored from ref/webview/assets/page-D9xkFXMg.js
// Strict QG split (no --allow-flat): Wave5d-style careful split into parts; public API exported; cross-part refs soft-stubbed; bind in runtime-bridges.
// Stage 3 deep fill from `page-D9xkFXMg/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 10 (verified 71/81).
// JSX calls converted: 116; mechanical renames: 324.

// Wave5d careful split 3/4
/* split-lane-import-depth:1 */

import type { ReactNode } from "react";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { AppShellLayout } from "../../app-shell/app-shell-layout";
import { ensureChatgptSiteSuffixesInit } from "../../appgen/chatgpt-site-suffixes";
import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
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
} from "../../conversation/conversation-page-esm-inits";
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

// Cross-part soft stubs (defined in sibling parts).
const AppInitialTL: any = undefined;
const at: any = undefined;
const forge: any = undefined;
const inlet: any = undefined;
const quay: any = undefined;
const shard: any = undefined;
const thorn: any = undefined;
const wisp: any = undefined;
const AppgenAnalyticsHelper14: any = undefined;
const AppgenAnalyticsHelper15: any = undefined;
const AppgenAnalyticsHelper16: any = undefined;
const AppgenAnalyticsHelper17: any = undefined;
const AppgenAnalyticsHelper18: any = undefined;
const AppgenAnalyticsHelper19: any = undefined;
const AppgenAnalyticsHelper20: any = undefined;
const AppgenAnalyticsHelper21: any = undefined;
const AppgenAnalyticsHelper3: any = undefined;

var nickel,
  frame,
  copper2,
  sodium,
  silver = esmInit(() => {
    nickel = reactCompilerRuntime();
    ensureAppScopeHostInit();
    frame = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    Button();
    ensureDropdownMenuInit();
    ensureComposerEsm_Sut_Init();
    ensureDropdownMenuPopoverInit();
    AppInitialTL();
    at();
    wisp();
    inlet();
    quay();
    sodium = "var(--color-token-charts-green)";
  });
function AppgenAnalyticsHelper29(gold) {
  let { projectId } = gold,
    lead = useIntl(),
    [tin, zinc2] = chrome.useState("30d"),
    [titan, vanadium] = chrome.useState("auto"),
    manganese = {
      granularity: titan,
      projectId,
      range: tin,
    };
  let { data, isError, refetch } = useAppScopeAtomValue(forge, manganese),
    scandium = lead.formatMessage({
      id: "appgenAnalytics.navigation.overview",
      defaultMessage: "Overview",
      description: "Tab label for the site analytics overview",
    });
  let yttrium = (
    <h2 className="text-base font-medium text-token-text-primary">
      {
        <MemoizedFormattedMessage
          {...{
            id: "appgenAnalytics.overview.title",
            defaultMessage: "Site performance",
            description: "Heading for the site analytics overview",
          }}
        />
      }
    </h2>
  );
  let niobium =
    data == null ? null : (
      <div className="text-xs text-token-text-tertiary">
        {
          <AppgenAnalyticsHelper21
            {...{
              endTimeMs: data.endTimeMs,
              startTimeMs: data.startTimeMs,
            }}
          />
        }
      </div>
    );
  let moly = (
    <div className="flex flex-col gap-1">
      {yttrium}
      {niobium}
    </div>
  );
  let techne = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenAnalytics.controls.dateRange",
        defaultMessage: "Date range",
        description: "Label for the analytics date range control",
      }}
    />
  );
  let ruthenium = (
    <AppgenAnalyticsHelper17
      {...{
        label: techne,
        children: (
          <AppgenAnalyticsHelper19
            {...{
              range: tin,
              onChange: zinc2,
            }}
          />
        ),
      }}
    />
  );
  let rhodium = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenAnalytics.controls.granularity",
        defaultMessage: "Granularity",
        description: "Label for the analytics chart granularity control",
      }}
    />
  );
  let palladium = (
    <AppgenAnalyticsHelper17
      {...{
        label: rhodium,
        children: (
          <AppgenAnalyticsHelper31
            {...{
              granularity: titan,
              granularities: shard,
              onChange: vanadium,
            }}
          />
        ),
      }}
    />
  );
  let cadmium = (
    <div className="flex flex-wrap items-end gap-2">
      {ruthenium}
      {palladium}
    </div>
  );
  let indium = (
    <div className="flex flex-wrap items-end justify-between gap-4">
      {moly}
      {cadmium}
    </div>
  );
  let antimony =
    data == null ? (
      <div className="flex min-h-72 items-center justify-center">
        {isError ? (
          <div className="flex items-center gap-3 text-sm text-token-text-secondary">
            {
              <MemoizedFormattedMessage
                {...{
                  id: "appgenAnalytics.overview.error",
                  defaultMessage: "Unable to load analytics",
                  description:
                    "Error shown when the site analytics overview cannot load",
                }}
              />
            }
            {
              <Button
                {...{
                  color: "secondary",
                  size: "toolbar",
                  onClick: () => {
                    refetch();
                  },
                  children: (
                    <MemoizedFormattedMessage
                      {...{
                        id: "appgenAnalytics.overview.retry",
                        defaultMessage: "Retry",
                        description:
                          "Button label to retry loading the site analytics overview",
                      }}
                    />
                  ),
                }}
              />
            }
          </div>
        ) : (
          <Spinner {...{}} />
        )}
      </div>
    ) : (
      <AppgenAnalyticsHelper30
        {...{
          overview: data,
        }}
      />
    );
  return (
    <div
      id="appgen-analytics-overview"
      className="flex flex-col gap-6"
      aria-label={scandium}
      role="tabpanel"
    >
      {indium}
      {antimony}
    </div>
  );
}
function AppgenAnalyticsHelper30(tellurium) {
  let { overview } = tellurium,
    iodine = useIntl(),
    cesium = (
      <MemoizedFormattedMessage
        {...{
          id: "appgenAnalytics.metric.uniqueVisitors",
          defaultMessage: "Unique visitors",
          description: "Site analytics metric label for unique visitors",
        }}
      />
    );
  let barium = iodine.formatNumber(overview.summary.uniqueVisitors, {
    maximumFractionDigits: 0,
  });
  let lanthan = (
    <AppgenAnalyticsHelper16
      {...{
        label: cesium,
        value: barium,
      }}
    />
  );
  let cerium = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenAnalytics.metric.pageViews",
        defaultMessage: "Page views",
        description: "Site analytics metric label for page views",
      }}
    />
  );
  let praseo = iodine.formatNumber(overview.summary.pageViews, {
    maximumFractionDigits: 0,
  });
  let neodym = (
    <AppgenAnalyticsHelper16
      {...{
        label: cerium,
        value: praseo,
      }}
    />
  );
  let prometh = (
    <div className="grid grid-cols-2 gap-3">
      {lanthan}
      {neodym}
    </div>
  );
  let samarium = (
    <AppgenAnalyticsHelper33
      {...{
        overview,
      }}
    />
  );
  let europium = (
    <AppgenAnalyticsHelper35
      {...{
        pages: overview.topPages,
      }}
    />
  );
  return (
    <>
      {prometh}
      {samarium}
      {europium}
    </>
  );
}
function AppgenAnalyticsHelper31(gadolin) {
  let { granularity, granularities, onChange } = gadolin,
    terbium = useIntl(),
    dyspros = terbium.formatMessage(
      {
        id: "appgenAnalytics.controls.granularityLabel",
        defaultMessage: "Granularity: {granularity}",
        description:
          "Accessible label for the analytics granularity dropdown and its current value",
      },
      {
        granularity: terbium.formatMessage(holmium[granularity]),
      },
    );
  let erbium = (
    <AppgenAnalyticsHelper32
      {...{
        granularity,
      }}
    />
  );
  let thulium;
  {
    let ytterb;
    ytterb = (lutetium) => (
      <DropdownMenu.Item
        key={lutetium}
        {...{
          "aria-current": lutetium === granularity ? "true" : undefined,
          RightIcon: lutetium === granularity ? AppIconZlt : undefined,
          onSelect: () => {
            onChange(lutetium);
          },
          children: (
            <AppgenAnalyticsHelper32
              {...{
                granularity: lutetium,
              }}
            />
          ),
        }}
      />
    );
    thulium = granularities.map(ytterb);
  }
  return (
    <AppgenAnalyticsHelper18
      {...{
        ariaLabel: dyspros,
        label: erbium,
        children: thulium,
      }}
    />
  );
}
function AppgenAnalyticsHelper32(hafnium) {
  let { granularity } = hafnium,
    tantalum = holmium[granularity];
  return (
    <MemoizedFormattedMessage
      {...{
        ...tantalum,
      }}
    />
  );
}
function AppgenAnalyticsHelper33(tungsten) {
  let { overview } = tungsten,
    rhenium = useIntl(),
    osmium = (
      <MemoizedFormattedMessage
        {...{
          id: "appgenAnalytics.traffic.title",
          defaultMessage: "Traffic",
          description: "Heading for the site traffic chart",
        }}
      />
    );
  let iridium = (
    <AppgenAnalyticsHelper20
      key={"interval"}
      {...{
        interval: overview.interval,
      }}
    />
  );
  let platinum = (
    <AppgenAnalyticsHelper21
      key={"range"}
      {...{
        endTimeMs: overview.endTimeMs,
        startTimeMs: overview.startTimeMs,
      }}
    />
  );
  let mercury = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenAnalytics.traffic.detail",
        defaultMessage: "{interval} · {range}",
        description: "Traffic chart interval and date range",
        values: {
          interval: iridium,
          range: platinum,
        },
      }}
    />
  );
  let thallium = {
    color: bismuth.uniqueVisitors,
    key: "uniqueVisitors",
    label: (
      <MemoizedFormattedMessage
        {...{
          id: "appgenAnalytics.traffic.uniqueVisitors",
          defaultMessage: "Unique visitors",
          description: "Legend label for unique visitors in the traffic chart",
        }}
      />
    ),
  };
  let polonium = (
    <AppgenAnalyticsHelper34
      {...{
        items: [
          thallium,
          {
            color: bismuth.pageViews,
            key: "pageViews",
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "appgenAnalytics.traffic.pageViews",
                  defaultMessage: "Page views",
                  description:
                    "Legend label for page views in the traffic chart",
                }}
              />
            ),
          },
        ],
      }}
    />
  );
  let astatine = (
    <AppgenAnalyticsHelper15
      {...{
        title: osmium,
        detail: mercury,
        trailing: polonium,
      }}
    />
  );
  let francium =
    overview.summary.pageViews === 0 &&
    overview.summary.uniqueVisitors === 0 ? (
      <div className="flex h-72 items-center justify-center text-sm text-token-text-tertiary">
        {
          <MemoizedFormattedMessage
            {...{
              id: "appgenAnalytics.traffic.empty",
              defaultMessage: "No traffic in this period",
              description: "Empty state for the site traffic chart",
            }}
          />
        }
      </div>
    ) : (
      <AppgenAnalyticsHelper3
        {...{
          className: "h-72",
          ariaLabel: rhenium.formatMessage({
            id: "appgenAnalytics.traffic.chartLabel",
            defaultMessage: "Unique visitors and page views over time",
            description: "Accessible label for the site traffic chart",
          }),
          data: overview.traffic.map((item) => {
            let { pageViews, timestampMs, uniqueVisitors } = item;
            return {
              label:
                overview.interval === "hourly"
                  ? rhenium.formatDate(timestampMs, {
                      day: "numeric",
                      hour: "numeric",
                      month: "short",
                      timeZone: thorn,
                    })
                  : rhenium.formatDate(timestampMs, {
                      day: "numeric",
                      month: "short",
                      timeZone: thorn,
                    }),
              pageViews,
              uniqueVisitors,
            };
          }),
          series: [
            {
              color: bismuth.uniqueVisitors,
              curveType: "monotone",
              dataKey: "uniqueVisitors",
              fillColor: bismuth.uniqueVisitors,
              label: rhenium.formatMessage({
                id: "appgenAnalytics.traffic.uniqueVisitors",
                defaultMessage: "Unique visitors",
                description:
                  "Legend label for unique visitors in the traffic chart",
              }),
              type: "area",
              valueFormat: "integer",
            },
            {
              color: bismuth.pageViews,
              curveType: "monotone",
              dataKey: "pageViews",
              label: rhenium.formatMessage({
                id: "appgenAnalytics.traffic.pageViews",
                defaultMessage: "Page views",
                description: "Legend label for page views in the traffic chart",
              }),
              type: "line",
              valueFormat: "integer",
            },
          ],
          xAxis: {
            axisLine: false,
            dataKey: "label",
            tickMargin: 8,
          },
        }}
      />
    );
  return (
    <AppgenAnalyticsHelper14
      {...{
        children: [astatine, francium],
      }}
    />
  );
}
function AppgenAnalyticsHelper34(radium) {
  let { items } = radium,
    actinium = items.map($t);
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-token-text-secondary">
      {actinium}
    </div>
  );
}
function $t(event) {
  return (
    <div key={event.key} className="flex items-center gap-1.5">
      <span
        className="size-2 rounded-full"
        aria-hidden={true}
        style={{
          backgroundColor: event.color,
        }}
      />
      {event.label}
    </div>
  );
}
function AppgenAnalyticsHelper35(thorium) {
  let { pages } = thorium,
    protact = useIntl(),
    uranium = (
      <AppgenAnalyticsHelper15
        {...{
          title: (
            <MemoizedFormattedMessage
              {...{
                id: "appgenAnalytics.topPages.title",
                defaultMessage: "Top pages",
                description: "Heading for the most visited site pages",
              }}
            />
          ),
        }}
      />
    );
  let neptun = (
    <th className="py-2 pr-4 font-normal">
      {
        <MemoizedFormattedMessage
          {...{
            id: "appgenAnalytics.topPages.page",
            defaultMessage: "Page",
            description: "Table column heading for a site page path",
          }}
        />
      }
    </th>
  );
  let pluton = (
    <th className="px-4 py-2 text-right font-normal">
      {
        <MemoizedFormattedMessage
          {...{
            id: "appgenAnalytics.metric.pageViews",
            defaultMessage: "Page views",
            description: "Site analytics metric label for page views",
          }}
        />
      }
    </th>
  );
  let americ = (
    <thead className="text-token-text-tertiary">
      <tr className="border-b border-token-border-light">
        {neptun}
        {pluton}
        <th className="py-2 pl-4 text-right font-normal">
          {
            <MemoizedFormattedMessage
              {...{
                id: "appgenAnalytics.metric.uniqueVisitors",
                defaultMessage: "Unique visitors",
                description: "Site analytics metric label for unique visitors",
              }}
            />
          }
        </th>
      </tr>
    </thead>
  );
  let curium =
    pages.length === 0 ? (
      <tr>
        <td className="py-6 text-center text-token-text-tertiary" colSpan={3}>
          {
            <MemoizedFormattedMessage
              {...{
                id: "appgenAnalytics.topPages.empty",
                defaultMessage: "No page views in this period",
                description: "Empty state for the top pages analytics table",
              }}
            />
          }
        </td>
      </tr>
    ) : (
      pages.map((item) => (
        <tr
          key={item.path}
          className="border-b border-token-border-light last:border-b-0"
        >
          <td className="max-w-0 truncate py-3 pr-4 font-mono text-token-text-primary">
            {item.path}
          </td>
          <td className="px-4 py-3 text-right text-token-text-secondary">
            {protact.formatNumber(item.pageViews, {
              maximumFractionDigits: 0,
            })}
          </td>
          <td className="py-3 pl-4 text-right text-token-text-secondary">
            {protact.formatNumber(item.uniqueVisitors, {
              maximumFractionDigits: 0,
            })}
          </td>
        </tr>
      ))
    );
  return (
    <AppgenAnalyticsHelper14
      {...{
        children: [
          uranium,
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-xs">
              {americ}
              <tbody>{curium}</tbody>
            </table>
          </div>,
        ],
      }}
    />
  );
}
var berkel,
  chrome,
  californ,
  bismuth,
  holmium,
  einstein = esmInit(() => {
    berkel = reactCompilerRuntime();
    ensureAppScopeHostInit();
    chrome = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    Button();
    ensureDropdownMenuInit();
    ensureComposerEsm_Sut_Init();
    ensureDropdownMenuPopoverInit();
    at();
    wisp();
    inlet();
    quay();
    bismuth = {
      pageViews: "var(--color-token-charts-purple)",
      uniqueVisitors: "var(--color-token-charts-blue)",
    };
    holmium = identity({
      auto: {
        id: "appgenAnalytics.granularity.auto",
        defaultMessage: "Auto",
        description: "Automatic analytics chart granularity option",
      },
      daily: {
        id: "appgenAnalytics.granularity.daily",
        defaultMessage: "Daily",
        description: "Daily analytics chart granularity option",
      },
      hourly: {
        id: "appgenAnalytics.granularity.hourly",
        defaultMessage: "Hourly",
        description: "Hourly analytics chart granularity option",
      },
    });
  });
