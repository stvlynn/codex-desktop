// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 7/19
/* split-lane-import-depth:1 */

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
const Flint: any = undefined;
const Nest1: any = undefined;
const Quartz: any = undefined;
const Ridge: any = undefined;
const Storm: any = undefined;
const Trail1: any = undefined;
const garnet: any = undefined;
const hill: any = undefined;
const quiet1: any = undefined;
const urn1: any = undefined;
const violet: any = undefined;

function Vine1(event) {
  let falcon12 = Quartz({
    camera: event.camera,
    screenX: event.screenX,
    screenY: event.screenY,
    freezePanes: event.freezePanes,
    columnWidths: event.columnWidths,
    rowHeights: event.rowHeights,
  });
  return falcon12.x > 40 && falcon12.y > 20;
}
var wind1 = esmInit(() => {
  initAddressMetrics();
  violet();
});
function Yarrow1(event) {
  return event.key.length === 1;
}
var azure1 = esmInit(() => {});
function Birch1({
  controller,
  snapshot,
  runtime,
  hostRef,
  canvasRef,
  resizingRef,
  workerPointerDragActiveRef,
  selectionStartRef,
  selectionEndRef,
  selectionDraggedRef,
  dataValidationTargetsRef,
  viewportLogger,
  annotationEnabled,
  drawingEnabled,
  annotationMode,
  drawingMode,
  annotationEditorSession,
  annotationEditorSessionRef: gamma12,
  annotationEditorRef,
  annotationEditorLightDismissArmedRef,
  activeDrawingStrokeRef,
  workbookActiveReviewTarget,
  isEditing,
  inputFocused,
  floatingTextEdit,
  activeCellEditor,
  selectionBounds,
  selectedFloatingElement,
  toolbarRequested,
  setToolbarRequested,
  onAnnotationModeChange,
  onDrawingModeChange,
  cleanupDrawingSession,
  queueAnnotationDraftOpen,
  openCreateAnnotationEditor,
  closeAnnotationEditor,
  requestAnnotationEditorDismiss,
  beginDrawingSession,
  startWorkerViewportPointerDrag,
  isClipboardShortcut,
  navigateFindMatches,
  setFindQuery,
  setActiveFindIndex,
  setFindOpen,
  activeDataValidationAddress,
  setActiveDataValidationAddress,
  camera,
  reviewTools,
  onCellEditorBlur,
  onCellEditorChange,
}) {
  let harbor12 = canyon1.useRef(0),
    indigo12 = canyon1.useRef(null),
    jade12 = canyon1.useCallback(
      (event) => {
        annotationEnabled &&
          annotationEditorSession &&
          event.target instanceof HTMLElement &&
          !event.target.closest("[data-testid='popcorn-annotation-editor']") &&
          !event.target.closest("[data-popcorn-annotation-marker='true']") &&
          !event.target.closest("[data-popcorn-ask-for-edit='true']") &&
          event.target !== canvasRef.current &&
          requestAnnotationEditorDismiss();
        !(
          event.target instanceof HTMLElement &&
          event.target.closest("[data-testid='popcorn-edit-toolbar']")
        ) && setToolbarRequested(false);
      },
      [
        annotationEditorSession,
        annotationEnabled,
        canvasRef,
        requestAnnotationEditorDismiss,
        setToolbarRequested,
      ],
    ),
    kite12 = canyon1.useCallback(
      (event) => {
        if (
          !(
            event.target instanceof HTMLElement &&
            (event.target.closest("[data-testid='popcorn-find-bar']") ||
              event.target.closest("[data-testid='popcorn-annotation-editor']"))
          ) &&
          !isClipboardShortcut(event)
        ) {
          if (
            annotationEnabled &&
            reviewTools?.annotation?.onRequestLink &&
            !activeCellEditor &&
            !inputFocused &&
            !floatingTextEdit.isActive &&
            !annotationEditorSession &&
            !drawingMode &&
            (event.metaKey || event.ctrlKey) &&
            !event.altKey &&
            !event.shiftKey &&
            event.key.toLowerCase() === "l"
          ) {
            if (!workbookActiveReviewTarget) return;
            reviewTools.annotation.onRequestLink({
              requestId: popcornSurfaceStyle_mt("selection-link"),
              artifactKind: "workbook",
              label: Storm(workbookActiveReviewTarget),
              target: workbookActiveReviewTarget,
            });
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          if (event.key === "Escape" && activeDrawingStrokeRef.current) {
            cleanupDrawingSession();
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          if (event.key === "Escape" && drawingMode) {
            onDrawingModeChange?.(false);
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          if (
            event.key === "Escape" &&
            annotationMode &&
            !annotationEditorSession
          ) {
            onAnnotationModeChange?.(false);
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          if (
            !isEditing &&
            snapshot.editorMode === "grid" &&
            !event.nativeEvent.isComposing &&
            event.keyCode !== 229 &&
            !event.metaKey &&
            !event.ctrlKey &&
            !event.altKey &&
            !annotationMode &&
            Yarrow1(event)
          ) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          if (
            event.key === "/" &&
            !event.metaKey &&
            !event.ctrlKey &&
            !event.altKey
          ) {
            if (!isEditing) return;
            let ivory12 = !!selectionBounds;
            setToolbarRequested(ivory12);
            ivory12 && (event.preventDefault(), event.stopPropagation());
            return;
          }
          if (event.key === "Escape" && toolbarRequested) {
            setToolbarRequested(false);
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          if (
            !(
              !isEditing &&
              selectedFloatingElement &&
              (event.key === "Backspace" ||
                event.key === "Delete" ||
                event.key.startsWith("Arrow"))
            )
          ) {
            if (
              event.target === event.currentTarget &&
              !event.nativeEvent.isComposing &&
              event.keyCode !== 229 &&
              !event.metaKey &&
              !event.ctrlKey &&
              !event.altKey &&
              !annotationMode &&
              Yarrow1(event)
            ) {
              indigo12.current ?? (harbor12.current += 1);
              let jasper12 = `${indigo12.current ?? ""}${event.key}`;
              indigo12.current = jasper12;
              controller.openCellEditor(jasper12) &&
                (event.preventDefault(), event.stopPropagation());
              return;
            }
            if (
              event.key === "Escape" &&
              (snapshot.selectionRect.r1 !== snapshot.selectionRect.r2 ||
                snapshot.selectionRect.c1 !== snapshot.selectionRect.c2)
            ) {
              controller.collapseSelectionToActiveCell();
              controller.setIsDraggingSelection(false);
              controller.setResizeGuide(null);
              event.preventDefault();
              event.stopPropagation();
              return;
            }
            controller.handleKeyboardEvent({
              key: event.key,
              metaKey: event.metaKey,
              ctrlKey: event.ctrlKey,
              altKey: event.altKey,
              shiftKey: event.shiftKey,
            }) &&
              (event.preventDefault(),
              event.stopPropagation(),
              (selectionStartRef.current = null),
              (selectionEndRef.current = null),
              controller.setIsDraggingSelection(false),
              controller.setResizeGuide(null),
              viewportLogger.debug("keyboard", {
                key: event.key,
                selection: snapshot.selectedAddress,
              }));
          }
        }
      },
      [
        activeCellEditor,
        activeDrawingStrokeRef,
        annotationEditorSession,
        annotationEnabled,
        annotationMode,
        cleanupDrawingSession,
        controller,
        drawingMode,
        floatingTextEdit.isActive,
        inputFocused,
        isClipboardShortcut,
        isEditing,
        onAnnotationModeChange,
        onDrawingModeChange,
        reviewTools,
        selectedFloatingElement,
        selectionBounds,
        selectionEndRef,
        selectionStartRef,
        snapshot.editorMode,
        snapshot.selectedAddress,
        snapshot.selectionRect.c1,
        snapshot.selectionRect.c2,
        snapshot.selectionRect.r1,
        snapshot.selectionRect.r2,
        toolbarRequested,
        viewportLogger,
        workbookActiveReviewTarget,
        setToolbarRequested,
      ],
    ),
    lemon12 = canyon1.useCallback(
      (event) => {
        let kelp12 = hostRef.current,
          lotus12 = canvasRef.current;
        if (drawingMode && drawingEnabled) {
          lotus12 && (lotus12.style.cursor = "crosshair");
          kelp12 && (kelp12.style.cursor = "crosshair");
          return;
        }
        if (annotationMode && annotationEnabled) {
          let topaz12 = gamma12.current ? "" : popcornSurfaceStyle_t;
          lotus12 && (lotus12.style.cursor = topaz12);
          kelp12 && (kelp12.style.cursor = topaz12);
          return;
        }
        let mint12 = Trail1(
          event,
          hostRef,
          resizingRef,
          () => runtime.getCamera(),
          snapshot.columnWidths,
          snapshot.rowHeights,
          snapshot.freezePanes,
        );
        if (workerPointerDragActiveRef.current || !kelp12 || !lotus12) return;
        if (!selectedFloatingElement) {
          let ultra12 = kelp12.getBoundingClientRect(),
            vapor12 =
              isEditing &&
              Flint({
                screenX: event.clientX - ultra12.left,
                screenY: event.clientY - ultra12.top,
                selectionRect: snapshot.selectionRect,
                colWidths: snapshot.columnWidths,
                rowHeights: snapshot.rowHeights,
                camera: runtime.getCamera(),
                freezePanes: snapshot.freezePanes,
              })
                ? "crosshair"
                : (mint12 ?? "");
          lotus12.style.cursor = vapor12;
          kelp12.style.cursor = vapor12;
          return;
        }
        if (!isEditing) {
          lotus12.style.cursor = mint12 ?? "";
          kelp12.style.cursor = mint12 ?? "";
          return;
        }
        let nova12 = kelp12.getBoundingClientRect(),
          olive12 = Quartz({
            camera: runtime.getCamera(),
            screenX: event.clientX - nova12.left,
            screenY: event.clientY - nova12.top,
            freezePanes: snapshot.freezePanes,
            columnWidths: snapshot.columnWidths,
            rowHeights: snapshot.rowHeights,
          }),
          prism12 = {
            left: selectedFloatingElement.logicalBounds.x,
            top: selectedFloatingElement.logicalBounds.y,
            width: selectedFloatingElement.logicalBounds.width,
            height: selectedFloatingElement.logicalBounds.height,
            rotation: selectedFloatingElement.rotation,
          },
          quill12 = popcornSurfaceStyle_P(
            prism12,
            olive12,
            runtime.getCamera().k,
          ),
          reef12 =
            selectedFloatingElement.kind === "xlsx-shape" &&
            popcornSurfaceStyle_ot(prism12, olive12, runtime.getCamera().k),
          sage12 = quill12
            ? popcornSurfaceStyle_rt(quill12)
            : reef12
              ? popcornSurfaceStyle_gt()
              : null;
        lotus12.style.cursor = sage12 ?? "";
        kelp12.style.cursor = sage12 ?? "";
      },
      [
        gamma12,
        annotationEnabled,
        annotationMode,
        canvasRef,
        drawingEnabled,
        drawingMode,
        hostRef,
        isEditing,
        resizingRef,
        runtime,
        selectedFloatingElement,
        snapshot.columnWidths,
        snapshot.freezePanes,
        snapshot.rowHeights,
        snapshot.selectionRect,
        workerPointerDragActiveRef,
      ],
    ),
    marble12 = canyon1.useCallback(
      (event) => {
        try {
          hostRef.current?.focus({
            preventScroll: true,
          });
        } catch {}
        let wheat12 = event.currentTarget.getBoundingClientRect(),
          yarn12 = Quartz({
            camera: runtime.getCamera(),
            screenX: event.clientX - wheat12.left,
            screenY: event.clientY - wheat12.top,
            freezePanes: snapshot.freezePanes,
            columnWidths: snapshot.columnWidths,
            rowHeights: snapshot.rowHeights,
          });
        if (
          annotationEnabled &&
          !annotationMode &&
          gamma12.current &&
          !requestAnnotationEditorDismiss()
        ) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        if (drawingMode && drawingEnabled) {
          event.preventDefault();
          event.stopPropagation();
          beginDrawingSession(event);
          return;
        }
        if (annotationMode && annotationEnabled) {
          let acorn12 = gamma12.current,
            bloom12 =
              annotationEditorRef.current?.querySelector("textarea")?.value ??
              acorn12?.body ??
              "",
            coral12 =
              (annotationEditorSession?.mode ?? acorn12?.mode) === "create"
                ? bloom12.trim().length === 0
                  ? "close"
                  : "keep"
                : "replace";
          if (
            (acorn12 != null &&
              coral12 === "replace" &&
              closeAnnotationEditor(),
            selectedFloatingElement &&
              popcornSurfaceStyle_wt(
                {
                  left: selectedFloatingElement.logicalBounds.x,
                  top: selectedFloatingElement.logicalBounds.y,
                  width: selectedFloatingElement.logicalBounds.width,
                  height: selectedFloatingElement.logicalBounds.height,
                  rotation: selectedFloatingElement.rotation,
                },
                yarn12,
              ))
          ) {
            if (
              (event.preventDefault(),
              event.stopPropagation(),
              coral12 === "keep")
            ) {
              requestAnnotationEditorDismiss();
              return;
            }
            if (coral12 === "close") {
              requestAnnotationEditorDismiss();
              return;
            }
            let drift12 = Ridge({
              sheetName: snapshot.activeSheetName,
              selectedFloatingElement,
              anchorPoint: {
                x: yarn12.x,
                y: yarn12.y,
              },
            });
            if (!drift12) return;
            openCreateAnnotationEditor(drift12, "annotation_mode_pointer");
            return;
          }
          queueAnnotationDraftOpen({
            kind: "range",
            anchorPoint: {
              x: yarn12.x,
              y: yarn12.y,
            },
            getSelectionSummary: () => {
              let eagle12 = selectionStartRef.current,
                frost12 = selectionEndRef.current;
              return eagle12 == null || frost12 == null
                ? null
                : Nest1(
                    {
                      r1: eagle12.row,
                      c1: eagle12.col,
                      r2: frost12.row,
                      c2: frost12.col,
                    },
                    false,
                  );
            },
            draftClickAction: coral12,
            draftBody: coral12 === "keep" ? bloom12 : undefined,
            wasDraftLightDismissArmed:
              acorn12?.mode === "create"
                ? annotationEditorLightDismissArmedRef.current
                : undefined,
            shouldOpenDraftOnRelease: () =>
              coral12 === "replace" ? true : selectionDraggedRef.current,
          });
        }
        if (
          !(annotationMode && annotationEnabled) &&
          floatingTextEdit.handleCanvasMouseDown(event)
        )
          return;
        if (runtime.shouldSuppressMouseInteractions()) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        let zephyr12 = dataValidationTargetsRef.current.find((item) => {
          let glide12 = event.clientX - wheat12.left,
            honey12 = event.clientY - wheat12.top;
          return (
            glide12 >= item.cssBounds.x &&
            glide12 <= item.cssBounds.x + item.cssBounds.width &&
            honey12 >= item.cssBounds.y &&
            honey12 <= item.cssBounds.y + item.cssBounds.height
          );
        });
        if (zephyr12) {
          event.preventDefault();
          event.stopPropagation();
          controller.setSelectedAddress(zephyr12.addr);
          setActiveDataValidationAddress(zephyr12.addr);
          try {
            hostRef.current?.focus({
              preventScroll: true,
            });
          } catch {}
          return;
        }
        event.preventDefault();
        startWorkerViewportPointerDrag(event);
      },
      [
        gamma12,
        annotationEditorRef,
        annotationEnabled,
        annotationMode,
        beginDrawingSession,
        closeAnnotationEditor,
        controller,
        dataValidationTargetsRef,
        drawingEnabled,
        drawingMode,
        floatingTextEdit,
        hostRef,
        openCreateAnnotationEditor,
        queueAnnotationDraftOpen,
        requestAnnotationEditorDismiss,
        runtime,
        selectionDraggedRef,
        selectedFloatingElement,
        snapshot.activeSheetName,
        snapshot.columnWidths,
        snapshot.freezePanes,
        snapshot.rowHeights,
        startWorkerViewportPointerDrag,
        setActiveDataValidationAddress,
      ],
    ),
    nickel12 = canyon1.useCallback(
      (event) => {
        if (drawingMode && drawingEnabled) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        if (annotationMode && annotationEnabled) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        if (floatingTextEdit.handleCanvasDoubleClick(event) || !isEditing)
          return;
        if (runtime.shouldSuppressMouseInteractions()) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        let iris12 = event.currentTarget.getBoundingClientRect();
        if (
          Vine1({
            camera: runtime.getCamera(),
            screenX: event.clientX - iris12.left,
            screenY: event.clientY - iris12.top,
            freezePanes: snapshot.freezePanes,
            columnWidths: snapshot.columnWidths,
            rowHeights: snapshot.rowHeights,
          }) &&
          controller.openCellEditor(snapshot.formulaInput)
        ) {
          event.preventDefault();
          event.stopPropagation();
          try {
            hostRef.current?.focus({
              preventScroll: true,
            });
          } catch {}
        }
      },
      [
        annotationEnabled,
        annotationMode,
        controller,
        drawingEnabled,
        drawingMode,
        floatingTextEdit,
        hostRef,
        isEditing,
        runtime,
        snapshot.columnWidths,
        snapshot.formulaInput,
        snapshot.freezePanes,
        snapshot.rowHeights,
      ],
    ),
    onyx12 = canyon1.useCallback(() => {
      if (drawingMode && drawingEnabled) {
        canvasRef.current && (canvasRef.current.style.cursor = "crosshair");
        hostRef.current && (hostRef.current.style.cursor = "crosshair");
        return;
      }
      if (annotationMode && annotationEnabled) {
        let jewel12 = gamma12.current ? "" : popcornSurfaceStyle_t;
        canvasRef.current && (canvasRef.current.style.cursor = jewel12);
        hostRef.current && (hostRef.current.style.cursor = jewel12);
        return;
      }
      !resizingRef.current &&
        canvasRef.current &&
        (canvasRef.current.style.cursor = "default");
      !resizingRef.current &&
        hostRef.current &&
        (hostRef.current.style.cursor = "default");
    }, [
      gamma12,
      annotationEnabled,
      annotationMode,
      canvasRef,
      drawingEnabled,
      drawingMode,
      hostRef,
      resizingRef,
    ]),
    pearl12 = canyon1.useCallback((event) => {
      event.stopPropagation();
    }, []),
    quartz12 = canyon1.useCallback(
      (knoll12) => {
        setFindQuery(knoll12);
        setActiveFindIndex(0);
      },
      [setActiveFindIndex, setFindQuery],
    ),
    _e = canyon1.useCallback(() => {
      navigateFindMatches(-1);
    }, [navigateFindMatches]),
    river12 = canyon1.useCallback(() => {
      navigateFindMatches(1);
    }, [navigateFindMatches]),
    slate12 = canyon1.useCallback(() => {
      setFindOpen(false);
      setFindQuery("");
      setActiveFindIndex(0);
    }, [setActiveFindIndex, setFindOpen, setFindQuery]),
    be = canyon1.useCallback(
      (lunar12, moss12, north12) => {
        controller.dispatch({
          type: "set-table-filter-values",
          tableId: lunar12,
          colIdx: moss12,
          values: north12,
        });
      },
      [controller],
    ),
    timber12 = canyon1.useCallback(
      (orbit12, pine12) => {
        controller.dispatch({
          type: "set-table-sort",
          tableId: orbit12,
          sort: pine12,
        });
      },
      [controller],
    ),
    umbra12 = canyon1.useCallback(
      ({ left, top, settled }) => {
        let quest12 = popcornSurfaceStyle_ct(runtime.getCamera());
        runtime.setCamera(
          {
            x: -((left ?? quest12.left) * camera.k),
            y: -((top ?? quest12.top) * camera.k),
            k: camera.k,
          },
          settled
            ? {
                settled: true,
              }
            : undefined,
        );
      },
      [camera.k, runtime],
    ),
    violet12 = canyon1.useCallback(
      (ridge12) => {
        indigo12.current = null;
        onCellEditorChange?.(ridge12);
        isEditing && controller.updateFormulaInput(ridge12);
      },
      [controller, isEditing, onCellEditorChange],
    ),
    willow12 = canyon1.useCallback(
      (storm12, tide12) => {
        if (((indigo12.current = null), onCellEditorBlur?.(), isEditing)) {
          if (tide12.source === "keyboard") {
            controller.updateFormulaInput(storm12);
            controller.handleKeyboardEvent(tide12.keyboardInput);
            hostRef.current?.focus({
              preventScroll: true,
            });
            return;
          }
          controller.commitCellEdit(storm12);
        }
      },
      [controller, hostRef, isEditing, onCellEditorBlur],
    ),
    xenon12 = canyon1.useCallback(() => {
      indigo12.current = null;
      onCellEditorBlur?.();
      isEditing &&
        (controller.cancelCellEdit(),
        hostRef.current?.focus({
          preventScroll: true,
        }));
    }, [controller, hostRef, isEditing, onCellEditorBlur]),
    yellow12 = canyon1.useCallback(
      (unity12) => {
        activeDataValidationAddress &&
          (controller.setSelectedAddress(activeDataValidationAddress),
          controller.updateFormulaInput(unity12),
          controller.commitFormulaInput(unity12),
          setActiveDataValidationAddress(null));
      },
      [activeDataValidationAddress, controller, setActiveDataValidationAddress],
    ),
    zinc12 = canyon1.useCallback(() => {
      setActiveDataValidationAddress(null);
    }, [setActiveDataValidationAddress]),
    amber12 = canyon1.useCallback(
      (vale12, wave12) => {
        controller.replyToCommentThread(vale12, wave12);
      },
      [controller],
    ),
    basalt12 = canyon1.useCallback(
      (apex12) => {
        controller.resolveCommentThread(apex12);
      },
      [controller],
    ),
    cedar12 = canyon1.useCallback(
      (brook12) => {
        controller.reopenCommentThread(brook12);
      },
      [controller],
    ),
    daisy12 = canyon1.useCallback(
      (cliff12) => {
        controller.deleteCommentThread(cliff12);
      },
      [controller],
    ),
    ember12 = canyon1.useCallback(
      (dusk12, elm12, fern12) => {
        controller.toggleCommentReaction(dusk12, elm12, fern12);
      },
      [controller],
    ),
    flint12 = canyon1.useCallback(
      (grove12, hill12, isle12) => {
        controller.editThreadComment(grove12, hill12, isle12);
      },
      [controller],
    ),
    garnet12 = canyon1.useCallback(
      (juniper12, lagoon12) => {
        controller.deleteThreadComment(juniper12, lagoon12);
      },
      [controller],
    ),
    hazel12 = canyon1.useCallback(
      (meadow12) => {
        controller.dispatch({
          type: "set-freeze-panes",
          freezePanes: meadow12,
        });
      },
      [controller],
    );
  return {
    cellEditorSessionKey: harbor12.current,
    handleHostMouseDownCapture: jade12,
    handleHostKeyDown: kite12,
    handleHostMouseMove: lemon12,
    handleCanvasMouseDown: marble12,
    handleCanvasDoubleClick: nickel12,
    handleCanvasMouseLeave: onyx12,
    handleOverlayMouseDown: pearl12,
    handleFindQueryChange: quartz12,
    handleFindNavigatePrevious: _e,
    handleFindNavigateNext: river12,
    handleFindClose: slate12,
    handleSetTableFilterValues: be,
    handleSetTableSort: timber12,
    handleSetLogicalScroll: umbra12,
    handleCellEditChange: violet12,
    handleCellEditCommit: willow12,
    handleCellEditCancel: xenon12,
    handleDataValidationSelect: yellow12,
    handleDataValidationClose: zinc12,
    handleReplyToCommentThread: amber12,
    handleResolveCommentThread: basalt12,
    handleReopenCommentThread: cedar12,
    handleDeleteCommentThread: daisy12,
    handleToggleCommentReaction: ember12,
    handleEditThreadComment: flint12,
    handleDeleteThreadComment: garnet12,
    handleFreezePanesCommit: hazel12,
  };
}
var canyon1,
  dew1 = esmInit(() => {
    canyon1 = commonJsInit(react());
    violet();
    garnet();
    quiet1();
    popcornSurfaceStyle_nt();
    popcornSurfaceStyle_it();
    hill();
    popcornSurfaceStyle_St();
    popcornSurfaceStyle_ft();
    urn1();
    wind1();
    azure1();
  });
