// Restored from ref/webview/assets/blockDiagram-DXYQGD6D-CXt5OC3k.js
// Mermaid block diagram definition (alt). app-initial Ait/Sit → d3-shape line + curveBasis.
// Stage 3 candidate: app-initial aliases → vendor shims; auto-renamed export→local.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit } from "../../runtime/rolldown-runtime";
import { line as AppInitialAit } from "../../vendor/d3-shape-line-pie-stack";
import { curveBasis as AppInitialSit } from "../../vendor/d3-shape-curves";
import { H as lodashH, U as lodashU } from "../lodash-hNqv-runtime";
import {
  _ as distUnderscore,
  m as distM,
  t as distT,
} from "../../vendor/khroma";
import {
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt";
import {
  A as chunkICPOFSXXA,
  D as chunkICPOFSXXD,
  R as chunkICPOFSXXR,
  a as _chunkICPOFSXXA,
  b as chunkICPOFSXXB,
  c as chunkICPOFSXXC,
  s as chunkICPOFSXXS,
  w as chunkICPOFSXXW,
  y as chunkICPOFSXXY,
} from "../../diagrams/mermaid-config-alt";
import {
  chunk5PVQY5BWC,
  chunk5PVQY5BWG,
  chunk5PVQY5BWI,
  chunk5PVQY5BWU,
} from "./mermaid-common-utils-alt";
import {
  chunkU2HBQHQKA as chunkU2HBQHQKI,
  chunkU2HBQHQKN,
} from "./mermaid-create-text-alt";
import { initGetIconStylesChunk as chunkFMBD7UC4N, getIconStyles as chunkFMBD7UC4T } from "../../diagrams/get-icon-styles";
import {
  getLineFunctionsWithOffset as chunkBSJP7CBPN,
  initMermaidLineOffsetAltChunk as chunkBSJP7CBPR,
  computeLabelTransform as chunkBSJP7CBPT,
} from "../../diagrams/line-offset-helpers-alt";
import {
  getSubGraphTitleMargins as chunkZZ45TVLEN,
  initSubGraphTitleMarginsAlt as chunkZZ45TVLER,
  configureLabelImages as chunkZZ45TVLET,
} from "../../diagrams/subgraph-title-margins-alt";
import {
  Graph as blockDiagramDXYQGD6DImport1,
  t as blockDiagramDXYQGD6DImport2,
} from "../../vendor/graphlib";
function blockDiagramDXYQGD6DHelper1(blockDiagramDXYQGD6DInput99) {
  switch (
    (chunkAGHRB4JFI.debug("typeStr2Type", blockDiagramDXYQGD6DInput99),
    blockDiagramDXYQGD6DInput99)
  ) {
    case "[]":
      return "square";
    case "()":
      return (chunkAGHRB4JFI.debug("we have a round"), "round");
    case "(())":
      return "circle";
    case ">]":
      return "rect_left_inv_arrow";
    case "{}":
      return "diamond";
    case "{{}}":
      return "hexagon";
    case "([])":
      return "stadium";
    case "[[]]":
      return "subroutine";
    case "[()]":
      return "cylinder";
    case "((()))":
      return "doublecircle";
    case "[//]":
      return "lean_right";
    case "[\\\\]":
      return "lean_left";
    case "[/\\]":
      return "trapezoid";
    case "[\\/]":
      return "inv_trapezoid";
    case "<[]>":
      return "block_arrow";
    default:
      return "na";
  }
}
function blockDiagramDXYQGD6DHelper2(blockDiagramDXYQGD6DInput209) {
  switch (
    (chunkAGHRB4JFI.debug("typeStr2Type", blockDiagramDXYQGD6DInput209),
    blockDiagramDXYQGD6DInput209)
  ) {
    case "==":
      return "thick";
    default:
      return "normal";
  }
}
function blockDiagramDXYQGD6DHelper3(blockDiagramDXYQGD6DInput192) {
  switch (blockDiagramDXYQGD6DInput192.replace(/^[\s-]+|[\s-]+$/g, "")) {
    case "x":
      return "arrow_cross";
    case "o":
      return "arrow_circle";
    case ">":
      return "arrow_point";
    default:
      return "";
  }
}
function blockDiagramDXYQGD6DHelper4(
  blockDiagramDXYQGD6DInput166,
  blockDiagramDXYQGD6DInput167,
) {
  if (
    blockDiagramDXYQGD6DInput166 === 0 ||
    !Number.isInteger(blockDiagramDXYQGD6DInput166)
  )
    throw Error("Columns must be an integer !== 0.");
  if (
    blockDiagramDXYQGD6DInput167 < 0 ||
    !Number.isInteger(blockDiagramDXYQGD6DInput167)
  )
    throw Error(
      "Position must be a non-negative integer." + blockDiagramDXYQGD6DInput167,
    );
  return blockDiagramDXYQGD6DInput166 < 0
    ? {
        px: blockDiagramDXYQGD6DInput167,
        py: 0,
      }
    : blockDiagramDXYQGD6DInput166 === 1
      ? {
          px: 0,
          py: blockDiagramDXYQGD6DInput167,
        }
      : {
          px: blockDiagramDXYQGD6DInput167 % blockDiagramDXYQGD6DInput166,
          py: Math.floor(
            blockDiagramDXYQGD6DInput167 / blockDiagramDXYQGD6DInput166,
          ),
        };
}
function blockDiagramDXYQGD6DHelper5(
  blockDiagramDXYQGD6DInput22,
  blockDiagramDXYQGD6DInput23,
  blockDiagramDXYQGD6DInput24 = 0,
  blockDiagramDXYQGD6DInput25 = 0,
) {
  chunkAGHRB4JFI.debug(
    "setBlockSizes abc95 (start)",
    blockDiagramDXYQGD6DInput22.id,
    blockDiagramDXYQGD6DInput22?.size?.x,
    "block width =",
    blockDiagramDXYQGD6DInput22?.size,
    "siblingWidth",
    blockDiagramDXYQGD6DInput24,
  );
  blockDiagramDXYQGD6DInput22?.size?.width ||
    (blockDiagramDXYQGD6DInput22.size = {
      width: blockDiagramDXYQGD6DInput24,
      height: blockDiagramDXYQGD6DInput25,
      x: 0,
      y: 0,
    });
  let blockDiagramDXYQGD6DBinding161 = 0,
    blockDiagramDXYQGD6DBinding162 = 0;
  if (blockDiagramDXYQGD6DInput22.children?.length > 0) {
    for (let blockDiagramDXYQGD6DBinding552 of blockDiagramDXYQGD6DInput22.children)
      blockDiagramDXYQGD6DHelper5(
        blockDiagramDXYQGD6DBinding552,
        blockDiagramDXYQGD6DInput23,
      );
    let blockDiagramDXYQGD6DBinding187 = blockDiagramDXYQGD6DBinding29(
      blockDiagramDXYQGD6DInput22,
    );
    blockDiagramDXYQGD6DBinding161 = blockDiagramDXYQGD6DBinding187.width;
    blockDiagramDXYQGD6DBinding162 = blockDiagramDXYQGD6DBinding187.height;
    chunkAGHRB4JFI.debug(
      "setBlockSizes abc95 maxWidth of",
      blockDiagramDXYQGD6DInput22.id,
      ":s children is ",
      blockDiagramDXYQGD6DBinding161,
      blockDiagramDXYQGD6DBinding162,
    );
    for (let blockDiagramDXYQGD6DBinding404 of blockDiagramDXYQGD6DInput22.children)
      blockDiagramDXYQGD6DBinding404.size &&
        (chunkAGHRB4JFI.debug(
          `abc95 Setting size of children of ${blockDiagramDXYQGD6DInput22.id} id=${blockDiagramDXYQGD6DBinding404.id} ${blockDiagramDXYQGD6DBinding161} ${blockDiagramDXYQGD6DBinding162} ${JSON.stringify(blockDiagramDXYQGD6DBinding404.size)}`,
        ),
        (blockDiagramDXYQGD6DBinding404.size.width =
          blockDiagramDXYQGD6DBinding161 *
            (blockDiagramDXYQGD6DBinding404.widthInColumns ?? 1) +
          blockDiagramDXYQGD6DBinding28 *
            ((blockDiagramDXYQGD6DBinding404.widthInColumns ?? 1) - 1)),
        (blockDiagramDXYQGD6DBinding404.size.height =
          blockDiagramDXYQGD6DBinding162),
        (blockDiagramDXYQGD6DBinding404.size.x = 0),
        (blockDiagramDXYQGD6DBinding404.size.y = 0),
        chunkAGHRB4JFI.debug(
          `abc95 updating size of ${blockDiagramDXYQGD6DInput22.id} children child:${blockDiagramDXYQGD6DBinding404.id} maxWidth:${blockDiagramDXYQGD6DBinding161} maxHeight:${blockDiagramDXYQGD6DBinding162}`,
        ));
    for (let blockDiagramDXYQGD6DBinding551 of blockDiagramDXYQGD6DInput22.children)
      blockDiagramDXYQGD6DHelper5(
        blockDiagramDXYQGD6DBinding551,
        blockDiagramDXYQGD6DInput23,
        blockDiagramDXYQGD6DBinding161,
        blockDiagramDXYQGD6DBinding162,
      );
    let blockDiagramDXYQGD6DBinding188 =
        blockDiagramDXYQGD6DInput22.columns ?? -1,
      blockDiagramDXYQGD6DBinding189 = 0;
    for (let blockDiagramDXYQGD6DBinding550 of blockDiagramDXYQGD6DInput22.children)
      blockDiagramDXYQGD6DBinding189 +=
        blockDiagramDXYQGD6DBinding550.widthInColumns ?? 1;
    let blockDiagramDXYQGD6DBinding190 =
      blockDiagramDXYQGD6DInput22.children.length;
    blockDiagramDXYQGD6DBinding188 > 0 &&
      blockDiagramDXYQGD6DBinding188 < blockDiagramDXYQGD6DBinding189 &&
      (blockDiagramDXYQGD6DBinding190 = blockDiagramDXYQGD6DBinding188);
    let blockDiagramDXYQGD6DBinding191 = Math.ceil(
        blockDiagramDXYQGD6DBinding189 / blockDiagramDXYQGD6DBinding190,
      ),
      blockDiagramDXYQGD6DBinding192 =
        blockDiagramDXYQGD6DBinding190 *
          (blockDiagramDXYQGD6DBinding161 + blockDiagramDXYQGD6DBinding28) +
        blockDiagramDXYQGD6DBinding28,
      blockDiagramDXYQGD6DBinding193 =
        blockDiagramDXYQGD6DBinding191 *
          (blockDiagramDXYQGD6DBinding162 + blockDiagramDXYQGD6DBinding28) +
        blockDiagramDXYQGD6DBinding28;
    if (blockDiagramDXYQGD6DBinding192 < blockDiagramDXYQGD6DInput24) {
      chunkAGHRB4JFI.debug(
        `Detected to small sibling: abc95 ${blockDiagramDXYQGD6DInput22.id} siblingWidth ${blockDiagramDXYQGD6DInput24} siblingHeight ${blockDiagramDXYQGD6DInput25} width ${blockDiagramDXYQGD6DBinding192}`,
      );
      blockDiagramDXYQGD6DBinding192 = blockDiagramDXYQGD6DInput24;
      blockDiagramDXYQGD6DBinding193 = blockDiagramDXYQGD6DInput25;
      let blockDiagramDXYQGD6DBinding335 =
          (blockDiagramDXYQGD6DInput24 -
            blockDiagramDXYQGD6DBinding190 * blockDiagramDXYQGD6DBinding28 -
            blockDiagramDXYQGD6DBinding28) /
          blockDiagramDXYQGD6DBinding190,
        blockDiagramDXYQGD6DBinding336 =
          (blockDiagramDXYQGD6DInput25 -
            blockDiagramDXYQGD6DBinding191 * blockDiagramDXYQGD6DBinding28 -
            blockDiagramDXYQGD6DBinding28) /
          blockDiagramDXYQGD6DBinding191;
      chunkAGHRB4JFI.debug(
        "Size indata abc88",
        blockDiagramDXYQGD6DInput22.id,
        "childWidth",
        blockDiagramDXYQGD6DBinding335,
        "maxWidth",
        blockDiagramDXYQGD6DBinding161,
      );
      chunkAGHRB4JFI.debug(
        "Size indata abc88",
        blockDiagramDXYQGD6DInput22.id,
        "childHeight",
        blockDiagramDXYQGD6DBinding336,
        "maxHeight",
        blockDiagramDXYQGD6DBinding162,
      );
      chunkAGHRB4JFI.debug(
        "Size indata abc88 xSize",
        blockDiagramDXYQGD6DBinding190,
        "padding",
        blockDiagramDXYQGD6DBinding28,
      );
      for (let blockDiagramDXYQGD6DBinding534 of blockDiagramDXYQGD6DInput22.children)
        blockDiagramDXYQGD6DBinding534.size &&
          ((blockDiagramDXYQGD6DBinding534.size.width =
            blockDiagramDXYQGD6DBinding335),
          (blockDiagramDXYQGD6DBinding534.size.height =
            blockDiagramDXYQGD6DBinding336),
          (blockDiagramDXYQGD6DBinding534.size.x = 0),
          (blockDiagramDXYQGD6DBinding534.size.y = 0));
    }
    if (
      (chunkAGHRB4JFI.debug(
        `abc95 (finale calc) ${blockDiagramDXYQGD6DInput22.id} xSize ${blockDiagramDXYQGD6DBinding190} ySize ${blockDiagramDXYQGD6DBinding191} columns ${blockDiagramDXYQGD6DBinding188}${blockDiagramDXYQGD6DInput22.children.length} width=${Math.max(blockDiagramDXYQGD6DBinding192, blockDiagramDXYQGD6DInput22.size?.width || 0)}`,
      ),
      blockDiagramDXYQGD6DBinding192 <
        (blockDiagramDXYQGD6DInput22?.size?.width || 0))
    ) {
      blockDiagramDXYQGD6DBinding192 =
        blockDiagramDXYQGD6DInput22?.size?.width || 0;
      let blockDiagramDXYQGD6DBinding450 =
        blockDiagramDXYQGD6DBinding188 > 0
          ? Math.min(
              blockDiagramDXYQGD6DInput22.children.length,
              blockDiagramDXYQGD6DBinding188,
            )
          : blockDiagramDXYQGD6DInput22.children.length;
      if (blockDiagramDXYQGD6DBinding450 > 0) {
        let blockDiagramDXYQGD6DBinding522 =
          (blockDiagramDXYQGD6DBinding192 -
            blockDiagramDXYQGD6DBinding450 * blockDiagramDXYQGD6DBinding28 -
            blockDiagramDXYQGD6DBinding28) /
          blockDiagramDXYQGD6DBinding450;
        chunkAGHRB4JFI.debug(
          "abc95 (growing to fit) width",
          blockDiagramDXYQGD6DInput22.id,
          blockDiagramDXYQGD6DBinding192,
          blockDiagramDXYQGD6DInput22.size?.width,
          blockDiagramDXYQGD6DBinding522,
        );
        for (let blockDiagramDXYQGD6DBinding549 of blockDiagramDXYQGD6DInput22.children)
          blockDiagramDXYQGD6DBinding549.size &&
            (blockDiagramDXYQGD6DBinding549.size.width =
              blockDiagramDXYQGD6DBinding522);
      }
    }
    blockDiagramDXYQGD6DInput22.size = {
      width: blockDiagramDXYQGD6DBinding192,
      height: blockDiagramDXYQGD6DBinding193,
      x: 0,
      y: 0,
    };
  }
  chunkAGHRB4JFI.debug(
    "setBlockSizes abc94 (done)",
    blockDiagramDXYQGD6DInput22.id,
    blockDiagramDXYQGD6DInput22?.size?.x,
    blockDiagramDXYQGD6DInput22?.size?.width,
    blockDiagramDXYQGD6DInput22?.size?.y,
    blockDiagramDXYQGD6DInput22?.size?.height,
  );
}
function blockDiagramDXYQGD6DHelper6(
  blockDiagramDXYQGD6DInput20,
  blockDiagramDXYQGD6DInput21,
) {
  chunkAGHRB4JFI.debug(
    `abc85 layout blocks (=>layoutBlocks) ${blockDiagramDXYQGD6DInput20.id} x: ${blockDiagramDXYQGD6DInput20?.size?.x} y: ${blockDiagramDXYQGD6DInput20?.size?.y} width: ${blockDiagramDXYQGD6DInput20?.size?.width}`,
  );
  let blockDiagramDXYQGD6DBinding160 =
    blockDiagramDXYQGD6DInput20.columns ?? -1;
  if (
    (chunkAGHRB4JFI.debug(
      "layoutBlocks columns abc95",
      blockDiagramDXYQGD6DInput20.id,
      "=>",
      blockDiagramDXYQGD6DBinding160,
      blockDiagramDXYQGD6DInput20,
    ),
    blockDiagramDXYQGD6DInput20.children &&
      blockDiagramDXYQGD6DInput20.children.length > 0)
  ) {
    let blockDiagramDXYQGD6DBinding180 =
        blockDiagramDXYQGD6DInput20?.children[0]?.size?.width ?? 0,
      blockDiagramDXYQGD6DBinding181 =
        blockDiagramDXYQGD6DInput20.children.length *
          blockDiagramDXYQGD6DBinding180 +
        (blockDiagramDXYQGD6DInput20.children.length - 1) *
          blockDiagramDXYQGD6DBinding28;
    chunkAGHRB4JFI.debug(
      "widthOfChildren 88",
      blockDiagramDXYQGD6DBinding181,
      "posX",
    );
    let blockDiagramDXYQGD6DBinding182 = new Map();
    {
      let blockDiagramDXYQGD6DBinding451 = 0;
      for (let blockDiagramDXYQGD6DBinding465 of blockDiagramDXYQGD6DInput20.children) {
        if (!blockDiagramDXYQGD6DBinding465.size) continue;
        let { py } = blockDiagramDXYQGD6DHelper4(
            blockDiagramDXYQGD6DBinding160,
            blockDiagramDXYQGD6DBinding451,
          ),
          blockDiagramDXYQGD6DBinding481 =
            blockDiagramDXYQGD6DBinding182.get(py) ?? 0;
        blockDiagramDXYQGD6DBinding465.size.height >
          blockDiagramDXYQGD6DBinding481 &&
          blockDiagramDXYQGD6DBinding182.set(
            py,
            blockDiagramDXYQGD6DBinding465.size.height,
          );
        let blockDiagramDXYQGD6DBinding482 =
          blockDiagramDXYQGD6DBinding465?.widthInColumns ?? 1;
        blockDiagramDXYQGD6DBinding160 > 0 &&
          (blockDiagramDXYQGD6DBinding482 = Math.min(
            blockDiagramDXYQGD6DBinding482,
            blockDiagramDXYQGD6DBinding160 -
              (blockDiagramDXYQGD6DBinding451 % blockDiagramDXYQGD6DBinding160),
          ));
        blockDiagramDXYQGD6DBinding451 += blockDiagramDXYQGD6DBinding482;
      }
    }
    let blockDiagramDXYQGD6DBinding183 = new Map();
    {
      let blockDiagramDXYQGD6DBinding536 = 0,
        blockDiagramDXYQGD6DBinding537 = [
          ...blockDiagramDXYQGD6DBinding182.keys(),
        ].sort(
          (blockDiagramDXYQGD6DInput281, blockDiagramDXYQGD6DInput282) =>
            blockDiagramDXYQGD6DInput281 - blockDiagramDXYQGD6DInput282,
        );
      for (let blockDiagramDXYQGD6DBinding548 of blockDiagramDXYQGD6DBinding537) {
        blockDiagramDXYQGD6DBinding183.set(
          blockDiagramDXYQGD6DBinding548,
          blockDiagramDXYQGD6DBinding536,
        );
        blockDiagramDXYQGD6DBinding536 +=
          (blockDiagramDXYQGD6DBinding182.get(blockDiagramDXYQGD6DBinding548) ??
            0) + blockDiagramDXYQGD6DBinding28;
      }
    }
    let blockDiagramDXYQGD6DBinding184 = 0;
    chunkAGHRB4JFI.debug(
      "abc91 block?.size?.x",
      blockDiagramDXYQGD6DInput20.id,
      blockDiagramDXYQGD6DInput20?.size?.x,
    );
    let blockDiagramDXYQGD6DBinding185 = blockDiagramDXYQGD6DInput20?.size?.x
        ? blockDiagramDXYQGD6DInput20?.size?.x +
          (-blockDiagramDXYQGD6DInput20?.size?.width / 2 || 0)
        : -blockDiagramDXYQGD6DBinding28,
      blockDiagramDXYQGD6DBinding186 = 0;
    for (let blockDiagramDXYQGD6DBinding235 of blockDiagramDXYQGD6DInput20.children) {
      let blockDiagramDXYQGD6DBinding236 = blockDiagramDXYQGD6DInput20;
      if (!blockDiagramDXYQGD6DBinding235.size) continue;
      let { width, height } = blockDiagramDXYQGD6DBinding235.size,
        { px, py } = blockDiagramDXYQGD6DHelper4(
          blockDiagramDXYQGD6DBinding160,
          blockDiagramDXYQGD6DBinding184,
        );
      if (
        (py != blockDiagramDXYQGD6DBinding186 &&
          ((blockDiagramDXYQGD6DBinding186 = py),
          (blockDiagramDXYQGD6DBinding185 = blockDiagramDXYQGD6DInput20?.size?.x
            ? blockDiagramDXYQGD6DInput20?.size?.x +
              (-blockDiagramDXYQGD6DInput20?.size?.width / 2 || 0)
            : -blockDiagramDXYQGD6DBinding28),
          chunkAGHRB4JFI.debug(
            "New row in layout for block",
            blockDiagramDXYQGD6DInput20.id,
            " and child ",
            blockDiagramDXYQGD6DBinding235.id,
            blockDiagramDXYQGD6DBinding186,
          )),
        chunkAGHRB4JFI.debug(
          `abc89 layout blocks (child) id: ${blockDiagramDXYQGD6DBinding235.id} Pos: ${blockDiagramDXYQGD6DBinding184} (px, py) ${px},${py} (${blockDiagramDXYQGD6DBinding236?.size?.x},${blockDiagramDXYQGD6DBinding236?.size?.y}) parent: ${blockDiagramDXYQGD6DBinding236.id} width: ${width}${blockDiagramDXYQGD6DBinding28}`,
        ),
        blockDiagramDXYQGD6DBinding236.size)
      ) {
        let blockDiagramDXYQGD6DBinding297 = width / 2;
        blockDiagramDXYQGD6DBinding235.size.x =
          blockDiagramDXYQGD6DBinding185 +
          blockDiagramDXYQGD6DBinding28 +
          blockDiagramDXYQGD6DBinding297;
        chunkAGHRB4JFI.debug(
          `abc91 layout blocks (calc) px, pyid:${blockDiagramDXYQGD6DBinding235.id} startingPos=X${blockDiagramDXYQGD6DBinding185} new startingPosX${blockDiagramDXYQGD6DBinding235.size.x} ${blockDiagramDXYQGD6DBinding297} padding=${blockDiagramDXYQGD6DBinding28} width=${width} halfWidth=${blockDiagramDXYQGD6DBinding297} => x:${blockDiagramDXYQGD6DBinding235.size.x} y:${blockDiagramDXYQGD6DBinding235.size.y} ${blockDiagramDXYQGD6DBinding235.widthInColumns} (width * (child?.w || 1)) / 2 ${(width * (blockDiagramDXYQGD6DBinding235?.widthInColumns ?? 1)) / 2}`,
        );
        blockDiagramDXYQGD6DBinding185 =
          blockDiagramDXYQGD6DBinding235.size.x +
          blockDiagramDXYQGD6DBinding297;
        let blockDiagramDXYQGD6DBinding298 =
            blockDiagramDXYQGD6DBinding183.get(py) ?? 0,
          blockDiagramDXYQGD6DBinding299 =
            blockDiagramDXYQGD6DBinding182.get(py) ?? height;
        blockDiagramDXYQGD6DBinding235.size.y =
          blockDiagramDXYQGD6DBinding236.size.y -
          blockDiagramDXYQGD6DBinding236.size.height / 2 +
          blockDiagramDXYQGD6DBinding298 +
          blockDiagramDXYQGD6DBinding299 / 2 +
          blockDiagramDXYQGD6DBinding28;
        chunkAGHRB4JFI.debug(
          `abc88 layout blocks (calc) px, pyid:${blockDiagramDXYQGD6DBinding235.id}startingPosX${blockDiagramDXYQGD6DBinding185}${blockDiagramDXYQGD6DBinding28}${blockDiagramDXYQGD6DBinding297}=>x:${blockDiagramDXYQGD6DBinding235.size.x}y:${blockDiagramDXYQGD6DBinding235.size.y}${blockDiagramDXYQGD6DBinding235.widthInColumns}(width * (child?.w || 1)) / 2${(width * (blockDiagramDXYQGD6DBinding235?.widthInColumns ?? 1)) / 2}`,
        );
      }
      blockDiagramDXYQGD6DBinding235.children &&
        blockDiagramDXYQGD6DHelper6(
          blockDiagramDXYQGD6DBinding235,
          blockDiagramDXYQGD6DInput21,
        );
      let blockDiagramDXYQGD6DBinding237 =
        blockDiagramDXYQGD6DBinding235?.widthInColumns ?? 1;
      blockDiagramDXYQGD6DBinding160 > 0 &&
        (blockDiagramDXYQGD6DBinding237 = Math.min(
          blockDiagramDXYQGD6DBinding237,
          blockDiagramDXYQGD6DBinding160 -
            (blockDiagramDXYQGD6DBinding184 % blockDiagramDXYQGD6DBinding160),
        ));
      blockDiagramDXYQGD6DBinding184 += blockDiagramDXYQGD6DBinding237;
      chunkAGHRB4JFI.debug(
        "abc88 columnsPos",
        blockDiagramDXYQGD6DBinding235,
        blockDiagramDXYQGD6DBinding184,
      );
    }
  }
  chunkAGHRB4JFI.debug(
    `layout blocks (<==layoutBlocks) ${blockDiagramDXYQGD6DInput20.id} x: ${blockDiagramDXYQGD6DInput20?.size?.x} y: ${blockDiagramDXYQGD6DInput20?.size?.y} width: ${blockDiagramDXYQGD6DInput20?.size?.width}`,
  );
}
function blockDiagramDXYQGD6DHelper7(
  blockDiagramDXYQGD6DInput123,
  { minX, minY, maxX, maxY } = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
  },
) {
  if (
    blockDiagramDXYQGD6DInput123.size &&
    blockDiagramDXYQGD6DInput123.id !== "root"
  ) {
    let { x, y, width, height } = blockDiagramDXYQGD6DInput123.size;
    x - width / 2 < minX && (minX = x - width / 2);
    y - height / 2 < minY && (minY = y - height / 2);
    x + width / 2 > maxX && (maxX = x + width / 2);
    y + height / 2 > maxY && (maxY = y + height / 2);
  }
  if (blockDiagramDXYQGD6DInput123.children)
    for (let blockDiagramDXYQGD6DBinding533 of blockDiagramDXYQGD6DInput123.children)
      ({ minX, minY, maxX, maxY } = blockDiagramDXYQGD6DHelper7(
        blockDiagramDXYQGD6DBinding533,
        {
          minX,
          minY,
          maxX,
          maxY,
        },
      ));
  return {
    minX,
    minY,
    maxX,
    maxY,
  };
}
function blockDiagramDXYQGD6DHelper8(blockDiagramDXYQGD6DInput184) {
  let blockDiagramDXYQGD6DBinding475 =
    blockDiagramDXYQGD6DInput184.getBlock("root");
  if (!blockDiagramDXYQGD6DBinding475) return;
  blockDiagramDXYQGD6DHelper5(
    blockDiagramDXYQGD6DBinding475,
    blockDiagramDXYQGD6DInput184,
    0,
    0,
  );
  blockDiagramDXYQGD6DHelper6(
    blockDiagramDXYQGD6DBinding475,
    blockDiagramDXYQGD6DInput184,
  );
  chunkAGHRB4JFI.debug(
    "getBlocks",
    JSON.stringify(blockDiagramDXYQGD6DBinding475, null, 2),
  );
  let { minX, minY, maxX, maxY } = blockDiagramDXYQGD6DHelper7(
      blockDiagramDXYQGD6DBinding475,
    ),
    blockDiagramDXYQGD6DBinding476 = maxY - minY;
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: blockDiagramDXYQGD6DBinding476,
  };
}
function blockDiagramDXYQGD6DHelper9(
  blockDiagramDXYQGD6DInput216,
  blockDiagramDXYQGD6DInput217,
) {
  chunkICPOFSXXW(chunkICPOFSXXB()) &&
    blockDiagramDXYQGD6DInput216 &&
    ((blockDiagramDXYQGD6DInput216.style.width =
      blockDiagramDXYQGD6DInput217.length * 9 + "px"),
    (blockDiagramDXYQGD6DInput216.style.height = "12px"));
}
function blockDiagramDXYQGD6DHelper10(
  blockDiagramDXYQGD6DInput271,
  blockDiagramDXYQGD6DInput272,
) {
  return blockDiagramDXYQGD6DInput271.intersect(blockDiagramDXYQGD6DInput272);
}
function blockDiagramDXYQGD6DHelper11(
  blockDiagramDXYQGD6DInput176,
  blockDiagramDXYQGD6DInput177,
  blockDiagramDXYQGD6DInput178,
  blockDiagramDXYQGD6DInput179,
) {
  var blockDiagramDXYQGD6DBinding457 = blockDiagramDXYQGD6DInput176.x,
    blockDiagramDXYQGD6DBinding458 = blockDiagramDXYQGD6DInput176.y,
    blockDiagramDXYQGD6DBinding459 =
      blockDiagramDXYQGD6DBinding457 - blockDiagramDXYQGD6DInput179.x,
    blockDiagramDXYQGD6DBinding460 =
      blockDiagramDXYQGD6DBinding458 - blockDiagramDXYQGD6DInput179.y,
    blockDiagramDXYQGD6DBinding461 = Math.sqrt(
      blockDiagramDXYQGD6DInput177 *
        blockDiagramDXYQGD6DInput177 *
        blockDiagramDXYQGD6DBinding460 *
        blockDiagramDXYQGD6DBinding460 +
        blockDiagramDXYQGD6DInput178 *
          blockDiagramDXYQGD6DInput178 *
          blockDiagramDXYQGD6DBinding459 *
          blockDiagramDXYQGD6DBinding459,
    ),
    blockDiagramDXYQGD6DBinding462 = Math.abs(
      (blockDiagramDXYQGD6DInput177 *
        blockDiagramDXYQGD6DInput178 *
        blockDiagramDXYQGD6DBinding459) /
        blockDiagramDXYQGD6DBinding461,
    );
  blockDiagramDXYQGD6DInput179.x < blockDiagramDXYQGD6DBinding457 &&
    (blockDiagramDXYQGD6DBinding462 = -blockDiagramDXYQGD6DBinding462);
  var blockDiagramDXYQGD6DBinding463 = Math.abs(
    (blockDiagramDXYQGD6DInput177 *
      blockDiagramDXYQGD6DInput178 *
      blockDiagramDXYQGD6DBinding460) /
      blockDiagramDXYQGD6DBinding461,
  );
  return (
    blockDiagramDXYQGD6DInput179.y < blockDiagramDXYQGD6DBinding458 &&
      (blockDiagramDXYQGD6DBinding463 = -blockDiagramDXYQGD6DBinding463),
    {
      x: blockDiagramDXYQGD6DBinding457 + blockDiagramDXYQGD6DBinding462,
      y: blockDiagramDXYQGD6DBinding458 + blockDiagramDXYQGD6DBinding463,
    }
  );
}
function blockDiagramDXYQGD6DHelper12(
  blockDiagramDXYQGD6DInput268,
  blockDiagramDXYQGD6DInput269,
  blockDiagramDXYQGD6DInput270,
) {
  return blockDiagramDXYQGD6DBinding44(
    blockDiagramDXYQGD6DInput268,
    blockDiagramDXYQGD6DInput269,
    blockDiagramDXYQGD6DInput269,
    blockDiagramDXYQGD6DInput270,
  );
}
function _e(
  blockDiagramDXYQGD6DInput100,
  blockDiagramDXYQGD6DInput101,
  blockDiagramDXYQGD6DInput102,
  blockDiagramDXYQGD6DInput103,
) {
  var blockDiagramDXYQGD6DBinding300 =
      blockDiagramDXYQGD6DInput101.y - blockDiagramDXYQGD6DInput100.y,
    blockDiagramDXYQGD6DBinding301,
    blockDiagramDXYQGD6DBinding302 =
      blockDiagramDXYQGD6DInput100.x - blockDiagramDXYQGD6DInput101.x,
    blockDiagramDXYQGD6DBinding303,
    blockDiagramDXYQGD6DBinding304 =
      blockDiagramDXYQGD6DInput101.x * blockDiagramDXYQGD6DInput100.y -
      blockDiagramDXYQGD6DInput100.x * blockDiagramDXYQGD6DInput101.y,
    blockDiagramDXYQGD6DBinding305,
    blockDiagramDXYQGD6DBinding306,
    blockDiagramDXYQGD6DBinding307,
    blockDiagramDXYQGD6DBinding308 =
      blockDiagramDXYQGD6DBinding300 * blockDiagramDXYQGD6DInput102.x +
      blockDiagramDXYQGD6DBinding302 * blockDiagramDXYQGD6DInput102.y +
      blockDiagramDXYQGD6DBinding304,
    blockDiagramDXYQGD6DBinding309 =
      blockDiagramDXYQGD6DBinding300 * blockDiagramDXYQGD6DInput103.x +
      blockDiagramDXYQGD6DBinding302 * blockDiagramDXYQGD6DInput103.y +
      blockDiagramDXYQGD6DBinding304,
    blockDiagramDXYQGD6DBinding310,
    blockDiagramDXYQGD6DBinding311,
    blockDiagramDXYQGD6DBinding312,
    blockDiagramDXYQGD6DBinding313,
    blockDiagramDXYQGD6DBinding314;
  if (
    !(
      blockDiagramDXYQGD6DBinding308 !== 0 &&
      blockDiagramDXYQGD6DBinding309 !== 0 &&
      blockDiagramDXYQGD6DHelper13(
        blockDiagramDXYQGD6DBinding308,
        blockDiagramDXYQGD6DBinding309,
      )
    ) &&
    ((blockDiagramDXYQGD6DBinding301 =
      blockDiagramDXYQGD6DInput103.y - blockDiagramDXYQGD6DInput102.y),
    (blockDiagramDXYQGD6DBinding303 =
      blockDiagramDXYQGD6DInput102.x - blockDiagramDXYQGD6DInput103.x),
    (blockDiagramDXYQGD6DBinding305 =
      blockDiagramDXYQGD6DInput103.x * blockDiagramDXYQGD6DInput102.y -
      blockDiagramDXYQGD6DInput102.x * blockDiagramDXYQGD6DInput103.y),
    (blockDiagramDXYQGD6DBinding306 =
      blockDiagramDXYQGD6DBinding301 * blockDiagramDXYQGD6DInput100.x +
      blockDiagramDXYQGD6DBinding303 * blockDiagramDXYQGD6DInput100.y +
      blockDiagramDXYQGD6DBinding305),
    (blockDiagramDXYQGD6DBinding307 =
      blockDiagramDXYQGD6DBinding301 * blockDiagramDXYQGD6DInput101.x +
      blockDiagramDXYQGD6DBinding303 * blockDiagramDXYQGD6DInput101.y +
      blockDiagramDXYQGD6DBinding305),
    !(
      blockDiagramDXYQGD6DBinding306 !== 0 &&
      blockDiagramDXYQGD6DBinding307 !== 0 &&
      blockDiagramDXYQGD6DHelper13(
        blockDiagramDXYQGD6DBinding306,
        blockDiagramDXYQGD6DBinding307,
      )
    ) &&
      ((blockDiagramDXYQGD6DBinding310 =
        blockDiagramDXYQGD6DBinding300 * blockDiagramDXYQGD6DBinding303 -
        blockDiagramDXYQGD6DBinding301 * blockDiagramDXYQGD6DBinding302),
      blockDiagramDXYQGD6DBinding310 !== 0))
  )
    return (
      (blockDiagramDXYQGD6DBinding311 = Math.abs(
        blockDiagramDXYQGD6DBinding310 / 2,
      )),
      (blockDiagramDXYQGD6DBinding312 =
        blockDiagramDXYQGD6DBinding302 * blockDiagramDXYQGD6DBinding305 -
        blockDiagramDXYQGD6DBinding303 * blockDiagramDXYQGD6DBinding304),
      (blockDiagramDXYQGD6DBinding313 =
        blockDiagramDXYQGD6DBinding312 < 0
          ? (blockDiagramDXYQGD6DBinding312 - blockDiagramDXYQGD6DBinding311) /
            blockDiagramDXYQGD6DBinding310
          : (blockDiagramDXYQGD6DBinding312 + blockDiagramDXYQGD6DBinding311) /
            blockDiagramDXYQGD6DBinding310),
      (blockDiagramDXYQGD6DBinding312 =
        blockDiagramDXYQGD6DBinding301 * blockDiagramDXYQGD6DBinding304 -
        blockDiagramDXYQGD6DBinding300 * blockDiagramDXYQGD6DBinding305),
      (blockDiagramDXYQGD6DBinding314 =
        blockDiagramDXYQGD6DBinding312 < 0
          ? (blockDiagramDXYQGD6DBinding312 - blockDiagramDXYQGD6DBinding311) /
            blockDiagramDXYQGD6DBinding310
          : (blockDiagramDXYQGD6DBinding312 + blockDiagramDXYQGD6DBinding311) /
            blockDiagramDXYQGD6DBinding310),
      {
        x: blockDiagramDXYQGD6DBinding313,
        y: blockDiagramDXYQGD6DBinding314,
      }
    );
}
function blockDiagramDXYQGD6DHelper13(
  blockDiagramDXYQGD6DInput273,
  blockDiagramDXYQGD6DInput274,
) {
  return blockDiagramDXYQGD6DInput273 * blockDiagramDXYQGD6DInput274 > 0;
}
function blockDiagramDXYQGD6DHelper14(
  blockDiagramDXYQGD6DInput85,
  blockDiagramDXYQGD6DInput86,
  blockDiagramDXYQGD6DInput87,
) {
  var blockDiagramDXYQGD6DBinding285 = blockDiagramDXYQGD6DInput85.x,
    blockDiagramDXYQGD6DBinding286 = blockDiagramDXYQGD6DInput85.y,
    blockDiagramDXYQGD6DBinding287 = [],
    blockDiagramDXYQGD6DBinding288 = 1 / 0,
    blockDiagramDXYQGD6DBinding289 = 1 / 0;
  typeof blockDiagramDXYQGD6DInput86.forEach == "function"
    ? blockDiagramDXYQGD6DInput86.forEach(function (item) {
        blockDiagramDXYQGD6DBinding288 = Math.min(
          blockDiagramDXYQGD6DBinding288,
          item.x,
        );
        blockDiagramDXYQGD6DBinding289 = Math.min(
          blockDiagramDXYQGD6DBinding289,
          item.y,
        );
      })
    : ((blockDiagramDXYQGD6DBinding288 = Math.min(
        blockDiagramDXYQGD6DBinding288,
        blockDiagramDXYQGD6DInput86.x,
      )),
      (blockDiagramDXYQGD6DBinding289 = Math.min(
        blockDiagramDXYQGD6DBinding289,
        blockDiagramDXYQGD6DInput86.y,
      )));
  for (
    var blockDiagramDXYQGD6DBinding290 =
        blockDiagramDXYQGD6DBinding285 -
        blockDiagramDXYQGD6DInput85.width / 2 -
        blockDiagramDXYQGD6DBinding288,
      blockDiagramDXYQGD6DBinding291 =
        blockDiagramDXYQGD6DBinding286 -
        blockDiagramDXYQGD6DInput85.height / 2 -
        blockDiagramDXYQGD6DBinding289,
      blockDiagramDXYQGD6DBinding292 = 0;
    blockDiagramDXYQGD6DBinding292 < blockDiagramDXYQGD6DInput86.length;
    blockDiagramDXYQGD6DBinding292++
  ) {
    var blockDiagramDXYQGD6DBinding293 =
        blockDiagramDXYQGD6DInput86[blockDiagramDXYQGD6DBinding292],
      blockDiagramDXYQGD6DBinding294 =
        blockDiagramDXYQGD6DInput86[
          blockDiagramDXYQGD6DBinding292 <
          blockDiagramDXYQGD6DInput86.length - 1
            ? blockDiagramDXYQGD6DBinding292 + 1
            : 0
        ],
      blockDiagramDXYQGD6DBinding295 = at(
        blockDiagramDXYQGD6DInput85,
        blockDiagramDXYQGD6DInput87,
        {
          x: blockDiagramDXYQGD6DBinding290 + blockDiagramDXYQGD6DBinding293.x,
          y: blockDiagramDXYQGD6DBinding291 + blockDiagramDXYQGD6DBinding293.y,
        },
        {
          x: blockDiagramDXYQGD6DBinding290 + blockDiagramDXYQGD6DBinding294.x,
          y: blockDiagramDXYQGD6DBinding291 + blockDiagramDXYQGD6DBinding294.y,
        },
      );
    blockDiagramDXYQGD6DBinding295 &&
      blockDiagramDXYQGD6DBinding287.push(blockDiagramDXYQGD6DBinding295);
  }
  return blockDiagramDXYQGD6DBinding287.length
    ? (blockDiagramDXYQGD6DBinding287.length > 1 &&
        blockDiagramDXYQGD6DBinding287.sort(
          function (
            blockDiagramDXYQGD6DInput182,
            blockDiagramDXYQGD6DInput183,
          ) {
            var blockDiagramDXYQGD6DBinding468 =
                blockDiagramDXYQGD6DInput182.x - blockDiagramDXYQGD6DInput87.x,
              blockDiagramDXYQGD6DBinding469 =
                blockDiagramDXYQGD6DInput182.y - blockDiagramDXYQGD6DInput87.y,
              blockDiagramDXYQGD6DBinding470 = Math.sqrt(
                blockDiagramDXYQGD6DBinding468 *
                  blockDiagramDXYQGD6DBinding468 +
                  blockDiagramDXYQGD6DBinding469 *
                    blockDiagramDXYQGD6DBinding469,
              ),
              blockDiagramDXYQGD6DBinding471 =
                blockDiagramDXYQGD6DInput183.x - blockDiagramDXYQGD6DInput87.x,
              blockDiagramDXYQGD6DBinding472 =
                blockDiagramDXYQGD6DInput183.y - blockDiagramDXYQGD6DInput87.y,
              blockDiagramDXYQGD6DBinding473 = Math.sqrt(
                blockDiagramDXYQGD6DBinding471 *
                  blockDiagramDXYQGD6DBinding471 +
                  blockDiagramDXYQGD6DBinding472 *
                    blockDiagramDXYQGD6DBinding472,
              );
            return blockDiagramDXYQGD6DBinding470 <
              blockDiagramDXYQGD6DBinding473
              ? -1
              : blockDiagramDXYQGD6DBinding470 ===
                  blockDiagramDXYQGD6DBinding473
                ? 0
                : 1;
          },
        ),
      blockDiagramDXYQGD6DBinding287[0])
    : blockDiagramDXYQGD6DInput85;
}
function blockDiagramDXYQGD6DHelper15(
  blockDiagramDXYQGD6DInput169,
  blockDiagramDXYQGD6DInput170,
  blockDiagramDXYQGD6DInput171,
  blockDiagramDXYQGD6DInput172,
) {
  return blockDiagramDXYQGD6DInput169
    .insert("polygon", ":first-child")
    .attr(
      "points",
      blockDiagramDXYQGD6DInput172
        .map(function (item) {
          return item.x + "," + item.y;
        })
        .join(" "),
    )
    .attr("class", "label-container")
    .attr(
      "transform",
      "translate(" +
        -blockDiagramDXYQGD6DInput170 / 2 +
        "," +
        blockDiagramDXYQGD6DInput171 / 2 +
        ")",
    );
}
function blockDiagramDXYQGD6DHelper16(
  blockDiagramDXYQGD6DInput146,
  blockDiagramDXYQGD6DInput147,
  blockDiagramDXYQGD6DInput148,
  blockDiagramDXYQGD6DInput149,
) {
  let blockDiagramDXYQGD6DBinding408 = [],
    blockDiagramDXYQGD6DBinding409 = chunkAGHRB4JFN(
      (blockDiagramDXYQGD6DInput276) => {
        blockDiagramDXYQGD6DBinding408.push(blockDiagramDXYQGD6DInput276, 0);
      },
      "addBorder",
    ),
    blockDiagramDXYQGD6DBinding410 = chunkAGHRB4JFN(
      (blockDiagramDXYQGD6DInput277) => {
        blockDiagramDXYQGD6DBinding408.push(0, blockDiagramDXYQGD6DInput277);
      },
      "skipBorder",
    );
  blockDiagramDXYQGD6DInput147.includes("t")
    ? (chunkAGHRB4JFI.debug("add top border"),
      blockDiagramDXYQGD6DBinding409(blockDiagramDXYQGD6DInput148))
    : blockDiagramDXYQGD6DBinding410(blockDiagramDXYQGD6DInput148);
  blockDiagramDXYQGD6DInput147.includes("r")
    ? (chunkAGHRB4JFI.debug("add right border"),
      blockDiagramDXYQGD6DBinding409(blockDiagramDXYQGD6DInput149))
    : blockDiagramDXYQGD6DBinding410(blockDiagramDXYQGD6DInput149);
  blockDiagramDXYQGD6DInput147.includes("b")
    ? (chunkAGHRB4JFI.debug("add bottom border"),
      blockDiagramDXYQGD6DBinding409(blockDiagramDXYQGD6DInput148))
    : blockDiagramDXYQGD6DBinding410(blockDiagramDXYQGD6DInput148);
  blockDiagramDXYQGD6DInput147.includes("l")
    ? (chunkAGHRB4JFI.debug("add left border"),
      blockDiagramDXYQGD6DBinding409(blockDiagramDXYQGD6DInput149))
    : blockDiagramDXYQGD6DBinding410(blockDiagramDXYQGD6DInput149);
  blockDiagramDXYQGD6DInput146.attr(
    "stroke-dasharray",
    blockDiagramDXYQGD6DBinding408.join(" "),
  );
}
function be(
  blockDiagramDXYQGD6DInput40,
  blockDiagramDXYQGD6DInput41,
  blockDiagramDXYQGD6DInput42 = false,
) {
  let blockDiagramDXYQGD6DBinding207 = blockDiagramDXYQGD6DInput40,
    blockDiagramDXYQGD6DBinding208 = "default";
  (blockDiagramDXYQGD6DBinding207?.classes?.length || 0) > 0 &&
    (blockDiagramDXYQGD6DBinding208 = (
      blockDiagramDXYQGD6DBinding207?.classes ?? []
    ).join(" "));
  blockDiagramDXYQGD6DBinding208 += " flowchart-label";
  let blockDiagramDXYQGD6DBinding209 = 0,
    blockDiagramDXYQGD6DBinding210 = "",
    blockDiagramDXYQGD6DBinding211;
  switch (blockDiagramDXYQGD6DBinding207.type) {
    case "round":
      blockDiagramDXYQGD6DBinding209 = 5;
      blockDiagramDXYQGD6DBinding210 = "rect";
      break;
    case "composite":
      blockDiagramDXYQGD6DBinding209 = 0;
      blockDiagramDXYQGD6DBinding210 = "composite";
      blockDiagramDXYQGD6DBinding211 = 0;
      break;
    case "square":
      blockDiagramDXYQGD6DBinding210 = "rect";
      break;
    case "diamond":
      blockDiagramDXYQGD6DBinding210 = "question";
      break;
    case "hexagon":
      blockDiagramDXYQGD6DBinding210 = "hexagon";
      break;
    case "block_arrow":
      blockDiagramDXYQGD6DBinding210 = "block_arrow";
      break;
    case "odd":
      blockDiagramDXYQGD6DBinding210 = "rect_left_inv_arrow";
      break;
    case "lean_right":
      blockDiagramDXYQGD6DBinding210 = "lean_right";
      break;
    case "lean_left":
      blockDiagramDXYQGD6DBinding210 = "lean_left";
      break;
    case "trapezoid":
      blockDiagramDXYQGD6DBinding210 = "trapezoid";
      break;
    case "inv_trapezoid":
      blockDiagramDXYQGD6DBinding210 = "inv_trapezoid";
      break;
    case "rect_left_inv_arrow":
      blockDiagramDXYQGD6DBinding210 = "rect_left_inv_arrow";
      break;
    case "circle":
      blockDiagramDXYQGD6DBinding210 = "circle";
      break;
    case "ellipse":
      blockDiagramDXYQGD6DBinding210 = "ellipse";
      break;
    case "stadium":
      blockDiagramDXYQGD6DBinding210 = "stadium";
      break;
    case "subroutine":
      blockDiagramDXYQGD6DBinding210 = "subroutine";
      break;
    case "cylinder":
      blockDiagramDXYQGD6DBinding210 = "cylinder";
      break;
    case "group":
      blockDiagramDXYQGD6DBinding210 = "rect";
      break;
    case "doublecircle":
      blockDiagramDXYQGD6DBinding210 = "doublecircle";
      break;
    default:
      blockDiagramDXYQGD6DBinding210 = "rect";
  }
  let blockDiagramDXYQGD6DBinding212 = chunk5PVQY5BWC(
      blockDiagramDXYQGD6DBinding207?.styles ?? [],
    ),
    blockDiagramDXYQGD6DBinding213 = blockDiagramDXYQGD6DBinding207.label,
    blockDiagramDXYQGD6DBinding214 = blockDiagramDXYQGD6DBinding207.size ?? {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    },
    blockDiagramDXYQGD6DBinding215 = blockDiagramDXYQGD6DInput41.getDiagramId();
  return {
    labelStyle: blockDiagramDXYQGD6DBinding212.labelStyle,
    shape: blockDiagramDXYQGD6DBinding210,
    labelText: blockDiagramDXYQGD6DBinding213,
    rx: blockDiagramDXYQGD6DBinding209,
    ry: blockDiagramDXYQGD6DBinding209,
    class: blockDiagramDXYQGD6DBinding208,
    style: blockDiagramDXYQGD6DBinding212.style,
    id: blockDiagramDXYQGD6DBinding207.id,
    domId: blockDiagramDXYQGD6DBinding215
      ? `${blockDiagramDXYQGD6DBinding215}-${blockDiagramDXYQGD6DBinding207.id}`
      : blockDiagramDXYQGD6DBinding207.id,
    directions: blockDiagramDXYQGD6DBinding207.directions,
    width: blockDiagramDXYQGD6DBinding214.width,
    height: blockDiagramDXYQGD6DBinding214.height,
    x: blockDiagramDXYQGD6DBinding214.x,
    y: blockDiagramDXYQGD6DBinding214.y,
    positioned: blockDiagramDXYQGD6DInput42,
    intersect: undefined,
    type: blockDiagramDXYQGD6DBinding207.type,
    padding:
      blockDiagramDXYQGD6DBinding211 ?? chunkICPOFSXXY()?.block?.padding ?? 0,
  };
}
async function blockDiagramDXYQGD6DHelper17(
  blockDiagramDXYQGD6DInput173,
  blockDiagramDXYQGD6DInput174,
  blockDiagramDXYQGD6DInput175,
) {
  let blockDiagramDXYQGD6DBinding453 = be(
    blockDiagramDXYQGD6DInput174,
    blockDiagramDXYQGD6DInput175,
    false,
  );
  if (blockDiagramDXYQGD6DBinding453.type === "group") return;
  let blockDiagramDXYQGD6DBinding454 = await blockDiagramDXYQGD6DBinding74(
      blockDiagramDXYQGD6DInput173,
      blockDiagramDXYQGD6DBinding453,
      {
        config: chunkICPOFSXXY(),
      },
    ),
    blockDiagramDXYQGD6DBinding455 = blockDiagramDXYQGD6DBinding454
      .node()
      .getBBox(),
    blockDiagramDXYQGD6DBinding456 = blockDiagramDXYQGD6DInput175.getBlock(
      blockDiagramDXYQGD6DBinding453.id,
    );
  blockDiagramDXYQGD6DBinding456.size = {
    width: blockDiagramDXYQGD6DBinding455.width,
    height: blockDiagramDXYQGD6DBinding455.height,
    x: 0,
    y: 0,
    node: blockDiagramDXYQGD6DBinding454,
  };
  blockDiagramDXYQGD6DInput175.setBlock(blockDiagramDXYQGD6DBinding456);
  blockDiagramDXYQGD6DBinding454.remove();
}
async function blockDiagramDXYQGD6DHelper18(
  blockDiagramDXYQGD6DInput200,
  blockDiagramDXYQGD6DInput201,
  blockDiagramDXYQGD6DInput202,
) {
  let blockDiagramDXYQGD6DBinding532 = be(
    blockDiagramDXYQGD6DInput201,
    blockDiagramDXYQGD6DInput202,
    true,
  );
  blockDiagramDXYQGD6DInput202.getBlock(blockDiagramDXYQGD6DBinding532.id)
    .type !== "space" &&
    (await blockDiagramDXYQGD6DBinding74(
      blockDiagramDXYQGD6DInput200,
      blockDiagramDXYQGD6DBinding532,
      {
        config: chunkICPOFSXXY(),
      },
    ),
    (blockDiagramDXYQGD6DInput201.intersect =
      blockDiagramDXYQGD6DBinding532?.intersect),
    blockDiagramDXYQGD6DBinding75(blockDiagramDXYQGD6DBinding532));
}
async function blockDiagramDXYQGD6DHelper19(
  blockDiagramDXYQGD6DInput212,
  blockDiagramDXYQGD6DInput213,
  blockDiagramDXYQGD6DInput214,
  blockDiagramDXYQGD6DInput215,
) {
  for (let blockDiagramDXYQGD6DBinding546 of blockDiagramDXYQGD6DInput213) {
    await blockDiagramDXYQGD6DInput215(
      blockDiagramDXYQGD6DInput212,
      blockDiagramDXYQGD6DBinding546,
      blockDiagramDXYQGD6DInput214,
    );
    blockDiagramDXYQGD6DBinding546.children &&
      (await blockDiagramDXYQGD6DHelper19(
        blockDiagramDXYQGD6DInput212,
        blockDiagramDXYQGD6DBinding546.children,
        blockDiagramDXYQGD6DInput214,
        blockDiagramDXYQGD6DInput215,
      ));
  }
}
async function blockDiagramDXYQGD6DHelper20(
  blockDiagramDXYQGD6DInput261,
  blockDiagramDXYQGD6DInput262,
  blockDiagramDXYQGD6DInput263,
) {
  await blockDiagramDXYQGD6DHelper19(
    blockDiagramDXYQGD6DInput261,
    blockDiagramDXYQGD6DInput262,
    blockDiagramDXYQGD6DInput263,
    blockDiagramDXYQGD6DHelper17,
  );
}
async function blockDiagramDXYQGD6DHelper21(
  blockDiagramDXYQGD6DInput264,
  blockDiagramDXYQGD6DInput265,
  blockDiagramDXYQGD6DInput266,
) {
  await blockDiagramDXYQGD6DHelper19(
    blockDiagramDXYQGD6DInput264,
    blockDiagramDXYQGD6DInput265,
    blockDiagramDXYQGD6DInput266,
    blockDiagramDXYQGD6DHelper18,
  );
}
async function blockDiagramDXYQGD6DHelper22(
  blockDiagramDXYQGD6DInput45,
  blockDiagramDXYQGD6DInput46,
  blockDiagramDXYQGD6DInput47,
  blockDiagramDXYQGD6DInput48,
  blockDiagramDXYQGD6DInput49,
) {
  let blockDiagramDXYQGD6DBinding219 = new blockDiagramDXYQGD6DImport1({
    multigraph: true,
    compound: true,
  });
  blockDiagramDXYQGD6DBinding219.setGraph({
    rankdir: "TB",
    nodesep: 10,
    ranksep: 10,
    marginx: 8,
    marginy: 8,
  });
  for (let blockDiagramDXYQGD6DBinding535 of blockDiagramDXYQGD6DInput47)
    blockDiagramDXYQGD6DBinding535.size &&
      blockDiagramDXYQGD6DBinding219.setNode(
        blockDiagramDXYQGD6DBinding535.id,
        {
          width: blockDiagramDXYQGD6DBinding535.size.width,
          height: blockDiagramDXYQGD6DBinding535.size.height,
          intersect: blockDiagramDXYQGD6DBinding535.intersect,
        },
      );
  for (let blockDiagramDXYQGD6DBinding246 of blockDiagramDXYQGD6DInput46)
    if (
      blockDiagramDXYQGD6DBinding246.start &&
      blockDiagramDXYQGD6DBinding246.end
    ) {
      let blockDiagramDXYQGD6DBinding253 = blockDiagramDXYQGD6DInput48.getBlock(
          blockDiagramDXYQGD6DBinding246.start,
        ),
        blockDiagramDXYQGD6DBinding254 = blockDiagramDXYQGD6DInput48.getBlock(
          blockDiagramDXYQGD6DBinding246.end,
        );
      if (
        blockDiagramDXYQGD6DBinding253?.size &&
        blockDiagramDXYQGD6DBinding254?.size
      ) {
        let blockDiagramDXYQGD6DBinding268 =
            blockDiagramDXYQGD6DBinding253.size,
          blockDiagramDXYQGD6DBinding269 = blockDiagramDXYQGD6DBinding254.size,
          blockDiagramDXYQGD6DBinding270 = [
            {
              x: blockDiagramDXYQGD6DBinding268.x,
              y: blockDiagramDXYQGD6DBinding268.y,
            },
            {
              x:
                blockDiagramDXYQGD6DBinding268.x +
                (blockDiagramDXYQGD6DBinding269.x -
                  blockDiagramDXYQGD6DBinding268.x) /
                  2,
              y:
                blockDiagramDXYQGD6DBinding268.y +
                (blockDiagramDXYQGD6DBinding269.y -
                  blockDiagramDXYQGD6DBinding268.y) /
                  2,
            },
            {
              x: blockDiagramDXYQGD6DBinding269.x,
              y: blockDiagramDXYQGD6DBinding269.y,
            },
          ],
          blockDiagramDXYQGD6DBinding271 = blockDiagramDXYQGD6DInput49
            ? `${blockDiagramDXYQGD6DInput49}-${blockDiagramDXYQGD6DBinding246.id}`
            : blockDiagramDXYQGD6DBinding246.id;
        $e(
          blockDiagramDXYQGD6DInput45,
          {
            v: blockDiagramDXYQGD6DBinding246.start,
            w: blockDiagramDXYQGD6DBinding246.end,
            name: blockDiagramDXYQGD6DBinding271,
          },
          {
            ...blockDiagramDXYQGD6DBinding246,
            id: blockDiagramDXYQGD6DBinding271,
            arrowTypeEnd: blockDiagramDXYQGD6DBinding246.arrowTypeEnd,
            arrowTypeStart: blockDiagramDXYQGD6DBinding246.arrowTypeStart,
            points: blockDiagramDXYQGD6DBinding270,
            classes:
              "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1",
          },
          undefined,
          "block",
          blockDiagramDXYQGD6DBinding219,
          blockDiagramDXYQGD6DInput49,
        );
        blockDiagramDXYQGD6DBinding246.label &&
          (await blockDiagramDXYQGD6DBinding36(blockDiagramDXYQGD6DInput45, {
            ...blockDiagramDXYQGD6DBinding246,
            label: blockDiagramDXYQGD6DBinding246.label,
            labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
            arrowTypeEnd: blockDiagramDXYQGD6DBinding246.arrowTypeEnd,
            arrowTypeStart: blockDiagramDXYQGD6DBinding246.arrowTypeStart,
            points: blockDiagramDXYQGD6DBinding270,
            classes:
              "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1",
          }),
          blockDiagramDXYQGD6DBinding37(
            {
              ...blockDiagramDXYQGD6DBinding246,
              x: blockDiagramDXYQGD6DBinding270[1].x,
              y: blockDiagramDXYQGD6DBinding270[1].y,
            },
            {
              originalPath: blockDiagramDXYQGD6DBinding270,
            },
          ));
      }
    }
}
var blockDiagramDXYQGD6DBinding1,
  blockDiagramDXYQGD6DBinding2,
  blockDiagramDXYQGD6DBinding3,
  blockDiagramDXYQGD6DBinding4,
  blockDiagramDXYQGD6DBinding5,
  blockDiagramDXYQGD6DBinding6,
  blockDiagramDXYQGD6DBinding7,
  blockDiagramDXYQGD6DBinding8,
  blockDiagramDXYQGD6DBinding9,
  blockDiagramDXYQGD6DBinding10,
  blockDiagramDXYQGD6DBinding11,
  blockDiagramDXYQGD6DBinding12,
  blockDiagramDXYQGD6DBinding13,
  blockDiagramDXYQGD6DBinding14,
  blockDiagramDXYQGD6DBinding15,
  blockDiagramDXYQGD6DBinding16,
  blockDiagramDXYQGD6DBinding17,
  blockDiagramDXYQGD6DBinding18,
  blockDiagramDXYQGD6DBinding19,
  blockDiagramDXYQGD6DBinding20,
  blockDiagramDXYQGD6DBinding21,
  blockDiagramDXYQGD6DBinding22,
  blockDiagramDXYQGD6DBinding23,
  blockDiagramDXYQGD6DBinding24,
  blockDiagramDXYQGD6DBinding25,
  blockDiagramDXYQGD6DBinding26,
  blockDiagramDXYQGD6DBinding27,
  blockDiagramDXYQGD6DBinding28,
  blockDiagramDXYQGD6DBinding29,
  blockDiagramDXYQGD6DBinding30,
  blockDiagramDXYQGD6DBinding31,
  blockDiagramDXYQGD6DBinding32,
  blockDiagramDXYQGD6DBinding33,
  blockDiagramDXYQGD6DBinding34,
  blockDiagramDXYQGD6DBinding35,
  blockDiagramDXYQGD6DBinding36,
  blockDiagramDXYQGD6DBinding37,
  blockDiagramDXYQGD6DBinding38,
  blockDiagramDXYQGD6DBinding39,
  blockDiagramDXYQGD6DBinding40,
  $e,
  blockDiagramDXYQGD6DBinding41,
  blockDiagramDXYQGD6DBinding42,
  blockDiagramDXYQGD6DBinding43,
  blockDiagramDXYQGD6DBinding44,
  blockDiagramDXYQGD6DBinding45,
  at,
  blockDiagramDXYQGD6DBinding46,
  blockDiagramDXYQGD6DBinding47,
  blockDiagramDXYQGD6DBinding48,
  blockDiagramDXYQGD6DBinding49,
  blockDiagramDXYQGD6DBinding50,
  blockDiagramDXYQGD6DBinding51,
  blockDiagramDXYQGD6DBinding52,
  blockDiagramDXYQGD6DBinding53,
  blockDiagramDXYQGD6DBinding54,
  blockDiagramDXYQGD6DBinding55,
  blockDiagramDXYQGD6DBinding56,
  blockDiagramDXYQGD6DBinding57,
  blockDiagramDXYQGD6DBinding58,
  blockDiagramDXYQGD6DBinding59,
  blockDiagramDXYQGD6DBinding60,
  _t,
  blockDiagramDXYQGD6DBinding61,
  blockDiagramDXYQGD6DBinding62,
  blockDiagramDXYQGD6DBinding63,
  blockDiagramDXYQGD6DBinding64,
  blockDiagramDXYQGD6DBinding65,
  blockDiagramDXYQGD6DBinding66,
  blockDiagramDXYQGD6DBinding67,
  blockDiagramDXYQGD6DBinding68,
  blockDiagramDXYQGD6DBinding69,
  blockDiagramDXYQGD6DBinding70,
  blockDiagramDXYQGD6DBinding71,
  blockDiagramDXYQGD6DBinding72,
  blockDiagramDXYQGD6DBinding73,
  $,
  blockDiagramDXYQGD6DBinding74,
  blockDiagramDXYQGD6DBinding75,
  BlockDiagramDXYQGD6D;
