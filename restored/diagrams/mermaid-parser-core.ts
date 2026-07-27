// Restored from ref/webview/assets/mermaid-parser.core-Bf-wA51e.js
// Mermaid Langium parser core (primary) — lazy diagram parser registry.
// Stage 3 candidate: Gmt/Wmt → runtime/vite-preload; facade letter imports + semantic paths.

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
  h as langiumHelpersInit,
  m as wrapLazy,
} from "./mermaid-langium-grammar";
import { r as initArchitectureLangium } from "./mermaid-architecture-langium-services";
import { r as initGitGraphLangium } from "./mermaid-git-graph-langium-services";
import { r as initInfoLangium } from "./mermaid-info-langium-services";
import { r as initPacketLangium } from "./mermaid-packet-langium-services";
import { r as initPieLangium } from "./mermaid-pie-langium-services";
import { r as initRadarLangium } from "./mermaid-radar-langium-services";
import { r as initTreeViewLangium } from "./mermaid-tree-view-langium-services";
import { r as initTreemapLangium } from "./mermaid-treemap-langium-services";
import { r as initWardleyLangium } from "./mermaid-wardley-langium-services";
type MermaidParseResult = {
  lexerErrors: Array<{
    line?: number;
    column?: number;
    message: string;
  }>;
  parserErrors: Array<{
    token: {
      startLine?: number;
      startColumn?: number;
    };
    message: string;
  }>;
  value: unknown;
};
type LangiumParser = {
  parse: (text: string) => MermaidParseResult;
};
let parsers: Record<string, LangiumParser>;
let loaders: Record<string, () => Promise<void>>;
export async function mermaidParserCoreN(
  diagramType: string,
  text: string,
): Promise<unknown> {
  const loader = loaders[diagramType];
  if (!loader) throw new Error(`Unknown diagram type: ${diagramType}`);
  if (!parsers[diagramType]) await loader();
  const result = parsers[diagramType].parse(text);
  if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
    throw new MermaidParseError(result);
  }
  return result.value;
}
class MermaidParseError extends Error {
  result: MermaidParseResult;
  constructor(result: MermaidParseResult) {
    const lexer = result.lexerErrors
      .map(
        (item) =>
          `Lexer error on line ${item.line !== undefined && !Number.isNaN(item.line) ? item.line : "?"}, column ${item.column !== undefined && !Number.isNaN(item.column) ? item.column : "?"}: ${item.message}`,
      )
      .join("\n");
    const parser = result.parserErrors
      .map(
        (item) =>
          `Parse error on line ${item.token.startLine !== undefined && !Number.isNaN(item.token.startLine) ? item.token.startLine : "?"}, column ${item.token.startColumn !== undefined && !Number.isNaN(item.token.startColumn) ? item.token.startColumn : "?"}: ${item.message}`,
      )
      .join("\n");
    super(`Parsing failed: ${lexer} ${parser}`);
    this.result = result;
  }
  static {
    wrapLazy(this, "MermaidParseError");
  }
}
export const mermaidParserCoreT = esmInit(() => {
  initTreemapLangium();
  initWardleyLangium();
  initGitGraphLangium();
  initInfoLangium();
  initPacketLangium();
  initPieLangium();
  initTreeViewLangium();
  initArchitectureLangium();
  initRadarLangium();
  langiumHelpersInit();
  ensureViteModulepreloadRuntime();
  parsers = {};
  loaders = {
    info: wrapLazy(async () => {
      const { createInfoServices } = await vitePreload(
        async () => {
          const { createInfoServices: create } =
            await import("./mermaid-info-entry");
          return {
            createInfoServices: create,
          };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.info = createInfoServices().Info.parser.LangiumParser;
    }, "info"),
    packet: wrapLazy(async () => {
      const { createPacketServices } = await vitePreload(
        async () => {
          const { createPacketServices: create } =
            await import("./mermaid-packet-entry");
          return {
            createPacketServices: create,
          };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.packet = createPacketServices().Packet.parser.LangiumParser;
    }, "packet"),
    pie: wrapLazy(async () => {
      const { createPieServices } = await vitePreload(
        async () => {
          const { createPieServices: create } =
            await import("./mermaid-pie-entry");
          return {
            createPieServices: create,
          };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.pie = createPieServices().Pie.parser.LangiumParser;
    }, "pie"),
    treeView: wrapLazy(async () => {
      const { createTreeViewServices } = await vitePreload(
        async () => {
          const { createTreeViewServices: create } =
            await import("./mermaid-tree-view-entry");
          return {
            createTreeViewServices: create,
          };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.treeView = createTreeViewServices().TreeView.parser.LangiumParser;
    }, "treeView"),
    architecture: wrapLazy(async () => {
      const { createArchitectureServices } = await vitePreload(
        async () => {
          const { createArchitectureServices: create } =
            await import("./mermaid-architecture-entry");
          return {
            createArchitectureServices: create,
          };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.architecture =
        createArchitectureServices().Architecture.parser.LangiumParser;
    }, "architecture"),
    gitGraph: wrapLazy(async () => {
      const { createGitGraphServices } = await vitePreload(
        async () => {
          const { createGitGraphServices: create } =
            await import("./mermaid-git-graph-entry");
          return {
            createGitGraphServices: create,
          };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.gitGraph = createGitGraphServices().GitGraph.parser.LangiumParser;
    }, "gitGraph"),
    radar: wrapLazy(async () => {
      const { createRadarServices } = await vitePreload(
        async () => {
          const { createRadarServices: create } =
            await import("./mermaid-radar-entry");
          return {
            createRadarServices: create,
          };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.radar = createRadarServices().Radar.parser.LangiumParser;
    }, "radar"),
    treemap: wrapLazy(async () => {
      const { createTreemapServices } = await vitePreload(
        async () => {
          const { createTreemapServices: create } =
            await import("./mermaid-treemap-entry");
          return {
            createTreemapServices: create,
          };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.treemap = createTreemapServices().Treemap.parser.LangiumParser;
    }, "treemap"),
    wardley: wrapLazy(async () => {
      const { createWardleyServices } = await vitePreload(
        async () => {
          const { createWardleyServices: create } =
            await import("./mermaid-wardley-entry");
          return {
            createWardleyServices: create,
          };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.wardley = createWardleyServices().Wardley.parser.LangiumParser;
    }, "wardley"),
  };
  wrapLazy(mermaidParserCoreN, "parse");
});
