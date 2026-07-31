// Restored from ref/webview/assets/page-D9xkFXMg.js
// Strict QG split (no --allow-flat): Wave5d-style careful split into parts; public API exported; cross-part refs soft-stubbed; bind in runtime-bridges.
// Stage 3 deep fill from `page-D9xkFXMg/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 10 (verified 71/81).
// JSX calls converted: 116; mechanical renames: 324.

// Wave5d careful split 2/4
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
const frame: any = undefined;
const granite: any = undefined;
const harbor: any = undefined;
const ripple: any = undefined;
const sodium: any = undefined;
const thorn: any = undefined;
const wisp: any = undefined;
const AppgenAnalyticsHelper14: any = undefined;
const AppgenAnalyticsHelper15: any = undefined;
const AppgenAnalyticsHelper16: any = undefined;
const AppgenAnalyticsHelper17: any = undefined;
const AppgenAnalyticsHelper18: any = undefined;
const AppgenAnalyticsHelper3: any = undefined;

function AppgenAnalyticsHelper19(alpine) {
  let { onChange, range } = alpine,
    brook = useIntl(),
    canyon = brook.formatMessage(
      {
        id: "appgenAnalytics.controls.dateRangeLabel",
        defaultMessage: "Date range: {range}",
        description:
          "Accessible label for the analytics date range dropdown and its current value",
      },
      {
        range: brook.formatMessage(dale[range]),
      },
    );
  let estuary = (
    <AppgenAnalyticsHelper22
      {...{
        range,
      }}
    />
  );
  let firth = ripple.map((item) => (
    <DropdownMenu.Item
      key={item}
      {...{
        "aria-current": item === range ? "true" : undefined,
        RightIcon: item === range ? AppIconZlt : undefined,
        onSelect: () => {
          onChange(item);
        },
        children: (
          <AppgenAnalyticsHelper22
            {...{
              range: item,
            }}
          />
        ),
      }}
    />
  ));
  return (
    <AppgenAnalyticsHelper18
      {...{
        ariaLabel: canyon,
        label: estuary,
        children: firth,
      }}
    />
  );
}
function AppgenAnalyticsHelper20(glen) {
  let { interval } = glen;
  switch (interval) {
    case "hourly": {
      let heath;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "appgenAnalytics.interval.hourly",
            defaultMessage: "Hourly",
            description: "Label for analytics values grouped by hour",
          }}
        />
      );
    }
    case "daily": {
      let isle;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "appgenAnalytics.interval.daily",
            defaultMessage: "Daily",
            description: "Label for analytics values grouped by day",
          }}
        />
      );
    }
  }
}
function AppgenAnalyticsHelper21(jetty) {
  let { endTimeMs, startTimeMs } = jetty,
    karst = useIntl(),
    loch = karst.formatDateTimeRange(startTimeMs, endTimeMs - 1, {
      dateStyle: "medium",
      timeZone: thorn,
    });
  return <>{loch}</>;
}
function AppgenAnalyticsHelper22(marsh) {
  let { range } = marsh,
    needle = dale[range];
  return (
    <MemoizedFormattedMessage
      {...{
        ...needle,
      }}
    />
  );
}
var oxbow,
  pass,
  dale,
  quay = esmInit(() => {
    oxbow = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    ensureDropdownMenuPopoverInit();
    ensureSettingsSectionTitleInit();
    wisp();
    dale = identity({
      "7d": {
        id: "appgenAnalytics.range.sevenDays",
        defaultMessage: "Last 7 days",
        description: "Analytics date range option for the last seven days",
      },
      "30d": {
        id: "appgenAnalytics.range.thirtyDays",
        defaultMessage: "Last 30 days",
        description: "Analytics date range option for the last thirty days",
      },
    });
  });
