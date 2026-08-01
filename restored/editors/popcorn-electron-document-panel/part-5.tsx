// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 5/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const $n: any = undefined;
const $r: any = undefined;
const acorn: any = undefined;
const apexR2: any = undefined;
const bravoR3: any = undefined;
const brookR2: any = undefined;
const copperR3: any = undefined;
const delta: any = undefined;
const duskR2: any = undefined;
const elmR2: any = undefined;
const falcon: any = undefined;
const fernR2: any = undefined;
const gammaR1: any = undefined;
const glideR2: any = undefined;
const groveR2: any = undefined;
const harbor: any = undefined;
const hillR2: any = undefined;
const honeyR2: any = undefined;
const indigo: any = undefined;
const irisR2: any = undefined;
const isleR2: any = undefined;
const ivoryR2: any = undefined;
const jasperR19: any = undefined;
const kite: any = undefined;
const kiteR3: any = undefined;
const knollR2: any = undefined;
const m: any = undefined;
const marbleR2: any = undefined;
const mossR2: any = undefined;
const oliveR1: any = undefined;
const onyxR3: any = undefined;
const pineR19: any = undefined;
const stormR2: any = undefined;
const timber: any = undefined;
const vaporR3: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenonR2: any = undefined;
const yellowR19: any = undefined;

