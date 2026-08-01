// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave5d soft stubs.
const Harbor4: any = undefined;

// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split export-budget 2/2 from part-18
/* split-lane-import-depth:1 */

// Careful split 18/19

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
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

function River4(north23) {
  let orbit23 = north23.worksheets.add("Layout");
  orbit23.getRange("A1:D8").values = [
    ["Case", "Wrap", "Height", "Preview"],
    [
      "Single line",
      "off",
      "fixed",
      "This line stays on one row and should clip when the column is narrow.",
    ],
    [
      "Wrapped paragraph",
      "on",
      "auto",
      "This is a longer sentence that should wrap naturally once the column gets narrow enough to require multiple lines.",
    ],
    ["Multiline manual", "on", "fixed", "First line\nSecond line\nThird line"],
    [
      "Wide fixed column",
      "off",
      "auto",
      "A deliberately wide column to compare against the wrapped cases.",
    ],
    [
      "Narrow fixed column",
      "on",
      "fixed",
      "Narrow column with forced wrap and explicit row height.",
    ],
    [
      "Mixed style",
      "on",
      "auto",
      "Bold headers, fills, and row auto-fit should all remain stable.",
    ],
    [
      "Notes",
      "on",
      "auto",
      "Popcorn should match Excel-like sizing rules as closely as Granola exposes today.",
    ],
  ];
  Harbor4(orbit23.getRange("A1:D8"));
  orbit23.getRange("A1:D1").format = garnet4;
  orbit23.getRange("D2:D8").format = {
    wrapText: true,
  };
  orbit23.getRange("D4:D4").format.rowHeightPx = 72;
  orbit23.getRange("D6:D6").format.rowHeightPx = 56;
  orbit23.getRange("D2:D8").format.autofitRows();
  orbit23.getRange("D2:D2").format.wrapText = false;
  orbit23.getRange("D5:D5").format.wrapText = false;
  orbit23.getRange("B2:C8").format.horizontalAlignment = "center";
  orbit23.getRange("D2:D8").format.columnWidthPx = 210;
  orbit23.getRange("A2:A8").format.columnWidthPx = 132;
  orbit23.getRange("D2:D8").format.autofitRows();
}
function Slate4(pine23) {
  let quest23 = pine23.worksheets.add("Auto row height");
  quest23.getRange("A1:C9").values = [
    ["Case", "Cell to inspect", "Expected result"],
    [
      "Instructions",
      "Open this sheet after changing the auto row height code. The rows below spell out what should happen in the cell text itself.",
      "Rows 3 and 7 should grow automatically; row 5 should stay fixed.",
    ],
    [
      "Unset row height",
      "B3 AUTO HEIGHT CHECK: this cell has wrapText=true and no explicit row height. Expected: row 3 grows tall enough to show this whole message without clipping. If only the first line is visible, unset auto row height is not working.",
      "Row 3 should be much taller than the default row height.",
    ],
    ["Spacer", "", ""],
    [
      "Custom row height",
      "B5 FIXED HEIGHT CHECK: this cell also wraps, but row 5 has an explicit 24 px custom height. Expected: row 5 stays short so this long wrapped message is clipped or visibly constrained.",
      "Row 5 should stay about 24 px high.",
    ],
    ["Spacer", "", ""],
    [
      "Manual newlines",
      "B7 AUTO HEIGHT CHECK:\nLine 2 should be visible.\nLine 3 should be visible.\nExpected: row 7 grows to show every line.",
      "Row 7 should grow to fit all newline-separated lines.",
    ],
    ["Spacer", "", ""],
    [
      "No wrap",
      "B9 NO WRAP CHECK: wrapText=false here, so the row should stay at the normal height even though the text is long.",
      "Row 9 should stay normal height.",
    ],
  ];
  quest23.getRange("A1:C1").format = garnet4;
  quest23.getRange("A1:C9").format.verticalAlignment = "top";
  quest23.getRange("A:A").format.columnWidthPx = 150;
  quest23.getRange("B:B").format.columnWidthPx = 280;
  quest23.getRange("C:C").format.columnWidthPx = 220;
  quest23.getRange("B2:C7").format.wrapText = true;
  quest23.getRange("B9:C9").format.wrapText = false;
  quest23.getRange("5:5").format.rowHeightPx = 24;
  quest23.getRange("A2:C9").format.fill = "#F8FAFC";
  quest23.getRange("A3:C3").format.fill = "#DCFCE7";
  quest23.getRange("A5:C5").format.fill = "#FEF3C7";
  quest23.getRange("A7:C7").format.fill = "#DBEAFE";
}
function Timber4(ridge23) {
  let storm23 = ridge23.worksheets.add("Catalog"),
    tide23 = listFeatureCatalogRows();
  storm23.getRange(
    ridge23.utils.toA1String(1, 1, tide23.length + 1, lotus4.length),
  ).values = [lotus4, ...tide23];
  let unity23 = storm23.tables.add(
    ridge23.utils.toA1String(1, 1, tide23.length + 1, lotus4.length),
    true,
    "FeatureCatalog",
  );
  unity23.style = "TableStyleMedium4";
  unity23.showFilterButton = true;
  storm23.getRange("A1:D1").format = hazel4;
  storm23.getRange("D2:D200").format = {
    wrapText: true,
  };
  storm23.getRange("B2:B200").conditionalFormats.addCustom('=$A2="Workbook"', {
    fill: "#DBEAFE",
  });
  storm23
    .getRange("B2:B200")
    .conditionalFormats.addCustom('=$A2="Presentation"', {
      fill: "#EDE9FE",
    });
  storm23.getRange("B2:B200").conditionalFormats.addCustom('=$A2="Document"', {
    fill: "#DCFCE7",
  });
  Harbor4(storm23.getRange("A1:D40"));
  storm23.getRange("D2:D40").format.columnWidthPx = 420;
  storm23.getRange("D2:D40").format.autofitRows();
}
function Umbra4(vale23) {
  let wave23 = vale23.worksheets.add("Showcase");
  wave23.getRange("A1:H8").values = [
    [
      "Artifact",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Sparkline",
      "Object demo",
      "Notes",
    ],
    [
      "Workbook",
      5,
      7,
      9,
      11,
      "",
      "Shape + image",
      "Anchored workbook drawings",
    ],
    [
      "Presentation",
      4,
      6,
      8,
      10,
      "",
      "Chart parity",
      "Shared object primitives",
    ],
    ["Document", 3, 5, 6, 9, "", "Inline media", "Pagination-aware editing"],
    ["Shared", 6, 8, 10, 12, "", "Worker split", "Shared text-edit runtime"],
  ];
  wave23.getRange("A1:H1").format = garnet4;
  wave23.getRange("H2:H5").format = {
    wrapText: true,
  };
  wave23.getRange("F2:F5").sparklines.add("line", wave23.getRange("B2:E5"), {
    markers: {
      show: true,
    },
  });
  let apex23 = wave23.shapes.add({
    geometry: "upArrow",
    anchor: {
      from: {
        row: 1,
        col: 6,
        rowOffsetPx: 6,
        colOffsetPx: 4,
      },
      extent: {
        widthPx: 170,
        heightPx: 120,
      },
    },
    fill: {
      type: "solid",
      color: "#2563EB",
    },
    line: {
      width: 1,
      style: "solid",
      fill: "#1D4ED8",
    },
  });
  apex23.text = "Flip me\nvertically";
  apex23.text.color = "#FFFFFF";
  apex23.text.alignment = "center";
  apex23.text.verticalAlignment = "middle";
  apex23.text.wrap = "square";
  wave23.shapes.add({
    geometry: "star5",
    anchor: {
      from: {
        row: 4,
        col: 6,
        rowOffsetPx: 4,
        colOffsetPx: 18,
      },
      extent: {
        widthPx: 54,
        heightPx: 54,
      },
    },
    fill: {
      type: "gradient",
      angleDeg: 90,
      stops: [
        {
          offset: 0,
          color: "accent2",
        },
        {
          offset: 1e5,
          color: "accent5",
        },
      ],
    },
    line: {
      width: 1,
      style: "solid",
      fill: "text1",
    },
  });
  wave23.images.add({
    dataUrl: RemoteTextEditSessionA,
    anchor: {
      from: {
        row: 3,
        col: 6,
        rowOffsetPx: 10,
        colOffsetPx: 96,
      },
      extent: {
        widthPx: 44,
        heightPx: 44,
      },
    },
  });
  Harbor4(wave23.getRange("A1:H8"));
  wave23.getRange("H2:H5").format.columnWidthPx = 240;
  wave23.getRange("H2:H5").format.autofitRows();
}
