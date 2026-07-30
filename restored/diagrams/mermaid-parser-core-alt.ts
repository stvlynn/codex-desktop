// Restored from ref/webview/assets/mermaid-parser.core-lQvHC-p1.js
// Codex Mermaid Langium parser core (alt) — lazy diagram registry + parse().

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
} from "./mermaid-langium-grammar-alt";
import { initArchitectureLangiumServices } from "./mermaid-architecture-langium-services-alt";
import { initGitGraphLangiumServices } from "./mermaid-git-graph-langium-services-alt";
import { initInfoLangiumServices } from "./mermaid-info-langium-services-alt";
import { initPacketLangiumServices } from "./mermaid-packet-langium-services-alt";
import { initPieLangiumServices } from "./mermaid-pie-langium-services-alt";
import { initRadarLangiumServices } from "./mermaid-radar-langium-services-alt";
import { initTreemapLangiumServices } from "./mermaid-treemap-langium-services-alt";

type MermaidParseResult = {
  lexerErrors: Array<{ message: string }>;
  parserErrors: Array<{ message: string }>;
  value: unknown;
};

type LangiumParser = {
  parse: (text: string) => MermaidParseResult;
};

let parsers: Partial<Record<string, LangiumParser>>;
let loaders: Partial<Record<string, () => Promise<void>>>;

export class MermaidParseError extends Error {
  result: MermaidParseResult;

  constructor(result: MermaidParseResult) {
    const lexer = result.lexerErrors.map((item) => item.message).join("\n");
    const parser = result.parserErrors.map((item) => item.message).join("\n");
    super(`Parsing failed: ${lexer} ${parser}`);
    this.result = result;
  }

  static {
    defineName(this, "MermaidParseError");
  }
}

/**
 * Parse Mermaid source for a Langium-backed diagram type (alt Codex build).
 * No npm content-hash match — keep as a typed local vite-preload wrapper.
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
  initGitGraphLangiumServices();
  initInfoLangiumServices();
  initPacketLangiumServices();
  initPieLangiumServices();
  initArchitectureLangiumServices();
  initRadarLangiumServices();
  initTreemapLangiumServices();
  initMermaidLangiumGrammar();
  ensureViteModulepreloadRuntime();

  parsers = {};
  loaders = {
    info: defineName(async () => {
      const { createInfoServices } = await vitePreload(
        async () => {
          const { createInfoServices: create } =
            await import("./mermaid-info-entry-alt");
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
            await import("./mermaid-packet-entry-alt");
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
            await import("./mermaid-pie-entry-alt");
          return { createPieServices: create };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.pie = createPieServices().Pie.parser.LangiumParser;
    }, "pie"),
    architecture: defineName(async () => {
      const { createArchitectureServices } = await vitePreload(
        async () => {
          const { createArchitectureServices: create } =
            await import("./mermaid-architecture-entry-alt");
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
            await import("./mermaid-git-graph-entry-alt");
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
            await import("./mermaid-radar-entry-alt");
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
            await import("./mermaid-treemap-entry-alt");
          return { createTreemapServices: create };
        },
        __vite__mapDeps([]),
        import.meta.url,
      );
      parsers.treemap = createTreemapServices().Treemap.parser.LangiumParser;
    }, "treemap"),
  };

  defineName(parse, "parse");
});
