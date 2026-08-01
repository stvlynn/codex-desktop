// Restored from ref/webview/assets/codex-micro-mini-game-composer-BoiUM7yg.js
// Wave FY — full polished body from `codex-micro-mini-game-composer-BoiUM7yg/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 7 (verified 26/33).
// Careful split 1/2
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
const azure: any = undefined;
const rain: any = undefined;
const urn: any = undefined;
const yarrow: any = undefined;

const AppInitialBw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-fw-2.tsx) */
const AppInitialFw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureCodexMicroJoystickGeometryInit@desktop/codex-micro-joystick-geometry.ts) */
const AppInitialGw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-n2.tsx) */
const DeferredUiN2: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/composer-scope.ts) */
const composerScope: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:analogDirectionFromJoystick@desktop/codex-micro-joystick-geometry.ts) */
const AppInitialWw: any = undefined;
function alpha(dome, eddy = "") {
  let fjord = copper((dome?.items ?? []).flatMap(item => item.type === "agentMessage" ? delta(isTunAtomEqualToNS(item.text, undefined), item.id) : []), marble);
  return fjord.key.length > 0 || eddy.trim().length === 0 ? fjord : copper(delta(isTunAtomEqualToNS(eddy, undefined), "home-title"), nickel);
}
function bravo(glen) {
  return glen ? 20 : 10;
}
function copper(hearth, inlet) {
  let jetty = [],
    knob = 0;
  for (let ledge = hearth.length - 1; ledge >= 0 && !(knob >= kite); --ledge) {
    let mire = hearth[ledge];
    if (mire == null) continue;
    let nook = gamma(mire.glyphs, lemon - knob);
    nook.some(harbor) && (jetty.unshift({
      glyphs: nook
    }), knob += nook.filter(harbor).length);
  }
  return {
    blocks: jetty,
    fontSize: inlet,
    key: jetty.length === 0 ? "" : `${inlet}:${jetty.flatMap(item => item.glyphs).map(item => `${item.id}:${item.character}`).join("|")}`
  };
}
function delta(oxbow, pond, quarry = "") {
  return oxbow.flatMap((item, index) => {
    let rapids = `${pond}:${quarry}${index}`;
    return indigo(item) ? item.items.flatMap((_item, _index) => falcon(echo(_item.tokens), `${rapids}:item:${_index}`)) : jade(item) ? [item.header, ...item.rows].flatMap((_item, _index) => falcon(_item.flatMap((__item, __index) => [...(__index === 0 ? [] : [{
      bonus: false,
      text: " "
    }]), ...echo(__item.tokens)]), `${rapids}:row:${_index}`)) : item.type === "blockquote" && "tokens" in item && Array.isArray(item.tokens) ? delta(item.tokens, pond, `${quarry}${index}:`) : item.type === "code" && "text" in item ? falcon([{
      bonus: true,
      text: item.text
    }], rapids) : item.type === "space" || item.type === "hr" || item.type === "def" || item.type === "html" || item.type === "image" ? [] : "tokens" in item && Array.isArray(item.tokens) ? falcon(echo(item.tokens, item.type === "heading"), rapids) : "text" in item && typeof item.text == "string" ? falcon([{
      bonus: false,
      text: item.text
    }], rapids) : [];
  });
}
function echo(spur, tor = false) {
  return spur.flatMap(item => item.type === "image" ? [] : item.type === "br" ? [{
    bonus: false,
    text: " "
  }] : "tokens" in item && Array.isArray(item.tokens) ? echo(item.tokens, tor || item.type === "strong" || item.type === "codespan") : "text" in item && typeof item.text == "string" ? [{
    bonus: tor || item.type === "codespan",
    text: item.text
  }] : []);
}
function falcon(updraft, verge) {
  let weir = true,
    yard = updraft.flatMap((item, index) => Array.from(onyx.segment(item.text)).flatMap(({
      index: _index,
      segment
    }) => {
      let anchor = /\s/u.test(segment);
      if (anchor && weir) return [];
      weir = anchor;
      let bolt = anchor ? " " : segment;
      return [{
        bonus: item.bonus || !anchor && /[^\p{L}\p{N}]/u.test(bolt),
        character: bolt,
        id: `${verge}:${index}:${_index}`
      }];
    }));
  return yard.at(-1)?.character === " " && yard.pop(), yard.some(harbor) ? [{
    glyphs: yard
  }] : [];
}
function gamma(cog, disc) {
  if (cog.filter(harbor).length <= disc) return cog;
  let edge = 0,
    forge = cog.length;
  for (; forge > 0 && edge < disc;) {
    --forge;
    let hinge = cog[forge];
    hinge != null && harbor(hinge) && (edge += 1);
  }
  let gear = cog.findIndex((item, index) => index >= forge && /\s/u.test(item.character));
  return cog.slice(gear === -1 ? forge : gear + 1);
}
function harbor(iron) {
  return !/\s/u.test(iron.character);
}
function indigo(joint) {
  return joint.type === "list" && "items" in joint && Array.isArray(joint.items);
}
function jade(keystone) {
  return keystone.type === "table" && "header" in keystone && Array.isArray(keystone.header) && "rows" in keystone && Array.isArray(keystone.rows);
}
var kite,
  lemon,
  marble,
  nickel,
  onyx,
  pearl = esmInit(() => {
    ensureComposerEsm_F7_Init();
    kite = 50;
    lemon = 120;
    marble = 13;
    nickel = 28;
    onyx = new Intl.Segmenter(undefined, {
      granularity: "grapheme"
    });
  });
