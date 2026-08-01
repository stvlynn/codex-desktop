// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 12/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

// Wave5d soft stubs.
const $r: any = undefined;
const _t: any = undefined;
const alpha: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const drift: any = undefined;
const eagle: any = undefined;
const echo: any = undefined;
const glide: any = undefined;
const honey: any = undefined;
const joint: any = undefined;
const lagoon: any = undefined;
const moss: any = undefined;
const on: any = undefined;
const or: any = undefined;
const upland: any = undefined;
const vine: any = undefined;

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

var glen,
  hearth,
  inlet,
  jetty,
  knob,
  ledge,
  mire,
  nook = esmInit(() => {
    ensureComposerEsm_Tft_Init();
    glen = commonJsInit(react());
    vine();
    PopcornSurfaceStyle_V();
    popcornSurfaceStyle_E();
    popcornSurfaceStyle_I();
    or();
    popcornSurfaceStyle_I();
    RemoteTextEditSessionN();
    moss();
    upland();
    lagoon();
    inlet = {
      isPanelOpen: () => false,
      openPanel: () => {},
      closePanel: () => {},
      togglePanel: () => {},
    };
    jetty = 1;
    knob = 3;
    ledge = 6;
    mire = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    };
  }),
  oxbow,
  pond,
  quarry = esmInit(() => {
    PopcornSurfaceStyle_R();
    _t();
    moss();
    echo();
    oxbow = 1e-4;
    pond = class {
      #e;
      #t = false;
      #n = null;
      #r = null;
      #i = null;
      #a = null;
      #o = false;
      #s = false;
      #c = {
        width: 0,
        height: 0,
      };
      #l = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      };
      #u = {
        selectedSlideIdx: 0,
        selectedSlideFrame: null,
        zoom: 1,
        camera: null,
      };
      #d = null;
      #f = new Set();
      #p = {
        width: 0,
        height: 0,
        viewportInsets: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
      };
      constructor() {
        this.#e = new PopcornSurfaceStyle_V({
          enabled: true,
          initialCamera: {
            x: 0,
            y: 0,
            k: 1,
          },
          minZoom: 0.01,
          maxZoom: 64,
          getViewportSize: () => ({
            width: this.#c.width,
            height: this.#c.height,
          }),
          getWorldSize: () => {
            let domeThird = this.#v();
            return domeThird
              ? on({
                  viewport: {
                    width: this.#c.width,
                    height: this.#c.height,
                  },
                  frame: domeThird,
                  camera: this.#e.getCamera(),
                  viewportInsets: this.#l,
                }).worldSize
              : {
                  width: this.#c.width,
                  height: this.#c.height,
                };
          },
          requestDraw: () => {},
          clampCamera: (eddyThird) => {
            let fjordThird = this.#v();
            return fjordThird
              ? glide({
                  camera: eddyThird,
                  viewport: {
                    width: this.#c.width,
                    height: this.#c.height,
                  },
                  frame: fjordThird,
                  viewportInsets: this.#l,
                })
              : eddyThird;
          },
          onCameraSettled: (glenThird) => {
            let hearthThird = this.#v();
            hearthThird &&
              this.#d?.({
                camera: glenThird,
                zoom: honey({
                  camera: glenThird,
                  viewport: {
                    width: this.#c.width,
                    height: this.#c.height,
                  },
                  frame: hearthThird,
                  viewportInsets: this.#l,
                }),
              });
          },
        });
      }
      start() {
        this.#t ||
          ((this.#t = true),
          alpha().then(() => {
            this.#t && ((this.#o = true), this.scheduleLayoutSync());
          }));
      }
      attachHost(inletThird) {
        this.#n !== inletThird &&
          (this.#h(),
          (this.#n = inletThird),
          this.#e.attach(inletThird),
          inletThird &&
            (typeof ResizeObserver < "u" &&
              ((this.#r = new ResizeObserver((jettyThird) => {
                let knobThird = jettyThird[0];
                this.scheduleLayoutSync(
                  knobThird ? delta(inletThird, knobThird) : null,
                );
              })),
              this.#r.observe(inletThird)),
            window.addEventListener("resize", this.#m),
            this.scheduleLayoutSync()));
      }
      getCamera() {
        return this.#e.getCamera();
      }
      hasInitializedCamera() {
        return this.#s;
      }
      subscribeToCameraChanges(ledgeThird) {
        return this.#e.subscribeToCameraChanges(ledgeThird);
      }
      subscribeToLayoutChanges(mireThird) {
        return (
          this.#f.add(mireThird),
          () => {
            this.#f.delete(mireThird);
          }
        );
      }
      getLayoutSnapshot() {
        return this.#p;
      }
      zoomTo(nookThird, oxbowThird) {
        let pondThird = this.#v();
        if (!pondThird) return;
        let quarryThird = drift({
          viewport: {
            width: this.#c.width,
            height: this.#c.height,
          },
          frame: pondThird,
          zoomFactor: nookThird,
          viewportInsets: this.#l,
        });
        this.#e.zoomTo(quarryThird.k, oxbowThird);
      }
      fitToViewport(rapidsThird = 1) {
        let spurThird = this.#v();
        spurThird &&
          this.#e.setCamera(
            drift({
              viewport: {
                width: this.#c.width,
                height: this.#c.height,
              },
              frame: spurThird,
              zoomFactor: rapidsThird,
              viewportInsets: this.#l,
            }),
            {
              settled: true,
            },
          );
      }
      setOnCameraSettled(torThird) {
        this.#d = torThird;
      }
      setViewportInsets(updraftThird) {
        let vergeThird = this.#l;
        (vergeThird.left === updraftThird.left &&
          vergeThird.top === updraftThird.top &&
          vergeThird.right === updraftThird.right &&
          vergeThird.bottom === updraftThird.bottom) ||
          ((this.#l = {
            ...updraftThird,
          }),
          this.#_(),
          this.scheduleLayoutSync());
      }
      setViewState(weirThird) {
        let yardThird = this.#u;
        this.#u = weirThird;
        this.#y(yardThird, weirThird);
      }
      dispose() {
        this.#t = false;
        this.#i != null && (cancelAnimationFrame(this.#i), (this.#i = null));
        this.#h();
        this.#e.destroy();
      }
      scheduleLayoutSync(anchorThird) {
        anchorThird && (this.#a = anchorThird);
        this.#o &&
          (this.#i != null && cancelAnimationFrame(this.#i),
          (this.#i = requestAnimationFrame(() => {
            this.#i = null;
            this.#g();
          })));
      }
      #m = () => {
        this.scheduleLayoutSync();
      };
      #h() {
        this.#r &&= (this.#r.disconnect(), null);
        this.#n && window.removeEventListener("resize", this.#m);
        this.#n = null;
        this.#e.attach(null);
      }
      #g() {
        let boltThird = this.#n;
        if (!boltThird) return;
        let cogThird = this.#c,
          discThird = this.#a;
        this.#a = null;
        this.#c = copper(boltThird, discThird);
        this.#_();
        this.#y(this.#u, this.#u, {
          viewportChanged:
            cogThird.width !== this.#c.width ||
            cogThird.height !== this.#c.height,
          previousViewport: {
            width: cogThird.width,
            height: cogThird.height,
          },
        });
      }
      #_() {
        let edgeThird = this.#p,
          forgeThird = {
            width: this.#c.width,
            height: this.#c.height,
            viewportInsets: {
              ...this.#l,
            },
          };
        if (
          !(
            edgeThird.width === forgeThird.width &&
            edgeThird.height === forgeThird.height &&
            edgeThird.viewportInsets.left === forgeThird.viewportInsets.left &&
            edgeThird.viewportInsets.top === forgeThird.viewportInsets.top &&
            edgeThird.viewportInsets.right ===
              forgeThird.viewportInsets.right &&
            edgeThird.viewportInsets.bottom === forgeThird.viewportInsets.bottom
          )
        ) {
          this.#p = forgeThird;
          for (let gearThird of this.#f) gearThird();
        }
      }
      #v() {
        return this.#u.selectedSlideFrame;
      }
      #y(hingeThird, ironThird, jointThird) {
        let keystoneThird = ironThird.selectedSlideFrame;
        if (!keystoneThird || this.#c.width <= 0 || this.#c.height <= 0) return;
        let latchThird = jointThird?.viewportChanged ?? false,
          motorThird = {
            width: this.#c.width,
            height: this.#c.height,
          };
        if (latchThird && this.#s) {
          this.#e.setCamera(
            Math.abs(ironThird.zoom - 1) < oxbow
              ? drift({
                  viewport: motorThird,
                  frame: keystoneThird,
                  zoomFactor: ironThird.zoom,
                  viewportInsets: this.#l,
                })
              : eagle({
                  previousViewport: jointThird?.previousViewport ?? motorThird,
                  nextViewport: motorThird,
                  frame: keystoneThird,
                  camera: this.#e.getCamera(),
                  viewportInsets: this.#l,
                }),
          );
          return;
        }
        if (ironThird.camera) {
          let nutThird = drift({
              viewport: motorThird,
              frame: keystoneThird,
              zoomFactor: ironThird.zoom,
              viewportInsets: this.#l,
            }).k,
            pistonThird = honey({
              camera: ironThird.camera,
              viewport: motorThird,
              frame: keystoneThird,
              viewportInsets: this.#l,
            });
          this.#e.setCamera(ironThird.camera);
          (!this.#s || Math.abs(hingeThird.zoom - ironThird.zoom) > 1e-4) &&
            Math.abs(pistonThird - ironThird.zoom) > 1e-4 &&
            this.#e.zoomTo(nutThird, {
              settled: true,
            });
          this.#s = true;
          return;
        }
        (!this.#s ||
          hingeThird.selectedSlideIdx !== ironThird.selectedSlideIdx ||
          hingeThird.selectedSlideFrame?.width !==
            ironThird.selectedSlideFrame?.width ||
          hingeThird.selectedSlideFrame?.height !==
            ironThird.selectedSlideFrame?.height) &&
          (this.#e.setCamera(
            drift({
              viewport: motorThird,
              frame: keystoneThird,
              zoomFactor: ironThird.zoom,
              viewportInsets: this.#l,
            }),
            {
              settled: true,
            },
          ),
          (this.#s = true));
      }
    };
  }),
  rapids = esmInit(() => {});
