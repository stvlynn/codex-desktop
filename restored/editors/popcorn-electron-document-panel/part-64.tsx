// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 64/65
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
const $c: any = undefined;
const daisyR2: any = undefined;
const emberR2: any = undefined;
const garnetR2: any = undefined;
const hazelR2: any = undefined;
const jasperR2: any = undefined;
const kelpR2: any = undefined;
const lotusR15: any = undefined;
const lotusR2: any = undefined;
const mintR15: any = undefined;
const mintR2: any = undefined;
const novaR15: any = undefined;
const novaR2: any = undefined;
const oliveR15: any = undefined;
const prismR15: any = undefined;
const quillR15: any = undefined;
const timberR15: any = undefined;

function OliveR2({
  controller,
  surfaceId,
  rect,
  pageTextLayoutBlocks,
  pageObjectTargets,
  selectedTextBlockId,
  selectedObjectId,
  textEditSession,
  overlayVersion,
  enableWorker = true,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onClick,
  onDoubleClick,
}) {
  let mossR17 = reefR15.useRef(null),
    northR17 = reefR15.useRef(null),
    orbitR17 = window.devicePixelRatio || 1,
    pineR17 = reefR15.useMemo(
      () => jasperR2(pageObjectTargets, selectedObjectId),
      [pageObjectTargets, selectedObjectId],
    ),
    questR17 = reefR15.useMemo(
      () => lotusR2(pageTextLayoutBlocks, selectedTextBlockId),
      [pageTextLayoutBlocks, selectedTextBlockId],
    );
  return (
    reefR15.useEffect(() => {
      let gammaR23 = mossR17.current;
      if (
        !(!gammaR23 || !enableWorker) &&
        controller.attachPageCanvas({
          surfaceId,
          pageIndex: rect.pageIndex,
          canvas: gammaR23,
          width: rect.width,
          height: rect.height,
          dpr: orbitR17,
        })
      )
        return () => {
          controller.detachPageCanvas(surfaceId);
        };
    }, [controller, orbitR17, enableWorker, rect.pageIndex, surfaceId]),
    reefR15.useEffect(() => {
      let stormR21 = mossR17.current;
      if (stormR21) {
        if (
          ((stormR21.style.width = `${rect.width}px`),
          (stormR21.style.height = `${rect.height}px`),
          !enableWorker)
        ) {
          stormR21.width = Math.max(1, Math.round(rect.width * orbitR17));
          stormR21.height = Math.max(1, Math.round(rect.height * orbitR17));
          return;
        }
        controller.resizePageCanvas({
          surfaceId,
          width: rect.width,
          height: rect.height,
          dpr: orbitR17,
        });
      }
    }, [
      controller,
      orbitR17,
      enableWorker,
      rect.height,
      rect.width,
      surfaceId,
    ]),
    reefR15.useEffect(() => {
      let kelpR21 = northR17.current;
      if (!kelpR21) return;
      kelpR21.width = Math.max(1, Math.round(rect.width * orbitR17));
      kelpR21.height = Math.max(1, Math.round(rect.height * orbitR17));
      kelpR21.style.width = `${rect.width}px`;
      kelpR21.style.height = `${rect.height}px`;
      let lotusR21 = kelpR21.getContext("2d");
      lotusR21 &&
        (lotusR21.setTransform(orbitR17, 0, 0, orbitR17, 0, 0),
        lotusR21.clearRect(0, 0, rect.width, rect.height),
        novaR2(lotusR21, pineR17),
        mintR2(lotusR21, questR17),
        lotusR21.save(),
        lotusR21.translate(-rect.left, -rect.top),
        textEditSession.drawOverlay(lotusR21),
        lotusR21.restore());
    }, [
      orbitR17,
      overlayVersion,
      rect.height,
      rect.left,
      rect.top,
      rect.width,
      pineR17,
      questR17,
      textEditSession,
    ]),
    (
      <div
        className="absolute"
        style={{
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        }}
        data-testid={`popcorn-document-page-${rect.pageIndex}`}
      >
        <div className="absolute inset-0 rounded-sm bg-white shadow-[0_8px_32px_rgba(15,23,42,0.12)] ring-1 ring-black/8" />
        <canvas
          ref={mossR17}
          className="absolute inset-0"
          data-testid={`popcorn-document-page-canvas-${rect.pageIndex}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClick={onClick}
          onDoubleClick={onDoubleClick}
        />
        <canvas
          ref={northR17}
          className="pointer-events-none absolute inset-0"
          data-testid={`popcorn-document-page-overlay-${rect.pageIndex}`}
        />
      </div>
    )
  );
}
var reefR15,
  sageR15,
  ultraR15 = esmInit(() => {
    reefR15 = commonJsInit(react());
    prismR15();
    quillR15();
    novaR15();
    oliveR15();
    sageR15 = getJsxRuntime();
  });
function PrismR2({
  controller,
  snapshot,
  enableWorker = true,
  artifactSearchEnabled = true,
  bottomScrollReservePx = 0,
  scrollContainerRef,
}) {
  let hazelR16 = vaporR15.useRef(null),
    ivoryR16 = scrollContainerRef ?? hazelR16,
    jasperR16 = vaporR15.useRef(false),
    kelpR16 = vaporR15.useRef(null),
    lotusR16 = vaporR15.useRef(new Map()),
    mintR16 = vaporR15.useRef(new Map()),
    novaR16 = vaporR15.useRef(null),
    prismR16 = vaporR15.useRef(snapshot.pageIndex),
    [quillR16, reefR16] = vaporR15.useState(0),
    [sageR16, topazR16] = vaporR15.useState(0),
    ultraR16 = $c(ivoryR16),
    vaporR16 = vaporR15.useSyncExternalStore(
      (nickelR13) => controller.subscribeRenderedPages(nickelR13),
      () => controller.getRenderedPages(),
      () => controller.getRenderedPages(),
    ),
    wheatR16 = vaporR15.useMemo(
      () => new Map(vaporR16.map((item) => [item.pageIndex, item])),
      [vaporR16],
    ),
    yarnR16 = vaporR15.useMemo(() => {
      let oliveR25 = new Map();
      for (let orbitR26 of controller.getObjectTargets()) {
        let daisyR14 = oliveR25.get(orbitR26.pageIndex);
        daisyR14
          ? daisyR14.push(orbitR26)
          : oliveR25.set(orbitR26.pageIndex, [orbitR26]);
      }
      return oliveR25;
    }, [controller, snapshot.documentVersion, snapshot.pageLayouts, vaporR16]),
    zephyrR16 = vaporR15.useMemo(() => {
      let isleR20 = snapshot.pageLayouts.reduce(
          (accumulator, current) =>
            Math.max(accumulator, Math.round(current.width * snapshot.zoom)),
          0,
        ),
        bravoR21 = Math.max(ultraR16.width, isleR20 + 80),
        copperR21 = 32;
      return snapshot.pageLayouts.map((item) => {
        let driftR22 = Math.max(1, Math.round(item.width * snapshot.zoom)),
          eagleR22 = Math.max(1, Math.round(item.height * snapshot.zoom)),
          frostR22 = {
            pageIndex: item.pageIndex,
            left: Math.round((bravoR21 - driftR22) / 2),
            top: copperR21,
            width: driftR22,
            height: eagleR22,
            scale: snapshot.zoom,
          };
        return ((copperR21 += eagleR22 + 28), frostR22);
      });
    }, [ultraR16.width, snapshot.pageLayouts, snapshot.zoom]),
    bloomR16 = vaporR15.useMemo(() => {
      let duskR13 = zephyrR16.reduce(
        (accumulator, current) => Math.max(accumulator, current.width),
        0,
      );
      return Math.max(ultraR16.width, duskR13 + 80);
    }, [ultraR16.width, zephyrR16]),
    coralR16 = vaporR15.useMemo(
      () =>
        zephyrR16.map((item) => ({
          key: `document-page-${item.pageIndex}`,
          index: item.pageIndex,
          top: item.top,
          height: item.height,
        })),
      [zephyrR16],
    ),
    driftR16 = vaporR15.useMemo(
      () =>
        daisyR2(coralR16, {
          scrollTop: sageR16,
          viewportHeight: ultraR16.height,
          overscanPx: yarnR15,
        }),
      [ultraR16.height, sageR16, coralR16],
    ),
    eagleR16 = vaporR15.useMemo(() => {
      let pineR26 = new Map(zephyrR16.map((item) => [item.pageIndex, item]));
      return driftR16
        .map((item) => pineR26.get(item.index))
        .filter((item) => !!item);
    }, [zephyrR16, driftR16]),
    frostR16 = vaporR15.useMemo(
      () => emberR2(coralR16) + 32 + Math.max(0, bottomScrollReservePx),
      [bottomScrollReservePx, coralR16],
    ),
    glideR16 = vaporR15.useMemo(() => {
      let umbraR24 = new Map(),
        violetR24 = [];
      for (let deltaR26 of eagleR16) {
        let garnetR26 = wheatR16.get(deltaR26.pageIndex);
        for (let timberR14 of garnetR26?.textLayoutBlocks ?? []) {
          umbraR24.set(timberR14.id, deltaR26.pageIndex);
          violetR24.push($l(timberR14, deltaR26));
        }
      }
      return ((lotusR16.current = umbraR24), violetR24);
    }, [wheatR16, eagleR16]),
    honeyR16 = vaporR15.useMemo(
      () =>
        new RemoteTextEditSessionZoomControl(
          {
            onPointerDown: (nickelR5, onyxR5) => {
              let oliveR22 = vaporR2(
                nickelR5,
                onyxR5?.blockId ?? null,
                kelpR16.current,
                lotusR16.current,
                mintR16.current,
              );
              oliveR22 &&
                ((kelpR16.current = oliveR22.pageIndex),
                controller.textPointerDown(
                  oliveR22.pageIndex,
                  oliveR22.pagePoint,
                  {
                    shiftKey: onyxR5?.shiftKey,
                  },
                ));
            },
            onPointerMove: (zincR9) => {
              let reefR26 = vaporR2(
                zincR9,
                null,
                kelpR16.current,
                lotusR16.current,
                mintR16.current,
              );
              reefR26 && controller.textPointerMove(reefR26.pagePoint);
            },
            onPointerUp: () => {
              controller.textPointerUp();
            },
            onSelectWordAtPoint: (oliveR5, prismR5) => {
              let kiteR23 = vaporR2(
                oliveR5,
                prismR5?.blockId ?? null,
                kelpR16.current,
                lotusR16.current,
                mintR16.current,
              );
              kiteR23 &&
                ((kelpR16.current = kiteR23.pageIndex),
                controller.textSelectWordAtPoint(
                  kiteR23.pageIndex,
                  kiteR23.pagePoint,
                ));
            },
            onSelectParagraphAtPoint: (garnetR5, hazelR5) => {
              let deltaR23 = vaporR2(
                garnetR5,
                hazelR5?.blockId ?? null,
                kelpR16.current,
                lotusR16.current,
                mintR16.current,
              );
              deltaR23 &&
                ((kelpR16.current = deltaR23.pageIndex),
                controller.textSelectParagraphAtPoint(
                  deltaR23.pageIndex,
                  deltaR23.pagePoint,
                ));
            },
            onActivateBlockEnd: (yellowR12) => {
              controller.textActivateBlockEnd(yellowR12);
            },
            onClear: () => {
              controller.textClear();
            },
            onKeyDown: (hazelR12) => {
              controller.textHandleKeyDown(hazelR12);
            },
            onBeforeInput: (riverR12) => {
              controller.textHandleBeforeInput(riverR12);
            },
            onInput: (lotusR12) => {
              controller.textHandleInput(lotusR12);
            },
            onCompositionEnd: (isleR11) => {
              controller.textHandleCompositionEnd(isleR11);
            },
          },
          {
            onChange: () => {
              reefR16((topazR13) => topazR13 + 1);
            },
            onUnhandledKeyDown: (event) => {
              if (
                artifactSearchEnabled &&
                (event.metaKey || event.ctrlKey) &&
                event.key.toLowerCase() === "f"
              ) {
                controller.openFind();
                event.preventDefault();
                return;
              }
              if (
                (event.metaKey || event.ctrlKey) &&
                event.key.toLowerCase() === "z"
              ) {
                event.shiftKey ? controller.redo() : controller.undo();
                event.preventDefault();
                return;
              }
              (event.metaKey || event.ctrlKey) &&
                event.key.toLowerCase() === "y" &&
                (controller.redo(), event.preventDefault());
            },
          },
        ),
      [artifactSearchEnabled, controller],
    );
  vaporR15.useEffect(() => {
    mintR16.current = new Map(zephyrR16.map((item) => [item.pageIndex, item]));
  }, [zephyrR16]);
  vaporR15.useEffect(() => {
    let timberR25 = snapshot.textEditState?.activeBlockId ?? null;
    if (!timberR25) {
      kelpR16.current = null;
      return;
    }
    let umbraR25 = lotusR16.current.get(timberR25);
    umbraR25 !== undefined && (kelpR16.current = umbraR25);
  }, [snapshot.textEditState]);
  vaporR15.useEffect(
    () => (
      honeyR16.attachContainer(ivoryR16.current),
      () => {
        honeyR16.dispose();
      }
    ),
    [honeyR16],
  );
  vaporR15.useEffect(() => {
    honeyR16.updateState({
      state: snapshot.textEditState,
      blocks: glideR16,
    });
  }, [snapshot.textEditState, honeyR16, glideR16]);
  vaporR15.useEffect(
    () =>
      garnetR2({
        controller,
        getTextLayoutBlocks: () => glideR16,
        getTextEditState: () => snapshot.textEditState,
        getPageRects: () => zephyrR16,
        getRenderedPages: () => vaporR16,
      }),
    [controller, zephyrR16, vaporR16, snapshot.textEditState, glideR16],
  );
  vaporR15.useEffect(() => {
    prismR16.current !== snapshot.pageIndex &&
      ((prismR16.current = snapshot.pageIndex),
      quillR2(zephyrR16, sageR16, ultraR16.height) !== snapshot.pageIndex &&
        (novaR16.current = snapshot.pageIndex));
  }, [ultraR16.height, zephyrR16, sageR16, snapshot.pageIndex]);
  vaporR15.useEffect(() => {
    let bloomR25 = quillR2(zephyrR16, sageR16, ultraR16.height);
    novaR16.current !== snapshot.pageIndex &&
      (bloomR25 == null ||
        bloomR25 === snapshot.pageIndex ||
        controller.setPageIndex(bloomR25, {
          origin: "scroll",
        }));
  }, [ultraR16.height, controller, zephyrR16, sageR16, snapshot.pageIndex]);
  vaporR15.useEffect(() => {
    if (!ivoryR16.current) return;
    if (quillR2(zephyrR16, sageR16, ultraR16.height) === snapshot.pageIndex) {
      novaR16.current = null;
      return;
    }
    let duskR21 = zephyrR16[snapshot.pageIndex];
    if (!duskR21) return;
    let fernR21 = Math.max(0, duskR21.top - 32);
    if (
      ((novaR16.current = snapshot.pageIndex),
      typeof ivoryR16.current.scrollTo == "function")
    ) {
      ivoryR16.current.scrollTo({
        top: fernR21,
        behavior: "auto",
      });
      return;
    }
    ivoryR16.current.scrollTop = fernR21;
    topazR16(fernR21);
  }, [ultraR16.height, zephyrR16, sageR16, snapshot.pageIndex]);
  let irisR16 = vaporR15.useCallback(() => {
      let garnetR14 = ivoryR16.current;
      garnetR14 && (topazR16(garnetR14.scrollTop), (novaR16.current = null));
    }, []),
    jewelR16 = vaporR15.useCallback(
      (knollR7, valeR7) => (event) => {
        ivoryR16.current?.focus();
        let flintR19 = reefR2(event, knollR7),
          garnetR19 = ultraR2(flintR19, knollR7);
        if (!garnetR19) {
          controller.clearSelection();
          return;
        }
        let hazelR19 = hazelR2(yarnR16.get(knollR7.pageIndex) ?? [], garnetR19);
        if (!honeyR16.isActive()) {
          if (hazelR19) {
            controller.setSelectedObject({
              id: hazelR19.id,
              kind: hazelR19.kind,
              pageIndex: knollR7.pageIndex,
            });
            return;
          }
          let brookR22 = kelpR2(valeR7?.textLayoutBlocks ?? [], garnetR19);
          controller.setSelectedTextBlockId(brookR22?.id ?? null, {
            pageIndex: knollR7.pageIndex,
          });
          return;
        }
        if (hazelR19) {
          honeyR16.clear();
          controller.setSelectedObject({
            id: hazelR19.id,
            kind: hazelR19.kind,
            pageIndex: knollR7.pageIndex,
          });
          return;
        }
        if (
          honeyR16.tryPointerDown(flintR19, {
            shiftKey: event.shiftKey,
          })
        ) {
          jasperR16.current = true;
          kelpR16.current = knollR7.pageIndex;
          try {
            event.currentTarget.setPointerCapture(event.pointerId);
          } catch {}
          return;
        }
        honeyR16.clear();
      },
      [controller, yarnR16, honeyR16],
    ),
    knollR16 = vaporR15.useCallback(
      (frostR4, glideR4) => (event) => {
        let marbleR22 = reefR2(event, frostR4),
          nickelR22 = ultraR2(marbleR22, frostR4);
        if (!jasperR16.current) {
          let ultraR23 = yarnR16.get(frostR4.pageIndex) ?? [];
          if (nickelR22 && hazelR2(ultraR23, nickelR22)) {
            event.currentTarget.style.cursor = "move";
            return;
          }
          let vaporR23 = nickelR22
            ? kelpR2(glideR4?.textLayoutBlocks ?? [], nickelR22)
            : null;
          event.currentTarget.style.cursor = vaporR23 ? "text" : "";
          return;
        }
        honeyR16.pointerMove(marbleR22);
      },
      [yarnR16, honeyR16],
    ),
    mossR16 = vaporR15.useCallback(
      (oliveR6) => (event) => {
        if (jasperR16.current) {
          if (event.currentTarget.hasPointerCapture?.(event.pointerId))
            try {
              event.currentTarget.releasePointerCapture(event.pointerId);
            } catch {}
          jasperR16.current = false;
          honeyR16.pointerUp();
        }
      },
      [honeyR16],
    ),
    northR16 = vaporR15.useCallback(
      (yellowR8) => (event) => {
        if (event.detail < 3) return;
        let tideR25 = sageR2(event, yellowR8);
        honeyR16.selectParagraphAtPoint(tideR25) &&
          ((kelpR16.current = yellowR8.pageIndex), event.preventDefault());
      },
      [honeyR16],
    ),
    orbitR16 = vaporR15.useCallback(
      (knollR8) => (event) => {
        let onyxR26 = sageR2(event, knollR8);
        (honeyR16.selectWordAtPoint(onyxR26) ||
          honeyR16.tryPointerDown(onyxR26)) &&
          ((kelpR16.current = knollR8.pageIndex), event.preventDefault());
      },
      [honeyR16],
    );
  return (
    <div
      ref={ivoryR16}
      className="relative h-full min-h-0 overflow-auto bg-token-bg-tertiary"
      tabIndex={0}
      data-testid="popcorn-document-stage"
      onKeyDown={(event) => {
        if (
          (event.metaKey || event.ctrlKey) &&
          event.key.toLowerCase() === "z"
        ) {
          event.shiftKey ? controller.redo() : controller.undo();
          event.preventDefault();
          return;
        }
        if (
          (event.metaKey || event.ctrlKey) &&
          event.key.toLowerCase() === "y"
        ) {
          controller.redo();
          event.preventDefault();
          return;
        }
        if (
          artifactSearchEnabled &&
          (event.metaKey || event.ctrlKey) &&
          event.key.toLowerCase() === "f"
        ) {
          event.preventDefault();
          controller.openFind();
          return;
        }
        if (
          (event.key === "Backspace" || event.key === "Delete") &&
          !honeyR16.isActive() &&
          snapshot.selectedObjectId
        ) {
          controller.deleteSelectedObject();
          event.preventDefault();
          return;
        }
        if (event.key === "Escape") {
          if (honeyR16.isActive()) {
            honeyR16.clear();
            event.preventDefault();
            return;
          }
          if (snapshot.findOpen) {
            controller.closeFind();
            event.preventDefault();
            return;
          }
          (snapshot.selectedTextBlockId || snapshot.selectedObjectId) &&
            (controller.clearSelection(), event.preventDefault());
          return;
        }
        event.key === "Enter" &&
          !honeyR16.isActive() &&
          snapshot.selectedTextBlockId &&
          controller.textActivateBlockEnd(snapshot.selectedTextBlockId) &&
          event.preventDefault();
      }}
      onScroll={irisR16}
    >
      <div
        className="relative min-w-full"
        style={{
          height: Math.max(frostR16, ultraR16.height),
          width: Math.max(bloomR16, ultraR16.width),
        }}
      >
        {eagleR16.map((item) => {
          let xenonR20 = wheatR16.get(item.pageIndex);
          return (
            <OliveR2
              key={item.pageIndex}
              controller={controller}
              surfaceId={`document-page-${item.pageIndex}`}
              rect={item}
              pageTextLayoutBlocks={xenonR20?.textLayoutBlocks ?? []}
              pageObjectTargets={yarnR16.get(item.pageIndex) ?? []}
              selectedTextBlockId={snapshot.selectedTextBlockId}
              selectedObjectId={snapshot.selectedObjectId}
              textEditSession={honeyR16}
              overlayVersion={quillR16}
              enableWorker={enableWorker}
              onPointerDown={jewelR16(item, xenonR20)}
              onPointerMove={knollR16(item, xenonR20)}
              onPointerUp={mossR16(item)}
              onClick={northR16(item)}
              onDoubleClick={orbitR16(item)}
            />
          );
        })}
      </div>
    </div>
  );
}
function quillR2(garnetR6, ivoryR6, jasperR6) {
  if (garnetR6.length === 0 || jasperR6 <= 0) return null;
  let deltaR24 = ivoryR6 + jasperR6 / 2,
    echoR24 = garnetR6[0]?.pageIndex ?? null,
    falconR24 = 1 / 0;
  for (let stormR26 of garnetR6) {
    let groveR13 = stormR26.top + stormR26.height / 2,
      hillR13 = Math.abs(groveR13 - deltaR24);
    hillR13 < falconR24 &&
      ((falconR24 = hillR13), (echoR24 = stormR26.pageIndex));
  }
  return echoR24;
}
function reefR2(event, deltaR9) {
  let cedarR26 = event.currentTarget.getBoundingClientRect();
  return {
    x: deltaR9.left + (event.clientX - cedarR26.left),
    y: deltaR9.top + (event.clientY - cedarR26.top),
  };
}
function sageR2(event, echoR9) {
  let emberR26 = event.currentTarget.getBoundingClientRect();
  return {
    x: echoR9.left + (event.clientX - emberR26.left),
    y: echoR9.top + (event.clientY - emberR26.top),
  };
}
function ultraR2(oliveR8, prismR8) {
  let unityR25 = oliveR8.x - prismR8.left,
    valeR25 = oliveR8.y - prismR8.top;
  return unityR25 < 0 ||
    valeR25 < 0 ||
    unityR25 > prismR8.width ||
    valeR25 > prismR8.height
    ? null
    : {
        x: unityR25 / prismR8.scale,
        y: valeR25 / prismR8.scale,
      };
}
function vaporR2(lotusR7, novaR7, oliveR7, prismR7, quillR7) {
  let falconR25 = (novaR7 ? prismR7.get(novaR7) : undefined) ?? oliveR7;
  if (falconR25 == null) return null;
  let gammaR25 = quillR7.get(falconR25);
  if (!gammaR25) return null;
  let harborR25 = ultraR2(lotusR7, gammaR25);
  return harborR25
    ? {
        pageIndex: falconR25,
        pagePoint: harborR25,
      }
    : null;
}
function $l(duskR4, falconR5) {
  let tideR18 = falconR5.scale,
    unityR18 = (kiteR13) =>
      kiteR13 === undefined ? undefined : kiteR13 * tideR18;
  return {
    ...duskR4,
    hitBox: {
      x: falconR5.left + duskR4.hitBox.x * tideR18,
      y: falconR5.top + duskR4.hitBox.y * tideR18,
      width: duskR4.hitBox.width * tideR18,
      height: duskR4.hitBox.height * tideR18,
    },
    layout: {
      x: falconR5.left + duskR4.layout.x * tideR18,
      y: falconR5.top + duskR4.layout.y * tideR18,
      width: duskR4.layout.width * tideR18,
      height: duskR4.layout.height * tideR18,
      unrotatedWidth: unityR18(duskR4.layout.unrotatedWidth),
      unrotatedHeight: unityR18(duskR4.layout.unrotatedHeight),
      linkRects: duskR4.layout.linkRects.map((item) => ({
        ...item,
        x: falconR5.left + item.x * tideR18,
        y: falconR5.top + item.y * tideR18,
        width: item.width * tideR18,
        height: item.height * tideR18,
      })),
      lines: duskR4.layout.lines.map((item) => ({
        ...item,
        widthPx: item.widthPx * tideR18,
        heightPx: item.heightPx * tideR18,
        offsetPx: item.offsetPx * tideR18,
        availableWidthPx: unityR18(item.availableWidthPx),
        baselineOffsetPx: item.baselineOffsetPx * tideR18,
        maxAscentPx: item.maxAscentPx * tideR18,
        maxDescentPx: item.maxDescentPx * tideR18,
        maxPx: item.maxPx * tideR18,
        segments: item.segments.map((_item) => ({
          ..._item,
          widthPx: _item.widthPx * tideR18,
          px: _item.px * tideR18,
          ascentPx: _item.ascentPx * tideR18,
          descentPx: _item.descentPx * tideR18,
          advance: Float32Array.from(
            _item.advance,
            (ultraR13) => ultraR13 * tideR18,
          ),
        })),
      })),
    },
  };
}
var vaporR15,
  wheatR15,
  yarnR15,
  zephyrR15 = esmInit(() => {
    vaporR15 = commonJsInit(react());
    RemoteTextEditSessionN();
    timberR15();
    lotusR15();
    mintR15();
    novaR15();
    oliveR15();
    ultraR15();
    wheatR15 = getJsxRuntime();
    yarnR15 = 1600;
  });
