// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Chart series frames / pie-scatter router (Helper154–172 + Values 178–217).

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
import {
  ensureChatgptPieChartWidgetInit as slot197,
  useChatgptComposerControllerHelper162,
} from "../chatgpt-pie-chart-widget";
import { getChatgptChartAxisTooltipSurfaces } from "./chart-axis-tooltip-module";

const axisPeers = getChatgptChartAxisTooltipSurfaces();
const {
  useChatgptComposerControllerHelper130,
  useChatgptComposerControllerHelper131,
  useChatgptComposerControllerHelper132,
  useChatgptComposerControllerHelper133,
  useChatgptComposerControllerHelper137,
  useChatgptComposerControllerHelper138,
  useChatgptComposerControllerHelper139,
  useChatgptComposerControllerHelper144,
  useChatgptComposerControllerHelper145,
  useChatgptComposerControllerHelper146,
  useChatgptComposerControllerHelper147,
  slot153,
  slot158,
  slot161,
  slot162,
  slot166,
} = axisPeers;

function useChatgptComposerControllerHelper148(request1093: any) {
  const ChartWidgetStoresS = _chartWidgetStoresS;
  const UseChatgptComposerControllerHelper147 =
    useChatgptComposerControllerHelper147;
  let {
      ariaLabel,
      barCategoryGap,
      barRadius,
      chart,
      data,
      enableLegendSeriesToggle,
      frameClassName,
      maxBarSize,
      maxTooltipEntries,
      setBarCategoryGapContainer,
      showTooltipCursor,
      showTooltipMarkers,
      theme,
      xAxis,
      yAxis,
    } = request1093,
    slot4412 = barRadius === undefined ? slot171 : barRadius,
    slot4413 = appInitialWft(
      "box-border flex h-full min-h-0 flex-col",
      frameClassName,
    );
  let slot4414 = chart.layout,
    slot4415 = useChatgptComposerControllerHelper145(chart);
  let slot4416 = chart.series.length > 1,
    slot4417 = chart.chartType !== "scatter",
    slot4418 = {
      x: false,
      y: true,
    };
  let slot4419 = (
    <ChartWidgetStoresS
      barCategoryGap={barCategoryGap}
      barRadius={slot4412}
      data={data}
      disableAnimation={true}
      enableLegendSeriesToggle={enableLegendSeriesToggle}
      height="100%"
      layout={slot4414}
      legendMaxRows={2}
      maxBarSize={maxBarSize}
      maxTooltipEntries={maxTooltipEntries}
      series={slot4415}
      showLegend={slot4416}
      showTooltipCursor={showTooltipCursor}
      showTooltipLabel={slot4417}
      showTooltipMarkers={showTooltipMarkers}
      showYAxis={true}
      tooltipAllowEscapeViewBox={slot4418}
      tooltipAnimationDuration={slot169}
      tooltipOffset={slot170}
      width="100%"
      xAxis={xAxis}
      yAxis={yAxis}
    />
  );
  let slot4420 = (
    <UseChatgptComposerControllerHelper147 theme={theme}>
      {slot4419}
    </UseChatgptComposerControllerHelper147>
  );
  return (
    <div
      aria-label={ariaLabel}
      className={slot4413}
      ref={setBarCategoryGapContainer}
      role="img"
    >
      {slot4420}
    </div>
  );
}
var slot167,
  slot168,
  slot169,
  slot170,
  slot171,
  slot172 = rolldownRuntimeN(() => {
    slot167 = appInitialIvt();
    _chartWidgetStoresC();
    appInitialTft();
    slot162();
    slot166();
    slot168 = appInitialJvt();
    slot169 = 0;
    slot170 = 10;
    slot171 = 8;
  });
