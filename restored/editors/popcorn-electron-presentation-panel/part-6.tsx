// Restored from ref/webview/assets/PopcornElectronPresentationPanel-B28phSkk.js
// Wave FZ — full polished body from `PopcornElectronPresentationPanel-B28phSkk/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 106/111).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 6/16
/* split-lane-import-depth:1 */

import type { ReactElement, ReactNode } from "react";

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

function vapor(ironPrime) {
  let jointPrime = [],
    keystonePrime = [];
  for (let latchPrime of ironPrime) {
    jointPrime.push(...(latchPrime.panels ?? []));
    keystonePrime.push(...(latchPrime.stageOverlays ?? []));
  }
  return {
    panels: jointPrime,
    stageOverlays: keystonePrime,
  };
}
var wheat = esmInit(() => {});
function $t(motorPrime, nutPrime) {
  let pistonPrime = Math.max(0, nutPrime?.left ?? 0),
    rivetPrime = Math.max(0, nutPrime?.top ?? 0),
    screwPrime = Math.max(0, nutPrime?.right ?? 0),
    torquePrime = Math.max(0, nutPrime?.bottom ?? 0);
  return {
    left: pistonPrime,
    top: rivetPrime,
    right: screwPrime,
    bottom: torquePrime,
    width: Math.max(1, motorPrime.width - pistonPrime - screwPrime),
    height: Math.max(1, motorPrime.height - rivetPrime - torquePrime),
  };
}
function yarn(valvePrime) {
  return {
    x: Math.max(240, valvePrime.width),
    y: Math.max(180, valvePrime.height),
  };
}
function zephyr(axlePrime, bracketPrime, clampPrime, drillPrime) {
  let enginePrime = $t(bracketPrime, drillPrime),
    framePrime = popcornSurfaceStyle_lt(
      {
        ...axlePrime,
        x: axlePrime.x - enginePrime.left,
        y: axlePrime.y - enginePrime.top,
      },
      {
        width: enginePrime.width,
        height: enginePrime.height,
      },
      clampPrime,
    ),
    gasketPrime = Math.max(0, clampPrime.width) * framePrime.k,
    handlePrime = Math.max(0, clampPrime.height) * framePrime.k;
  return {
    ...framePrime,
    x:
      gasketPrime <= enginePrime.width
        ? enginePrime.left + (enginePrime.width - gasketPrime) / 2
        : enginePrime.left + framePrime.x,
    y:
      handlePrime <= enginePrime.height
        ? enginePrime.top + (enginePrime.height - handlePrime) / 2
        : enginePrime.top + framePrime.y,
  };
}
function acorn(insertPrime, jacketPrime = 1) {
  let knurlPrime = Math.max(jacketPrime, lunar);
  return Math.min(4 / knurlPrime, Math.max(knoll / knurlPrime, insertPrime));
}
function bloom(leverPrime) {
  return Math.min(4, Math.max(knoll, leverPrime));
}
function coral(mountPrime, nozzlePrime, platenPrime) {
  let ratchetPrime = $t(mountPrime, platenPrime),
    shimPrime = Math.max(1, ratchetPrime.width - jewel * 2),
    tappetPrime = Math.max(1, ratchetPrime.height - jewel * 2);
  return Math.max(
    lunar,
    Math.min(
      shimPrime / Math.max(nozzlePrime.width, 1),
      tappetPrime / Math.max(nozzlePrime.height, 1),
    ),
  );
}
function on(arborPrime) {
  let bushingPrime = yarn(arborPrime.viewport),
    collarPrime = {
      x: bushingPrime.x,
      y: bushingPrime.y,
    },
    dowelPrime = {
      width: arborPrime.frame.width + bushingPrime.x * 2,
      height: arborPrime.frame.height + bushingPrime.y * 2,
    },
    flangePrime = popcornSurfaceStyle_O(
      arborPrime.camera,
      collarPrime.x,
      collarPrime.y,
    ),
    gibPrime = coral(
      arborPrime.viewport,
      arborPrime.frame,
      arborPrime.viewportInsets,
    );
  return {
    fitScale: gibPrime,
    zoomFactor: arborPrime.camera.k / Math.max(gibPrime, 2.220446049250313e-16),
    worldSize: dowelPrime,
    slideOrigin: collarPrime,
    slideRect: {
      left: flangePrime.x,
      top: flangePrime.y,
      width: arborPrime.frame.width * arborPrime.camera.k,
      height: arborPrime.frame.height * arborPrime.camera.k,
      scale: arborPrime.camera.k,
    },
  };
}
function drift(hubPrime) {
  let idlerPrime = coral(
      hubPrime.viewport,
      hubPrime.frame,
      hubPrime.viewportInsets,
    ),
    jigPrime = acorn(hubPrime.zoomFactor ?? 1, idlerPrime),
    keeperPrime = on({
      viewport: hubPrime.viewport,
      frame: hubPrime.frame,
      camera: {
        x: 0,
        y: 0,
        k: idlerPrime * jigPrime,
      },
      viewportInsets: hubPrime.viewportInsets,
    }),
    lugPrime = $t(hubPrime.viewport, hubPrime.viewportInsets),
    mandrelPrime = keeperPrime.slideOrigin.x + hubPrime.frame.width / 2,
    nipplePrime = keeperPrime.slideOrigin.y + hubPrime.frame.height / 2;
  return zephyr(
    {
      k: idlerPrime * jigPrime,
      x:
        lugPrime.left +
        lugPrime.width / 2 -
        mandrelPrime * idlerPrime * jigPrime,
      y:
        lugPrime.top +
        lugPrime.height / 2 -
        nipplePrime * idlerPrime * jigPrime,
    },
    hubPrime.viewport,
    keeperPrime.worldSize,
    hubPrime.viewportInsets,
  );
}
function eagle(orificePrime) {
  if (
    orificePrime.previousViewport.width <= 0 ||
    orificePrime.previousViewport.height <= 0 ||
    orificePrime.nextViewport.width <= 0 ||
    orificePrime.nextViewport.height <= 0 ||
    orificePrime.camera.k <= 0
  )
    return frost({
      camera: orificePrime.camera,
      viewport: orificePrime.nextViewport,
      frame: orificePrime.frame,
      viewportInsets: orificePrime.viewportInsets,
    });
  let pinPrime = $t(orificePrime.previousViewport, orificePrime.viewportInsets),
    racePrime = $t(orificePrime.nextViewport, orificePrime.viewportInsets),
    sleevePrime = on({
      viewport: orificePrime.previousViewport,
      frame: orificePrime.frame,
      camera: orificePrime.camera,
      viewportInsets: orificePrime.viewportInsets,
    }),
    trunnionPrime = {
      x: pinPrime.left + pinPrime.width / 2,
      y: pinPrime.top + pinPrime.height / 2,
    },
    bossPrime = {
      x:
        (trunnionPrime.x - sleevePrime.slideRect.left) /
        Math.max(orificePrime.camera.k, 2.220446049250313e-16),
      y:
        (trunnionPrime.y - sleevePrime.slideRect.top) /
        Math.max(orificePrime.camera.k, 2.220446049250313e-16),
    },
    camPrime = on({
      viewport: orificePrime.nextViewport,
      frame: orificePrime.frame,
      camera: {
        x: 0,
        y: 0,
        k: orificePrime.camera.k,
      },
      viewportInsets: orificePrime.viewportInsets,
    }),
    detentPrime = {
      x: racePrime.left + racePrime.width / 2,
      y: racePrime.top + racePrime.height / 2,
    };
  return frost({
    camera: {
      k: orificePrime.camera.k,
      x:
        detentPrime.x -
        (camPrime.slideOrigin.x + bossPrime.x) * orificePrime.camera.k,
      y:
        detentPrime.y -
        (camPrime.slideOrigin.y + bossPrime.y) * orificePrime.camera.k,
    },
    viewport: orificePrime.nextViewport,
    frame: orificePrime.frame,
    viewportInsets: orificePrime.viewportInsets,
  });
}
function frost(eccentricPrime) {
  let followerPrime = on({
    viewport: eccentricPrime.viewport,
    frame: eccentricPrime.frame,
    camera: eccentricPrime.camera,
    viewportInsets: eccentricPrime.viewportInsets,
  });
  return zephyr(
    eccentricPrime.camera,
    eccentricPrime.viewport,
    followerPrime.worldSize,
    eccentricPrime.viewportInsets,
  );
}
function glide(guidePrime) {
  let helixPrime = {
      ...guidePrime.camera,
      k: bloom(guidePrime.camera.k),
    },
    impellerPrime = on({
      viewport: guidePrime.viewport,
      frame: guidePrime.frame,
      camera: helixPrime,
      viewportInsets: guidePrime.viewportInsets,
    });
  return zephyr(
    helixPrime,
    guidePrime.viewport,
    impellerPrime.worldSize,
    guidePrime.viewportInsets,
  );
}
function honey(journalPrime) {
  let kingpinPrime = coral(
    journalPrime.viewport,
    journalPrime.frame,
    journalPrime.viewportInsets,
  );
  return acorn(
    journalPrime.camera.k / Math.max(kingpinPrime, 2.220446049250313e-16),
    kingpinPrime,
  );
}
function iris(landPrime) {
  let meshPrime = on({
      viewport: landPrime.viewport,
      frame: landPrime.frame,
      camera: landPrime.camera,
      viewportInsets: landPrime.viewportInsets,
    }),
    neckPrime = popcornSurfaceStyle_F(
      landPrime.camera,
      landPrime.viewportX,
      landPrime.viewportY,
    );
  return {
    x: neckPrime.x - meshPrime.slideOrigin.x,
    y: neckPrime.y - meshPrime.slideOrigin.y,
  };
}
var jewel,
  knoll,
  lunar,
  moss = esmInit(() => {
    popcornSurfaceStyle_E();
    jewel = 48;
    knoll = 0.1;
    lunar = 0.05;
  }),
  _n,
  north,
  orbit = esmInit(() => {
    _n = commonJsInit(react());
    north = _n.createContext(null);
  });
