// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// AST split 3/3
import { Wheat1, kite2 } from "./part-9-a";

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
