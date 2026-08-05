// Restored from ref/webview/assets/codex-micro-mini-game-composer-BoiUM7yg.js
// Wave FY — full polished body from `codex-micro-mini-game-composer-BoiUM7yg/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 7 (verified 26/33).
// Careful split 1/2 — lane A: glyph pipeline + asteroids engine
/* split-lane-import-depth:1 */

import { ensureComposerEsm_F7_Init } from "../../composer/composer-esm-inits";
import { esmInit } from "../../runtime/rolldown-runtime";
import { isTunAtomEqualToNS } from "../../shell/is-tun-atom-equal-to-ns";

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
  let fjord = copper(
    (dome?.items ?? []).flatMap((item) =>
      item.type === "agentMessage"
        ? delta(isTunAtomEqualToNS(item.text, undefined), item.id)
        : [],
    ),
    marble,
  );
  return fjord.key.length > 0 || eddy.trim().length === 0
    ? fjord
    : copper(delta(isTunAtomEqualToNS(eddy, undefined), "home-title"), nickel);
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
    nook.some(harbor) &&
      (jetty.unshift({
        glyphs: nook,
      }),
      (knob += nook.filter(harbor).length));
  }
  return {
    blocks: jetty,
    fontSize: inlet,
    key:
      jetty.length === 0
        ? ""
        : `${inlet}:${jetty
            .flatMap((item) => item.glyphs)
            .map((item) => `${item.id}:${item.character}`)
            .join("|")}`,
  };
}
function delta(oxbow, pond, quarry = "") {
  return oxbow.flatMap((item, index) => {
    let rapids = `${pond}:${quarry}${index}`;
    return indigo(item)
      ? item.items.flatMap((_item, _index) =>
          falcon(echo(_item.tokens), `${rapids}:item:${_index}`),
        )
      : jade(item)
        ? [item.header, ...item.rows].flatMap((_item, _index) =>
            falcon(
              _item.flatMap((__item, __index) => [
                ...(__index === 0
                  ? []
                  : [
                      {
                        bonus: false,
                        text: " ",
                      },
                    ]),
                ...echo(__item.tokens),
              ]),
              `${rapids}:row:${_index}`,
            ),
          )
        : item.type === "blockquote" &&
            "tokens" in item &&
            Array.isArray(item.tokens)
          ? delta(item.tokens, pond, `${quarry}${index}:`)
          : item.type === "code" && "text" in item
            ? falcon(
                [
                  {
                    bonus: true,
                    text: item.text,
                  },
                ],
                rapids,
              )
            : item.type === "space" ||
                item.type === "hr" ||
                item.type === "def" ||
                item.type === "html" ||
                item.type === "image"
              ? []
              : "tokens" in item && Array.isArray(item.tokens)
                ? falcon(echo(item.tokens, item.type === "heading"), rapids)
                : "text" in item && typeof item.text == "string"
                  ? falcon(
                      [
                        {
                          bonus: false,
                          text: item.text,
                        },
                      ],
                      rapids,
                    )
                  : [];
  });
}
function echo(spur, tor = false) {
  return spur.flatMap((item) =>
    item.type === "image"
      ? []
      : item.type === "br"
        ? [
            {
              bonus: false,
              text: " ",
            },
          ]
        : "tokens" in item && Array.isArray(item.tokens)
          ? echo(
              item.tokens,
              tor || item.type === "strong" || item.type === "codespan",
            )
          : "text" in item && typeof item.text == "string"
            ? [
                {
                  bonus: tor || item.type === "codespan",
                  text: item.text,
                },
              ]
            : [],
  );
}
function falcon(updraft, verge) {
  let weir = true,
    yard = updraft.flatMap((item, index) =>
      Array.from(onyx.segment(item.text)).flatMap(
        ({ index: _index, segment }) => {
          let anchor = /\s/u.test(segment);
          if (anchor && weir) return [];
          weir = anchor;
          let bolt = anchor ? " " : segment;
          return [
            {
              bonus: item.bonus || (!anchor && /[^\p{L}\p{N}]/u.test(bolt)),
              character: bolt,
              id: `${verge}:${index}:${_index}`,
            },
          ];
        },
      ),
    );
  return (
    yard.at(-1)?.character === " " && yard.pop(),
    yard.some(harbor)
      ? [
          {
            glyphs: yard,
          },
        ]
      : []
  );
}
function gamma(cog, disc) {
  if (cog.filter(harbor).length <= disc) return cog;
  let edge = 0,
    forge = cog.length;
  for (; forge > 0 && edge < disc; ) {
    --forge;
    let hinge = cog[forge];
    hinge != null && harbor(hinge) && (edge += 1);
  }
  let gear = cog.findIndex(
    (item, index) => index >= forge && /\s/u.test(item.character),
  );
  return cog.slice(gear === -1 ? forge : gear + 1);
}
function harbor(iron) {
  return !/\s/u.test(iron.character);
}
function indigo(joint) {
  return (
    joint.type === "list" && "items" in joint && Array.isArray(joint.items)
  );
}
function jade(keystone) {
  return (
    keystone.type === "table" &&
    "header" in keystone &&
    Array.isArray(keystone.header) &&
    "rows" in keystone &&
    Array.isArray(keystone.rows)
  );
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
      granularity: "grapheme",
    });
  });
