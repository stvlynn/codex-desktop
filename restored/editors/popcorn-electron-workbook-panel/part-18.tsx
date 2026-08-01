// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 1/2 from part-18
/* split-lane-import-depth:1 */

// Careful split 18/19

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { react } from "../../boundaries/react-cjs-runtime";
import {
  _workbookT,
  workbookB,
  workbookL,
  WorkbookR,
  workbookZ,
} from "../../workbook/editor-compat";
import { readPrefersReducedMotionAtom } from "../../motion/use-prefers-reduced-motion";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { buildMemoryFeatureFlags } from "../../settings/build-memory-feature-flags";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { deferredUiYat } from "../../ui/deferred-ui-yat";
import {
  ensureDndAxisLockModifiersInit,
  restrictToFirstScrollableAncestor,
  restrictToVerticalAxis,
} from "../../ui/dnd-axis-lock-modifiers";
import { dndAxisLockModifiers } from "../../ui/dnd-axis-lock-modifiers-bindable";
import { useDndSensors } from "../../ui/use-dnd-sensors";
import { joinStringsOrNull } from "../../utils/join-strings-or-null";
import { safeZodValue } from "../../utils/safe-zod-value";
import {
  colIndexToLetters,
  formatA1,
  initAddressMetrics,
  initAddressUtils,
  lettersToColIndex,
  parseA1Range,
  rowTokenToIndex,
} from "../../utils/spreadsheet-address-utils";
import { stack, stackOffsetExpand } from "../../vendor/d3-shape-line-pie-stack";
import { ensureD3ShapeStackOffsetInit } from "../../workbook/ensure-d3-shape-stack-offset-init";
import {
  ensureFeatureCatalogAtomsInit,
  ensureFeatureCatalogInit,
  listFeatureCatalogRows,
  PopcornFindBar,
} from "../feature-catalog";
import {
  popcornSurfaceStyle__t,
  popcornSurfaceStyle_A,
  popcornSurfaceStyle_at,
  popcornSurfaceStyle_B,
  popcornSurfaceStyle_ct,
  popcornSurfaceStyle_Ct,
  popcornSurfaceStyle_dt,
  popcornSurfaceStyle_et,
  popcornSurfaceStyle_ft,
  popcornSurfaceStyle_gt,
  popcornSurfaceStyle_H,
  popcornSurfaceStyle_ht,
  popcornSurfaceStyle_it,
  popcornSurfaceStyle_J,
  popcornSurfaceStyle_lt,
  popcornSurfaceStyle_mt,
  popcornSurfaceStyle_N,
  popcornSurfaceStyle_nt,
  popcornSurfaceStyle_O,
  popcornSurfaceStyle_ot,
  popcornSurfaceStyle_P,
  popcornSurfaceStyle_pt,
  popcornSurfaceStyle_Q,
  popcornSurfaceStyle_r,
  popcornSurfaceStyle_rt,
  popcornSurfaceStyle_st,
  popcornSurfaceStyle_St,
  popcornSurfaceStyle_t,
  popcornSurfaceStyle_tt,
  popcornSurfaceStyle_ut,
  popcornSurfaceStyle_wt,
} from "../popcorn-electron-surface-style";
import {
  RemoteTextEditSessionA,
  RemoteTextEditSessionB,
  RemoteTextEditSessionC,
  RemoteTextEditSessionE,
  RemoteTextEditSessionF,
  RemoteTextEditSessionG,
  RemoteTextEditSessionH,
  RemoteTextEditSessionI,
  RemoteTextEditSessionJ,
  RemoteTextEditSessionL,
  RemoteTextEditSessionLowerR,
  RemoteTextEditSessionLowerT,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionP,
  RemoteTextEditSessionQ,
  RemoteTextEditSessionR,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionU,
  remoteTextEditSessionUnderscore,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionX,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZ,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const AppInitialLrt: any = undefined;
const AppInitialMrt: any = undefined;
const Cliff3: any = undefined;
const Rain3: any = undefined;
const _u: any = undefined;
const amber4: any = undefined;
const basalt4: any = undefined;
const cedar4: any = undefined;
const daisy4: any = undefined;
const ember4: any = undefined;
const fern3: any = undefined;
const fetchSettingValue: any = undefined;
const flint4: any = undefined;
const garnet4: any = undefined;
const grove3: any = undefined;
const hazel4: any = undefined;
const hill3: any = undefined;
const ivory4: any = undefined;
const jasper4: any = undefined;
const kelp4: any = undefined;
const lotus4: any = undefined;
const p: any = undefined;
const quiet3: any = undefined;
const yellow4: any = undefined;
const zinc4: any = undefined;

function Seed3({
  bounds,
  zoom,
  isVisible,
  selectionRangeAddress,
  runWorksheetEdit,
  onAskSelectionContext,
}) {
  let wind22 = trail3.useMemo(
      () =>
        vine3.flatMap((item) =>
          wind3.map((_item) => {
            let birch22 = grove3[item];
            return {
              key: `${item}-${_item}`,
              label: `${item} shade ${_item}`,
              hex: birch22?.[_item] ?? "#000000",
            };
          }),
        ),
      [],
    ),
    yarrow22 = trail3.useCallback(
      (canyon22) => {
        !selectionRangeAddress ||
          !runWorksheetEdit ||
          runWorksheetEdit("applyRangeFill", {
            rangeAddress: selectionRangeAddress,
            hex: canyon22,
          });
      },
      [runWorksheetEdit, selectionRangeAddress],
    ),
    azure22 = trail3.useCallback(
      (dew22) => {
        !selectionRangeAddress ||
          !runWorksheetEdit ||
          runWorksheetEdit("applyRangeFontColor", {
            rangeAddress: selectionRangeAddress,
            hex: dew22,
          });
      },
      [runWorksheetEdit, selectionRangeAddress],
    );
  return (
    <Rain3
      {...{
        bounds,
        zoom,
        isVisible,
        items: [
          {
            kind: "button",
            id: "text-style",
            label: "Text styles",
            icon: RemoteTextEditSessionQ,
          },
          {
            kind: "button",
            id: "bold",
            label: "Bold",
            icon: RemoteTextEditSessionP,
            hideLabel: true,
            onClick: () => {
              !selectionRangeAddress ||
                !runWorksheetEdit ||
                runWorksheetEdit("toggleRangeBold", {
                  rangeAddress: selectionRangeAddress,
                });
            },
          },
          {
            kind: "button",
            id: "italic",
            label: "Italic",
            icon: RemoteTextEditSessionQ,
            hideLabel: true,
            onClick: () => {
              !selectionRangeAddress ||
                !runWorksheetEdit ||
                runWorksheetEdit("toggleRangeItalic", {
                  rangeAddress: selectionRangeAddress,
                });
            },
          },
          {
            kind: "separator",
            id: "text-separator",
          },
          {
            kind: "popover",
            id: "fill-color",
            label: "Fill color",
            icon: RemoteTextEditSessionJ,
            hideLabel: true,
            align: "center",
            content: (
              <div
                data-walnut-edit-popover="true"
                className="border-token-border-light rounded-lg border bg-white p-3 shadow-xl"
              >
                <p className="text-token-text-secondary mb-2 text-xs font-medium">
                  {"Background color"}
                </p>
                <div className="grid grid-cols-7 gap-1">
                  {wind22.map((item) => (
                    <AppInitialMrt key={item.key} asChild={true}>
                      <button
                        type="button"
                        className="focus-visible:ring-token-focus h-5 w-5 rounded-[2px] border border-black/10 transition hover:scale-105 focus:outline-none focus-visible:ring-2"
                        style={{
                          backgroundColor: item.hex,
                        }}
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          yarrow22(item.hex);
                        }}
                      >
                        <span className="sr-only">{item.label}</span>
                      </button>
                    </AppInitialMrt>
                  ))}
                </div>
              </div>
            ),
          },
          {
            kind: "popover",
            id: "text-color",
            label: "Text color",
            icon: RemoteTextEditSessionR,
            hideLabel: true,
            align: "center",
            content: (
              <div
                data-walnut-edit-popover="true"
                className="border-token-border-light rounded-lg border bg-white p-3 shadow-xl"
              >
                <p className="text-token-text-secondary mb-2 text-xs font-medium">
                  {"Text color"}
                </p>
                <div className="grid grid-cols-7 gap-1">
                  {wind22.map((item) => (
                    <AppInitialMrt key={`text-${item.key}`} asChild={true}>
                      <button
                        type="button"
                        className="focus-visible:ring-token-focus h-5 w-5 rounded-[2px] border border-black/10 transition hover:scale-105 focus:outline-none focus-visible:ring-2"
                        style={{
                          backgroundColor: item.hex,
                        }}
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          azure22(item.hex);
                        }}
                      >
                        <span className="sr-only">{item.label}</span>
                      </button>
                    </AppInitialMrt>
                  ))}
                </div>
              </div>
            ),
          },
          {
            kind: "button",
            id: "borders",
            label: "Borders",
            icon: RemoteTextEditSessionZ,
            hideLabel: true,
            onClick: () => {
              !selectionRangeAddress ||
                !runWorksheetEdit ||
                runWorksheetEdit("applyRangeBorders", {
                  rangeAddress: selectionRangeAddress,
                });
            },
          },
          {
            kind: "separator",
            id: "ask-separator",
          },
          {
            kind: "button",
            id: "ask",
            label: "Ask",
            subLabel: (
              <span className="text-token-text-tertiary text-[11px] leading-none">
                {"⌘I"}
              </span>
            ),
            onClick: () => {
              onAskSelectionContext?.();
            },
          },
        ],
      }}
    />
  );
}
var trail3,
  $,
  urn3,
  vine3,
  wind3,
  yarrow3 = esmInit(() => {
    fetchSettingValue();
    AppInitialLrt();
    ensureComposerEsm_Tft_Init();
    trail3 = commonJsInit(react());
    RemoteTextEditSessionLowerT();
    hill3();
    quiet3();
    urn3 = 12;
    vine3 = [
      "DesaturatedWarm",
      "Purple",
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Cyan",
      "Blue",
    ];
    wind3 = [700, 600, 500, 400, 300, 200, 100];
  });
