// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Chart axis / tooltip / theme helpers (Helper124–153 + Values 135–177).

import {
  appScopeAtom as appInitialFft,
  ensureAppScopeInit as appInitialIft,
  useAppScope as appInitialLT,
  ensureAppScopeHostInit as appInitialMT,
} from "../../../runtime/app-scope-runtime";
import { writingBlocksControllerAtom as appInitialCI } from "../../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_FH_Init as appInitialFH,
  ensureComposerEsm_Hlt_Init as appInitialHlt,
  ensureComposerEsm_Ilt_Init as appInitialIlt,
  ensureComposerEsm_jR_Init as appInitialJR,
  ensureComposerEsm_Llt_Init as appInitialLlt,
  ensureComposerEsm_Qct_Init as appInitialQct,
  ensureComposerEsm_Sut_Init as appInitialSut,
  ensureComposerEsm_TI_Init as appInitialTI,
  ensureComposerEsm_Tft_Init as appInitialTft,
} from "../../../composer/composer-esm-inits";
import {
  reactCompilerRuntime as appInitialIvt,
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
} from "../../../boundaries/react-cjs-runtime";
import { writeClipboardContents as appInitialPH } from "../../../clipboard/write-clipboard-contents";
import { usePreferredColorScheme as appInitialYU } from "../../../hooks/use-preferred-color-scheme";
import { MemoizedFormattedMessage as appInitialGft } from "../../../i18n/memoized-formatted-message";
import {
  ensureIntlFormattersInit as appInitialHft,
  useIntl as appInitialJft,
} from "../../../i18n/use-intl";
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../../runtime/rolldown-runtime";
import { getAppearanceThemeMode as appInitialVU } from "../../../settings/get-appearance-theme-mode";
import { Button as appInitialBut } from "../../../ui/button";
import { CopyButton as appInitialAR } from "../../../ui/copy-button";
import { cx as appInitialWft } from "../../../ui/cx";
import { DialogSection as _appInitialU } from "../../../ui/dialog-section";
import { OptionalTooltip as appInitialBlt } from "../../../ui/optional-tooltip";
import { Spinner as appInitialXut } from "../../../ui/spinner";
import {
  createResizeObserverN,
  createResizeObserverT,
} from "../../../utils/create-resize-observer";
import { decodeBase64ToBytes as AppInitialZct } from "../../../utils/decode-base64-to-bytes";
import {
  zodArray as _appInitialFT,
  zodNumber as appInitialBT,
  zodString as appInitialCT,
  zodEnum as appInitialDT,
  zodUnknown as appInitialET,
  zodDiscriminatedUnion as appInitialGT,
  zodRecord as appInitialST,
  zodUnion as appInitialTT,
  zodTuple as appInitialWT,
  zodObject as appInitialXT,
  zodLiteral as appInitialYT,
} from "../../../vendor/zod";
import {
  chartWidgetStoresC as _chartWidgetStoresC,
  chartWidgetStoresS as _chartWidgetStoresS,
  chartWidgetStoresT as _chartWidgetStoresT,
  chartWidgetStoresA,
  chartWidgetStoresI,
  chartWidgetStoresN,
  chartWidgetStoresO,
  chartWidgetStoresR,
  chartWidgetStoresW,
} from "../../../boundaries/chart-widget-stores";