function quartz({ animateEntrance = true, height, level, width }) {
  return {
    animatesEntrance: animateEntrance,
    asteroids: umbra(level, width, height),
    bullets: [],
    elapsedSeconds: 0,
    height,
    joystick: {
      angle: 0,
      distance: 0,
    },
    level,
    score: 0,
    ship: {
      angle: 0.75,
      radius: jasper,
      x: width / 2,
      y: height / 2,
    },
    status: "playing",
    width,
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
    y: latch.ship.y + piston * ivory,
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
    clamp = Math.min(
      Math.max(0, torque.elapsedSeconds - Math.max(axle, bracket)),
      0.05,
    );
  for (; clamp > 0 && torque.status === "playing"; ) {
    let drill = Math.min(nova, clamp);
    xenon(torque, drill);
    clamp -= drill;
  }
}
function timber(engine, { height, width }) {
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
  return jacket.animatesEntrance
    ? basalt(jacket.elapsedSeconds / prism, 0, 1)
    : 1;
}
function umbra(knurl, lever, mount) {
  let nozzle = knurl.blocks.flatMap((item) => item.glyphs).filter(harbor),
    platen = nozzle.length > 0 ? nozzle : olive,
    ratchet = Math.max(Math.ceil(platen.length / cedar), 1);
  return platen
    .filter((item, index) => index % ratchet === 0)
    .slice(0, cedar)
    .map((item, index) => violet(item, index, lever, mount));
}
function violet(shim, tappet, arbor, bushing) {
  let collar = tappet % 4,
    dowel = ((Math.floor(tappet / 4) * 47 + collar * 23) % 100) / 100,
    flange = 24 + (tappet % 4) * 5,
    gib = shim.bonus ? flint : ember;
  return collar === 0
    ? {
        ...shim,
        radius: gib,
        velocityX: 0,
        velocityY: flange,
        x: willow(arbor, dowel),
        y: -gib,
      }
    : collar === 1
      ? {
          ...shim,
          radius: gib,
          velocityX: -flange,
          velocityY: 0,
          x: arbor + gib,
          y: willow(bushing, dowel),
        }
      : collar === 2
        ? {
            ...shim,
            radius: gib,
            velocityX: 0,
            velocityY: -flange,
            x: willow(arbor, dowel),
            y: bushing + gib,
          }
        : {
            ...shim,
            radius: gib,
            velocityX: flange,
            velocityY: 0,
            x: -gib,
            y: willow(bushing, dowel),
          };
}
function willow(hub, idler) {
  let jig = Math.max(hub / 2 - kelp - daisy, 0),
    keeper = idler * jig * 2;
  return keeper <= jig ? daisy + keeper : hub / 2 + kelp + keeper - jig;
}
function xenon(lug, mandrel) {
  let { joystick } = lug;
  if (joystick.distance >= mint) {
    lug.ship.angle = joystick.angle;
    let nipple = Math.min(joystick.distance, 1),
      orifice = joystick.angle * Math.PI * 2;
    lug.ship.x = basalt(
      lug.ship.x + Math.cos(orifice) * lotus * nipple * mandrel,
      lug.ship.radius,
      lug.width - lug.ship.radius,
    );
    lug.ship.y = basalt(
      lug.ship.y + Math.sin(orifice) * lotus * nipple * mandrel,
      lug.ship.radius,
      lug.height - lug.ship.radius,
    );
  }
  for (let pin of lug.bullets) {
    pin.x += pin.velocityX * mandrel;
    pin.y += pin.velocityY * mandrel;
  }
  lug.bullets = lug.bullets.filter((item) => yellow(lug, item));
  for (let race = lug.asteroids.length - 1; race >= 0; --race) {
    let sleeve = lug.asteroids[race];
    if (sleeve == null) continue;
    sleeve.x += sleeve.velocityX * mandrel;
    sleeve.y += sleeve.velocityY * mandrel;
    sleeve.x < -sleeve.radius
      ? (sleeve.x = lug.width + sleeve.radius)
      : sleeve.x > lug.width + sleeve.radius && (sleeve.x = -sleeve.radius);
    sleeve.y < -sleeve.radius
      ? (sleeve.y = lug.height + sleeve.radius)
      : sleeve.y > lug.height + sleeve.radius && (sleeve.y = -sleeve.radius);
    let trunnion = lug.bullets.findIndex((item) => zinc(item, sleeve));
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
  return (
    cam.x >= -cam.radius &&
    cam.x <= boss.width + cam.radius &&
    cam.y >= -cam.radius &&
    cam.y <= boss.height + cam.radius
  );
}
function zinc(detent, eccentric) {
  let follower = detent.x - eccentric.x,
    guide = detent.y - eccentric.y;
  return (
    follower * follower + guide * guide <=
    (detent.radius + eccentric.radius) ** 2
  );
}
function amber(helix, impeller) {
  let journal = helix.ship.x - impeller.x,
    kingpin = helix.ship.y - impeller.y;
  return (
    journal * journal + kingpin * kingpin <=
    (helix.ship.radius + impeller.radius) ** 2
  );
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
      id: `fallback:${quillshaft}`,
    }));
    prism = 0.28;
  });
