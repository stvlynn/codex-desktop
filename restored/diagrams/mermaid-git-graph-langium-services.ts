// Restored from ref/webview/assets/chunk-67CJDMHE-Bc3ouymy.js
// Mermaid GitGraph Langium services — createGitGraphServices + GitGraphModule.

import { esmInit } from "../runtime/rolldown-runtime";
import {
  EmptyFileSystem,
  inject,
  createDefaultSharedCoreModule,
  createDefaultCoreModule,
  MermaidGeneratedSharedModule,
  GitGraphGeneratedModule,
  defineName,
  initLangiumRuntime,
  initMermaidLangiumGrammar,
  AbstractMermaidTokenBuilder,
  CommonValueConverter,
} from "./mermaid-langium-grammar";

class GitGraphTokenBuilder extends AbstractMermaidTokenBuilder {
  static {
    defineName(this, "GitGraphTokenBuilder");
  }
  constructor() {
    super(["gitGraph"]);
  }
}

export const GitGraphModule = {
  parser: {
    TokenBuilder: defineName(() => new GitGraphTokenBuilder(), "TokenBuilder"),
    ValueConverter: defineName(
      () => new CommonValueConverter(),
      "ValueConverter",
    ),
  },
};

export function createGitGraphServices(context: unknown = EmptyFileSystem): {
  shared: { ServiceRegistry: { register: (services: unknown) => void } };
  GitGraph: unknown;
} {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule,
  );
  const diagramServices = inject(
    createDefaultCoreModule({ shared }),
    GitGraphGeneratedModule,
    GitGraphModule,
  );
  shared.ServiceRegistry.register(diagramServices);
  return { shared, GitGraph: diagramServices };
}

export const initGitGraphLangiumServices = esmInit(() => {
  initMermaidLangiumGrammar();
  initLangiumRuntime();
  defineName(createGitGraphServices, "createGitGraphServices");
});