function Pine({ controller, children }) {
  return (
    <north.Provider
      {...{
        value: controller,
        children,
      }}
    />
  );
}
var quest,
  ridge = esmInit(() => {
    orbit();
  }),
  storm = esmInit(() => {
    react();
  });
function tide(padPrime, quillshaftPrime) {
  return (
    padPrime.presentationVersion === quillshaftPrime.presentationVersion &&
    padPrime.selectedSlideIdx === quillshaftPrime.selectedSlideIdx &&
    padPrime.slideIds === quillshaftPrime.slideIds &&
    padPrime.slideLabels === quillshaftPrime.slideLabels &&
    padPrime.slideCount === quillshaftPrime.slideCount &&
    padPrime.zoom === quillshaftPrime.zoom &&
    padPrime.fitScale === quillshaftPrime.fitScale &&
    padPrime.selectedSlideFrame === quillshaftPrime.selectedSlideFrame &&
    padPrime.selectedSlideElementTargets ===
      quillshaftPrime.selectedSlideElementTargets &&
    padPrime.hyperlinkTargets === quillshaftPrime.hyperlinkTargets &&
    padPrime.selectedElementIds === quillshaftPrime.selectedElementIds &&
    padPrime.primarySelectedElementId ===
      quillshaftPrime.primarySelectedElementId &&
    padPrime.activeInteractionKind === quillshaftPrime.activeInteractionKind &&
    padPrime.notesText === quillshaftPrime.notesText &&
    padPrime.canUndo === quillshaftPrime.canUndo &&
    padPrime.canRedo === quillshaftPrime.canRedo &&
    padPrime.slideRect === quillshaftPrime.slideRect &&
    padPrime.textLayoutBlocks === quillshaftPrime.textLayoutBlocks &&
    padPrime.textEditState === quillshaftPrime.textEditState &&
    padPrime.inspector === quillshaftPrime.inspector &&
    padPrime.commentThreads === quillshaftPrime.commentThreads &&
    padPrime.camera === quillshaftPrime.camera
  );
}
function unity(rollerPrime, spindlePrime) {
  return (
    rollerPrime.presentationVersion === spindlePrime.presentationVersion &&
    rollerPrime.selectedSlideIdx === spindlePrime.selectedSlideIdx &&
    rollerPrime.slideIds === spindlePrime.slideIds &&
    rollerPrime.slideLabels === spindlePrime.slideLabels &&
    rollerPrime.slideCount === spindlePrime.slideCount &&
    rollerPrime.notesText.trim().length > 0 ==
      spindlePrime.notesText.trim().length > 0 &&
    rollerPrime.zoom === spindlePrime.zoom &&
    rollerPrime.fitScale === spindlePrime.fitScale &&
    rollerPrime.slideRect?.scale === spindlePrime.slideRect?.scale
  );
}
function vale(thrustPrime, yokePrime) {
  return (
    thrustPrime.presentationVersion === yokePrime.presentationVersion &&
    thrustPrime.selectedSlideIdx === yokePrime.selectedSlideIdx &&
    thrustPrime.zoom === yokePrime.zoom &&
    thrustPrime.fitScale === yokePrime.fitScale &&
    thrustPrime.selectedSlideFrame === yokePrime.selectedSlideFrame &&
    thrustPrime.selectedSlideElementTargets ===
      yokePrime.selectedSlideElementTargets &&
    thrustPrime.hyperlinkTargets === yokePrime.hyperlinkTargets &&
    thrustPrime.selectedElementIds === yokePrime.selectedElementIds &&
    thrustPrime.primarySelectedElementId ===
      yokePrime.primarySelectedElementId &&
    thrustPrime.activeInteractionKind === yokePrime.activeInteractionKind &&
    thrustPrime.slideRect === yokePrime.slideRect &&
    thrustPrime.textLayoutBlocks === yokePrime.textLayoutBlocks &&
    thrustPrime.textEditState === yokePrime.textEditState &&
    thrustPrime.inspector === yokePrime.inspector &&
    thrustPrime.commentThreads === yokePrime.commentThreads &&
    thrustPrime.camera === yokePrime.camera
  );
}
function wave(bafflePrime, capstanPrime) {
  return bafflePrime.notesText === capstanPrime.notesText;
}
function apex(diaphragmPrime, elbowPrime) {
  return (
    diaphragmPrime.selectedElementIds === elbowPrime.selectedElementIds &&
    diaphragmPrime.primarySelectedElementId ===
      elbowPrime.primarySelectedElementId &&
    diaphragmPrime.inspector === elbowPrime.inspector
  );
}
function brook(ferrulePrime, grommetPrime) {
  let headerPrime = hill.useRef(ferrulePrime.getSnapshot()),
    injectorPrime = hill.useCallback(() => {
      let jumperPrime = ferrulePrime.getSnapshot(),
        kerfPrime = headerPrime.current;
      return grommetPrime(kerfPrime, jumperPrime)
        ? kerfPrime
        : ((headerPrime.current = jumperPrime), jumperPrime);
    }, [grommetPrime, ferrulePrime]);
  return hill.useSyncExternalStore(
    (louverPrime) => ferrulePrime.subscribe(louverPrime),
    injectorPrime,
    injectorPrime,
  );
}
function cliff(manifoldPrime) {
  return fern(manifoldPrime, "shell");
}
function dusk(nipPrime) {
  return fern(nipPrime, "stage");
}
function elm(outletPrime) {
  return fern(outletPrime, "notes");
}
function fern(packingPrime, reducerPrime) {
  return brook(packingPrime, grove(reducerPrime));
}
function grove(strainerPrime) {
  switch (strainerPrime) {
    case "shell":
      return unity;
    case "stage":
      return vale;
    case "notes":
      return wave;
    case "inspector":
      return apex;
    default:
      return tide;
  }
}
var hill,
  isle = esmInit(() => {
    hill = commonJsInit(react());
  }),
  juniper = esmInit(() => {
    react();
  }),
  lagoon = esmInit(() => {
    ridge();
    storm();
    isle();
    juniper();
  });