function useChatgptComposerControllerHelper124(request4001: any) {
  let { chart, intl } = request4001,
    slot9877,
    slot9878,
    slot9879;
  slot9879 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let slot15179 = useChatgptComposerControllerHelper126(chart, intl);
    if (slot15179.length === 0) {
      slot9879 = null;
      break bb0;
    }
    slot9877 = "sr-only";
    slot9878 = slot15179.map(useChatgptComposerControllerHelper125);
  }
  if (slot9879 !== Symbol.for("react.early_return_sentinel")) return slot9879;
  return <ul className={slot9877}>{slot9878}</ul>;
}
function useChatgptComposerControllerHelper125(request11145: any) {
  return <li key={request11145}>{request11145}</li>;
}
function useChatgptComposerControllerHelper126(
  request3877: any,
  request3878: any,
) {
  return request3877.chartType === "pie"
    ? request3877.data
        .map((item) => {
          let slot14543 = useChatgptComposerControllerHelper128(
              item[request3877.valueKey],
            ),
            slot14544 = useChatgptComposerControllerHelper129(
              item,
              request3877.nameKey,
            );
          return slot14543 == null || slot14544 == null
            ? null
            : `${slot14544}: ${$p(slot14543, request3877.series[0], request3878)}`;
        })
        .filter((item) => {
          return item != null;
        })
    : request3877.data
        .map((item) => {
          let slot12624 = useChatgptComposerControllerHelper129(
            item,
            request3877.xKey,
          );
          if (slot12624 == null) return null;
          let slot12625 = request3877.series
            .map((_item) => {
              let slot15400 = useChatgptComposerControllerHelper128(
                item[_item.dataKey],
              );
              return slot15400 == null
                ? null
                : `${_item.label} ${$p(slot15400, _item, request3878)}`;
            })
            .filter((_item) => {
              return _item != null;
            });
          return slot12625.length > 0
            ? `${slot12624}: ${slot12625.join(", ")}`
            : null;
        })
        .filter((item) => {
          return item != null;
        });
}
function $p(request9580: any, request9581: any, request9582: any) {
  let slot15501 = useChatgptComposerControllerHelper127(
    request9580,
    request9581?.valueFormat,
    request9582,
  );
  return `${request9581?.valuePrefix ?? ""}${slot15501}${request9581?.valueSuffix ?? ""}`;
}
function useChatgptComposerControllerHelper127(
  request6582: any,
  request6583: any,
  request6584: any,
) {
  switch (request6583) {
    case "integer":
      return request6584.formatNumber(request6582, {
        maximumFractionDigits: 0,
      });
    case "raw":
      return String(request6582);
    case "compact":
    case undefined:
      return request6584.formatNumber(request6582, {
        compactDisplay: "short",
        maximumFractionDigits: 1,
        notation: "compact",
      });
  }
}
function useChatgptComposerControllerHelper128(request10772: any) {
  return typeof request10772 == "number" && Number.isFinite(request10772)
    ? request10772
    : null;
}
function useChatgptComposerControllerHelper129(
  request8329: any,
  request8330: any,
) {
  let slot14466 = request8329[request8330];
  if (typeof slot14466 == "string") {
    let slot15898 = slot14466.trim();
    return slot15898.length > 0 ? slot15898 : null;
  }
  return typeof slot14466 == "number" || typeof slot14466 == "boolean"
    ? String(slot14466)
    : null;
}
var slot135,
  slot136,
  slot137 = rolldownRuntimeN(() => {
    slot135 = appInitialIvt();
    slot136 = appInitialJvt();
  });
