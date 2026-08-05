// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 16/17
/* split-lane-import-depth:1 */
// AST split 2/5

import { isle4 } from "./part-16-a";
import { Vale4, Wave4 } from "./part-16-d";
import { Apex4 } from "./part-16-e";
import {
  clampFloatingWindowRect,
  resizeFloatingWindowRect,
} from "../../hooks/use-floating-window-pointer-drag";

export function DebugModalN(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function debugModalT(unity26: unknown) {
  let { onClose } = unity26,
    [vale26, wave26] = isle4.useState(Wave4),
    [apex26, brook26] = isle4.useState(Vale4),
    cliff26,
    dusk26;
  cliff26 = () => {
    let isle26 = () => {
      let juniper26 = Apex4();
      wave26(juniper26);
      brook26((lagoon26) => clampFloatingWindowRect(lagoon26, juniper26));
    };
    return (
      window.addEventListener("resize", isle26),
      () => {
        window.removeEventListener("resize", isle26);
      }
    );
  };
  dusk26 = [];
  isle4.useEffect(cliff26, dusk26);
  let elm26 = {
    height: apex26.height,
    left: apex26.x,
    top: apex26.y,
    width: apex26.width,
  };
  let fern26, grove26;
  fern26 = (meadow26) => {
    brook26((nest26) =>
      clampFloatingWindowRect(
        {
          ...nest26,
          x: nest26.x + meadow26.x,
          y: nest26.y + meadow26.y,
        },
        vale26,
      ),
    );
  };
  grove26 = (oak26) => {
    brook26((petal26) => resizeFloatingWindowRect(petal26, oak26, vale26));
  };
  let hill26 = (
    <DebugModalN
      {...{
        onClose,
        onMove: fern26,
        onResize: grove26,
      }}
    />
  );
  return (
    <div
      role="dialog"
      aria-modal={false}
      aria-label="Debug"
      className="fixed z-50 flex flex-col overflow-hidden rounded-2xl bg-token-dropdown-background/90 text-token-foreground shadow-lg ring-[0.5px] ring-token-border backdrop-blur-xl"
      style={elm26}
    >
      {hill26}
    </div>
  );
}

export function Eagle2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Falcon(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Frost2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Glide2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Iris2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Jewel2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Knoll2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Lotus2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function Moss2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export function North2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
