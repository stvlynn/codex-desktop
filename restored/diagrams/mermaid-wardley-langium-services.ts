// Restored from ref/webview/assets/chunk-CIAEETIT-BFQsYrp6.js
// Mermaid Wardley Langium services — createWardleyServices + WardleyModule.

import { esmInit } from "../runtime/rolldown-runtime";
import {
  AbstractMermaidValueConverter,
  EmptyFileSystem,
  MermaidGeneratedSharedModule,
  WardleyGeneratedModule,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  defineName,
  initLangiumRuntime,
  initMermaidLangiumGrammar,
  inject,
} from "./mermaid-langium-grammar";

class WardleyValueConverter extends AbstractMermaidValueConverter {
  static {
    defineName(this, "WardleyValueConverter");
  }
  runCustomConverter(
    rule: { name: string },
    input: string,
    _cstNode?: unknown,
  ): string | undefined {
    switch (rule.name.toUpperCase()) {
      case "LINK_LABEL":
        return input.substring(1).trim();
      default:
        return undefined;
    }
  }
}

export const WardleyModule = {
  parser: {
    ValueConverter: defineName(
      () => new WardleyValueConverter(),
      "ValueConverter",
    ),
  },
};

export function createWardleyServices(context: unknown = EmptyFileSystem): {
  shared: { ServiceRegistry: { register: (services: unknown) => void } };
  Wardley: unknown;
} {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule,
  );
  const Wardley = inject(
    createDefaultCoreModule({ shared }),
    WardleyGeneratedModule,
    WardleyModule,
  );
  shared.ServiceRegistry.register(Wardley);
  return { shared, Wardley };
}

export const initWardleyLangiumServices = esmInit(() => {
  initMermaidLangiumGrammar();
  initLangiumRuntime();
  defineName(createWardleyServices, "createWardleyServices");
});
