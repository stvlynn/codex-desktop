// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 7/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

// Wave5d soft stubs.
const IntlProvider: any = undefined;

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

function Seed({
  threads,
  slideRect,
  isEditing,
  onReply,
  onResolve,
  onReopen,
  onDeleteThread,
  onToggleReaction,
  onEditComment,
  onDeleteComment,
}) {
  let [deltaSecond, echoSecond] = trail.useState(null);
  return (
    trail.useEffect(() => {
      deltaSecond &&
        (threads.some((item) => item.threadId === deltaSecond) ||
          echoSecond(null));
    }, [deltaSecond, threads]),
    (
      <>
        {trail
          .useMemo(
            () =>
              slideRect
                ? threads.map((item) => ({
                    thread: item,
                    left: slideRect.left + item.markerPoint.x * slideRect.scale,
                    top: slideRect.top + item.markerPoint.y * slideRect.scale,
                  }))
                : [],
            [slideRect, threads],
          )
          .map(({ thread, left, top }) => {
            let falconSecond = deltaSecond === thread.threadId,
              gammaSecond = `Slide ${thread.slideIndex + 1}`,
              harborSecond =
                thread.target.kind === "slide"
                  ? thread.slideLabel
                  : (thread.target.elementName ?? thread.slideLabel);
            return (
              <PopcornSurfaceStyle_B
                key={thread.threadId}
                {...{
                  open: falconSecond,
                  onOpenChange: (indigoSecond) => {
                    echoSecond(indigoSecond ? thread.threadId : null);
                  },
                  trigger: (
                    <button
                      type="button"
                      data-testid={`popcorn-presentation-thread-trigger-${thread.threadId}`}
                      aria-label={`Open comment thread for ${thread.label}`}
                      className={IntlProvider(
                        "pointer-events-auto absolute z-[24] flex h-8 w-8 items-center justify-center rounded-full border border-token-border-light bg-token-bg-primary text-token-text-primary shadow-sm transition-colors",
                        falconSecond
                          ? "border-[var(--color-token-text-link-foreground,#339cff)] text-token-text-link-foreground"
                          : "hover:bg-token-bg-secondary",
                      )}
                      style={{
                        left,
                        top,
                        transform: "translate(-50%, -50%)",
                      }}
                      onMouseDown={(event) => {
                        event.stopPropagation();
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      {
                        <RemoteTextEditSessionM
                          {...{
                            className: "size-4",
                          }}
                        />
                      }
                    </button>
                  ),
                  content: (
                    <PopcornSurfaceStyle_Y
                      {...{
                        targetPrimaryLabel: gammaSecond,
                        targetSecondaryLabel: harborSecond,
                        status: thread.status,
                        resolvedByName: thread.resolvedBy?.displayName ?? null,
                        resolvedAt: thread.resolvedAt,
                        comments: thread.comments,
                        isEditing,
                        viewerAuthorId: thread.viewerAuthorId,
                        onReply: onReply
                          ? (jadeSecond) => {
                              onReply(thread.threadId, jadeSecond);
                            }
                          : undefined,
                        onResolve: onResolve
                          ? () => {
                              onResolve(thread.threadId);
                            }
                          : undefined,
                        onReopen: onReopen
                          ? () => {
                              onReopen(thread.threadId);
                            }
                          : undefined,
                        onDeleteThread: onDeleteThread
                          ? () => {
                              onDeleteThread(thread.threadId);
                            }
                          : undefined,
                        onToggleReaction: onToggleReaction
                          ? (kiteSecond, lemonSecond) => {
                              onToggleReaction(
                                thread.threadId,
                                kiteSecond,
                                lemonSecond,
                              );
                            }
                          : undefined,
                        onEditComment: onEditComment
                          ? (marbleSecond, nickelSecond) => {
                              onEditComment(
                                thread.threadId,
                                marbleSecond,
                                nickelSecond,
                              );
                            }
                          : undefined,
                        onDeleteComment: onDeleteComment
                          ? (onyxSecond) => {
                              onDeleteComment(thread.threadId, onyxSecond);
                            }
                          : undefined,
                      }}
                    />
                  ),
                }}
              />
            );
          })}
      </>
    )
  );
}
var trail,
  urn,
  vine = esmInit(() => {
    ensureComposerEsm_Tft_Init();
    trail = commonJsInit(react());
    RemoteTextEditSessionC();
    popcornSurfaceStyle_dt();
  });
function wind(pearlSecond) {
  return {
    left: pearlSecond.left,
    top: pearlSecond.top,
    width: pearlSecond.width,
    height: pearlSecond.height,
    rotation: pearlSecond.rotation,
  };
}
function yarrow(quartzSecond) {
  return {
    x: quartzSecond.x,
    y: quartzSecond.y,
  };
}
function azure(riverSecond) {
  return {
    elementId: riverSecond.elementId,
    frame: wind(riverSecond.frame),
  };
}
function birch(slateSecond) {
  let timberSecond = slateSecond.selectedElementIds
    .map((item) =>
      slateSecond.selectedSlideElementTargets.find(
        (_item) => _item.id === item,
      ),
    )
    .filter((item) => item != null);
  if (timberSecond.length === 0) return null;
  let umbraSecond = timberSecond[0];
  if (!umbraSecond) return null;
  let violetSecond = umbraSecond.frame.left,
    willowSecond = umbraSecond.frame.top,
    xenonSecond = umbraSecond.frame.left + umbraSecond.frame.width,
    yellowSecond = umbraSecond.frame.top + umbraSecond.frame.height;
  for (let zincSecond of timberSecond.slice(1)) {
    violetSecond = Math.min(violetSecond, zincSecond.frame.left);
    willowSecond = Math.min(willowSecond, zincSecond.frame.top);
    xenonSecond = Math.max(
      xenonSecond,
      zincSecond.frame.left + zincSecond.frame.width,
    );
    yellowSecond = Math.max(
      yellowSecond,
      zincSecond.frame.top + zincSecond.frame.height,
    );
  }
  return {
    left: violetSecond,
    top: willowSecond,
    width: xenonSecond - violetSecond,
    height: yellowSecond - willowSecond,
  };
}
function $n(amberSecond) {
  let basaltSecond =
    amberSecond.snapshot.slideIds[amberSecond.snapshot.selectedSlideIdx];
  if (!basaltSecond) return null;
  let cedarSecond = [
      ...(amberSecond.elementIds ?? amberSecond.snapshot.selectedElementIds),
    ],
    daisySecond =
      amberSecond.primaryElementId ??
      amberSecond.snapshot.primarySelectedElementId ??
      null,
    emberSecond =
      amberSecond.frame ??
      birch({
        selectedElementIds: cedarSecond,
        selectedSlideElementTargets:
          amberSecond.snapshot.selectedSlideElementTargets,
      });
  if (!emberSecond || cedarSecond.length === 0) return null;
  let flintSecond =
      daisySecond == null
        ? null
        : (amberSecond.snapshot.inspector.slideElements.find(
            (item) => item.id === daisySecond,
          ) ?? null),
    garnetSecond =
      flintSecond == null
        ? null
        : amberSecond.snapshot.inspector.slideElements
            .filter((item) => item.kind === flintSecond.kind)
            .findIndex((item) => item.id === flintSecond.id) + 1;
  return {
    type: "presentation-element-selection",
    slideId: basaltSecond,
    slideIndex: amberSecond.snapshot.selectedSlideIdx,
    slideLabel:
      amberSecond.snapshot.slideLabels[amberSecond.snapshot.selectedSlideIdx] ??
      `Slide ${amberSecond.snapshot.selectedSlideIdx + 1}`,
    elementIds: cedarSecond,
    primaryElementId: daisySecond,
    primaryElementKind: flintSecond?.kind ?? null,
    primaryElementName: flintSecond?.name ?? null,
    primaryElementOrdinal:
      garnetSecond != null && garnetSecond > 0 ? garnetSecond : null,
    frame: wind(emberSecond),
    ...(amberSecond.anchorPoint == null
      ? {}
      : {
          anchorPoint: yarrow(amberSecond.anchorPoint),
          primaryElementOffset:
            emberSecond == null
              ? null
              : {
                  x: amberSecond.anchorPoint.x - emberSecond.left,
                  y: amberSecond.anchorPoint.y - emberSecond.top,
                },
        }),
  };
}
function canyon(hazelSecond) {
  let ivorySecond =
    hazelSecond.snapshot.slideIds[hazelSecond.snapshot.selectedSlideIdx];
  return ivorySecond
    ? {
        type: "presentation-region",
        slideId: ivorySecond,
        slideIndex: hazelSecond.snapshot.selectedSlideIdx,
        slideLabel:
          hazelSecond.snapshot.slideLabels[
            hazelSecond.snapshot.selectedSlideIdx
          ] ?? `Slide ${hazelSecond.snapshot.selectedSlideIdx + 1}`,
        frame: wind(hazelSecond.frame),
        anchorPoint: yarrow(hazelSecond.anchorPoint),
        containedElements: (hazelSecond.containedElements ?? []).map(azure),
      }
    : null;
}
function dew(jasperSecond) {
  let kelpSecond =
    jasperSecond.snapshot.slideIds[jasperSecond.snapshot.selectedSlideIdx];
  return kelpSecond
    ? {
        type: "presentation-drawing-region",
        slideId: kelpSecond,
        slideIndex: jasperSecond.snapshot.selectedSlideIdx,
        slideLabel:
          jasperSecond.snapshot.slideLabels[
            jasperSecond.snapshot.selectedSlideIdx
          ] ?? `Slide ${jasperSecond.snapshot.selectedSlideIdx + 1}`,
        frame: wind(jasperSecond.frame),
        viewportBounds: {
          left: jasperSecond.viewportBounds.left,
          top: jasperSecond.viewportBounds.top,
          width: jasperSecond.viewportBounds.width,
          height: jasperSecond.viewportBounds.height,
        },
        containedElements: (jasperSecond.containedElements ?? []).map(azure),
      }
    : null;
}
function ever(lotusSecond) {
  return lotusSecond.type === "presentation-region"
    ? lotusSecond.frame.width === 0 && lotusSecond.frame.height === 0
      ? `${lotusSecond.slideLabel} · Point`
      : `${lotusSecond.slideLabel} · Region`
    : lotusSecond.elementIds.length === 1
      ? `${lotusSecond.slideLabel} · ${lotusSecond.primaryElementId ?? lotusSecond.elementIds[0]}`
      : `${lotusSecond.slideLabel} · ${lotusSecond.elementIds.length} elements`;
}
function field(mintSecond) {
  return `${mintSecond.slideLabel} · Drawing`;
}
function grain(novaSecond, oliveSecond) {
  return oliveSecond
    ? {
        left: oliveSecond.left + novaSecond.frame.left * oliveSecond.scale,
        top: oliveSecond.top + novaSecond.frame.top * oliveSecond.scale,
        width: novaSecond.frame.width * oliveSecond.scale,
        height: novaSecond.frame.height * oliveSecond.scale,
      }
    : wind(novaSecond.frame);
}
function haven(prismSecond, quillSecond) {
  let reefSecond =
    prismSecond.type === "presentation-region"
      ? prismSecond.anchorPoint
      : (prismSecond.anchorPoint ?? null);
  return reefSecond
    ? quillSecond
      ? {
          left: quillSecond.left + reefSecond.x * quillSecond.scale,
          top: quillSecond.top + reefSecond.y * quillSecond.scale,
          width: 0,
          height: 0,
        }
      : {
          left: reefSecond.x,
          top: reefSecond.y,
          width: 0,
          height: 0,
        }
    : grain(prismSecond, quillSecond);
}
var or = esmInit(() => {});
function jadeite(sageSecond, topazSecond, ultraSecond = 1) {
  let vaporSecond = null,
    { hitRadius } = popcornSurfaceStyle_H(ultraSecond);
  for (let wheatSecond = 0; wheatSecond < sageSecond.length; wheatSecond += 1) {
    let yarnSecond = sageSecond[wheatSecond];
    if (!yarnSecond) continue;
    let zephyrSecond = yarnSecond.frame;
    if (
      !zephyrSecond ||
      (!quillow(zephyrSecond, topazSecond) &&
        !thorn(yarnSecond, topazSecond, hitRadius))
    )
      continue;
    let acornSecond = yarnSecond.zIndex;
    (!vaporSecond ||
      acornSecond > vaporSecond.z ||
      (acornSecond === vaporSecond.z && wheatSecond > vaporSecond.order)) &&
      (vaporSecond = {
        id: yarnSecond.id,
        z: acornSecond,
        order: wheatSecond,
      });
  }
  return vaporSecond?.id ?? null;
}
function kernel(bloomSecond, coralSecond) {
  let driftSecond = null;
  for (
    let eagleSecond = 0;
    eagleSecond < bloomSecond.length;
    eagleSecond += 1
  ) {
    let frostSecond = bloomSecond[eagleSecond];
    if (!frostSecond || !quillow(frostSecond.frame, coralSecond)) continue;
    let glideSecond = frostSecond.zIndex;
    (!driftSecond ||
      glideSecond > driftSecond.z ||
      (glideSecond === driftSecond.z && eagleSecond > driftSecond.order)) &&
      (driftSecond = {
        target: frostSecond,
        z: glideSecond,
        order: eagleSecond,
      });
  }
  return driftSecond?.target ?? null;
}
function leaf(honeySecond, irisSecond, jewelSecond = 1) {
  let knollSecond = null,
    { hitRadius } = popcornSurfaceStyle_H(jewelSecond);
  for (
    let lunarSecond = 0;
    lunarSecond < honeySecond.length;
    lunarSecond += 1
  ) {
    let mossSecond = honeySecond[lunarSecond],
      northSecond = mossSecond?.connector;
    if (!(!mossSecond || !northSecond))
      for (let orbitSecond of ["from", "to"]) {
        let pineSecond = northSecond[orbitSecond];
        if (
          Math.hypot(irisSecond.x - pineSecond.x, irisSecond.y - pineSecond.y) >
          hitRadius
        )
          continue;
        let questSecond = mossSecond.zIndex;
        (!knollSecond ||
          questSecond > knollSecond.z ||
          (questSecond === knollSecond.z && lunarSecond > knollSecond.order)) &&
          (knollSecond = {
            hit: {
              elementId: mossSecond.id,
              endpoint: orbitSecond,
            },
            z: questSecond,
            order: lunarSecond,
          });
      }
  }
  return knollSecond?.hit ?? null;
}
function maple(ridgeSecond, stormSecond) {
  let tideSecond = Math.min(ridgeSecond.x, stormSecond.x),
    unitySecond = Math.min(ridgeSecond.y, stormSecond.y),
    valeSecond = Math.max(ridgeSecond.x, stormSecond.x),
    waveSecond = Math.max(ridgeSecond.y, stormSecond.y);
  return {
    left: tideSecond,
    top: unitySecond,
    width: valeSecond - tideSecond,
    height: waveSecond - unitySecond,
  };
}
function nimbus(apexSecond, brookSecond) {
  return apexSecond
    .filter((item) => silk(brookSecond, item.frame))
    .sort((cliffSecond, duskSecond) =>
      cliffSecond.zIndex === duskSecond.zIndex
        ? apexSecond.indexOf(cliffSecond) - apexSecond.indexOf(duskSecond)
        : cliffSecond.zIndex - duskSecond.zIndex,
    )
    .map((item) => item.id);
}
function opal(elmSecond, fernSecond, groveSecond = 1) {
  return elmSecond
    ? popcornSurfaceStyle_P(elmSecond, fernSecond, groveSecond)
    : null;
}
function plume(hillSecond, isleSecond, juniperSecond = 1) {
  return hillSecond
    ? popcornSurfaceStyle_L(hillSecond, isleSecond, juniperSecond)
    : false;
}
function quillow(lagoonSecond, meadowSecond) {
  return popcornSurfaceStyle_I(lagoonSecond, meadowSecond);
}
function silk(nestSecond, oakSecond) {
  return popcornSurfaceStyle_L(nestSecond, oakSecond);
}
function thorn(petalSecond, quietSecond, rainSecond) {
  let seedSecond = petalSecond.connector;
  return seedSecond
    ? _r(quietSecond, seedSecond.from, seedSecond.to) <= rainSecond
    : false;
}
function _r(trailSecond, urnSecond, vineSecond) {
  let windSecond = vineSecond.x - urnSecond.x,
    yarrowSecond = vineSecond.y - urnSecond.y,
    azureSecond = trailSecond.x - urnSecond.x,
    birchSecond = trailSecond.y - urnSecond.y,
    canyonSecond = windSecond * windSecond + yarrowSecond * yarrowSecond;
  if (canyonSecond <= 0) return Math.hypot(azureSecond, birchSecond);
  let dewSecond = Math.max(
      0,
      Math.min(
        1,
        (azureSecond * windSecond + birchSecond * yarrowSecond) / canyonSecond,
      ),
    ),
    everSecond = urnSecond.x + dewSecond * windSecond,
    fieldSecond = urnSecond.y + dewSecond * yarrowSecond;
  return Math.hypot(trailSecond.x - everSecond, trailSecond.y - fieldSecond);
}
var upland = esmInit(() => {
  PopcornSurfaceStyle_V();
  popcornSurfaceStyle_F();
});