function useChatgptComposerControllerHelper130({
  dataLength,
  defaultGapPx,
}: any) {
  return dataLength >= slot144
    ? Math.min(defaultGapPx, slot143)
    : dataLength >= slot142
      ? Math.min(defaultGapPx, _m)
      : defaultGapPx;
}
function useChatgptComposerControllerHelper131({
  dataLength,
  isHorizontalBarChart,
  series,
}: any) {
  if (
    !(dataLength === 2 && useChatgptComposerControllerHelper136(series) === 2)
  )
    return isHorizontalBarChart ? slot149 : slot148;
}
function useChatgptComposerControllerHelper132({
  containerSize,
  dataLength,
  series,
}: any) {
  if (containerSize == null || containerSize <= 0 || dataLength <= 0)
    return slot145;
  let slot14133 =
    (containerSize /
      dataLength /
      useChatgptComposerControllerHelper136(series)) *
    0.65;
  for (let slot15881 of slot147)
    if (slot14133 >= slot15881.minEstimatedBarThickness)
      return slot15881.radius;
  return slot146;
}
function useChatgptComposerControllerHelper133() {
  let slot6638 = {
    barCategoryGapPx: slot140,
    barContainerHeight: null,
    barContainerWidth: null,
  };
  let [slot6639, slot6640] = slot139.useState(slot6638),
    slot6641 = slot139.useRef(undefined),
    slot6642 = (request6336, request6337) => {
      slot6640((request6671) => {
        let slot13036 = useChatgptComposerControllerHelper135(request6336);
        return request6671.barCategoryGapPx === slot13036 &&
          request6671.barContainerHeight === request6337 &&
          request6671.barContainerWidth === request6336
          ? request6671
          : {
              barCategoryGapPx: slot13036,
              barContainerHeight: request6337,
              barContainerWidth: request6336,
            };
      });
    };
  let slot6643 = slot6642,
    slot6644 = (request5945) => {
      if (
        (slot6641.current?.(),
        (slot6641.current = undefined),
        request5945 == null)
      )
        return;
      let { height, width } = request5945.getBoundingClientRect();
      slot6643(width, height);
      slot6641.current = createResizeObserverT({
        axis: "both",
        initialSize: false,
        onChange: (request10446) => {
          let { height: _height, width: _width } = request10446;
          slot6643(_width, _height);
        },
        target: request5945,
      });
    };
  let slot6645 = slot6644;
  return {
    ...slot6639,
    setBarContainer: slot6645,
  };
}
function useChatgptComposerControllerHelper134(request8616: any) {
  if (request8616.chartType !== "bar" || request8616.layout !== "vertical")
    return;
  let slot14647 =
    request8616.data.length *
    useChatgptComposerControllerHelper136(request8616.series);
  if (!(slot14647 <= slot151))
    return {
      height: `${slot150 + (slot14647 - slot151) * slot152}rem`,
    };
}
function useChatgptComposerControllerHelper135(request10565: any) {
  for (let slot15996 of slot141)
    if (request10565 >= slot15996.minWidth) return slot15996.gapPx;
  return slot140;
}
function useChatgptComposerControllerHelper136(request9210: any) {
  let slot15164 = new Set(),
    slot15165 = 0;
  for (let slot15919 of request9210)
    slot15919.stack == null ? (slot15165 += 1) : slot15164.add(slot15919.stack);
  return Math.max(1, slot15164.size + slot15165);
}
var slot138,
  slot139,
  slot140,
  slot141,
  _m,
  slot142,
  slot143,
  slot144,
  slot145,
  slot146,
  slot147,
  slot148,
  slot149,
  slot150,
  slot151,
  slot152,
  slot153 = rolldownRuntimeN(() => {
    slot138 = appInitialIvt();
    slot139 = rolldownRuntimeS(appInitialLvt(), 1);
    createResizeObserverN();
    slot140 = 8;
    slot141 = [
      {
        minWidth: 768,
        gapPx: 12,
      },
    ];
    _m = 6;
    slot142 = 16;
    slot143 = 3;
    slot144 = 24;
    slot145 = 8;
    slot146 = 2;
    slot147 = [
      {
        minEstimatedBarThickness: 56,
        radius: 8,
      },
      {
        minEstimatedBarThickness: 36,
        radius: 6,
      },
      {
        minEstimatedBarThickness: 16,
        radius: 4,
      },
      {
        minEstimatedBarThickness: 0,
        radius: 2,
      },
    ];
    slot148 = 120;
    slot149 = 48;
    slot150 = 27;
    slot151 = 20;
    slot152 = 1.5;
  });
