// Restored from ref/webview/assets/codex-micro-mini-game-composer-BoiUM7yg.js
// Wave FY — full polished body from `codex-micro-mini-game-composer-BoiUM7yg/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 7 (verified 26/33).
// Careful split 1/2 — lane B: canvas host + asteroids composer
/* split-lane-import-depth:1 */

import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  buildMiniGameThreadSlots,
  pickRandomMiniGame,
} from "../../desktop/codex-micro-mini-games";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import {
  findSidebarSectionElement,
  writeScrollTop,
} from "../../navigation/app-action-dom";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";

// Cross-part stubs.
const _e: any = undefined;
const be: any = undefined;
const quartz: any = undefined;
const quill: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;

function reef(roller) {
  return 1 - (1 - roller) ** 3;
}
function sage(spindle, thrust) {
  return `${thrust}px ${getComputedStyle(spindle).fontFamily}`;
}
function topaz(yoke, baffle, capstan, diaphragm, elbow) {
  yoke.fillStyle = getComputedStyle(baffle).color;
  yoke.globalAlpha = 0.5 * diaphragm;
  yoke.font = sage(baffle, 11);
  yoke.textAlign = "left";
  yoke.textBaseline = "alphabetic";
  yoke.fillText(
    `${String(capstan).padStart(5, "0")}${elbow == null ? "" : `  ${elbow}`}`,
    8,
    176,
  );
}
var ultra = esmInit(() => {});
function CodexMicroMiniGameComposerHelper26(ferrule) {
  let { onFrame, onResize, playing = true, reducedMotion } = ferrule,
    grommet = wheat.useRef(null),
    injector = wheat.useEffectEvent(onFrame),
    jumper = wheat.useEffectEvent(onResize),
    kerf = usePrefersReducedMotion(),
    louver = reducedMotion ?? kerf,
    manifold = playing && !louver,
    nip = false;
  if (playing) {
    let vent;
    vent = louver
      ? {
          opacity: 0,
        }
      : {
          height: 0,
          opacity: 0,
        };
    nip = vent;
  }
  let outlet = () => {
    let wye = grommet.current,
      zener = wye?.getContext("2d");
    if (wye == null || zener == null) return;
    let alphaPrime = 0,
      bravoPrime = null,
      copperPrime = new ResizeObserver(() => {
        let echoPrime = wye.clientWidth;
        if (echoPrime <= 0) return;
        let falconPrime = window.devicePixelRatio;
        wye.width = Math.round(echoPrime * falconPrime);
        wye.height = Math.round(192 * falconPrime);
        zener.setTransform(falconPrime, 0, 0, falconPrime, 0, 0);
        jumper(zener, wye, echoPrime, manifold);
      });
    copperPrime.observe(wye);
    let deltaPrime = (gammaPrime) => {
      let harborPrime =
        bravoPrime == null ? 0 : (gammaPrime - bravoPrime) / 1e3;
      bravoPrime = gammaPrime;
      injector(zener, wye, harborPrime, gammaPrime) &&
        (alphaPrime = window.requestAnimationFrame(deltaPrime));
    };
    return (
      playing && (alphaPrime = window.requestAnimationFrame(deltaPrime)),
      () => {
        copperPrime.disconnect();
        window.cancelAnimationFrame(alphaPrime);
      }
    );
  };
  let packing;
  packing = [manifold, playing];
  wheat.useEffect(outlet, packing);
  let reducer = {
    height: 192,
    opacity: 1,
  };
  let strainer = louver ? 0.12 : zephyr,
    tee = {
      duration: strainer,
      ease: acorn,
    };
  let union = (
    <canvas
      ref={grommet}
      aria-hidden={true}
      className="pointer-events-none block h-48 w-full text-token-text-secondary"
    />
  );
  return (
    <ensureIntlFormattersInit.div
      {...{
        initial: nip,
        animate: reducer,
        className: "w-full overflow-hidden",
        "data-feature": "game-surface",
        transition: tee,
        children: union,
      }}
    />
  );
}
var vapor,
  wheat,
  yarn,
  zephyr,
  acorn,
  bloom = esmInit(() => {
    vapor = reactCompilerRuntime();
    useBrowserExtensionPluginSetupQuery();
    wheat = commonJsInit(react(), 1);
    ensureClientCoordinationServiceInit();
    ultra();
    zephyr = 0.28;
    acorn = [0.23, 1, 0.32, 1];
  });
