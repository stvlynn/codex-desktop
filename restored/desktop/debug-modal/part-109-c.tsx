// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Careful split 9b
// AST split 3/3

import { Umbra2, Wheat1, Yellow2, Zinc2, kite2 } from "./part-109-a";

function Falcon2(zephyr18, acorn18) {
  return zephyr18
    ? Gamma2(zephyr18)
      ? kite2.createElement(zephyr18, acorn18)
      : zephyr18
    : null;
}

function Gamma2(bloom18) {
  return Harbor2(bloom18) || typeof bloom18 == "function" || Indigo2(bloom18);
}

function Harbor2(coral18) {
  return (
    typeof coral18 == "function" &&
    (() => {
      let drift18 = Object.getPrototypeOf(coral18);
      return drift18.prototype && drift18.prototype.isReactComponent;
    })()
  );
}

function Indigo2(eagle18) {
  return (
    typeof eagle18 == "object" &&
    typeof eagle18.$$typeof == "symbol" &&
    ["react.memo", "react.forward_ref"].includes(eagle18.$$typeof.description)
  );
}

function Jade2(frost18) {
  let glide18 = {
      state: {},
      onStateChange: () => {},
      renderFallbackValue: null,
      ...frost18,
    },
    [honey18] = kite2.useState(() => ({
      current: Wheat1(glide18),
    })),
    [iris18, jewel18] = kite2.useState(() => honey18.current.initialState);
  return (
    honey18.current.setOptions((knoll18) => ({
      ...knoll18,
      ...frost18,
      state: {
        ...iris18,
        ...frost18.state,
      },
      onStateChange: (lunar18) => {
        jewel18(lunar18);
        frost18.onStateChange == null || frost18.onStateChange(lunar18);
      },
    })),
    honey18.current
  );
}

function Marble2(moss18, north18) {
  if (moss18 == null) return null;
  let orbit18 = new Map();
  for (let pine18 of north18) {
    let quest18 = orbit18.get(pine18.parentPid) ?? [];
    quest18.push(pine18);
    orbit18.set(pine18.parentPid, quest18);
  }
  return Umbra2(moss18, orbit18);
}

function Nickel2(ridge18) {
  let storm18 = ridge18.trim();
  if (storm18.length === 0) return "(command unavailable)";
  let tide18 = /^"([^"]+)"/.exec(storm18);
  if (tide18 != null) return Yellow2(tide18[1]);
  let unity18 = /^.+?\/([^/]+)\.app\/Contents\/MacOS\/(.+)$/.exec(storm18);
  if (unity18 != null) {
    let wave18 = unity18[1],
      apex18 = unity18[2];
    if (apex18 === wave18 || apex18.startsWith(`${wave18} `)) return wave18;
  }
  let vale18 = storm18.split(/\s+/, 1)[0];
  return Yellow2(vale18);
}

function Onyx2(brook18) {
  let cliff18 = {
    "app-server": null,
    "codex-app": null,
    "other-child-processes": null,
    "rollout-child-processes": null,
  };
  function Dusk18(elm18, fern18) {
    let grove18 = Zinc2(brook18, elm18, fern18),
      { rssKb } = elm18.process;
    rssKb != null &&
      Number.isFinite(rssKb) &&
      (cliff18[grove18] = (cliff18[grove18] ?? 0) + rssKb);
    for (let hill18 of elm18.children)
      Dusk18(hill18, fern18 || grove18 === "app-server");
  }
  return (Dusk18(brook18, false), cliff18);
}

function Pearl2(isle18, juniper18) {
  let lagoon18 = [];
  function Meadow18(nest18, oak18) {
    let petal18 = Zinc2(isle18, nest18, oak18);
    (juniper18 === "all" || petal18 === juniper18) && lagoon18.push(nest18);
    for (let quiet18 of nest18.children)
      Meadow18(quiet18, oak18 || petal18 === "app-server");
  }
  return (Meadow18(isle18, false), lagoon18);
}

function Quartz2(rain18) {
  return rain18 == null || !Number.isFinite(rain18)
    ? "n/a"
    : rain18 >= 1048576
      ? `${(rain18 / 1048576).toFixed(2)} GB`
      : rain18 >= 1024
        ? `${(rain18 / 1024).toFixed(1)} MB`
        : `${rain18} KB`;
}