function useChatgptComposerControllerHelper137(
  request4436: any,
  request4437: any,
  request4438: any,
) {
  let slot10428 = {},
    slot10429 =
      request4436.chartType === "bar" && request4436.layout === "vertical",
    slot10430 = useChatgptComposerControllerHelper141(request4437.length);
  for (let slot15660 of request4437) {
    let slot15802 = slot15660[request4436.xKey];
    slot15802 != null &&
      (slot10428[String(slot15802)] = slot10429
        ? useChatgptComposerControllerHelper142(slot15802, slot157)
        : useChatgptComposerControllerHelper142(slot15802, slot10430));
  }
  let slot10431 = {
    axisLine: false,
    dataKey: request4436.xKey,
    labels: slot10428,
    tickMargin: slot154,
  };
  return (
    slot10429
      ? (slot10431.interval = 0)
      : (request4436.chartType === "scatter"
          ? (slot10431.type = "number")
          : request4437.length <= slot156 && (slot10431.interval = 0),
        request4436.chartType === "bar"
          ? (slot10431.padding = {
              left: request4438 / 2,
              right: request4438 / 2,
            })
          : request4436.chartType === "line" &&
            (slot10431.padding = {
              left: slot155,
              right: slot155,
            })),
    slot10431
  );
}
function useChatgptComposerControllerHelper138(request10698: any) {
  return {
    ...useChatgptComposerControllerHelper140(request10698),
    axisLine: false,
    tickLine: false,
    tickMargin: slot154,
  };
}
function useChatgptComposerControllerHelper139(request9454: any) {
  return {
    domain: ["auto", "auto"],
    ...useChatgptComposerControllerHelper140(request9454),
    axisLine: false,
    tickLine: false,
    tickMargin: slot154,
  };
}
function useChatgptComposerControllerHelper140(request5043: any) {
  let slot11198 =
    request5043.axes?.filter((request11556) => {
      return request11556.dimension === "y";
    }) ?? [];
  if (slot11198.length !== 1) return;
  let slot11199 = slot11198[0],
    slot11200 = {};
  if (
    (slot11199.domain != null && (slot11200.domain = slot11199.domain),
    Array.isArray(slot11199.ticks))
  ) {
    let slot13681 = slot11199.ticks.filter((item) => {
      return Number.isFinite(item.value);
    });
    if (slot13681.length > 0) {
      let slot14708 = {};
      slot11200.ticks = slot13681.map((item) => {
        return (
          item.label != null && (slot14708[item.value] = item.label),
          item.value
        );
      });
      Object.keys(slot14708).length > 0 && (slot11200.labels = slot14708);
    }
  }
  return Object.keys(slot11200).length > 0 ? slot11200 : undefined;
}
function useChatgptComposerControllerHelper141(request10496: any) {
  return request10496 <= 4
    ? 96 / Math.max(request10496, 1)
    : request10496 <= 6
      ? 18
      : request10496 <= 8
        ? 14
        : 12;
}
function useChatgptComposerControllerHelper142(
  request9364: any,
  request9365: any,
) {
  let slot15296 = useChatgptComposerControllerHelper143(request9364);
  if (slot15296.length <= request9365) return slot15296;
  let slot15297 = Math.max(1, request9365 - 1);
  return `${slot15296.slice(0, slot15297).trimEnd()}…`;
}
function useChatgptComposerControllerHelper143(request10748: any) {
  return request10748 == null
    ? ""
    : String(request10748).replace(/\s+/g, " ").trim();
}
var slot154,
  slot155,
  slot156,
  slot157,
  slot158 = rolldownRuntimeN(() => {
    slot154 = 4;
    slot155 = 12;
    slot156 = 10;
    slot157 = 20;
  });
function useChatgptComposerControllerHelper144(request10385: any) {
  return !Number.isFinite(request10385) || request10385 < 0
    ? slot159
    : slot160[Math.floor(request10385) % slot160.length];
}
var slot159,
  slot160,
  slot161 = rolldownRuntimeN(() => {
    slot159 = "var(--color-token-charts-blue)";
    slot160 = [
      "var(--color-token-charts-blue)",
      "var(--color-token-charts-green)",
      "var(--color-token-charts-orange)",
      "var(--color-token-charts-yellow)",
      "var(--color-token-charts-purple)",
      "var(--color-token-charts-red)",
    ];
  });