function Azure3(alpha23) {
  let {
      selectionBounds,
      isDragging,
      canEdit,
      hasActiveCellEditor,
      inputFocused,
      toolbarRequested,
      delayMs = 150,
    } = alpha23,
    [bravo23, copper23] = birch3.useState(false),
    delta23 = birch3.useRef(null);
  return (
    birch3.useEffect(() => {
      let echo23 = () => {
        delta23.current != null &&
          typeof window < "u" &&
          (window.clearTimeout(delta23.current), (delta23.current = null));
      };
      return !(
        toolbarRequested &&
        selectionBounds &&
        !isDragging &&
        canEdit &&
        !hasActiveCellEditor &&
        !inputFocused
      ) || typeof window > "u"
        ? (echo23(), copper23(false), echo23)
        : (echo23(),
          (delta23.current = window.setTimeout(() => {
            copper23(true);
            delta23.current = null;
          }, delayMs)),
          echo23);
    }, [
      canEdit,
      delayMs,
      hasActiveCellEditor,
      inputFocused,
      isDragging,
      selectionBounds,
      toolbarRequested,
    ]),
    birch3.useEffect(
      () => () => {
        delta23.current != null &&
          typeof window < "u" &&
          (window.clearTimeout(delta23.current), (delta23.current = null));
      },
      [],
    ),
    bravo23
  );
}
var birch3,
  canyon3 = esmInit(() => {
    birch3 = commonJsInit(react());
  });
