// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 63/65
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
const _l: any = undefined;
const amberR15: any = undefined;
const amberR2: any = undefined;
const basaltR2: any = undefined;
const c: any = undefined;
const cedarR15: any = undefined;
const d: any = undefined;
const f: any = undefined;
const flintR15: any = undefined;
const o: any = undefined;
const remoteTextEditSessionUnderscore: any = undefined;
const s: any = undefined;
const timberR2: any = undefined;
const u: any = undefined;
const violetR15: any = undefined;
const zincR2: any = undefined;

var garnetR15,
  hazelR15,
  jasperR15 = esmInit(() => {
    RemoteTextEditSessionS();
    RemoteTextEditSessionY();
    RemoteTextEditSessionH();
    violetR15();
    amberR15();
    cedarR15();
    flintR15();
    garnetR15 = 1;
    hazelR15 = class {
      id = garnetR15++;
      #e = RemoteTextEditSessionM("document-main-controller");
      #t = _l();
      #n;
      #r;
      #i = new Set();
      #a = new Map();
      #o = new Map();
      #s = [];
      #c = {
        searchFragments: [],
        objectTargets: [],
      };
      #l = false;
      constructor(marbleR12 = {}) {
        let deltaR20 = (marbleR12.workerFactory ?? basaltR2)();
        this.#n = new RemoteTextEditSessionV(
          deltaR20,
          (quillR13) => this.#f(quillR13),
          (orbitR12) => {
            throw Error(orbitR12);
          },
        );
        let echoR20 = amberR2(marbleR12);
        this.#n.bootstrap({
          documentProto: echoR20,
          initialPageIndex: marbleR12.initialPageIndex,
          initialZoom: marbleR12.initialZoom,
        });
        this.#r = timberR2()
          .then(() => {
            let amberR23 = RemoteTextEditSessionB();
            this.#e.debug("font-render-deps-ready", {
              fontCount: amberR23.length,
              fontDebug: RemoteTextEditSessionX(),
            });
            amberR23.length !== 0 &&
              this.#n.dispatch({
                kind: "install-font-faces",
                fonts: amberR23,
              });
          })
          .catch(() => {});
      }
      subscribe(willowR12) {
        return this.#t.subscribe(willowR12);
      }
      getState() {
        return this.#t.getState();
      }
      getSnapshot() {
        return this.#t.getState();
      }
      dispatch(sageR13) {}
      attachViewport() {
        return () => {};
      }
      attachPageCanvas(driftR4) {
        this.#d(driftR4.surfaceId);
        let yarnR18 = driftR4.dpr ?? window.devicePixelRatio ?? 1;
        if (
          ((driftR4.canvas.style.width = `${driftR4.width}px`),
          (driftR4.canvas.style.height = `${driftR4.height}px`),
          !zincR2())
        )
          return (
            (driftR4.canvas.width = Math.max(
              1,
              Math.round(driftR4.width * yarnR18),
            )),
            (driftR4.canvas.height = Math.max(
              1,
              Math.round(driftR4.height * yarnR18),
            )),
            false
          );
        if (this.#a.get(driftR4.surfaceId) === driftR4.canvas)
          return (
            this.resizePageCanvas({
              surfaceId: driftR4.surfaceId,
              width: driftR4.width,
              height: driftR4.height,
              dpr: yarnR18,
            }),
            true
          );
        this.#a.set(driftR4.surfaceId, driftR4.canvas);
        let zephyrR18 = driftR4.canvas.transferControlToOffscreen();
        return (
          this.#r.then(() => {
            this.#l ||
              (this.#a.get(driftR4.surfaceId) === driftR4.canvas &&
                this.#n.dispatch(
                  {
                    kind: "attach-page-canvas",
                    surfaceId: driftR4.surfaceId,
                    pageIndex: driftR4.pageIndex,
                    canvas: zephyrR18,
                    width: driftR4.width,
                    height: driftR4.height,
                    dpr: yarnR18,
                  },
                  [zephyrR18],
                ));
          }),
          true
        );
      }
      resizePageCanvas(onyxR6) {
        let unityR23 = onyxR6.dpr ?? window.devicePixelRatio ?? 1;
        this.#n.dispatch({
          kind: "resize-page-canvas",
          surfaceId: onyxR6.surfaceId,
          width: onyxR6.width,
          height: onyxR6.height,
          dpr: unityR23,
        });
      }
      detachPageCanvas(apexR5) {
        this.#d(apexR5);
        let quillR23 = window.setTimeout(() => {
          this.#o.delete(apexR5);
          this.#a.delete(apexR5);
          !this.#l &&
            this.#n.dispatch({
              kind: "detach-page-canvas",
              surfaceId: apexR5,
            });
        }, 0);
        this.#o.set(apexR5, quillR23);
      }
      subscribeRenderedPages(valeR8) {
        return (
          this.#i.add(valeR8),
          () => {
            this.#i.delete(valeR8);
          }
        );
      }
      getRenderedPages() {
        return this.#s;
      }
      getSearchFragments() {
        return this.#c.searchFragments;
      }
      getObjectTargets() {
        return this.#c.objectTargets;
      }
      requestExport(duskR5) {
        return this.#n
          .request({
            kind: "export",
            format: duskR5?.format ?? "proto",
          })
          .then((value) => {
            if (value.kind !== "export")
              throw Error(`Unexpected export response: ${value.kind}`);
            return value.result;
          });
      }
      exportDocumentProto() {
        return this.requestExport({
          format: "proto",
        }).then((value) => value.documentProto);
      }
      replaceFromProto(indigoR6) {
        return this.#n
          .request({
            kind: "replace-from-proto",
            documentProto: indigoR6,
          })
          .then((value) => {
            if (value.kind !== "replace-from-proto")
              throw Error(`Unexpected replace response: ${value.kind}`);
          });
      }
      replaceDocument(garnetR11) {
        return this.replaceFromProto(garnetR11.toProto());
      }
      dispose() {
        if (!this.#l) {
          this.#l = true;
          for (let lunarR14 of this.#o.values()) window.clearTimeout(lunarR14);
          this.#o.clear();
          this.#i.clear();
          this.#a.clear();
          this.#n.dispose();
        }
      }
      setZoom(ivoryR11) {
        this.#n.dispatch({
          kind: "set-zoom",
          zoom: ivoryR11,
        });
      }
      setPageIndex(lunarR8, mossR8) {
        this.#n.dispatch({
          kind: "set-page-index",
          pageIndex: lunarR8,
          origin: mossR8?.origin,
        });
      }
      goToPreviousPage() {
        this.setPageIndex(this.getSnapshot().pageIndex - 1, {
          origin: "navigation",
        });
      }
      goToNextPage() {
        this.setPageIndex(this.getSnapshot().pageIndex + 1, {
          origin: "navigation",
        });
      }
      setSelectedTextBlockId(falconR8, gammaR8) {
        this.#n.dispatch({
          kind: "select-text-block",
          blockId: falconR8,
          pageIndex: gammaR8?.pageIndex,
        });
      }
      setSelectedObject(zephyrR10) {
        this.#n.dispatch({
          kind: "select-object",
          target: zephyrR10,
        });
      }
      clearSelection() {
        this.#n.dispatch({
          kind: "clear-selection",
        });
      }
      deleteSelectedObject() {
        this.#n.dispatch({
          kind: "delete-selected-object",
        });
      }
      appendParagraph(bloomR10) {
        this.#n.dispatch({
          kind: "append-paragraph",
          text: bloomR10,
        });
      }
      openFind() {
        this.#n.dispatch({
          kind: "open-find",
        });
      }
      closeFind() {
        this.#n.dispatch({
          kind: "close-find",
        });
      }
      setFindQuery(duskR10) {
        this.#n.dispatch({
          kind: "set-find-query",
          query: duskR10,
        });
      }
      goToNextFindResult() {
        this.#n.dispatch({
          kind: "go-to-next-find-result",
        });
      }
      goToPreviousFindResult() {
        this.#n.dispatch({
          kind: "go-to-previous-find-result",
        });
      }
      textPointerDown(coralR6, driftR6, frostR6) {
        return (
          this.#n.dispatch({
            kind: "text-pointer-down",
            pageIndex: coralR6,
            point: driftR6,
            shiftKey: frostR6?.shiftKey,
          }),
          true
        );
      }
      textPointerMove(quartzR9) {
        return (
          this.#n.dispatch({
            kind: "text-pointer-move",
            point: quartzR9,
          }),
          true
        );
      }
      textPointerUp() {
        this.#n.dispatch({
          kind: "text-pointer-up",
        });
      }
      textSelectWordAtPoint(hillR6, isleR6) {
        return (
          this.#n.dispatch({
            kind: "text-select-word-at-point",
            pageIndex: hillR6,
            point: isleR6,
          }),
          true
        );
      }
      textSelectParagraphAtPoint(tideR6, unityR6) {
        return (
          this.#n.dispatch({
            kind: "text-select-paragraph-at-point",
            pageIndex: tideR6,
            point: unityR6,
          }),
          true
        );
      }
      textActivateBlockEnd(cliffR8) {
        return (
          this.#n.dispatch({
            kind: "text-activate-block-end",
            blockId: cliffR8,
          }),
          true
        );
      }
      textClear() {
        this.#n.dispatch({
          kind: "text-clear",
        });
      }
      textHandleKeyDown(kiteR10) {
        return (
          this.#n.dispatch({
            kind: "text-keydown",
            event: kiteR10,
          }),
          true
        );
      }
      textHandleBeforeInput(bravoR9) {
        return (
          this.#n.dispatch({
            kind: "text-before-input",
            event: bravoR9,
          }),
          true
        );
      }
      textHandleInput(timberR10) {
        return (
          this.#n.dispatch({
            kind: "text-input",
            event: timberR10,
          }),
          true
        );
      }
      textHandleCompositionEnd(fernR8) {
        return (
          this.#n.dispatch({
            kind: "text-composition-end",
            event: fernR8,
          }),
          true
        );
      }
      undo() {
        this.#n.dispatch({
          kind: "undo",
        });
      }
      redo() {
        this.#n.dispatch({
          kind: "redo",
        });
      }
      #u() {
        for (let groveR14 of this.#i) groveR14();
      }
      #d(jewelR9) {
        let valeR26 = this.#o.get(jewelR9);
        valeR26 !== undefined &&
          (window.clearTimeout(valeR26), this.#o.delete(jewelR9));
      }
      #f(yarnR13) {
        switch (yarnR13.kind) {
          case "meta":
          case "navigation":
          case "selection":
          case "editor":
          case "find":
            this.#t.patch(yarnR13.state);
            return;
          case "layout":
            this.#c = yarnR13.metadata;
            this.#t.patch({
              pageCount: yarnR13.pageLayouts.length,
              pageLayouts: yarnR13.pageLayouts,
            });
            return;
          case "rendered-pages":
            this.#s = yarnR13.pages;
            this.#u();
            return;
          case "debug-log":
            RemoteTextEditSessionM(yarnR13.namespace).debug(
              yarnR13.message,
              yarnR13.details,
            );
            return;
          default:
            return yarnR13;
        }
      }
    };
  }),
  kelpR15 = esmInit(() => {
    jasperR15();
  });
