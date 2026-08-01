// Restored from ref/webview/assets/codex-micro-mini-game-composer-BoiUM7yg.js
// Wave FY — full polished body from `codex-micro-mini-game-composer-BoiUM7yg/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 7 (verified 26/33).
// Careful split 2/2
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_F7_Init, ensureComposerEsm_MT_Init } from "../../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { conversationSurfaceStableId } from "../../conversation/conversation-surface-stable-id";
import { advanceMiniGameRotationGesture, buildMiniGameThreadSlots, clearActiveMiniGame, pickRandomMiniGame, registerMiniGameSurface } from "../../desktop/codex-micro-mini-games";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { HostCwdPathLabel } from "../../hosts/host-cwd-path-label";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { findSidebarSectionElement, writeScrollTop } from "../../navigation/app-action-dom";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { isTunAtomEqualToNS } from "../../shell/is-tun-atom-equal-to-ns";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";

// Cross-part stubs.
const $e: any = undefined;
const AppInitialBw: any = undefined;
const AppInitialFw: any = undefined;
const AppInitialGw: any = undefined;
const AppInitialWw: any = undefined;
const CodexMicroMiniGameComposerHelper26: any = undefined;
const CodexMicroMiniGameComposerHelper27: any = undefined;
const CodexMicroMiniGameComposerHelper46: any = undefined;
const DeferredUiN2: any = undefined;
const DeferredUiV2: any = undefined;
const alpha: any = undefined;
const bloom: any = undefined;
const bravo: any = undefined;
const composerScope: any = undefined;
const glide: any = undefined;
const harbor: any = undefined;
const lunar: any = undefined;
const pearl: any = undefined;
const petal: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;

function rain(anchorPrime, boltPrime, cogPrime) {
  let discPrime = getComputedStyle(cogPrime).color,
    edgePrime = reef(seed(($e(boltPrime) - 0.55) / 0.45, 0, 1));
  anchorPrime.clearRect(0, 0, boltPrime.width, boltPrime.height);
  anchorPrime.fillStyle = discPrime;
  anchorPrime.font = sage(cogPrime, boltPrime.level.fontSize);
  anchorPrime.textBaseline = "top";
  for (let forgePrime of boltPrime.glyphs) {
    let gearPrime = reef(lunar(boltPrime, forgePrime));
    anchorPrime.globalAlpha = (forgePrime.falling ? 0.7 : forgePrime.bonus ? 0.65 : 0.5) * gearPrime;
    anchorPrime.fillText(forgePrime.character, forgePrime.x, forgePrime.y + (1 - gearPrime) * wind);
  }
  topaz(anchorPrime, cogPrime, boltPrime.score, edgePrime, `×${Math.max(boltPrime.combo, 1)}`);
  anchorPrime.globalAlpha = 0.95 * edgePrime;
  anchorPrime.beginPath();
  anchorPrime.roundRect(boltPrime.paddle.x - boltPrime.paddle.width / 2, boltPrime.paddle.y - boltPrime.paddle.height / 2, boltPrime.paddle.width, boltPrime.paddle.height, boltPrime.paddle.height / 2);
  anchorPrime.fill();
  anchorPrime.globalAlpha = edgePrime;
  anchorPrime.shadowBlur = 10;
  anchorPrime.shadowColor = discPrime;
  anchorPrime.beginPath();
  anchorPrime.arc(boltPrime.ball.x, boltPrime.ball.y, boltPrime.ball.radius, 0, Math.PI * 2);
  anchorPrime.fill();
  anchorPrime.shadowBlur = 0;
  anchorPrime.globalAlpha = 1;
}
function seed(hingePrime, ironPrime, jointPrime) {
  return Math.min(Math.max(hingePrime, ironPrime), jointPrime);
}
var trail,
  urn,
  vine,
  wind,
  yarrow,
  azure,
  birch = esmInit(() => {
    trail = reactCompilerRuntime();
    urn = commonJsInit(react(), 1);
    findSidebarSectionElement();
    petal();
    bloom();
    ultra();
    wind = 8;
    yarrow = 0.8;
    azure = 600;
  });
