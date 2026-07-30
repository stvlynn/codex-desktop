// Restored from ref/webview/assets/chunk-2KRD3SAO-BEGHEWrY.js
// Mermaid Radar Langium services — createRadarServices + RadarModule.

import { esmInit } from "../runtime/rolldown-runtime";
import {
  EmptyFileSystem,
  inject,
  createDefaultSharedCoreModule,
  createDefaultCoreModule,
  MermaidGeneratedSharedModule,
  RadarGeneratedModule,
  defineName,
  initLangiumRuntime,
  initMermaidLangiumGrammar,
  AbstractMermaidTokenBuilder,
  CommonValueConverter,
} from "./mermaid-langium-grammar";

class RadarTokenBuilder extends AbstractMermaidTokenBuilder {
  static {
    defineName(this, "RadarTokenBuilder");
  }
  constructor() {
    super(["radar-beta"]);
  }
}

export const RadarModule = {
  parser: {
    TokenBuilder: defineName(() => new RadarTokenBuilder(), "TokenBuilder"),
    ValueConverter: defineName(
      () => new CommonValueConverter(),
      "ValueConverter",
    ),
  },
};

export function createRadarServices(context: unknown = EmptyFileSystem): {
  shared: { ServiceRegistry: { register: (services: unknown) => void } };
  Radar: unknown;
} {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule,
  );
  const diagramServices = inject(
    createDefaultCoreModule({ shared }),
    RadarGeneratedModule,
    RadarModule,
  );
  shared.ServiceRegistry.register(diagramServices);
  return { shared, Radar: diagramServices };
}

export const initRadarLangiumServices = esmInit(() => {
  initMermaidLangiumGrammar();
  initLangiumRuntime();
  defineName(createRadarServices, "createRadarServices");
});
