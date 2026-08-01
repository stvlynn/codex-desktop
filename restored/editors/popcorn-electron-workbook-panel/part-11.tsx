// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Careful split export-budget 1/2 from part-11
/* split-lane-import-depth:1 */
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 11/19

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
  popcornSurfaceStyle_dt as PopcornSurfaceStyle_dt,
  popcornSurfaceStyle_et,
  popcornSurfaceStyle_ft as PopcornSurfaceStyle_ft,
  popcornSurfaceStyle_gt,
  popcornSurfaceStyle_H,
  popcornSurfaceStyle_ht as PopcornSurfaceStyle_ht,
  popcornSurfaceStyle_it,
  popcornSurfaceStyle_J,
  popcornSurfaceStyle_lt as PopcornSurfaceStyle_lt,
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
  popcornSurfaceStyle_t as PopcornSurfaceStyle_t,
  popcornSurfaceStyle_tt as PopcornSurfaceStyle_tt,
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
const lotus2: any = undefined;
const Wheat2: any = undefined;
const Yarn2: any = undefined;
const _e: any = undefined;
const accentFill: any = undefined;
const accentStroke: any = undefined;
const activeDrawingStroke: any = undefined;
const activeDrawingStrokeRef: any = undefined;
const alpha16: any = undefined;
const annotationEditorAnchorBounds: any = undefined;
const annotationEditorLightDismissArmedRef: any = undefined;
const annotationEditorRef: any = undefined;
const annotationEditorSession: any = undefined;
const annotationEditorSessionRef: any = undefined;
const annotationEnabled: any = undefined;
const annotationHighlightBounds: any = undefined;
const annotationMode: any = undefined;
const apex15: any = undefined;
const artifactSearchEnabled: any = undefined;
const azure15: any = undefined;
const be: any = undefined;
const beginDrawingSession: any = undefined;
const bloom2: any = undefined;
const bottomScrollReservePx: any = undefined;
const brook15: any = undefined;
const canyon15: any = undefined;
const cleanupDrawingSession: any = undefined;
const closeAnnotationEditor: any = undefined;
const commentThreadsEnabled: any = undefined;
const controller: any = undefined;
const copper16: any = undefined;
const coral15: any = undefined;
const deleteAnnotationEditor: any = undefined;
const delta16: any = undefined;
const dew15: any = undefined;
const draftAnnotationMarkerNumber: any = undefined;
const draftDrawingStrokes: any = undefined;
const drawingEnabled: any = undefined;
const drawingMode: any = undefined;
const dusk15: any = undefined;
const eagle15: any = undefined;
const elm15: any = undefined;
const falcon16: any = undefined;
const gamma16: any = undefined;
const getAnnotationMarkerBlurHandler: any = undefined;
const getAnnotationMarkerClickHandler: any = undefined;
const getAnnotationMarkerFocusHandler: any = undefined;
const getAnnotationMarkerMouseEnterHandler: any = undefined;
const getAnnotationMarkerMouseLeaveHandler: any = undefined;
const grove15: any = undefined;
const handleAnnotationEditorChange: any = undefined;
const harbor16: any = undefined;
const hill15: any = undefined;
const honey15: any = undefined;
const indigo16: any = undefined;
const inputFocused: any = undefined;
const iris15: any = undefined;
const isEditing: any = undefined;
const isle15: any = undefined;
const jewel15: any = undefined;
const kelp15: any = undefined;
const knoll15: any = undefined;
const lotus15: any = undefined;
const lunar15: any = undefined;
const meadow15: any = undefined;
const mint15: any = undefined;
const moss15: any = undefined;
const nest15: any = undefined;
const north15: any = undefined;
const nova15: any = undefined;
const oak15: any = undefined;
const onAnnotationModeChange: any = undefined;
const onCellEditorBlur: any = undefined;
const onCellEditorChange: any = undefined;
const onCellEditorFocus: any = undefined;
const onDrawingModeChange: any = undefined;
const openCreateAnnotationEditor: any = undefined;
const pendingAnnotationMarkers: any = undefined;
const petal15: any = undefined;
const prism15: any = undefined;
const projectWorkbookDrawingPointToViewport: any = undefined;
const quest15: any = undefined;
const queueAnnotationDraftOpen: any = undefined;
const quiet15: any = undefined;
const rain15: any = undefined;
const reef15: any = undefined;
const requestAnnotationEditorDismiss: any = undefined;
const reviewTools: any = undefined;
const ridge15: any = undefined;
const sage15: any = undefined;
const seed15: any = undefined;
const snapshot: any = undefined;
const storm15: any = undefined;
const submitAnnotationEditor: any = undefined;
const topaz15: any = undefined;
const trail15: any = undefined;
const ultra15: any = undefined;
const urn15: any = undefined;
const vale15: any = undefined;
const vapor15: any = undefined;
const viewportOverlays: any = undefined;
const visiblePendingDrawings: any = undefined;
const wave15: any = undefined;
const wheat15: any = undefined;
const yarn15: any = undefined;
const zephyr15: any = undefined;
const Birch1: any = undefined;
const Elm1: any = undefined;
const Flint: any = undefined;
const Garnet2: any = undefined;
const Ivory2: any = undefined;
const Jasper2: any = undefined;
const Quartz: any = undefined;
const Ridge1: any = undefined;
const Umbra1: any = undefined;
const Xenon: any = undefined;
const Yarn1: any = undefined;
const Zinc1: any = undefined;
const _i: any = undefined;
const _r: any = undefined;
const amber: any = undefined;
const bloom1: any = undefined;
const brook1: any = undefined;
const canyon: any = undefined;
const copper2: any = undefined;
const dew1: any = undefined;
const flint2: any = undefined;
const garnet: any = undefined;
const garnet1: any = undefined;
const hill: any = undefined;
const isle1: any = undefined;
const jade1: any = undefined;
const nest: any = undefined;
const pearl2: any = undefined;
const quiet: any = undefined;
const slate2: any = undefined;
const timber1: any = undefined;
const violet: any = undefined;
const willow2: any = undefined;
const xenon1: any = undefined;

