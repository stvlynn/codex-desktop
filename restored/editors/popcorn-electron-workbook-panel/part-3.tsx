// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 3/19
/* split-lane-import-depth:1 */

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

// Wave5d soft stubs.
const $n: any = undefined;
const Acorn: any = undefined;
const Bloom: any = undefined;
const Coral: any = undefined;
const Lotus: any = undefined;
const Mint: any = undefined;
const Nova: any = undefined;
const Prism: any = undefined;
const Quill: any = undefined;
const Sage: any = undefined;
const Slate: any = undefined;
const Ultra: any = undefined;
const Umbra: any = undefined;
const Vapor: any = undefined;
const Wheat: any = undefined;
const Yarn: any = undefined;
const Zephyr: any = undefined;
const garnet: any = undefined;
const violet: any = undefined;

function Drift(birch6) {
  let {
      colOffsets,
      rowOffsets,
      resolveMergedRect,
      normalizedRect,
      selectionRect,
      clampedRect,
    } = Nova({
      camera: birch6.frame.camera,
      activeCell: birch6.activeCell,
      selectionRect: birch6.selectionRect,
      selectionStart: birch6.selectionStart,
      selectionEnd: birch6.selectionEnd,
      viewColWidths: birch6.viewColWidths,
      rowHeights: birch6.rowHeights,
      freezePanes: birch6.freezePanes,
      sheet: birch6.sheet,
    }),
    canyon6 = birch6.fillPreviewRect
      ? Mint({
          camera: birch6.frame.camera,
          colOffsets,
          freezePanes: birch6.freezePanes,
          resolveMergedRect,
          rowOffsets,
          rowHeights: birch6.rowHeights,
          selectionStart: {
            row: Math.min(birch6.fillPreviewRect.r1, birch6.fillPreviewRect.r2),
            col: Math.min(birch6.fillPreviewRect.c1, birch6.fillPreviewRect.c2),
          },
          selectionEnd: {
            row: Math.max(birch6.fillPreviewRect.r1, birch6.fillPreviewRect.r2),
            col: Math.max(birch6.fillPreviewRect.c1, birch6.fillPreviewRect.c2),
          },
          viewColWidths: birch6.viewColWidths,
        })
      : null,
    dew6 = birch6.suppressCellSelection
      ? birch6.rangeHighlights?.filter(
          (alpha7) => alpha7.visibleWhenCellSelectionSuppressed,
        )
      : birch6.rangeHighlights;
  Sage({
    frame: birch6.frame,
    colOffsets,
    rowOffsets,
    viewColWidths: birch6.viewColWidths,
    rowHeights: birch6.rowHeights,
    rangeHighlights: dew6,
  });
  !birch6.suppressCellSelection &&
    selectionRect &&
    clampedRect &&
    (Quill({
      accentFill: birch6.accentFill,
      frame: birch6.frame,
      selectionRect,
    }),
    Wheat({
      accentStroke: birch6.accentStroke,
      frame: birch6.frame,
      selectionRect,
    }),
    $n({
      accentStroke: birch6.accentStroke,
      fillPreviewRect: canyon6,
      frame: birch6.frame,
      selectionRect,
    }),
    birch6.showFillHandle &&
      Yarn({
        accentStroke: birch6.accentStroke,
        frame: birch6.frame,
        selectionRect: normalizedRect,
      }),
    Bloom({
      accentFill: birch6.accentFill,
      accentStroke: birch6.accentStroke,
      frame: birch6.frame,
      rowHeights: birch6.rowHeights,
      rowOffsets,
      selectionRect,
      viewColWidths: birch6.viewColWidths,
      colOffsets,
    }));
  Ultra({
    awarenessSelections: birch6.awarenessSelections ?? [],
    frame: birch6.frame,
    resolveMergedRect,
    rowHeights: birch6.rowHeights,
    rowOffsets,
    viewColWidths: birch6.viewColWidths,
    colOffsets,
  });
  Coral({
    frame: birch6.frame,
    drawingOcclusionRects: birch6.drawingOcclusionRects ?? [],
  });
  Vapor({
    awarenessDrawingSelections: birch6.awarenessDrawingSelections ?? [],
    frame: birch6.frame,
  });
  Zephyr({
    accentStroke: birch6.accentStroke,
    drawingSelection: birch6.drawingSelection ?? null,
    frame: birch6.frame,
    showResizeHandles: birch6.showDrawingHandles,
  });
  Acorn({
    accentStroke: birch6.accentStroke,
    frame: birch6.frame,
    resizeGuide: birch6.resizeGuide,
  });
}
function or(bravo7) {
  if (!bravo7.overlayCanvas) return;
  let copper7 = bravo7.overlayCanvas.getContext("2d");
  if (!copper7) return;
  let { width, height, dpr } = bravo7.viewportMetrics;
  (width <= 0 || height <= 0 || dpr <= 0) && bravo7.syncViewportCanvases();
  let delta7 = Lotus({
    camera: bravo7.camera,
    freezePanes: bravo7.freezePanes,
    ctx: copper7,
    viewportMetrics: bravo7.viewportMetrics,
    viewColWidths: bravo7.viewColWidths,
    rowHeights: bravo7.rowHeights,
  });
  delta7 &&
    Drift({
      frame: delta7,
      activeCell: bravo7.activeCell,
      selectionRect: bravo7.selectionRect,
      selectionStart: bravo7.selectionStart,
      selectionEnd: bravo7.selectionEnd,
      awarenessSelections: bravo7.awarenessSelections,
      awarenessDrawingSelections: bravo7.awarenessDrawingSelections,
      rangeHighlights: bravo7.rangeHighlights,
      drawingSelection: bravo7.drawingSelection,
      drawingOcclusionRects: bravo7.drawingOcclusionRects,
      viewColWidths: bravo7.viewColWidths,
      rowHeights: bravo7.rowHeights,
      freezePanes: bravo7.freezePanes,
      accentFill: bravo7.accentFill,
      accentStroke: bravo7.accentStroke,
      sheet: bravo7.sheet,
      resizeGuide: bravo7.resizeGuide,
      fillPreviewRect: bravo7.fillPreviewRect,
      showFillHandle: bravo7.showFillHandle,
      showDrawingHandles: bravo7.showDrawingHandles,
      suppressCellSelection: bravo7.suppressCellSelection,
    });
}
function Eagle(echo7, falcon7) {
  let gamma7 = echo7.trim();
  if (gamma7.startsWith("rgba(")) {
    let harbor7 = gamma7
      .slice(5, -1)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    if (harbor7.length >= 3)
      return `rgba(${harbor7[0]}, ${harbor7[1]}, ${harbor7[2]}, ${falcon7})`;
  }
  if (echo7.startsWith("#")) {
    let indigo7 = echo7.slice(1),
      jade7 =
        indigo7.length === 3
          ? indigo7
              .split("")
              .map((item) => `${item}${item}`)
              .join("")
          : indigo7;
    if (jade7.length === 6)
      return `rgba(${Number.parseInt(jade7.slice(0, 2), 16)}, ${Number.parseInt(jade7.slice(2, 4), 16)}, ${Number.parseInt(jade7.slice(4, 6), 16)}, ${falcon7})`;
  }
  return echo7.startsWith("rgb(")
    ? echo7.replace("rgb(", "rgba(").replace(")", `, ${falcon7})`)
    : echo7;
}
var frost = esmInit(() => {
  initAddressMetrics();
  violet();
  garnet();
  popcornSurfaceStyle_ft();
  popcornSurfaceStyle_St();
});
function Glide(kite7) {
  let lemon7 = kite7.trim();
  if (lemon7.length === 0) return "";
  if (lemon7.toLowerCase() === "true") return true;
  if (lemon7.toLowerCase() === "false") return false;
  let marble7 = Number(lemon7);
  return !Number.isNaN(marble7) && lemon7 === String(marble7) ? marble7 : kite7;
}
function Honey(nickel7) {
  return `<table>${nickel7.map((item) => `<tr>${item.map((_item) => `<td>${Moss(_item == null ? "" : String(_item))}</td>`).join("")}</tr>`).join("")}</table>`;
}
function Iris(onyx7) {
  let pearl7 = onyx7
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .split("\n")
      .map((item) => item.split("\t")),
    quartz7 = pearl7.map((item) =>
      item.map((_item) =>
        _item.trimStart().startsWith("=") ? _item : Glide(_item),
      ),
    ),
    river7 = pearl7.map((item) =>
      item.map((_item) =>
        _item.trimStart().startsWith("=") ? _item.trimStart() : null,
      ),
    );
  return {
    kind: "copy",
    source: {
      sheetName: "",
      range: {
        r1: 0,
        c1: 0,
        r2: Math.max(pearl7.length - 1, 0),
        c2: Math.max(...pearl7.map((item) => item.length), 1) - 1,
      },
    },
    values: quartz7,
    formulas: river7,
    plainText: onyx7,
    html: Honey(quartz7),
  };
}
function Jewel(slate7, timber7) {
  return {
    ...Iris(timber7 && timber7.length > 0 ? timber7 : North(slate7)),
    html: slate7,
  };
}
function Knoll(umbra7) {
  return {
    row: rowTokenToIndex(umbra7),
    col: lettersToColIndex(umbra7),
  };
}
function Lunar(violet7, willow7) {
  return `${colIndexToLetters(willow7)}${violet7 + 1}`;
}
function Moss(xenon7) {
  return xenon7
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function North(yellow7) {
  if (typeof DOMParser < "u")
    try {
      let zinc7 = new DOMParser().parseFromString(yellow7, "text/html"),
        amber7 = zinc7.querySelector("table");
      return amber7
        ? Array.from(amber7.rows)
            .map((item) =>
              Array.from(item.cells)
                .map((_item) => _item.textContent ?? "")
                .join("\t"),
            )
            .join("\n")
        : (zinc7.body?.textContent ?? "");
    } catch {}
  return yellow7
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/tr>/gi, "\n")
    .replace(/<\/t[dh]>/gi, "\t")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\t+\n/g, "\n")
    .trimEnd();
}
var _r = esmInit(() => {
  initAddressMetrics();
});
function Orbit(basalt7) {
  if (basalt7.length === 0) return null;
  let cedar7 = basalt7[0]?.left ?? 0,
    daisy7 = basalt7[0]?.top ?? 0,
    ember7 = cedar7 + (basalt7[0]?.width ?? 0),
    flint7 = daisy7 + (basalt7[0]?.height ?? 0);
  for (let garnet7 of basalt7.slice(1)) {
    cedar7 = Math.min(cedar7, garnet7.left);
    daisy7 = Math.min(daisy7, garnet7.top);
    ember7 = Math.max(ember7, garnet7.left + garnet7.width);
    flint7 = Math.max(flint7, garnet7.top + garnet7.height);
  }
  return {
    left: cedar7,
    top: daisy7,
    width: Math.max(0, ember7 - cedar7),
    height: Math.max(0, flint7 - daisy7),
  };
}
var pine = esmInit(() => {});
function Quest(hazel7) {
  let ivory7 = hazel7.selectionSummary.rect;
  return ivory7
    ? {
        type: "workbook-range",
        sheetName: hazel7.sheetName,
        rangeAddress: hazel7.selectionSummary.rangeAddress,
        rect: {
          ...ivory7,
        },
        rows: hazel7.selectionSummary.rows,
        cols: hazel7.selectionSummary.cols,
        ...(hazel7.anchorPoint == null
          ? {}
          : {
              anchorPoint: {
                ...hazel7.anchorPoint,
              },
            }),
      }
    : null;
}
function Ridge(jasper7) {
  let kelp7 =
    jasper7.anchorPoint == null
      ? null
      : {
          ...jasper7.anchorPoint,
        };
  return {
    type: "workbook-floating-element",
    sheetName: jasper7.sheetName,
    elementId: jasper7.selectedFloatingElement.id,
    elementKind: jasper7.selectedFloatingElement.kind,
    logicalBounds: {
      ...jasper7.selectedFloatingElement.logicalBounds,
    },
    rotation: jasper7.selectedFloatingElement.rotation,
    ...(kelp7 == null
      ? {}
      : {
          anchorPoint: kelp7,
          elementOffset: {
            x: kelp7.x - jasper7.selectedFloatingElement.logicalBounds.x,
            y: kelp7.y - jasper7.selectedFloatingElement.logicalBounds.y,
          },
        }),
  };
}
function Storm(lotus7) {
  if (lotus7.type === "workbook-range")
    return `${lotus7.sheetName}!${lotus7.rangeAddress}`;
  let mint7 =
    lotus7.elementKind === "xlsx-chart"
      ? "Chart"
      : lotus7.elementKind === "xlsx-image"
        ? "Image"
        : "Shape";
  return `${lotus7.sheetName} · ${mint7}`;
}
function Tide(nova7) {
  return {
    r1: nova7.rect.r1,
    c1: nova7.rect.c1,
    r2: nova7.rect.r2,
    c2: nova7.rect.c2,
    color: nova7.color,
    dashed: true,
    fillAlpha: grove,
    borderWidthPx: 2,
    borderRadiusPx: 2,
    visibleWhenCellSelectionSuppressed: true,
  };
}
function Unity(olive7, prism7) {
  return prism7 <= 0 ? 0 : Math.max(0, Math.min(olive7, prism7 - 1));
}
function Vale(quill7, reef7, sage7) {
  if (sage7 <= 0 || quill7 <= 0) return 0;
  if (quill7 >= (reef7[sage7] ?? 0)) return sage7 - 1;
  let topaz7 = 0;
  for (; topaz7 < sage7 && (reef7[topaz7 + 1] ?? 0) <= quill7; ) topaz7 += 1;
  return Unity(topaz7, sage7);
}
function Wave(ultra7) {
  if (ultra7.columnWidths.length === 0 || ultra7.rowHeights.length === 0)
    return {
      rangeAddress: null,
      coveredCells: null,
    };
  let vapor7 = Math.max(0, ultra7.logicalBounds.left - 40),
    wheat7 = Math.max(0, ultra7.logicalBounds.top - 20),
    yarn7 = Math.max(
      vapor7,
      ultra7.logicalBounds.left + ultra7.logicalBounds.width - 40,
    ),
    zephyr7 = Math.max(
      wheat7,
      ultra7.logicalBounds.top + ultra7.logicalBounds.height - 20,
    ),
    acorn7 = Vale(vapor7, ultra7.colOffsets, ultra7.columnWidths.length),
    bloom7 = Vale(wheat7, ultra7.rowOffsets, ultra7.rowHeights.length),
    coral7 = Vale(yarn7, ultra7.colOffsets, ultra7.columnWidths.length),
    drift7 = Vale(zephyr7, ultra7.rowOffsets, ultra7.rowHeights.length),
    eagle7 = {
      r1: Math.min(bloom7, drift7),
      c1: Math.min(acorn7, coral7),
      r2: Math.max(bloom7, drift7),
      c2: Math.max(acorn7, coral7),
    };
  return {
    rangeAddress:
      eagle7.r1 === eagle7.r2 && eagle7.c1 === eagle7.c2
        ? Lunar(eagle7.r1, eagle7.c1)
        : `${Lunar(eagle7.r1, eagle7.c1)}:${Lunar(eagle7.r2, eagle7.c2)}`,
    coveredCells: eagle7,
  };
}
function Apex(frost7) {
  return {
    type: "workbook-drawing-region",
    sheetName: frost7.sheetName,
    logicalBounds: {
      ...frost7.logicalBounds,
    },
    viewportBounds: {
      ...frost7.viewportBounds,
    },
    rangeAddress: frost7.rangeAddress,
    coveredCells:
      frost7.coveredCells == null
        ? null
        : {
            ...frost7.coveredCells,
          },
  };
}
function Brook(glide7) {
  return glide7.rangeAddress
    ? `${glide7.sheetName}!${glide7.rangeAddress} · Drawing`
    : `${glide7.sheetName} · Drawing`;
}
function Cliff(event) {
  return event.target.type === "workbook-range"
    ? Prism({
        camera: event.camera,
        freezePanes: event.freezePanes,
        selectionRect: event.target.rect,
        viewColWidths: event.columnWidths,
        rowHeights: event.rowHeights,
        sheet: event.sheet,
      })
    : Fern({
        camera: event.camera,
        freezePanes: event.freezePanes,
        columnWidths: event.columnWidths,
        rowHeights: event.rowHeights,
        bounds: {
          left: event.target.logicalBounds.x,
          top: event.target.logicalBounds.y,
          width: event.target.logicalBounds.width,
          height: event.target.logicalBounds.height,
        },
      });
}
function Dusk(event) {
  if (
    event.target.type === "workbook-range" ||
    event.target.anchorPoint == null
  )
    return Cliff(event);
  let honey7 = Slate({
    camera: event.camera,
    worldX: event.target.anchorPoint.x,
    worldY: event.target.anchorPoint.y,
    freezePanes: event.freezePanes,
    columnWidths: event.columnWidths,
    rowHeights: event.rowHeights,
  });
  return {
    left: honey7.x,
    top: honey7.y,
    width: 0,
    height: 0,
  };
}
function Elm(iris7) {
  return iris7.selectedFloatingElement
    ? Ridge({
        sheetName: iris7.snapshot.activeSheetName,
        selectedFloatingElement: iris7.selectedFloatingElement,
        anchorPoint: iris7.floatingAnchorPoint,
      })
    : Quest({
        sheetName: iris7.snapshot.activeSheetName,
        selectionSummary: iris7.selectionSummary,
        anchorPoint: iris7.rangeAnchorPoint,
      });
}
function Fern(jewel7) {
  return Orbit(
    Umbra({
      camera: jewel7.camera,
      worldX: jewel7.bounds.left,
      worldY: jewel7.bounds.top,
      width: jewel7.bounds.width,
      height: jewel7.bounds.height,
      freezePanes: jewel7.freezePanes,
      columnWidths: jewel7.columnWidths,
      rowHeights: jewel7.rowHeights,
    }).map((item) => ({
      left: item.x,
      top: item.y,
      width: item.width,
      height: item.height,
    })),
  );
}
var grove,
  hill = esmInit(() => {
    violet();
    frost();
    initAddressMetrics();
    _r();
    pine();
    grove = 0.2;
  });
