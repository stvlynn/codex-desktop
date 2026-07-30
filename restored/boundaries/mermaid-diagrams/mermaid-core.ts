// Restored from ref/webview/assets/mermaid.core-CtG2uVQZ.js
// Codex Mermaid core aggregator wrapper (mermaid@11.14.0 twin).
// Typed default export + lazy diagram loaders wired to local npm-backed shims
// under boundaries/mermaid-diagrams (and diagrams/* leaves). Keep local — do
// not replace with a bare `mermaid` / `mermaid-v14` package-root re-export.

import type {
  DiagramDefinition,
  ExternalDiagramDefinition,
  Mermaid,
  MermaidConfig,
} from "mermaid-v14";
import mermaid from "mermaid-v14";

export type MermaidCore = Mermaid;
export type {
  DiagramDefinition,
  ExternalDiagramDefinition,
  Mermaid,
  MermaidConfig,
};

type DiagramModule = {
  diagram: DiagramDefinition | unknown;
};

function defineDiagram(
  id: string,
  detector: (text: string, config?: MermaidConfig) => boolean,
  loadModule: () => Promise<DiagramModule>,
): ExternalDiagramDefinition {
  return {
    id,
    detector,
    loader: async () => {
      const { diagram } = await loadModule();
      return { id, diagram: diagram as DiagramDefinition };
    },
  };
}

/**
 * Lazy loaders for the Codex mermaid@11.14.0 twin. Paths resolve through the
 * already-shimmed diagram modules (npm re-exports / restored leaves) so the
 * restore graph stays coherent; detectors mirror stock mermaid.core behavior.
 */