function canyon(keystonePrime) {
  let latchPrime = (192 - quillow.inset * 2) / quillow.rows;
  return Math.max(6, Math.floor((keystonePrime - quillow.inset * 2) / latchPrime));
}
function dew({
  columns,
  level,
  random = Math.random,
  rows
}) {
  let motorPrime = {
      x: Math.floor(columns / 2),
      y: Math.floor(rows / 2)
    },
    nutPrime = {
      body: [motorPrime, {
        x: motorPrime.x - 1,
        y: motorPrime.y
      }, {
        x: motorPrime.x - 2,
        y: motorPrime.y
      }],
      columns,
      direction: "right",
      food: {
        bonus: false,
        character: "•",
        x: 0,
        y: 0
      },
      foodCollected: 0,
      foodGlyphs: maple(level),
      inputState: "waiting-for-neutral",
      nextDirection: "right",
      random,
      rows,
      score: 0,
      status: "playing",
      stepAccumulatorSeconds: 0
    };
  return leaf(nutPrime), nutPrime;
}
function ever(pistonPrime, rivetPrime) {
  if (pistonPrime.status !== "playing" || pistonPrime.inputState !== "moving") return;
  let screwPrime = plume(pistonPrime);
  pistonPrime.stepAccumulatorSeconds = Math.min(pistonPrime.stepAccumulatorSeconds + Math.max(0, rivetPrime), screwPrime);
  pistonPrime.stepAccumulatorSeconds >= screwPrime && (pistonPrime.stepAccumulatorSeconds = 0, ink(pistonPrime));
}
function field(torquePrime, valvePrime) {
  if (torquePrime.status !== "playing") return;
  if (torquePrime.inputState === "waiting-for-neutral") {
    valvePrime.distance < silk && (torquePrime.inputState = "waiting-for-direction");
    return;
  }
  let axlePrime = AppInitialWw(valvePrime, root);
  if (axlePrime != null) {
    if (axlePrime === torquePrime.nextDirection) {
      torquePrime.inputState = "moving";
      return;
    }
    nimbus(axlePrime, torquePrime.direction) || (torquePrime.inputState = "moving", torquePrime.nextDirection = axlePrime);
  }
}
function grain(bracketPrime, clampPrime) {
  bracketPrime.foodGlyphs = maple(clampPrime);
}
function haven(drillPrime, enginePrime) {
  if (enginePrime <= drillPrime.columns) return;
  let framePrime = Math.floor(enginePrime / 2) - Math.floor(drillPrime.columns / 2);
  drillPrime.columns = enginePrime;
  for (let gasketPrime of drillPrime.body) gasketPrime.x += framePrime;
  drillPrime.food.x += framePrime;
}
function ink(handlePrime) {
  handlePrime.direction = handlePrime.nextDirection;
  let insertPrime = jadeite(handlePrime);
  if (kernel(handlePrime, insertPrime)) {
    handlePrime.status = "lost";
    return;
  }
  let jacketPrime = opal(insertPrime, handlePrime.food);
  if (handlePrime.body.unshift(insertPrime), jacketPrime) {
    handlePrime.foodCollected += 1;
    handlePrime.score += bravo(handlePrime.food.bonus);
    leaf(handlePrime);
    return;
  }
  handlePrime.body.pop();
}
function jadeite(knurlPrime) {
  let leverPrime = knurlPrime.body[0];
  switch (knurlPrime.direction) {
    case "up":
      return {
        x: leverPrime.x,
        y: leverPrime.y - 1
      };
    case "right":
      return {
        x: leverPrime.x + 1,
        y: leverPrime.y
      };
    case "down":
      return {
        x: leverPrime.x,
        y: leverPrime.y + 1
      };
    case "left":
      return {
        x: leverPrime.x - 1,
        y: leverPrime.y
      };
  }
}
function kernel(mountPrime, nozzlePrime) {
  return nozzlePrime.x < 0 || nozzlePrime.x >= mountPrime.columns || nozzlePrime.y < 0 || nozzlePrime.y >= mountPrime.rows ? true : (opal(nozzlePrime, mountPrime.food) ? mountPrime.body : mountPrime.body.slice(0, -1)).some(item => opal(item, nozzlePrime));
}
function leaf(platenPrime) {
  let ratchetPrime = [];
  for (let tappetPrime = 0; tappetPrime < platenPrime.rows; tappetPrime += 1) for (let arborPrime = 0; arborPrime < platenPrime.columns; arborPrime += 1) platenPrime.body.some(item => item.x === arborPrime && item.y === tappetPrime) || ratchetPrime.push({
    x: arborPrime,
    y: tappetPrime
  });
  let shimPrime = ratchetPrime[Math.floor(platenPrime.random() * ratchetPrime.length)];
  shimPrime != null && (platenPrime.food = {
    ...(platenPrime.foodGlyphs[platenPrime.foodCollected % platenPrime.foodGlyphs.length] ?? {
      bonus: false,
      character: "•"
    }),
    ...shimPrime
  });
}
function maple(bushingPrime) {
  let collarPrime = bushingPrime.blocks.flatMap(item => item.glyphs).filter(harbor).map(({
    bonus,
    character
  }) => ({
    bonus,
    character
  }));
  return collarPrime.length > 0 ? collarPrime : [{
    bonus: false,
    character: "•"
  }];
}
function nimbus(dowelPrime, flangePrime) {
  switch (flangePrime) {
    case "up":
      return dowelPrime === "down";
    case "right":
      return dowelPrime === "left";
    case "down":
      return dowelPrime === "up";
    case "left":
      return dowelPrime === "right";
  }
}
function opal(gibPrime, hubPrime) {
  return gibPrime.x === hubPrime.x && gibPrime.y === hubPrime.y;
}
function plume(idlerPrime) {
  return Math.max(upland, thorn - idlerPrime.foodCollected * $t);
}
var quillow,
  root,
  silk,
  thorn,
  upland,
  $t,
  vista = esmInit(() => {
    AppInitialGw();
    ultra();
    pearl();
    quillow = {
      inset: 8,
      rows: 12
    };
    root = 0.65;
    silk = 0.35;
    thorn = 0.16;
    upland = 0.08;
    $t = 0.006;
  });
