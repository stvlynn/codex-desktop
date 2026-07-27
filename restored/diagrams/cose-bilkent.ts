// Restored from ref/webview/assets/cose-bilkent-S5V4N54A-Cz0ahurO.js
// Mermaid layout renderer: Cytoscape cose-bilkent positioning for flowchart-like graphs.

import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt-dup";
import {
  select as d3Select,
  ensureD3SelectionRuntimeT as initD3SelectionRuntime,
} from "../vendor/d3-axis-current-runtime";
import { t as cytoscapeFactory } from "cytoscape";
import { t as coseBilkentExtension } from "cytoscape-cose-bilkent";
type Point = {
  x: number;
  y: number;
};
type LayoutNode = {
  id: string;
  label?: string;
  height?: number;
  width?: number;
  padding?: number;
  x?: number;
  y?: number;
  isGroup?: boolean;
  domId?: {
    attr: (name: string, value: string) => unknown;
    node: () => {
      getBBox: () => {
        width: number;
        height: number;
      };
    };
  };
  [key: string]: unknown;
};
type LayoutEdge = {
  id: string;
  start?: string;
  end?: string;
  points?: Point[];
  [key: string]: unknown;
};
type LayoutInput = {
  nodes: LayoutNode[];
  edges: LayoutEdge[];
  config: unknown;
  rootNode: unknown;
  markers?: unknown;
  type?: string;
  diagramId?: string;
  direction?: string;
};
type PositionedNode = {
  id: string;
  x: number;
  y: number;
  [key: string]: unknown;
};
type PositionedEdge = {
  id: string;
  source: string;
  target: string;
  startX: number;
  startY: number;
  midX: number;
  midY: number;
  endX: number;
  endY: number;
  [key: string]: unknown;
};
type CytoscapeCore = {
  add: (element: unknown) => void;
  nodes: () => {
    forEach: (
      fn: (node: {
        data: () => Record<string, unknown>;
        layoutDimensions?: () => {
          w: number;
          h: number;
        };
      }) => void,
    ) => void;
    map: <T>(
      fn: (node: {
        data: () => Record<string, unknown>;
        position: () => Point;
      }) => T,
    ) => T[];
  };
  edges: () => {
    map: <T>(
      fn: (edge: {
        data: () => Record<string, unknown>;
        _private: {
          rscratch: PositionedEdge;
        };
      }) => T,
    ) => T[];
  };
  layout: (options: Record<string, unknown>) => {
    run: () => void;
  };
  ready: (fn: (event: unknown) => void) => void;
  use: (extension: unknown) => void;
};
type DiagramHelpers = {
  insertCluster: (
    parent: unknown,
    node: LayoutNode,
  ) => Promise<unknown> | unknown;
  insertEdge: (
    parent: unknown,
    edge: LayoutEdge,
    clusters: Record<string, LayoutNode>,
    type: string | undefined,
    start: LayoutNode,
    end: LayoutNode,
    diagramId: string | undefined,
  ) => unknown;
  insertEdgeLabel: (
    parent: unknown,
    edge: LayoutEdge,
  ) => Promise<unknown> | unknown;
  insertMarkers: (
    parent: unknown,
    markers: unknown,
    type: string | undefined,
    diagramId: string | undefined,
  ) => void;
  insertNode: (
    parent: unknown,
    node: LayoutNode,
    options: {
      config: unknown;
      dir: string;
    },
  ) => Promise<{
    attr: (name: string, value: string) => unknown;
    node: () => {
      getBBox: () => {
        width: number;
        height: number;
      };
    };
  }>;
  log: {
    debug: (...args: unknown[]) => void;
    info: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
  };
  positionEdgeLabel: (edge: LayoutEdge, path: unknown) => void;
};
function addNodes(nodes: LayoutNode[], cy: CytoscapeCore): void {
  nodes.forEach((node) => {
    const data: Record<string, unknown> = {
      id: node.id,
      labelText: node.label,
      height: node.height,
      width: node.width,
      padding: node.padding ?? 0,
    };
    Object.keys(node).forEach((key) => {
      if (
        !["id", "label", "height", "width", "padding", "x", "y"].includes(key)
      ) {
        data[key] = node[key];
      }
    });
    cy.add({
      group: "nodes",
      data,
      position: {
        x: node.x ?? 0,
        y: node.y ?? 0,
      },
    });
  });
}
function addEdges(edges: LayoutEdge[], cy: CytoscapeCore): void {
  edges.forEach((edge) => {
    const data: Record<string, unknown> = {
      id: edge.id,
      source: edge.start,
      target: edge.end,
    };
    Object.keys(edge).forEach((key) => {
      if (!["id", "start", "end"].includes(key)) {
        data[key] = edge[key];
      }
    });
    cy.add({
      group: "edges",
      data,
    });
  });
}
function createCytoscapeInstance(layout: LayoutInput): Promise<CytoscapeCore> {
  return new Promise((resolve) => {
    const host = (
      d3Select("body") as {
        append: (tag: string) => {
          attr: (
            name: string,
            value: string,
          ) => {
            attr: (
              name: string,
              value: string,
            ) => {
              remove: () => void;
            };
          };
        };
      }
    )
      .append("div")
      .attr("id", "cy")
      .attr("style", "display:none");
    const cy = (
      cytoscapeFactory as unknown as (
        options: Record<string, unknown>,
      ) => CytoscapeCore
    )({
      container: document.getElementById("cy"),
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "bezier",
          },
        },
      ],
    });
    host.remove();
    addNodes(layout.nodes, cy);
    addEdges(layout.edges, cy);
    cy.nodes().forEach((node) => {
      node.layoutDimensions = () => {
        const data = node.data();
        return {
          w: data.width as number,
          h: data.height as number,
        };
      };
    });
    cy.layout({
      name: "cose-bilkent",
      quality: "proof",
      styleEnabled: false,
      animate: false,
    }).run();
    cy.ready((event) => {
      logger.info("Cytoscape ready", event);
      resolve(cy);
    });
  });
}
function extractPositionedNodes(cy: CytoscapeCore): PositionedNode[] {
  return cy.nodes().map((node) => {
    const data = node.data();
    const position = node.position();
    const result: PositionedNode = {
      id: data.id as string,
      x: position.x,
      y: position.y,
    };
    Object.keys(data).forEach((key) => {
      if (key !== "id") result[key] = data[key];
    });
    return result;
  });
}
function extractPositionedEdges(cy: CytoscapeCore): PositionedEdge[] {
  return cy.edges().map((edge) => {
    const data = edge.data();
    const scratch = edge._private.rscratch;
    const result: PositionedEdge = {
      id: data.id as string,
      source: data.source as string,
      target: data.target as string,
      startX: scratch.startX,
      startY: scratch.startY,
      midX: scratch.midX,
      midY: scratch.midY,
      endX: scratch.endX,
      endY: scratch.endY,
    };
    Object.keys(data).forEach((key) => {
      if (!["id", "source", "target"].includes(key)) {
        result[key] = data[key];
      }
    });
    return result;
  });
}
function validateLayoutData(layout: LayoutInput): true {
  if (!layout) throw new Error("Layout data is required");
  if (!layout.config)
    throw new Error("Configuration is required in layout data");
  if (!layout.rootNode) throw new Error("Root node is required");
  if (!layout.nodes || !Array.isArray(layout.nodes)) {
    throw new Error("No nodes found in layout data");
  }
  if (!Array.isArray(layout.edges)) {
    throw new Error("Edges array is required in layout data");
  }
  return true;
}
async function executeCoseBilkentLayout(layout: LayoutInput): Promise<{
  nodes: PositionedNode[];
  edges: PositionedEdge[];
}> {
  logger.debug("Starting cose-bilkent layout algorithm");
  try {
    validateLayoutData(layout);
    const cy = await createCytoscapeInstance(layout);
    const nodes = extractPositionedNodes(cy);
    const edges = extractPositionedEdges(cy);
    logger.debug(
      `Layout completed: ${nodes.length} nodes, ${edges.length} edges`,
    );
    return {
      nodes,
      edges,
    };
  } catch (error) {
    logger.error("Error in cose-bilkent layout algorithm:", error);
    throw error;
  }
}
export async function render(
  diagram: LayoutInput,
  svg: {
    select: (selector: string) => unknown;
  },
  helpers: DiagramHelpers,
  _options: {
    algorithm?: string;
  },
): Promise<void> {
  const nodeMap: Record<string, LayoutNode> = {};
  const clusterMap: Record<string, LayoutNode> = {};
  const root = svg.select("g") as {
    insert: (tag: string) => {
      attr: (name: string, value: string) => unknown;
    };
  };
  helpers.insertMarkers(root, diagram.markers, diagram.type, diagram.diagramId);
  const subgraphs = root.insert("g").attr("class", "subgraphs");
  const edgePaths = root.insert("g").attr("class", "edgePaths");
  const edgeLabels = root.insert("g").attr("class", "edgeLabels");
  const nodesGroup = root.insert("g").attr("class", "nodes");
  helpers.log.debug("Inserting nodes into DOM for dimension calculation");
  await Promise.all(
    diagram.nodes.map(async (node) => {
      if (node.isGroup) {
        const cluster = {
          ...node,
        };
        clusterMap[node.id] = cluster;
        nodeMap[node.id] = cluster;
        await helpers.insertCluster(subgraphs, node);
        return;
      }
      const copy = {
        ...node,
      };
      nodeMap[node.id] = copy;
      const el = await helpers.insertNode(nodesGroup, node, {
        config: diagram.config,
        dir: diagram.direction || "TB",
      });
      const box = el.node().getBBox();
      copy.width = box.width;
      copy.height = box.height;
      copy.domId = el;
      helpers.log.debug(
        `Node ${node.id} dimensions: ${box.width}x${box.height}`,
      );
    }),
  );
  helpers.log.debug("Running cose-bilkent layout algorithm");
  const positioned = await executeCoseBilkentLayout({
    ...diagram,
    nodes: diagram.nodes.map((node) => {
      const measured = nodeMap[node.id]!;
      return {
        ...node,
        width: measured.width,
        height: measured.height,
      };
    }),
  });
  helpers.log.debug("Positioning nodes based on layout results");
  positioned.nodes.forEach((node) => {
    const local = nodeMap[node.id];
    if (!local?.domId) return;
    local.domId.attr("transform", `translate(${node.x}, ${node.y})`);
    local.x = node.x;
    local.y = node.y;
    helpers.log.debug(
      `Positioned node ${local.id} at center (${node.x}, ${node.y})`,
    );
  });
  positioned.edges.forEach((edge) => {
    const source = diagram.edges.find((item) => item.id === edge.id);
    if (!source) return;
    source.points = [
      {
        x: edge.startX,
        y: edge.startY,
      },
      {
        x: edge.midX,
        y: edge.midY,
      },
      {
        x: edge.endX,
        y: edge.endY,
      },
    ];
  });
  helpers.log.debug("Inserting and positioning edges");
  await Promise.all(
    diagram.edges.map(async (edge) => {
      await helpers.insertEdgeLabel(edgeLabels, edge);
      const start = nodeMap[edge.start ?? ""];
      const end = nodeMap[edge.end ?? ""];
      if (!start || !end) return;
      const positionedEdge = positioned.edges.find(
        (item) => item.id === edge.id,
      );
      const edgeForInsert = positionedEdge
        ? {
            ...edge,
          }
        : {
            ...edge,
            points: [
              {
                x: (start.x as number) || 0,
                y: (start.y as number) || 0,
              },
              {
                x: (end.x as number) || 0,
                y: (end.y as number) || 0,
              },
            ],
          };
      if (positionedEdge) {
        helpers.log.debug("APA01 positionedEdge", positionedEdge);
      }
      helpers.positionEdgeLabel(
        edgeForInsert,
        helpers.insertEdge(
          edgePaths,
          edgeForInsert,
          clusterMap,
          diagram.type,
          start,
          end,
          diagram.diagramId,
        ),
      );
    }),
  );
  helpers.log.debug("Cose-bilkent rendering completed");
}
defineFunctionName(addNodes, "addNodes");
defineFunctionName(addEdges, "addEdges");
defineFunctionName(createCytoscapeInstance, "createCytoscapeInstance");
defineFunctionName(extractPositionedNodes, "extractPositionedNodes");
defineFunctionName(extractPositionedEdges, "extractPositionedEdges");
defineFunctionName(executeCoseBilkentLayout, "executeCoseBilkentLayout");
defineFunctionName(validateLayoutData, "validateLayoutData");
defineFunctionName(render, "render");
initDayjsLoggerRuntime();
initD3SelectionRuntime();
(cytoscapeFactory as unknown as CytoscapeCore).use?.(
  (
    coseBilkentExtension as {
      default?: unknown;
    }
  ).default ?? coseBilkentExtension,
);