const $e: any = undefined;

const $r: any = undefined;

function Kelp2__splitRest1(__splitParams: any) {
  let jade16 = lotus2.useCallback(
      (north16) => {
        lotus15.current = north16;
        nova15(north16);
        eagle15.attachHost(north16);
      },
      [eagle15],
    ),
    kite16 = lotus2.useCallback(
      (orbit16) => {
        reef15.current = orbit16;
        eagle15.attachCanvas(orbit16);
      },
      [eagle15],
    ),
    $t = lotus2.useCallback(
      (pine16) => {
        sage15.current = pine16;
        eagle15.attachOverlayCanvas(pine16);
      },
      [eagle15],
    ),
    lemon16 = lotus2.useCallback((event) => {
      if (!(event.metaKey || event.ctrlKey) || event.altKey) return false;
      let quest16 = event.key.toLowerCase();
      return quest16 === "c" || quest16 === "x" || quest16 === "v";
    }, []),
    {
      cellEditorSessionKey,
      handleHostMouseDownCapture,
      handleHostKeyDown,
      handleHostMouseMove,
      handleCanvasMouseDown,
      handleCanvasDoubleClick,
      handleCanvasMouseLeave,
      handleOverlayMouseDown,
      handleFindQueryChange,
      handleFindNavigatePrevious,
      handleFindNavigateNext,
      handleFindClose,
      handleSetTableFilterValues,
      handleSetTableSort,
      handleSetLogicalScroll,
      handleCellEditChange,
      handleCellEditCommit,
      handleCellEditCancel,
      handleDataValidationSelect,
      handleDataValidationClose,
      handleReplyToCommentThread,
      handleResolveCommentThread,
      handleReopenCommentThread,
      handleDeleteCommentThread,
      handleToggleCommentReaction,
      handleEditThreadComment,
      handleDeleteThreadComment,
      handleFreezePanesCommit,
    } = Birch1({
      controller,
      snapshot,
      runtime: eagle15,
      hostRef: lotus15,
      canvasRef: reef15,
      resizingRef: yarn15,
      workerPointerDragActiveRef: zephyr15,
      selectionStartRef: ultra15,
      selectionEndRef: vapor15,
      selectionDraggedRef: wheat15,
      dataValidationTargetsRef: grove15,
      viewportLogger: kelp15,
      annotationEnabled,
      drawingEnabled,
      annotationMode,
      drawingMode,
      annotationEditorSession,
      annotationEditorSessionRef,
      annotationEditorRef,
      annotationEditorLightDismissArmedRef,
      activeDrawingStrokeRef,
      workbookActiveReviewTarget: urn15,
      isEditing,
      inputFocused,
      floatingTextEdit: azure15,
      activeCellEditor: nest15,
      selectionBounds: quiet15,
      selectedFloatingElement: seed15,
      toolbarRequested: honey15,
      setToolbarRequested: iris15,
      onAnnotationModeChange,
      onDrawingModeChange,
      cleanupDrawingSession,
      queueAnnotationDraftOpen,
      openCreateAnnotationEditor,
      closeAnnotationEditor,
      requestAnnotationEditorDismiss,
      beginDrawingSession,
      startWorkerViewportPointerDrag: lotus2.useCallback(
        (event) => {
          try {
            lotus15.current?.focus({
              preventScroll: true,
            });
          } catch {}
          let ridge16 = (dusk16, elm16) => {
              let fern16 = reef15.current?.getBoundingClientRect();
              return {
                screenX: dusk16 - (fern16?.left ?? 0),
                screenY: elm16 - (fern16?.top ?? 0),
              };
            },
            storm16 = (grove16, hill16) => {
              let isle16 = ridge16(grove16, hill16),
                juniper16 = Quartz({
                  camera: eagle15.getCamera(),
                  screenX: isle16.screenX,
                  screenY: isle16.screenY,
                  freezePanes: snapshot.freezePanes,
                  columnWidths: snapshot.columnWidths,
                  rowHeights: snapshot.rowHeights,
                }),
                lagoon16 =
                  juniper16.x >= 0 &&
                  juniper16.x <= 40 &&
                  juniper16.y >= 0 &&
                  juniper16.y <= 20,
                meadow16 =
                  juniper16.y >= 0 && juniper16.y <= 20 && juniper16.x > 40,
                nest16 =
                  juniper16.x >= 0 && juniper16.x <= 40 && juniper16.y > 20;
              if (
                lagoon16 ||
                meadow16 ||
                nest16 ||
                (isEditing &&
                  !seed15 &&
                  Flint({
                    screenX: isle16.screenX,
                    screenY: isle16.screenY,
                    selectionRect: snapshot.selectionRect,
                    colWidths: snapshot.columnWidths,
                    rowHeights: snapshot.rowHeights,
                    camera: eagle15.getCamera(),
                    freezePanes: snapshot.freezePanes,
                  }))
              )
                return null;
              if (seed15) {
                let oak16 = {
                  left: seed15.logicalBounds.x,
                  top: seed15.logicalBounds.y,
                  width: seed15.logicalBounds.width,
                  height: seed15.logicalBounds.height,
                  rotation: seed15.rotation,
                };
                if (
                  popcornSurfaceStyle_wt(oak16, juniper16) ||
                  popcornSurfaceStyle_P(
                    oak16,
                    juniper16,
                    eagle15.getCamera().k,
                  ) != null ||
                  (seed15.kind === "xlsx-shape" &&
                    popcornSurfaceStyle_ot(
                      oak16,
                      juniper16,
                      eagle15.getCamera().k,
                    ))
                )
                  return null;
              }
              return {
                row: Garnet2(
                  juniper16.y - 20,
                  petal15,
                  snapshot.rowHeights.length,
                ),
                col: Garnet2(
                  juniper16.x - 40,
                  oak15,
                  snapshot.columnWidths.length,
                ),
              };
            },
            tide16 = (petal16, quiet16) => {
              let rain16 = ridge16(petal16, quiet16),
                seed16 = Quartz({
                  camera: eagle15.getCamera(),
                  screenX: rain16.screenX,
                  screenY: rain16.screenY,
                  freezePanes: snapshot.freezePanes,
                  columnWidths: snapshot.columnWidths,
                  rowHeights: snapshot.rowHeights,
                });
              return {
                row: Garnet2(
                  seed16.y - 20,
                  petal15,
                  snapshot.rowHeights.length,
                ),
                col: Garnet2(
                  seed16.x - 40,
                  oak15,
                  snapshot.columnWidths.length,
                ),
              };
            },
            unity16 = storm16(event.clientX, event.clientY);
          ultra15.current = unity16;
          vapor15.current = unity16;
          wheat15.current = false;
          eagle15.scheduleViewportRedraw();
          controller.handleViewportPointerDown({
            ...ridge16(event.clientX, event.clientY),
            button: event.button,
            detail: event.detail,
            altKey: event.altKey,
            shiftKey: event.shiftKey,
            ctrlKey: event.ctrlKey,
          });
          zephyr15.current = true;
          storm15(true);
          let vale16 = Elm1({
              containerRef: lotus15,
              getZoom: () => eagle15.getCamera().k,
              panViewportBy: (trail16, urn16) => {
                eagle15.panByScroll(trail16, urn16);
              },
              onAutoScrollFrame: (vine16, wind16) => {
                ultra15.current &&
                  ((vapor15.current = tide16(vine16, wind16)),
                  eagle15.scheduleViewportRedraw());
                controller.handleViewportPointerMove({
                  ...ridge16(vine16, wind16),
                  buttons: 1,
                  altKey: false,
                  shiftKey: false,
                  ctrlKey: false,
                });
              },
            }),
            wave16 = (_event) => {
              zephyr15.current &&
                (ultra15.current &&
                  ((wheat15.current = true),
                  (vapor15.current = tide16(_event.clientX, _event.clientY)),
                  eagle15.scheduleViewportRedraw()),
                vale16.updatePointer(_event.clientX, _event.clientY),
                controller.handleViewportPointerMove({
                  ...ridge16(_event.clientX, _event.clientY),
                  buttons: _event.buttons,
                  altKey: _event.altKey,
                  shiftKey: _event.shiftKey,
                  ctrlKey: _event.ctrlKey,
                }));
            },
            apex16 = () => {
              zephyr15.current = false;
              storm15(false);
              ultra15.current = null;
              vapor15.current = null;
              wheat15.current = false;
              eagle15.scheduleViewportRedraw();
              vale16.stop();
              window.removeEventListener("mousemove", wave16);
              window.removeEventListener("mouseup", brook16);
              window.removeEventListener("blur", cliff16);
            },
            brook16 = (_event) => {
              wheat15.current &&
              ultra15.current != null &&
              vapor15.current != null
                ? brook15(Jasper2(ultra15.current, vapor15.current))
                : brook15("bottom-right");
              controller.handleViewportPointerUp({
                ...ridge16(_event.clientX, _event.clientY),
                button: _event.button,
                altKey: _event.altKey,
                shiftKey: _event.shiftKey,
                ctrlKey: _event.ctrlKey,
              });
              apex16();
            },
            cliff16 = () => {
              controller.cancelViewportPointer();
              apex16();
            };
          window.addEventListener("mousemove", wave16);
          window.addEventListener("mouseup", brook16);
          window.addEventListener("blur", cliff16);
        },
        [
          oak15,
          controller,
          isEditing,
          petal15,
          eagle15,
          seed15,
          snapshot.columnWidths,
          snapshot.freezePanes,
          snapshot.rowHeights,
          snapshot.selectionRect,
        ],
      ),
      isClipboardShortcut: lemon16,
      navigateFindMatches: falcon16,
      setFindQuery: moss15,
      setActiveFindIndex: quest15,
      setFindOpen: knoll15,
      activeDataValidationAddress: _e,
      setActiveDataValidationAddress: vale15,
      camera: isle15,
      reviewTools,
      onCellEditorBlur,
      onCellEditorChange,
    }),
    marble16 = lotus2.useCallback((event) => {
      let yarrow16 = event.currentTarget.getBoundingClientRect(),
        azure16 = {
          x: event.clientX - yarrow16.left,
          y: event.clientY - yarrow16.top,
        };
      return ((elm15.current = azure16), azure16);
    }, []),
    nickel16 = lotus2.useCallback(
      (birch16) => {
        let canyon16 = marble16(birch16);
        if (!alpha16 || dew15 == null) return;
        let dew16 = Ivory2(canyon16.x, canyon16.y, dew15);
        if (dusk15.current !== dew16) {
          if (((dusk15.current = dew16), dew16)) {
            copper16();
            be(true);
            return;
          }
          delta16();
        }
      },
      [copper16, delta16, dew15, alpha16, marble16],
    ),
    onyx16 = lotus2.useCallback(
      (alpha17) => {
        nickel16(alpha17);
        handleHostMouseDownCapture(alpha17);
      },
      [handleHostMouseDownCapture, nickel16],
    ),
    pearl16 = lotus2.useCallback(
      (bravo17) => {
        handleHostMouseMove(bravo17);
        nickel16(bravo17);
      },
      [handleHostMouseMove, nickel16],
    ),
    quartz16 = lotus2.useCallback(() => {
      elm15.current = null;
      alpha16 && ((dusk15.current = false), delta16());
    }, [delta16, alpha16]),
    river16 =
      annotationEnabled && annotationMode && snapshot.isDraggingSelection,
    slate16 = annotationEditorAnchorBounds;
  return (
    river16
      ? (slate16 = null)
      : annotationEditorSession?.target.type === "workbook-range" &&
        (slate16 = annotationHighlightBounds),
    (
      <div className="relative h-full">
        <div
          ref={jade16}
          data-testid="popcorn-viewport-host"
          role="presentation"
          className="relative h-full overflow-hidden focus:outline-none focus-visible:outline-none"
          tabIndex={-1}
          style={{
            touchAction: "none",
          }}
          onMouseDownCapture={onyx16}
          onKeyDown={handleHostKeyDown}
          onMouseMove={pearl16}
          onMouseLeave={quartz16}
        >
          <div className="relative sticky start-0 top-0 h-full">
            <canvas
              ref={kite16}
              aria-label="Spreadsheet canvas"
              className="absolute top-0 left-0 focus:outline-none focus-visible:outline-none"
              tabIndex={-1}
              onMouseDown={handleCanvasMouseDown}
              onDoubleClick={handleCanvasDoubleClick}
              onMouseLeave={handleCanvasMouseLeave}
            />
            {nest15 ? (
              <div
                data-testid="popcorn-cell-editor-layer"
                className="pointer-events-none absolute inset-0 z-0"
              >
                {
                  <$r
                    key={cellEditorSessionKey}
                    {...{
                      rowIndex: nest15.row,
                      colIndex: nest15.col,
                      zoom: isle15.k,
                      viewColWidths: snapshot.columnWidths,
                      rowHeights: snapshot.rowHeights,
                      initialValue: nest15.initialValue,
                      onFocus: onCellEditorFocus,
                      onChange: handleCellEditChange,
                      onCommit: handleCellEditCommit,
                      onCancel: handleCellEditCancel,
                      viewport: nest15.viewport,
                      accentColor: coral15,
                      camera: isle15,
                      freezePanes: snapshot.freezePanes,
                      sheetName: snapshot.activeSheetName,
                    }}
                  />
                }
              </div>
            ) : null}
            <canvas
              ref={$t}
              data-testid="popcorn-selection-layer"
              className="pointer-events-none absolute top-0 left-0 z-10 focus:outline-none focus-visible:outline-none"
              tabIndex={-1}
            />
            <canvas
              ref={azure15.setTextOverlayCanvasNode}
              className="pointer-events-none absolute top-0 left-0 z-[15] focus:outline-none focus-visible:outline-none"
              tabIndex={-1}
            />
            <div
              ref={topaz15}
              data-testid="popcorn-overlay"
              className="pointer-events-none absolute inset-0 z-20"
              onMouseDown={handleOverlayMouseDown}
            >
              {artifactSearchEnabled ? (
                <PopcornFindBar
                  {...{
                    open: jewel15,
                    query: lunar15,
                    summary: gamma16,
                    focusToken: north15,
                    onQueryChange: handleFindQueryChange,
                    onNavigatePrevious: handleFindNavigatePrevious,
                    onNavigateNext: handleFindNavigateNext,
                    onClose: handleFindClose,
                  }}
                />
              ) : null}
              {rain15.sheetTables.length > 0 ? (
                <Yarn1
                  {...{
                    sheetName: snapshot.activeSheetName,
                    tables: rain15.sheetTables,
                    filterOptionsByColumn: rain15.tableFilterOptions,
                    viewColWidths: snapshot.columnWidths,
                    rowHeights: snapshot.rowHeights,
                    zoom: isle15.k,
                    camera: isle15,
                    freezePanes: snapshot.freezePanes,
                    activeFilters: snapshot.tableFilters,
                    activeSortByTable: snapshot.tableSorts,
                    onSetFilterValues: handleSetTableFilterValues,
                    onSetSort: handleSetTableSort,
                  }}
                />
              ) : null}
              {
                <Ridge1
                  {...{
                    host: mint15,
                    camera: isle15,
                    viewportSizeStore: prism15,
                    columnWidths: snapshot.columnWidths,
                    rowHeights: snapshot.rowHeights,
                    freezePanes: snapshot.freezePanes,
                    bottomScrollReservePx,
                    onSetLogicalScroll: handleSetLogicalScroll,
                  }}
                />
              }
              {
                <Umbra1
                  {...{
                    open: _e != null,
                    values: indigo16?.values ?? [],
                    selectedValue: indigo16?.selectedValue ?? "",
                    targetBounds: harbor16?.cssBounds ?? null,
                    onSelect: handleDataValidationSelect,
                    onClose: handleDataValidationClose,
                  }}
                />
              }
              {commentThreadsEnabled ? (
                <Xenon
                  {...{
                    threads: rain15.commentThreads ?? [],
                    camera: isle15,
                    freezePanes: snapshot.freezePanes,
                    columnWidths: snapshot.columnWidths,
                    rowHeights: snapshot.rowHeights,
                    isEditing,
                    onReply: handleReplyToCommentThread,
                    onResolve: handleResolveCommentThread,
                    onReopen: handleReopenCommentThread,
                    onDeleteThread: handleDeleteCommentThread,
                    onToggleReaction: handleToggleCommentReaction,
                    onEditComment: handleEditThreadComment,
                    onDeleteComment: handleDeleteThreadComment,
                  }}
                />
              ) : null}
              {visiblePendingDrawings.length > 0 ? (
                <PopcornSurfaceStyle_ht
                  {...{
                    testId: "popcorn-drawing-overlay",
                    strokes: visiblePendingDrawings.flatMap(
                      (item) => item.strokes,
                    ),
                    projectPoint: projectWorkbookDrawingPointToViewport,
                    clipBounds: trail15,
                  }}
                />
              ) : null}
              {draftDrawingStrokes.length > 0 ? (
                <PopcornSurfaceStyle_ht
                  {...{
                    testId: "popcorn-drawing-draft-overlay",
                    strokes: draftDrawingStrokes,
                    projectPoint: projectWorkbookDrawingPointToViewport,
                    clipBounds: trail15,
                  }}
                />
              ) : null}
              {activeDrawingStroke ? (
                <PopcornSurfaceStyle_ht
                  {...{
                    testId: "popcorn-drawing-active-overlay",
                    strokes: [activeDrawingStroke],
                    projectPoint: projectWorkbookDrawingPointToViewport,
                    clipBounds: trail15,
                  }}
                />
              ) : null}
              {pendingAnnotationMarkers.map(
                ({ annotation, bounds, anchorBounds }) => {
                  let copper17 = PopcornSurfaceStyle_t(
                    annotation.target.type === "workbook-range"
                      ? bounds
                      : anchorBounds,
                  );
                  return (
                    <div key={annotation.annotationId}>
                      {annotation.target.type === "workbook-range" ? null : (
                        <PopcornSurfaceStyle_tt
                          {...{
                            bounds,
                            fillOnly: true,
                            testId: `popcorn-annotation-overlay-${annotation.annotationId}`,
                          }}
                        />
                      )}
                      {
                        <PopcornSurfaceStyle_t
                          {...{
                            testId: `popcorn-annotation-marker-${annotation.annotationId}`,
                            markerNumber: annotation.annotationNumber,
                            position: copper17,
                            selected:
                              annotationEditorSession?.mode === "edit" &&
                              annotationEditorSession.annotationId ===
                                annotation.annotationId,
                            title: annotation.label,
                            onMouseEnter: getAnnotationMarkerMouseEnterHandler(
                              annotation.annotationId,
                            ),
                            onMouseLeave: getAnnotationMarkerMouseLeaveHandler(
                              annotation.annotationId,
                            ),
                            onFocus: getAnnotationMarkerFocusHandler(
                              annotation.annotationId,
                            ),
                            onBlur: getAnnotationMarkerBlurHandler(
                              annotation.annotationId,
                            ),
                            onClick:
                              getAnnotationMarkerClickHandler(annotation),
                          }}
                        />
                      }
                    </div>
                  );
                },
              )}
              {$e ? (
                <PopcornSurfaceStyle_ft
                  {...{
                    body: $e.annotation.body,
                    markerPosition: PopcornSurfaceStyle_t(
                      $e.annotation.target.type === "workbook-range"
                        ? $e.bounds
                        : $e.anchorBounds,
                    ),
                    containerElement: mint15,
                    testId: "popcorn-annotation-preview",
                  }}
                />
              ) : null}
              {annotationHighlightBounds &&
              !river16 &&
              annotationEditorSession?.target.type !== "workbook-range" ? (
                <PopcornSurfaceStyle_tt
                  {...{
                    bounds: annotationHighlightBounds,
                    testId: "popcorn-annotation-highlight",
                  }}
                />
              ) : null}
              {annotationEnabled &&
              annotationMode &&
              annotationEditorSession?.mode === "create" &&
              slate16 &&
              draftAnnotationMarkerNumber != null ? (
                <PopcornSurfaceStyle_t
                  {...{
                    testId: "popcorn-annotation-draft-marker",
                    markerNumber: draftAnnotationMarkerNumber,
                    position: PopcornSurfaceStyle_t(slate16),
                    draft: true,
                  }}
                />
              ) : null}
              {alpha16 && wave15 && dew15 && canyon15 ? (
                <PopcornSurfaceStyle_lt
                  {...{
                    bounds: dew15,
                    placement: apex15,
                    shortcutScopeElement: mint15,
                    testId: "popcorn-workbook-ask-for-edit-button",
                    onClick: (delta17) => {
                      openCreateAnnotationEditor(canyon15, delta17);
                    },
                  }}
                />
              ) : null}
              {annotationEditorAnchorBounds ? (
                <PopcornSurfaceStyle_dt
                  {...{
                    ref: annotationEditorRef,
                    anchorBounds: annotationEditorAnchorBounds,
                    containerElement: mint15,
                    mode: annotationEditorSession?.mode ?? "create",
                    value: annotationEditorSession?.body ?? "",
                    onChange: handleAnnotationEditorChange,
                    onCancel: closeAnnotationEditor,
                    onDelete: deleteAnnotationEditor,
                    onSubmit: submitAnnotationEditor,
                  }}
                />
              ) : null}
              {viewportOverlays.map((item) => (
                <div key={item.id}>
                  {item.render({
                    controller,
                    snapshot,
                    camera: isle15,
                    inputFocused,
                    selectionBounds: quiet15,
                    selectionSummary: meadow15,
                    accentFill,
                    accentStroke,
                    toolbarRequested: honey15,
                  })}
                </div>
              ))}
            </div>
            {
              <Zinc1
                {...{
                  hostRef: lotus15,
                  camera: isle15,
                  freezePanes: snapshot.freezePanes,
                  columnWidths: snapshot.columnWidths,
                  rowHeights: snapshot.rowHeights,
                  onCommit: handleFreezePanesCommit,
                }}
              />
            }
            {
              <_i
                {...{
                  canvasRef: reef15,
                  viewportRef: lotus15,
                  chartTargetsRef: hill15,
                  getCamera: () => eagle15.getCamera(),
                  selectedFloatingElement: seed15,
                  suppressHover: ridge15,
                  freezePanes: snapshot.freezePanes,
                  columnWidths: snapshot.columnWidths,
                  rowHeights: snapshot.rowHeights,
                  subscribeToCameraChanges: (echo17) =>
                    eagle15.subscribeToCameraChanges(echo17),
                }}
              />
            }
          </div>
        </div>
      </div>
    )
  );
  return undefined as any;
}