async function Isle(knoll7) {
  return (await knoll7.requestExport()).workbookProto;
}
async function Juniper(lunar7, moss7, north7) {
  return lunar7.requestCellState(moss7, north7);
}
async function Lagoon(orbit7, pine7, quest7, ridge7) {
  return pine7.trim()
    ? orbit7.requestFindMatches(pine7, ridge7)
    : {
        query: pine7,
        matches: [],
        total: 0,
      };
}
function Meadow(storm7, tide7) {
  return storm7.getState().overlays.chartSelectionHighlights.map((item) => ({
    ...item,
  }));
}
var nest = esmInit(() => {});
function Oak({ getCamera, overlayHtmlLayerRef }) {
  let unity7 = petal.useRef(false),
    vale7 = petal.useRef(null),
    wave7 = petal.useCallback((apex7 = 520) => {
      unity7.current = true;
      vale7.current != null && window.clearTimeout(vale7.current);
      vale7.current = window.setTimeout(() => {
        unity7.current = false;
        vale7.current = null;
      }, apex7);
    }, []);
  return (
    petal.useEffect(
      () => () => {
        vale7.current != null &&
          (window.clearTimeout(vale7.current), (vale7.current = null));
      },
      [],
    ),
    {
      programmaticViewportUpdateRef: unity7,
      markProgrammaticViewportUpdate: wave7,
      updateOverlayTransform: petal.useCallback(() => {
        let brook7 = overlayHtmlLayerRef.current;
        brook7 && (brook7.style.transform = "translate(0px, 0px)");
      }, [overlayHtmlLayerRef]),
    }
  );
}
var petal,
  quiet = esmInit(() => {
    petal = commonJsInit(react());
  });
function Rain() {
  urn ||= (RemoteTextEditSessionP(), true);
}
function Seed() {
  return RemoteTextEditSessionL() && urn;
}
function Trail() {
  return (
    (vine ??= Promise.all([
      RemoteTextEditSessionU(),
      Promise.resolve().then(() => {
        Rain();
      }),
    ]).then(() => {})),
    vine
  );
}
var urn,
  vine,
  wind = esmInit(() => {
    RemoteTextEditSessionF();
    RemoteTextEditSessionH();
    urn = false;
    vine = null;
  });
function Yarrow(cliff7) {
  let dusk7 = [0];
  for (let elm7 = 0; elm7 < cliff7.length; elm7 += 1)
    dusk7[elm7 + 1] = (dusk7[elm7] ?? 0) + (cliff7[elm7] ?? 0);
  return dusk7;
}
function Azure(fern7, grove7) {
  return (
    fern7?.width === grove7.width &&
    fern7?.height === grove7.height &&
    fern7?.dpr === grove7.dpr
  );
}
