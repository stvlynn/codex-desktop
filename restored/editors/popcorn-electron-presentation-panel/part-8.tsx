// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 8/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

// Wave5d soft stubs.
const $n: any = undefined;
const _t: any = undefined;
const canyon: any = undefined;
const crag: any = undefined;
const dome: any = undefined;
const dusk: any = undefined;
const glen: any = undefined;
const grain: any = undefined;
const haven: any = undefined;
const inlet: any = undefined;
const maple: any = undefined;
const mire: any = undefined;
const nimbus: any = undefined;
const wisp: any = undefined;

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { react } from "../../boundaries/react-cjs-runtime";
import { workbookO, workbookS } from "../../boundaries/workbook-runtime/index";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureDndAxisLockModifiersInit,
  restrictToVerticalAxis,
} from "../../ui/dnd-axis-lock-modifiers";
import { dndAxisLockModifiers } from "../../ui/dnd-axis-lock-modifiers-bindable";
import { useDndSensors } from "../../ui/use-dnd-sensors";
import { joinStringsOrNull as JoinStringsOrNull } from "../../utils/join-strings-or-null";
import { stack, stackOffsetExpand } from "../../vendor/d3-shape-line-pie-stack";
import { ensureD3ShapeStackOffsetInit } from "../../workbook/ensure-d3-shape-stack-offset-init";
import {
  popcornSurfaceStyle_B as PopcornSurfaceStyle_B,
  popcornSurfaceStyle_Ct as PopcornSurfaceStyle_Ct,
  popcornSurfaceStyle_dt,
  popcornSurfaceStyle_E,
  popcornSurfaceStyle_F,
  popcornSurfaceStyle_ft as PopcornSurfaceStyle_ft,
  popcornSurfaceStyle_G,
  popcornSurfaceStyle_H,
  popcornSurfaceStyle_I,
  popcornSurfaceStyle_it as PopcornSurfaceStyle_it,
  popcornSurfaceStyle_K as PopcornSurfaceStyle_K,
  popcornSurfaceStyle_L,
  popcornSurfaceStyle_lt,
  popcornSurfaceStyle_mt,
  popcornSurfaceStyle_N,
  popcornSurfaceStyle_O,
  popcornSurfaceStyle_P,
  popcornSurfaceStyle_r,
  popcornSurfaceStyle_R as PopcornSurfaceStyle_R,
  popcornSurfaceStyle_rt,
  popcornSurfaceStyle_st,
  popcornSurfaceStyle_t as PopcornSurfaceStyle_t,
  popcornSurfaceStyle_T,
  popcornSurfaceStyle_tt as PopcornSurfaceStyle_tt,
  popcornSurfaceStyle_Tt,
  popcornSurfaceStyle_U as PopcornSurfaceStyle_U,
  popcornSurfaceStyle_ut,
  popcornSurfaceStyle_V as PopcornSurfaceStyle_V,
  popcornSurfaceStyle_Y as PopcornSurfaceStyle_Y,
  popcornSurfaceStyle_Z as PopcornSurfaceStyle_Z,
} from "../popcorn-electron-surface-style";
import {
  ensurePopcornPageNumberNavigationInit,
  PopcornPageNumberNavigation,
} from "../popcorn-page-number-navigation";
import {
  RemoteTextEditSessionA,
  RemoteTextEditSessionC,
  RemoteTextEditSessionChrome,
  RemoteTextEditSessionI,
  RemoteTextEditSessionLowerB,
  RemoteTextEditSessionLowerG,
  RemoteTextEditSessionLowerH,
  RemoteTextEditSessionLowerR,
  RemoteTextEditSessionLowerV,
  RemoteTextEditSessionLowerW,
  RemoteTextEditSessionLowerX,
  RemoteTextEditSessionLowerY,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionUnderscore,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

function Vista({
  controller,
  runtime,
  snapshot,
  stageOverlays = [],
  panelControls = inlet,
  isEditing = true,
  theme = "web",
  viewportInsets = mire,
  annotationMode = false,
  onAnnotationModeChange,
  drawingMode = false,
  onDrawingModeChange,
  drawingCommitToken = 0,
  reviewTools,
  onHyperlinkClick,
  annotationsEnabled = true,
  drawingAnnotationsEnabled = true,
  commentThreadsEnabled = true,
  annotationPortalContainerElement = null,
}) {
  let grainSecond = dusk(controller),
    havenSecond = snapshot ?? grainSecond,
    inkSecond = glen.useRef(null),
    jadeiteSecond = glen.useRef(null),
    kernelSecond = glen.useRef(null),
    leafSecond = glen.useRef(null),
    mapleSecond = glen.useRef(null),
    nimbusSecond = glen.useRef(null),
    opalSecond = glen.useRef(null),
    plumeSecond = glen.useRef(null),
    quillowSecond = glen.useRef(null),
    rootSecond = glen.useRef(null),
    silkSecond = glen.useRef(false),
    thornSecond = glen.useRef(null),
    uplandSecond = glen.useRef(null),
    [vistaSecond, wispSecond] = glen.useState(0),
    [yonderSecond, zenithSecond] = glen.useState(false),
    anvilSecond =
      annotationsEnabled &&
      reviewTools?.annotation != null &&
      reviewTools.annotation.enabled !== false,
    beaconSecond =
      drawingAnnotationsEnabled &&
      reviewTools?.drawing != null &&
      reviewTools.drawing.enabled !== false,
    [cragSecond, domeSecond] = glen.useState(null),
    [eddySecond, fjordSecond] = glen.useState(null),
    glenSecond = glen.useRef(cragSecond);
  glenSecond.current = cragSecond;
  let hearthSecond = glen.useRef(null),
    inletSecond = glen.useRef(false),
    [jettySecond, _e] = glen.useState(false),
    knobSecond = glen.useRef(null),
    [ledgeSecond, mireSecond] = glen.useState(null),
    [nookSecond, oxbowSecond] = glen.useState(null),
    pondSecond = glen.useRef(null);
  pondSecond.current = nookSecond;
  let [quarrySecond, rapidsSecond] = glen.useState([]),
    spurSecond = glen.useRef([]);
  spurSecond.current = quarrySecond;
  let torSecond = glen.useRef(null),
    updraftSecond = glen.useRef(null),
    vergeSecond = glen.useRef(drawingCommitToken),
    weirSecond = glen.useCallback((idlerSecond) => {
      fjordSecond((jigSecond) =>
        jigSecond === idlerSecond ? null : jigSecond,
      );
      domeSecond((keeperSecond) =>
        keeperSecond?.mode === "edit" &&
        keeperSecond.annotationId === idlerSecond
          ? null
          : keeperSecond,
      );
    }, []),
    yardSecond = glen.useCallback(() => {
      fjordSecond(null);
      domeSecond(null);
    }, []),
    anchorSecond = glen.useCallback(
      (lugSecond) => {
        weirSecond(lugSecond);
        reviewTools?.annotation?.onDismiss?.(lugSecond);
      },
      [weirSecond, reviewTools?.annotation],
    ),
    boltSecond = glen.useCallback((mandrelSecond) => {
      oxbowSecond((nippleSecond) => {
        let orificeSecond =
          typeof mandrelSecond == "function"
            ? mandrelSecond(nippleSecond)
            : mandrelSecond;
        return ((pondSecond.current = orificeSecond), orificeSecond);
      });
    }, []),
    cogSecond = glen.useSyncExternalStore(
      (pinSecond) => runtime.subscribeToCameraChanges(pinSecond),
      () => runtime.getCamera(),
      () => runtime.getCamera(),
    ),
    discSecond = glen.useSyncExternalStore(
      (raceSecond) => runtime.subscribeToLayoutChanges(raceSecond),
      () => runtime.getLayoutSnapshot(),
      () => runtime.getLayoutSnapshot(),
    ),
    edgeSecond = discSecond.viewportInsets,
    forgeSecond =
      crag(
        discSecond.width,
        discSecond.height,
        cogSecond,
        havenSecond.selectedSlideFrame,
        edgeSecond,
      ) ?? havenSecond.slideRect,
    gearSecond =
      forgeSecond === havenSecond.slideRect
        ? havenSecond
        : {
            ...havenSecond,
            slideRect: forgeSecond,
          },
    hingeSecond =
      havenSecond.slideIds[havenSecond.selectedSlideIdx] ??
      `slide-${havenSecond.selectedSlideIdx}`,
    ironSecond =
      havenSecond.slideLabels[havenSecond.selectedSlideIdx] ??
      `Slide ${havenSecond.selectedSlideIdx + 1}`,
    jointSecond = glen.useMemo(() => dome(gearSecond), [gearSecond]),
    keystoneSecond = glen.useMemo(
      () =>
        $n({
          snapshot: havenSecond,
        }),
      [havenSecond],
    ),
    latchSecond = glen.useMemo(() => {
      let sleeveSecond = gearSecond.slideRect;
      return sleeveSecond
        ? {
            left: sleeveSecond.left,
            top: sleeveSecond.top,
            width: sleeveSecond.width,
            height: sleeveSecond.height,
          }
        : null;
    }, [gearSecond.slideRect]),
    motorSecond = glen.useMemo(
      () =>
        cragSecond?.target
          ? grain(cragSecond.target, gearSecond.slideRect)
          : null,
      [cragSecond?.target, gearSecond.slideRect],
    ),
    nutSecond = glen.useMemo(
      () =>
        cragSecond?.target
          ? haven(cragSecond.target, gearSecond.slideRect)
          : null,
      [cragSecond?.target, gearSecond.slideRect],
    ),
    pistonSecond = motorSecond ?? nutSecond,
    rivetSecond = glen.useMemo(
      () =>
        !anvilSecond || !ledgeSecond
          ? null
          : maple(ledgeSecond.start, ledgeSecond.current),
      [anvilSecond, ledgeSecond],
    ),
    screwSecond = glen.useMemo(() => {
      if (!rivetSecond || !ledgeSecond) return null;
      let trunnionSecond = canyon({
        snapshot: havenSecond,
        frame: rivetSecond,
        anchorPoint: ledgeSecond.current,
      });
      return trunnionSecond
        ? grain(trunnionSecond, gearSecond.slideRect)
        : null;
    }, [ledgeSecond, rivetSecond, havenSecond, gearSecond.slideRect]),
    at = glen.useMemo(
      () =>
        rivetSecond
          ? nimbus(
              havenSecond.selectedSlideElementTargets,
              rivetSecond,
            ).flatMap((item) => {
              let bossSecond = havenSecond.selectedSlideElementTargets.find(
                (_item) => _item.id === item,
              );
              return bossSecond
                ? [
                    {
                      elementId: item,
                      frame: {
                        left: bossSecond.frame.left,
                        top: bossSecond.frame.top,
                        width: bossSecond.frame.width,
                        height: bossSecond.frame.height,
                        rotation: bossSecond.frame.rotation,
                      },
                    },
                  ]
                : [];
            })
          : [],
      [rivetSecond, havenSecond.selectedSlideElementTargets],
    ),
    torqueSecond = glen.useMemo(
      () =>
        cragSecond?.target.type === "presentation-region"
          ? cragSecond.target.containedElements
          : [],
      [cragSecond],
    ),
    valveSecond = glen.useMemo(
      () =>
        jettySecond && havenSecond.hoveredElementId
          ? (havenSecond.selectedSlideElementTargets.find(
              (item) => item.id === havenSecond.hoveredElementId,
            ) ?? null)
          : null,
      [
        jettySecond,
        havenSecond.hoveredElementId,
        havenSecond.selectedSlideElementTargets,
      ],
    ),
    axleSecond = glen.useMemo(
      () =>
        screwSecond ||
        motorSecond ||
        (!anvilSecond || !annotationMode
          ? null
          : valveSecond
            ? grain(
                {
                  type: "presentation-element-selection",
                  slideId: hingeSecond,
                  slideIndex: havenSecond.selectedSlideIdx,
                  slideLabel: ironSecond,
                  elementIds: [valveSecond.id],
                  primaryElementId: valveSecond.id,
                  frame: valveSecond.frame,
                },
                gearSecond.slideRect,
              )
            : null),
      [
        motorSecond,
        anvilSecond,
        valveSecond,
        annotationMode,
        screwSecond,
        hingeSecond,
        ironSecond,
        havenSecond.selectedSlideIdx,
        gearSecond.slideRect,
      ],
    ),
    {
      annotations,
      addPendingAnnotation,
      updatePendingAnnotation,
      dismissAnnotation,
    } = PopcornSurfaceStyle_B(reviewTools?.annotation?.handleRef, {
      onDismissAnnotation: anchorSecond,
      onDismissAllAnnotations: yardSecond,
    }),
    bracketSecond = glen.useMemo(
      () => annotations.filter((item) => item.target.slideId === hingeSecond),
      [hingeSecond, annotations],
    ),
    _t = glen.useMemo(
      () =>
        bracketSecond.map((item) => ({
          annotation: item,
          bounds: grain(item.target, gearSecond.slideRect),
        })),
      [bracketSecond, gearSecond.slideRect],
    ),
    clampSecond = glen.useMemo(
      () =>
        eddySecond == null || cragSecond?.mode === "edit"
          ? null
          : (_t.find(
              ({ annotation }) => annotation.annotationId === eddySecond,
            ) ?? null),
      [cragSecond?.mode, eddySecond, _t],
    ),
    drillSecond = glen.useMemo(
      () => (screwSecond ? at : torqueSecond),
      [torqueSecond, at, screwSecond],
    ),
    { drawings, addPendingDrawing } = PopcornSurfaceStyle_R(
      reviewTools?.drawing?.handleRef,
    ),
    engineSecond = glen.useMemo(
      () => drawings.filter((item) => item.target.slideId === hingeSecond),
      [hingeSecond, drawings],
    ),
    frameSecond = glen.useMemo(
      () =>
        new RemoteTextEditSessionZoomControl(
          {
            onPointerDown: (camSecond, detentSecond) => {
              controller.textPointerDown(camSecond, detentSecond);
            },
            onPointerMove: (eccentricSecond) => {
              controller.textPointerMove(eccentricSecond);
            },
            onPointerUp: () => {
              controller.textPointerUp();
            },
            onSelectWordAtPoint: (followerSecond) => {
              controller.textSelectWordAtPoint(followerSecond);
            },
            onSelectParagraphAtPoint: (guideSecond) => {
              controller.textSelectParagraphAtPoint(guideSecond);
            },
            onActivateBlockEnd: (helixSecond) => {
              controller.textActivateBlockEnd(helixSecond);
            },
            onClear: () => {
              controller.textClear();
            },
            onKeyDown: (impellerSecond) => {
              controller.textHandleKeyDown(impellerSecond);
            },
            onBeforeInput: (journalSecond) => {
              controller.textHandleBeforeInput(journalSecond);
            },
            onInput: (kingpinSecond) => {
              controller.textHandleInput(kingpinSecond);
            },
            onCompositionEnd: (landSecond) => {
              controller.textHandleCompositionEnd(landSecond);
            },
          },
          {
            onChange: () => {
              wispSecond((meshSecond) => meshSecond + 1);
            },
            onUnhandledKeyDown: (event) => {
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
      [controller],
    );
  glen.useEffect(
    () => (
      runtime.setOnCameraSettled(({ zoom }) => {
        controller.setZoom(zoom);
      }),
      () => {
        runtime.setOnCameraSettled(null);
      }
    ),
    [controller, runtime],
  );
  glen.useEffect(() => {
    runtime.attachHost(jadeiteSecond.current);
    let neckSecond =
      jadeiteSecond.current && kernelSecond.current
        ? controller.attachViewport({
            host: jadeiteSecond.current,
            canvas: kernelSecond.current,
            overlayCanvas: leafSecond.current,
          })
        : undefined;
    return (
      frameSecond?.attachContainer(jadeiteSecond.current),
      runtime.start(),
      () => {
        neckSecond?.();
        runtime.dispose();
        frameSecond?.dispose();
      }
    );
  }, [controller, runtime, frameSecond]);
  glen.useEffect(
    () => () => {
      thornSecond.current != null &&
        window.cancelAnimationFrame(thornSecond.current);
      controller.clearLocalAwarenessCursor();
    },
    [controller],
  );
  glen.useEffect(() => {
    runtime.setViewState({
      selectedSlideIdx: havenSecond.selectedSlideIdx,
      selectedSlideFrame: havenSecond.selectedSlideFrame,
      zoom: havenSecond.zoom,
      camera: controller.getViewportCamera(),
    });
  }, [
    controller,
    runtime,
    havenSecond.selectedSlideIdx,
    havenSecond.selectedSlideFrame,
    havenSecond.zoom,
  ]);
  glen.useEffect(() => {
    runtime.setViewportInsets(viewportInsets);
    typeof controller.setViewportInsets == "function" &&
      controller.setViewportInsets(viewportInsets);
  }, [controller, runtime, viewportInsets]);
  glen.useEffect(() => {
    jointSecond || zenithSecond(false);
  }, [jointSecond]);
  glen.useEffect(() => {
    if (havenSecond.textEditState?.activeBlockId) {
      plumeSecond.current = null;
      return;
    }
    (havenSecond.selectedElementIds.length !== 1 ||
      !havenSecond.primarySelectedElementId ||
      !havenSecond.textLayoutBlocks.some(
        (item) => item.id === havenSecond.primarySelectedElementId,
      )) &&
      (plumeSecond.current = null);
  }, [
    havenSecond.primarySelectedElementId,
    havenSecond.selectedElementIds,
    havenSecond.textEditState,
    havenSecond.textLayoutBlocks,
  ]);
  glen.useEffect(() => {
    havenSecond.selectedSlideFrame &&
      runtime.hasInitializedCamera() &&
      controller.setViewportCamera(cogSecond);
  }, [cogSecond, controller, runtime, havenSecond.selectedSlideFrame]);
  glen.useEffect(() => {
    let padSecond = jadeiteSecond.current;
    !havenSecond.selectedSlideFrame ||
      !padSecond ||
      frameSecond.updateState({
        state: isEditing ? havenSecond.textEditState : null,
        blocks: havenSecond.textLayoutBlocks,
      });
  }, [
    isEditing,
    cogSecond,
    havenSecond.selectedSlideFrame,
    havenSecond.textEditState,
    havenSecond.textLayoutBlocks,
    frameSecond,
  ]);
  glen.useEffect(() => {
    typeof controller.setEditingEnabled == "function" &&
      controller.setEditingEnabled(isEditing);
  }, [controller, isEditing]);
  glen.useEffect(() => {
    let quillshaftSecond = inkSecond.current;
    if (!quillshaftSecond) return;
    let rollerSecond = null,
      spindleSecond = [],
      thrustSecond = () => {
        rollerSecond ??= window.requestAnimationFrame(() => {
          rollerSecond = null;
          controller.setStageBackgroundColor(wisp(quillshaftSecond, theme));
        });
      };
    if ((thrustSecond(), typeof MutationObserver < "u")) {
      let yokeSecond = (baffleSecond) => {
        if (!baffleSecond) return;
        let capstanSecond = new MutationObserver(() => {
          thrustSecond();
        });
        capstanSecond.observe(baffleSecond, {
          attributes: true,
          attributeFilter: ["class", "data-theme", "style"],
        });
        spindleSecond.push(capstanSecond);
      };
      yokeSecond(quillshaftSecond);
      yokeSecond(
        quillshaftSecond.closest("[data-codex-window-type='electron']"),
      );
      yokeSecond(document.documentElement);
      yokeSecond(document.body);
    }
    return () => {
      rollerSecond != null && window.cancelAnimationFrame(rollerSecond);
      spindleSecond.forEach((item) => item.disconnect());
    };
  }, [controller, theme]);
  glen.useEffect(() => {
    isEditing ||
      (frameSecond.clear(),
      (plumeSecond.current = null),
      (opalSecond.current = null),
      (quillowSecond.current = null),
      (rootSecond.current = null),
      (silkSecond.current = false));
  }, [isEditing, frameSecond]);
  return undefined as any;
}