function useChatgptComposerControllerHelper149(request9392: any) {
  return useChatgptComposerControllerHelper151(request9392).map((item) => {
    let slot15710 = {};
    for (let [slot16028, slot16029] of Object.entries(item))
      slot15710[slot16028] = useChatgptComposerControllerHelper152(slot16029);
    return slot15710;
  });
}
function useChatgptComposerControllerHelper150(request8715: any) {
  return request8715.data.map((item, index) => {
    let slot15311 = {};
    for (let [slot16030, slot16031] of Object.entries(item))
      slot15311[slot16030] = useChatgptComposerControllerHelper153(slot16031);
    return (
      (slot15311.fill = useChatgptComposerControllerHelper144(index)),
      (slot15311.stroke = slot173),
      slot15311
    );
  });
}
function useChatgptComposerControllerHelper151(request8716: any) {
  if (request8716.data.length > 0) return request8716.data;
  let slot14741 = {
    [request8716.xKey]: request8716.chartType === "scatter" ? 0 : "",
  };
  for (let slot16100 of request8716.series) slot14741[slot16100.dataKey] = null;
  return [slot14741];
}
function useChatgptComposerControllerHelper152(request8138: any) {
  return request8138 == null
    ? null
    : typeof request8138 == "number"
      ? Number.isFinite(request8138)
        ? request8138
        : null
      : typeof request8138 == "string" || typeof request8138 == "boolean"
        ? request8138
        : String(request8138);
}
function useChatgptComposerControllerHelper153(request9177: any) {
  return (typeof request9177 == "number" && Number.isFinite(request9177)) ||
    typeof request9177 == "string"
    ? request9177
    : request9177 == null
      ? ""
      : String(request9177);
}
var slot173,
  slot174 = rolldownRuntimeN(() => {
    slot161();
    slot173 = "var(--color-token-main-surface-primary)";
  });

function useChatgptComposerControllerHelper154(request997: any) {
  const Slot4187 = slot4187;
  let { ariaLabel, chart, theme } = request997,
    {
      barCategoryGapPx,
      barContainerHeight,
      barContainerWidth,
      setBarContainer,
    } = useChatgptComposerControllerHelper133(),
    slot4187,
    slot4188,
    slot4189,
    slot4190,
    slot4191,
    slot4192,
    slot4193,
    slot4194,
    slot4195,
    slot4196,
    slot4197,
    slot4198,
    slot4199;
  {
    let slot8660 = useChatgptComposerControllerHelper149(chart),
      slot8661 = chart.layout === "vertical",
      slot8662 = useChatgptComposerControllerHelper130({
        dataLength: slot8660.length,
        defaultGapPx: barCategoryGapPx,
      }),
      slot8663 = useChatgptComposerControllerHelper132({
        containerSize: slot8661 ? barContainerHeight : barContainerWidth,
        dataLength: slot8660.length,
        series: chart.series,
      });
    slot4187 = useChatgptComposerControllerHelper148;
    slot4188 = ariaLabel;
    slot4192 = slot8661 ? slot176 : slot8662;
    slot4193 = slot8663;
    slot4194 = chart;
    slot4195 = slot8660;
    slot4196 = slot8661 ? "py-5" : "pt-5 pb-[0.375rem]";
    slot4197 = useChatgptComposerControllerHelper131({
      dataLength: slot8660.length,
      isHorizontalBarChart: slot8661,
      series: chart.series,
    });
    slot4198 = setBarContainer;
    slot4199 = false;
    slot4189 = true;
    slot4190 = theme;
    slot4191 = useChatgptComposerControllerHelper137(chart, slot8660, slot8662);
  }
  let slot4200 = useChatgptComposerControllerHelper138(chart);
  return (
    <Slot4187
      ariaLabel={slot4188}
      barCategoryGap={slot4192}
      barRadius={slot4193}
      chart={slot4194}
      data={slot4195}
      frameClassName={slot4196}
      maxBarSize={slot4197}
      setBarCategoryGapContainer={slot4198}
      showTooltipCursor={slot4199}
      showTooltipMarkers={slot4189}
      theme={slot4190}
      xAxis={slot4191}
      yAxis={slot4200}
    />
  );
}
var slot175,
  _h,
  slot176,
  slot177 = rolldownRuntimeN(() => {
    slot175 = appInitialIvt();
    slot158();
    slot153();
    slot172();
    slot174();
    _h = appInitialJvt();
    slot176 = "12%";
  });
