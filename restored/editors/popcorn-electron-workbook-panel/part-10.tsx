// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 10/19
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
const Alpha2: any = undefined;
const Cliff: any = undefined;
const Daisy2: any = undefined;
const Elm: any = undefined;
const Hazel2: any = undefined;
const Ivory2: any = undefined;
const Knoll: any = undefined;
const Lagoon: any = undefined;
const Lemon2: any = undefined;
const Oak: any = undefined;
const Quest: any = undefined;
const River2: any = undefined;
const Tide: any = undefined;
const Umbra2: any = undefined;
const birch: any = undefined;
const lotus2: any = undefined;
const nova2: any = undefined;

function Kelp2({
  controller,
  snapshot,
  accentFill,
  accentStroke,
  inputFocused,
  formulaHighlightRects = [],
  onCellEditorFocus,
  onCellEditorBlur,
  onCellEditorChange,
  viewportOverlays = [],
  findRequestToken = 0,
  artifactSearchEnabled = true,
  isEditing = true,
  annotationMode = false,
  onAnnotationModeChange,
  drawingMode = false,
  onDrawingModeChange,
  drawingCommitToken: jasper15 = 0,
  reviewTools,
  annotationsEnabled = true,
  drawingAnnotationsEnabled = true,
  commentThreadsEnabled = true,
  bottomScrollReservePx = 0,
}) {
  let kelp15 = RemoteTextEditSessionM("viewport"),
    lotus15 = lotus2.useRef(null),
    [mint15, nova15] = lotus2.useState(null),
    olive15 = lotus2.useRef(null);
  olive15.current ||= Hazel2();
  let prism15 = olive15.current,
    quill15 = lotus2.useSyncExternalStore(
      prism15.subscribe,
      prism15.getSnapshot,
      prism15.getSnapshot,
    ),
    reef15 = lotus2.useRef(null),
    sage15 = lotus2.useRef(null),
    topaz15 = lotus2.useRef(null),
    ultra15 = lotus2.useRef(null),
    vapor15 = lotus2.useRef(null),
    wheat15 = lotus2.useRef(false),
    yarn15 = lotus2.useRef(null),
    zephyr15 = lotus2.useRef(false),
    acorn15 = lotus2.useSyncExternalStore(
      (timber16) => {
        let umbra16 = mint15?.ownerDocument.defaultView;
        if (!mint15 || !umbra16?.MutationObserver) return () => {};
        let violet16 = new umbra16.MutationObserver(timber16);
        return (
          violet16.observe(mint15.ownerDocument.documentElement, {
            attributeFilter: ["class", "data-theme", "style"],
            attributes: true,
          }),
          violet16.observe(mint15, {
            attributeFilter: ["class", "data-theme", "style"],
            attributes: true,
          }),
          () => {
            violet16.disconnect();
          }
        );
      },
      () => popcornSurfaceStyle_t(mint15),
      () => popcornSurfaceStyle_t(null),
    ),
    bloom15 = lotus2.useMemo(
      () =>
        popcornSurfaceStyle_t(accentFill)
          ? popcornSurfaceStyle_t(acorn15)
          : accentFill,
      [accentFill, acorn15],
    ),
    coral15 = lotus2.useMemo(
      () =>
        popcornSurfaceStyle_t(accentStroke)
          ? popcornSurfaceStyle_t(acorn15)
          : accentStroke,
      [accentStroke, acorn15],
    ),
    drift15 = lotus2.useRef(null);
  drift15.current ||= new birch({
    controller,
    accentStroke: coral15,
    isEditing,
    bottomScrollReservePx,
  });
  let eagle15 = drift15.current,
    frost15 = lotus2.useRef(formulaHighlightRects),
    glide15 = lotus2.useRef(
      snapshot.selectedFloatingElement?.logicalBounds ?? null,
    ),
    { updateOverlayTransform } = Oak({
      getCamera: () => eagle15.getCamera(),
      overlayHtmlLayerRef: topaz15,
    }),
    [honey15, iris15] = lotus2.useState(false),
    [jewel15, knoll15] = lotus2.useState(false),
    [lunar15, moss15] = lotus2.useState(""),
    [north15, orbit15] = lotus2.useState(0),
    [pine15, quest15] = lotus2.useState(0),
    [ridge15, storm15] = lotus2.useState(false),
    [tide15, unity15] = lotus2.useState({
      matches: [],
      total: 0,
    }),
    [_e, vale15] = lotus2.useState(null),
    [wave15, be] = lotus2.useState(true),
    [apex15, brook15] = lotus2.useState("bottom-right"),
    cliff15 = lotus2.useRef(null),
    dusk15 = lotus2.useRef(false),
    elm15 = lotus2.useRef(null),
    fern15 = lotus2.useSyncExternalStore(
      (willow16) => controller.subscribe(willow16),
      () => controller.getState(),
      () => controller.getState(),
    ),
    grove15 = lotus2.useRef(fern15.overlays.dataValidationTargets),
    hill15 = lotus2.useRef(fern15.floating.chartHoverTargets);
  lotus2.useEffect(() => {
    if (!remoteTextEditSessionUnderscore() || typeof window > "u") return;
    let xenon16 = controller,
      yellow16 = () => {
        let amber16 = reef15.current;
        if (!amber16)
          return {
            canvasClientSize: null,
            canvasRectSize: null,
            canvasRectStretch: null,
            canvasBitmapSize: null,
            canvasBitmapScale: null,
          };
        let basalt16 = amber16.getBoundingClientRect(),
          cedar16 = amber16.clientWidth,
          daisy16 = amber16.clientHeight,
          ember16 = window.devicePixelRatio || 1,
          flint16 = Math.max(1, Math.round(cedar16 * ember16)),
          garnet16 = Math.max(1, Math.round(daisy16 * ember16));
        return {
          canvasClientSize: {
            width: cedar16,
            height: daisy16,
          },
          canvasRectSize: {
            width: basalt16.width,
            height: basalt16.height,
          },
          canvasRectStretch:
            cedar16 > 0 && daisy16 > 0
              ? {
                  scaleX: basalt16.width / cedar16,
                  scaleY: basalt16.height / daisy16,
                  deltaWidth: basalt16.width - cedar16,
                  deltaHeight: basalt16.height - daisy16,
                }
              : null,
          canvasBitmapSize: {
            width: amber16.width,
            height: amber16.height,
          },
          canvasBitmapScale:
            flint16 > 0 && garnet16 > 0
              ? {
                  scaleX: amber16.width / flint16,
                  scaleY: amber16.height / garnet16,
                  deltaWidth: amber16.width - flint16,
                  deltaHeight: amber16.height - garnet16,
                }
              : null,
        };
      },
      zinc16 = {
        getDataValidationTargets: () =>
          grove15.current.map((item) => ({
            ...item,
            cssBounds: {
              ...item.cssBounds,
            },
          })),
        getCamera: () => ({
          ...eagle15.getCamera(),
        }),
        getResizeMetrics: () => ({
          ...yellow16(),
          controllerResizeState: xenon16.getResizeDebugState?.() ?? null,
        }),
        resetResizeMetrics: () => {
          xenon16.resetResizeDebugState?.();
        },
        openDataValidationAtAddress: (hazel16) => {
          controller.setSelectedAddress(hazel16);
          vale15(hazel16);
          try {
            lotus15.current?.focus({
              preventScroll: true,
            });
          } catch {}
        },
      };
    return (
      (window.__POPCORN_VIEWPORT_DEBUG__ = zinc16),
      () => {
        window.__POPCORN_VIEWPORT_DEBUG__ === zinc16 &&
          delete window.__POPCORN_VIEWPORT_DEBUG__;
      }
    );
  }, [controller, eagle15]);
  let isle15 = lotus2.useSyncExternalStore(
      (ivory16) => eagle15.subscribeToCameraChanges(ivory16),
      () => eagle15.getCamera(),
      () => eagle15.getCamera(),
    ),
    juniper15 = fern15.viewport.camera;
  lotus2.useEffect(() => {
    eagle15.setCamera(juniper15);
  }, [juniper15.k, juniper15.x, juniper15.y, eagle15]);
  let lagoon15 = controller.getSelectionSummarySource(),
    meadow15 = lotus2.useSyncExternalStore(
      lagoon15.subscribe,
      lagoon15.getSnapshot,
      lagoon15.getSnapshot,
    ),
    nest15 = lotus2.useMemo(() => {
      if (!isEditing || snapshot.editorMode !== "editCell") return null;
      let jasper16 = lotus15.current,
        kelp16 = popcornSurfaceStyle_et(isle15);
      return {
        row: snapshot.activeCell.row,
        col: snapshot.activeCell.col,
        address: snapshot.selectedAddress,
        initialValue: snapshot.formulaInput,
        viewport: {
          scrollLeft: kelp16.left,
          scrollTop: kelp16.top,
          width: jasper16?.clientWidth ?? 0,
          height: jasper16?.clientHeight ?? 0,
        },
      };
    }, [
      isle15,
      snapshot.activeCell.col,
      snapshot.activeCell.row,
      snapshot.editorMode,
      snapshot.formulaInput,
      snapshot.selectedAddress,
    ]),
    oak15 = lotus2.useMemo(() => {
      let lotus16 = [0];
      for (let mint16 = 0; mint16 < snapshot.columnWidths.length; mint16 += 1)
        lotus16[mint16 + 1] =
          (lotus16[mint16] ?? 0) + (snapshot.columnWidths[mint16] ?? 0);
      return lotus16;
    }, [snapshot.columnWidths]),
    petal15 = lotus2.useMemo(() => {
      let nova16 = [0];
      for (let olive16 = 0; olive16 < snapshot.rowHeights.length; olive16 += 1)
        nova16[olive16 + 1] =
          (nova16[olive16] ?? 0) + (snapshot.rowHeights[olive16] ?? 0);
      return nova16;
    }, [snapshot.rowHeights]),
    quiet15 = River2({
      selectionRect: snapshot.selectionRect,
      colOffsets: oak15,
      rowOffsets: petal15,
    });
  Daisy2({
    snapshot,
    runtime: eagle15,
    suppressReveal: !!snapshot.selectedFloatingElement,
  });
  let rain15 = fern15.overlays,
    seed15 = fern15.floating.selectedFloatingElement,
    trail15 = lotus2.useMemo(() => {
      let prism16 = 40 * isle15.k,
        quill16 = 20 * isle15.k,
        reef16 = Math.max(0, quill15.width - prism16),
        sage16 = Math.max(0, quill15.height - quill16);
      return reef16 <= 0 || sage16 <= 0
        ? null
        : {
            left: prism16,
            top: quill16,
            width: reef16,
            height: sage16,
          };
    }, [isle15.k, quill15.height, quill15.width]),
    urn15 = lotus2.useMemo(
      () =>
        Elm({
          snapshot,
          selectionSummary: meadow15,
          selectedFloatingElement: seed15,
        }),
      [meadow15, seed15, snapshot],
    ),
    {
      annotationEnabled,
      drawingEnabled,
      annotationEditorSession,
      annotationEditorSessionRef,
      annotationEditorLightDismissArmedRef,
      annotationEditorRef,
      annotationEditorAnchorBounds,
      annotationHighlightBounds,
      annotationRangeHighlights,
      pendingAnnotationMarkers,
      hoveredAnnotationMarker: $e,
      draftAnnotationMarkerNumber,
      activeDrawingStroke,
      activeDrawingStrokeRef,
      draftDrawingStrokes,
      visiblePendingDrawings,
      closeAnnotationEditor,
      requestAnnotationEditorDismiss,
      deleteAnnotationEditor,
      submitAnnotationEditor,
      beginDrawingSession,
      cleanupDrawingSession,
      queueAnnotationDraftOpen,
      openCreateAnnotationEditor,
      projectWorkbookDrawingPointToViewport,
      handleAnnotationEditorChange,
      getAnnotationMarkerMouseEnterHandler,
      getAnnotationMarkerMouseLeaveHandler,
      getAnnotationMarkerFocusHandler,
      getAnnotationMarkerBlurHandler,
      getAnnotationMarkerClickHandler,
    } = Alpha2({
      snapshot,
      reviewTools,
      annotationMode,
      drawingMode,
      drawingCommitToken: jasper15,
      runtime: eagle15,
      hostRef: lotus15,
      canvasRef: reef15,
      overlayCanvasRef: sage15,
      selectionSummary: meadow15,
      colOffsets: oak15,
      rowOffsets: petal15,
      camera: isle15,
      annotationRangeHighlightColor: coral15,
      mergedCells: rain15.mergedCells,
      annotationsEnabled,
      drawingAnnotationsEnabled,
    }),
    vine15 = lotus2.useMemo(
      () =>
        !artifactSearchEnabled || tide15.matches.length === 0
          ? null
          : (tide15.matches[
              Math.max(0, Math.min(pine15, tide15.matches.length - 1))
            ] ?? null),
      [pine15, artifactSearchEnabled, tide15.matches],
    ),
    wind15 = lotus2.useMemo(() => {
      if (!vine15) return [];
      let topaz16 = Knoll(vine15.address);
      return [
        {
          r1: topaz16.row,
          c1: topaz16.col,
          r2: topaz16.row,
          c2: topaz16.col,
          color: coral15,
          fillAlpha: 0.08,
          borderWidthPx: 1,
          borderRadiusPx: 0,
        },
      ];
    }, [coral15, vine15]),
    yarrow15 = lotus2.useMemo(
      () => [...formulaHighlightRects, ...wind15],
      [wind15, formulaHighlightRects],
    ),
    azure15 = Umbra2({
      controller,
      editorState: fern15.editor,
      selectedFloatingElement: seed15,
      hostRef: lotus15,
      canvasRef: reef15,
      isEditing,
    }),
    birch15 = lotus2.useMemo(
      () =>
        Quest({
          sheetName: snapshot.activeSheetName,
          selectionSummary: meadow15,
        }),
      [meadow15, snapshot.activeSheetName],
    ),
    canyon15 = seed15 ? urn15 : birch15,
    dew15 = lotus2.useMemo(
      () =>
        canyon15
          ? Cliff({
              target: canyon15,
              camera: isle15,
              freezePanes: snapshot.freezePanes,
              columnWidths: snapshot.columnWidths,
              rowHeights: snapshot.rowHeights,
              sheet: {
                mergedCells: rain15.mergedCells,
              },
            })
          : null,
      [
        isle15,
        rain15.mergedCells,
        canyon15,
        snapshot.columnWidths,
        snapshot.freezePanes,
        snapshot.rowHeights,
      ],
    ),
    alpha16 =
      annotationEnabled &&
      !annotationMode &&
      !drawingMode &&
      !snapshot.isDraggingSelection &&
      !inputFocused &&
      !azure15.isActive &&
      !nest15 &&
      !annotationEditorSession,
    bravo16 = lotus2.useMemo(() => {
      if (!canyon15) return null;
      switch (canyon15.type) {
        case "workbook-range":
          return `${canyon15.type}:${canyon15.sheetName}:${canyon15.rangeAddress}`;
        case "workbook-floating-element":
          return `${canyon15.type}:${canyon15.sheetName}:${canyon15.elementId}`;
      }
    }, [canyon15]),
    copper16 = lotus2.useCallback(() => {
      cliff15.current != null &&
        (clearTimeout(cliff15.current), (cliff15.current = null));
    }, []),
    delta16 = lotus2.useCallback(() => {
      copper16();
      cliff15.current = setTimeout(() => {
        cliff15.current = null;
        be(false);
      }, nova2);
    }, [copper16]);
  lotus2.useEffect(
    () => () => {
      copper16();
    },
    [copper16],
  );
  lotus2.useEffect(() => {
    if (!alpha16 || dew15 == null || bravo16 == null) {
      dusk15.current = false;
      copper16();
      be(false);
      return;
    }
    let ultra16 = elm15.current,
      vapor16 = ultra16 != null && Ivory2(ultra16.x, ultra16.y, dew15);
    if (((dusk15.current = vapor16), be(true), vapor16)) {
      copper16();
      return;
    }
    delta16();
  }, [copper16, delta16, dew15, bravo16, alpha16]);
  lotus2.useEffect(() => {
    grove15.current = [];
    hill15.current = [];
    vale15(null);
  }, [snapshot.activeSheetName]);
  lotus2.useEffect(() => {
    grove15.current = fern15.overlays.dataValidationTargets;
    hill15.current = fern15.floating.chartHoverTargets;
  }, [
    fern15.overlays.dataValidationTargets,
    fern15.floating.chartHoverTargets,
  ]);
  lotus2.useEffect(() => {
    eagle15.setAccentFill(bloom15);
  }, [bloom15, eagle15]);
  lotus2.useEffect(() => {
    eagle15.setAccentStroke(coral15);
  }, [coral15, eagle15]);
  lotus2.useEffect(() => {
    eagle15.setEditingEnabled(isEditing);
    controller.setEditingEnabled(isEditing);
  }, [controller, isEditing, eagle15]);
  lotus2.useEffect(() => {
    eagle15.setBottomScrollReservePx(bottomScrollReservePx);
  }, [bottomScrollReservePx, eagle15]);
  lotus2.useEffect(
    () => (
      eagle15.setOverlaySelectionStateProvider(() => ({
        selectionStart: ultra15.current,
        selectionEnd: vapor15.current,
      })),
      () => {
        eagle15.setOverlaySelectionStateProvider(null);
      }
    ),
    [eagle15],
  );
  lotus2.useEffect(
    () => (
      eagle15.setRangeHighlightsProvider(() => {
        let wheat16 = frost15.current,
          yarn16 =
            annotationRangeHighlights.length > 0
              ? [...wheat16, ...annotationRangeHighlights]
              : wheat16;
        if (!annotationEnabled || !annotationMode) return yarn16;
        let zephyr16 = ultra15.current,
          acorn16 = vapor15.current;
        return zephyr16 == null ||
          acorn16 == null ||
          (zephyr16.row === acorn16.row && zephyr16.col === acorn16.col)
          ? yarn16
          : [
              ...yarn16,
              Tide({
                rect: {
                  r1: Math.min(zephyr16.row, acorn16.row),
                  c1: Math.min(zephyr16.col, acorn16.col),
                  r2: Math.max(zephyr16.row, acorn16.row),
                  c2: Math.max(zephyr16.col, acorn16.col),
                },
                color: coral15,
              }),
            ];
      }),
      () => {
        eagle15.setRangeHighlightsProvider(null);
      }
    ),
    [
      annotationEnabled,
      annotationMode,
      annotationRangeHighlights,
      coral15,
      eagle15,
      vapor15,
      ultra15,
    ],
  );
  lotus2.useEffect(() => {
    eagle15.setSuppressCellSelection(
      annotationEnabled &&
        (annotationMode ||
          annotationEditorSession?.target.type === "workbook-range"),
    );
  }, [
    annotationEditorSession?.target.type,
    annotationEnabled,
    annotationMode,
    eagle15,
  ]);
  lotus2.useEffect(
    () => (
      eagle15.setDrawingSelectionProvider(() => glide15.current),
      () => {
        eagle15.setDrawingSelectionProvider(null);
      }
    ),
    [eagle15],
  );
  lotus2.useEffect(
    () => (
      eagle15.setDrawingOcclusionProvider(() => []),
      () => {
        eagle15.setDrawingOcclusionProvider(null);
      }
    ),
    [eagle15],
  );
  lotus2.useEffect(() => {
    frost15.current = yarrow15;
    eagle15.scheduleViewportRedraw();
  }, [eagle15, yarrow15]);
  lotus2.useEffect(() => {
    glide15.current = snapshot.selectedFloatingElement?.logicalBounds ?? null;
    eagle15.scheduleViewportRedraw();
  }, [eagle15, snapshot.selectedFloatingElement]);
  Lemon2({
    controller,
    snapshot,
    inputFocused,
    containerRef: lotus15,
  });
  lotus2.useEffect(
    () => () => {
      cleanupDrawingSession();
      eagle15.destroy();
    },
    [cleanupDrawingSession, eagle15],
  );
  lotus2.useEffect(() => {
    !artifactSearchEnabled ||
      findRequestToken <= 0 ||
      (knoll15(true), orbit15((bloom16) => bloom16 + 1));
  }, [artifactSearchEnabled, findRequestToken]);
  lotus2.useEffect(() => {
    artifactSearchEnabled ||
      (knoll15(false),
      moss15(""),
      quest15(0),
      unity15({
        matches: [],
        total: 0,
      }));
  }, [artifactSearchEnabled]);
  lotus2.useEffect(() => {
    quest15(0);
  }, [lunar15, snapshot.activeSheetName, snapshot.workbookVersion]);
  lotus2.useEffect(() => {
    if (!artifactSearchEnabled) {
      unity15({
        matches: [],
        total: 0,
      });
      return;
    }
    let coral16 = false;
    return (
      Lagoon(controller, lunar15, snapshot.activeSheetName, {
        focusFirstMatch: true,
      }).then((value) => {
        coral16 ||
          unity15({
            matches: value.matches.map((item) => ({
              address: item.address,
            })),
            total: value.total,
          });
      }),
      () => {
        coral16 = true;
      }
    );
  }, [
    controller,
    artifactSearchEnabled,
    lunar15,
    snapshot.activeSheetName,
    snapshot.workbookVersion,
  ]);
  lotus2.useEffect(() => {
    vale15(null);
  }, [snapshot.activeSheetName, snapshot.workbookVersion]);
  let echo16 = lotus2.useCallback(
      (drift16) => {
        let eagle16 = Knoll(drift16);
        controller.focusCell(eagle16.row, eagle16.col);
      },
      [controller],
    ),
    falcon16 = lotus2.useCallback(
      (frost16) => {
        tide15.matches.length !== 0 &&
          quest15((glide16) => {
            let honey16 = tide15.matches.length,
              iris16 = (glide16 + frost16 + honey16) % honey16,
              jewel16 = tide15.matches[iris16];
            return (jewel16 && echo16(jewel16.address), iris16);
          });
      },
      [echo16, tide15.matches],
    ),
    gamma16 = lotus2.useMemo(
      () =>
        !artifactSearchEnabled || !lunar15.trim()
          ? ""
          : tide15.total === 0
            ? "No results"
            : `${Math.min(pine15 + 1, tide15.total)} of ${tide15.total}`,
      [pine15, artifactSearchEnabled, lunar15, tide15.total],
    ),
    harbor16 =
      _e == null
        ? null
        : (grove15.current.find((item) => item.addr === _e) ?? null),
    indigo16 = lotus2.useMemo(() => {
      let knoll16 = fern15.overlays.activeDataValidation;
      return _e && knoll16?.address === _e ? knoll16 : null;
    }, [_e, fern15.overlays.activeDataValidation]);
  lotus2.useEffect(() => {
    updateOverlayTransform();
  }, [isle15, updateOverlayTransform]);
  lotus2.useEffect(() => {
    if (!mint15) {
      prism15.setSnapshot({
        width: 0,
        height: 0,
      });
      return;
    }
    let lunar16 = () => {
      prism15.setSnapshot({
        width: mint15.clientWidth,
        height: mint15.clientHeight,
      });
    };
    if ((lunar16(), typeof ResizeObserver > "u")) return;
    let moss16 = new ResizeObserver(() => {
      lunar16();
    });
    return (
      moss16.observe(mint15),
      () => {
        moss16.disconnect();
      }
    );
  }, [mint15, prism15]);
  lotus2.useEffect(() => {
    iris15(false);
  }, [
    snapshot.selectionRect.r1,
    snapshot.selectionRect.c1,
    snapshot.selectionRect.r2,
    snapshot.selectionRect.c2,
  ]);
  lotus2.useEffect(() => {
    snapshot.isDraggingSelection && iris15(false);
  }, [snapshot.isDraggingSelection]);
  lotus2.useEffect(() => {
    (nest15 || inputFocused) && iris15(false);
  }, [nest15, inputFocused]);
  return undefined as any;
}
