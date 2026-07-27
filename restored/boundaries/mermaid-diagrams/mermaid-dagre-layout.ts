// Restored from ref/webview/assets/dagre-6UL2VRFP-BdaKwIls.js
// Mermaid dagre layout renderer (primary) — clusters/edges/nodes recursive render.
// Stage 3: IMPORT_MAP-rewritten deps; graphlib/dagre via vendor npm shims (codex-ref).
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
import { At, F, rt, t } from "../lodash-collection-runtime";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import { b, k } from "../../diagrams/mermaid-config";
import { chunkS3R3BYOJU } from "./mermaid-common-utils";
import { chunkJA3XYJ7ZA } from "./mermaid-create-text";
import { initMermaidLineOffsetChunk } from "../../diagrams/line-offset-helpers";
import {
  initSubGraphTitleMarginsChunk as chunkCVBHYZKIN,
  getSubGraphTitleMargins as chunkCVBHYZKIT,
} from "../../diagrams/subgraph-title-margins";
import {
  n as dagre6UL2VRFPImport1,
  r as dagre6UL2VRFPImport2,
  t as dagre6UL2VRFPImport3,
} from "../../vendor/graphlib";
import { n as chunkATLVNIR6N } from "../../diagrams/style-helpers";
import {
  chunkJZLCHNYAI,
  chunkJZLCHNYAC,
  chunkJZLCHNYAD,
  chunkJZLCHNYAL,
  chunkJZLCHNYAN,
  chunkJZLCHNYAO,
  chunkJZLCHNYAT,
  chunkJZLCHNYAU,
} from "./mermaid-flowchart-nodes";
import {
  chunkQXUST7PYN,
  chunkQXUST7PYA,
  chunkQXUST7PYI,
  chunkQXUST7PYO,
  chunkQXUST7PYR,
  chunkQXUST7PYT,
} from "./mermaid-flowchart-edges";
import {
  r as dagre6UL2VRFPImport4,
  t as dagre6UL2VRFPImport5,
} from "../../vendor/dagre";
function dagre6UL2VRFPHelper1(dagre6UL2VRFPInput25) {
  var dagre6UL2VRFPBinding70 = {
    options: {
      directed: dagre6UL2VRFPInput25.isDirected(),
      multigraph: dagre6UL2VRFPInput25.isMultigraph(),
      compound: dagre6UL2VRFPInput25.isCompound(),
    },
    nodes: dagre6UL2VRFPHelper2(dagre6UL2VRFPInput25),
    edges: dagre6UL2VRFPHelper3(dagre6UL2VRFPInput25),
  };
  return (
    F(dagre6UL2VRFPInput25.graph()) ||
      (dagre6UL2VRFPBinding70.value = At(dagre6UL2VRFPInput25.graph())),
    dagre6UL2VRFPBinding70
  );
}
function dagre6UL2VRFPHelper2(dagre6UL2VRFPInput28) {
  return rt(dagre6UL2VRFPInput28.nodes(), function (dagre6UL2VRFPInput32) {
    var dagre6UL2VRFPBinding77 =
        dagre6UL2VRFPInput28.node(dagre6UL2VRFPInput32),
      dagre6UL2VRFPBinding78 =
        dagre6UL2VRFPInput28.parent(dagre6UL2VRFPInput32),
      dagre6UL2VRFPBinding79 = {
        v: dagre6UL2VRFPInput32,
      };
    return (
      F(dagre6UL2VRFPBinding77) ||
        (dagre6UL2VRFPBinding79.value = dagre6UL2VRFPBinding77),
      F(dagre6UL2VRFPBinding78) ||
        (dagre6UL2VRFPBinding79.parent = dagre6UL2VRFPBinding78),
      dagre6UL2VRFPBinding79
    );
  });
}
function dagre6UL2VRFPHelper3(dagre6UL2VRFPInput29) {
  return rt(dagre6UL2VRFPInput29.edges(), function (dagre6UL2VRFPInput35) {
    var dagre6UL2VRFPBinding82 =
        dagre6UL2VRFPInput29.edge(dagre6UL2VRFPInput35),
      dagre6UL2VRFPBinding83 = {
        v: dagre6UL2VRFPInput35.v,
        w: dagre6UL2VRFPInput35.w,
      };
    return (
      F(dagre6UL2VRFPInput35.name) ||
        (dagre6UL2VRFPBinding83.name = dagre6UL2VRFPInput35.name),
      F(dagre6UL2VRFPBinding82) ||
        (dagre6UL2VRFPBinding83.value = dagre6UL2VRFPBinding82),
      dagre6UL2VRFPBinding83
    );
  });
}
var dagre6UL2VRFPBinding1 = esmInit(() => {
    t();
    dagre6UL2VRFPImport2();
  }),
  dagre6UL2VRFPBinding2,
  dagre6UL2VRFPBinding3,
  dagre6UL2VRFPBinding4,
  dagre6UL2VRFPBinding5,
  dagre6UL2VRFPBinding6,
  dagre6UL2VRFPBinding7,
  dagre6UL2VRFPBinding8,
  dagre6UL2VRFPBinding9,
  dagre6UL2VRFPBinding10,
  dagre6UL2VRFPBinding11,
  dagre6UL2VRFPBinding12,
  dagre6UL2VRFPBinding13,
  dagre6UL2VRFPBinding14,
  dagre6UL2VRFPBinding15,
  dagre6UL2VRFPBinding16,
  dagre6UL2VRFPBinding17,
  dagre6UL2VRFP;