function daisyR2(mossR6, northR6) {
  if (mossR6.length === 0 || northR6.viewportHeight <= 0) return [];
  let xenonR24 = Math.max(0, northR6.overscanPx ?? 0),
    yellowR24 = northR6.scrollTop - xenonR24,
    zincR24 = northR6.scrollTop + northR6.viewportHeight + xenonR24;
  return mossR6.filter(
    (item) => item.top + item.height >= yellowR24 && item.top <= zincR24,
  );
}
function emberR2(frostR11) {
  let topazR14 = frostR11.at(-1);
  return topazR14 ? topazR14.top + topazR14.height : 0;
}
var lotusR15 = esmInit(() => {});
function flintR2() {
  return typeof window > "u" ? null : window;
}
function garnetR2(willowR10) {
  if (!remoteTextEditSessionUnderscore()) return () => {};
  let stormR17 = flintR2();
  if (!stormR17) return () => {};
  let tideR17 = {
    controller: willowR10.controller,
    getSnapshot: () => willowR10.controller.getSnapshot(),
    exportDocumentProto: () => willowR10.controller.exportDocumentProto(),
    getBodyText: () => willowR10.controller.getSnapshot().bodyText,
    getTextLayoutBlocks: () => willowR10.getTextLayoutBlocks(),
    getTextEditState: () => willowR10.getTextEditState(),
    getFindState: () => {
      let sageR23 = willowR10.controller.getSnapshot();
      return {
        open: sageR23.findOpen,
        query: sageR23.findQuery,
        summary: sageR23.findSummary,
        resultCount: sageR23.findResultCount,
        activeResultIndex: sageR23.findActiveResultIndex,
        selectedTextBlockId: sageR23.selectedTextBlockId,
      };
    },
    getSearchFragments: () => willowR10.controller.getSearchFragments(),
    getObjectTargets: () => willowR10.controller.getObjectTargets(),
    getPageState: () => {
      let basaltR23 = willowR10.controller.getSnapshot();
      return {
        pageIndex: basaltR23.pageIndex,
        pageCount: basaltR23.pageCount,
        pageLayouts: basaltR23.pageLayouts,
        pageRects: willowR10.getPageRects(),
        renderedPages: willowR10.getRenderedPages(),
        textLayoutBlockCount: willowR10.getTextLayoutBlocks().length,
      };
    },
    captureState: () => {
      let vaporR19 = willowR10.controller.getSnapshot();
      return {
        snapshot: vaporR19,
        pageState: {
          pageIndex: vaporR19.pageIndex,
          pageCount: vaporR19.pageCount,
          pageLayouts: vaporR19.pageLayouts,
          pageRects: willowR10.getPageRects(),
          renderedPages: willowR10.getRenderedPages(),
          textLayoutBlockCount: willowR10.getTextLayoutBlocks().length,
        },
        bodyText: vaporR19.bodyText,
        textLayoutBlocks: willowR10.getTextLayoutBlocks(),
        textEditState: willowR10.getTextEditState(),
        findState: {
          open: vaporR19.findOpen,
          query: vaporR19.findQuery,
          summary: vaporR19.findSummary,
          resultCount: vaporR19.findResultCount,
          activeResultIndex: vaporR19.findActiveResultIndex,
          selectedTextBlockId: vaporR19.selectedTextBlockId,
        },
        searchFragments: willowR10.controller.getSearchFragments(),
        objectTargets: willowR10.controller.getObjectTargets(),
        logCount: (stormR17.__POPCORN_LOGS__ ?? []).length,
      };
    },
    getLogs: () => [...(stormR17.__POPCORN_LOGS__ ?? [])],
    clearLogs: () => {
      stormR17.__POPCORN_LOGS__ = [];
    },
  };
  return (
    (stormR17.__POPCORN_DOCUMENT_DEVTOOLS__ = tideR17),
    () => {
      stormR17.__POPCORN_DOCUMENT_DEVTOOLS__ === tideR17 &&
        delete stormR17.__POPCORN_DOCUMENT_DEVTOOLS__;
    }
  );
}
var mintR15 = esmInit(() => {
  ensureRemoteTextEditSessionInit();
});
function hazelR2(pearlR6, quartzR6) {
  for (let kelpR24 = pearlR6.length - 1; kelpR24 >= 0; --kelpR24) {
    let nickelR25 = pearlR6[kelpR24];
    if (
      nickelR25 &&
      quartzR6.x >= nickelR25.hitBox.x &&
      quartzR6.x <= nickelR25.hitBox.x + nickelR25.hitBox.width &&
      quartzR6.y >= nickelR25.hitBox.y &&
      quartzR6.y <= nickelR25.hitBox.y + nickelR25.hitBox.height
    )
      return nickelR25;
  }
  return null;
}
function jasperR2(sageR11, topazR11) {
  return topazR11
    ? (sageR11.find((item) => item.id === topazR11) ?? null)
    : null;
}
var novaR15 = esmInit(() => {});
function kelpR2(riverR6, slateR6) {
  for (let lotusR24 = riverR6.length - 1; lotusR24 >= 0; --lotusR24) {
    let onyxR25 = riverR6[lotusR24];
    if (
      onyxR25 &&
      slateR6.x >= onyxR25.hitBox.x &&
      slateR6.x <= onyxR25.hitBox.x + onyxR25.hitBox.width &&
      slateR6.y >= onyxR25.hitBox.y &&
      slateR6.y <= onyxR25.hitBox.y + onyxR25.hitBox.height
    )
      return onyxR25;
  }
  return null;
}
function lotusR2(ultraR11, vaporR11) {
  return vaporR11
    ? (ultraR11.find((item) => item.id === vaporR11) ?? null)
    : null;
}
var oliveR15 = esmInit(() => {});
function mintR2(onyxR4, pearlR4, quartzR4 = {}) {
  if (!pearlR4) return;
  let amberR21 = quartzR4.fill ?? "rgba(51, 108, 255, 0.14)",
    basaltR21 = quartzR4.stroke ?? "rgba(51, 108, 255, 0.95)",
    cedarR21 = quartzR4.lineWidth ?? 1.5;
  onyxR4.save();
  amberR21 &&
    ((onyxR4.fillStyle = amberR21),
    onyxR4.fillRect(
      pearlR4.hitBox.x,
      pearlR4.hitBox.y,
      pearlR4.hitBox.width,
      pearlR4.hitBox.height,
    ));
  basaltR21 &&
    ((onyxR4.strokeStyle = basaltR21),
    (onyxR4.lineWidth = cedarR21),
    onyxR4.strokeRect(
      pearlR4.hitBox.x + 0.5,
      pearlR4.hitBox.y + 0.5,
      Math.max(0, pearlR4.hitBox.width - 1),
      Math.max(0, pearlR4.hitBox.height - 1),
    ));
  onyxR4.restore();
}
var prismR15 = esmInit(() => {});
function novaR2(copperR5, deltaR5) {
  deltaR5 &&
    (copperR5.save(),
    (copperR5.strokeStyle = "rgba(51, 108, 255, 0.95)"),
    (copperR5.fillStyle = "rgba(51, 108, 255, 0.08)"),
    (copperR5.lineWidth = 1.5),
    copperR5.fillRect(
      deltaR5.hitBox.x,
      deltaR5.hitBox.y,
      deltaR5.hitBox.width,
      deltaR5.hitBox.height,
    ),
    copperR5.strokeRect(
      deltaR5.hitBox.x + 0.5,
      deltaR5.hitBox.y + 0.5,
      Math.max(0, deltaR5.hitBox.width - 1),
      Math.max(0, deltaR5.hitBox.height - 1),
    ),
    copperR5.restore());
}
var quillR15 = esmInit(() => {});