function Dew3({
  controller,
  snapshot,
  inputFocused,
  selectionBounds,
  selectionSummary,
  toolbarRequested,
  onAskSelectionContext,
}) {
  let falcon23 = Azure3({
    selectionBounds,
    isDragging: snapshot.isDraggingSelection,
    canEdit: true,
    hasActiveCellEditor: snapshot.editorMode === "editCell",
    inputFocused,
    toolbarRequested,
  });
  return (
    <Seed3
      {...{
        bounds: selectionBounds,
        zoom: snapshot.zoom,
        isVisible: falcon23,
        selectionRangeAddress: selectionSummary.rangeAddress || null,
        runWorksheetEdit: (gamma23, harbor23) =>
          controller.runWorksheetEdit(gamma23, harbor23),
        onAskSelectionContext,
      }}
    />
  );
}
var alpha4,
  bravo4 = esmInit(() => {
    yarrow3();
    canyon3();
  });
function Copper4(indigo23) {
  return {
    id: "popcorn-formatting",
    viewportOverlays: [
      {
        id: "popcorn-formatting-toolbar",
        render: (jade23) =>
          delta4.createElement(Dew3, {
            ...jade23,
            onAskSelectionContext: indigo23?.onAskSelectionContext ?? null,
          }),
      },
    ],
  };
}
var delta4,
  echo4 = esmInit(() => {
    delta4 = commonJsInit(react());
    bravo4();
  });
