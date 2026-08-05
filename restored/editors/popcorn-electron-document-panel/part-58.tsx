// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 58/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import {
  jsxRuntime as getJsxRuntime,
  react,
} from "../../boundaries/react-cjs-runtime";
import {
  __workbookT,
  _workbookT,
  workbookA,
  workbookB,
  workbookC,
  workbookD,
  workbookE,
  workbookF,
  workbookG,
  WorkbookI,
  workbookIt,
  workbookJ,
  workbookK,
  workbookL,
  workbookLt,
  workbookM,
  workbookN,
  workbookNt,
  workbookO,
  workbookOt,
  workbookP,
  workbookQ,
  WorkbookR,
  workbookRt,
  workbookS,
  workbookSt,
  workbookU,
  workbookUnderscore,
  workbookV,
  workbookW,
  WorkbookW,
  workbookX,
  workbookY,
  workbookZ,
} from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureFeatureCatalogAtomsInit,
  ensureFeatureCatalogInit,
  getFeatureCatalogEntries,
  PopcornFindBar,
} from "../feature-catalog";
import {
  ensurePopcornPageNumberNavigationInit,
  PopcornPageNumberNavigation,
} from "../popcorn-page-number-navigation";
import {
  ensureRemoteTextEditSessionInit,
  RemoteTextEditSessionA,
  RemoteTextEditSessionB,
  RemoteTextEditSessionC,
  RemoteTextEditSessionChrome,
  RemoteTextEditSessionE,
  RemoteTextEditSessionF,
  RemoteTextEditSessionH,
  RemoteTextEditSessionI,
  RemoteTextEditSessionLowerT,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionP,
  RemoteTextEditSessionR,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionU,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionX,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const _: any = undefined;
const d: any = undefined;
const garnetR1: any = undefined;
const hazelR1: any = undefined;
const lotusR1: any = undefined;
const o: any = undefined;
const s: any = undefined;
const u: any = undefined;
const waveR24: any = undefined;

function _s(glideR9) {
  if (!(!glideR9 || glideR9.val === "nil"))
    return WorkbookW({
      color: frostR1(glideR9),
      width: zephyrR1(glideR9),
      style: "solid",
    })?.toProto();
}
function zephyrR1(tideR10) {
  let basaltR14 = Number(tideR10.sz);
  return !Number.isFinite(basaltR14) || basaltR14 <= 0 ? 1 : basaltR14 / 6;
}
function bloomR1(marbleR6) {
  if (!marbleR6) return;
  let orbitR23 = {
    left: coralR1(marbleR6.left),
    right: coralR1(marbleR6.right),
    top: coralR1(marbleR6.top),
    bottom: coralR1(marbleR6.bottom),
  };
  if (
    !(
      orbitR23.left === undefined &&
      orbitR23.right === undefined &&
      orbitR23.top === undefined &&
      orbitR23.bottom === undefined
    )
  )
    return orbitR23;
}
function coralR1(groveR11) {
  if (!(!groveR11 || groveR11.type !== "dxa")) return driftR1(groveR11.w);
}
function driftR1(driftR9) {
  if (driftR9 === undefined) return;
  let ridgeR26 = Number(driftR9);
  return Number.isFinite(ridgeR26) ? Math.round(ridgeR26 * 635) : undefined;
}
function eagleR1(topazR7) {
  if (!(!topazR7 || topazR7.val === "nil"))
    return glideR1({
      val: topazR7.val,
      color: topazR7.fill,
      themeColor: topazR7.themeFill,
      themeTint: topazR7.themeFillTint,
      themeShade: topazR7.themeFillShade,
    });
}
function frostR1(violetR8) {
  if (violetR8.val !== "nil")
    return glideR1({
      color: violetR8.color,
      themeColor: violetR8.themeColor,
      themeTint: violetR8.themeTint,
      themeShade: violetR8.themeShade,
    });
}
function glideR1(daisyR5) {
  if (!daisyR5 || daisyR5.val === "nil") return;
  let duskR22 = honeyR1(daisyR5.themeColor),
    elmR22 = irisR1(daisyR5),
    fernR22 = daisyR5.color ?? daisyR5.val;
  return duskR22
    ? {
        type: "proto",
        proto: {
          type: d.COLOR_TYPE_SCHEME,
          value: duskR22,
          transform: elmR22,
          lastColor: fernR22,
        },
      }
    : fernR22
      ? `#${fernR22}`
      : undefined;
}
function honeyR1(jasperR4) {
  switch (jasperR4) {
    case "accent1":
      return "accent1";
    case "accent2":
      return "accent2";
    case "accent3":
      return "accent3";
    case "accent4":
      return "accent4";
    case "accent5":
      return "accent5";
    case "accent6":
      return "accent6";
    case "background1":
      return "bg1";
    case "background2":
      return "bg2";
    case "text1":
      return "tx1";
    case "text2":
      return "tx2";
    default:
      return;
  }
}
function irisR1(stormR5) {
  if (stormR5.themeTint !== undefined) {
    let frostR26 = Number.parseInt(stormR5.themeTint, 16) / 255;
    return {
      lumMod: Math.round(frostR26 * 1e5),
      lumOff: Math.round((1 - frostR26) * 1e5),
    };
  }
  if (stormR5.themeShade !== undefined) {
    let falconR14 = Number.parseInt(stormR5.themeShade, 16) / 255;
    return {
      lumMod: Math.round(falconR14 * 1e5),
    };
  }
}
function jewelR1(honeyR10, irisR10) {
  switch (irisR10) {
    case "TableStyleLight1":
      knollR1(honeyR10);
      break;
  }
}
function knollR1(oliveR4) {
  if (oliveR4.rowCount === 0 || oliveR4.columnCount === 0) return;
  let isleR21 = oliveR4.styleOptions,
    alphaR22 = oliveR4.cells.block({
      row: 0,
      column: 0,
      rowCount: oliveR4.rowCount,
      columnCount: oliveR4.columnCount,
    });
  alphaR22.forEachCell((pearlR13) => {
    pearlR13.margins = ivoryR25;
  });
  alphaR22.borders = {
    top: xenonR25,
    bottom: xenonR25,
    insideHorizontal: xenonR25,
  };
  alphaR22.textStyle.color = "#111111";
  mossR1(oliveR4, isleR21);
  northR1(oliveR4, isleR21);
  js(oliveR4, isleR21);
  orbitR1(oliveR4, isleR21);
  pineR1(oliveR4, isleR21);
}
function mossR1(ivoryR7, jasperR7) {
  if (!jasperR7.headerRow) return;
  let deltaR25 = ivoryR7.cells.block({
    row: 0,
    column: 0,
    rowCount: 1,
    columnCount: ivoryR7.columnCount,
  });
  deltaR25.textStyle.bold = true;
  deltaR25.borders = {
    bottom: xenonR25,
  };
}
function northR1(yellowR7, zincR7) {
  if (!zincR7.totalRow) return;
  let fernR24 = yellowR7.cells.block({
    row: yellowR7.rowCount - 1,
    column: 0,
    rowCount: 1,
    columnCount: yellowR7.columnCount,
  });
  fernR24.textStyle.bold = true;
  fernR24.borders = {
    top: xenonR25,
  };
}
function js(yellowR5, zincR5) {
  zincR5.firstColumn &&
    (yellowR5.cells.block({
      row: 0,
      column: 0,
      rowCount: yellowR5.rowCount,
      columnCount: 1,
    }).textStyle.bold = true);
  zincR5.lastColumn &&
    (yellowR5.cells.block({
      row: 0,
      column: yellowR5.columnCount - 1,
      rowCount: yellowR5.rowCount,
      columnCount: 1,
    }).textStyle.bold = true);
}
function orbitR1(acornR5, bloomR5) {
  if (!bloomR5.bandedRows) return;
  let nickelR23 = +!!bloomR5.headerRow,
    onyxR23 = bloomR5.totalRow ? acornR5.rowCount - 2 : acornR5.rowCount - 1;
  for (let basaltR25 = nickelR23; basaltR25 <= onyxR23; basaltR25 += 1)
    (basaltR25 - nickelR23) % 2 == 0 &&
      (acornR5.cells.block({
        row: basaltR25,
        column: 0,
        rowCount: 1,
        columnCount: acornR5.columnCount,
      }).fill = "#D9D9D9");
}
function pineR1(emberR5, flintR5) {
  if (!flintR5.bandedColumns) return;
  let alphaR23 = +!!flintR5.firstColumn,
    copperR23 = flintR5.lastColumn
      ? emberR5.columnCount - 2
      : emberR5.columnCount - 1;
  for (let hazelR25 = alphaR23; hazelR25 <= copperR23; hazelR25 += 1)
    (hazelR25 - alphaR23) % 2 == 0 &&
      (emberR5.cells.block({
        row: 0,
        column: hazelR25,
        rowCount: emberR5.rowCount,
        columnCount: 1,
      }).fill = "#D9D9D9");
}
var bravoR25,
  marbleR25,
  xenonR25,
  ivoryR25,
  ultraR25 = esmInit(() => {
    u();
    _();
    __workbookT();
    workbookUnderscore();
    waveR24();
    bravoR25 = {
      tableStyleLight1: "TableStyleLight1",
    };
    marbleR25 = {
      TableStyleLight1: bravoR25.tableStyleLight1,
      "Table Style Light 1": bravoR25.tableStyleLight1,
    };
    xenonR25 = {
      color: "#111111",
      width: 0.35,
      style: "solid",
    };
    ivoryR25 = {
      left: 7.2,
      right: 7.2,
      top: 2.4,
      bottom: 2.4,
    };
  });
function questR1(eagleR11) {
  if (!(eagleR11 === undefined || !Number.isFinite(eagleR11))) return eagleR11;
}
function ridgeR1(amberR11) {
  if (!(amberR11 === undefined || !Number.isFinite(amberR11) || amberR11 <= 0))
    return amberR11;
}
function stormR1(mossR7, northR7 = {}) {
  let violetR25 = {
    left: questR1(mossR7.left),
    top: questR1(mossR7.top),
    width: ridgeR1(mossR7.width),
    height: ridgeR1(mossR7.height),
  };
  return (
    northR7.inline &&
      ((violetR25.left = undefined), (violetR25.top = undefined)),
    violetR25
  );
}
function tideR1(lotusR8, mintR8, novaR8) {
  let questR25 = valeR1(mintR8, novaR8);
  if (!(!lotusR8 && !apexR1(questR25)))
    return {
      type: s.ELEMENT_PLACEMENT_TYPE_INLINE,
      horizontalAlignment: lotusR8,
      ...questR25,
    };
}
function unityR1(quartzR5, basaltR5, mintR5) {
  if (quartzR5?.wrap === "inline")
    return tideR1(quartzR5.alignment, quartzR5, mintR5);
  let valeR18 = basaltR5.left !== undefined || basaltR5.top !== undefined,
    brookR18 =
      mintR5?.spaceBefore !== undefined || mintR5?.spaceAfter !== undefined;
  if (!quartzR5?.wrap && !valeR18)
    return brookR18 ? tideR1(undefined, quartzR5, mintR5) : undefined;
  let cliffR18 = brookR1(quartzR5, mintR5),
    duskR18 = cliffR1(quartzR5, mintR5);
  return {
    type: s.ELEMENT_PLACEMENT_TYPE_ANCHORED,
    anchorParagraphId: quartzR5?.anchorParagraphId,
    horizontalRelativeFrom: quartzR5?.horizontalRelativeFrom ?? "page",
    verticalRelativeFrom: quartzR5?.verticalRelativeFrom ?? "page",
    xOffsetEmu:
      basaltR5.left === undefined ? undefined : workbookP(basaltR5.left),
    yOffsetEmu:
      basaltR5.top === undefined ? undefined : workbookP(basaltR5.top),
    horizontalAlignment:
      basaltR5.left === undefined
        ? (quartzR5?.horizontalAlignment ?? quartzR5?.alignment)
        : quartzR5?.horizontalAlignment,
    verticalAlignment: quartzR5?.verticalAlignment,
    wrap: {
      type: duskR1(quartzR5?.wrap),
      side: quartzR5?.wrapSide,
    },
    distanceTopEmu: cliffR18 === undefined ? undefined : workbookP(cliffR18),
    distanceBottomEmu: duskR18 === undefined ? undefined : workbookP(duskR18),
    distanceLeftEmu:
      quartzR5?.distanceLeft === undefined
        ? undefined
        : workbookP(quartzR5.distanceLeft),
    distanceRightEmu:
      quartzR5?.distanceRight === undefined
        ? undefined
        : workbookP(quartzR5.distanceRight),
    behindDocument: quartzR5?.behindDocument,
    layoutInCell: quartzR5?.layoutInCell,
    allowOverlap: quartzR5?.allowOverlap,
    relativeHeight: quartzR5?.relativeHeight,
    locked: quartzR5?.locked,
  };
}
function valeR1(kelpR5, lotusR5) {
  let harborR23 = brookR1(kelpR5, lotusR5),
    indigoR23 = cliffR1(kelpR5, lotusR5);
  return {
    distanceTopEmu: harborR23 === undefined ? undefined : workbookP(harborR23),
    distanceBottomEmu:
      indigoR23 === undefined ? undefined : workbookP(indigoR23),
    distanceLeftEmu:
      kelpR5?.distanceLeft === undefined
        ? undefined
        : workbookP(kelpR5.distanceLeft),
    distanceRightEmu:
      kelpR5?.distanceRight === undefined
        ? undefined
        : workbookP(kelpR5.distanceRight),
  };
}
function apexR1(emberR8) {
  return (
    emberR8.distanceTopEmu !== undefined ||
    emberR8.distanceBottomEmu !== undefined ||
    emberR8.distanceLeftEmu !== undefined ||
    emberR8.distanceRightEmu !== undefined
  );
}
function brookR1(pearlR12, quartzR12) {
  return pearlR12?.distanceTop ?? quartzR12?.spaceBefore;
}
function cliffR1(falconR12, gammaR12) {
  return falconR12?.distanceBottom ?? gammaR12?.spaceAfter;
}
function duskR1(elmR5) {
  return elmR5 === "none"
    ? o.ELEMENT_WRAP_TYPE_NONE
    : elmR5 === "tight"
      ? o.ELEMENT_WRAP_TYPE_TIGHT
      : elmR5 === "through"
        ? o.ELEMENT_WRAP_TYPE_THROUGH
        : elmR5 === "topAndBottom"
          ? o.ELEMENT_WRAP_TYPE_TOP_AND_BOTTOM
          : o.ELEMENT_WRAP_TYPE_SQUARE;
}
var glideR25 = esmInit(() => {
  u();
  _workbookT();
});
function elmR1(yarnR10) {
  return Object.fromEntries(
    Object.entries(yarnR10).filter(([, cedarR13]) => cedarR13 !== undefined),
  );
}
function fernR1(kelpR9) {
  return kelpR9
    ? kelpR9
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "") === "tablegrid"
    : false;
}
var ridgeR25,
  $s,
  fernR25,
  harborR26,
  slateR26 = esmInit(() => {
    ultraR25();
    glideR25();
    ridgeR25 = {
      headerRow: false,
      totalRow: false,
      firstColumn: false,
      lastColumn: false,
      bandedRows: false,
      bandedColumns: false,
    };
    $s = 7.68;
    fernR25 = {
      left: $s,
      right: $s,
      top: $s,
      bottom: $s,
    };
    harborR26 = class {
      #e;
      constructor(apexR12) {
        this.#e = apexR12;
      }
      add(zephyrR11) {
        if (Array.isArray(zephyrR11)) {
          let violetR14 = this.#e.add(zephyrR11);
          return ((violetR14.cellMargins = fernR25), violetR14);
        }
        let {
            position,
            style,
            columnWidths,
            cellMargins,
            keepTogether,
            ...rest
          } = zephyrR11,
          valeR17 = stormR1({
            left: position?.left,
            top: position?.top,
            width: position?.width,
            height: position?.height,
          }),
          waveR17 =
            valeR17.left !== undefined ||
            valeR17.top !== undefined ||
            valeR17.width !== undefined ||
            valeR17.height !== undefined,
          apexR17 = {
            ...rest,
            left: waveR17 ? valeR17.left : undefined,
            top: waveR17 ? valeR17.top : undefined,
            width: waveR17 ? valeR17.width : undefined,
            height: waveR17 ? valeR17.height : undefined,
          },
          brookR17 = this.#e.add(apexR17);
        brookR17.cellMargins = cellMargins ?? fernR25;
        brookR17.keepTogether = keepTogether;
        brookR17.placement = unityR1(undefined, valeR17);
        let cliffR17 =
            typeof style == "string"
              ? {
                  preset: style,
                }
              : style,
          duskR17 = cliffR17?.preset;
        if (cliffR17) {
          let { preset, ..._rest } = cliffR17,
            pearlR23 = garnetR1(preset),
            quartzR23 = hazelR1(preset);
          pearlR23
            ? (brookR17.styleId = pearlR23)
            : quartzR23
              ? (brookR17.styleId = lotusR1(quartzR23))
              : preset && (brookR17.styleId = preset);
          brookR17.styleOptions = {
            ...ridgeR25,
            ...elmR1(brookR17.styleOptions),
            ...elmR1(_rest),
          };
        }
        fernR1(duskR17) &&
          brookR17.rowCount > 0 &&
          brookR17.columnCount > 0 &&
          brookR17.cells
            .block({
              row: 0,
              column: 0,
              rowCount: brookR17.rowCount,
              columnCount: brookR17.columnCount,
            })
            .applyBorders({
              outside: {
                color: "#000000",
                width: 1,
                style: "solid",
              },
              inside: {
                color: "#000000",
                width: 1,
                style: "solid",
              },
            });
        let elmR17 = garnetR1(duskR17);
        return (
          elmR17 && jewelR1(brookR17, elmR17),
          columnWidths !== undefined && (brookR17.columnWidths = columnWidths),
          brookR17
        );
      }
    };
  });