function useChatgptComposerControllerHelper155(request1705: any) {
  const Slot5663 = slot5663;
  let { ariaLabel, chart, theme } = request1705,
    slot5663,
    slot5664,
    slot5665,
    slot5666,
    slot5667,
    slot5668,
    slot5669,
    slot5670,
    slot5671,
    slot5672,
    slot5673;
  {
    let slot11487 = useChatgptComposerControllerHelper149(chart);
    slot5663 = useChatgptComposerControllerHelper148;
    slot5664 = ariaLabel;
    slot5666 = chart;
    slot5667 = slot11487;
    slot5668 = chart.series.length > 1;
    slot5669 = "pt-5 pb-[0.375rem]";
    slot5670 = slot180;
    slot5671 = true;
    slot5672 = true;
    slot5673 = theme;
    slot5665 = useChatgptComposerControllerHelper137(chart, slot11487, 0);
  }
  let slot5674 = useChatgptComposerControllerHelper139(chart);
  return (
    <Slot5663
      ariaLabel={slot5664}
      chart={slot5666}
      data={slot5667}
      enableLegendSeriesToggle={slot5668}
      frameClassName={slot5669}
      maxTooltipEntries={slot5670}
      showTooltipCursor={slot5671}
      showTooltipMarkers={slot5672}
      theme={slot5673}
      xAxis={slot5665}
      yAxis={slot5674}
    />
  );
}
var slot178,
  slot179,
  slot180,
  slot181 = rolldownRuntimeN(() => {
    slot178 = appInitialIvt();
    slot158();
    slot172();
    slot174();
    slot179 = appInitialJvt();
    slot180 = 8;
  });
function useChatgptComposerControllerHelper165(request2261: any) {
  const UseChatgptComposerControllerHelper162 =
    useChatgptComposerControllerHelper162;
  const UseChatgptComposerControllerHelper147 =
    useChatgptComposerControllerHelper147;
  let { ariaLabel, chart, theme } = request2261;
  if (chart.series.length === 0) return null;
  let slot6570 = useChatgptComposerControllerHelper150(chart);
  let slot6571 = useChatgptComposerControllerHelper146(chart);
  let slot6572 = {
    x: false,
    y: true,
  };
  let slot6573 = (
    <UseChatgptComposerControllerHelper162
      data={slot6570}
      disableAnimation={true}
      height="100%"
      innerRadius="40%"
      legendMaxRows={2}
      outerRadius="78%"
      paddingAngle={slot201}
      series={slot6571}
      tooltipAllowEscapeViewBox={slot6572}
      tooltipAnimationDuration={$h}
      tooltipOffset={slot200}
      tooltipValueMode="percent"
      width="100%"
      xAxis={chart.nameKey}
    />
  );
  let slot6574 = (
    <UseChatgptComposerControllerHelper147 theme={theme}>
      {slot6573}
    </UseChatgptComposerControllerHelper147>
  );
  return (
    <div
      aria-label={ariaLabel}
      className="box-border flex h-full min-h-0 flex-col py-3"
      role="img"
    >
      {slot6574}
    </div>
  );
}
var slot198,
  slot199,
  $h,
  slot200,
  slot201,
  slot202 = rolldownRuntimeN(() => {
    slot198 = appInitialIvt();
    slot197();
    slot174();
    slot162();
    slot166();
    slot199 = appInitialJvt();
    $h = 0;
    slot200 = 10;
    slot201 = 0.5;
  });
function useChatgptComposerControllerHelper166(request2100: any) {
  const Slot6299 = slot6299;
  let { ariaLabel, chart, theme } = request2100,
    slot6299,
    slot6300,
    slot6301,
    slot6302,
    slot6303,
    slot6304,
    slot6305,
    slot6306,
    slot6307;
  {
    let slot12251 = useChatgptComposerControllerHelper149(chart);
    slot6299 = useChatgptComposerControllerHelper148;
    slot6300 = ariaLabel;
    slot6301 = chart;
    slot6302 = slot12251;
    slot6303 = "pt-5 pb-[0.375rem]";
    slot6304 = true;
    slot6305 = false;
    slot6306 = theme;
    slot6307 = useChatgptComposerControllerHelper137(chart, slot12251, 0);
  }
  let slot6308 = useChatgptComposerControllerHelper139(chart);
  return (
    <Slot6299
      ariaLabel={slot6300}
      chart={slot6301}
      data={slot6302}
      frameClassName={slot6303}
      showTooltipCursor={slot6304}
      showTooltipMarkers={slot6305}
      theme={slot6306}
      xAxis={slot6307}
      yAxis={slot6308}
    />
  );
}
var slot203,
  slot204,
  slot205 = rolldownRuntimeN(() => {
    slot203 = appInitialIvt();
    slot158();
    slot172();
    slot174();
    slot204 = appInitialJvt();
  });
