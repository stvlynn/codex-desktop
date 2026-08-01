// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 5/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

// Wave5d soft stubs.
const _t: any = undefined;
const alpha: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const zinc: any = undefined;

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
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

var reef,
  sage,
  topaz = esmInit(() => {
    RemoteTextEditSessionLowerV();
    RemoteTextEditSessionY();
    RemoteTextEditSessionZoomControl();
    _t();
    echo();
    flint();
    hazel();
    lotus();
    reef = 1;
    sage = class {
      id = reef++;
      #e = RemoteTextEditSessionM("presentation-main-controller");
      #t = kelp();
      #n = new Set();
      #r = new Set();
      #i = [];
      #a;
      #o = null;
      #s = null;
      #c = null;
      #l = null;
      #u = null;
      #d = null;
      #f = null;
      #p = 1;
      #m = null;
      #h = null;
      #g = null;
      #_;
      #v = false;
      constructor(vaporPrime = {}) {
        let wheatPrime =
            vaporPrime.presentationProto ??
            vaporPrime.presentation?.toProto() ??
            zinc().toProto(),
          yarnPrime = (vaporPrime.workerFactory ?? garnet)();
        this.#a = new RemoteTextEditSessionV(
          yarnPrime,
          (zephyrPrime) => this.#C(zephyrPrime),
          (acornPrime) => {
            throw Error(acornPrime);
          },
        );
        this.#e.debug("bootstrap", {
          controllerId: this.id,
          slideCount: wheatPrime.slides?.length ?? 0,
          initialSelectedSlideIdx: vaporPrime.initialSelectedSlideIdx,
          initialZoom: vaporPrime.initialZoom,
        });
        this.#a.bootstrap({
          presentationProto: wheatPrime,
          initialCrdtState: vaporPrime.initialCrdtState,
          initialSelectedSlideIdx: vaporPrime.initialSelectedSlideIdx,
          initialZoom: vaporPrime.initialZoom,
        });
        this.#_ = alpha()
          .then(() => {
            let bloomPrime = RemoteTextEditSessionLowerB();
            this.#e.debug("font-render-deps-ready", {
              fontCount: bloomPrime.length,
              fonts: bloomPrime.map((item) => ({
                family: item.family,
                style: item.style,
                weight: item.weight,
                format: item.format,
                src: item.src,
              })),
              fontDebug: RemoteTextEditSessionLowerY(),
            });
            bloomPrime.length !== 0 &&
              (this.#a.dispatch({
                kind: "install-font-faces",
                fonts: bloomPrime,
              }),
              this.#e.debug("font-install-dispatched", {
                fontCount: bloomPrime.length,
              }));
          })
          .catch(() => {});
      }
      subscribe(coralPrime) {
        return this.#t.subscribe(coralPrime);
      }
      getState() {
        return this.#t.getState();
      }
      getSnapshot() {
        return this.getState();
      }
      dispatch(driftPrime) {}
      attachViewport(eaglePrime) {
        prism({
          requiresCanvasTransfer: !!eaglePrime.overlayCanvas,
        });
        let frostPrime = (northPrime) => {
            let orbitPrime = copper(eaglePrime.host, northPrime);
            return {
              width: Math.max(1, orbitPrime.width),
              height: Math.max(1, orbitPrime.height),
              dpr: window.devicePixelRatio || 1,
            };
          },
          glidePrime = () => {
            this.#m = null;
            this.#b();
          },
          honeyPrime = (pinePrime) => {
            this.#d = frostPrime(pinePrime);
            this.#m != null && window.cancelAnimationFrame(this.#m);
            this.#m = window.requestAnimationFrame(glidePrime);
          },
          irisPrime = this.#s !== eaglePrime.canvas;
        if (
          (irisPrime && (this.#s = eaglePrime.canvas),
          (this.#c = eaglePrime.canvas.getContext("2d")),
          !this.#c)
        )
          throw Error(
            "Presentation viewport canvas 2d context is unavailable.",
          );
        let jewelPrime = !!(
          eaglePrime.overlayCanvas && this.#l !== eaglePrime.overlayCanvas
        );
        jewelPrime &&
          eaglePrime.overlayCanvas &&
          (this.#l = eaglePrime.overlayCanvas);
        let knollPrime = frostPrime();
        this.#u ??= {
          ...knollPrime,
        };
        this.#d ??= {
          ...knollPrime,
        };
        olive(eaglePrime.canvas, this.#u, {
          resizeIntrinsicBitmap: true,
        });
        eaglePrime.overlayCanvas &&
          olive(eaglePrime.overlayCanvas, this.#u, {
            resizeIntrinsicBitmap: true,
          });
        this.#_.then(() => {
          if (this.#v) return;
          let questPrime = frostPrime();
          if (
            ((this.#d = {
              ...questPrime,
            }),
            this.#u ?? this.#y(questPrime),
            irisPrime)
          ) {
            if (this.#s !== eaglePrime.canvas) return;
            this.#a.dispatch({
              kind: "attach-canvas",
              width: questPrime.width,
              height: questPrime.height,
              dpr: questPrime.dpr,
            });
          } else this.#s === eaglePrime.canvas && honeyPrime();
          if (eaglePrime.overlayCanvas)
            if (jewelPrime) {
              if (this.#l !== eaglePrime.overlayCanvas) return;
              let ridgePrime =
                eaglePrime.overlayCanvas.transferControlToOffscreen();
              this.#a.dispatch(
                {
                  kind: "attach-overlay-canvas",
                  canvas: ridgePrime,
                  width: questPrime.width,
                  height: questPrime.height,
                  dpr: questPrime.dpr,
                },
                [ridgePrime],
              );
            } else this.#l === eaglePrime.overlayCanvas && honeyPrime();
        });
        let lunarPrime =
          typeof ResizeObserver < "u"
            ? new ResizeObserver((stormPrime) => {
                let tidePrime = stormPrime[0];
                honeyPrime(
                  tidePrime ? delta(eaglePrime.host, tidePrime) : null,
                );
              })
            : null;
        lunarPrime?.observe(eaglePrime.host);
        let mossPrime = () => {
          honeyPrime();
        };
        return (
          window.addEventListener("resize", mossPrime),
          () => {
            this.#m != null &&
              (window.cancelAnimationFrame(this.#m), (this.#m = null));
            lunarPrime?.disconnect();
            window.removeEventListener("resize", mossPrime);
          }
        );
      }
      #y(unityPrime) {
        this.#u = {
          ...unityPrime,
        };
        this.#s && (olive(this.#s, unityPrime), this.#x());
        this.#l &&
          olive(this.#l, unityPrime, {
            resizeIntrinsicBitmap: false,
          });
      }
      requestExport(valePrime) {
        return this.#a
          .request({
            kind: "export",
            format: valePrime?.format ?? "proto",
          })
          .then((value) => {
            if (value.kind !== "export")
              throw Error(`Unexpected export response: ${value.kind}`);
            return value.result;
          });
      }
      requestCrdtSnapshot() {
        return this.#a
          .request({
            kind: "crdt-snapshot",
          })
          .then((value) => {
            if (value.kind !== "crdt-snapshot")
              throw Error(`Unexpected CRDT snapshot response: ${value.kind}`);
            return new Uint8Array(value.result);
          });
      }
      loadInitialCrdtState(wavePrime) {
        return this.#a
          .request({
            kind: "load-initial-crdt-state",
            update: wavePrime,
          })
          .then((value) => {
            if (value.kind !== "load-initial-crdt-state")
              throw Error(
                `Unexpected initial CRDT load response: ${value.kind}`,
              );
          });
      }
      applyCrdtUpdate(apexPrime) {
        return this.#a
          .request({
            kind: "apply-crdt-update",
            update: apexPrime,
          })
          .then((value) => {
            if (value.kind !== "apply-crdt-update")
              throw Error(`Unexpected CRDT apply response: ${value.kind}`);
          });
      }
      hydrateImageAssets(brookPrime) {
        return this.#a
          .request({
            kind: "hydrate-image-assets",
            assets: brookPrime,
          })
          .then((value) => {
            if (value.kind !== "hydrate-image-assets")
              throw Error(`Unexpected image hydration response: ${value.kind}`);
          });
      }
      subscribeCrdtUpdates(cliffPrime) {
        return (
          this.#n.add(cliffPrime),
          () => {
            this.#n.delete(cliffPrime);
          }
        );
      }
      subscribeImageHydrationRequests(duskPrime) {
        return (
          this.#r.add(duskPrime),
          this.#i.length > 0 && duskPrime(this.#i),
          () => {
            this.#r.delete(duskPrime);
          }
        );
      }
      replaceFromProto(elmPrime) {
        return this.#a
          .request({
            kind: "replace-from-proto",
            presentationProto: elmPrime,
          })
          .then((value) => {
            if (value.kind !== "replace-from-proto")
              throw Error(`Unexpected replace response: ${value.kind}`);
          });
      }
      dispose() {
        this.#v ||
          ((this.#v = true),
          (this.#s = null),
          (this.#c = null),
          (this.#l = null),
          this.#h?.bitmap.close(),
          (this.#h = null),
          this.#m != null &&
            (window.cancelAnimationFrame(this.#m), (this.#m = null)),
          this.#n.clear(),
          this.#a.dispose());
      }
      #b() {
        let fernPrime = this.#d;
        if (!fernPrime) return;
        if (nova(this.#u, fernPrime) && this.#f == null) {
          this.#y(fernPrime);
          return;
        }
        if (this.#f != null) return;
        let grovePrime = this.#p++;
        this.#f = grovePrime;
        this.#a.dispatch({
          kind: "resize-viewport",
          width: fernPrime.width,
          height: fernPrime.height,
          dpr: fernPrime.dpr,
          resizeId: grovePrime,
          ...(this.#o
            ? {
                camera: {
                  ...this.#o,
                },
              }
            : {}),
        });
      }
      #x() {
        let hillPrime = this.#s,
          islePrime = this.#c,
          juniperPrime = this.#h,
          lagoonPrime = this.#u;
        !hillPrime ||
          !islePrime ||
          !juniperPrime ||
          !lagoonPrime ||
          (islePrime.setTransform(1, 0, 0, 1, 0, 0),
          islePrime.clearRect(0, 0, hillPrime.width, hillPrime.height),
          islePrime.setTransform(lagoonPrime.dpr, 0, 0, lagoonPrime.dpr, 0, 0),
          islePrime.drawImage(
            juniperPrime.bitmap,
            0,
            0,
            juniperPrime.metrics.width,
            juniperPrime.metrics.height,
          ));
      }
      #S(meadowPrime) {
        let nestPrime = {
            width: meadowPrime.width,
            height: meadowPrime.height,
            dpr: meadowPrime.dpr,
          },
          oakPrime = meadowPrime.resizeId != null,
          petalPrime = oakPrime && this.#f === meadowPrime.resizeId,
          quietPrime = !oakPrime || petalPrime,
          rainPrime = !this.#d || nova(this.#d, nestPrime);
        if (!quietPrime || !rainPrime) {
          meadowPrime.bitmap.close();
          petalPrime && ((this.#f = null), this.#b());
          return;
        }
        this.#h?.bitmap.close();
        this.#h = {
          bitmap: meadowPrime.bitmap,
          metrics: nestPrime,
        };
        petalPrime && (this.#f = null);
        this.#y(nestPrime);
        petalPrime &&
          meadowPrime.resizeId != null &&
          (this.#a.dispatch({
            kind: "commit-viewport-resize",
            resizeId: meadowPrime.resizeId,
          }),
          this.#b());
      }
      setSelectedSlideIdx(seedPrime) {
        this.#a.dispatch({
          kind: "set-selected-slide-idx",
          index: seedPrime,
        });
      }
      setZoom(trailPrime) {
        this.#a.dispatch({
          kind: "set-zoom",
          zoom: trailPrime,
        });
      }
      setEditingEnabled(urnPrime) {
        this.#a.dispatch({
          kind: "set-editing-enabled",
          isEditing: urnPrime,
        });
      }
      setStageBackgroundColor(vinePrime) {
        let windPrime = vinePrime.trim();
        windPrime.length === 0 ||
          windPrime === this.#g ||
          ((this.#g = windPrime),
          this.#a.dispatch({
            kind: "set-stage-background-color",
            backgroundColor: windPrime,
          }));
      }
      setViewportInsets(yarrowPrime) {
        this.#a.dispatch({
          kind: "set-viewport-insets",
          viewportInsets: {
            ...yarrowPrime,
          },
        });
      }
      setViewportCamera(azurePrime) {
        this.#o = azurePrime
          ? {
              ...azurePrime,
            }
          : null;
        azurePrime &&
          this.#a.dispatch({
            kind: "set-camera",
            camera: {
              ...azurePrime,
            },
          });
      }
      getViewportCamera() {
        return this.#o
          ? {
              ...this.#o,
            }
          : null;
      }
      setSelectedElementId(birchPrime) {
        this.#a.dispatch({
          kind: "set-selected-element-id",
          elementId: birchPrime,
        });
      }
      replyToCommentThread(canyonPrime, dewPrime) {
        return (
          this.#a.dispatch({
            kind: "reply-comment-thread",
            threadId: canyonPrime,
            body: dewPrime,
          }),
          true
        );
      }
      resolveCommentThread(everPrime) {
        return (
          this.#a.dispatch({
            kind: "resolve-comment-thread",
            threadId: everPrime,
          }),
          true
        );
      }
      reopenCommentThread(fieldPrime) {
        return (
          this.#a.dispatch({
            kind: "reopen-comment-thread",
            threadId: fieldPrime,
          }),
          true
        );
      }
      deleteCommentThread(grainPrime) {
        return (
          this.#a.dispatch({
            kind: "delete-comment-thread",
            threadId: grainPrime,
          }),
          true
        );
      }
      toggleCommentReaction(havenPrime, inkPrime, jadeitePrime) {
        return (
          this.#a.dispatch({
            kind: "toggle-comment-reaction",
            threadId: havenPrime,
            commentId: inkPrime,
            reactionType: jadeitePrime,
          }),
          true
        );
      }
      editThreadComment(kernelPrime, leafPrime, maplePrime) {
        return (
          this.#a.dispatch({
            kind: "edit-thread-comment",
            threadId: kernelPrime,
            commentId: leafPrime,
            body: maplePrime,
          }),
          true
        );
      }
      deleteThreadComment(nimbusPrime, opalPrime) {
        return (
          this.#a.dispatch({
            kind: "delete-thread-comment",
            threadId: nimbusPrime,
            commentId: opalPrime,
          }),
          true
        );
      }
      beginSelectionMarquee(plumePrime) {
        return (
          this.#a.dispatch({
            kind: "begin-selection-marquee",
            ...plumePrime,
          }),
          true
        );
      }
      updateSelectionMarquee(quillowPrime) {
        return (
          this.#a.dispatch({
            kind: "update-selection-marquee",
            ...quillowPrime,
          }),
          true
        );
      }
      endSelectionMarquee(rootPrime) {
        return (
          this.#a.dispatch({
            kind: "end-selection-marquee",
            commit: rootPrime?.commit,
          }),
          true
        );
      }
      textPointerDown(silkPrime, thornPrime) {
        return (
          this.#a.dispatch({
            kind: "text-pointer-down",
            point: silkPrime,
            shiftKey: thornPrime?.shiftKey,
          }),
          true
        );
      }
      textPointerMove(uplandPrime) {
        return (
          this.#a.dispatch({
            kind: "text-pointer-move",
            point: uplandPrime,
          }),
          true
        );
      }
      textPointerUp() {
        this.#a.dispatch({
          kind: "text-pointer-up",
        });
      }
      textSelectWordAtPoint(vistaPrime) {
        return (
          this.#a.dispatch({
            kind: "text-select-word-at-point",
            point: vistaPrime,
          }),
          true
        );
      }
      textSelectParagraphAtPoint(wispPrime) {
        return (
          this.#a.dispatch({
            kind: "text-select-paragraph-at-point",
            point: wispPrime,
          }),
          true
        );
      }
      textActivateBlockEnd(yonderPrime) {
        return (
          this.#a.dispatch({
            kind: "text-activate-block-end",
            blockId: yonderPrime,
          }),
          true
        );
      }
      textClear() {
        this.#a.dispatch({
          kind: "text-clear",
        });
      }
      textHandleKeyDown(zenithPrime) {
        return (
          this.#a.dispatch({
            kind: "text-keydown",
            event: zenithPrime,
          }),
          true
        );
      }
      textHandleBeforeInput(anvilPrime) {
        return (
          this.#a.dispatch({
            kind: "text-before-input",
            event: anvilPrime,
          }),
          true
        );
      }
      textHandleInput(beaconPrime) {
        return (
          this.#a.dispatch({
            kind: "text-input",
            event: beaconPrime,
          }),
          true
        );
      }
      textHandleCompositionEnd(cragPrime) {
        return (
          this.#a.dispatch({
            kind: "text-composition-end",
            event: cragPrime,
          }),
          true
        );
      }
      setHoveredElementId(domePrime) {
        this.#a.dispatch({
          kind: "set-hovered-element-id",
          elementId: domePrime,
        });
      }
      setLocalAwarenessCursor(eddyPrime) {
        this.#a.dispatch({
          kind: "set-local-awareness-cursor",
          point: eddyPrime,
        });
      }
      clearLocalAwarenessCursor() {
        this.#a.dispatch({
          kind: "clear-local-awareness-cursor",
        });
      }
      setPresenceCursor(fjordPrime, glenPrime, hearthPrime) {
        this.#a.dispatch({
          kind: "set-presence-cursor",
          presenceId: fjordPrime,
          cursor: glenPrime,
          presenceKind: hearthPrime?.kind,
        });
      }
      setPresenceSelection(inletPrime, jettyPrime, knobPrime) {
        this.#a.dispatch({
          kind: "set-presence-selection",
          presenceId: inletPrime,
          selection: jettyPrime,
          presenceKind: knobPrime?.kind,
        });
      }
      clearPresenceCursor(ledgePrime, mirePrime) {
        this.#a.dispatch({
          kind: "clear-presence-cursor",
          presenceId: ledgePrime,
          slideId: mirePrime?.slideId,
        });
      }
      clearPresenceSelection(nookPrime, oxbowPrime) {
        this.#a.dispatch({
          kind: "clear-presence-selection",
          presenceId: nookPrime,
          slideId: oxbowPrime?.slideId,
        });
      }
      beginElementInteraction(pondPrime) {
        return (
          this.#a.dispatch({
            kind: "begin-element-interaction",
            ...pondPrime,
          }),
          true
        );
      }
      updateElementInteraction(quarryPrime) {
        return (
          this.#a.dispatch({
            kind: "update-element-interaction",
            ...quarryPrime,
          }),
          true
        );
      }
      endElementInteraction(rapidsPrime) {
        return (
          this.#a.dispatch({
            kind: "end-element-interaction",
            commit: rapidsPrime?.commit,
          }),
          true
        );
      }
      nudgeSelectedElements(spurPrime) {
        return (
          this.#a.dispatch({
            kind: "nudge-selected-elements",
            dx: spurPrime.dx,
            dy: spurPrime.dy,
          }),
          true
        );
      }
      clearElementSelection() {
        this.#a.dispatch({
          kind: "clear-element-selection",
        });
      }
      deleteSelectedElement() {
        return (
          this.#a.dispatch({
            kind: "delete-selected-element",
          }),
          true
        );
      }
      addSlide() {
        this.#a.dispatch({
          kind: "add-slide",
        });
      }
      duplicateSelectedSlide() {
        this.#a.dispatch({
          kind: "duplicate-selected-slide",
        });
      }
      moveSlide(torPrime, updraftPrime) {
        return (
          this.#a.dispatch({
            kind: "move-slide",
            fromIndex: torPrime,
            toIndex: updraftPrime,
          }),
          true
        );
      }
      deleteSlide(vergePrime) {
        return (
          this.#a.dispatch({
            kind: "delete-slide",
            index: vergePrime,
          }),
          true
        );
      }
      updateSpeakerNotes(weirPrime) {
        this.#a.dispatch({
          kind: "update-speaker-notes",
          value: weirPrime,
        });
      }
      updateSelectedElementFrame(yardPrime) {
        return (
          this.#a.dispatch({
            kind: "update-selected-element-frame",
            framePatch: yardPrime,
          }),
          true
        );
      }
      updateSelectedElementStyle(anchorPrime) {
        return (
          this.#a.dispatch({
            kind: "update-selected-element-style",
            stylePatch: anchorPrime,
          }),
          true
        );
      }
      reorderSelectedElement(boltPrime) {
        return (
          this.#a.dispatch({
            kind: "reorder-selected-element",
            direction: boltPrime,
          }),
          true
        );
      }
      undo() {
        this.#a.dispatch({
          kind: "undo",
        });
      }
      redo() {
        this.#a.dispatch({
          kind: "redo",
        });
      }
      exportPresentationProto() {
        return this.requestExport({
          format: "proto",
        }).then((value) => value.presentationProto);
      }
      requestSlideThumbnail(cogPrime, discPrime) {
        return this.#_.then(() =>
          this.#a
            .request({
              kind: "slide-thumbnail",
              index: cogPrime,
              cssMaxPx: discPrime?.cssMaxPx,
              pixelRatio: discPrime?.pixelRatio,
            })
            .then((value) => {
              if (value.kind !== "slide-thumbnail")
                throw Error(`Unexpected thumbnail response: ${value.kind}`);
              return value.result;
            }),
        );
      }
      #C(edgePrime) {
        switch (edgePrime.kind) {
          case "crdt-update": {
            let forgePrime = new Uint8Array(edgePrime.update);
            for (let gearPrime of this.#n) gearPrime(forgePrime);
            return;
          }
          case "image-hydration-requests":
            this.#i = edgePrime.requests;
            for (let hingePrime of this.#r) hingePrime(edgePrime.requests);
            return;
          case "meta":
            this.#t.patch(edgePrime.state);
            return;
          case "navigation":
            this.#t.patch(edgePrime.state);
            return;
          case "selection":
            this.#t.patch(edgePrime.state);
            return;
          case "preview":
            this.#t.patch(edgePrime.state);
            return;
          case "viewport":
            this.#t.patch(edgePrime.state);
            return;
          case "viewport-resize-ready":
            if (this.#f !== edgePrime.resizeId || this.#d == null) return;
            this.#y(this.#d);
            this.#a.dispatch({
              kind: "commit-viewport-resize",
              resizeId: edgePrime.resizeId,
            });
            return;
          case "viewport-frame":
            this.#S(edgePrime);
            return;
          case "viewport-frame-presented":
            if (this.#f !== edgePrime.resizeId) return;
            this.#f = null;
            this.#y({
              width: edgePrime.width,
              height: edgePrime.height,
              dpr: edgePrime.dpr,
            });
            return;
          case "editor":
            this.#t.patch(edgePrime.state);
            return;
          case "comments":
            this.#t.patch(edgePrime.state);
            return;
          case "awareness":
            this.#t.patch(edgePrime.state);
            return;
          case "inspector":
            this.#t.patch(edgePrime.state);
            return;
          case "debug-log":
            RemoteTextEditSessionM(edgePrime.namespace).debug(
              edgePrime.message,
              edgePrime.details,
            );
            return;
          default:
            return edgePrime;
        }
      }
    };
  }),
  ultra = esmInit(() => {
    topaz();
  });