function Meadow({ notesHeight, minHeight = 80, setNotesHeight }) {
  let teePrime = nest.useRef(null),
    unionPrime = nest.useRef(notesHeight),
    ventPrime = nest.useRef(0),
    wyePrime = (event) => {
      teePrime.current = event.pointerId;
      unionPrime.current = notesHeight;
      ventPrime.current = event.clientY;
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {}
    },
    zenerPrime = (event) => {
      if (teePrime.current !== event.pointerId) return;
      let bravoSecond = event.clientY - ventPrime.current;
      if (unionPrime.current === 0) {
        -bravoSecond >= quiet && setNotesHeight(Math.max(minHeight, quiet));
        return;
      }
      let copperSecond = Math.max(0, unionPrime.current - bravoSecond);
      if (copperSecond < petal) {
        setNotesHeight(0);
        return;
      }
      setNotesHeight(Math.max(minHeight, copperSecond));
    },
    alphaSecond = (event) => {
      if (teePrime.current === event.pointerId) {
        if (event.currentTarget.hasPointerCapture?.(event.pointerId))
          try {
            event.currentTarget.releasePointerCapture(event.pointerId);
          } catch {}
        teePrime.current = null;
      }
    };
  return (
    <div
      onPointerDown={wyePrime}
      onPointerMove={zenerPrime}
      onPointerUp={alphaSecond}
      onPointerCancel={alphaSecond}
      className="mx-auto h-2 w-9 cursor-row-resize select-none"
      data-testid="popcorn-presentation-notes-resize"
    >
      <div className="h-[3px] w-full rounded bg-gray-300" />
    </div>
  );
}
var nest,
  oak,
  petal,
  quiet,
  rain = esmInit(() => {
    nest = commonJsInit(react());
    petal = 40;
    quiet = 20;
  });
