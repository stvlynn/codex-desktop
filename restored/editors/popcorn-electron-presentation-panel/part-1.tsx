// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

// Wave5d soft stubs.
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;

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

/** Wave FZ unresolved companion (missing-export:desktop/deferred-desktop-ert.ts) */
const deferredDesktopErt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureD3ShapeStackOrderInit@workbook/ensure-d3-shape-stack-order-init.ts) */
const AppInitialHrt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredHostsRt@hosts/deferred-hosts-rt.ts) */
const AppInitialRt: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (sib-missing:editors/popcorn-electron-surface-style.ts) */
const popcornElectronSurfaceStyleUnderscore: any = undefined;
function alpha() {
  return (
    (bravo ??= Promise.all([
      RemoteTextEditSessionA(),
      Promise.resolve().then(() => {
        RemoteTextEditSessionChrome();
      }),
    ]).then(() => {})),
    bravo
  );
}
var bravo,
  _t = esmInit(() => {
    RemoteTextEditSessionLowerW();
    RemoteTextEditSessionS();
    bravo = null;
  });
function copper(nozzle, platen) {
  if (platen && platen.width > 0 && platen.height > 0)
    return {
      width: platen.width,
      height: platen.height,
    };
  let ratchet = nozzle.getBoundingClientRect();
  return {
    width: ratchet.width > 0 ? ratchet.width : nozzle.clientWidth,
    height: ratchet.height > 0 ? ratchet.height : nozzle.clientHeight,
  };
}
function delta(shim, tappet) {
  return copper(shim, {
    width: tappet.contentRect.width,
    height: tappet.contentRect.height,
  });
}
var echo = esmInit(() => {});
function falcon(arbor, bushing = daisy.canvas) {
  let collar = arbor.slides.add();
  return (
    collar.setViewportSize(basalt, cedar),
    (collar.background.fill = bushing),
    gamma(collar),
    collar
  );
}
function gamma(dowel) {
  for (let flange of [...dowel.shapes.items])
    flange.placeholderType && flange.delete();
}
function harbor(gib) {
  let hub = gib.slide.shapes.add({
    geometry: gib.geometry ?? "rect",
    position: {
      left: gib.left,
      top: gib.top,
      width: gib.width,
      height: gib.height,
    },
    fill: gib.fill,
    line: gib.radiusLine
      ? {
          style: "solid",
          fill: daisy.border,
          width: 1,
        }
      : undefined,
  });
  return (
    (hub.text = gib.text),
    (hub.text.fontSize = gib.fontSize ?? 16),
    (hub.text.color = gib.color ?? daisy.ink),
    (hub.text.bold = !!gib.bold),
    (hub.text.verticalAlignment = "middle"),
    hub
  );
}
function jade(idler, jig, keeper) {
  harbor({
    slide: idler,
    left: 72,
    top: 48,
    width: 620,
    height: 50,
    text: jig,
    fontSize: 30,
    bold: true,
  });
  harbor({
    slide: idler,
    left: 72,
    top: 100,
    width: 760,
    height: 32,
    text: keeper,
    fontSize: 14,
    color: daisy.muted,
  });
}
function kite(lug, mandrel, nipple, orifice, pin, race) {
  harbor({
    slide: lug,
    left: mandrel,
    top: nipple,
    width: orifice,
    height: 24,
    text: pin,
    fontSize: 14,
    bold: true,
  });
  harbor({
    slide: lug,
    left: mandrel,
    top: nipple + 22,
    width: orifice,
    height: 40,
    text: race,
    fontSize: 12,
    color: daisy.muted,
  });
}
function lemon(sleeve) {
  return sleeve.slide.shapes.add({
    geometry: "roundRect",
    position: {
      left: sleeve.left,
      top: sleeve.top,
      width: sleeve.width,
      height: sleeve.height,
    },
    fill: sleeve.fill ?? daisy.panel,
    line: {
      style: "solid",
      fill: daisy.border,
      width: 1,
    },
  });
}
function marble(trunnion, boss) {
  let cam = falcon(trunnion, "#F7FAFF"),
    detent = harbor({
      slide: cam,
      left: 72,
      top: 74,
      width: 520,
      height: 68,
      text: "Slides Feature Catalog",
      fontSize: 36,
      bold: true,
    });
  detent.text.get("Slides Feature Catalog").style = "title";
  harbor({
    slide: cam,
    left: 72,
    top: 150,
    width: 510,
    height: 72,
    text: "A presentation design-system deck built from the current Granola slide APIs: borders, fills, shapes, connectors, typography, tables, charts, and image treatments.",
    fontSize: 16,
    color: daisy.muted,
  });
  let eccentric = cam.images.add({
    dataUrl: boss,
    alt: "Popcorn slides catalog poster",
  });
  eccentric.position = {
    left: 706,
    top: 88,
    width: 500,
    height: 300,
  };
  eccentric.fit = "cover";
  let follower = lemon({
    slide: cam,
    left: 72,
    top: 300,
    width: 346,
    height: 208,
    fill: daisy.cloud,
  });
  follower.line.fill = daisy.blue;
  follower.line.width = 1;
  kite(
    cam,
    98,
    328,
    280,
    "Canvas-native editing",
    "The cover title is the first editable text box, so browser receipts can mutate and undo it without changing deck structure.",
  );
  let guide = lemon({
    slide: cam,
    left: 444,
    top: 300,
    width: 346,
    height: 208,
    fill: daisy.lavender,
  });
  guide.line.fill = daisy.violet;
  kite(
    cam,
    470,
    328,
    290,
    "Worker-first stage",
    "The stage renders as a centered world-view inside a full-viewport canvas, matching the workbook camera architecture.",
  );
  let helix = lemon({
    slide: cam,
    left: 816,
    top: 300,
    width: 390,
    height: 208,
    fill: daisy.mintTint,
  });
  helix.line.fill = daisy.mint;
  kite(
    cam,
    842,
    328,
    324,
    "Catalog fixture",
    "Every slide is a visual specimen that doubles as a deterministic editing corpus for tests, traces, and future agent workflows.",
  );
  cam.speakerNotes.text =
    "Cover slide: the presentation smoke edits this first title shape and watches the selected-slide label update.";
}
function nickel(impeller) {
  let journal = falcon(impeller);
  jade(
    journal,
    "Border styles",
    "Line styles and weights from the Granola shape API, arranged as a compact visual gallery.",
  );
  [
    {
      label: "Solid 1px",
      style: "solid",
      color: daisy.blue,
      width: 1,
    },
    {
      label: "Dashed 2px",
      style: "dashed",
      color: daisy.indigo,
      width: 2,
    },
    {
      label: "Dotted 2px",
      style: "dotted",
      color: daisy.cyan,
      width: 2,
    },
    {
      label: "Dash-dot 3px",
      style: "dash-dot",
      color: daisy.violet,
      width: 3,
    },
    {
      label: "Dash-dot-dot 3px",
      style: "dash-dot-dot",
      color: daisy.rose,
      width: 3,
    },
  ].forEach((item, index) => {
    let neck = 84 + index * 228,
      pad = journal.shapes.add({
        geometry: index % 2 == 0 ? "roundRect" : "rect",
        position: {
          left: neck,
          top: 188,
          width: 170,
          height: 118,
        },
        fill: daisy.panel,
        line: {
          style: item.style,
          fill: item.color,
          width: item.width,
        },
      });
    pad.text = item.label;
    pad.text.alignment = "center";
    pad.text.verticalAlignment = "middle";
    pad.text.fontSize = 16;
  });
  let kingpin = journal.shapes.add({
    geometry: "roundRect",
    position: {
      left: 130,
      top: 392,
      width: 1020,
      height: 190,
    },
    fill: "#F8FBFF",
    line: {
      style: "solid",
      fill: daisy.border,
      width: 1,
    },
  });
  kingpin.line.width = 1;
  harbor({
    slide: journal,
    left: 164,
    top: 426,
    width: 340,
    height: 44,
    text: "Mixed borders in one composition",
    fontSize: 20,
    bold: true,
  });
  harbor({
    slide: journal,
    left: 164,
    top: 474,
    width: 410,
    height: 66,
    text: "A larger composition helps validate stroke scaling, handle placement, and thumbnail rendering.",
    fontSize: 13,
    color: daisy.muted,
  });
  let land = journal.shapes.add({
    geometry: "roundRect",
    position: {
      left: 700,
      top: 434,
      width: 170,
      height: 70,
    },
    fill: "#ffffff",
    line: {
      style: "dash-dot",
      fill: daisy.violet,
      width: 2,
    },
  });
  land.text = "Dash-dot";
  land.text.alignment = "center";
  land.text.verticalAlignment = "middle";
  land.text.bold = true;
  let mesh = journal.shapes.add({
    geometry: "diamond",
    position: {
      left: 916,
      top: 418,
      width: 126,
      height: 102,
    },
    fill: "#ffffff",
    line: {
      style: "dotted",
      fill: daisy.cyan,
      width: 2,
    },
  });
  mesh.text = "Dotted";
  mesh.text.alignment = "center";
  mesh.text.verticalAlignment = "middle";
}
function onyx(quillshaft) {
  let roller = falcon(quillshaft, "#FBFBFE");
  jade(
    roller,
    "Fill styles",
    "Solid, linear gradient, path gradient, and pattern fills taken directly from the Granola fill configuration surface.",
  );
  let spindle = lemon({
    slide: roller,
    left: 86,
    top: 188,
    width: 240,
    height: 220,
  });
  spindle.fill = daisy.blue;
  spindle.line.fill = daisy.blue;
  kite(roller, 104, 422, 206, "Solid fill", "Theme/RGB-backed surface");
  let thrust = lemon({
    slide: roller,
    left: 368,
    top: 188,
    width: 240,
    height: 220,
  });
  thrust.fill = {
    type: "gradient",
    gradientKind: "linear",
    angleDeg: 30,
    stops: [
      {
        offset: 0,
        color: "#DBEAFE",
      },
      {
        offset: 1,
        color: "#2563EB",
      },
    ],
  };
  thrust.line.fill = daisy.blue;
  kite(roller, 386, 422, 206, "Linear gradient", "Two-stop diagonal blend");
  let yoke = lemon({
    slide: roller,
    left: 650,
    top: 188,
    width: 240,
    height: 220,
  });
  yoke.fill = {
    type: "gradient",
    gradientKind: "path",
    angleDeg: 135,
    stops: [
      {
        offset: 0,
        color: "#DDD6FE",
      },
      {
        offset: 1,
        color: "#7C3AED",
      },
    ],
  };
  yoke.line.fill = daisy.violet;
  kite(roller, 668, 422, 206, "Path gradient", "Centered radial emphasis");
  let baffle = lemon({
    slide: roller,
    left: 932,
    top: 188,
    width: 240,
    height: 220,
  });
  baffle.fill = {
    type: "solid",
    color: "#F8FAFC",
    pattern: {
      type: "lightGrid",
      color: daisy.indigo,
    },
  };
  baffle.line.fill = daisy.indigo;
  kite(roller, 950, 422, 206, "Pattern fill", "Light grid overlay");
  let capstan = roller.shapes.add({
    geometry: "roundRect",
    position: {
      left: 126,
      top: 510,
      width: 1020,
      height: 120,
    },
    fill: "#FFFFFF",
    line: {
      style: "solid",
      fill: daisy.border,
      width: 1,
    },
  });
  capstan.text =
    "Fill configs stay model-backed, which means the same gradient and pattern semantics show up consistently in thumbnails, worker rendering, exports, and future document/shared-object lanes.";
  capstan.text.fontSize = 20;
  capstan.text.color = daisy.ink;
}
function pearl(diaphragm) {
  return diaphragm
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/^gray(\d+)/i, "Gray $1")
    .replace(/^percent(\d+)/i, "$1%")
    .replace(/\b\w/g, (elbow) => elbow.toUpperCase());
}
function quartz(ferrule) {
  let grommet = falcon(ferrule, "#FBFBFE");
  jade(
    grommet,
    "Pattern gallery",
    "A dense catalog of pattern fills so rendering, centering, and zoom behavior can be inspected directly in one place.",
  );
  ember.forEach((item, index) => {
    let header = index % 8,
      injector = Math.floor(index / 8),
      jumper = 72 + header * 132,
      kerf = 164 + injector * 74,
      louver = harbor({
        slide: grommet,
        left: jumper,
        top: kerf,
        width: 112,
        height: 16,
        text: pearl(item.type),
        fontSize: 9,
        color: daisy.muted,
      });
    louver.text.alignment = "center";
    grommet.shapes.add({
      geometry: "roundRect",
      position: {
        left: jumper,
        top: kerf + 20,
        width: 112,
        height: 44,
      },
      fill: {
        type: "solid",
        color: "#F8FAFC",
        pattern: {
          type: item.type,
          color: item.color,
        },
      },
      line: {
        style: "solid",
        fill: daisy.border,
        width: 1,
      },
    });
  });
}