function CodexMicroMiniGameComposerHelper64({
  playing = true,
  reducedMotion,
  level,
  onExit
}) {
  let jigPrime = yonder.useRef(null);
  writeScrollTop("codex-micro-joystick-event", ({
    event
  }) => {
    let mandrelPrime = jigPrime.current;
    mandrelPrime != null && field(mandrelPrime, event);
  });
  yonder.useEffect(() => {
    let nipplePrime = jigPrime.current;
    nipplePrime != null && grain(nipplePrime, level);
  }, [level]);
  function keeperPrime(orificePrime, pinPrime, racePrime) {
    let sleevePrime = canyon(racePrime),
      trunnionPrime = jigPrime.current ??= dew({
        columns: sleevePrime,
        level,
        rows: quillow.rows
      });
    haven(trunnionPrime, sleevePrime);
    wisp(orificePrime, trunnionPrime, pinPrime, racePrime);
  }
  function lugPrime(bossPrime, camPrime, detentPrime) {
    let eccentricPrime = jigPrime.current;
    return eccentricPrime == null ? true : (ever(eccentricPrime, detentPrime), wisp(bossPrime, eccentricPrime, camPrime, camPrime.clientWidth), eccentricPrime.status === "playing" ? true : (onExit(), false));
  }
  return <CodexMicroMiniGameComposerHelper26 {...{
    onFrame: lugPrime,
    onResize: keeperPrime,
    playing,
    reducedMotion
  }} />;
}
function wisp(followerPrime, guidePrime, helixPrime, impellerPrime) {
  let journalPrime = Math.min((impellerPrime - quillow.inset * 2) / guidePrime.columns, (192 - quillow.inset * 2) / guidePrime.rows),
    kingpinPrime = (impellerPrime - journalPrime * guidePrime.columns) / 2,
    landPrime = (192 - journalPrime * guidePrime.rows) / 2,
    meshPrime = getComputedStyle(helixPrime).color;
  followerPrime.clearRect(0, 0, impellerPrime, 192);
  followerPrime.fillStyle = meshPrime;
  followerPrime.font = sage(helixPrime, Math.min(16, journalPrime * 0.9));
  followerPrime.textAlign = "center";
  followerPrime.textBaseline = "middle";
  followerPrime.globalAlpha = guidePrime.food.bonus ? 0.95 : 0.7;
  followerPrime.fillText(guidePrime.food.character, kingpinPrime + (guidePrime.food.x + 0.5) * journalPrime, landPrime + (guidePrime.food.y + 0.5) * journalPrime);
  followerPrime.shadowColor = meshPrime;
  for (let [neckPrime, padPrime] of guidePrime.body.entries()) {
    let quillshaftPrime = neckPrime === 0 ? 1 : 2;
    followerPrime.globalAlpha = Math.max(0.34, 0.92 - neckPrime * 0.06);
    followerPrime.shadowBlur = neckPrime === 0 ? 10 : 0;
    followerPrime.beginPath();
    followerPrime.roundRect(kingpinPrime + padPrime.x * journalPrime + quillshaftPrime, landPrime + padPrime.y * journalPrime + quillshaftPrime, journalPrime - quillshaftPrime * 2, journalPrime - quillshaftPrime * 2, Math.max(2, (journalPrime - quillshaftPrime * 2) / 3));
    followerPrime.fill();
  }
  followerPrime.shadowBlur = 0;
  topaz(followerPrime, helixPrime, guidePrime.score, 1);
  followerPrime.globalAlpha = 1;
  followerPrime.textAlign = "start";
}
var yonder,
  zenith,
  anvil = esmInit(() => {
    yonder = commonJsInit(react(), 1);
    findSidebarSectionElement();
    bloom();
    ultra();
    vista();
  });
