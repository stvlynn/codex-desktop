// Restored from ref/webview/assets/chunk-336JU56O-BErXv-xv.js
// Mermaid layout loader registry (alt) — dagre + cose-bilkent.
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
} from "../utils/dayjs-core-alt";
import { A, s, y } from "./mermaid-config-alt";
import { chunk5PVQY5BWD, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import {
  chunk5FUZZQ4RA,
  chunk5FUZZQ4RC,
  chunk5FUZZQ4RI,
  chunk5FUZZQ4RO,
} from "./mermaid-flowchart-nodes-alt";
import {
  chunkENJZ2VHEA,
  chunkENJZ2VHEI,
  chunkENJZ2VHEN,
  chunkENJZ2VHEO,
  chunkENJZ2VHER,
} from "./mermaid-flowchart-edges-alt";
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
export const chunk336JU56ON = esmInit(() => {
  chunkENJZ2VHEN();
  chunk5FUZZQ4RI();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  ensureViteModulepreloadRuntime();
  commonHelpers = {
    common: s,
    getConfig: y,
    insertCluster: chunk5FUZZQ4RA,
    insertEdge: chunkENJZ2VHER,
    insertEdgeLabel: chunkENJZ2VHEI,
    insertMarkers: chunkENJZ2VHEA,
    insertNode: chunk5FUZZQ4RO,
    interpolateToCurve: chunk5PVQY5BWD,
    labelHelper: chunk5FUZZQ4RC,
    log: logger,
    positionEdgeLabel: chunkENJZ2VHEO,
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
              () => import("./mermaid-dagre-layout-alt"),
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
              () => import("./cose-bilkent-alt"),
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
  getRegisteredLayoutAlgorithm as chunk336JU56OT,
  registerLayoutLoaders as chunk336JU56OR,
  renderLayout as chunk336JU56OI,
};