function AppgenAnalyticsHelper23(ravine) {
  let { projectId } = ravine,
    summit = useIntl(),
    { data, isError, refetch } = useAppScopeAtomValue(granite, projectId),
    tundra = data?.eventNames[0],
    updraft;
  if (data == null) {
    let valley;
    valley = isError ? (
      <AppgenAnalyticsHelper28
        {...{
          onRetry: () => {
            refetch();
          },
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "appgenAnalytics.events.catalogError",
                defaultMessage: "Unable to load custom events",
                description:
                  "Error shown when the custom event catalog cannot load",
              }}
            />
          ),
        }}
      />
    ) : (
      <AppgenAnalyticsHelper27 {...{}} />
    );
    updraft = valley;
  } else if (tundra == null) {
    let woodland = (
      <h3 className="text-sm font-medium text-token-text-primary">
        {
          <MemoizedFormattedMessage
            {...{
              id: "appgenAnalytics.events.emptyTitle",
              defaultMessage: "No custom events yet",
              description: "Title shown when a site has no custom events",
            }}
          />
        }
      </h3>
    );
    let xylose;
    xylose = (
      <div className="flex min-h-72 flex-col items-center justify-center gap-1 text-center">
        {woodland}
        <p className="text-sm text-token-text-secondary">
          {
            <MemoizedFormattedMessage
              {...{
                id: "appgenAnalytics.events.emptyDescription",
                defaultMessage: "Events logged by this site will appear here",
                description:
                  "Description shown when a site has no custom events",
              }}
            />
          }
        </p>
      </div>
    );
    updraft = xylose;
  } else {
    let yard;
    yard = (
      <AppgenAnalyticsHelper24
        key={projectId}
        {...{
          eventNames: data.eventNames,
          initialEventName: tundra,
          projectId,
        }}
      />
    );
    updraft = yard;
  }
  let zenith = summit.formatMessage({
    id: "appgenAnalytics.navigation.events",
    defaultMessage: "Events",
    description: "Tab label for custom event analytics",
  });
  let anchor = (
    <h2 className="text-base font-medium text-token-text-primary">
      {
        <MemoizedFormattedMessage
          {...{
            id: "appgenAnalytics.events.title",
            defaultMessage: "Custom events",
            description: "Heading for the custom events analytics screen",
          }}
        />
      }
    </h2>
  );
  let beacon = (
    <div className="flex flex-col gap-1">
      {anchor}
      <p className="max-w-2xl text-sm text-token-text-secondary">
        {
          <MemoizedFormattedMessage
            {...{
              id: "appgenAnalytics.events.description",
              defaultMessage:
                "Query events logged by your site and inspect their count over time",
              description: "Description of the custom events analytics screen",
            }}
          />
        }
      </p>
    </div>
  );
  return (
    <div
      id="appgen-analytics-events"
      className="flex flex-col gap-6"
      aria-label={zenith}
      role="tabpanel"
    >
      {beacon}
      {updraft}
    </div>
  );
}
function AppgenAnalyticsHelper24(compass) {
  let { eventNames, initialEventName, projectId } = compass,
    [datum, engine] = frame.useState(initialEventName),
    [gauge, hinge] = frame.useState("30d"),
    [index, joint] = frame.useState(initialEventName),
    [kernel, lever] = frame.useState("30d"),
    module = {
      eventName: index,
      projectId,
      range: kernel,
    };
  let {
      data,
      isError: node,
      isFetching,
      refetch,
    } = useAppScopeAtomValue(harbor, module),
    offset;
  if (data != null) {
    let pivot;
    pivot = (
      <AppgenAnalyticsHelper26
        {...{
          event: data,
        }}
      />
    );
    offset = pivot;
  } else if (node) {
    let relay = () => {
      refetch();
    };
    let signal = (
      <MemoizedFormattedMessage
        {...{
          id: "appgenAnalytics.events.queryError",
          defaultMessage: "Unable to query this event",
          description: "Error shown when a custom event aggregate query fails",
        }}
      />
    );
    let unit;
    unit = (
      <AppgenAnalyticsHelper28
        {...{
          onRetry: relay,
          children: signal,
        }}
      />
    );
    offset = unit;
  } else {
    let vector;
    vector = <AppgenAnalyticsHelper27 {...{}} />;
    offset = vector;
  }
  let widget = (event) => {
    if ((event.preventDefault(), datum === index && gauge === kernel)) {
      refetch();
      return;
    }
    joint(datum);
    lever(gauge);
  };
  let yield = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenAnalytics.events.eventControl",
        defaultMessage: "Event",
        description: "Label for selecting a custom event to query",
      }}
    />
  );
  let zone = (
    <AppgenAnalyticsHelper17
      {...{
        className: "min-w-[240px] flex-1",
        label: yield,
        children: (
          <AppgenAnalyticsHelper25
            {...{
              eventName: datum,
              eventNames,
              onChange: engine,
            }}
          />
        ),
      }}
    />
  );
  let bravo = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenAnalytics.controls.dateRange",
        defaultMessage: "Date range",
        description: "Label for the analytics date range control",
      }}
    />
  );
  let charlie = (
    <AppgenAnalyticsHelper17
      {...{
        label: bravo,
        children: (
          <AppgenAnalyticsHelper19
            {...{
              range: gauge,
              onChange: hinge,
            }}
          />
        ),
      }}
    />
  );
  let delta2, echo2;
  delta2 = <AppIconeL className="icon-xs" aria-hidden={true} />;
  echo2 = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenAnalytics.events.runQuery",
        defaultMessage: "Run query",
        description: "Button label for running a custom event query",
      }}
    />
  );
  let foxtrot = (
    <Button
      {...{
        color: "primary",
        loading: isFetching,
        size: "toolbar",
        type: "submit",
        children: [delta2, echo2],
      }}
    />
  );
  let golf = (
    <form
      className="flex flex-wrap items-end gap-3 rounded-xl border border-token-border bg-token-bg-fog p-4"
      onSubmit={widget}
    >
      {zone}
      {charlie}
      {foxtrot}
    </form>
  );
  return (
    <>
      {golf}
      {offset}
    </>
  );
}
function AppgenAnalyticsHelper25(hotel) {
  let { eventName, eventNames, onChange } = hotel,
    india = useIntl(),
    juliet = india.formatMessage(
      {
        id: "appgenAnalytics.events.eventDropdownLabel",
        defaultMessage: "Event: {eventName}",
        description:
          "Accessible label for the custom event dropdown and its current value",
      },
      {
        eventName,
      },
    );
  let kilo = <span className="font-mono text-sm">{eventName}</span>;
  let lima;
  {
    let mike;
    mike = (november) => (
      <DropdownMenu.Item
        key={november}
        {...{
          "aria-current": november === eventName ? "true" : undefined,
          RightIcon: november === eventName ? AppIconZlt : undefined,
          onSelect: () => {
            onChange(november);
          },
          children: <span className="font-mono text-sm">{november}</span>,
        }}
      />
    );
    lima = eventNames.map(mike);
  }
  return (
    <AppgenAnalyticsHelper18
      {...{
        ariaLabel: juliet,
        label: kilo,
        children: lima,
      }}
    />
  );
}
function AppgenAnalyticsHelper26(oscar) {
  let { event } = oscar,
    papa = useIntl(),
    romeo = (
      <div className="truncate font-mono text-sm font-medium text-token-text-primary">
        {event.eventName}
      </div>
    );
  let sierra = (
    <div className="text-xs text-token-text-tertiary">
      {
        <AppgenAnalyticsHelper21
          {...{
            endTimeMs: event.endTimeMs,
            startTimeMs: event.startTimeMs,
          }}
        />
      }
    </div>
  );
  let tango = (
    <div className="flex min-w-0 flex-col gap-1">
      {romeo}
      {sierra}
    </div>
  );
  let uniform = (
    <div className="rounded-md bg-token-bg-fog px-2 py-1 text-xs text-token-text-secondary">
      {
        <MemoizedFormattedMessage
          {...{
            id: "appgenAnalytics.events.aggregation",
            defaultMessage: "Aggregation: Count",
            description: "Fixed aggregation used by the MVP custom event query",
          }}
        />
      }
    </div>
  );
  let victor = (
    <div className="flex flex-wrap items-end justify-between gap-3">
      {tango}
      {uniform}
    </div>
  );
  let whiskey = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenAnalytics.events.totalOccurrences",
        defaultMessage: "Total occurrences",
        description: "Custom event query metric label for total occurrences",
      }}
    />
  );
  let xray = papa.formatNumber(event.totalOccurrences, {
    maximumFractionDigits: 0,
  });
  let yankee = (
    <AppgenAnalyticsHelper16
      {...{
        label: whiskey,
        value: xray,
      }}
    />
  );
  let zulu = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenAnalytics.metric.uniqueVisitors",
        defaultMessage: "Unique visitors",
        description: "Site analytics metric label for unique visitors",
      }}
    />
  );
  let argon = papa.formatNumber(event.uniqueVisitors, {
    maximumFractionDigits: 0,
  });
  let boron = (
    <AppgenAnalyticsHelper16
      {...{
        label: zulu,
        value: argon,
      }}
    />
  );
  let carbon = (
    <div className="grid grid-cols-2 gap-3">
      {yankee}
      {boron}
    </div>
  );
  let neon = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenAnalytics.events.countOverTime",
        defaultMessage: "Count over time",
        description: "Heading for the custom event count chart",
      }}
    />
  );
  let radon = (
    <AppgenAnalyticsHelper20
      key={"interval"}
      {...{
        interval: event.interval,
      }}
    />
  );
  let xenon2 = (
    <AppgenAnalyticsHelper21
      key={"range"}
      {...{
        endTimeMs: event.endTimeMs,
        startTimeMs: event.startTimeMs,
      }}
    />
  );
  let helium = (
    <AppgenAnalyticsHelper15
      {...{
        title: neon,
        detail: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenAnalytics.events.chartDetail",
              defaultMessage: "{interval} · {range}",
              description: "Custom event chart interval and date range",
              values: {
                interval: radon,
                range: xenon2,
              },
            }}
          />
        ),
      }}
    />
  );
  let lithium =
    event.totalOccurrences === 0 ? (
      <div className="flex h-64 items-center justify-center text-sm text-token-text-secondary">
        {
          <MemoizedFormattedMessage
            {...{
              id: "appgenAnalytics.events.noOccurrences",
              defaultMessage: "No occurrences in this period",
              description:
                "Empty state shown when a custom event has no occurrences in the selected period",
            }}
          />
        }
      </div>
    ) : (
      <AppgenAnalyticsHelper3
        {...{
          className: "h-64",
          ariaLabel: papa.formatMessage(
            {
              id: "appgenAnalytics.events.chartLabel",
              defaultMessage: "Occurrences of {eventName} over time",
              description: "Accessible label for the custom event count chart",
            },
            {
              eventName: event.eventName,
            },
          ),
          data: event.occurrences.map((item) => {
            let { count, timestampMs } = item;
            return {
              count,
              label: papa.formatDate(timestampMs, {
                day: "numeric",
                month: "short",
                timeZone: thorn,
              }),
            };
          }),
          series: [
            {
              color: sodium,
              curveType: "monotone",
              dataKey: "count",
              fillColor: sodium,
              label: papa.formatMessage({
                id: "appgenAnalytics.events.occurrences",
                defaultMessage: "Occurrences",
                description: "Series label for the custom event count chart",
              }),
              type: "area",
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
  let potassium = (
    <AppgenAnalyticsHelper14
      {...{
        children: [helium, lithium],
      }}
    />
  );
  return (
    <>
      {victor}
      {carbon}
      {potassium}
    </>
  );
}
function AppgenAnalyticsHelper27() {
  return (
    <div className="flex min-h-72 items-center justify-center">
      {<Spinner {...{}} />}
    </div>
  );
}
function AppgenAnalyticsHelper28(calcium) {
  let { children, onRetry } = calcium,
    iron = (
      <MemoizedFormattedMessage
        {...{
          id: "appgenAnalytics.events.retry",
          defaultMessage: "Retry",
          description: "Button label to retry loading custom event analytics",
        }}
      />
    );
  let cobalt = (
    <Button
      {...{
        color: "secondary",
        size: "toolbar",
        onClick: onRetry,
        children: iron,
      }}
    />
  );
  return (
    <div className="flex min-h-72 items-center justify-center">
      <div className="flex items-center gap-3 text-sm text-token-text-secondary">
        {children}
        {cobalt}
      </div>
    </div>
  );
}
