// Restored from ref/webview/assets/chunk-O7ZBX7Z2-VAyiWgyE.js
// Mermaid Architecture Langium services — createArchitectureServices + ArchitectureModule.

import { esmInit } from "../runtime/rolldown-runtime";
import {
  EmptyFileSystem,
  inject,
  createDefaultSharedCoreModule,
  createDefaultCoreModule,
  MermaidGeneratedSharedModule,
  ArchitectureGeneratedModule,
  defineName,
  initLangiumRuntime,
  initMermaidLangiumGrammar,
  AbstractMermaidValueConverter,
  AbstractMermaidTokenBuilder,
} from "./mermaid-langium-grammar-alt";

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
    if (rule.name === "ARCH_TITLE") return input.replace(/[[\]]/g, "").trim();
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
  const diagramServices = inject(
    createDefaultCoreModule({ shared }),
    ArchitectureGeneratedModule,
    ArchitectureModule,
  );
  shared.ServiceRegistry.register(diagramServices);
  return { shared, Architecture: diagramServices };
}

export const initArchitectureLangiumServices = esmInit(() => {
  initMermaidLangiumGrammar();
  initLangiumRuntime();
  defineName(createArchitectureServices, "createArchitectureServices");
});
