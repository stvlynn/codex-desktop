// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 8/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const bravoR17: any = undefined;
const d: any = undefined;
const daisyR1: any = undefined;
const daisyR18: any = undefined;
const g: any = undefined;
const gammaR1: any = undefined;
const h: any = undefined;
const hazelR21: any = undefined;
const irisR2: any = undefined;
const knollR20: any = undefined;
const m: any = undefined;
const topazR21: any = undefined;
const u: any = undefined;
const valeR20: any = undefined;

function brook(frostR13) {
  let quillR20 = frostR13.table;
  if (!quillR20 || quillR20.rows.length === 0) return frostR13;
  let reefR20 = false,
    sageR20 = quillR20.rows.map(item => {
      let ultraR21 = false,
        vaporR21 = item.cells.map(_item => _item.marginLeft === alphaR21.leftEmu && _item.marginRight === alphaR21.rightEmu && _item.marginTop === alphaR21.topEmu && _item.marginBottom === alphaR21.bottomEmu ? (ultraR21 = true, {
          ..._item,
          marginLeft: undefined,
          marginRight: undefined,
          marginTop: undefined,
          marginBottom: undefined
        }) : _item);
      return ultraR21 ? (reefR20 = true, {
        ...item,
        cells: vaporR21
      }) : item;
    });
  return reefR20 ? {
    ...frostR13,
    table: {
      ...quillR20,
      rows: sageR20
    }
  } : frostR13;
}
function cliff(stormR7) {
  let amberR25 = (stormR7.sections ?? []).map(item => ({
    ...item,
    elements: (item.elements ?? []).map(brook)
  }));
  return {
    ...stormR7,
    sections: amberR25,
    elements: amberR25.flatMap(item => item.elements ?? [])
  };
}
function dusk(acornR9) {
  return fern(acornR9.element, {
    xPx: acornR9.xPx,
    yPx: acornR9.yPx,
    widthPx: acornR9.widthPx,
    heightPx: acornR9.heightPx
  });
}
function fern(mintR6, novaR6) {
  let jadeR24 = mintR6.bbox?.widthEmu === 0,
    kiteR24 = mintR6.bbox?.heightEmu === 0;
  return {
    ...mintR6,
    bbox: {
      ...mintR6.bbox,
      xEmu: irisR2(novaR6.xPx),
      yEmu: irisR2(novaR6.yPx),
      widthEmu: jadeR24 ? 0 : irisR2(novaR6.widthPx),
      heightEmu: kiteR24 ? 0 : irisR2(novaR6.heightPx)
    }
  };
}
function grove(frostR9) {
  return [frostR9.layoutMode ?? "paged", frostR9.pagelessMinHeightPx ?? "default-min-height"].join(":");
}
function hill(lotusR9, mintR9, oliveR9 = {}) {
  return lotusR9.resolveLayoutPages(brookR11 => {
    let vaporR14 = cliff(brookR11);
    return layoutDocumentFlow(vaporR14, mintR9, daisyR1(vaporR14.theme), oliveR9);
  }, grove(oliveR9));
}
var layoutDocumentFlow,
  alphaR21,
  lemonR21,
  willowR21 = esmInit(() => {
    u();
    workbookS();
    bravoR17();
    valeR20();
    daisyR18();
    ({
      layoutDocumentFlow
    } = knollR20);
    alphaR21 = {
      leftEmu: 91440,
      rightEmu: 91440,
      topEmu: 45720,
      bottomEmu: 45720
    };
    lemonR21 = workbookA.load({
      id: "",
      slides: [],
      theme: undefined,
      layouts: [],
      charts: [],
      images: [],
      contentReferences: [],
      textStyles: [],
      fonts: [],
      people: [],
      threads: []
    });
    lemonR21.slides.add();
  });
