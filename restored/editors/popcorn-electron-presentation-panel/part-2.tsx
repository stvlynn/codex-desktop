// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

// Wave5d soft stubs.
const daisy: any = undefined;
const falcon: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { react } from "../../boundaries/react-cjs-runtime";
import { workbookO, workbookS } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureDndAxisLockModifiersInit,
  restrictToVerticalAxis,
} from "../../ui/dnd-axis-lock-modifiers";
import { dndAxisLockModifiers } from "../../ui/dnd-axis-lock-modifiers-bindable";
import { useDndSensors } from "../../ui/use-dnd-sensors";
import { joinStringsOrNull as JoinStringsOrNull } from "../../utils/join-strings-or-null";
import { stack, stackOffsetExpand } from "../../vendor/d3-shape-line-pie-stack";
import { ensureD3ShapeStackOffsetInit } from "../../workbook/ensure-d3-shape-stack-offset-init";
import {
  popcornSurfaceStyle_B as PopcornSurfaceStyle_B,
  popcornSurfaceStyle_Ct as PopcornSurfaceStyle_Ct,
  popcornSurfaceStyle_dt,
  popcornSurfaceStyle_E,
  popcornSurfaceStyle_F,
  popcornSurfaceStyle_ft as PopcornSurfaceStyle_ft,
  popcornSurfaceStyle_G,
  popcornSurfaceStyle_H,
  popcornSurfaceStyle_I,
  popcornSurfaceStyle_it as PopcornSurfaceStyle_it,
  popcornSurfaceStyle_K as PopcornSurfaceStyle_K,
  popcornSurfaceStyle_L,
  popcornSurfaceStyle_lt,
  popcornSurfaceStyle_mt,
  popcornSurfaceStyle_N,
  popcornSurfaceStyle_O,
  popcornSurfaceStyle_P,
  popcornSurfaceStyle_r,
  popcornSurfaceStyle_R as PopcornSurfaceStyle_R,
  popcornSurfaceStyle_rt,
  popcornSurfaceStyle_st,
  popcornSurfaceStyle_t as PopcornSurfaceStyle_t,
  popcornSurfaceStyle_T,
  popcornSurfaceStyle_tt as PopcornSurfaceStyle_tt,
  popcornSurfaceStyle_Tt,
  popcornSurfaceStyle_U as PopcornSurfaceStyle_U,
  popcornSurfaceStyle_ut,
  popcornSurfaceStyle_V as PopcornSurfaceStyle_V,
  popcornSurfaceStyle_Y as PopcornSurfaceStyle_Y,
  popcornSurfaceStyle_Z as PopcornSurfaceStyle_Z,
} from "../popcorn-electron-surface-style";
import {
  ensurePopcornPageNumberNavigationInit,
  PopcornPageNumberNavigation,
} from "../popcorn-page-number-navigation";
import {
  RemoteTextEditSessionA,
  RemoteTextEditSessionC,
  RemoteTextEditSessionChrome,
  RemoteTextEditSessionI,
  RemoteTextEditSessionLowerB,
  RemoteTextEditSessionLowerG,
  RemoteTextEditSessionLowerH,
  RemoteTextEditSessionLowerR,
  RemoteTextEditSessionLowerV,
  RemoteTextEditSessionLowerW,
  RemoteTextEditSessionLowerX,
  RemoteTextEditSessionLowerY,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionUnderscore,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

function river(manifold) {
  let nip = falcon(manifold);
  jade(
    nip,
    "Shapes and connectors",
    "Preset geometries, arrowheads, and routed connectors aligned with the current Granola presentation tests.",
  );
  let outlet = nip.shapes.add({
    geometry: "flowChartDecision",
    position: {
      left: 160,
      top: 220,
      width: 170,
      height: 110,
    },
    fill: "#DBEAFE",
    line: {
      style: "solid",
      fill: daisy.blue,
      width: 2,
    },
  });
  outlet.text = "Decision";
  outlet.text.alignment = "center";
  outlet.text.verticalAlignment = "middle";
  let packing = nip.shapes.add({
    geometry: "rect",
    position: {
      left: 448,
      top: 220,
      width: 190,
      height: 110,
    },
    fill: "#EDE9FE",
    line: {
      style: "solid",
      fill: daisy.violet,
      width: 2,
    },
  });
  packing.text = "Process";
  packing.text.alignment = "center";
  packing.text.verticalAlignment = "middle";
  let reducer = nip.shapes.add({
    geometry: "flowChartTerminator",
    position: {
      left: 764,
      top: 220,
      width: 212,
      height: 110,
    },
    fill: "#ECFDF5",
    line: {
      style: "solid",
      fill: daisy.mint,
      width: 2,
    },
  });
  reducer.text = "Terminator";
  reducer.text.alignment = "center";
  reducer.text.verticalAlignment = "middle";
  let strainer = nip.shapes.add({
    geometry: "chevron",
    position: {
      left: 1022,
      top: 214,
      width: 124,
      height: 120,
      rotation: 8,
    },
    fill: {
      type: "gradient",
      gradientKind: "linear",
      angleDeg: 0,
      stops: [
        {
          offset: 0,
          color: "#FDE68A",
        },
        {
          offset: 1,
          color: "#F59E0B",
        },
      ],
    },
    line: {
      style: "solid",
      fill: daisy.amber,
      width: 2,
    },
  });
  nip.shapes.add({
    geometry: "connector",
    kind: "straight",
    from: outlet,
    fromIdx: 3,
    to: packing,
    toIdx: 1,
    line: {
      style: "solid",
      fill: daisy.blue,
      width: 2,
    },
    head: {
      type: "arrow",
      width: "med",
      length: "med",
    },
  });
  nip.shapes.add({
    geometry: "connector",
    kind: "straight",
    from: packing,
    fromIdx: 3,
    to: reducer,
    toIdx: 1,
    line: {
      style: "dashed",
      fill: daisy.violet,
      width: 2,
    },
    head: {
      type: "arrow",
      width: "sm",
      length: "sm",
    },
  });
  nip.shapes.add({
    geometry: "connector",
    kind: "straight",
    from: reducer,
    fromIdx: 3,
    to: strainer,
    toIdx: 1,
    line: {
      style: "dash-dot",
      fill: daisy.amber,
      width: 2,
    },
    head: {
      type: "triangle",
      width: "med",
      length: "med",
    },
  });
  kite(
    nip,
    154,
    378,
    270,
    "Process shapes",
    "Flowchart decision, rect, and terminator geometries.",
  );
  kite(
    nip,
    510,
    378,
    262,
    "Connector routing",
    "Straight and elbow connectors with different arrowheads.",
  );
  kite(
    nip,
    900,
    378,
    230,
    "Transforms",
    "Rotated and gradient-filled accent chevron.",
  );
}
function slate(tee) {
  let union = falcon(tee, "#FAFBFF");
  jade(
    union,
    "Typography and text layout",
    "Title styles, lists, alignment, spacing, and insets all come from the same text engine the stage editor uses for canvas-native editing.",
  );
  let vent = lemon({
    slide: union,
    left: 82,
    top: 176,
    width: 360,
    height: 180,
  });
  vent.text = ["Quarterly Design Review", "Shared text engine"];
  vent.text.fontSize = 20;
  vent.text.insets = {
    left: 18,
    right: 18,
    top: 18,
    bottom: 18,
  };
  vent.text.get("Quarterly Design Review").style = "title";
  vent.text.get("Quarterly Design Review").color = daisy.blue;
  vent.text.get("Shared text engine").fontSize = 16;
  vent.text.get("Shared text engine").color = daisy.muted;
  let wye = lemon({
    slide: union,
    left: 474,
    top: 176,
    width: 326,
    height: 240,
    fill: "#FFFFFF",
  });
  wye.text = [
    [
      {
        run: "Canvas-native edit sessions",
      },
    ],
    [
      {
        run: "Word and paragraph selection",
      },
    ],
    [
      {
        run: "Shared undo and caret movement",
      },
    ],
  ];
  wye.text.fontSize = 18;
  wye.text.get(
    [
      "Canvas-native edit sessions",
      "Word and paragraph selection",
      "Shared undo and caret movement",
    ].join("\n"),
  ).style = "list";
  wye.text.get("Canvas-native edit sessions").bold = true;
  wye.text.insets = {
    left: 24,
    right: 20,
    top: 18,
    bottom: 18,
  };
  let zener = lemon({
    slide: union,
    left: 840,
    top: 176,
    width: 354,
    height: 240,
    fill: "#F8FBFF",
  });
  zener.text =
    "“A canvas text engine is only viable if selection, caret placement, and rich text styling are first-class model concerns.”";
  zener.text.alignment = "center";
  zener.text.verticalAlignment = "middle";
  zener.text.fontSize = 24;
  zener.text.color = daisy.ink;
  zener.text.insets = {
    left: 26,
    right: 26,
    top: 24,
    bottom: 24,
  };
  kite(
    union,
    84,
    380,
    340,
    "Styled title block",
    "Title preset, secondary body line, and content insets.",
  );
  kite(
    union,
    474,
    440,
    326,
    "List semantics",
    "List styling is range-driven, not hard-coded in the React layer.",
  );
  kite(
    union,
    840,
    440,
    354,
    "Centered quotation",
    "Alignment, insets, and large-type wrapping stress the text layout system.",
  );
}
function timber(alphaPrime) {
  let bravoPrime = falcon(alphaPrime);
  jade(
    bravoPrime,
    "Tables",
    "Tables showcase merge regions, style presets, borders, rich text values, and explicit column sizing.",
  );
  let copperPrime = bravoPrime.tables.add({
    rows: 6,
    columns: 4,
    left: 82,
    top: 178,
    width: 656,
    height: 314,
    values: [
      ["Performance scorecard", "", "", ""],
      ["Metric", "North", "EMEA", "APAC"],
      ["Bookings", 120, 94, 68],
      ["Pipeline", 210, 176, 140],
      ["Renewals", 96, 82, 65],
      ["Total", 426, 352, 273],
    ],
  });
  copperPrime.merge({
    startRow: 0,
    endRow: 0,
    startColumn: 0,
    endColumn: 3,
  });
  copperPrime.columns.get(0).width = 220;
  copperPrime.columns.get(1).width = 140;
  copperPrime.columns.get(2).width = 140;
  copperPrime.columns.get(3).width = 140;
  copperPrime.style = "TableStyleMedium2";
  copperPrime.styleOptions = {
    headerRow: true,
    bandedRows: true,
    bandedColumns: false,
    firstColumn: false,
    lastColumn: false,
    totalRow: false,
  };
  copperPrime.borders = {
    outside: {
      width: 1.5,
      color: "111827",
    },
    inside: {
      width: 0.75,
      color: "D1D5DB",
    },
  };
  let deltaPrime = copperPrime.cells.block({
    row: 0,
    column: 0,
    rowCount: 1,
    columnCount: 4,
  });
  deltaPrime.fill = "#0F172A";
  deltaPrime.textStyle.bold = true;
  deltaPrime.textStyle.color = "FFFFFF";
  deltaPrime.textStyle.fontSize = 18;
  let echoPrime = bravoPrime.tables.add({
    rows: 3,
    columns: 2,
    left: 804,
    top: 210,
    width: 390,
    height: 226,
    values: [
      ["Pattern", "Example"],
      [
        "Rich text",
        [
          {
            run: "Inline ",
            textStyle: {
              bold: true,
            },
          },
          "formatting",
        ],
      ],
      [
        "Multi-line",
        [
          [
            {
              run: "Line 1",
              textStyle: {
                italic: true,
              },
            },
          ],
          [
            {
              run: "Line 2",
            },
          ],
        ],
      ],
    ],
  });
  echoPrime.style = "TableStyleMedium9";
  echoPrime.styleOptions = {
    headerRow: true,
    bandedRows: true,
    bandedColumns: false,
    firstColumn: false,
    lastColumn: false,
    totalRow: false,
  };
  kite(
    bravoPrime,
    84,
    520,
    650,
    "Scorecard table",
    "Merged title row, preset style, custom borders, and explicit column widths.",
  );
  kite(
    bravoPrime,
    804,
    454,
    384,
    "Cell content",
    "Rich text runs and multi-line cell values exercise table text layout.",
  );
}
function umbra(falconPrime) {
  let gammaPrime = falcon(falconPrime, "#FAFBFF");
  jade(
    gammaPrime,
    "Charts",
    "Representative chart authoring from the Granola test suite: line, stacked column, and scatter.",
  );
  let harborPrime = gammaPrime.charts.add("line");
  harborPrime.position = {
    left: 72,
    top: 168,
    width: 362,
    height: 230,
  };
  harborPrime.title = "Line chart";
  harborPrime.categories = ["2020", "2021", "2022", "2023"];
  let indigoPrime = harborPrime.series.add("North");
  indigoPrime.categories = harborPrime.categories;
  indigoPrime.values = [2.1, 2.5, 2.8, 3.2];
  indigoPrime.stroke = {
    width: 2,
    style: "solid",
    fill: "accent1",
  };
  indigoPrime.marker.symbol = "circle";
  indigoPrime.marker.size = 6;
  let jadePrime = harborPrime.series.add("EMEA");
  jadePrime.categories = harborPrime.categories;
  jadePrime.values = [1.8, 2, 2.4, 2.7];
  jadePrime.stroke = {
    width: 2,
    style: "solid",
    fill: "accent2",
  };
  jadePrime.marker.symbol = "square";
  jadePrime.marker.size = 6;
  harborPrime.hasLegend = true;
  harborPrime.legend.position = "top";
  let kitePrime = gammaPrime.charts.add("bar");
  kitePrime.position = {
    left: 458,
    top: 168,
    width: 362,
    height: 230,
  };
  kitePrime.title = "Stacked column";
  kitePrime.categories = ["North", "EMEA", "APAC"];
  let lemonPrime = kitePrime.series.add("Platform");
  lemonPrime.categories = kitePrime.categories;
  lemonPrime.values = [60, 80, 25];
  lemonPrime.fill = "accent1";
  let marblePrime = kitePrime.series.add("Services");
  marblePrime.categories = kitePrime.categories;
  marblePrime.values = [30, 40, 10];
  marblePrime.fill = "accent3";
  let nickelPrime = kitePrime.series.add("Support");
  nickelPrime.categories = kitePrime.categories;
  nickelPrime.values = [10, 20, 5];
  nickelPrime.fill = "accent5";
  kitePrime.barOptions.direction = "column";
  kitePrime.barOptions.grouping = "stacked";
  kitePrime.dataLabels.showValue = true;
  kitePrime.dataLabels.position = "outEnd";
  let onyxPrime = gammaPrime.charts.add("scatter");
  onyxPrime.position = {
    left: 844,
    top: 168,
    width: 362,
    height: 230,
  };
  onyxPrime.title = "Scatter";
  let pearlPrime = onyxPrime.series.add("Transit candidates");
  pearlPrime.xValues = [1.5, 3.2, 6.8, 12.4, 24.9];
  pearlPrime.values = [1.1, 1.4, 1.9, 2.5, 3.2];
  pearlPrime.marker.symbol = "circle";
  pearlPrime.marker.size = 7;
  pearlPrime.fill = "accent3";
  pearlPrime.stroke = {
    width: 2,
    style: "solid",
    fill: "accent3",
  };
  onyxPrime.scatterOptions.style = "lineWithMarkers";
  onyxPrime.xAxis.title.text = "Orbital period";
  onyxPrime.yAxis.title.text = "Radius";
  kite(
    gammaPrime,
    74,
    418,
    356,
    "Line chart",
    "Markers, legend placement, and a minimal multi-series comparison.",
  );
  kite(
    gammaPrime,
    460,
    418,
    356,
    "Stacked column",
    "Data labels and grouped columns mirror the chart test coverage.",
  );
  kite(
    gammaPrime,
    846,
    418,
    356,
    "Scatter",
    "XY data with connected markers and explicit axis titles.",
  );
}
