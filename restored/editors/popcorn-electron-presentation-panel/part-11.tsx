// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js

// Wave5d soft stubs (qg unbound).
const annotationMode: any = undefined;
const annotationPortalContainerElement: any = undefined;
const annotations: any = undefined;
const anvilSecond: any = undefined;
const arborSecond: any = undefined;
const axleSecond: any = undefined;
const beaconSecond: any = undefined;
const bushingSecond: any = undefined;
const clampSecond: any = undefined;
const collarSecond: any = undefined;
const commentThreadsEnabled: any = undefined;
const controller: any = undefined;
const cragSecond: any = undefined;
const domeSecond: any = undefined;
const dowelSecond: any = undefined;
const drawingMode: any = undefined;
const drillSecond: any = undefined;
const engineSecond: any = undefined;
const fjordSecond: any = undefined;
const gearSecond: any = undefined;
const gibSecond: any = undefined;
const havenSecond: any = undefined;
const hearthSecond: any = undefined;
const hingeSecond: any = undefined;
const hubSecond: any = undefined;
const inkSecond: any = undefined;
const inletSecond: any = undefined;
const ironSecond: any = undefined;
const isEditing: any = undefined;
const jacketSecond: any = undefined;
const jadeiteSecond: any = undefined;
const jointSecond: any = undefined;
const kernelSecond: any = undefined;
const keystoneSecond: any = undefined;
const latchSecond: any = undefined;
const leafSecond: any = undefined;
const leverSecond: any = undefined;
const mapleSecond: any = undefined;
const nimbusSecond: any = undefined;
const nookSecond: any = undefined;
const nutSecond: any = undefined;
const panelControls: any = undefined;
const pistonSecond: any = undefined;
const platenSecond: any = undefined;
const quarrySecond: any = undefined;
const ratchetSecond: any = undefined;
const reviewTools: any = undefined;
const screwSecond: any = undefined;
const shimSecond: any = undefined;
const stageOverlays: any = undefined;
const tappetSecond: any = undefined;
const theme: any = undefined;
const yonderSecond: any = undefined;
const zenithSecond: any = undefined;
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 11/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

// Wave5d soft stubs.
const IntlProvider: any = undefined;
const Seed: any = undefined;
const _t: any = undefined;
const grain: any = undefined;
const iris: any = undefined;
const jetty: any = undefined;
const on: any = undefined;

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { react } from "../../boundaries/react-cjs-runtime";
import { workbookO, workbookS } from "../../workbook/editor-compat";
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

