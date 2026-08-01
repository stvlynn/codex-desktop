// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 8/19
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
const Apex: any = undefined;
const Brook: any = undefined;
const Cliff: any = undefined;
const Dusk: any = undefined;
const Quartz: any = undefined;
const Quest: any = undefined;
const Ridge: any = undefined;
const Slate: any = undefined;
const Storm: any = undefined;
const Tide: any = undefined;
const Wave: any = undefined;
const hill: any = undefined;
const violet: any = undefined;

function Alpha2({
  snapshot,
  reviewTools,
  annotationMode,
  drawingMode,
  drawingCommitToken = 0,
  runtime,
  hostRef,
  canvasRef,
  overlayCanvasRef,
  selectionSummary,
  colOffsets,
  rowOffsets,
  camera,
  annotationRangeHighlightColor,
  mergedCells,
  annotationsEnabled = true,
  drawingAnnotationsEnabled = true,
}) {
  let nest12 =
      annotationsEnabled &&
      reviewTools?.annotation != null &&
      reviewTools.annotation.enabled !== false,
    oak12 =
      drawingAnnotationsEnabled &&
      reviewTools?.drawing != null &&
      reviewTools.drawing.enabled !== false,
    [petal12, quiet12] = bravo2.useState(null),
    rain12 = bravo2.useRef(petal12);
  rain12.current = petal12;
  let seed12 = bravo2.useRef(null),
    trail12 = bravo2.useRef(false),
    urn12 = bravo2.useRef(null),
    vine12 = bravo2.useRef(null),
    [wind12, yarrow12] = bravo2.useState(0),
    [azure12, birch12] = bravo2.useState(null),
    canyon12 = bravo2.useRef(null);
  canyon12.current = azure12;
  let [dew12, alpha13] = bravo2.useState([]),
    bravo13 = bravo2.useRef([]);
  bravo13.current = dew12;
  let copper13 = bravo2.useRef(null),
    delta13 = bravo2.useRef(null),
    echo13 = bravo2.useRef(drawingCommitToken),
    [falcon13, gamma13] = bravo2.useState(null),
    harbor13 = bravo2.useCallback((flint13) => {
      gamma13((garnet13) => (garnet13 === flint13 ? null : garnet13));
      quiet12((hazel13) =>
        hazel13?.mode === "edit" && hazel13.annotationId === flint13
          ? null
          : hazel13,
      );
    }, []),
    indigo13 = bravo2.useCallback(() => {
      gamma13(null);
      quiet12(null);
    }, []),
    {
      annotations,
      addPendingAnnotation,
      updatePendingAnnotation,
      dismissAnnotation,
    } = popcornSurfaceStyle_B(reviewTools?.annotation?.handleRef, {
      onDismissAnnotation: (ivory13) => {
        harbor13(ivory13);
        reviewTools?.annotation?.onDismiss?.(ivory13);
      },
      onDismissAllAnnotations: indigo13,
    }),
    { drawings, addPendingDrawing } = popcornSurfaceStyle_st(
      reviewTools?.drawing?.handleRef,
    ),
    jade13 = bravo2.useMemo(
      () =>
        annotations.filter(
          (item) => item.target.sheetName === snapshot.activeSheetName,
        ),
      [annotations, snapshot.activeSheetName],
    ),
    kite13 = bravo2.useMemo(
      () =>
        drawings.filter(
          (item) => item.target.sheetName === snapshot.activeSheetName,
        ),
      [drawings, snapshot.activeSheetName],
    ),
    lemon13 = bravo2.useCallback((jasper13) => {
      birch12((kelp13) => {
        let lotus13 =
          typeof jasper13 == "function" ? jasper13(kelp13) : jasper13;
        return ((canyon12.current = lotus13), lotus13);
      });
    }, []),
    marble13 = bravo2.useCallback(() => {
      urn12.current?.();
      urn12.current = null;
    }, []),
    nickel13 = bravo2.useCallback(() => {
      try {
        hostRef.current?.focus({
          preventScroll: true,
        });
      } catch {}
    }, [hostRef]),
    onyx13 = bravo2.useCallback(() => {
      trail12.current = false;
      quiet12(null);
      nickel13();
    }, [nickel13]),
    pearl13 = bravo2.useCallback(() => {
      let mint13 = rain12.current;
      return mint13?.mode === "create" && mint13.body.trim().length > 0
        ? trail12.current
          ? (onyx13(), true)
          : ((trail12.current = true),
            popcornSurfaceStyle_rt(seed12.current),
            false)
        : (onyx13(), true);
    }, [onyx13]),
    quartz13 = bravo2.useCallback(() => {
      delta13.current?.();
      delta13.current = null;
    }, []),
    river13 = bravo2.useCallback(() => {
      copper13.current = null;
      bravo13.current = [];
      alpha13([]);
    }, []),
    slate13 = bravo2.useCallback(
      (nova13) => {
        let olive13 = Slate({
          camera: runtime.getCamera(),
          worldX: nova13.x,
          worldY: nova13.y,
          freezePanes: snapshot.freezePanes,
          columnWidths: snapshot.columnWidths,
          rowHeights: snapshot.rowHeights,
        });
        return {
          x: olive13.x,
          y: olive13.y,
        };
      },
      [
        runtime,
        snapshot.columnWidths,
        snapshot.freezePanes,
        snapshot.rowHeights,
      ],
    ),
    timber13 = bravo2.useCallback(
      (prism13) => {
        prism13 == null ||
          prism13.points.length === 0 ||
          !oak12 ||
          !drawingMode ||
          ((copper13.current = snapshot.activeSheetName),
          (bravo13.current = [...bravo13.current, prism13]),
          alpha13(bravo13.current));
      },
      [oak12, drawingMode, snapshot.activeSheetName],
    ),
    umbra13 = bravo2.useCallback(
      (quill13) => {
        if (quill13.length === 0) return;
        let reef13 = popcornSurfaceStyle_t(quill13),
          sage13 = popcornSurfaceStyle_t(
            quill13.map((item) => ({
              ...item,
              points: item.points.map(slate13),
            })),
          ),
          topaz13 = hostRef.current,
          ultra13 = canvasRef.current;
        if (!reef13 || !sage13 || !topaz13 || !ultra13) return;
        let vapor13 = quill13.reduce(
            (accumulator, current) =>
              Math.max(accumulator, current.strokeWidth),
            0,
          ),
          wheat13 = popcornSurfaceStyle_t({
            left: sage13.left - vapor13 / 2,
            top: sage13.top - vapor13 / 2,
            width: sage13.width + vapor13,
            height: sage13.height + vapor13,
          }),
          yarn13 = {
            width: topaz13.clientWidth,
            height: topaz13.clientHeight,
          },
          zephyr13 = popcornSurfaceStyle_ut(wheat13, yarn13),
          acorn13 = Wave({
            logicalBounds: reef13,
            colOffsets,
            rowOffsets,
            columnWidths: snapshot.columnWidths,
            rowHeights: snapshot.rowHeights,
          }),
          bloom13 = Apex({
            sheetName: snapshot.activeSheetName,
            logicalBounds: reef13,
            viewportBounds: zephyr13,
            rangeAddress: acorn13.rangeAddress,
            coveredCells: acorn13.coveredCells,
          }),
          coral13 = popcornSurfaceStyle_mt("drawing"),
          drift13 = Brook(bloom13);
        addPendingDrawing({
          drawingId: coral13,
          artifactKind: "workbook",
          label: drift13,
          target: bloom13,
          strokes: quill13,
        });
        let eagle13 = {
          x: zephyr13.left + zephyr13.width / 2,
          y: zephyr13.top + zephyr13.height / 2,
        };
        popcornSurfaceStyle_Ct({
          cropRect: zephyr13,
          viewportSize: yarn13,
          baseCanvas: ultra13,
          overlayCanvases: [overlayCanvasRef.current],
          strokes: quill13,
          projectPoint: slate13,
        })
          .then((value) => {
            let frost13 = {
                ...value,
                commentId: coral13,
              },
              glide13 = {
                drawingId: coral13,
                artifactKind: "workbook",
                label: drift13,
                target: bloom13,
                strokes: quill13,
                screenshot: frost13,
                browserCompatible: popcornSurfaceStyle_t({
                  drawingId: coral13,
                  screenshot: frost13,
                  markerViewportPoint: eagle13,
                  viewportSize: yarn13,
                }),
              };
            return reviewTools?.drawing?.onSubmit?.(glide13);
          })
          .catch((error) => {
            console.error(
              "Failed to capture workbook drawing screenshot",
              error,
            );
          });
      },
      [
        addPendingDrawing,
        canvasRef,
        colOffsets,
        oak12,
        drawingMode,
        bravo13,
        hostRef,
        overlayCanvasRef,
        slate13,
        reviewTools?.drawing,
        rowOffsets,
        snapshot.activeSheetName,
        snapshot.columnWidths,
        snapshot.rowHeights,
      ],
    ),
    violet13 = bravo2.useCallback(
      (event) => {
        nickel13();
        quartz13();
        let honey13 = event.currentTarget.getBoundingClientRect(),
          iris13 = (orbit13, pine13) => {
            let quest13 = Quartz({
              camera: runtime.getCamera(),
              screenX: orbit13 - honey13.left,
              screenY: pine13 - honey13.top,
              freezePanes: snapshot.freezePanes,
              columnWidths: snapshot.columnWidths,
              rowHeights: snapshot.rowHeights,
            });
            return {
              x: quest13.x,
              y: quest13.y,
            };
          },
          jewel13 = (ridge13, storm13) => {
            let tide13 = iris13(ridge13, storm13);
            lemon13((unity13) => {
              if (!unity13) return unity13;
              let vale13 = unity13.points[unity13.points.length - 1];
              return vale13 &&
                Math.hypot(tide13.x - vale13.x, tide13.y - vale13.y) < 0.5
                ? unity13
                : {
                    ...unity13,
                    points: [...unity13.points, tide13],
                  };
            });
          };
        lemon13({
          color: popcornSurfaceStyle_r,
          strokeWidth: 3,
          points: [iris13(event.clientX, event.clientY)],
        });
        let knoll13 = (_event) => {
            jewel13(_event.clientX, _event.clientY);
          },
          lunar13 = (wave13) => {
            let apex13 = canyon12.current;
            quartz13();
            lemon13(null);
            wave13 && timber13(apex13);
          },
          moss13 = () => {
            lunar13(true);
          },
          north13 = () => {
            lunar13(false);
          };
        window.addEventListener("mousemove", knoll13);
        window.addEventListener("mouseup", moss13, {
          once: true,
        });
        window.addEventListener("blur", north13, {
          once: true,
        });
        delta13.current = () => {
          window.removeEventListener("mousemove", knoll13);
          window.removeEventListener("mouseup", moss13);
          window.removeEventListener("blur", north13);
        };
      },
      [
        quartz13,
        timber13,
        nickel13,
        runtime,
        snapshot.columnWidths,
        snapshot.freezePanes,
        snapshot.rowHeights,
        lemon13,
      ],
    ),
    _e = bravo2.useCallback(() => {
      let brook13 = vine12.current;
      if (!nest12 || !annotationMode || !brook13) {
        vine12.current = null;
        return;
      }
      if (snapshot.isDraggingSelection) {
        window.requestAnimationFrame(() => {
          yarrow12((elm13) => elm13 + 1);
        });
        return;
      }
      vine12.current = null;
      let cliff13 =
          brook13.kind === "range"
            ? (brook13.selectionSummary ?? selectionSummary)
            : selectionSummary,
        dusk13 =
          brook13.kind === "floating"
            ? Ridge({
                sheetName: snapshot.activeSheetName,
                selectedFloatingElement: brook13.selectedFloatingElement,
                anchorPoint: brook13.anchorPoint,
              })
            : Quest({
                sheetName: snapshot.activeSheetName,
                selectionSummary: cliff13,
                anchorPoint: brook13.anchorPoint,
              });
      dusk13 &&
        (reviewTools?.annotation?.onStart?.("annotation_mode_pointer", {
          annotationMode,
        }),
        (trail12.current = false),
        quiet12({
          mode: "create",
          target: dusk13,
          body: "",
        }));
    }, [
      nest12,
      annotationMode,
      selectionSummary,
      snapshot.activeSheetName,
      snapshot.isDraggingSelection,
      reviewTools?.annotation,
    ]),
    willow13 = bravo2.useCallback(
      (fern13) => {
        if (!nest12 || !annotationMode) return;
        marble13();
        vine12.current = fern13;
        let grove13 = (juniper13) => {
            if ((marble13(), !juniper13)) {
              vine12.current = null;
              return;
            }
            if (
              fern13.kind === "range" &&
              fern13.draftClickAction != null &&
              fern13.draftClickAction !== "replace" &&
              fern13.shouldOpenDraftOnRelease?.() === false
            ) {
              vine12.current = null;
              fern13.draftClickAction === "keep" &&
              fern13.wasDraftLightDismissArmed !== true
                ? (quiet12((lagoon13) => {
                    if (lagoon13?.mode !== "create" || fern13.draftBody == null)
                      return lagoon13;
                    let meadow13 = {
                      ...lagoon13,
                      body: fern13.draftBody,
                    };
                    return ((rain12.current = meadow13), meadow13);
                  }),
                  (trail12.current = true),
                  popcornSurfaceStyle_rt(seed12.current))
                : pearl13();
              return;
            }
            if (fern13.kind === "range") {
              let nest13 = fern13.getSelectionSummary?.();
              nest13 != null &&
                (vine12.current = {
                  kind: "range",
                  anchorPoint: fern13.anchorPoint,
                  selectionSummary: nest13,
                  draftClickAction: fern13.draftClickAction,
                  draftBody: fern13.draftBody,
                  wasDraftLightDismissArmed: fern13.wasDraftLightDismissArmed,
                  shouldOpenDraftOnRelease: fern13.shouldOpenDraftOnRelease,
                });
            }
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                yarrow12((oak13) => oak13 + 1);
              });
            });
          },
          hill13 = () => {
            grove13(true);
          },
          isle13 = () => {
            grove13(false);
          };
        window.addEventListener("mouseup", hill13, {
          once: true,
        });
        window.addEventListener("blur", isle13, {
          once: true,
        });
        urn12.current = () => {
          window.removeEventListener("mouseup", hill13);
          window.removeEventListener("blur", isle13);
        };
      },
      [nest12, annotationMode, marble13, pearl13],
    ),
    xenon13 = bravo2.useCallback(
      (petal13, quiet13) => {
        reviewTools?.annotation?.onStart?.(quiet13, {
          annotationMode,
        });
        trail12.current = false;
        quiet12({
          mode: "create",
          target: petal13,
          body: "",
        });
      },
      [annotationMode, reviewTools?.annotation],
    ),
    be = bravo2.useCallback(
      (event) => {
        trail12.current = false;
        gamma13(event.annotationId);
        quiet12({
          mode: "edit",
          annotationId: event.annotationId,
          target: event.target,
          body: event.body,
        });
      },
      [annotations],
    ),
    yellow13 = bravo2.useCallback(
      (rain13 = "saved", seed13 = "button") => {
        if (!petal12?.target) return;
        let trail13 = petal12.body.trim();
        if (trail13.length === 0) return;
        if (petal12.mode === "edit") {
          updatePendingAnnotation(petal12.annotationId, {
            body: trail13,
          });
          reviewTools?.annotation?.onUpdate?.({
            annotationId: petal12.annotationId,
            artifactKind: "workbook",
            label: Storm(petal12.target),
            body: trail13,
            target: petal12.target,
          });
          onyx13();
          return;
        }
        let urn13 = {
          annotationId: popcornSurfaceStyle_mt("annotation"),
          artifactKind: "workbook",
          label: Storm(petal12.target),
          body: trail13,
          target: petal12.target,
        };
        addPendingAnnotation(urn13);
        rain13 === "direct"
          ? (
              reviewTools?.annotation?.onDirectSubmit ??
              reviewTools?.annotation?.onSubmit
            )?.(urn13)
          : reviewTools?.annotation?.onSubmit?.(urn13);
        reviewTools?.annotation?.onSubmitted?.(urn13, rain13, seed13, {
          annotationMode,
        });
        onyx13();
      },
      [
        addPendingAnnotation,
        petal12,
        annotationMode,
        onyx13,
        reviewTools?.annotation,
        updatePendingAnnotation,
      ],
    ),
    zinc13 = bravo2.useCallback(() => {
      petal12?.mode === "edit" &&
        (dismissAnnotation(petal12.annotationId),
        gamma13((vine13) => (vine13 === petal12.annotationId ? null : vine13)),
        onyx13());
    }, [petal12, onyx13, dismissAnnotation]);
  bravo2.useEffect(() => {
    (!nest12 || !annotationMode) && ((vine12.current = null), marble13());
    nest12 || (petal12?.mode !== "edit" && quiet12(null));
  }, [nest12, petal12?.mode, annotationMode, marble13]);
  bravo2.useEffect(() => {
    if (drawingCommitToken === echo13.current) return;
    echo13.current = drawingCommitToken;
    let wind13 = bravo13.current;
    if (wind13.length === 0) {
      river13();
      return;
    }
    umbra13(wind13);
    river13();
  }, [river13, drawingCommitToken, umbra13]);
  bravo2.useEffect(() => {
    (oak12 && drawingMode) ||
      (quartz13(), lemon13(null), bravo13.current.length > 0 && river13());
  }, [quartz13, river13, oak12, drawingMode, lemon13]);
  bravo2.useEffect(() => {
    copper13.current == null ||
      copper13.current === snapshot.activeSheetName ||
      river13();
  }, [river13, snapshot.activeSheetName]);
  bravo2.useEffect(() => {
    if (!petal12) return;
    if (petal12.target.sheetName !== snapshot.activeSheetName) {
      gamma13(null);
      quiet12(null);
      return;
    }
    let yarrow13 = (event) => {
      let azure13 = event.target;
      azure13 instanceof Node &&
        (seed12.current?.contains(azure13) ||
          (azure13 instanceof HTMLElement &&
            azure13.closest("[data-popcorn-annotation-marker='true']")) ||
          hostRef.current?.contains(azure13) ||
          pearl13());
    };
    return (
      document.addEventListener("mousedown", yarrow13, true),
      () => {
        document.removeEventListener("mousedown", yarrow13, true);
      }
    );
  }, [petal12, hostRef, pearl13, snapshot.activeSheetName]);
  bravo2.useEffect(() => {
    wind12 <= 0 || _e();
  }, [wind12, _e]);
  bravo2.useEffect(() => {
    let birch13 = hostRef.current,
      canyon13 = canvasRef.current;
    if (!birch13 || !canyon13) return;
    let dew13 =
      oak12 && drawingMode
        ? "crosshair"
        : nest12 && annotationMode && !petal12
          ? popcornSurfaceStyle_t
          : "";
    return (
      (birch13.style.cursor = dew13),
      (canyon13.style.cursor = dew13),
      () => {
        birch13.style.cursor === dew13 && (birch13.style.cursor = "");
        canyon13.style.cursor === dew13 && (canyon13.style.cursor = "");
      }
    );
  }, [petal12, nest12, annotationMode, canvasRef, oak12, drawingMode, hostRef]);
  bravo2.useEffect(
    () => () => {
      marble13();
      quartz13();
    },
    [marble13, quartz13],
  );
  let amber13 = bravo2.useMemo(
      () =>
        petal12?.target
          ? Cliff({
              target: petal12.target,
              camera,
              freezePanes: snapshot.freezePanes,
              columnWidths: snapshot.columnWidths,
              rowHeights: snapshot.rowHeights,
              sheet: {
                mergedCells,
              },
            })
          : null,
      [
        petal12?.target,
        camera,
        mergedCells,
        snapshot.columnWidths,
        snapshot.freezePanes,
        snapshot.rowHeights,
      ],
    ),
    basalt13 = bravo2.useMemo(
      () =>
        petal12?.target
          ? Dusk({
              target: petal12.target,
              camera,
              freezePanes: snapshot.freezePanes,
              columnWidths: snapshot.columnWidths,
              rowHeights: snapshot.rowHeights,
              sheet: {
                mergedCells,
              },
            })
          : null,
      [
        petal12?.target,
        camera,
        mergedCells,
        snapshot.columnWidths,
        snapshot.freezePanes,
        snapshot.rowHeights,
      ],
    ),
    cedar13 = bravo2.useMemo(
      () =>
        jade13
          .map((item) => ({
            annotation: item,
            bounds: Cliff({
              target: item.target,
              camera,
              freezePanes: snapshot.freezePanes,
              columnWidths: snapshot.columnWidths,
              rowHeights: snapshot.rowHeights,
              sheet: {
                mergedCells,
              },
            }),
            anchorBounds: Dusk({
              target: item.target,
              camera,
              freezePanes: snapshot.freezePanes,
              columnWidths: snapshot.columnWidths,
              rowHeights: snapshot.rowHeights,
              sheet: {
                mergedCells,
              },
            }),
          }))
          .filter((item) => item.bounds != null && item.anchorBounds != null),
      [
        basalt13,
        amber13,
        camera,
        mergedCells,
        jade13,
        snapshot.columnWidths,
        snapshot.freezePanes,
        snapshot.rowHeights,
      ],
    ),
    daisy13 = bravo2.useMemo(
      () =>
        falcon13 == null || petal12?.mode === "edit"
          ? null
          : (cedar13.find(
              ({ annotation }) => annotation.annotationId === falcon13,
            ) ?? null),
      [petal12?.mode, falcon13, cedar13],
    ),
    ember13 = bravo2.useMemo(
      () =>
        !nest12 || !annotationMode || petal12?.mode !== "create"
          ? null
          : popcornSurfaceStyle_t(annotations, petal12.target),
      [petal12, nest12, annotationMode, annotations],
    );
  return {
    annotationEnabled: nest12,
    drawingEnabled: oak12,
    annotationEditorSession: petal12,
    annotationEditorSessionRef: rain12,
    annotationEditorLightDismissArmedRef: trail12,
    annotationEditorRef: seed12,
    annotationEditorAnchorBounds: basalt13,
    annotationHighlightBounds: amber13,
    annotationRangeHighlights: bravo2.useMemo(() => {
      let alpha14 = petal12?.mode === "edit" ? petal12.annotationId : null,
        bravo14 = [];
      for (let copper14 of jade13)
        copper14.annotationId === alpha14 ||
          copper14.target.type !== "workbook-range" ||
          bravo14.push(
            Tide({
              rect: copper14.target.rect,
              color: annotationRangeHighlightColor,
            }),
          );
      return (
        petal12?.target.type === "workbook-range" &&
          !snapshot.isDraggingSelection &&
          bravo14.push(
            Tide({
              rect: petal12.target.rect,
              color: annotationRangeHighlightColor,
            }),
          ),
        bravo14
      );
    }, [
      petal12,
      annotationRangeHighlightColor,
      snapshot.isDraggingSelection,
      jade13,
    ]),
    pendingAnnotationMarkers: cedar13,
    hoveredAnnotationMarker: daisy13,
    draftAnnotationMarkerNumber: ember13,
    activeDrawingStroke: azure12,
    activeDrawingStrokeRef: canyon12,
    draftDrawingStrokes: dew12,
    visiblePendingDrawings: kite13,
    closeAnnotationEditor: onyx13,
    requestAnnotationEditorDismiss: pearl13,
    deleteAnnotationEditor: zinc13,
    submitAnnotationEditor: yellow13,
    beginDrawingSession: violet13,
    cleanupDrawingSession: quartz13,
    queueAnnotationDraftOpen: willow13,
    openCreateAnnotationEditor: xenon13,
    projectWorkbookDrawingPointToViewport: slate13,
    handleAnnotationEditorChange: bravo2.useCallback((delta14) => {
      trail12.current = false;
      let echo14 = rain12.current;
      if (!echo14) return;
      let falcon14 = {
        ...echo14,
        body: delta14,
      };
      rain12.current = falcon14;
      quiet12(falcon14);
    }, []),
    getAnnotationMarkerMouseEnterHandler: bravo2.useCallback(
      (gamma14) => () => {
        gamma13(gamma14);
      },
      [],
    ),
    getAnnotationMarkerMouseLeaveHandler: bravo2.useCallback(
      (harbor14) => () => {
        gamma13((indigo14) => (indigo14 === harbor14 ? null : indigo14));
      },
      [],
    ),
    getAnnotationMarkerFocusHandler: bravo2.useCallback(
      (jade14) => () => {
        gamma13(jade14);
      },
      [],
    ),
    getAnnotationMarkerBlurHandler: bravo2.useCallback(
      (kite14) => () => {
        gamma13((lemon14) => (lemon14 === kite14 ? null : lemon14));
      },
      [],
    ),
    getAnnotationMarkerClickHandler: bravo2.useCallback(
      (marble14) => () => {
        be(marble14);
      },
      [be, annotations],
    ),
  };
}
var bravo2,
  copper2 = esmInit(() => {
    bravo2 = commonJsInit(react());
    violet();
    popcornSurfaceStyle_it();
    popcornSurfaceStyle_pt();
    hill();
  });
function Delta2(nickel14) {
  return nickel14.snapshot.editorMode === "grid" && !nickel14.inputFocused;
}
function $a(onyx14) {
  return onyx14.selectedFloatingElement?.kind === "xlsx-chart";
}
function Echo2(pearl14) {
  if (typeof document > "u" || !pearl14) return false;
  let quartz14 = document.activeElement;
  return quartz14 != null && pearl14.contains(quartz14);
}
function to(river14) {
  return river14 instanceof Element
    ? river14.closest(
        "input, textarea, [role='textbox'], [contenteditable]:not([contenteditable='false'])",
      ) != null
    : false;
}
function no(event) {
  return (
    Delta2({
      snapshot: event.snapshot,
      inputFocused: event.inputFocused,
    }) &&
    Echo2(event.container) &&
    !to(event.target)
  );
}
function Falcon2(event) {
  return event.clipboardData;
}