function amber({
  preparedElements,
  settings,
  sectionStartY,
  columnBottomPx,
  initialOccupiedRegions,
  sectionIndex,
  ctx,
  theme
}) {
  if (columnBottomPx <= sectionStartY) return;
  let echoR17 = [],
    falconR17 = 0,
    gammaR17 = brookR2(settings, sectionStartY),
    harborR17 = duskR2(settings),
    indigoR17 = elmR2(settings),
    jadeR17 = elmR2(settings),
    kiteR17 = fernR2(settings),
    lemonR17 = new Map(),
    nickelR17 = groveR2(settings),
    onyxR17 = stormR2(initialOccupiedRegions),
    pearlR17 = 0,
    quartzR17 = false,
    riverR17 = false,
    slateR17,
    timberR17 = new Map();
  for (let mintR17 = 0; mintR17 < preparedElements.length; mintR17 += 1) {
    let novaR17 = preparedElements[mintR17];
    if (novaR17.docxSectionBreakCarrier) {
      harborR17[falconR17] = novaR17.lastParagraphSpaceAfterPx;
      indigoR17[falconR17] = false;
      jadeR17[falconR17] = false;
      kiteR17[falconR17] = undefined;
      pearlR17 = novaR17.lastParagraphSpaceAfterPx;
      quartzR17 = false;
      riverR17 = false;
      slateR17 = undefined;
      continue;
    }
    if (novaR17.kind !== "text") {
      let elmR18 = false;
      for (; !elmR18;) {
        let fernR18 = settings.columns.widths[falconR17] ?? settings.contentWidthPx,
          groveR18 = gammaR17[falconR17] ?? sectionStartY,
          hillR18 = groveR18 === sectionStartY,
          isleR18 = groveR18 + (harborR17[falconR17] ?? 0),
          alphaR19 = vaporR3(novaR17, ctx, fernR18, theme, settings.documentGridLinePitchTwips),
          bravoR19 = kiteR3(novaR17, isleR18, lemonR17, nickelR17[falconR17]),
          deltaR19 = onyxR3(novaR17, isleR18, bravoR19, alphaR19.heightPx);
        if (deltaR19 > columnBottomPx) {
          if (!hillR18 && falconR17 < settings.columns.widths.length - 1) {
            falconR17 += 1;
            continue;
          }
          return;
        }
        echoR17.push({
          kind: novaR17.kind,
          element: novaR17.element,
          xPx: delta(novaR17, settings, falconR17),
          yPx: bravoR19,
          widthPx: alphaR19.widthPx,
          heightPx: alphaR19.heightPx,
          flow: hillR2({
            settings,
            sectionIndex,
            sourceElementIndex: mintR17,
            fragmentIndex: isleR2(timberR17, mintR17),
            columnIndex: falconR17,
            balanced: true
          })
        });
        falcon(onyxR17, novaR17, {
          xPx: delta(novaR17, settings, falconR17),
          yPx: bravoR19,
          widthPx: alphaR19.widthPx,
          heightPx: alphaR19.heightPx
        });
        gammaR17[falconR17] = deltaR19;
        harborR17[falconR17] = 0;
        indigoR17[falconR17] = false;
        jadeR17[falconR17] = false;
        kiteR17[falconR17] = undefined;
        pearlR17 = 0;
        quartzR17 = false;
        riverR17 = false;
        slateR17 = undefined;
        elmR18 = true;
      }
      continue;
    }
    let oliveR17 = 0,
      prismR17 = false;
    for (; !prismR17;) {
      let vaporR17 = settings.columns.widths[falconR17] ?? settings.contentWidthPx,
        wheatR17 = gammaR17[falconR17] ?? sectionStartY,
        yarnR17 = $r(novaR17, vaporR17, theme, settings.documentGridLinePitchTwips);
      if (yarnR17.length === 0 || oliveR17 >= yarnR17.length) {
        copperR3(novaR17.element, wheatR17, lemonR17);
        nickelR17[falconR17] = wheatR17;
        prismR17 = true;
        break;
      }
      let zephyrR17 = indigoR17[falconR17] ?? false,
        acornR17 = jadeR17[falconR17] ?? false,
        bloomR17 = willow({
          lineIndex: oliveR17,
          lines: yarnR17,
          previousElementWasEmptyParagraph: zephyrR17,
          previousEmptyParagraphHasSpacing: acornR17,
          firstParagraphSpaceBeforePx: novaR17.firstParagraphSpaceBeforePx
        }),
        coralR17 = bravoR3({
          previousParagraphStyleId: kiteR17[falconR17],
          currentParagraphStyleId: novaR17.firstParagraphStyleId,
          currentParagraphUsesContextualSpacing: novaR17.firstParagraphUsesContextualSpacing
        }),
        driftR17 = bloomR17 || coralR17 && oliveR17 === 0 && violet(yarnR17[0]),
        eagleR17 = driftR17 && oliveR17 === 0 ? 1 : oliveR17;
      if (eagleR17 >= yarnR17.length) {
        copperR3(novaR17.element, wheatR17, lemonR17);
        nickelR17[falconR17] = wheatR17;
        prismR17 = true;
        break;
      }
      let frostR17 = timber(novaR17.element, yarnR17),
        honeyR17 = indigo({
          lineIndex: eagleR17,
          trailingSpaceAfterPx: coralR17 ? 0 : harborR17[falconR17] ?? 0,
          firstParagraphSpaceBeforePx: driftR17 ? 0 : novaR17.firstParagraphSpaceBeforePx
        }),
        irisR17 = $n(onyxR17, settings.columns.xPositions[falconR17] ?? settings.contentLeftPx, vaporR17, wheatR17 - honeyR17, columnBottomPx, Math.max(1, yarnR17[eagleR17]?.heightPx ?? 0), frostR17),
        jewelR17 = irisR17.currentY,
        knollR17 = Math.max(0, irisR17.boundaryBottomPx - jewelR17),
        lunarR17 = wheatR17 === sectionStartY,
        {
          nextLineIndex,
          fragmentHeightPx,
          endsWithFlowBreak
        } = kite(yarnR17, eagleR17, knollR17);
      if (nextLineIndex === eagleR17) {
        if (!lunarR17) {
          if (falconR17 < settings.columns.widths.length - 1) {
            falconR17 += 1;
            continue;
          }
          return;
        }
        if (fragmentHeightPx = Math.max(1, yarnR17[eagleR17]?.heightPx ?? 0), fragmentHeightPx > knollR17) return;
        nextLineIndex = Math.min(yarnR17.length, eagleR17 + 1);
        endsWithFlowBreak = false;
      }
      if (echoR17.push({
        kind: "text",
        element: novaR17.element,
        xPx: settings.columns.xPositions[falconR17] ?? settings.contentLeftPx,
        yPx: jewelR17,
        widthPx: vaporR17,
        heightPx: fragmentHeightPx,
        flow: hillR2({
          settings,
          sectionIndex,
          sourceElementIndex: mintR17,
          fragmentIndex: isleR2(timberR17, mintR17),
          columnIndex: falconR17,
          lineStartIndex: eagleR17 + 1,
          lineEndIndex: nextLineIndex,
          balanced: true
        }),
        textLines: yarnR17.slice(eagleR17, nextLineIndex)
      }), oliveR17 === 0 && (copperR3(novaR17.element, jewelR17, lemonR17), nickelR17[falconR17] = jewelR17), gammaR17[falconR17] = jewelR17 + fragmentHeightPx, oliveR17 = nextLineIndex, harborR17[falconR17] = 0, endsWithFlowBreak && oliveR17 < yarnR17.length) {
        if (falconR17 < settings.columns.widths.length - 1) {
          falconR17 += 1;
          continue;
        }
        return;
      }
      if (oliveR17 >= yarnR17.length) {
        let hillR21 = (novaR17.element.paragraphs?.length ?? 0) > 1 ? jasperR19 : 0;
        gammaR17[falconR17] = (gammaR17[falconR17] ?? sectionStartY) + hillR21;
        harborR17[falconR17] = hillR21 > 0 ? 0 : novaR17.lastParagraphSpaceAfterPx;
        indigoR17[falconR17] = timber(novaR17.element, yarnR17);
        jadeR17[falconR17] = indigoR17[falconR17] === true && harbor(novaR17);
        kiteR17[falconR17] = novaR17.lastParagraphStyleId;
        pearlR17 = harborR17[falconR17] ?? 0;
        quartzR17 = indigoR17[falconR17] ?? false;
        riverR17 = jadeR17[falconR17] ?? false;
        slateR17 = novaR17.lastParagraphStyleId;
        prismR17 = true;
        break;
      }
      if ((gammaR17[falconR17] ?? sectionStartY) >= columnBottomPx) {
        if (falconR17 < settings.columns.widths.length - 1) {
          falconR17 += 1;
          continue;
        }
        return;
      }
    }
  }
  return {
    bodyElements: echoR17,
    endY: Math.max(...gammaR17),
    trailingSpaceAfterPx: pearlR17,
    previousEmptyParagraph: quartzR17,
    previousEmptyParagraphHasSpacing: riverR17,
    previousParagraphStyleId: slateR17,
    occupiedRegions: onyxR17
  };
}
function basalt({
  preparedElements,
  settings,
  sectionStartY,
  initialOccupiedRegions,
  sectionIndex,
  ctx,
  theme
}) {
  if (preparedElements.length === 0) return {
    bodyElements: [],
    endY: sectionStartY,
    trailingSpaceAfterPx: 0,
    previousEmptyParagraph: false,
    previousEmptyParagraphHasSpacing: false,
    previousParagraphStyleId: undefined,
    occupiedRegions: stormR2(initialOccupiedRegions)
  };
  let glideR19 = Math.floor(settings.contentBottomPx - sectionStartY);
  if (glideR19 <= 0) return;
  let honeyR19 = 1,
    irisR19 = glideR19,
    jewelR19,
    knollR19;
  for (; honeyR19 <= irisR19;) {
    let unityR22 = Math.floor((honeyR19 + irisR19) / 2),
      apexR22 = amber({
        preparedElements,
        settings,
        sectionStartY,
        columnBottomPx: Math.min(settings.contentBottomPx, sectionStartY + unityR22),
        initialOccupiedRegions,
        sectionIndex,
        ctx,
        theme
      });
    apexR22 ? (jewelR19 = apexR22, knollR19 = unityR22, irisR19 = unityR22 - 1) : honeyR19 = unityR22 + 1;
  }
  if (!(!jewelR19 || knollR19 === undefined)) return jewelR19;
}
function cedar(jadeR6) {
  let northR23 = jadeR6.pageSetup?.pageMargin ?? yellowR19;
  return {
    topPx: honeyR2(northR23.top ?? yellowR19.top),
    bottomPx: honeyR2(northR23.bottom ?? yellowR19.bottom),
    leftPx: honeyR2(northR23.left ?? yellowR19.left),
    rightPx: honeyR2(northR23.right ?? yellowR19.right),
    headerPx: honeyR2(northR23.header ?? yellowR19.header),
    footerPx: honeyR2(northR23.footer ?? yellowR19.footer)
  };
}
function daisy(stormR12) {
  return (stormR12 ?? "").includes(pineR19);
}
function ember(sageR10, ultraR10, vaporR10) {
  return vaporR10 % 2 != 0 || !daisy(sageR10) ? 0 : ultraR10.margins.rightPx - ultraR10.margins.leftPx;
}
function flint(event, wheatR13 = 0) {
  return {
    key: event.key,
    margins: {
      topPx: event.margins.topPx,
      bottomPx: event.margins.bottomPx,
      leftPx: event.margins.leftPx,
      rightPx: event.margins.rightPx,
      headerPx: event.margins.headerPx,
      footerPx: event.margins.footerPx
    },
    contentFrame: {
      xPx: event.contentLeftPx + wheatR13,
      yPx: event.contentTopPx,
      widthPx: event.contentWidthPx,
      heightPx: event.contentBottomPx - event.contentTopPx
    },
    columns: event.columns.widths.map((item, index) => ({
      index: index + 1,
      frame: {
        xPx: (event.columns.xPositions[index] ?? event.contentLeftPx) + wheatR13,
        yPx: event.contentTopPx,
        widthPx: item,
        heightPx: event.contentBottomPx - event.contentTopPx
      }
    })),
    documentGrid: event.documentGrid,
    mirrorMarginXOffsetPx: wheatR13
  };
}
function garnet(reefR12, sageR12) {
  return {
    ...reefR12,
    xPx: reefR12.xPx + sageR12
  };
}
function hazel(coralR10, driftR10) {
  return coralR10?.columnFrame ? {
    ...coralR10,
    columnFrame: garnet(coralR10.columnFrame, driftR10)
  } : coralR10;
}
function jasper(daisyR9, emberR9) {
  return {
    ...daisyR9,
    xPx: daisyR9.xPx + emberR9,
    flow: hazel(daisyR9.flow, emberR9),
    children: daisyR9.children?.map(reefR13 => jasper(reefR13, emberR9))
  };
}
function kelp(hillR3, alphaR4, bravoR4, copperR4 = {}) {
  let umbraR21 = ember(hillR3.sectionId, alphaR4, bravoR4),
    violetR21 = Math.abs(umbraR21) < 0.01 ? hillR3 : {
      ...hillR3,
      layout: flint(alphaR4, umbraR21),
      headerElements: hillR3.headerElements.map(item => jasper(item, umbraR21)),
      bodyElements: hillR3.bodyElements.map(item => jasper(item, umbraR21)),
      footerElements: hillR3.footerElements.map(item => jasper(item, umbraR21)),
      pageNumberElement: hillR3.pageNumberElement ? jasper(hillR3.pageNumberElement, umbraR21) : undefined
    };
  return copperR4.layoutMode === "pageless" ? lotus(violetR21, alphaR4, copperR4) : violetR21;
}
function lotus(duskR3, elmR3, fernR3) {
  let pearlR21 = mint(duskR3.bodyElements),
    quartzR21 = Math.max(elmR3.contentTopPx, pearlR21),
    riverR21 = Math.ceil(Math.max(elmR3.basePageHeightPx, fernR3.pagelessMinHeightPx ?? 0, quartzR21 + elmR3.margins.bottomPx)),
    slateR21 = Math.max(1, riverR21 - elmR3.contentTopPx - elmR3.margins.bottomPx);
  return {
    ...duskR3,
    heightPx: riverR21,
    layout: {
      ...duskR3.layout,
      contentFrame: {
        ...duskR3.layout.contentFrame,
        heightPx: slateR21
      },
      columns: duskR3.layout.columns.map(item => ({
        ...item,
        frame: {
          ...item.frame,
          heightPx: slateR21
        }
      }))
    }
  };
}
function mint(zincR8) {
  let irisR25 = 0,
    jewelR25 = daisyR10 => {
      irisR25 = Math.max(irisR25, daisyR10.yPx + daisyR10.heightPx);
      for (let cliffR14 of daisyR10.children ?? []) jewelR25(cliffR14);
    };
  for (let alphaR15 of zincR8) jewelR25(alphaR15);
  return irisR25;
}
function nova(glideR13, honeyR13, irisR13) {
  let topazR20 = Math.max(1, glideR13.columns?.count ?? 1),
    ultraR20 = honeyR2(glideR13.columns?.space ?? 0),
    vaporR20 = (glideR13.columns?.widths ?? []).map(item => Math.max(0, honeyR2(item))),
    wheatR20 = [],
    yarnR20 = [];
  if (vaporR20.length >= topazR20 && vaporR20.some(item => item > 0)) {
    let stormR24 = vaporR20.slice(0, topazR20).reduce((accumulator, current) => accumulator + current, 0),
      tideR24 = Math.max(1, irisR13 - ultraR20 * (topazR20 - 1)),
      unityR24 = stormR24 > 0 ? tideR24 / stormR24 : 1;
    for (let nickelR14 = 0; nickelR14 < topazR20; nickelR14 += 1) {
      let yarnR14 = vaporR20[nickelR14] ?? 0;
      wheatR20.push(Math.max(1, yarnR14 * unityR24));
    }
  } else {
    let onyxR14 = Math.max(1, irisR13 - ultraR20 * (topazR20 - 1)) / topazR20;
    for (let unityR14 = 0; unityR14 < topazR20; unityR14 += 1) wheatR20.push(onyxR14);
  }
  let acornR20 = honeyR13;
  for (let ridgeR14 of wheatR20) {
    yarnR20.push(acornR20);
    acornR20 += ridgeR14 + ultraR20;
  }
  return {
    xPositions: yarnR20,
    widths: wheatR20
  };
}
function olive(copperR9) {
  switch (copperR9) {
    case "lines":
    case "linesAndChars":
    case "snapToChars":
      return true;
    default:
      return false;
  }
}
function prism(echoR5) {
  let hazelR22 = echoR5.documentGrid;
  if (!hazelR22) return;
  let ivoryR22 = hazelR22.linePitch !== undefined && hazelR22.linePitch > 0 ? hazelR22.linePitch : undefined,
    jasperR22 = ivoryR22 !== undefined && olive(hazelR22.type) ? ivoryR22 : undefined;
  return {
    type: hazelR22.type,
    linePitchTwips: ivoryR22,
    linePitchPx: ivoryR22 === undefined ? undefined : honeyR2(ivoryR22),
    charSpaceTwips: hazelR22.charSpace,
    activeLinePitchTwips: jasperR22,
    activeLinePitchPx: jasperR22 === undefined ? undefined : honeyR2(jasperR22)
  };
}
function quill(isleR10) {
  if (isleR10?.activeLinePitchTwips !== undefined) return isleR10.activeLinePitchTwips;
}
function reef(northR4, pineR4, questR4, ridgeR4, stormR4, tideR4) {
  if (pineR4 === "table") {
    let ivoryR14 = knollR2(northR4, ridgeR4);
    return {
      widthPx: ivoryR14,
      heightPx: mossR2(northR4, questR4, ivoryR14, stormR4, tideR4)
    };
  }
  if (pineR4 === "image") {
    let kelpR14 = glideR2(northR4);
    return {
      widthPx: kelpR14.widthPx,
      heightPx: kelpR14.heightPx
    };
  }
  return pineR4 === "shape" || pineR4 === "chart" || pineR4 === "group" ? marbleR2(northR4, {
    widthPx: Math.max(1, Math.min(ridgeR4, 180)),
    heightPx: 120
  }) : {
    widthPx: ridgeR4,
    heightPx: oliveR1(northR4, questR4, ridgeR4, stormR4)
  };
}
function sage(xenonR9, yellowR9) {
  return xenonR9.bbox?.widthEmu !== undefined && xenonR9.bbox.widthEmu > 0 ? Math.max(1, xenonR9.bbox.widthEmu * workbookE) : Math.max(1, yellowR9);
}
function ultra(fernR4, groveR4, hillR4, isleR4, alphaR5, bravoR5) {
  return (fernR4.children ?? []).map(item => {
    let groveR22 = apexR2(item),
      hillR22 = reef(item, groveR22, alphaR5, sage(item, isleR4), bravoR5),
      isleR22 = {
        kind: groveR22,
        element: item,
        xPx: groveR4 + xenonR2(item, 0),
        yPx: hillR4 + ivoryR2(item, 0),
        widthPx: hillR22.widthPx,
        heightPx: hillR22.heightPx
      };
    return groveR22 === "group" && (isleR22.children = ultra(item, isleR22.xPx, isleR22.yPx, isleR22.widthPx, alphaR5, bravoR5)), isleR22;
  });
}
function vapor(kelpR10) {
  return kelpR10.type === m.ELEMENT_TYPE_TEXT || kelpR10.type === m.ELEMENT_TYPE_TEXT_GROUP;
}
function wheat(amberR7) {
  let groveR24 = new Map();
  for (let copperR26 of amberR7.table?.rows ?? []) for (let questR26 of copperR26.cells ?? []) for (let emberR14 of questR26.elements ?? []) vapor(emberR14) || emberR14.id && emberR14.id.length > 0 && groveR24.set(emberR14.id, emberR14);
  return groveR24;
}
function yarn(kelpR6, lotusR6) {
  let harborR24 = kelpR6.bbox?.widthEmu === 0,
    indigoR24 = kelpR6.bbox?.heightEmu === 0;
  return {
    ...kelpR6,
    bbox: {
      ...kelpR6.bbox,
      xEmu: irisR2(lotusR6.xPx),
      yEmu: irisR2(lotusR6.yPx),
      widthEmu: harborR24 ? 0 : irisR2(lotusR6.widthPx),
      heightEmu: indigoR24 ? 0 : irisR2(lotusR6.heightPx)
    }
  };
}
function zephyr(gammaR11, riverR11, cedarR11, novaR11, acornR11, lunarR11, waveR11, bravoR12) {
  if (!gammaR11.table || gammaR11.table.rows.length === 0) return [];
  let alphaR20 = workbookL(gammaR1({
      ...yarn(gammaR11, {
        xPx: riverR11,
        yPx: cedarR11,
        widthPx: novaR11,
        heightPx: acornR11
      }),
      type: m.ELEMENT_TYPE_TABLE
    }), lunarR11, waveR11, {
      paragraphSpacingUnit: "twips",
      explicitRowHeightBehavior: "atLeast",
      autoRowMinimumHeightPx: 0,
      fitColumnWidthsToFrame: true,
      drawDefaultCellBorders: false,
      collapseParagraphBoundarySpacing: false,
      documentGridLinePitchTwips: bravoR12?.documentGridLinePitchTwips
    }),
    bravoR20 = wheat(gammaR11),
    copperR20 = [];
  if (!alphaR20) return copperR20;
  for (let garnetR25 of alphaR20.cellElementFrames ?? []) {
    let yellowR26 = bravoR20.get(garnetR25.elementId);
    if (!yellowR26) continue;
    let zincR26 = apexR2(yellowR26);
    copperR20.push(acorn(yellowR26, zincR26, garnetR25.xPx, garnetR25.yPx, garnetR25.widthPx, garnetR25.heightPx, lunarR11, waveR11, undefined, bravoR12));
  }
  return copperR20;
}
