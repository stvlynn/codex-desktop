// Restored from ref/webview/assets/dagre-KV5264BT-CWKpceUi.js
// Mermaid dagre layout renderer (alt) — clusters/edges/nodes recursive render.
// Stage 3: IMPORT_MAP-rewritten deps; graphlib/dagre via vendor npm shims (codex-ref).
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).
import { esmInit } from "../../runtime/rolldown-runtime";
import { A } from "../lodash-reduce-runtime";
import { C, H, t } from "../lodash-hNqv-runtime";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt";
import { A as chunkICPOFSXXA, b } from "../../diagrams/mermaid-config-alt";
import { chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import { chunkU2HBQHQKA } from "./mermaid-create-text-alt";
import { initMermaidLineOffsetAltChunk } from "../../diagrams/line-offset-helpers-alt";
import {
  getSubGraphTitleMargins,
  initSubGraphTitleMarginsAlt as chunkZZ45TVLER,
} from "../../diagrams/subgraph-title-margins-alt";
import {
  n as dagreKV5264BTImport1,
  r as dagreKV5264BTImport2,
  t as dagreKV5264BTImport3,
} from "../../vendor/graphlib";
import { initStyleHelpersChunk as chunkX2U36JSPN } from "../../diagrams/style-helpers-alt";
import {
  chunk5FUZZQ4RI,
  chunk5FUZZQ4RC,
  chunk5FUZZQ4RD,
  chunk5FUZZQ4RL,
  chunk5FUZZQ4RN,
  chunk5FUZZQ4RO,
  chunk5FUZZQ4RT,
  chunk5FUZZQ4RU,
} from "./mermaid-flowchart-nodes-alt";
import {
  chunkENJZ2VHEN,
  chunkENJZ2VHEA,
  chunkENJZ2VHEI,
  chunkENJZ2VHEO,
  chunkENJZ2VHER,
  chunkENJZ2VHET,
} from "./mermaid-flowchart-edges-alt";
import {
  r as dagreKV5264BTImport4,
  t as dagreKV5264BTImport5,
} from "../../vendor/dagre";
function dagreKV5264BTHelper1(dagreKV5264BTInput25) {
  var dagreKV5264BTBinding70 = {
    options: {
      directed: dagreKV5264BTInput25.isDirected(),
      multigraph: dagreKV5264BTInput25.isMultigraph(),
      compound: dagreKV5264BTInput25.isCompound(),
    },
    nodes: dagreKV5264BTHelper2(dagreKV5264BTInput25),
    edges: dagreKV5264BTHelper3(dagreKV5264BTInput25),
  };
  return (
    C(dagreKV5264BTInput25.graph()) ||
      (dagreKV5264BTBinding70.value = H(dagreKV5264BTInput25.graph())),
    dagreKV5264BTBinding70
  );
}
function dagreKV5264BTHelper2(dagreKV5264BTInput28) {
  return A(dagreKV5264BTInput28.nodes(), function (dagreKV5264BTInput32) {
    var dagreKV5264BTBinding77 =
        dagreKV5264BTInput28.node(dagreKV5264BTInput32),
      dagreKV5264BTBinding78 =
        dagreKV5264BTInput28.parent(dagreKV5264BTInput32),
      dagreKV5264BTBinding79 = {
        v: dagreKV5264BTInput32,
      };
    return (
      C(dagreKV5264BTBinding77) ||
        (dagreKV5264BTBinding79.value = dagreKV5264BTBinding77),
      C(dagreKV5264BTBinding78) ||
        (dagreKV5264BTBinding79.parent = dagreKV5264BTBinding78),
      dagreKV5264BTBinding79
    );
  });
}
function dagreKV5264BTHelper3(dagreKV5264BTInput29) {
  return A(dagreKV5264BTInput29.edges(), function (dagreKV5264BTInput35) {
    var dagreKV5264BTBinding82 =
        dagreKV5264BTInput29.edge(dagreKV5264BTInput35),
      dagreKV5264BTBinding83 = {
        v: dagreKV5264BTInput35.v,
        w: dagreKV5264BTInput35.w,
      };
    return (
      C(dagreKV5264BTInput35.name) ||
        (dagreKV5264BTBinding83.name = dagreKV5264BTInput35.name),
      C(dagreKV5264BTBinding82) ||
        (dagreKV5264BTBinding83.value = dagreKV5264BTBinding82),
      dagreKV5264BTBinding83
    );
  });
}
var dagreKV5264BTBinding1 = esmInit(() => {
    t();
    dagreKV5264BTImport2();
  }),
  dagreKV5264BTBinding2,
  dagreKV5264BTBinding3,
  dagreKV5264BTBinding4,
  dagreKV5264BTBinding5,
  dagreKV5264BTBinding6,
  dagreKV5264BTBinding7,
  dagreKV5264BTBinding8,
  dagreKV5264BTBinding9,
  dagreKV5264BTBinding10,
  dagreKV5264BTBinding11,
  dagreKV5264BTBinding12,
  dagreKV5264BTBinding13,
  dagreKV5264BTBinding14,
  dagreKV5264BTBinding15,
  dagreKV5264BTBinding16,
  dagreKV5264BTBinding17,
  dagreKV5264BT;
esmInit(() => {
  chunkENJZ2VHEN();
  initMermaidLineOffsetAltChunk();
  chunk5FUZZQ4RI();
  chunkZZ45TVLER();
  chunkX2U36JSPN();
  chunkU2HBQHQKA();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  initDayjsLoggerRuntime();
  dagreKV5264BTImport5();
  dagreKV5264BTBinding1();
  dagreKV5264BTImport3();
  dagreKV5264BTBinding2 = new Map();
  dagreKV5264BTBinding3 = new Map();
  dagreKV5264BTBinding4 = new Map();
  dagreKV5264BTBinding5 = defineFunctionName(() => {
    dagreKV5264BTBinding3.clear();
    dagreKV5264BTBinding4.clear();
    dagreKV5264BTBinding2.clear();
  }, "clear");
  dagreKV5264BTBinding6 = defineFunctionName(
    (dagreKV5264BTInput30, dagreKV5264BTInput31) => {
      let dagreKV5264BTBinding75 =
        dagreKV5264BTBinding3.get(dagreKV5264BTInput31) || [];
      return (
        logger.trace(
          "In isDescendant",
          dagreKV5264BTInput31,
          " ",
          dagreKV5264BTInput30,
          " = ",
          dagreKV5264BTBinding75.includes(dagreKV5264BTInput30),
        ),
        dagreKV5264BTBinding75.includes(dagreKV5264BTInput30)
      );
    },
    "isDescendant",
  );
  dagreKV5264BTBinding7 = defineFunctionName(
    (dagreKV5264BTInput17, dagreKV5264BTInput18) => {
      let dagreKV5264BTBinding60 =
        dagreKV5264BTBinding3.get(dagreKV5264BTInput18) || [];
      return (
        logger.info(
          "Descendants of ",
          dagreKV5264BTInput18,
          " is ",
          dagreKV5264BTBinding60,
        ),
        logger.info("Edge is ", dagreKV5264BTInput17),
        dagreKV5264BTInput17.v === dagreKV5264BTInput18 ||
        dagreKV5264BTInput17.w === dagreKV5264BTInput18
          ? false
          : dagreKV5264BTBinding60
            ? dagreKV5264BTBinding60.includes(dagreKV5264BTInput17.v) ||
              dagreKV5264BTBinding6(
                dagreKV5264BTInput17.v,
                dagreKV5264BTInput18,
              ) ||
              dagreKV5264BTBinding6(
                dagreKV5264BTInput17.w,
                dagreKV5264BTInput18,
              ) ||
              dagreKV5264BTBinding60.includes(dagreKV5264BTInput17.w)
            : (logger.debug(
                "Tilt, ",
                dagreKV5264BTInput18,
                ",not in descendants",
              ),
              false)
      );
    },
    "edgeInCluster",
  );
  dagreKV5264BTBinding8 = defineFunctionName(
    (
      dagreKV5264BTInput13,
      dagreKV5264BTInput14,
      dagreKV5264BTInput15,
      dagreKV5264BTInput16,
    ) => {
      logger.warn(
        "Copying children of ",
        dagreKV5264BTInput13,
        "root",
        dagreKV5264BTInput16,
        "data",
        dagreKV5264BTInput14.node(dagreKV5264BTInput13),
        dagreKV5264BTInput16,
      );
      let dagreKV5264BTBinding30 =
        dagreKV5264BTInput14.children(dagreKV5264BTInput13) || [];
      dagreKV5264BTInput13 !== dagreKV5264BTInput16 &&
        dagreKV5264BTBinding30.push(dagreKV5264BTInput13);
      logger.warn(
        "Copying (nodes) clusterId",
        dagreKV5264BTInput13,
        "nodes",
        dagreKV5264BTBinding30,
      );
      dagreKV5264BTBinding30.forEach((item) => {
        if (dagreKV5264BTInput14.children(item).length > 0)
          dagreKV5264BTBinding8(
            item,
            dagreKV5264BTInput14,
            dagreKV5264BTInput15,
            dagreKV5264BTInput16,
          );
        else {
          let dagreKV5264BTBinding34 = dagreKV5264BTInput14.node(item);
          logger.info(
            "cp ",
            item,
            " to ",
            dagreKV5264BTInput16,
            " with parent ",
            dagreKV5264BTInput13,
          );
          dagreKV5264BTInput15.setNode(item, dagreKV5264BTBinding34);
          dagreKV5264BTInput16 !== dagreKV5264BTInput14.parent(item) &&
            (logger.warn(
              "Setting parent",
              item,
              dagreKV5264BTInput14.parent(item),
            ),
            dagreKV5264BTInput15.setParent(
              item,
              dagreKV5264BTInput14.parent(item),
            ));
          dagreKV5264BTInput13 !== dagreKV5264BTInput16 &&
          item !== dagreKV5264BTInput13
            ? (logger.debug("Setting parent", item, dagreKV5264BTInput13),
              dagreKV5264BTInput15.setParent(item, dagreKV5264BTInput13))
            : (logger.info(
                "In copy ",
                dagreKV5264BTInput13,
                "root",
                dagreKV5264BTInput16,
                "data",
                dagreKV5264BTInput14.node(dagreKV5264BTInput13),
                dagreKV5264BTInput16,
              ),
              logger.debug(
                "Not Setting parent for node=",
                item,
                "cluster!==rootId",
                dagreKV5264BTInput13 !== dagreKV5264BTInput16,
                "node!==clusterId",
                item !== dagreKV5264BTInput13,
              ));
          let dagreKV5264BTBinding35 = dagreKV5264BTInput14.edges(item);
          logger.debug("Copying Edges", dagreKV5264BTBinding35);
          dagreKV5264BTBinding35.forEach((_item) => {
            logger.info("Edge", _item);
            let dagreKV5264BTBinding48 = dagreKV5264BTInput14.edge(
              _item.v,
              _item.w,
              _item.name,
            );
            logger.info(
              "Edge data",
              dagreKV5264BTBinding48,
              dagreKV5264BTInput16,
            );
            try {
              dagreKV5264BTBinding7(_item, dagreKV5264BTInput16)
                ? (logger.info(
                    "Copying as ",
                    _item.v,
                    _item.w,
                    dagreKV5264BTBinding48,
                    _item.name,
                  ),
                  dagreKV5264BTInput15.setEdge(
                    _item.v,
                    _item.w,
                    dagreKV5264BTBinding48,
                    _item.name,
                  ),
                  logger.info(
                    "newGraph edges ",
                    dagreKV5264BTInput15.edges(),
                    dagreKV5264BTInput15.edge(dagreKV5264BTInput15.edges()[0]),
                  ))
                : logger.info(
                    "Skipping copy of edge ",
                    _item.v,
                    "-->",
                    _item.w,
                    " rootId: ",
                    dagreKV5264BTInput16,
                    " clusterId:",
                    dagreKV5264BTInput13,
                  );
            } catch (dagreKV5264BTBinding94) {
              logger.error(dagreKV5264BTBinding94);
            }
          });
        }
        logger.debug("Removing node", item);
        dagreKV5264BTInput14.removeNode(item);
      });
    },
    "copy",
  );
  dagreKV5264BTBinding9 = defineFunctionName(
    (dagreKV5264BTInput33, dagreKV5264BTInput34) => {
      let dagreKV5264BTBinding80 =
          dagreKV5264BTInput34.children(dagreKV5264BTInput33),
        dagreKV5264BTBinding81 = [...dagreKV5264BTBinding80];
      for (let dagreKV5264BTBinding95 of dagreKV5264BTBinding80) {
        dagreKV5264BTBinding4.set(dagreKV5264BTBinding95, dagreKV5264BTInput33);
        dagreKV5264BTBinding81 = [
          ...dagreKV5264BTBinding81,
          ...dagreKV5264BTBinding9(
            dagreKV5264BTBinding95,
            dagreKV5264BTInput34,
          ),
        ];
      }
      return dagreKV5264BTBinding81;
    },
    "extractDescendants",
  );
  dagreKV5264BTBinding10 = defineFunctionName(
    (dagreKV5264BTInput19, dagreKV5264BTInput20, dagreKV5264BTInput21) => {
      let dagreKV5264BTBinding61 = dagreKV5264BTInput19
          .edges()
          .filter(
            (item) =>
              item.v === dagreKV5264BTInput20 ||
              item.w === dagreKV5264BTInput20,
          ),
        dagreKV5264BTBinding62 = dagreKV5264BTInput19
          .edges()
          .filter(
            (item) =>
              item.v === dagreKV5264BTInput21 ||
              item.w === dagreKV5264BTInput21,
          ),
        dagreKV5264BTBinding63 = dagreKV5264BTBinding61.map((item) => ({
          v: item.v === dagreKV5264BTInput20 ? dagreKV5264BTInput21 : item.v,
          w: item.w === dagreKV5264BTInput20 ? dagreKV5264BTInput20 : item.w,
        })),
        dagreKV5264BTBinding64 = dagreKV5264BTBinding62.map((item) => ({
          v: item.v,
          w: item.w,
        }));
      return dagreKV5264BTBinding63.filter((item) =>
        dagreKV5264BTBinding64.some(
          (_item) => item.v === _item.v && item.w === _item.w,
        ),
      );
    },
    "findCommonEdges",
  );
  dagreKV5264BTBinding11 = defineFunctionName(
    (dagreKV5264BTInput22, dagreKV5264BTInput23, dagreKV5264BTInput24) => {
      let dagreKV5264BTBinding65 =
        dagreKV5264BTInput23.children(dagreKV5264BTInput22);
      if (
        (logger.trace(
          "Searching children of id ",
          dagreKV5264BTInput22,
          dagreKV5264BTBinding65,
        ),
        dagreKV5264BTBinding65.length < 1)
      )
        return dagreKV5264BTInput22;
      let dagreKV5264BTBinding66;
      for (let dagreKV5264BTBinding76 of dagreKV5264BTBinding65) {
        let dagreKV5264BTBinding84 = dagreKV5264BTBinding11(
            dagreKV5264BTBinding76,
            dagreKV5264BTInput23,
            dagreKV5264BTInput24,
          ),
          dagreKV5264BTBinding85 = dagreKV5264BTBinding10(
            dagreKV5264BTInput23,
            dagreKV5264BTInput24,
            dagreKV5264BTBinding84,
          );
        if (dagreKV5264BTBinding84)
          if (dagreKV5264BTBinding85.length > 0)
            dagreKV5264BTBinding66 = dagreKV5264BTBinding84;
          else return dagreKV5264BTBinding84;
      }
      return dagreKV5264BTBinding66;
    },
    "findNonClusterChild",
  );
  dagreKV5264BTBinding12 = defineFunctionName(
    (dagreKV5264BTInput36) =>
      !dagreKV5264BTBinding2.has(dagreKV5264BTInput36) ||
      !dagreKV5264BTBinding2.get(dagreKV5264BTInput36).externalConnections
        ? dagreKV5264BTInput36
        : dagreKV5264BTBinding2.has(dagreKV5264BTInput36)
          ? dagreKV5264BTBinding2.get(dagreKV5264BTInput36).id
          : dagreKV5264BTInput36,
    "getAnchorId",
  );
  dagreKV5264BTBinding13 = defineFunctionName(
    (dagreKV5264BTInput11, dagreKV5264BTInput12) => {
      if (!dagreKV5264BTInput11 || dagreKV5264BTInput12 > 10) {
        logger.debug("Opting out, no graph ");
        return;
      } else logger.debug("Opting in, graph ");
      dagreKV5264BTInput11.nodes().forEach(function (item) {
        dagreKV5264BTInput11.children(item).length > 0 &&
          (logger.warn(
            "Cluster identified",
            item,
            " Replacement id in edges: ",
            dagreKV5264BTBinding11(item, dagreKV5264BTInput11, item),
          ),
          dagreKV5264BTBinding3.set(
            item,
            dagreKV5264BTBinding9(item, dagreKV5264BTInput11),
          ),
          dagreKV5264BTBinding2.set(item, {
            id: dagreKV5264BTBinding11(item, dagreKV5264BTInput11, item),
            clusterData: dagreKV5264BTInput11.node(item),
          }));
      });
      dagreKV5264BTInput11.nodes().forEach(function (item) {
        let dagreKV5264BTBinding57 = dagreKV5264BTInput11.children(item),
          dagreKV5264BTBinding58 = dagreKV5264BTInput11.edges();
        dagreKV5264BTBinding57.length > 0
          ? (logger.debug("Cluster identified", item, dagreKV5264BTBinding3),
            dagreKV5264BTBinding58.forEach((_item) => {
              dagreKV5264BTBinding6(_item.v, item) ^
                dagreKV5264BTBinding6(_item.w, item) &&
                (logger.warn("Edge: ", _item, " leaves cluster ", item),
                logger.warn(
                  "Descendants of XXX ",
                  item,
                  ": ",
                  dagreKV5264BTBinding3.get(item),
                ),
                (dagreKV5264BTBinding2.get(item).externalConnections = true));
            }))
          : logger.debug("Not a cluster ", item, dagreKV5264BTBinding3);
      });
      for (let dagreKV5264BTBinding72 of dagreKV5264BTBinding2.keys()) {
        let dagreKV5264BTBinding73 = dagreKV5264BTBinding2.get(
            dagreKV5264BTBinding72,
          ).id,
          dagreKV5264BTBinding74 = dagreKV5264BTInput11.parent(
            dagreKV5264BTBinding73,
          );
        dagreKV5264BTBinding74 !== dagreKV5264BTBinding72 &&
          dagreKV5264BTBinding2.has(dagreKV5264BTBinding74) &&
          !dagreKV5264BTBinding2.get(dagreKV5264BTBinding74)
            .externalConnections &&
          (dagreKV5264BTBinding2.get(dagreKV5264BTBinding72).id =
            dagreKV5264BTBinding74);
      }
      dagreKV5264BTInput11.edges().forEach(function (item) {
        let dagreKV5264BTBinding43 = dagreKV5264BTInput11.edge(item);
        logger.warn(
          "Edge " + item.v + " -> " + item.w + ": " + JSON.stringify(item),
        );
        logger.warn(
          "Edge " +
            item.v +
            " -> " +
            item.w +
            ": " +
            JSON.stringify(dagreKV5264BTInput11.edge(item)),
        );
        let dagreKV5264BTBinding44 = item.v,
          dagreKV5264BTBinding45 = item.w;
        if (
          (logger.warn(
            "Fix XXX",
            dagreKV5264BTBinding2,
            "ids:",
            item.v,
            item.w,
            "Translating: ",
            dagreKV5264BTBinding2.get(item.v),
            " --- ",
            dagreKV5264BTBinding2.get(item.w),
          ),
          dagreKV5264BTBinding2.get(item.v) ||
            dagreKV5264BTBinding2.get(item.w))
        ) {
          if (
            (logger.warn(
              "Fixing and trying - removing XXX",
              item.v,
              item.w,
              item.name,
            ),
            (dagreKV5264BTBinding44 = dagreKV5264BTBinding12(item.v)),
            (dagreKV5264BTBinding45 = dagreKV5264BTBinding12(item.w)),
            dagreKV5264BTInput11.removeEdge(item.v, item.w, item.name),
            dagreKV5264BTBinding44 !== item.v)
          ) {
            let dagreKV5264BTBinding87 = dagreKV5264BTInput11.parent(
              dagreKV5264BTBinding44,
            );
            dagreKV5264BTBinding2.get(
              dagreKV5264BTBinding87,
            ).externalConnections = true;
            dagreKV5264BTBinding43.fromCluster = item.v;
          }
          if (dagreKV5264BTBinding45 !== item.w) {
            let dagreKV5264BTBinding89 = dagreKV5264BTInput11.parent(
              dagreKV5264BTBinding45,
            );
            dagreKV5264BTBinding2.get(
              dagreKV5264BTBinding89,
            ).externalConnections = true;
            dagreKV5264BTBinding43.toCluster = item.w;
          }
          logger.warn(
            "Fix Replacing with XXX",
            dagreKV5264BTBinding44,
            dagreKV5264BTBinding45,
            item.name,
          );
          dagreKV5264BTInput11.setEdge(
            dagreKV5264BTBinding44,
            dagreKV5264BTBinding45,
            dagreKV5264BTBinding43,
            item.name,
          );
        }
      });
      logger.warn("Adjusted Graph", dagreKV5264BTHelper1(dagreKV5264BTInput11));
      dagreKV5264BTBinding14(dagreKV5264BTInput11, 0);
      logger.trace(dagreKV5264BTBinding2);
    },
    "adjustClustersAndEdges",
  );
  dagreKV5264BTBinding14 = defineFunctionName(
    (dagreKV5264BTInput9, dagreKV5264BTInput10) => {
      if (
        (logger.warn(
          "extractor - ",
          dagreKV5264BTInput10,
          dagreKV5264BTHelper1(dagreKV5264BTInput9),
          dagreKV5264BTInput9.children("D"),
        ),
        dagreKV5264BTInput10 > 10)
      ) {
        logger.error("Bailing out");
        return;
      }
      let dagreKV5264BTBinding28 = dagreKV5264BTInput9.nodes(),
        dagreKV5264BTBinding29 = false;
      for (let dagreKV5264BTBinding91 of dagreKV5264BTBinding28) {
        let dagreKV5264BTBinding93 = dagreKV5264BTInput9.children(
          dagreKV5264BTBinding91,
        );
        dagreKV5264BTBinding29 ||= dagreKV5264BTBinding93.length > 0;
      }
      if (!dagreKV5264BTBinding29) {
        logger.debug("Done, no node has children", dagreKV5264BTInput9.nodes());
        return;
      }
      logger.debug("Nodes = ", dagreKV5264BTBinding28, dagreKV5264BTInput10);
      for (let dagreKV5264BTBinding31 of dagreKV5264BTBinding28)
        if (
          (logger.debug(
            "Extracting node",
            dagreKV5264BTBinding31,
            dagreKV5264BTBinding2,
            dagreKV5264BTBinding2.has(dagreKV5264BTBinding31) &&
              !dagreKV5264BTBinding2.get(dagreKV5264BTBinding31)
                .externalConnections,
            !dagreKV5264BTInput9.parent(dagreKV5264BTBinding31),
            dagreKV5264BTInput9.node(dagreKV5264BTBinding31),
            dagreKV5264BTInput9.children("D"),
            " Depth ",
            dagreKV5264BTInput10,
          ),
          !dagreKV5264BTBinding2.has(dagreKV5264BTBinding31))
        )
          logger.debug(
            "Not a cluster",
            dagreKV5264BTBinding31,
            dagreKV5264BTInput10,
          );
        else if (
          !dagreKV5264BTBinding2.get(dagreKV5264BTBinding31)
            .externalConnections &&
          dagreKV5264BTInput9.children(dagreKV5264BTBinding31) &&
          dagreKV5264BTInput9.children(dagreKV5264BTBinding31).length > 0
        ) {
          logger.warn(
            "Cluster without external connections, without a parent and with children",
            dagreKV5264BTBinding31,
            dagreKV5264BTInput10,
          );
          let dagreKV5264BTBinding46 =
            dagreKV5264BTInput9.graph().rankdir === "TB" ? "LR" : "TB";
          dagreKV5264BTBinding2.get(dagreKV5264BTBinding31)?.clusterData?.dir &&
            ((dagreKV5264BTBinding46 = dagreKV5264BTBinding2.get(
              dagreKV5264BTBinding31,
            ).clusterData.dir),
            logger.warn(
              "Fixing dir",
              dagreKV5264BTBinding2.get(dagreKV5264BTBinding31).clusterData.dir,
              dagreKV5264BTBinding46,
            ));
          let dagreKV5264BTBinding47 = new dagreKV5264BTImport1({
            multigraph: true,
            compound: true,
          })
            .setGraph({
              rankdir: dagreKV5264BTBinding46,
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
            dagreKV5264BTHelper1(dagreKV5264BTInput9),
          );
          dagreKV5264BTBinding8(
            dagreKV5264BTBinding31,
            dagreKV5264BTInput9,
            dagreKV5264BTBinding47,
            dagreKV5264BTBinding31,
          );
          dagreKV5264BTInput9.setNode(dagreKV5264BTBinding31, {
            clusterNode: true,
            id: dagreKV5264BTBinding31,
            clusterData: dagreKV5264BTBinding2.get(dagreKV5264BTBinding31)
              .clusterData,
            label: dagreKV5264BTBinding2.get(dagreKV5264BTBinding31).label,
            graph: dagreKV5264BTBinding47,
          });
          logger.warn(
            "New graph after copy node: (",
            dagreKV5264BTBinding31,
            ")",
            dagreKV5264BTHelper1(dagreKV5264BTBinding47),
          );
          logger.debug(
            "Old graph after copy",
            dagreKV5264BTHelper1(dagreKV5264BTInput9),
          );
        } else {
          logger.warn(
            "Cluster ** ",
            dagreKV5264BTBinding31,
            " **not meeting the criteria !externalConnections:",
            !dagreKV5264BTBinding2.get(dagreKV5264BTBinding31)
              .externalConnections,
            " no parent: ",
            !dagreKV5264BTInput9.parent(dagreKV5264BTBinding31),
            " children ",
            dagreKV5264BTInput9.children(dagreKV5264BTBinding31) &&
              dagreKV5264BTInput9.children(dagreKV5264BTBinding31).length > 0,
            dagreKV5264BTInput9.children("D"),
            dagreKV5264BTInput10,
          );
          logger.debug(dagreKV5264BTBinding2);
        }
      dagreKV5264BTBinding28 = dagreKV5264BTInput9.nodes();
      logger.warn("New list of nodes", dagreKV5264BTBinding28);
      for (let dagreKV5264BTBinding86 of dagreKV5264BTBinding28) {
        let dagreKV5264BTBinding90 = dagreKV5264BTInput9.node(
          dagreKV5264BTBinding86,
        );
        logger.warn(
          " Now next level",
          dagreKV5264BTBinding86,
          dagreKV5264BTBinding90,
        );
        dagreKV5264BTBinding90?.clusterNode &&
          dagreKV5264BTBinding14(
            dagreKV5264BTBinding90.graph,
            dagreKV5264BTInput10 + 1,
          );
      }
    },
    "extractor",
  );
  dagreKV5264BTBinding15 = defineFunctionName(
    (dagreKV5264BTInput26, dagreKV5264BTInput27) => {
      if (dagreKV5264BTInput27.length === 0) return [];
      let dagreKV5264BTBinding71 = Object.assign([], dagreKV5264BTInput27);
      return (
        dagreKV5264BTInput27.forEach((item) => {
          let dagreKV5264BTBinding92 = dagreKV5264BTBinding15(
            dagreKV5264BTInput26,
            dagreKV5264BTInput26.children(item),
          );
          dagreKV5264BTBinding71 = [
            ...dagreKV5264BTBinding71,
            ...dagreKV5264BTBinding92,
          ];
        }),
        dagreKV5264BTBinding71
      );
    },
    "sorter",
  );
  dagreKV5264BTBinding16 = defineFunctionName(
    (dagreKV5264BTInput37) =>
      dagreKV5264BTBinding15(
        dagreKV5264BTInput37,
        dagreKV5264BTInput37.children(),
      ),
    "sortNodesByHierarchy",
  );
  dagreKV5264BTBinding17 = defineFunctionName(
    async (
      dagreKV5264BTInput1,
      dagreKV5264BTInput2,
      dagreKV5264BTInput3,
      dagreKV5264BTInput4,
      dagreKV5264BTInput5,
      dagreKV5264BTInput6,
    ) => {
      logger.warn(
        "Graph in recursive render:XAX",
        dagreKV5264BTHelper1(dagreKV5264BTInput2),
        dagreKV5264BTInput5,
      );
      let dagreKV5264BTBinding18 = dagreKV5264BTInput2.graph().rankdir;
      logger.trace("Dir in recursive render - dir:", dagreKV5264BTBinding18);
      let dagreKV5264BTBinding19 = dagreKV5264BTInput1
        .insert("g")
        .attr("class", "root");
      dagreKV5264BTInput2.nodes()
        ? logger.info("Recursive render XXX", dagreKV5264BTInput2.nodes())
        : logger.info("No nodes found for", dagreKV5264BTInput2);
      dagreKV5264BTInput2.edges().length > 0 &&
        logger.info(
          "Recursive edges",
          dagreKV5264BTInput2.edge(dagreKV5264BTInput2.edges()[0]),
        );
      let dagreKV5264BTBinding20 = dagreKV5264BTBinding19
          .insert("g")
          .attr("class", "clusters"),
        dagreKV5264BTBinding21 = dagreKV5264BTBinding19
          .insert("g")
          .attr("class", "edgePaths"),
        dagreKV5264BTBinding22 = dagreKV5264BTBinding19
          .insert("g")
          .attr("class", "edgeLabels"),
        dagreKV5264BTBinding23 = dagreKV5264BTBinding19
          .insert("g")
          .attr("class", "nodes");
      await Promise.all(
        dagreKV5264BTInput2.nodes().map(async function (item) {
          let dagreKV5264BTBinding32 = dagreKV5264BTInput2.node(item);
          if (dagreKV5264BTInput5 !== undefined) {
            let dagreKV5264BTBinding59 = JSON.parse(
              JSON.stringify(dagreKV5264BTInput5.clusterData),
            );
            logger.trace(
              "Setting data for parent cluster XXX\n Node.id = ",
              item,
              "\n data=",
              dagreKV5264BTBinding59.height,
              "\nParent cluster",
              dagreKV5264BTInput5.height,
            );
            dagreKV5264BTInput2.setNode(
              dagreKV5264BTInput5.id,
              dagreKV5264BTBinding59,
            );
            dagreKV5264BTInput2.parent(item) ||
              (logger.trace("Setting parent", item, dagreKV5264BTInput5.id),
              dagreKV5264BTInput2.setParent(
                item,
                dagreKV5264BTInput5.id,
                dagreKV5264BTBinding59,
              ));
          }
          if (
            (logger.info(
              "(Insert) Node XXX" +
                item +
                ": " +
                JSON.stringify(dagreKV5264BTInput2.node(item)),
            ),
            dagreKV5264BTBinding32?.clusterNode)
          ) {
            logger.info(
              "Cluster identified XBX",
              item,
              dagreKV5264BTBinding32.width,
              dagreKV5264BTInput2.node(item),
            );
            let { ranksep, nodesep } = dagreKV5264BTInput2.graph();
            dagreKV5264BTBinding32.graph.setGraph({
              ...dagreKV5264BTBinding32.graph.graph(),
              ranksep: ranksep + 25,
              nodesep,
            });
            let dagreKV5264BTBinding50 = await dagreKV5264BTBinding17(
                dagreKV5264BTBinding23,
                dagreKV5264BTBinding32.graph,
                dagreKV5264BTInput3,
                dagreKV5264BTInput4,
                dagreKV5264BTInput2.node(item),
                dagreKV5264BTInput6,
              ),
              dagreKV5264BTBinding51 = dagreKV5264BTBinding50.elem;
            chunk5FUZZQ4RC(dagreKV5264BTBinding32, dagreKV5264BTBinding51);
            dagreKV5264BTBinding32.diff = dagreKV5264BTBinding50.diff || 0;
            logger.info(
              "New compound node after recursive render XAX",
              item,
              "width",
              dagreKV5264BTBinding32.width,
              "height",
              dagreKV5264BTBinding32.height,
            );
            chunk5FUZZQ4RU(dagreKV5264BTBinding51, dagreKV5264BTBinding32);
          } else
            dagreKV5264BTInput2.children(item).length > 0
              ? (logger.trace(
                  "Cluster - the non recursive path XBX",
                  item,
                  dagreKV5264BTBinding32.id,
                  dagreKV5264BTBinding32,
                  dagreKV5264BTBinding32.width,
                  "Graph:",
                  dagreKV5264BTInput2,
                ),
                logger.trace(
                  dagreKV5264BTBinding11(
                    dagreKV5264BTBinding32.id,
                    dagreKV5264BTInput2,
                  ),
                ),
                dagreKV5264BTBinding2.set(dagreKV5264BTBinding32.id, {
                  id: dagreKV5264BTBinding11(
                    dagreKV5264BTBinding32.id,
                    dagreKV5264BTInput2,
                  ),
                  node: dagreKV5264BTBinding32,
                }))
              : (logger.trace(
                  "Node - the non recursive path XAX",
                  item,
                  dagreKV5264BTBinding23,
                  dagreKV5264BTInput2.node(item),
                  dagreKV5264BTBinding18,
                ),
                await chunk5FUZZQ4RO(
                  dagreKV5264BTBinding23,
                  dagreKV5264BTInput2.node(item),
                  {
                    config: dagreKV5264BTInput6,
                    dir: dagreKV5264BTBinding18,
                  },
                ));
        }),
      );
      await defineFunctionName(async () => {
        let dagreKV5264BTBinding49 = dagreKV5264BTInput2
          .edges()
          .map(async function (item) {
            let dagreKV5264BTBinding55 = dagreKV5264BTInput2.edge(
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
              JSON.stringify(dagreKV5264BTInput2.edge(item)),
            );
            logger.info(
              "Fix",
              dagreKV5264BTBinding2,
              "ids:",
              item.v,
              item.w,
              "Translating: ",
              dagreKV5264BTBinding2.get(item.v),
              dagreKV5264BTBinding2.get(item.w),
            );
            await chunkENJZ2VHEA(
              dagreKV5264BTBinding22,
              dagreKV5264BTBinding55,
            );
          });
        await Promise.all(dagreKV5264BTBinding49);
      }, "processEdges")();
      logger.info(
        "Graph before layout:",
        JSON.stringify(dagreKV5264BTHelper1(dagreKV5264BTInput2)),
      );
      logger.info("############################################# XXX");
      logger.info("###                Layout                 ### XXX");
      logger.info("############################################# XXX");
      dagreKV5264BTImport4(dagreKV5264BTInput2);
      logger.info(
        "Graph after layout:",
        JSON.stringify(dagreKV5264BTHelper1(dagreKV5264BTInput2)),
      );
      let dagreKV5264BTBinding24 = 0,
        { subGraphTitleTotalMargin } =
          getSubGraphTitleMargins(dagreKV5264BTInput6);
      return (
        await Promise.all(
          dagreKV5264BTBinding16(dagreKV5264BTInput2).map(
            async function (item) {
              let dagreKV5264BTBinding33 = dagreKV5264BTInput2.node(item);
              if (
                (logger.info(
                  "Position XBX => " + item + ": (" + dagreKV5264BTBinding33.x,
                  "," + dagreKV5264BTBinding33.y,
                  ") width: ",
                  dagreKV5264BTBinding33.width,
                  " height: ",
                  dagreKV5264BTBinding33.height,
                ),
                dagreKV5264BTBinding33?.clusterNode)
              ) {
                dagreKV5264BTBinding33.y += subGraphTitleTotalMargin;
                logger.info(
                  "A tainted cluster node XBX1",
                  item,
                  dagreKV5264BTBinding33.id,
                  dagreKV5264BTBinding33.width,
                  dagreKV5264BTBinding33.height,
                  dagreKV5264BTBinding33.x,
                  dagreKV5264BTBinding33.y,
                  dagreKV5264BTInput2.parent(item),
                );
                dagreKV5264BTBinding2.get(dagreKV5264BTBinding33.id).node =
                  dagreKV5264BTBinding33;
                chunk5FUZZQ4RL(dagreKV5264BTBinding33);
              } else if (dagreKV5264BTInput2.children(item).length > 0) {
                logger.info(
                  "A pure cluster node XBX1",
                  item,
                  dagreKV5264BTBinding33.id,
                  dagreKV5264BTBinding33.x,
                  dagreKV5264BTBinding33.y,
                  dagreKV5264BTBinding33.width,
                  dagreKV5264BTBinding33.height,
                  dagreKV5264BTInput2.parent(item),
                );
                dagreKV5264BTBinding33.height += subGraphTitleTotalMargin;
                dagreKV5264BTInput2.node(dagreKV5264BTBinding33.parentId);
                let dagreKV5264BTBinding52 =
                    dagreKV5264BTBinding33?.padding / 2 || 0,
                  dagreKV5264BTBinding53 =
                    dagreKV5264BTBinding33?.labelBBox?.height || 0,
                  dagreKV5264BTBinding54 =
                    dagreKV5264BTBinding53 - dagreKV5264BTBinding52 || 0;
                logger.debug(
                  "OffsetY",
                  dagreKV5264BTBinding54,
                  "labelHeight",
                  dagreKV5264BTBinding53,
                  "halfPadding",
                  dagreKV5264BTBinding52,
                );
                await chunk5FUZZQ4RI(
                  dagreKV5264BTBinding20,
                  dagreKV5264BTBinding33,
                );
                dagreKV5264BTBinding2.get(dagreKV5264BTBinding33.id).node =
                  dagreKV5264BTBinding33;
              } else {
                let dagreKV5264BTBinding56 = dagreKV5264BTInput2.node(
                  dagreKV5264BTBinding33.parentId,
                );
                dagreKV5264BTBinding33.y += subGraphTitleTotalMargin / 2;
                logger.info(
                  "A regular node XBX1 - using the padding",
                  dagreKV5264BTBinding33.id,
                  "parent",
                  dagreKV5264BTBinding33.parentId,
                  dagreKV5264BTBinding33.width,
                  dagreKV5264BTBinding33.height,
                  dagreKV5264BTBinding33.x,
                  dagreKV5264BTBinding33.y,
                  "offsetY",
                  dagreKV5264BTBinding33.offsetY,
                  "parent",
                  dagreKV5264BTBinding56,
                  dagreKV5264BTBinding56?.offsetY,
                  dagreKV5264BTBinding33,
                );
                chunk5FUZZQ4RL(dagreKV5264BTBinding33);
              }
            },
          ),
        ),
        dagreKV5264BTInput2.edges().forEach(function (item) {
          let dagreKV5264BTBinding67 = dagreKV5264BTInput2.edge(item);
          logger.info(
            "Edge " +
              item.v +
              " -> " +
              item.w +
              ": " +
              JSON.stringify(dagreKV5264BTBinding67),
            dagreKV5264BTBinding67,
          );
          dagreKV5264BTBinding67.points.forEach(
            (_item) => (_item.y += subGraphTitleTotalMargin / 2),
          );
          let dagreKV5264BTBinding68 = dagreKV5264BTInput2.node(item.v);
          var dagreKV5264BTBinding69 = dagreKV5264BTInput2.node(item.w);
          chunkENJZ2VHEO(
            dagreKV5264BTBinding67,
            chunkENJZ2VHER(
              dagreKV5264BTBinding21,
              dagreKV5264BTBinding67,
              dagreKV5264BTBinding2,
              dagreKV5264BTInput3,
              dagreKV5264BTBinding68,
              dagreKV5264BTBinding69,
              dagreKV5264BTInput4,
            ),
          );
        }),
        dagreKV5264BTInput2.nodes().forEach(function (item) {
          let dagreKV5264BTBinding88 = dagreKV5264BTInput2.node(item);
          logger.info(
            item,
            dagreKV5264BTBinding88.type,
            dagreKV5264BTBinding88.diff,
          );
          dagreKV5264BTBinding88.isGroup &&
            (dagreKV5264BTBinding24 = dagreKV5264BTBinding88.diff);
        }),
        logger.warn(
          "Returning from recursive render XAX",
          dagreKV5264BTBinding19,
          dagreKV5264BTBinding24,
        ),
        {
          elem: dagreKV5264BTBinding19,
          diff: dagreKV5264BTBinding24,
        }
      );
    },
    "recursiveRender",
  );
  dagreKV5264BT = defineFunctionName(
    async (dagreKV5264BTInput7, dagreKV5264BTInput8) => {
      let dagreKV5264BTBinding25 = new dagreKV5264BTImport1({
          multigraph: true,
          compound: true,
        })
          .setGraph({
            rankdir: dagreKV5264BTInput7.direction,
            nodesep:
              dagreKV5264BTInput7.config?.nodeSpacing ||
              dagreKV5264BTInput7.config?.flowchart?.nodeSpacing ||
              dagreKV5264BTInput7.nodeSpacing,
            ranksep:
              dagreKV5264BTInput7.config?.rankSpacing ||
              dagreKV5264BTInput7.config?.flowchart?.rankSpacing ||
              dagreKV5264BTInput7.rankSpacing,
            marginx: 8,
            marginy: 8,
          })
          .setDefaultEdgeLabel(function () {
            return {};
          }),
        dagreKV5264BTBinding26 = dagreKV5264BTInput8.select("g");
      chunkENJZ2VHEN(
        dagreKV5264BTBinding26,
        dagreKV5264BTInput7.markers,
        dagreKV5264BTInput7.type,
        dagreKV5264BTInput7.diagramId,
      );
      chunk5FUZZQ4RN();
      chunkENJZ2VHET();
      chunk5FUZZQ4RT();
      dagreKV5264BTBinding5();
      dagreKV5264BTInput7.nodes.forEach((item) => {
        dagreKV5264BTBinding25.setNode(item.id, {
          ...item,
        });
        item.parentId &&
          dagreKV5264BTBinding25.setParent(item.id, item.parentId);
      });
      logger.debug("Edges:", dagreKV5264BTInput7.edges);
      dagreKV5264BTInput7.edges.forEach((item) => {
        if (item.start === item.end) {
          let dagreKV5264BTBinding36 = item.start,
            dagreKV5264BTBinding37 =
              dagreKV5264BTBinding36 + "---" + dagreKV5264BTBinding36 + "---1",
            dagreKV5264BTBinding38 =
              dagreKV5264BTBinding36 + "---" + dagreKV5264BTBinding36 + "---2",
            dagreKV5264BTBinding39 = dagreKV5264BTBinding25.node(
              dagreKV5264BTBinding36,
            );
          dagreKV5264BTBinding25.setNode(dagreKV5264BTBinding37, {
            domId: dagreKV5264BTBinding37,
            id: dagreKV5264BTBinding37,
            parentId: dagreKV5264BTBinding39.parentId,
            labelStyle: "",
            label: "",
            padding: 0,
            shape: "labelRect",
            style: "",
            width: 10,
            height: 10,
          });
          dagreKV5264BTBinding25.setParent(
            dagreKV5264BTBinding37,
            dagreKV5264BTBinding39.parentId,
          );
          dagreKV5264BTBinding25.setNode(dagreKV5264BTBinding38, {
            domId: dagreKV5264BTBinding38,
            id: dagreKV5264BTBinding38,
            parentId: dagreKV5264BTBinding39.parentId,
            labelStyle: "",
            padding: 0,
            shape: "labelRect",
            label: "",
            style: "",
            width: 10,
            height: 10,
          });
          dagreKV5264BTBinding25.setParent(
            dagreKV5264BTBinding38,
            dagreKV5264BTBinding39.parentId,
          );
          let dagreKV5264BTBinding40 = structuredClone(item),
            dagreKV5264BTBinding41 = structuredClone(item),
            dagreKV5264BTBinding42 = structuredClone(item);
          dagreKV5264BTBinding40.label = "";
          dagreKV5264BTBinding40.arrowTypeEnd = "none";
          dagreKV5264BTBinding40.id =
            dagreKV5264BTBinding36 + "-cyclic-special-1";
          dagreKV5264BTBinding41.arrowTypeStart = "none";
          dagreKV5264BTBinding41.arrowTypeEnd = "none";
          dagreKV5264BTBinding41.id =
            dagreKV5264BTBinding36 + "-cyclic-special-mid";
          dagreKV5264BTBinding42.label = "";
          dagreKV5264BTBinding39.isGroup &&
            ((dagreKV5264BTBinding40.fromCluster = dagreKV5264BTBinding36),
            (dagreKV5264BTBinding42.toCluster = dagreKV5264BTBinding36));
          dagreKV5264BTBinding42.id =
            dagreKV5264BTBinding36 + "-cyclic-special-2";
          dagreKV5264BTBinding42.arrowTypeStart = "none";
          dagreKV5264BTBinding25.setEdge(
            dagreKV5264BTBinding36,
            dagreKV5264BTBinding37,
            dagreKV5264BTBinding40,
            dagreKV5264BTBinding36 + "-cyclic-special-0",
          );
          dagreKV5264BTBinding25.setEdge(
            dagreKV5264BTBinding37,
            dagreKV5264BTBinding38,
            dagreKV5264BTBinding41,
            dagreKV5264BTBinding36 + "-cyclic-special-1",
          );
          dagreKV5264BTBinding25.setEdge(
            dagreKV5264BTBinding38,
            dagreKV5264BTBinding36,
            dagreKV5264BTBinding42,
            dagreKV5264BTBinding36 + "-cyc<lic-special-2",
          );
        } else
          dagreKV5264BTBinding25.setEdge(
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
        JSON.stringify(dagreKV5264BTHelper1(dagreKV5264BTBinding25)),
      );
      dagreKV5264BTBinding13(dagreKV5264BTBinding25);
      logger.warn(
        "Graph after XAX:",
        JSON.stringify(dagreKV5264BTHelper1(dagreKV5264BTBinding25)),
      );
      let dagreKV5264BTBinding27 = b();
      await dagreKV5264BTBinding17(
        dagreKV5264BTBinding26,
        dagreKV5264BTBinding25,
        dagreKV5264BTInput7.type,
        dagreKV5264BTInput7.diagramId,
        undefined,
        dagreKV5264BTBinding27,
      );
    },
    "render",
  );
})();
export { dagreKV5264BT as render };