function groveR1(questR6) {
  let garnetR24 = questR6.size,
    hazelR24 = questR6.position ?? {};
  return stormR1(
    {
      left: hazelR24.left,
      top: hazelR24.top,
      width: hazelR24.width ?? garnetR24?.width,
      height: hazelR24.height ?? garnetR24?.height,
    },
    {
      inline: questR6.style?.wrap === "inline",
    },
  );
}
function hillR1(riverR5, slateR5) {
  let topazR22 = {
    alt: riverR5.alt,
    fit: riverR5.fit,
    position: slateR5,
    contentType: riverR5.contentType,
  };
  return "blob" in riverR5
    ? {
        ...topazR22,
        blob: isleR1(riverR5.blob),
        contentType: riverR5.contentType,
      }
    : "path" in riverR5
      ? {
          ...topazR22,
          path: riverR5.path,
        }
      : "dataUrl" in riverR5
        ? {
            ...topazR22,
            dataUrl: riverR5.dataUrl,
          }
        : "uri" in riverR5
          ? {
              ...topazR22,
              uri: riverR5.uri,
            }
          : {
              ...topazR22,
              prompt: riverR5.prompt,
            };
}
function isleR1(vaporR6) {
  if (vaporR6 instanceof ArrayBuffer) return vaporR6;
  let pearlR24 = vaporR6.buffer;
  if (
    pearlR24 instanceof ArrayBuffer &&
    vaporR6.byteOffset === 0 &&
    vaporR6.byteLength === pearlR24.byteLength
  )
    return pearlR24;
  let quartzR24 = new Uint8Array(vaporR6.byteLength);
  return (quartzR24.set(vaporR6), quartzR24.buffer);
}
var daisyR26,
  oliveR26 = esmInit(() => {
    glideR25();
    daisyR26 = class {
      #e;
      constructor(brookR12) {
        this.#e = brookR12;
      }
      add(nickelR6) {
        let pineR23 = groveR1(nickelR6),
          ridgeR23 = hillR1(nickelR6, pineR23),
          stormR23 = this.#e.add(ridgeR23);
        return (
          (stormR23.placement = unityR1(nickelR6.style, pineR23, {
            spaceBefore: nickelR6.spaceBefore,
            spaceAfter: nickelR6.spaceAfter,
          })),
          stormR23
        );
      }
    };
  });
