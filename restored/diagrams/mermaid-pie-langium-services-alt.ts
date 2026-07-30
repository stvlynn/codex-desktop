// Restored from ref/webview/assets/chunk-T53DSG4Q-PnwlQLO5.js
// Mermaid Pie Langium services — createPieServices + PieModule.

import { esmInit } from "../runtime/rolldown-runtime";
import {
  EmptyFileSystem,
  inject,
  createDefaultSharedCoreModule,
  createDefaultCoreModule,
  MermaidGeneratedSharedModule,
  PieGeneratedModule,
  defineName,
  initLangiumRuntime,
  initMermaidLangiumGrammar,
  AbstractMermaidValueConverter,
  AbstractMermaidTokenBuilder,
} from "./mermaid-langium-grammar-alt";

class PieTokenBuilder extends AbstractMermaidTokenBuilder {
  static {
    defineName(this, "PieTokenBuilder");
  }
  constructor() {
    super(["pie", "showData"]);
  }
}

class PieValueConverter extends AbstractMermaidValueConverter {
  static {
    defineName(this, "PieValueConverter");
  }
  runCustomConverter(
    rule: { name: string },
    input: string,
    _cstNode?: unknown,
  ): string | undefined {
    if (rule.name === "PIE_SECTION_LABEL")
      return input.replace(/"/g, "").trim();
    return undefined;
  }
}

export const PieModule = {
  parser: {
    TokenBuilder: defineName(() => new PieTokenBuilder(), "TokenBuilder"),
    ValueConverter: defineName(() => new PieValueConverter(), "ValueConverter"),
  },
};

export function createPieServices(context: unknown = EmptyFileSystem): {
  shared: { ServiceRegistry: { register: (services: unknown) => void } };
  Pie: unknown;
} {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule,
  );
  const diagramServices = inject(
    createDefaultCoreModule({ shared }),
    PieGeneratedModule,
    PieModule,
  );
  shared.ServiceRegistry.register(diagramServices);
  return { shared, Pie: diagramServices };
}

export const initPieLangiumServices = esmInit(() => {
  initMermaidLangiumGrammar();
  initLangiumRuntime();
  defineName(createPieServices, "createPieServices");
});
