// Restored from ref/webview/assets/chunk-N4CR4FBY-BfcRk5NA.js
// Mermaid layout loader registry (primary) — dagre + cose-bilkent.
// Stage 3 candidate: Gmt/Wmt → runtime/vite-preload; semantic imports pre-wired.

const __vite__mapDeps = (
  ids: number[],
  map: {
    f?: string[];
  } = __vite__mapDeps as unknown as {
    f?: string[];
  },
  deps: string[] = map.f || (map.f = []),
): string[] => ids.map((item) => deps[item] ?? "");
import { esmInit } from "../runtime/rolldown-runtime";
import {
  ensureViteModulepreloadRuntime,
  vitePreload,
} from "../runtime/vite-preload";
import {
  defineFunctionName,
  initDayjsLoggerRuntime,
  logger,
} from "../utils/dayjs-core-alt-dup";
import { k, s, y } from "./mermaid-config";
import { chunkS3R3BYOJD, chunkS3R3BYOJU } from "./mermaid-common-utils";
import {
  chunkJZLCHNYAA,
  chunkJZLCHNYAC,
  chunkJZLCHNYAI,
  chunkJZLCHNYAO,
} from "./mermaid-flowchart-nodes";
import {
  chunkQXUST7PYA,
  chunkQXUST7PYI,
  chunkQXUST7PYN,
  chunkQXUST7PYO,
  chunkQXUST7PYR,
} from "./mermaid-flowchart-edges";
type LayoutLoader = {
  name: string;
  loader: () => Promise<{
    render: (...args: unknown[]) => unknown;
  }>;
  algorithm?: unknown;
};
let commonHelpers: Record<string, unknown>;
let layoutLoaders: Record<string, LayoutLoader>;
let registerLayoutLoaders: (loaders: LayoutLoader[]) => void;
let renderLayout: (
  options: {
    layoutAlgorithm: string;
    [key: string]: unknown;
  },
  svg: unknown,
) => Promise<unknown>;
let getRegisteredLayoutAlgorithm: (
  name?: string,
  opts?: {
    fallback?: string;
  },
) => string;
export const chunkN4CR4FBYN = esmInit(() => {
  chunkQXUST7PYN();
  chunkJZLCHNYAI();
  chunkS3R3BYOJU();
  k();
  initDayjsLoggerRuntime();
  ensureViteModulepreloadRuntime();
  commonHelpers = {
    common: s,
    getConfig: y,
    insertCluster: chunkJZLCHNYAA,
    insertEdge: chunkQXUST7PYR,
    insertEdgeLabel: chunkQXUST7PYI,
    insertMarkers: chunkQXUST7PYA,
    insertNode: chunkJZLCHNYAO,
    interpolateToCurve: chunkS3R3BYOJD,
    labelHelper: chunkJZLCHNYAC,
    log: logger,
    positionEdgeLabel: chunkQXUST7PYO,
  };
  layoutLoaders = {};
  registerLayoutLoaders = defineFunctionName((loaders: LayoutLoader[]) => {
    for (const loader of loaders) layoutLoaders[loader.name] = loader;
  }, "registerLayoutLoaders");
  defineFunctionName(() => {
    registerLayoutLoaders([
      {
        name: "dagre",
        loader: defineFunctionName(
          async () =>
            await vitePreload(
              () => import("./mermaid-dagre-layout"),
              [],
              import.meta.url,
            ),
          "loader",
        ),
      },
      {
        name: "cose-bilkent",
        loader: defineFunctionName(
          async () =>
            await vitePreload(
              () => import("./cose-bilkent"),
              [],
              import.meta.url,
            ),
          "loader",
        ),
      },
    ]);
  }, "registerDefaultLayoutLoaders")();
  renderLayout = defineFunctionName(async (options, svg) => {
    if (!(options.layoutAlgorithm in layoutLoaders)) {
      throw Error(`Unknown layout algorithm: ${options.layoutAlgorithm}`);
    }
    const entry = layoutLoaders[options.layoutAlgorithm]!;
    return (await entry.loader()).render(options, svg, commonHelpers, {
      algorithm: entry.algorithm,
    });
  }, "render");
  getRegisteredLayoutAlgorithm = defineFunctionName(
    (name = "", { fallback = "dagre" } = {}) => {
      if (name in layoutLoaders) return name;
      if (fallback in layoutLoaders) {
        logger.warn(
          `Layout algorithm ${name} is not registered. Using ${fallback} as fallback.`,
        );
        return fallback;
      }
      throw Error(
        `Both layout algorithms ${name} and ${fallback} are not registered.`,
      );
    },
    "getRegisteredLayoutAlgorithm",
  );
});
export {
  getRegisteredLayoutAlgorithm as chunkN4CR4FBYT,
  registerLayoutLoaders as chunkN4CR4FBYR,
  renderLayout as chunkN4CR4FBYI,
};
