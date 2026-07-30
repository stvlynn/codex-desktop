// Restored from ref/webview/assets/chunk-ORNJ4GCN-zJqraLh5.js
// Mermaid TreeView Langium services — createTreeViewServices + TreeViewModule.

import { esmInit } from "../runtime/rolldown-runtime";
import {
  AbstractMermaidTokenBuilder,
  AbstractMermaidValueConverter,
  EmptyFileSystem,
  MermaidGeneratedSharedModule,
  TreeViewGeneratedModule,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  defineName,
  initLangiumRuntime,
  initMermaidLangiumGrammar,
  inject,
} from "./mermaid-langium-grammar";

class TreeViewValueConverter extends AbstractMermaidValueConverter {
  static {
    defineName(this, "TreeViewValueConverter");
  }
  runCustomConverter(
    rule: { name: string },
    input: string,
    _cstNode?: unknown,
  ): string | number | undefined {
    if (rule.name === "INDENTATION") return input?.length || 0;
    if (rule.name === "STRING2") return input.substring(1, input.length - 1);
    return undefined;
  }
}

class TreeViewTokenBuilder extends AbstractMermaidTokenBuilder {
  static {
    defineName(this, "TreeViewTokenBuilder");
  }
  constructor() {
    super(["treeView-beta"]);
  }
}

export const TreeViewModule = {
  parser: {
    TokenBuilder: defineName(() => new TreeViewTokenBuilder(), "TokenBuilder"),
    ValueConverter: defineName(
      () => new TreeViewValueConverter(),
      "ValueConverter",
    ),
  },
};

export function createTreeViewServices(context: unknown = EmptyFileSystem): {
  shared: { ServiceRegistry: { register: (services: unknown) => void } };
  TreeView: unknown;
} {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule,
  );
  const TreeView = inject(
    createDefaultCoreModule({ shared }),
    TreeViewGeneratedModule,
    TreeViewModule,
  );
  shared.ServiceRegistry.register(TreeView);
  return { shared, TreeView };
}

export const initTreeViewLangiumServices = esmInit(() => {
  initMermaidLangiumGrammar();
  initLangiumRuntime();
  defineName(createTreeViewServices, "createTreeViewServices");
});
