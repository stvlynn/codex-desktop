// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 65/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const $c: any = undefined;
const IntlProvider: any = undefined;
const PrismR2: any = undefined;
const SlateR2: any = undefined;
const amberR15: any = undefined;
const cedarR2: any = undefined;
const hazelR15: any = undefined;
const kelpR15: any = undefined;
const pearlR15: any = undefined;
const quartzR15: any = undefined;
const slateR15: any = undefined;
const timberR15: any = undefined;
const willowR2: any = undefined;
const zephyrR15: any = undefined;

function WheatR2({
  controller,
  headerTitleContent,
  headerRightContent,
  zoomToFitLabel,
  renderHeaderZoomControl,
  title,
  className,
  enableWorker = true,
  enablePageNavigation,
  theme = "web",
  isEditing = true,
  artifactSearchEnabled = true,
  bottomScrollReservePx
}) {
  let zincR17 = RemoteTextEditSessionW(controller, acornR15.useCallback(() => cedarR2(), []));
  if (!zincR17) return null;
  let amberR17 = acornR15.useSyncExternalStore(kelpR13 => zincR17.subscribe(kelpR13), () => zincR17.getSnapshot(), () => zincR17.getSnapshot()),
    [basaltR17, cedarR17] = acornR15.useState(true),
    daisyR17 = acornR15.useRef(null),
    emberR17 = $c(daisyR17),
    flintR17 = emberR17.width > 0 && amberR17.pageLayouts.length > 0 ? yarnR2({
      pageLayouts: amberR17.pageLayouts,
      viewportWidth: emberR17.width
    }) : null,
    garnetR17 = flintR17 != null && zoomToFitLabel != null,
    hazelR17 = acornR15.useCallback(hillR12 => {
      cedarR17(false);
      zincR17.setZoom(hillR12);
    }, [zincR17]),
    jasperR17 = garnetR17 ? {
      label: zoomToFitLabel,
      selected: basaltR17 && Math.abs(amberR17.zoom - flintR17) < driftR15,
      onSelect: () => {
        let sageR22 = acornR2({
          pageIndex: amberR17.pageIndex,
          pageLayouts: amberR17.pageLayouts,
          viewportHeight: emberR17.height,
          zoom: flintR17
        });
        cedarR17(true);
        zincR17.setZoom(flintR17);
        sageR22 != null && window.requestAnimationFrame(() => {
          bloomR2(daisyR17.current, sageR22);
        });
      }
    } : undefined;
  acornR15.useEffect(() => {
    !basaltR17 || !garnetR17 || Math.abs(amberR17.zoom - flintR17) < driftR15 || zincR17.setZoom(flintR17);
  }, [garnetR17, zincR17, flintR17, basaltR17, amberR17.zoom]);
  let kelpR17 = amberR17.textEditState?.selection ? `${amberR17.textEditState.selection.selectedCharacterCount} chars selected` : amberR17.textEditState?.activeBlockId ? "Editing text" : amberR17.selectedObjectId ? `${amberR17.selectedObjectKind ?? "object"} selected` : amberR17.selectedTextBlockId ? "Text block selected" : "",
    lotusR17 = renderHeaderZoomControl?.({
      fitOption: jasperR17,
      onZoomPercentChange: quillR12 => {
        cedarR17(false);
        zincR17.setZoom(quillR12 / 100);
      },
      triggerTestId: "popcorn-document-zoom-select",
      zoomPercent: Math.round(amberR17.zoom * 100)
    }) ?? <RemoteTextEditSessionZoomControl zoom={amberR17.zoom} onZoomChange={hazelR17} fitOption={jasperR17} testId="popcorn-document-zoom-select" />;
  return acornR15.useEffect(() => {
    artifactSearchEnabled || !amberR17.findOpen || zincR17.closeFind();
  }, [artifactSearchEnabled, zincR17, amberR17.findOpen]), <SlateR2 artifactLabel="Document" title={title ?? amberR17.title} className={className} header={<RemoteTextEditSessionChrome title={title ?? amberR17.title} headerTitleContent={headerTitleContent} closeLabel="Close document" testId="popcorn-document-header" compactTitle={theme === "codex"} centeredContent={enablePageNavigation ?? theme === "codex" ? <PopcornPageNumberNavigation currentIndex={amberR17.pageIndex} totalCount={amberR17.pageCount} itemLabel="page" onChangeIndex={amberR13 => zincR17.setPageIndex(amberR13)} testId="popcorn-document-page-navigation" /> : null} actions={<><button type="button" className="rounded-md border px-2 py-1 text-xs disabled:opacity-50" onClick={() => zincR17.undo()} disabled={!amberR17.canUndo}>{"Undo"}</button><button type="button" className="rounded-md border px-2 py-1 text-xs disabled:opacity-50" onClick={() => zincR17.redo()} disabled={!amberR17.canRedo}>{"Redo"}</button><button type="button" className="rounded-md border px-2 py-1 text-xs" onClick={() => isEditing ? zincR17.appendParagraph("New paragraph") : undefined} disabled={!isEditing}>{"Add paragraph"}</button>{kelpR17.length > 0 ? <div className="rounded-full border px-3 py-1 text-xs" data-testid="popcorn-document-selection-status">{kelpR17}</div> : null}{lotusR17}{headerRightContent}</>} icon={<RemoteTextEditSessionSurfaceKind kind="document"><RemoteTextEditSessionU className="size-4" /></RemoteTextEditSessionSurfaceKind>} />}><div className="relative h-full min-h-0">{artifactSearchEnabled ? <PopcornFindBar open={amberR17.findOpen} query={amberR17.findQuery} summary={amberR17.findSummary} focusToken={amberR17.findFocusToken} onQueryChange={basaltR13 => zincR17.setFindQuery(basaltR13)} onNavigatePrevious={() => zincR17.goToPreviousFindResult()} onNavigateNext={() => zincR17.goToNextFindResult()} onClose={() => zincR17.closeFind()} /> : null}{<PrismR2 controller={zincR17} snapshot={amberR17} enableWorker={enableWorker} artifactSearchEnabled={artifactSearchEnabled} bottomScrollReservePx={bottomScrollReservePx} scrollContainerRef={daisyR17} />}</div></SlateR2>;
}
function yarnR2({
  pageLayouts,
  viewportWidth
}) {
  let novaR26 = pageLayouts.reduce((accumulator, current) => Math.max(accumulator, current.width), 0);
  return novaR26 <= 0 ? 1 : zephyrR2((viewportWidth - 80) / novaR26);
}
function zephyrR2(mintR12) {
  return Math.max(bloomR15, Math.min(coralR15, mintR12));
}
function acornR2({
  pageIndex,
  pageLayouts,
  viewportHeight,
  zoom
}) {
  let timberR24 = 32;
  for (let violetR26 of pageLayouts) {
    let bloomR26 = Math.max(1, Math.round(violetR26.height * zoom));
    if (violetR26.pageIndex === pageIndex) return Math.max(0, timberR24 + bloomR26 / 2 - viewportHeight / 2);
    timberR24 += bloomR26 + 28;
  }
  return null;
}
function bloomR2(flintR8, garnetR8) {
  if (flintR8 != null) {
    if (typeof flintR8.scrollTo == "function") {
      flintR8.scrollTo({
        top: garnetR8,
        behavior: "auto"
      });
      return;
    }
    flintR8.scrollTop = garnetR8;
  }
}
var acornR15,
  $,
  bloomR15,
  coralR15,
  driftR15,
  eagleR15 = esmInit(() => {
    acornR15 = commonJsInit(react());
    ensureFeatureCatalogAtomsInit();
    RemoteTextEditSessionLowerT();
    RemoteTextEditSessionA();
    slateR15();
    RemoteTextEditSessionO();
    ensurePopcornPageNumberNavigationInit();
    RemoteTextEditSessionE();
    RemoteTextEditSessionC();
    timberR15();
    kelpR15();
    zephyrR15();
    $ = getJsxRuntime();
    bloomR15 = 0.25;
    coralR15 = 3;
    driftR15 = 1e-4;
  });
