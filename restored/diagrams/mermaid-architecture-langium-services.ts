// Restored from ref/webview/assets/chunk-7N4EOEYR-7en_DI4g.js
// Mermaid Architecture Langium services — createArchitectureServices + ArchitectureModule.

import { esmInit } from "../runtime/rolldown-runtime";
import {
  AbstractMermaidTokenBuilder,
  AbstractMermaidValueConverter,
  EmptyFileSystem,
  ArchitectureGeneratedModule,
  MermaidGeneratedSharedModule,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  defineName,
  initLangiumRuntime,
  initMermaidLangiumGrammar,
  inject,
} from "./mermaid-langium-grammar";

class ArchitectureTokenBuilder extends AbstractMermaidTokenBuilder {
  static {
    defineName(this, "ArchitectureTokenBuilder");
  }
  constructor() {
    super(["architecture"]);
  }
}

class ArchitectureValueConverter extends AbstractMermaidValueConverter {
  static {
    defineName(this, "ArchitectureValueConverter");
  }
  runCustomConverter(
    rule: { name: string },
    input: string,
    _cstNode?: unknown,
  ): string | undefined {
    if (rule.name === "ARCH_ICON") return input.replace(/[()]/g, "").trim();
    if (rule.name === "ARCH_TEXT_ICON") return input.replace(/["()]/g, "");
    if (rule.name === "ARCH_TITLE") {
      let title = input.replace(/^\[|]$/g, "").trim();
      if (
        (title.startsWith('"') && title.endsWith('"')) ||
        (title.startsWith("'") && title.endsWith("'"))
      ) {
        title = title.slice(1, -1);
        title = title.replace(/\\"/g, '"').replace(/\\'/g, "'");
      }
      return title.trim();
    }
    return undefined;
  }
}

export const ArchitectureModule = {
  parser: {
    TokenBuilder: defineName(
      () => new ArchitectureTokenBuilder(),
      "TokenBuilder",
    ),
    ValueConverter: defineName(
      () => new ArchitectureValueConverter(),
      "ValueConverter",
    ),
  },
};

export function createArchitectureServices(
  context: unknown = EmptyFileSystem,
): {
  shared: { ServiceRegistry: { register: (services: unknown) => void } };
  Architecture: unknown;
} {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule,
  );
  const Architecture = inject(
    createDefaultCoreModule({ shared }),
    ArchitectureGeneratedModule,
    ArchitectureModule,
  );
  shared.ServiceRegistry.register(Architecture);
  return { shared, Architecture };
}

export const initArchitectureLangiumServices = esmInit(() => {
  initMermaidLangiumGrammar();
  initLangiumRuntime();
  defineName(createArchitectureServices, "createArchitectureServices");
});
