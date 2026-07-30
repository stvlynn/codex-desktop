// Restored from ref/webview/assets/chunk-KGLVRYIC-C8_y_CK6.js
// Mermaid Info Langium services — createInfoServices + InfoModule.

import { esmInit } from "../runtime/rolldown-runtime";
import {
  EmptyFileSystem,
  inject,
  createDefaultSharedCoreModule,
  createDefaultCoreModule,
  MermaidGeneratedSharedModule,
  InfoGeneratedModule,
  defineName,
  initLangiumRuntime,
  initMermaidLangiumGrammar,
  AbstractMermaidTokenBuilder,
  CommonValueConverter,
} from "./mermaid-langium-grammar";

class InfoTokenBuilder extends AbstractMermaidTokenBuilder {
  static {
    defineName(this, "InfoTokenBuilder");
  }
  constructor() {
    super(["info", "showInfo"]);
  }
}

export const InfoModule = {
  parser: {
    TokenBuilder: defineName(() => new InfoTokenBuilder(), "TokenBuilder"),
    ValueConverter: defineName(
      () => new CommonValueConverter(),
      "ValueConverter",
    ),
  },
};

export function createInfoServices(context: unknown = EmptyFileSystem): {
  shared: { ServiceRegistry: { register: (services: unknown) => void } };
  Info: unknown;
} {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule,
  );
  const diagramServices = inject(
    createDefaultCoreModule({ shared }),
    InfoGeneratedModule,
    InfoModule,
  );
  shared.ServiceRegistry.register(diagramServices);
  return { shared, Info: diagramServices };
}

export const initInfoLangiumServices = esmInit(() => {
  initMermaidLangiumGrammar();
  initLangiumRuntime();
  defineName(createInfoServices, "createInfoServices");
});