function isle(fernR7, groveR7) {
  if (typeof OffscreenCanvas > "u") throw Error("OffscreenCanvas API is not available for document layout export.");
  return new OffscreenCanvas(fernR7, groveR7);
}
function alphaR1(mintR11, oliveR11, prismR11, quillR11) {
  return {
    left: mintR11,
    top: oliveR11,
    width: prismR11,
    height: quillR11
  };
}
function bravoR1(falconR13) {
  return falconR13 * 72 / 96;
}
function copperR1(wheatR10) {
  if (!(wheatR10 === undefined || !Number.isFinite(wheatR10))) return Math.round(wheatR10 * 100) / 100;
}
function deltaR1(cedarR12) {
  return cedarR12 === undefined ? undefined : copperR1(WorkbookW(cedarR12));
}
function echoR1(zincR12) {
  return zincR12 === undefined ? undefined : copperR1(zincR12 * workbookE);
}
function falconR1(isleR3) {
  if (!isleR3 || isleR3.length === 0) return;
  let prismR18 = [];
  for (let [bloomR18, coralR18] of isleR3.entries()) {
    let questR18 = coralR18.paragraphStyle,
      ridgeR18 = (questR18?.tabStops ?? []).map(item => echoR1(item.position)).filter(item => item !== undefined),
      stormR18 = {
        index: bloomR18 + 1,
        id: coralR18.id || undefined,
        styleId: coralR18.styleId,
        bulletCharacter: questR18?.bulletCharacter ?? coralR18.bulletCharacter,
        autoNumberType: questR18?.autoNumberType,
        autoNumberStartAt: questR18?.autoNumberStartAt,
        directMarginLeftTwips: coralR18.marginLeft,
        directIndentTwips: coralR18.indent,
        styleMarginLeftEmu: questR18?.marginLeft,
        styleIndentEmu: questR18?.indent,
        marginLeftPx: deltaR1(coralR18.marginLeft) ?? echoR1(questR18?.marginLeft),
        indentPx: deltaR1(coralR18.indent) ?? echoR1(questR18?.indent),
        spaceBeforeTwips: coralR18.spaceBefore,
        spaceAfterTwips: coralR18.spaceAfter,
        spaceBeforePx: deltaR1(coralR18.spaceBefore),
        spaceAfterPx: deltaR1(coralR18.spaceAfter),
        lineSpacingPercent: questR18?.lineSpacingPercent,
        tabStopsPx: ridgeR18.length > 0 ? ridgeR18 : undefined
      };
    (stormR18.bulletCharacter !== undefined || stormR18.autoNumberType !== undefined || stormR18.autoNumberStartAt !== undefined || stormR18.directMarginLeftTwips !== undefined || stormR18.directIndentTwips !== undefined || stormR18.styleMarginLeftEmu !== undefined || stormR18.styleIndentEmu !== undefined || stormR18.spaceBeforeTwips !== undefined || stormR18.spaceAfterTwips !== undefined || stormR18.lineSpacingPercent !== undefined || stormR18.tabStopsPx !== undefined) && prismR18.push(stormR18);
  }
  return prismR18.length > 0 ? prismR18 : undefined;
}
function harborR1(groveR8) {
  if (groveR8) return {
    left: groveR8.xEmu ?? 0,
    top: groveR8.yEmu ?? 0,
    width: groveR8.widthEmu ?? 0,
    height: groveR8.heightEmu ?? 0
  };
}
function indigoR1(cliffR11) {
  return alphaR1(cliffR11.xPx, cliffR11.yPx, cliffR11.widthPx, cliffR11.heightPx);
}
function jadeR1(timberR11, umbraR11) {
  return alphaR1(timberR11.left - umbraR11.left, timberR11.top - umbraR11.top, timberR11.width, timberR11.height);
}
function $a(valeR6, waveR6, apexR6) {
  if (!waveR6) return;
  let prismR24 = indigoR1(waveR6.contentFrame),
    quillR24 = apexR6?.columnFrame ? indigoR1(apexR6.columnFrame) : undefined;
  return {
    pageFrame: valeR6,
    contentRelativeFrame: jadeR1(valeR6, prismR24),
    columnRelativeFrame: quillR24 ? jadeR1(valeR6, quillR24) : undefined
  };
}
function kiteR1(fernR12) {
  if (fernR12) return {
    type: fernR12.type,
    anchorParagraphId: fernR12.anchorParagraphId,
    horizontalRelativeFrom: fernR12.horizontalRelativeFrom,
    verticalRelativeFrom: fernR12.verticalRelativeFrom,
    xOffsetEmu: fernR12.xOffsetEmu,
    yOffsetEmu: fernR12.yOffsetEmu,
    horizontalAlignment: fernR12.horizontalAlignment,
    verticalAlignment: fernR12.verticalAlignment,
    behindDocument: fernR12.behindDocument,
    layoutInCell: fernR12.layoutInCell,
    allowOverlap: fernR12.allowOverlap,
    relativeHeight: fernR12.relativeHeight,
    locked: fernR12.locked,
    distanceTopEmu: fernR12.distanceTopEmu,
    distanceBottomEmu: fernR12.distanceBottomEmu,
    distanceLeftEmu: fernR12.distanceLeftEmu,
    distanceRightEmu: fernR12.distanceRightEmu,
    wrapType: fernR12.wrap?.type,
    wrapSide: fernR12.wrap?.side
  };
}
function to(amberR5) {
  switch (amberR5) {
    case h.FILL_TYPE_UNSPECIFIED:
      return "unspecified";
    case h.FILL_TYPE_SOLID:
      return "solid";
    case h.FILL_TYPE_GRADIENT:
      return "gradient";
    case h.FILL_TYPE_PICTURE:
      return "picture";
    case h.FILL_TYPE_PATTERN:
      return "pattern";
    default:
      return "unknown";
  }
}
function no(lemonR6) {
  switch (lemonR6) {
    case d.COLOR_TYPE_UNSPECIFIED:
      return "unspecified";
    case d.COLOR_TYPE_RGB:
      return "rgb";
    case d.COLOR_TYPE_SCHEME:
      return "scheme";
    case d.COLOR_TYPE_SYSTEM:
      return "system";
    default:
      return "unknown";
  }
}
function lemonR1(topazR4, ultraR4) {
  if (!topazR4) return;
  let deltaR22 = topazR4.color;
  return {
    type: to(topazR4.type),
    color: deltaR22 && ultraR4 ? workbookSt(deltaR22, ultraR4) : undefined,
    colorValue: deltaR22?.value,
    colorType: deltaR22?.type === undefined ? undefined : no(deltaR22.type),
    lastColor: deltaR22?.lastColor,
    transform: deltaR22?.transform,
    gradientStopCount: topazR4.gradientStops && topazR4.gradientStops.length > 0 ? topazR4.gradientStops.length : undefined,
    imageAssetId: topazR4.imageReference?.id
  };
}
function marbleR1(unityR4) {
  switch (unityR4) {
    case g.LINE_STYLE_UNSPECIFIED:
      return "unspecified";
    case g.LINE_STYLE_SOLID:
      return "solid";
    case g.LINE_STYLE_DASHED:
      return "dashed";
    case g.LINE_STYLE_DOTTED:
      return "dotted";
    case g.LINE_STYLE_DASH_DOT:
      return "dash-dot";
    case g.LINE_STYLE_DASH_DOT_DOT:
      return "dash-dot-dot";
    default:
      return "unknown";
  }
}
function nickelR1(wheatR6, yarnR6) {
  if (wheatR6) return {
    style: wheatR6.style === undefined ? undefined : marbleR1(wheatR6.style),
    widthPx: wheatR6.widthEmu === undefined ? undefined : copperR1(wheatR6.widthEmu * workbookE),
    color: wheatR6.fill?.color && yarnR6 ? workbookSt(wheatR6.fill.color, yarnR6) : undefined,
    fill: lemonR1(wheatR6.fill, yarnR6)
  };
}
function onyxR1(frostR3) {
  let stormR20 = frostR3.flow;
  if (stormR20) return {
    sectionIndex: stormR20.sectionIndex,
    sourceElementIndex: stormR20.sourceElementIndex,
    fragmentIndex: stormR20.fragmentIndex,
    columnIndex: stormR20.columnIndex,
    columnFrame: stormR20.columnFrame ? indigoR1(stormR20.columnFrame) : undefined,
    lineStartIndex: stormR20.lineStartIndex,
    lineEndIndex: stormR20.lineEndIndex,
    rowStartIndex: stormR20.rowStartIndex,
    rowEndIndex: stormR20.rowEndIndex,
    balanced: stormR20.balanced,
    noteKind: stormR20.noteKind,
    noteIds: stormR20.noteIds,
    documentGridLinePitchTwips: stormR20.documentGridLinePitchTwips,
    documentGridLinePitchPx: stormR20.documentGridLinePitchPx
  };
}
function pearlR1(cedarR5) {
  if (cedarR5.textLines && cedarR5.textLines.length > 0) {
    let northR26 = cedarR5.textLines.map(item => item.segments.map(_item => _item.text).join("")).join("\n");
    if (northR26.length > 0) return northR26;
  }
  let cliffR22 = (cedarR5.element.paragraphs ?? []).map(item => (item.runs ?? []).map(_item => _item.text ?? "").join("")).join("\n");
  return cliffR22.length > 0 ? cliffR22 : undefined;
}
function quartzR1(vaporR4, wheatR4, yarnR4, zephyrR4, acornR4, bloomR4) {
  let echoR22 = zephyrR4 + (vaporR4.xPx ?? yarnR4.x ?? 0);
  return {
    index: wheatR4 + 1,
    text: vaporR4.text,
    frame: alphaR1(echoR22, acornR4 + bloomR4, vaporR4.widthPx, yarnR4.heightPx),
    font: vaporR4.font,
    fontKey: vaporR4.fontKey,
    fill: vaporR4.fill,
    highlight: vaporR4.highlight,
    underline: vaporR4.underline,
    fontSizePx: vaporR4.px,
    fontSizePt: bravoR1(vaporR4.px),
    paraIndex: vaporR4.paraIndex,
    runIndex: vaporR4.runIndex,
    charStart: vaporR4.charStart,
    charEnd: vaporR4.charEnd
  };
}
function slateR1(mossR3, northR3, orbitR3 = 0, pineR3 = 0, questR3 = mossR3.topY ?? 0) {
  let waveR20 = mossR3.segments.map((item, index) => quartzR1(item, index, mossR3, orbitR3, pineR3, questR3));
  return {
    index: northR3 + 1,
    text: mossR3.segments.map(item => item.text).join(""),
    frame: alphaR1(orbitR3 + (mossR3.x ?? 0), pineR3 + questR3, mossR3.widthPx, mossR3.heightPx),
    align: mossR3.align,
    baselineY: pineR3 + (mossR3.baselineY ?? questR3 + mossR3.baselineOffsetPx),
    availableWidthPx: mossR3.availableWidthPx,
    contentHeightPx: mossR3.contentHeightPx,
    naturalHeightPx: mossR3.naturalHeightPx,
    leadingBeforePx: mossR3.leadingBeforePx,
    leadingAfterPx: mossR3.leadingAfterPx,
    maxAscentPx: mossR3.maxAscentPx,
    maxDescentPx: mossR3.maxDescentPx,
    segments: waveR20
  };
}
function timberR1(glideR8, honeyR8 = 0, irisR8 = 0) {
  let alphaR26 = 0;
  return glideR8.map((item, index) => {
    let isleR13 = item.topY ?? alphaR26,
      alphaR14 = slateR1(item, index, honeyR8, irisR8, isleR13);
    return alphaR26 = isleR13 + item.heightPx, alphaR14;
  });
}
function umbraR1(bravoR13, copperR13) {
  return `${bravoR13}:${copperR13}`;
}
function violetR1(ultraR9) {
  let irisR26 = new Map();
  for (let oliveR14 of ultraR9.cellLayouts ?? []) irisR26.set(umbraR1(oliveR14.row, oliveR14.col), timberR1(oliveR14.block.lines));
  return irisR26;
}
function willowR1(yellowR6) {
  let duskR23 = new Map();
  for (let cliffR24 of yellowR6.cellElementFrames ?? []) {
    let zephyrR25 = umbraR1(cliffR24.row, cliffR24.col),
      acornR25 = duskR23.get(zephyrR25) ?? [];
    acornR25.push({
      elementId: cliffR24.elementId,
      frame: alphaR1(cliffR24.xPx, cliffR24.yPx, cliffR24.widthPx, cliffR24.heightPx)
    });
    duskR23.set(zephyrR25, acornR25);
  }
  return duskR23;
}
function xenonR1(novaR4) {
  if (!novaR4) return;
  let cliffR21 = {
    left: novaR4.marginLeft === undefined ? undefined : copperR1(novaR4.marginLeft * workbookE),
    right: novaR4.marginRight === undefined ? undefined : copperR1(novaR4.marginRight * workbookE),
    top: novaR4.marginTop === undefined ? undefined : copperR1(novaR4.marginTop * workbookE),
    bottom: novaR4.marginBottom === undefined ? undefined : copperR1(novaR4.marginBottom * workbookE)
  };
  return cliffR21.left !== undefined || cliffR21.right !== undefined || cliffR21.top !== undefined || cliffR21.bottom !== undefined ? cliffR21 : undefined;
}
function yellowR1(bloomR13, yarnR3, jewelR3, unityR3) {
  if (bloomR13.kind !== "table" || !bloomR13.element.table) return;
  let umbraR18 = gammaR1({
      ...dusk(bloomR13),
      type: m.ELEMENT_TYPE_TABLE
    }),
    violetR18 = workbookL(umbraR18, yarnR3, jewelR3, {
      paragraphSpacingUnit: "twips",
      explicitRowHeightBehavior: "atLeast",
      autoRowMinimumHeightPx: 0,
      fitColumnWidthsToFrame: true,
      drawDefaultCellBorders: false,
      collapseParagraphBoundarySpacing: false,
      documentGridLinePitchTwips: bloomR13.flow?.documentGridLinePitchTwips
    });
  if (!violetR18) return;
  let willowR18 = violetR1(violetR18),
    xenonR18 = willowR1(violetR18),
    yellowR18 = bloomR13.yPx,
    zincR18 = violetR18.rowHeightsPx.map((item, index) => {
      let hillR19 = violetR18.cellRects.filter(_item => _item.row === index).map(_item => {
          let eagleR20 = umbraR1(_item.row, _item.col),
            frostR20 = willowR18.get(eagleR20),
            glideR20 = xenonR18.get(eagleR20),
            honeyR20 = umbraR18.table?.rows?.[_item.row]?.cells?.[_item.col],
            irisR20 = falconR1(honeyR20?.paragraphs),
            jewelR20 = alphaR1(_item.xPx, _item.yPx, _item.widthPx, _item.heightPx);
          return {
            row: _item.row + 1,
            col: _item.col + 1,
            frame: jewelR20,
            coordinateHints: $a(jewelR20, unityR3, bloomR13.flow),
            textLines: frostR20 && frostR20.length > 0 ? frostR20 : undefined,
            paragraphs: irisR20,
            fill: lemonR1(honeyR20?.fill, jewelR3),
            marginsPx: xenonR1(honeyR20),
            elementFrames: glideR20 && glideR20.length > 0 ? glideR20 : undefined
          };
        }),
        isleR19 = {
          index: index + 1,
          frame: alphaR1(bloomR13.xPx, yellowR18, bloomR13.widthPx, item),
          cells: hillR19
        };
      return yellowR18 += item, isleR19;
    });
  return {
    frame: alphaR1(bloomR13.xPx, bloomR13.yPx, bloomR13.widthPx, bloomR13.heightPx),
    height: violetR18.heightPx,
    rowHeights: violetR18.rowHeightsPx,
    rows: zincR18
  };
}
function _o(kiteR6, willowR6, hazelR6, sageR6, eagleR6, pineR6, duskR6) {
  let basaltR19 = pearlR1(kiteR6),
    cedarR19 = kiteR6.textLines ? timberR1(kiteR6.textLines, kiteR6.xPx, kiteR6.yPx) : undefined,
    daisyR19 = falconR1(kiteR6.element.paragraphs),
    emberR19 = alphaR1(kiteR6.xPx, kiteR6.yPx, kiteR6.widthPx, kiteR6.heightPx);
  return {
    path: hazelR6,
    order: sageR6,
    region: willowR6,
    kind: kiteR6.kind,
    id: kiteR6.element.id || undefined,
    name: kiteR6.element.name || undefined,
    frame: emberR19,
    coordinateHints: $a(emberR19, eagleR6, kiteR6.flow),
    flow: onyxR1(kiteR6),
    bboxEmu: harborR1(kiteR6.element.bbox),
    placement: kiteR1(kiteR6.element.placement),
    text: basaltR19,
    textLines: cedarR19,
    paragraphs: daisyR19,
    shapeType: kiteR6.element.shape?.geometry?.toString(),
    shapeFill: lemonR1(kiteR6.element.shape?.fill, duskR6),
    shapeLine: nickelR1(kiteR6.element.shape?.line, duskR6),
    imageAssetId: kiteR6.element.imageReference?.id,
    chartReferenceId: kiteR6.element.chartReference?.id,
    tableRows: kiteR6.element.table?.rows.length,
    tableColumns: Math.max(0, ...(kiteR6.element.table?.rows.map(jasperR13 => jasperR13.cells.length) ?? [0])),
    tableLayout: pineR6 && duskR6 ? yellowR1(kiteR6, pineR6, duskR6, eagleR6) : undefined,
    children: (kiteR6.children ?? []).map((item, index) => _o(item, willowR6, `${hazelR6}.children.${index + 1}`, index + 1, eagleR6, pineR6, duskR6))
  };
}
function zincR1(event) {
  return {
    key: event.key,
    margins: {
      top: event.margins.topPx,
      bottom: event.margins.bottomPx,
      left: event.margins.leftPx,
      right: event.margins.rightPx,
      header: event.margins.headerPx,
      footer: event.margins.footerPx
    },
    contentFrame: indigoR1(event.contentFrame),
    columns: event.columns.map(item => ({
      index: item.index,
      frame: indigoR1(item.frame)
    })),
    documentGrid: event.documentGrid,
    mirrorMarginXOffsetPx: event.mirrorMarginXOffsetPx
  };
}
function amberR1(lotusR10, mintR10, novaR10, oliveR10, prismR10) {
  return lotusR10.map((item, index) => _o(item, mintR10, `${mintR10}.${index + 1}`, index + 1, novaR10, oliveR10, prismR10));
}
function basaltR1(lemonR10, xenonR10, ivoryR10) {
  let tideR19 = lemonR10.toProto(),
    unityR19 = ivoryR10 ? daisyR1(tideR19.theme) : undefined;
  return {
    schema: hazelR21,
    unit: "px",
    document: {
      id: lemonR10.id,
      name: lemonR10.name,
      widthEmu: tideR19.widthEmu,
      heightEmu: tideR19.heightEmu,
      pageCount: xenonR10.length
    },
    pages: xenonR10.map((item, index) => ({
      index: index + 1,
      sectionId: item.sectionId,
      frame: alphaR1(0, 0, item.widthPx, item.heightPx),
      layout: zincR1(item.layout),
      headerElements: amberR1(item.headerElements, "header", item.layout, ivoryR10, unityR19),
      bodyElements: amberR1(item.bodyElements, "body", item.layout, ivoryR10, unityR19),
      footerElements: amberR1(item.footerElements, "footer", item.layout, ivoryR10, unityR19),
      pageNumberElement: item.pageNumberElement ? _o(item.pageNumberElement, "pageNumber", "pageNumber.1", 1, item.layout, ivoryR10, unityR19) : undefined
    }))
  };
}
function emberR1(ultraR8) {
  let brookR25 = isle(1, 1).getContext("2d");
  if (!brookR25) throw Error("Canvas 2D context unavailable for document layout export.");
  return basaltR1(ultraR8, hill(ultraR8, brookR25), brookR25);
}
function flintR1(waveR9, apexR9) {
  let unityR13 = apexR9 ? basaltR1(waveR9, apexR9) : emberR1(waveR9);
  return new Blob([JSON.stringify(unityR13, null, 2)], {
    type: topazR21
  });
}
