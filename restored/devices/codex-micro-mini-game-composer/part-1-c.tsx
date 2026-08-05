// Restored from ref/webview/assets/codex-micro-mini-game-composer-BoiUM7yg.js
// Wave FY — full polished body from `codex-micro-mini-game-composer-BoiUM7yg/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 7 (verified 26/33).
// Careful split 1/2 — lane C: breakout engine + composer
/* split-lane-import-depth:1 */

import { writeScrollTop } from "../../navigation/app-action-dom";
import { esmInit } from "../../runtime/rolldown-runtime";

// Cross-part stubs.
const CodexMicroMiniGameComposerHelper26: any = undefined;
const azure: any = undefined;
const bravo: any = undefined;
const harbor: any = undefined;
const pearl: any = undefined;
const rain: any = undefined;
const sage: any = undefined;
const urn: any = undefined;
const yarrow: any = undefined;

function honey({ animateEntrance = true, height, level, measureText, width }) {
  let mintPrime = moss(level, width, 0, animateEntrance, measureText),
    novaPrime = wave(width, mintPrime.length);
  return {
    animatesEntrance: animateEntrance,
    ball: {
      radius: meadow,
      velocityX: 105,
      velocityY: -145,
      x: width / 2,
      y: height - lagoon - juniper - meadow - 6,
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
      y: height - lagoon - juniper / 2,
    },
    score: 0,
    status: "playing",
    width,
  };
}
function iris(olivePrime, prismPrime, quillPrime) {
  if (olivePrime.status === "lost") return;
  let reefPrime = olivePrime.elapsedSeconds;
  if (
    ((olivePrime.elapsedSeconds += Math.max(0, prismPrime)),
    olivePrime.lastHitAtSeconds != null &&
      olivePrime.elapsedSeconds - olivePrime.lastHitAtSeconds > nest &&
      ((olivePrime.combo = 0), (olivePrime.lastHitAtSeconds = null)),
    olivePrime.pendingLevel != null &&
      olivePrime.nextLevelUpdateAtSeconds != null &&
      olivePrime.elapsedSeconds >= olivePrime.nextLevelUpdateAtSeconds &&
      (at(olivePrime, olivePrime.pendingLevel),
      (olivePrime.pendingLevel = null),
      (olivePrime.nextLevelUpdateAtSeconds = null)),
    olivePrime.status === "cleared")
  ) {
    for (let vaporPrime of olivePrime.glyphs)
      vaporPrime.falling && pine(vaporPrime, Math.min(prismPrime, 0.05));
    return;
  }
  let sagePrime = olivePrime.animatesEntrance ? oak : 0,
    topazPrime = Math.min(
      Math.max(0, olivePrime.elapsedSeconds - Math.max(reefPrime, sagePrime)),
      0.05,
    );
  if (topazPrime === 0) return;
  let ultraPrime = topazPrime;
  for (; ultraPrime > 0 && olivePrime.status === "playing"; ) {
    let wheatPrime = Math.min(isle, ultraPrime);
    orbit(olivePrime, wheatPrime, quillPrime);
    ultraPrime -= wheatPrime;
  }
}
function jewel(yarnPrime, { height, measureText, width }) {
  let zephyrPrime = width / yarnPrime.width,
    acornPrime = height / yarnPrime.height,
    bloomPrime = new Map(yarnPrime.glyphs.map((item) => [item.id, item])),
    coralPrime = moss(
      yarnPrime.level,
      width,
      yarnPrime.elapsedSeconds,
      yarnPrime.animatesEntrance,
      measureText,
    ).map((item) => {
      let eaglePrime = bloomPrime.get(item.id);
      return eaglePrime == null
        ? item
        : eaglePrime.falling
          ? {
              ...eaglePrime,
              x: eaglePrime.x * zephyrPrime,
              y: eaglePrime.y * acornPrime,
            }
          : {
              ...item,
              appearsAtSeconds: eaglePrime.appearsAtSeconds,
            };
    }),
    driftPrime = new Set(coralPrime.map((item) => item.id));
  coralPrime.push(
    ...yarnPrime.glyphs
      .filter((item) => item.falling && !driftPrime.has(item.id))
      .map((item) => ({
        ...item,
        x: item.x * zephyrPrime,
        y: item.y * acornPrime,
      })),
  );
  yarnPrime.ball.x = apex(
    yarnPrime.ball.x * zephyrPrime,
    yarnPrime.ball.radius,
    width - yarnPrime.ball.radius,
  );
  yarnPrime.ball.y = apex(
    yarnPrime.ball.y * acornPrime,
    yarnPrime.ball.radius,
    height - yarnPrime.ball.radius,
  );
  yarnPrime.glyphs = coralPrime;
  yarnPrime.height = height;
  yarnPrime.measureText = measureText;
  yarnPrime.paddle.width = wave(width, coralPrime.length);
  yarnPrime.paddle.x = apex(
    yarnPrime.paddle.x * zephyrPrime,
    yarnPrime.paddle.width / 2,
    width - yarnPrime.paddle.width / 2,
  );
  yarnPrime.paddle.y = height - lagoon - yarnPrime.paddle.height / 2;
  yarnPrime.width = width;
}
function knoll(frostPrime, event) {
  if (frostPrime.level.key === event.key) {
    frostPrime.pendingLevel = null;
    frostPrime.nextLevelUpdateAtSeconds = null;
    return;
  }
  frostPrime.pendingLevel?.key !== event.key &&
    ((frostPrime.pendingLevel = event),
    (frostPrime.nextLevelUpdateAtSeconds ??=
      frostPrime.elapsedSeconds + grove));
}
function $e(glidePrime) {
  return glidePrime.animatesEntrance
    ? apex(glidePrime.elapsedSeconds / oak, 0, 1)
    : 1;
}
function lunar(honeyPrime, irisPrime) {
  return honeyPrime.animatesEntrance
    ? apex(
        (honeyPrime.elapsedSeconds - irisPrime.appearsAtSeconds) / fern,
        0,
        1,
      )
    : 1;
}
function moss(jewelPrime, knollPrime, lunarPrime, mossPrime, northPrime) {
  return quest(jewelPrime, knollPrime - elm * 2, northPrime)
    .slice(-4)
    .flatMap((item, index) => {
      let orbitPrime =
        (knollPrime - storm(item, jewelPrime.fontSize, northPrime)) / 2;
      return item.flatMap((_item) => {
        let pinePrime = Math.max(
            northPrime(_item.character, jewelPrime.fontSize),
            4,
          ),
          questPrime = /\s/u.test(_item.character)
            ? []
            : [
                {
                  appearsAtSeconds: mossPrime
                    ? lunarPrime + index * _t
                    : lunarPrime - fern,
                  bonus: _item.bonus,
                  character: _item.character,
                  falling: false,
                  height: Math.max(brook, jewelPrime.fontSize + 3),
                  id: _item.id,
                  velocityX: 0,
                  velocityY: 0,
                  width: pinePrime,
                  x: orbitPrime,
                  y:
                    dusk +
                    index * (Math.max(brook, jewelPrime.fontSize + 3) + cliff),
                },
              ];
        return ((orbitPrime += pinePrime + cliff), questPrime);
      });
    });
}
function north(ridgePrime, stormPrime) {
  let tidePrime = apex(
      ridgePrime.ball.x,
      stormPrime.x - 1,
      stormPrime.x + stormPrime.width + 1,
    ),
    unityPrime = apex(
      ridgePrime.ball.y,
      stormPrime.y - 1,
      stormPrime.y + stormPrime.height + 1,
    ),
    valePrime = ridgePrime.ball.x - tidePrime,
    wavePrime = ridgePrime.ball.y - unityPrime;
  return (
    valePrime * valePrime + wavePrime * wavePrime <=
    ridgePrime.ball.radius * ridgePrime.ball.radius
  );
}
function orbit(apexPrime, brookPrime, cliffPrime) {
  let duskPrime = apexPrime.paddle.width / 2;
  apexPrime.paddle.x = apex(
    apexPrime.paddle.x + apex(cliffPrime, -1, 1) * 440 * brookPrime,
    duskPrime,
    apexPrime.width - duskPrime,
  );
  let elmPrime = apexPrime.ball;
  elmPrime.x += elmPrime.velocityX * brookPrime;
  elmPrime.y += elmPrime.velocityY * brookPrime;
  elmPrime.x - elmPrime.radius <= 0 && elmPrime.velocityX < 0
    ? ((elmPrime.x = elmPrime.radius), (elmPrime.velocityX *= -1))
    : elmPrime.x + elmPrime.radius >= apexPrime.width &&
      elmPrime.velocityX > 0 &&
      ((elmPrime.x = apexPrime.width - elmPrime.radius),
      (elmPrime.velocityX *= -1));
  elmPrime.y - elmPrime.radius <= 0 &&
    elmPrime.velocityY < 0 &&
    ((elmPrime.y = elmPrime.radius), (elmPrime.velocityY *= -1));
  let fernPrime = apexPrime.paddle.y - apexPrime.paddle.height / 2;
  elmPrime.velocityY > 0 &&
    elmPrime.y + elmPrime.radius >= fernPrime &&
    elmPrime.y - elmPrime.radius <=
      apexPrime.paddle.y + apexPrime.paddle.height / 2 &&
    Math.abs(elmPrime.x - apexPrime.paddle.x) <= duskPrime + elmPrime.radius &&
    ((elmPrime.y = fernPrime - elmPrime.radius),
    (elmPrime.velocityY = -Math.abs(elmPrime.velocityY)),
    (elmPrime.velocityX +=
      ((elmPrime.x - apexPrime.paddle.x) / duskPrime) *
      Math.abs(elmPrime.velocityY) *
      0.45));
  for (let grovePrime of apexPrime.glyphs) {
    if (grovePrime.falling) {
      pine(grovePrime, brookPrime);
      continue;
    }
    if (!(lunar(apexPrime, grovePrime) < 1 || !north(apexPrime, grovePrime))) {
      grovePrime.falling = true;
      grovePrime.velocityX = elmPrime.velocityX * 0.18;
      grovePrime.velocityY = -55;
      apexPrime.combo =
        apexPrime.lastHitAtSeconds != null &&
        apexPrime.elapsedSeconds - apexPrime.lastHitAtSeconds <= nest
          ? Math.min(apexPrime.combo + 1, 5)
          : 1;
      apexPrime.lastHitAtSeconds = apexPrime.elapsedSeconds;
      apexPrime.score += bravo(grovePrime.bonus) * apexPrime.combo;
      elmPrime.velocityY *= -1;
      vale(apexPrime);
      apexPrime.pendingLevel == null &&
        apexPrime.glyphs.every((item) => item.falling) &&
        ((apexPrime.status = "cleared"),
        (apexPrime.completedAtSeconds = apexPrime.elapsedSeconds));
      break;
    }
  }
  elmPrime.y - elmPrime.radius > apexPrime.height &&
    ((apexPrime.status = "lost"),
    (apexPrime.completedAtSeconds = apexPrime.elapsedSeconds));
}
function pine(hillPrime, islePrime) {
  hillPrime.velocityY += 420 * islePrime;
  hillPrime.x += hillPrime.velocityX * islePrime;
  hillPrime.y += hillPrime.velocityY * islePrime;
}
function at(juniperPrime, lagoonPrime) {
  let meadowPrime = new Map(juniperPrime.glyphs.map((item) => [item.id, item]));
  juniperPrime.level = lagoonPrime;
  juniperPrime.glyphs = moss(
    lagoonPrime,
    juniperPrime.width,
    juniperPrime.elapsedSeconds,
    juniperPrime.animatesEntrance,
    juniperPrime.measureText,
  ).map((item) => {
    let nestPrime = meadowPrime.get(item.id);
    return nestPrime?.character === item.character ? nestPrime : item;
  });
  juniperPrime.status === "cleared" &&
    juniperPrime.glyphs.some((item) => !item.falling) &&
    ((juniperPrime.status = "playing"),
    (juniperPrime.completedAtSeconds = null));
}
function quest(oakPrime, petalPrime, quietPrime) {
  let rainPrime = [];
  for (let seedPrime of oakPrime.blocks) {
    let trailPrime = [];
    for (let urnPrime of ridge(seedPrime.glyphs)) {
      let vinePrime = trailPrime.length === 0 ? unity(urnPrime) : urnPrime;
      for (
        trailPrime.length > 0 &&
        storm([...trailPrime, ...vinePrime], oakPrime.fontSize, quietPrime) >
          petalPrime
          ? (rainPrime.push(trailPrime), (trailPrime = unity(vinePrime)))
          : trailPrime.push(...vinePrime);
        storm(trailPrime, oakPrime.fontSize, quietPrime) > petalPrime;
      ) {
        let windPrime = tide(
          trailPrime,
          petalPrime,
          oakPrime.fontSize,
          quietPrime,
        );
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
  for (let canyonPrime of yarrowPrime)
    /\s/u.test(canyonPrime.character) && birchPrime.some(harbor)
      ? (azurePrime.push(birchPrime), (birchPrime = [canyonPrime]))
      : birchPrime.push(canyonPrime);
  return (birchPrime.some(harbor) && azurePrime.push(birchPrime), azurePrime);
}
function storm(dewPrime, everPrime, fieldPrime) {
  return dewPrime.reduce(
    (accumulator, current) =>
      accumulator +
      Math.max(fieldPrime(current.character, everPrime), 4) +
      cliff,
    -1,
  );
}
function tide(grainPrime, havenPrime, inkPrime, jadeitePrime) {
  let kernelPrime = 0;
  for (let [leafPrime, maplePrime] of grainPrime.entries())
    if (
      ((kernelPrime +=
        Math.max(jadeitePrime(maplePrime.character, inkPrime), 4) + cliff),
      kernelPrime > havenPrime)
    )
      return Math.max(leafPrime, 1);
  return grainPrime.length;
}
function unity(nimbusPrime) {
  let opalPrime = nimbusPrime.findIndex(harbor);
  return opalPrime === -1 ? [] : nimbusPrime.slice(opalPrime);
}
function vale(plumePrime) {
  let quillowPrime = Math.hypot(
    plumePrime.ball.velocityX,
    plumePrime.ball.velocityY,
  );
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
  let { playing = true, reducedMotion, level, onExit } = yonderPrime,
    zenithPrime = urn.useRef(null),
    anvilPrime = {
      expiresAt: 0,
      value: 0,
    };
  let beaconPrime = urn.useRef(anvilPrime),
    cragPrime;
  cragPrime = (jettyPrime) => {
    let { event } = jettyPrime;
    beaconPrime.current = {
      expiresAt: globalThis.performance.now() + azure,
      value: quiet(event),
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
    let pondPrime = (quarryPrime, rapidsPrime) => (
      (ledgePrime.font = sage(mirePrime, rapidsPrime)),
      ledgePrime.measureText(quarryPrime).width
    );
    zenithPrime.current == null
      ? (zenithPrime.current = honey({
          animateEntrance: oxbowPrime,
          height: 192,
          level,
          measureText: pondPrime,
          width: nookPrime,
        }))
      : (zenithPrime.current.width !== nookPrime ||
          zenithPrime.current.height !== 192) &&
        jewel(zenithPrime.current, {
          height: 192,
          measureText: pondPrime,
          width: nookPrime,
        });
    rain(ledgePrime, zenithPrime.current, mirePrime);
  };
  let glenPrime = fjordPrime,
    hearthPrime = function (spurPrime, torPrime, updraftPrime, vergePrime) {
      let weirPrime = zenithPrime.current;
      return weirPrime == null
        ? true
        : (iris(
            weirPrime,
            updraftPrime,
            vergePrime < beaconPrime.current.expiresAt
              ? beaconPrime.current.value
              : 0,
          ),
          rain(spurPrime, weirPrime, torPrime),
          weirPrime.status === "lost" ||
          (weirPrime.status === "cleared" &&
            weirPrime.completedAtSeconds != null &&
            weirPrime.elapsedSeconds - weirPrime.completedAtSeconds >= yarrow)
            ? (onExit(), false)
            : true);
    };
  let inletPrime = hearthPrime;
  return (
    <CodexMicroMiniGameComposerHelper26
      {...{
        onFrame: inletPrime,
        onResize: glenPrime,
        playing: playing,
        reducedMotion,
      }}
    />
  );
}
function quiet(yardPrime) {
  return yardPrime.distance < 0.08
    ? 0
    : Math.cos(yardPrime.angle * Math.PI * 2) *
        Math.min(yardPrime.distance / 0.7, 1);
}