function useChatgptComposerControllerHelper167(request2377: any) {
  const UseChatgptComposerControllerHelper154 =
    useChatgptComposerControllerHelper154;
  const UseChatgptComposerControllerHelper155 =
    useChatgptComposerControllerHelper155;
  const UseChatgptComposerControllerHelper165 =
    useChatgptComposerControllerHelper165;
  const UseChatgptComposerControllerHelper166 =
    useChatgptComposerControllerHelper166;
  let { ariaLabel, chart, theme } = request2377;
  switch (chart.chartType) {
    case "bar": {
      let slot13421;
      return (
        <UseChatgptComposerControllerHelper154
          ariaLabel={ariaLabel}
          chart={chart}
          theme={theme}
        />
      );
    }
    case "line": {
      let slot13422;
      return (
        <UseChatgptComposerControllerHelper155
          ariaLabel={ariaLabel}
          chart={chart}
          theme={theme}
        />
      );
    }
    case "pie": {
      let slot13393;
      return (
        <UseChatgptComposerControllerHelper165
          ariaLabel={ariaLabel}
          chart={chart}
          theme={theme}
        />
      );
    }
    case "scatter": {
      let slot13350;
      return (
        <UseChatgptComposerControllerHelper166
          ariaLabel={ariaLabel}
          chart={chart}
          theme={theme}
        />
      );
    }
  }
}
var slot206,
  slot207,
  slot208 = rolldownRuntimeN(() => {
    slot206 = appInitialIvt();
    slot177();
    slot181();
    slot202();
    slot205();
    slot207 = appInitialJvt();
  }),
  slot209,
  slot210,
  slot211,
  slot212,
  slot213,
  slot214,
  _g,
  slot215,
  slot216 = rolldownRuntimeN(() => {
    appInitialCT();
    slot209 = appInitialCT().nullable().optional();
    slot210 = appInitialDT(["compact", "integer", "raw"]);
    slot211 = appInitialXT({
      dimension: appInitialDT(["x", "y"]).nullable().optional(),
      domain: appInitialWT([appInitialBT(), appInitialBT()]).optional(),
      label: slot209,
      ticks: _appInitialFT(
        appInitialXT({
          label: slot209,
          value: appInitialBT(),
        }).passthrough(),
      ).optional(),
    }).passthrough();
    slot212 = appInitialXT({
      axes: _appInitialFT(slot211).optional(),
      chartType: appInitialDT(["bar", "line", "pie", "scatter"]),
      data: _appInitialFT(appInitialST(appInitialCT(), appInitialET())),
      layout: slot209,
      meta: appInitialXT({
        description: slot209,
        footer: slot209,
        title: slot209,
      })
        .passthrough()
        .optional(),
      nameKey: slot209,
      series: _appInitialFT(
        appInitialXT({
          axisLabel: slot209,
          dataKey: appInitialCT().trim().min(1),
          label: slot209,
          stack: slot209,
          valueFormat: slot210.optional(),
          valuePrefix: slot209,
          valueSuffix: slot209,
        }).passthrough(),
      ).optional(),
      valueFormat: slot210.optional(),
      valueKey: slot209,
      valuePrefix: slot209,
      valueSuffix: slot209,
      xAxisLabel: slot209,
      xKey: slot209,
    }).passthrough();
    slot213 = appInitialXT({
      data: appInitialXT({
        content: appInitialTT([slot212, appInitialCT()]),
        language: appInitialYT("recharts-json"),
        widget_type: appInitialYT("charts_widget_v2"),
      }).passthrough(),
      type: appInitialYT("client_defined_widget"),
    }).passthrough();
    slot214 = appInitialXT({
      category: appInitialYT("language_learning_block"),
      data: appInitialXT({
        content: appInitialCT(),
        intent: appInitialYT("translation"),
        pronunciation_language: slot209,
      }).passthrough(),
      type: appInitialYT("client_defined_widget"),
    }).passthrough();
    _g = appInitialXT({
      category: appInitialYT("translation_block"),
      data: appInitialXT({
        content: appInitialCT(),
        source_language: slot209,
        target_language: slot209,
        translated_text: slot209,
      }).passthrough(),
      type: appInitialYT("client_defined_widget"),
    }).passthrough();
    slot215 = appInitialGT("category", [slot214, _g]);
  });