const codexMermaidDiagrams: ExternalDiagramDefinition[] = [
  defineDiagram(
    "flowchart-elk",
    (text, config = {}) => {
      if (
        /^\s*flowchart-elk/.test(text) ||
        (/^\s*(flowchart|graph)/.test(text) &&
          config.flowchart?.defaultRenderer === "elk")
      ) {
        config.layout = "elk";
        return true;
      }
      return false;
    },
    () => import("./flow-diagram-alt"),
  ),
  defineDiagram(
    "mindmap",
    (text) => /^\s*mindmap/.test(text),
    () => import("./mindmap-diagram-alt"),
  ),
  defineDiagram(
    "architecture",
    (text) => /^\s*architecture/.test(text),
    () => import("./architecture-diagram"),
  ),
  defineDiagram(
    "c4",
    (text) =>
      /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(text),
    () => import("./c4-diagram-alt"),
  ),
  defineDiagram(
    "kanban",
    (text) => /^\s*kanban/.test(text),
    () => import("./kanban-diagram-alt"),
  ),
  defineDiagram(
    "classDiagram",
    (text, config) =>
      (/^\s*classDiagram/.test(text) &&
        config?.class?.defaultRenderer === "dagre-wrapper") ||
      /^\s*classDiagram-v2/.test(text),
    () => import("../../diagrams/class-diagram-v2-alt"),
  ),
  defineDiagram(
    "class",
    (text, config) =>
      config?.class?.defaultRenderer === "dagre-wrapper"
        ? false
        : /^\s*classDiagram/.test(text),
    () => import("../../diagrams/class-diagram-alt"),
  ),
  defineDiagram(
    "er",
    (text) => /^\s*erDiagram/.test(text),
    () => import("./er-diagram-alt"),
  ),
  defineDiagram(
    "gantt",
    (text) => /^\s*gantt/.test(text),
    () => import("./gantt-diagram-alt"),
  ),
  defineDiagram(
    "info",
    (text) => /^\s*info/.test(text),
    () => import("../../diagrams/info-diagram"),
  ),
  defineDiagram(
    "pie",
    (text) => /^\s*pie/.test(text),
    () => import("../../diagrams/pie-diagram"),
  ),
  defineDiagram(
    "requirement",
    (text) => /^\s*requirement(Diagram)?/.test(text),
    () => import("./requirement-diagram-alt"),
  ),
  defineDiagram(
    "sequence",
    (text) => /^\s*sequenceDiagram/.test(text),
    () => import("./sequence-diagram-alt"),
  ),
  defineDiagram(
    "flowchart-v2",
    (text, config) => {
      if (config?.flowchart?.defaultRenderer === "dagre-d3") return false;
      if (config?.flowchart?.defaultRenderer === "elk") {
        config.layout = "elk";
      }
      if (
        /^\s*graph/.test(text) &&
        config?.flowchart?.defaultRenderer === "dagre-wrapper"
      ) {
        return true;
      }
      return /^\s*flowchart/.test(text);
    },
    () => import("./flow-diagram-alt"),
  ),
  defineDiagram(
    "flowchart",
    (text, config) =>
      config?.flowchart?.defaultRenderer === "dagre-wrapper" ||
      config?.flowchart?.defaultRenderer === "elk"
        ? false
        : /^\s*graph/.test(text),
    () => import("./flow-diagram-alt"),
  ),
  defineDiagram(
    "timeline",
    (text) => /^\s*timeline/.test(text),
    () => import("./timeline-definition-alt"),
  ),
  defineDiagram(
    "gitGraph",
    (text) => /^\s*gitGraph/.test(text),
    () => import("./git-graph-diagram"),
  ),
  defineDiagram(
    "stateDiagram",
    (text, config) =>
      !!(
        /^\s*stateDiagram-v2/.test(text) ||
        (/^\s*stateDiagram/.test(text) &&
          config?.state?.defaultRenderer === "dagre-wrapper")
      ),
    () => import("../../diagrams/state-diagram-v2-alt"),
  ),
  defineDiagram(
    "state",
    (text, config) =>
      config?.state?.defaultRenderer === "dagre-wrapper"
        ? false
        : /^\s*stateDiagram/.test(text),
    () => import("./state-diagram-alt"),
  ),
  defineDiagram(
    "journey",
    (text) => /^\s*journey/.test(text),
    () => import("./journey-diagram-alt"),
  ),
  defineDiagram(
    "quadrantChart",
    (text) => /^\s*quadrantChart/.test(text),
    () => import("./quadrant-diagram-alt"),
  ),
  defineDiagram(
    "sankey",
    (text) => /^\s*sankey(-beta)?/.test(text),
    () => import("./sankey-diagram-alt"),
  ),
  defineDiagram(
    "packet",
    (text) => /^\s*packet(-beta)?/.test(text),
    () => import("../../diagrams/packet-diagram"),
  ),
  defineDiagram(
    "xychart",
    (text) => /^\s*xychart(-beta)?/.test(text),
    () => import("./xychart-diagram-alt"),
  ),
  defineDiagram(
    "block",
    (text) => /^\s*block(-beta)?/.test(text),
    () => import("./block-diagram-alt"),
  ),
  defineDiagram(
    "treeView",
    (text) => /^\s*treeView-beta/.test(text),
    () => import("../../diagrams/tree-view-diagram"),
  ),
  defineDiagram(
    "radar",
    (text) => /^\s*radar-beta/.test(text),
    () => import("../../diagrams/radar-diagram"),
  ),
  defineDiagram(
    "ishikawa",
    (text) => /^\s*ishikawa(-beta)?\b/i.test(text),
    () => import("./ishikawa-diagram"),
  ),
  defineDiagram(
    "treemap",
    (text) => /^\s*treemap/.test(text),
    () => import("../../diagrams/treemap-diagram"),
  ),
  defineDiagram(
    "venn",
    (text) => /^\s*venn-beta/.test(text),
    () => import("./venn-diagram"),
  ),
  defineDiagram(
    "wardley-beta",
    (text) => /^\s*wardley-beta/i.test(text),
    () => import("./wardley-diagram"),
  ),
];

// Overwrite stock mermaid@11.14.0 detectors/loaders with Codex local shims.
// registerExternalDiagrams calls addDiagrams() first (stock order), then
// registerLazyLoadedDiagrams which overwrites loaders in place.
void mermaid.registerExternalDiagrams(codexMermaidDiagrams, {
  lazyLoad: true,
});

const MermaidCore: MermaidCore = mermaid;

export default MermaidCore;