esmInit(() => {
  chunkQXUST7PYN();
  initMermaidLineOffsetChunk();
  chunkJZLCHNYAI();
  chunkCVBHYZKIN();
  chunkATLVNIR6N();
  chunkJA3XYJ7ZA();
  chunkS3R3BYOJU();
  k();
  initDayjsLoggerRuntime();
  dagre6UL2VRFPImport5();
  dagre6UL2VRFPBinding1();
  dagre6UL2VRFPImport3();
  dagre6UL2VRFPBinding2 = new Map();
  dagre6UL2VRFPBinding3 = new Map();
  dagre6UL2VRFPBinding4 = new Map();
  dagre6UL2VRFPBinding5 = defineFunctionName(() => {
    dagre6UL2VRFPBinding3.clear();
    dagre6UL2VRFPBinding4.clear();
    dagre6UL2VRFPBinding2.clear();
  }, "clear");
  dagre6UL2VRFPBinding6 = defineFunctionName(
    (dagre6UL2VRFPInput30, dagre6UL2VRFPInput31) => {
      let dagre6UL2VRFPBinding75 =
        dagre6UL2VRFPBinding3.get(dagre6UL2VRFPInput31) || [];
      return (
        logger.trace(
          "In isDescendant",
          dagre6UL2VRFPInput31,
          " ",
          dagre6UL2VRFPInput30,
          " = ",
          dagre6UL2VRFPBinding75.includes(dagre6UL2VRFPInput30),
        ),
        dagre6UL2VRFPBinding75.includes(dagre6UL2VRFPInput30)
      );
    },
    "isDescendant",
  );
  dagre6UL2VRFPBinding7 = defineFunctionName(
    (dagre6UL2VRFPInput17, dagre6UL2VRFPInput18) => {
      let dagre6UL2VRFPBinding60 =
        dagre6UL2VRFPBinding3.get(dagre6UL2VRFPInput18) || [];
      return (
        logger.info(
          "Descendants of ",
          dagre6UL2VRFPInput18,
          " is ",
          dagre6UL2VRFPBinding60,
        ),
        logger.info("Edge is ", dagre6UL2VRFPInput17),
        dagre6UL2VRFPInput17.v === dagre6UL2VRFPInput18 ||
        dagre6UL2VRFPInput17.w === dagre6UL2VRFPInput18
          ? false
          : dagre6UL2VRFPBinding60
            ? dagre6UL2VRFPBinding60.includes(dagre6UL2VRFPInput17.v) ||
              dagre6UL2VRFPBinding6(
                dagre6UL2VRFPInput17.v,
                dagre6UL2VRFPInput18,
              ) ||
              dagre6UL2VRFPBinding6(
                dagre6UL2VRFPInput17.w,
                dagre6UL2VRFPInput18,
              ) ||
              dagre6UL2VRFPBinding60.includes(dagre6UL2VRFPInput17.w)
            : (logger.debug(
                "Tilt, ",
                dagre6UL2VRFPInput18,
                ",not in descendants",
              ),
              false)
      );
    },
    "edgeInCluster",
  );
  dagre6UL2VRFPBinding8 = defineFunctionName(
    (
      dagre6UL2VRFPInput13,
      dagre6UL2VRFPInput14,
      dagre6UL2VRFPInput15,
      dagre6UL2VRFPInput16,
    ) => {
      logger.warn(
        "Copying children of ",
        dagre6UL2VRFPInput13,
        "root",
        dagre6UL2VRFPInput16,
        "data",
        dagre6UL2VRFPInput14.node(dagre6UL2VRFPInput13),
        dagre6UL2VRFPInput16,
      );
      let dagre6UL2VRFPBinding30 =
        dagre6UL2VRFPInput14.children(dagre6UL2VRFPInput13) || [];
      dagre6UL2VRFPInput13 !== dagre6UL2VRFPInput16 &&
        dagre6UL2VRFPBinding30.push(dagre6UL2VRFPInput13);
      logger.warn(
        "Copying (nodes) clusterId",
        dagre6UL2VRFPInput13,
        "nodes",
        dagre6UL2VRFPBinding30,
      );
      dagre6UL2VRFPBinding30.forEach((item) => {
        if (dagre6UL2VRFPInput14.children(item).length > 0)
          dagre6UL2VRFPBinding8(
            item,
            dagre6UL2VRFPInput14,
            dagre6UL2VRFPInput15,
            dagre6UL2VRFPInput16,
          );
        else {
          let dagre6UL2VRFPBinding34 = dagre6UL2VRFPInput14.node(item);
          logger.info(
            "cp ",
            item,
            " to ",
            dagre6UL2VRFPInput16,
            " with parent ",
            dagre6UL2VRFPInput13,
          );
          dagre6UL2VRFPInput15.setNode(item, dagre6UL2VRFPBinding34);
          dagre6UL2VRFPInput16 !== dagre6UL2VRFPInput14.parent(item) &&
            (logger.warn(
              "Setting parent",
              item,
              dagre6UL2VRFPInput14.parent(item),
            ),
            dagre6UL2VRFPInput15.setParent(
              item,
              dagre6UL2VRFPInput14.parent(item),
            ));
          dagre6UL2VRFPInput13 !== dagre6UL2VRFPInput16 &&
          item !== dagre6UL2VRFPInput13
            ? (logger.debug("Setting parent", item, dagre6UL2VRFPInput13),
              dagre6UL2VRFPInput15.setParent(item, dagre6UL2VRFPInput13))
            : (logger.info(
                "In copy ",
                dagre6UL2VRFPInput13,
                "root",
                dagre6UL2VRFPInput16,
                "data",
                dagre6UL2VRFPInput14.node(dagre6UL2VRFPInput13),
                dagre6UL2VRFPInput16,
              ),
              logger.debug(
                "Not Setting parent for node=",
                item,
                "cluster!==rootId",
                dagre6UL2VRFPInput13 !== dagre6UL2VRFPInput16,
                "node!==clusterId",
                item !== dagre6UL2VRFPInput13,
              ));
          let dagre6UL2VRFPBinding35 = dagre6UL2VRFPInput14.edges(item);
          logger.debug("Copying Edges", dagre6UL2VRFPBinding35);
          dagre6UL2VRFPBinding35.forEach((_item) => {
            logger.info("Edge", _item);
            let dagre6UL2VRFPBinding48 = dagre6UL2VRFPInput14.edge(
              _item.v,
              _item.w,
              _item.name,
            );
            logger.info(
              "Edge data",
              dagre6UL2VRFPBinding48,
              dagre6UL2VRFPInput16,
            );
            try {
              dagre6UL2VRFPBinding7(_item, dagre6UL2VRFPInput16)
                ? (logger.info(
                    "Copying as ",
                    _item.v,
                    _item.w,
                    dagre6UL2VRFPBinding48,
                    _item.name,
                  ),
                  dagre6UL2VRFPInput15.setEdge(
                    _item.v,
                    _item.w,
                    dagre6UL2VRFPBinding48,
                    _item.name,
                  ),
                  logger.info(
                    "newGraph edges ",
                    dagre6UL2VRFPInput15.edges(),
                    dagre6UL2VRFPInput15.edge(dagre6UL2VRFPInput15.edges()[0]),
                  ))
                : logger.info(
                    "Skipping copy of edge ",
                    _item.v,
                    "-->",
                    _item.w,
                    " rootId: ",
                    dagre6UL2VRFPInput16,
                    " clusterId:",
                    dagre6UL2VRFPInput13,
                  );
            } catch (dagre6UL2VRFPBinding94) {
              logger.error(dagre6UL2VRFPBinding94);
            }
          });
        }
        logger.debug("Removing node", item);
        dagre6UL2VRFPInput14.removeNode(item);
      });
    },
    "copy",
  );
  dagre6UL2VRFPBinding9 = defineFunctionName(
    (dagre6UL2VRFPInput33, dagre6UL2VRFPInput34) => {
      let dagre6UL2VRFPBinding80 =
          dagre6UL2VRFPInput34.children(dagre6UL2VRFPInput33),
        dagre6UL2VRFPBinding81 = [...dagre6UL2VRFPBinding80];
      for (let dagre6UL2VRFPBinding95 of dagre6UL2VRFPBinding80) {
        dagre6UL2VRFPBinding4.set(dagre6UL2VRFPBinding95, dagre6UL2VRFPInput33);
        dagre6UL2VRFPBinding81 = [
          ...dagre6UL2VRFPBinding81,
          ...dagre6UL2VRFPBinding9(
            dagre6UL2VRFPBinding95,
            dagre6UL2VRFPInput34,
          ),
        ];
      }
      return dagre6UL2VRFPBinding81;
    },
    "extractDescendants",
  );
  dagre6UL2VRFPBinding10 = defineFunctionName(
    (dagre6UL2VRFPInput19, dagre6UL2VRFPInput20, dagre6UL2VRFPInput21) => {
      let dagre6UL2VRFPBinding61 = dagre6UL2VRFPInput19
          .edges()
          .filter(
            (item) =>
              item.v === dagre6UL2VRFPInput20 ||
              item.w === dagre6UL2VRFPInput20,
          ),
        dagre6UL2VRFPBinding62 = dagre6UL2VRFPInput19
          .edges()
          .filter(
            (item) =>
              item.v === dagre6UL2VRFPInput21 ||
              item.w === dagre6UL2VRFPInput21,
          ),
        dagre6UL2VRFPBinding63 = dagre6UL2VRFPBinding61.map((item) => ({
          v: item.v === dagre6UL2VRFPInput20 ? dagre6UL2VRFPInput21 : item.v,
          w: item.w === dagre6UL2VRFPInput20 ? dagre6UL2VRFPInput20 : item.w,
        })),
        dagre6UL2VRFPBinding64 = dagre6UL2VRFPBinding62.map((item) => ({
          v: item.v,
          w: item.w,
        }));
      return dagre6UL2VRFPBinding63.filter((item) =>
        dagre6UL2VRFPBinding64.some(
          (_item) => item.v === _item.v && item.w === _item.w,
        ),
      );
    },
    "findCommonEdges",
  );
  dagre6UL2VRFPBinding11 = defineFunctionName(
    (dagre6UL2VRFPInput22, dagre6UL2VRFPInput23, dagre6UL2VRFPInput24) => {
      let dagre6UL2VRFPBinding65 =
        dagre6UL2VRFPInput23.children(dagre6UL2VRFPInput22);
      if (
        (logger.trace(
          "Searching children of id ",
          dagre6UL2VRFPInput22,
          dagre6UL2VRFPBinding65,
        ),
        dagre6UL2VRFPBinding65.length < 1)
      )
        return dagre6UL2VRFPInput22;
      let dagre6UL2VRFPBinding66;
      for (let dagre6UL2VRFPBinding76 of dagre6UL2VRFPBinding65) {
        let dagre6UL2VRFPBinding84 = dagre6UL2VRFPBinding11(
            dagre6UL2VRFPBinding76,
            dagre6UL2VRFPInput23,
            dagre6UL2VRFPInput24,
          ),
          dagre6UL2VRFPBinding85 = dagre6UL2VRFPBinding10(
            dagre6UL2VRFPInput23,
            dagre6UL2VRFPInput24,
            dagre6UL2VRFPBinding84,
          );
        if (dagre6UL2VRFPBinding84)
          if (dagre6UL2VRFPBinding85.length > 0)
            dagre6UL2VRFPBinding66 = dagre6UL2VRFPBinding84;
          else return dagre6UL2VRFPBinding84;
      }
      return dagre6UL2VRFPBinding66;
    },
    "findNonClusterChild",
  );
  dagre6UL2VRFPBinding12 = defineFunctionName(
    (dagre6UL2VRFPInput36) =>
      !dagre6UL2VRFPBinding2.has(dagre6UL2VRFPInput36) ||
      !dagre6UL2VRFPBinding2.get(dagre6UL2VRFPInput36).externalConnections
        ? dagre6UL2VRFPInput36
        : dagre6UL2VRFPBinding2.has(dagre6UL2VRFPInput36)
          ? dagre6UL2VRFPBinding2.get(dagre6UL2VRFPInput36).id
          : dagre6UL2VRFPInput36,
    "getAnchorId",
  );
  dagre6UL2VRFPBinding13 = defineFunctionName(
    (dagre6UL2VRFPInput11, dagre6UL2VRFPInput12) => {
      if (!dagre6UL2VRFPInput11 || dagre6UL2VRFPInput12 > 10) {
        logger.debug("Opting out, no graph ");
        return;
      } else logger.debug("Opting in, graph ");
      dagre6UL2VRFPInput11.nodes().forEach(function (item) {
        dagre6UL2VRFPInput11.children(item).length > 0 &&
          (logger.warn(
            "Cluster identified",
            item,
            " Replacement id in edges: ",
            dagre6UL2VRFPBinding11(item, dagre6UL2VRFPInput11, item),
          ),
          dagre6UL2VRFPBinding3.set(
            item,
            dagre6UL2VRFPBinding9(item, dagre6UL2VRFPInput11),
          ),
          dagre6UL2VRFPBinding2.set(item, {
            id: dagre6UL2VRFPBinding11(item, dagre6UL2VRFPInput11, item),
            clusterData: dagre6UL2VRFPInput11.node(item),
          }));
      });
      dagre6UL2VRFPInput11.nodes().forEach(function (item) {
        let dagre6UL2VRFPBinding57 = dagre6UL2VRFPInput11.children(item),
          dagre6UL2VRFPBinding58 = dagre6UL2VRFPInput11.edges();
        dagre6UL2VRFPBinding57.length > 0
          ? (logger.debug("Cluster identified", item, dagre6UL2VRFPBinding3),
            dagre6UL2VRFPBinding58.forEach((_item) => {
              dagre6UL2VRFPBinding6(_item.v, item) ^
                dagre6UL2VRFPBinding6(_item.w, item) &&
                (logger.warn("Edge: ", _item, " leaves cluster ", item),
                logger.warn(
                  "Descendants of XXX ",
                  item,
                  ": ",
                  dagre6UL2VRFPBinding3.get(item),
                ),
                (dagre6UL2VRFPBinding2.get(item).externalConnections = true));
            }))
          : logger.debug("Not a cluster ", item, dagre6UL2VRFPBinding3);
      });
      for (let dagre6UL2VRFPBinding72 of dagre6UL2VRFPBinding2.keys()) {
        let dagre6UL2VRFPBinding73 = dagre6UL2VRFPBinding2.get(
            dagre6UL2VRFPBinding72,
          ).id,
          dagre6UL2VRFPBinding74 = dagre6UL2VRFPInput11.parent(
            dagre6UL2VRFPBinding73,
          );
        dagre6UL2VRFPBinding74 !== dagre6UL2VRFPBinding72 &&
          dagre6UL2VRFPBinding2.has(dagre6UL2VRFPBinding74) &&
          !dagre6UL2VRFPBinding2.get(dagre6UL2VRFPBinding74)
            .externalConnections &&
          (dagre6UL2VRFPBinding2.get(dagre6UL2VRFPBinding72).id =
            dagre6UL2VRFPBinding74);
      }
      dagre6UL2VRFPInput11.edges().forEach(function (item) {
        let dagre6UL2VRFPBinding43 = dagre6UL2VRFPInput11.edge(item);
        logger.warn(
          "Edge " + item.v + " -> " + item.w + ": " + JSON.stringify(item),
        );
        logger.warn(
          "Edge " +
            item.v +
            " -> " +
            item.w +
            ": " +
            JSON.stringify(dagre6UL2VRFPInput11.edge(item)),
        );
        let dagre6UL2VRFPBinding44 = item.v,
          dagre6UL2VRFPBinding45 = item.w;
        if (
          (logger.warn(
            "Fix XXX",
            dagre6UL2VRFPBinding2,
            "ids:",
            item.v,
            item.w,
            "Translating: ",
            dagre6UL2VRFPBinding2.get(item.v),
            " --- ",
            dagre6UL2VRFPBinding2.get(item.w),
          ),
          dagre6UL2VRFPBinding2.get(item.v) ||
            dagre6UL2VRFPBinding2.get(item.w))
        ) {
          if (
            (logger.warn(
              "Fixing and trying - removing XXX",
              item.v,
              item.w,
              item.name,
            ),
            (dagre6UL2VRFPBinding44 = dagre6UL2VRFPBinding12(item.v)),
            (dagre6UL2VRFPBinding45 = dagre6UL2VRFPBinding12(item.w)),
            dagre6UL2VRFPInput11.removeEdge(item.v, item.w, item.name),
            dagre6UL2VRFPBinding44 !== item.v)
          ) {
            let dagre6UL2VRFPBinding87 = dagre6UL2VRFPInput11.parent(
              dagre6UL2VRFPBinding44,
            );
            dagre6UL2VRFPBinding2.get(
              dagre6UL2VRFPBinding87,
            ).externalConnections = true;
            dagre6UL2VRFPBinding43.fromCluster = item.v;
          }
          if (dagre6UL2VRFPBinding45 !== item.w) {
            let dagre6UL2VRFPBinding89 = dagre6UL2VRFPInput11.parent(
              dagre6UL2VRFPBinding45,
            );
            dagre6UL2VRFPBinding2.get(
              dagre6UL2VRFPBinding89,
            ).externalConnections = true;
            dagre6UL2VRFPBinding43.toCluster = item.w;
          }
          logger.warn(
            "Fix Replacing with XXX",
            dagre6UL2VRFPBinding44,
            dagre6UL2VRFPBinding45,
            item.name,
          );
          dagre6UL2VRFPInput11.setEdge(
            dagre6UL2VRFPBinding44,
            dagre6UL2VRFPBinding45,
            dagre6UL2VRFPBinding43,
            item.name,
          );
        }
      });
      logger.warn("Adjusted Graph", dagre6UL2VRFPHelper1(dagre6UL2VRFPInput11));
      dagre6UL2VRFPBinding14(dagre6UL2VRFPInput11, 0);
      logger.trace(dagre6UL2VRFPBinding2);
    },
    "adjustClustersAndEdges",
  );
  dagre6UL2VRFPBinding14 = defineFunctionName(
    (dagre6UL2VRFPInput9, dagre6UL2VRFPInput10) => {
      if (
        (logger.warn(
          "extractor - ",
          dagre6UL2VRFPInput10,
          dagre6UL2VRFPHelper1(dagre6UL2VRFPInput9),
          dagre6UL2VRFPInput9.children("D"),
        ),
        dagre6UL2VRFPInput10 > 10)
      ) {
        logger.error("Bailing out");
        return;
      }
      let dagre6UL2VRFPBinding28 = dagre6UL2VRFPInput9.nodes(),
        dagre6UL2VRFPBinding29 = false;
      for (let dagre6UL2VRFPBinding91 of dagre6UL2VRFPBinding28) {
        let dagre6UL2VRFPBinding93 = dagre6UL2VRFPInput9.children(
          dagre6UL2VRFPBinding91,
        );
        dagre6UL2VRFPBinding29 ||= dagre6UL2VRFPBinding93.length > 0;
      }
      if (!dagre6UL2VRFPBinding29) {
        logger.debug("Done, no node has children", dagre6UL2VRFPInput9.nodes());
        return;
      }
      logger.debug("Nodes = ", dagre6UL2VRFPBinding28, dagre6UL2VRFPInput10);
      for (let dagre6UL2VRFPBinding31 of dagre6UL2VRFPBinding28)
        if (
          (logger.debug(
            "Extracting node",
            dagre6UL2VRFPBinding31,
            dagre6UL2VRFPBinding2,
            dagre6UL2VRFPBinding2.has(dagre6UL2VRFPBinding31) &&
              !dagre6UL2VRFPBinding2.get(dagre6UL2VRFPBinding31)
                .externalConnections,
            !dagre6UL2VRFPInput9.parent(dagre6UL2VRFPBinding31),
            dagre6UL2VRFPInput9.node(dagre6UL2VRFPBinding31),
            dagre6UL2VRFPInput9.children("D"),
            " Depth ",
            dagre6UL2VRFPInput10,
          ),
          !dagre6UL2VRFPBinding2.has(dagre6UL2VRFPBinding31))
        )
          logger.debug(
            "Not a cluster",
            dagre6UL2VRFPBinding31,
            dagre6UL2VRFPInput10,
          );
        else if (
          !dagre6UL2VRFPBinding2.get(dagre6UL2VRFPBinding31)
            .externalConnections &&
          dagre6UL2VRFPInput9.children(dagre6UL2VRFPBinding31) &&
          dagre6UL2VRFPInput9.children(dagre6UL2VRFPBinding31).length > 0
        ) {
          logger.warn(
            "Cluster without external connections, without a parent and with children",
            dagre6UL2VRFPBinding31,
            dagre6UL2VRFPInput10,
          );
          let dagre6UL2VRFPBinding46 =
            dagre6UL2VRFPInput9.graph().rankdir === "TB" ? "LR" : "TB";
          dagre6UL2VRFPBinding2.get(dagre6UL2VRFPBinding31)?.clusterData?.dir &&
            ((dagre6UL2VRFPBinding46 = dagre6UL2VRFPBinding2.get(
              dagre6UL2VRFPBinding31,
            ).clusterData.dir),
            logger.warn(
              "Fixing dir",
              dagre6UL2VRFPBinding2.get(dagre6UL2VRFPBinding31).clusterData.dir,
              dagre6UL2VRFPBinding46,
            ));
          let dagre6UL2VRFPBinding47 = new dagre6UL2VRFPImport1({
            multigraph: true,
            compound: true,
          })
            .setGraph({
              rankdir: dagre6UL2VRFPBinding46,
              nodesep: 50,
              ranksep: 50,
              marginx: 8,
              marginy: 8,
            })
            .setDefaultEdgeLabel(function () {
              return {};
            });
          logger.warn(
            "Old graph before copy",
            dagre6UL2VRFPHelper1(dagre6UL2VRFPInput9),
          );
          dagre6UL2VRFPBinding8(
            dagre6UL2VRFPBinding31,
            dagre6UL2VRFPInput9,
            dagre6UL2VRFPBinding47,
            dagre6UL2VRFPBinding31,
          );
          dagre6UL2VRFPInput9.setNode(dagre6UL2VRFPBinding31, {
            clusterNode: true,
            id: dagre6UL2VRFPBinding31,
            clusterData: dagre6UL2VRFPBinding2.get(dagre6UL2VRFPBinding31)
              .clusterData,
            label: dagre6UL2VRFPBinding2.get(dagre6UL2VRFPBinding31).label,
            graph: dagre6UL2VRFPBinding47,
          });
          logger.warn(
            "New graph after copy node: (",
            dagre6UL2VRFPBinding31,
            ")",
            dagre6UL2VRFPHelper1(dagre6UL2VRFPBinding47),
          );
          logger.debug(
            "Old graph after copy",
            dagre6UL2VRFPHelper1(dagre6UL2VRFPInput9),
          );
        } else {
          logger.warn(
            "Cluster ** ",
            dagre6UL2VRFPBinding31,
            " **not meeting the criteria !externalConnections:",
            !dagre6UL2VRFPBinding2.get(dagre6UL2VRFPBinding31)
              .externalConnections,
            " no parent: ",
            !dagre6UL2VRFPInput9.parent(dagre6UL2VRFPBinding31),
            " children ",
            dagre6UL2VRFPInput9.children(dagre6UL2VRFPBinding31) &&
              dagre6UL2VRFPInput9.children(dagre6UL2VRFPBinding31).length > 0,
            dagre6UL2VRFPInput9.children("D"),
            dagre6UL2VRFPInput10,
          );
          logger.debug(dagre6UL2VRFPBinding2);
        }
      dagre6UL2VRFPBinding28 = dagre6UL2VRFPInput9.nodes();
      logger.warn("New list of nodes", dagre6UL2VRFPBinding28);
      for (let dagre6UL2VRFPBinding86 of dagre6UL2VRFPBinding28) {
        let dagre6UL2VRFPBinding90 = dagre6UL2VRFPInput9.node(
          dagre6UL2VRFPBinding86,
        );
        logger.warn(
          " Now next level",
          dagre6UL2VRFPBinding86,
          dagre6UL2VRFPBinding90,
        );
        dagre6UL2VRFPBinding90?.clusterNode &&
          dagre6UL2VRFPBinding14(
            dagre6UL2VRFPBinding90.graph,
            dagre6UL2VRFPInput10 + 1,
          );
      }
    },
    "extractor",
  );
  dagre6UL2VRFPBinding15 = defineFunctionName(
    (dagre6UL2VRFPInput26, dagre6UL2VRFPInput27) => {
      if (dagre6UL2VRFPInput27.length === 0) return [];
      let dagre6UL2VRFPBinding71 = Object.assign([], dagre6UL2VRFPInput27);
      return (
        dagre6UL2VRFPInput27.forEach((item) => {
          let dagre6UL2VRFPBinding92 = dagre6UL2VRFPBinding15(
            dagre6UL2VRFPInput26,
            dagre6UL2VRFPInput26.children(item),
          );
          dagre6UL2VRFPBinding71 = [
            ...dagre6UL2VRFPBinding71,
            ...dagre6UL2VRFPBinding92,
          ];
        }),
        dagre6UL2VRFPBinding71
      );
    },
    "sorter",
  );
  dagre6UL2VRFPBinding16 = defineFunctionName(
    (dagre6UL2VRFPInput37) =>
      dagre6UL2VRFPBinding15(
        dagre6UL2VRFPInput37,
        dagre6UL2VRFPInput37.children(),
      ),
    "sortNodesByHierarchy",
  );
  dagre6UL2VRFPBinding17 = defineFunctionName(
    async (
      dagre6UL2VRFPInput1,
      dagre6UL2VRFPInput2,
      dagre6UL2VRFPInput3,
      dagre6UL2VRFPInput4,
      dagre6UL2VRFPInput5,
      dagre6UL2VRFPInput6,
    ) => {
      logger.warn(
        "Graph in recursive render:XAX",
        dagre6UL2VRFPHelper1(dagre6UL2VRFPInput2),
        dagre6UL2VRFPInput5,
      );
      let dagre6UL2VRFPBinding18 = dagre6UL2VRFPInput2.graph().rankdir;
      logger.trace("Dir in recursive render - dir:", dagre6UL2VRFPBinding18);
      let dagre6UL2VRFPBinding19 = dagre6UL2VRFPInput1
        .insert("g")
        .attr("class", "root");
      dagre6UL2VRFPInput2.nodes()
        ? logger.info("Recursive render XXX", dagre6UL2VRFPInput2.nodes())
        : logger.info("No nodes found for", dagre6UL2VRFPInput2);
      dagre6UL2VRFPInput2.edges().length > 0 &&
        logger.info(
          "Recursive edges",
          dagre6UL2VRFPInput2.edge(dagre6UL2VRFPInput2.edges()[0]),
        );
      let dagre6UL2VRFPBinding20 = dagre6UL2VRFPBinding19
          .insert("g")
          .attr("class", "clusters"),
        dagre6UL2VRFPBinding21 = dagre6UL2VRFPBinding19
          .insert("g")
          .attr("class", "edgePaths"),
        dagre6UL2VRFPBinding22 = dagre6UL2VRFPBinding19
          .insert("g")
          .attr("class", "edgeLabels"),
        dagre6UL2VRFPBinding23 = dagre6UL2VRFPBinding19
          .insert("g")
          .attr("class", "nodes");
      await Promise.all(
        dagre6UL2VRFPInput2.nodes().map(async function (item) {
          let dagre6UL2VRFPBinding32 = dagre6UL2VRFPInput2.node(item);
          if (dagre6UL2VRFPInput5 !== undefined) {
            let dagre6UL2VRFPBinding59 = JSON.parse(
              JSON.stringify(dagre6UL2VRFPInput5.clusterData),
            );
            logger.trace(
              "Setting data for parent cluster XXX\n Node.id = ",
              item,
              "\n data=",
              dagre6UL2VRFPBinding59.height,
              "\nParent cluster",
              dagre6UL2VRFPInput5.height,
            );
            dagre6UL2VRFPInput2.setNode(
              dagre6UL2VRFPInput5.id,
              dagre6UL2VRFPBinding59,
            );
            dagre6UL2VRFPInput2.parent(item) ||
              (logger.trace("Setting parent", item, dagre6UL2VRFPInput5.id),
              dagre6UL2VRFPInput2.setParent(
                item,
                dagre6UL2VRFPInput5.id,
                dagre6UL2VRFPBinding59,
              ));
          }
          if (
            (logger.info(
              "(Insert) Node XXX" +
                item +
                ": " +
                JSON.stringify(dagre6UL2VRFPInput2.node(item)),
            ),
            dagre6UL2VRFPBinding32?.clusterNode)
          ) {
            logger.info(
              "Cluster identified XBX",
              item,
              dagre6UL2VRFPBinding32.width,
              dagre6UL2VRFPInput2.node(item),
            );
            let { ranksep, nodesep } = dagre6UL2VRFPInput2.graph();
            dagre6UL2VRFPBinding32.graph.setGraph({
              ...dagre6UL2VRFPBinding32.graph.graph(),
              ranksep: ranksep + 25,
              nodesep,
            });
            let dagre6UL2VRFPBinding50 = await dagre6UL2VRFPBinding17(
                dagre6UL2VRFPBinding23,
                dagre6UL2VRFPBinding32.graph,
                dagre6UL2VRFPInput3,
                dagre6UL2VRFPInput4,
                dagre6UL2VRFPInput2.node(item),
                dagre6UL2VRFPInput6,
              ),
              dagre6UL2VRFPBinding51 = dagre6UL2VRFPBinding50.elem;
            chunkJZLCHNYAC(dagre6UL2VRFPBinding32, dagre6UL2VRFPBinding51);
            dagre6UL2VRFPBinding32.diff = dagre6UL2VRFPBinding50.diff || 0;
            logger.info(
              "New compound node after recursive render XAX",
              item,
              "width",
              dagre6UL2VRFPBinding32.width,
              "height",
              dagre6UL2VRFPBinding32.height,
            );
            chunkJZLCHNYAU(dagre6UL2VRFPBinding51, dagre6UL2VRFPBinding32);
          } else
            dagre6UL2VRFPInput2.children(item).length > 0
              ? (logger.trace(
                  "Cluster - the non recursive path XBX",
                  item,
                  dagre6UL2VRFPBinding32.id,
                  dagre6UL2VRFPBinding32,
                  dagre6UL2VRFPBinding32.width,
                  "Graph:",
                  dagre6UL2VRFPInput2,
                ),
                logger.trace(
                  dagre6UL2VRFPBinding11(
                    dagre6UL2VRFPBinding32.id,
                    dagre6UL2VRFPInput2,
                  ),
                ),
                dagre6UL2VRFPBinding2.set(dagre6UL2VRFPBinding32.id, {
                  id: dagre6UL2VRFPBinding11(
                    dagre6UL2VRFPBinding32.id,
                    dagre6UL2VRFPInput2,
                  ),
                  node: dagre6UL2VRFPBinding32,
                }))
              : (logger.trace(
                  "Node - the non recursive path XAX",
                  item,
                  dagre6UL2VRFPBinding23,
                  dagre6UL2VRFPInput2.node(item),
                  dagre6UL2VRFPBinding18,
                ),
                await chunkJZLCHNYAO(
                  dagre6UL2VRFPBinding23,
                  dagre6UL2VRFPInput2.node(item),
                  {
                    config: dagre6UL2VRFPInput6,
                    dir: dagre6UL2VRFPBinding18,
                  },
                ));
        }),
      );
      await defineFunctionName(async () => {
        let dagre6UL2VRFPBinding49 = dagre6UL2VRFPInput2
          .edges()
          .map(async function (item) {
            let dagre6UL2VRFPBinding55 = dagre6UL2VRFPInput2.edge(
              item.v,
              item.w,
              item.name,
            );
            logger.info(
              "Edge " + item.v + " -> " + item.w + ": " + JSON.stringify(item),
            );
            logger.info(
              "Edge " + item.v + " -> " + item.w + ": ",
              item,
              " ",
              JSON.stringify(dagre6UL2VRFPInput2.edge(item)),
            );
            logger.info(
              "Fix",
              dagre6UL2VRFPBinding2,
              "ids:",
              item.v,
              item.w,
              "Translating: ",
              dagre6UL2VRFPBinding2.get(item.v),
              dagre6UL2VRFPBinding2.get(item.w),
            );
            await chunkQXUST7PYA(
              dagre6UL2VRFPBinding22,
              dagre6UL2VRFPBinding55,
            );
          });
        await Promise.all(dagre6UL2VRFPBinding49);
      }, "processEdges")();
      logger.info(
        "Graph before layout:",
        JSON.stringify(dagre6UL2VRFPHelper1(dagre6UL2VRFPInput2)),
      );
      logger.info("############################################# XXX");
      logger.info("###                Layout                 ### XXX");
      logger.info("############################################# XXX");
      dagre6UL2VRFPImport4(dagre6UL2VRFPInput2);
      logger.info(
        "Graph after layout:",
        JSON.stringify(dagre6UL2VRFPHelper1(dagre6UL2VRFPInput2)),
      );
      let dagre6UL2VRFPBinding24 = 0,
        { subGraphTitleTotalMargin } = chunkCVBHYZKIT(dagre6UL2VRFPInput6);
      return (
        await Promise.all(
          dagre6UL2VRFPBinding16(dagre6UL2VRFPInput2).map(
            async function (item) {
              let dagre6UL2VRFPBinding33 = dagre6UL2VRFPInput2.node(item);
              if (
                (logger.info(
                  "Position XBX => " + item + ": (" + dagre6UL2VRFPBinding33.x,
                  "," + dagre6UL2VRFPBinding33.y,
                  ") width: ",
                  dagre6UL2VRFPBinding33.width,
                  " height: ",
                  dagre6UL2VRFPBinding33.height,
                ),
                dagre6UL2VRFPBinding33?.clusterNode)
              ) {
                dagre6UL2VRFPBinding33.y += subGraphTitleTotalMargin;
                logger.info(
                  "A tainted cluster node XBX1",
                  item,
                  dagre6UL2VRFPBinding33.id,
                  dagre6UL2VRFPBinding33.width,
                  dagre6UL2VRFPBinding33.height,
                  dagre6UL2VRFPBinding33.x,
                  dagre6UL2VRFPBinding33.y,
                  dagre6UL2VRFPInput2.parent(item),
                );
                dagre6UL2VRFPBinding2.get(dagre6UL2VRFPBinding33.id).node =
                  dagre6UL2VRFPBinding33;
                chunkJZLCHNYAL(dagre6UL2VRFPBinding33);
              } else if (dagre6UL2VRFPInput2.children(item).length > 0) {
                logger.info(
                  "A pure cluster node XBX1",
                  item,
                  dagre6UL2VRFPBinding33.id,
                  dagre6UL2VRFPBinding33.x,
                  dagre6UL2VRFPBinding33.y,
                  dagre6UL2VRFPBinding33.width,
                  dagre6UL2VRFPBinding33.height,
                  dagre6UL2VRFPInput2.parent(item),
                );
                dagre6UL2VRFPBinding33.height += subGraphTitleTotalMargin;
                dagre6UL2VRFPInput2.node(dagre6UL2VRFPBinding33.parentId);
                let dagre6UL2VRFPBinding52 =
                    dagre6UL2VRFPBinding33?.padding / 2 || 0,
                  dagre6UL2VRFPBinding53 =
                    dagre6UL2VRFPBinding33?.labelBBox?.height || 0,
                  dagre6UL2VRFPBinding54 =
                    dagre6UL2VRFPBinding53 - dagre6UL2VRFPBinding52 || 0;
                logger.debug(
                  "OffsetY",
                  dagre6UL2VRFPBinding54,
                  "labelHeight",
                  dagre6UL2VRFPBinding53,
                  "halfPadding",
                  dagre6UL2VRFPBinding52,
                );
                await chunkJZLCHNYAI(
                  dagre6UL2VRFPBinding20,
                  dagre6UL2VRFPBinding33,
                );
                dagre6UL2VRFPBinding2.get(dagre6UL2VRFPBinding33.id).node =
                  dagre6UL2VRFPBinding33;
              } else {
                let dagre6UL2VRFPBinding56 = dagre6UL2VRFPInput2.node(
                  dagre6UL2VRFPBinding33.parentId,
                );
                dagre6UL2VRFPBinding33.y += subGraphTitleTotalMargin / 2;
                logger.info(
                  "A regular node XBX1 - using the padding",
                  dagre6UL2VRFPBinding33.id,
                  "parent",
                  dagre6UL2VRFPBinding33.parentId,
                  dagre6UL2VRFPBinding33.width,
                  dagre6UL2VRFPBinding33.height,
                  dagre6UL2VRFPBinding33.x,
                  dagre6UL2VRFPBinding33.y,
                  "offsetY",
                  dagre6UL2VRFPBinding33.offsetY,
                  "parent",
                  dagre6UL2VRFPBinding56,
                  dagre6UL2VRFPBinding56?.offsetY,
                  dagre6UL2VRFPBinding33,
                );
                chunkJZLCHNYAL(dagre6UL2VRFPBinding33);
              }
            },
          ),
        ),
        dagre6UL2VRFPInput2.edges().forEach(function (item) {
          let dagre6UL2VRFPBinding67 = dagre6UL2VRFPInput2.edge(item);
          logger.info(
            "Edge " +
              item.v +
              " -> " +
              item.w +
              ": " +
              JSON.stringify(dagre6UL2VRFPBinding67),
            dagre6UL2VRFPBinding67,
          );
          dagre6UL2VRFPBinding67.points.forEach(
            (_item) => (_item.y += subGraphTitleTotalMargin / 2),
          );
          let dagre6UL2VRFPBinding68 = dagre6UL2VRFPInput2.node(item.v);
          var dagre6UL2VRFPBinding69 = dagre6UL2VRFPInput2.node(item.w);
          chunkQXUST7PYO(
            dagre6UL2VRFPBinding67,
            chunkQXUST7PYR(
              dagre6UL2VRFPBinding21,
              dagre6UL2VRFPBinding67,
              dagre6UL2VRFPBinding2,
              dagre6UL2VRFPInput3,
              dagre6UL2VRFPBinding68,
              dagre6UL2VRFPBinding69,
              dagre6UL2VRFPInput4,
            ),
          );
        }),
        dagre6UL2VRFPInput2.nodes().forEach(function (item) {
          let dagre6UL2VRFPBinding88 = dagre6UL2VRFPInput2.node(item);
          logger.info(
            item,
            dagre6UL2VRFPBinding88.type,
            dagre6UL2VRFPBinding88.diff,
          );
          dagre6UL2VRFPBinding88.isGroup &&
            (dagre6UL2VRFPBinding24 = dagre6UL2VRFPBinding88.diff);
        }),
        logger.warn(
          "Returning from recursive render XAX",
          dagre6UL2VRFPBinding19,
          dagre6UL2VRFPBinding24,
        ),
        {
          elem: dagre6UL2VRFPBinding19,
          diff: dagre6UL2VRFPBinding24,
        }
      );
    },
    "recursiveRender",
  );
  dagre6UL2VRFP = defineFunctionName(
    async (dagre6UL2VRFPInput7, dagre6UL2VRFPInput8) => {
      let dagre6UL2VRFPBinding25 = new dagre6UL2VRFPImport1({
          multigraph: true,
          compound: true,
        })
          .setGraph({
            rankdir: dagre6UL2VRFPInput7.direction,
            nodesep:
              dagre6UL2VRFPInput7.config?.nodeSpacing ||
              dagre6UL2VRFPInput7.config?.flowchart?.nodeSpacing ||
              dagre6UL2VRFPInput7.nodeSpacing,
            ranksep:
              dagre6UL2VRFPInput7.config?.rankSpacing ||
              dagre6UL2VRFPInput7.config?.flowchart?.rankSpacing ||
              dagre6UL2VRFPInput7.rankSpacing,
            marginx: 8,
            marginy: 8,
          })
          .setDefaultEdgeLabel(function () {
            return {};
          }),
        dagre6UL2VRFPBinding26 = dagre6UL2VRFPInput8.select("g");
      chunkQXUST7PYN(
        dagre6UL2VRFPBinding26,
        dagre6UL2VRFPInput7.markers,
        dagre6UL2VRFPInput7.type,
        dagre6UL2VRFPInput7.diagramId,
      );
      chunkJZLCHNYAN();
      chunkQXUST7PYT();
      chunkJZLCHNYAT();
      dagre6UL2VRFPBinding5();
      dagre6UL2VRFPInput7.nodes.forEach((item) => {
        dagre6UL2VRFPBinding25.setNode(item.id, {
          ...item,
        });
        item.parentId &&
          dagre6UL2VRFPBinding25.setParent(item.id, item.parentId);
      });
      logger.debug("Edges:", dagre6UL2VRFPInput7.edges);
      dagre6UL2VRFPInput7.edges.forEach((item) => {
        if (item.start === item.end) {
          let dagre6UL2VRFPBinding36 = item.start,
            dagre6UL2VRFPBinding37 =
              dagre6UL2VRFPBinding36 + "---" + dagre6UL2VRFPBinding36 + "---1",
            dagre6UL2VRFPBinding38 =
              dagre6UL2VRFPBinding36 + "---" + dagre6UL2VRFPBinding36 + "---2",
            dagre6UL2VRFPBinding39 = dagre6UL2VRFPBinding25.node(
              dagre6UL2VRFPBinding36,
            );
          dagre6UL2VRFPBinding25.setNode(dagre6UL2VRFPBinding37, {
            domId: dagre6UL2VRFPBinding37,
            id: dagre6UL2VRFPBinding37,
            parentId: dagre6UL2VRFPBinding39.parentId,
            labelStyle: "",
            label: "",
            padding: 0,
            shape: "labelRect",
            style: "",
            width: 10,
            height: 10,
          });
          dagre6UL2VRFPBinding25.setParent(
            dagre6UL2VRFPBinding37,
            dagre6UL2VRFPBinding39.parentId,
          );
          dagre6UL2VRFPBinding25.setNode(dagre6UL2VRFPBinding38, {
            domId: dagre6UL2VRFPBinding38,
            id: dagre6UL2VRFPBinding38,
            parentId: dagre6UL2VRFPBinding39.parentId,
            labelStyle: "",
            padding: 0,
            shape: "labelRect",
            label: "",
            style: "",
            width: 10,
            height: 10,
          });
          dagre6UL2VRFPBinding25.setParent(
            dagre6UL2VRFPBinding38,
            dagre6UL2VRFPBinding39.parentId,
          );
          let dagre6UL2VRFPBinding40 = structuredClone(item),
            dagre6UL2VRFPBinding41 = structuredClone(item),
            dagre6UL2VRFPBinding42 = structuredClone(item);
          dagre6UL2VRFPBinding40.label = "";
          dagre6UL2VRFPBinding40.arrowTypeEnd = "none";
          dagre6UL2VRFPBinding40.id =
            dagre6UL2VRFPBinding36 + "-cyclic-special-1";
          dagre6UL2VRFPBinding41.arrowTypeStart = "none";
          dagre6UL2VRFPBinding41.arrowTypeEnd = "none";
          dagre6UL2VRFPBinding41.id =
            dagre6UL2VRFPBinding36 + "-cyclic-special-mid";
          dagre6UL2VRFPBinding42.label = "";
          dagre6UL2VRFPBinding39.isGroup &&
            ((dagre6UL2VRFPBinding40.fromCluster = dagre6UL2VRFPBinding36),
            (dagre6UL2VRFPBinding42.toCluster = dagre6UL2VRFPBinding36));
          dagre6UL2VRFPBinding42.id =
            dagre6UL2VRFPBinding36 + "-cyclic-special-2";
          dagre6UL2VRFPBinding42.arrowTypeStart = "none";
          dagre6UL2VRFPBinding25.setEdge(
            dagre6UL2VRFPBinding36,
            dagre6UL2VRFPBinding37,
            dagre6UL2VRFPBinding40,
            dagre6UL2VRFPBinding36 + "-cyclic-special-0",
          );
          dagre6UL2VRFPBinding25.setEdge(
            dagre6UL2VRFPBinding37,
            dagre6UL2VRFPBinding38,
            dagre6UL2VRFPBinding41,
            dagre6UL2VRFPBinding36 + "-cyclic-special-1",
          );
          dagre6UL2VRFPBinding25.setEdge(
            dagre6UL2VRFPBinding38,
            dagre6UL2VRFPBinding36,
            dagre6UL2VRFPBinding42,
            dagre6UL2VRFPBinding36 + "-cyc<lic-special-2",
          );
        } else
          dagre6UL2VRFPBinding25.setEdge(
            item.start,
            item.end,
            {
              ...item,
            },
            item.id,
          );
      });
      logger.warn(
        "Graph at first:",
        JSON.stringify(dagre6UL2VRFPHelper1(dagre6UL2VRFPBinding25)),
      );
      dagre6UL2VRFPBinding13(dagre6UL2VRFPBinding25);
      logger.warn(
        "Graph after XAX:",
        JSON.stringify(dagre6UL2VRFPHelper1(dagre6UL2VRFPBinding25)),
      );
      let dagre6UL2VRFPBinding27 = b();
      await dagre6UL2VRFPBinding17(
        dagre6UL2VRFPBinding26,
        dagre6UL2VRFPBinding25,
        dagre6UL2VRFPInput7.type,
        dagre6UL2VRFPInput7.diagramId,
        undefined,
        dagre6UL2VRFPBinding27,
      );
    },
    "render",
  );
})();
export { dagre6UL2VRFP as render };