function bg(request10749: any, request10750: any) {
  return typeof request10749 == "string" && request10749.trim().length > 0
    ? request10749
    : request10750;
}
var slot217 = rolldownRuntimeN(() => {});
function useChatgptComposerControllerHelper168(request5938: any) {
  let slot12252 = bg(
      request5938.xKey,
      useChatgptComposerControllerHelper171(request5938.data),
    ),
    slot12253 = bg(
      request5938.valueKey,
      useChatgptComposerControllerHelper172(request5938.data, slot12252),
    ),
    slot12254 = {
      chartType: request5938.chartType,
      data: request5938.data,
      nameKey: bg(request5938.nameKey, slot12252),
      series: useChatgptComposerControllerHelper170(request5938, slot12253),
      valueKey: slot12253,
      xKey: slot12252,
    };
  return (
    request5938.axes != null && (slot12254.axes = request5938.axes),
    request5938.layout === "vertical" && (slot12254.layout = "vertical"),
    request5938.meta != null && (slot12254.meta = request5938.meta),
    slot12254
  );
}
function useChatgptComposerControllerHelper169(request8749: any) {
  if (typeof request8749 != "string") return request8749;
  try {
    let slot15843 = slot212.safeParse(JSON.parse(request8749));
    return slot15843.success ? slot15843.data : null;
  } catch {
    return null;
  }
}
function useChatgptComposerControllerHelper170(
  request4273: any,
  request4274: any,
) {
  let slot10257 = request4273.valueFormat ?? "compact",
    slot10258 = bg(request4273.valuePrefix, ""),
    slot10259 = bg(request4273.valueSuffix, ""),
    slot10260 = request4273.series?.map((request6832) => {
      let slot13200 = bg(request6832.stack),
        slot13201 = {
          dataKey: request6832.dataKey,
          label: bg(request6832.label, request6832.dataKey),
          valueFormat: request6832.valueFormat ?? slot10257,
          valuePrefix: bg(request6832.valuePrefix, slot10258),
          valueSuffix: bg(request6832.valueSuffix, slot10259),
        };
      return (slot13200 != null && (slot13201.stack = slot13200), slot13201);
    });
  return slot10260 != null && slot10260.length > 0
    ? slot10260
    : [
        {
          dataKey: request4274,
          label: request4274,
          valueFormat: slot10257,
          valuePrefix: slot10258,
          valueSuffix: slot10259,
        },
      ];
}
function useChatgptComposerControllerHelper171(request8701: any) {
  let slot14734 = request8701[0];
  if (slot14734 == null) return "name";
  for (let [slot15876, slot15877] of Object.entries(slot14734))
    if (typeof slot15877 == "string") return slot15876;
  return Object.keys(slot14734)[0] ?? "name";
}
function useChatgptComposerControllerHelper172(
  request8111: any,
  request8112: any,
) {
  let slot14318 = request8111[0];
  if (slot14318 == null) return "value";
  for (let [slot15803, slot15804] of Object.entries(slot14318))
    if (slot15803 !== request8112 && typeof slot15804 == "number")
      return slot15803;
  return (
    Object.keys(slot14318).find((item) => {
      return item !== request8112;
    }) ?? "value"
  );
}

export function getChatgptChartSeriesFrameSurfaces() {
  return {
    useChatgptComposerControllerHelper148,
    useChatgptComposerControllerHelper149,
    useChatgptComposerControllerHelper150,
    useChatgptComposerControllerHelper151,
    useChatgptComposerControllerHelper152,
    useChatgptComposerControllerHelper153,
    useChatgptComposerControllerHelper154,
    useChatgptComposerControllerHelper155,
    useChatgptComposerControllerHelper165,
    useChatgptComposerControllerHelper166,
    useChatgptComposerControllerHelper167,
    useChatgptComposerControllerHelper168,
    useChatgptComposerControllerHelper169,
    useChatgptComposerControllerHelper170,
    useChatgptComposerControllerHelper171,
    useChatgptComposerControllerHelper172,
    bg,
    slot208,
    slot213,
    slot215,
    slot216,
    slot217,
  };
}