function coralR2(novaR12) {
  return novaR12 == null ? willowR2() : pearlR15.load(novaR12);
}
export type PopcornElectronDocumentPanelProps = {
  className?: string;
  documentProtoVersion?: number;
  headerTitleContent?: unknown;
  headerRightContent?: unknown;
  zoomToFitLabel?: unknown;
  renderHeaderZoomControl?: unknown;
  initialDocumentProto?: unknown;
  initialPageIndex?: number;
  initialZoom?: number;
  title?: string;
  theme?: string;
  isEditing?: boolean;
  bottomScrollReservePx?: number;
  annotationsEnabled?: boolean;
  drawingAnnotationsEnabled?: boolean;
  enablePageNavigation?: boolean;
  navigationTarget?: {
    requestId?: unknown;
    pageNumber: number;
  } | null;
  artifactSearchEnabled?: boolean;
  commentThreadsEnabled?: boolean;
};

export function PopcornElectronDocumentPanel({
  className,
  documentProtoVersion = 0,
  headerTitleContent,
  headerRightContent,
  zoomToFitLabel,
  renderHeaderZoomControl,
  initialDocumentProto,
  initialPageIndex,
  initialZoom,
  title = "codex-popcorn-demo.docx",
  theme = "codex",
  isEditing = false,
  bottomScrollReservePx,
  annotationsEnabled = false,
  drawingAnnotationsEnabled = false,
  enablePageNavigation,
  navigationTarget: elmR12,
  artifactSearchEnabled = false,
  commentThreadsEnabled = false
}: PopcornElectronDocumentPanelProps) {
  let indigoR18 = glideR15.useRef(documentProtoVersion),
    jadeR18 = glideR15.useRef(null),
    kiteR18 = RemoteTextEditSessionW(undefined, () => new hazelR15({
      document: coralR2(initialDocumentProto),
      initialPageIndex,
      initialZoom
    }));
  return glideR15.useEffect(() => {
    kiteR18 && documentProtoVersion !== indigoR18.current && (indigoR18.current = documentProtoVersion, kiteR18.replaceDocument(coralR2(initialDocumentProto)));
  }, [kiteR18, documentProtoVersion, initialDocumentProto]), glideR15.useEffect(() => {
    !kiteR18 || elmR12 == null || elmR12.requestId !== jadeR18.current && (jadeR18.current = elmR12.requestId, kiteR18.setPageIndex(elmR12.pageNumber - 1, {
      origin: "navigation"
    }));
  }, [kiteR18, elmR12]), kiteR18 ? <section className={IntlProvider("no-drag h-full min-h-0 bg-token-bg-primary", className)} data-codex-popcorn-editor={true} data-testid="popcorn-electron-document-panel">{<WheatR2 className="h-full min-h-0" controller={kiteR18} headerTitleContent={headerTitleContent} headerRightContent={headerRightContent} zoomToFitLabel={zoomToFitLabel} renderHeaderZoomControl={renderHeaderZoomControl} title={title} theme={theme} isEditing={isEditing} bottomScrollReservePx={bottomScrollReservePx} annotationsEnabled={annotationsEnabled} drawingAnnotationsEnabled={drawingAnnotationsEnabled} enablePageNavigation={enablePageNavigation} artifactSearchEnabled={artifactSearchEnabled} commentThreadsEnabled={commentThreadsEnabled} />}</section> : null;
}
var glideR15, honeyR15;
esmInit(() => {
  quartzR15();
  ensureComposerEsm_Tft_Init();
  glideR15 = commonJsInit(react());
  eagleR15();
  kelpR15();
  amberR15();
  RemoteTextEditSessionC();
  honeyR15 = getJsxRuntime();
})();