export function CodexMicroMiniGameComposer(rollerPrime: unknown) {
  let {
      composerInput,
      conversationId,
      isSideChat,
      playing = true,
      showPendingRequest
    } = rollerPrime,
    spindlePrime = CodexPluginActionType(appScopeAtom),
    thrustPrime = CodexPluginActionType(HostCwdPathLabel),
    yokePrime = conversationSurfaceStableId(thrustPrime.value);
  let bafflePrime = yokePrime,
    capstanPrime = CodexBrowserSurfaceActionType(DeferredUiN2, conversationId),
    diaphragmPrime = CodexPluginActionResult(clearActiveMiniGame),
    {
      status
    } = CodexPluginActionResult(AppInitialFw),
    elbowPrime = diaphragmPrime?.composerId === bafflePrime,
    ferrulePrime = !isSideChat && !showPendingRequest && (status === "connected" || elbowPrime && status !== "not-detected"),
    grommetPrime = playing && status === "connected",
    headerPrime = function () {
      advanceMiniGameRotationGesture(spindlePrime);
    };
  let injectorPrime = headerPrime,
    jumperPrime,
    kerfPrime;
  if (jumperPrime = () => {
    if (ferrulePrime) return registerMiniGameSurface(bafflePrime, composerInput, () => {
      spindlePrime.get(clearActiveMiniGame)?.composerId === bafflePrime && advanceMiniGameRotationGesture(spindlePrime);
    });
  }, kerfPrime = [ferrulePrime, bafflePrime, composerInput, spindlePrime], crag.useEffect(jumperPrime, kerfPrime), !ferrulePrime || !elbowPrime) return null;
  let louverPrime = alpha(capstanPrime, document.querySelector("[data-feature='game-source']")?.textContent?.trim() ?? "");
  let manifoldPrime = louverPrime;
  switch (diaphragmPrime.game) {
    case "asteroids":
      {
        let nipPrime;
        return <CodexMicroMiniGameComposerHelper27 {...{
          level: manifoldPrime,
          onExit: injectorPrime,
          playing: grommetPrime
        }} />;
      }
    case "brick-breaker":
      {
        let outletPrime;
        return <CodexMicroMiniGameComposerHelper46 {...{
          level: manifoldPrime,
          onExit: injectorPrime,
          playing: grommetPrime
        }} />;
      }
    case "snake":
      {
        let packingPrime;
        return <CodexMicroMiniGameComposerHelper64 {...{
          level: manifoldPrime,
          onExit: injectorPrime,
          playing: grommetPrime
        }} />;
      }
  }
}
var beacon, crag, $;
esmInit(() => {
  beacon = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  crag = commonJsInit(react(), 1);
  DeferredUiV2();
  AppInitialBw();
  ensureAppScopeInit();
  composerScope();
  glide();
  birch();
  pearl();
  buildMiniGameThreadSlots();
  anvil();
})();