function CodexMicroMiniGameComposerHelper27(indigoPrime) {
  let { playing = true, reducedMotion, level, onExit } = indigoPrime,
    jadePrime = eagle.useRef(null),
    kitePrime,
    lemonPrime;
  kitePrime = () => {
    let slatePrime = jadePrime.current;
    !playing &&
      slatePrime != null &&
      _e(slatePrime, {
        angle: 0,
        distance: 0,
      });
  };
  lemonPrime = [playing];
  eagle.useEffect(kitePrime, lemonPrime);
  let marblePrime;
  marblePrime = (timberPrime) => {
    let { event } = timberPrime,
      umbraPrime = jadePrime.current;
    umbraPrime != null && _e(umbraPrime, event);
  };
  writeScrollTop("codex-micro-joystick-event", marblePrime);
  let nickelPrime;
  nickelPrime = (violetPrime) => {
    let { event } = violetPrime,
      willowPrime = jadePrime.current;
    willowPrime != null && pickRandomMiniGame(event) && river(willowPrime);
  };
  writeScrollTop("codex-micro-hid-event", nickelPrime);
  let onyxPrime = function (xenonPrime, yellowPrime, zincPrime, amberPrime) {
    jadePrime.current == null
      ? (jadePrime.current = quartz({
          animateEntrance: amberPrime,
          height: 192,
          level,
          width: zincPrime,
        }))
      : (jadePrime.current.width !== zincPrime ||
          jadePrime.current.height !== 192) &&
        timber(jadePrime.current, {
          height: 192,
          width: zincPrime,
        });
    coral(xenonPrime, jadePrime.current, yellowPrime);
  };
  let pearlPrime = onyxPrime,
    quartzPrime = function (basaltPrime, cedarPrime, daisyPrime) {
      let emberPrime = jadePrime.current;
      return emberPrime == null
        ? true
        : (slate(emberPrime, daisyPrime),
          coral(basaltPrime, emberPrime, cedarPrime),
          emberPrime.status === "lost" ? (onExit(), false) : true);
    };
  let riverPrime = quartzPrime;
  return (
    <CodexMicroMiniGameComposerHelper26
      {...{
        onFrame: riverPrime,
        onResize: pearlPrime,
        playing: playing,
        reducedMotion,
      }}
    />
  );
}
function coral(flintPrime, garnetPrime, hazelPrime) {
  let ivoryPrime = getComputedStyle(hazelPrime).color,
    jasperPrime = reef(be(garnetPrime));
  flintPrime.clearRect(0, 0, garnetPrime.width, garnetPrime.height);
  flintPrime.fillStyle = ivoryPrime;
  flintPrime.font = sage(hazelPrime, garnetPrime.level.fontSize);
  flintPrime.textAlign = "center";
  flintPrime.textBaseline = "middle";
  for (let kelpPrime of garnetPrime.asteroids) {
    flintPrime.globalAlpha = (kelpPrime.bonus ? 0.85 : 0.55) * jasperPrime;
    flintPrime.fillText(kelpPrime.character, kelpPrime.x, kelpPrime.y);
  }
  flintPrime.globalAlpha = 0.95 * jasperPrime;
  for (let lotusPrime of garnetPrime.bullets) {
    flintPrime.beginPath();
    flintPrime.arc(
      lotusPrime.x,
      lotusPrime.y,
      lotusPrime.radius,
      0,
      Math.PI * 2,
    );
    flintPrime.fill();
  }
  topaz(flintPrime, hazelPrime, garnetPrime.score, jasperPrime);
  flintPrime.globalAlpha = 0.95 * jasperPrime;
  flintPrime.save();
  flintPrime.translate(garnetPrime.ship.x, garnetPrime.ship.y);
  flintPrime.rotate(garnetPrime.ship.angle * Math.PI * 2);
  flintPrime.beginPath();
  flintPrime.moveTo(9, 0);
  flintPrime.lineTo(-6, -5);
  flintPrime.lineTo(-3, 0);
  flintPrime.lineTo(-6, 5);
  flintPrime.closePath();
  flintPrime.fill();
  flintPrime.restore();
  flintPrime.globalAlpha = 1;
}
var drift,
  eagle,
  frost,
  glide = esmInit(() => {
    drift = reactCompilerRuntime();
    eagle = commonJsInit(react(), 1);
    findSidebarSectionElement();
    quill();
    bloom();
    ultra();
    buildMiniGameThreadSlots();
  });