function spur(rivetThird, screwThird) {
  return screwThird === "floating"
    ? "w-full flex-row gap-2 @[749px]/presentation-editor:w-fit"
    : rivetThird === "left"
      ? "w-fit flex-row"
      : rivetThird === "bottom"
        ? "w-fit flex-col"
        : "w-fit flex-col @[749px]/presentation-editor:flex-row";
}
function tor(torqueThird, valveThird) {
  return valveThird === "floating" || torqueThird === "left"
    ? "block"
    : torqueThird === "bottom"
      ? "hidden"
      : "hidden @[749px]/presentation-editor:block";
}
function updraft(axleThird, bracketThird) {
  return bracketThird === "floating"
    ? "w-full flex-col items-start gap-2 @[749px]/presentation-editor:h-fit @[749px]/presentation-editor:min-h-full @[749px]/presentation-editor:w-full @[749px]/presentation-editor:items-center @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:justify-[safe_center]"
    : axleThird === "left"
      ? "h-fit min-h-full w-full flex-col items-center gap-2.5 justify-[safe_center]"
      : axleThird === "bottom"
        ? "w-fit gap-6"
        : "w-fit gap-6 @[749px]/presentation-editor:h-fit @[749px]/presentation-editor:min-h-full @[749px]/presentation-editor:w-full @[749px]/presentation-editor:flex-col @[749px]/presentation-editor:items-center @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:justify-[safe_center]";
}
function verge(clampThird) {
  return clampThird === "floating" ? "w-full" : "w-40";
}
function weir(drillThird) {
  return drillThird === "floating"
    ? "shrink-0 pt-0.5 font-normal tabular-nums"
    : "pt-0.5 text-sm font-semibold";
}
function yard(engineThird, frameThird) {
  return engineThird <= 0
    ? 0
    : engineThird + $r + (frameThird === "codex" ? 0 : joint);
}
function anchor(gasketThird, handleThird, insertThird) {
  let jacketThird = [...gasketThird],
    [knurlThird] = jacketThird.splice(handleThird, 1);
  return (
    knurlThird == null || jacketThird.splice(insertThird, 0, knurlThird),
    jacketThird
  );
}