function alphaR2(timberR6) {
  let valeR23 = timberR6.size,
    waveR23 = timberR6.position ?? {},
    apexR23 = {
      left: waveR23.left,
      top: waveR23.top,
      width: waveR23.width ?? valeR23?.width,
      height: waveR23.height ?? valeR23?.height,
    };
  return (
    timberR6.style?.wrap === "inline" &&
      ((apexR23.left = undefined), (apexR23.top = undefined)),
    apexR23
  );
}
var acornR26,
  lunarR26 = esmInit(() => {
    glideR25();
    acornR26 = class {
      #e;
      constructor(cliffR12) {
        this.#e = cliffR12;
      }
      add(ivoryR4) {
        let pineR21 = alphaR2(ivoryR4),
          ridgeR21 = this.#e.add({
            geometry: ivoryR4.geometry,
            position: pineR21,
            adjustmentList: ivoryR4.adjustmentList,
            fill: ivoryR4.fill,
            line: ivoryR4.line,
          });
        return (
          ivoryR4.text !== undefined && (ridgeR21.text = ivoryR4.text),
          (ridgeR21.placement = unityR1(ivoryR4.style, pineR21, {
            spaceBefore: ivoryR4.spaceBefore,
            spaceAfter: ivoryR4.spaceAfter,
          })),
          ridgeR21
        );
      }
    };
  });
function copperR2(ridgeR6) {
  let ivoryR24 = ridgeR6.size,
    jasperR24 = ridgeR6.position ?? {};
  return stormR1(
    {
      left: jasperR24.left,
      top: jasperR24.top,
      width: jasperR24.width ?? ivoryR24?.width,
      height: jasperR24.height ?? ivoryR24?.height,
    },
    {
      inline: ridgeR6.style?.wrap === "inline",
    },
  );
}