function quartz({
  animateEntrance = true,
  height,
  level,
  width
}) {
  return {
    animatesEntrance: animateEntrance,
    asteroids: umbra(level, width, height),
    bullets: [],
    elapsedSeconds: 0,
    height,
    joystick: {
      angle: 0,
      distance: 0
    },
    level,
    score: 0,
    ship: {
      angle: 0.75,
      radius: jasper,
      x: width / 2,
      y: height / 2
    },
    status: "playing",
    width
  };
}
function river(latch) {
  if (latch.status !== "playing") return;
  let motor = latch.ship.angle * Math.PI * 2,
    nut = Math.cos(motor),
    piston = Math.sin(motor);
  latch.bullets.push({
    radius: garnet,
    velocityX: nut * hazel,
    velocityY: piston * hazel,
    x: latch.ship.x + nut * ivory,
    y: latch.ship.y + piston * ivory
  });
}
function _e(rivet, screw) {
  rivet.joystick = screw;
}
function slate(torque, valve) {
  if (torque.status === "lost") return;
  let axle = torque.elapsedSeconds;
  torque.elapsedSeconds += Math.max(0, valve);
  let bracket = torque.animatesEntrance ? prism : 0,
    clamp = Math.min(Math.max(0, torque.elapsedSeconds - Math.max(axle, bracket)), 0.05);
  for (; clamp > 0 && torque.status === "playing";) {
    let drill = Math.min(nova, clamp);
    xenon(torque, drill);
    clamp -= drill;
  }
}
function timber(engine, {
  height,
  width
}) {
  let frame = width / engine.width,
    gasket = height / engine.height;
  engine.ship.x *= frame;
  engine.ship.y *= gasket;
  for (let handle of engine.asteroids) {
    handle.x *= frame;
    handle.y *= gasket;
  }
  for (let insert of engine.bullets) {
    insert.x *= frame;
    insert.y *= gasket;
  }
  engine.height = height;
  engine.width = width;
}
function be(jacket) {
  return jacket.animatesEntrance ? basalt(jacket.elapsedSeconds / prism, 0, 1) : 1;
}
function umbra(knurl, lever, mount) {
  let nozzle = knurl.blocks.flatMap(item => item.glyphs).filter(harbor),
    platen = nozzle.length > 0 ? nozzle : olive,
    ratchet = Math.max(Math.ceil(platen.length / cedar), 1);
  return platen.filter((item, index) => index % ratchet === 0).slice(0, cedar).map((item, index) => violet(item, index, lever, mount));
}
function violet(shim, tappet, arbor, bushing) {
  let collar = tappet % 4,
    dowel = (Math.floor(tappet / 4) * 47 + collar * 23) % 100 / 100,
    flange = 24 + tappet % 4 * 5,
    gib = shim.bonus ? flint : ember;
  return collar === 0 ? {
    ...shim,
    radius: gib,
    velocityX: 0,
    velocityY: flange,
    x: willow(arbor, dowel),
    y: -gib
  } : collar === 1 ? {
    ...shim,
    radius: gib,
    velocityX: -flange,
    velocityY: 0,
    x: arbor + gib,
    y: willow(bushing, dowel)
  } : collar === 2 ? {
    ...shim,
    radius: gib,
    velocityX: 0,
    velocityY: -flange,
    x: willow(arbor, dowel),
    y: bushing + gib
  } : {
    ...shim,
    radius: gib,
    velocityX: flange,
    velocityY: 0,
    x: -gib,
    y: willow(bushing, dowel)
  };
}
function willow(hub, idler) {
  let jig = Math.max(hub / 2 - kelp - daisy, 0),
    keeper = idler * jig * 2;
  return keeper <= jig ? daisy + keeper : hub / 2 + kelp + keeper - jig;
}
function xenon(lug, mandrel) {
  let {
    joystick
  } = lug;
  if (joystick.distance >= mint) {
    lug.ship.angle = joystick.angle;
    let nipple = Math.min(joystick.distance, 1),
      orifice = joystick.angle * Math.PI * 2;
    lug.ship.x = basalt(lug.ship.x + Math.cos(orifice) * lotus * nipple * mandrel, lug.ship.radius, lug.width - lug.ship.radius);
    lug.ship.y = basalt(lug.ship.y + Math.sin(orifice) * lotus * nipple * mandrel, lug.ship.radius, lug.height - lug.ship.radius);
  }
  for (let pin of lug.bullets) {
    pin.x += pin.velocityX * mandrel;
    pin.y += pin.velocityY * mandrel;
  }
  lug.bullets = lug.bullets.filter(item => yellow(lug, item));
  for (let race = lug.asteroids.length - 1; race >= 0; --race) {
    let sleeve = lug.asteroids[race];
    if (sleeve == null) continue;
    sleeve.x += sleeve.velocityX * mandrel;
    sleeve.y += sleeve.velocityY * mandrel;
    sleeve.x < -sleeve.radius ? sleeve.x = lug.width + sleeve.radius : sleeve.x > lug.width + sleeve.radius && (sleeve.x = -sleeve.radius);
    sleeve.y < -sleeve.radius ? sleeve.y = lug.height + sleeve.radius : sleeve.y > lug.height + sleeve.radius && (sleeve.y = -sleeve.radius);
    let trunnion = lug.bullets.findIndex(item => zinc(item, sleeve));
    if (trunnion !== -1) {
      lug.asteroids[race] = violet(sleeve, race, lug.width, lug.height);
      lug.bullets.splice(trunnion, 1);
      lug.score += bravo(sleeve.bonus);
      continue;
    }
    if (amber(lug, sleeve)) {
      lug.status = "lost";
      return;
    }
  }
}
function yellow(boss, cam) {
  return cam.x >= -cam.radius && cam.x <= boss.width + cam.radius && cam.y >= -cam.radius && cam.y <= boss.height + cam.radius;
}
function zinc(detent, eccentric) {
  let follower = detent.x - eccentric.x,
    guide = detent.y - eccentric.y;
  return follower * follower + guide * guide <= (detent.radius + eccentric.radius) ** 2;
}
function amber(helix, impeller) {
  let journal = helix.ship.x - impeller.x,
    kingpin = helix.ship.y - impeller.y;
  return journal * journal + kingpin * kingpin <= (helix.ship.radius + impeller.radius) ** 2;
}
function basalt(land, mesh, neck) {
  return Math.min(Math.max(land, mesh), neck);
}
var cedar,
  daisy,
  ember,
  flint,
  garnet,
  hazel,
  ivory,
  jasper,
  kelp,
  lotus,
  mint,
  nova,
  olive,
  prism,
  quill = esmInit(() => {
    pearl();
    cedar = 18;
    daisy = 10;
    ember = 7;
    flint = 9;
    garnet = 2;
    hazel = 320;
    ivory = 9;
    jasper = 6;
    kelp = 19;
    lotus = 180;
    mint = 0.08;
    nova = 0.008333333333333333;
    olive = Array.from("CODEX", (pad, quillshaft) => ({
      bonus: false,
      character: pad,
      id: `fallback:${quillshaft}`
    }));
    prism = 0.28;
  });
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
  yoke.fillText(`${String(capstan).padStart(5, "0")}${elbow == null ? "" : `  ${elbow}`}`, 8, 176);
}
var ultra = esmInit(() => {});
function CodexMicroMiniGameComposerHelper26(ferrule) {
  let {
      onFrame,
      onResize,
      playing = true,
      reducedMotion
    } = ferrule,
    grommet = wheat.useRef(null),
    injector = wheat.useEffectEvent(onFrame),
    jumper = wheat.useEffectEvent(onResize),
    kerf = usePrefersReducedMotion(),
    louver = reducedMotion ?? kerf,
    manifold = playing && !louver,
    nip = false;
  if (playing) {
    let vent;
    vent = louver ? {
      opacity: 0
    } : {
      height: 0,
      opacity: 0
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
    let deltaPrime = gammaPrime => {
      let harborPrime = bravoPrime == null ? 0 : (gammaPrime - bravoPrime) / 1e3;
      bravoPrime = gammaPrime;
      injector(zener, wye, harborPrime, gammaPrime) && (alphaPrime = window.requestAnimationFrame(deltaPrime));
    };
    return playing && (alphaPrime = window.requestAnimationFrame(deltaPrime)), () => {
      copperPrime.disconnect();
      window.cancelAnimationFrame(alphaPrime);
    };
  };
  let packing;
  packing = [manifold, playing];
  wheat.useEffect(outlet, packing);
  let reducer = {
    height: 192,
    opacity: 1
  };
  let strainer = louver ? 0.12 : zephyr,
    tee = {
      duration: strainer,
      ease: acorn
    };
  let union = <canvas ref={grommet} aria-hidden={true} className="pointer-events-none block h-48 w-full text-token-text-secondary" />;
  return <ensureIntlFormattersInit.div {...{
    initial: nip,
    animate: reducer,
    className: "w-full overflow-hidden",
    "data-feature": "game-surface",
    transition: tee,
    children: union
  }} />;
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
  let {
      playing = true,
      reducedMotion,
      level,
      onExit
    } = indigoPrime,
    jadePrime = eagle.useRef(null),
    kitePrime,
    lemonPrime;
  kitePrime = () => {
    let slatePrime = jadePrime.current;
    !playing && slatePrime != null && _e(slatePrime, {
      angle: 0,
      distance: 0
    });
  };
  lemonPrime = [playing];
  eagle.useEffect(kitePrime, lemonPrime);
  let marblePrime;
  marblePrime = timberPrime => {
    let {
        event
      } = timberPrime,
      umbraPrime = jadePrime.current;
    umbraPrime != null && _e(umbraPrime, event);
  };
  writeScrollTop("codex-micro-joystick-event", marblePrime);
  let nickelPrime;
  nickelPrime = violetPrime => {
    let {
        event
      } = violetPrime,
      willowPrime = jadePrime.current;
    willowPrime != null && pickRandomMiniGame(event) && river(willowPrime);
  };
  writeScrollTop("codex-micro-hid-event", nickelPrime);
  let onyxPrime = function (xenonPrime, yellowPrime, zincPrime, amberPrime) {
    jadePrime.current == null ? jadePrime.current = quartz({
      animateEntrance: amberPrime,
      height: 192,
      level,
      width: zincPrime
    }) : (jadePrime.current.width !== zincPrime || jadePrime.current.height !== 192) && timber(jadePrime.current, {
      height: 192,
      width: zincPrime
    });
    coral(xenonPrime, jadePrime.current, yellowPrime);
  };
  let pearlPrime = onyxPrime,
    quartzPrime = function (basaltPrime, cedarPrime, daisyPrime) {
      let emberPrime = jadePrime.current;
      return emberPrime == null ? true : (slate(emberPrime, daisyPrime), coral(basaltPrime, emberPrime, cedarPrime), emberPrime.status === "lost" ? (onExit(), false) : true);
    };
  let riverPrime = quartzPrime;
  return <CodexMicroMiniGameComposerHelper26 {...{
    onFrame: riverPrime,
    onResize: pearlPrime,
    playing: playing,
    reducedMotion
  }} />;
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
    flintPrime.arc(lotusPrime.x, lotusPrime.y, lotusPrime.radius, 0, Math.PI * 2);
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
function honey({
  animateEntrance = true,
  height,
  level,
  measureText,
  width
}) {
  let mintPrime = moss(level, width, 0, animateEntrance, measureText),
    novaPrime = wave(width, mintPrime.length);
  return {
    animatesEntrance: animateEntrance,
    ball: {
      radius: meadow,
      velocityX: 105,
      velocityY: -145,
      x: width / 2,
      y: height - lagoon - juniper - meadow - 6
    },
    combo: 0,
    completedAtSeconds: null,
    elapsedSeconds: 0,
    glyphs: mintPrime,
    height,
    lastHitAtSeconds: null,
    level,
    measureText,
    nextLevelUpdateAtSeconds: null,
    pendingLevel: null,
    paddle: {
      height: juniper,
      width: novaPrime,
      x: width / 2,
      y: height - lagoon - juniper / 2
    },
    score: 0,
    status: "playing",
    width
  };
}
function iris(olivePrime, prismPrime, quillPrime) {
  if (olivePrime.status === "lost") return;
  let reefPrime = olivePrime.elapsedSeconds;
  if (olivePrime.elapsedSeconds += Math.max(0, prismPrime), olivePrime.lastHitAtSeconds != null && olivePrime.elapsedSeconds - olivePrime.lastHitAtSeconds > nest && (olivePrime.combo = 0, olivePrime.lastHitAtSeconds = null), olivePrime.pendingLevel != null && olivePrime.nextLevelUpdateAtSeconds != null && olivePrime.elapsedSeconds >= olivePrime.nextLevelUpdateAtSeconds && (at(olivePrime, olivePrime.pendingLevel), olivePrime.pendingLevel = null, olivePrime.nextLevelUpdateAtSeconds = null), olivePrime.status === "cleared") {
    for (let vaporPrime of olivePrime.glyphs) vaporPrime.falling && pine(vaporPrime, Math.min(prismPrime, 0.05));
    return;
  }
  let sagePrime = olivePrime.animatesEntrance ? oak : 0,
    topazPrime = Math.min(Math.max(0, olivePrime.elapsedSeconds - Math.max(reefPrime, sagePrime)), 0.05);
  if (topazPrime === 0) return;
  let ultraPrime = topazPrime;
  for (; ultraPrime > 0 && olivePrime.status === "playing";) {
    let wheatPrime = Math.min(isle, ultraPrime);
    orbit(olivePrime, wheatPrime, quillPrime);
    ultraPrime -= wheatPrime;
  }
}
function jewel(yarnPrime, {
  height,
  measureText,
  width
}) {
  let zephyrPrime = width / yarnPrime.width,
    acornPrime = height / yarnPrime.height,
    bloomPrime = new Map(yarnPrime.glyphs.map(item => [item.id, item])),
    coralPrime = moss(yarnPrime.level, width, yarnPrime.elapsedSeconds, yarnPrime.animatesEntrance, measureText).map(item => {
      let eaglePrime = bloomPrime.get(item.id);
      return eaglePrime == null ? item : eaglePrime.falling ? {
        ...eaglePrime,
        x: eaglePrime.x * zephyrPrime,
        y: eaglePrime.y * acornPrime
      } : {
        ...item,
        appearsAtSeconds: eaglePrime.appearsAtSeconds
      };
    }),
    driftPrime = new Set(coralPrime.map(item => item.id));
  coralPrime.push(...yarnPrime.glyphs.filter(item => item.falling && !driftPrime.has(item.id)).map(item => ({
    ...item,
    x: item.x * zephyrPrime,
    y: item.y * acornPrime
  })));
  yarnPrime.ball.x = apex(yarnPrime.ball.x * zephyrPrime, yarnPrime.ball.radius, width - yarnPrime.ball.radius);
  yarnPrime.ball.y = apex(yarnPrime.ball.y * acornPrime, yarnPrime.ball.radius, height - yarnPrime.ball.radius);
  yarnPrime.glyphs = coralPrime;
  yarnPrime.height = height;
  yarnPrime.measureText = measureText;
  yarnPrime.paddle.width = wave(width, coralPrime.length);
  yarnPrime.paddle.x = apex(yarnPrime.paddle.x * zephyrPrime, yarnPrime.paddle.width / 2, width - yarnPrime.paddle.width / 2);
  yarnPrime.paddle.y = height - lagoon - yarnPrime.paddle.height / 2;
  yarnPrime.width = width;
}
function knoll(frostPrime, event) {
  if (frostPrime.level.key === event.key) {
    frostPrime.pendingLevel = null;
    frostPrime.nextLevelUpdateAtSeconds = null;
    return;
  }
  frostPrime.pendingLevel?.key !== event.key && (frostPrime.pendingLevel = event, frostPrime.nextLevelUpdateAtSeconds ??= frostPrime.elapsedSeconds + grove);
}
function $e(glidePrime) {
  return glidePrime.animatesEntrance ? apex(glidePrime.elapsedSeconds / oak, 0, 1) : 1;
}
function lunar(honeyPrime, irisPrime) {
  return honeyPrime.animatesEntrance ? apex((honeyPrime.elapsedSeconds - irisPrime.appearsAtSeconds) / fern, 0, 1) : 1;
}
function moss(jewelPrime, knollPrime, lunarPrime, mossPrime, northPrime) {
  return quest(jewelPrime, knollPrime - elm * 2, northPrime).slice(-4).flatMap((item, index) => {
    let orbitPrime = (knollPrime - storm(item, jewelPrime.fontSize, northPrime)) / 2;
    return item.flatMap(_item => {
      let pinePrime = Math.max(northPrime(_item.character, jewelPrime.fontSize), 4),
        questPrime = /\s/u.test(_item.character) ? [] : [{
          appearsAtSeconds: mossPrime ? lunarPrime + index * _t : lunarPrime - fern,
          bonus: _item.bonus,
          character: _item.character,
          falling: false,
          height: Math.max(brook, jewelPrime.fontSize + 3),
          id: _item.id,
          velocityX: 0,
          velocityY: 0,
          width: pinePrime,
          x: orbitPrime,
          y: dusk + index * (Math.max(brook, jewelPrime.fontSize + 3) + cliff)
        }];
      return orbitPrime += pinePrime + cliff, questPrime;
    });
  });
}
function north(ridgePrime, stormPrime) {
  let tidePrime = apex(ridgePrime.ball.x, stormPrime.x - 1, stormPrime.x + stormPrime.width + 1),
    unityPrime = apex(ridgePrime.ball.y, stormPrime.y - 1, stormPrime.y + stormPrime.height + 1),
    valePrime = ridgePrime.ball.x - tidePrime,
    wavePrime = ridgePrime.ball.y - unityPrime;
  return valePrime * valePrime + wavePrime * wavePrime <= ridgePrime.ball.radius * ridgePrime.ball.radius;
}
function orbit(apexPrime, brookPrime, cliffPrime) {
  let duskPrime = apexPrime.paddle.width / 2;
  apexPrime.paddle.x = apex(apexPrime.paddle.x + apex(cliffPrime, -1, 1) * 440 * brookPrime, duskPrime, apexPrime.width - duskPrime);
  let elmPrime = apexPrime.ball;
  elmPrime.x += elmPrime.velocityX * brookPrime;
  elmPrime.y += elmPrime.velocityY * brookPrime;
  elmPrime.x - elmPrime.radius <= 0 && elmPrime.velocityX < 0 ? (elmPrime.x = elmPrime.radius, elmPrime.velocityX *= -1) : elmPrime.x + elmPrime.radius >= apexPrime.width && elmPrime.velocityX > 0 && (elmPrime.x = apexPrime.width - elmPrime.radius, elmPrime.velocityX *= -1);
  elmPrime.y - elmPrime.radius <= 0 && elmPrime.velocityY < 0 && (elmPrime.y = elmPrime.radius, elmPrime.velocityY *= -1);
  let fernPrime = apexPrime.paddle.y - apexPrime.paddle.height / 2;
  elmPrime.velocityY > 0 && elmPrime.y + elmPrime.radius >= fernPrime && elmPrime.y - elmPrime.radius <= apexPrime.paddle.y + apexPrime.paddle.height / 2 && Math.abs(elmPrime.x - apexPrime.paddle.x) <= duskPrime + elmPrime.radius && (elmPrime.y = fernPrime - elmPrime.radius, elmPrime.velocityY = -Math.abs(elmPrime.velocityY), elmPrime.velocityX += (elmPrime.x - apexPrime.paddle.x) / duskPrime * Math.abs(elmPrime.velocityY) * 0.45);
  for (let grovePrime of apexPrime.glyphs) {
    if (grovePrime.falling) {
      pine(grovePrime, brookPrime);
      continue;
    }
    if (!(lunar(apexPrime, grovePrime) < 1 || !north(apexPrime, grovePrime))) {
      grovePrime.falling = true;
      grovePrime.velocityX = elmPrime.velocityX * 0.18;
      grovePrime.velocityY = -55;
      apexPrime.combo = apexPrime.lastHitAtSeconds != null && apexPrime.elapsedSeconds - apexPrime.lastHitAtSeconds <= nest ? Math.min(apexPrime.combo + 1, 5) : 1;
      apexPrime.lastHitAtSeconds = apexPrime.elapsedSeconds;
      apexPrime.score += bravo(grovePrime.bonus) * apexPrime.combo;
      elmPrime.velocityY *= -1;
      vale(apexPrime);
      apexPrime.pendingLevel == null && apexPrime.glyphs.every(item => item.falling) && (apexPrime.status = "cleared", apexPrime.completedAtSeconds = apexPrime.elapsedSeconds);
      break;
    }
  }
  elmPrime.y - elmPrime.radius > apexPrime.height && (apexPrime.status = "lost", apexPrime.completedAtSeconds = apexPrime.elapsedSeconds);
}
function pine(hillPrime, islePrime) {
  hillPrime.velocityY += 420 * islePrime;
  hillPrime.x += hillPrime.velocityX * islePrime;
  hillPrime.y += hillPrime.velocityY * islePrime;
}
function at(juniperPrime, lagoonPrime) {
  let meadowPrime = new Map(juniperPrime.glyphs.map(item => [item.id, item]));
  juniperPrime.level = lagoonPrime;
  juniperPrime.glyphs = moss(lagoonPrime, juniperPrime.width, juniperPrime.elapsedSeconds, juniperPrime.animatesEntrance, juniperPrime.measureText).map(item => {
    let nestPrime = meadowPrime.get(item.id);
    return nestPrime?.character === item.character ? nestPrime : item;
  });
  juniperPrime.status === "cleared" && juniperPrime.glyphs.some(item => !item.falling) && (juniperPrime.status = "playing", juniperPrime.completedAtSeconds = null);
}
function quest(oakPrime, petalPrime, quietPrime) {
  let rainPrime = [];
  for (let seedPrime of oakPrime.blocks) {
    let trailPrime = [];
    for (let urnPrime of ridge(seedPrime.glyphs)) {
      let vinePrime = trailPrime.length === 0 ? unity(urnPrime) : urnPrime;
      for (trailPrime.length > 0 && storm([...trailPrime, ...vinePrime], oakPrime.fontSize, quietPrime) > petalPrime ? (rainPrime.push(trailPrime), trailPrime = unity(vinePrime)) : trailPrime.push(...vinePrime); storm(trailPrime, oakPrime.fontSize, quietPrime) > petalPrime;) {
        let windPrime = tide(trailPrime, petalPrime, oakPrime.fontSize, quietPrime);
        rainPrime.push(trailPrime.slice(0, windPrime));
        trailPrime = unity(trailPrime.slice(windPrime));
      }
    }
    trailPrime.length > 0 && rainPrime.push(trailPrime);
  }
  return rainPrime;
}
function ridge(yarrowPrime) {
  let azurePrime = [],
    birchPrime = [];
  for (let canyonPrime of yarrowPrime) /\s/u.test(canyonPrime.character) && birchPrime.some(harbor) ? (azurePrime.push(birchPrime), birchPrime = [canyonPrime]) : birchPrime.push(canyonPrime);
  return birchPrime.some(harbor) && azurePrime.push(birchPrime), azurePrime;
}
function storm(dewPrime, everPrime, fieldPrime) {
  return dewPrime.reduce((accumulator, current) => accumulator + Math.max(fieldPrime(current.character, everPrime), 4) + cliff, -1);
}
function tide(grainPrime, havenPrime, inkPrime, jadeitePrime) {
  let kernelPrime = 0;
  for (let [leafPrime, maplePrime] of grainPrime.entries()) if (kernelPrime += Math.max(jadeitePrime(maplePrime.character, inkPrime), 4) + cliff, kernelPrime > havenPrime) return Math.max(leafPrime, 1);
  return grainPrime.length;
}
function unity(nimbusPrime) {
  let opalPrime = nimbusPrime.findIndex(harbor);
  return opalPrime === -1 ? [] : nimbusPrime.slice(opalPrime);
}
function vale(plumePrime) {
  let quillowPrime = Math.hypot(plumePrime.ball.velocityX, plumePrime.ball.velocityY);
  if (quillowPrime === 0 || quillowPrime >= hill) return;
  let rootPrime = Math.min(quillowPrime * 1.015, hill) / quillowPrime;
  plumePrime.ball.velocityX *= rootPrime;
  plumePrime.ball.velocityY *= rootPrime;
}
function wave(silkPrime, thornPrime) {
  return apex(silkPrime * (0.3 - Math.min(thornPrime / 120, 1) * 0.1), 52, 96);
}
function apex(uplandPrime, vistaPrime, wispPrime) {
  return Math.min(Math.max(uplandPrime, vistaPrime), wispPrime);
}
var brook,
  cliff,
  dusk,
  elm,
  fern,
  _t,
  grove,
  hill,
  isle,
  juniper,
  lagoon,
  meadow,
  nest,
  oak,
  petal = esmInit(() => {
    pearl();
    brook = 16;
    cliff = 1;
    dusk = 8;
    elm = 8;
    fern = 0.19;
    _t = 0.03;
    grove = 0.2;
    hill = 240;
    isle = 0.008333333333333333;
    juniper = 6;
    lagoon = 12;
    meadow = 5;
    nest = 1.5;
    oak = 0.28;
  });
function CodexMicroMiniGameComposerHelper46(yonderPrime) {
  let {
      playing = true,
      reducedMotion,
      level,
      onExit
    } = yonderPrime,
    zenithPrime = urn.useRef(null),
    anvilPrime = {
      expiresAt: 0,
      value: 0
    };
  let beaconPrime = urn.useRef(anvilPrime),
    cragPrime;
  cragPrime = jettyPrime => {
    let {
      event
    } = jettyPrime;
    beaconPrime.current = {
      expiresAt: globalThis.performance.now() + azure,
      value: quiet(event)
    };
  };
  writeScrollTop("codex-micro-joystick-event", cragPrime);
  let domePrime, eddyPrime;
  domePrime = () => {
    let knobPrime = zenithPrime.current;
    knobPrime != null && knoll(knobPrime, level);
  };
  eddyPrime = [level];
  urn.useEffect(domePrime, eddyPrime);
  let fjordPrime = function (ledgePrime, mirePrime, nookPrime, oxbowPrime) {
    let pondPrime = (quarryPrime, rapidsPrime) => (ledgePrime.font = sage(mirePrime, rapidsPrime), ledgePrime.measureText(quarryPrime).width);
    zenithPrime.current == null ? zenithPrime.current = honey({
      animateEntrance: oxbowPrime,
      height: 192,
      level,
      measureText: pondPrime,
      width: nookPrime
    }) : (zenithPrime.current.width !== nookPrime || zenithPrime.current.height !== 192) && jewel(zenithPrime.current, {
      height: 192,
      measureText: pondPrime,
      width: nookPrime
    });
    rain(ledgePrime, zenithPrime.current, mirePrime);
  };
  let glenPrime = fjordPrime,
    hearthPrime = function (spurPrime, torPrime, updraftPrime, vergePrime) {
      let weirPrime = zenithPrime.current;
      return weirPrime == null ? true : (iris(weirPrime, updraftPrime, vergePrime < beaconPrime.current.expiresAt ? beaconPrime.current.value : 0), rain(spurPrime, weirPrime, torPrime), weirPrime.status === "lost" || weirPrime.status === "cleared" && weirPrime.completedAtSeconds != null && weirPrime.elapsedSeconds - weirPrime.completedAtSeconds >= yarrow ? (onExit(), false) : true);
    };
  let inletPrime = hearthPrime;
  return <CodexMicroMiniGameComposerHelper26 {...{
    onFrame: inletPrime,
    onResize: glenPrime,
    playing: playing,
    reducedMotion
  }} />;
}
function quiet(yardPrime) {
  return yardPrime.distance < 0.08 ? 0 : Math.cos(yardPrime.angle * Math.PI * 2) * Math.min(yardPrime.distance / 0.7, 1);
}
