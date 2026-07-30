// Restored from ref/webview/assets/mermaid-parser.core-Bf-wA51e.js
// Codex Mermaid Langium parser core — lazy diagram registry + parse().

const __vite__mapDeps = (
  ids: number[],
  map: { f?: string[] } = __vite__mapDeps as unknown as { f?: string[] },
  deps: string[] = map.f || (map.f = []),
): string[] => ids.map((item) => deps[item] ?? "");

import { esmInit } from "../runtime/rolldown-runtime";
import {
  ensureViteModulepreloadRuntime,
  vitePreload,
} from "../runtime/vite-preload";
import {
  defineName,
  initMermaidLangiumGrammar,
} from "./mermaid-langium-grammar";
import { initArchitectureLangiumServices } from "./mermaid-architecture-langium-services";
import { initGitGraphLangiumServices } from "./mermaid-git-graph-langium-services";
import { initInfoLangiumServices } from "./mermaid-info-langium-services";
import { initPacketLangiumServices } from "./mermaid-packet-langium-services";
import { initPieLangiumServices } from "./mermaid-pie-langium-services";
import { initRadarLangiumServices } from "./mermaid-radar-langium-services";
import { initTreeViewLangiumServices } from "./mermaid-tree-view-langium-services";
import { initTreemapLangiumServices } from "./mermaid-treemap-langium-services";
import { initWardleyLangiumServices } from "./mermaid-wardley-langium-services";

type MermaidLexerError = {
  line?: number;
  column?: number;
  message: string;
};

type MermaidParserError = {
  token: {
    startLine?: number;
    startColumn?: number;
  };
  message: string;
};

export type MermaidParseResult = {
  lexerErrors: MermaidLexerError[];
  parserErrors: MermaidParserError[];
  value: unknown;
};

type LangiumParser = {
  parse: (text: string) => MermaidParseResult;
};

export type MermaidParserDiagramType =
  | "info"
  | "packet"
  | "pie"
  | "treeView"
  | "architecture"
  | "gitGraph"
  | "radar"
  | "treemap"
  | "wardley";

let parsers: Partial<Record<string, LangiumParser>>;
let loaders: Partial<Record<string, () => Promise<void>>>;

export class MermaidParseError extends Error {
  result: MermaidParseResult;

  constructor(result: MermaidParseResult) {
    const lexer = result.lexerErrors
      .map((item) => {
        const line =
          item.line !== undefined && !Number.isNaN(item.line) ? item.line : "?";
        const column =
          item.column !== undefined && !Number.isNaN(item.column)
            ? item.column
            : "?";
        return `Lexer error on line ${line}, column ${column}: ${item.message}`;
      })
      .join("\n");
    const parser = result.parserErrors
      .map((item) => {
        const line =
          item.token.startLine !== undefined &&
          !Number.isNaN(item.token.startLine)
            ? item.token.startLine
            : "?";
        const column =
          item.token.startColumn !== undefined &&
          !Number.isNaN(item.token.startColumn)
            ? item.token.startColumn
            : "?";
        return `Parse error on line ${line}, column ${column}: ${item.message}`;
      })
      .join("\n");
    super(`Parsing failed: ${lexer} ${parser}`);
    this.result = result;
  }

  static {
    defineName(this, "MermaidParseError");
  }
}

/**
 * Parse Mermaid source for a Langium-backed diagram type.
 * Local Codex wrapper around the bundled `@mermaid-js/parser` lazy registry
 * (no content-hash match to npm; keep vite-preload + Langium service inits).
 */
export async function parse(
  diagramType: string,
  text: string,
): Promise<unknown> {
  const loader = loaders[diagramType];
  if (!loader) {
    throw new Error(`Unknown diagram type: ${diagramType}`);
  }
  if (!parsers[diagramType]) {
    await loader();
  }
  const result = parsers[diagramType]!.parse(text);
  if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
    throw new MermaidParseError(result);
  }
  return result.value;
}

export const initMermaidParserCore = esmInit(() => {
  initTreemapLangiumServices();
  initWardleyLangiumServices();
  initGitGraphLangiumServices();
  initInfoLangiumServices();
  initPacketLangiumServices();
  initPieLangiumServices();
  initTreeViewLangiumServices();
  initArchitectureLangiumServices();
  initRadarLangiumServices();
  initMermaidLangiumGrammar();
  ensureViteModulepreloadRuntime();

  parsers = {};
  loaders = {
    info: defineName(async () => {
      const { createInfoServices } = await vitePreload(
        async () => {
          const { createInfoServices: create } =
            await import("./mermaid-info-entry");
          return { createInfoServices: create };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.info = createInfoServices().Info.parser.LangiumParser;
    }, "info"),
    packet: defineName(async () => {
      const { createPacketServices } = await vitePreload(
        async () => {
          const { createPacketServices: create } =
            await import("./mermaid-packet-entry");
          return { createPacketServices: create };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.packet = createPacketServices().Packet.parser.LangiumParser;
    }, "packet"),
    pie: defineName(async () => {
      const { createPieServices } = await vitePreload(
        async () => {
          const { createPieServices: create } =
            await import("./mermaid-pie-entry");
          return { createPieServices: create };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.pie = createPieServices().Pie.parser.LangiumParser;
    }, "pie"),
    treeView: defineName(async () => {
      const { createTreeViewServices } = await vitePreload(
        async () => {
          const { createTreeViewServices: create } =
            await import("./mermaid-tree-view-entry");
          return { createTreeViewServices: create };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.treeView = createTreeViewServices().TreeView.parser.LangiumParser;
    }, "treeView"),
    architecture: defineName(async () => {
      const { createArchitectureServices } = await vitePreload(
        async () => {
          const { createArchitectureServices: create } =
            await import("./mermaid-architecture-entry");
          return { createArchitectureServices: create };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.architecture =
        createArchitectureServices().Architecture.parser.LangiumParser;
    }, "architecture"),
    gitGraph: defineName(async () => {
      const { createGitGraphServices } = await vitePreload(
        async () => {
          const { createGitGraphServices: create } =
            await import("./mermaid-git-graph-entry");
          return { createGitGraphServices: create };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.gitGraph = createGitGraphServices().GitGraph.parser.LangiumParser;
    }, "gitGraph"),
    radar: defineName(async () => {
      const { createRadarServices } = await vitePreload(
        async () => {
          const { createRadarServices: create } =
            await import("./mermaid-radar-entry");
          return { createRadarServices: create };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.radar = createRadarServices().Radar.parser.LangiumParser;
    }, "radar"),
    treemap: defineName(async () => {
      const { createTreemapServices } = await vitePreload(
        async () => {
          const { createTreemapServices: create } =
            await import("./mermaid-treemap-entry");
          return { createTreemapServices: create };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.treemap = createTreemapServices().Treemap.parser.LangiumParser;
    }, "treemap"),
    wardley: defineName(async () => {
      const { createWardleyServices } = await vitePreload(
        async () => {
          const { createWardleyServices: create } =
            await import("./mermaid-wardley-entry");
          return { createWardleyServices: create };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.wardley = createWardleyServices().Wardley.parser.LangiumParser;
    }, "wardley"),
  };

  defineName(parse, "parse");
});