function useChatgptComposerControllerHelper145(request3206: any) {
  return request3206.series.map((item, index) => {
    let slot8747 = useChatgptComposerControllerHelper144(index);
    switch (request3206.chartType) {
      case "line":
        return {
          color: slot8747,
          curveType: "monotone",
          dataKey: item.dataKey,
          label: item.label,
          type: "line",
          valueFormat: item.valueFormat,
          valuePrefix: item.valuePrefix,
          valueSuffix: item.valueSuffix,
        };
      case "scatter":
        return {
          color: slot8747,
          dataKey: item.dataKey,
          label: item.label,
          type: "scatter",
          valueFormat: item.valueFormat,
          valuePrefix: item.valuePrefix,
          valueSuffix: item.valueSuffix,
        };
      case "bar":
      case "pie":
        return {
          color: slot8747,
          dataKey: item.dataKey,
          label: item.label,
          stack: item.stack,
          type: "bar",
          valueFormat: item.valueFormat,
          valuePrefix: item.valuePrefix,
          valueSuffix: item.valueSuffix,
        };
    }
  });
}
function useChatgptComposerControllerHelper146(request7191: any) {
  let slot13522 = request7191.series[0],
    slot13523 = {
      dataKey: request7191.valueKey || slot13522?.dataKey || "value",
    };
  return (
    slot13522 != null &&
      ((slot13523.label = slot13522.label),
      (slot13523.valueFormat = slot13522.valueFormat),
      (slot13523.valuePrefix = slot13522.valuePrefix),
      (slot13523.valueSuffix = slot13522.valueSuffix)),
    [slot13523]
  );
}
var slot162 = rolldownRuntimeN(() => {
  slot161();
});
function useChatgptComposerControllerHelper147(request4050: any) {
  const ChartWidgetStoresI = chartWidgetStoresI;
  const Provider = chartWidgetStoresW.Provider;
  let { children, theme } = request4050,
    slot9968 = chartWidgetStoresR(),
    slot9969 = _chartWidgetStoresT(theme, slot9968, $m);
  let slot9970 = (
    <div className={slot165} data-theme={theme} dir="auto">
      {children}
    </div>
  );
  return (
    <ChartWidgetStoresI>
      <Provider value={slot9969}>{slot9970}</Provider>
    </ChartWidgetStoresI>
  );
}
var slot163,
  slot164,
  slot165,
  $m,
  slot166 = rolldownRuntimeN(() => {
    slot163 = appInitialIvt();
    chartWidgetStoresO();
    chartWidgetStoresA();
    appInitialTft();
    chartWidgetStoresN();
    slot164 = appInitialJvt();
    slot165 = appInitialWft(
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
      "[--shadow:var(--shadow-lg)]",
      "[--text-tracking:0em]",
    );
    $m = {};
  });

export function getChatgptChartAxisTooltipSurfaces() {
  return {
    useChatgptComposerControllerHelper124,
    useChatgptComposerControllerHelper125,
    useChatgptComposerControllerHelper126,
    useChatgptComposerControllerHelper127,
    useChatgptComposerControllerHelper128,
    useChatgptComposerControllerHelper129,
    useChatgptComposerControllerHelper130,
    useChatgptComposerControllerHelper131,
    useChatgptComposerControllerHelper132,
    useChatgptComposerControllerHelper133,
    useChatgptComposerControllerHelper134,
    useChatgptComposerControllerHelper135,
    useChatgptComposerControllerHelper136,
    useChatgptComposerControllerHelper137,
    useChatgptComposerControllerHelper138,
    useChatgptComposerControllerHelper139,
    useChatgptComposerControllerHelper140,
    useChatgptComposerControllerHelper141,
    useChatgptComposerControllerHelper142,
    useChatgptComposerControllerHelper143,
    useChatgptComposerControllerHelper144,
    useChatgptComposerControllerHelper145,
    useChatgptComposerControllerHelper146,
    useChatgptComposerControllerHelper147,
    $m,
    _m,
    slot137,
    slot153,
    slot158,
    slot161,
    slot162,
    slot166,
  };
}
