// Restored from ref/webview/assets/blockDiagram-VD42YOAC-D7a9FPL9.js
// Mermaid block diagram definition (primary). app-initial Ait/Sit → d3-shape line + curveBasis.
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
import { At as lodashAt, jt as lodashJt } from "../lodash-collection-runtime";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt-dup";
import {
  _ as distUnderscore,
  m as distM,
  t as distT,
} from "../../vendor/khroma";
import {
  E as chunkABZYJK2DE,
  L as chunkABZYJK2DL,
  a as chunkABZYJK2DA,
  b as chunkABZYJK2DB,
  c as chunkABZYJK2DC,
  h as chunkABZYJK2DH,
  k as chunkABZYJK2DK,
  s as chunkABZYJK2DS,
  y as chunkABZYJK2DY,
} from "../../diagrams/mermaid-config";
import {
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import {
  chunkS3R3BYOJC,
  chunkS3R3BYOJG,
  chunkS3R3BYOJI,
  chunkS3R3BYOJU,
} from "./mermaid-common-utils";
import {
  chunkJA3XYJ7ZA as chunkJA3XYJ7ZI,
  chunkJA3XYJ7ZN,
  chunkJA3XYJ7ZO,
} from "./mermaid-create-text";
import {
  n as chunkFMBD7UC4N,
  t as chunkFMBD7UC4T,
} from "../../diagrams/get-icon-styles-alt";
import {
  initMermaidLineOffsetChunk as chunkHN2XXSSUN,
  getLineFunctionsWithOffset as chunkHN2XXSSUT,
} from "../../diagrams/line-offset-helpers";
import {
  initSubGraphTitleMarginsChunk as chunkCVBHYZKIN,
  getSubGraphTitleMargins as chunkCVBHYZKIT,
} from "../../diagrams/subgraph-title-margins";
import {
  Graph as blockDiagramVD42YOACImport1,
  t as blockDiagramVD42YOACImport2,
} from "../../vendor/graphlib";
function blockDiagramVD42YOACHelper1(blockDiagramVD42YOACInput104) {
  switch (
    (chunkAGHRB4JFI.debug("typeStr2Type", blockDiagramVD42YOACInput104),
    blockDiagramVD42YOACInput104)
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
function blockDiagramVD42YOACHelper2(blockDiagramVD42YOACInput211) {
  switch (
    (chunkAGHRB4JFI.debug("typeStr2Type", blockDiagramVD42YOACInput211),
    blockDiagramVD42YOACInput211)
  ) {
    case "==":
      return "thick";
    default:
      return "normal";
  }
}
function blockDiagramVD42YOACHelper3(blockDiagramVD42YOACInput194) {
  switch (blockDiagramVD42YOACInput194.replace(/^[\s-]+|[\s-]+$/g, "")) {
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
function blockDiagramVD42YOACHelper4(
  blockDiagramVD42YOACInput168,
  blockDiagramVD42YOACInput169,
) {
  if (
    blockDiagramVD42YOACInput168 === 0 ||
    !Number.isInteger(blockDiagramVD42YOACInput168)
  )
    throw Error("Columns must be an integer !== 0.");
  if (
    blockDiagramVD42YOACInput169 < 0 ||
    !Number.isInteger(blockDiagramVD42YOACInput169)
  )
    throw Error(
      "Position must be a non-negative integer." + blockDiagramVD42YOACInput169,
    );
  return blockDiagramVD42YOACInput168 < 0
    ? {
        px: blockDiagramVD42YOACInput169,
        py: 0,
      }
    : blockDiagramVD42YOACInput168 === 1
      ? {
          px: 0,
          py: blockDiagramVD42YOACInput169,
        }
      : {
          px: blockDiagramVD42YOACInput169 % blockDiagramVD42YOACInput168,
          py: Math.floor(
            blockDiagramVD42YOACInput169 / blockDiagramVD42YOACInput168,
          ),
        };
}
function blockDiagramVD42YOACHelper5(
  blockDiagramVD42YOACInput24,
  blockDiagramVD42YOACInput25,
  blockDiagramVD42YOACInput26 = 0,
  blockDiagramVD42YOACInput27 = 0,
) {
  chunkAGHRB4JFI.debug(
    "setBlockSizes abc95 (start)",
    blockDiagramVD42YOACInput24.id,
    blockDiagramVD42YOACInput24?.size?.x,
    "block width =",
    blockDiagramVD42YOACInput24?.size,
    "siblingWidth",
    blockDiagramVD42YOACInput26,
  );
  blockDiagramVD42YOACInput24?.size?.width ||
    (blockDiagramVD42YOACInput24.size = {
      width: blockDiagramVD42YOACInput26,
      height: blockDiagramVD42YOACInput27,
      x: 0,
      y: 0,
    });
  let blockDiagramVD42YOACBinding168 = 0,
    blockDiagramVD42YOACBinding169 = 0;
  if (blockDiagramVD42YOACInput24.children?.length > 0) {
    for (let blockDiagramVD42YOACBinding541 of blockDiagramVD42YOACInput24.children)
      blockDiagramVD42YOACHelper5(
        blockDiagramVD42YOACBinding541,
        blockDiagramVD42YOACInput25,
      );
    let blockDiagramVD42YOACBinding187 = blockDiagramVD42YOACBinding28(
      blockDiagramVD42YOACInput24,
    );
    blockDiagramVD42YOACBinding168 = blockDiagramVD42YOACBinding187.width;
    blockDiagramVD42YOACBinding169 = blockDiagramVD42YOACBinding187.height;
    chunkAGHRB4JFI.debug(
      "setBlockSizes abc95 maxWidth of",
      blockDiagramVD42YOACInput24.id,
      ":s children is ",
      blockDiagramVD42YOACBinding168,
      blockDiagramVD42YOACBinding169,
    );
    for (let blockDiagramVD42YOACBinding408 of blockDiagramVD42YOACInput24.children)
      blockDiagramVD42YOACBinding408.size &&
        (chunkAGHRB4JFI.debug(
          `abc95 Setting size of children of ${blockDiagramVD42YOACInput24.id} id=${blockDiagramVD42YOACBinding408.id} ${blockDiagramVD42YOACBinding168} ${blockDiagramVD42YOACBinding169} ${JSON.stringify(blockDiagramVD42YOACBinding408.size)}`,
        ),
        (blockDiagramVD42YOACBinding408.size.width =
          blockDiagramVD42YOACBinding168 *
            (blockDiagramVD42YOACBinding408.widthInColumns ?? 1) +
          blockDiagramVD42YOACBinding27 *
            ((blockDiagramVD42YOACBinding408.widthInColumns ?? 1) - 1)),
        (blockDiagramVD42YOACBinding408.size.height =
          blockDiagramVD42YOACBinding169),
        (blockDiagramVD42YOACBinding408.size.x = 0),
        (blockDiagramVD42YOACBinding408.size.y = 0),
        chunkAGHRB4JFI.debug(
          `abc95 updating size of ${blockDiagramVD42YOACInput24.id} children child:${blockDiagramVD42YOACBinding408.id} maxWidth:${blockDiagramVD42YOACBinding168} maxHeight:${blockDiagramVD42YOACBinding169}`,
        ));
    for (let blockDiagramVD42YOACBinding540 of blockDiagramVD42YOACInput24.children)
      blockDiagramVD42YOACHelper5(
        blockDiagramVD42YOACBinding540,
        blockDiagramVD42YOACInput25,
        blockDiagramVD42YOACBinding168,
        blockDiagramVD42YOACBinding169,
      );
    let blockDiagramVD42YOACBinding188 =
        blockDiagramVD42YOACInput24.columns ?? -1,
      blockDiagramVD42YOACBinding189 = 0;
    for (let blockDiagramVD42YOACBinding539 of blockDiagramVD42YOACInput24.children)
      blockDiagramVD42YOACBinding189 +=
        blockDiagramVD42YOACBinding539.widthInColumns ?? 1;
    let blockDiagramVD42YOACBinding190 =
      blockDiagramVD42YOACInput24.children.length;
    blockDiagramVD42YOACBinding188 > 0 &&
      blockDiagramVD42YOACBinding188 < blockDiagramVD42YOACBinding189 &&
      (blockDiagramVD42YOACBinding190 = blockDiagramVD42YOACBinding188);
    let blockDiagramVD42YOACBinding191 = Math.ceil(
        blockDiagramVD42YOACBinding189 / blockDiagramVD42YOACBinding190,
      ),
      blockDiagramVD42YOACBinding192 =
        blockDiagramVD42YOACBinding190 *
          (blockDiagramVD42YOACBinding168 + blockDiagramVD42YOACBinding27) +
        blockDiagramVD42YOACBinding27,
      blockDiagramVD42YOACBinding193 =
        blockDiagramVD42YOACBinding191 *
          (blockDiagramVD42YOACBinding169 + blockDiagramVD42YOACBinding27) +
        blockDiagramVD42YOACBinding27;
    if (blockDiagramVD42YOACBinding192 < blockDiagramVD42YOACInput26) {
      chunkAGHRB4JFI.debug(
        `Detected to small sibling: abc95 ${blockDiagramVD42YOACInput24.id} siblingWidth ${blockDiagramVD42YOACInput26} siblingHeight ${blockDiagramVD42YOACInput27} width ${blockDiagramVD42YOACBinding192}`,
      );
      blockDiagramVD42YOACBinding192 = blockDiagramVD42YOACInput26;
      blockDiagramVD42YOACBinding193 = blockDiagramVD42YOACInput27;
      let blockDiagramVD42YOACBinding340 =
          (blockDiagramVD42YOACInput26 -
            blockDiagramVD42YOACBinding190 * blockDiagramVD42YOACBinding27 -
            blockDiagramVD42YOACBinding27) /
          blockDiagramVD42YOACBinding190,
        blockDiagramVD42YOACBinding341 =
          (blockDiagramVD42YOACInput27 -
            blockDiagramVD42YOACBinding191 * blockDiagramVD42YOACBinding27 -
            blockDiagramVD42YOACBinding27) /
          blockDiagramVD42YOACBinding191;
      chunkAGHRB4JFI.debug(
        "Size indata abc88",
        blockDiagramVD42YOACInput24.id,
        "childWidth",
        blockDiagramVD42YOACBinding340,
        "maxWidth",
        blockDiagramVD42YOACBinding168,
      );
      chunkAGHRB4JFI.debug(
        "Size indata abc88",
        blockDiagramVD42YOACInput24.id,
        "childHeight",
        blockDiagramVD42YOACBinding341,
        "maxHeight",
        blockDiagramVD42YOACBinding169,
      );
      chunkAGHRB4JFI.debug(
        "Size indata abc88 xSize",
        blockDiagramVD42YOACBinding190,
        "padding",
        blockDiagramVD42YOACBinding27,
      );
      for (let blockDiagramVD42YOACBinding527 of blockDiagramVD42YOACInput24.children)
        blockDiagramVD42YOACBinding527.size &&
          ((blockDiagramVD42YOACBinding527.size.width =
            blockDiagramVD42YOACBinding340),
          (blockDiagramVD42YOACBinding527.size.height =
            blockDiagramVD42YOACBinding341),
          (blockDiagramVD42YOACBinding527.size.x = 0),
          (blockDiagramVD42YOACBinding527.size.y = 0));
    }
    if (
      (chunkAGHRB4JFI.debug(
        `abc95 (finale calc) ${blockDiagramVD42YOACInput24.id} xSize ${blockDiagramVD42YOACBinding190} ySize ${blockDiagramVD42YOACBinding191} columns ${blockDiagramVD42YOACBinding188}${blockDiagramVD42YOACInput24.children.length} width=${Math.max(blockDiagramVD42YOACBinding192, blockDiagramVD42YOACInput24.size?.width || 0)}`,
      ),
      blockDiagramVD42YOACBinding192 <
        (blockDiagramVD42YOACInput24?.size?.width || 0))
    ) {
      blockDiagramVD42YOACBinding192 =
        blockDiagramVD42YOACInput24?.size?.width || 0;
      let blockDiagramVD42YOACBinding455 =
        blockDiagramVD42YOACBinding188 > 0
          ? Math.min(
              blockDiagramVD42YOACInput24.children.length,
              blockDiagramVD42YOACBinding188,
            )
          : blockDiagramVD42YOACInput24.children.length;
      if (blockDiagramVD42YOACBinding455 > 0) {
        let blockDiagramVD42YOACBinding513 =
          (blockDiagramVD42YOACBinding192 -
            blockDiagramVD42YOACBinding455 * blockDiagramVD42YOACBinding27 -
            blockDiagramVD42YOACBinding27) /
          blockDiagramVD42YOACBinding455;
        chunkAGHRB4JFI.debug(
          "abc95 (growing to fit) width",
          blockDiagramVD42YOACInput24.id,
          blockDiagramVD42YOACBinding192,
          blockDiagramVD42YOACInput24.size?.width,
          blockDiagramVD42YOACBinding513,
        );
        for (let blockDiagramVD42YOACBinding538 of blockDiagramVD42YOACInput24.children)
          blockDiagramVD42YOACBinding538.size &&
            (blockDiagramVD42YOACBinding538.size.width =
              blockDiagramVD42YOACBinding513);
      }
    }
    blockDiagramVD42YOACInput24.size = {
      width: blockDiagramVD42YOACBinding192,
      height: blockDiagramVD42YOACBinding193,
      x: 0,
      y: 0,
    };
  }
  chunkAGHRB4JFI.debug(
    "setBlockSizes abc94 (done)",
    blockDiagramVD42YOACInput24.id,
    blockDiagramVD42YOACInput24?.size?.x,
    blockDiagramVD42YOACInput24?.size?.width,
    blockDiagramVD42YOACInput24?.size?.y,
    blockDiagramVD42YOACInput24?.size?.height,
  );
}
function blockDiagramVD42YOACHelper6(
  blockDiagramVD42YOACInput33,
  blockDiagramVD42YOACInput34,
) {
  chunkAGHRB4JFI.debug(
    `abc85 layout blocks (=>layoutBlocks) ${blockDiagramVD42YOACInput33.id} x: ${blockDiagramVD42YOACInput33?.size?.x} y: ${blockDiagramVD42YOACInput33?.size?.y} width: ${blockDiagramVD42YOACInput33?.size?.width}`,
  );
  let blockDiagramVD42YOACBinding194 =
    blockDiagramVD42YOACInput33.columns ?? -1;
  if (
    (chunkAGHRB4JFI.debug(
      "layoutBlocks columns abc95",
      blockDiagramVD42YOACInput33.id,
      "=>",
      blockDiagramVD42YOACBinding194,
      blockDiagramVD42YOACInput33,
    ),
    blockDiagramVD42YOACInput33.children &&
      blockDiagramVD42YOACInput33.children.length > 0)
  ) {
    let blockDiagramVD42YOACBinding216 =
        blockDiagramVD42YOACInput33?.children[0]?.size?.width ?? 0,
      blockDiagramVD42YOACBinding217 =
        blockDiagramVD42YOACInput33.children.length *
          blockDiagramVD42YOACBinding216 +
        (blockDiagramVD42YOACInput33.children.length - 1) *
          blockDiagramVD42YOACBinding27;
    chunkAGHRB4JFI.debug(
      "widthOfChildren 88",
      blockDiagramVD42YOACBinding217,
      "posX",
    );
    let blockDiagramVD42YOACBinding218 = 0;
    chunkAGHRB4JFI.debug(
      "abc91 block?.size?.x",
      blockDiagramVD42YOACInput33.id,
      blockDiagramVD42YOACInput33?.size?.x,
    );
    let blockDiagramVD42YOACBinding219 = blockDiagramVD42YOACInput33?.size?.x
        ? blockDiagramVD42YOACInput33?.size?.x +
          (-blockDiagramVD42YOACInput33?.size?.width / 2 || 0)
        : -blockDiagramVD42YOACBinding27,
      blockDiagramVD42YOACBinding220 = 0;
    for (let blockDiagramVD42YOACBinding231 of blockDiagramVD42YOACInput33.children) {
      let blockDiagramVD42YOACBinding232 = blockDiagramVD42YOACInput33;
      if (!blockDiagramVD42YOACBinding231.size) continue;
      let { width, height } = blockDiagramVD42YOACBinding231.size,
        { px, py } = blockDiagramVD42YOACHelper4(
          blockDiagramVD42YOACBinding194,
          blockDiagramVD42YOACBinding218,
        );
      if (
        (py != blockDiagramVD42YOACBinding220 &&
          ((blockDiagramVD42YOACBinding220 = py),
          (blockDiagramVD42YOACBinding219 = blockDiagramVD42YOACInput33?.size?.x
            ? blockDiagramVD42YOACInput33?.size?.x +
              (-blockDiagramVD42YOACInput33?.size?.width / 2 || 0)
            : -blockDiagramVD42YOACBinding27),
          chunkAGHRB4JFI.debug(
            "New row in layout for block",
            blockDiagramVD42YOACInput33.id,
            " and child ",
            blockDiagramVD42YOACBinding231.id,
            blockDiagramVD42YOACBinding220,
          )),
        chunkAGHRB4JFI.debug(
          `abc89 layout blocks (child) id: ${blockDiagramVD42YOACBinding231.id} Pos: ${blockDiagramVD42YOACBinding218} (px, py) ${px},${py} (${blockDiagramVD42YOACBinding232?.size?.x},${blockDiagramVD42YOACBinding232?.size?.y}) parent: ${blockDiagramVD42YOACBinding232.id} width: ${width}${blockDiagramVD42YOACBinding27}`,
        ),
        blockDiagramVD42YOACBinding232.size)
      ) {
        let blockDiagramVD42YOACBinding323 = width / 2;
        blockDiagramVD42YOACBinding231.size.x =
          blockDiagramVD42YOACBinding219 +
          blockDiagramVD42YOACBinding27 +
          blockDiagramVD42YOACBinding323;
        chunkAGHRB4JFI.debug(
          `abc91 layout blocks (calc) px, pyid:${blockDiagramVD42YOACBinding231.id} startingPos=X${blockDiagramVD42YOACBinding219} new startingPosX${blockDiagramVD42YOACBinding231.size.x} ${blockDiagramVD42YOACBinding323} padding=${blockDiagramVD42YOACBinding27} width=${width} halfWidth=${blockDiagramVD42YOACBinding323} => x:${blockDiagramVD42YOACBinding231.size.x} y:${blockDiagramVD42YOACBinding231.size.y} ${blockDiagramVD42YOACBinding231.widthInColumns} (width * (child?.w || 1)) / 2 ${(width * (blockDiagramVD42YOACBinding231?.widthInColumns ?? 1)) / 2}`,
        );
        blockDiagramVD42YOACBinding219 =
          blockDiagramVD42YOACBinding231.size.x +
          blockDiagramVD42YOACBinding323;
        blockDiagramVD42YOACBinding231.size.y =
          blockDiagramVD42YOACBinding232.size.y -
          blockDiagramVD42YOACBinding232.size.height / 2 +
          py * (height + blockDiagramVD42YOACBinding27) +
          height / 2 +
          blockDiagramVD42YOACBinding27;
        chunkAGHRB4JFI.debug(
          `abc88 layout blocks (calc) px, pyid:${blockDiagramVD42YOACBinding231.id}startingPosX${blockDiagramVD42YOACBinding219}${blockDiagramVD42YOACBinding27}${blockDiagramVD42YOACBinding323}=>x:${blockDiagramVD42YOACBinding231.size.x}y:${blockDiagramVD42YOACBinding231.size.y}${blockDiagramVD42YOACBinding231.widthInColumns}(width * (child?.w || 1)) / 2${(width * (blockDiagramVD42YOACBinding231?.widthInColumns ?? 1)) / 2}`,
        );
      }
      blockDiagramVD42YOACBinding231.children &&
        blockDiagramVD42YOACHelper6(
          blockDiagramVD42YOACBinding231,
          blockDiagramVD42YOACInput34,
        );
      let blockDiagramVD42YOACBinding233 =
        blockDiagramVD42YOACBinding231?.widthInColumns ?? 1;
      blockDiagramVD42YOACBinding194 > 0 &&
        (blockDiagramVD42YOACBinding233 = Math.min(
          blockDiagramVD42YOACBinding233,
          blockDiagramVD42YOACBinding194 -
            (blockDiagramVD42YOACBinding218 % blockDiagramVD42YOACBinding194),
        ));
      blockDiagramVD42YOACBinding218 += blockDiagramVD42YOACBinding233;
      chunkAGHRB4JFI.debug(
        "abc88 columnsPos",
        blockDiagramVD42YOACBinding231,
        blockDiagramVD42YOACBinding218,
      );
    }
  }
  chunkAGHRB4JFI.debug(
    `layout blocks (<==layoutBlocks) ${blockDiagramVD42YOACInput33.id} x: ${blockDiagramVD42YOACInput33?.size?.x} y: ${blockDiagramVD42YOACInput33?.size?.y} width: ${blockDiagramVD42YOACInput33?.size?.width}`,
  );
}
function blockDiagramVD42YOACHelper7(
  blockDiagramVD42YOACInput128,
  { minX, minY, maxX, maxY } = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
  },
) {
  if (
    blockDiagramVD42YOACInput128.size &&
    blockDiagramVD42YOACInput128.id !== "root"
  ) {
    let { x, y, width, height } = blockDiagramVD42YOACInput128.size;
    x - width / 2 < minX && (minX = x - width / 2);
    y - height / 2 < minY && (minY = y - height / 2);
    x + width / 2 > maxX && (maxX = x + width / 2);
    y + height / 2 > maxY && (maxY = y + height / 2);
  }
  if (blockDiagramVD42YOACInput128.children)
    for (let blockDiagramVD42YOACBinding526 of blockDiagramVD42YOACInput128.children)
      ({ minX, minY, maxX, maxY } = blockDiagramVD42YOACHelper7(
        blockDiagramVD42YOACBinding526,
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
function blockDiagramVD42YOACHelper8(blockDiagramVD42YOACInput186) {
  let blockDiagramVD42YOACBinding480 =
    blockDiagramVD42YOACInput186.getBlock("root");
  if (!blockDiagramVD42YOACBinding480) return;
  blockDiagramVD42YOACHelper5(
    blockDiagramVD42YOACBinding480,
    blockDiagramVD42YOACInput186,
    0,
    0,
  );
  blockDiagramVD42YOACHelper6(
    blockDiagramVD42YOACBinding480,
    blockDiagramVD42YOACInput186,
  );
  chunkAGHRB4JFI.debug(
    "getBlocks",
    JSON.stringify(blockDiagramVD42YOACBinding480, null, 2),
  );
  let { minX, minY, maxX, maxY } = blockDiagramVD42YOACHelper7(
      blockDiagramVD42YOACBinding480,
    ),
    blockDiagramVD42YOACBinding481 = maxY - minY;
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: blockDiagramVD42YOACBinding481,
  };
}
function blockDiagramVD42YOACHelper9(
  blockDiagramVD42YOACInput273,
  blockDiagramVD42YOACInput274,
) {
  blockDiagramVD42YOACInput274 &&
    blockDiagramVD42YOACInput273.attr("style", blockDiagramVD42YOACInput274);
}
function blockDiagramVD42YOACHelper10(
  blockDiagramVD42YOACInput151,
  blockDiagramVD42YOACInput152,
) {
  let blockDiagramVD42YOACBinding400 = srcR(
      document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"),
    ),
    blockDiagramVD42YOACBinding401 =
      blockDiagramVD42YOACBinding400.append("xhtml:div"),
    blockDiagramVD42YOACBinding402 = blockDiagramVD42YOACInput151.label,
    blockDiagramVD42YOACBinding403 = blockDiagramVD42YOACInput151.isNode
      ? "nodeLabel"
      : "edgeLabel",
    blockDiagramVD42YOACBinding404 =
      blockDiagramVD42YOACBinding401.append("span");
  return (
    blockDiagramVD42YOACBinding404.html(
      chunkABZYJK2DL(
        blockDiagramVD42YOACBinding402,
        blockDiagramVD42YOACInput152,
      ),
    ),
    blockDiagramVD42YOACHelper9(
      blockDiagramVD42YOACBinding404,
      blockDiagramVD42YOACInput151.labelStyle,
    ),
    blockDiagramVD42YOACBinding404.attr(
      "class",
      blockDiagramVD42YOACBinding403,
    ),
    blockDiagramVD42YOACHelper9(
      blockDiagramVD42YOACBinding401,
      blockDiagramVD42YOACInput151.labelStyle,
    ),
    blockDiagramVD42YOACBinding401.style("display", "inline-block"),
    blockDiagramVD42YOACBinding401.style("white-space", "nowrap"),
    blockDiagramVD42YOACBinding401.attr(
      "xmlns",
      "http://www.w3.org/1999/xhtml",
    ),
    blockDiagramVD42YOACBinding400.node()
  );
}
function blockDiagramVD42YOACHelper11(
  blockDiagramVD42YOACInput212,
  blockDiagramVD42YOACInput213,
) {
  chunkABZYJK2DB().flowchart.htmlLabels &&
    blockDiagramVD42YOACInput212 &&
    ((blockDiagramVD42YOACInput212.style.width =
      blockDiagramVD42YOACInput213.length * 9 + "px"),
    (blockDiagramVD42YOACInput212.style.height = "12px"));
}
function blockDiagramVD42YOACHelper12(
  blockDiagramVD42YOACInput275,
  blockDiagramVD42YOACInput276,
) {
  return blockDiagramVD42YOACInput275.intersect(blockDiagramVD42YOACInput276);
}
function blockDiagramVD42YOACHelper13(
  blockDiagramVD42YOACInput178,
  blockDiagramVD42YOACInput179,
  blockDiagramVD42YOACInput180,
  blockDiagramVD42YOACInput181,
) {
  var blockDiagramVD42YOACBinding463 = blockDiagramVD42YOACInput178.x,
    blockDiagramVD42YOACBinding464 = blockDiagramVD42YOACInput178.y,
    blockDiagramVD42YOACBinding465 =
      blockDiagramVD42YOACBinding463 - blockDiagramVD42YOACInput181.x,
    blockDiagramVD42YOACBinding466 =
      blockDiagramVD42YOACBinding464 - blockDiagramVD42YOACInput181.y,
    blockDiagramVD42YOACBinding467 = Math.sqrt(
      blockDiagramVD42YOACInput179 *
        blockDiagramVD42YOACInput179 *
        blockDiagramVD42YOACBinding466 *
        blockDiagramVD42YOACBinding466 +
        blockDiagramVD42YOACInput180 *
          blockDiagramVD42YOACInput180 *
          blockDiagramVD42YOACBinding465 *
          blockDiagramVD42YOACBinding465,
    ),
    blockDiagramVD42YOACBinding468 = Math.abs(
      (blockDiagramVD42YOACInput179 *
        blockDiagramVD42YOACInput180 *
        blockDiagramVD42YOACBinding465) /
        blockDiagramVD42YOACBinding467,
    );
  blockDiagramVD42YOACInput181.x < blockDiagramVD42YOACBinding463 &&
    (blockDiagramVD42YOACBinding468 = -blockDiagramVD42YOACBinding468);
  var blockDiagramVD42YOACBinding469 = Math.abs(
    (blockDiagramVD42YOACInput179 *
      blockDiagramVD42YOACInput180 *
      blockDiagramVD42YOACBinding466) /
      blockDiagramVD42YOACBinding467,
  );
  return (
    blockDiagramVD42YOACInput181.y < blockDiagramVD42YOACBinding464 &&
      (blockDiagramVD42YOACBinding469 = -blockDiagramVD42YOACBinding469),
    {
      x: blockDiagramVD42YOACBinding463 + blockDiagramVD42YOACBinding468,
      y: blockDiagramVD42YOACBinding464 + blockDiagramVD42YOACBinding469,
    }
  );
}
function _e(
  blockDiagramVD42YOACInput270,
  blockDiagramVD42YOACInput271,
  blockDiagramVD42YOACInput272,
) {
  return blockDiagramVD42YOACBinding43(
    blockDiagramVD42YOACInput270,
    blockDiagramVD42YOACInput271,
    blockDiagramVD42YOACInput271,
    blockDiagramVD42YOACInput272,
  );
}
function blockDiagramVD42YOACHelper14(
  blockDiagramVD42YOACInput105,
  blockDiagramVD42YOACInput106,
  blockDiagramVD42YOACInput107,
  blockDiagramVD42YOACInput108,
) {
  var blockDiagramVD42YOACBinding304 =
      blockDiagramVD42YOACInput106.y - blockDiagramVD42YOACInput105.y,
    blockDiagramVD42YOACBinding305,
    blockDiagramVD42YOACBinding306 =
      blockDiagramVD42YOACInput105.x - blockDiagramVD42YOACInput106.x,
    blockDiagramVD42YOACBinding307,
    blockDiagramVD42YOACBinding308 =
      blockDiagramVD42YOACInput106.x * blockDiagramVD42YOACInput105.y -
      blockDiagramVD42YOACInput105.x * blockDiagramVD42YOACInput106.y,
    blockDiagramVD42YOACBinding309,
    blockDiagramVD42YOACBinding310,
    blockDiagramVD42YOACBinding311,
    blockDiagramVD42YOACBinding312 =
      blockDiagramVD42YOACBinding304 * blockDiagramVD42YOACInput107.x +
      blockDiagramVD42YOACBinding306 * blockDiagramVD42YOACInput107.y +
      blockDiagramVD42YOACBinding308,
    blockDiagramVD42YOACBinding313 =
      blockDiagramVD42YOACBinding304 * blockDiagramVD42YOACInput108.x +
      blockDiagramVD42YOACBinding306 * blockDiagramVD42YOACInput108.y +
      blockDiagramVD42YOACBinding308,
    blockDiagramVD42YOACBinding314,
    blockDiagramVD42YOACBinding315,
    blockDiagramVD42YOACBinding316,
    blockDiagramVD42YOACBinding317,
    blockDiagramVD42YOACBinding318;
  if (
    !(
      blockDiagramVD42YOACBinding312 !== 0 &&
      blockDiagramVD42YOACBinding313 !== 0 &&
      blockDiagramVD42YOACHelper15(
        blockDiagramVD42YOACBinding312,
        blockDiagramVD42YOACBinding313,
      )
    ) &&
    ((blockDiagramVD42YOACBinding305 =
      blockDiagramVD42YOACInput108.y - blockDiagramVD42YOACInput107.y),
    (blockDiagramVD42YOACBinding307 =
      blockDiagramVD42YOACInput107.x - blockDiagramVD42YOACInput108.x),
    (blockDiagramVD42YOACBinding309 =
      blockDiagramVD42YOACInput108.x * blockDiagramVD42YOACInput107.y -
      blockDiagramVD42YOACInput107.x * blockDiagramVD42YOACInput108.y),
    (blockDiagramVD42YOACBinding310 =
      blockDiagramVD42YOACBinding305 * blockDiagramVD42YOACInput105.x +
      blockDiagramVD42YOACBinding307 * blockDiagramVD42YOACInput105.y +
      blockDiagramVD42YOACBinding309),
    (blockDiagramVD42YOACBinding311 =
      blockDiagramVD42YOACBinding305 * blockDiagramVD42YOACInput106.x +
      blockDiagramVD42YOACBinding307 * blockDiagramVD42YOACInput106.y +
      blockDiagramVD42YOACBinding309),
    !(
      blockDiagramVD42YOACBinding310 !== 0 &&
      blockDiagramVD42YOACBinding311 !== 0 &&
      blockDiagramVD42YOACHelper15(
        blockDiagramVD42YOACBinding310,
        blockDiagramVD42YOACBinding311,
      )
    ) &&
      ((blockDiagramVD42YOACBinding314 =
        blockDiagramVD42YOACBinding304 * blockDiagramVD42YOACBinding307 -
        blockDiagramVD42YOACBinding305 * blockDiagramVD42YOACBinding306),
      blockDiagramVD42YOACBinding314 !== 0))
  )
    return (
      (blockDiagramVD42YOACBinding315 = Math.abs(
        blockDiagramVD42YOACBinding314 / 2,
      )),
      (blockDiagramVD42YOACBinding316 =
        blockDiagramVD42YOACBinding306 * blockDiagramVD42YOACBinding309 -
        blockDiagramVD42YOACBinding307 * blockDiagramVD42YOACBinding308),
      (blockDiagramVD42YOACBinding317 =
        blockDiagramVD42YOACBinding316 < 0
          ? (blockDiagramVD42YOACBinding316 - blockDiagramVD42YOACBinding315) /
            blockDiagramVD42YOACBinding314
          : (blockDiagramVD42YOACBinding316 + blockDiagramVD42YOACBinding315) /
            blockDiagramVD42YOACBinding314),
      (blockDiagramVD42YOACBinding316 =
        blockDiagramVD42YOACBinding305 * blockDiagramVD42YOACBinding308 -
        blockDiagramVD42YOACBinding304 * blockDiagramVD42YOACBinding309),
      (blockDiagramVD42YOACBinding318 =
        blockDiagramVD42YOACBinding316 < 0
          ? (blockDiagramVD42YOACBinding316 - blockDiagramVD42YOACBinding315) /
            blockDiagramVD42YOACBinding314
          : (blockDiagramVD42YOACBinding316 + blockDiagramVD42YOACBinding315) /
            blockDiagramVD42YOACBinding314),
      {
        x: blockDiagramVD42YOACBinding317,
        y: blockDiagramVD42YOACBinding318,
      }
    );
}
function blockDiagramVD42YOACHelper15(
  blockDiagramVD42YOACInput277,
  blockDiagramVD42YOACInput278,
) {
  return blockDiagramVD42YOACInput277 * blockDiagramVD42YOACInput278 > 0;
}
function be(
  blockDiagramVD42YOACInput89,
  blockDiagramVD42YOACInput90,
  blockDiagramVD42YOACInput91,
) {
  var blockDiagramVD42YOACBinding288 = blockDiagramVD42YOACInput89.x,
    blockDiagramVD42YOACBinding289 = blockDiagramVD42YOACInput89.y,
    blockDiagramVD42YOACBinding290 = [],
    blockDiagramVD42YOACBinding291 = 1 / 0,
    blockDiagramVD42YOACBinding292 = 1 / 0;
  typeof blockDiagramVD42YOACInput90.forEach == "function"
    ? blockDiagramVD42YOACInput90.forEach(function (item) {
        blockDiagramVD42YOACBinding291 = Math.min(
          blockDiagramVD42YOACBinding291,
          item.x,
        );
        blockDiagramVD42YOACBinding292 = Math.min(
          blockDiagramVD42YOACBinding292,
          item.y,
        );
      })
    : ((blockDiagramVD42YOACBinding291 = Math.min(
        blockDiagramVD42YOACBinding291,
        blockDiagramVD42YOACInput90.x,
      )),
      (blockDiagramVD42YOACBinding292 = Math.min(
        blockDiagramVD42YOACBinding292,
        blockDiagramVD42YOACInput90.y,
      )));
  for (
    var blockDiagramVD42YOACBinding293 =
        blockDiagramVD42YOACBinding288 -
        blockDiagramVD42YOACInput89.width / 2 -
        blockDiagramVD42YOACBinding291,
      blockDiagramVD42YOACBinding294 =
        blockDiagramVD42YOACBinding289 -
        blockDiagramVD42YOACInput89.height / 2 -
        blockDiagramVD42YOACBinding292,
      blockDiagramVD42YOACBinding295 = 0;
    blockDiagramVD42YOACBinding295 < blockDiagramVD42YOACInput90.length;
    blockDiagramVD42YOACBinding295++
  ) {
    var blockDiagramVD42YOACBinding296 =
        blockDiagramVD42YOACInput90[blockDiagramVD42YOACBinding295],
      blockDiagramVD42YOACBinding297 =
        blockDiagramVD42YOACInput90[
          blockDiagramVD42YOACBinding295 <
          blockDiagramVD42YOACInput90.length - 1
            ? blockDiagramVD42YOACBinding295 + 1
            : 0
        ],
      blockDiagramVD42YOACBinding298 = at(
        blockDiagramVD42YOACInput89,
        blockDiagramVD42YOACInput91,
        {
          x: blockDiagramVD42YOACBinding293 + blockDiagramVD42YOACBinding296.x,
          y: blockDiagramVD42YOACBinding294 + blockDiagramVD42YOACBinding296.y,
        },
        {
          x: blockDiagramVD42YOACBinding293 + blockDiagramVD42YOACBinding297.x,
          y: blockDiagramVD42YOACBinding294 + blockDiagramVD42YOACBinding297.y,
        },
      );
    blockDiagramVD42YOACBinding298 &&
      blockDiagramVD42YOACBinding290.push(blockDiagramVD42YOACBinding298);
  }
  return blockDiagramVD42YOACBinding290.length
    ? (blockDiagramVD42YOACBinding290.length > 1 &&
        blockDiagramVD42YOACBinding290.sort(
          function (
            blockDiagramVD42YOACInput184,
            blockDiagramVD42YOACInput185,
          ) {
            var blockDiagramVD42YOACBinding473 =
                blockDiagramVD42YOACInput184.x - blockDiagramVD42YOACInput91.x,
              blockDiagramVD42YOACBinding474 =
                blockDiagramVD42YOACInput184.y - blockDiagramVD42YOACInput91.y,
              blockDiagramVD42YOACBinding475 = Math.sqrt(
                blockDiagramVD42YOACBinding473 *
                  blockDiagramVD42YOACBinding473 +
                  blockDiagramVD42YOACBinding474 *
                    blockDiagramVD42YOACBinding474,
              ),
              blockDiagramVD42YOACBinding476 =
                blockDiagramVD42YOACInput185.x - blockDiagramVD42YOACInput91.x,
              blockDiagramVD42YOACBinding477 =
                blockDiagramVD42YOACInput185.y - blockDiagramVD42YOACInput91.y,
              blockDiagramVD42YOACBinding478 = Math.sqrt(
                blockDiagramVD42YOACBinding476 *
                  blockDiagramVD42YOACBinding476 +
                  blockDiagramVD42YOACBinding477 *
                    blockDiagramVD42YOACBinding477,
              );
            return blockDiagramVD42YOACBinding475 <
              blockDiagramVD42YOACBinding478
              ? -1
              : blockDiagramVD42YOACBinding475 ===
                  blockDiagramVD42YOACBinding478
                ? 0
                : 1;
          },
        ),
      blockDiagramVD42YOACBinding290[0])
    : blockDiagramVD42YOACInput89;
}
function blockDiagramVD42YOACHelper16(
  blockDiagramVD42YOACInput171,
  blockDiagramVD42YOACInput172,
  blockDiagramVD42YOACInput173,
  blockDiagramVD42YOACInput174,
) {
  return blockDiagramVD42YOACInput171
    .insert("polygon", ":first-child")
    .attr(
      "points",
      blockDiagramVD42YOACInput174
        .map(function (item) {
          return item.x + "," + item.y;
        })
        .join(" "),
    )
    .attr("class", "label-container")
    .attr(
      "transform",
      "translate(" +
        -blockDiagramVD42YOACInput172 / 2 +
        "," +
        blockDiagramVD42YOACInput173 / 2 +
        ")",
    );
}
function blockDiagramVD42YOACHelper17(
  blockDiagramVD42YOACInput153,
  blockDiagramVD42YOACInput154,
  blockDiagramVD42YOACInput155,
  blockDiagramVD42YOACInput156,
) {
  let blockDiagramVD42YOACBinding416 = [],
    blockDiagramVD42YOACBinding417 = chunkAGHRB4JFN(
      (blockDiagramVD42YOACInput280) => {
        blockDiagramVD42YOACBinding416.push(blockDiagramVD42YOACInput280, 0);
      },
      "addBorder",
    ),
    blockDiagramVD42YOACBinding418 = chunkAGHRB4JFN(
      (blockDiagramVD42YOACInput281) => {
        blockDiagramVD42YOACBinding416.push(0, blockDiagramVD42YOACInput281);
      },
      "skipBorder",
    );
  blockDiagramVD42YOACInput154.includes("t")
    ? (chunkAGHRB4JFI.debug("add top border"),
      blockDiagramVD42YOACBinding417(blockDiagramVD42YOACInput155))
    : blockDiagramVD42YOACBinding418(blockDiagramVD42YOACInput155);
  blockDiagramVD42YOACInput154.includes("r")
    ? (chunkAGHRB4JFI.debug("add right border"),
      blockDiagramVD42YOACBinding417(blockDiagramVD42YOACInput156))
    : blockDiagramVD42YOACBinding418(blockDiagramVD42YOACInput156);
  blockDiagramVD42YOACInput154.includes("b")
    ? (chunkAGHRB4JFI.debug("add bottom border"),
      blockDiagramVD42YOACBinding417(blockDiagramVD42YOACInput155))
    : blockDiagramVD42YOACBinding418(blockDiagramVD42YOACInput155);
  blockDiagramVD42YOACInput154.includes("l")
    ? (chunkAGHRB4JFI.debug("add left border"),
      blockDiagramVD42YOACBinding417(blockDiagramVD42YOACInput156))
    : blockDiagramVD42YOACBinding418(blockDiagramVD42YOACInput156);
  blockDiagramVD42YOACInput153.attr(
    "stroke-dasharray",
    blockDiagramVD42YOACBinding416.join(" "),
  );
}
function blockDiagramVD42YOACHelper18(
  blockDiagramVD42YOACInput44,
  blockDiagramVD42YOACInput45,
  blockDiagramVD42YOACInput46 = false,
) {
  let blockDiagramVD42YOACBinding208 = blockDiagramVD42YOACInput44,
    blockDiagramVD42YOACBinding209 = "default";
  (blockDiagramVD42YOACBinding208?.classes?.length || 0) > 0 &&
    (blockDiagramVD42YOACBinding209 = (
      blockDiagramVD42YOACBinding208?.classes ?? []
    ).join(" "));
  blockDiagramVD42YOACBinding209 += " flowchart-label";
  let blockDiagramVD42YOACBinding210 = 0,
    blockDiagramVD42YOACBinding211 = "",
    blockDiagramVD42YOACBinding212;
  switch (blockDiagramVD42YOACBinding208.type) {
    case "round":
      blockDiagramVD42YOACBinding210 = 5;
      blockDiagramVD42YOACBinding211 = "rect";
      break;
    case "composite":
      blockDiagramVD42YOACBinding210 = 0;
      blockDiagramVD42YOACBinding211 = "composite";
      blockDiagramVD42YOACBinding212 = 0;
      break;
    case "square":
      blockDiagramVD42YOACBinding211 = "rect";
      break;
    case "diamond":
      blockDiagramVD42YOACBinding211 = "question";
      break;
    case "hexagon":
      blockDiagramVD42YOACBinding211 = "hexagon";
      break;
    case "block_arrow":
      blockDiagramVD42YOACBinding211 = "block_arrow";
      break;
    case "odd":
      blockDiagramVD42YOACBinding211 = "rect_left_inv_arrow";
      break;
    case "lean_right":
      blockDiagramVD42YOACBinding211 = "lean_right";
      break;
    case "lean_left":
      blockDiagramVD42YOACBinding211 = "lean_left";
      break;
    case "trapezoid":
      blockDiagramVD42YOACBinding211 = "trapezoid";
      break;
    case "inv_trapezoid":
      blockDiagramVD42YOACBinding211 = "inv_trapezoid";
      break;
    case "rect_left_inv_arrow":
      blockDiagramVD42YOACBinding211 = "rect_left_inv_arrow";
      break;
    case "circle":
      blockDiagramVD42YOACBinding211 = "circle";
      break;
    case "ellipse":
      blockDiagramVD42YOACBinding211 = "ellipse";
      break;
    case "stadium":
      blockDiagramVD42YOACBinding211 = "stadium";
      break;
    case "subroutine":
      blockDiagramVD42YOACBinding211 = "subroutine";
      break;
    case "cylinder":
      blockDiagramVD42YOACBinding211 = "cylinder";
      break;
    case "group":
      blockDiagramVD42YOACBinding211 = "rect";
      break;
    case "doublecircle":
      blockDiagramVD42YOACBinding211 = "doublecircle";
      break;
    default:
      blockDiagramVD42YOACBinding211 = "rect";
  }
  let blockDiagramVD42YOACBinding213 = chunkS3R3BYOJC(
      blockDiagramVD42YOACBinding208?.styles ?? [],
    ),
    blockDiagramVD42YOACBinding214 = blockDiagramVD42YOACBinding208.label,
    blockDiagramVD42YOACBinding215 = blockDiagramVD42YOACBinding208.size ?? {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    };
  return {
    labelStyle: blockDiagramVD42YOACBinding213.labelStyle,
    shape: blockDiagramVD42YOACBinding211,
    labelText: blockDiagramVD42YOACBinding214,
    rx: blockDiagramVD42YOACBinding210,
    ry: blockDiagramVD42YOACBinding210,
    class: blockDiagramVD42YOACBinding209,
    style: blockDiagramVD42YOACBinding213.style,
    id: blockDiagramVD42YOACBinding208.id,
    directions: blockDiagramVD42YOACBinding208.directions,
    width: blockDiagramVD42YOACBinding215.width,
    height: blockDiagramVD42YOACBinding215.height,
    x: blockDiagramVD42YOACBinding215.x,
    y: blockDiagramVD42YOACBinding215.y,
    positioned: blockDiagramVD42YOACInput46,
    intersect: undefined,
    type: blockDiagramVD42YOACBinding208.type,
    padding:
      blockDiagramVD42YOACBinding212 ?? chunkABZYJK2DY()?.block?.padding ?? 0,
  };
}
async function blockDiagramVD42YOACHelper19(
  blockDiagramVD42YOACInput175,
  blockDiagramVD42YOACInput176,
  blockDiagramVD42YOACInput177,
) {
  let blockDiagramVD42YOACBinding459 = blockDiagramVD42YOACHelper18(
    blockDiagramVD42YOACInput176,
    blockDiagramVD42YOACInput177,
    false,
  );
  if (blockDiagramVD42YOACBinding459.type === "group") return;
  let blockDiagramVD42YOACBinding460 = await blockDiagramVD42YOACBinding73(
      blockDiagramVD42YOACInput175,
      blockDiagramVD42YOACBinding459,
      {
        config: chunkABZYJK2DY(),
      },
    ),
    blockDiagramVD42YOACBinding461 = blockDiagramVD42YOACBinding460
      .node()
      .getBBox(),
    blockDiagramVD42YOACBinding462 = blockDiagramVD42YOACInput177.getBlock(
      blockDiagramVD42YOACBinding459.id,
    );
  blockDiagramVD42YOACBinding462.size = {
    width: blockDiagramVD42YOACBinding461.width,
    height: blockDiagramVD42YOACBinding461.height,
    x: 0,
    y: 0,
    node: blockDiagramVD42YOACBinding460,
  };
  blockDiagramVD42YOACInput177.setBlock(blockDiagramVD42YOACBinding462);
  blockDiagramVD42YOACBinding460.remove();
}
async function blockDiagramVD42YOACHelper20(
  blockDiagramVD42YOACInput202,
  blockDiagramVD42YOACInput203,
  blockDiagramVD42YOACInput204,
) {
  let blockDiagramVD42YOACBinding525 = blockDiagramVD42YOACHelper18(
    blockDiagramVD42YOACInput203,
    blockDiagramVD42YOACInput204,
    true,
  );
  blockDiagramVD42YOACInput204.getBlock(blockDiagramVD42YOACBinding525.id)
    .type !== "space" &&
    (await blockDiagramVD42YOACBinding73(
      blockDiagramVD42YOACInput202,
      blockDiagramVD42YOACBinding525,
      {
        config: chunkABZYJK2DY(),
      },
    ),
    (blockDiagramVD42YOACInput203.intersect =
      blockDiagramVD42YOACBinding525?.intersect),
    blockDiagramVD42YOACBinding74(blockDiagramVD42YOACBinding525));
}
async function blockDiagramVD42YOACHelper21(
  blockDiagramVD42YOACInput216,
  blockDiagramVD42YOACInput217,
  blockDiagramVD42YOACInput218,
  blockDiagramVD42YOACInput219,
) {
  for (let blockDiagramVD42YOACBinding536 of blockDiagramVD42YOACInput217) {
    await blockDiagramVD42YOACInput219(
      blockDiagramVD42YOACInput216,
      blockDiagramVD42YOACBinding536,
      blockDiagramVD42YOACInput218,
    );
    blockDiagramVD42YOACBinding536.children &&
      (await blockDiagramVD42YOACHelper21(
        blockDiagramVD42YOACInput216,
        blockDiagramVD42YOACBinding536.children,
        blockDiagramVD42YOACInput218,
        blockDiagramVD42YOACInput219,
      ));
  }
}
async function blockDiagramVD42YOACHelper22(
  blockDiagramVD42YOACInput263,
  blockDiagramVD42YOACInput264,
  blockDiagramVD42YOACInput265,
) {
  await blockDiagramVD42YOACHelper21(
    blockDiagramVD42YOACInput263,
    blockDiagramVD42YOACInput264,
    blockDiagramVD42YOACInput265,
    blockDiagramVD42YOACHelper19,
  );
}
async function blockDiagramVD42YOACHelper23(
  blockDiagramVD42YOACInput266,
  blockDiagramVD42YOACInput267,
  blockDiagramVD42YOACInput268,
) {
  await blockDiagramVD42YOACHelper21(
    blockDiagramVD42YOACInput266,
    blockDiagramVD42YOACInput267,
    blockDiagramVD42YOACInput268,
    blockDiagramVD42YOACHelper20,
  );
}
async function blockDiagramVD42YOACHelper24(
  blockDiagramVD42YOACInput49,
  blockDiagramVD42YOACInput50,
  blockDiagramVD42YOACInput51,
  blockDiagramVD42YOACInput52,
  blockDiagramVD42YOACInput53,
) {
  let blockDiagramVD42YOACBinding225 = new blockDiagramVD42YOACImport1({
    multigraph: true,
    compound: true,
  });
  blockDiagramVD42YOACBinding225.setGraph({
    rankdir: "TB",
    nodesep: 10,
    ranksep: 10,
    marginx: 8,
    marginy: 8,
  });
  for (let blockDiagramVD42YOACBinding528 of blockDiagramVD42YOACInput51)
    blockDiagramVD42YOACBinding528.size &&
      blockDiagramVD42YOACBinding225.setNode(
        blockDiagramVD42YOACBinding528.id,
        {
          width: blockDiagramVD42YOACBinding528.size.width,
          height: blockDiagramVD42YOACBinding528.size.height,
          intersect: blockDiagramVD42YOACBinding528.intersect,
        },
      );
  for (let blockDiagramVD42YOACBinding253 of blockDiagramVD42YOACInput50)
    if (
      blockDiagramVD42YOACBinding253.start &&
      blockDiagramVD42YOACBinding253.end
    ) {
      let blockDiagramVD42YOACBinding258 = blockDiagramVD42YOACInput52.getBlock(
          blockDiagramVD42YOACBinding253.start,
        ),
        blockDiagramVD42YOACBinding259 = blockDiagramVD42YOACInput52.getBlock(
          blockDiagramVD42YOACBinding253.end,
        );
      if (
        blockDiagramVD42YOACBinding258?.size &&
        blockDiagramVD42YOACBinding259?.size
      ) {
        let blockDiagramVD42YOACBinding279 =
            blockDiagramVD42YOACBinding258.size,
          blockDiagramVD42YOACBinding280 = blockDiagramVD42YOACBinding259.size,
          blockDiagramVD42YOACBinding281 = [
            {
              x: blockDiagramVD42YOACBinding279.x,
              y: blockDiagramVD42YOACBinding279.y,
            },
            {
              x:
                blockDiagramVD42YOACBinding279.x +
                (blockDiagramVD42YOACBinding280.x -
                  blockDiagramVD42YOACBinding279.x) /
                  2,
              y:
                blockDiagramVD42YOACBinding279.y +
                (blockDiagramVD42YOACBinding280.y -
                  blockDiagramVD42YOACBinding279.y) /
                  2,
            },
            {
              x: blockDiagramVD42YOACBinding280.x,
              y: blockDiagramVD42YOACBinding280.y,
            },
          ];
        $e(
          blockDiagramVD42YOACInput49,
          {
            v: blockDiagramVD42YOACBinding253.start,
            w: blockDiagramVD42YOACBinding253.end,
            name: blockDiagramVD42YOACBinding253.id,
          },
          {
            ...blockDiagramVD42YOACBinding253,
            arrowTypeEnd: blockDiagramVD42YOACBinding253.arrowTypeEnd,
            arrowTypeStart: blockDiagramVD42YOACBinding253.arrowTypeStart,
            points: blockDiagramVD42YOACBinding281,
            classes:
              "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1",
          },
          undefined,
          "block",
          blockDiagramVD42YOACBinding225,
          blockDiagramVD42YOACInput53,
        );
        blockDiagramVD42YOACBinding253.label &&
          (await blockDiagramVD42YOACBinding35(blockDiagramVD42YOACInput49, {
            ...blockDiagramVD42YOACBinding253,
            label: blockDiagramVD42YOACBinding253.label,
            labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
            arrowTypeEnd: blockDiagramVD42YOACBinding253.arrowTypeEnd,
            arrowTypeStart: blockDiagramVD42YOACBinding253.arrowTypeStart,
            points: blockDiagramVD42YOACBinding281,
            classes:
              "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1",
          }),
          blockDiagramVD42YOACBinding36(
            {
              ...blockDiagramVD42YOACBinding253,
              x: blockDiagramVD42YOACBinding281[1].x,
              y: blockDiagramVD42YOACBinding281[1].y,
            },
            {
              originalPath: blockDiagramVD42YOACBinding281,
            },
          ));
      }
    }
}
var blockDiagramVD42YOACBinding1,
  blockDiagramVD42YOACBinding2,
  blockDiagramVD42YOACBinding3,
  blockDiagramVD42YOACBinding4,
  blockDiagramVD42YOACBinding5,
  blockDiagramVD42YOACBinding6,
  blockDiagramVD42YOACBinding7,
  blockDiagramVD42YOACBinding8,
  blockDiagramVD42YOACBinding9,
  blockDiagramVD42YOACBinding10,
  blockDiagramVD42YOACBinding11,
  blockDiagramVD42YOACBinding12,
  blockDiagramVD42YOACBinding13,
  blockDiagramVD42YOACBinding14,
  blockDiagramVD42YOACBinding15,
  blockDiagramVD42YOACBinding16,
  blockDiagramVD42YOACBinding17,
  blockDiagramVD42YOACBinding18,
  blockDiagramVD42YOACBinding19,
  blockDiagramVD42YOACBinding20,
  blockDiagramVD42YOACBinding21,
  blockDiagramVD42YOACBinding22,
  blockDiagramVD42YOACBinding23,
  blockDiagramVD42YOACBinding24,
  blockDiagramVD42YOACBinding25,
  blockDiagramVD42YOACBinding26,
  blockDiagramVD42YOACBinding27,
  blockDiagramVD42YOACBinding28,
  blockDiagramVD42YOACBinding29,
  blockDiagramVD42YOACBinding30,
  blockDiagramVD42YOACBinding31,
  blockDiagramVD42YOACBinding32,
  blockDiagramVD42YOACBinding33,
  blockDiagramVD42YOACBinding34,
  blockDiagramVD42YOACBinding35,
  blockDiagramVD42YOACBinding36,
  blockDiagramVD42YOACBinding37,
  blockDiagramVD42YOACBinding38,
  blockDiagramVD42YOACBinding39,
  $e,
  blockDiagramVD42YOACBinding40,
  blockDiagramVD42YOACBinding41,
  blockDiagramVD42YOACBinding42,
  blockDiagramVD42YOACBinding43,
  blockDiagramVD42YOACBinding44,
  at,
  blockDiagramVD42YOACBinding45,
  blockDiagramVD42YOACBinding46,
  blockDiagramVD42YOACBinding47,
  blockDiagramVD42YOACBinding48,
  blockDiagramVD42YOACBinding49,
  blockDiagramVD42YOACBinding50,
  blockDiagramVD42YOACBinding51,
  blockDiagramVD42YOACBinding52,
  blockDiagramVD42YOACBinding53,
  blockDiagramVD42YOACBinding54,
  blockDiagramVD42YOACBinding55,
  blockDiagramVD42YOACBinding56,
  blockDiagramVD42YOACBinding57,
  blockDiagramVD42YOACBinding58,
  blockDiagramVD42YOACBinding59,
  _t,
  blockDiagramVD42YOACBinding60,
  blockDiagramVD42YOACBinding61,
  blockDiagramVD42YOACBinding62,
  blockDiagramVD42YOACBinding63,
  blockDiagramVD42YOACBinding64,
  blockDiagramVD42YOACBinding65,
  blockDiagramVD42YOACBinding66,
  blockDiagramVD42YOACBinding67,
  blockDiagramVD42YOACBinding68,
  blockDiagramVD42YOACBinding69,
  blockDiagramVD42YOACBinding70,
  blockDiagramVD42YOACBinding71,
  blockDiagramVD42YOACBinding72,
  $,
  blockDiagramVD42YOACBinding73,
  blockDiagramVD42YOACBinding74,
  BlockDiagramVD42YOAC;
esmInit(() => {
  chunkFMBD7UC4N();
  chunkHN2XXSSUN();
  chunkCVBHYZKIN();
  chunkJA3XYJ7ZI();
  chunkS3R3BYOJU();
  chunkABZYJK2DK();
  chunkAGHRB4JFR();
  lodashJt();
  distT();
  srcT();
  blockDiagramVD42YOACImport2();
  blockDiagramVD42YOACBinding1 = (function () {
    var blockDiagramVD42YOACBinding75 = chunkAGHRB4JFN(function (
        blockDiagramVD42YOACInput220,
        blockDiagramVD42YOACInput221,
        blockDiagramVD42YOACInput222,
        blockDiagramVD42YOACInput223,
      ) {
        for (
          blockDiagramVD42YOACInput222 ||= {},
            blockDiagramVD42YOACInput223 = blockDiagramVD42YOACInput220.length;
          blockDiagramVD42YOACInput223--;
          blockDiagramVD42YOACInput222[
            blockDiagramVD42YOACInput220[blockDiagramVD42YOACInput223]
          ] = blockDiagramVD42YOACInput221
        );
        return blockDiagramVD42YOACInput222;
      }, "o"),
      blockDiagramVD42YOACBinding76 = [1, 15],
      blockDiagramVD42YOACBinding77 = [1, 7],
      blockDiagramVD42YOACBinding78 = [1, 13],
      blockDiagramVD42YOACBinding79 = [1, 14],
      blockDiagramVD42YOACBinding80 = [1, 19],
      blockDiagramVD42YOACBinding81 = [1, 16],
      blockDiagramVD42YOACBinding82 = [1, 17],
      blockDiagramVD42YOACBinding83 = [1, 18],
      blockDiagramVD42YOACBinding84 = [8, 30],
      blockDiagramVD42YOACBinding85 = [8, 10, 21, 28, 29, 30, 31, 39, 43, 46],
      blockDiagramVD42YOACBinding86 = [1, 23],
      blockDiagramVD42YOACBinding87 = [1, 24],
      blockDiagramVD42YOACBinding88 = [
        8, 10, 15, 16, 21, 28, 29, 30, 31, 39, 43, 46,
      ],
      blockDiagramVD42YOACBinding89 = [
        8, 10, 15, 16, 21, 27, 28, 29, 30, 31, 39, 43, 46,
      ],
      blockDiagramVD42YOACBinding90 = [1, 49],
      blockDiagramVD42YOACBinding91 = {
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
          blockDiagramVD42YOACInput5,
          blockDiagramVD42YOACInput6,
          blockDiagramVD42YOACInput7,
          blockDiagramVD42YOACInput8,
          blockDiagramVD42YOACInput9,
          blockDiagramVD42YOACInput10,
          blockDiagramVD42YOACInput11,
        ) {
          var blockDiagramVD42YOACBinding92 =
            blockDiagramVD42YOACInput10.length - 1;
          switch (blockDiagramVD42YOACInput9) {
            case 4:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug("Rule: separator (NL) ");
              break;
            case 5:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug("Rule: separator (Space) ");
              break;
            case 6:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug("Rule: separator (EOF) ");
              break;
            case 7:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: hierarchy: ",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
                );
              blockDiagramVD42YOACInput8.setHierarchy(
                blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92 - 1],
              );
              break;
            case 8:
              blockDiagramVD42YOACInput8.getLogger().debug("Stop NL ");
              break;
            case 9:
              blockDiagramVD42YOACInput8.getLogger().debug("Stop EOF ");
              break;
            case 10:
              blockDiagramVD42YOACInput8.getLogger().debug("Stop NL2 ");
              break;
            case 11:
              blockDiagramVD42YOACInput8.getLogger().debug("Stop EOF2 ");
              break;
            case 12:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: statement: ",
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              typeof blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                .length == "number"
                ? (this.$ =
                    blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92])
                : (this.$ = [
                    blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                  ]);
              break;
            case 13:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: statement #2: ",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
                );
              this.$ = [
                blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92 - 1],
              ].concat(
                blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
              );
              break;
            case 14:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: link: ",
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                  blockDiagramVD42YOACInput5,
                );
              this.$ = {
                edgeTypeStr:
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                label: "",
              };
              break;
            case 15:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: LABEL link: ",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 3
                  ],
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              this.$ = {
                edgeTypeStr:
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                label:
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
              };
              break;
            case 18:
              let blockDiagramVD42YOACBinding93 = parseInt(
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                ),
                blockDiagramVD42YOACBinding94 =
                  blockDiagramVD42YOACInput8.generateId();
              this.$ = {
                id: blockDiagramVD42YOACBinding94,
                type: "space",
                label: "",
                width: blockDiagramVD42YOACBinding93,
                children: [],
              };
              break;
            case 23:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: (nodeStatement link node) ",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 2
                  ],
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                  " typestr: ",
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92 - 1]
                    .edgeTypeStr,
                );
              let blockDiagramVD42YOACBinding95 =
                blockDiagramVD42YOACInput8.edgeStrToEdgeData(
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92 - 1]
                    .edgeTypeStr,
                );
              this.$ = [
                {
                  id: blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 2
                  ].id,
                  label:
                    blockDiagramVD42YOACInput10[
                      blockDiagramVD42YOACBinding92 - 2
                    ].label,
                  type: blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 2
                  ].type,
                  directions:
                    blockDiagramVD42YOACInput10[
                      blockDiagramVD42YOACBinding92 - 2
                    ].directions,
                },
                {
                  id:
                    blockDiagramVD42YOACInput10[
                      blockDiagramVD42YOACBinding92 - 2
                    ].id +
                    "-" +
                    blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                      .id,
                  start:
                    blockDiagramVD42YOACInput10[
                      blockDiagramVD42YOACBinding92 - 2
                    ].id,
                  end: blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92
                  ].id,
                  label:
                    blockDiagramVD42YOACInput10[
                      blockDiagramVD42YOACBinding92 - 1
                    ].label,
                  type: "edge",
                  directions:
                    blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                      .directions,
                  arrowTypeEnd: blockDiagramVD42YOACBinding95,
                  arrowTypeStart: "arrow_open",
                },
                {
                  id: blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                    .id,
                  label:
                    blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                      .label,
                  type: blockDiagramVD42YOACInput8.typeStr2Type(
                    blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                      .typeStr,
                  ),
                  directions:
                    blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                      .directions,
                },
              ];
              break;
            case 24:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: nodeStatement (abc88 node size) ",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              this.$ = {
                id: blockDiagramVD42YOACInput10[
                  blockDiagramVD42YOACBinding92 - 1
                ].id,
                label:
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92 - 1]
                    .label,
                type: blockDiagramVD42YOACInput8.typeStr2Type(
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92 - 1]
                    .typeStr,
                ),
                directions:
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92 - 1]
                    .directions,
                widthInColumns: parseInt(
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                  10,
                ),
              };
              break;
            case 25:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: nodeStatement (node) ",
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              this.$ = {
                id: blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                  .id,
                label:
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                    .label,
                type: blockDiagramVD42YOACInput8.typeStr2Type(
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                    .typeStr,
                ),
                directions:
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                    .directions,
                widthInColumns: 1,
              };
              break;
            case 26:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug("APA123", this ? this : "na");
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "COLUMNS: ",
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              this.$ = {
                type: "column-setting",
                columns:
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92] ===
                  "auto"
                    ? -1
                    : parseInt(
                        blockDiagramVD42YOACInput10[
                          blockDiagramVD42YOACBinding92
                        ],
                      ),
              };
              break;
            case 27:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: id-block statement : ",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 2
                  ],
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
                );
              blockDiagramVD42YOACInput8.generateId();
              this.$ = {
                ...blockDiagramVD42YOACInput10[
                  blockDiagramVD42YOACBinding92 - 2
                ],
                type: "composite",
                children:
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
              };
              break;
            case 28:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: blockStatement : ",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 2
                  ],
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              let blockDiagramVD42YOACBinding96 =
                blockDiagramVD42YOACInput8.generateId();
              this.$ = {
                id: blockDiagramVD42YOACBinding96,
                type: "composite",
                label: "",
                children:
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
              };
              break;
            case 29:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: node (NODE_ID separator): ",
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              this.$ = {
                id: blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
              };
              break;
            case 30:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: node (NODE_ID nodeShapeNLabel separator): ",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              this.$ = {
                id: blockDiagramVD42YOACInput10[
                  blockDiagramVD42YOACBinding92 - 1
                ],
                label:
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                    .label,
                typeStr:
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                    .typeStr,
                directions:
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92]
                    .directions,
              };
              break;
            case 31:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: dirList: ",
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              this.$ = [
                blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
              ];
              break;
            case 32:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: dirList: ",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              this.$ = [
                blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92 - 1],
              ].concat(
                blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
              );
              break;
            case 33:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: nodeShapeNLabel: ",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 2
                  ],
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              this.$ = {
                typeStr:
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 2
                  ] +
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                label:
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
              };
              break;
            case 34:
              blockDiagramVD42YOACInput8
                .getLogger()
                .debug(
                  "Rule: BLOCK_ARROW nodeShapeNLabel: ",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 3
                  ],
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 2
                  ],
                  " #3:",
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                );
              this.$ = {
                typeStr:
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 3
                  ] +
                  blockDiagramVD42YOACInput10[blockDiagramVD42YOACBinding92],
                label:
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 2
                  ],
                directions:
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92 - 1
                  ],
              };
              break;
            case 35:
            case 36:
              this.$ = {
                type: "classDef",
                id: blockDiagramVD42YOACInput10[
                  blockDiagramVD42YOACBinding92 - 1
                ].trim(),
                css: blockDiagramVD42YOACInput10[
                  blockDiagramVD42YOACBinding92
                ].trim(),
              };
              break;
            case 37:
              this.$ = {
                type: "applyClass",
                id: blockDiagramVD42YOACInput10[
                  blockDiagramVD42YOACBinding92 - 1
                ].trim(),
                styleClass:
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92
                  ].trim(),
              };
              break;
            case 38:
              this.$ = {
                type: "applyStyles",
                id: blockDiagramVD42YOACInput10[
                  blockDiagramVD42YOACBinding92 - 1
                ].trim(),
                stylesStr:
                  blockDiagramVD42YOACInput10[
                    blockDiagramVD42YOACBinding92
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
            10: blockDiagramVD42YOACBinding76,
            11: 3,
            13: 4,
            19: 5,
            20: 6,
            21: blockDiagramVD42YOACBinding77,
            22: 8,
            23: 9,
            24: 10,
            25: 11,
            26: 12,
            28: blockDiagramVD42YOACBinding78,
            29: blockDiagramVD42YOACBinding79,
            31: blockDiagramVD42YOACBinding80,
            39: blockDiagramVD42YOACBinding81,
            43: blockDiagramVD42YOACBinding82,
            46: blockDiagramVD42YOACBinding83,
          },
          {
            8: [1, 20],
          },
          blockDiagramVD42YOACBinding75(
            blockDiagramVD42YOACBinding84,
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
              10: blockDiagramVD42YOACBinding76,
              21: blockDiagramVD42YOACBinding77,
              28: blockDiagramVD42YOACBinding78,
              29: blockDiagramVD42YOACBinding79,
              31: blockDiagramVD42YOACBinding80,
              39: blockDiagramVD42YOACBinding81,
              43: blockDiagramVD42YOACBinding82,
              46: blockDiagramVD42YOACBinding83,
            },
          ),
          blockDiagramVD42YOACBinding75(
            blockDiagramVD42YOACBinding85,
            [2, 16],
            {
              14: 22,
              15: blockDiagramVD42YOACBinding86,
              16: blockDiagramVD42YOACBinding87,
            },
          ),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 17]),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 18]),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 19]),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 20]),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 21]),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 22]),
          blockDiagramVD42YOACBinding75(
            blockDiagramVD42YOACBinding88,
            [2, 25],
            {
              27: [1, 25],
            },
          ),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 26]),
          {
            19: 26,
            26: 12,
            31: blockDiagramVD42YOACBinding80,
          },
          {
            10: blockDiagramVD42YOACBinding76,
            11: 27,
            13: 4,
            19: 5,
            20: 6,
            21: blockDiagramVD42YOACBinding77,
            22: 8,
            23: 9,
            24: 10,
            25: 11,
            26: 12,
            28: blockDiagramVD42YOACBinding78,
            29: blockDiagramVD42YOACBinding79,
            31: blockDiagramVD42YOACBinding80,
            39: blockDiagramVD42YOACBinding81,
            43: blockDiagramVD42YOACBinding82,
            46: blockDiagramVD42YOACBinding83,
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
          blockDiagramVD42YOACBinding75(
            blockDiagramVD42YOACBinding89,
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
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding84, [2, 13]),
          {
            26: 35,
            31: blockDiagramVD42YOACBinding80,
          },
          {
            31: [2, 14],
          },
          {
            17: [1, 36],
          },
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding88, [2, 24]),
          {
            10: blockDiagramVD42YOACBinding76,
            11: 37,
            13: 4,
            14: 22,
            15: blockDiagramVD42YOACBinding86,
            16: blockDiagramVD42YOACBinding87,
            19: 5,
            20: 6,
            21: blockDiagramVD42YOACBinding77,
            22: 8,
            23: 9,
            24: 10,
            25: 11,
            26: 12,
            28: blockDiagramVD42YOACBinding78,
            29: blockDiagramVD42YOACBinding79,
            31: blockDiagramVD42YOACBinding80,
            39: blockDiagramVD42YOACBinding81,
            43: blockDiagramVD42YOACBinding82,
            46: blockDiagramVD42YOACBinding83,
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
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding89, [2, 30]),
          {
            18: [1, 43],
          },
          {
            18: [1, 44],
          },
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding88, [2, 23]),
          {
            18: [1, 45],
          },
          {
            30: [1, 46],
          },
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 28]),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 35]),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 36]),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 37]),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 38]),
          {
            36: [1, 47],
          },
          {
            33: 48,
            34: blockDiagramVD42YOACBinding90,
          },
          {
            15: [1, 50],
          },
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding85, [2, 27]),
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding89, [2, 33]),
          {
            38: [1, 51],
          },
          {
            33: 52,
            34: blockDiagramVD42YOACBinding90,
            38: [2, 31],
          },
          {
            31: [2, 15],
          },
          blockDiagramVD42YOACBinding75(blockDiagramVD42YOACBinding89, [2, 34]),
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
          blockDiagramVD42YOACInput199,
          blockDiagramVD42YOACInput200,
        ) {
          if (blockDiagramVD42YOACInput200.recoverable)
            this.trace(blockDiagramVD42YOACInput199);
          else {
            var blockDiagramVD42YOACBinding518 = Error(
              blockDiagramVD42YOACInput199,
            );
            throw (
              (blockDiagramVD42YOACBinding518.hash =
                blockDiagramVD42YOACInput200),
              blockDiagramVD42YOACBinding518
            );
          }
        }, "parseError"),
        parse: chunkAGHRB4JFN(function (blockDiagramVD42YOACInput17) {
          var blockDiagramVD42YOACBinding122 = this,
            blockDiagramVD42YOACBinding123 = [0],
            blockDiagramVD42YOACBinding124 = [],
            blockDiagramVD42YOACBinding125 = [null],
            blockDiagramVD42YOACBinding126 = [],
            blockDiagramVD42YOACBinding127 = this.table,
            blockDiagramVD42YOACBinding128 = "",
            blockDiagramVD42YOACBinding129 = 0,
            blockDiagramVD42YOACBinding130 = 0,
            blockDiagramVD42YOACBinding131 = 0,
            blockDiagramVD42YOACBinding134 =
              blockDiagramVD42YOACBinding126.slice.call(arguments, 1),
            blockDiagramVD42YOACBinding135 = Object.create(this.lexer),
            blockDiagramVD42YOACBinding136 = {
              yy: {},
            };
          for (var blockDiagramVD42YOACBinding137 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              blockDiagramVD42YOACBinding137,
            ) &&
              (blockDiagramVD42YOACBinding136.yy[
                blockDiagramVD42YOACBinding137
              ] = this.yy[blockDiagramVD42YOACBinding137]);
          blockDiagramVD42YOACBinding135.setInput(
            blockDiagramVD42YOACInput17,
            blockDiagramVD42YOACBinding136.yy,
          );
          blockDiagramVD42YOACBinding136.yy.lexer =
            blockDiagramVD42YOACBinding135;
          blockDiagramVD42YOACBinding136.yy.parser = this;
          blockDiagramVD42YOACBinding135.yylloc === undefined &&
            (blockDiagramVD42YOACBinding135.yylloc = {});
          var blockDiagramVD42YOACBinding138 =
            blockDiagramVD42YOACBinding135.yylloc;
          blockDiagramVD42YOACBinding126.push(blockDiagramVD42YOACBinding138);
          var blockDiagramVD42YOACBinding139 =
            blockDiagramVD42YOACBinding135.options &&
            blockDiagramVD42YOACBinding135.options.ranges;
          typeof blockDiagramVD42YOACBinding136.yy.parseError == "function"
            ? (this.parseError = blockDiagramVD42YOACBinding136.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function blockDiagramVD42YOACHelper26(blockDiagramVD42YOACInput226) {
            blockDiagramVD42YOACBinding123.length -=
              2 * blockDiagramVD42YOACInput226;
            blockDiagramVD42YOACBinding125.length -=
              blockDiagramVD42YOACInput226;
            blockDiagramVD42YOACBinding126.length -=
              blockDiagramVD42YOACInput226;
          }
          chunkAGHRB4JFN(blockDiagramVD42YOACHelper26, "popStack");
          function blockDiagramVD42YOACHelper27() {
            var blockDiagramVD42YOACBinding470 =
              blockDiagramVD42YOACBinding124.pop() ||
              blockDiagramVD42YOACBinding135.lex() ||
              1;
            return (
              typeof blockDiagramVD42YOACBinding470 != "number" &&
                (blockDiagramVD42YOACBinding470 instanceof Array &&
                  ((blockDiagramVD42YOACBinding124 =
                    blockDiagramVD42YOACBinding470),
                  (blockDiagramVD42YOACBinding470 =
                    blockDiagramVD42YOACBinding124.pop())),
                (blockDiagramVD42YOACBinding470 =
                  blockDiagramVD42YOACBinding122.symbols_[
                    blockDiagramVD42YOACBinding470
                  ] || blockDiagramVD42YOACBinding470)),
              blockDiagramVD42YOACBinding470
            );
          }
          chunkAGHRB4JFN(blockDiagramVD42YOACHelper27, "lex");
          for (
            var blockDiagramVD42YOACBinding140,
              blockDiagramVD42YOACBinding141,
              blockDiagramVD42YOACBinding142,
              blockDiagramVD42YOACBinding143,
              blockDiagramVD42YOACBinding144,
              blockDiagramVD42YOACBinding145 = {},
              blockDiagramVD42YOACBinding146,
              blockDiagramVD42YOACBinding147,
              blockDiagramVD42YOACBinding148,
              blockDiagramVD42YOACBinding149;
            ;
          ) {
            if (
              ((blockDiagramVD42YOACBinding142 =
                blockDiagramVD42YOACBinding123[
                  blockDiagramVD42YOACBinding123.length - 1
                ]),
              this.defaultActions[blockDiagramVD42YOACBinding142]
                ? (blockDiagramVD42YOACBinding143 =
                    this.defaultActions[blockDiagramVD42YOACBinding142])
                : ((blockDiagramVD42YOACBinding140 ??=
                    blockDiagramVD42YOACHelper27()),
                  (blockDiagramVD42YOACBinding143 =
                    blockDiagramVD42YOACBinding127[
                      blockDiagramVD42YOACBinding142
                    ] &&
                    blockDiagramVD42YOACBinding127[
                      blockDiagramVD42YOACBinding142
                    ][blockDiagramVD42YOACBinding140])),
              blockDiagramVD42YOACBinding143 === undefined ||
                !blockDiagramVD42YOACBinding143.length ||
                !blockDiagramVD42YOACBinding143[0])
            ) {
              var blockDiagramVD42YOACBinding150 = "";
              for (blockDiagramVD42YOACBinding146 in ((blockDiagramVD42YOACBinding149 =
                []),
              blockDiagramVD42YOACBinding127[blockDiagramVD42YOACBinding142]))
                this.terminals_[blockDiagramVD42YOACBinding146] &&
                  blockDiagramVD42YOACBinding146 > 2 &&
                  blockDiagramVD42YOACBinding149.push(
                    "'" + this.terminals_[blockDiagramVD42YOACBinding146] + "'",
                  );
              blockDiagramVD42YOACBinding150 =
                blockDiagramVD42YOACBinding135.showPosition
                  ? "Parse error on line " +
                    (blockDiagramVD42YOACBinding129 + 1) +
                    ":\n" +
                    blockDiagramVD42YOACBinding135.showPosition() +
                    "\nExpecting " +
                    blockDiagramVD42YOACBinding149.join(", ") +
                    ", got '" +
                    (this.terminals_[blockDiagramVD42YOACBinding140] ||
                      blockDiagramVD42YOACBinding140) +
                    "'"
                  : "Parse error on line " +
                    (blockDiagramVD42YOACBinding129 + 1) +
                    ": Unexpected " +
                    (blockDiagramVD42YOACBinding140 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[blockDiagramVD42YOACBinding140] ||
                          blockDiagramVD42YOACBinding140) +
                        "'");
              this.parseError(blockDiagramVD42YOACBinding150, {
                text: blockDiagramVD42YOACBinding135.match,
                token:
                  this.terminals_[blockDiagramVD42YOACBinding140] ||
                  blockDiagramVD42YOACBinding140,
                line: blockDiagramVD42YOACBinding135.yylineno,
                loc: blockDiagramVD42YOACBinding138,
                expected: blockDiagramVD42YOACBinding149,
              });
            }
            if (
              blockDiagramVD42YOACBinding143[0] instanceof Array &&
              blockDiagramVD42YOACBinding143.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  blockDiagramVD42YOACBinding142 +
                  ", token: " +
                  blockDiagramVD42YOACBinding140,
              );
            switch (blockDiagramVD42YOACBinding143[0]) {
              case 1:
                blockDiagramVD42YOACBinding123.push(
                  blockDiagramVD42YOACBinding140,
                );
                blockDiagramVD42YOACBinding125.push(
                  blockDiagramVD42YOACBinding135.yytext,
                );
                blockDiagramVD42YOACBinding126.push(
                  blockDiagramVD42YOACBinding135.yylloc,
                );
                blockDiagramVD42YOACBinding123.push(
                  blockDiagramVD42YOACBinding143[1],
                );
                blockDiagramVD42YOACBinding140 = null;
                blockDiagramVD42YOACBinding141
                  ? ((blockDiagramVD42YOACBinding140 =
                      blockDiagramVD42YOACBinding141),
                    (blockDiagramVD42YOACBinding141 = null))
                  : ((blockDiagramVD42YOACBinding130 =
                      blockDiagramVD42YOACBinding135.yyleng),
                    (blockDiagramVD42YOACBinding128 =
                      blockDiagramVD42YOACBinding135.yytext),
                    (blockDiagramVD42YOACBinding129 =
                      blockDiagramVD42YOACBinding135.yylineno),
                    (blockDiagramVD42YOACBinding138 =
                      blockDiagramVD42YOACBinding135.yylloc),
                    blockDiagramVD42YOACBinding131 > 0 &&
                      blockDiagramVD42YOACBinding131--);
                break;
              case 2:
                if (
                  ((blockDiagramVD42YOACBinding147 =
                    this.productions_[blockDiagramVD42YOACBinding143[1]][1]),
                  (blockDiagramVD42YOACBinding145.$ =
                    blockDiagramVD42YOACBinding125[
                      blockDiagramVD42YOACBinding125.length -
                        blockDiagramVD42YOACBinding147
                    ]),
                  (blockDiagramVD42YOACBinding145._$ = {
                    first_line:
                      blockDiagramVD42YOACBinding126[
                        blockDiagramVD42YOACBinding126.length -
                          (blockDiagramVD42YOACBinding147 || 1)
                      ].first_line,
                    last_line:
                      blockDiagramVD42YOACBinding126[
                        blockDiagramVD42YOACBinding126.length - 1
                      ].last_line,
                    first_column:
                      blockDiagramVD42YOACBinding126[
                        blockDiagramVD42YOACBinding126.length -
                          (blockDiagramVD42YOACBinding147 || 1)
                      ].first_column,
                    last_column:
                      blockDiagramVD42YOACBinding126[
                        blockDiagramVD42YOACBinding126.length - 1
                      ].last_column,
                  }),
                  blockDiagramVD42YOACBinding139 &&
                    (blockDiagramVD42YOACBinding145._$.range = [
                      blockDiagramVD42YOACBinding126[
                        blockDiagramVD42YOACBinding126.length -
                          (blockDiagramVD42YOACBinding147 || 1)
                      ].range[0],
                      blockDiagramVD42YOACBinding126[
                        blockDiagramVD42YOACBinding126.length - 1
                      ].range[1],
                    ]),
                  (blockDiagramVD42YOACBinding144 = this.performAction.apply(
                    blockDiagramVD42YOACBinding145,
                    [
                      blockDiagramVD42YOACBinding128,
                      blockDiagramVD42YOACBinding130,
                      blockDiagramVD42YOACBinding129,
                      blockDiagramVD42YOACBinding136.yy,
                      blockDiagramVD42YOACBinding143[1],
                      blockDiagramVD42YOACBinding125,
                      blockDiagramVD42YOACBinding126,
                    ].concat(blockDiagramVD42YOACBinding134),
                  )),
                  blockDiagramVD42YOACBinding144 !== undefined)
                )
                  return blockDiagramVD42YOACBinding144;
                blockDiagramVD42YOACBinding147 &&
                  ((blockDiagramVD42YOACBinding123 =
                    blockDiagramVD42YOACBinding123.slice(
                      0,
                      -1 * blockDiagramVD42YOACBinding147 * 2,
                    )),
                  (blockDiagramVD42YOACBinding125 =
                    blockDiagramVD42YOACBinding125.slice(
                      0,
                      -1 * blockDiagramVD42YOACBinding147,
                    )),
                  (blockDiagramVD42YOACBinding126 =
                    blockDiagramVD42YOACBinding126.slice(
                      0,
                      -1 * blockDiagramVD42YOACBinding147,
                    )));
                blockDiagramVD42YOACBinding123.push(
                  this.productions_[blockDiagramVD42YOACBinding143[1]][0],
                );
                blockDiagramVD42YOACBinding125.push(
                  blockDiagramVD42YOACBinding145.$,
                );
                blockDiagramVD42YOACBinding126.push(
                  blockDiagramVD42YOACBinding145._$,
                );
                blockDiagramVD42YOACBinding148 =
                  blockDiagramVD42YOACBinding127[
                    blockDiagramVD42YOACBinding123[
                      blockDiagramVD42YOACBinding123.length - 2
                    ]
                  ][
                    blockDiagramVD42YOACBinding123[
                      blockDiagramVD42YOACBinding123.length - 1
                    ]
                  ];
                blockDiagramVD42YOACBinding123.push(
                  blockDiagramVD42YOACBinding148,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    blockDiagramVD42YOACBinding91.lexer = (function () {
      return {
        EOF: 1,
        parseError: chunkAGHRB4JFN(function (
          blockDiagramVD42YOACInput214,
          blockDiagramVD42YOACInput215,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              blockDiagramVD42YOACInput214,
              blockDiagramVD42YOACInput215,
            );
          else throw Error(blockDiagramVD42YOACInput214);
        }, "parseError"),
        setInput: chunkAGHRB4JFN(function (
          blockDiagramVD42YOACInput115,
          blockDiagramVD42YOACInput116,
        ) {
          return (
            (this.yy = blockDiagramVD42YOACInput116 || this.yy || {}),
            (this._input = blockDiagramVD42YOACInput115),
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
          var blockDiagramVD42YOACBinding365 = this._input[0];
          return (
            (this.yytext += blockDiagramVD42YOACBinding365),
            this.yyleng++,
            this.offset++,
            (this.match += blockDiagramVD42YOACBinding365),
            (this.matched += blockDiagramVD42YOACBinding365),
            blockDiagramVD42YOACBinding365.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            blockDiagramVD42YOACBinding365
          );
        }, "input"),
        unput: chunkAGHRB4JFN(function (blockDiagramVD42YOACInput69) {
          var blockDiagramVD42YOACBinding254 =
              blockDiagramVD42YOACInput69.length,
            blockDiagramVD42YOACBinding255 =
              blockDiagramVD42YOACInput69.split(/(?:\r\n?|\n)/g);
          this._input = blockDiagramVD42YOACInput69 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - blockDiagramVD42YOACBinding254,
          );
          this.offset -= blockDiagramVD42YOACBinding254;
          var blockDiagramVD42YOACBinding256 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          blockDiagramVD42YOACBinding255.length - 1 &&
            (this.yylineno -= blockDiagramVD42YOACBinding255.length - 1);
          var blockDiagramVD42YOACBinding257 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: blockDiagramVD42YOACBinding255
                ? (blockDiagramVD42YOACBinding255.length ===
                  blockDiagramVD42YOACBinding256.length
                    ? this.yylloc.first_column
                    : 0) +
                  blockDiagramVD42YOACBinding256[
                    blockDiagramVD42YOACBinding256.length -
                      blockDiagramVD42YOACBinding255.length
                  ].length -
                  blockDiagramVD42YOACBinding255[0].length
                : this.yylloc.first_column - blockDiagramVD42YOACBinding254,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                blockDiagramVD42YOACBinding257[0],
                blockDiagramVD42YOACBinding257[0] +
                  this.yyleng -
                  blockDiagramVD42YOACBinding254,
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
        less: chunkAGHRB4JFN(function (blockDiagramVD42YOACInput237) {
          this.unput(this.match.slice(blockDiagramVD42YOACInput237));
        }, "less"),
        pastInput: chunkAGHRB4JFN(function () {
          var blockDiagramVD42YOACBinding479 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (blockDiagramVD42YOACBinding479.length > 20 ? "..." : "") +
            blockDiagramVD42YOACBinding479.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: chunkAGHRB4JFN(function () {
          var blockDiagramVD42YOACBinding458 = this.match;
          return (
            blockDiagramVD42YOACBinding458.length < 20 &&
              (blockDiagramVD42YOACBinding458 += this._input.substr(
                0,
                20 - blockDiagramVD42YOACBinding458.length,
              )),
            (
              blockDiagramVD42YOACBinding458.substr(0, 20) +
              (blockDiagramVD42YOACBinding458.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: chunkAGHRB4JFN(function () {
          var blockDiagramVD42YOACBinding482 = this.pastInput(),
            blockDiagramVD42YOACBinding483 = Array(
              blockDiagramVD42YOACBinding482.length + 1,
            ).join("-");
          return (
            blockDiagramVD42YOACBinding482 +
            this.upcomingInput() +
            "\n" +
            blockDiagramVD42YOACBinding483 +
            "^"
          );
        }, "showPosition"),
        test_match: chunkAGHRB4JFN(function (
          blockDiagramVD42YOACInput28,
          blockDiagramVD42YOACInput29,
        ) {
          var blockDiagramVD42YOACBinding170,
            blockDiagramVD42YOACBinding171,
            blockDiagramVD42YOACBinding172;
          if (
            (this.options.backtrack_lexer &&
              ((blockDiagramVD42YOACBinding172 = {
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
                (blockDiagramVD42YOACBinding172.yylloc.range =
                  this.yylloc.range.slice(0))),
            (blockDiagramVD42YOACBinding171 =
              blockDiagramVD42YOACInput28[0].match(/(?:\r\n?|\n).*/g)),
            blockDiagramVD42YOACBinding171 &&
              (this.yylineno += blockDiagramVD42YOACBinding171.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: blockDiagramVD42YOACBinding171
                ? blockDiagramVD42YOACBinding171[
                    blockDiagramVD42YOACBinding171.length - 1
                  ].length -
                  blockDiagramVD42YOACBinding171[
                    blockDiagramVD42YOACBinding171.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  blockDiagramVD42YOACInput28[0].length,
            }),
            (this.yytext += blockDiagramVD42YOACInput28[0]),
            (this.match += blockDiagramVD42YOACInput28[0]),
            (this.matches = blockDiagramVD42YOACInput28),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              blockDiagramVD42YOACInput28[0].length,
            )),
            (this.matched += blockDiagramVD42YOACInput28[0]),
            (blockDiagramVD42YOACBinding170 = this.performAction.call(
              this,
              this.yy,
              this,
              blockDiagramVD42YOACInput29,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            blockDiagramVD42YOACBinding170)
          )
            return blockDiagramVD42YOACBinding170;
          if (this._backtrack) {
            for (var blockDiagramVD42YOACBinding173 in blockDiagramVD42YOACBinding172)
              this[blockDiagramVD42YOACBinding173] =
                blockDiagramVD42YOACBinding172[blockDiagramVD42YOACBinding173];
            return false;
          }
          return false;
        }, "test_match"),
        next: chunkAGHRB4JFN(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var blockDiagramVD42YOACBinding247,
            blockDiagramVD42YOACBinding248,
            blockDiagramVD42YOACBinding249,
            blockDiagramVD42YOACBinding250;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var blockDiagramVD42YOACBinding251 = this._currentRules(),
              blockDiagramVD42YOACBinding252 = 0;
            blockDiagramVD42YOACBinding252 <
            blockDiagramVD42YOACBinding251.length;
            blockDiagramVD42YOACBinding252++
          )
            if (
              ((blockDiagramVD42YOACBinding249 = this._input.match(
                this.rules[
                  blockDiagramVD42YOACBinding251[blockDiagramVD42YOACBinding252]
                ],
              )),
              blockDiagramVD42YOACBinding249 &&
                (!blockDiagramVD42YOACBinding248 ||
                  blockDiagramVD42YOACBinding249[0].length >
                    blockDiagramVD42YOACBinding248[0].length))
            ) {
              if (
                ((blockDiagramVD42YOACBinding248 =
                  blockDiagramVD42YOACBinding249),
                (blockDiagramVD42YOACBinding250 =
                  blockDiagramVD42YOACBinding252),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((blockDiagramVD42YOACBinding247 = this.test_match(
                    blockDiagramVD42YOACBinding249,
                    blockDiagramVD42YOACBinding251[
                      blockDiagramVD42YOACBinding252
                    ],
                  )),
                  blockDiagramVD42YOACBinding247 !== false)
                )
                  return blockDiagramVD42YOACBinding247;
                if (this._backtrack) {
                  blockDiagramVD42YOACBinding248 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return blockDiagramVD42YOACBinding248
            ? ((blockDiagramVD42YOACBinding247 = this.test_match(
                blockDiagramVD42YOACBinding248,
                blockDiagramVD42YOACBinding251[blockDiagramVD42YOACBinding250],
              )),
              blockDiagramVD42YOACBinding247 === false
                ? false
                : blockDiagramVD42YOACBinding247)
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
        begin: chunkAGHRB4JFN(function (blockDiagramVD42YOACInput238) {
          this.conditionStack.push(blockDiagramVD42YOACInput238);
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
        topState: chunkAGHRB4JFN(function (blockDiagramVD42YOACInput198) {
          return (
            (blockDiagramVD42YOACInput198 =
              this.conditionStack.length -
              1 -
              Math.abs(blockDiagramVD42YOACInput198 || 0)),
            blockDiagramVD42YOACInput198 >= 0
              ? this.conditionStack[blockDiagramVD42YOACInput198]
              : "INITIAL"
          );
        }, "topState"),
        pushState: chunkAGHRB4JFN(function (blockDiagramVD42YOACInput269) {
          this.begin(blockDiagramVD42YOACInput269);
        }, "pushState"),
        stateStackSize: chunkAGHRB4JFN(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {},
        performAction: chunkAGHRB4JFN(function (
          blockDiagramVD42YOACInput1,
          blockDiagramVD42YOACInput2,
          blockDiagramVD42YOACInput3,
          blockDiagramVD42YOACInput4,
        ) {
          switch (blockDiagramVD42YOACInput3) {
            case 0:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Found block-beta"),
                10
              );
            case 1:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Found id-block"),
                29
              );
            case 2:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Found block"),
                10
              );
            case 3:
              blockDiagramVD42YOACInput1
                .getLogger()
                .debug(".", blockDiagramVD42YOACInput2.yytext);
              break;
            case 4:
              blockDiagramVD42YOACInput1
                .getLogger()
                .debug("_", blockDiagramVD42YOACInput2.yytext);
              break;
            case 5:
              return 5;
            case 6:
              return ((blockDiagramVD42YOACInput2.yytext = -1), 28);
            case 7:
              return (
                (blockDiagramVD42YOACInput2.yytext =
                  blockDiagramVD42YOACInput2.yytext.replace(/columns\s+/, "")),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("COLUMNS (LEX)", blockDiagramVD42YOACInput2.yytext),
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
              blockDiagramVD42YOACInput1
                .getLogger()
                .debug("LEX: POPPING STR:", blockDiagramVD42YOACInput2.yytext);
              this.popState();
              break;
            case 13:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("LEX: STR end:", blockDiagramVD42YOACInput2.yytext),
                "STR"
              );
            case 14:
              return (
                (blockDiagramVD42YOACInput2.yytext =
                  blockDiagramVD42YOACInput2.yytext.replace(/space\:/, "")),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("SPACE NUM (LEX)", blockDiagramVD42YOACInput2.yytext),
                21
              );
            case 15:
              return (
                (blockDiagramVD42YOACInput2.yytext = "1"),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("COLUMNS (LEX)", blockDiagramVD42YOACInput2.yytext),
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
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: (("),
                "NODE_DEND"
              );
            case 38:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: (("),
                "NODE_DEND"
              );
            case 39:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: ))"),
                "NODE_DEND"
              );
            case 40:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: (("),
                "NODE_DEND"
              );
            case 41:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: (("),
                "NODE_DEND"
              );
            case 42:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: (-"),
                "NODE_DEND"
              );
            case 43:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: -)"),
                "NODE_DEND"
              );
            case 44:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: (("),
                "NODE_DEND"
              );
            case 45:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: ]]"),
                "NODE_DEND"
              );
            case 46:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: ("),
                "NODE_DEND"
              );
            case 47:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: ])"),
                "NODE_DEND"
              );
            case 48:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: /]"),
                "NODE_DEND"
              );
            case 49:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: /]"),
                "NODE_DEND"
              );
            case 50:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: )]"),
                "NODE_DEND"
              );
            case 51:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: )"),
                "NODE_DEND"
              );
            case 52:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: ]>"),
                "NODE_DEND"
              );
            case 53:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: ]"),
                "NODE_DEND"
              );
            case 54:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Lexa: -)"),
                this.pushState("NODE"),
                35
              );
            case 55:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Lexa: (-"),
                this.pushState("NODE"),
                35
              );
            case 56:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Lexa: ))"),
                this.pushState("NODE"),
                35
              );
            case 57:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Lexa: )"),
                this.pushState("NODE"),
                35
              );
            case 58:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Lex: ((("),
                this.pushState("NODE"),
                35
              );
            case 59:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Lexa: )"),
                this.pushState("NODE"),
                35
              );
            case 60:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Lexa: )"),
                this.pushState("NODE"),
                35
              );
            case 61:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Lexa: )"),
                this.pushState("NODE"),
                35
              );
            case 62:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Lexc: >"),
                this.pushState("NODE"),
                35
              );
            case 63:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Lexa: (["),
                this.pushState("NODE"),
                35
              );
            case 64:
              return (
                blockDiagramVD42YOACInput1.getLogger().debug("Lexa: )"),
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
                blockDiagramVD42YOACInput1.getLogger().debug("Lexa: ["),
                this.pushState("NODE"),
                35
              );
            case 73:
              return (
                this.pushState("BLOCK_ARROW"),
                blockDiagramVD42YOACInput1.getLogger().debug("LEX ARR START"),
                37
              );
            case 74:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: NODE_ID", blockDiagramVD42YOACInput2.yytext),
                31
              );
            case 75:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: EOF", blockDiagramVD42YOACInput2.yytext),
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
              blockDiagramVD42YOACInput1
                .getLogger()
                .debug("Lex: Starting string");
              this.pushState("string");
              break;
            case 81:
              blockDiagramVD42YOACInput1
                .getLogger()
                .debug("LEX ARR: Starting string");
              this.pushState("string");
              break;
            case 82:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("LEX: NODE_DESCR:", blockDiagramVD42YOACInput2.yytext),
                "NODE_DESCR"
              );
            case 83:
              blockDiagramVD42YOACInput1.getLogger().debug("LEX POPPING");
              this.popState();
              break;
            case 84:
              blockDiagramVD42YOACInput1.getLogger().debug("Lex: =>BAE");
              this.pushState("ARROW_DIR");
              break;
            case 85:
              return (
                (blockDiagramVD42YOACInput2.yytext =
                  blockDiagramVD42YOACInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug(
                    "Lex (right): dir:",
                    blockDiagramVD42YOACInput2.yytext,
                  ),
                "DIR"
              );
            case 86:
              return (
                (blockDiagramVD42YOACInput2.yytext =
                  blockDiagramVD42YOACInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex (left):", blockDiagramVD42YOACInput2.yytext),
                "DIR"
              );
            case 87:
              return (
                (blockDiagramVD42YOACInput2.yytext =
                  blockDiagramVD42YOACInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex (x):", blockDiagramVD42YOACInput2.yytext),
                "DIR"
              );
            case 88:
              return (
                (blockDiagramVD42YOACInput2.yytext =
                  blockDiagramVD42YOACInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex (y):", blockDiagramVD42YOACInput2.yytext),
                "DIR"
              );
            case 89:
              return (
                (blockDiagramVD42YOACInput2.yytext =
                  blockDiagramVD42YOACInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex (up):", blockDiagramVD42YOACInput2.yytext),
                "DIR"
              );
            case 90:
              return (
                (blockDiagramVD42YOACInput2.yytext =
                  blockDiagramVD42YOACInput2.yytext.replace(/^,\s*/, "")),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex (down):", blockDiagramVD42YOACInput2.yytext),
                "DIR"
              );
            case 91:
              return (
                (blockDiagramVD42YOACInput2.yytext = "]>"),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug(
                    "Lex (ARROW_DIR end):",
                    blockDiagramVD42YOACInput2.yytext,
                  ),
                this.popState(),
                this.popState(),
                "BLOCK_ARROW_END"
              );
            case 92:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug(
                    "Lex: LINK",
                    "#" + blockDiagramVD42YOACInput2.yytext + "#",
                  ),
                15
              );
            case 93:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: LINK", blockDiagramVD42YOACInput2.yytext),
                15
              );
            case 94:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: LINK", blockDiagramVD42YOACInput2.yytext),
                15
              );
            case 95:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: LINK", blockDiagramVD42YOACInput2.yytext),
                15
              );
            case 96:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: START_LINK", blockDiagramVD42YOACInput2.yytext),
                this.pushState("LLABEL"),
                16
              );
            case 97:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: START_LINK", blockDiagramVD42YOACInput2.yytext),
                this.pushState("LLABEL"),
                16
              );
            case 98:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: START_LINK", blockDiagramVD42YOACInput2.yytext),
                this.pushState("LLABEL"),
                16
              );
            case 99:
              this.pushState("md_string");
              break;
            case 100:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: Starting string"),
                this.pushState("string"),
                "LINK_LABEL"
              );
            case 101:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug(
                    "Lex: LINK",
                    "#" + blockDiagramVD42YOACInput2.yytext + "#",
                  ),
                15
              );
            case 102:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: LINK", blockDiagramVD42YOACInput2.yytext),
                15
              );
            case 103:
              return (
                this.popState(),
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: LINK", blockDiagramVD42YOACInput2.yytext),
                15
              );
            case 104:
              return (
                blockDiagramVD42YOACInput1
                  .getLogger()
                  .debug("Lex: COLON", blockDiagramVD42YOACInput2.yytext),
                (blockDiagramVD42YOACInput2.yytext =
                  blockDiagramVD42YOACInput2.yytext.slice(1)),
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
    function blockDiagramVD42YOACHelper25() {
      this.yy = {};
    }
    return (
      chunkAGHRB4JFN(blockDiagramVD42YOACHelper25, "Parser"),
      (blockDiagramVD42YOACHelper25.prototype = blockDiagramVD42YOACBinding91),
      (blockDiagramVD42YOACBinding91.Parser = blockDiagramVD42YOACHelper25),
      new blockDiagramVD42YOACHelper25()
    );
  })();
  blockDiagramVD42YOACBinding1.parser = blockDiagramVD42YOACBinding1;
  blockDiagramVD42YOACBinding2 = blockDiagramVD42YOACBinding1;
  blockDiagramVD42YOACBinding3 = new Map();
  blockDiagramVD42YOACBinding4 = [];
  blockDiagramVD42YOACBinding5 = new Map();
  blockDiagramVD42YOACBinding6 = "color";
  blockDiagramVD42YOACBinding7 = "fill";
  blockDiagramVD42YOACBinding8 = "bgFill";
  blockDiagramVD42YOACBinding9 = ",";
  blockDiagramVD42YOACBinding10 = chunkABZYJK2DB();
  blockDiagramVD42YOACBinding11 = new Map();
  blockDiagramVD42YOACBinding12 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput282) =>
      chunkABZYJK2DS.sanitizeText(
        blockDiagramVD42YOACInput282,
        blockDiagramVD42YOACBinding10,
      ),
    "sanitizeText",
  );
  blockDiagramVD42YOACBinding13 = chunkAGHRB4JFN(function (
    blockDiagramVD42YOACInput166,
    blockDiagramVD42YOACInput167 = "",
  ) {
    let blockDiagramVD42YOACBinding440 = blockDiagramVD42YOACBinding11.get(
      blockDiagramVD42YOACInput166,
    );
    blockDiagramVD42YOACBinding440 ||
      ((blockDiagramVD42YOACBinding440 = {
        id: blockDiagramVD42YOACInput166,
        styles: [],
        textStyles: [],
      }),
      blockDiagramVD42YOACBinding11.set(
        blockDiagramVD42YOACInput166,
        blockDiagramVD42YOACBinding440,
      ));
    blockDiagramVD42YOACInput167
      ?.split(blockDiagramVD42YOACBinding9)
      .forEach((blockDiagramVD42YOACInput193) => {
        let blockDiagramVD42YOACBinding489 = blockDiagramVD42YOACInput193
          .replace(/([^;]*);/, "$1")
          .trim();
        if (
          RegExp(blockDiagramVD42YOACBinding6).exec(
            blockDiagramVD42YOACInput193,
          )
        ) {
          let blockDiagramVD42YOACBinding534 = blockDiagramVD42YOACBinding489
            .replace(blockDiagramVD42YOACBinding7, blockDiagramVD42YOACBinding8)
            .replace(
              blockDiagramVD42YOACBinding6,
              blockDiagramVD42YOACBinding7,
            );
          blockDiagramVD42YOACBinding440.textStyles.push(
            blockDiagramVD42YOACBinding534,
          );
        }
        blockDiagramVD42YOACBinding440.styles.push(
          blockDiagramVD42YOACBinding489,
        );
      });
  }, "addStyleClass");
  blockDiagramVD42YOACBinding14 = chunkAGHRB4JFN(function (
    blockDiagramVD42YOACInput227,
    blockDiagramVD42YOACInput228 = "",
  ) {
    let blockDiagramVD42YOACBinding535 = blockDiagramVD42YOACBinding3.get(
      blockDiagramVD42YOACInput227,
    );
    blockDiagramVD42YOACInput228 != null &&
      (blockDiagramVD42YOACBinding535.styles =
        blockDiagramVD42YOACInput228.split(blockDiagramVD42YOACBinding9));
  }, "addStyle2Node");
  blockDiagramVD42YOACBinding15 = chunkAGHRB4JFN(function (
    blockDiagramVD42YOACInput182,
    blockDiagramVD42YOACInput183,
  ) {
    blockDiagramVD42YOACInput182.split(",").forEach(function (item) {
      let blockDiagramVD42YOACBinding490 =
        blockDiagramVD42YOACBinding3.get(item);
      if (blockDiagramVD42YOACBinding490 === undefined) {
        let blockDiagramVD42YOACBinding532 = item.trim();
        blockDiagramVD42YOACBinding490 = {
          id: blockDiagramVD42YOACBinding532,
          type: "na",
          children: [],
        };
        blockDiagramVD42YOACBinding3.set(
          blockDiagramVD42YOACBinding532,
          blockDiagramVD42YOACBinding490,
        );
      }
      blockDiagramVD42YOACBinding490.classes ||= [];
      blockDiagramVD42YOACBinding490.classes.push(blockDiagramVD42YOACInput183);
    });
  }, "setCssClass");
  blockDiagramVD42YOACBinding16 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput47, blockDiagramVD42YOACInput48) => {
      let blockDiagramVD42YOACBinding221 = blockDiagramVD42YOACInput47.flat(),
        blockDiagramVD42YOACBinding222 = [],
        blockDiagramVD42YOACBinding223 =
          blockDiagramVD42YOACBinding221.find(
            (item) => item?.type === "column-setting",
          )?.columns ?? -1;
      for (let blockDiagramVD42YOACBinding224 of blockDiagramVD42YOACBinding221) {
        if (
          (typeof blockDiagramVD42YOACBinding223 == "number" &&
            blockDiagramVD42YOACBinding223 > 0 &&
            blockDiagramVD42YOACBinding224.type !== "column-setting" &&
            typeof blockDiagramVD42YOACBinding224.widthInColumns == "number" &&
            blockDiagramVD42YOACBinding224.widthInColumns >
              blockDiagramVD42YOACBinding223 &&
            chunkAGHRB4JFI.warn(
              `Block ${blockDiagramVD42YOACBinding224.id} width ${blockDiagramVD42YOACBinding224.widthInColumns} exceeds configured column width ${blockDiagramVD42YOACBinding223}`,
            ),
          (blockDiagramVD42YOACBinding224.label &&=
            blockDiagramVD42YOACBinding12(
              blockDiagramVD42YOACBinding224.label,
            )),
          blockDiagramVD42YOACBinding224.type === "classDef")
        ) {
          blockDiagramVD42YOACBinding13(
            blockDiagramVD42YOACBinding224.id,
            blockDiagramVD42YOACBinding224.css,
          );
          continue;
        }
        if (blockDiagramVD42YOACBinding224.type === "applyClass") {
          blockDiagramVD42YOACBinding15(
            blockDiagramVD42YOACBinding224.id,
            blockDiagramVD42YOACBinding224?.styleClass ?? "",
          );
          continue;
        }
        if (blockDiagramVD42YOACBinding224.type === "applyStyles") {
          blockDiagramVD42YOACBinding224?.stylesStr &&
            blockDiagramVD42YOACBinding14(
              blockDiagramVD42YOACBinding224.id,
              blockDiagramVD42YOACBinding224?.stylesStr,
            );
          continue;
        }
        if (blockDiagramVD42YOACBinding224.type === "column-setting")
          blockDiagramVD42YOACInput48.columns =
            blockDiagramVD42YOACBinding224.columns ?? -1;
        else if (blockDiagramVD42YOACBinding224.type === "edge") {
          let blockDiagramVD42YOACBinding530 =
            (blockDiagramVD42YOACBinding5.get(
              blockDiagramVD42YOACBinding224.id,
            ) ?? 0) + 1;
          blockDiagramVD42YOACBinding5.set(
            blockDiagramVD42YOACBinding224.id,
            blockDiagramVD42YOACBinding530,
          );
          blockDiagramVD42YOACBinding224.id =
            blockDiagramVD42YOACBinding530 +
            "-" +
            blockDiagramVD42YOACBinding224.id;
          blockDiagramVD42YOACBinding4.push(blockDiagramVD42YOACBinding224);
        } else {
          blockDiagramVD42YOACBinding224.label ||
            (blockDiagramVD42YOACBinding224.type === "composite"
              ? (blockDiagramVD42YOACBinding224.label = "")
              : (blockDiagramVD42YOACBinding224.label =
                  blockDiagramVD42YOACBinding224.id));
          let blockDiagramVD42YOACBinding339 = blockDiagramVD42YOACBinding3.get(
            blockDiagramVD42YOACBinding224.id,
          );
          if (
            (blockDiagramVD42YOACBinding339 === undefined
              ? blockDiagramVD42YOACBinding3.set(
                  blockDiagramVD42YOACBinding224.id,
                  blockDiagramVD42YOACBinding224,
                )
              : (blockDiagramVD42YOACBinding224.type !== "na" &&
                  (blockDiagramVD42YOACBinding339.type =
                    blockDiagramVD42YOACBinding224.type),
                blockDiagramVD42YOACBinding224.label !==
                  blockDiagramVD42YOACBinding224.id &&
                  (blockDiagramVD42YOACBinding339.label =
                    blockDiagramVD42YOACBinding224.label)),
            blockDiagramVD42YOACBinding224.children &&
              blockDiagramVD42YOACBinding16(
                blockDiagramVD42YOACBinding224.children,
                blockDiagramVD42YOACBinding224,
              ),
            blockDiagramVD42YOACBinding224.type === "space")
          ) {
            let blockDiagramVD42YOACBinding501 =
              blockDiagramVD42YOACBinding224.width ?? 1;
            for (
              let blockDiagramVD42YOACBinding529 = 0;
              blockDiagramVD42YOACBinding529 < blockDiagramVD42YOACBinding501;
              blockDiagramVD42YOACBinding529++
            ) {
              let blockDiagramVD42YOACBinding531 = lodashAt(
                blockDiagramVD42YOACBinding224,
              );
              blockDiagramVD42YOACBinding531.id =
                blockDiagramVD42YOACBinding531.id +
                "-" +
                blockDiagramVD42YOACBinding529;
              blockDiagramVD42YOACBinding3.set(
                blockDiagramVD42YOACBinding531.id,
                blockDiagramVD42YOACBinding531,
              );
              blockDiagramVD42YOACBinding222.push(
                blockDiagramVD42YOACBinding531,
              );
            }
          } else
            blockDiagramVD42YOACBinding339 === undefined &&
              blockDiagramVD42YOACBinding222.push(
                blockDiagramVD42YOACBinding224,
              );
        }
      }
      blockDiagramVD42YOACInput48.children = blockDiagramVD42YOACBinding222;
    },
    "populateBlockDatabase",
  );
  blockDiagramVD42YOACBinding17 = [];
  blockDiagramVD42YOACBinding18 = {
    id: "root",
    type: "composite",
    children: [],
    columns: -1,
  };
  blockDiagramVD42YOACBinding19 = chunkAGHRB4JFN(() => {
    chunkAGHRB4JFI.debug("Clear called");
    chunkABZYJK2DA();
    blockDiagramVD42YOACBinding18 = {
      id: "root",
      type: "composite",
      children: [],
      columns: -1,
    };
    blockDiagramVD42YOACBinding3 = new Map([
      ["root", blockDiagramVD42YOACBinding18],
    ]);
    blockDiagramVD42YOACBinding17 = [];
    blockDiagramVD42YOACBinding11 = new Map();
    blockDiagramVD42YOACBinding4 = [];
    blockDiagramVD42YOACBinding5 = new Map();
  }, "clear");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper1, "typeStr2Type");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper2, "edgeTypeStr2Type");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper3, "edgeStrToEdgeData");
  blockDiagramVD42YOACBinding20 = 0;
  blockDiagramVD42YOACBinding21 = {
    getConfig: chunkAGHRB4JFN(() => chunkABZYJK2DY().block, "getConfig"),
    typeStr2Type: blockDiagramVD42YOACHelper1,
    edgeTypeStr2Type: blockDiagramVD42YOACHelper2,
    edgeStrToEdgeData: blockDiagramVD42YOACHelper3,
    getLogger: chunkAGHRB4JFN(() => chunkAGHRB4JFI, "getLogger"),
    getBlocksFlat: chunkAGHRB4JFN(
      () => [...blockDiagramVD42YOACBinding3.values()],
      "getBlocksFlat",
    ),
    getBlocks: chunkAGHRB4JFN(
      () => blockDiagramVD42YOACBinding17 || [],
      "getBlocks",
    ),
    getEdges: chunkAGHRB4JFN(() => blockDiagramVD42YOACBinding4, "getEdges"),
    setHierarchy: chunkAGHRB4JFN((blockDiagramVD42YOACInput236) => {
      blockDiagramVD42YOACBinding18.children = blockDiagramVD42YOACInput236;
      blockDiagramVD42YOACBinding16(
        blockDiagramVD42YOACInput236,
        blockDiagramVD42YOACBinding18,
      );
      blockDiagramVD42YOACBinding17 = blockDiagramVD42YOACBinding18.children;
    }, "setHierarchy"),
    getBlock: chunkAGHRB4JFN(
      (blockDiagramVD42YOACInput284) =>
        blockDiagramVD42YOACBinding3.get(blockDiagramVD42YOACInput284),
      "getBlock",
    ),
    setBlock: chunkAGHRB4JFN((blockDiagramVD42YOACInput279) => {
      blockDiagramVD42YOACBinding3.set(
        blockDiagramVD42YOACInput279.id,
        blockDiagramVD42YOACInput279,
      );
    }, "setBlock"),
    getColumns: chunkAGHRB4JFN((blockDiagramVD42YOACInput195) => {
      let blockDiagramVD42YOACBinding502 = blockDiagramVD42YOACBinding3.get(
        blockDiagramVD42YOACInput195,
      );
      return blockDiagramVD42YOACBinding502
        ? blockDiagramVD42YOACBinding502.columns
          ? blockDiagramVD42YOACBinding502.columns
          : blockDiagramVD42YOACBinding502.children
            ? blockDiagramVD42YOACBinding502.children.length
            : -1
        : -1;
    }, "getColumns"),
    getClasses: chunkAGHRB4JFN(function () {
      return blockDiagramVD42YOACBinding11;
    }, "getClasses"),
    clear: blockDiagramVD42YOACBinding19,
    generateId: chunkAGHRB4JFN(
      () => (
        blockDiagramVD42YOACBinding20++,
        "id-" +
          Math.random().toString(36).substr(2, 12) +
          "-" +
          blockDiagramVD42YOACBinding20
      ),
      "generateId",
    ),
  };
  blockDiagramVD42YOACBinding22 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput230, blockDiagramVD42YOACInput231) => {
      let blockDiagramVD42YOACBinding537 = distM;
      return distUnderscore(
        blockDiagramVD42YOACBinding537(blockDiagramVD42YOACInput230, "r"),
        blockDiagramVD42YOACBinding537(blockDiagramVD42YOACInput230, "g"),
        blockDiagramVD42YOACBinding537(blockDiagramVD42YOACInput230, "b"),
        blockDiagramVD42YOACInput231,
      );
    },
    "fade",
  );
  blockDiagramVD42YOACBinding23 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput32) => `.label {
    font-family: ${blockDiagramVD42YOACInput32.fontFamily};
    color: ${blockDiagramVD42YOACInput32.nodeTextColor || blockDiagramVD42YOACInput32.textColor};
  }
  .cluster-label text {
    fill: ${blockDiagramVD42YOACInput32.titleColor};
  }
  .cluster-label span,p {
    color: ${blockDiagramVD42YOACInput32.titleColor};
  }



  .label text,span,p {
    fill: ${blockDiagramVD42YOACInput32.nodeTextColor || blockDiagramVD42YOACInput32.textColor};
    color: ${blockDiagramVD42YOACInput32.nodeTextColor || blockDiagramVD42YOACInput32.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${blockDiagramVD42YOACInput32.mainBkg};
    stroke: ${blockDiagramVD42YOACInput32.nodeBorder};
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
    fill: ${blockDiagramVD42YOACInput32.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${blockDiagramVD42YOACInput32.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${blockDiagramVD42YOACInput32.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${blockDiagramVD42YOACInput32.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${blockDiagramVD42YOACInput32.edgeLabelBackground};
      fill: ${blockDiagramVD42YOACInput32.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${blockDiagramVD42YOACBinding22(blockDiagramVD42YOACInput32.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${blockDiagramVD42YOACBinding22(blockDiagramVD42YOACInput32.mainBkg, 0.5)};
    fill: ${blockDiagramVD42YOACBinding22(blockDiagramVD42YOACInput32.clusterBkg, 0.5)};
    stroke: ${blockDiagramVD42YOACBinding22(blockDiagramVD42YOACInput32.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${blockDiagramVD42YOACInput32.titleColor};
  }

  .cluster span,p {
    color: ${blockDiagramVD42YOACInput32.titleColor};
  }
  /* .cluster div {
    color: ${blockDiagramVD42YOACInput32.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${blockDiagramVD42YOACInput32.fontFamily};
    font-size: 12px;
    background: ${blockDiagramVD42YOACInput32.tertiaryColor};
    border: 1px solid ${blockDiagramVD42YOACInput32.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${blockDiagramVD42YOACInput32.textColor};
  }
  ${chunkFMBD7UC4T()}
`,
    "getStyles",
  );
  blockDiagramVD42YOACBinding24 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACInput232,
      blockDiagramVD42YOACInput233,
      blockDiagramVD42YOACInput234,
      blockDiagramVD42YOACInput235,
    ) => {
      blockDiagramVD42YOACInput233.forEach((item) => {
        blockDiagramVD42YOACBinding25[item](
          blockDiagramVD42YOACInput232,
          blockDiagramVD42YOACInput234,
          blockDiagramVD42YOACInput235,
        );
      });
    },
    "insertMarkers",
  );
  blockDiagramVD42YOACBinding25 = {
    extension: chunkAGHRB4JFN(
      (
        blockDiagramVD42YOACInput86,
        blockDiagramVD42YOACInput87,
        blockDiagramVD42YOACInput88,
      ) => {
        chunkAGHRB4JFI.trace(
          "Making markers for ",
          blockDiagramVD42YOACInput88,
        );
        blockDiagramVD42YOACInput86
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput88 +
              "_" +
              blockDiagramVD42YOACInput87 +
              "-extensionStart",
          )
          .attr("class", "marker extension " + blockDiagramVD42YOACInput87)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,7 L18,13 V 1 Z");
        blockDiagramVD42YOACInput86
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput88 +
              "_" +
              blockDiagramVD42YOACInput87 +
              "-extensionEnd",
          )
          .attr("class", "marker extension " + blockDiagramVD42YOACInput87)
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
        blockDiagramVD42YOACInput93,
        blockDiagramVD42YOACInput94,
        blockDiagramVD42YOACInput95,
      ) => {
        blockDiagramVD42YOACInput93
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput95 +
              "_" +
              blockDiagramVD42YOACInput94 +
              "-compositionStart",
          )
          .attr("class", "marker composition " + blockDiagramVD42YOACInput94)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        blockDiagramVD42YOACInput93
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput95 +
              "_" +
              blockDiagramVD42YOACInput94 +
              "-compositionEnd",
          )
          .attr("class", "marker composition " + blockDiagramVD42YOACInput94)
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
        blockDiagramVD42YOACInput96,
        blockDiagramVD42YOACInput97,
        blockDiagramVD42YOACInput98,
      ) => {
        blockDiagramVD42YOACInput96
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput98 +
              "_" +
              blockDiagramVD42YOACInput97 +
              "-aggregationStart",
          )
          .attr("class", "marker aggregation " + blockDiagramVD42YOACInput97)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        blockDiagramVD42YOACInput96
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput98 +
              "_" +
              blockDiagramVD42YOACInput97 +
              "-aggregationEnd",
          )
          .attr("class", "marker aggregation " + blockDiagramVD42YOACInput97)
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
        blockDiagramVD42YOACInput99,
        blockDiagramVD42YOACInput100,
        blockDiagramVD42YOACInput101,
      ) => {
        blockDiagramVD42YOACInput99
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput101 +
              "_" +
              blockDiagramVD42YOACInput100 +
              "-dependencyStart",
          )
          .attr("class", "marker dependency " + blockDiagramVD42YOACInput100)
          .attr("refX", 6)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        blockDiagramVD42YOACInput99
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput101 +
              "_" +
              blockDiagramVD42YOACInput100 +
              "-dependencyEnd",
          )
          .attr("class", "marker dependency " + blockDiagramVD42YOACInput100)
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
        blockDiagramVD42YOACInput81,
        blockDiagramVD42YOACInput82,
        blockDiagramVD42YOACInput83,
      ) => {
        blockDiagramVD42YOACInput81
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput83 +
              "_" +
              blockDiagramVD42YOACInput82 +
              "-lollipopStart",
          )
          .attr("class", "marker lollipop " + blockDiagramVD42YOACInput82)
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
        blockDiagramVD42YOACInput81
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput83 +
              "_" +
              blockDiagramVD42YOACInput82 +
              "-lollipopEnd",
          )
          .attr("class", "marker lollipop " + blockDiagramVD42YOACInput82)
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
        blockDiagramVD42YOACInput70,
        blockDiagramVD42YOACInput71,
        blockDiagramVD42YOACInput72,
      ) => {
        blockDiagramVD42YOACInput70
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput72 +
              "_" +
              blockDiagramVD42YOACInput71 +
              "-pointEnd",
          )
          .attr("class", "marker " + blockDiagramVD42YOACInput71)
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
        blockDiagramVD42YOACInput70
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput72 +
              "_" +
              blockDiagramVD42YOACInput71 +
              "-pointStart",
          )
          .attr("class", "marker " + blockDiagramVD42YOACInput71)
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
        blockDiagramVD42YOACInput63,
        blockDiagramVD42YOACInput64,
        blockDiagramVD42YOACInput65,
      ) => {
        blockDiagramVD42YOACInput63
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput65 +
              "_" +
              blockDiagramVD42YOACInput64 +
              "-circleEnd",
          )
          .attr("class", "marker " + blockDiagramVD42YOACInput64)
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
        blockDiagramVD42YOACInput63
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput65 +
              "_" +
              blockDiagramVD42YOACInput64 +
              "-circleStart",
          )
          .attr("class", "marker " + blockDiagramVD42YOACInput64)
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
        blockDiagramVD42YOACInput66,
        blockDiagramVD42YOACInput67,
        blockDiagramVD42YOACInput68,
      ) => {
        blockDiagramVD42YOACInput66
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput68 +
              "_" +
              blockDiagramVD42YOACInput67 +
              "-crossEnd",
          )
          .attr("class", "marker cross " + blockDiagramVD42YOACInput67)
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
        blockDiagramVD42YOACInput66
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput68 +
              "_" +
              blockDiagramVD42YOACInput67 +
              "-crossStart",
          )
          .attr("class", "marker cross " + blockDiagramVD42YOACInput67)
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
        blockDiagramVD42YOACInput163,
        blockDiagramVD42YOACInput164,
        blockDiagramVD42YOACInput165,
      ) => {
        blockDiagramVD42YOACInput163
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACInput165 +
              "_" +
              blockDiagramVD42YOACInput164 +
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
  blockDiagramVD42YOACBinding26 = blockDiagramVD42YOACBinding24;
  blockDiagramVD42YOACBinding27 = chunkABZYJK2DB()?.block?.padding ?? 8;
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper4, "calculateBlockPosition");
  blockDiagramVD42YOACBinding28 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput127) => {
      let blockDiagramVD42YOACBinding342 = 0,
        blockDiagramVD42YOACBinding343 = 0;
      for (let blockDiagramVD42YOACBinding378 of blockDiagramVD42YOACInput127.children) {
        let { width, height, x, y } = blockDiagramVD42YOACBinding378.size ?? {
          width: 0,
          height: 0,
          x: 0,
          y: 0,
        };
        chunkAGHRB4JFI.debug(
          "getMaxChildSize abc95 child:",
          blockDiagramVD42YOACBinding378.id,
          "width:",
          width,
          "height:",
          height,
          "x:",
          x,
          "y:",
          y,
          blockDiagramVD42YOACBinding378.type,
        );
        blockDiagramVD42YOACBinding378.type !== "space" &&
          (width > blockDiagramVD42YOACBinding342 &&
            (blockDiagramVD42YOACBinding342 =
              width / (blockDiagramVD42YOACInput127.widthInColumns ?? 1)),
          height > blockDiagramVD42YOACBinding343 &&
            (blockDiagramVD42YOACBinding343 = height));
      }
      return {
        width: blockDiagramVD42YOACBinding342,
        height: blockDiagramVD42YOACBinding343,
      };
    },
    "getMaxChildSize",
  );
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper5, "setBlockSizes");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper6, "layoutBlocks");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper7, "findBounds");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper8, "layout");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper9, "applyStyle");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper10, "addHtmlLabel");
  blockDiagramVD42YOACBinding29 = chunkAGHRB4JFN(
    async (
      blockDiagramVD42YOACInput59,
      blockDiagramVD42YOACInput60,
      blockDiagramVD42YOACInput61,
      blockDiagramVD42YOACInput62,
    ) => {
      let blockDiagramVD42YOACBinding242 = blockDiagramVD42YOACInput59 || "";
      typeof blockDiagramVD42YOACBinding242 == "object" &&
        (blockDiagramVD42YOACBinding242 = blockDiagramVD42YOACBinding242[0]);
      let blockDiagramVD42YOACBinding243 = chunkABZYJK2DB();
      if (chunkABZYJK2DH(blockDiagramVD42YOACBinding243.flowchart.htmlLabels))
        return (
          (blockDiagramVD42YOACBinding242 =
            blockDiagramVD42YOACBinding242.replace(/\\n|\n/g, "<br />")),
          chunkAGHRB4JFI.debug("vertexText" + blockDiagramVD42YOACBinding242),
          blockDiagramVD42YOACHelper10(
            {
              isNode: blockDiagramVD42YOACInput62,
              label: await chunkJA3XYJ7ZO(
                chunkS3R3BYOJI(blockDiagramVD42YOACBinding242),
              ),
              labelStyle: blockDiagramVD42YOACInput60.replace(
                "fill:",
                "color:",
              ),
            },
            blockDiagramVD42YOACBinding243,
          )
        );
      {
        let blockDiagramVD42YOACBinding286 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text",
        );
        blockDiagramVD42YOACBinding286.setAttribute(
          "style",
          blockDiagramVD42YOACInput60.replace("color:", "fill:"),
        );
        let blockDiagramVD42YOACBinding287 = [];
        blockDiagramVD42YOACBinding287 =
          typeof blockDiagramVD42YOACBinding242 == "string"
            ? blockDiagramVD42YOACBinding242.split(/\\n|\n|<br\s*\/?>/gi)
            : Array.isArray(blockDiagramVD42YOACBinding242)
              ? blockDiagramVD42YOACBinding242
              : [];
        for (let blockDiagramVD42YOACBinding356 of blockDiagramVD42YOACBinding287) {
          let blockDiagramVD42YOACBinding360 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "tspan",
          );
          blockDiagramVD42YOACBinding360.setAttributeNS(
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            "preserve",
          );
          blockDiagramVD42YOACBinding360.setAttribute("dy", "1em");
          blockDiagramVD42YOACBinding360.setAttribute("x", "0");
          blockDiagramVD42YOACInput61
            ? blockDiagramVD42YOACBinding360.setAttribute("class", "title-row")
            : blockDiagramVD42YOACBinding360.setAttribute("class", "row");
          blockDiagramVD42YOACBinding360.textContent =
            blockDiagramVD42YOACBinding356.trim();
          blockDiagramVD42YOACBinding286.appendChild(
            blockDiagramVD42YOACBinding360,
          );
        }
        return blockDiagramVD42YOACBinding286;
      }
    },
    "createLabel",
  );
  blockDiagramVD42YOACBinding30 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACInput206,
      blockDiagramVD42YOACInput207,
      blockDiagramVD42YOACInput208,
      blockDiagramVD42YOACInput209,
      blockDiagramVD42YOACInput210,
    ) => {
      blockDiagramVD42YOACInput207.arrowTypeStart &&
        blockDiagramVD42YOACBinding32(
          blockDiagramVD42YOACInput206,
          "start",
          blockDiagramVD42YOACInput207.arrowTypeStart,
          blockDiagramVD42YOACInput208,
          blockDiagramVD42YOACInput209,
          blockDiagramVD42YOACInput210,
        );
      blockDiagramVD42YOACInput207.arrowTypeEnd &&
        blockDiagramVD42YOACBinding32(
          blockDiagramVD42YOACInput206,
          "end",
          blockDiagramVD42YOACInput207.arrowTypeEnd,
          blockDiagramVD42YOACInput208,
          blockDiagramVD42YOACInput209,
          blockDiagramVD42YOACInput210,
        );
    },
    "addEdgeMarkers",
  );
  blockDiagramVD42YOACBinding31 = {
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
  blockDiagramVD42YOACBinding32 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACInput187,
      blockDiagramVD42YOACInput188,
      blockDiagramVD42YOACInput189,
      blockDiagramVD42YOACInput190,
      blockDiagramVD42YOACInput191,
      blockDiagramVD42YOACInput192,
    ) => {
      let blockDiagramVD42YOACBinding486 =
        blockDiagramVD42YOACBinding31[blockDiagramVD42YOACInput189];
      if (!blockDiagramVD42YOACBinding486) {
        chunkAGHRB4JFI.warn(
          `Unknown arrow type: ${blockDiagramVD42YOACInput189}`,
        );
        return;
      }
      let blockDiagramVD42YOACBinding487 =
        blockDiagramVD42YOACInput188 === "start" ? "Start" : "End";
      blockDiagramVD42YOACInput187.attr(
        `marker-${blockDiagramVD42YOACInput188}`,
        `url(${blockDiagramVD42YOACInput190}#${blockDiagramVD42YOACInput191}_${blockDiagramVD42YOACInput192}-${blockDiagramVD42YOACBinding486}${blockDiagramVD42YOACBinding487})`,
      );
    },
    "addEdgeMarker",
  );
  blockDiagramVD42YOACBinding33 = {};
  blockDiagramVD42YOACBinding34 = {};
  blockDiagramVD42YOACBinding35 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput18, blockDiagramVD42YOACInput19) => {
      let blockDiagramVD42YOACBinding151 = chunkABZYJK2DB(),
        blockDiagramVD42YOACBinding152 = chunkABZYJK2DH(
          blockDiagramVD42YOACBinding151.flowchart.htmlLabels,
        ),
        blockDiagramVD42YOACBinding153 =
          blockDiagramVD42YOACInput19.labelType === "markdown"
            ? chunkJA3XYJ7ZN(
                blockDiagramVD42YOACInput18,
                blockDiagramVD42YOACInput19.label,
                {
                  style: blockDiagramVD42YOACInput19.labelStyle,
                  useHtmlLabels: blockDiagramVD42YOACBinding152,
                  addSvgBackground: true,
                },
                blockDiagramVD42YOACBinding151,
              )
            : await blockDiagramVD42YOACBinding29(
                blockDiagramVD42YOACInput19.label,
                blockDiagramVD42YOACInput19.labelStyle,
              ),
        blockDiagramVD42YOACBinding154 = blockDiagramVD42YOACInput18
          .insert("g")
          .attr("class", "edgeLabel"),
        blockDiagramVD42YOACBinding155 = blockDiagramVD42YOACBinding154
          .insert("g")
          .attr("class", "label");
      blockDiagramVD42YOACBinding155
        .node()
        .appendChild(blockDiagramVD42YOACBinding153);
      let blockDiagramVD42YOACBinding156 =
        blockDiagramVD42YOACBinding153.getBBox();
      if (blockDiagramVD42YOACBinding152) {
        let blockDiagramVD42YOACBinding519 =
            blockDiagramVD42YOACBinding153.children[0],
          blockDiagramVD42YOACBinding520 = srcR(blockDiagramVD42YOACBinding153);
        blockDiagramVD42YOACBinding156 =
          blockDiagramVD42YOACBinding519.getBoundingClientRect();
        blockDiagramVD42YOACBinding520.attr(
          "width",
          blockDiagramVD42YOACBinding156.width,
        );
        blockDiagramVD42YOACBinding520.attr(
          "height",
          blockDiagramVD42YOACBinding156.height,
        );
      }
      blockDiagramVD42YOACBinding155.attr(
        "transform",
        "translate(" +
          -blockDiagramVD42YOACBinding156.width / 2 +
          ", " +
          -blockDiagramVD42YOACBinding156.height / 2 +
          ")",
      );
      blockDiagramVD42YOACBinding33[blockDiagramVD42YOACInput19.id] =
        blockDiagramVD42YOACBinding154;
      blockDiagramVD42YOACInput19.width = blockDiagramVD42YOACBinding156.width;
      blockDiagramVD42YOACInput19.height =
        blockDiagramVD42YOACBinding156.height;
      let blockDiagramVD42YOACBinding157;
      if (blockDiagramVD42YOACInput19.startLabelLeft) {
        let blockDiagramVD42YOACBinding412 =
            await blockDiagramVD42YOACBinding29(
              blockDiagramVD42YOACInput19.startLabelLeft,
              blockDiagramVD42YOACInput19.labelStyle,
            ),
          blockDiagramVD42YOACBinding413 = blockDiagramVD42YOACInput18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramVD42YOACBinding414 = blockDiagramVD42YOACBinding413
            .insert("g")
            .attr("class", "inner");
        blockDiagramVD42YOACBinding157 = blockDiagramVD42YOACBinding414
          .node()
          .appendChild(blockDiagramVD42YOACBinding412);
        let blockDiagramVD42YOACBinding415 =
          blockDiagramVD42YOACBinding412.getBBox();
        blockDiagramVD42YOACBinding414.attr(
          "transform",
          "translate(" +
            -blockDiagramVD42YOACBinding415.width / 2 +
            ", " +
            -blockDiagramVD42YOACBinding415.height / 2 +
            ")",
        );
        blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput19.id] ||
          (blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput19.id] = {});
        blockDiagramVD42YOACBinding34[
          blockDiagramVD42YOACInput19.id
        ].startLeft = blockDiagramVD42YOACBinding413;
        blockDiagramVD42YOACHelper11(
          blockDiagramVD42YOACBinding157,
          blockDiagramVD42YOACInput19.startLabelLeft,
        );
      }
      if (blockDiagramVD42YOACInput19.startLabelRight) {
        let blockDiagramVD42YOACBinding386 =
            await blockDiagramVD42YOACBinding29(
              blockDiagramVD42YOACInput19.startLabelRight,
              blockDiagramVD42YOACInput19.labelStyle,
            ),
          blockDiagramVD42YOACBinding387 = blockDiagramVD42YOACInput18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramVD42YOACBinding388 = blockDiagramVD42YOACBinding387
            .insert("g")
            .attr("class", "inner");
        blockDiagramVD42YOACBinding157 = blockDiagramVD42YOACBinding387
          .node()
          .appendChild(blockDiagramVD42YOACBinding386);
        blockDiagramVD42YOACBinding388
          .node()
          .appendChild(blockDiagramVD42YOACBinding386);
        let blockDiagramVD42YOACBinding389 =
          blockDiagramVD42YOACBinding386.getBBox();
        blockDiagramVD42YOACBinding388.attr(
          "transform",
          "translate(" +
            -blockDiagramVD42YOACBinding389.width / 2 +
            ", " +
            -blockDiagramVD42YOACBinding389.height / 2 +
            ")",
        );
        blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput19.id] ||
          (blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput19.id] = {});
        blockDiagramVD42YOACBinding34[
          blockDiagramVD42YOACInput19.id
        ].startRight = blockDiagramVD42YOACBinding387;
        blockDiagramVD42YOACHelper11(
          blockDiagramVD42YOACBinding157,
          blockDiagramVD42YOACInput19.startLabelRight,
        );
      }
      if (blockDiagramVD42YOACInput19.endLabelLeft) {
        let blockDiagramVD42YOACBinding396 =
            await blockDiagramVD42YOACBinding29(
              blockDiagramVD42YOACInput19.endLabelLeft,
              blockDiagramVD42YOACInput19.labelStyle,
            ),
          blockDiagramVD42YOACBinding397 = blockDiagramVD42YOACInput18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramVD42YOACBinding398 = blockDiagramVD42YOACBinding397
            .insert("g")
            .attr("class", "inner");
        blockDiagramVD42YOACBinding157 = blockDiagramVD42YOACBinding398
          .node()
          .appendChild(blockDiagramVD42YOACBinding396);
        let blockDiagramVD42YOACBinding399 =
          blockDiagramVD42YOACBinding396.getBBox();
        blockDiagramVD42YOACBinding398.attr(
          "transform",
          "translate(" +
            -blockDiagramVD42YOACBinding399.width / 2 +
            ", " +
            -blockDiagramVD42YOACBinding399.height / 2 +
            ")",
        );
        blockDiagramVD42YOACBinding397
          .node()
          .appendChild(blockDiagramVD42YOACBinding396);
        blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput19.id] ||
          (blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput19.id] = {});
        blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput19.id].endLeft =
          blockDiagramVD42YOACBinding397;
        blockDiagramVD42YOACHelper11(
          blockDiagramVD42YOACBinding157,
          blockDiagramVD42YOACInput19.endLabelLeft,
        );
      }
      if (blockDiagramVD42YOACInput19.endLabelRight) {
        let blockDiagramVD42YOACBinding390 =
            await blockDiagramVD42YOACBinding29(
              blockDiagramVD42YOACInput19.endLabelRight,
              blockDiagramVD42YOACInput19.labelStyle,
            ),
          blockDiagramVD42YOACBinding391 = blockDiagramVD42YOACInput18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramVD42YOACBinding392 = blockDiagramVD42YOACBinding391
            .insert("g")
            .attr("class", "inner");
        blockDiagramVD42YOACBinding157 = blockDiagramVD42YOACBinding392
          .node()
          .appendChild(blockDiagramVD42YOACBinding390);
        let blockDiagramVD42YOACBinding393 =
          blockDiagramVD42YOACBinding390.getBBox();
        blockDiagramVD42YOACBinding392.attr(
          "transform",
          "translate(" +
            -blockDiagramVD42YOACBinding393.width / 2 +
            ", " +
            -blockDiagramVD42YOACBinding393.height / 2 +
            ")",
        );
        blockDiagramVD42YOACBinding391
          .node()
          .appendChild(blockDiagramVD42YOACBinding390);
        blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput19.id] ||
          (blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput19.id] = {});
        blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput19.id].endRight =
          blockDiagramVD42YOACBinding391;
        blockDiagramVD42YOACHelper11(
          blockDiagramVD42YOACBinding157,
          blockDiagramVD42YOACInput19.endLabelRight,
        );
      }
      return blockDiagramVD42YOACBinding153;
    },
    "insertEdgeLabel",
  );
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper11, "setTerminalWidth");
  blockDiagramVD42YOACBinding36 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput35, blockDiagramVD42YOACInput36) => {
      chunkAGHRB4JFI.debug(
        "Moving label abc88 ",
        blockDiagramVD42YOACInput35.id,
        blockDiagramVD42YOACInput35.label,
        blockDiagramVD42YOACBinding33[blockDiagramVD42YOACInput35.id],
        blockDiagramVD42YOACInput36,
      );
      let blockDiagramVD42YOACBinding195 =
          blockDiagramVD42YOACInput36.updatedPath
            ? blockDiagramVD42YOACInput36.updatedPath
            : blockDiagramVD42YOACInput36.originalPath,
        { subGraphTitleTotalMargin } = chunkCVBHYZKIT(chunkABZYJK2DB());
      if (blockDiagramVD42YOACInput35.label) {
        let blockDiagramVD42YOACBinding405 =
            blockDiagramVD42YOACBinding33[blockDiagramVD42YOACInput35.id],
          blockDiagramVD42YOACBinding406 = blockDiagramVD42YOACInput35.x,
          blockDiagramVD42YOACBinding407 = blockDiagramVD42YOACInput35.y;
        if (blockDiagramVD42YOACBinding195) {
          let blockDiagramVD42YOACBinding447 = chunkS3R3BYOJG.calcLabelPosition(
            blockDiagramVD42YOACBinding195,
          );
          chunkAGHRB4JFI.debug(
            "Moving label " + blockDiagramVD42YOACInput35.label + " from (",
            blockDiagramVD42YOACBinding406,
            ",",
            blockDiagramVD42YOACBinding407,
            ") to (",
            blockDiagramVD42YOACBinding447.x,
            ",",
            blockDiagramVD42YOACBinding447.y,
            ") abc88",
          );
          blockDiagramVD42YOACInput36.updatedPath &&
            ((blockDiagramVD42YOACBinding406 =
              blockDiagramVD42YOACBinding447.x),
            (blockDiagramVD42YOACBinding407 =
              blockDiagramVD42YOACBinding447.y));
        }
        blockDiagramVD42YOACBinding405.attr(
          "transform",
          `translate(${blockDiagramVD42YOACBinding406}, ${blockDiagramVD42YOACBinding407 + subGraphTitleTotalMargin / 2})`,
        );
      }
      if (blockDiagramVD42YOACInput35.startLabelLeft) {
        let blockDiagramVD42YOACBinding444 =
            blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput35.id]
              .startLeft,
          blockDiagramVD42YOACBinding445 = blockDiagramVD42YOACInput35.x,
          blockDiagramVD42YOACBinding446 = blockDiagramVD42YOACInput35.y;
        if (blockDiagramVD42YOACBinding195) {
          let blockDiagramVD42YOACBinding515 =
            chunkS3R3BYOJG.calcTerminalLabelPosition(
              blockDiagramVD42YOACInput35.arrowTypeStart ? 10 : 0,
              "start_left",
              blockDiagramVD42YOACBinding195,
            );
          blockDiagramVD42YOACBinding445 = blockDiagramVD42YOACBinding515.x;
          blockDiagramVD42YOACBinding446 = blockDiagramVD42YOACBinding515.y;
        }
        blockDiagramVD42YOACBinding444.attr(
          "transform",
          `translate(${blockDiagramVD42YOACBinding445}, ${blockDiagramVD42YOACBinding446})`,
        );
      }
      if (blockDiagramVD42YOACInput35.startLabelRight) {
        let blockDiagramVD42YOACBinding441 =
            blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput35.id]
              .startRight,
          blockDiagramVD42YOACBinding442 = blockDiagramVD42YOACInput35.x,
          blockDiagramVD42YOACBinding443 = blockDiagramVD42YOACInput35.y;
        if (blockDiagramVD42YOACBinding195) {
          let blockDiagramVD42YOACBinding514 =
            chunkS3R3BYOJG.calcTerminalLabelPosition(
              blockDiagramVD42YOACInput35.arrowTypeStart ? 10 : 0,
              "start_right",
              blockDiagramVD42YOACBinding195,
            );
          blockDiagramVD42YOACBinding442 = blockDiagramVD42YOACBinding514.x;
          blockDiagramVD42YOACBinding443 = blockDiagramVD42YOACBinding514.y;
        }
        blockDiagramVD42YOACBinding441.attr(
          "transform",
          `translate(${blockDiagramVD42YOACBinding442}, ${blockDiagramVD42YOACBinding443})`,
        );
      }
      if (blockDiagramVD42YOACInput35.endLabelLeft) {
        let blockDiagramVD42YOACBinding452 =
            blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput35.id]
              .endLeft,
          blockDiagramVD42YOACBinding453 = blockDiagramVD42YOACInput35.x,
          blockDiagramVD42YOACBinding454 = blockDiagramVD42YOACInput35.y;
        if (blockDiagramVD42YOACBinding195) {
          let blockDiagramVD42YOACBinding517 =
            chunkS3R3BYOJG.calcTerminalLabelPosition(
              blockDiagramVD42YOACInput35.arrowTypeEnd ? 10 : 0,
              "end_left",
              blockDiagramVD42YOACBinding195,
            );
          blockDiagramVD42YOACBinding453 = blockDiagramVD42YOACBinding517.x;
          blockDiagramVD42YOACBinding454 = blockDiagramVD42YOACBinding517.y;
        }
        blockDiagramVD42YOACBinding452.attr(
          "transform",
          `translate(${blockDiagramVD42YOACBinding453}, ${blockDiagramVD42YOACBinding454})`,
        );
      }
      if (blockDiagramVD42YOACInput35.endLabelRight) {
        let blockDiagramVD42YOACBinding449 =
            blockDiagramVD42YOACBinding34[blockDiagramVD42YOACInput35.id]
              .endRight,
          blockDiagramVD42YOACBinding450 = blockDiagramVD42YOACInput35.x,
          blockDiagramVD42YOACBinding451 = blockDiagramVD42YOACInput35.y;
        if (blockDiagramVD42YOACBinding195) {
          let blockDiagramVD42YOACBinding516 =
            chunkS3R3BYOJG.calcTerminalLabelPosition(
              blockDiagramVD42YOACInput35.arrowTypeEnd ? 10 : 0,
              "end_right",
              blockDiagramVD42YOACBinding195,
            );
          blockDiagramVD42YOACBinding450 = blockDiagramVD42YOACBinding516.x;
          blockDiagramVD42YOACBinding451 = blockDiagramVD42YOACBinding516.y;
        }
        blockDiagramVD42YOACBinding449.attr(
          "transform",
          `translate(${blockDiagramVD42YOACBinding450}, ${blockDiagramVD42YOACBinding451})`,
        );
      }
    },
    "positionEdgeLabel",
  );
  blockDiagramVD42YOACBinding37 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput196, blockDiagramVD42YOACInput197) => {
      let blockDiagramVD42YOACBinding503 = blockDiagramVD42YOACInput196.x,
        blockDiagramVD42YOACBinding504 = blockDiagramVD42YOACInput196.y,
        blockDiagramVD42YOACBinding505 = Math.abs(
          blockDiagramVD42YOACInput197.x - blockDiagramVD42YOACBinding503,
        ),
        blockDiagramVD42YOACBinding506 = Math.abs(
          blockDiagramVD42YOACInput197.y - blockDiagramVD42YOACBinding504,
        ),
        blockDiagramVD42YOACBinding507 = blockDiagramVD42YOACInput196.width / 2,
        blockDiagramVD42YOACBinding508 =
          blockDiagramVD42YOACInput196.height / 2;
      return (
        blockDiagramVD42YOACBinding505 >= blockDiagramVD42YOACBinding507 ||
        blockDiagramVD42YOACBinding506 >= blockDiagramVD42YOACBinding508
      );
    },
    "outsideNode",
  );
  blockDiagramVD42YOACBinding38 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACInput56,
      blockDiagramVD42YOACInput57,
      blockDiagramVD42YOACInput58,
    ) => {
      chunkAGHRB4JFI.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(blockDiagramVD42YOACInput57)}
  insidePoint : ${JSON.stringify(blockDiagramVD42YOACInput58)}
  node        : x:${blockDiagramVD42YOACInput56.x} y:${blockDiagramVD42YOACInput56.y} w:${blockDiagramVD42YOACInput56.width} h:${blockDiagramVD42YOACInput56.height}`);
      let blockDiagramVD42YOACBinding234 = blockDiagramVD42YOACInput56.x,
        blockDiagramVD42YOACBinding235 = blockDiagramVD42YOACInput56.y,
        blockDiagramVD42YOACBinding236 = Math.abs(
          blockDiagramVD42YOACBinding234 - blockDiagramVD42YOACInput58.x,
        ),
        blockDiagramVD42YOACBinding237 = blockDiagramVD42YOACInput56.width / 2,
        blockDiagramVD42YOACBinding238 =
          blockDiagramVD42YOACInput58.x < blockDiagramVD42YOACInput57.x
            ? blockDiagramVD42YOACBinding237 - blockDiagramVD42YOACBinding236
            : blockDiagramVD42YOACBinding237 + blockDiagramVD42YOACBinding236,
        blockDiagramVD42YOACBinding239 = blockDiagramVD42YOACInput56.height / 2,
        blockDiagramVD42YOACBinding240 = Math.abs(
          blockDiagramVD42YOACInput57.y - blockDiagramVD42YOACInput58.y,
        ),
        blockDiagramVD42YOACBinding241 = Math.abs(
          blockDiagramVD42YOACInput57.x - blockDiagramVD42YOACInput58.x,
        );
      if (
        Math.abs(
          blockDiagramVD42YOACBinding235 - blockDiagramVD42YOACInput57.y,
        ) *
          blockDiagramVD42YOACBinding237 >
        Math.abs(
          blockDiagramVD42YOACBinding234 - blockDiagramVD42YOACInput57.x,
        ) *
          blockDiagramVD42YOACBinding239
      ) {
        let blockDiagramVD42YOACBinding421 =
          blockDiagramVD42YOACInput58.y < blockDiagramVD42YOACInput57.y
            ? blockDiagramVD42YOACInput57.y -
              blockDiagramVD42YOACBinding239 -
              blockDiagramVD42YOACBinding235
            : blockDiagramVD42YOACBinding235 -
              blockDiagramVD42YOACBinding239 -
              blockDiagramVD42YOACInput57.y;
        blockDiagramVD42YOACBinding238 =
          (blockDiagramVD42YOACBinding241 * blockDiagramVD42YOACBinding421) /
          blockDiagramVD42YOACBinding240;
        let blockDiagramVD42YOACBinding422 = {
          x:
            blockDiagramVD42YOACInput58.x < blockDiagramVD42YOACInput57.x
              ? blockDiagramVD42YOACInput58.x + blockDiagramVD42YOACBinding238
              : blockDiagramVD42YOACInput58.x -
                blockDiagramVD42YOACBinding241 +
                blockDiagramVD42YOACBinding238,
          y:
            blockDiagramVD42YOACInput58.y < blockDiagramVD42YOACInput57.y
              ? blockDiagramVD42YOACInput58.y +
                blockDiagramVD42YOACBinding240 -
                blockDiagramVD42YOACBinding421
              : blockDiagramVD42YOACInput58.y -
                blockDiagramVD42YOACBinding240 +
                blockDiagramVD42YOACBinding421,
        };
        return (
          blockDiagramVD42YOACBinding238 === 0 &&
            ((blockDiagramVD42YOACBinding422.x = blockDiagramVD42YOACInput57.x),
            (blockDiagramVD42YOACBinding422.y = blockDiagramVD42YOACInput57.y)),
          blockDiagramVD42YOACBinding241 === 0 &&
            (blockDiagramVD42YOACBinding422.x = blockDiagramVD42YOACInput57.x),
          blockDiagramVD42YOACBinding240 === 0 &&
            (blockDiagramVD42YOACBinding422.y = blockDiagramVD42YOACInput57.y),
          chunkAGHRB4JFI.debug(
            `abc89 topp/bott calc, Q ${blockDiagramVD42YOACBinding240}, q ${blockDiagramVD42YOACBinding421}, R ${blockDiagramVD42YOACBinding241}, r ${blockDiagramVD42YOACBinding238}`,
            blockDiagramVD42YOACBinding422,
          ),
          blockDiagramVD42YOACBinding422
        );
      } else {
        blockDiagramVD42YOACBinding238 =
          blockDiagramVD42YOACInput58.x < blockDiagramVD42YOACInput57.x
            ? blockDiagramVD42YOACInput57.x -
              blockDiagramVD42YOACBinding237 -
              blockDiagramVD42YOACBinding234
            : blockDiagramVD42YOACBinding234 -
              blockDiagramVD42YOACBinding237 -
              blockDiagramVD42YOACInput57.x;
        let blockDiagramVD42YOACBinding409 =
            (blockDiagramVD42YOACBinding240 * blockDiagramVD42YOACBinding238) /
            blockDiagramVD42YOACBinding241,
          blockDiagramVD42YOACBinding410 =
            blockDiagramVD42YOACInput58.x < blockDiagramVD42YOACInput57.x
              ? blockDiagramVD42YOACInput58.x +
                blockDiagramVD42YOACBinding241 -
                blockDiagramVD42YOACBinding238
              : blockDiagramVD42YOACInput58.x -
                blockDiagramVD42YOACBinding241 +
                blockDiagramVD42YOACBinding238,
          blockDiagramVD42YOACBinding411 =
            blockDiagramVD42YOACInput58.y < blockDiagramVD42YOACInput57.y
              ? blockDiagramVD42YOACInput58.y + blockDiagramVD42YOACBinding409
              : blockDiagramVD42YOACInput58.y - blockDiagramVD42YOACBinding409;
        return (
          chunkAGHRB4JFI.debug(
            `sides calc abc89, Q ${blockDiagramVD42YOACBinding240}, q ${blockDiagramVD42YOACBinding409}, R ${blockDiagramVD42YOACBinding241}, r ${blockDiagramVD42YOACBinding238}`,
            {
              _x: blockDiagramVD42YOACBinding410,
              _y: blockDiagramVD42YOACBinding411,
            },
          ),
          blockDiagramVD42YOACBinding238 === 0 &&
            ((blockDiagramVD42YOACBinding410 = blockDiagramVD42YOACInput57.x),
            (blockDiagramVD42YOACBinding411 = blockDiagramVD42YOACInput57.y)),
          blockDiagramVD42YOACBinding241 === 0 &&
            (blockDiagramVD42YOACBinding410 = blockDiagramVD42YOACInput57.x),
          blockDiagramVD42YOACBinding240 === 0 &&
            (blockDiagramVD42YOACBinding411 = blockDiagramVD42YOACInput57.y),
          {
            x: blockDiagramVD42YOACBinding410,
            y: blockDiagramVD42YOACBinding411,
          }
        );
      }
    },
    "intersection",
  );
  blockDiagramVD42YOACBinding39 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput148, blockDiagramVD42YOACInput149) => {
      chunkAGHRB4JFI.debug(
        "abc88 cutPathAtIntersect",
        blockDiagramVD42YOACInput148,
        blockDiagramVD42YOACInput149,
      );
      let blockDiagramVD42YOACBinding383 = [],
        blockDiagramVD42YOACBinding384 = blockDiagramVD42YOACInput148[0],
        blockDiagramVD42YOACBinding385 = false;
      return (
        blockDiagramVD42YOACInput148.forEach((item) => {
          if (
            !blockDiagramVD42YOACBinding37(
              blockDiagramVD42YOACInput149,
              item,
            ) &&
            !blockDiagramVD42YOACBinding385
          ) {
            let blockDiagramVD42YOACBinding484 = blockDiagramVD42YOACBinding38(
                blockDiagramVD42YOACInput149,
                blockDiagramVD42YOACBinding384,
                item,
              ),
              blockDiagramVD42YOACBinding485 = false;
            blockDiagramVD42YOACBinding383.forEach((_item) => {
              blockDiagramVD42YOACBinding485 ||=
                _item.x === blockDiagramVD42YOACBinding484.x &&
                _item.y === blockDiagramVD42YOACBinding484.y;
            });
            blockDiagramVD42YOACBinding383.some(
              (_item) =>
                _item.x === blockDiagramVD42YOACBinding484.x &&
                _item.y === blockDiagramVD42YOACBinding484.y,
            ) ||
              blockDiagramVD42YOACBinding383.push(
                blockDiagramVD42YOACBinding484,
              );
            blockDiagramVD42YOACBinding385 = true;
          } else {
            blockDiagramVD42YOACBinding384 = item;
            blockDiagramVD42YOACBinding385 ||
              blockDiagramVD42YOACBinding383.push(item);
          }
        }),
        blockDiagramVD42YOACBinding383
      );
    },
    "cutPathAtIntersect",
  );
  $e = chunkAGHRB4JFN(function (
    blockDiagramVD42YOACInput37,
    blockDiagramVD42YOACInput38,
    blockDiagramVD42YOACInput39,
    blockDiagramVD42YOACInput40,
    blockDiagramVD42YOACInput41,
    blockDiagramVD42YOACInput42,
    blockDiagramVD42YOACInput43,
  ) {
    let blockDiagramVD42YOACBinding196 = blockDiagramVD42YOACInput39.points;
    chunkAGHRB4JFI.debug(
      "abc88 InsertEdge: edge=",
      blockDiagramVD42YOACInput39,
      "e=",
      blockDiagramVD42YOACInput38,
    );
    let blockDiagramVD42YOACBinding197 = false,
      blockDiagramVD42YOACBinding198 = blockDiagramVD42YOACInput42.node(
        blockDiagramVD42YOACInput38.v,
      );
    var blockDiagramVD42YOACBinding199 = blockDiagramVD42YOACInput42.node(
      blockDiagramVD42YOACInput38.w,
    );
    blockDiagramVD42YOACBinding199?.intersect &&
      blockDiagramVD42YOACBinding198?.intersect &&
      ((blockDiagramVD42YOACBinding196 = blockDiagramVD42YOACBinding196.slice(
        1,
        blockDiagramVD42YOACInput39.points.length - 1,
      )),
      blockDiagramVD42YOACBinding196.unshift(
        blockDiagramVD42YOACBinding198.intersect(
          blockDiagramVD42YOACBinding196[0],
        ),
      ),
      blockDiagramVD42YOACBinding196.push(
        blockDiagramVD42YOACBinding199.intersect(
          blockDiagramVD42YOACBinding196[
            blockDiagramVD42YOACBinding196.length - 1
          ],
        ),
      ));
    blockDiagramVD42YOACInput39.toCluster &&
      (chunkAGHRB4JFI.debug(
        "to cluster abc88",
        blockDiagramVD42YOACInput40[blockDiagramVD42YOACInput39.toCluster],
      ),
      (blockDiagramVD42YOACBinding196 = blockDiagramVD42YOACBinding39(
        blockDiagramVD42YOACInput39.points,
        blockDiagramVD42YOACInput40[blockDiagramVD42YOACInput39.toCluster].node,
      )),
      (blockDiagramVD42YOACBinding197 = true));
    blockDiagramVD42YOACInput39.fromCluster &&
      (chunkAGHRB4JFI.debug(
        "from cluster abc88",
        blockDiagramVD42YOACInput40[blockDiagramVD42YOACInput39.fromCluster],
      ),
      (blockDiagramVD42YOACBinding196 = blockDiagramVD42YOACBinding39(
        blockDiagramVD42YOACBinding196.reverse(),
        blockDiagramVD42YOACInput40[blockDiagramVD42YOACInput39.fromCluster]
          .node,
      ).reverse()),
      (blockDiagramVD42YOACBinding197 = true));
    let blockDiagramVD42YOACBinding200 = blockDiagramVD42YOACBinding196.filter(
        (item) => !Number.isNaN(item.y),
      ),
      blockDiagramVD42YOACBinding201 = AppInitialSit;
    blockDiagramVD42YOACInput39.curve &&
      (blockDiagramVD42YOACInput41 === "graph" ||
        blockDiagramVD42YOACInput41 === "flowchart") &&
      (blockDiagramVD42YOACBinding201 = blockDiagramVD42YOACInput39.curve);
    let { x: _x, y: blockDiagramVD42YOACBinding202 } = chunkHN2XXSSUT(
        blockDiagramVD42YOACInput39,
      ),
      blockDiagramVD42YOACBinding203 = AppInitialAit()
        .x(_x)
        .y(blockDiagramVD42YOACBinding202)
        .curve(blockDiagramVD42YOACBinding201),
      blockDiagramVD42YOACBinding204;
    switch (blockDiagramVD42YOACInput39.thickness) {
      case "normal":
        blockDiagramVD42YOACBinding204 = "edge-thickness-normal";
        break;
      case "thick":
        blockDiagramVD42YOACBinding204 = "edge-thickness-thick";
        break;
      case "invisible":
        blockDiagramVD42YOACBinding204 = "edge-thickness-thick";
        break;
      default:
        blockDiagramVD42YOACBinding204 = "";
    }
    switch (blockDiagramVD42YOACInput39.pattern) {
      case "solid":
        blockDiagramVD42YOACBinding204 += " edge-pattern-solid";
        break;
      case "dotted":
        blockDiagramVD42YOACBinding204 += " edge-pattern-dotted";
        break;
      case "dashed":
        blockDiagramVD42YOACBinding204 += " edge-pattern-dashed";
        break;
    }
    let blockDiagramVD42YOACBinding205 = blockDiagramVD42YOACInput37
        .append("path")
        .attr(
          "d",
          blockDiagramVD42YOACBinding203(blockDiagramVD42YOACBinding200),
        )
        .attr("id", blockDiagramVD42YOACInput39.id)
        .attr(
          "class",
          " " +
            blockDiagramVD42YOACBinding204 +
            (blockDiagramVD42YOACInput39.classes
              ? " " + blockDiagramVD42YOACInput39.classes
              : ""),
        )
        .attr("style", blockDiagramVD42YOACInput39.style),
      blockDiagramVD42YOACBinding206 = "";
    (chunkABZYJK2DB().flowchart.arrowMarkerAbsolute ||
      chunkABZYJK2DB().state.arrowMarkerAbsolute) &&
      (blockDiagramVD42YOACBinding206 = chunkABZYJK2DE(true));
    blockDiagramVD42YOACBinding30(
      blockDiagramVD42YOACBinding205,
      blockDiagramVD42YOACInput39,
      blockDiagramVD42YOACBinding206,
      blockDiagramVD42YOACInput43,
      blockDiagramVD42YOACInput41,
    );
    let blockDiagramVD42YOACBinding207 = {};
    return (
      blockDiagramVD42YOACBinding197 &&
        (blockDiagramVD42YOACBinding207.updatedPath =
          blockDiagramVD42YOACBinding196),
      (blockDiagramVD42YOACBinding207.originalPath =
        blockDiagramVD42YOACInput39.points),
      blockDiagramVD42YOACBinding207
    );
  }, "insertEdge");
  blockDiagramVD42YOACBinding40 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput170) => {
      let blockDiagramVD42YOACBinding448 = new Set();
      for (let blockDiagramVD42YOACBinding472 of blockDiagramVD42YOACInput170)
        switch (blockDiagramVD42YOACBinding472) {
          case "x":
            blockDiagramVD42YOACBinding448.add("right");
            blockDiagramVD42YOACBinding448.add("left");
            break;
          case "y":
            blockDiagramVD42YOACBinding448.add("up");
            blockDiagramVD42YOACBinding448.add("down");
            break;
          default:
            blockDiagramVD42YOACBinding448.add(blockDiagramVD42YOACBinding472);
            break;
        }
      return blockDiagramVD42YOACBinding448;
    },
    "expandAndDeduplicateDirections",
  );
  blockDiagramVD42YOACBinding41 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACInput12,
      blockDiagramVD42YOACInput13,
      blockDiagramVD42YOACInput14,
    ) => {
      let blockDiagramVD42YOACBinding97 = blockDiagramVD42YOACBinding40(
          blockDiagramVD42YOACInput12,
        ),
        blockDiagramVD42YOACBinding98 =
          blockDiagramVD42YOACInput13.height +
          2 * blockDiagramVD42YOACInput14.padding,
        blockDiagramVD42YOACBinding99 = blockDiagramVD42YOACBinding98 / 2,
        blockDiagramVD42YOACBinding100 =
          blockDiagramVD42YOACInput13.width +
          2 * blockDiagramVD42YOACBinding99 +
          blockDiagramVD42YOACInput14.padding,
        blockDiagramVD42YOACBinding101 =
          blockDiagramVD42YOACInput14.padding / 2;
      return blockDiagramVD42YOACBinding97.has("right") &&
        blockDiagramVD42YOACBinding97.has("left") &&
        blockDiagramVD42YOACBinding97.has("up") &&
        blockDiagramVD42YOACBinding97.has("down")
        ? [
            {
              x: 0,
              y: 0,
            },
            {
              x: blockDiagramVD42YOACBinding99,
              y: 0,
            },
            {
              x: blockDiagramVD42YOACBinding100 / 2,
              y: 2 * blockDiagramVD42YOACBinding101,
            },
            {
              x: blockDiagramVD42YOACBinding100 - blockDiagramVD42YOACBinding99,
              y: 0,
            },
            {
              x: blockDiagramVD42YOACBinding100,
              y: 0,
            },
            {
              x: blockDiagramVD42YOACBinding100,
              y: -blockDiagramVD42YOACBinding98 / 3,
            },
            {
              x:
                blockDiagramVD42YOACBinding100 +
                2 * blockDiagramVD42YOACBinding101,
              y: -blockDiagramVD42YOACBinding98 / 2,
            },
            {
              x: blockDiagramVD42YOACBinding100,
              y: (-2 * blockDiagramVD42YOACBinding98) / 3,
            },
            {
              x: blockDiagramVD42YOACBinding100,
              y: -blockDiagramVD42YOACBinding98,
            },
            {
              x: blockDiagramVD42YOACBinding100 - blockDiagramVD42YOACBinding99,
              y: -blockDiagramVD42YOACBinding98,
            },
            {
              x: blockDiagramVD42YOACBinding100 / 2,
              y:
                -blockDiagramVD42YOACBinding98 -
                2 * blockDiagramVD42YOACBinding101,
            },
            {
              x: blockDiagramVD42YOACBinding99,
              y: -blockDiagramVD42YOACBinding98,
            },
            {
              x: 0,
              y: -blockDiagramVD42YOACBinding98,
            },
            {
              x: 0,
              y: (-2 * blockDiagramVD42YOACBinding98) / 3,
            },
            {
              x: -2 * blockDiagramVD42YOACBinding101,
              y: -blockDiagramVD42YOACBinding98 / 2,
            },
            {
              x: 0,
              y: -blockDiagramVD42YOACBinding98 / 3,
            },
          ]
        : blockDiagramVD42YOACBinding97.has("right") &&
            blockDiagramVD42YOACBinding97.has("left") &&
            blockDiagramVD42YOACBinding97.has("up")
          ? [
              {
                x: blockDiagramVD42YOACBinding99,
                y: 0,
              },
              {
                x:
                  blockDiagramVD42YOACBinding100 -
                  blockDiagramVD42YOACBinding99,
                y: 0,
              },
              {
                x: blockDiagramVD42YOACBinding100,
                y: -blockDiagramVD42YOACBinding98 / 2,
              },
              {
                x:
                  blockDiagramVD42YOACBinding100 -
                  blockDiagramVD42YOACBinding99,
                y: -blockDiagramVD42YOACBinding98,
              },
              {
                x: blockDiagramVD42YOACBinding99,
                y: -blockDiagramVD42YOACBinding98,
              },
              {
                x: 0,
                y: -blockDiagramVD42YOACBinding98 / 2,
              },
            ]
          : blockDiagramVD42YOACBinding97.has("right") &&
              blockDiagramVD42YOACBinding97.has("left") &&
              blockDiagramVD42YOACBinding97.has("down")
            ? [
                {
                  x: 0,
                  y: 0,
                },
                {
                  x: blockDiagramVD42YOACBinding99,
                  y: -blockDiagramVD42YOACBinding98,
                },
                {
                  x:
                    blockDiagramVD42YOACBinding100 -
                    blockDiagramVD42YOACBinding99,
                  y: -blockDiagramVD42YOACBinding98,
                },
                {
                  x: blockDiagramVD42YOACBinding100,
                  y: 0,
                },
              ]
            : blockDiagramVD42YOACBinding97.has("right") &&
                blockDiagramVD42YOACBinding97.has("up") &&
                blockDiagramVD42YOACBinding97.has("down")
              ? [
                  {
                    x: 0,
                    y: 0,
                  },
                  {
                    x: blockDiagramVD42YOACBinding100,
                    y: -blockDiagramVD42YOACBinding99,
                  },
                  {
                    x: blockDiagramVD42YOACBinding100,
                    y:
                      -blockDiagramVD42YOACBinding98 +
                      blockDiagramVD42YOACBinding99,
                  },
                  {
                    x: 0,
                    y: -blockDiagramVD42YOACBinding98,
                  },
                ]
              : blockDiagramVD42YOACBinding97.has("left") &&
                  blockDiagramVD42YOACBinding97.has("up") &&
                  blockDiagramVD42YOACBinding97.has("down")
                ? [
                    {
                      x: blockDiagramVD42YOACBinding100,
                      y: 0,
                    },
                    {
                      x: 0,
                      y: -blockDiagramVD42YOACBinding99,
                    },
                    {
                      x: 0,
                      y:
                        -blockDiagramVD42YOACBinding98 +
                        blockDiagramVD42YOACBinding99,
                    },
                    {
                      x: blockDiagramVD42YOACBinding100,
                      y: -blockDiagramVD42YOACBinding98,
                    },
                  ]
                : blockDiagramVD42YOACBinding97.has("right") &&
                    blockDiagramVD42YOACBinding97.has("left")
                  ? [
                      {
                        x: blockDiagramVD42YOACBinding99,
                        y: 0,
                      },
                      {
                        x: blockDiagramVD42YOACBinding99,
                        y: -blockDiagramVD42YOACBinding101,
                      },
                      {
                        x:
                          blockDiagramVD42YOACBinding100 -
                          blockDiagramVD42YOACBinding99,
                        y: -blockDiagramVD42YOACBinding101,
                      },
                      {
                        x:
                          blockDiagramVD42YOACBinding100 -
                          blockDiagramVD42YOACBinding99,
                        y: 0,
                      },
                      {
                        x: blockDiagramVD42YOACBinding100,
                        y: -blockDiagramVD42YOACBinding98 / 2,
                      },
                      {
                        x:
                          blockDiagramVD42YOACBinding100 -
                          blockDiagramVD42YOACBinding99,
                        y: -blockDiagramVD42YOACBinding98,
                      },
                      {
                        x:
                          blockDiagramVD42YOACBinding100 -
                          blockDiagramVD42YOACBinding99,
                        y:
                          -blockDiagramVD42YOACBinding98 +
                          blockDiagramVD42YOACBinding101,
                      },
                      {
                        x: blockDiagramVD42YOACBinding99,
                        y:
                          -blockDiagramVD42YOACBinding98 +
                          blockDiagramVD42YOACBinding101,
                      },
                      {
                        x: blockDiagramVD42YOACBinding99,
                        y: -blockDiagramVD42YOACBinding98,
                      },
                      {
                        x: 0,
                        y: -blockDiagramVD42YOACBinding98 / 2,
                      },
                    ]
                  : blockDiagramVD42YOACBinding97.has("up") &&
                      blockDiagramVD42YOACBinding97.has("down")
                    ? [
                        {
                          x: blockDiagramVD42YOACBinding100 / 2,
                          y: 0,
                        },
                        {
                          x: 0,
                          y: -blockDiagramVD42YOACBinding101,
                        },
                        {
                          x: blockDiagramVD42YOACBinding99,
                          y: -blockDiagramVD42YOACBinding101,
                        },
                        {
                          x: blockDiagramVD42YOACBinding99,
                          y:
                            -blockDiagramVD42YOACBinding98 +
                            blockDiagramVD42YOACBinding101,
                        },
                        {
                          x: 0,
                          y:
                            -blockDiagramVD42YOACBinding98 +
                            blockDiagramVD42YOACBinding101,
                        },
                        {
                          x: blockDiagramVD42YOACBinding100 / 2,
                          y: -blockDiagramVD42YOACBinding98,
                        },
                        {
                          x: blockDiagramVD42YOACBinding100,
                          y:
                            -blockDiagramVD42YOACBinding98 +
                            blockDiagramVD42YOACBinding101,
                        },
                        {
                          x:
                            blockDiagramVD42YOACBinding100 -
                            blockDiagramVD42YOACBinding99,
                          y:
                            -blockDiagramVD42YOACBinding98 +
                            blockDiagramVD42YOACBinding101,
                        },
                        {
                          x:
                            blockDiagramVD42YOACBinding100 -
                            blockDiagramVD42YOACBinding99,
                          y: -blockDiagramVD42YOACBinding101,
                        },
                        {
                          x: blockDiagramVD42YOACBinding100,
                          y: -blockDiagramVD42YOACBinding101,
                        },
                      ]
                    : blockDiagramVD42YOACBinding97.has("right") &&
                        blockDiagramVD42YOACBinding97.has("up")
                      ? [
                          {
                            x: 0,
                            y: 0,
                          },
                          {
                            x: blockDiagramVD42YOACBinding100,
                            y: -blockDiagramVD42YOACBinding99,
                          },
                          {
                            x: 0,
                            y: -blockDiagramVD42YOACBinding98,
                          },
                        ]
                      : blockDiagramVD42YOACBinding97.has("right") &&
                          blockDiagramVD42YOACBinding97.has("down")
                        ? [
                            {
                              x: 0,
                              y: 0,
                            },
                            {
                              x: blockDiagramVD42YOACBinding100,
                              y: 0,
                            },
                            {
                              x: 0,
                              y: -blockDiagramVD42YOACBinding98,
                            },
                          ]
                        : blockDiagramVD42YOACBinding97.has("left") &&
                            blockDiagramVD42YOACBinding97.has("up")
                          ? [
                              {
                                x: blockDiagramVD42YOACBinding100,
                                y: 0,
                              },
                              {
                                x: 0,
                                y: -blockDiagramVD42YOACBinding99,
                              },
                              {
                                x: blockDiagramVD42YOACBinding100,
                                y: -blockDiagramVD42YOACBinding98,
                              },
                            ]
                          : blockDiagramVD42YOACBinding97.has("left") &&
                              blockDiagramVD42YOACBinding97.has("down")
                            ? [
                                {
                                  x: blockDiagramVD42YOACBinding100,
                                  y: 0,
                                },
                                {
                                  x: 0,
                                  y: 0,
                                },
                                {
                                  x: blockDiagramVD42YOACBinding100,
                                  y: -blockDiagramVD42YOACBinding98,
                                },
                              ]
                            : blockDiagramVD42YOACBinding97.has("right")
                              ? [
                                  {
                                    x: blockDiagramVD42YOACBinding99,
                                    y: -blockDiagramVD42YOACBinding101,
                                  },
                                  {
                                    x: blockDiagramVD42YOACBinding99,
                                    y: -blockDiagramVD42YOACBinding101,
                                  },
                                  {
                                    x:
                                      blockDiagramVD42YOACBinding100 -
                                      blockDiagramVD42YOACBinding99,
                                    y: -blockDiagramVD42YOACBinding101,
                                  },
                                  {
                                    x:
                                      blockDiagramVD42YOACBinding100 -
                                      blockDiagramVD42YOACBinding99,
                                    y: 0,
                                  },
                                  {
                                    x: blockDiagramVD42YOACBinding100,
                                    y: -blockDiagramVD42YOACBinding98 / 2,
                                  },
                                  {
                                    x:
                                      blockDiagramVD42YOACBinding100 -
                                      blockDiagramVD42YOACBinding99,
                                    y: -blockDiagramVD42YOACBinding98,
                                  },
                                  {
                                    x:
                                      blockDiagramVD42YOACBinding100 -
                                      blockDiagramVD42YOACBinding99,
                                    y:
                                      -blockDiagramVD42YOACBinding98 +
                                      blockDiagramVD42YOACBinding101,
                                  },
                                  {
                                    x: blockDiagramVD42YOACBinding99,
                                    y:
                                      -blockDiagramVD42YOACBinding98 +
                                      blockDiagramVD42YOACBinding101,
                                  },
                                  {
                                    x: blockDiagramVD42YOACBinding99,
                                    y:
                                      -blockDiagramVD42YOACBinding98 +
                                      blockDiagramVD42YOACBinding101,
                                  },
                                ]
                              : blockDiagramVD42YOACBinding97.has("left")
                                ? [
                                    {
                                      x: blockDiagramVD42YOACBinding99,
                                      y: 0,
                                    },
                                    {
                                      x: blockDiagramVD42YOACBinding99,
                                      y: -blockDiagramVD42YOACBinding101,
                                    },
                                    {
                                      x:
                                        blockDiagramVD42YOACBinding100 -
                                        blockDiagramVD42YOACBinding99,
                                      y: -blockDiagramVD42YOACBinding101,
                                    },
                                    {
                                      x:
                                        blockDiagramVD42YOACBinding100 -
                                        blockDiagramVD42YOACBinding99,
                                      y:
                                        -blockDiagramVD42YOACBinding98 +
                                        blockDiagramVD42YOACBinding101,
                                    },
                                    {
                                      x: blockDiagramVD42YOACBinding99,
                                      y:
                                        -blockDiagramVD42YOACBinding98 +
                                        blockDiagramVD42YOACBinding101,
                                    },
                                    {
                                      x: blockDiagramVD42YOACBinding99,
                                      y: -blockDiagramVD42YOACBinding98,
                                    },
                                    {
                                      x: 0,
                                      y: -blockDiagramVD42YOACBinding98 / 2,
                                    },
                                  ]
                                : blockDiagramVD42YOACBinding97.has("up")
                                  ? [
                                      {
                                        x: blockDiagramVD42YOACBinding99,
                                        y: -blockDiagramVD42YOACBinding101,
                                      },
                                      {
                                        x: blockDiagramVD42YOACBinding99,
                                        y:
                                          -blockDiagramVD42YOACBinding98 +
                                          blockDiagramVD42YOACBinding101,
                                      },
                                      {
                                        x: 0,
                                        y:
                                          -blockDiagramVD42YOACBinding98 +
                                          blockDiagramVD42YOACBinding101,
                                      },
                                      {
                                        x: blockDiagramVD42YOACBinding100 / 2,
                                        y: -blockDiagramVD42YOACBinding98,
                                      },
                                      {
                                        x: blockDiagramVD42YOACBinding100,
                                        y:
                                          -blockDiagramVD42YOACBinding98 +
                                          blockDiagramVD42YOACBinding101,
                                      },
                                      {
                                        x:
                                          blockDiagramVD42YOACBinding100 -
                                          blockDiagramVD42YOACBinding99,
                                        y:
                                          -blockDiagramVD42YOACBinding98 +
                                          blockDiagramVD42YOACBinding101,
                                      },
                                      {
                                        x:
                                          blockDiagramVD42YOACBinding100 -
                                          blockDiagramVD42YOACBinding99,
                                        y: -blockDiagramVD42YOACBinding101,
                                      },
                                    ]
                                  : blockDiagramVD42YOACBinding97.has("down")
                                    ? [
                                        {
                                          x: blockDiagramVD42YOACBinding100 / 2,
                                          y: 0,
                                        },
                                        {
                                          x: 0,
                                          y: -blockDiagramVD42YOACBinding101,
                                        },
                                        {
                                          x: blockDiagramVD42YOACBinding99,
                                          y: -blockDiagramVD42YOACBinding101,
                                        },
                                        {
                                          x: blockDiagramVD42YOACBinding99,
                                          y:
                                            -blockDiagramVD42YOACBinding98 +
                                            blockDiagramVD42YOACBinding101,
                                        },
                                        {
                                          x:
                                            blockDiagramVD42YOACBinding100 -
                                            blockDiagramVD42YOACBinding99,
                                          y:
                                            -blockDiagramVD42YOACBinding98 +
                                            blockDiagramVD42YOACBinding101,
                                        },
                                        {
                                          x:
                                            blockDiagramVD42YOACBinding100 -
                                            blockDiagramVD42YOACBinding99,
                                          y: -blockDiagramVD42YOACBinding101,
                                        },
                                        {
                                          x: blockDiagramVD42YOACBinding100,
                                          y: -blockDiagramVD42YOACBinding101,
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
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper12, "intersectNode");
  blockDiagramVD42YOACBinding42 = blockDiagramVD42YOACHelper12;
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper13, "intersectEllipse");
  blockDiagramVD42YOACBinding43 = blockDiagramVD42YOACHelper13;
  chunkAGHRB4JFN(_e, "intersectCircle");
  blockDiagramVD42YOACBinding44 = _e;
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper14, "intersectLine");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper15, "sameSign");
  at = blockDiagramVD42YOACHelper14;
  blockDiagramVD42YOACBinding45 = be;
  chunkAGHRB4JFN(be, "intersectPolygon");
  blockDiagramVD42YOACBinding46 = {
    node: blockDiagramVD42YOACBinding42,
    circle: blockDiagramVD42YOACBinding44,
    ellipse: blockDiagramVD42YOACBinding43,
    polygon: blockDiagramVD42YOACBinding45,
    rect: chunkAGHRB4JFN(
      (blockDiagramVD42YOACInput159, blockDiagramVD42YOACInput160) => {
        var blockDiagramVD42YOACBinding423 = blockDiagramVD42YOACInput159.x,
          blockDiagramVD42YOACBinding424 = blockDiagramVD42YOACInput159.y,
          blockDiagramVD42YOACBinding425 =
            blockDiagramVD42YOACInput160.x - blockDiagramVD42YOACBinding423,
          blockDiagramVD42YOACBinding426 =
            blockDiagramVD42YOACInput160.y - blockDiagramVD42YOACBinding424,
          blockDiagramVD42YOACBinding427 =
            blockDiagramVD42YOACInput159.width / 2,
          blockDiagramVD42YOACBinding428 =
            blockDiagramVD42YOACInput159.height / 2,
          blockDiagramVD42YOACBinding429,
          blockDiagramVD42YOACBinding430;
        return (
          Math.abs(blockDiagramVD42YOACBinding426) *
            blockDiagramVD42YOACBinding427 >
          Math.abs(blockDiagramVD42YOACBinding425) *
            blockDiagramVD42YOACBinding428
            ? (blockDiagramVD42YOACBinding426 < 0 &&
                (blockDiagramVD42YOACBinding428 =
                  -blockDiagramVD42YOACBinding428),
              (blockDiagramVD42YOACBinding429 =
                blockDiagramVD42YOACBinding426 === 0
                  ? 0
                  : (blockDiagramVD42YOACBinding428 *
                      blockDiagramVD42YOACBinding425) /
                    blockDiagramVD42YOACBinding426),
              (blockDiagramVD42YOACBinding430 = blockDiagramVD42YOACBinding428))
            : (blockDiagramVD42YOACBinding425 < 0 &&
                (blockDiagramVD42YOACBinding427 =
                  -blockDiagramVD42YOACBinding427),
              (blockDiagramVD42YOACBinding429 = blockDiagramVD42YOACBinding427),
              (blockDiagramVD42YOACBinding430 =
                blockDiagramVD42YOACBinding425 === 0
                  ? 0
                  : (blockDiagramVD42YOACBinding427 *
                      blockDiagramVD42YOACBinding426) /
                    blockDiagramVD42YOACBinding425)),
          {
            x: blockDiagramVD42YOACBinding423 + blockDiagramVD42YOACBinding429,
            y: blockDiagramVD42YOACBinding424 + blockDiagramVD42YOACBinding430,
          }
        );
      },
      "intersectRect",
    ),
  };
  blockDiagramVD42YOACBinding47 = chunkAGHRB4JFN(
    async (
      blockDiagramVD42YOACInput20,
      blockDiagramVD42YOACInput21,
      blockDiagramVD42YOACInput22,
      blockDiagramVD42YOACInput23,
    ) => {
      let blockDiagramVD42YOACBinding158 = chunkABZYJK2DB(),
        blockDiagramVD42YOACBinding159,
        blockDiagramVD42YOACBinding160 =
          blockDiagramVD42YOACInput21.useHtmlLabels ||
          chunkABZYJK2DH(blockDiagramVD42YOACBinding158.flowchart.htmlLabels);
      blockDiagramVD42YOACBinding159 =
        blockDiagramVD42YOACInput22 || "node default";
      let blockDiagramVD42YOACBinding161 = blockDiagramVD42YOACInput20
          .insert("g")
          .attr("class", blockDiagramVD42YOACBinding159)
          .attr(
            "id",
            blockDiagramVD42YOACInput21.domId || blockDiagramVD42YOACInput21.id,
          ),
        blockDiagramVD42YOACBinding162 = blockDiagramVD42YOACBinding161
          .insert("g")
          .attr("class", "label")
          .attr("style", blockDiagramVD42YOACInput21.labelStyle),
        blockDiagramVD42YOACBinding163;
      blockDiagramVD42YOACBinding163 =
        blockDiagramVD42YOACInput21.labelText === undefined
          ? ""
          : typeof blockDiagramVD42YOACInput21.labelText == "string"
            ? blockDiagramVD42YOACInput21.labelText
            : blockDiagramVD42YOACInput21.labelText[0];
      let blockDiagramVD42YOACBinding164 =
          blockDiagramVD42YOACBinding162.node(),
        blockDiagramVD42YOACBinding165;
      blockDiagramVD42YOACBinding165 =
        blockDiagramVD42YOACInput21.labelType === "markdown"
          ? chunkJA3XYJ7ZN(
              blockDiagramVD42YOACBinding162,
              chunkABZYJK2DL(
                chunkS3R3BYOJI(blockDiagramVD42YOACBinding163),
                blockDiagramVD42YOACBinding158,
              ),
              {
                useHtmlLabels: blockDiagramVD42YOACBinding160,
                width:
                  blockDiagramVD42YOACInput21.width ||
                  blockDiagramVD42YOACBinding158.flowchart.wrappingWidth,
                classes: "markdown-node-label",
              },
              blockDiagramVD42YOACBinding158,
            )
          : blockDiagramVD42YOACBinding164.appendChild(
              await blockDiagramVD42YOACBinding29(
                chunkABZYJK2DL(
                  chunkS3R3BYOJI(blockDiagramVD42YOACBinding163),
                  blockDiagramVD42YOACBinding158,
                ),
                blockDiagramVD42YOACInput21.labelStyle,
                false,
                blockDiagramVD42YOACInput23,
              ),
            );
      let blockDiagramVD42YOACBinding166 =
          blockDiagramVD42YOACBinding165.getBBox(),
        blockDiagramVD42YOACBinding167 =
          blockDiagramVD42YOACInput21.padding / 2;
      if (chunkABZYJK2DH(blockDiagramVD42YOACBinding158.flowchart.htmlLabels)) {
        let blockDiagramVD42YOACBinding244 =
            blockDiagramVD42YOACBinding165.children[0],
          blockDiagramVD42YOACBinding245 = srcR(blockDiagramVD42YOACBinding165),
          blockDiagramVD42YOACBinding246 =
            blockDiagramVD42YOACBinding244.getElementsByTagName("img");
        if (blockDiagramVD42YOACBinding246) {
          let blockDiagramVD42YOACBinding282 =
            blockDiagramVD42YOACBinding163.replace(/<img[^>]*>/g, "").trim() ===
            "";
          await Promise.all(
            [...blockDiagramVD42YOACBinding246].map(
              (item) =>
                new Promise((blockDiagramVD42YOACInput92) => {
                  function blockDiagramVD42YOACHelper28() {
                    if (
                      ((item.style.display = "flex"),
                      (item.style.flexDirection = "column"),
                      blockDiagramVD42YOACBinding282)
                    ) {
                      let blockDiagramVD42YOACBinding456 =
                          blockDiagramVD42YOACBinding158.fontSize
                            ? blockDiagramVD42YOACBinding158.fontSize
                            : window.getComputedStyle(document.body).fontSize,
                        blockDiagramVD42YOACBinding457 =
                          parseInt(blockDiagramVD42YOACBinding456, 10) * 5 +
                          "px";
                      item.style.minWidth = blockDiagramVD42YOACBinding457;
                      item.style.maxWidth = blockDiagramVD42YOACBinding457;
                    } else item.style.width = "100%";
                    blockDiagramVD42YOACInput92(item);
                  }
                  chunkAGHRB4JFN(blockDiagramVD42YOACHelper28, "setupImage");
                  setTimeout(() => {
                    item.complete && blockDiagramVD42YOACHelper28();
                  });
                  item.addEventListener("error", blockDiagramVD42YOACHelper28);
                  item.addEventListener("load", blockDiagramVD42YOACHelper28);
                }),
            ),
          );
        }
        blockDiagramVD42YOACBinding166 =
          blockDiagramVD42YOACBinding244.getBoundingClientRect();
        blockDiagramVD42YOACBinding245.attr(
          "width",
          blockDiagramVD42YOACBinding166.width,
        );
        blockDiagramVD42YOACBinding245.attr(
          "height",
          blockDiagramVD42YOACBinding166.height,
        );
      }
      return (
        blockDiagramVD42YOACBinding160
          ? blockDiagramVD42YOACBinding162.attr(
              "transform",
              "translate(" +
                -blockDiagramVD42YOACBinding166.width / 2 +
                ", " +
                -blockDiagramVD42YOACBinding166.height / 2 +
                ")",
            )
          : blockDiagramVD42YOACBinding162.attr(
              "transform",
              "translate(0, " +
                -blockDiagramVD42YOACBinding166.height / 2 +
                ")",
            ),
        blockDiagramVD42YOACInput21.centerLabel &&
          blockDiagramVD42YOACBinding162.attr(
            "transform",
            "translate(" +
              -blockDiagramVD42YOACBinding166.width / 2 +
              ", " +
              -blockDiagramVD42YOACBinding166.height / 2 +
              ")",
          ),
        blockDiagramVD42YOACBinding162.insert("rect", ":first-child"),
        {
          shapeSvg: blockDiagramVD42YOACBinding161,
          bbox: blockDiagramVD42YOACBinding166,
          halfPadding: blockDiagramVD42YOACBinding167,
          label: blockDiagramVD42YOACBinding162,
        }
      );
    },
    "labelHelper",
  );
  blockDiagramVD42YOACBinding48 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput224, blockDiagramVD42YOACInput225) => {
      let blockDiagramVD42YOACBinding533 = blockDiagramVD42YOACInput225
        .node()
        .getBBox();
      blockDiagramVD42YOACInput224.width = blockDiagramVD42YOACBinding533.width;
      blockDiagramVD42YOACInput224.height =
        blockDiagramVD42YOACBinding533.height;
    },
    "updateNodeBounds",
  );
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper16, "insertPolygonShape");
  blockDiagramVD42YOACBinding49 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput113, blockDiagramVD42YOACInput114) => {
      blockDiagramVD42YOACInput114.useHtmlLabels ||
        chunkABZYJK2DB().flowchart.htmlLabels ||
        (blockDiagramVD42YOACInput114.centerLabel = true);
      let { shapeSvg, bbox, halfPadding } = await blockDiagramVD42YOACBinding47(
        blockDiagramVD42YOACInput113,
        blockDiagramVD42YOACInput114,
        "node " + blockDiagramVD42YOACInput114.classes,
        true,
      );
      chunkAGHRB4JFI.info("Classes = ", blockDiagramVD42YOACInput114.classes);
      let blockDiagramVD42YOACBinding328 = shapeSvg.insert(
        "rect",
        ":first-child",
      );
      return (
        blockDiagramVD42YOACBinding328
          .attr("rx", blockDiagramVD42YOACInput114.rx)
          .attr("ry", blockDiagramVD42YOACInput114.ry)
          .attr("x", -bbox.width / 2 - halfPadding)
          .attr("y", -bbox.height / 2 - halfPadding)
          .attr("width", bbox.width + blockDiagramVD42YOACInput114.padding)
          .attr("height", bbox.height + blockDiagramVD42YOACInput114.padding),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput114,
          blockDiagramVD42YOACBinding328,
        ),
        (blockDiagramVD42YOACInput114.intersect = function (
          blockDiagramVD42YOACInput256,
        ) {
          return blockDiagramVD42YOACBinding46.rect(
            blockDiagramVD42YOACInput114,
            blockDiagramVD42YOACInput256,
          );
        }),
        shapeSvg
      );
    },
    "note",
  );
  blockDiagramVD42YOACBinding50 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput283) =>
      blockDiagramVD42YOACInput283 ? " " + blockDiagramVD42YOACInput283 : "",
    "formatClass",
  );
  blockDiagramVD42YOACBinding51 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput239, blockDiagramVD42YOACInput240) =>
      `${blockDiagramVD42YOACInput240 || "node default"}${blockDiagramVD42YOACBinding50(blockDiagramVD42YOACInput239.classes)} ${blockDiagramVD42YOACBinding50(blockDiagramVD42YOACInput239.class)}`,
    "getClassesFromNode",
  );
  blockDiagramVD42YOACBinding52 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput133, blockDiagramVD42YOACInput134) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput133,
          blockDiagramVD42YOACInput134,
          blockDiagramVD42YOACBinding51(
            blockDiagramVD42YOACInput134,
            undefined,
          ),
          true,
        ),
        blockDiagramVD42YOACBinding351 =
          bbox.width +
          blockDiagramVD42YOACInput134.padding +
          (bbox.height + blockDiagramVD42YOACInput134.padding),
        blockDiagramVD42YOACBinding352 = [
          {
            x: blockDiagramVD42YOACBinding351 / 2,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACBinding351,
            y: -blockDiagramVD42YOACBinding351 / 2,
          },
          {
            x: blockDiagramVD42YOACBinding351 / 2,
            y: -blockDiagramVD42YOACBinding351,
          },
          {
            x: 0,
            y: -blockDiagramVD42YOACBinding351 / 2,
          },
        ];
      chunkAGHRB4JFI.info("Question main (Circle)");
      let blockDiagramVD42YOACBinding353 = blockDiagramVD42YOACHelper16(
        shapeSvg,
        blockDiagramVD42YOACBinding351,
        blockDiagramVD42YOACBinding351,
        blockDiagramVD42YOACBinding352,
      );
      return (
        blockDiagramVD42YOACBinding353.attr(
          "style",
          blockDiagramVD42YOACInput134.style,
        ),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput134,
          blockDiagramVD42YOACBinding353,
        ),
        (blockDiagramVD42YOACInput134.intersect = function (
          blockDiagramVD42YOACInput229,
        ) {
          return (
            chunkAGHRB4JFI.warn("Intersect called"),
            blockDiagramVD42YOACBinding46.polygon(
              blockDiagramVD42YOACInput134,
              blockDiagramVD42YOACBinding352,
              blockDiagramVD42YOACInput229,
            )
          );
        }),
        shapeSvg
      );
    },
    "question",
  );
  blockDiagramVD42YOACBinding53 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput102, blockDiagramVD42YOACInput103) => {
      let blockDiagramVD42YOACBinding299 = blockDiagramVD42YOACInput102
        .insert("g")
        .attr("class", "node default")
        .attr(
          "id",
          blockDiagramVD42YOACInput103.domId || blockDiagramVD42YOACInput103.id,
        );
      return (
        blockDiagramVD42YOACBinding299
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
        (blockDiagramVD42YOACInput103.width = 28),
        (blockDiagramVD42YOACInput103.height = 28),
        (blockDiagramVD42YOACInput103.intersect = function (
          blockDiagramVD42YOACInput244,
        ) {
          return blockDiagramVD42YOACBinding46.circle(
            blockDiagramVD42YOACInput103,
            14,
            blockDiagramVD42YOACInput244,
          );
        }),
        blockDiagramVD42YOACBinding299
      );
    },
    "choice",
  );
  blockDiagramVD42YOACBinding54 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput131, blockDiagramVD42YOACInput132) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput131,
          blockDiagramVD42YOACInput132,
          blockDiagramVD42YOACBinding51(
            blockDiagramVD42YOACInput132,
            undefined,
          ),
          true,
        ),
        blockDiagramVD42YOACBinding346 =
          bbox.height + blockDiagramVD42YOACInput132.padding,
        blockDiagramVD42YOACBinding347 = blockDiagramVD42YOACBinding346 / 4,
        blockDiagramVD42YOACBinding348 =
          bbox.width +
          2 * blockDiagramVD42YOACBinding347 +
          blockDiagramVD42YOACInput132.padding,
        blockDiagramVD42YOACBinding349 = [
          {
            x: blockDiagramVD42YOACBinding347,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACBinding348 - blockDiagramVD42YOACBinding347,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACBinding348,
            y: -blockDiagramVD42YOACBinding346 / 2,
          },
          {
            x: blockDiagramVD42YOACBinding348 - blockDiagramVD42YOACBinding347,
            y: -blockDiagramVD42YOACBinding346,
          },
          {
            x: blockDiagramVD42YOACBinding347,
            y: -blockDiagramVD42YOACBinding346,
          },
          {
            x: 0,
            y: -blockDiagramVD42YOACBinding346 / 2,
          },
        ],
        blockDiagramVD42YOACBinding350 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACBinding348,
          blockDiagramVD42YOACBinding346,
          blockDiagramVD42YOACBinding349,
        );
      return (
        blockDiagramVD42YOACBinding350.attr(
          "style",
          blockDiagramVD42YOACInput132.style,
        ),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput132,
          blockDiagramVD42YOACBinding350,
        ),
        (blockDiagramVD42YOACInput132.intersect = function (
          blockDiagramVD42YOACInput245,
        ) {
          return blockDiagramVD42YOACBinding46.polygon(
            blockDiagramVD42YOACInput132,
            blockDiagramVD42YOACBinding349,
            blockDiagramVD42YOACInput245,
          );
        }),
        shapeSvg
      );
    },
    "hexagon",
  );
  blockDiagramVD42YOACBinding55 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput161, blockDiagramVD42YOACInput162) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput161,
          blockDiagramVD42YOACInput162,
          undefined,
          true,
        ),
        blockDiagramVD42YOACBinding435 =
          bbox.height + 2 * blockDiagramVD42YOACInput162.padding,
        blockDiagramVD42YOACBinding436 = blockDiagramVD42YOACBinding435 / 2,
        blockDiagramVD42YOACBinding437 =
          bbox.width +
          2 * blockDiagramVD42YOACBinding436 +
          blockDiagramVD42YOACInput162.padding,
        blockDiagramVD42YOACBinding438 = blockDiagramVD42YOACBinding41(
          blockDiagramVD42YOACInput162.directions,
          bbox,
          blockDiagramVD42YOACInput162,
        ),
        blockDiagramVD42YOACBinding439 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACBinding437,
          blockDiagramVD42YOACBinding435,
          blockDiagramVD42YOACBinding438,
        );
      return (
        blockDiagramVD42YOACBinding439.attr(
          "style",
          blockDiagramVD42YOACInput162.style,
        ),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput162,
          blockDiagramVD42YOACBinding439,
        ),
        (blockDiagramVD42YOACInput162.intersect = function (
          blockDiagramVD42YOACInput246,
        ) {
          return blockDiagramVD42YOACBinding46.polygon(
            blockDiagramVD42YOACInput162,
            blockDiagramVD42YOACBinding438,
            blockDiagramVD42YOACInput246,
          );
        }),
        shapeSvg
      );
    },
    "block_arrow",
  );
  blockDiagramVD42YOACBinding56 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput136, blockDiagramVD42YOACInput137) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput136,
          blockDiagramVD42YOACInput137,
          blockDiagramVD42YOACBinding51(
            blockDiagramVD42YOACInput137,
            undefined,
          ),
          true,
        ),
        blockDiagramVD42YOACBinding357 =
          bbox.width + blockDiagramVD42YOACInput137.padding,
        blockDiagramVD42YOACBinding358 =
          bbox.height + blockDiagramVD42YOACInput137.padding,
        blockDiagramVD42YOACBinding359 = [
          {
            x: -blockDiagramVD42YOACBinding358 / 2,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACBinding357,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACBinding357,
            y: -blockDiagramVD42YOACBinding358,
          },
          {
            x: -blockDiagramVD42YOACBinding358 / 2,
            y: -blockDiagramVD42YOACBinding358,
          },
          {
            x: 0,
            y: -blockDiagramVD42YOACBinding358 / 2,
          },
        ];
      return (
        blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACBinding357,
          blockDiagramVD42YOACBinding358,
          blockDiagramVD42YOACBinding359,
        ).attr("style", blockDiagramVD42YOACInput137.style),
        (blockDiagramVD42YOACInput137.width =
          blockDiagramVD42YOACBinding357 + blockDiagramVD42YOACBinding358),
        (blockDiagramVD42YOACInput137.height = blockDiagramVD42YOACBinding358),
        (blockDiagramVD42YOACInput137.intersect = function (
          blockDiagramVD42YOACInput247,
        ) {
          return blockDiagramVD42YOACBinding46.polygon(
            blockDiagramVD42YOACInput137,
            blockDiagramVD42YOACBinding359,
            blockDiagramVD42YOACInput247,
          );
        }),
        shapeSvg
      );
    },
    "rect_left_inv_arrow",
  );
  blockDiagramVD42YOACBinding57 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput146, blockDiagramVD42YOACInput147) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput146,
          blockDiagramVD42YOACInput147,
          blockDiagramVD42YOACBinding51(blockDiagramVD42YOACInput147),
          true,
        ),
        blockDiagramVD42YOACBinding379 =
          bbox.width + blockDiagramVD42YOACInput147.padding,
        blockDiagramVD42YOACBinding380 =
          bbox.height + blockDiagramVD42YOACInput147.padding,
        blockDiagramVD42YOACBinding381 = [
          {
            x: (-2 * blockDiagramVD42YOACBinding380) / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACBinding379 -
              blockDiagramVD42YOACBinding380 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACBinding379 +
              (2 * blockDiagramVD42YOACBinding380) / 6,
            y: -blockDiagramVD42YOACBinding380,
          },
          {
            x: blockDiagramVD42YOACBinding380 / 6,
            y: -blockDiagramVD42YOACBinding380,
          },
        ],
        blockDiagramVD42YOACBinding382 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACBinding379,
          blockDiagramVD42YOACBinding380,
          blockDiagramVD42YOACBinding381,
        );
      return (
        blockDiagramVD42YOACBinding382.attr(
          "style",
          blockDiagramVD42YOACInput147.style,
        ),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput147,
          blockDiagramVD42YOACBinding382,
        ),
        (blockDiagramVD42YOACInput147.intersect = function (
          blockDiagramVD42YOACInput248,
        ) {
          return blockDiagramVD42YOACBinding46.polygon(
            blockDiagramVD42YOACInput147,
            blockDiagramVD42YOACBinding381,
            blockDiagramVD42YOACInput248,
          );
        }),
        shapeSvg
      );
    },
    "lean_right",
  );
  blockDiagramVD42YOACBinding58 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput140, blockDiagramVD42YOACInput141) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput140,
          blockDiagramVD42YOACInput141,
          blockDiagramVD42YOACBinding51(
            blockDiagramVD42YOACInput141,
            undefined,
          ),
          true,
        ),
        blockDiagramVD42YOACBinding366 =
          bbox.width + blockDiagramVD42YOACInput141.padding,
        blockDiagramVD42YOACBinding367 =
          bbox.height + blockDiagramVD42YOACInput141.padding,
        blockDiagramVD42YOACBinding368 = [
          {
            x: (2 * blockDiagramVD42YOACBinding367) / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACBinding366 +
              blockDiagramVD42YOACBinding367 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACBinding366 -
              (2 * blockDiagramVD42YOACBinding367) / 6,
            y: -blockDiagramVD42YOACBinding367,
          },
          {
            x: -blockDiagramVD42YOACBinding367 / 6,
            y: -blockDiagramVD42YOACBinding367,
          },
        ],
        blockDiagramVD42YOACBinding369 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACBinding366,
          blockDiagramVD42YOACBinding367,
          blockDiagramVD42YOACBinding368,
        );
      return (
        blockDiagramVD42YOACBinding369.attr(
          "style",
          blockDiagramVD42YOACInput141.style,
        ),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput141,
          blockDiagramVD42YOACBinding369,
        ),
        (blockDiagramVD42YOACInput141.intersect = function (
          blockDiagramVD42YOACInput249,
        ) {
          return blockDiagramVD42YOACBinding46.polygon(
            blockDiagramVD42YOACInput141,
            blockDiagramVD42YOACBinding368,
            blockDiagramVD42YOACInput249,
          );
        }),
        shapeSvg
      );
    },
    "lean_left",
  );
  blockDiagramVD42YOACBinding59 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput142, blockDiagramVD42YOACInput143) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput142,
          blockDiagramVD42YOACInput143,
          blockDiagramVD42YOACBinding51(
            blockDiagramVD42YOACInput143,
            undefined,
          ),
          true,
        ),
        blockDiagramVD42YOACBinding370 =
          bbox.width + blockDiagramVD42YOACInput143.padding,
        blockDiagramVD42YOACBinding371 =
          bbox.height + blockDiagramVD42YOACInput143.padding,
        blockDiagramVD42YOACBinding372 = [
          {
            x: (-2 * blockDiagramVD42YOACBinding371) / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACBinding370 +
              (2 * blockDiagramVD42YOACBinding371) / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACBinding370 -
              blockDiagramVD42YOACBinding371 / 6,
            y: -blockDiagramVD42YOACBinding371,
          },
          {
            x: blockDiagramVD42YOACBinding371 / 6,
            y: -blockDiagramVD42YOACBinding371,
          },
        ],
        blockDiagramVD42YOACBinding373 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACBinding370,
          blockDiagramVD42YOACBinding371,
          blockDiagramVD42YOACBinding372,
        );
      return (
        blockDiagramVD42YOACBinding373.attr(
          "style",
          blockDiagramVD42YOACInput143.style,
        ),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput143,
          blockDiagramVD42YOACBinding373,
        ),
        (blockDiagramVD42YOACInput143.intersect = function (
          blockDiagramVD42YOACInput250,
        ) {
          return blockDiagramVD42YOACBinding46.polygon(
            blockDiagramVD42YOACInput143,
            blockDiagramVD42YOACBinding372,
            blockDiagramVD42YOACInput250,
          );
        }),
        shapeSvg
      );
    },
    "trapezoid",
  );
  _t = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput144, blockDiagramVD42YOACInput145) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput144,
          blockDiagramVD42YOACInput145,
          blockDiagramVD42YOACBinding51(
            blockDiagramVD42YOACInput145,
            undefined,
          ),
          true,
        ),
        blockDiagramVD42YOACBinding374 =
          bbox.width + blockDiagramVD42YOACInput145.padding,
        blockDiagramVD42YOACBinding375 =
          bbox.height + blockDiagramVD42YOACInput145.padding,
        blockDiagramVD42YOACBinding376 = [
          {
            x: blockDiagramVD42YOACBinding375 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACBinding374 -
              blockDiagramVD42YOACBinding375 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACBinding374 +
              (2 * blockDiagramVD42YOACBinding375) / 6,
            y: -blockDiagramVD42YOACBinding375,
          },
          {
            x: (-2 * blockDiagramVD42YOACBinding375) / 6,
            y: -blockDiagramVD42YOACBinding375,
          },
        ],
        blockDiagramVD42YOACBinding377 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACBinding374,
          blockDiagramVD42YOACBinding375,
          blockDiagramVD42YOACBinding376,
        );
      return (
        blockDiagramVD42YOACBinding377.attr(
          "style",
          blockDiagramVD42YOACInput145.style,
        ),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput145,
          blockDiagramVD42YOACBinding377,
        ),
        (blockDiagramVD42YOACInput145.intersect = function (
          blockDiagramVD42YOACInput251,
        ) {
          return blockDiagramVD42YOACBinding46.polygon(
            blockDiagramVD42YOACInput145,
            blockDiagramVD42YOACBinding376,
            blockDiagramVD42YOACInput251,
          );
        }),
        shapeSvg
      );
    },
    "inv_trapezoid",
  );
  blockDiagramVD42YOACBinding60 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput138, blockDiagramVD42YOACInput139) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput138,
          blockDiagramVD42YOACInput139,
          blockDiagramVD42YOACBinding51(
            blockDiagramVD42YOACInput139,
            undefined,
          ),
          true,
        ),
        blockDiagramVD42YOACBinding361 =
          bbox.width + blockDiagramVD42YOACInput139.padding,
        blockDiagramVD42YOACBinding362 =
          bbox.height + blockDiagramVD42YOACInput139.padding,
        blockDiagramVD42YOACBinding363 = [
          {
            x: 0,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACBinding361 +
              blockDiagramVD42YOACBinding362 / 2,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACBinding361,
            y: -blockDiagramVD42YOACBinding362 / 2,
          },
          {
            x:
              blockDiagramVD42YOACBinding361 +
              blockDiagramVD42YOACBinding362 / 2,
            y: -blockDiagramVD42YOACBinding362,
          },
          {
            x: 0,
            y: -blockDiagramVD42YOACBinding362,
          },
        ],
        blockDiagramVD42YOACBinding364 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACBinding361,
          blockDiagramVD42YOACBinding362,
          blockDiagramVD42YOACBinding363,
        );
      return (
        blockDiagramVD42YOACBinding364.attr(
          "style",
          blockDiagramVD42YOACInput139.style,
        ),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput139,
          blockDiagramVD42YOACBinding364,
        ),
        (blockDiagramVD42YOACInput139.intersect = function (
          blockDiagramVD42YOACInput252,
        ) {
          return blockDiagramVD42YOACBinding46.polygon(
            blockDiagramVD42YOACInput139,
            blockDiagramVD42YOACBinding363,
            blockDiagramVD42YOACInput252,
          );
        }),
        shapeSvg
      );
    },
    "rect_right_inv_arrow",
  );
  blockDiagramVD42YOACBinding61 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput54, blockDiagramVD42YOACInput55) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput54,
          blockDiagramVD42YOACInput55,
          blockDiagramVD42YOACBinding51(blockDiagramVD42YOACInput55, undefined),
          true,
        ),
        blockDiagramVD42YOACBinding226 =
          bbox.width + blockDiagramVD42YOACInput55.padding,
        blockDiagramVD42YOACBinding227 = blockDiagramVD42YOACBinding226 / 2,
        blockDiagramVD42YOACBinding228 =
          blockDiagramVD42YOACBinding227 /
          (2.5 + blockDiagramVD42YOACBinding226 / 50),
        blockDiagramVD42YOACBinding229 =
          bbox.height +
          blockDiagramVD42YOACBinding228 +
          blockDiagramVD42YOACInput55.padding,
        blockDiagramVD42YOACBinding230 =
          "M 0," +
          blockDiagramVD42YOACBinding228 +
          " a " +
          blockDiagramVD42YOACBinding227 +
          "," +
          blockDiagramVD42YOACBinding228 +
          " 0,0,0 " +
          blockDiagramVD42YOACBinding226 +
          " 0 a " +
          blockDiagramVD42YOACBinding227 +
          "," +
          blockDiagramVD42YOACBinding228 +
          " 0,0,0 " +
          -blockDiagramVD42YOACBinding226 +
          " 0 l 0," +
          blockDiagramVD42YOACBinding229 +
          " a " +
          blockDiagramVD42YOACBinding227 +
          "," +
          blockDiagramVD42YOACBinding228 +
          " 0,0,0 " +
          blockDiagramVD42YOACBinding226 +
          " 0 l 0," +
          -blockDiagramVD42YOACBinding229;
      return (
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput55,
          shapeSvg
            .attr("label-offset-y", blockDiagramVD42YOACBinding228)
            .insert("path", ":first-child")
            .attr("style", blockDiagramVD42YOACInput55.style)
            .attr("d", blockDiagramVD42YOACBinding230)
            .attr(
              "transform",
              "translate(" +
                -blockDiagramVD42YOACBinding226 / 2 +
                "," +
                -(
                  blockDiagramVD42YOACBinding229 / 2 +
                  blockDiagramVD42YOACBinding228
                ) +
                ")",
            ),
        ),
        (blockDiagramVD42YOACInput55.intersect = function (
          blockDiagramVD42YOACInput150,
        ) {
          let blockDiagramVD42YOACBinding394 =
              blockDiagramVD42YOACBinding46.rect(
                blockDiagramVD42YOACInput55,
                blockDiagramVD42YOACInput150,
              ),
            blockDiagramVD42YOACBinding395 =
              blockDiagramVD42YOACBinding394.x - blockDiagramVD42YOACInput55.x;
          if (
            blockDiagramVD42YOACBinding227 != 0 &&
            (Math.abs(blockDiagramVD42YOACBinding395) <
              blockDiagramVD42YOACInput55.width / 2 ||
              (Math.abs(blockDiagramVD42YOACBinding395) ==
                blockDiagramVD42YOACInput55.width / 2 &&
                Math.abs(
                  blockDiagramVD42YOACBinding394.y -
                    blockDiagramVD42YOACInput55.y,
                ) >
                  blockDiagramVD42YOACInput55.height / 2 -
                    blockDiagramVD42YOACBinding228))
          ) {
            let blockDiagramVD42YOACBinding498 =
              blockDiagramVD42YOACBinding228 *
              blockDiagramVD42YOACBinding228 *
              (1 -
                (blockDiagramVD42YOACBinding395 *
                  blockDiagramVD42YOACBinding395) /
                  (blockDiagramVD42YOACBinding227 *
                    blockDiagramVD42YOACBinding227));
            blockDiagramVD42YOACBinding498 != 0 &&
              (blockDiagramVD42YOACBinding498 = Math.sqrt(
                blockDiagramVD42YOACBinding498,
              ));
            blockDiagramVD42YOACBinding498 =
              blockDiagramVD42YOACBinding228 - blockDiagramVD42YOACBinding498;
            blockDiagramVD42YOACInput150.y - blockDiagramVD42YOACInput55.y >
              0 &&
              (blockDiagramVD42YOACBinding498 =
                -blockDiagramVD42YOACBinding498);
            blockDiagramVD42YOACBinding394.y += blockDiagramVD42YOACBinding498;
          }
          return blockDiagramVD42YOACBinding394;
        }),
        shapeSvg
      );
    },
    "cylinder",
  );
  blockDiagramVD42YOACBinding62 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput79, blockDiagramVD42YOACInput80) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput79,
          blockDiagramVD42YOACInput80,
          "node " +
            blockDiagramVD42YOACInput80.classes +
            " " +
            blockDiagramVD42YOACInput80.class,
          true,
        ),
        blockDiagramVD42YOACBinding274 = shapeSvg.insert(
          "rect",
          ":first-child",
        ),
        blockDiagramVD42YOACBinding275 = blockDiagramVD42YOACInput80.positioned
          ? blockDiagramVD42YOACInput80.width
          : bbox.width + blockDiagramVD42YOACInput80.padding,
        blockDiagramVD42YOACBinding276 = blockDiagramVD42YOACInput80.positioned
          ? blockDiagramVD42YOACInput80.height
          : bbox.height + blockDiagramVD42YOACInput80.padding,
        blockDiagramVD42YOACBinding277 = blockDiagramVD42YOACInput80.positioned
          ? -blockDiagramVD42YOACBinding275 / 2
          : -bbox.width / 2 - halfPadding,
        blockDiagramVD42YOACBinding278 = blockDiagramVD42YOACInput80.positioned
          ? -blockDiagramVD42YOACBinding276 / 2
          : -bbox.height / 2 - halfPadding;
      if (
        (blockDiagramVD42YOACBinding274
          .attr("class", "basic label-container")
          .attr("style", blockDiagramVD42YOACInput80.style)
          .attr("rx", blockDiagramVD42YOACInput80.rx)
          .attr("ry", blockDiagramVD42YOACInput80.ry)
          .attr("x", blockDiagramVD42YOACBinding277)
          .attr("y", blockDiagramVD42YOACBinding278)
          .attr("width", blockDiagramVD42YOACBinding275)
          .attr("height", blockDiagramVD42YOACBinding276),
        blockDiagramVD42YOACInput80.props)
      ) {
        let blockDiagramVD42YOACBinding491 = new Set(
          Object.keys(blockDiagramVD42YOACInput80.props),
        );
        blockDiagramVD42YOACInput80.props.borders &&
          (blockDiagramVD42YOACHelper17(
            blockDiagramVD42YOACBinding274,
            blockDiagramVD42YOACInput80.props.borders,
            blockDiagramVD42YOACBinding275,
            blockDiagramVD42YOACBinding276,
          ),
          blockDiagramVD42YOACBinding491.delete("borders"));
        blockDiagramVD42YOACBinding491.forEach((item) => {
          chunkAGHRB4JFI.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput80,
          blockDiagramVD42YOACBinding274,
        ),
        (blockDiagramVD42YOACInput80.intersect = function (
          blockDiagramVD42YOACInput257,
        ) {
          return blockDiagramVD42YOACBinding46.rect(
            blockDiagramVD42YOACInput80,
            blockDiagramVD42YOACInput257,
          );
        }),
        shapeSvg
      );
    },
    "rect",
  );
  blockDiagramVD42YOACBinding63 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput77, blockDiagramVD42YOACInput78) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput77,
          blockDiagramVD42YOACInput78,
          "node " + blockDiagramVD42YOACInput78.classes,
          true,
        ),
        blockDiagramVD42YOACBinding269 = shapeSvg.insert(
          "rect",
          ":first-child",
        ),
        blockDiagramVD42YOACBinding270 = blockDiagramVD42YOACInput78.positioned
          ? blockDiagramVD42YOACInput78.width
          : bbox.width + blockDiagramVD42YOACInput78.padding,
        blockDiagramVD42YOACBinding271 = blockDiagramVD42YOACInput78.positioned
          ? blockDiagramVD42YOACInput78.height
          : bbox.height + blockDiagramVD42YOACInput78.padding,
        blockDiagramVD42YOACBinding272 = blockDiagramVD42YOACInput78.positioned
          ? -blockDiagramVD42YOACBinding270 / 2
          : -bbox.width / 2 - halfPadding,
        blockDiagramVD42YOACBinding273 = blockDiagramVD42YOACInput78.positioned
          ? -blockDiagramVD42YOACBinding271 / 2
          : -bbox.height / 2 - halfPadding;
      if (
        (blockDiagramVD42YOACBinding269
          .attr("class", "basic cluster composite label-container")
          .attr("style", blockDiagramVD42YOACInput78.style)
          .attr("rx", blockDiagramVD42YOACInput78.rx)
          .attr("ry", blockDiagramVD42YOACInput78.ry)
          .attr("x", blockDiagramVD42YOACBinding272)
          .attr("y", blockDiagramVD42YOACBinding273)
          .attr("width", blockDiagramVD42YOACBinding270)
          .attr("height", blockDiagramVD42YOACBinding271),
        blockDiagramVD42YOACInput78.props)
      ) {
        let blockDiagramVD42YOACBinding492 = new Set(
          Object.keys(blockDiagramVD42YOACInput78.props),
        );
        blockDiagramVD42YOACInput78.props.borders &&
          (blockDiagramVD42YOACHelper17(
            blockDiagramVD42YOACBinding269,
            blockDiagramVD42YOACInput78.props.borders,
            blockDiagramVD42YOACBinding270,
            blockDiagramVD42YOACBinding271,
          ),
          blockDiagramVD42YOACBinding492.delete("borders"));
        blockDiagramVD42YOACBinding492.forEach((item) => {
          chunkAGHRB4JFI.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput78,
          blockDiagramVD42YOACBinding269,
        ),
        (blockDiagramVD42YOACInput78.intersect = function (
          blockDiagramVD42YOACInput258,
        ) {
          return blockDiagramVD42YOACBinding46.rect(
            blockDiagramVD42YOACInput78,
            blockDiagramVD42YOACInput258,
          );
        }),
        shapeSvg
      );
    },
    "composite",
  );
  blockDiagramVD42YOACBinding64 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput119, blockDiagramVD42YOACInput120) => {
      let { shapeSvg } = await blockDiagramVD42YOACBinding47(
        blockDiagramVD42YOACInput119,
        blockDiagramVD42YOACInput120,
        "label",
        true,
      );
      chunkAGHRB4JFI.trace("Classes = ", blockDiagramVD42YOACInput120.class);
      let blockDiagramVD42YOACBinding333 = shapeSvg.insert(
        "rect",
        ":first-child",
      );
      if (
        (blockDiagramVD42YOACBinding333.attr("width", 0).attr("height", 0),
        shapeSvg.attr("class", "label edgeLabel"),
        blockDiagramVD42YOACInput120.props)
      ) {
        let blockDiagramVD42YOACBinding493 = new Set(
          Object.keys(blockDiagramVD42YOACInput120.props),
        );
        blockDiagramVD42YOACInput120.props.borders &&
          (blockDiagramVD42YOACHelper17(
            blockDiagramVD42YOACBinding333,
            blockDiagramVD42YOACInput120.props.borders,
            0,
            0,
          ),
          blockDiagramVD42YOACBinding493.delete("borders"));
        blockDiagramVD42YOACBinding493.forEach((item) => {
          chunkAGHRB4JFI.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput120,
          blockDiagramVD42YOACBinding333,
        ),
        (blockDiagramVD42YOACInput120.intersect = function (
          blockDiagramVD42YOACInput259,
        ) {
          return blockDiagramVD42YOACBinding46.rect(
            blockDiagramVD42YOACInput120,
            blockDiagramVD42YOACInput259,
          );
        }),
        shapeSvg
      );
    },
    "labelRect",
  );
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper17, "applyNodePropertyBorders");
  blockDiagramVD42YOACBinding65 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput30, blockDiagramVD42YOACInput31) => {
      let blockDiagramVD42YOACBinding174;
      blockDiagramVD42YOACBinding174 = blockDiagramVD42YOACInput31.classes
        ? "node " + blockDiagramVD42YOACInput31.classes
        : "node default";
      let blockDiagramVD42YOACBinding175 = blockDiagramVD42YOACInput30
          .insert("g")
          .attr("class", blockDiagramVD42YOACBinding174)
          .attr(
            "id",
            blockDiagramVD42YOACInput31.domId || blockDiagramVD42YOACInput31.id,
          ),
        blockDiagramVD42YOACBinding176 = blockDiagramVD42YOACBinding175.insert(
          "rect",
          ":first-child",
        ),
        blockDiagramVD42YOACBinding177 =
          blockDiagramVD42YOACBinding175.insert("line"),
        blockDiagramVD42YOACBinding178 = blockDiagramVD42YOACBinding175
          .insert("g")
          .attr("class", "label"),
        blockDiagramVD42YOACBinding179 = blockDiagramVD42YOACInput31.labelText
          .flat
          ? blockDiagramVD42YOACInput31.labelText.flat()
          : blockDiagramVD42YOACInput31.labelText,
        blockDiagramVD42YOACBinding180 = "";
      blockDiagramVD42YOACBinding180 =
        typeof blockDiagramVD42YOACBinding179 == "object"
          ? blockDiagramVD42YOACBinding179[0]
          : blockDiagramVD42YOACBinding179;
      chunkAGHRB4JFI.info(
        "Label text abc79",
        blockDiagramVD42YOACBinding180,
        blockDiagramVD42YOACBinding179,
        typeof blockDiagramVD42YOACBinding179 == "object",
      );
      let blockDiagramVD42YOACBinding181 = blockDiagramVD42YOACBinding178
          .node()
          .appendChild(
            await blockDiagramVD42YOACBinding29(
              blockDiagramVD42YOACBinding180,
              blockDiagramVD42YOACInput31.labelStyle,
              true,
              true,
            ),
          ),
        blockDiagramVD42YOACBinding182 = {
          width: 0,
          height: 0,
        };
      if (chunkABZYJK2DH(chunkABZYJK2DB().flowchart.htmlLabels)) {
        let blockDiagramVD42YOACBinding521 =
            blockDiagramVD42YOACBinding181.children[0],
          blockDiagramVD42YOACBinding522 = srcR(blockDiagramVD42YOACBinding181);
        blockDiagramVD42YOACBinding182 =
          blockDiagramVD42YOACBinding521.getBoundingClientRect();
        blockDiagramVD42YOACBinding522.attr(
          "width",
          blockDiagramVD42YOACBinding182.width,
        );
        blockDiagramVD42YOACBinding522.attr(
          "height",
          blockDiagramVD42YOACBinding182.height,
        );
      }
      chunkAGHRB4JFI.info("Text 2", blockDiagramVD42YOACBinding179);
      let blockDiagramVD42YOACBinding183 = blockDiagramVD42YOACBinding179.slice(
          1,
          blockDiagramVD42YOACBinding179.length,
        ),
        blockDiagramVD42YOACBinding184 =
          blockDiagramVD42YOACBinding181.getBBox(),
        blockDiagramVD42YOACBinding185 = blockDiagramVD42YOACBinding178
          .node()
          .appendChild(
            await blockDiagramVD42YOACBinding29(
              blockDiagramVD42YOACBinding183.join
                ? blockDiagramVD42YOACBinding183.join("<br/>")
                : blockDiagramVD42YOACBinding183,
              blockDiagramVD42YOACInput31.labelStyle,
              true,
              true,
            ),
          );
      if (chunkABZYJK2DH(chunkABZYJK2DB().flowchart.htmlLabels)) {
        let blockDiagramVD42YOACBinding523 =
            blockDiagramVD42YOACBinding185.children[0],
          blockDiagramVD42YOACBinding524 = srcR(blockDiagramVD42YOACBinding185);
        blockDiagramVD42YOACBinding182 =
          blockDiagramVD42YOACBinding523.getBoundingClientRect();
        blockDiagramVD42YOACBinding524.attr(
          "width",
          blockDiagramVD42YOACBinding182.width,
        );
        blockDiagramVD42YOACBinding524.attr(
          "height",
          blockDiagramVD42YOACBinding182.height,
        );
      }
      let blockDiagramVD42YOACBinding186 =
        blockDiagramVD42YOACInput31.padding / 2;
      return (
        srcR(blockDiagramVD42YOACBinding185).attr(
          "transform",
          "translate( " +
            (blockDiagramVD42YOACBinding182.width >
            blockDiagramVD42YOACBinding184.width
              ? 0
              : (blockDiagramVD42YOACBinding184.width -
                  blockDiagramVD42YOACBinding182.width) /
                2) +
            ", " +
            (blockDiagramVD42YOACBinding184.height +
              blockDiagramVD42YOACBinding186 +
              5) +
            ")",
        ),
        srcR(blockDiagramVD42YOACBinding181).attr(
          "transform",
          "translate( " +
            (blockDiagramVD42YOACBinding182.width <
            blockDiagramVD42YOACBinding184.width
              ? 0
              : -(
                  blockDiagramVD42YOACBinding184.width -
                  blockDiagramVD42YOACBinding182.width
                ) / 2) +
            ", 0)",
        ),
        (blockDiagramVD42YOACBinding182 = blockDiagramVD42YOACBinding178
          .node()
          .getBBox()),
        blockDiagramVD42YOACBinding178.attr(
          "transform",
          "translate(" +
            -blockDiagramVD42YOACBinding182.width / 2 +
            ", " +
            (-blockDiagramVD42YOACBinding182.height / 2 -
              blockDiagramVD42YOACBinding186 +
              3) +
            ")",
        ),
        blockDiagramVD42YOACBinding176
          .attr("class", "outer title-state")
          .attr(
            "x",
            -blockDiagramVD42YOACBinding182.width / 2 -
              blockDiagramVD42YOACBinding186,
          )
          .attr(
            "y",
            -blockDiagramVD42YOACBinding182.height / 2 -
              blockDiagramVD42YOACBinding186,
          )
          .attr(
            "width",
            blockDiagramVD42YOACBinding182.width +
              blockDiagramVD42YOACInput31.padding,
          )
          .attr(
            "height",
            blockDiagramVD42YOACBinding182.height +
              blockDiagramVD42YOACInput31.padding,
          ),
        blockDiagramVD42YOACBinding177
          .attr("class", "divider")
          .attr(
            "x1",
            -blockDiagramVD42YOACBinding182.width / 2 -
              blockDiagramVD42YOACBinding186,
          )
          .attr(
            "x2",
            blockDiagramVD42YOACBinding182.width / 2 +
              blockDiagramVD42YOACBinding186,
          )
          .attr(
            "y1",
            -blockDiagramVD42YOACBinding182.height / 2 -
              blockDiagramVD42YOACBinding186 +
              blockDiagramVD42YOACBinding184.height +
              blockDiagramVD42YOACBinding186,
          )
          .attr(
            "y2",
            -blockDiagramVD42YOACBinding182.height / 2 -
              blockDiagramVD42YOACBinding186 +
              blockDiagramVD42YOACBinding184.height +
              blockDiagramVD42YOACBinding186,
          ),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput31,
          blockDiagramVD42YOACBinding176,
        ),
        (blockDiagramVD42YOACInput31.intersect = function (
          blockDiagramVD42YOACInput260,
        ) {
          return blockDiagramVD42YOACBinding46.rect(
            blockDiagramVD42YOACInput31,
            blockDiagramVD42YOACInput260,
          );
        }),
        blockDiagramVD42YOACBinding175
      );
    },
    "rectWithTitle",
  );
  blockDiagramVD42YOACBinding66 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput129, blockDiagramVD42YOACInput130) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput129,
          blockDiagramVD42YOACInput130,
          blockDiagramVD42YOACBinding51(
            blockDiagramVD42YOACInput130,
            undefined,
          ),
          true,
        ),
        blockDiagramVD42YOACBinding344 =
          bbox.height + blockDiagramVD42YOACInput130.padding,
        blockDiagramVD42YOACBinding345 =
          bbox.width +
          blockDiagramVD42YOACBinding344 / 4 +
          blockDiagramVD42YOACInput130.padding;
      return (
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput130,
          shapeSvg
            .insert("rect", ":first-child")
            .attr("style", blockDiagramVD42YOACInput130.style)
            .attr("rx", blockDiagramVD42YOACBinding344 / 2)
            .attr("ry", blockDiagramVD42YOACBinding344 / 2)
            .attr("x", -blockDiagramVD42YOACBinding345 / 2)
            .attr("y", -blockDiagramVD42YOACBinding344 / 2)
            .attr("width", blockDiagramVD42YOACBinding345)
            .attr("height", blockDiagramVD42YOACBinding344),
        ),
        (blockDiagramVD42YOACInput130.intersect = function (
          blockDiagramVD42YOACInput261,
        ) {
          return blockDiagramVD42YOACBinding46.rect(
            blockDiagramVD42YOACInput130,
            blockDiagramVD42YOACInput261,
          );
        }),
        shapeSvg
      );
    },
    "stadium",
  );
  blockDiagramVD42YOACBinding67 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput109, blockDiagramVD42YOACInput110) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput109,
          blockDiagramVD42YOACInput110,
          blockDiagramVD42YOACBinding51(
            blockDiagramVD42YOACInput110,
            undefined,
          ),
          true,
        ),
        blockDiagramVD42YOACBinding324 = shapeSvg.insert(
          "circle",
          ":first-child",
        );
      return (
        blockDiagramVD42YOACBinding324
          .attr("style", blockDiagramVD42YOACInput110.style)
          .attr("rx", blockDiagramVD42YOACInput110.rx)
          .attr("ry", blockDiagramVD42YOACInput110.ry)
          .attr("r", bbox.width / 2 + halfPadding)
          .attr("width", bbox.width + blockDiagramVD42YOACInput110.padding)
          .attr("height", bbox.height + blockDiagramVD42YOACInput110.padding),
        chunkAGHRB4JFI.info("Circle main"),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput110,
          blockDiagramVD42YOACBinding324,
        ),
        (blockDiagramVD42YOACInput110.intersect = function (
          blockDiagramVD42YOACInput205,
        ) {
          return (
            chunkAGHRB4JFI.info(
              "Circle intersect",
              blockDiagramVD42YOACInput110,
              bbox.width / 2 + halfPadding,
              blockDiagramVD42YOACInput205,
            ),
            blockDiagramVD42YOACBinding46.circle(
              blockDiagramVD42YOACInput110,
              bbox.width / 2 + halfPadding,
              blockDiagramVD42YOACInput205,
            )
          );
        }),
        shapeSvg
      );
    },
    "circle",
  );
  blockDiagramVD42YOACBinding68 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput84, blockDiagramVD42YOACInput85) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput84,
          blockDiagramVD42YOACInput85,
          blockDiagramVD42YOACBinding51(blockDiagramVD42YOACInput85, undefined),
          true,
        ),
        blockDiagramVD42YOACBinding283 = shapeSvg.insert("g", ":first-child"),
        blockDiagramVD42YOACBinding284 =
          blockDiagramVD42YOACBinding283.insert("circle"),
        blockDiagramVD42YOACBinding285 =
          blockDiagramVD42YOACBinding283.insert("circle");
      return (
        blockDiagramVD42YOACBinding283.attr(
          "class",
          blockDiagramVD42YOACInput85.class,
        ),
        blockDiagramVD42YOACBinding284
          .attr("style", blockDiagramVD42YOACInput85.style)
          .attr("rx", blockDiagramVD42YOACInput85.rx)
          .attr("ry", blockDiagramVD42YOACInput85.ry)
          .attr("r", bbox.width / 2 + halfPadding + 5)
          .attr("width", bbox.width + blockDiagramVD42YOACInput85.padding + 10)
          .attr(
            "height",
            bbox.height + blockDiagramVD42YOACInput85.padding + 10,
          ),
        blockDiagramVD42YOACBinding285
          .attr("style", blockDiagramVD42YOACInput85.style)
          .attr("rx", blockDiagramVD42YOACInput85.rx)
          .attr("ry", blockDiagramVD42YOACInput85.ry)
          .attr("r", bbox.width / 2 + halfPadding)
          .attr("width", bbox.width + blockDiagramVD42YOACInput85.padding)
          .attr("height", bbox.height + blockDiagramVD42YOACInput85.padding),
        chunkAGHRB4JFI.info("DoubleCircle main"),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput85,
          blockDiagramVD42YOACBinding284,
        ),
        (blockDiagramVD42YOACInput85.intersect = function (
          blockDiagramVD42YOACInput201,
        ) {
          return (
            chunkAGHRB4JFI.info(
              "DoubleCircle intersect",
              blockDiagramVD42YOACInput85,
              bbox.width / 2 + halfPadding + 5,
              blockDiagramVD42YOACInput201,
            ),
            blockDiagramVD42YOACBinding46.circle(
              blockDiagramVD42YOACInput85,
              bbox.width / 2 + halfPadding + 5,
              blockDiagramVD42YOACInput201,
            )
          );
        }),
        shapeSvg
      );
    },
    "doublecircle",
  );
  blockDiagramVD42YOACBinding69 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACInput117, blockDiagramVD42YOACInput118) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACBinding47(
          blockDiagramVD42YOACInput117,
          blockDiagramVD42YOACInput118,
          blockDiagramVD42YOACBinding51(
            blockDiagramVD42YOACInput118,
            undefined,
          ),
          true,
        ),
        blockDiagramVD42YOACBinding329 =
          bbox.width + blockDiagramVD42YOACInput118.padding,
        blockDiagramVD42YOACBinding330 =
          bbox.height + blockDiagramVD42YOACInput118.padding,
        blockDiagramVD42YOACBinding331 = [
          {
            x: 0,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACBinding329,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACBinding329,
            y: -blockDiagramVD42YOACBinding330,
          },
          {
            x: 0,
            y: -blockDiagramVD42YOACBinding330,
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
            x: blockDiagramVD42YOACBinding329 + 8,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACBinding329 + 8,
            y: -blockDiagramVD42YOACBinding330,
          },
          {
            x: -8,
            y: -blockDiagramVD42YOACBinding330,
          },
          {
            x: -8,
            y: 0,
          },
        ],
        blockDiagramVD42YOACBinding332 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACBinding329,
          blockDiagramVD42YOACBinding330,
          blockDiagramVD42YOACBinding331,
        );
      return (
        blockDiagramVD42YOACBinding332.attr(
          "style",
          blockDiagramVD42YOACInput118.style,
        ),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput118,
          blockDiagramVD42YOACBinding332,
        ),
        (blockDiagramVD42YOACInput118.intersect = function (
          blockDiagramVD42YOACInput253,
        ) {
          return blockDiagramVD42YOACBinding46.polygon(
            blockDiagramVD42YOACInput118,
            blockDiagramVD42YOACBinding331,
            blockDiagramVD42YOACInput253,
          );
        }),
        shapeSvg
      );
    },
    "subroutine",
  );
  blockDiagramVD42YOACBinding70 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput157, blockDiagramVD42YOACInput158) => {
      let blockDiagramVD42YOACBinding419 = blockDiagramVD42YOACInput157
          .insert("g")
          .attr("class", "node default")
          .attr(
            "id",
            blockDiagramVD42YOACInput158.domId ||
              blockDiagramVD42YOACInput158.id,
          ),
        blockDiagramVD42YOACBinding420 = blockDiagramVD42YOACBinding419.insert(
          "circle",
          ":first-child",
        );
      return (
        blockDiagramVD42YOACBinding420
          .attr("class", "state-start")
          .attr("r", 7)
          .attr("width", 14)
          .attr("height", 14),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput158,
          blockDiagramVD42YOACBinding420,
        ),
        (blockDiagramVD42YOACInput158.intersect = function (
          blockDiagramVD42YOACInput254,
        ) {
          return blockDiagramVD42YOACBinding46.circle(
            blockDiagramVD42YOACInput158,
            7,
            blockDiagramVD42YOACInput254,
          );
        }),
        blockDiagramVD42YOACBinding419
      );
    },
    "start",
  );
  blockDiagramVD42YOACBinding71 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACInput121,
      blockDiagramVD42YOACInput122,
      blockDiagramVD42YOACInput123,
    ) => {
      let blockDiagramVD42YOACBinding334 = blockDiagramVD42YOACInput121
          .insert("g")
          .attr("class", "node default")
          .attr(
            "id",
            blockDiagramVD42YOACInput122.domId ||
              blockDiagramVD42YOACInput122.id,
          ),
        blockDiagramVD42YOACBinding335 = 70,
        blockDiagramVD42YOACBinding336 = 10;
      return (
        blockDiagramVD42YOACInput123 === "LR" &&
          ((blockDiagramVD42YOACBinding335 = 10),
          (blockDiagramVD42YOACBinding336 = 70)),
        blockDiagramVD42YOACBinding48(
          blockDiagramVD42YOACInput122,
          blockDiagramVD42YOACBinding334
            .append("rect")
            .attr("x", (-1 * blockDiagramVD42YOACBinding335) / 2)
            .attr("y", (-1 * blockDiagramVD42YOACBinding336) / 2)
            .attr("width", blockDiagramVD42YOACBinding335)
            .attr("height", blockDiagramVD42YOACBinding336)
            .attr("class", "fork-join"),
        ),
        (blockDiagramVD42YOACInput122.height +=
          blockDiagramVD42YOACInput122.padding / 2),
        (blockDiagramVD42YOACInput122.width +=
          blockDiagramVD42YOACInput122.padding / 2),
        (blockDiagramVD42YOACInput122.intersect = function (
          blockDiagramVD42YOACInput262,
        ) {
          return blockDiagramVD42YOACBinding46.rect(
            blockDiagramVD42YOACInput122,
            blockDiagramVD42YOACInput262,
          );
        }),
        blockDiagramVD42YOACBinding334
      );
    },
    "forkJoin",
  );
  blockDiagramVD42YOACBinding72 = {
    rhombus: blockDiagramVD42YOACBinding52,
    composite: blockDiagramVD42YOACBinding63,
    question: blockDiagramVD42YOACBinding52,
    rect: blockDiagramVD42YOACBinding62,
    labelRect: blockDiagramVD42YOACBinding64,
    rectWithTitle: blockDiagramVD42YOACBinding65,
    choice: blockDiagramVD42YOACBinding53,
    circle: blockDiagramVD42YOACBinding67,
    doublecircle: blockDiagramVD42YOACBinding68,
    stadium: blockDiagramVD42YOACBinding66,
    hexagon: blockDiagramVD42YOACBinding54,
    block_arrow: blockDiagramVD42YOACBinding55,
    rect_left_inv_arrow: blockDiagramVD42YOACBinding56,
    lean_right: blockDiagramVD42YOACBinding57,
    lean_left: blockDiagramVD42YOACBinding58,
    trapezoid: blockDiagramVD42YOACBinding59,
    inv_trapezoid: _t,
    rect_right_inv_arrow: blockDiagramVD42YOACBinding60,
    cylinder: blockDiagramVD42YOACBinding61,
    start: blockDiagramVD42YOACBinding70,
    end: chunkAGHRB4JFN(
      (blockDiagramVD42YOACInput111, blockDiagramVD42YOACInput112) => {
        let blockDiagramVD42YOACBinding325 = blockDiagramVD42YOACInput111
            .insert("g")
            .attr("class", "node default")
            .attr(
              "id",
              blockDiagramVD42YOACInput112.domId ||
                blockDiagramVD42YOACInput112.id,
            ),
          blockDiagramVD42YOACBinding326 =
            blockDiagramVD42YOACBinding325.insert("circle", ":first-child"),
          blockDiagramVD42YOACBinding327 =
            blockDiagramVD42YOACBinding325.insert("circle", ":first-child");
        return (
          blockDiagramVD42YOACBinding327
            .attr("class", "state-start")
            .attr("r", 7)
            .attr("width", 14)
            .attr("height", 14),
          blockDiagramVD42YOACBinding326
            .attr("class", "state-end")
            .attr("r", 5)
            .attr("width", 10)
            .attr("height", 10),
          blockDiagramVD42YOACBinding48(
            blockDiagramVD42YOACInput112,
            blockDiagramVD42YOACBinding327,
          ),
          (blockDiagramVD42YOACInput112.intersect = function (
            blockDiagramVD42YOACInput241,
          ) {
            return blockDiagramVD42YOACBinding46.circle(
              blockDiagramVD42YOACInput112,
              7,
              blockDiagramVD42YOACInput241,
            );
          }),
          blockDiagramVD42YOACBinding325
        );
      },
      "end",
    ),
    note: blockDiagramVD42YOACBinding49,
    subroutine: blockDiagramVD42YOACBinding69,
    fork: blockDiagramVD42YOACBinding71,
    join: blockDiagramVD42YOACBinding71,
    class_box: chunkAGHRB4JFN(
      async (blockDiagramVD42YOACInput15, blockDiagramVD42YOACInput16) => {
        let blockDiagramVD42YOACBinding102 =
            blockDiagramVD42YOACInput16.padding / 2,
          blockDiagramVD42YOACBinding103;
        blockDiagramVD42YOACBinding103 = blockDiagramVD42YOACInput16.classes
          ? "node " + blockDiagramVD42YOACInput16.classes
          : "node default";
        let blockDiagramVD42YOACBinding104 = blockDiagramVD42YOACInput15
            .insert("g")
            .attr("class", blockDiagramVD42YOACBinding103)
            .attr(
              "id",
              blockDiagramVD42YOACInput16.domId ||
                blockDiagramVD42YOACInput16.id,
            ),
          blockDiagramVD42YOACBinding105 =
            blockDiagramVD42YOACBinding104.insert("rect", ":first-child"),
          blockDiagramVD42YOACBinding106 =
            blockDiagramVD42YOACBinding104.insert("line"),
          blockDiagramVD42YOACBinding107 =
            blockDiagramVD42YOACBinding104.insert("line"),
          blockDiagramVD42YOACBinding108 = 0,
          blockDiagramVD42YOACBinding109 = 4,
          blockDiagramVD42YOACBinding110 = blockDiagramVD42YOACBinding104
            .insert("g")
            .attr("class", "label"),
          blockDiagramVD42YOACBinding111 = 0,
          blockDiagramVD42YOACBinding112 =
            blockDiagramVD42YOACInput16.classData.annotations?.[0],
          blockDiagramVD42YOACBinding113 = blockDiagramVD42YOACInput16.classData
            .annotations[0]
            ? "«" + blockDiagramVD42YOACInput16.classData.annotations[0] + "»"
            : "",
          blockDiagramVD42YOACBinding114 = blockDiagramVD42YOACBinding110
            .node()
            .appendChild(
              await blockDiagramVD42YOACBinding29(
                blockDiagramVD42YOACBinding113,
                blockDiagramVD42YOACInput16.labelStyle,
                true,
                true,
              ),
            ),
          blockDiagramVD42YOACBinding115 =
            blockDiagramVD42YOACBinding114.getBBox();
        if (chunkABZYJK2DH(chunkABZYJK2DB().flowchart.htmlLabels)) {
          let blockDiagramVD42YOACBinding509 =
              blockDiagramVD42YOACBinding114.children[0],
            blockDiagramVD42YOACBinding510 = srcR(
              blockDiagramVD42YOACBinding114,
            );
          blockDiagramVD42YOACBinding115 =
            blockDiagramVD42YOACBinding509.getBoundingClientRect();
          blockDiagramVD42YOACBinding510.attr(
            "width",
            blockDiagramVD42YOACBinding115.width,
          );
          blockDiagramVD42YOACBinding510.attr(
            "height",
            blockDiagramVD42YOACBinding115.height,
          );
        }
        blockDiagramVD42YOACInput16.classData.annotations[0] &&
          ((blockDiagramVD42YOACBinding109 +=
            blockDiagramVD42YOACBinding115.height + 4),
          (blockDiagramVD42YOACBinding108 +=
            blockDiagramVD42YOACBinding115.width));
        let blockDiagramVD42YOACBinding116 =
          blockDiagramVD42YOACInput16.classData.label;
        blockDiagramVD42YOACInput16.classData.type !== undefined &&
          blockDiagramVD42YOACInput16.classData.type !== "" &&
          (chunkABZYJK2DB().flowchart.htmlLabels
            ? (blockDiagramVD42YOACBinding116 +=
                "&lt;" + blockDiagramVD42YOACInput16.classData.type + "&gt;")
            : (blockDiagramVD42YOACBinding116 +=
                "<" + blockDiagramVD42YOACInput16.classData.type + ">"));
        let blockDiagramVD42YOACBinding117 = blockDiagramVD42YOACBinding110
          .node()
          .appendChild(
            await blockDiagramVD42YOACBinding29(
              blockDiagramVD42YOACBinding116,
              blockDiagramVD42YOACInput16.labelStyle,
              true,
              true,
            ),
          );
        srcR(blockDiagramVD42YOACBinding117).attr("class", "classTitle");
        let blockDiagramVD42YOACBinding118 =
          blockDiagramVD42YOACBinding117.getBBox();
        if (chunkABZYJK2DH(chunkABZYJK2DB().flowchart.htmlLabels)) {
          let blockDiagramVD42YOACBinding511 =
              blockDiagramVD42YOACBinding117.children[0],
            blockDiagramVD42YOACBinding512 = srcR(
              blockDiagramVD42YOACBinding117,
            );
          blockDiagramVD42YOACBinding118 =
            blockDiagramVD42YOACBinding511.getBoundingClientRect();
          blockDiagramVD42YOACBinding512.attr(
            "width",
            blockDiagramVD42YOACBinding118.width,
          );
          blockDiagramVD42YOACBinding512.attr(
            "height",
            blockDiagramVD42YOACBinding118.height,
          );
        }
        blockDiagramVD42YOACBinding109 +=
          blockDiagramVD42YOACBinding118.height + 4;
        blockDiagramVD42YOACBinding118.width > blockDiagramVD42YOACBinding108 &&
          (blockDiagramVD42YOACBinding108 =
            blockDiagramVD42YOACBinding118.width);
        let blockDiagramVD42YOACBinding119 = [];
        blockDiagramVD42YOACInput16.classData.members.forEach(async (item) => {
          let blockDiagramVD42YOACBinding319 = item.getDisplayDetails(),
            blockDiagramVD42YOACBinding320 =
              blockDiagramVD42YOACBinding319.displayText;
          chunkABZYJK2DB().flowchart.htmlLabels &&
            (blockDiagramVD42YOACBinding320 = blockDiagramVD42YOACBinding320
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;"));
          let blockDiagramVD42YOACBinding321 = blockDiagramVD42YOACBinding110
              .node()
              .appendChild(
                await blockDiagramVD42YOACBinding29(
                  blockDiagramVD42YOACBinding320,
                  blockDiagramVD42YOACBinding319.cssStyle
                    ? blockDiagramVD42YOACBinding319.cssStyle
                    : blockDiagramVD42YOACInput16.labelStyle,
                  true,
                  true,
                ),
              ),
            blockDiagramVD42YOACBinding322 =
              blockDiagramVD42YOACBinding321.getBBox();
          if (chunkABZYJK2DH(chunkABZYJK2DB().flowchart.htmlLabels)) {
            let blockDiagramVD42YOACBinding499 =
                blockDiagramVD42YOACBinding321.children[0],
              blockDiagramVD42YOACBinding500 = srcR(
                blockDiagramVD42YOACBinding321,
              );
            blockDiagramVD42YOACBinding322 =
              blockDiagramVD42YOACBinding499.getBoundingClientRect();
            blockDiagramVD42YOACBinding500.attr(
              "width",
              blockDiagramVD42YOACBinding322.width,
            );
            blockDiagramVD42YOACBinding500.attr(
              "height",
              blockDiagramVD42YOACBinding322.height,
            );
          }
          blockDiagramVD42YOACBinding322.width >
            blockDiagramVD42YOACBinding108 &&
            (blockDiagramVD42YOACBinding108 =
              blockDiagramVD42YOACBinding322.width);
          blockDiagramVD42YOACBinding109 +=
            blockDiagramVD42YOACBinding322.height + 4;
          blockDiagramVD42YOACBinding119.push(blockDiagramVD42YOACBinding321);
        });
        blockDiagramVD42YOACBinding109 += 8;
        let blockDiagramVD42YOACBinding120 = [];
        if (
          (blockDiagramVD42YOACInput16.classData.methods.forEach(
            async (item) => {
              let blockDiagramVD42YOACBinding300 = item.getDisplayDetails(),
                blockDiagramVD42YOACBinding301 =
                  blockDiagramVD42YOACBinding300.displayText;
              chunkABZYJK2DB().flowchart.htmlLabels &&
                (blockDiagramVD42YOACBinding301 = blockDiagramVD42YOACBinding301
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;"));
              let blockDiagramVD42YOACBinding302 =
                  blockDiagramVD42YOACBinding110
                    .node()
                    .appendChild(
                      await blockDiagramVD42YOACBinding29(
                        blockDiagramVD42YOACBinding301,
                        blockDiagramVD42YOACBinding300.cssStyle
                          ? blockDiagramVD42YOACBinding300.cssStyle
                          : blockDiagramVD42YOACInput16.labelStyle,
                        true,
                        true,
                      ),
                    ),
                blockDiagramVD42YOACBinding303 =
                  blockDiagramVD42YOACBinding302.getBBox();
              if (chunkABZYJK2DH(chunkABZYJK2DB().flowchart.htmlLabels)) {
                let blockDiagramVD42YOACBinding496 =
                    blockDiagramVD42YOACBinding302.children[0],
                  blockDiagramVD42YOACBinding497 = srcR(
                    blockDiagramVD42YOACBinding302,
                  );
                blockDiagramVD42YOACBinding303 =
                  blockDiagramVD42YOACBinding496.getBoundingClientRect();
                blockDiagramVD42YOACBinding497.attr(
                  "width",
                  blockDiagramVD42YOACBinding303.width,
                );
                blockDiagramVD42YOACBinding497.attr(
                  "height",
                  blockDiagramVD42YOACBinding303.height,
                );
              }
              blockDiagramVD42YOACBinding303.width >
                blockDiagramVD42YOACBinding108 &&
                (blockDiagramVD42YOACBinding108 =
                  blockDiagramVD42YOACBinding303.width);
              blockDiagramVD42YOACBinding109 +=
                blockDiagramVD42YOACBinding303.height + 4;
              blockDiagramVD42YOACBinding120.push(
                blockDiagramVD42YOACBinding302,
              );
            },
          ),
          (blockDiagramVD42YOACBinding109 += 8),
          blockDiagramVD42YOACBinding112)
        ) {
          let blockDiagramVD42YOACBinding495 =
            (blockDiagramVD42YOACBinding108 -
              blockDiagramVD42YOACBinding115.width) /
            2;
          srcR(blockDiagramVD42YOACBinding114).attr(
            "transform",
            "translate( " +
              ((-1 * blockDiagramVD42YOACBinding108) / 2 +
                blockDiagramVD42YOACBinding495) +
              ", " +
              (-1 * blockDiagramVD42YOACBinding109) / 2 +
              ")",
          );
          blockDiagramVD42YOACBinding111 =
            blockDiagramVD42YOACBinding115.height + 4;
        }
        let blockDiagramVD42YOACBinding121 =
          (blockDiagramVD42YOACBinding108 -
            blockDiagramVD42YOACBinding118.width) /
          2;
        return (
          srcR(blockDiagramVD42YOACBinding117).attr(
            "transform",
            "translate( " +
              ((-1 * blockDiagramVD42YOACBinding108) / 2 +
                blockDiagramVD42YOACBinding121) +
              ", " +
              ((-1 * blockDiagramVD42YOACBinding109) / 2 +
                blockDiagramVD42YOACBinding111) +
              ")",
          ),
          (blockDiagramVD42YOACBinding111 +=
            blockDiagramVD42YOACBinding118.height + 4),
          blockDiagramVD42YOACBinding106
            .attr("class", "divider")
            .attr(
              "x1",
              -blockDiagramVD42YOACBinding108 / 2 -
                blockDiagramVD42YOACBinding102,
            )
            .attr(
              "x2",
              blockDiagramVD42YOACBinding108 / 2 +
                blockDiagramVD42YOACBinding102,
            )
            .attr(
              "y1",
              -blockDiagramVD42YOACBinding109 / 2 -
                blockDiagramVD42YOACBinding102 +
                8 +
                blockDiagramVD42YOACBinding111,
            )
            .attr(
              "y2",
              -blockDiagramVD42YOACBinding109 / 2 -
                blockDiagramVD42YOACBinding102 +
                8 +
                blockDiagramVD42YOACBinding111,
            ),
          (blockDiagramVD42YOACBinding111 += 8),
          blockDiagramVD42YOACBinding119.forEach((item) => {
            srcR(item).attr(
              "transform",
              "translate( " +
                -blockDiagramVD42YOACBinding108 / 2 +
                ", " +
                ((-1 * blockDiagramVD42YOACBinding109) / 2 +
                  blockDiagramVD42YOACBinding111 +
                  4) +
                ")",
            );
            let blockDiagramVD42YOACBinding488 = item?.getBBox();
            blockDiagramVD42YOACBinding111 +=
              (blockDiagramVD42YOACBinding488?.height ?? 0) + 4;
          }),
          (blockDiagramVD42YOACBinding111 += 8),
          blockDiagramVD42YOACBinding107
            .attr("class", "divider")
            .attr(
              "x1",
              -blockDiagramVD42YOACBinding108 / 2 -
                blockDiagramVD42YOACBinding102,
            )
            .attr(
              "x2",
              blockDiagramVD42YOACBinding108 / 2 +
                blockDiagramVD42YOACBinding102,
            )
            .attr(
              "y1",
              -blockDiagramVD42YOACBinding109 / 2 -
                blockDiagramVD42YOACBinding102 +
                8 +
                blockDiagramVD42YOACBinding111,
            )
            .attr(
              "y2",
              -blockDiagramVD42YOACBinding109 / 2 -
                blockDiagramVD42YOACBinding102 +
                8 +
                blockDiagramVD42YOACBinding111,
            ),
          (blockDiagramVD42YOACBinding111 += 8),
          blockDiagramVD42YOACBinding120.forEach((item) => {
            srcR(item).attr(
              "transform",
              "translate( " +
                -blockDiagramVD42YOACBinding108 / 2 +
                ", " +
                ((-1 * blockDiagramVD42YOACBinding109) / 2 +
                  blockDiagramVD42YOACBinding111) +
                ")",
            );
            let blockDiagramVD42YOACBinding494 = item?.getBBox();
            blockDiagramVD42YOACBinding111 +=
              (blockDiagramVD42YOACBinding494?.height ?? 0) + 4;
          }),
          blockDiagramVD42YOACBinding105
            .attr("style", blockDiagramVD42YOACInput16.style)
            .attr("class", "outer title-state")
            .attr(
              "x",
              -blockDiagramVD42YOACBinding108 / 2 -
                blockDiagramVD42YOACBinding102,
            )
            .attr(
              "y",
              -(blockDiagramVD42YOACBinding109 / 2) -
                blockDiagramVD42YOACBinding102,
            )
            .attr(
              "width",
              blockDiagramVD42YOACBinding108 +
                blockDiagramVD42YOACInput16.padding,
            )
            .attr(
              "height",
              blockDiagramVD42YOACBinding109 +
                blockDiagramVD42YOACInput16.padding,
            ),
          blockDiagramVD42YOACBinding48(
            blockDiagramVD42YOACInput16,
            blockDiagramVD42YOACBinding105,
          ),
          (blockDiagramVD42YOACInput16.intersect = function (
            blockDiagramVD42YOACInput255,
          ) {
            return blockDiagramVD42YOACBinding46.rect(
              blockDiagramVD42YOACInput16,
              blockDiagramVD42YOACInput255,
            );
          }),
          blockDiagramVD42YOACBinding104
        );
      },
      "class_box",
    ),
  };
  $ = {};
  blockDiagramVD42YOACBinding73 = chunkAGHRB4JFN(
    async (
      blockDiagramVD42YOACInput124,
      blockDiagramVD42YOACInput125,
      blockDiagramVD42YOACInput126,
    ) => {
      let blockDiagramVD42YOACBinding337, blockDiagramVD42YOACBinding338;
      if (blockDiagramVD42YOACInput125.link) {
        let blockDiagramVD42YOACBinding471;
        chunkABZYJK2DB().securityLevel === "sandbox"
          ? (blockDiagramVD42YOACBinding471 = "_top")
          : blockDiagramVD42YOACInput125.linkTarget &&
            (blockDiagramVD42YOACBinding471 =
              blockDiagramVD42YOACInput125.linkTarget || "_blank");
        blockDiagramVD42YOACBinding337 = blockDiagramVD42YOACInput124
          .insert("svg:a")
          .attr("xlink:href", blockDiagramVD42YOACInput125.link)
          .attr("target", blockDiagramVD42YOACBinding471);
        blockDiagramVD42YOACBinding338 = await blockDiagramVD42YOACBinding72[
          blockDiagramVD42YOACInput125.shape
        ](
          blockDiagramVD42YOACBinding337,
          blockDiagramVD42YOACInput125,
          blockDiagramVD42YOACInput126,
        );
      } else {
        blockDiagramVD42YOACBinding338 = await blockDiagramVD42YOACBinding72[
          blockDiagramVD42YOACInput125.shape
        ](
          blockDiagramVD42YOACInput124,
          blockDiagramVD42YOACInput125,
          blockDiagramVD42YOACInput126,
        );
        blockDiagramVD42YOACBinding337 = blockDiagramVD42YOACBinding338;
      }
      return (
        blockDiagramVD42YOACInput125.tooltip &&
          blockDiagramVD42YOACBinding338.attr(
            "title",
            blockDiagramVD42YOACInput125.tooltip,
          ),
        blockDiagramVD42YOACInput125.class &&
          blockDiagramVD42YOACBinding338.attr(
            "class",
            "node default " + blockDiagramVD42YOACInput125.class,
          ),
        ($[blockDiagramVD42YOACInput125.id] = blockDiagramVD42YOACBinding337),
        blockDiagramVD42YOACInput125.haveCallback &&
          $[blockDiagramVD42YOACInput125.id].attr(
            "class",
            $[blockDiagramVD42YOACInput125.id].attr("class") + " clickable",
          ),
        blockDiagramVD42YOACBinding337
      );
    },
    "insertNode",
  );
  blockDiagramVD42YOACBinding74 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACInput135) => {
      let blockDiagramVD42YOACBinding354 = $[blockDiagramVD42YOACInput135.id];
      chunkAGHRB4JFI.trace(
        "Transforming node",
        blockDiagramVD42YOACInput135.diff,
        blockDiagramVD42YOACInput135,
        "translate(" +
          (blockDiagramVD42YOACInput135.x -
            blockDiagramVD42YOACInput135.width / 2 -
            5) +
          ", " +
          blockDiagramVD42YOACInput135.width / 2 +
          ")",
      );
      let blockDiagramVD42YOACBinding355 =
        blockDiagramVD42YOACInput135.diff || 0;
      return (
        blockDiagramVD42YOACInput135.clusterNode
          ? blockDiagramVD42YOACBinding354.attr(
              "transform",
              "translate(" +
                (blockDiagramVD42YOACInput135.x +
                  blockDiagramVD42YOACBinding355 -
                  blockDiagramVD42YOACInput135.width / 2) +
                ", " +
                (blockDiagramVD42YOACInput135.y -
                  blockDiagramVD42YOACInput135.height / 2 -
                  8) +
                ")",
            )
          : blockDiagramVD42YOACBinding354.attr(
              "transform",
              "translate(" +
                blockDiagramVD42YOACInput135.x +
                ", " +
                blockDiagramVD42YOACInput135.y +
                ")",
            ),
        blockDiagramVD42YOACBinding355
      );
    },
    "positionNode",
  );
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper18, "getNodeFromBlock");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper19, "calculateBlockSize");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper20, "insertBlockPositioned");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper21, "performOperations");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper22, "calculateBlockSizes");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper23, "insertBlocks");
  chunkAGHRB4JFN(blockDiagramVD42YOACHelper24, "insertEdges");
  BlockDiagramVD42YOAC = {
    parser: blockDiagramVD42YOACBinding2,
    db: blockDiagramVD42YOACBinding21,
    renderer: {
      draw: chunkAGHRB4JFN(async function (
        blockDiagramVD42YOACInput73,
        blockDiagramVD42YOACInput74,
        blockDiagramVD42YOACInput75,
        blockDiagramVD42YOACInput76,
      ) {
        let { securityLevel, block } = chunkABZYJK2DY(),
          blockDiagramVD42YOACBinding260 = blockDiagramVD42YOACInput76.db,
          blockDiagramVD42YOACBinding261;
        securityLevel === "sandbox" &&
          (blockDiagramVD42YOACBinding261 = srcR(
            "#i" + blockDiagramVD42YOACInput74,
          ));
        let blockDiagramVD42YOACBinding262 = srcR(
            securityLevel === "sandbox"
              ? blockDiagramVD42YOACBinding261.nodes()[0].contentDocument.body
              : "body",
          ),
          blockDiagramVD42YOACBinding263 =
            securityLevel === "sandbox"
              ? blockDiagramVD42YOACBinding262.select(
                  `[id="${blockDiagramVD42YOACInput74}"]`,
                )
              : srcR(`[id="${blockDiagramVD42YOACInput74}"]`);
        blockDiagramVD42YOACBinding26(
          blockDiagramVD42YOACBinding263,
          ["point", "circle", "cross"],
          blockDiagramVD42YOACInput76.type,
          blockDiagramVD42YOACInput74,
        );
        let blockDiagramVD42YOACBinding264 =
            blockDiagramVD42YOACBinding260.getBlocks(),
          blockDiagramVD42YOACBinding265 =
            blockDiagramVD42YOACBinding260.getBlocksFlat(),
          blockDiagramVD42YOACBinding266 =
            blockDiagramVD42YOACBinding260.getEdges(),
          blockDiagramVD42YOACBinding267 = blockDiagramVD42YOACBinding263
            .insert("g")
            .attr("class", "block");
        await blockDiagramVD42YOACHelper22(
          blockDiagramVD42YOACBinding267,
          blockDiagramVD42YOACBinding264,
          blockDiagramVD42YOACBinding260,
        );
        let blockDiagramVD42YOACBinding268 = blockDiagramVD42YOACHelper8(
          blockDiagramVD42YOACBinding260,
        );
        if (
          (await blockDiagramVD42YOACHelper23(
            blockDiagramVD42YOACBinding267,
            blockDiagramVD42YOACBinding264,
            blockDiagramVD42YOACBinding260,
          ),
          await blockDiagramVD42YOACHelper24(
            blockDiagramVD42YOACBinding267,
            blockDiagramVD42YOACBinding266,
            blockDiagramVD42YOACBinding265,
            blockDiagramVD42YOACBinding260,
            blockDiagramVD42YOACInput74,
          ),
          blockDiagramVD42YOACBinding268)
        ) {
          let blockDiagramVD42YOACBinding431 = blockDiagramVD42YOACBinding268,
            blockDiagramVD42YOACBinding432 = Math.max(
              1,
              Math.round(
                0.125 *
                  (blockDiagramVD42YOACBinding431.width /
                    blockDiagramVD42YOACBinding431.height),
              ),
            ),
            blockDiagramVD42YOACBinding433 =
              blockDiagramVD42YOACBinding431.height +
              blockDiagramVD42YOACBinding432 +
              10,
            blockDiagramVD42YOACBinding434 =
              blockDiagramVD42YOACBinding431.width + 10,
            { useMaxWidth } = block;
          chunkABZYJK2DC(
            blockDiagramVD42YOACBinding263,
            blockDiagramVD42YOACBinding433,
            blockDiagramVD42YOACBinding434,
            !!useMaxWidth,
          );
          chunkAGHRB4JFI.debug(
            "Here Bounds",
            blockDiagramVD42YOACBinding268,
            blockDiagramVD42YOACBinding431,
          );
          blockDiagramVD42YOACBinding263.attr(
            "viewBox",
            `${blockDiagramVD42YOACBinding431.x - 5} ${blockDiagramVD42YOACBinding431.y - 5} ${blockDiagramVD42YOACBinding431.width + 10} ${blockDiagramVD42YOACBinding431.height + 10}`,
          );
        }
      }, "draw"),
      getClasses: chunkAGHRB4JFN(function (
        blockDiagramVD42YOACInput242,
        blockDiagramVD42YOACInput243,
      ) {
        return blockDiagramVD42YOACInput243.db.getClasses();
      }, "getClasses"),
    },
    styles: blockDiagramVD42YOACBinding23,
  };
})();
export { BlockDiagramVD42YOAC as diagram };