function Falcon4(kite23) {
  let lemon23 = [...(kite23.plugins ?? []), Copper4()];
  return gamma4.createElement(Cliff3, {
    ...kite23,
    plugins: lemon23,
  });
}
var gamma4,
  $l = esmInit(() => {
    gamma4 = commonJsInit(react());
    fern3();
    echo4();
  });
function Harbor4(marble23) {
  marble23.format.autofitColumns();
  marble23.format.autofitRows();
}
function Indigo4(nickel23) {
  let onyx23 = nickel23.worksheets.add("Revenue"),
    pearl23 = onyx23.getRange("A1:G7");
  pearl23.values = [
    ["Quarter", "North", "South", "West", "East", "Total", "Delta"],
    ["Q1", 120, 90, 80, 72, 362, 0.08],
    ["Q2", 135, 100, 92, 88, 415, 0.12],
    ["Q3", 150, 110, 105, 94, 459, 0.11],
    ["Q4", 170, 128, 120, 109, 527, 0.15],
    ["Q5", 182, 139, 126, 118, 565, 0.07],
    ["Q6", 194, 147, 133, 121, 595, 0.05],
  ];
  onyx23.getRange("F2").formulas = [["=SUM(B2:E2)"]];
  onyx23.getRange("F2:F7").fillDown();
  Harbor4(pearl23);
  onyx23.getRange("A1:G1").format = garnet4;
  onyx23.getRange("F2:F7").format = {
    font: {
      bold: true,
    },
  };
  onyx23.getRange("G2:G7").conditionalFormats.addColorScale(ivory4);
  onyx23.getRange("F9:H13").values = [
    ["Region", "Owner", "Status"],
    ["North", "Ava", "Done"],
    ["South", "Noah", "In progress"],
    ["West", "Mia", "Blocked"],
    ["East", "Liam", "Backlog"],
  ];
  let quartz23 = onyx23.tables.add("F9:H13", true, "RegionalOwners");
  quartz23.showFilterButton = true;
  onyx23.getRange("A15").values = [
    ["Merged viewport anchor test: scroll this block so A15 moves offscreen."],
  ];
  onyx23.getRange("A15:D18").merge();
  onyx23.getRange("A15:D18").format = {
    fill: "#E0F2FE",
    font: {
      bold: true,
      color: "#075985",
    },
    horizontalAlignment: "center",
    verticalAlignment: "middle",
    wrapText: true,
  };
  onyx23.getRange("A15:D18").format.rowHeightPx = 32;
  onyx23.getRange("A15:D18").format.columnWidthPx = 112;
  let river23 = onyx23.charts.add(
    "ColumnClustered",
    onyx23.getRange("A1:E7"),
    "Auto",
  );
  return (
    (river23.title.text = "Regional revenue"),
    river23.setPosition(onyx23.getRange("I2")),
    (river23.width = 460),
    (river23.height = 280),
    onyx23
  );
}
function Jade4() {
  return Array.from(
    {
      length: _u,
    },
    (slate23, timber23) => {
      let umbra23 = basalt4[timber23 % basalt4.length],
        violet23 = cedar4[(timber23 * 3) % cedar4.length],
        willow23 = daisy4[(timber23 * 5) % daisy4.length],
        xenon23 = ember4[(timber23 * 7) % ember4.length],
        yellow23 = 40 + ((timber23 * 11) % 180),
        zinc23 = yellow23 * (90 + ((timber23 * 17) % 45)),
        amber23 = Number((((timber23 * 13) % 28) / 100 + 0.18).toFixed(2)),
        basalt23 = flint4[(timber23 * 19) % flint4.length],
        cedar23 = (timber23 % 12) + 1,
        daisy23 = (timber23 % 27) + 1;
      return [
        umbra23,
        violet23,
        willow23,
        xenon23,
        zinc23,
        yellow23,
        amber23,
        basalt23,
        `2025-${String(cedar23).padStart(2, "0")}-${String(daisy23).padStart(2, "0")}`,
      ];
    },
  );
}
function Kite4(ember23) {
  let flint23 = Math.imul(ember23 ^ 2654435769, 2246822507);
  return (
    (flint23 ^= flint23 >>> 13),
    (flint23 = Math.imul(flint23, 3266489909)),
    (flint23 ^= flint23 >>> 16),
    (flint23 >>> 0) / 4294967296
  );
}
function Lemon4() {
  return Array.from(
    {
      length: yellow4,
    },
    (garnet23, hazel23) => {
      let ivory23 = new Date(zinc4 + hazel23 * amber4)
          .toISOString()
          .slice(0, 10),
        jasper23 = Math.sin((hazel23 * Math.PI * 2) / 7),
        kelp23 = Kite4(hazel23 * 17 + 3),
        lotus23 = Kite4(hazel23 * 29 + 11),
        mint23 = Kite4(hazel23 * 43 + 19),
        nova23 = Math.round(
          860 + hazel23 * 3.8 + jasper23 * 110 + (kelp23 - 0.5) * 120,
        );
      return [
        ivory23,
        nova23,
        Number(
          (
            185 +
            jasper23 * 14 +
            (lotus23 - 0.5) * 32 +
            (nova23 > 1250 ? 18 : 0)
          ).toFixed(1),
        ),
        Math.max(0, Math.round(8 + jasper23 * 3 + (mint23 - 0.45) * 12)),
      ];
    },
  );
}
function Marble4(olive23) {
  let prism23 = olive23.worksheets.add("Data"),
    quill23 = [
      "Region",
      "Rep",
      "Product",
      "Quarter",
      "Revenue",
      "Units",
      "Margin",
      "Status",
      "Date",
    ],
    reef23 = Jade4(),
    sage23 = olive23.utils.toA1String(1, 1, reef23.length + 1, quill23.length);
  prism23.getRange(sage23).values = [quill23, ...reef23];
  let topaz23 = prism23.tables.add(sage23, true, "SalesData");
  return (
    (topaz23.style = "TableStyleMedium2"),
    (topaz23.showFilterButton = true),
    Harbor4(prism23.getRange("A1:I12")),
    prism23
  );
}
function Nickel4(ultra23) {
  let vapor23 = ultra23.worksheets.add("Daily logs"),
    wheat23 = ["Date", "Requests", "Latency ms", "Errors"],
    yarn23 = Lemon4(),
    zephyr23 = ultra23.utils.toA1String(
      1,
      1,
      yarn23.length + 1,
      wheat23.length,
    ),
    acorn23 = vapor23.getRange(zephyr23);
  acorn23.values = [wheat23, ...yarn23];
  let bloom23 = vapor23.tables.add(zephyr23, true, "DailyLogs");
  bloom23.style = "TableStyleMedium4";
  bloom23.showFilterButton = true;
  vapor23.getRange("A1:D1").format = hazel4;
  vapor23.getRange(`C2:C${yarn23.length + 1}`).format.numberFormat = "0.0";
  vapor23
    .getRange(`B2:B${yarn23.length + 1}`)
    .conditionalFormats.addColorScale(jasper4);
  vapor23
    .getRange(`D2:D${yarn23.length + 1}`)
    .conditionalFormats.addColorScale(ivory4);
  Harbor4(vapor23.getRange("A1:D14"));
  let coral23 = vapor23.charts.add("line", acorn23, "Auto");
  return (
    (coral23.title.text = "Daily logs trend"),
    coral23.setPosition(vapor23.getRange("F2")),
    (coral23.width = 720),
    (coral23.height = 360),
    vapor23
  );
}
function Onyx4(drift23) {
  let eagle23 = drift23.worksheets.add("Pivot"),
    frost23 = drift23.pivotTables.add(
      "SalesPivot",
      "Data!A1:I1501",
      "Pivot!A3",
    ),
    { hierarchies, rowHierarchies, columnHierarchies, dataHierarchies } =
      frost23;
  rowHierarchies.add(hierarchies.getItem("Region"));
  rowHierarchies.add(hierarchies.getItem("Product"));
  columnHierarchies.add(hierarchies.getItem("Quarter"));
  dataHierarchies.add(hierarchies.getItem("Revenue"));
  dataHierarchies.add(hierarchies.getItem("Units"));
  frost23.layout.emptyCellText = "--";
  frost23.layout.preserveFormatting = true;
  eagle23.getRange("A1:F2").values = [
    ["Sales pivot", "Backed by Data!A1:I1501", "", "", "", ""],
    [
      "Try selecting the pivot body to test formatting, copy, and navigation.",
      "",
      "",
      "",
      "",
      "",
    ],
  ];
  eagle23.getRange("A1:F2").format = {
    wrapText: true,
  };
  Harbor4(eagle23.getRange("A1:F2"));
}
function Pearl4(glide23) {
  let honey23 = glide23.worksheets.add("Planning");
  honey23.getRange("A1:H9").values = [
    [
      "Workstream",
      "Owner",
      "ETA",
      "Priority",
      "Confidence",
      "Variance",
      "Status",
      "Notes",
    ],
    [
      "Canvas worker",
      "Ava",
      "2026-04-01",
      "P0",
      0.88,
      0.05,
      "Done",
      "Offscreen redraw path is in place.",
    ],
    [
      "Clipboard",
      "Noah",
      "2026-04-02",
      "P0",
      0.62,
      -0.03,
      "In progress",
      "Needs browser-system parity.",
    ],
    [
      "Pivot chrome",
      "Mia",
      "2026-04-04",
      "P1",
      0.57,
      0.01,
      "Backlog",
      "Toolbar hooks are ready.",
    ],
    [
      "Undo/redo",
      "Liam",
      "2026-04-03",
      "P0",
      0.94,
      0.09,
      "Done",
      "Granola keyboard bus already carries the mutations.",
    ],
    [
      "Charts",
      "Ivy",
      "2026-04-05",
      "P1",
      0.71,
      0.12,
      "In progress",
      "Series highlighting is now source-aware.",
    ],
    [
      "Tables",
      "Eli",
      "2026-04-05",
      "P1",
      0.83,
      0.07,
      "Done",
      "Sizing and styles should mirror Excel.",
    ],
    [
      "Validation",
      "Ava",
      "2026-04-06",
      "P1",
      0.66,
      -0.02,
      "Blocked",
      "Awaiting polished dropdown chrome.",
    ],
    [
      "Docs/Slides core",
      "Noah",
      "2026-04-08",
      "P2",
      0.48,
      0.14,
      "Backlog",
      "Shared floating selection runtime next.",
    ],
  ];
  let iris23 = honey23.tables.add("A1:H9", true, "PlanTable");
  iris23.style = "TableStyleMedium9";
  iris23.showFilterButton = true;
  honey23.getRange("E2:E9").conditionalFormats.addColorScale(ivory4);
  honey23.getRange("F2:F9").conditionalFormats.add("cellIs", {
    operator: "greaterThan",
    formula: 0.1,
    format: {
      fill: "#FEF3C7",
      font: {
        color: "#92400E",
        bold: true,
      },
    },
  });
  honey23.getRange("G2:G40").dataValidation = kelp4;
  honey23.getRange("J1:N6").values = [
    ["Scenario", "North", "South", "West", "East"],
    ["Base", 362, 415, 459, 527],
    ["Stretch", 380, 430, 490, 558],
    ["Downside", 320, 390, 421, 480],
    ["AI assist", 401, 445, 512, 590],
    ["Partner", 387, 438, 501, 572],
  ];
  Harbor4(honey23.getRange("J1:N6"));
  honey23.getRange("J1:N1").format = hazel4;
  honey23.getRange("J2:N6").conditionalFormats.addColorScale(jasper4);
}
function Quartz4(jewel23) {
  let knoll23 = jewel23.worksheets.add("Freeze");
  return (
    (knoll23.getRange("A1:H12").values = [
      [
        "Region",
        "Owner",
        "Status",
        "ETA",
        "Revenue",
        "Variance",
        "Notes",
        "Formula",
      ],
      [
        "North",
        "Ava",
        "Done",
        "2026-04-01",
        362,
        0.08,
        "Frozen panes should keep headers and the first columns visible.",
        "=E2*(1+F2)",
      ],
      [
        "South",
        "Noah",
        "In progress",
        "2026-04-02",
        415,
        0.12,
        "Drag the freeze lines from the parked handles or existing boundaries.",
        "=E3*(1+F3)",
      ],
      [
        "West",
        "Mia",
        "Blocked",
        "2026-04-03",
        459,
        -0.02,
        "This sheet is the manual playground for scrolling and frozen headers.",
        "=E4*(1+F4)",
      ],
      [
        "East",
        "Liam",
        "Backlog",
        "2026-04-04",
        527,
        0.05,
        "The first two rows and first two columns start frozen.",
        "=E5*(1+F5)",
      ],
      ...Array.from(
        {
          length: 7,
        },
        (lunar23, moss23) => [
          basalt4[moss23 % basalt4.length],
          cedar4[moss23 % cedar4.length],
          flint4[moss23 % flint4.length],
          `2026-04-${String(moss23 + 5).padStart(2, "0")}`,
          240 + moss23 * 18,
          Number((((moss23 % 5) - 2) * 0.03).toFixed(2)),
          `Row ${moss23 + 6} adds more scrollable body content for freeze testing.`,
          `=E${moss23 + 6}*(1+F${moss23 + 6})`,
        ],
      ),
    ]),
    (knoll23.getRange("A1:H2").format = hazel4),
    (knoll23.getRange("G2:G12").format = {
      wrapText: true,
    }),
    (knoll23.getRange("H2:H12").format = {
      font: {
        bold: true,
      },
    }),
    knoll23.getRange("A1:H12").format.autofitColumns(),
    (knoll23.getRange("G2:G12").format.columnWidthPx = 280),
    knoll23.getRange("G2:G12").format.autofitRows(),
    knoll23.freezePanes.freezeRows(2),
    knoll23.freezePanes.freezeColumns(2),
    knoll23
  );
}
