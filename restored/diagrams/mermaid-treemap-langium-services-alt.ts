// Restored from ref/webview/assets/chunk-FWNWRKHM-DDjfzubo.js
// Mermaid Treemap Langium services (alt) — createTreemapServices + TreemapModule.

import { esmInit } from "../runtime/rolldown-runtime";
import {
  AbstractMermaidTokenBuilder,
  AbstractMermaidValueConverter,
  EmptyFileSystem,
  MermaidGeneratedSharedModule,
  TreemapGeneratedModule,
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  defineName,
  initLangiumRuntime,
  initMermaidLangiumGrammar,
  inject,
} from "./mermaid-langium-grammar-alt";

const classDefRegex = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/;

class TreemapTokenBuilder extends AbstractMermaidTokenBuilder {
  static {
    defineName(this, "TreemapTokenBuilder");
  }
  constructor() {
    super(["treemap"]);
  }
}

class TreemapValueConverter extends AbstractMermaidValueConverter {
  static {
    defineName(this, "TreemapValueConverter");
  }
  runCustomConverter(
    rule: { name: string },
    input: string,
    _cstNode?: unknown,
  ): unknown {
    if (rule.name === "NUMBER2") return parseFloat(input.replace(/,/g, ""));
    if (rule.name === "SEPARATOR" || rule.name === "STRING2") {
      return input.substring(1, input.length - 1);
    }
    if (rule.name === "INDENTATION") return input.length;
    if (rule.name === "ClassDef") {
      if (typeof input !== "string") return input;
      const match = classDefRegex.exec(input);
      if (match) {
        return {
          $type: "ClassDefStatement",
          className: match[1],
          styleText: match[2] || undefined,
        };
      }
    }
    return undefined;
  }
}

type TreemapRow = {
  item?: unknown;
  indent?: string;
};

type TreemapDoc = {
  TreemapRows: TreemapRow[];
};

type ValidationAccept = (
  severity: string,
  message: string,
  info: { node: TreemapRow; property: string },
) => void;

class TreemapValidator {
  static {
    defineName(this, "TreemapValidator");
  }
  checkSingleRoot(doc: TreemapDoc, accept: ValidationAccept): void {
    let rootNodeIndentation: number | undefined;
    for (const row of doc.TreemapRows) {
      if (!row.item) continue;
      if (rootNodeIndentation === undefined && row.indent === undefined) {
        rootNodeIndentation = 0;
      } else if (
        row.indent === undefined ||
        (rootNodeIndentation !== undefined &&
          rootNodeIndentation >= parseInt(row.indent, 10))
      ) {
        accept("error", "Multiple root nodes are not allowed in a treemap.", {
          node: row,
          property: "item",
        });
      }
    }
  }
}

type TreemapServices = {
  validation: {
    TreemapValidator: TreemapValidator;
    ValidationRegistry?: {
      register: (checks: unknown, validator: TreemapValidator) => void;
    };
  };
};

function registerValidationChecks(services: TreemapServices): void {
  const validator = services.validation.TreemapValidator;
  const registry = services.validation.ValidationRegistry;
  if (registry) {
    registry.register(
      { Treemap: validator.checkSingleRoot.bind(validator) },
      validator,
    );
  }
}
defineName(registerValidationChecks, "registerValidationChecks");

export const TreemapModule = {
  parser: {
    TokenBuilder: defineName(() => new TreemapTokenBuilder(), "TokenBuilder"),
    ValueConverter: defineName(
      () => new TreemapValueConverter(),
      "ValueConverter",
    ),
  },
  validation: {
    TreemapValidator: defineName(
      () => new TreemapValidator(),
      "TreemapValidator",
    ),
  },
};

export function createTreemapServices(context: unknown = EmptyFileSystem): {
  shared: { ServiceRegistry: { register: (services: unknown) => void } };
  Treemap: TreemapServices;
} {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule,
  );
  const Treemap = inject(
    createDefaultCoreModule({ shared }),
    TreemapGeneratedModule,
    TreemapModule,
  );
  shared.ServiceRegistry.register(Treemap);
  registerValidationChecks(Treemap);
  return { shared, Treemap };
}

export const initTreemapLangiumServices = esmInit(() => {
  initMermaidLangiumGrammar();
  initLangiumRuntime();
  defineName(createTreemapServices, "createTreemapServices");
});