function Vista__splitRest3(__splitParams: any) {
  return (
    <div
      ref={inkSecond}
      className="relative flex h-full min-h-0 flex-col bg-token-bg-primary"
      style={theme === "codex" ? popcornSurfaceStyle_N : undefined}
    >
      <div
        ref={jadeiteSecond}
        data-testid="popcorn-presentation-stage"
        tabIndex={0}
        onKeyDown={gibSecond}
        className="relative min-h-0 flex-1 touch-none overflow-hidden outline-none"
      >
        <canvas
          ref={kernelSecond}
          data-testid="popcorn-presentation-canvas"
          className={IntlProvider("absolute inset-0 h-full w-full select-none")}
        />
        <canvas
          ref={leafSecond}
          data-testid="popcorn-presentation-worker-overlay"
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
        />
        <canvas
          ref={mapleSecond}
          data-testid="popcorn-presentation-overlay"
          onPointerDown={arborSecond}
          onPointerMove={bushingSecond}
          onPointerLeave={(event) => {
            nimbusSecond.current ??
              (tappetSecond(null),
              controller.setHoveredElementId(null),
              (event.currentTarget.style.cursor =
                beaconSecond && drawingMode ? "crosshair" : ""));
          }}
          onPointerUp={(valeThird) => collarSecond(valeThird, true)}
          onPointerCancel={(waveThird) => collarSecond(waveThird, false)}
          onDoubleClick={dowelSecond}
          className="absolute inset-0 h-full w-full touch-none"
        />
        {commentThreadsEnabled ? (
          <Seed
            {...{
              threads: havenSecond.commentThreads ?? [],
              slideRect: gearSecond.slideRect,
              isEditing,
              onReply: (apexThird, brookThird) => {
                controller.replyToCommentThread(apexThird, brookThird);
              },
              onResolve: (cliffThird) => {
                controller.resolveCommentThread(cliffThird);
              },
              onReopen: (duskThird) => {
                controller.reopenCommentThread(duskThird);
              },
              onDeleteThread: (elmThird) => {
                controller.deleteCommentThread(elmThird);
              },
              onToggleReaction: (fernThird, groveThird, hillThird) => {
                controller.toggleCommentReaction(
                  fernThird,
                  groveThird,
                  hillThird,
                );
              },
              onEditComment: (isleThird, juniperThird, lagoonThird) => {
                controller.editThreadComment(
                  isleThird,
                  juniperThird,
                  lagoonThird,
                );
              },
              onDeleteComment: (meadowThird, nestThird) => {
                controller.deleteThreadComment(meadowThird, nestThird);
              },
            }}
          />
        ) : null}
        {engineSecond.length > 0 ? (
          <PopcornSurfaceStyle_Z
            {...{
              testId: "popcorn-presentation-drawing-overlay",
              strokes: engineSecond.flatMap((item) => item.strokes),
              projectPoint: leverSecond,
              clipBounds: latchSecond,
            }}
          />
        ) : null}
        {quarrySecond.length > 0 ? (
          <PopcornSurfaceStyle_Z
            {...{
              testId: "popcorn-presentation-drawing-draft-overlay",
              strokes: quarrySecond,
              projectPoint: leverSecond,
              clipBounds: latchSecond,
            }}
          />
        ) : null}
        {nookSecond ? (
          <PopcornSurfaceStyle_Z
            {...{
              testId: "popcorn-presentation-drawing-active-overlay",
              strokes: [nookSecond],
              projectPoint: leverSecond,
              clipBounds: latchSecond,
            }}
          />
        ) : null}
        {_t.map(({ annotation, bounds }) => {
          let oakThird = popcornSurfaceStyle_st(bounds);
          return (
            <div key={annotation.annotationId}>
              {
                <PopcornSurfaceStyle_Ct
                  {...{
                    bounds,
                    testId: `popcorn-presentation-annotation-overlay-${annotation.annotationId}`,
                  }}
                />
              }
              {
                <PopcornSurfaceStyle_t
                  {...{
                    testId: `popcorn-presentation-annotation-marker-${annotation.annotationId}`,
                    markerNumber: annotation.annotationNumber,
                    position: oakThird,
                    selected:
                      cragSecond?.mode === "edit" &&
                      cragSecond.annotationId === annotation.annotationId,
                    title: annotation.label,
                    onMouseEnter: () => {
                      fjordSecond(annotation.annotationId);
                    },
                    onMouseLeave: () => {
                      fjordSecond((petalThird) =>
                        petalThird === annotation.annotationId
                          ? null
                          : petalThird,
                      );
                    },
                    onFocus: () => {
                      fjordSecond(annotation.annotationId);
                    },
                    onBlur: () => {
                      fjordSecond((quietThird) =>
                        quietThird === annotation.annotationId
                          ? null
                          : quietThird,
                      );
                    },
                    onClick: () => {
                      platenSecond(annotation);
                    },
                  }}
                />
              }
            </div>
          );
        })}
        {clampSecond ? (
          <PopcornSurfaceStyle_V
            {...{
              body: clampSecond.annotation.body,
              markerPosition: popcornSurfaceStyle_st(clampSecond.bounds),
              containerElement: jadeiteSecond.current,
              testId: "popcorn-presentation-annotation-preview",
            }}
          />
        ) : null}
        {axleSecond ? (
          <PopcornSurfaceStyle_Ct
            {...{
              bounds: axleSecond,
              testId: screwSecond
                ? "popcorn-presentation-annotation-region-preview"
                : "popcorn-presentation-annotation-highlight",
              borderWidthPx: screwSecond ? 1 : 2,
            }}
          />
        ) : null}
        {drillSecond.map((item) => {
          let rainThird = grain(
            {
              type: "presentation-element-selection",
              slideId: hingeSecond,
              slideIndex: havenSecond.selectedSlideIdx,
              slideLabel: ironSecond,
              elementIds: [item.elementId],
              primaryElementId: item.elementId,
              frame: item.frame,
            },
            gearSecond.slideRect,
          );
          return rainThird ? (
            <PopcornSurfaceStyle_Ct
              key={item.elementId}
              {...{
                bounds: rainThird,
                borderWidthPx: 0.5,
                fillColor: "transparent",
                shadow: false,
                testId: `popcorn-presentation-annotation-region-contained-${item.elementId}`,
              }}
            />
          ) : null;
        })}
        {anvilSecond &&
        annotationMode &&
        cragSecond?.mode === "create" &&
        pistonSecond ? (
          <PopcornSurfaceStyle_t
            {...{
              testId: "popcorn-presentation-annotation-draft-marker",
              markerNumber: popcornSurfaceStyle_mt(
                annotations,
                cragSecond.target,
              ),
              position: popcornSurfaceStyle_st(pistonSecond),
              draft: true,
            }}
          />
        ) : null}
        {hubSecond && jointSecond && keystoneSecond ? (
          <PopcornSurfaceStyle_it
            {...{
              bounds: jointSecond,
              shortcutScopeElement: jadeiteSecond.current,
              testId: "popcorn-presentation-ask-for-edit-button",
              onClick: (seedThird) => {
                reviewTools?.annotation?.onStart?.(seedThird, {
                  annotationMode,
                });
                inletSecond.current = false;
                domeSecond({
                  mode: "create",
                  target: keystoneSecond,
                  body: "",
                });
              },
            }}
          />
        ) : null}
        {nutSecond ? (
          <PopcornSurfaceStyle_U
            {...{
              ref: hearthSecond,
              anchorBounds: nutSecond,
              containerElement: jadeiteSecond.current,
              portalContainerElement: annotationPortalContainerElement,
              mode: cragSecond?.mode ?? "create",
              value: cragSecond?.body ?? "",
              onChange: (trailThird) => {
                inletSecond.current = false;
                domeSecond(
                  (urnThird) =>
                    urnThird && {
                      ...urnThird,
                      body: trailThird,
                    },
                );
              },
              onCancel: jacketSecond,
              onDelete: shimSecond,
              onSubmit: ratchetSecond,
            }}
          />
        ) : null}
        {stageOverlays.length > 0 ? (
          <div className="pointer-events-none absolute inset-0 z-30">
            {stageOverlays.map((item) => (
              <div
                key={item.id}
                className="pointer-events-none absolute inset-0"
              >
                {item.render({
                  controller,
                  snapshot: gearSecond,
                  selectionBounds: jointSecond,
                  panelControls,
                  editToolbarRequested: yonderSecond,
                  dismissEditToolbar: () => {
                    zenithSecond(false);
                  },
                })}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
  return undefined as any;
}
function wisp(vineThird, windThird) {
  let yarrowThird = window.getComputedStyle(vineThird),
    azureThird =
      windThird === "codex"
        ? yonder(yarrowThird.getPropertyValue("--color-background-surface"))
        : null;
  if (azureThird) return azureThird;
  let birchThird = yarrowThird.backgroundColor.trim();
  return birchThird.length > 0 &&
    birchThird !== "transparent" &&
    birchThird !== "rgba(0, 0, 0, 0)"
    ? birchThird
    : popcornSurfaceStyle_P(windThird);
}
function yonder(canyonThird) {
  let dewThird = canyonThird.trim();
  return dewThird.length === 0 ||
    dewThird === "transparent" ||
    dewThird === "rgba(0, 0, 0, 0)" ||
    dewThird.startsWith("var(")
    ? null
    : dewThird;
}
function zenith(everThird) {
  switch (everThird) {
    case "ArrowLeft":
      return {
        dx: -1,
        dy: 0,
      };
    case "ArrowRight":
      return {
        dx: jetty,
        dy: 0,
      };
    case "ArrowUp":
      return {
        dx: 0,
        dy: -1,
      };
    case "ArrowDown":
      return {
        dx: 0,
        dy: jetty,
      };
    default:
      return null;
  }
}
function anvil(event, fieldThird, grainThird, havenThird, inkThird) {
  return beacon(
    event.clientX,
    event.clientY,
    fieldThird,
    grainThird,
    havenThird,
    inkThird,
  );
}
function beacon(
  jadeiteThird,
  kernelThird,
  leafThird,
  mapleThird,
  nimbusThird,
  opalThird,
) {
  let plumeThird = nimbusThird.selectedSlideFrame;
  if (!leafThird || !plumeThird) return null;
  let quillowThird = popcornSurfaceStyle_T(
    leafThird,
    jadeiteThird,
    kernelThird,
  );
  return iris({
    camera: mapleThird,
    viewportX: quillowThird.x,
    viewportY: quillowThird.y,
    viewport: {
      width: leafThird.clientWidth,
      height: leafThird.clientHeight,
    },
    frame: plumeThird,
    viewportInsets: opalThird,
  });
}
function crag(rootThird, silkThird, thornThird, uplandThird, vistaThird) {
  return !uplandThird || rootThird <= 0 || silkThird <= 0
    ? null
    : on({
        viewport: {
          width: rootThird,
          height: silkThird,
        },
        frame: uplandThird,
        camera: thornThird,
        viewportInsets: vistaThird,
      }).slideRect;
}
function dome(wispThird) {
  if (
    wispThird.selectedElementIds.length !== 1 ||
    !wispThird.primarySelectedElementId
  )
    return null;
  let yonderThird = wispThird.inspector.selectedElement,
    zenithThird =
      yonderThird?.id === wispThird.primarySelectedElementId
        ? yonderThird.frame
        : wispThird.selectedSlideElementTargets.find(
            (item) => item.id === wispThird.primarySelectedElementId,
          )?.frame;
  if (!zenithThird) return null;
  let anvilThird = wispThird.slideRect;
  return anvilThird
    ? {
        left: anvilThird.left + zenithThird.left * anvilThird.scale,
        top: anvilThird.top + zenithThird.top * anvilThird.scale,
        width: zenithThird.width * anvilThird.scale,
        height: zenithThird.height * anvilThird.scale,
      }
    : {
        left: zenithThird.left,
        top: zenithThird.top,
        width: zenithThird.width,
        height: zenithThird.height,
      };
}
function eddy(event, beaconThird) {
  beaconThird.current = event.pointerId;
  try {
    event.currentTarget.setPointerCapture(event.pointerId);
  } catch {}
}
function fjord(event, cragThird) {
  if (event.currentTarget.hasPointerCapture?.(event.pointerId))
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {}
  cragThird.current === event.pointerId && (cragThird.current = null);
}