esmInit(() => {
  chunkFMBD7UC4N();
  chunkBSJP7CBPR();
  chunkZZ45TVLER();
  chunkU2HBQHQKI();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  lodashU();
  distT();
  srcT();
  blockDiagramDXYQGD6DImport2();
  blockDiagramDXYQGD6DBinding1 = (function () {
    var blockDiagramDXYQGD6DBinding76 = chunkAGHRB4JFN(function (
        blockDiagramDXYQGD6DInput218,
        blockDiagramDXYQGD6DInput219,
        blockDiagramDXYQGD6DInput220,
        blockDiagramDXYQGD6DInput221,
      ) {
        for (
          blockDiagramDXYQGD6DInput220 ||= {},
            blockDiagramDXYQGD6DInput221 = blockDiagramDXYQGD6DInput218.length;
          blockDiagramDXYQGD6DInput221--;
          blockDiagramDXYQGD6DInput220[
            blockDiagramDXYQGD6DInput218[blockDiagramDXYQGD6DInput221]
          ] = blockDiagramDXYQGD6DInput219
        );
        return blockDiagramDXYQGD6DInput220;
      }, "o"),
      blockDiagramDXYQGD6DBinding77 = [1, 15],
      blockDiagramDXYQGD6DBinding78 = [1, 7],
      blockDiagramDXYQGD6DBinding79 = [1, 13],
      blockDiagramDXYQGD6DBinding80 = [1, 14],
      blockDiagramDXYQGD6DBinding81 = [1, 19],
      blockDiagramDXYQGD6DBinding82 = [1, 16],
      blockDiagramDXYQGD6DBinding83 = [1, 17],
      blockDiagramDXYQGD6DBinding84 = [1, 18],
      blockDiagramDXYQGD6DBinding85 = [8, 30],
      blockDiagramDXYQGD6DBinding86 = [8, 10, 21, 28, 29, 30, 31, 39, 43, 46],
      blockDiagramDXYQGD6DBinding87 = [1, 23],
      blockDiagramDXYQGD6DBinding88 = [1, 24],
      blockDiagramDXYQGD6DBinding89 = [
        8, 10, 15, 16, 21, 28, 29, 30, 31, 39, 43, 46,
      ],
      blockDiagramDXYQGD6DBinding90 = [
        8, 10, 15, 16, 21, 27, 28, 29, 30, 31, 39, 43, 46,
      ],
      blockDiagramDXYQGD6DBinding91 = [1, 49],
      blockDiagramDXYQGD6DBinding92 = {
        trace: chunkAGHRB4JFN(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          spaceLines: 3,
          SPACELINE: 4,
          NL: 5,
          separator: 6,
          SPACE: 7,
          EOF: 8,
          start: 9,
          BLOCK_DIAGRAM_KEY: 10,
          document: 11,
          stop: 12,
          statement: 13,
          link: 14,
          LINK: 15,
          START_LINK: 16,
          LINK_LABEL: 17,
          STR: 18,
          nodeStatement: 19,
          columnsStatement: 20,
          SPACE_BLOCK: 21,
          blockStatement: 22,
          classDefStatement: 23,
          cssClassStatement: 24,
          styleStatement: 25,
          node: 26,
          SIZE: 27,
          COLUMNS: 28,
          "id-block": 29,
          end: 30,
          NODE_ID: 31,
          nodeShapeNLabel: 32,
          dirList: 33,
          DIR: 34,
          NODE_DSTART: 35,
          NODE_DEND: 36,
          BLOCK_ARROW_START: 37,
          BLOCK_ARROW_END: 38,
          classDef: 39,
          CLASSDEF_ID: 40,
          CLASSDEF_STYLEOPTS: 41,
          DEFAULT: 42,
          class: 43,
          CLASSENTITY_IDS: 44,
          STYLECLASS: 45,
          style: 46,
          STYLE_ENTITY_IDS: 47,
          STYLE_DEFINITION_DATA: 48,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          4: "SPACELINE",
          5: "NL",
          7: "SPACE",
          8: "EOF",
          10: "BLOCK_DIAGRAM_KEY",
          15: "LINK",
          16: "START_LINK",
          17: "LINK_LABEL",
          18: "STR",
          21: "SPACE_BLOCK",
          27: "SIZE",
          28: "COLUMNS",
          29: "id-block",
          30: "end",
          31: "NODE_ID",
          34: "DIR",
          35: "NODE_DSTART",
          36: "NODE_DEND",
          37: "BLOCK_ARROW_START",
          38: "BLOCK_ARROW_END",
          39: "classDef",
          40: "CLASSDEF_ID",
          41: "CLASSDEF_STYLEOPTS",
          42: "DEFAULT",
          43: "class",
          44: "CLASSENTITY_IDS",
          45: "STYLECLASS",
          46: "style",
          47: "STYLE_ENTITY_IDS",
          48: "STYLE_DEFINITION_DATA",
        },
        productions_: [
          0,
          [3, 1],
          [3, 2],
          [3, 2],
          [6, 1],
          [6, 1],
          [6, 1],
          [9, 3],
          [12, 1],
          [12, 1],
          [12, 2],
          [12, 2],
          [11, 1],
          [11, 2],
          [14, 1],
          [14, 4],
          [13, 1],
          [13, 1],
          [13, 1],
          [13, 1],
          [13, 1],
          [13, 1],
          [13, 1],
          [19, 3],
          [19, 2],
          [19, 1],
          [20, 1],
          [22, 4],
          [22, 3],
          [26, 1],
          [26, 2],
          [33, 1],
          [33, 2],
          [32, 3],
          [32, 4],
          [23, 3],
          [23, 3],
          [24, 3],
          [25, 3],
        ],
        performAction: chunkAGHRB4JFN(function (
          blockDiagramDXYQGD6DInput5,
          blockDiagramDXYQGD6DInput6,
          blockDiagramDXYQGD6DInput7,
          blockDiagramDXYQGD6DInput8,
          blockDiagramDXYQGD6DInput9,
          blockDiagramDXYQGD6DInput10,
          blockDiagramDXYQGD6DInput11,
        ) {
          var blockDiagramDXYQGD6DBinding93 =
            blockDiagramDXYQGD6DInput10.length - 1;
          switch (blockDiagramDXYQGD6DInput9) {
            case 4:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug("Rule: separator (NL) ");
              break;
            case 5:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug("Rule: separator (Space) ");
              break;
            case 6:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug("Rule: separator (EOF) ");
              break;
            case 7:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: hierarchy: ",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
                );
              blockDiagramDXYQGD6DInput8.setHierarchy(
                blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93 - 1],
              );
              break;
            case 8:
              blockDiagramDXYQGD6DInput8.getLogger().debug("Stop NL ");
              break;
            case 9:
              blockDiagramDXYQGD6DInput8.getLogger().debug("Stop EOF ");
              break;
            case 10:
              blockDiagramDXYQGD6DInput8.getLogger().debug("Stop NL2 ");
              break;
            case 11:
              blockDiagramDXYQGD6DInput8.getLogger().debug("Stop EOF2 ");
              break;
            case 12:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: statement: ",
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              typeof blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                .length == "number"
                ? (this.$ =
                    blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93])
                : (this.$ = [
                    blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                  ]);
              break;
            case 13:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: statement #2: ",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
                );
              this.$ = [
                blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93 - 1],
              ].concat(
                blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
              );
              break;
            case 14:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: link: ",
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                  blockDiagramDXYQGD6DInput5,
                );
              this.$ = {
                edgeTypeStr:
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                label: "",
              };
              break;
            case 15:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: LABEL link: ",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 3
                  ],
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              this.$ = {
                edgeTypeStr:
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                label:
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
              };
              break;
            case 18:
              let blockDiagramDXYQGD6DBinding94 = parseInt(
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                ),
                blockDiagramDXYQGD6DBinding95 =
                  blockDiagramDXYQGD6DInput8.generateId();
              this.$ = {
                id: blockDiagramDXYQGD6DBinding95,
                type: "space",
                label: "",
                width: blockDiagramDXYQGD6DBinding94,
                children: [],
              };
              break;
            case 23:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: (nodeStatement link node) ",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 2
                  ],
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                  " typestr: ",
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93 - 1]
                    .edgeTypeStr,
                );
              let blockDiagramDXYQGD6DBinding96 =
                blockDiagramDXYQGD6DInput8.edgeStrToEdgeData(
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93 - 1]
                    .edgeTypeStr,
                );
              this.$ = [
                {
                  id: blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 2
                  ].id,
                  label:
                    blockDiagramDXYQGD6DInput10[
                      blockDiagramDXYQGD6DBinding93 - 2
                    ].label,
                  type: blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 2
                  ].type,
                  directions:
                    blockDiagramDXYQGD6DInput10[
                      blockDiagramDXYQGD6DBinding93 - 2
                    ].directions,
                },
                {
                  id:
                    blockDiagramDXYQGD6DInput10[
                      blockDiagramDXYQGD6DBinding93 - 2
                    ].id +
                    "-" +
                    blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                      .id,
                  start:
                    blockDiagramDXYQGD6DInput10[
                      blockDiagramDXYQGD6DBinding93 - 2
                    ].id,
                  end: blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93
                  ].id,
                  label:
                    blockDiagramDXYQGD6DInput10[
                      blockDiagramDXYQGD6DBinding93 - 1
                    ].label,
                  type: "edge",
                  directions:
                    blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                      .directions,
                  arrowTypeEnd: blockDiagramDXYQGD6DBinding96,
                  arrowTypeStart: "arrow_open",
                },
                {
                  id: blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                    .id,
                  label:
                    blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                      .label,
                  type: blockDiagramDXYQGD6DInput8.typeStr2Type(
                    blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                      .typeStr,
                  ),
                  directions:
                    blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                      .directions,
                },
              ];
              break;
            case 24:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: nodeStatement (abc88 node size) ",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              this.$ = {
                id: blockDiagramDXYQGD6DInput10[
                  blockDiagramDXYQGD6DBinding93 - 1
                ].id,
                label:
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93 - 1]
                    .label,
                type: blockDiagramDXYQGD6DInput8.typeStr2Type(
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93 - 1]
                    .typeStr,
                ),
                directions:
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93 - 1]
                    .directions,
                widthInColumns: parseInt(
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                  10,
                ),
              };
              break;
            case 25:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: nodeStatement (node) ",
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              this.$ = {
                id: blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                  .id,
                label:
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                    .label,
                type: blockDiagramDXYQGD6DInput8.typeStr2Type(
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                    .typeStr,
                ),
                directions:
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                    .directions,
                widthInColumns: 1,
              };
              break;
            case 26:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug("APA123", this ? this : "na");
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "COLUMNS: ",
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              this.$ = {
                type: "column-setting",
                columns:
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93] ===
                  "auto"
                    ? -1
                    : parseInt(
                        blockDiagramDXYQGD6DInput10[
                          blockDiagramDXYQGD6DBinding93
                        ],
                      ),
              };
              break;
            case 27:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: id-block statement : ",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 2
                  ],
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
                );
              blockDiagramDXYQGD6DInput8.generateId();
              this.$ = {
                ...blockDiagramDXYQGD6DInput10[
                  blockDiagramDXYQGD6DBinding93 - 2
                ],
                type: "composite",
                children:
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
              };
              break;
            case 28:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: blockStatement : ",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 2
                  ],
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              let blockDiagramDXYQGD6DBinding97 =
                blockDiagramDXYQGD6DInput8.generateId();
              this.$ = {
                id: blockDiagramDXYQGD6DBinding97,
                type: "composite",
                label: "",
                children:
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
              };
              break;
            case 29:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: node (NODE_ID separator): ",
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              this.$ = {
                id: blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
              };
              break;
            case 30:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: node (NODE_ID nodeShapeNLabel separator): ",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              this.$ = {
                id: blockDiagramDXYQGD6DInput10[
                  blockDiagramDXYQGD6DBinding93 - 1
                ],
                label:
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                    .label,
                typeStr:
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                    .typeStr,
                directions:
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93]
                    .directions,
              };
              break;
            case 31:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: dirList: ",
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              this.$ = [
                blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
              ];
              break;
            case 32:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: dirList: ",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              this.$ = [
                blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93 - 1],
              ].concat(
                blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
              );
              break;
            case 33:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: nodeShapeNLabel: ",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 2
                  ],
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              this.$ = {
                typeStr:
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 2
                  ] +
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                label:
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
              };
              break;
            case 34:
              blockDiagramDXYQGD6DInput8
                .getLogger()
                .debug(
                  "Rule: BLOCK_ARROW nodeShapeNLabel: ",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 3
                  ],
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 2
                  ],
                  " #3:",
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                );
              this.$ = {
                typeStr:
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 3
                  ] +
                  blockDiagramDXYQGD6DInput10[blockDiagramDXYQGD6DBinding93],
                label:
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 2
                  ],
                directions:
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93 - 1
                  ],
              };
              break;
            case 35:
            case 36:
              this.$ = {
                type: "classDef",
                id: blockDiagramDXYQGD6DInput10[
                  blockDiagramDXYQGD6DBinding93 - 1
                ].trim(),
                css: blockDiagramDXYQGD6DInput10[
                  blockDiagramDXYQGD6DBinding93
                ].trim(),
              };
              break;
            case 37:
              this.$ = {
                type: "applyClass",
                id: blockDiagramDXYQGD6DInput10[
                  blockDiagramDXYQGD6DBinding93 - 1
                ].trim(),
                styleClass:
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93
                  ].trim(),
              };
              break;
            case 38:
              this.$ = {
                type: "applyStyles",
                id: blockDiagramDXYQGD6DInput10[
                  blockDiagramDXYQGD6DBinding93 - 1
                ].trim(),
                stylesStr:
                  blockDiagramDXYQGD6DInput10[
                    blockDiagramDXYQGD6DBinding93
                  ].trim(),
              };
              break;
          }
        }, "anonymous"),
        table: [
          {
            9: 1,
            10: [1, 2],
          },
          {
            1: [3],
          },
          {
            10: blockDiagramDXYQGD6DBinding77,
            11: 3,
            13: 4,
            19: 5,
            20: 6,
            21: blockDiagramDXYQGD6DBinding78,
            22: 8,
            23: 9,
            24: 10,
            25: 11,
            26: 12,
            28: blockDiagramDXYQGD6DBinding79,
            29: blockDiagramDXYQGD6DBinding80,
            31: blockDiagramDXYQGD6DBinding81,
            39: blockDiagramDXYQGD6DBinding82,
            43: blockDiagramDXYQGD6DBinding83,
            46: blockDiagramDXYQGD6DBinding84,
          },
          {
            8: [1, 20],
          },
          blockDiagramDXYQGD6DBinding76(
            blockDiagramDXYQGD6DBinding85,
            [2, 12],
            {
              13: 4,
              19: 5,
              20: 6,
              22: 8,
              23: 9,
              24: 10,
              25: 11,
              26: 12,
              11: 21,
              10: blockDiagramDXYQGD6DBinding77,
              21: blockDiagramDXYQGD6DBinding78,
              28: blockDiagramDXYQGD6DBinding79,
              29: blockDiagramDXYQGD6DBinding80,
              31: blockDiagramDXYQGD6DBinding81,
              39: blockDiagramDXYQGD6DBinding82,
              43: blockDiagramDXYQGD6DBinding83,
              46: blockDiagramDXYQGD6DBinding84,
            },
          ),
          blockDiagramDXYQGD6DBinding76(
            blockDiagramDXYQGD6DBinding86,
            [2, 16],
            {
              14: 22,
              15: blockDiagramDXYQGD6DBinding87,
              16: blockDiagramDXYQGD6DBinding88,
            },
          ),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 17]),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 18]),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 19]),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 20]),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 21]),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 22]),
          blockDiagramDXYQGD6DBinding76(
            blockDiagramDXYQGD6DBinding89,
            [2, 25],
            {
              27: [1, 25],
            },
          ),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 26]),
          {
            19: 26,
            26: 12,
            31: blockDiagramDXYQGD6DBinding81,
          },
          {
            10: blockDiagramDXYQGD6DBinding77,
            11: 27,
            13: 4,
            19: 5,
            20: 6,
            21: blockDiagramDXYQGD6DBinding78,
            22: 8,
            23: 9,
            24: 10,
            25: 11,
            26: 12,
            28: blockDiagramDXYQGD6DBinding79,
            29: blockDiagramDXYQGD6DBinding80,
            31: blockDiagramDXYQGD6DBinding81,
            39: blockDiagramDXYQGD6DBinding82,
            43: blockDiagramDXYQGD6DBinding83,
            46: blockDiagramDXYQGD6DBinding84,
          },
          {
            40: [1, 28],
            42: [1, 29],
          },
          {
            44: [1, 30],
          },
          {
            47: [1, 31],
          },
          blockDiagramDXYQGD6DBinding76(
            blockDiagramDXYQGD6DBinding90,
            [2, 29],
            {
              32: 32,
              35: [1, 33],
              37: [1, 34],
            },
          ),
          {
            1: [2, 7],
          },
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding85, [2, 13]),
          {
            26: 35,
            31: blockDiagramDXYQGD6DBinding81,
          },
          {
            31: [2, 14],
          },
          {
            17: [1, 36],
          },
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding89, [2, 24]),
          {
            10: blockDiagramDXYQGD6DBinding77,
            11: 37,
            13: 4,
            14: 22,
            15: blockDiagramDXYQGD6DBinding87,
            16: blockDiagramDXYQGD6DBinding88,
            19: 5,
            20: 6,
            21: blockDiagramDXYQGD6DBinding78,
            22: 8,
            23: 9,
            24: 10,
            25: 11,
            26: 12,
            28: blockDiagramDXYQGD6DBinding79,
            29: blockDiagramDXYQGD6DBinding80,
            31: blockDiagramDXYQGD6DBinding81,
            39: blockDiagramDXYQGD6DBinding82,
            43: blockDiagramDXYQGD6DBinding83,
            46: blockDiagramDXYQGD6DBinding84,
          },
          {
            30: [1, 38],
          },
          {
            41: [1, 39],
          },
          {
            41: [1, 40],
          },
          {
            45: [1, 41],
          },
          {
            48: [1, 42],
          },
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding90, [2, 30]),
          {
            18: [1, 43],
          },
          {
            18: [1, 44],
          },
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding89, [2, 23]),
          {
            18: [1, 45],
          },
          {
            30: [1, 46],
          },
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 28]),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 35]),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 36]),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 37]),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 38]),
          {
            36: [1, 47],
          },
          {
            33: 48,
            34: blockDiagramDXYQGD6DBinding91,
          },
          {
            15: [1, 50],
          },
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding86, [2, 27]),
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding90, [2, 33]),
          {
            38: [1, 51],
          },
          {
            33: 52,
            34: blockDiagramDXYQGD6DBinding91,
            38: [2, 31],
          },
          {
            31: [2, 15],
          },
          blockDiagramDXYQGD6DBinding76(blockDiagramDXYQGD6DBinding90, [2, 34]),
          {
            38: [2, 32],
          },
        ],
        defaultActions: {
          20: [2, 7],
          23: [2, 14],
          50: [2, 15],
          52: [2, 32],
        },
        parseError: chunkAGHRB4JFN(function (
          blockDiagramDXYQGD6DInput197,
          blockDiagramDXYQGD6DInput198,
        ) {
          if (blockDiagramDXYQGD6DInput198.recoverable)
            this.trace(blockDiagramDXYQGD6DInput197);
          else {
            var blockDiagramDXYQGD6DBinding527 = Error(
              blockDiagramDXYQGD6DInput197,
            );
            throw (
              (blockDiagramDXYQGD6DBinding527.hash =
                blockDiagramDXYQGD6DInput198),
              blockDiagramDXYQGD6DBinding527
            );
          }
        }, "parseError"),
        parse: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DInput15) {
          var blockDiagramDXYQGD6DBinding103 = this,
            blockDiagramDXYQGD6DBinding104 = [0],
            blockDiagramDXYQGD6DBinding105 = [],
            blockDiagramDXYQGD6DBinding106 = [null],
            blockDiagramDXYQGD6DBinding107 = [],
            blockDiagramDXYQGD6DBinding108 = this.table,
            blockDiagramDXYQGD6DBinding109 = "",
            blockDiagramDXYQGD6DBinding110 = 0,
            blockDiagramDXYQGD6DBinding111 = 0,
            blockDiagramDXYQGD6DBinding112 = 0,
            blockDiagramDXYQGD6DBinding115 =
              blockDiagramDXYQGD6DBinding107.slice.call(arguments, 1),
            blockDiagramDXYQGD6DBinding116 = Object.create(this.lexer),
            blockDiagramDXYQGD6DBinding117 = {
              yy: {},
            };
          for (var blockDiagramDXYQGD6DBinding118 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              blockDiagramDXYQGD6DBinding118,
            ) &&
              (blockDiagramDXYQGD6DBinding117.yy[
                blockDiagramDXYQGD6DBinding118
              ] = this.yy[blockDiagramDXYQGD6DBinding118]);
          blockDiagramDXYQGD6DBinding116.setInput(
            blockDiagramDXYQGD6DInput15,
            blockDiagramDXYQGD6DBinding117.yy,
          );
          blockDiagramDXYQGD6DBinding117.yy.lexer =
            blockDiagramDXYQGD6DBinding116;
          blockDiagramDXYQGD6DBinding117.yy.parser = this;
          blockDiagramDXYQGD6DBinding116.yylloc === undefined &&
            (blockDiagramDXYQGD6DBinding116.yylloc = {});
          var blockDiagramDXYQGD6DBinding119 =
            blockDiagramDXYQGD6DBinding116.yylloc;
          blockDiagramDXYQGD6DBinding107.push(blockDiagramDXYQGD6DBinding119);
          var blockDiagramDXYQGD6DBinding120 =
            blockDiagramDXYQGD6DBinding116.options &&
            blockDiagramDXYQGD6DBinding116.options.ranges;
          typeof blockDiagramDXYQGD6DBinding117.yy.parseError == "function"
            ? (this.parseError = blockDiagramDXYQGD6DBinding117.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function blockDiagramDXYQGD6DHelper24(blockDiagramDXYQGD6DInput224) {
            blockDiagramDXYQGD6DBinding104.length -=
              2 * blockDiagramDXYQGD6DInput224;
            blockDiagramDXYQGD6DBinding106.length -=
              blockDiagramDXYQGD6DInput224;
            blockDiagramDXYQGD6DBinding107.length -=
              blockDiagramDXYQGD6DInput224;
          }
          chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper24, "popStack");
          function blockDiagramDXYQGD6DHelper25() {
            var blockDiagramDXYQGD6DBinding464 =
              blockDiagramDXYQGD6DBinding105.pop() ||
              blockDiagramDXYQGD6DBinding116.lex() ||
              1;
            return (
              typeof blockDiagramDXYQGD6DBinding464 != "number" &&
                (blockDiagramDXYQGD6DBinding464 instanceof Array &&
                  ((blockDiagramDXYQGD6DBinding105 =
                    blockDiagramDXYQGD6DBinding464),
                  (blockDiagramDXYQGD6DBinding464 =
                    blockDiagramDXYQGD6DBinding105.pop())),
                (blockDiagramDXYQGD6DBinding464 =
                  blockDiagramDXYQGD6DBinding103.symbols_[
                    blockDiagramDXYQGD6DBinding464
                  ] || blockDiagramDXYQGD6DBinding464)),
              blockDiagramDXYQGD6DBinding464
            );
          }
          chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper25, "lex");
          for (
            var blockDiagramDXYQGD6DBinding121,
              blockDiagramDXYQGD6DBinding122,
              blockDiagramDXYQGD6DBinding123,
              blockDiagramDXYQGD6DBinding124,
              blockDiagramDXYQGD6DBinding125,
              blockDiagramDXYQGD6DBinding126 = {},
              blockDiagramDXYQGD6DBinding127,
              blockDiagramDXYQGD6DBinding128,
              blockDiagramDXYQGD6DBinding129,
              blockDiagramDXYQGD6DBinding130;
            ;
          ) {
            if (
              ((blockDiagramDXYQGD6DBinding123 =
                blockDiagramDXYQGD6DBinding104[
                  blockDiagramDXYQGD6DBinding104.length - 1
                ]),
              this.defaultActions[blockDiagramDXYQGD6DBinding123]
                ? (blockDiagramDXYQGD6DBinding124 =
                    this.defaultActions[blockDiagramDXYQGD6DBinding123])
                : ((blockDiagramDXYQGD6DBinding121 ??=
                    blockDiagramDXYQGD6DHelper25()),
                  (blockDiagramDXYQGD6DBinding124 =
                    blockDiagramDXYQGD6DBinding108[
                      blockDiagramDXYQGD6DBinding123
                    ] &&
                    blockDiagramDXYQGD6DBinding108[
                      blockDiagramDXYQGD6DBinding123
                    ][blockDiagramDXYQGD6DBinding121])),
              blockDiagramDXYQGD6DBinding124 === undefined ||
                !blockDiagramDXYQGD6DBinding124.length ||
                !blockDiagramDXYQGD6DBinding124[0])
            ) {
              var blockDiagramDXYQGD6DBinding131 = "";
              for (blockDiagramDXYQGD6DBinding127 in ((blockDiagramDXYQGD6DBinding130 =
                []),
              blockDiagramDXYQGD6DBinding108[blockDiagramDXYQGD6DBinding123]))
                this.terminals_[blockDiagramDXYQGD6DBinding127] &&
                  blockDiagramDXYQGD6DBinding127 > 2 &&
                  blockDiagramDXYQGD6DBinding130.push(
                    "'" + this.terminals_[blockDiagramDXYQGD6DBinding127] + "'",
                  );
              blockDiagramDXYQGD6DBinding131 =
                blockDiagramDXYQGD6DBinding116.showPosition
                  ? "Parse error on line " +
                    (blockDiagramDXYQGD6DBinding110 + 1) +
                    ":\n" +
                    blockDiagramDXYQGD6DBinding116.showPosition() +
                    "\nExpecting " +
                    blockDiagramDXYQGD6DBinding130.join(", ") +
                    ", got '" +
                    (this.terminals_[blockDiagramDXYQGD6DBinding121] ||
                      blockDiagramDXYQGD6DBinding121) +
                    "'"
                  : "Parse error on line " +
                    (blockDiagramDXYQGD6DBinding110 + 1) +
                    ": Unexpected " +
                    (blockDiagramDXYQGD6DBinding121 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[blockDiagramDXYQGD6DBinding121] ||
                          blockDiagramDXYQGD6DBinding121) +
                        "'");
              this.parseError(blockDiagramDXYQGD6DBinding131, {
                text: blockDiagramDXYQGD6DBinding116.match,
                token:
                  this.terminals_[blockDiagramDXYQGD6DBinding121] ||
                  blockDiagramDXYQGD6DBinding121,
                line: blockDiagramDXYQGD6DBinding116.yylineno,
                loc: blockDiagramDXYQGD6DBinding119,
                expected: blockDiagramDXYQGD6DBinding130,
              });
            }
            if (
              blockDiagramDXYQGD6DBinding124[0] instanceof Array &&
              blockDiagramDXYQGD6DBinding124.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  blockDiagramDXYQGD6DBinding123 +
                  ", token: " +
                  blockDiagramDXYQGD6DBinding121,
              );
            switch (blockDiagramDXYQGD6DBinding124[0]) {
              case 1:
                blockDiagramDXYQGD6DBinding104.push(
                  blockDiagramDXYQGD6DBinding121,
                );
                blockDiagramDXYQGD6DBinding106.push(
                  blockDiagramDXYQGD6DBinding116.yytext,
                );
                blockDiagramDXYQGD6DBinding107.push(
                  blockDiagramDXYQGD6DBinding116.yylloc,
                );
                blockDiagramDXYQGD6DBinding104.push(
                  blockDiagramDXYQGD6DBinding124[1],
                );
                blockDiagramDXYQGD6DBinding121 = null;
                blockDiagramDXYQGD6DBinding122
                  ? ((blockDiagramDXYQGD6DBinding121 =
                      blockDiagramDXYQGD6DBinding122),
                    (blockDiagramDXYQGD6DBinding122 = null))
                  : ((blockDiagramDXYQGD6DBinding111 =
                      blockDiagramDXYQGD6DBinding116.yyleng),
                    (blockDiagramDXYQGD6DBinding109 =
                      blockDiagramDXYQGD6DBinding116.yytext),
                    (blockDiagramDXYQGD6DBinding110 =
                      blockDiagramDXYQGD6DBinding116.yylineno),
                    (blockDiagramDXYQGD6DBinding119 =
                      blockDiagramDXYQGD6DBinding116.yylloc),
                    blockDiagramDXYQGD6DBinding112 > 0 &&
                      blockDiagramDXYQGD6DBinding112--);
                break;
              case 2:
                if (
                  ((blockDiagramDXYQGD6DBinding128 =
                    this.productions_[blockDiagramDXYQGD6DBinding124[1]][1]),
                  (blockDiagramDXYQGD6DBinding126.$ =
                    blockDiagramDXYQGD6DBinding106[
                      blockDiagramDXYQGD6DBinding106.length -
                        blockDiagramDXYQGD6DBinding128
                    ]),
                  (blockDiagramDXYQGD6DBinding126._$ = {
                    first_line:
                      blockDiagramDXYQGD6DBinding107[
                        blockDiagramDXYQGD6DBinding107.length -
                          (blockDiagramDXYQGD6DBinding128 || 1)
                      ].first_line,
                    last_line:
                      blockDiagramDXYQGD6DBinding107[
                        blockDiagramDXYQGD6DBinding107.length - 1
                      ].last_line,
                    first_column:
                      blockDiagramDXYQGD6DBinding107[
                        blockDiagramDXYQGD6DBinding107.length -
                          (blockDiagramDXYQGD6DBinding128 || 1)
                      ].first_column,
                    last_column:
                      blockDiagramDXYQGD6DBinding107[
                        blockDiagramDXYQGD6DBinding107.length - 1
                      ].last_column,
                  }),
                  blockDiagramDXYQGD6DBinding120 &&
                    (blockDiagramDXYQGD6DBinding126._$.range = [
                      blockDiagramDXYQGD6DBinding107[
                        blockDiagramDXYQGD6DBinding107.length -
                          (blockDiagramDXYQGD6DBinding128 || 1)
                      ].range[0],
                      blockDiagramDXYQGD6DBinding107[
                        blockDiagramDXYQGD6DBinding107.length - 1
                      ].range[1],
                    ]),
                  (blockDiagramDXYQGD6DBinding125 = this.performAction.apply(
                    blockDiagramDXYQGD6DBinding126,
                    [
                      blockDiagramDXYQGD6DBinding109,
                      blockDiagramDXYQGD6DBinding111,
                      blockDiagramDXYQGD6DBinding110,
                      blockDiagramDXYQGD6DBinding117.yy,
                      blockDiagramDXYQGD6DBinding124[1],
                      blockDiagramDXYQGD6DBinding106,
                      blockDiagramDXYQGD6DBinding107,
                    ].concat(blockDiagramDXYQGD6DBinding115),
                  )),
                  blockDiagramDXYQGD6DBinding125 !== undefined)
                )
                  return blockDiagramDXYQGD6DBinding125;
                blockDiagramDXYQGD6DBinding128 &&
                  ((blockDiagramDXYQGD6DBinding104 =
                    blockDiagramDXYQGD6DBinding104.slice(
                      0,
                      -1 * blockDiagramDXYQGD6DBinding128 * 2,
                    )),
                  (blockDiagramDXYQGD6DBinding106 =
                    blockDiagramDXYQGD6DBinding106.slice(
                      0,
                      -1 * blockDiagramDXYQGD6DBinding128,
                    )),
                  (blockDiagramDXYQGD6DBinding107 =
                    blockDiagramDXYQGD6DBinding107.slice(
                      0,
                      -1 * blockDiagramDXYQGD6DBinding128,
                    )));
                blockDiagramDXYQGD6DBinding104.push(
                  this.productions_[blockDiagramDXYQGD6DBinding124[1]][0],
                );
                blockDiagramDXYQGD6DBinding106.push(
                  blockDiagramDXYQGD6DBinding126.$,
                );
                blockDiagramDXYQGD6DBinding107.push(
                  blockDiagramDXYQGD6DBinding126._$,
                );
                blockDiagramDXYQGD6DBinding129 =
                  blockDiagramDXYQGD6DBinding108[
                    blockDiagramDXYQGD6DBinding104[
                      blockDiagramDXYQGD6DBinding104.length - 2
                    ]
                  ][
                    blockDiagramDXYQGD6DBinding104[
                      blockDiagramDXYQGD6DBinding104.length - 1
                    ]
                  ];
                blockDiagramDXYQGD6DBinding104.push(
                  blockDiagramDXYQGD6DBinding129,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    blockDiagramDXYQGD6DBinding92.lexer = (function () {
      return {
        EOF: 1,
        parseError: chunkAGHRB4JFN(function (
          blockDiagramDXYQGD6DInput210,
          blockDiagramDXYQGD6DInput211,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              blockDiagramDXYQGD6DInput210,
              blockDiagramDXYQGD6DInput211,
            );
          else throw Error(blockDiagramDXYQGD6DInput210);
        }, "parseError"),
        setInput: chunkAGHRB4JFN(function (
          blockDiagramDXYQGD6DInput108,
          blockDiagramDXYQGD6DInput109,
        ) {
          return (
            (this.yy = blockDiagramDXYQGD6DInput109 || this.yy || {}),
            (this._input = blockDiagramDXYQGD6DInput108),
            (this._more = this._backtrack = this.done = false),
            (this.yylineno = this.yyleng = 0),
            (this.yytext = this.matched = this.match = ""),
            (this.conditionStack = ["INITIAL"]),
            (this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0,
            }),
            this.options.ranges && (this.yylloc.range = [0, 0]),
            (this.offset = 0),
            this
          );
        }, "setInput"),
        input: chunkAGHRB4JFN(function () {
          var blockDiagramDXYQGD6DBinding378 = this._input[0];
          return (
            (this.yytext += blockDiagramDXYQGD6DBinding378),
            this.yyleng++,
            this.offset++,
            (this.match += blockDiagramDXYQGD6DBinding378),
            (this.matched += blockDiagramDXYQGD6DBinding378),
            blockDiagramDXYQGD6DBinding378.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            blockDiagramDXYQGD6DBinding378
          );
        }, "input"),
        unput: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DInput65) {
          var blockDiagramDXYQGD6DBinding255 =
              blockDiagramDXYQGD6DInput65.length,
            blockDiagramDXYQGD6DBinding256 =
              blockDiagramDXYQGD6DInput65.split(/(?:\r\n?|\n)/g);
          this._input = blockDiagramDXYQGD6DInput65 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - blockDiagramDXYQGD6DBinding255,
          );
          this.offset -= blockDiagramDXYQGD6DBinding255;
          var blockDiagramDXYQGD6DBinding257 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          blockDiagramDXYQGD6DBinding256.length - 1 &&
            (this.yylineno -= blockDiagramDXYQGD6DBinding256.length - 1);
          var blockDiagramDXYQGD6DBinding258 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: blockDiagramDXYQGD6DBinding256
                ? (blockDiagramDXYQGD6DBinding256.length ===
                  blockDiagramDXYQGD6DBinding257.length
                    ? this.yylloc.first_column
                    : 0) +
                  blockDiagramDXYQGD6DBinding257[
                    blockDiagramDXYQGD6DBinding257.length -
                      blockDiagramDXYQGD6DBinding256.length
                  ].length -
                  blockDiagramDXYQGD6DBinding256[0].length
                : this.yylloc.first_column - blockDiagramDXYQGD6DBinding255,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                blockDiagramDXYQGD6DBinding258[0],
                blockDiagramDXYQGD6DBinding258[0] +
                  this.yyleng -
                  blockDiagramDXYQGD6DBinding255,
              ]),
            (this.yyleng = this.yytext.length),
            this
          );
        }, "unput"),
        more: chunkAGHRB4JFN(function () {
          return ((this._more = true), this);
        }, "more"),
        reject: chunkAGHRB4JFN(function () {
          if (this.options.backtrack_lexer) this._backtrack = true;
          else
            return this.parseError(
              "Lexical error on line " +
                (this.yylineno + 1) +
                ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                this.showPosition(),
              {
                text: "",
                token: null,
                line: this.yylineno,
              },
            );
          return this;
        }, "reject"),
        less: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DInput235) {
          this.unput(this.match.slice(blockDiagramDXYQGD6DInput235));
        }, "less"),
        pastInput: chunkAGHRB4JFN(function () {
          var blockDiagramDXYQGD6DBinding474 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (blockDiagramDXYQGD6DBinding474.length > 20 ? "..." : "") +
            blockDiagramDXYQGD6DBinding474.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: chunkAGHRB4JFN(function () {
          var blockDiagramDXYQGD6DBinding452 = this.match;
          return (
            blockDiagramDXYQGD6DBinding452.length < 20 &&
              (blockDiagramDXYQGD6DBinding452 += this._input.substr(
                0,
                20 - blockDiagramDXYQGD6DBinding452.length,
              )),
            (
              blockDiagramDXYQGD6DBinding452.substr(0, 20) +
              (blockDiagramDXYQGD6DBinding452.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: chunkAGHRB4JFN(function () {
          var blockDiagramDXYQGD6DBinding477 = this.pastInput(),
            blockDiagramDXYQGD6DBinding478 = Array(
              blockDiagramDXYQGD6DBinding477.length + 1,
            ).join("-");
          return (
            blockDiagramDXYQGD6DBinding477 +
            this.upcomingInput() +
            "\n" +
            blockDiagramDXYQGD6DBinding478 +
            "^"
          );
        }, "showPosition"),
        test_match: chunkAGHRB4JFN(function (
          blockDiagramDXYQGD6DInput26,
          blockDiagramDXYQGD6DInput27,
        ) {
          var blockDiagramDXYQGD6DBinding163,
            blockDiagramDXYQGD6DBinding164,
            blockDiagramDXYQGD6DBinding165;
          if (
            (this.options.backtrack_lexer &&
              ((blockDiagramDXYQGD6DBinding165 = {
                yylineno: this.yylineno,
                yylloc: {
                  first_line: this.yylloc.first_line,
                  last_line: this.last_line,
                  first_column: this.yylloc.first_column,
                  last_column: this.yylloc.last_column,
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done,
              }),
              this.options.ranges &&
                (blockDiagramDXYQGD6DBinding165.yylloc.range =
                  this.yylloc.range.slice(0))),
            (blockDiagramDXYQGD6DBinding164 =
              blockDiagramDXYQGD6DInput26[0].match(/(?:\r\n?|\n).*/g)),
            blockDiagramDXYQGD6DBinding164 &&
              (this.yylineno += blockDiagramDXYQGD6DBinding164.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: blockDiagramDXYQGD6DBinding164
                ? blockDiagramDXYQGD6DBinding164[
                    blockDiagramDXYQGD6DBinding164.length - 1
                  ].length -
                  blockDiagramDXYQGD6DBinding164[
                    blockDiagramDXYQGD6DBinding164.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  blockDiagramDXYQGD6DInput26[0].length,
            }),
            (this.yytext += blockDiagramDXYQGD6DInput26[0]),
            (this.match += blockDiagramDXYQGD6DInput26[0]),
            (this.matches = blockDiagramDXYQGD6DInput26),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              blockDiagramDXYQGD6DInput26[0].length,
            )),
            (this.matched += blockDiagramDXYQGD6DInput26[0]),
            (blockDiagramDXYQGD6DBinding163 = this.performAction.call(
              this,
              this.yy,
              this,
              blockDiagramDXYQGD6DInput27,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            blockDiagramDXYQGD6DBinding163)
          )
            return blockDiagramDXYQGD6DBinding163;
          if (this._backtrack) {
            for (var blockDiagramDXYQGD6DBinding166 in blockDiagramDXYQGD6DBinding165)
              this[blockDiagramDXYQGD6DBinding166] =
                blockDiagramDXYQGD6DBinding165[blockDiagramDXYQGD6DBinding166];
            return false;
          }
          return false;
        }, "test_match"),
        next: chunkAGHRB4JFN(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var blockDiagramDXYQGD6DBinding247,
            blockDiagramDXYQGD6DBinding248,
            blockDiagramDXYQGD6DBinding249,
            blockDiagramDXYQGD6DBinding250;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var blockDiagramDXYQGD6DBinding251 = this._currentRules(),
              blockDiagramDXYQGD6DBinding252 = 0;
            blockDiagramDXYQGD6DBinding252 <
            blockDiagramDXYQGD6DBinding251.length;
            blockDiagramDXYQGD6DBinding252++
          )
            if (
              ((blockDiagramDXYQGD6DBinding249 = this._input.match(
                this.rules[
                  blockDiagramDXYQGD6DBinding251[blockDiagramDXYQGD6DBinding252]
                ],
              )),
              blockDiagramDXYQGD6DBinding249 &&
                (!blockDiagramDXYQGD6DBinding248 ||
                  blockDiagramDXYQGD6DBinding249[0].length >
                    blockDiagramDXYQGD6DBinding248[0].length))
            ) {
              if (
                ((blockDiagramDXYQGD6DBinding248 =
                  blockDiagramDXYQGD6DBinding249),
                (blockDiagramDXYQGD6DBinding250 =
                  blockDiagramDXYQGD6DBinding252),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((blockDiagramDXYQGD6DBinding247 = this.test_match(
                    blockDiagramDXYQGD6DBinding249,
                    blockDiagramDXYQGD6DBinding251[
                      blockDiagramDXYQGD6DBinding252
                    ],
                  )),
                  blockDiagramDXYQGD6DBinding247 !== false)
                )
                  return blockDiagramDXYQGD6DBinding247;
                if (this._backtrack) {
                  blockDiagramDXYQGD6DBinding248 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return blockDiagramDXYQGD6DBinding248
            ? ((blockDiagramDXYQGD6DBinding247 = this.test_match(
                blockDiagramDXYQGD6DBinding248,
                blockDiagramDXYQGD6DBinding251[blockDiagramDXYQGD6DBinding250],
              )),
              blockDiagramDXYQGD6DBinding247 === false
                ? false
                : blockDiagramDXYQGD6DBinding247)
            : this._input === ""
              ? this.EOF
              : this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". Unrecognized text.\n" +
                    this.showPosition(),
                  {
                    text: "",
                    token: null,
                    line: this.yylineno,
                  },
                );
        }, "next"),
        lex: chunkAGHRB4JFN(function () {
          return this.next() || this.lex();
        }, "lex"),
        begin: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DInput236) {
          this.conditionStack.push(blockDiagramDXYQGD6DInput236);
        }, "begin"),
        popState: chunkAGHRB4JFN(function () {
          return this.conditionStack.length - 1 > 0
            ? this.conditionStack.pop()
            : this.conditionStack[0];
        }, "popState"),
        _currentRules: chunkAGHRB4JFN(function () {
          return this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
            ? this.conditions[
                this.conditionStack[this.conditionStack.length - 1]
              ].rules
            : this.conditions.INITIAL.rules;
        }, "_currentRules"),
        topState: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DInput196) {
          return (
            (blockDiagramDXYQGD6DInput196 =
              this.conditionStack.length -
              1 -
              Math.abs(blockDiagramDXYQGD6DInput196 || 0)),
            blockDiagramDXYQGD6DInput196 >= 0
              ? this.conditionStack[blockDiagramDXYQGD6DInput196]
              : "INITIAL"
          );
        }, "topState"),
        pushState: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DInput267) {
          this.begin(blockDiagramDXYQGD6DInput267);
        }, "pushState"),
        stateStackSize: chunkAGHRB4JFN(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {},
        performAction: chunkAGHRB4JFN(function (
          blockDiagramDXYQGD6DInput1,
          blockDiagramDXYQGD6DInput2,
          blockDiagramDXYQGD6DInput3,
          blockDiagramDXYQGD6DInput4,
        ) {
          switch (blockDiagramDXYQGD6DInput3) {
            case 0:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Found block-beta"),
                10
              );
            case 1:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Found id-block"),
                29
              );
            case 2:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Found block"),
                10
              );
            case 3:
              blockDiagramDXYQGD6DInput1
                .getLogger()
                .debug(".", blockDiagramDXYQGD6DInput2.yytext);
              break;
            case 4:
              blockDiagramDXYQGD6DInput1
                .getLogger()
                .debug("_", blockDiagramDXYQGD6DInput2.yytext);
              break;
            case 5:
              return 5;
            case 6:
              return ((blockDiagramDXYQGD6DInput2.yytext = -1), 28);
            case 7:
              return (
                (blockDiagramDXYQGD6DInput2.yytext =
                  blockDiagramDXYQGD6DInput2.yytext.replace(/columns\s+/, "")),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("COLUMNS (LEX)", blockDiagramDXYQGD6DInput2.yytext),
                28
              );
            case 8:
              this.pushState("md_string");
              break;
            case 9:
              return "MD_STR";
            case 10:
              this.popState();
              break;
            case 11:
              this.pushState("string");
              break;
            case 12:
              blockDiagramDXYQGD6DInput1
                .getLogger()
                .debug("LEX: POPPING STR:", blockDiagramDXYQGD6DInput2.yytext);
              this.popState();
              break;
            case 13:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("LEX: STR end:", blockDiagramDXYQGD6DInput2.yytext),
                "STR"
              );
            case 14:
              return (
                (blockDiagramDXYQGD6DInput2.yytext =
                  blockDiagramDXYQGD6DInput2.yytext.replace(/space\:/, "")),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("SPACE NUM (LEX)", blockDiagramDXYQGD6DInput2.yytext),
                21
              );
            case 15:
              return (
                (blockDiagramDXYQGD6DInput2.yytext = "1"),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("COLUMNS (LEX)", blockDiagramDXYQGD6DInput2.yytext),
                21
              );
            case 16:
              return 42;
            case 17:
              return "LINKSTYLE";
            case 18:
              return "INTERPOLATE";
            case 19:
              return (this.pushState("CLASSDEF"), 39);
            case 20:
              return (
                this.popState(),
                this.pushState("CLASSDEFID"),
                "DEFAULT_CLASSDEF_ID"
              );
            case 21:
              return (this.popState(), this.pushState("CLASSDEFID"), 40);
            case 22:
              return (this.popState(), 41);
            case 23:
              return (this.pushState("CLASS"), 43);
            case 24:
              return (this.popState(), this.pushState("CLASS_STYLE"), 44);
            case 25:
              return (this.popState(), 45);
            case 26:
              return (this.pushState("STYLE_STMNT"), 46);
            case 27:
              return (this.popState(), this.pushState("STYLE_DEFINITION"), 47);
            case 28:
              return (this.popState(), 48);
            case 29:
              return (this.pushState("acc_title"), "acc_title");
            case 30:
              return (this.popState(), "acc_title_value");
            case 31:
              return (this.pushState("acc_descr"), "acc_descr");
            case 32:
              return (this.popState(), "acc_descr_value");
            case 33:
              this.pushState("acc_descr_multiline");
              break;
            case 34:
              this.popState();
              break;
            case 35:
              return "acc_descr_multiline_value";
            case 36:
              return 30;
            case 37:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: (("),
                "NODE_DEND"
              );
            case 38:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: (("),
                "NODE_DEND"
              );
            case 39:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: ))"),
                "NODE_DEND"
              );
            case 40:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: (("),
                "NODE_DEND"
              );
            case 41:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: (("),
                "NODE_DEND"
              );
            case 42:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: (-"),
                "NODE_DEND"
              );
            case 43:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: -)"),
                "NODE_DEND"
              );
            case 44:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: (("),
                "NODE_DEND"
              );
            case 45:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: ]]"),
                "NODE_DEND"
              );
            case 46:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: ("),
                "NODE_DEND"
              );
            case 47:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: ])"),
                "NODE_DEND"
              );
            case 48:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: /]"),
                "NODE_DEND"
              );
            case 49:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: /]"),
                "NODE_DEND"
              );
            case 50:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: )]"),
                "NODE_DEND"
              );
            case 51:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: )"),
                "NODE_DEND"
              );
            case 52:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: ]>"),
                "NODE_DEND"
              );
            case 53:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: ]"),
                "NODE_DEND"
              );
            case 54:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lexa: -)"),
                this.pushState("NODE"),
                35
              );
            case 55:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lexa: (-"),
                this.pushState("NODE"),
                35
              );
            case 56:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lexa: ))"),
                this.pushState("NODE"),
                35
              );
            case 57:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lexa: )"),
                this.pushState("NODE"),
                35
              );
            case 58:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: ((("),
                this.pushState("NODE"),
                35
              );
            case 59:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lexa: )"),
                this.pushState("NODE"),
                35
              );
            case 60:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lexa: )"),
                this.pushState("NODE"),
                35
              );
            case 61:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lexa: )"),
                this.pushState("NODE"),
                35
              );
            case 62:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lexc: >"),
                this.pushState("NODE"),
                35
              );
            case 63:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lexa: (["),
                this.pushState("NODE"),
                35
              );
            case 64:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lexa: )"),
                this.pushState("NODE"),
                35
              );
            case 65:
              return (this.pushState("NODE"), 35);
            case 66:
              return (this.pushState("NODE"), 35);
            case 67:
              return (this.pushState("NODE"), 35);
            case 68:
              return (this.pushState("NODE"), 35);
            case 69:
              return (this.pushState("NODE"), 35);
            case 70:
              return (this.pushState("NODE"), 35);
            case 71:
              return (this.pushState("NODE"), 35);
            case 72:
              return (
                blockDiagramDXYQGD6DInput1.getLogger().debug("Lexa: ["),
                this.pushState("NODE"),
                35
              );
            case 73:
              return (
                this.pushState("BLOCK_ARROW"),
                blockDiagramDXYQGD6DInput1.getLogger().debug("LEX ARR START"),
                37
              );
            case 74:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: NODE_ID", blockDiagramDXYQGD6DInput2.yytext),
                31
              );
            case 75:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: EOF", blockDiagramDXYQGD6DInput2.yytext),
                8
              );
            case 76:
              this.pushState("md_string");
              break;
            case 77:
              this.pushState("md_string");
              break;
            case 78:
              return "NODE_DESCR";
            case 79:
              this.popState();
              break;
            case 80:
              blockDiagramDXYQGD6DInput1
                .getLogger()
                .debug("Lex: Starting string");
              this.pushState("string");
              break;
            case 81:
              blockDiagramDXYQGD6DInput1
                .getLogger()
                .debug("LEX ARR: Starting string");
              this.pushState("string");
              break;
            case 82:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("LEX: NODE_DESCR:", blockDiagramDXYQGD6DInput2.yytext),
                "NODE_DESCR"
              );
            case 83:
              blockDiagramDXYQGD6DInput1.getLogger().debug("LEX POPPING");
              this.popState();
              break;
            case 84:
              blockDiagramDXYQGD6DInput1.getLogger().debug("Lex: =>BAE");
              this.pushState("ARROW_DIR");
              break;
            case 85:
              return (
                (blockDiagramDXYQGD6DInput2.yytext =
                  blockDiagramDXYQGD6DInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug(
                    "Lex (right): dir:",
                    blockDiagramDXYQGD6DInput2.yytext,
                  ),
                "DIR"
              );
            case 86:
              return (
                (blockDiagramDXYQGD6DInput2.yytext =
                  blockDiagramDXYQGD6DInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex (left):", blockDiagramDXYQGD6DInput2.yytext),
                "DIR"
              );
            case 87:
              return (
                (blockDiagramDXYQGD6DInput2.yytext =
                  blockDiagramDXYQGD6DInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex (x):", blockDiagramDXYQGD6DInput2.yytext),
                "DIR"
              );
            case 88:
              return (
                (blockDiagramDXYQGD6DInput2.yytext =
                  blockDiagramDXYQGD6DInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex (y):", blockDiagramDXYQGD6DInput2.yytext),
                "DIR"
              );
            case 89:
              return (
                (blockDiagramDXYQGD6DInput2.yytext =
                  blockDiagramDXYQGD6DInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex (up):", blockDiagramDXYQGD6DInput2.yytext),
                "DIR"
              );
            case 90:
              return (
                (blockDiagramDXYQGD6DInput2.yytext =
                  blockDiagramDXYQGD6DInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex (down):", blockDiagramDXYQGD6DInput2.yytext),
                "DIR"
              );
            case 91:
              return (
                (blockDiagramDXYQGD6DInput2.yytext = "]>"),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug(
                    "Lex (ARROW_DIR end):",
                    blockDiagramDXYQGD6DInput2.yytext,
                  ),
                this.popState(),
                this.popState(),
                "BLOCK_ARROW_END"
              );
            case 92:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug(
                    "Lex: LINK",
                    "#" + blockDiagramDXYQGD6DInput2.yytext + "#",
                  ),
                15
              );
            case 93:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: LINK", blockDiagramDXYQGD6DInput2.yytext),
                15
              );
            case 94:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: LINK", blockDiagramDXYQGD6DInput2.yytext),
                15
              );
            case 95:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: LINK", blockDiagramDXYQGD6DInput2.yytext),
                15
              );
            case 96:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: START_LINK", blockDiagramDXYQGD6DInput2.yytext),
                this.pushState("LLABEL"),
                16
              );
            case 97:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: START_LINK", blockDiagramDXYQGD6DInput2.yytext),
                this.pushState("LLABEL"),
                16
              );
            case 98:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: START_LINK", blockDiagramDXYQGD6DInput2.yytext),
                this.pushState("LLABEL"),
                16
              );
            case 99:
              this.pushState("md_string");
              break;
            case 100:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: Starting string"),
                this.pushState("string"),
                "LINK_LABEL"
              );
            case 101:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug(
                    "Lex: LINK",
                    "#" + blockDiagramDXYQGD6DInput2.yytext + "#",
                  ),
                15
              );
            case 102:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: LINK", blockDiagramDXYQGD6DInput2.yytext),
                15
              );
            case 103:
              return (
                this.popState(),
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: LINK", blockDiagramDXYQGD6DInput2.yytext),
                15
              );
            case 104:
              return (
                blockDiagramDXYQGD6DInput1
                  .getLogger()
                  .debug("Lex: COLON", blockDiagramDXYQGD6DInput2.yytext),
                (blockDiagramDXYQGD6DInput2.yytext =
                  blockDiagramDXYQGD6DInput2.yytext.slice(1)),
                27
              );
          }
        }, "anonymous"),
        rules: [
          /^(?:block-beta\b)/,
          /^(?:block:)/,
          /^(?:block\b)/,
          /^(?:[\s]+)/,
          /^(?:[\n]+)/,
          /^(?:((\u000D\u000A)|(\u000A)))/,
          /^(?:columns\s+auto\b)/,
          /^(?:columns\s+[\d]+)/,
          /^(?:["][`])/,
          /^(?:[^`"]+)/,
          /^(?:[`]["])/,
          /^(?:["])/,
          /^(?:["])/,
          /^(?:[^"]*)/,
          /^(?:space[:]\d+)/,
          /^(?:space\b)/,
          /^(?:default\b)/,
          /^(?:linkStyle\b)/,
          /^(?:interpolate\b)/,
          /^(?:classDef\s+)/,
          /^(?:DEFAULT\s+)/,
          /^(?:\w+\s+)/,
          /^(?:[^\n]*)/,
          /^(?:class\s+)/,
          /^(?:(\w+)+((,\s*\w+)*))/,
          /^(?:[^\n]*)/,
          /^(?:style\s+)/,
          /^(?:(\w+)+((,\s*\w+)*))/,
          /^(?:[^\n]*)/,
          /^(?:accTitle\s*:\s*)/,
          /^(?:(?!\n||)*[^\n]*)/,
          /^(?:accDescr\s*:\s*)/,
          /^(?:(?!\n||)*[^\n]*)/,
          /^(?:accDescr\s*\{\s*)/,
          /^(?:[\}])/,
          /^(?:[^\}]*)/,
          /^(?:end\b\s*)/,
          /^(?:\(\(\()/,
          /^(?:\)\)\))/,
          /^(?:[\)]\))/,
          /^(?:\}\})/,
          /^(?:\})/,
          /^(?:\(-)/,
          /^(?:-\))/,
          /^(?:\(\()/,
          /^(?:\]\])/,
          /^(?:\()/,
          /^(?:\]\))/,
          /^(?:\\\])/,
          /^(?:\/\])/,
          /^(?:\)\])/,
          /^(?:[\)])/,
          /^(?:\]>)/,
          /^(?:[\]])/,
          /^(?:-\))/,
          /^(?:\(-)/,
          /^(?:\)\))/,
          /^(?:\))/,
          /^(?:\(\(\()/,
          /^(?:\(\()/,
          /^(?:\{\{)/,
          /^(?:\{)/,
          /^(?:>)/,
          /^(?:\(\[)/,
          /^(?:\()/,
          /^(?:\[\[)/,
          /^(?:\[\|)/,
          /^(?:\[\()/,
          /^(?:\)\)\))/,
          /^(?:\[\\)/,
          /^(?:\[\/)/,
          /^(?:\[\\)/,
          /^(?:\[)/,
          /^(?:<\[)/,
          /^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,
          /^(?:$)/,
          /^(?:["][`])/,
          /^(?:["][`])/,
          /^(?:[^`"]+)/,
          /^(?:[`]["])/,
          /^(?:["])/,
          /^(?:["])/,
          /^(?:[^"]+)/,
          /^(?:["])/,
          /^(?:\]>\s*\()/,
          /^(?:,?\s*right\s*)/,
          /^(?:,?\s*left\s*)/,
          /^(?:,?\s*x\s*)/,
          /^(?:,?\s*y\s*)/,
          /^(?:,?\s*up\s*)/,
          /^(?:,?\s*down\s*)/,
          /^(?:\)\s*)/,
          /^(?:\s*[xo<]?--+[-xo>]\s*)/,
          /^(?:\s*[xo<]?==+[=xo>]\s*)/,
          /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
          /^(?:\s*~~[\~]+\s*)/,
          /^(?:\s*[xo<]?--\s*)/,
          /^(?:\s*[xo<]?==\s*)/,
          /^(?:\s*[xo<]?-\.\s*)/,
          /^(?:["][`])/,
          /^(?:["])/,
          /^(?:\s*[xo<]?--+[-xo>]\s*)/,
          /^(?:\s*[xo<]?==+[=xo>]\s*)/,
          /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
          /^(?::\d+)/,
        ],
        conditions: {
          STYLE_DEFINITION: {
            rules: [28],
            inclusive: false,
          },
          STYLE_STMNT: {
            rules: [27],
            inclusive: false,
          },
          CLASSDEFID: {
            rules: [22],
            inclusive: false,
          },
          CLASSDEF: {
            rules: [20, 21],
            inclusive: false,
          },
          CLASS_STYLE: {
            rules: [25],
            inclusive: false,
          },
          CLASS: {
            rules: [24],
            inclusive: false,
          },
          LLABEL: {
            rules: [99, 100, 101, 102, 103],
            inclusive: false,
          },
          ARROW_DIR: {
            rules: [85, 86, 87, 88, 89, 90, 91],
            inclusive: false,
          },
          BLOCK_ARROW: {
            rules: [76, 81, 84],
            inclusive: false,
          },
          NODE: {
            rules: [
              37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
              53, 77, 80,
            ],
            inclusive: false,
          },
          md_string: {
            rules: [9, 10, 78, 79],
            inclusive: false,
          },
          space: {
            rules: [],
            inclusive: false,
          },
          string: {
            rules: [12, 13, 82, 83],
            inclusive: false,
          },
          acc_descr_multiline: {
            rules: [34, 35],
            inclusive: false,
          },
          acc_descr: {
            rules: [32],
            inclusive: false,
          },
          acc_title: {
            rules: [30],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 14, 15, 16, 17, 18, 19, 23, 26, 29,
              31, 33, 36, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
              67, 68, 69, 70, 71, 72, 73, 74, 75, 92, 93, 94, 95, 96, 97, 98,
              104,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function blockDiagramDXYQGD6DHelper23() {
      this.yy = {};
    }
    return (
      chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper23, "Parser"),
      (blockDiagramDXYQGD6DHelper23.prototype = blockDiagramDXYQGD6DBinding92),
      (blockDiagramDXYQGD6DBinding92.Parser = blockDiagramDXYQGD6DHelper23),
      new blockDiagramDXYQGD6DHelper23()
    );
  })();
  blockDiagramDXYQGD6DBinding1.parser = blockDiagramDXYQGD6DBinding1;
  blockDiagramDXYQGD6DBinding2 = blockDiagramDXYQGD6DBinding1;
  blockDiagramDXYQGD6DBinding3 = new Map();
  blockDiagramDXYQGD6DBinding4 = [];
  blockDiagramDXYQGD6DBinding5 = new Map();
  blockDiagramDXYQGD6DBinding6 = "color";
  blockDiagramDXYQGD6DBinding7 = "fill";
  blockDiagramDXYQGD6DBinding8 = "bgFill";
  blockDiagramDXYQGD6DBinding9 = ",";
  blockDiagramDXYQGD6DBinding10 = chunkICPOFSXXB();
  blockDiagramDXYQGD6DBinding11 = new Map();
  blockDiagramDXYQGD6DBinding12 = "";
  blockDiagramDXYQGD6DBinding13 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput279) =>
      chunkICPOFSXXS.sanitizeText(
        blockDiagramDXYQGD6DInput279,
        blockDiagramDXYQGD6DBinding10,
      ),
    "sanitizeText",
  );
  blockDiagramDXYQGD6DBinding14 = chunkAGHRB4JFN(function (
    blockDiagramDXYQGD6DInput159,
    blockDiagramDXYQGD6DInput160 = "",
  ) {
    let blockDiagramDXYQGD6DBinding432 = blockDiagramDXYQGD6DBinding11.get(
      blockDiagramDXYQGD6DInput159,
    );
    blockDiagramDXYQGD6DBinding432 ||
      ((blockDiagramDXYQGD6DBinding432 = {
        id: blockDiagramDXYQGD6DInput159,
        styles: [],
        textStyles: [],
      }),
      blockDiagramDXYQGD6DBinding11.set(
        blockDiagramDXYQGD6DInput159,
        blockDiagramDXYQGD6DBinding432,
      ));
    blockDiagramDXYQGD6DInput160
      ?.split(blockDiagramDXYQGD6DBinding9)
      .forEach((blockDiagramDXYQGD6DInput191) => {
        let blockDiagramDXYQGD6DBinding486 = blockDiagramDXYQGD6DInput191
          .replace(/([^;]*);/, "$1")
          .trim();
        if (
          RegExp(blockDiagramDXYQGD6DBinding6).exec(
            blockDiagramDXYQGD6DInput191,
          )
        ) {
          let blockDiagramDXYQGD6DBinding544 = blockDiagramDXYQGD6DBinding486
            .replace(blockDiagramDXYQGD6DBinding7, blockDiagramDXYQGD6DBinding8)
            .replace(
              blockDiagramDXYQGD6DBinding6,
              blockDiagramDXYQGD6DBinding7,
            );
          blockDiagramDXYQGD6DBinding432.textStyles.push(
            blockDiagramDXYQGD6DBinding544,
          );
        }
        blockDiagramDXYQGD6DBinding432.styles.push(
          blockDiagramDXYQGD6DBinding486,
        );
      });
  }, "addStyleClass");
  blockDiagramDXYQGD6DBinding15 = chunkAGHRB4JFN(function (
    blockDiagramDXYQGD6DInput225,
    blockDiagramDXYQGD6DInput226 = "",
  ) {
    let blockDiagramDXYQGD6DBinding545 = blockDiagramDXYQGD6DBinding3.get(
      blockDiagramDXYQGD6DInput225,
    );
    blockDiagramDXYQGD6DInput226 != null &&
      (blockDiagramDXYQGD6DBinding545.styles =
        blockDiagramDXYQGD6DInput226.split(blockDiagramDXYQGD6DBinding9));
  }, "addStyle2Node");
  blockDiagramDXYQGD6DBinding16 = chunkAGHRB4JFN(function (
    blockDiagramDXYQGD6DInput180,
    blockDiagramDXYQGD6DInput181,
  ) {
    blockDiagramDXYQGD6DInput180.split(",").forEach(function (item) {
      let blockDiagramDXYQGD6DBinding487 =
        blockDiagramDXYQGD6DBinding3.get(item);
      if (blockDiagramDXYQGD6DBinding487 === undefined) {
        let blockDiagramDXYQGD6DBinding542 = item.trim();
        blockDiagramDXYQGD6DBinding487 = {
          id: blockDiagramDXYQGD6DBinding542,
          type: "na",
          children: [],
        };
        blockDiagramDXYQGD6DBinding3.set(
          blockDiagramDXYQGD6DBinding542,
          blockDiagramDXYQGD6DBinding487,
        );
      }
      blockDiagramDXYQGD6DBinding487.classes ||= [];
      blockDiagramDXYQGD6DBinding487.classes.push(blockDiagramDXYQGD6DInput181);
    });
  }, "setCssClass");
  blockDiagramDXYQGD6DBinding17 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput43, blockDiagramDXYQGD6DInput44) => {
      let blockDiagramDXYQGD6DBinding216 = blockDiagramDXYQGD6DInput43.flat(),
        blockDiagramDXYQGD6DBinding217 = [],
        blockDiagramDXYQGD6DBinding218 =
          blockDiagramDXYQGD6DBinding216.find(
            (item) => item?.type === "column-setting",
          )?.columns ?? -1;
      for (let blockDiagramDXYQGD6DBinding229 of blockDiagramDXYQGD6DBinding216) {
        if (
          (typeof blockDiagramDXYQGD6DBinding218 == "number" &&
            blockDiagramDXYQGD6DBinding218 > 0 &&
            blockDiagramDXYQGD6DBinding229.type !== "column-setting" &&
            typeof blockDiagramDXYQGD6DBinding229.widthInColumns == "number" &&
            blockDiagramDXYQGD6DBinding229.widthInColumns >
              blockDiagramDXYQGD6DBinding218 &&
            chunkAGHRB4JFI.warn(
              `Block ${blockDiagramDXYQGD6DBinding229.id} width ${blockDiagramDXYQGD6DBinding229.widthInColumns} exceeds configured column width ${blockDiagramDXYQGD6DBinding218}`,
            ),
          (blockDiagramDXYQGD6DBinding229.label &&=
            blockDiagramDXYQGD6DBinding13(
              blockDiagramDXYQGD6DBinding229.label,
            )),
          blockDiagramDXYQGD6DBinding229.type === "classDef")
        ) {
          blockDiagramDXYQGD6DBinding14(
            blockDiagramDXYQGD6DBinding229.id,
            blockDiagramDXYQGD6DBinding229.css,
          );
          continue;
        }
        if (blockDiagramDXYQGD6DBinding229.type === "applyClass") {
          blockDiagramDXYQGD6DBinding16(
            blockDiagramDXYQGD6DBinding229.id,
            blockDiagramDXYQGD6DBinding229?.styleClass ?? "",
          );
          continue;
        }
        if (blockDiagramDXYQGD6DBinding229.type === "applyStyles") {
          blockDiagramDXYQGD6DBinding229?.stylesStr &&
            blockDiagramDXYQGD6DBinding15(
              blockDiagramDXYQGD6DBinding229.id,
              blockDiagramDXYQGD6DBinding229?.stylesStr,
            );
          continue;
        }
        if (blockDiagramDXYQGD6DBinding229.type === "column-setting")
          blockDiagramDXYQGD6DInput44.columns =
            blockDiagramDXYQGD6DBinding229.columns ?? -1;
        else if (blockDiagramDXYQGD6DBinding229.type === "edge") {
          let blockDiagramDXYQGD6DBinding540 =
            (blockDiagramDXYQGD6DBinding5.get(
              blockDiagramDXYQGD6DBinding229.id,
            ) ?? 0) + 1;
          blockDiagramDXYQGD6DBinding5.set(
            blockDiagramDXYQGD6DBinding229.id,
            blockDiagramDXYQGD6DBinding540,
          );
          blockDiagramDXYQGD6DBinding229.id =
            blockDiagramDXYQGD6DBinding540 +
            "-" +
            blockDiagramDXYQGD6DBinding229.id;
          blockDiagramDXYQGD6DBinding4.push(blockDiagramDXYQGD6DBinding229);
        } else {
          blockDiagramDXYQGD6DBinding229.label ||
            (blockDiagramDXYQGD6DBinding229.type === "composite"
              ? (blockDiagramDXYQGD6DBinding229.label = "")
              : (blockDiagramDXYQGD6DBinding229.label =
                  blockDiagramDXYQGD6DBinding229.id));
          let blockDiagramDXYQGD6DBinding334 = blockDiagramDXYQGD6DBinding3.get(
            blockDiagramDXYQGD6DBinding229.id,
          );
          if (
            (blockDiagramDXYQGD6DBinding334 === undefined
              ? blockDiagramDXYQGD6DBinding3.set(
                  blockDiagramDXYQGD6DBinding229.id,
                  blockDiagramDXYQGD6DBinding229,
                )
              : (blockDiagramDXYQGD6DBinding229.type !== "na" &&
                  (blockDiagramDXYQGD6DBinding334.type =
                    blockDiagramDXYQGD6DBinding229.type),
                blockDiagramDXYQGD6DBinding229.label !==
                  blockDiagramDXYQGD6DBinding229.id &&
                  (blockDiagramDXYQGD6DBinding334.label =
                    blockDiagramDXYQGD6DBinding229.label)),
            blockDiagramDXYQGD6DBinding229.children &&
              blockDiagramDXYQGD6DBinding17(
                blockDiagramDXYQGD6DBinding229.children,
                blockDiagramDXYQGD6DBinding229,
              ),
            blockDiagramDXYQGD6DBinding229.type === "space")
          ) {
            let blockDiagramDXYQGD6DBinding500 =
              blockDiagramDXYQGD6DBinding229.width ?? 1;
            for (
              let blockDiagramDXYQGD6DBinding538 = 0;
              blockDiagramDXYQGD6DBinding538 < blockDiagramDXYQGD6DBinding500;
              blockDiagramDXYQGD6DBinding538++
            ) {
              let blockDiagramDXYQGD6DBinding541 = lodashH(
                blockDiagramDXYQGD6DBinding229,
              );
              blockDiagramDXYQGD6DBinding541.id =
                blockDiagramDXYQGD6DBinding541.id +
                "-" +
                blockDiagramDXYQGD6DBinding538;
              blockDiagramDXYQGD6DBinding3.set(
                blockDiagramDXYQGD6DBinding541.id,
                blockDiagramDXYQGD6DBinding541,
              );
              blockDiagramDXYQGD6DBinding217.push(
                blockDiagramDXYQGD6DBinding541,
              );
            }
          } else
            blockDiagramDXYQGD6DBinding334 === undefined &&
              blockDiagramDXYQGD6DBinding217.push(
                blockDiagramDXYQGD6DBinding229,
              );
        }
      }
      blockDiagramDXYQGD6DInput44.children = blockDiagramDXYQGD6DBinding217;
    },
    "populateBlockDatabase",
  );
  blockDiagramDXYQGD6DBinding18 = [];
  blockDiagramDXYQGD6DBinding19 = {
    id: "root",
    type: "composite",
    children: [],
    columns: -1,
  };
  blockDiagramDXYQGD6DBinding20 = chunkAGHRB4JFN(() => {
    chunkAGHRB4JFI.debug("Clear called");
    _chunkICPOFSXXA();
    blockDiagramDXYQGD6DBinding19 = {
      id: "root",
      type: "composite",
      children: [],
      columns: -1,
    };
    blockDiagramDXYQGD6DBinding3 = new Map([
      ["root", blockDiagramDXYQGD6DBinding19],
    ]);
    blockDiagramDXYQGD6DBinding18 = [];
    blockDiagramDXYQGD6DBinding11 = new Map();
    blockDiagramDXYQGD6DBinding4 = [];
    blockDiagramDXYQGD6DBinding5 = new Map();
    blockDiagramDXYQGD6DBinding12 = "";
  }, "clear");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper1, "typeStr2Type");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper2, "edgeTypeStr2Type");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper3, "edgeStrToEdgeData");
  blockDiagramDXYQGD6DBinding21 = 0;
  blockDiagramDXYQGD6DBinding22 = {
    getConfig: chunkAGHRB4JFN(() => chunkICPOFSXXY().block, "getConfig"),
    typeStr2Type: blockDiagramDXYQGD6DHelper1,
    edgeTypeStr2Type: blockDiagramDXYQGD6DHelper2,
    edgeStrToEdgeData: blockDiagramDXYQGD6DHelper3,
    getLogger: chunkAGHRB4JFN(() => chunkAGHRB4JFI, "getLogger"),
    getBlocksFlat: chunkAGHRB4JFN(
      () => [...blockDiagramDXYQGD6DBinding3.values()],
      "getBlocksFlat",
    ),
    getBlocks: chunkAGHRB4JFN(
      () => blockDiagramDXYQGD6DBinding18 || [],
      "getBlocks",
    ),
    getEdges: chunkAGHRB4JFN(() => blockDiagramDXYQGD6DBinding4, "getEdges"),
    setHierarchy: chunkAGHRB4JFN((blockDiagramDXYQGD6DInput234) => {
      blockDiagramDXYQGD6DBinding19.children = blockDiagramDXYQGD6DInput234;
      blockDiagramDXYQGD6DBinding17(
        blockDiagramDXYQGD6DInput234,
        blockDiagramDXYQGD6DBinding19,
      );
      blockDiagramDXYQGD6DBinding18 = blockDiagramDXYQGD6DBinding19.children;
    }, "setHierarchy"),
    getBlock: chunkAGHRB4JFN(
      (blockDiagramDXYQGD6DInput283) =>
        blockDiagramDXYQGD6DBinding3.get(blockDiagramDXYQGD6DInput283),
      "getBlock",
    ),
    setBlock: chunkAGHRB4JFN((blockDiagramDXYQGD6DInput275) => {
      blockDiagramDXYQGD6DBinding3.set(
        blockDiagramDXYQGD6DInput275.id,
        blockDiagramDXYQGD6DInput275,
      );
    }, "setBlock"),
    getColumns: chunkAGHRB4JFN((blockDiagramDXYQGD6DInput193) => {
      let blockDiagramDXYQGD6DBinding501 = blockDiagramDXYQGD6DBinding3.get(
        blockDiagramDXYQGD6DInput193,
      );
      return blockDiagramDXYQGD6DBinding501
        ? blockDiagramDXYQGD6DBinding501.columns
          ? blockDiagramDXYQGD6DBinding501.columns
          : blockDiagramDXYQGD6DBinding501.children
            ? blockDiagramDXYQGD6DBinding501.children.length
            : -1
        : -1;
    }, "getColumns"),
    getClasses: chunkAGHRB4JFN(function () {
      return blockDiagramDXYQGD6DBinding11;
    }, "getClasses"),
    clear: blockDiagramDXYQGD6DBinding20,
    generateId: chunkAGHRB4JFN(
      () => (
        blockDiagramDXYQGD6DBinding21++,
        "id-" +
          Math.random().toString(36).substr(2, 12) +
          "-" +
          blockDiagramDXYQGD6DBinding21
      ),
      "generateId",
    ),
    setDiagramId: chunkAGHRB4JFN((blockDiagramDXYQGD6DInput278) => {
      blockDiagramDXYQGD6DBinding12 = blockDiagramDXYQGD6DInput278;
    }, "setDiagramId"),
    getDiagramId: chunkAGHRB4JFN(
      () => blockDiagramDXYQGD6DBinding12,
      "getDiagramId",
    ),
  };
  blockDiagramDXYQGD6DBinding23 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput228, blockDiagramDXYQGD6DInput229) => {
      let blockDiagramDXYQGD6DBinding547 = distM;
      return distUnderscore(
        blockDiagramDXYQGD6DBinding547(blockDiagramDXYQGD6DInput228, "r"),
        blockDiagramDXYQGD6DBinding547(blockDiagramDXYQGD6DInput228, "g"),
        blockDiagramDXYQGD6DBinding547(blockDiagramDXYQGD6DInput228, "b"),
        blockDiagramDXYQGD6DInput229,
      );
    },
    "fade",
  );
  blockDiagramDXYQGD6DBinding24 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput28) => `.label {
    font-family: ${blockDiagramDXYQGD6DInput28.fontFamily};
    color: ${blockDiagramDXYQGD6DInput28.nodeTextColor || blockDiagramDXYQGD6DInput28.textColor};
  }
  .cluster-label text {
    fill: ${blockDiagramDXYQGD6DInput28.titleColor};
  }
  .cluster-label span,p {
    color: ${blockDiagramDXYQGD6DInput28.titleColor};
  }



  .label text,span,p {
    fill: ${blockDiagramDXYQGD6DInput28.nodeTextColor || blockDiagramDXYQGD6DInput28.textColor};
    color: ${blockDiagramDXYQGD6DInput28.nodeTextColor || blockDiagramDXYQGD6DInput28.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${blockDiagramDXYQGD6DInput28.mainBkg};
    stroke: ${blockDiagramDXYQGD6DInput28.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${blockDiagramDXYQGD6DInput28.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${blockDiagramDXYQGD6DInput28.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${blockDiagramDXYQGD6DInput28.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${blockDiagramDXYQGD6DInput28.edgeLabelBackground};
    /*
     * This is for backward compatibility with existing code that didn't
     * add a \`<p>\` around edge labels.
     *
     * TODO: We should probably remove this in a future release.
     */
    p {
      margin: 0;
      padding: 0;
      display: inline;
    }
    rect {
      opacity: 0.5;
      background-color: ${blockDiagramDXYQGD6DInput28.edgeLabelBackground};
      fill: ${blockDiagramDXYQGD6DInput28.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${blockDiagramDXYQGD6DInput28.edgeLabelBackground};
  }

  .node .cluster {
    // fill: ${blockDiagramDXYQGD6DBinding23(blockDiagramDXYQGD6DInput28.mainBkg, 0.5)};
    fill: ${blockDiagramDXYQGD6DBinding23(blockDiagramDXYQGD6DInput28.clusterBkg, 0.5)};
    stroke: ${blockDiagramDXYQGD6DBinding23(blockDiagramDXYQGD6DInput28.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${blockDiagramDXYQGD6DInput28.titleColor};
  }

  .cluster span,p {
    color: ${blockDiagramDXYQGD6DInput28.titleColor};
  }
  /* .cluster div {
    color: ${blockDiagramDXYQGD6DInput28.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${blockDiagramDXYQGD6DInput28.fontFamily};
    font-size: 12px;
    background: ${blockDiagramDXYQGD6DInput28.tertiaryColor};
    border: 1px solid ${blockDiagramDXYQGD6DInput28.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${blockDiagramDXYQGD6DInput28.textColor};
  }
  ${chunkFMBD7UC4T()}
`,
    "getStyles",
  );
  blockDiagramDXYQGD6DBinding25 = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DInput230,
      blockDiagramDXYQGD6DInput231,
      blockDiagramDXYQGD6DInput232,
      blockDiagramDXYQGD6DInput233,
    ) => {
      blockDiagramDXYQGD6DInput231.forEach((item) => {
        blockDiagramDXYQGD6DBinding26[item](
          blockDiagramDXYQGD6DInput230,
          blockDiagramDXYQGD6DInput232,
          blockDiagramDXYQGD6DInput233,
        );
      });
    },
    "insertMarkers",
  );
  blockDiagramDXYQGD6DBinding26 = {
    extension: chunkAGHRB4JFN(
      (
        blockDiagramDXYQGD6DInput82,
        blockDiagramDXYQGD6DInput83,
        blockDiagramDXYQGD6DInput84,
      ) => {
        chunkAGHRB4JFI.trace(
          "Making markers for ",
          blockDiagramDXYQGD6DInput84,
        );
        blockDiagramDXYQGD6DInput82
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput84 +
              "_" +
              blockDiagramDXYQGD6DInput83 +
              "-extensionStart",
          )
          .attr("class", "marker extension " + blockDiagramDXYQGD6DInput83)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,7 L18,13 V 1 Z");
        blockDiagramDXYQGD6DInput82
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput84 +
              "_" +
              blockDiagramDXYQGD6DInput83 +
              "-extensionEnd",
          )
          .attr("class", "marker extension " + blockDiagramDXYQGD6DInput83)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 V 13 L18,7 Z");
      },
      "extension",
    ),
    composition: chunkAGHRB4JFN(
      (
        blockDiagramDXYQGD6DInput88,
        blockDiagramDXYQGD6DInput89,
        blockDiagramDXYQGD6DInput90,
      ) => {
        blockDiagramDXYQGD6DInput88
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput90 +
              "_" +
              blockDiagramDXYQGD6DInput89 +
              "-compositionStart",
          )
          .attr("class", "marker composition " + blockDiagramDXYQGD6DInput89)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        blockDiagramDXYQGD6DInput88
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput90 +
              "_" +
              blockDiagramDXYQGD6DInput89 +
              "-compositionEnd",
          )
          .attr("class", "marker composition " + blockDiagramDXYQGD6DInput89)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      },
      "composition",
    ),
    aggregation: chunkAGHRB4JFN(
      (
        blockDiagramDXYQGD6DInput91,
        blockDiagramDXYQGD6DInput92,
        blockDiagramDXYQGD6DInput93,
      ) => {
        blockDiagramDXYQGD6DInput91
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput93 +
              "_" +
              blockDiagramDXYQGD6DInput92 +
              "-aggregationStart",
          )
          .attr("class", "marker aggregation " + blockDiagramDXYQGD6DInput92)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        blockDiagramDXYQGD6DInput91
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput93 +
              "_" +
              blockDiagramDXYQGD6DInput92 +
              "-aggregationEnd",
          )
          .attr("class", "marker aggregation " + blockDiagramDXYQGD6DInput92)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      },
      "aggregation",
    ),
    dependency: chunkAGHRB4JFN(
      (
        blockDiagramDXYQGD6DInput94,
        blockDiagramDXYQGD6DInput95,
        blockDiagramDXYQGD6DInput96,
      ) => {
        blockDiagramDXYQGD6DInput94
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput96 +
              "_" +
              blockDiagramDXYQGD6DInput95 +
              "-dependencyStart",
          )
          .attr("class", "marker dependency " + blockDiagramDXYQGD6DInput95)
          .attr("refX", 6)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        blockDiagramDXYQGD6DInput94
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput96 +
              "_" +
              blockDiagramDXYQGD6DInput95 +
              "-dependencyEnd",
          )
          .attr("class", "marker dependency " + blockDiagramDXYQGD6DInput95)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
      },
      "dependency",
    ),
    lollipop: chunkAGHRB4JFN(
      (
        blockDiagramDXYQGD6DInput77,
        blockDiagramDXYQGD6DInput78,
        blockDiagramDXYQGD6DInput79,
      ) => {
        blockDiagramDXYQGD6DInput77
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput79 +
              "_" +
              blockDiagramDXYQGD6DInput78 +
              "-lollipopStart",
          )
          .attr("class", "marker lollipop " + blockDiagramDXYQGD6DInput78)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("stroke", "black")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
        blockDiagramDXYQGD6DInput77
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput79 +
              "_" +
              blockDiagramDXYQGD6DInput78 +
              "-lollipopEnd",
          )
          .attr("class", "marker lollipop " + blockDiagramDXYQGD6DInput78)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("stroke", "black")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
      },
      "lollipop",
    ),
    point: chunkAGHRB4JFN(
      (
        blockDiagramDXYQGD6DInput66,
        blockDiagramDXYQGD6DInput67,
        blockDiagramDXYQGD6DInput68,
      ) => {
        blockDiagramDXYQGD6DInput66
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput68 +
              "_" +
              blockDiagramDXYQGD6DInput67 +
              "-pointEnd",
          )
          .attr("class", "marker " + blockDiagramDXYQGD6DInput67)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 6)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 0 L 10 5 L 0 10 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        blockDiagramDXYQGD6DInput66
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput68 +
              "_" +
              blockDiagramDXYQGD6DInput67 +
              "-pointStart",
          )
          .attr("class", "marker " + blockDiagramDXYQGD6DInput67)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 4.5)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 5 L 10 10 L 10 0 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
      },
      "point",
    ),
    circle: chunkAGHRB4JFN(
      (
        blockDiagramDXYQGD6DInput59,
        blockDiagramDXYQGD6DInput60,
        blockDiagramDXYQGD6DInput61,
      ) => {
        blockDiagramDXYQGD6DInput59
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput61 +
              "_" +
              blockDiagramDXYQGD6DInput60 +
              "-circleEnd",
          )
          .attr("class", "marker " + blockDiagramDXYQGD6DInput60)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 11)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        blockDiagramDXYQGD6DInput59
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput61 +
              "_" +
              blockDiagramDXYQGD6DInput60 +
              "-circleStart",
          )
          .attr("class", "marker " + blockDiagramDXYQGD6DInput60)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", -1)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
      },
      "circle",
    ),
    cross: chunkAGHRB4JFN(
      (
        blockDiagramDXYQGD6DInput62,
        blockDiagramDXYQGD6DInput63,
        blockDiagramDXYQGD6DInput64,
      ) => {
        blockDiagramDXYQGD6DInput62
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput64 +
              "_" +
              blockDiagramDXYQGD6DInput63 +
              "-crossEnd",
          )
          .attr("class", "marker cross " + blockDiagramDXYQGD6DInput63)
          .attr("viewBox", "0 0 11 11")
          .attr("refX", 12)
          .attr("refY", 5.2)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "1,0");
        blockDiagramDXYQGD6DInput62
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput64 +
              "_" +
              blockDiagramDXYQGD6DInput63 +
              "-crossStart",
          )
          .attr("class", "marker cross " + blockDiagramDXYQGD6DInput63)
          .attr("viewBox", "0 0 11 11")
          .attr("refX", -1)
          .attr("refY", 5.2)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "1,0");
      },
      "cross",
    ),
    barb: chunkAGHRB4JFN(
      (
        blockDiagramDXYQGD6DInput156,
        blockDiagramDXYQGD6DInput157,
        blockDiagramDXYQGD6DInput158,
      ) => {
        blockDiagramDXYQGD6DInput156
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput158 +
              "_" +
              blockDiagramDXYQGD6DInput157 +
              "-barbEnd",
          )
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 14)
          .attr("markerUnits", "strokeWidth")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
      },
      "barb",
    ),
  };
  blockDiagramDXYQGD6DBinding27 = blockDiagramDXYQGD6DBinding25;
  blockDiagramDXYQGD6DBinding28 = chunkICPOFSXXB()?.block?.padding ?? 8;
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper4, "calculateBlockPosition");
  blockDiagramDXYQGD6DBinding29 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput122) => {
      let blockDiagramDXYQGD6DBinding337 = 0,
        blockDiagramDXYQGD6DBinding338 = 0;
      for (let blockDiagramDXYQGD6DBinding391 of blockDiagramDXYQGD6DInput122.children) {
        let { width, height, x, y } = blockDiagramDXYQGD6DBinding391.size ?? {
          width: 0,
          height: 0,
          x: 0,
          y: 0,
        };
        chunkAGHRB4JFI.debug(
          "getMaxChildSize abc95 child:",
          blockDiagramDXYQGD6DBinding391.id,
          "width:",
          width,
          "height:",
          height,
          "x:",
          x,
          "y:",
          y,
          blockDiagramDXYQGD6DBinding391.type,
        );
        blockDiagramDXYQGD6DBinding391.type !== "space" &&
          (width > blockDiagramDXYQGD6DBinding337 &&
            (blockDiagramDXYQGD6DBinding337 =
              width / (blockDiagramDXYQGD6DBinding391.widthInColumns ?? 1)),
          height > blockDiagramDXYQGD6DBinding338 &&
            (blockDiagramDXYQGD6DBinding338 = height));
      }
      return {
        width: blockDiagramDXYQGD6DBinding337,
        height: blockDiagramDXYQGD6DBinding338,
      };
    },
    "getMaxChildSize",
  );
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper5, "setBlockSizes");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper6, "layoutBlocks");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper7, "findBounds");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper8, "layout");
  blockDiagramDXYQGD6DBinding30 = chunkAGHRB4JFN(
    async (
      blockDiagramDXYQGD6DInput161,
      blockDiagramDXYQGD6DInput162,
      blockDiagramDXYQGD6DInput163,
      blockDiagramDXYQGD6DInput164 = false,
      blockDiagramDXYQGD6DInput165 = false,
    ) => {
      let blockDiagramDXYQGD6DBinding433 = blockDiagramDXYQGD6DInput162 || "";
      typeof blockDiagramDXYQGD6DBinding433 == "object" &&
        (blockDiagramDXYQGD6DBinding433 = blockDiagramDXYQGD6DBinding433[0]);
      let blockDiagramDXYQGD6DBinding434 = chunkICPOFSXXB(),
        blockDiagramDXYQGD6DBinding435 = chunkICPOFSXXW(
          blockDiagramDXYQGD6DBinding434,
        );
      return await chunkU2HBQHQKN(
        blockDiagramDXYQGD6DInput161,
        blockDiagramDXYQGD6DBinding433,
        {
          style: blockDiagramDXYQGD6DInput163,
          isTitle: blockDiagramDXYQGD6DInput164,
          useHtmlLabels: blockDiagramDXYQGD6DBinding435,
          markdown: false,
          isNode: blockDiagramDXYQGD6DInput165,
          width: 1 / 0,
        },
        blockDiagramDXYQGD6DBinding434,
      );
    },
    "createLabel",
  );
  blockDiagramDXYQGD6DBinding31 = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DInput204,
      blockDiagramDXYQGD6DInput205,
      blockDiagramDXYQGD6DInput206,
      blockDiagramDXYQGD6DInput207,
      blockDiagramDXYQGD6DInput208,
    ) => {
      blockDiagramDXYQGD6DInput205.arrowTypeStart &&
        blockDiagramDXYQGD6DBinding33(
          blockDiagramDXYQGD6DInput204,
          "start",
          blockDiagramDXYQGD6DInput205.arrowTypeStart,
          blockDiagramDXYQGD6DInput206,
          blockDiagramDXYQGD6DInput207,
          blockDiagramDXYQGD6DInput208,
        );
      blockDiagramDXYQGD6DInput205.arrowTypeEnd &&
        blockDiagramDXYQGD6DBinding33(
          blockDiagramDXYQGD6DInput204,
          "end",
          blockDiagramDXYQGD6DInput205.arrowTypeEnd,
          blockDiagramDXYQGD6DInput206,
          blockDiagramDXYQGD6DInput207,
          blockDiagramDXYQGD6DInput208,
        );
    },
    "addEdgeMarkers",
  );
  blockDiagramDXYQGD6DBinding32 = {
    arrow_cross: "cross",
    arrow_point: "point",
    arrow_barb: "barb",
    arrow_circle: "circle",
    aggregation: "aggregation",
    extension: "extension",
    composition: "composition",
    dependency: "dependency",
    lollipop: "lollipop",
  };
  blockDiagramDXYQGD6DBinding33 = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DInput185,
      blockDiagramDXYQGD6DInput186,
      blockDiagramDXYQGD6DInput187,
      blockDiagramDXYQGD6DInput188,
      blockDiagramDXYQGD6DInput189,
      blockDiagramDXYQGD6DInput190,
    ) => {
      let blockDiagramDXYQGD6DBinding483 =
        blockDiagramDXYQGD6DBinding32[blockDiagramDXYQGD6DInput187];
      if (!blockDiagramDXYQGD6DBinding483) {
        chunkAGHRB4JFI.warn(
          `Unknown arrow type: ${blockDiagramDXYQGD6DInput187}`,
        );
        return;
      }
      let blockDiagramDXYQGD6DBinding484 =
        blockDiagramDXYQGD6DInput186 === "start" ? "Start" : "End";
      blockDiagramDXYQGD6DInput185.attr(
        `marker-${blockDiagramDXYQGD6DInput186}`,
        `url(${blockDiagramDXYQGD6DInput188}#${blockDiagramDXYQGD6DInput189}_${blockDiagramDXYQGD6DInput190}-${blockDiagramDXYQGD6DBinding483}${blockDiagramDXYQGD6DBinding484})`,
      );
    },
    "addEdgeMarker",
  );
  blockDiagramDXYQGD6DBinding34 = {};
  blockDiagramDXYQGD6DBinding35 = {};
  blockDiagramDXYQGD6DBinding36 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput18, blockDiagramDXYQGD6DInput19) => {
      let blockDiagramDXYQGD6DBinding151 = chunkICPOFSXXB(),
        blockDiagramDXYQGD6DBinding152 = chunkICPOFSXXW(
          blockDiagramDXYQGD6DBinding151,
        ),
        blockDiagramDXYQGD6DBinding153 = blockDiagramDXYQGD6DInput18
          .insert("g")
          .attr("class", "edgeLabel"),
        blockDiagramDXYQGD6DBinding154 = blockDiagramDXYQGD6DBinding153
          .insert("g")
          .attr("class", "label"),
        blockDiagramDXYQGD6DBinding155 =
          blockDiagramDXYQGD6DInput19.labelType === "markdown",
        blockDiagramDXYQGD6DBinding156 = await chunkU2HBQHQKN(
          blockDiagramDXYQGD6DInput18,
          blockDiagramDXYQGD6DInput19.label,
          {
            style: blockDiagramDXYQGD6DInput19.labelStyle,
            useHtmlLabels: blockDiagramDXYQGD6DBinding152,
            addSvgBackground: blockDiagramDXYQGD6DBinding155,
            isNode: false,
            markdown: blockDiagramDXYQGD6DBinding155,
            width: blockDiagramDXYQGD6DBinding155 ? undefined : 1 / 0,
          },
          blockDiagramDXYQGD6DBinding151,
        );
      blockDiagramDXYQGD6DBinding154
        .node()
        .appendChild(blockDiagramDXYQGD6DBinding156);
      let blockDiagramDXYQGD6DBinding157 =
          blockDiagramDXYQGD6DBinding156.getBBox(),
        blockDiagramDXYQGD6DBinding158 = blockDiagramDXYQGD6DBinding157;
      if (blockDiagramDXYQGD6DBinding152) {
        let blockDiagramDXYQGD6DBinding508 =
            blockDiagramDXYQGD6DBinding156.children[0],
          blockDiagramDXYQGD6DBinding509 = srcR(blockDiagramDXYQGD6DBinding156);
        blockDiagramDXYQGD6DBinding157 =
          blockDiagramDXYQGD6DBinding508.getBoundingClientRect();
        blockDiagramDXYQGD6DBinding158 = blockDiagramDXYQGD6DBinding157;
        blockDiagramDXYQGD6DBinding509.attr(
          "width",
          blockDiagramDXYQGD6DBinding157.width,
        );
        blockDiagramDXYQGD6DBinding509.attr(
          "height",
          blockDiagramDXYQGD6DBinding157.height,
        );
      } else {
        let blockDiagramDXYQGD6DBinding539 = srcR(
          blockDiagramDXYQGD6DBinding156,
        )
          .select("text")
          .node();
        blockDiagramDXYQGD6DBinding539 &&
          typeof blockDiagramDXYQGD6DBinding539.getBBox == "function" &&
          (blockDiagramDXYQGD6DBinding158 =
            blockDiagramDXYQGD6DBinding539.getBBox());
      }
      blockDiagramDXYQGD6DBinding154.attr(
        "transform",
        chunkBSJP7CBPT(
          blockDiagramDXYQGD6DBinding158,
          blockDiagramDXYQGD6DBinding152,
        ),
      );
      blockDiagramDXYQGD6DBinding34[blockDiagramDXYQGD6DInput19.id] =
        blockDiagramDXYQGD6DBinding153;
      blockDiagramDXYQGD6DInput19.width = blockDiagramDXYQGD6DBinding157.width;
      blockDiagramDXYQGD6DInput19.height =
        blockDiagramDXYQGD6DBinding157.height;
      let blockDiagramDXYQGD6DBinding159;
      if (blockDiagramDXYQGD6DInput19.startLabelLeft) {
        let blockDiagramDXYQGD6DBinding362 = blockDiagramDXYQGD6DInput18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramDXYQGD6DBinding363 = blockDiagramDXYQGD6DBinding362
            .insert("g")
            .attr("class", "inner"),
          blockDiagramDXYQGD6DBinding364 = await blockDiagramDXYQGD6DBinding30(
            blockDiagramDXYQGD6DBinding363,
            blockDiagramDXYQGD6DInput19.startLabelLeft,
            blockDiagramDXYQGD6DInput19.labelStyle,
          );
        blockDiagramDXYQGD6DBinding159 = blockDiagramDXYQGD6DBinding364;
        let blockDiagramDXYQGD6DBinding365 =
          blockDiagramDXYQGD6DBinding364.getBBox();
        if (blockDiagramDXYQGD6DBinding152) {
          let blockDiagramDXYQGD6DBinding510 =
              blockDiagramDXYQGD6DBinding364.children[0],
            blockDiagramDXYQGD6DBinding511 = srcR(
              blockDiagramDXYQGD6DBinding364,
            );
          blockDiagramDXYQGD6DBinding365 =
            blockDiagramDXYQGD6DBinding510.getBoundingClientRect();
          blockDiagramDXYQGD6DBinding511.attr(
            "width",
            blockDiagramDXYQGD6DBinding365.width,
          );
          blockDiagramDXYQGD6DBinding511.attr(
            "height",
            blockDiagramDXYQGD6DBinding365.height,
          );
        }
        blockDiagramDXYQGD6DBinding363.attr(
          "transform",
          chunkBSJP7CBPT(
            blockDiagramDXYQGD6DBinding365,
            blockDiagramDXYQGD6DBinding152,
          ),
        );
        blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput19.id] ||
          (blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput19.id] = {});
        blockDiagramDXYQGD6DBinding35[
          blockDiagramDXYQGD6DInput19.id
        ].startLeft = blockDiagramDXYQGD6DBinding362;
        blockDiagramDXYQGD6DHelper9(
          blockDiagramDXYQGD6DBinding159,
          blockDiagramDXYQGD6DInput19.startLabelLeft,
        );
      }
      if (blockDiagramDXYQGD6DInput19.startLabelRight) {
        let blockDiagramDXYQGD6DBinding339 = blockDiagramDXYQGD6DInput18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramDXYQGD6DBinding340 = blockDiagramDXYQGD6DBinding339
            .insert("g")
            .attr("class", "inner"),
          blockDiagramDXYQGD6DBinding341 = await blockDiagramDXYQGD6DBinding30(
            blockDiagramDXYQGD6DBinding339,
            blockDiagramDXYQGD6DInput19.startLabelRight,
            blockDiagramDXYQGD6DInput19.labelStyle,
          );
        blockDiagramDXYQGD6DBinding159 = blockDiagramDXYQGD6DBinding341;
        blockDiagramDXYQGD6DBinding340
          .node()
          .appendChild(blockDiagramDXYQGD6DBinding341);
        let blockDiagramDXYQGD6DBinding342 =
          blockDiagramDXYQGD6DBinding341.getBBox();
        if (blockDiagramDXYQGD6DBinding152) {
          let blockDiagramDXYQGD6DBinding512 =
              blockDiagramDXYQGD6DBinding341.children[0],
            blockDiagramDXYQGD6DBinding513 = srcR(
              blockDiagramDXYQGD6DBinding341,
            );
          blockDiagramDXYQGD6DBinding342 =
            blockDiagramDXYQGD6DBinding512.getBoundingClientRect();
          blockDiagramDXYQGD6DBinding513.attr(
            "width",
            blockDiagramDXYQGD6DBinding342.width,
          );
          blockDiagramDXYQGD6DBinding513.attr(
            "height",
            blockDiagramDXYQGD6DBinding342.height,
          );
        }
        blockDiagramDXYQGD6DBinding340.attr(
          "transform",
          chunkBSJP7CBPT(
            blockDiagramDXYQGD6DBinding342,
            blockDiagramDXYQGD6DBinding152,
          ),
        );
        blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput19.id] ||
          (blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput19.id] = {});
        blockDiagramDXYQGD6DBinding35[
          blockDiagramDXYQGD6DInput19.id
        ].startRight = blockDiagramDXYQGD6DBinding339;
        blockDiagramDXYQGD6DHelper9(
          blockDiagramDXYQGD6DBinding159,
          blockDiagramDXYQGD6DInput19.startLabelRight,
        );
      }
      if (blockDiagramDXYQGD6DInput19.endLabelLeft) {
        let blockDiagramDXYQGD6DBinding347 = blockDiagramDXYQGD6DInput18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramDXYQGD6DBinding348 = blockDiagramDXYQGD6DBinding347
            .insert("g")
            .attr("class", "inner"),
          blockDiagramDXYQGD6DBinding349 = await blockDiagramDXYQGD6DBinding30(
            blockDiagramDXYQGD6DBinding348,
            blockDiagramDXYQGD6DInput19.endLabelLeft,
            blockDiagramDXYQGD6DInput19.labelStyle,
          );
        blockDiagramDXYQGD6DBinding159 = blockDiagramDXYQGD6DBinding349;
        let blockDiagramDXYQGD6DBinding350 =
          blockDiagramDXYQGD6DBinding349.getBBox();
        if (blockDiagramDXYQGD6DBinding152) {
          let blockDiagramDXYQGD6DBinding514 =
              blockDiagramDXYQGD6DBinding349.children[0],
            blockDiagramDXYQGD6DBinding515 = srcR(
              blockDiagramDXYQGD6DBinding349,
            );
          blockDiagramDXYQGD6DBinding350 =
            blockDiagramDXYQGD6DBinding514.getBoundingClientRect();
          blockDiagramDXYQGD6DBinding515.attr(
            "width",
            blockDiagramDXYQGD6DBinding350.width,
          );
          blockDiagramDXYQGD6DBinding515.attr(
            "height",
            blockDiagramDXYQGD6DBinding350.height,
          );
        }
        blockDiagramDXYQGD6DBinding348.attr(
          "transform",
          chunkBSJP7CBPT(
            blockDiagramDXYQGD6DBinding350,
            blockDiagramDXYQGD6DBinding152,
          ),
        );
        blockDiagramDXYQGD6DBinding347
          .node()
          .appendChild(blockDiagramDXYQGD6DBinding349);
        blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput19.id] ||
          (blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput19.id] = {});
        blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput19.id].endLeft =
          blockDiagramDXYQGD6DBinding347;
        blockDiagramDXYQGD6DHelper9(
          blockDiagramDXYQGD6DBinding159,
          blockDiagramDXYQGD6DInput19.endLabelLeft,
        );
      }
      if (blockDiagramDXYQGD6DInput19.endLabelRight) {
        let blockDiagramDXYQGD6DBinding343 = blockDiagramDXYQGD6DInput18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramDXYQGD6DBinding344 = blockDiagramDXYQGD6DBinding343
            .insert("g")
            .attr("class", "inner"),
          blockDiagramDXYQGD6DBinding345 = await blockDiagramDXYQGD6DBinding30(
            blockDiagramDXYQGD6DBinding344,
            blockDiagramDXYQGD6DInput19.endLabelRight,
            blockDiagramDXYQGD6DInput19.labelStyle,
          );
        blockDiagramDXYQGD6DBinding159 = blockDiagramDXYQGD6DBinding345;
        let blockDiagramDXYQGD6DBinding346 =
          blockDiagramDXYQGD6DBinding345.getBBox();
        if (blockDiagramDXYQGD6DBinding152) {
          let blockDiagramDXYQGD6DBinding516 =
              blockDiagramDXYQGD6DBinding345.children[0],
            blockDiagramDXYQGD6DBinding517 = srcR(
              blockDiagramDXYQGD6DBinding345,
            );
          blockDiagramDXYQGD6DBinding346 =
            blockDiagramDXYQGD6DBinding516.getBoundingClientRect();
          blockDiagramDXYQGD6DBinding517.attr(
            "width",
            blockDiagramDXYQGD6DBinding346.width,
          );
          blockDiagramDXYQGD6DBinding517.attr(
            "height",
            blockDiagramDXYQGD6DBinding346.height,
          );
        }
        blockDiagramDXYQGD6DBinding344.attr(
          "transform",
          chunkBSJP7CBPT(
            blockDiagramDXYQGD6DBinding346,
            blockDiagramDXYQGD6DBinding152,
          ),
        );
        blockDiagramDXYQGD6DBinding343
          .node()
          .appendChild(blockDiagramDXYQGD6DBinding345);
        blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput19.id] ||
          (blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput19.id] = {});
        blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput19.id].endRight =
          blockDiagramDXYQGD6DBinding343;
        blockDiagramDXYQGD6DHelper9(
          blockDiagramDXYQGD6DBinding159,
          blockDiagramDXYQGD6DInput19.endLabelRight,
        );
      }
      return blockDiagramDXYQGD6DBinding156;
    },
    "insertEdgeLabel",
  );
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper9, "setTerminalWidth");
  blockDiagramDXYQGD6DBinding37 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput31, blockDiagramDXYQGD6DInput32) => {
      chunkAGHRB4JFI.debug(
        "Moving label abc88 ",
        blockDiagramDXYQGD6DInput31.id,
        blockDiagramDXYQGD6DInput31.label,
        blockDiagramDXYQGD6DBinding34[blockDiagramDXYQGD6DInput31.id],
        blockDiagramDXYQGD6DInput32,
      );
      let blockDiagramDXYQGD6DBinding194 =
          blockDiagramDXYQGD6DInput32.updatedPath
            ? blockDiagramDXYQGD6DInput32.updatedPath
            : blockDiagramDXYQGD6DInput32.originalPath,
        { subGraphTitleTotalMargin } = chunkZZ45TVLEN(chunkICPOFSXXB());
      if (blockDiagramDXYQGD6DInput31.label) {
        let blockDiagramDXYQGD6DBinding401 =
            blockDiagramDXYQGD6DBinding34[blockDiagramDXYQGD6DInput31.id],
          blockDiagramDXYQGD6DBinding402 = blockDiagramDXYQGD6DInput31.x,
          blockDiagramDXYQGD6DBinding403 = blockDiagramDXYQGD6DInput31.y;
        if (blockDiagramDXYQGD6DBinding194) {
          let blockDiagramDXYQGD6DBinding442 = chunk5PVQY5BWG.calcLabelPosition(
            blockDiagramDXYQGD6DBinding194,
          );
          chunkAGHRB4JFI.debug(
            "Moving label " + blockDiagramDXYQGD6DInput31.label + " from (",
            blockDiagramDXYQGD6DBinding402,
            ",",
            blockDiagramDXYQGD6DBinding403,
            ") to (",
            blockDiagramDXYQGD6DBinding442.x,
            ",",
            blockDiagramDXYQGD6DBinding442.y,
            ") abc88",
          );
          blockDiagramDXYQGD6DInput32.updatedPath &&
            ((blockDiagramDXYQGD6DBinding402 =
              blockDiagramDXYQGD6DBinding442.x),
            (blockDiagramDXYQGD6DBinding403 =
              blockDiagramDXYQGD6DBinding442.y));
        }
        blockDiagramDXYQGD6DBinding401.attr(
          "transform",
          `translate(${blockDiagramDXYQGD6DBinding402}, ${blockDiagramDXYQGD6DBinding403 + subGraphTitleTotalMargin / 2})`,
        );
      }
      if (blockDiagramDXYQGD6DInput31.startLabelLeft) {
        let blockDiagramDXYQGD6DBinding439 =
            blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput31.id]
              .startLeft,
          blockDiagramDXYQGD6DBinding440 = blockDiagramDXYQGD6DInput31.x,
          blockDiagramDXYQGD6DBinding441 = blockDiagramDXYQGD6DInput31.y;
        if (blockDiagramDXYQGD6DBinding194) {
          let blockDiagramDXYQGD6DBinding524 =
            chunk5PVQY5BWG.calcTerminalLabelPosition(
              blockDiagramDXYQGD6DInput31.arrowTypeStart ? 10 : 0,
              "start_left",
              blockDiagramDXYQGD6DBinding194,
            );
          blockDiagramDXYQGD6DBinding440 = blockDiagramDXYQGD6DBinding524.x;
          blockDiagramDXYQGD6DBinding441 = blockDiagramDXYQGD6DBinding524.y;
        }
        blockDiagramDXYQGD6DBinding439.attr(
          "transform",
          `translate(${blockDiagramDXYQGD6DBinding440}, ${blockDiagramDXYQGD6DBinding441})`,
        );
      }
      if (blockDiagramDXYQGD6DInput31.startLabelRight) {
        let blockDiagramDXYQGD6DBinding436 =
            blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput31.id]
              .startRight,
          blockDiagramDXYQGD6DBinding437 = blockDiagramDXYQGD6DInput31.x,
          blockDiagramDXYQGD6DBinding438 = blockDiagramDXYQGD6DInput31.y;
        if (blockDiagramDXYQGD6DBinding194) {
          let blockDiagramDXYQGD6DBinding523 =
            chunk5PVQY5BWG.calcTerminalLabelPosition(
              blockDiagramDXYQGD6DInput31.arrowTypeStart ? 10 : 0,
              "start_right",
              blockDiagramDXYQGD6DBinding194,
            );
          blockDiagramDXYQGD6DBinding437 = blockDiagramDXYQGD6DBinding523.x;
          blockDiagramDXYQGD6DBinding438 = blockDiagramDXYQGD6DBinding523.y;
        }
        blockDiagramDXYQGD6DBinding436.attr(
          "transform",
          `translate(${blockDiagramDXYQGD6DBinding437}, ${blockDiagramDXYQGD6DBinding438})`,
        );
      }
      if (blockDiagramDXYQGD6DInput31.endLabelLeft) {
        let blockDiagramDXYQGD6DBinding447 =
            blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput31.id]
              .endLeft,
          blockDiagramDXYQGD6DBinding448 = blockDiagramDXYQGD6DInput31.x,
          blockDiagramDXYQGD6DBinding449 = blockDiagramDXYQGD6DInput31.y;
        if (blockDiagramDXYQGD6DBinding194) {
          let blockDiagramDXYQGD6DBinding526 =
            chunk5PVQY5BWG.calcTerminalLabelPosition(
              blockDiagramDXYQGD6DInput31.arrowTypeEnd ? 10 : 0,
              "end_left",
              blockDiagramDXYQGD6DBinding194,
            );
          blockDiagramDXYQGD6DBinding448 = blockDiagramDXYQGD6DBinding526.x;
          blockDiagramDXYQGD6DBinding449 = blockDiagramDXYQGD6DBinding526.y;
        }
        blockDiagramDXYQGD6DBinding447.attr(
          "transform",
          `translate(${blockDiagramDXYQGD6DBinding448}, ${blockDiagramDXYQGD6DBinding449})`,
        );
      }
      if (blockDiagramDXYQGD6DInput31.endLabelRight) {
        let blockDiagramDXYQGD6DBinding444 =
            blockDiagramDXYQGD6DBinding35[blockDiagramDXYQGD6DInput31.id]
              .endRight,
          blockDiagramDXYQGD6DBinding445 = blockDiagramDXYQGD6DInput31.x,
          blockDiagramDXYQGD6DBinding446 = blockDiagramDXYQGD6DInput31.y;
        if (blockDiagramDXYQGD6DBinding194) {
          let blockDiagramDXYQGD6DBinding525 =
            chunk5PVQY5BWG.calcTerminalLabelPosition(
              blockDiagramDXYQGD6DInput31.arrowTypeEnd ? 10 : 0,
              "end_right",
              blockDiagramDXYQGD6DBinding194,
            );
          blockDiagramDXYQGD6DBinding445 = blockDiagramDXYQGD6DBinding525.x;
          blockDiagramDXYQGD6DBinding446 = blockDiagramDXYQGD6DBinding525.y;
        }
        blockDiagramDXYQGD6DBinding444.attr(
          "transform",
          `translate(${blockDiagramDXYQGD6DBinding445}, ${blockDiagramDXYQGD6DBinding446})`,
        );
      }
    },
    "positionEdgeLabel",
  );
  blockDiagramDXYQGD6DBinding38 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput194, blockDiagramDXYQGD6DInput195) => {
      let blockDiagramDXYQGD6DBinding502 = blockDiagramDXYQGD6DInput194.x,
        blockDiagramDXYQGD6DBinding503 = blockDiagramDXYQGD6DInput194.y,
        blockDiagramDXYQGD6DBinding504 = Math.abs(
          blockDiagramDXYQGD6DInput195.x - blockDiagramDXYQGD6DBinding502,
        ),
        blockDiagramDXYQGD6DBinding505 = Math.abs(
          blockDiagramDXYQGD6DInput195.y - blockDiagramDXYQGD6DBinding503,
        ),
        blockDiagramDXYQGD6DBinding506 = blockDiagramDXYQGD6DInput194.width / 2,
        blockDiagramDXYQGD6DBinding507 =
          blockDiagramDXYQGD6DInput194.height / 2;
      return (
        blockDiagramDXYQGD6DBinding504 >= blockDiagramDXYQGD6DBinding506 ||
        blockDiagramDXYQGD6DBinding505 >= blockDiagramDXYQGD6DBinding507
      );
    },
    "outsideNode",
  );
  blockDiagramDXYQGD6DBinding39 = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DInput56,
      blockDiagramDXYQGD6DInput57,
      blockDiagramDXYQGD6DInput58,
    ) => {
      chunkAGHRB4JFI.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(blockDiagramDXYQGD6DInput57)}
  insidePoint : ${JSON.stringify(blockDiagramDXYQGD6DInput58)}
  node        : x:${blockDiagramDXYQGD6DInput56.x} y:${blockDiagramDXYQGD6DInput56.y} w:${blockDiagramDXYQGD6DInput56.width} h:${blockDiagramDXYQGD6DInput56.height}`);
      let blockDiagramDXYQGD6DBinding238 = blockDiagramDXYQGD6DInput56.x,
        blockDiagramDXYQGD6DBinding239 = blockDiagramDXYQGD6DInput56.y,
        blockDiagramDXYQGD6DBinding240 = Math.abs(
          blockDiagramDXYQGD6DBinding238 - blockDiagramDXYQGD6DInput58.x,
        ),
        blockDiagramDXYQGD6DBinding241 = blockDiagramDXYQGD6DInput56.width / 2,
        blockDiagramDXYQGD6DBinding242 =
          blockDiagramDXYQGD6DInput58.x < blockDiagramDXYQGD6DInput57.x
            ? blockDiagramDXYQGD6DBinding241 - blockDiagramDXYQGD6DBinding240
            : blockDiagramDXYQGD6DBinding241 + blockDiagramDXYQGD6DBinding240,
        blockDiagramDXYQGD6DBinding243 = blockDiagramDXYQGD6DInput56.height / 2,
        blockDiagramDXYQGD6DBinding244 = Math.abs(
          blockDiagramDXYQGD6DInput57.y - blockDiagramDXYQGD6DInput58.y,
        ),
        blockDiagramDXYQGD6DBinding245 = Math.abs(
          blockDiagramDXYQGD6DInput57.x - blockDiagramDXYQGD6DInput58.x,
        );
      if (
        Math.abs(
          blockDiagramDXYQGD6DBinding239 - blockDiagramDXYQGD6DInput57.y,
        ) *
          blockDiagramDXYQGD6DBinding241 >
        Math.abs(
          blockDiagramDXYQGD6DBinding238 - blockDiagramDXYQGD6DInput57.x,
        ) *
          blockDiagramDXYQGD6DBinding243
      ) {
        let blockDiagramDXYQGD6DBinding413 =
          blockDiagramDXYQGD6DInput58.y < blockDiagramDXYQGD6DInput57.y
            ? blockDiagramDXYQGD6DInput57.y -
              blockDiagramDXYQGD6DBinding243 -
              blockDiagramDXYQGD6DBinding239
            : blockDiagramDXYQGD6DBinding239 -
              blockDiagramDXYQGD6DBinding243 -
              blockDiagramDXYQGD6DInput57.y;
        blockDiagramDXYQGD6DBinding242 =
          (blockDiagramDXYQGD6DBinding245 * blockDiagramDXYQGD6DBinding413) /
          blockDiagramDXYQGD6DBinding244;
        let blockDiagramDXYQGD6DBinding414 = {
          x:
            blockDiagramDXYQGD6DInput58.x < blockDiagramDXYQGD6DInput57.x
              ? blockDiagramDXYQGD6DInput58.x + blockDiagramDXYQGD6DBinding242
              : blockDiagramDXYQGD6DInput58.x -
                blockDiagramDXYQGD6DBinding245 +
                blockDiagramDXYQGD6DBinding242,
          y:
            blockDiagramDXYQGD6DInput58.y < blockDiagramDXYQGD6DInput57.y
              ? blockDiagramDXYQGD6DInput58.y +
                blockDiagramDXYQGD6DBinding244 -
                blockDiagramDXYQGD6DBinding413
              : blockDiagramDXYQGD6DInput58.y -
                blockDiagramDXYQGD6DBinding244 +
                blockDiagramDXYQGD6DBinding413,
        };
        return (
          blockDiagramDXYQGD6DBinding242 === 0 &&
            ((blockDiagramDXYQGD6DBinding414.x = blockDiagramDXYQGD6DInput57.x),
            (blockDiagramDXYQGD6DBinding414.y = blockDiagramDXYQGD6DInput57.y)),
          blockDiagramDXYQGD6DBinding245 === 0 &&
            (blockDiagramDXYQGD6DBinding414.x = blockDiagramDXYQGD6DInput57.x),
          blockDiagramDXYQGD6DBinding244 === 0 &&
            (blockDiagramDXYQGD6DBinding414.y = blockDiagramDXYQGD6DInput57.y),
          chunkAGHRB4JFI.debug(
            `abc89 topp/bott calc, Q ${blockDiagramDXYQGD6DBinding244}, q ${blockDiagramDXYQGD6DBinding413}, R ${blockDiagramDXYQGD6DBinding245}, r ${blockDiagramDXYQGD6DBinding242}`,
            blockDiagramDXYQGD6DBinding414,
          ),
          blockDiagramDXYQGD6DBinding414
        );
      } else {
        blockDiagramDXYQGD6DBinding242 =
          blockDiagramDXYQGD6DInput58.x < blockDiagramDXYQGD6DInput57.x
            ? blockDiagramDXYQGD6DInput57.x -
              blockDiagramDXYQGD6DBinding241 -
              blockDiagramDXYQGD6DBinding238
            : blockDiagramDXYQGD6DBinding238 -
              blockDiagramDXYQGD6DBinding241 -
              blockDiagramDXYQGD6DInput57.x;
        let blockDiagramDXYQGD6DBinding405 =
            (blockDiagramDXYQGD6DBinding244 * blockDiagramDXYQGD6DBinding242) /
            blockDiagramDXYQGD6DBinding245,
          blockDiagramDXYQGD6DBinding406 =
            blockDiagramDXYQGD6DInput58.x < blockDiagramDXYQGD6DInput57.x
              ? blockDiagramDXYQGD6DInput58.x +
                blockDiagramDXYQGD6DBinding245 -
                blockDiagramDXYQGD6DBinding242
              : blockDiagramDXYQGD6DInput58.x -
                blockDiagramDXYQGD6DBinding245 +
                blockDiagramDXYQGD6DBinding242,
          blockDiagramDXYQGD6DBinding407 =
            blockDiagramDXYQGD6DInput58.y < blockDiagramDXYQGD6DInput57.y
              ? blockDiagramDXYQGD6DInput58.y + blockDiagramDXYQGD6DBinding405
              : blockDiagramDXYQGD6DInput58.y - blockDiagramDXYQGD6DBinding405;
        return (
          chunkAGHRB4JFI.debug(
            `sides calc abc89, Q ${blockDiagramDXYQGD6DBinding244}, q ${blockDiagramDXYQGD6DBinding405}, R ${blockDiagramDXYQGD6DBinding245}, r ${blockDiagramDXYQGD6DBinding242}`,
            {
              _x: blockDiagramDXYQGD6DBinding406,
              _y: blockDiagramDXYQGD6DBinding407,
            },
          ),
          blockDiagramDXYQGD6DBinding242 === 0 &&
            ((blockDiagramDXYQGD6DBinding406 = blockDiagramDXYQGD6DInput57.x),
            (blockDiagramDXYQGD6DBinding407 = blockDiagramDXYQGD6DInput57.y)),
          blockDiagramDXYQGD6DBinding245 === 0 &&
            (blockDiagramDXYQGD6DBinding406 = blockDiagramDXYQGD6DInput57.x),
          blockDiagramDXYQGD6DBinding244 === 0 &&
            (blockDiagramDXYQGD6DBinding407 = blockDiagramDXYQGD6DInput57.y),
          {
            x: blockDiagramDXYQGD6DBinding406,
            y: blockDiagramDXYQGD6DBinding407,
          }
        );
      }
    },
    "intersection",
  );
  blockDiagramDXYQGD6DBinding40 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput143, blockDiagramDXYQGD6DInput144) => {
      chunkAGHRB4JFI.debug(
        "abc88 cutPathAtIntersect",
        blockDiagramDXYQGD6DInput143,
        blockDiagramDXYQGD6DInput144,
      );
      let blockDiagramDXYQGD6DBinding396 = [],
        blockDiagramDXYQGD6DBinding397 = blockDiagramDXYQGD6DInput143[0],
        blockDiagramDXYQGD6DBinding398 = false;
      return (
        blockDiagramDXYQGD6DInput143.forEach((item) => {
          if (
            !blockDiagramDXYQGD6DBinding38(
              blockDiagramDXYQGD6DInput144,
              item,
            ) &&
            !blockDiagramDXYQGD6DBinding398
          ) {
            let blockDiagramDXYQGD6DBinding479 = blockDiagramDXYQGD6DBinding39(
                blockDiagramDXYQGD6DInput144,
                blockDiagramDXYQGD6DBinding397,
                item,
              ),
              blockDiagramDXYQGD6DBinding480 = false;
            blockDiagramDXYQGD6DBinding396.forEach((_item) => {
              blockDiagramDXYQGD6DBinding480 ||=
                _item.x === blockDiagramDXYQGD6DBinding479.x &&
                _item.y === blockDiagramDXYQGD6DBinding479.y;
            });
            blockDiagramDXYQGD6DBinding396.some(
              (_item) =>
                _item.x === blockDiagramDXYQGD6DBinding479.x &&
                _item.y === blockDiagramDXYQGD6DBinding479.y,
            ) ||
              blockDiagramDXYQGD6DBinding396.push(
                blockDiagramDXYQGD6DBinding479,
              );
            blockDiagramDXYQGD6DBinding398 = true;
          } else {
            blockDiagramDXYQGD6DBinding397 = item;
            blockDiagramDXYQGD6DBinding398 ||
              blockDiagramDXYQGD6DBinding396.push(item);
          }
        }),
        blockDiagramDXYQGD6DBinding396
      );
    },
    "cutPathAtIntersect",
  );
  $e = chunkAGHRB4JFN(function (
    blockDiagramDXYQGD6DInput33,
    blockDiagramDXYQGD6DInput34,
    blockDiagramDXYQGD6DInput35,
    blockDiagramDXYQGD6DInput36,
    blockDiagramDXYQGD6DInput37,
    blockDiagramDXYQGD6DInput38,
    blockDiagramDXYQGD6DInput39,
  ) {
    let blockDiagramDXYQGD6DBinding195 = blockDiagramDXYQGD6DInput35.points;
    chunkAGHRB4JFI.debug(
      "abc88 InsertEdge: edge=",
      blockDiagramDXYQGD6DInput35,
      "e=",
      blockDiagramDXYQGD6DInput34,
    );
    let blockDiagramDXYQGD6DBinding196 = false,
      blockDiagramDXYQGD6DBinding197 = blockDiagramDXYQGD6DInput38.node(
        blockDiagramDXYQGD6DInput34.v,
      );
    var blockDiagramDXYQGD6DBinding198 = blockDiagramDXYQGD6DInput38.node(
      blockDiagramDXYQGD6DInput34.w,
    );
    blockDiagramDXYQGD6DBinding198?.intersect &&
      blockDiagramDXYQGD6DBinding197?.intersect &&
      ((blockDiagramDXYQGD6DBinding195 = blockDiagramDXYQGD6DBinding195.slice(
        1,
        blockDiagramDXYQGD6DInput35.points.length - 1,
      )),
      blockDiagramDXYQGD6DBinding195.unshift(
        blockDiagramDXYQGD6DBinding197.intersect(
          blockDiagramDXYQGD6DBinding195[0],
        ),
      ),
      blockDiagramDXYQGD6DBinding195.push(
        blockDiagramDXYQGD6DBinding198.intersect(
          blockDiagramDXYQGD6DBinding195[
            blockDiagramDXYQGD6DBinding195.length - 1
          ],
        ),
      ));
    blockDiagramDXYQGD6DInput35.toCluster &&
      (chunkAGHRB4JFI.debug(
        "to cluster abc88",
        blockDiagramDXYQGD6DInput36[blockDiagramDXYQGD6DInput35.toCluster],
      ),
      (blockDiagramDXYQGD6DBinding195 = blockDiagramDXYQGD6DBinding40(
        blockDiagramDXYQGD6DInput35.points,
        blockDiagramDXYQGD6DInput36[blockDiagramDXYQGD6DInput35.toCluster].node,
      )),
      (blockDiagramDXYQGD6DBinding196 = true));
    blockDiagramDXYQGD6DInput35.fromCluster &&
      (chunkAGHRB4JFI.debug(
        "from cluster abc88",
        blockDiagramDXYQGD6DInput36[blockDiagramDXYQGD6DInput35.fromCluster],
      ),
      (blockDiagramDXYQGD6DBinding195 = blockDiagramDXYQGD6DBinding40(
        blockDiagramDXYQGD6DBinding195.reverse(),
        blockDiagramDXYQGD6DInput36[blockDiagramDXYQGD6DInput35.fromCluster]
          .node,
      ).reverse()),
      (blockDiagramDXYQGD6DBinding196 = true));
    let blockDiagramDXYQGD6DBinding199 = blockDiagramDXYQGD6DBinding195.filter(
        (item) => !Number.isNaN(item.y),
      ),
      blockDiagramDXYQGD6DBinding200 = AppInitialSit;
    blockDiagramDXYQGD6DInput35.curve &&
      (blockDiagramDXYQGD6DInput37 === "graph" ||
        blockDiagramDXYQGD6DInput37 === "flowchart") &&
      (blockDiagramDXYQGD6DBinding200 = blockDiagramDXYQGD6DInput35.curve);
    let { x: _x, y: blockDiagramDXYQGD6DBinding201 } = chunkBSJP7CBPN(
        blockDiagramDXYQGD6DInput35,
      ),
      blockDiagramDXYQGD6DBinding202 = AppInitialAit()
        .x(_x)
        .y(blockDiagramDXYQGD6DBinding201)
        .curve(blockDiagramDXYQGD6DBinding200),
      blockDiagramDXYQGD6DBinding203;
    switch (blockDiagramDXYQGD6DInput35.thickness) {
      case "normal":
        blockDiagramDXYQGD6DBinding203 = "edge-thickness-normal";
        break;
      case "thick":
        blockDiagramDXYQGD6DBinding203 = "edge-thickness-thick";
        break;
      case "invisible":
        blockDiagramDXYQGD6DBinding203 = "edge-thickness-thick";
        break;
      default:
        blockDiagramDXYQGD6DBinding203 = "";
    }
    switch (blockDiagramDXYQGD6DInput35.pattern) {
      case "solid":
        blockDiagramDXYQGD6DBinding203 += " edge-pattern-solid";
        break;
      case "dotted":
        blockDiagramDXYQGD6DBinding203 += " edge-pattern-dotted";
        break;
      case "dashed":
        blockDiagramDXYQGD6DBinding203 += " edge-pattern-dashed";
        break;
    }
    let blockDiagramDXYQGD6DBinding204 = blockDiagramDXYQGD6DInput33
        .append("path")
        .attr(
          "d",
          blockDiagramDXYQGD6DBinding202(blockDiagramDXYQGD6DBinding199),
        )
        .attr("id", blockDiagramDXYQGD6DInput35.id)
        .attr(
          "class",
          " " +
            blockDiagramDXYQGD6DBinding203 +
            (blockDiagramDXYQGD6DInput35.classes
              ? " " + blockDiagramDXYQGD6DInput35.classes
              : ""),
        )
        .attr("style", blockDiagramDXYQGD6DInput35.style),
      blockDiagramDXYQGD6DBinding205 = "";
    (chunkICPOFSXXB().flowchart.arrowMarkerAbsolute ||
      chunkICPOFSXXB().state.arrowMarkerAbsolute) &&
      (blockDiagramDXYQGD6DBinding205 = chunkICPOFSXXD(true));
    blockDiagramDXYQGD6DBinding31(
      blockDiagramDXYQGD6DBinding204,
      blockDiagramDXYQGD6DInput35,
      blockDiagramDXYQGD6DBinding205,
      blockDiagramDXYQGD6DInput39,
      blockDiagramDXYQGD6DInput37,
    );
    let blockDiagramDXYQGD6DBinding206 = {};
    return (
      blockDiagramDXYQGD6DBinding196 &&
        (blockDiagramDXYQGD6DBinding206.updatedPath =
          blockDiagramDXYQGD6DBinding195),
      (blockDiagramDXYQGD6DBinding206.originalPath =
        blockDiagramDXYQGD6DInput35.points),
      blockDiagramDXYQGD6DBinding206
    );
  }, "insertEdge");
  blockDiagramDXYQGD6DBinding41 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput168) => {
      let blockDiagramDXYQGD6DBinding443 = new Set();
      for (let blockDiagramDXYQGD6DBinding467 of blockDiagramDXYQGD6DInput168)
        switch (blockDiagramDXYQGD6DBinding467) {
          case "x":
            blockDiagramDXYQGD6DBinding443.add("right");
            blockDiagramDXYQGD6DBinding443.add("left");
            break;
          case "y":
            blockDiagramDXYQGD6DBinding443.add("up");
            blockDiagramDXYQGD6DBinding443.add("down");
            break;
          default:
            blockDiagramDXYQGD6DBinding443.add(blockDiagramDXYQGD6DBinding467);
            break;
        }
      return blockDiagramDXYQGD6DBinding443;
    },
    "expandAndDeduplicateDirections",
  );
  blockDiagramDXYQGD6DBinding42 = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DInput12,
      blockDiagramDXYQGD6DInput13,
      blockDiagramDXYQGD6DInput14,
    ) => {
      let blockDiagramDXYQGD6DBinding98 = blockDiagramDXYQGD6DBinding41(
          blockDiagramDXYQGD6DInput12,
        ),
        blockDiagramDXYQGD6DBinding99 =
          blockDiagramDXYQGD6DInput13.height +
          2 * blockDiagramDXYQGD6DInput14.padding,
        blockDiagramDXYQGD6DBinding100 = blockDiagramDXYQGD6DBinding99 / 2,
        blockDiagramDXYQGD6DBinding101 =
          blockDiagramDXYQGD6DInput13.width +
          2 * blockDiagramDXYQGD6DBinding100 +
          blockDiagramDXYQGD6DInput14.padding,
        blockDiagramDXYQGD6DBinding102 =
          blockDiagramDXYQGD6DInput14.padding / 2;
      return blockDiagramDXYQGD6DBinding98.has("right") &&
        blockDiagramDXYQGD6DBinding98.has("left") &&
        blockDiagramDXYQGD6DBinding98.has("up") &&
        blockDiagramDXYQGD6DBinding98.has("down")
        ? [
            {
              x: 0,
              y: 0,
            },
            {
              x: blockDiagramDXYQGD6DBinding100,
              y: 0,
            },
            {
              x: blockDiagramDXYQGD6DBinding101 / 2,
              y: 2 * blockDiagramDXYQGD6DBinding102,
            },
            {
              x:
                blockDiagramDXYQGD6DBinding101 - blockDiagramDXYQGD6DBinding100,
              y: 0,
            },
            {
              x: blockDiagramDXYQGD6DBinding101,
              y: 0,
            },
            {
              x: blockDiagramDXYQGD6DBinding101,
              y: -blockDiagramDXYQGD6DBinding99 / 3,
            },
            {
              x:
                blockDiagramDXYQGD6DBinding101 +
                2 * blockDiagramDXYQGD6DBinding102,
              y: -blockDiagramDXYQGD6DBinding99 / 2,
            },
            {
              x: blockDiagramDXYQGD6DBinding101,
              y: (-2 * blockDiagramDXYQGD6DBinding99) / 3,
            },
            {
              x: blockDiagramDXYQGD6DBinding101,
              y: -blockDiagramDXYQGD6DBinding99,
            },
            {
              x:
                blockDiagramDXYQGD6DBinding101 - blockDiagramDXYQGD6DBinding100,
              y: -blockDiagramDXYQGD6DBinding99,
            },
            {
              x: blockDiagramDXYQGD6DBinding101 / 2,
              y:
                -blockDiagramDXYQGD6DBinding99 -
                2 * blockDiagramDXYQGD6DBinding102,
            },
            {
              x: blockDiagramDXYQGD6DBinding100,
              y: -blockDiagramDXYQGD6DBinding99,
            },
            {
              x: 0,
              y: -blockDiagramDXYQGD6DBinding99,
            },
            {
              x: 0,
              y: (-2 * blockDiagramDXYQGD6DBinding99) / 3,
            },
            {
              x: -2 * blockDiagramDXYQGD6DBinding102,
              y: -blockDiagramDXYQGD6DBinding99 / 2,
            },
            {
              x: 0,
              y: -blockDiagramDXYQGD6DBinding99 / 3,
            },
          ]
        : blockDiagramDXYQGD6DBinding98.has("right") &&
            blockDiagramDXYQGD6DBinding98.has("left") &&
            blockDiagramDXYQGD6DBinding98.has("up")
          ? [
              {
                x: blockDiagramDXYQGD6DBinding100,
                y: 0,
              },
              {
                x:
                  blockDiagramDXYQGD6DBinding101 -
                  blockDiagramDXYQGD6DBinding100,
                y: 0,
              },
              {
                x: blockDiagramDXYQGD6DBinding101,
                y: -blockDiagramDXYQGD6DBinding99 / 2,
              },
              {
                x:
                  blockDiagramDXYQGD6DBinding101 -
                  blockDiagramDXYQGD6DBinding100,
                y: -blockDiagramDXYQGD6DBinding99,
              },
              {
                x: blockDiagramDXYQGD6DBinding100,
                y: -blockDiagramDXYQGD6DBinding99,
              },
              {
                x: 0,
                y: -blockDiagramDXYQGD6DBinding99 / 2,
              },
            ]
          : blockDiagramDXYQGD6DBinding98.has("right") &&
              blockDiagramDXYQGD6DBinding98.has("left") &&
              blockDiagramDXYQGD6DBinding98.has("down")
            ? [
                {
                  x: 0,
                  y: 0,
                },
                {
                  x: blockDiagramDXYQGD6DBinding100,
                  y: -blockDiagramDXYQGD6DBinding99,
                },
                {
                  x:
                    blockDiagramDXYQGD6DBinding101 -
                    blockDiagramDXYQGD6DBinding100,
                  y: -blockDiagramDXYQGD6DBinding99,
                },
                {
                  x: blockDiagramDXYQGD6DBinding101,
                  y: 0,
                },
              ]
            : blockDiagramDXYQGD6DBinding98.has("right") &&
                blockDiagramDXYQGD6DBinding98.has("up") &&
                blockDiagramDXYQGD6DBinding98.has("down")
              ? [
                  {
                    x: 0,
                    y: 0,
                  },
                  {
                    x: blockDiagramDXYQGD6DBinding101,
                    y: -blockDiagramDXYQGD6DBinding100,
                  },
                  {
                    x: blockDiagramDXYQGD6DBinding101,
                    y:
                      -blockDiagramDXYQGD6DBinding99 +
                      blockDiagramDXYQGD6DBinding100,
                  },
                  {
                    x: 0,
                    y: -blockDiagramDXYQGD6DBinding99,
                  },
                ]
              : blockDiagramDXYQGD6DBinding98.has("left") &&
                  blockDiagramDXYQGD6DBinding98.has("up") &&
                  blockDiagramDXYQGD6DBinding98.has("down")
                ? [
                    {
                      x: blockDiagramDXYQGD6DBinding101,
                      y: 0,
                    },
                    {
                      x: 0,
                      y: -blockDiagramDXYQGD6DBinding100,
                    },
                    {
                      x: 0,
                      y:
                        -blockDiagramDXYQGD6DBinding99 +
                        blockDiagramDXYQGD6DBinding100,
                    },
                    {
                      x: blockDiagramDXYQGD6DBinding101,
                      y: -blockDiagramDXYQGD6DBinding99,
                    },
                  ]
                : blockDiagramDXYQGD6DBinding98.has("right") &&
                    blockDiagramDXYQGD6DBinding98.has("left")
                  ? [
                      {
                        x: blockDiagramDXYQGD6DBinding100,
                        y: 0,
                      },
                      {
                        x: blockDiagramDXYQGD6DBinding100,
                        y: -blockDiagramDXYQGD6DBinding102,
                      },
                      {
                        x:
                          blockDiagramDXYQGD6DBinding101 -
                          blockDiagramDXYQGD6DBinding100,
                        y: -blockDiagramDXYQGD6DBinding102,
                      },
                      {
                        x:
                          blockDiagramDXYQGD6DBinding101 -
                          blockDiagramDXYQGD6DBinding100,
                        y: 0,
                      },
                      {
                        x: blockDiagramDXYQGD6DBinding101,
                        y: -blockDiagramDXYQGD6DBinding99 / 2,
                      },
                      {
                        x:
                          blockDiagramDXYQGD6DBinding101 -
                          blockDiagramDXYQGD6DBinding100,
                        y: -blockDiagramDXYQGD6DBinding99,
                      },
                      {
                        x:
                          blockDiagramDXYQGD6DBinding101 -
                          blockDiagramDXYQGD6DBinding100,
                        y:
                          -blockDiagramDXYQGD6DBinding99 +
                          blockDiagramDXYQGD6DBinding102,
                      },
                      {
                        x: blockDiagramDXYQGD6DBinding100,
                        y:
                          -blockDiagramDXYQGD6DBinding99 +
                          blockDiagramDXYQGD6DBinding102,
                      },
                      {
                        x: blockDiagramDXYQGD6DBinding100,
                        y: -blockDiagramDXYQGD6DBinding99,
                      },
                      {
                        x: 0,
                        y: -blockDiagramDXYQGD6DBinding99 / 2,
                      },
                    ]
                  : blockDiagramDXYQGD6DBinding98.has("up") &&
                      blockDiagramDXYQGD6DBinding98.has("down")
                    ? [
                        {
                          x: blockDiagramDXYQGD6DBinding101 / 2,
                          y: 0,
                        },
                        {
                          x: 0,
                          y: -blockDiagramDXYQGD6DBinding102,
                        },
                        {
                          x: blockDiagramDXYQGD6DBinding100,
                          y: -blockDiagramDXYQGD6DBinding102,
                        },
                        {
                          x: blockDiagramDXYQGD6DBinding100,
                          y:
                            -blockDiagramDXYQGD6DBinding99 +
                            blockDiagramDXYQGD6DBinding102,
                        },
                        {
                          x: 0,
                          y:
                            -blockDiagramDXYQGD6DBinding99 +
                            blockDiagramDXYQGD6DBinding102,
                        },
                        {
                          x: blockDiagramDXYQGD6DBinding101 / 2,
                          y: -blockDiagramDXYQGD6DBinding99,
                        },
                        {
                          x: blockDiagramDXYQGD6DBinding101,
                          y:
                            -blockDiagramDXYQGD6DBinding99 +
                            blockDiagramDXYQGD6DBinding102,
                        },
                        {
                          x:
                            blockDiagramDXYQGD6DBinding101 -
                            blockDiagramDXYQGD6DBinding100,
                          y:
                            -blockDiagramDXYQGD6DBinding99 +
                            blockDiagramDXYQGD6DBinding102,
                        },
                        {
                          x:
                            blockDiagramDXYQGD6DBinding101 -
                            blockDiagramDXYQGD6DBinding100,
                          y: -blockDiagramDXYQGD6DBinding102,
                        },
                        {
                          x: blockDiagramDXYQGD6DBinding101,
                          y: -blockDiagramDXYQGD6DBinding102,
                        },
                      ]
                    : blockDiagramDXYQGD6DBinding98.has("right") &&
                        blockDiagramDXYQGD6DBinding98.has("up")
                      ? [
                          {
                            x: 0,
                            y: 0,
                          },
                          {
                            x: blockDiagramDXYQGD6DBinding101,
                            y: -blockDiagramDXYQGD6DBinding100,
                          },
                          {
                            x: 0,
                            y: -blockDiagramDXYQGD6DBinding99,
                          },
                        ]
                      : blockDiagramDXYQGD6DBinding98.has("right") &&
                          blockDiagramDXYQGD6DBinding98.has("down")
                        ? [
                            {
                              x: 0,
                              y: 0,
                            },
                            {
                              x: blockDiagramDXYQGD6DBinding101,
                              y: 0,
                            },
                            {
                              x: 0,
                              y: -blockDiagramDXYQGD6DBinding99,
                            },
                          ]
                        : blockDiagramDXYQGD6DBinding98.has("left") &&
                            blockDiagramDXYQGD6DBinding98.has("up")
                          ? [
                              {
                                x: blockDiagramDXYQGD6DBinding101,
                                y: 0,
                              },
                              {
                                x: 0,
                                y: -blockDiagramDXYQGD6DBinding100,
                              },
                              {
                                x: blockDiagramDXYQGD6DBinding101,
                                y: -blockDiagramDXYQGD6DBinding99,
                              },
                            ]
                          : blockDiagramDXYQGD6DBinding98.has("left") &&
                              blockDiagramDXYQGD6DBinding98.has("down")
                            ? [
                                {
                                  x: blockDiagramDXYQGD6DBinding101,
                                  y: 0,
                                },
                                {
                                  x: 0,
                                  y: 0,
                                },
                                {
                                  x: blockDiagramDXYQGD6DBinding101,
                                  y: -blockDiagramDXYQGD6DBinding99,
                                },
                              ]
                            : blockDiagramDXYQGD6DBinding98.has("right")
                              ? [
                                  {
                                    x: blockDiagramDXYQGD6DBinding100,
                                    y: -blockDiagramDXYQGD6DBinding102,
                                  },
                                  {
                                    x: blockDiagramDXYQGD6DBinding100,
                                    y: -blockDiagramDXYQGD6DBinding102,
                                  },
                                  {
                                    x:
                                      blockDiagramDXYQGD6DBinding101 -
                                      blockDiagramDXYQGD6DBinding100,
                                    y: -blockDiagramDXYQGD6DBinding102,
                                  },
                                  {
                                    x:
                                      blockDiagramDXYQGD6DBinding101 -
                                      blockDiagramDXYQGD6DBinding100,
                                    y: 0,
                                  },
                                  {
                                    x: blockDiagramDXYQGD6DBinding101,
                                    y: -blockDiagramDXYQGD6DBinding99 / 2,
                                  },
                                  {
                                    x:
                                      blockDiagramDXYQGD6DBinding101 -
                                      blockDiagramDXYQGD6DBinding100,
                                    y: -blockDiagramDXYQGD6DBinding99,
                                  },
                                  {
                                    x:
                                      blockDiagramDXYQGD6DBinding101 -
                                      blockDiagramDXYQGD6DBinding100,
                                    y:
                                      -blockDiagramDXYQGD6DBinding99 +
                                      blockDiagramDXYQGD6DBinding102,
                                  },
                                  {
                                    x: blockDiagramDXYQGD6DBinding100,
                                    y:
                                      -blockDiagramDXYQGD6DBinding99 +
                                      blockDiagramDXYQGD6DBinding102,
                                  },
                                  {
                                    x: blockDiagramDXYQGD6DBinding100,
                                    y:
                                      -blockDiagramDXYQGD6DBinding99 +
                                      blockDiagramDXYQGD6DBinding102,
                                  },
                                ]
                              : blockDiagramDXYQGD6DBinding98.has("left")
                                ? [
                                    {
                                      x: blockDiagramDXYQGD6DBinding100,
                                      y: 0,
                                    },
                                    {
                                      x: blockDiagramDXYQGD6DBinding100,
                                      y: -blockDiagramDXYQGD6DBinding102,
                                    },
                                    {
                                      x:
                                        blockDiagramDXYQGD6DBinding101 -
                                        blockDiagramDXYQGD6DBinding100,
                                      y: -blockDiagramDXYQGD6DBinding102,
                                    },
                                    {
                                      x:
                                        blockDiagramDXYQGD6DBinding101 -
                                        blockDiagramDXYQGD6DBinding100,
                                      y:
                                        -blockDiagramDXYQGD6DBinding99 +
                                        blockDiagramDXYQGD6DBinding102,
                                    },
                                    {
                                      x: blockDiagramDXYQGD6DBinding100,
                                      y:
                                        -blockDiagramDXYQGD6DBinding99 +
                                        blockDiagramDXYQGD6DBinding102,
                                    },
                                    {
                                      x: blockDiagramDXYQGD6DBinding100,
                                      y: -blockDiagramDXYQGD6DBinding99,
                                    },
                                    {
                                      x: 0,
                                      y: -blockDiagramDXYQGD6DBinding99 / 2,
                                    },
                                  ]
                                : blockDiagramDXYQGD6DBinding98.has("up")
                                  ? [
                                      {
                                        x: blockDiagramDXYQGD6DBinding100,
                                        y: -blockDiagramDXYQGD6DBinding102,
                                      },
                                      {
                                        x: blockDiagramDXYQGD6DBinding100,
                                        y:
                                          -blockDiagramDXYQGD6DBinding99 +
                                          blockDiagramDXYQGD6DBinding102,
                                      },
                                      {
                                        x: 0,
                                        y:
                                          -blockDiagramDXYQGD6DBinding99 +
                                          blockDiagramDXYQGD6DBinding102,
                                      },
                                      {
                                        x: blockDiagramDXYQGD6DBinding101 / 2,
                                        y: -blockDiagramDXYQGD6DBinding99,
                                      },
                                      {
                                        x: blockDiagramDXYQGD6DBinding101,
                                        y:
                                          -blockDiagramDXYQGD6DBinding99 +
                                          blockDiagramDXYQGD6DBinding102,
                                      },
                                      {
                                        x:
                                          blockDiagramDXYQGD6DBinding101 -
                                          blockDiagramDXYQGD6DBinding100,
                                        y:
                                          -blockDiagramDXYQGD6DBinding99 +
                                          blockDiagramDXYQGD6DBinding102,
                                      },
                                      {
                                        x:
                                          blockDiagramDXYQGD6DBinding101 -
                                          blockDiagramDXYQGD6DBinding100,
                                        y: -blockDiagramDXYQGD6DBinding102,
                                      },
                                    ]
                                  : blockDiagramDXYQGD6DBinding98.has("down")
                                    ? [
                                        {
                                          x: blockDiagramDXYQGD6DBinding101 / 2,
                                          y: 0,
                                        },
                                        {
                                          x: 0,
                                          y: -blockDiagramDXYQGD6DBinding102,
                                        },
                                        {
                                          x: blockDiagramDXYQGD6DBinding100,
                                          y: -blockDiagramDXYQGD6DBinding102,
                                        },
                                        {
                                          x: blockDiagramDXYQGD6DBinding100,
                                          y:
                                            -blockDiagramDXYQGD6DBinding99 +
                                            blockDiagramDXYQGD6DBinding102,
                                        },
                                        {
                                          x:
                                            blockDiagramDXYQGD6DBinding101 -
                                            blockDiagramDXYQGD6DBinding100,
                                          y:
                                            -blockDiagramDXYQGD6DBinding99 +
                                            blockDiagramDXYQGD6DBinding102,
                                        },
                                        {
                                          x:
                                            blockDiagramDXYQGD6DBinding101 -
                                            blockDiagramDXYQGD6DBinding100,
                                          y: -blockDiagramDXYQGD6DBinding102,
                                        },
                                        {
                                          x: blockDiagramDXYQGD6DBinding101,
                                          y: -blockDiagramDXYQGD6DBinding102,
                                        },
                                      ]
                                    : [
                                        {
                                          x: 0,
                                          y: 0,
                                        },
                                      ];
    },
    "getArrowPoints",
  );
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper10, "intersectNode");
  blockDiagramDXYQGD6DBinding43 = blockDiagramDXYQGD6DHelper10;
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper11, "intersectEllipse");
  blockDiagramDXYQGD6DBinding44 = blockDiagramDXYQGD6DHelper11;
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper12, "intersectCircle");
  blockDiagramDXYQGD6DBinding45 = blockDiagramDXYQGD6DHelper12;
  chunkAGHRB4JFN(_e, "intersectLine");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper13, "sameSign");
  at = _e;
  blockDiagramDXYQGD6DBinding46 = blockDiagramDXYQGD6DHelper14;
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper14, "intersectPolygon");
  blockDiagramDXYQGD6DBinding47 = {
    node: blockDiagramDXYQGD6DBinding43,
    circle: blockDiagramDXYQGD6DBinding45,
    ellipse: blockDiagramDXYQGD6DBinding44,
    polygon: blockDiagramDXYQGD6DBinding46,
    rect: chunkAGHRB4JFN(
      (blockDiagramDXYQGD6DInput152, blockDiagramDXYQGD6DInput153) => {
        var blockDiagramDXYQGD6DBinding415 = blockDiagramDXYQGD6DInput152.x,
          blockDiagramDXYQGD6DBinding416 = blockDiagramDXYQGD6DInput152.y,
          blockDiagramDXYQGD6DBinding417 =
            blockDiagramDXYQGD6DInput153.x - blockDiagramDXYQGD6DBinding415,
          blockDiagramDXYQGD6DBinding418 =
            blockDiagramDXYQGD6DInput153.y - blockDiagramDXYQGD6DBinding416,
          blockDiagramDXYQGD6DBinding419 =
            blockDiagramDXYQGD6DInput152.width / 2,
          blockDiagramDXYQGD6DBinding420 =
            blockDiagramDXYQGD6DInput152.height / 2,
          blockDiagramDXYQGD6DBinding421,
          blockDiagramDXYQGD6DBinding422;
        return (
          Math.abs(blockDiagramDXYQGD6DBinding418) *
            blockDiagramDXYQGD6DBinding419 >
          Math.abs(blockDiagramDXYQGD6DBinding417) *
            blockDiagramDXYQGD6DBinding420
            ? (blockDiagramDXYQGD6DBinding418 < 0 &&
                (blockDiagramDXYQGD6DBinding420 =
                  -blockDiagramDXYQGD6DBinding420),
              (blockDiagramDXYQGD6DBinding421 =
                blockDiagramDXYQGD6DBinding418 === 0
                  ? 0
                  : (blockDiagramDXYQGD6DBinding420 *
                      blockDiagramDXYQGD6DBinding417) /
                    blockDiagramDXYQGD6DBinding418),
              (blockDiagramDXYQGD6DBinding422 = blockDiagramDXYQGD6DBinding420))
            : (blockDiagramDXYQGD6DBinding417 < 0 &&
                (blockDiagramDXYQGD6DBinding419 =
                  -blockDiagramDXYQGD6DBinding419),
              (blockDiagramDXYQGD6DBinding421 = blockDiagramDXYQGD6DBinding419),
              (blockDiagramDXYQGD6DBinding422 =
                blockDiagramDXYQGD6DBinding417 === 0
                  ? 0
                  : (blockDiagramDXYQGD6DBinding419 *
                      blockDiagramDXYQGD6DBinding418) /
                    blockDiagramDXYQGD6DBinding417)),
          {
            x: blockDiagramDXYQGD6DBinding415 + blockDiagramDXYQGD6DBinding421,
            y: blockDiagramDXYQGD6DBinding416 + blockDiagramDXYQGD6DBinding422,
          }
        );
      },
      "intersectRect",
    ),
  };
  blockDiagramDXYQGD6DBinding48 = chunkAGHRB4JFN(
    async (
      blockDiagramDXYQGD6DInput50,
      blockDiagramDXYQGD6DInput51,
      blockDiagramDXYQGD6DInput52,
      blockDiagramDXYQGD6DInput53,
    ) => {
      let blockDiagramDXYQGD6DBinding220 = chunkICPOFSXXB(),
        blockDiagramDXYQGD6DBinding221,
        blockDiagramDXYQGD6DBinding222 =
          blockDiagramDXYQGD6DInput51.useHtmlLabels ||
          chunkICPOFSXXW(blockDiagramDXYQGD6DBinding220);
      blockDiagramDXYQGD6DBinding221 =
        blockDiagramDXYQGD6DInput52 || "node default";
      let blockDiagramDXYQGD6DBinding223 = blockDiagramDXYQGD6DInput50
          .insert("g")
          .attr("class", blockDiagramDXYQGD6DBinding221)
          .attr(
            "id",
            blockDiagramDXYQGD6DInput51.domId || blockDiagramDXYQGD6DInput51.id,
          ),
        blockDiagramDXYQGD6DBinding224 = blockDiagramDXYQGD6DBinding223
          .insert("g")
          .attr("class", "label")
          .attr("style", blockDiagramDXYQGD6DInput51.labelStyle),
        blockDiagramDXYQGD6DBinding225;
      blockDiagramDXYQGD6DBinding225 =
        blockDiagramDXYQGD6DInput51.labelText === undefined
          ? ""
          : typeof blockDiagramDXYQGD6DInput51.labelText == "string"
            ? blockDiagramDXYQGD6DInput51.labelText
            : blockDiagramDXYQGD6DInput51.labelText[0];
      let blockDiagramDXYQGD6DBinding226;
      blockDiagramDXYQGD6DBinding226 =
        blockDiagramDXYQGD6DInput51.labelType === "markdown"
          ? chunkU2HBQHQKN(
              blockDiagramDXYQGD6DBinding224,
              chunkICPOFSXXR(
                chunk5PVQY5BWI(blockDiagramDXYQGD6DBinding225),
                blockDiagramDXYQGD6DBinding220,
              ),
              {
                useHtmlLabels: blockDiagramDXYQGD6DBinding222,
                width:
                  blockDiagramDXYQGD6DInput51.width ||
                  blockDiagramDXYQGD6DBinding220.flowchart.wrappingWidth,
                classes: "markdown-node-label",
              },
              blockDiagramDXYQGD6DBinding220,
            )
          : await blockDiagramDXYQGD6DBinding30(
              blockDiagramDXYQGD6DBinding224,
              chunkICPOFSXXR(
                chunk5PVQY5BWI(blockDiagramDXYQGD6DBinding225),
                blockDiagramDXYQGD6DBinding220,
              ),
              blockDiagramDXYQGD6DInput51.labelStyle,
              false,
              blockDiagramDXYQGD6DInput53,
            );
      let blockDiagramDXYQGD6DBinding227 =
          blockDiagramDXYQGD6DBinding226.getBBox(),
        blockDiagramDXYQGD6DBinding228 =
          blockDiagramDXYQGD6DInput51.padding / 2;
      if (chunkICPOFSXXW(blockDiagramDXYQGD6DBinding220)) {
        let blockDiagramDXYQGD6DBinding496 =
            blockDiagramDXYQGD6DBinding226.children[0],
          blockDiagramDXYQGD6DBinding497 = srcR(blockDiagramDXYQGD6DBinding226);
        await chunkZZ45TVLET(
          blockDiagramDXYQGD6DBinding496,
          blockDiagramDXYQGD6DBinding225,
        );
        blockDiagramDXYQGD6DBinding227 =
          blockDiagramDXYQGD6DBinding496.getBoundingClientRect();
        blockDiagramDXYQGD6DBinding497.attr(
          "width",
          blockDiagramDXYQGD6DBinding227.width,
        );
        blockDiagramDXYQGD6DBinding497.attr(
          "height",
          blockDiagramDXYQGD6DBinding227.height,
        );
      }
      return (
        blockDiagramDXYQGD6DBinding222
          ? blockDiagramDXYQGD6DBinding224.attr(
              "transform",
              "translate(" +
                -blockDiagramDXYQGD6DBinding227.width / 2 +
                ", " +
                -blockDiagramDXYQGD6DBinding227.height / 2 +
                ")",
            )
          : blockDiagramDXYQGD6DBinding224.attr(
              "transform",
              "translate(0, " +
                -blockDiagramDXYQGD6DBinding227.height / 2 +
                ")",
            ),
        blockDiagramDXYQGD6DInput51.centerLabel &&
          blockDiagramDXYQGD6DBinding224.attr(
            "transform",
            "translate(" +
              -blockDiagramDXYQGD6DBinding227.width / 2 +
              ", " +
              -blockDiagramDXYQGD6DBinding227.height / 2 +
              ")",
          ),
        blockDiagramDXYQGD6DBinding224.insert("rect", ":first-child"),
        {
          shapeSvg: blockDiagramDXYQGD6DBinding223,
          bbox: blockDiagramDXYQGD6DBinding227,
          halfPadding: blockDiagramDXYQGD6DBinding228,
          label: blockDiagramDXYQGD6DBinding224,
        }
      );
    },
    "labelHelper",
  );
  blockDiagramDXYQGD6DBinding49 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput222, blockDiagramDXYQGD6DInput223) => {
      let blockDiagramDXYQGD6DBinding543 = blockDiagramDXYQGD6DInput223
        .node()
        .getBBox();
      blockDiagramDXYQGD6DInput222.width = blockDiagramDXYQGD6DBinding543.width;
      blockDiagramDXYQGD6DInput222.height =
        blockDiagramDXYQGD6DBinding543.height;
    },
    "updateNodeBounds",
  );
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper15, "insertPolygonShape");
  blockDiagramDXYQGD6DBinding50 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput110, blockDiagramDXYQGD6DInput111) => {
      blockDiagramDXYQGD6DInput111.useHtmlLabels ||
        chunkICPOFSXXW(chunkICPOFSXXB()) ||
        (blockDiagramDXYQGD6DInput111.centerLabel = true);
      let { shapeSvg, bbox, halfPadding } = await blockDiagramDXYQGD6DBinding48(
        blockDiagramDXYQGD6DInput110,
        blockDiagramDXYQGD6DInput111,
        "node " + blockDiagramDXYQGD6DInput111.classes,
        true,
      );
      chunkAGHRB4JFI.info("Classes = ", blockDiagramDXYQGD6DInput111.classes);
      let blockDiagramDXYQGD6DBinding323 = shapeSvg.insert(
        "rect",
        ":first-child",
      );
      return (
        blockDiagramDXYQGD6DBinding323
          .attr("rx", blockDiagramDXYQGD6DInput111.rx)
          .attr("ry", blockDiagramDXYQGD6DInput111.ry)
          .attr("x", -bbox.width / 2 - halfPadding)
          .attr("y", -bbox.height / 2 - halfPadding)
          .attr("width", bbox.width + blockDiagramDXYQGD6DInput111.padding)
          .attr("height", bbox.height + blockDiagramDXYQGD6DInput111.padding),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput111,
          blockDiagramDXYQGD6DBinding323,
        ),
        (blockDiagramDXYQGD6DInput111.intersect = function (
          blockDiagramDXYQGD6DInput254,
        ) {
          return blockDiagramDXYQGD6DBinding47.rect(
            blockDiagramDXYQGD6DInput111,
            blockDiagramDXYQGD6DInput254,
          );
        }),
        shapeSvg
      );
    },
    "note",
  );
  blockDiagramDXYQGD6DBinding51 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput280) =>
      blockDiagramDXYQGD6DInput280 ? " " + blockDiagramDXYQGD6DInput280 : "",
    "formatClass",
  );
  blockDiagramDXYQGD6DBinding52 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput237, blockDiagramDXYQGD6DInput238) =>
      `${blockDiagramDXYQGD6DInput238 || "node default"}${blockDiagramDXYQGD6DBinding51(blockDiagramDXYQGD6DInput237.classes)} ${blockDiagramDXYQGD6DBinding51(blockDiagramDXYQGD6DInput237.class)}`,
    "getClassesFromNode",
  );
  blockDiagramDXYQGD6DBinding53 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput128, blockDiagramDXYQGD6DInput129) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput128,
          blockDiagramDXYQGD6DInput129,
          blockDiagramDXYQGD6DBinding52(
            blockDiagramDXYQGD6DInput129,
            undefined,
          ),
          true,
        ),
        blockDiagramDXYQGD6DBinding366 =
          bbox.width +
          blockDiagramDXYQGD6DInput129.padding +
          (bbox.height + blockDiagramDXYQGD6DInput129.padding),
        blockDiagramDXYQGD6DBinding367 = [
          {
            x: blockDiagramDXYQGD6DBinding366 / 2,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DBinding366,
            y: -blockDiagramDXYQGD6DBinding366 / 2,
          },
          {
            x: blockDiagramDXYQGD6DBinding366 / 2,
            y: -blockDiagramDXYQGD6DBinding366,
          },
          {
            x: 0,
            y: -blockDiagramDXYQGD6DBinding366 / 2,
          },
        ];
      chunkAGHRB4JFI.info("Question main (Circle)");
      let blockDiagramDXYQGD6DBinding368 = blockDiagramDXYQGD6DHelper15(
        shapeSvg,
        blockDiagramDXYQGD6DBinding366,
        blockDiagramDXYQGD6DBinding366,
        blockDiagramDXYQGD6DBinding367,
      );
      return (
        blockDiagramDXYQGD6DBinding368.attr(
          "style",
          blockDiagramDXYQGD6DInput129.style,
        ),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput129,
          blockDiagramDXYQGD6DBinding368,
        ),
        (blockDiagramDXYQGD6DInput129.intersect = function (
          blockDiagramDXYQGD6DInput227,
        ) {
          return (
            chunkAGHRB4JFI.warn("Intersect called"),
            blockDiagramDXYQGD6DBinding47.polygon(
              blockDiagramDXYQGD6DInput129,
              blockDiagramDXYQGD6DBinding367,
              blockDiagramDXYQGD6DInput227,
            )
          );
        }),
        shapeSvg
      );
    },
    "question",
  );
  blockDiagramDXYQGD6DBinding54 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput97, blockDiagramDXYQGD6DInput98) => {
      let blockDiagramDXYQGD6DBinding296 = blockDiagramDXYQGD6DInput97
        .insert("g")
        .attr("class", "node default")
        .attr(
          "id",
          blockDiagramDXYQGD6DInput98.domId || blockDiagramDXYQGD6DInput98.id,
        );
      return (
        blockDiagramDXYQGD6DBinding296
          .insert("polygon", ":first-child")
          .attr(
            "points",
            [
              {
                x: 0,
                y: 14,
              },
              {
                x: 14,
                y: 0,
              },
              {
                x: 0,
                y: -14,
              },
              {
                x: -14,
                y: 0,
              },
            ]
              .map(function (item) {
                return item.x + "," + item.y;
              })
              .join(" "),
          )
          .attr("class", "state-start")
          .attr("r", 7)
          .attr("width", 28)
          .attr("height", 28),
        (blockDiagramDXYQGD6DInput98.width = 28),
        (blockDiagramDXYQGD6DInput98.height = 28),
        (blockDiagramDXYQGD6DInput98.intersect = function (
          blockDiagramDXYQGD6DInput242,
        ) {
          return blockDiagramDXYQGD6DBinding47.circle(
            blockDiagramDXYQGD6DInput98,
            14,
            blockDiagramDXYQGD6DInput242,
          );
        }),
        blockDiagramDXYQGD6DBinding296
      );
    },
    "choice",
  );
  blockDiagramDXYQGD6DBinding55 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput126, blockDiagramDXYQGD6DInput127) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput126,
          blockDiagramDXYQGD6DInput127,
          blockDiagramDXYQGD6DBinding52(
            blockDiagramDXYQGD6DInput127,
            undefined,
          ),
          true,
        ),
        blockDiagramDXYQGD6DBinding353 =
          bbox.height + blockDiagramDXYQGD6DInput127.padding,
        blockDiagramDXYQGD6DBinding354 = blockDiagramDXYQGD6DBinding353 / 4,
        blockDiagramDXYQGD6DBinding355 =
          bbox.width +
          2 * blockDiagramDXYQGD6DBinding354 +
          blockDiagramDXYQGD6DInput127.padding,
        blockDiagramDXYQGD6DBinding356 = [
          {
            x: blockDiagramDXYQGD6DBinding354,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DBinding355 - blockDiagramDXYQGD6DBinding354,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DBinding355,
            y: -blockDiagramDXYQGD6DBinding353 / 2,
          },
          {
            x: blockDiagramDXYQGD6DBinding355 - blockDiagramDXYQGD6DBinding354,
            y: -blockDiagramDXYQGD6DBinding353,
          },
          {
            x: blockDiagramDXYQGD6DBinding354,
            y: -blockDiagramDXYQGD6DBinding353,
          },
          {
            x: 0,
            y: -blockDiagramDXYQGD6DBinding353 / 2,
          },
        ],
        blockDiagramDXYQGD6DBinding357 = blockDiagramDXYQGD6DHelper15(
          shapeSvg,
          blockDiagramDXYQGD6DBinding355,
          blockDiagramDXYQGD6DBinding353,
          blockDiagramDXYQGD6DBinding356,
        );
      return (
        blockDiagramDXYQGD6DBinding357.attr(
          "style",
          blockDiagramDXYQGD6DInput127.style,
        ),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput127,
          blockDiagramDXYQGD6DBinding357,
        ),
        (blockDiagramDXYQGD6DInput127.intersect = function (
          blockDiagramDXYQGD6DInput243,
        ) {
          return blockDiagramDXYQGD6DBinding47.polygon(
            blockDiagramDXYQGD6DInput127,
            blockDiagramDXYQGD6DBinding356,
            blockDiagramDXYQGD6DInput243,
          );
        }),
        shapeSvg
      );
    },
    "hexagon",
  );
  blockDiagramDXYQGD6DBinding56 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput154, blockDiagramDXYQGD6DInput155) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput154,
          blockDiagramDXYQGD6DInput155,
          undefined,
          true,
        ),
        blockDiagramDXYQGD6DBinding427 =
          bbox.height + 2 * blockDiagramDXYQGD6DInput155.padding,
        blockDiagramDXYQGD6DBinding428 = blockDiagramDXYQGD6DBinding427 / 2,
        blockDiagramDXYQGD6DBinding429 =
          bbox.width +
          2 * blockDiagramDXYQGD6DBinding428 +
          blockDiagramDXYQGD6DInput155.padding,
        blockDiagramDXYQGD6DBinding430 = blockDiagramDXYQGD6DBinding42(
          blockDiagramDXYQGD6DInput155.directions,
          bbox,
          blockDiagramDXYQGD6DInput155,
        ),
        blockDiagramDXYQGD6DBinding431 = blockDiagramDXYQGD6DHelper15(
          shapeSvg,
          blockDiagramDXYQGD6DBinding429,
          blockDiagramDXYQGD6DBinding427,
          blockDiagramDXYQGD6DBinding430,
        );
      return (
        blockDiagramDXYQGD6DBinding431.attr(
          "style",
          blockDiagramDXYQGD6DInput155.style,
        ),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput155,
          blockDiagramDXYQGD6DBinding431,
        ),
        (blockDiagramDXYQGD6DInput155.intersect = function (
          blockDiagramDXYQGD6DInput244,
        ) {
          return blockDiagramDXYQGD6DBinding47.polygon(
            blockDiagramDXYQGD6DInput155,
            blockDiagramDXYQGD6DBinding430,
            blockDiagramDXYQGD6DInput244,
          );
        }),
        shapeSvg
      );
    },
    "block_arrow",
  );
  blockDiagramDXYQGD6DBinding57 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput131, blockDiagramDXYQGD6DInput132) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput131,
          blockDiagramDXYQGD6DInput132,
          blockDiagramDXYQGD6DBinding52(
            blockDiagramDXYQGD6DInput132,
            undefined,
          ),
          true,
        ),
        blockDiagramDXYQGD6DBinding371 =
          bbox.width + blockDiagramDXYQGD6DInput132.padding,
        blockDiagramDXYQGD6DBinding372 =
          bbox.height + blockDiagramDXYQGD6DInput132.padding,
        blockDiagramDXYQGD6DBinding373 = [
          {
            x: -blockDiagramDXYQGD6DBinding372 / 2,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DBinding371,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DBinding371,
            y: -blockDiagramDXYQGD6DBinding372,
          },
          {
            x: -blockDiagramDXYQGD6DBinding372 / 2,
            y: -blockDiagramDXYQGD6DBinding372,
          },
          {
            x: 0,
            y: -blockDiagramDXYQGD6DBinding372 / 2,
          },
        ];
      return (
        blockDiagramDXYQGD6DHelper15(
          shapeSvg,
          blockDiagramDXYQGD6DBinding371,
          blockDiagramDXYQGD6DBinding372,
          blockDiagramDXYQGD6DBinding373,
        ).attr("style", blockDiagramDXYQGD6DInput132.style),
        (blockDiagramDXYQGD6DInput132.width =
          blockDiagramDXYQGD6DBinding371 + blockDiagramDXYQGD6DBinding372),
        (blockDiagramDXYQGD6DInput132.height = blockDiagramDXYQGD6DBinding372),
        (blockDiagramDXYQGD6DInput132.intersect = function (
          blockDiagramDXYQGD6DInput245,
        ) {
          return blockDiagramDXYQGD6DBinding47.polygon(
            blockDiagramDXYQGD6DInput132,
            blockDiagramDXYQGD6DBinding373,
            blockDiagramDXYQGD6DInput245,
          );
        }),
        shapeSvg
      );
    },
    "rect_left_inv_arrow",
  );
  blockDiagramDXYQGD6DBinding58 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput141, blockDiagramDXYQGD6DInput142) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput141,
          blockDiagramDXYQGD6DInput142,
          blockDiagramDXYQGD6DBinding52(blockDiagramDXYQGD6DInput142),
          true,
        ),
        blockDiagramDXYQGD6DBinding392 =
          bbox.width + blockDiagramDXYQGD6DInput142.padding,
        blockDiagramDXYQGD6DBinding393 =
          bbox.height + blockDiagramDXYQGD6DInput142.padding,
        blockDiagramDXYQGD6DBinding394 = [
          {
            x: (-2 * blockDiagramDXYQGD6DBinding393) / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DBinding392 -
              blockDiagramDXYQGD6DBinding393 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DBinding392 +
              (2 * blockDiagramDXYQGD6DBinding393) / 6,
            y: -blockDiagramDXYQGD6DBinding393,
          },
          {
            x: blockDiagramDXYQGD6DBinding393 / 6,
            y: -blockDiagramDXYQGD6DBinding393,
          },
        ],
        blockDiagramDXYQGD6DBinding395 = blockDiagramDXYQGD6DHelper15(
          shapeSvg,
          blockDiagramDXYQGD6DBinding392,
          blockDiagramDXYQGD6DBinding393,
          blockDiagramDXYQGD6DBinding394,
        );
      return (
        blockDiagramDXYQGD6DBinding395.attr(
          "style",
          blockDiagramDXYQGD6DInput142.style,
        ),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput142,
          blockDiagramDXYQGD6DBinding395,
        ),
        (blockDiagramDXYQGD6DInput142.intersect = function (
          blockDiagramDXYQGD6DInput246,
        ) {
          return blockDiagramDXYQGD6DBinding47.polygon(
            blockDiagramDXYQGD6DInput142,
            blockDiagramDXYQGD6DBinding394,
            blockDiagramDXYQGD6DInput246,
          );
        }),
        shapeSvg
      );
    },
    "lean_right",
  );
  blockDiagramDXYQGD6DBinding59 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput135, blockDiagramDXYQGD6DInput136) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput135,
          blockDiagramDXYQGD6DInput136,
          blockDiagramDXYQGD6DBinding52(
            blockDiagramDXYQGD6DInput136,
            undefined,
          ),
          true,
        ),
        blockDiagramDXYQGD6DBinding379 =
          bbox.width + blockDiagramDXYQGD6DInput136.padding,
        blockDiagramDXYQGD6DBinding380 =
          bbox.height + blockDiagramDXYQGD6DInput136.padding,
        blockDiagramDXYQGD6DBinding381 = [
          {
            x: (2 * blockDiagramDXYQGD6DBinding380) / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DBinding379 +
              blockDiagramDXYQGD6DBinding380 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DBinding379 -
              (2 * blockDiagramDXYQGD6DBinding380) / 6,
            y: -blockDiagramDXYQGD6DBinding380,
          },
          {
            x: -blockDiagramDXYQGD6DBinding380 / 6,
            y: -blockDiagramDXYQGD6DBinding380,
          },
        ],
        blockDiagramDXYQGD6DBinding382 = blockDiagramDXYQGD6DHelper15(
          shapeSvg,
          blockDiagramDXYQGD6DBinding379,
          blockDiagramDXYQGD6DBinding380,
          blockDiagramDXYQGD6DBinding381,
        );
      return (
        blockDiagramDXYQGD6DBinding382.attr(
          "style",
          blockDiagramDXYQGD6DInput136.style,
        ),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput136,
          blockDiagramDXYQGD6DBinding382,
        ),
        (blockDiagramDXYQGD6DInput136.intersect = function (
          blockDiagramDXYQGD6DInput247,
        ) {
          return blockDiagramDXYQGD6DBinding47.polygon(
            blockDiagramDXYQGD6DInput136,
            blockDiagramDXYQGD6DBinding381,
            blockDiagramDXYQGD6DInput247,
          );
        }),
        shapeSvg
      );
    },
    "lean_left",
  );
  blockDiagramDXYQGD6DBinding60 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput137, blockDiagramDXYQGD6DInput138) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput137,
          blockDiagramDXYQGD6DInput138,
          blockDiagramDXYQGD6DBinding52(
            blockDiagramDXYQGD6DInput138,
            undefined,
          ),
          true,
        ),
        blockDiagramDXYQGD6DBinding383 =
          bbox.width + blockDiagramDXYQGD6DInput138.padding,
        blockDiagramDXYQGD6DBinding384 =
          bbox.height + blockDiagramDXYQGD6DInput138.padding,
        blockDiagramDXYQGD6DBinding385 = [
          {
            x: (-2 * blockDiagramDXYQGD6DBinding384) / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DBinding383 +
              (2 * blockDiagramDXYQGD6DBinding384) / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DBinding383 -
              blockDiagramDXYQGD6DBinding384 / 6,
            y: -blockDiagramDXYQGD6DBinding384,
          },
          {
            x: blockDiagramDXYQGD6DBinding384 / 6,
            y: -blockDiagramDXYQGD6DBinding384,
          },
        ],
        blockDiagramDXYQGD6DBinding386 = blockDiagramDXYQGD6DHelper15(
          shapeSvg,
          blockDiagramDXYQGD6DBinding383,
          blockDiagramDXYQGD6DBinding384,
          blockDiagramDXYQGD6DBinding385,
        );
      return (
        blockDiagramDXYQGD6DBinding386.attr(
          "style",
          blockDiagramDXYQGD6DInput138.style,
        ),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput138,
          blockDiagramDXYQGD6DBinding386,
        ),
        (blockDiagramDXYQGD6DInput138.intersect = function (
          blockDiagramDXYQGD6DInput248,
        ) {
          return blockDiagramDXYQGD6DBinding47.polygon(
            blockDiagramDXYQGD6DInput138,
            blockDiagramDXYQGD6DBinding385,
            blockDiagramDXYQGD6DInput248,
          );
        }),
        shapeSvg
      );
    },
    "trapezoid",
  );
  _t = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput139, blockDiagramDXYQGD6DInput140) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput139,
          blockDiagramDXYQGD6DInput140,
          blockDiagramDXYQGD6DBinding52(
            blockDiagramDXYQGD6DInput140,
            undefined,
          ),
          true,
        ),
        blockDiagramDXYQGD6DBinding387 =
          bbox.width + blockDiagramDXYQGD6DInput140.padding,
        blockDiagramDXYQGD6DBinding388 =
          bbox.height + blockDiagramDXYQGD6DInput140.padding,
        blockDiagramDXYQGD6DBinding389 = [
          {
            x: blockDiagramDXYQGD6DBinding388 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DBinding387 -
              blockDiagramDXYQGD6DBinding388 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DBinding387 +
              (2 * blockDiagramDXYQGD6DBinding388) / 6,
            y: -blockDiagramDXYQGD6DBinding388,
          },
          {
            x: (-2 * blockDiagramDXYQGD6DBinding388) / 6,
            y: -blockDiagramDXYQGD6DBinding388,
          },
        ],
        blockDiagramDXYQGD6DBinding390 = blockDiagramDXYQGD6DHelper15(
          shapeSvg,
          blockDiagramDXYQGD6DBinding387,
          blockDiagramDXYQGD6DBinding388,
          blockDiagramDXYQGD6DBinding389,
        );
      return (
        blockDiagramDXYQGD6DBinding390.attr(
          "style",
          blockDiagramDXYQGD6DInput140.style,
        ),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput140,
          blockDiagramDXYQGD6DBinding390,
        ),
        (blockDiagramDXYQGD6DInput140.intersect = function (
          blockDiagramDXYQGD6DInput249,
        ) {
          return blockDiagramDXYQGD6DBinding47.polygon(
            blockDiagramDXYQGD6DInput140,
            blockDiagramDXYQGD6DBinding389,
            blockDiagramDXYQGD6DInput249,
          );
        }),
        shapeSvg
      );
    },
    "inv_trapezoid",
  );
  blockDiagramDXYQGD6DBinding61 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput133, blockDiagramDXYQGD6DInput134) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput133,
          blockDiagramDXYQGD6DInput134,
          blockDiagramDXYQGD6DBinding52(
            blockDiagramDXYQGD6DInput134,
            undefined,
          ),
          true,
        ),
        blockDiagramDXYQGD6DBinding374 =
          bbox.width + blockDiagramDXYQGD6DInput134.padding,
        blockDiagramDXYQGD6DBinding375 =
          bbox.height + blockDiagramDXYQGD6DInput134.padding,
        blockDiagramDXYQGD6DBinding376 = [
          {
            x: 0,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DBinding374 +
              blockDiagramDXYQGD6DBinding375 / 2,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DBinding374,
            y: -blockDiagramDXYQGD6DBinding375 / 2,
          },
          {
            x:
              blockDiagramDXYQGD6DBinding374 +
              blockDiagramDXYQGD6DBinding375 / 2,
            y: -blockDiagramDXYQGD6DBinding375,
          },
          {
            x: 0,
            y: -blockDiagramDXYQGD6DBinding375,
          },
        ],
        blockDiagramDXYQGD6DBinding377 = blockDiagramDXYQGD6DHelper15(
          shapeSvg,
          blockDiagramDXYQGD6DBinding374,
          blockDiagramDXYQGD6DBinding375,
          blockDiagramDXYQGD6DBinding376,
        );
      return (
        blockDiagramDXYQGD6DBinding377.attr(
          "style",
          blockDiagramDXYQGD6DInput134.style,
        ),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput134,
          blockDiagramDXYQGD6DBinding377,
        ),
        (blockDiagramDXYQGD6DInput134.intersect = function (
          blockDiagramDXYQGD6DInput250,
        ) {
          return blockDiagramDXYQGD6DBinding47.polygon(
            blockDiagramDXYQGD6DInput134,
            blockDiagramDXYQGD6DBinding376,
            blockDiagramDXYQGD6DInput250,
          );
        }),
        shapeSvg
      );
    },
    "rect_right_inv_arrow",
  );
  blockDiagramDXYQGD6DBinding62 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput54, blockDiagramDXYQGD6DInput55) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput54,
          blockDiagramDXYQGD6DInput55,
          blockDiagramDXYQGD6DBinding52(blockDiagramDXYQGD6DInput55, undefined),
          true,
        ),
        blockDiagramDXYQGD6DBinding230 =
          bbox.width + blockDiagramDXYQGD6DInput55.padding,
        blockDiagramDXYQGD6DBinding231 = blockDiagramDXYQGD6DBinding230 / 2,
        blockDiagramDXYQGD6DBinding232 =
          blockDiagramDXYQGD6DBinding231 /
          (2.5 + blockDiagramDXYQGD6DBinding230 / 50),
        blockDiagramDXYQGD6DBinding233 =
          bbox.height +
          blockDiagramDXYQGD6DBinding232 +
          blockDiagramDXYQGD6DInput55.padding,
        blockDiagramDXYQGD6DBinding234 =
          "M 0," +
          blockDiagramDXYQGD6DBinding232 +
          " a " +
          blockDiagramDXYQGD6DBinding231 +
          "," +
          blockDiagramDXYQGD6DBinding232 +
          " 0,0,0 " +
          blockDiagramDXYQGD6DBinding230 +
          " 0 a " +
          blockDiagramDXYQGD6DBinding231 +
          "," +
          blockDiagramDXYQGD6DBinding232 +
          " 0,0,0 " +
          -blockDiagramDXYQGD6DBinding230 +
          " 0 l 0," +
          blockDiagramDXYQGD6DBinding233 +
          " a " +
          blockDiagramDXYQGD6DBinding231 +
          "," +
          blockDiagramDXYQGD6DBinding232 +
          " 0,0,0 " +
          blockDiagramDXYQGD6DBinding230 +
          " 0 l 0," +
          -blockDiagramDXYQGD6DBinding233;
      return (
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput55,
          shapeSvg
            .attr("label-offset-y", blockDiagramDXYQGD6DBinding232)
            .insert("path", ":first-child")
            .attr("style", blockDiagramDXYQGD6DInput55.style)
            .attr("d", blockDiagramDXYQGD6DBinding234)
            .attr(
              "transform",
              "translate(" +
                -blockDiagramDXYQGD6DBinding230 / 2 +
                "," +
                -(
                  blockDiagramDXYQGD6DBinding233 / 2 +
                  blockDiagramDXYQGD6DBinding232
                ) +
                ")",
            ),
        ),
        (blockDiagramDXYQGD6DInput55.intersect = function (
          blockDiagramDXYQGD6DInput145,
        ) {
          let blockDiagramDXYQGD6DBinding399 =
              blockDiagramDXYQGD6DBinding47.rect(
                blockDiagramDXYQGD6DInput55,
                blockDiagramDXYQGD6DInput145,
              ),
            blockDiagramDXYQGD6DBinding400 =
              blockDiagramDXYQGD6DBinding399.x - blockDiagramDXYQGD6DInput55.x;
          if (
            blockDiagramDXYQGD6DBinding231 != 0 &&
            (Math.abs(blockDiagramDXYQGD6DBinding400) <
              blockDiagramDXYQGD6DInput55.width / 2 ||
              (Math.abs(blockDiagramDXYQGD6DBinding400) ==
                blockDiagramDXYQGD6DInput55.width / 2 &&
                Math.abs(
                  blockDiagramDXYQGD6DBinding399.y -
                    blockDiagramDXYQGD6DInput55.y,
                ) >
                  blockDiagramDXYQGD6DInput55.height / 2 -
                    blockDiagramDXYQGD6DBinding232))
          ) {
            let blockDiagramDXYQGD6DBinding495 =
              blockDiagramDXYQGD6DBinding232 *
              blockDiagramDXYQGD6DBinding232 *
              (1 -
                (blockDiagramDXYQGD6DBinding400 *
                  blockDiagramDXYQGD6DBinding400) /
                  (blockDiagramDXYQGD6DBinding231 *
                    blockDiagramDXYQGD6DBinding231));
            blockDiagramDXYQGD6DBinding495 != 0 &&
              (blockDiagramDXYQGD6DBinding495 = Math.sqrt(
                blockDiagramDXYQGD6DBinding495,
              ));
            blockDiagramDXYQGD6DBinding495 =
              blockDiagramDXYQGD6DBinding232 - blockDiagramDXYQGD6DBinding495;
            blockDiagramDXYQGD6DInput145.y - blockDiagramDXYQGD6DInput55.y >
              0 &&
              (blockDiagramDXYQGD6DBinding495 =
                -blockDiagramDXYQGD6DBinding495);
            blockDiagramDXYQGD6DBinding399.y += blockDiagramDXYQGD6DBinding495;
          }
          return blockDiagramDXYQGD6DBinding399;
        }),
        shapeSvg
      );
    },
    "cylinder",
  );
  blockDiagramDXYQGD6DBinding63 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput75, blockDiagramDXYQGD6DInput76) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput75,
          blockDiagramDXYQGD6DInput76,
          "node " +
            blockDiagramDXYQGD6DInput76.classes +
            " " +
            blockDiagramDXYQGD6DInput76.class,
          true,
        ),
        blockDiagramDXYQGD6DBinding277 = shapeSvg.insert(
          "rect",
          ":first-child",
        ),
        blockDiagramDXYQGD6DBinding278 = blockDiagramDXYQGD6DInput76.positioned
          ? blockDiagramDXYQGD6DInput76.width
          : bbox.width + blockDiagramDXYQGD6DInput76.padding,
        blockDiagramDXYQGD6DBinding279 = blockDiagramDXYQGD6DInput76.positioned
          ? blockDiagramDXYQGD6DInput76.height
          : bbox.height + blockDiagramDXYQGD6DInput76.padding,
        blockDiagramDXYQGD6DBinding280 = blockDiagramDXYQGD6DInput76.positioned
          ? -blockDiagramDXYQGD6DBinding278 / 2
          : -bbox.width / 2 - halfPadding,
        blockDiagramDXYQGD6DBinding281 = blockDiagramDXYQGD6DInput76.positioned
          ? -blockDiagramDXYQGD6DBinding279 / 2
          : -bbox.height / 2 - halfPadding;
      if (
        (blockDiagramDXYQGD6DBinding277
          .attr("class", "basic label-container")
          .attr("style", blockDiagramDXYQGD6DInput76.style)
          .attr("rx", blockDiagramDXYQGD6DInput76.rx)
          .attr("ry", blockDiagramDXYQGD6DInput76.ry)
          .attr("x", blockDiagramDXYQGD6DBinding280)
          .attr("y", blockDiagramDXYQGD6DBinding281)
          .attr("width", blockDiagramDXYQGD6DBinding278)
          .attr("height", blockDiagramDXYQGD6DBinding279),
        blockDiagramDXYQGD6DInput76.props)
      ) {
        let blockDiagramDXYQGD6DBinding488 = new Set(
          Object.keys(blockDiagramDXYQGD6DInput76.props),
        );
        blockDiagramDXYQGD6DInput76.props.borders &&
          (blockDiagramDXYQGD6DHelper16(
            blockDiagramDXYQGD6DBinding277,
            blockDiagramDXYQGD6DInput76.props.borders,
            blockDiagramDXYQGD6DBinding278,
            blockDiagramDXYQGD6DBinding279,
          ),
          blockDiagramDXYQGD6DBinding488.delete("borders"));
        blockDiagramDXYQGD6DBinding488.forEach((item) => {
          chunkAGHRB4JFI.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput76,
          blockDiagramDXYQGD6DBinding277,
        ),
        (blockDiagramDXYQGD6DInput76.intersect = function (
          blockDiagramDXYQGD6DInput255,
        ) {
          return blockDiagramDXYQGD6DBinding47.rect(
            blockDiagramDXYQGD6DInput76,
            blockDiagramDXYQGD6DInput255,
          );
        }),
        shapeSvg
      );
    },
    "rect",
  );
  blockDiagramDXYQGD6DBinding64 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput73, blockDiagramDXYQGD6DInput74) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput73,
          blockDiagramDXYQGD6DInput74,
          "node " + blockDiagramDXYQGD6DInput74.classes,
          true,
        ),
        blockDiagramDXYQGD6DBinding272 = shapeSvg.insert(
          "rect",
          ":first-child",
        ),
        blockDiagramDXYQGD6DBinding273 = blockDiagramDXYQGD6DInput74.positioned
          ? blockDiagramDXYQGD6DInput74.width
          : bbox.width + blockDiagramDXYQGD6DInput74.padding,
        blockDiagramDXYQGD6DBinding274 = blockDiagramDXYQGD6DInput74.positioned
          ? blockDiagramDXYQGD6DInput74.height
          : bbox.height + blockDiagramDXYQGD6DInput74.padding,
        blockDiagramDXYQGD6DBinding275 = blockDiagramDXYQGD6DInput74.positioned
          ? -blockDiagramDXYQGD6DBinding273 / 2
          : -bbox.width / 2 - halfPadding,
        blockDiagramDXYQGD6DBinding276 = blockDiagramDXYQGD6DInput74.positioned
          ? -blockDiagramDXYQGD6DBinding274 / 2
          : -bbox.height / 2 - halfPadding;
      if (
        (blockDiagramDXYQGD6DBinding272
          .attr("class", "basic cluster composite label-container")
          .attr("style", blockDiagramDXYQGD6DInput74.style)
          .attr("rx", blockDiagramDXYQGD6DInput74.rx)
          .attr("ry", blockDiagramDXYQGD6DInput74.ry)
          .attr("x", blockDiagramDXYQGD6DBinding275)
          .attr("y", blockDiagramDXYQGD6DBinding276)
          .attr("width", blockDiagramDXYQGD6DBinding273)
          .attr("height", blockDiagramDXYQGD6DBinding274),
        blockDiagramDXYQGD6DInput74.props)
      ) {
        let blockDiagramDXYQGD6DBinding489 = new Set(
          Object.keys(blockDiagramDXYQGD6DInput74.props),
        );
        blockDiagramDXYQGD6DInput74.props.borders &&
          (blockDiagramDXYQGD6DHelper16(
            blockDiagramDXYQGD6DBinding272,
            blockDiagramDXYQGD6DInput74.props.borders,
            blockDiagramDXYQGD6DBinding273,
            blockDiagramDXYQGD6DBinding274,
          ),
          blockDiagramDXYQGD6DBinding489.delete("borders"));
        blockDiagramDXYQGD6DBinding489.forEach((item) => {
          chunkAGHRB4JFI.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput74,
          blockDiagramDXYQGD6DBinding272,
        ),
        (blockDiagramDXYQGD6DInput74.intersect = function (
          blockDiagramDXYQGD6DInput256,
        ) {
          return blockDiagramDXYQGD6DBinding47.rect(
            blockDiagramDXYQGD6DInput74,
            blockDiagramDXYQGD6DInput256,
          );
        }),
        shapeSvg
      );
    },
    "composite",
  );
  blockDiagramDXYQGD6DBinding65 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput114, blockDiagramDXYQGD6DInput115) => {
      let { shapeSvg } = await blockDiagramDXYQGD6DBinding48(
        blockDiagramDXYQGD6DInput114,
        blockDiagramDXYQGD6DInput115,
        "label",
        true,
      );
      chunkAGHRB4JFI.trace("Classes = ", blockDiagramDXYQGD6DInput115.class);
      let blockDiagramDXYQGD6DBinding328 = shapeSvg.insert(
        "rect",
        ":first-child",
      );
      if (
        (blockDiagramDXYQGD6DBinding328.attr("width", 0).attr("height", 0),
        shapeSvg.attr("class", "label edgeLabel"),
        blockDiagramDXYQGD6DInput115.props)
      ) {
        let blockDiagramDXYQGD6DBinding490 = new Set(
          Object.keys(blockDiagramDXYQGD6DInput115.props),
        );
        blockDiagramDXYQGD6DInput115.props.borders &&
          (blockDiagramDXYQGD6DHelper16(
            blockDiagramDXYQGD6DBinding328,
            blockDiagramDXYQGD6DInput115.props.borders,
            0,
            0,
          ),
          blockDiagramDXYQGD6DBinding490.delete("borders"));
        blockDiagramDXYQGD6DBinding490.forEach((item) => {
          chunkAGHRB4JFI.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput115,
          blockDiagramDXYQGD6DBinding328,
        ),
        (blockDiagramDXYQGD6DInput115.intersect = function (
          blockDiagramDXYQGD6DInput257,
        ) {
          return blockDiagramDXYQGD6DBinding47.rect(
            blockDiagramDXYQGD6DInput115,
            blockDiagramDXYQGD6DInput257,
          );
        }),
        shapeSvg
      );
    },
    "labelRect",
  );
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper16, "applyNodePropertyBorders");
  blockDiagramDXYQGD6DBinding66 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput29, blockDiagramDXYQGD6DInput30) => {
      let blockDiagramDXYQGD6DBinding167;
      blockDiagramDXYQGD6DBinding167 = blockDiagramDXYQGD6DInput30.classes
        ? "node " + blockDiagramDXYQGD6DInput30.classes
        : "node default";
      let blockDiagramDXYQGD6DBinding168 = blockDiagramDXYQGD6DInput29
          .insert("g")
          .attr("class", blockDiagramDXYQGD6DBinding167)
          .attr(
            "id",
            blockDiagramDXYQGD6DInput30.domId || blockDiagramDXYQGD6DInput30.id,
          ),
        blockDiagramDXYQGD6DBinding169 = blockDiagramDXYQGD6DBinding168.insert(
          "rect",
          ":first-child",
        ),
        blockDiagramDXYQGD6DBinding170 =
          blockDiagramDXYQGD6DBinding168.insert("line"),
        blockDiagramDXYQGD6DBinding171 = blockDiagramDXYQGD6DBinding168
          .insert("g")
          .attr("class", "label"),
        blockDiagramDXYQGD6DBinding172 = blockDiagramDXYQGD6DInput30.labelText
          .flat
          ? blockDiagramDXYQGD6DInput30.labelText.flat()
          : blockDiagramDXYQGD6DInput30.labelText,
        blockDiagramDXYQGD6DBinding173 = "";
      blockDiagramDXYQGD6DBinding173 =
        typeof blockDiagramDXYQGD6DBinding172 == "object"
          ? blockDiagramDXYQGD6DBinding172[0]
          : blockDiagramDXYQGD6DBinding172;
      chunkAGHRB4JFI.info(
        "Label text abc79",
        blockDiagramDXYQGD6DBinding173,
        blockDiagramDXYQGD6DBinding172,
        typeof blockDiagramDXYQGD6DBinding172 == "object",
      );
      let blockDiagramDXYQGD6DBinding174 = await blockDiagramDXYQGD6DBinding30(
          blockDiagramDXYQGD6DBinding171,
          blockDiagramDXYQGD6DBinding173,
          blockDiagramDXYQGD6DInput30.labelStyle,
          true,
          true,
        ),
        blockDiagramDXYQGD6DBinding175 = {
          width: 0,
          height: 0,
        };
      if (chunkICPOFSXXW(chunkICPOFSXXB())) {
        let blockDiagramDXYQGD6DBinding528 =
            blockDiagramDXYQGD6DBinding174.children[0],
          blockDiagramDXYQGD6DBinding529 = srcR(blockDiagramDXYQGD6DBinding174);
        blockDiagramDXYQGD6DBinding175 =
          blockDiagramDXYQGD6DBinding528.getBoundingClientRect();
        blockDiagramDXYQGD6DBinding529.attr(
          "width",
          blockDiagramDXYQGD6DBinding175.width,
        );
        blockDiagramDXYQGD6DBinding529.attr(
          "height",
          blockDiagramDXYQGD6DBinding175.height,
        );
      }
      chunkAGHRB4JFI.info("Text 2", blockDiagramDXYQGD6DBinding172);
      let blockDiagramDXYQGD6DBinding176 = blockDiagramDXYQGD6DBinding172.slice(
          1,
          blockDiagramDXYQGD6DBinding172.length,
        ),
        blockDiagramDXYQGD6DBinding177 =
          blockDiagramDXYQGD6DBinding174.getBBox(),
        blockDiagramDXYQGD6DBinding178 = await blockDiagramDXYQGD6DBinding30(
          blockDiagramDXYQGD6DBinding171,
          blockDiagramDXYQGD6DBinding176.join
            ? blockDiagramDXYQGD6DBinding176.join("<br/>")
            : blockDiagramDXYQGD6DBinding176,
          blockDiagramDXYQGD6DInput30.labelStyle,
          true,
          true,
        );
      if (chunkICPOFSXXW(chunkICPOFSXXB())) {
        let blockDiagramDXYQGD6DBinding530 =
            blockDiagramDXYQGD6DBinding178.children[0],
          blockDiagramDXYQGD6DBinding531 = srcR(blockDiagramDXYQGD6DBinding178);
        blockDiagramDXYQGD6DBinding175 =
          blockDiagramDXYQGD6DBinding530.getBoundingClientRect();
        blockDiagramDXYQGD6DBinding531.attr(
          "width",
          blockDiagramDXYQGD6DBinding175.width,
        );
        blockDiagramDXYQGD6DBinding531.attr(
          "height",
          blockDiagramDXYQGD6DBinding175.height,
        );
      }
      let blockDiagramDXYQGD6DBinding179 =
        blockDiagramDXYQGD6DInput30.padding / 2;
      return (
        srcR(blockDiagramDXYQGD6DBinding178).attr(
          "transform",
          "translate( " +
            (blockDiagramDXYQGD6DBinding175.width >
            blockDiagramDXYQGD6DBinding177.width
              ? 0
              : (blockDiagramDXYQGD6DBinding177.width -
                  blockDiagramDXYQGD6DBinding175.width) /
                2) +
            ", " +
            (blockDiagramDXYQGD6DBinding177.height +
              blockDiagramDXYQGD6DBinding179 +
              5) +
            ")",
        ),
        srcR(blockDiagramDXYQGD6DBinding174).attr(
          "transform",
          "translate( " +
            (blockDiagramDXYQGD6DBinding175.width <
            blockDiagramDXYQGD6DBinding177.width
              ? 0
              : -(
                  blockDiagramDXYQGD6DBinding177.width -
                  blockDiagramDXYQGD6DBinding175.width
                ) / 2) +
            ", 0)",
        ),
        (blockDiagramDXYQGD6DBinding175 = blockDiagramDXYQGD6DBinding171
          .node()
          .getBBox()),
        blockDiagramDXYQGD6DBinding171.attr(
          "transform",
          "translate(" +
            -blockDiagramDXYQGD6DBinding175.width / 2 +
            ", " +
            (-blockDiagramDXYQGD6DBinding175.height / 2 -
              blockDiagramDXYQGD6DBinding179 +
              3) +
            ")",
        ),
        blockDiagramDXYQGD6DBinding169
          .attr("class", "outer title-state")
          .attr(
            "x",
            -blockDiagramDXYQGD6DBinding175.width / 2 -
              blockDiagramDXYQGD6DBinding179,
          )
          .attr(
            "y",
            -blockDiagramDXYQGD6DBinding175.height / 2 -
              blockDiagramDXYQGD6DBinding179,
          )
          .attr(
            "width",
            blockDiagramDXYQGD6DBinding175.width +
              blockDiagramDXYQGD6DInput30.padding,
          )
          .attr(
            "height",
            blockDiagramDXYQGD6DBinding175.height +
              blockDiagramDXYQGD6DInput30.padding,
          ),
        blockDiagramDXYQGD6DBinding170
          .attr("class", "divider")
          .attr(
            "x1",
            -blockDiagramDXYQGD6DBinding175.width / 2 -
              blockDiagramDXYQGD6DBinding179,
          )
          .attr(
            "x2",
            blockDiagramDXYQGD6DBinding175.width / 2 +
              blockDiagramDXYQGD6DBinding179,
          )
          .attr(
            "y1",
            -blockDiagramDXYQGD6DBinding175.height / 2 -
              blockDiagramDXYQGD6DBinding179 +
              blockDiagramDXYQGD6DBinding177.height +
              blockDiagramDXYQGD6DBinding179,
          )
          .attr(
            "y2",
            -blockDiagramDXYQGD6DBinding175.height / 2 -
              blockDiagramDXYQGD6DBinding179 +
              blockDiagramDXYQGD6DBinding177.height +
              blockDiagramDXYQGD6DBinding179,
          ),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput30,
          blockDiagramDXYQGD6DBinding169,
        ),
        (blockDiagramDXYQGD6DInput30.intersect = function (
          blockDiagramDXYQGD6DInput258,
        ) {
          return blockDiagramDXYQGD6DBinding47.rect(
            blockDiagramDXYQGD6DInput30,
            blockDiagramDXYQGD6DInput258,
          );
        }),
        blockDiagramDXYQGD6DBinding168
      );
    },
    "rectWithTitle",
  );
  blockDiagramDXYQGD6DBinding67 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput124, blockDiagramDXYQGD6DInput125) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput124,
          blockDiagramDXYQGD6DInput125,
          blockDiagramDXYQGD6DBinding52(
            blockDiagramDXYQGD6DInput125,
            undefined,
          ),
          true,
        ),
        blockDiagramDXYQGD6DBinding351 =
          bbox.height + blockDiagramDXYQGD6DInput125.padding,
        blockDiagramDXYQGD6DBinding352 =
          bbox.width +
          blockDiagramDXYQGD6DBinding351 / 4 +
          blockDiagramDXYQGD6DInput125.padding;
      return (
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput125,
          shapeSvg
            .insert("rect", ":first-child")
            .attr("style", blockDiagramDXYQGD6DInput125.style)
            .attr("rx", blockDiagramDXYQGD6DBinding351 / 2)
            .attr("ry", blockDiagramDXYQGD6DBinding351 / 2)
            .attr("x", -blockDiagramDXYQGD6DBinding352 / 2)
            .attr("y", -blockDiagramDXYQGD6DBinding351 / 2)
            .attr("width", blockDiagramDXYQGD6DBinding352)
            .attr("height", blockDiagramDXYQGD6DBinding351),
        ),
        (blockDiagramDXYQGD6DInput125.intersect = function (
          blockDiagramDXYQGD6DInput259,
        ) {
          return blockDiagramDXYQGD6DBinding47.rect(
            blockDiagramDXYQGD6DInput125,
            blockDiagramDXYQGD6DInput259,
          );
        }),
        shapeSvg
      );
    },
    "stadium",
  );
  blockDiagramDXYQGD6DBinding68 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput104, blockDiagramDXYQGD6DInput105) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput104,
          blockDiagramDXYQGD6DInput105,
          blockDiagramDXYQGD6DBinding52(
            blockDiagramDXYQGD6DInput105,
            undefined,
          ),
          true,
        ),
        blockDiagramDXYQGD6DBinding319 = shapeSvg.insert(
          "circle",
          ":first-child",
        );
      return (
        blockDiagramDXYQGD6DBinding319
          .attr("style", blockDiagramDXYQGD6DInput105.style)
          .attr("rx", blockDiagramDXYQGD6DInput105.rx)
          .attr("ry", blockDiagramDXYQGD6DInput105.ry)
          .attr("r", bbox.width / 2 + halfPadding)
          .attr("width", bbox.width + blockDiagramDXYQGD6DInput105.padding)
          .attr("height", bbox.height + blockDiagramDXYQGD6DInput105.padding),
        chunkAGHRB4JFI.info("Circle main"),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput105,
          blockDiagramDXYQGD6DBinding319,
        ),
        (blockDiagramDXYQGD6DInput105.intersect = function (
          blockDiagramDXYQGD6DInput203,
        ) {
          return (
            chunkAGHRB4JFI.info(
              "Circle intersect",
              blockDiagramDXYQGD6DInput105,
              bbox.width / 2 + halfPadding,
              blockDiagramDXYQGD6DInput203,
            ),
            blockDiagramDXYQGD6DBinding47.circle(
              blockDiagramDXYQGD6DInput105,
              bbox.width / 2 + halfPadding,
              blockDiagramDXYQGD6DInput203,
            )
          );
        }),
        shapeSvg
      );
    },
    "circle",
  );
  blockDiagramDXYQGD6DBinding69 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput80, blockDiagramDXYQGD6DInput81) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput80,
          blockDiagramDXYQGD6DInput81,
          blockDiagramDXYQGD6DBinding52(blockDiagramDXYQGD6DInput81, undefined),
          true,
        ),
        blockDiagramDXYQGD6DBinding282 = shapeSvg.insert("g", ":first-child"),
        blockDiagramDXYQGD6DBinding283 =
          blockDiagramDXYQGD6DBinding282.insert("circle"),
        blockDiagramDXYQGD6DBinding284 =
          blockDiagramDXYQGD6DBinding282.insert("circle");
      return (
        blockDiagramDXYQGD6DBinding282.attr(
          "class",
          blockDiagramDXYQGD6DInput81.class,
        ),
        blockDiagramDXYQGD6DBinding283
          .attr("style", blockDiagramDXYQGD6DInput81.style)
          .attr("rx", blockDiagramDXYQGD6DInput81.rx)
          .attr("ry", blockDiagramDXYQGD6DInput81.ry)
          .attr("r", bbox.width / 2 + halfPadding + 5)
          .attr("width", bbox.width + blockDiagramDXYQGD6DInput81.padding + 10)
          .attr(
            "height",
            bbox.height + blockDiagramDXYQGD6DInput81.padding + 10,
          ),
        blockDiagramDXYQGD6DBinding284
          .attr("style", blockDiagramDXYQGD6DInput81.style)
          .attr("rx", blockDiagramDXYQGD6DInput81.rx)
          .attr("ry", blockDiagramDXYQGD6DInput81.ry)
          .attr("r", bbox.width / 2 + halfPadding)
          .attr("width", bbox.width + blockDiagramDXYQGD6DInput81.padding)
          .attr("height", bbox.height + blockDiagramDXYQGD6DInput81.padding),
        chunkAGHRB4JFI.info("DoubleCircle main"),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput81,
          blockDiagramDXYQGD6DBinding283,
        ),
        (blockDiagramDXYQGD6DInput81.intersect = function (
          blockDiagramDXYQGD6DInput199,
        ) {
          return (
            chunkAGHRB4JFI.info(
              "DoubleCircle intersect",
              blockDiagramDXYQGD6DInput81,
              bbox.width / 2 + halfPadding + 5,
              blockDiagramDXYQGD6DInput199,
            ),
            blockDiagramDXYQGD6DBinding47.circle(
              blockDiagramDXYQGD6DInput81,
              bbox.width / 2 + halfPadding + 5,
              blockDiagramDXYQGD6DInput199,
            )
          );
        }),
        shapeSvg
      );
    },
    "doublecircle",
  );
  blockDiagramDXYQGD6DBinding70 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DInput112, blockDiagramDXYQGD6DInput113) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DBinding48(
          blockDiagramDXYQGD6DInput112,
          blockDiagramDXYQGD6DInput113,
          blockDiagramDXYQGD6DBinding52(
            blockDiagramDXYQGD6DInput113,
            undefined,
          ),
          true,
        ),
        blockDiagramDXYQGD6DBinding324 =
          bbox.width + blockDiagramDXYQGD6DInput113.padding,
        blockDiagramDXYQGD6DBinding325 =
          bbox.height + blockDiagramDXYQGD6DInput113.padding,
        blockDiagramDXYQGD6DBinding326 = [
          {
            x: 0,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DBinding324,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DBinding324,
            y: -blockDiagramDXYQGD6DBinding325,
          },
          {
            x: 0,
            y: -blockDiagramDXYQGD6DBinding325,
          },
          {
            x: 0,
            y: 0,
          },
          {
            x: -8,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DBinding324 + 8,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DBinding324 + 8,
            y: -blockDiagramDXYQGD6DBinding325,
          },
          {
            x: -8,
            y: -blockDiagramDXYQGD6DBinding325,
          },
          {
            x: -8,
            y: 0,
          },
        ],
        blockDiagramDXYQGD6DBinding327 = blockDiagramDXYQGD6DHelper15(
          shapeSvg,
          blockDiagramDXYQGD6DBinding324,
          blockDiagramDXYQGD6DBinding325,
          blockDiagramDXYQGD6DBinding326,
        );
      return (
        blockDiagramDXYQGD6DBinding327.attr(
          "style",
          blockDiagramDXYQGD6DInput113.style,
        ),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput113,
          blockDiagramDXYQGD6DBinding327,
        ),
        (blockDiagramDXYQGD6DInput113.intersect = function (
          blockDiagramDXYQGD6DInput251,
        ) {
          return blockDiagramDXYQGD6DBinding47.polygon(
            blockDiagramDXYQGD6DInput113,
            blockDiagramDXYQGD6DBinding326,
            blockDiagramDXYQGD6DInput251,
          );
        }),
        shapeSvg
      );
    },
    "subroutine",
  );
  blockDiagramDXYQGD6DBinding71 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput150, blockDiagramDXYQGD6DInput151) => {
      let blockDiagramDXYQGD6DBinding411 = blockDiagramDXYQGD6DInput150
          .insert("g")
          .attr("class", "node default")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput151.domId ||
              blockDiagramDXYQGD6DInput151.id,
          ),
        blockDiagramDXYQGD6DBinding412 = blockDiagramDXYQGD6DBinding411.insert(
          "circle",
          ":first-child",
        );
      return (
        blockDiagramDXYQGD6DBinding412
          .attr("class", "state-start")
          .attr("r", 7)
          .attr("width", 14)
          .attr("height", 14),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput151,
          blockDiagramDXYQGD6DBinding412,
        ),
        (blockDiagramDXYQGD6DInput151.intersect = function (
          blockDiagramDXYQGD6DInput252,
        ) {
          return blockDiagramDXYQGD6DBinding47.circle(
            blockDiagramDXYQGD6DInput151,
            7,
            blockDiagramDXYQGD6DInput252,
          );
        }),
        blockDiagramDXYQGD6DBinding411
      );
    },
    "start",
  );
  blockDiagramDXYQGD6DBinding72 = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DInput116,
      blockDiagramDXYQGD6DInput117,
      blockDiagramDXYQGD6DInput118,
    ) => {
      let blockDiagramDXYQGD6DBinding329 = blockDiagramDXYQGD6DInput116
          .insert("g")
          .attr("class", "node default")
          .attr(
            "id",
            blockDiagramDXYQGD6DInput117.domId ||
              blockDiagramDXYQGD6DInput117.id,
          ),
        blockDiagramDXYQGD6DBinding330 = 70,
        blockDiagramDXYQGD6DBinding331 = 10;
      return (
        blockDiagramDXYQGD6DInput118 === "LR" &&
          ((blockDiagramDXYQGD6DBinding330 = 10),
          (blockDiagramDXYQGD6DBinding331 = 70)),
        blockDiagramDXYQGD6DBinding49(
          blockDiagramDXYQGD6DInput117,
          blockDiagramDXYQGD6DBinding329
            .append("rect")
            .attr("x", (-1 * blockDiagramDXYQGD6DBinding330) / 2)
            .attr("y", (-1 * blockDiagramDXYQGD6DBinding331) / 2)
            .attr("width", blockDiagramDXYQGD6DBinding330)
            .attr("height", blockDiagramDXYQGD6DBinding331)
            .attr("class", "fork-join"),
        ),
        (blockDiagramDXYQGD6DInput117.height +=
          blockDiagramDXYQGD6DInput117.padding / 2),
        (blockDiagramDXYQGD6DInput117.width +=
          blockDiagramDXYQGD6DInput117.padding / 2),
        (blockDiagramDXYQGD6DInput117.intersect = function (
          blockDiagramDXYQGD6DInput260,
        ) {
          return blockDiagramDXYQGD6DBinding47.rect(
            blockDiagramDXYQGD6DInput117,
            blockDiagramDXYQGD6DInput260,
          );
        }),
        blockDiagramDXYQGD6DBinding329
      );
    },
    "forkJoin",
  );
  blockDiagramDXYQGD6DBinding73 = {
    rhombus: blockDiagramDXYQGD6DBinding53,
    composite: blockDiagramDXYQGD6DBinding64,
    question: blockDiagramDXYQGD6DBinding53,
    rect: blockDiagramDXYQGD6DBinding63,
    labelRect: blockDiagramDXYQGD6DBinding65,
    rectWithTitle: blockDiagramDXYQGD6DBinding66,
    choice: blockDiagramDXYQGD6DBinding54,
    circle: blockDiagramDXYQGD6DBinding68,
    doublecircle: blockDiagramDXYQGD6DBinding69,
    stadium: blockDiagramDXYQGD6DBinding67,
    hexagon: blockDiagramDXYQGD6DBinding55,
    block_arrow: blockDiagramDXYQGD6DBinding56,
    rect_left_inv_arrow: blockDiagramDXYQGD6DBinding57,
    lean_right: blockDiagramDXYQGD6DBinding58,
    lean_left: blockDiagramDXYQGD6DBinding59,
    trapezoid: blockDiagramDXYQGD6DBinding60,
    inv_trapezoid: _t,
    rect_right_inv_arrow: blockDiagramDXYQGD6DBinding61,
    cylinder: blockDiagramDXYQGD6DBinding62,
    start: blockDiagramDXYQGD6DBinding71,
    end: chunkAGHRB4JFN(
      (blockDiagramDXYQGD6DInput106, blockDiagramDXYQGD6DInput107) => {
        let blockDiagramDXYQGD6DBinding320 = blockDiagramDXYQGD6DInput106
            .insert("g")
            .attr("class", "node default")
            .attr(
              "id",
              blockDiagramDXYQGD6DInput107.domId ||
                blockDiagramDXYQGD6DInput107.id,
            ),
          blockDiagramDXYQGD6DBinding321 =
            blockDiagramDXYQGD6DBinding320.insert("circle", ":first-child"),
          blockDiagramDXYQGD6DBinding322 =
            blockDiagramDXYQGD6DBinding320.insert("circle", ":first-child");
        return (
          blockDiagramDXYQGD6DBinding322
            .attr("class", "state-start")
            .attr("r", 7)
            .attr("width", 14)
            .attr("height", 14),
          blockDiagramDXYQGD6DBinding321
            .attr("class", "state-end")
            .attr("r", 5)
            .attr("width", 10)
            .attr("height", 10),
          blockDiagramDXYQGD6DBinding49(
            blockDiagramDXYQGD6DInput107,
            blockDiagramDXYQGD6DBinding322,
          ),
          (blockDiagramDXYQGD6DInput107.intersect = function (
            blockDiagramDXYQGD6DInput239,
          ) {
            return blockDiagramDXYQGD6DBinding47.circle(
              blockDiagramDXYQGD6DInput107,
              7,
              blockDiagramDXYQGD6DInput239,
            );
          }),
          blockDiagramDXYQGD6DBinding320
        );
      },
      "end",
    ),
    note: blockDiagramDXYQGD6DBinding50,
    subroutine: blockDiagramDXYQGD6DBinding70,
    fork: blockDiagramDXYQGD6DBinding72,
    join: blockDiagramDXYQGD6DBinding72,
    class_box: chunkAGHRB4JFN(
      async (blockDiagramDXYQGD6DInput16, blockDiagramDXYQGD6DInput17) => {
        let blockDiagramDXYQGD6DBinding132 =
            blockDiagramDXYQGD6DInput17.padding / 2,
          blockDiagramDXYQGD6DBinding133;
        blockDiagramDXYQGD6DBinding133 = blockDiagramDXYQGD6DInput17.classes
          ? "node " + blockDiagramDXYQGD6DInput17.classes
          : "node default";
        let blockDiagramDXYQGD6DBinding134 = blockDiagramDXYQGD6DInput16
            .insert("g")
            .attr("class", blockDiagramDXYQGD6DBinding133)
            .attr(
              "id",
              blockDiagramDXYQGD6DInput17.domId ||
                blockDiagramDXYQGD6DInput17.id,
            ),
          blockDiagramDXYQGD6DBinding135 =
            blockDiagramDXYQGD6DBinding134.insert("rect", ":first-child"),
          blockDiagramDXYQGD6DBinding136 =
            blockDiagramDXYQGD6DBinding134.insert("line"),
          blockDiagramDXYQGD6DBinding137 =
            blockDiagramDXYQGD6DBinding134.insert("line"),
          blockDiagramDXYQGD6DBinding138 = 0,
          blockDiagramDXYQGD6DBinding139 = 4,
          blockDiagramDXYQGD6DBinding140 = blockDiagramDXYQGD6DBinding134
            .insert("g")
            .attr("class", "label"),
          blockDiagramDXYQGD6DBinding141 = 0,
          blockDiagramDXYQGD6DBinding142 =
            blockDiagramDXYQGD6DInput17.classData.annotations?.[0],
          blockDiagramDXYQGD6DBinding143 = await blockDiagramDXYQGD6DBinding30(
            blockDiagramDXYQGD6DBinding140,
            blockDiagramDXYQGD6DInput17.classData.annotations[0]
              ? "«" + blockDiagramDXYQGD6DInput17.classData.annotations[0] + "»"
              : "",
            blockDiagramDXYQGD6DInput17.labelStyle,
            true,
            true,
          ),
          blockDiagramDXYQGD6DBinding144 =
            blockDiagramDXYQGD6DBinding143.getBBox();
        if (chunkICPOFSXXW(chunkICPOFSXXB())) {
          let blockDiagramDXYQGD6DBinding518 =
              blockDiagramDXYQGD6DBinding143.children[0],
            blockDiagramDXYQGD6DBinding519 = srcR(
              blockDiagramDXYQGD6DBinding143,
            );
          blockDiagramDXYQGD6DBinding144 =
            blockDiagramDXYQGD6DBinding518.getBoundingClientRect();
          blockDiagramDXYQGD6DBinding519.attr(
            "width",
            blockDiagramDXYQGD6DBinding144.width,
          );
          blockDiagramDXYQGD6DBinding519.attr(
            "height",
            blockDiagramDXYQGD6DBinding144.height,
          );
        }
        blockDiagramDXYQGD6DInput17.classData.annotations[0] &&
          ((blockDiagramDXYQGD6DBinding139 +=
            blockDiagramDXYQGD6DBinding144.height + 4),
          (blockDiagramDXYQGD6DBinding138 +=
            blockDiagramDXYQGD6DBinding144.width));
        let blockDiagramDXYQGD6DBinding145 =
          blockDiagramDXYQGD6DInput17.classData.label;
        blockDiagramDXYQGD6DInput17.classData.type !== undefined &&
          blockDiagramDXYQGD6DInput17.classData.type !== "" &&
          (chunkICPOFSXXW(chunkICPOFSXXB())
            ? (blockDiagramDXYQGD6DBinding145 +=
                "&lt;" + blockDiagramDXYQGD6DInput17.classData.type + "&gt;")
            : (blockDiagramDXYQGD6DBinding145 +=
                "<" + blockDiagramDXYQGD6DInput17.classData.type + ">"));
        let blockDiagramDXYQGD6DBinding146 =
          await blockDiagramDXYQGD6DBinding30(
            blockDiagramDXYQGD6DBinding140,
            blockDiagramDXYQGD6DBinding145,
            blockDiagramDXYQGD6DInput17.labelStyle,
            true,
            true,
          );
        srcR(blockDiagramDXYQGD6DBinding146).attr("class", "classTitle");
        let blockDiagramDXYQGD6DBinding147 =
          blockDiagramDXYQGD6DBinding146.getBBox();
        if (chunkICPOFSXXW(chunkICPOFSXXB())) {
          let blockDiagramDXYQGD6DBinding520 =
              blockDiagramDXYQGD6DBinding146.children[0],
            blockDiagramDXYQGD6DBinding521 = srcR(
              blockDiagramDXYQGD6DBinding146,
            );
          blockDiagramDXYQGD6DBinding147 =
            blockDiagramDXYQGD6DBinding520.getBoundingClientRect();
          blockDiagramDXYQGD6DBinding521.attr(
            "width",
            blockDiagramDXYQGD6DBinding147.width,
          );
          blockDiagramDXYQGD6DBinding521.attr(
            "height",
            blockDiagramDXYQGD6DBinding147.height,
          );
        }
        blockDiagramDXYQGD6DBinding139 +=
          blockDiagramDXYQGD6DBinding147.height + 4;
        blockDiagramDXYQGD6DBinding147.width > blockDiagramDXYQGD6DBinding138 &&
          (blockDiagramDXYQGD6DBinding138 =
            blockDiagramDXYQGD6DBinding147.width);
        let blockDiagramDXYQGD6DBinding148 = [];
        blockDiagramDXYQGD6DInput17.classData.members.forEach(async (item) => {
          let blockDiagramDXYQGD6DBinding358 = item.getDisplayDetails(),
            blockDiagramDXYQGD6DBinding359 =
              blockDiagramDXYQGD6DBinding358.displayText;
          chunkICPOFSXXW(chunkICPOFSXXB()) &&
            (blockDiagramDXYQGD6DBinding359 = blockDiagramDXYQGD6DBinding359
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;"));
          let blockDiagramDXYQGD6DBinding360 =
              await blockDiagramDXYQGD6DBinding30(
                blockDiagramDXYQGD6DBinding140,
                blockDiagramDXYQGD6DBinding359,
                blockDiagramDXYQGD6DBinding358.cssStyle
                  ? blockDiagramDXYQGD6DBinding358.cssStyle
                  : blockDiagramDXYQGD6DInput17.labelStyle,
                true,
                true,
              ),
            blockDiagramDXYQGD6DBinding361 =
              blockDiagramDXYQGD6DBinding360.getBBox();
          if (chunkICPOFSXXW(chunkICPOFSXXB())) {
            let blockDiagramDXYQGD6DBinding498 =
                blockDiagramDXYQGD6DBinding360.children[0],
              blockDiagramDXYQGD6DBinding499 = srcR(
                blockDiagramDXYQGD6DBinding360,
              );
            blockDiagramDXYQGD6DBinding361 =
              blockDiagramDXYQGD6DBinding498.getBoundingClientRect();
            blockDiagramDXYQGD6DBinding499.attr(
              "width",
              blockDiagramDXYQGD6DBinding361.width,
            );
            blockDiagramDXYQGD6DBinding499.attr(
              "height",
              blockDiagramDXYQGD6DBinding361.height,
            );
          }
          blockDiagramDXYQGD6DBinding361.width >
            blockDiagramDXYQGD6DBinding138 &&
            (blockDiagramDXYQGD6DBinding138 =
              blockDiagramDXYQGD6DBinding361.width);
          blockDiagramDXYQGD6DBinding139 +=
            blockDiagramDXYQGD6DBinding361.height + 4;
          blockDiagramDXYQGD6DBinding148.push(blockDiagramDXYQGD6DBinding360);
        });
        blockDiagramDXYQGD6DBinding139 += 8;
        let blockDiagramDXYQGD6DBinding149 = [];
        if (
          (blockDiagramDXYQGD6DInput17.classData.methods.forEach(
            async (item) => {
              let blockDiagramDXYQGD6DBinding315 = item.getDisplayDetails(),
                blockDiagramDXYQGD6DBinding316 =
                  blockDiagramDXYQGD6DBinding315.displayText;
              chunkICPOFSXXW(chunkICPOFSXXB()) &&
                (blockDiagramDXYQGD6DBinding316 = blockDiagramDXYQGD6DBinding316
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;"));
              let blockDiagramDXYQGD6DBinding317 =
                  await blockDiagramDXYQGD6DBinding30(
                    blockDiagramDXYQGD6DBinding140,
                    blockDiagramDXYQGD6DBinding316,
                    blockDiagramDXYQGD6DBinding315.cssStyle
                      ? blockDiagramDXYQGD6DBinding315.cssStyle
                      : blockDiagramDXYQGD6DInput17.labelStyle,
                    true,
                    true,
                  ),
                blockDiagramDXYQGD6DBinding318 =
                  blockDiagramDXYQGD6DBinding317.getBBox();
              if (chunkICPOFSXXW(chunkICPOFSXXB())) {
                let blockDiagramDXYQGD6DBinding493 =
                    blockDiagramDXYQGD6DBinding317.children[0],
                  blockDiagramDXYQGD6DBinding494 = srcR(
                    blockDiagramDXYQGD6DBinding317,
                  );
                blockDiagramDXYQGD6DBinding318 =
                  blockDiagramDXYQGD6DBinding493.getBoundingClientRect();
                blockDiagramDXYQGD6DBinding494.attr(
                  "width",
                  blockDiagramDXYQGD6DBinding318.width,
                );
                blockDiagramDXYQGD6DBinding494.attr(
                  "height",
                  blockDiagramDXYQGD6DBinding318.height,
                );
              }
              blockDiagramDXYQGD6DBinding318.width >
                blockDiagramDXYQGD6DBinding138 &&
                (blockDiagramDXYQGD6DBinding138 =
                  blockDiagramDXYQGD6DBinding318.width);
              blockDiagramDXYQGD6DBinding139 +=
                blockDiagramDXYQGD6DBinding318.height + 4;
              blockDiagramDXYQGD6DBinding149.push(
                blockDiagramDXYQGD6DBinding317,
              );
            },
          ),
          (blockDiagramDXYQGD6DBinding139 += 8),
          blockDiagramDXYQGD6DBinding142)
        ) {
          let blockDiagramDXYQGD6DBinding492 =
            (blockDiagramDXYQGD6DBinding138 -
              blockDiagramDXYQGD6DBinding144.width) /
            2;
          srcR(blockDiagramDXYQGD6DBinding143).attr(
            "transform",
            "translate( " +
              ((-1 * blockDiagramDXYQGD6DBinding138) / 2 +
                blockDiagramDXYQGD6DBinding492) +
              ", " +
              (-1 * blockDiagramDXYQGD6DBinding139) / 2 +
              ")",
          );
          blockDiagramDXYQGD6DBinding141 =
            blockDiagramDXYQGD6DBinding144.height + 4;
        }
        let blockDiagramDXYQGD6DBinding150 =
          (blockDiagramDXYQGD6DBinding138 -
            blockDiagramDXYQGD6DBinding147.width) /
          2;
        return (
          srcR(blockDiagramDXYQGD6DBinding146).attr(
            "transform",
            "translate( " +
              ((-1 * blockDiagramDXYQGD6DBinding138) / 2 +
                blockDiagramDXYQGD6DBinding150) +
              ", " +
              ((-1 * blockDiagramDXYQGD6DBinding139) / 2 +
                blockDiagramDXYQGD6DBinding141) +
              ")",
          ),
          (blockDiagramDXYQGD6DBinding141 +=
            blockDiagramDXYQGD6DBinding147.height + 4),
          blockDiagramDXYQGD6DBinding136
            .attr("class", "divider")
            .attr(
              "x1",
              -blockDiagramDXYQGD6DBinding138 / 2 -
                blockDiagramDXYQGD6DBinding132,
            )
            .attr(
              "x2",
              blockDiagramDXYQGD6DBinding138 / 2 +
                blockDiagramDXYQGD6DBinding132,
            )
            .attr(
              "y1",
              -blockDiagramDXYQGD6DBinding139 / 2 -
                blockDiagramDXYQGD6DBinding132 +
                8 +
                blockDiagramDXYQGD6DBinding141,
            )
            .attr(
              "y2",
              -blockDiagramDXYQGD6DBinding139 / 2 -
                blockDiagramDXYQGD6DBinding132 +
                8 +
                blockDiagramDXYQGD6DBinding141,
            ),
          (blockDiagramDXYQGD6DBinding141 += 8),
          blockDiagramDXYQGD6DBinding148.forEach((item) => {
            srcR(item).attr(
              "transform",
              "translate( " +
                -blockDiagramDXYQGD6DBinding138 / 2 +
                ", " +
                ((-1 * blockDiagramDXYQGD6DBinding139) / 2 +
                  blockDiagramDXYQGD6DBinding141 +
                  4) +
                ")",
            );
            let blockDiagramDXYQGD6DBinding485 = item?.getBBox();
            blockDiagramDXYQGD6DBinding141 +=
              (blockDiagramDXYQGD6DBinding485?.height ?? 0) + 4;
          }),
          (blockDiagramDXYQGD6DBinding141 += 8),
          blockDiagramDXYQGD6DBinding137
            .attr("class", "divider")
            .attr(
              "x1",
              -blockDiagramDXYQGD6DBinding138 / 2 -
                blockDiagramDXYQGD6DBinding132,
            )
            .attr(
              "x2",
              blockDiagramDXYQGD6DBinding138 / 2 +
                blockDiagramDXYQGD6DBinding132,
            )
            .attr(
              "y1",
              -blockDiagramDXYQGD6DBinding139 / 2 -
                blockDiagramDXYQGD6DBinding132 +
                8 +
                blockDiagramDXYQGD6DBinding141,
            )
            .attr(
              "y2",
              -blockDiagramDXYQGD6DBinding139 / 2 -
                blockDiagramDXYQGD6DBinding132 +
                8 +
                blockDiagramDXYQGD6DBinding141,
            ),
          (blockDiagramDXYQGD6DBinding141 += 8),
          blockDiagramDXYQGD6DBinding149.forEach((item) => {
            srcR(item).attr(
              "transform",
              "translate( " +
                -blockDiagramDXYQGD6DBinding138 / 2 +
                ", " +
                ((-1 * blockDiagramDXYQGD6DBinding139) / 2 +
                  blockDiagramDXYQGD6DBinding141) +
                ")",
            );
            let blockDiagramDXYQGD6DBinding491 = item?.getBBox();
            blockDiagramDXYQGD6DBinding141 +=
              (blockDiagramDXYQGD6DBinding491?.height ?? 0) + 4;
          }),
          blockDiagramDXYQGD6DBinding135
            .attr("style", blockDiagramDXYQGD6DInput17.style)
            .attr("class", "outer title-state")
            .attr(
              "x",
              -blockDiagramDXYQGD6DBinding138 / 2 -
                blockDiagramDXYQGD6DBinding132,
            )
            .attr(
              "y",
              -(blockDiagramDXYQGD6DBinding139 / 2) -
                blockDiagramDXYQGD6DBinding132,
            )
            .attr(
              "width",
              blockDiagramDXYQGD6DBinding138 +
                blockDiagramDXYQGD6DInput17.padding,
            )
            .attr(
              "height",
              blockDiagramDXYQGD6DBinding139 +
                blockDiagramDXYQGD6DInput17.padding,
            ),
          blockDiagramDXYQGD6DBinding49(
            blockDiagramDXYQGD6DInput17,
            blockDiagramDXYQGD6DBinding135,
          ),
          (blockDiagramDXYQGD6DInput17.intersect = function (
            blockDiagramDXYQGD6DInput253,
          ) {
            return blockDiagramDXYQGD6DBinding47.rect(
              blockDiagramDXYQGD6DInput17,
              blockDiagramDXYQGD6DInput253,
            );
          }),
          blockDiagramDXYQGD6DBinding134
        );
      },
      "class_box",
    ),
  };
  $ = {};
  blockDiagramDXYQGD6DBinding74 = chunkAGHRB4JFN(
    async (
      blockDiagramDXYQGD6DInput119,
      blockDiagramDXYQGD6DInput120,
      blockDiagramDXYQGD6DInput121,
    ) => {
      let blockDiagramDXYQGD6DBinding332, blockDiagramDXYQGD6DBinding333;
      if (blockDiagramDXYQGD6DInput120.link) {
        let blockDiagramDXYQGD6DBinding466;
        chunkICPOFSXXB().securityLevel === "sandbox"
          ? (blockDiagramDXYQGD6DBinding466 = "_top")
          : blockDiagramDXYQGD6DInput120.linkTarget &&
            (blockDiagramDXYQGD6DBinding466 =
              blockDiagramDXYQGD6DInput120.linkTarget || "_blank");
        blockDiagramDXYQGD6DBinding332 = blockDiagramDXYQGD6DInput119
          .insert("svg:a")
          .attr("xlink:href", blockDiagramDXYQGD6DInput120.link)
          .attr("target", blockDiagramDXYQGD6DBinding466);
        blockDiagramDXYQGD6DBinding333 = await blockDiagramDXYQGD6DBinding73[
          blockDiagramDXYQGD6DInput120.shape
        ](
          blockDiagramDXYQGD6DBinding332,
          blockDiagramDXYQGD6DInput120,
          blockDiagramDXYQGD6DInput121,
        );
      } else {
        blockDiagramDXYQGD6DBinding333 = await blockDiagramDXYQGD6DBinding73[
          blockDiagramDXYQGD6DInput120.shape
        ](
          blockDiagramDXYQGD6DInput119,
          blockDiagramDXYQGD6DInput120,
          blockDiagramDXYQGD6DInput121,
        );
        blockDiagramDXYQGD6DBinding332 = blockDiagramDXYQGD6DBinding333;
      }
      return (
        blockDiagramDXYQGD6DInput120.tooltip &&
          blockDiagramDXYQGD6DBinding333.attr(
            "title",
            blockDiagramDXYQGD6DInput120.tooltip,
          ),
        blockDiagramDXYQGD6DInput120.class &&
          blockDiagramDXYQGD6DBinding333.attr(
            "class",
            "node default " + blockDiagramDXYQGD6DInput120.class,
          ),
        ($[blockDiagramDXYQGD6DInput120.id] = blockDiagramDXYQGD6DBinding332),
        blockDiagramDXYQGD6DInput120.haveCallback &&
          $[blockDiagramDXYQGD6DInput120.id].attr(
            "class",
            $[blockDiagramDXYQGD6DInput120.id].attr("class") + " clickable",
          ),
        blockDiagramDXYQGD6DBinding332
      );
    },
    "insertNode",
  );
  blockDiagramDXYQGD6DBinding75 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DInput130) => {
      let blockDiagramDXYQGD6DBinding369 = $[blockDiagramDXYQGD6DInput130.id];
      chunkAGHRB4JFI.trace(
        "Transforming node",
        blockDiagramDXYQGD6DInput130.diff,
        blockDiagramDXYQGD6DInput130,
        "translate(" +
          (blockDiagramDXYQGD6DInput130.x -
            blockDiagramDXYQGD6DInput130.width / 2 -
            5) +
          ", " +
          blockDiagramDXYQGD6DInput130.width / 2 +
          ")",
      );
      let blockDiagramDXYQGD6DBinding370 =
        blockDiagramDXYQGD6DInput130.diff || 0;
      return (
        blockDiagramDXYQGD6DInput130.clusterNode
          ? blockDiagramDXYQGD6DBinding369.attr(
              "transform",
              "translate(" +
                (blockDiagramDXYQGD6DInput130.x +
                  blockDiagramDXYQGD6DBinding370 -
                  blockDiagramDXYQGD6DInput130.width / 2) +
                ", " +
                (blockDiagramDXYQGD6DInput130.y -
                  blockDiagramDXYQGD6DInput130.height / 2 -
                  8) +
                ")",
            )
          : blockDiagramDXYQGD6DBinding369.attr(
              "transform",
              "translate(" +
                blockDiagramDXYQGD6DInput130.x +
                ", " +
                blockDiagramDXYQGD6DInput130.y +
                ")",
            ),
        blockDiagramDXYQGD6DBinding370
      );
    },
    "positionNode",
  );
  chunkAGHRB4JFN(be, "getNodeFromBlock");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper17, "calculateBlockSize");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper18, "insertBlockPositioned");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper19, "performOperations");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper20, "calculateBlockSizes");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper21, "insertBlocks");
  chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper22, "insertEdges");
  BlockDiagramDXYQGD6D = {
    parser: blockDiagramDXYQGD6DBinding2,
    db: blockDiagramDXYQGD6DBinding22,
    renderer: {
      draw: chunkAGHRB4JFN(async function (
        blockDiagramDXYQGD6DInput69,
        blockDiagramDXYQGD6DInput70,
        blockDiagramDXYQGD6DInput71,
        blockDiagramDXYQGD6DInput72,
      ) {
        let { securityLevel, block } = chunkICPOFSXXY(),
          blockDiagramDXYQGD6DBinding259 = blockDiagramDXYQGD6DInput72.db;
        blockDiagramDXYQGD6DBinding259.setDiagramId(
          blockDiagramDXYQGD6DInput70,
        );
        let blockDiagramDXYQGD6DBinding260;
        securityLevel === "sandbox" &&
          (blockDiagramDXYQGD6DBinding260 = srcR(
            "#i" + blockDiagramDXYQGD6DInput70,
          ));
        let blockDiagramDXYQGD6DBinding261 = srcR(
            securityLevel === "sandbox"
              ? blockDiagramDXYQGD6DBinding260.nodes()[0].contentDocument.body
              : "body",
          ),
          blockDiagramDXYQGD6DBinding262 =
            securityLevel === "sandbox"
              ? blockDiagramDXYQGD6DBinding261.select(
                  `[id="${blockDiagramDXYQGD6DInput70}"]`,
                )
              : srcR(`[id="${blockDiagramDXYQGD6DInput70}"]`);
        blockDiagramDXYQGD6DBinding27(
          blockDiagramDXYQGD6DBinding262,
          ["point", "circle", "cross"],
          blockDiagramDXYQGD6DInput72.type,
          blockDiagramDXYQGD6DInput70,
        );
        let blockDiagramDXYQGD6DBinding263 =
            blockDiagramDXYQGD6DBinding259.getBlocks(),
          blockDiagramDXYQGD6DBinding264 =
            blockDiagramDXYQGD6DBinding259.getBlocksFlat(),
          blockDiagramDXYQGD6DBinding265 =
            blockDiagramDXYQGD6DBinding259.getEdges(),
          blockDiagramDXYQGD6DBinding266 = blockDiagramDXYQGD6DBinding262
            .insert("g")
            .attr("class", "block");
        await blockDiagramDXYQGD6DHelper20(
          blockDiagramDXYQGD6DBinding266,
          blockDiagramDXYQGD6DBinding263,
          blockDiagramDXYQGD6DBinding259,
        );
        let blockDiagramDXYQGD6DBinding267 = blockDiagramDXYQGD6DHelper8(
          blockDiagramDXYQGD6DBinding259,
        );
        if (
          (await blockDiagramDXYQGD6DHelper21(
            blockDiagramDXYQGD6DBinding266,
            blockDiagramDXYQGD6DBinding263,
            blockDiagramDXYQGD6DBinding259,
          ),
          await blockDiagramDXYQGD6DHelper22(
            blockDiagramDXYQGD6DBinding266,
            blockDiagramDXYQGD6DBinding265,
            blockDiagramDXYQGD6DBinding264,
            blockDiagramDXYQGD6DBinding259,
            blockDiagramDXYQGD6DInput70,
          ),
          blockDiagramDXYQGD6DBinding267)
        ) {
          let blockDiagramDXYQGD6DBinding423 = blockDiagramDXYQGD6DBinding267,
            blockDiagramDXYQGD6DBinding424 = Math.max(
              1,
              Math.round(
                0.125 *
                  (blockDiagramDXYQGD6DBinding423.width /
                    blockDiagramDXYQGD6DBinding423.height),
              ),
            ),
            blockDiagramDXYQGD6DBinding425 =
              blockDiagramDXYQGD6DBinding423.height +
              blockDiagramDXYQGD6DBinding424 +
              10,
            blockDiagramDXYQGD6DBinding426 =
              blockDiagramDXYQGD6DBinding423.width + 10,
            { useMaxWidth } = block;
          chunkICPOFSXXC(
            blockDiagramDXYQGD6DBinding262,
            blockDiagramDXYQGD6DBinding425,
            blockDiagramDXYQGD6DBinding426,
            !!useMaxWidth,
          );
          chunkAGHRB4JFI.debug(
            "Here Bounds",
            blockDiagramDXYQGD6DBinding267,
            blockDiagramDXYQGD6DBinding423,
          );
          blockDiagramDXYQGD6DBinding262.attr(
            "viewBox",
            `${blockDiagramDXYQGD6DBinding423.x - 5} ${blockDiagramDXYQGD6DBinding423.y - 5} ${blockDiagramDXYQGD6DBinding423.width + 10} ${blockDiagramDXYQGD6DBinding423.height + 10}`,
          );
        }
      }, "draw"),
      getClasses: chunkAGHRB4JFN(function (
        blockDiagramDXYQGD6DInput240,
        blockDiagramDXYQGD6DInput241,
      ) {
        return blockDiagramDXYQGD6DInput241.db.getClasses();
      }, "getClasses"),
    },
    styles: blockDiagramDXYQGD6DBinding24,
  };
})();
export { BlockDiagramDXYQGD6D as diagram };
