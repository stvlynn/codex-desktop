// Restored from ref/webview/assets/architectureDiagram-Q4EWVU46-5N3iDbog.js
// Mermaid architecture diagram definition (primary).
// Stage 3 candidate: auto-renamed export→local (incl. mermaid-config); parser cores promoted.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit, toEsm } from "../../runtime/rolldown-runtime";
import {
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import cytoscape from "cytoscape";
import cytoscapeFcose from "cytoscape-fcose";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt";
import {
  A as chunkICPOFSXXA,
  C as chunkICPOFSXXC,
  G as chunkICPOFSXXG,
  H as chunkICPOFSXXH,
  R as chunkICPOFSXXR,
  V as chunkICPOFSXXV,
  _ as chunkICPOFSXXUnderscore,
  a as _chunkICPOFSXXA,
  b as chunkICPOFSXXB,
  d as chunkICPOFSXXD,
  q as chunkICPOFSXXQ,
  v as _chunkICPOFSXXV,
  y as chunkICPOFSXXY,
} from "../../diagrams/mermaid-config-alt";
import {
  n as chunk426QAEUCN,
  t as chunk426QAEUCT,
} from "../../diagrams/select-svg-element-alt";
import {
  chunk5PVQY5BWR,
  chunk5PVQY5BWS,
  chunk5PVQY5BWU,
} from "./mermaid-common-utils-alt";
import {
  chunkU2HBQHQKI as chunkU2HBQHQKA,
  chunkU2HBQHQKA as chunkU2HBQHQKI,
  chunkU2HBQHQKN,
  chunkU2HBQHQKO,
  chunkU2HBQHQKR,
} from "./mermaid-create-text-alt";
import {
  n as chunk4BX2VUABN,
  t as chunk4BX2VUABT,
} from "../../diagrams/populate-common-db";
import {
  mermaidParserCoreN,
  mermaidParserCoreT,
} from "../../diagrams/mermaid-parser-core";
function architectureDiagramQ4EWVU46Helper1(
  architectureDiagramQ4EWVU46Input47,
  architectureDiagramQ4EWVU46Input48,
  architectureDiagramQ4EWVU46Input49,
) {
  architectureDiagramQ4EWVU46Input47.forEach((item) => {
    architectureDiagramQ4EWVU46Input48.add({
      group: "nodes",
      data: {
        type: "service",
        id: item.id,
        icon: item.icon,
        label: item.title,
        parent: item.in,
        width: architectureDiagramQ4EWVU46Input49.getConfigField("iconSize"),
        height: architectureDiagramQ4EWVU46Input49.getConfigField("iconSize"),
      },
      classes: "node-service",
    });
  });
}
function architectureDiagramQ4EWVU46Helper2(
  architectureDiagramQ4EWVU46Input55,
  architectureDiagramQ4EWVU46Input56,
  architectureDiagramQ4EWVU46Input57,
) {
  architectureDiagramQ4EWVU46Input55.forEach((item) => {
    architectureDiagramQ4EWVU46Input56.add({
      group: "nodes",
      data: {
        type: "junction",
        id: item.id,
        parent: item.in,
        width: architectureDiagramQ4EWVU46Input57.getConfigField("iconSize"),
        height: architectureDiagramQ4EWVU46Input57.getConfigField("iconSize"),
      },
      classes: "node-junction",
    });
  });
}
function architectureDiagramQ4EWVU46Helper3(
  architectureDiagramQ4EWVU46Input58,
  architectureDiagramQ4EWVU46Input59,
) {
  architectureDiagramQ4EWVU46Input59.nodes().map((item) => {
    let architectureDiagramQ4EWVU46Binding148 =
      architectureDiagramQ4EWVU46Binding19(item);
    architectureDiagramQ4EWVU46Binding148.type !== "group" &&
      ((architectureDiagramQ4EWVU46Binding148.x = item.position().x),
      (architectureDiagramQ4EWVU46Binding148.y = item.position().y),
      architectureDiagramQ4EWVU46Input58
        .getElementById(architectureDiagramQ4EWVU46Binding148.id)
        .attr(
          "transform",
          "translate(" +
            (architectureDiagramQ4EWVU46Binding148.x || 0) +
            "," +
            (architectureDiagramQ4EWVU46Binding148.y || 0) +
            ")",
        ));
  });
}
function architectureDiagramQ4EWVU46Helper4(
  architectureDiagramQ4EWVU46Input66,
  architectureDiagramQ4EWVU46Input67,
) {
  architectureDiagramQ4EWVU46Input66.forEach((item) => {
    architectureDiagramQ4EWVU46Input67.add({
      group: "nodes",
      data: {
        type: "group",
        id: item.id,
        icon: item.icon,
        label: item.title,
        parent: item.in,
      },
      classes: "node-group",
    });
  });
}
function architectureDiagramQ4EWVU46Helper5(
  architectureDiagramQ4EWVU46Input22,
  architectureDiagramQ4EWVU46Input23,
) {
  architectureDiagramQ4EWVU46Input22.forEach((item) => {
    let {
        lhsId,
        rhsId,
        lhsInto,
        lhsGroup,
        rhsInto,
        lhsDir,
        rhsDir,
        rhsGroup,
        title,
      } = item,
      architectureDiagramQ4EWVU46Binding74 =
        architectureDiagramQ4EWVU46Binding9(item.lhsDir, item.rhsDir)
          ? "segments"
          : "straight",
      architectureDiagramQ4EWVU46Binding75 = {
        id: `${lhsId}-${rhsId}`,
        label: title,
        source: lhsId,
        sourceDir: lhsDir,
        sourceArrow: lhsInto,
        sourceGroup: lhsGroup,
        sourceEndpoint:
          lhsDir === "L"
            ? "0 50%"
            : lhsDir === "R"
              ? "100% 50%"
              : lhsDir === "T"
                ? "50% 0"
                : "50% 100%",
        target: rhsId,
        targetDir: rhsDir,
        targetArrow: rhsInto,
        targetGroup: rhsGroup,
        targetEndpoint:
          rhsDir === "L"
            ? "0 50%"
            : rhsDir === "R"
              ? "100% 50%"
              : rhsDir === "T"
                ? "50% 0"
                : "50% 100%",
      };
    architectureDiagramQ4EWVU46Input23.add({
      group: "edges",
      data: architectureDiagramQ4EWVU46Binding75,
      classes: architectureDiagramQ4EWVU46Binding74,
    });
  });
}
function architectureDiagramQ4EWVU46Helper6(
  architectureDiagramQ4EWVU46Input19,
  architectureDiagramQ4EWVU46Input20,
  architectureDiagramQ4EWVU46Input21,
) {
  let architectureDiagramQ4EWVU46Binding63 = chunkAGHRB4JFN(
      (
        architectureDiagramQ4EWVU46Input36,
        architectureDiagramQ4EWVU46Input37,
      ) =>
        Object.entries(architectureDiagramQ4EWVU46Input36).reduce(
          (
            accumulator,
            [
              architectureDiagramQ4EWVU46Input38,
              architectureDiagramQ4EWVU46Input39,
            ],
          ) => {
            let architectureDiagramQ4EWVU46Binding100 = 0,
              architectureDiagramQ4EWVU46Binding101 = Object.entries(
                architectureDiagramQ4EWVU46Input39,
              );
            if (architectureDiagramQ4EWVU46Binding101.length === 1)
              return (
                (accumulator[architectureDiagramQ4EWVU46Input38] =
                  architectureDiagramQ4EWVU46Binding101[0][1]),
                accumulator
              );
            for (
              let architectureDiagramQ4EWVU46Binding110 = 0;
              architectureDiagramQ4EWVU46Binding110 <
              architectureDiagramQ4EWVU46Binding101.length - 1;
              architectureDiagramQ4EWVU46Binding110++
            )
              for (
                let architectureDiagramQ4EWVU46Binding114 =
                  architectureDiagramQ4EWVU46Binding110 + 1;
                architectureDiagramQ4EWVU46Binding114 <
                architectureDiagramQ4EWVU46Binding101.length;
                architectureDiagramQ4EWVU46Binding114++
              ) {
                let [
                    architectureDiagramQ4EWVU46Binding120,
                    architectureDiagramQ4EWVU46Binding121,
                  ] =
                    architectureDiagramQ4EWVU46Binding101[
                      architectureDiagramQ4EWVU46Binding110
                    ],
                  [
                    architectureDiagramQ4EWVU46Binding122,
                    architectureDiagramQ4EWVU46Binding123,
                  ] =
                    architectureDiagramQ4EWVU46Binding101[
                      architectureDiagramQ4EWVU46Binding114
                    ];
                if (
                  architectureDiagramQ4EWVU46Input21[
                    architectureDiagramQ4EWVU46Binding120
                  ]?.[architectureDiagramQ4EWVU46Binding122] ===
                  architectureDiagramQ4EWVU46Input37
                ) {
                  accumulator[architectureDiagramQ4EWVU46Input38] ??= [];
                  accumulator[architectureDiagramQ4EWVU46Input38] = [
                    ...accumulator[architectureDiagramQ4EWVU46Input38],
                    ...architectureDiagramQ4EWVU46Binding121,
                    ...architectureDiagramQ4EWVU46Binding123,
                  ];
                } else if (
                  architectureDiagramQ4EWVU46Binding120 === "default" ||
                  architectureDiagramQ4EWVU46Binding122 === "default"
                ) {
                  accumulator[architectureDiagramQ4EWVU46Input38] ??= [];
                  accumulator[architectureDiagramQ4EWVU46Input38] = [
                    ...accumulator[architectureDiagramQ4EWVU46Input38],
                    ...architectureDiagramQ4EWVU46Binding121,
                    ...architectureDiagramQ4EWVU46Binding123,
                  ];
                } else {
                  let architectureDiagramQ4EWVU46Binding151 = `${architectureDiagramQ4EWVU46Input38}-${architectureDiagramQ4EWVU46Binding100++}`;
                  accumulator[architectureDiagramQ4EWVU46Binding151] =
                    architectureDiagramQ4EWVU46Binding121;
                  let architectureDiagramQ4EWVU46Binding152 = `${architectureDiagramQ4EWVU46Input38}-${architectureDiagramQ4EWVU46Binding100++}`;
                  accumulator[architectureDiagramQ4EWVU46Binding152] =
                    architectureDiagramQ4EWVU46Binding123;
                }
              }
            return accumulator;
          },
          {},
        ),
      "flattenAlignments",
    ),
    [
      architectureDiagramQ4EWVU46Binding64,
      architectureDiagramQ4EWVU46Binding65,
    ] = architectureDiagramQ4EWVU46Input20
      .map((item) => {
        let architectureDiagramQ4EWVU46Binding108 = {},
          architectureDiagramQ4EWVU46Binding109 = {};
        return (
          Object.entries(item).forEach(
            ([
              architectureDiagramQ4EWVU46Input62,
              [
                architectureDiagramQ4EWVU46Input63,
                architectureDiagramQ4EWVU46Input64,
              ],
            ]) => {
              let architectureDiagramQ4EWVU46Binding144 =
                architectureDiagramQ4EWVU46Input19.getNode(
                  architectureDiagramQ4EWVU46Input62,
                )?.in ?? "default";
              architectureDiagramQ4EWVU46Binding108[
                architectureDiagramQ4EWVU46Input64
              ] ??= {};
              architectureDiagramQ4EWVU46Binding108[
                architectureDiagramQ4EWVU46Input64
              ][architectureDiagramQ4EWVU46Binding144] ??= [];
              architectureDiagramQ4EWVU46Binding108[
                architectureDiagramQ4EWVU46Input64
              ][architectureDiagramQ4EWVU46Binding144].push(
                architectureDiagramQ4EWVU46Input62,
              );
              architectureDiagramQ4EWVU46Binding109[
                architectureDiagramQ4EWVU46Input63
              ] ??= {};
              architectureDiagramQ4EWVU46Binding109[
                architectureDiagramQ4EWVU46Input63
              ][architectureDiagramQ4EWVU46Binding144] ??= [];
              architectureDiagramQ4EWVU46Binding109[
                architectureDiagramQ4EWVU46Input63
              ][architectureDiagramQ4EWVU46Binding144].push(
                architectureDiagramQ4EWVU46Input62,
              );
            },
          ),
          {
            horiz: Object.values(
              architectureDiagramQ4EWVU46Binding63(
                architectureDiagramQ4EWVU46Binding108,
                "horizontal",
              ),
            ).filter((_item) => _item.length > 1),
            vert: Object.values(
              architectureDiagramQ4EWVU46Binding63(
                architectureDiagramQ4EWVU46Binding109,
                "vertical",
              ),
            ).filter((_item) => _item.length > 1),
          }
        );
      })
      .reduce(
        (
          [
            architectureDiagramQ4EWVU46Input77,
            architectureDiagramQ4EWVU46Input78,
          ],
          { horiz, vert },
        ) => [
          [...architectureDiagramQ4EWVU46Input77, ...horiz],
          [...architectureDiagramQ4EWVU46Input78, ...vert],
        ],
        [[], []],
      );
  return {
    horizontal: architectureDiagramQ4EWVU46Binding64,
    vertical: architectureDiagramQ4EWVU46Binding65,
  };
}
function architectureDiagramQ4EWVU46Helper7(
  architectureDiagramQ4EWVU46Input24,
  architectureDiagramQ4EWVU46Input25,
) {
  let architectureDiagramQ4EWVU46Binding71 = [],
    architectureDiagramQ4EWVU46Binding72 = chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Input101) =>
        `${architectureDiagramQ4EWVU46Input101[0]},${architectureDiagramQ4EWVU46Input101[1]}`,
      "posToStr",
    ),
    architectureDiagramQ4EWVU46Binding73 = chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Input96) =>
        architectureDiagramQ4EWVU46Input96
          .split(",")
          .map((item) => parseInt(item)),
      "strToPos",
    );
  return (
    architectureDiagramQ4EWVU46Input24.forEach((item) => {
      let architectureDiagramQ4EWVU46Binding94 = Object.fromEntries(
          Object.entries(item).map(
            ([
              architectureDiagramQ4EWVU46Input102,
              architectureDiagramQ4EWVU46Input103,
            ]) => [
              architectureDiagramQ4EWVU46Binding72(
                architectureDiagramQ4EWVU46Input103,
              ),
              architectureDiagramQ4EWVU46Input102,
            ],
          ),
        ),
        architectureDiagramQ4EWVU46Binding95 = [
          architectureDiagramQ4EWVU46Binding72([0, 0]),
        ],
        architectureDiagramQ4EWVU46Binding96 = {},
        architectureDiagramQ4EWVU46Binding97 = {
          L: [-1, 0],
          R: [1, 0],
          T: [0, 1],
          B: [0, -1],
        };
      for (; architectureDiagramQ4EWVU46Binding95.length > 0; ) {
        let architectureDiagramQ4EWVU46Binding111 =
          architectureDiagramQ4EWVU46Binding95.shift();
        if (architectureDiagramQ4EWVU46Binding111) {
          architectureDiagramQ4EWVU46Binding96[
            architectureDiagramQ4EWVU46Binding111
          ] = 1;
          let architectureDiagramQ4EWVU46Binding117 =
            architectureDiagramQ4EWVU46Binding94[
              architectureDiagramQ4EWVU46Binding111
            ];
          if (architectureDiagramQ4EWVU46Binding117) {
            let architectureDiagramQ4EWVU46Binding124 =
              architectureDiagramQ4EWVU46Binding73(
                architectureDiagramQ4EWVU46Binding111,
              );
            Object.entries(architectureDiagramQ4EWVU46Binding97).forEach(
              ([
                architectureDiagramQ4EWVU46Input50,
                architectureDiagramQ4EWVU46Input51,
              ]) => {
                let architectureDiagramQ4EWVU46Binding129 =
                    architectureDiagramQ4EWVU46Binding72([
                      architectureDiagramQ4EWVU46Binding124[0] +
                        architectureDiagramQ4EWVU46Input51[0],
                      architectureDiagramQ4EWVU46Binding124[1] +
                        architectureDiagramQ4EWVU46Input51[1],
                    ]),
                  architectureDiagramQ4EWVU46Binding130 =
                    architectureDiagramQ4EWVU46Binding94[
                      architectureDiagramQ4EWVU46Binding129
                    ];
                architectureDiagramQ4EWVU46Binding130 &&
                  !architectureDiagramQ4EWVU46Binding96[
                    architectureDiagramQ4EWVU46Binding129
                  ] &&
                  (architectureDiagramQ4EWVU46Binding95.push(
                    architectureDiagramQ4EWVU46Binding129,
                  ),
                  architectureDiagramQ4EWVU46Binding71.push({
                    [architectureDiagramQ4EWVU46Binding2[
                      architectureDiagramQ4EWVU46Input50
                    ]]: architectureDiagramQ4EWVU46Binding130,
                    [architectureDiagramQ4EWVU46Binding2[
                      architectureDiagramQ4EWVU46Binding5(
                        architectureDiagramQ4EWVU46Input50,
                      )
                    ]]: architectureDiagramQ4EWVU46Binding117,
                    gap:
                      1.5 *
                      architectureDiagramQ4EWVU46Input25.getConfigField(
                        "iconSize",
                      ),
                  }));
              },
            );
          }
        }
      }
    }),
    architectureDiagramQ4EWVU46Binding71
  );
}
function architectureDiagramQ4EWVU46Helper8(
  architectureDiagramQ4EWVU46Input1,
  architectureDiagramQ4EWVU46Input2,
  architectureDiagramQ4EWVU46Input3,
  architectureDiagramQ4EWVU46Input4,
  architectureDiagramQ4EWVU46Input5,
  { spatialMaps, groupAlignments },
) {
  return new Promise((architectureDiagramQ4EWVU46Input6) => {
    let architectureDiagramQ4EWVU46Binding28 = srcR("body")
        .append("div")
        .attr("id", "cy")
        .attr("style", "display:none"),
      architectureDiagramQ4EWVU46Binding29 = cytoscape({
        container: document.getElementById("cy"),
        style: [
          {
            selector: "edge",
            style: {
              "curve-style": "straight",
              "source-endpoint": "data(sourceEndpoint)",
              "target-endpoint": "data(targetEndpoint)",
            },
          },
          {
            selector: "edge[label]",
            style: {
              label: "data(label)",
            },
          },
          {
            selector: "edge.segments",
            style: {
              "curve-style": "segments",
              "segment-weights": "0",
              "segment-distances": [0.5],
              "edge-distances": "endpoints",
              "source-endpoint": "data(sourceEndpoint)",
              "target-endpoint": "data(targetEndpoint)",
            },
          },
          {
            selector: "node",
            style: {
              "compound-sizing-wrt-labels": "include",
            },
          },
          {
            selector: "node[label]",
            style: {
              "text-valign": "bottom",
              "text-halign": "center",
              "font-size": `${architectureDiagramQ4EWVU46Input5.getConfigField("fontSize")}px`,
            },
          },
          {
            selector: ".node-service",
            style: {
              label: "data(label)",
              width: "data(width)",
              height: "data(height)",
            },
          },
          {
            selector: ".node-junction",
            style: {
              width: "data(width)",
              height: "data(height)",
            },
          },
          {
            selector: ".node-group",
            style: {
              padding: `${architectureDiagramQ4EWVU46Input5.getConfigField("padding")}px`,
            },
          },
        ],
        layout: {
          name: "grid",
          boundingBox: {
            x1: 0,
            x2: 100,
            y1: 0,
            y2: 100,
          },
        },
      });
    architectureDiagramQ4EWVU46Binding28.remove();
    architectureDiagramQ4EWVU46Helper4(
      architectureDiagramQ4EWVU46Input3,
      architectureDiagramQ4EWVU46Binding29,
    );
    architectureDiagramQ4EWVU46Helper1(
      architectureDiagramQ4EWVU46Input1,
      architectureDiagramQ4EWVU46Binding29,
      architectureDiagramQ4EWVU46Input5,
    );
    architectureDiagramQ4EWVU46Helper2(
      architectureDiagramQ4EWVU46Input2,
      architectureDiagramQ4EWVU46Binding29,
      architectureDiagramQ4EWVU46Input5,
    );
    architectureDiagramQ4EWVU46Helper5(
      architectureDiagramQ4EWVU46Input4,
      architectureDiagramQ4EWVU46Binding29,
    );
    let architectureDiagramQ4EWVU46Binding30 =
        architectureDiagramQ4EWVU46Helper6(
          architectureDiagramQ4EWVU46Input5,
          spatialMaps,
          groupAlignments,
        ),
      architectureDiagramQ4EWVU46Binding31 = architectureDiagramQ4EWVU46Helper7(
        spatialMaps,
        architectureDiagramQ4EWVU46Input5,
      ),
      architectureDiagramQ4EWVU46Binding32 =
        architectureDiagramQ4EWVU46Binding29.layout({
          name: "fcose",
          quality: "proof",
          randomize:
            architectureDiagramQ4EWVU46Input5.getConfigField("randomize"),
          styleEnabled: false,
          animate: false,
          nodeDimensionsIncludeLabels: false,
          idealEdgeLength(architectureDiagramQ4EWVU46Input65) {
            let [
                architectureDiagramQ4EWVU46Binding145,
                architectureDiagramQ4EWVU46Binding146,
              ] = architectureDiagramQ4EWVU46Input65.connectedNodes(),
              { parent } = architectureDiagramQ4EWVU46Binding19(
                architectureDiagramQ4EWVU46Binding145,
              ),
              { parent: _parent } = architectureDiagramQ4EWVU46Binding19(
                architectureDiagramQ4EWVU46Binding146,
              );
            return parent === _parent
              ? 1.5 *
                  architectureDiagramQ4EWVU46Input5.getConfigField("iconSize")
              : 0.5 *
                  architectureDiagramQ4EWVU46Input5.getConfigField("iconSize");
          },
          edgeElasticity(architectureDiagramQ4EWVU46Input69) {
            let [
                architectureDiagramQ4EWVU46Binding149,
                architectureDiagramQ4EWVU46Binding150,
              ] = architectureDiagramQ4EWVU46Input69.connectedNodes(),
              { parent } = architectureDiagramQ4EWVU46Binding19(
                architectureDiagramQ4EWVU46Binding149,
              ),
              { parent: _parent } = architectureDiagramQ4EWVU46Binding19(
                architectureDiagramQ4EWVU46Binding150,
              );
            return parent === _parent ? 0.45 : 0.001;
          },
          alignmentConstraint: architectureDiagramQ4EWVU46Binding30,
          relativePlacementConstraint: architectureDiagramQ4EWVU46Binding31,
        });
    architectureDiagramQ4EWVU46Binding32.one("layoutstop", () => {
      function architectureDiagramQ4EWVU46Helper9(
        architectureDiagramQ4EWVU46Input30,
        architectureDiagramQ4EWVU46Input31,
        architectureDiagramQ4EWVU46Input32,
        architectureDiagramQ4EWVU46Input33,
      ) {
        let architectureDiagramQ4EWVU46Binding87,
          architectureDiagramQ4EWVU46Binding88,
          { x, y } = architectureDiagramQ4EWVU46Input30,
          { x: _x, y: _y } = architectureDiagramQ4EWVU46Input31;
        architectureDiagramQ4EWVU46Binding88 =
          (architectureDiagramQ4EWVU46Input33 -
            y +
            ((x - architectureDiagramQ4EWVU46Input32) * (y - _y)) / (x - _x)) /
          Math.sqrt(1 + ((y - _y) / (x - _x)) ** 2);
        architectureDiagramQ4EWVU46Binding87 = Math.sqrt(
          (architectureDiagramQ4EWVU46Input33 - y) ** 2 +
            (architectureDiagramQ4EWVU46Input32 - x) ** 2 -
            architectureDiagramQ4EWVU46Binding88 ** 2,
        );
        let architectureDiagramQ4EWVU46Binding89 = Math.sqrt(
          (_x - x) ** 2 + (_y - y) ** 2,
        );
        architectureDiagramQ4EWVU46Binding87 /=
          architectureDiagramQ4EWVU46Binding89;
        let architectureDiagramQ4EWVU46Binding90 =
          (_x - x) * (architectureDiagramQ4EWVU46Input33 - y) -
          (_y - y) * (architectureDiagramQ4EWVU46Input32 - x);
        switch (true) {
          case architectureDiagramQ4EWVU46Binding90 >= 0:
            architectureDiagramQ4EWVU46Binding90 = 1;
            break;
          case architectureDiagramQ4EWVU46Binding90 < 0:
            architectureDiagramQ4EWVU46Binding90 = -1;
            break;
        }
        let architectureDiagramQ4EWVU46Binding91 =
          (_x - x) * (architectureDiagramQ4EWVU46Input32 - x) +
          (_y - y) * (architectureDiagramQ4EWVU46Input33 - y);
        switch (true) {
          case architectureDiagramQ4EWVU46Binding91 >= 0:
            architectureDiagramQ4EWVU46Binding91 = 1;
            break;
          case architectureDiagramQ4EWVU46Binding91 < 0:
            architectureDiagramQ4EWVU46Binding91 = -1;
            break;
        }
        return (
          (architectureDiagramQ4EWVU46Binding88 =
            Math.abs(architectureDiagramQ4EWVU46Binding88) *
            architectureDiagramQ4EWVU46Binding90),
          (architectureDiagramQ4EWVU46Binding87 *=
            architectureDiagramQ4EWVU46Binding91),
          {
            distances: architectureDiagramQ4EWVU46Binding88,
            weights: architectureDiagramQ4EWVU46Binding87,
          }
        );
      }
      chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper9, "getSegmentWeights");
      architectureDiagramQ4EWVU46Binding29.startBatch();
      for (let architectureDiagramQ4EWVU46Binding113 of Object.values(
        architectureDiagramQ4EWVU46Binding29.edges(),
      ))
        if (architectureDiagramQ4EWVU46Binding113.data?.()) {
          let { x, y } = architectureDiagramQ4EWVU46Binding113
              .source()
              .position(),
            { x: _x, y: _y } = architectureDiagramQ4EWVU46Binding113
              .target()
              .position();
          if (x !== _x && y !== _y) {
            let architectureDiagramQ4EWVU46Binding133 =
                architectureDiagramQ4EWVU46Binding113.sourceEndpoint(),
              architectureDiagramQ4EWVU46Binding134 =
                architectureDiagramQ4EWVU46Binding113.targetEndpoint(),
              { sourceDir } = architectureDiagramQ4EWVU46Binding18(
                architectureDiagramQ4EWVU46Binding113,
              ),
              [
                architectureDiagramQ4EWVU46Binding135,
                architectureDiagramQ4EWVU46Binding136,
              ] = architectureDiagramQ4EWVU46Binding8(sourceDir)
                ? [
                    architectureDiagramQ4EWVU46Binding133.x,
                    architectureDiagramQ4EWVU46Binding134.y,
                  ]
                : [
                    architectureDiagramQ4EWVU46Binding134.x,
                    architectureDiagramQ4EWVU46Binding133.y,
                  ],
              { weights, distances } = architectureDiagramQ4EWVU46Helper9(
                architectureDiagramQ4EWVU46Binding133,
                architectureDiagramQ4EWVU46Binding134,
                architectureDiagramQ4EWVU46Binding135,
                architectureDiagramQ4EWVU46Binding136,
              );
            architectureDiagramQ4EWVU46Binding113.style(
              "segment-distances",
              distances,
            );
            architectureDiagramQ4EWVU46Binding113.style(
              "segment-weights",
              weights,
            );
          }
        }
      architectureDiagramQ4EWVU46Binding29.endBatch();
      architectureDiagramQ4EWVU46Binding32.run();
    });
    architectureDiagramQ4EWVU46Binding32.run();
    architectureDiagramQ4EWVU46Binding29.ready(
      (architectureDiagramQ4EWVU46Input95) => {
        chunkAGHRB4JFI.info("Ready", architectureDiagramQ4EWVU46Input95);
        architectureDiagramQ4EWVU46Input6(architectureDiagramQ4EWVU46Binding29);
      },
    );
  });
}
var architectureDiagramQ4EWVU46Binding1,
  architectureDiagramQ4EWVU46Binding2,
  architectureDiagramQ4EWVU46Binding3,
  architectureDiagramQ4EWVU46Binding4,
  architectureDiagramQ4EWVU46Binding5,
  architectureDiagramQ4EWVU46Binding6,
  architectureDiagramQ4EWVU46Binding7,
  architectureDiagramQ4EWVU46Binding8,
  architectureDiagramQ4EWVU46Binding9,
  architectureDiagramQ4EWVU46Binding10,
  architectureDiagramQ4EWVU46Binding11,
  architectureDiagramQ4EWVU46Binding12,
  architectureDiagramQ4EWVU46Binding13,
  architectureDiagramQ4EWVU46Binding14,
  architectureDiagramQ4EWVU46Binding15,
  architectureDiagramQ4EWVU46Binding16,
  architectureDiagramQ4EWVU46Binding17,
  architectureDiagramQ4EWVU46Binding18,
  architectureDiagramQ4EWVU46Binding19,
  architectureDiagramQ4EWVU46Binding20,
  architectureDiagramQ4EWVU46Binding21,
  architectureDiagramQ4EWVU46Binding22,
  architectureDiagramQ4EWVU46Binding23,
  architectureDiagramQ4EWVU46Binding24,
  architectureDiagramQ4EWVU46Binding25,
  $,
  _e,
  architectureDiagramQ4EWVU46Binding26,
  architectureDiagramQ4EWVU46Binding27,
  be,
  ArchitectureDiagramQ4EWVU46;
esmInit(() => {
  chunk426QAEUCT();
  chunkU2HBQHQKI();
  chunk4BX2VUABT();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  cytoscape();
  architectureDiagramQ4EWVU46Binding1 = toEsm(cytoscapeFcose(), 1);
  srcT();
  architectureDiagramQ4EWVU46Binding2 = {
    L: "left",
    R: "right",
    T: "top",
    B: "bottom",
  };
  architectureDiagramQ4EWVU46Binding3 = {
    L: chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Input99) =>
        `${architectureDiagramQ4EWVU46Input99},${architectureDiagramQ4EWVU46Input99 / 2} 0,${architectureDiagramQ4EWVU46Input99} 0,0`,
      "L",
    ),
    R: chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Input97) =>
        `0,${architectureDiagramQ4EWVU46Input97 / 2} ${architectureDiagramQ4EWVU46Input97},0 ${architectureDiagramQ4EWVU46Input97},${architectureDiagramQ4EWVU46Input97}`,
      "R",
    ),
    T: chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Input100) =>
        `0,0 ${architectureDiagramQ4EWVU46Input100},0 ${architectureDiagramQ4EWVU46Input100 / 2},${architectureDiagramQ4EWVU46Input100}`,
      "T",
    ),
    B: chunkAGHRB4JFN(
      (architectureDiagramQ4EWVU46Input98) =>
        `${architectureDiagramQ4EWVU46Input98 / 2},0 ${architectureDiagramQ4EWVU46Input98},${architectureDiagramQ4EWVU46Input98} 0,${architectureDiagramQ4EWVU46Input98}`,
      "B",
    ),
  };
  architectureDiagramQ4EWVU46Binding4 = {
    L: chunkAGHRB4JFN(
      (
        architectureDiagramQ4EWVU46Input104,
        architectureDiagramQ4EWVU46Input105,
      ) =>
        architectureDiagramQ4EWVU46Input104 -
        architectureDiagramQ4EWVU46Input105 +
        2,
      "L",
    ),
    R: chunkAGHRB4JFN(
      (
        architectureDiagramQ4EWVU46Input108,
        architectureDiagramQ4EWVU46Input109,
      ) => architectureDiagramQ4EWVU46Input108 - 2,
      "R",
    ),
    T: chunkAGHRB4JFN(
      (
        architectureDiagramQ4EWVU46Input106,
        architectureDiagramQ4EWVU46Input107,
      ) =>
        architectureDiagramQ4EWVU46Input106 -
        architectureDiagramQ4EWVU46Input107 +
        2,
      "T",
    ),
    B: chunkAGHRB4JFN(
      (
        architectureDiagramQ4EWVU46Input110,
        architectureDiagramQ4EWVU46Input111,
      ) => architectureDiagramQ4EWVU46Input110 - 2,
      "B",
    ),
  };
  architectureDiagramQ4EWVU46Binding5 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input79,
  ) {
    return architectureDiagramQ4EWVU46Binding7(
      architectureDiagramQ4EWVU46Input79,
    )
      ? architectureDiagramQ4EWVU46Input79 === "L"
        ? "R"
        : "L"
      : architectureDiagramQ4EWVU46Input79 === "T"
        ? "B"
        : "T";
  }, "getOppositeArchitectureDirection");
  architectureDiagramQ4EWVU46Binding6 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input71,
  ) {
    let architectureDiagramQ4EWVU46Binding159 =
      architectureDiagramQ4EWVU46Input71;
    return (
      architectureDiagramQ4EWVU46Binding159 === "L" ||
      architectureDiagramQ4EWVU46Binding159 === "R" ||
      architectureDiagramQ4EWVU46Binding159 === "T" ||
      architectureDiagramQ4EWVU46Binding159 === "B"
    );
  }, "isArchitectureDirection");
  architectureDiagramQ4EWVU46Binding7 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input85,
  ) {
    let architectureDiagramQ4EWVU46Binding163 =
      architectureDiagramQ4EWVU46Input85;
    return (
      architectureDiagramQ4EWVU46Binding163 === "L" ||
      architectureDiagramQ4EWVU46Binding163 === "R"
    );
  }, "isArchitectureDirectionX");
  architectureDiagramQ4EWVU46Binding8 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input86,
  ) {
    let architectureDiagramQ4EWVU46Binding164 =
      architectureDiagramQ4EWVU46Input86;
    return (
      architectureDiagramQ4EWVU46Binding164 === "T" ||
      architectureDiagramQ4EWVU46Binding164 === "B"
    );
  }, "isArchitectureDirectionY");
  architectureDiagramQ4EWVU46Binding9 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input73,
    architectureDiagramQ4EWVU46Input74,
  ) {
    let architectureDiagramQ4EWVU46Binding160 =
        architectureDiagramQ4EWVU46Binding7(
          architectureDiagramQ4EWVU46Input73,
        ) &&
        architectureDiagramQ4EWVU46Binding8(architectureDiagramQ4EWVU46Input74),
      architectureDiagramQ4EWVU46Binding161 =
        architectureDiagramQ4EWVU46Binding8(
          architectureDiagramQ4EWVU46Input73,
        ) &&
        architectureDiagramQ4EWVU46Binding7(architectureDiagramQ4EWVU46Input74);
    return (
      architectureDiagramQ4EWVU46Binding160 ||
      architectureDiagramQ4EWVU46Binding161
    );
  }, "isArchitectureDirectionXY");
  architectureDiagramQ4EWVU46Binding10 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input70,
  ) {
    let architectureDiagramQ4EWVU46Binding153 =
        architectureDiagramQ4EWVU46Input70[0],
      architectureDiagramQ4EWVU46Binding154 =
        architectureDiagramQ4EWVU46Input70[1],
      architectureDiagramQ4EWVU46Binding155 =
        architectureDiagramQ4EWVU46Binding7(
          architectureDiagramQ4EWVU46Binding153,
        ) &&
        architectureDiagramQ4EWVU46Binding8(
          architectureDiagramQ4EWVU46Binding154,
        ),
      architectureDiagramQ4EWVU46Binding156 =
        architectureDiagramQ4EWVU46Binding8(
          architectureDiagramQ4EWVU46Binding153,
        ) &&
        architectureDiagramQ4EWVU46Binding7(
          architectureDiagramQ4EWVU46Binding154,
        );
    return (
      architectureDiagramQ4EWVU46Binding155 ||
      architectureDiagramQ4EWVU46Binding156
    );
  }, "isArchitecturePairXY");
  architectureDiagramQ4EWVU46Binding11 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input82,
  ) {
    return (
      architectureDiagramQ4EWVU46Input82 !== "LL" &&
      architectureDiagramQ4EWVU46Input82 !== "RR" &&
      architectureDiagramQ4EWVU46Input82 !== "TT" &&
      architectureDiagramQ4EWVU46Input82 !== "BB"
    );
  }, "isValidArchitectureDirectionPair");
  architectureDiagramQ4EWVU46Binding12 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input83,
    architectureDiagramQ4EWVU46Input84,
  ) {
    let architectureDiagramQ4EWVU46Binding162 = `${architectureDiagramQ4EWVU46Input83}${architectureDiagramQ4EWVU46Input84}`;
    return architectureDiagramQ4EWVU46Binding11(
      architectureDiagramQ4EWVU46Binding162,
    )
      ? architectureDiagramQ4EWVU46Binding162
      : undefined;
  }, "getArchitectureDirectionPair");
  architectureDiagramQ4EWVU46Binding13 = chunkAGHRB4JFN(function (
    [architectureDiagramQ4EWVU46Input52, architectureDiagramQ4EWVU46Input53],
    architectureDiagramQ4EWVU46Input54,
  ) {
    let architectureDiagramQ4EWVU46Binding131 =
        architectureDiagramQ4EWVU46Input54[0],
      architectureDiagramQ4EWVU46Binding132 =
        architectureDiagramQ4EWVU46Input54[1];
    return architectureDiagramQ4EWVU46Binding7(
      architectureDiagramQ4EWVU46Binding131,
    )
      ? architectureDiagramQ4EWVU46Binding8(
          architectureDiagramQ4EWVU46Binding132,
        )
        ? [
            architectureDiagramQ4EWVU46Input52 +
              (architectureDiagramQ4EWVU46Binding131 === "L" ? -1 : 1),
            architectureDiagramQ4EWVU46Input53 +
              (architectureDiagramQ4EWVU46Binding132 === "T" ? 1 : -1),
          ]
        : [
            architectureDiagramQ4EWVU46Input52 +
              (architectureDiagramQ4EWVU46Binding131 === "L" ? -1 : 1),
            architectureDiagramQ4EWVU46Input53,
          ]
      : architectureDiagramQ4EWVU46Binding7(
            architectureDiagramQ4EWVU46Binding132,
          )
        ? [
            architectureDiagramQ4EWVU46Input52 +
              (architectureDiagramQ4EWVU46Binding132 === "L" ? 1 : -1),
            architectureDiagramQ4EWVU46Input53 +
              (architectureDiagramQ4EWVU46Binding131 === "T" ? 1 : -1),
          ]
        : [
            architectureDiagramQ4EWVU46Input52,
            architectureDiagramQ4EWVU46Input53 +
              (architectureDiagramQ4EWVU46Binding131 === "T" ? 1 : -1),
          ];
  }, "shiftPositionByArchitectureDirectionPair");
  architectureDiagramQ4EWVU46Binding14 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input68,
  ) {
    return architectureDiagramQ4EWVU46Input68 === "LT" ||
      architectureDiagramQ4EWVU46Input68 === "TL"
      ? [1, 1]
      : architectureDiagramQ4EWVU46Input68 === "BL" ||
          architectureDiagramQ4EWVU46Input68 === "LB"
        ? [1, -1]
        : architectureDiagramQ4EWVU46Input68 === "BR" ||
            architectureDiagramQ4EWVU46Input68 === "RB"
          ? [-1, -1]
          : [-1, 1];
  }, "getArchitectureDirectionXYFactors");
  architectureDiagramQ4EWVU46Binding15 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input80,
    architectureDiagramQ4EWVU46Input81,
  ) {
    return architectureDiagramQ4EWVU46Binding9(
      architectureDiagramQ4EWVU46Input80,
      architectureDiagramQ4EWVU46Input81,
    )
      ? "bend"
      : architectureDiagramQ4EWVU46Binding7(architectureDiagramQ4EWVU46Input80)
        ? "horizontal"
        : "vertical";
  }, "getArchitectureDirectionAlignment");
  architectureDiagramQ4EWVU46Binding16 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input93,
  ) {
    return architectureDiagramQ4EWVU46Input93.type === "service";
  }, "isArchitectureService");
  architectureDiagramQ4EWVU46Binding17 = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input92,
  ) {
    return architectureDiagramQ4EWVU46Input92.type === "junction";
  }, "isArchitectureJunction");
  architectureDiagramQ4EWVU46Binding18 = chunkAGHRB4JFN(
    (architectureDiagramQ4EWVU46Input112) =>
      architectureDiagramQ4EWVU46Input112.data(),
    "edgeData",
  );
  architectureDiagramQ4EWVU46Binding19 = chunkAGHRB4JFN(
    (architectureDiagramQ4EWVU46Input113) =>
      architectureDiagramQ4EWVU46Input113.data(),
    "nodeData",
  );
  architectureDiagramQ4EWVU46Binding20 = chunkICPOFSXXD.architecture;
  architectureDiagramQ4EWVU46Binding21 = class {
    constructor() {
      this.nodes = {};
      this.groups = {};
      this.edges = [];
      this.registeredIds = {};
      this.elements = {};
      this.diagramId = "";
      this.setAccTitle = chunkICPOFSXXH;
      this.getAccTitle = _chunkICPOFSXXV;
      this.setDiagramTitle = chunkICPOFSXXG;
      this.getDiagramTitle = chunkICPOFSXXC;
      this.getAccDescription = chunkICPOFSXXUnderscore;
      this.setAccDescription = chunkICPOFSXXV;
      this.clear();
    }
    static {
      chunkAGHRB4JFN(this, "ArchitectureDB");
    }
    setDiagramId(architectureDiagramQ4EWVU46Input94) {
      this.diagramId = architectureDiagramQ4EWVU46Input94;
    }
    getDiagramId() {
      return this.diagramId;
    }
    clear() {
      this.nodes = {};
      this.groups = {};
      this.edges = [];
      this.registeredIds = {};
      this.dataStructures = undefined;
      this.elements = {};
      this.diagramId = "";
      _chunkICPOFSXXA();
    }
    addService({ id, icon, in: _in, title, iconText }) {
      if (this.registeredIds[id] !== undefined)
        throw Error(
          `The service id [${id}] is already in use by another ${this.registeredIds[id]}`,
        );
      if (_in !== undefined) {
        if (id === _in)
          throw Error(`The service [${id}] cannot be placed within itself`);
        if (this.registeredIds[_in] === undefined)
          throw Error(
            `The service [${id}]'s parent does not exist. Please make sure the parent is created before this service`,
          );
        if (this.registeredIds[_in] === "node")
          throw Error(`The service [${id}]'s parent is not a group`);
      }
      this.registeredIds[id] = "node";
      this.nodes[id] = {
        id,
        type: "service",
        icon,
        iconText,
        title,
        edges: [],
        in: _in,
      };
    }
    getServices() {
      return Object.values(this.nodes).filter(
        architectureDiagramQ4EWVU46Binding16,
      );
    }
    addJunction({ id, in: _in }) {
      if (this.registeredIds[id] !== undefined)
        throw Error(
          `The junction id [${id}] is already in use by another ${this.registeredIds[id]}`,
        );
      if (_in !== undefined) {
        if (id === _in)
          throw Error(`The junction [${id}] cannot be placed within itself`);
        if (this.registeredIds[_in] === undefined)
          throw Error(
            `The junction [${id}]'s parent does not exist. Please make sure the parent is created before this junction`,
          );
        if (this.registeredIds[_in] === "node")
          throw Error(`The junction [${id}]'s parent is not a group`);
      }
      this.registeredIds[id] = "node";
      this.nodes[id] = {
        id,
        type: "junction",
        edges: [],
        in: _in,
      };
    }
    getJunctions() {
      return Object.values(this.nodes).filter(
        architectureDiagramQ4EWVU46Binding17,
      );
    }
    getNodes() {
      return Object.values(this.nodes);
    }
    getNode(architectureDiagramQ4EWVU46Input91) {
      return this.nodes[architectureDiagramQ4EWVU46Input91] ?? null;
    }
    addGroup({ id, icon, in: _in, title }) {
      if (this.registeredIds?.[id] !== undefined)
        throw Error(
          `The group id [${id}] is already in use by another ${this.registeredIds[id]}`,
        );
      if (_in !== undefined) {
        if (id === _in)
          throw Error(`The group [${id}] cannot be placed within itself`);
        if (this.registeredIds?.[_in] === undefined)
          throw Error(
            `The group [${id}]'s parent does not exist. Please make sure the parent is created before this group`,
          );
        if (this.registeredIds?.[_in] === "node")
          throw Error(`The group [${id}]'s parent is not a group`);
      }
      this.registeredIds[id] = "group";
      this.groups[id] = {
        id,
        icon,
        title,
        in: _in,
      };
    }
    getGroups() {
      return Object.values(this.groups);
    }
    addEdge({
      lhsId,
      rhsId,
      lhsDir,
      rhsDir,
      lhsInto,
      rhsInto,
      lhsGroup,
      rhsGroup,
      title,
    }) {
      if (!architectureDiagramQ4EWVU46Binding6(lhsDir))
        throw Error(
          `Invalid direction given for left hand side of edge ${lhsId}--${rhsId}. Expected (L,R,T,B) got ${String(lhsDir)}`,
        );
      if (!architectureDiagramQ4EWVU46Binding6(rhsDir))
        throw Error(
          `Invalid direction given for right hand side of edge ${lhsId}--${rhsId}. Expected (L,R,T,B) got ${String(rhsDir)}`,
        );
      if (this.nodes[lhsId] === undefined && this.groups[lhsId] === undefined)
        throw Error(
          `The left-hand id [${lhsId}] does not yet exist. Please create the service/group before declaring an edge to it.`,
        );
      if (this.nodes[rhsId] === undefined && this.groups[rhsId] === undefined)
        throw Error(
          `The right-hand id [${rhsId}] does not yet exist. Please create the service/group before declaring an edge to it.`,
        );
      let architectureDiagramQ4EWVU46Binding47 = this.nodes[lhsId].in,
        architectureDiagramQ4EWVU46Binding48 = this.nodes[rhsId].in;
      if (
        lhsGroup &&
        architectureDiagramQ4EWVU46Binding47 &&
        architectureDiagramQ4EWVU46Binding48 &&
        architectureDiagramQ4EWVU46Binding47 ==
          architectureDiagramQ4EWVU46Binding48
      )
        throw Error(
          `The left-hand id [${lhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`,
        );
      if (
        rhsGroup &&
        architectureDiagramQ4EWVU46Binding47 &&
        architectureDiagramQ4EWVU46Binding48 &&
        architectureDiagramQ4EWVU46Binding47 ==
          architectureDiagramQ4EWVU46Binding48
      )
        throw Error(
          `The right-hand id [${rhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`,
        );
      let architectureDiagramQ4EWVU46Binding49 = {
        lhsId,
        lhsDir,
        lhsInto,
        lhsGroup,
        rhsId,
        rhsDir,
        rhsInto,
        rhsGroup,
        title,
      };
      this.edges.push(architectureDiagramQ4EWVU46Binding49);
      this.nodes[lhsId] &&
        this.nodes[rhsId] &&
        (this.nodes[lhsId].edges.push(this.edges[this.edges.length - 1]),
        this.nodes[rhsId].edges.push(this.edges[this.edges.length - 1]));
    }
    getEdges() {
      return this.edges;
    }
    getDataStructures() {
      if (this.dataStructures === undefined) {
        let architectureDiagramQ4EWVU46Binding50 = {},
          architectureDiagramQ4EWVU46Binding51 = Object.entries(
            this.nodes,
          ).reduce(
            (
              accumulator,
              [
                architectureDiagramQ4EWVU46Input34,
                architectureDiagramQ4EWVU46Input35,
              ],
            ) => (
              (accumulator[architectureDiagramQ4EWVU46Input34] =
                architectureDiagramQ4EWVU46Input35.edges.reduce(
                  (_accumulator, current) => {
                    let architectureDiagramQ4EWVU46Binding98 = this.getNode(
                        current.lhsId,
                      )?.in,
                      architectureDiagramQ4EWVU46Binding99 = this.getNode(
                        current.rhsId,
                      )?.in;
                    if (
                      architectureDiagramQ4EWVU46Binding98 &&
                      architectureDiagramQ4EWVU46Binding99 &&
                      architectureDiagramQ4EWVU46Binding98 !==
                        architectureDiagramQ4EWVU46Binding99
                    ) {
                      let architectureDiagramQ4EWVU46Binding147 =
                        architectureDiagramQ4EWVU46Binding15(
                          current.lhsDir,
                          current.rhsDir,
                        );
                      architectureDiagramQ4EWVU46Binding147 !== "bend" &&
                        ((architectureDiagramQ4EWVU46Binding50[
                          architectureDiagramQ4EWVU46Binding98
                        ] ??= {}),
                        (architectureDiagramQ4EWVU46Binding50[
                          architectureDiagramQ4EWVU46Binding98
                        ][architectureDiagramQ4EWVU46Binding99] =
                          architectureDiagramQ4EWVU46Binding147),
                        (architectureDiagramQ4EWVU46Binding50[
                          architectureDiagramQ4EWVU46Binding99
                        ] ??= {}),
                        (architectureDiagramQ4EWVU46Binding50[
                          architectureDiagramQ4EWVU46Binding99
                        ][architectureDiagramQ4EWVU46Binding98] =
                          architectureDiagramQ4EWVU46Binding147));
                    }
                    if (current.lhsId === architectureDiagramQ4EWVU46Input34) {
                      let architectureDiagramQ4EWVU46Binding157 =
                        architectureDiagramQ4EWVU46Binding12(
                          current.lhsDir,
                          current.rhsDir,
                        );
                      architectureDiagramQ4EWVU46Binding157 &&
                        (_accumulator[architectureDiagramQ4EWVU46Binding157] =
                          current.rhsId);
                    } else {
                      let architectureDiagramQ4EWVU46Binding158 =
                        architectureDiagramQ4EWVU46Binding12(
                          current.rhsDir,
                          current.lhsDir,
                        );
                      architectureDiagramQ4EWVU46Binding158 &&
                        (_accumulator[architectureDiagramQ4EWVU46Binding158] =
                          current.lhsId);
                    }
                    return _accumulator;
                  },
                  {},
                )),
              accumulator
            ),
            {},
          ),
          architectureDiagramQ4EWVU46Binding52 = Object.keys(
            architectureDiagramQ4EWVU46Binding51,
          )[0],
          architectureDiagramQ4EWVU46Binding53 = {
            [architectureDiagramQ4EWVU46Binding52]: 1,
          },
          architectureDiagramQ4EWVU46Binding54 = Object.keys(
            architectureDiagramQ4EWVU46Binding51,
          ).reduce(
            (accumulator, current) =>
              current === architectureDiagramQ4EWVU46Binding52
                ? accumulator
                : {
                    ...accumulator,
                    [current]: 1,
                  },
            {},
          ),
          architectureDiagramQ4EWVU46Binding55 = chunkAGHRB4JFN(
            (architectureDiagramQ4EWVU46Input45) => {
              let architectureDiagramQ4EWVU46Binding115 = {
                  [architectureDiagramQ4EWVU46Input45]: [0, 0],
                },
                architectureDiagramQ4EWVU46Binding116 = [
                  architectureDiagramQ4EWVU46Input45,
                ];
              for (; architectureDiagramQ4EWVU46Binding116.length > 0; ) {
                let architectureDiagramQ4EWVU46Binding128 =
                  architectureDiagramQ4EWVU46Binding116.shift();
                if (architectureDiagramQ4EWVU46Binding128) {
                  architectureDiagramQ4EWVU46Binding53[
                    architectureDiagramQ4EWVU46Binding128
                  ] = 1;
                  delete architectureDiagramQ4EWVU46Binding54[
                    architectureDiagramQ4EWVU46Binding128
                  ];
                  let architectureDiagramQ4EWVU46Binding141 =
                      architectureDiagramQ4EWVU46Binding51[
                        architectureDiagramQ4EWVU46Binding128
                      ],
                    [
                      architectureDiagramQ4EWVU46Binding142,
                      architectureDiagramQ4EWVU46Binding143,
                    ] =
                      architectureDiagramQ4EWVU46Binding115[
                        architectureDiagramQ4EWVU46Binding128
                      ];
                  Object.entries(architectureDiagramQ4EWVU46Binding141).forEach(
                    ([
                      architectureDiagramQ4EWVU46Input75,
                      architectureDiagramQ4EWVU46Input76,
                    ]) => {
                      architectureDiagramQ4EWVU46Binding53[
                        architectureDiagramQ4EWVU46Input76
                      ] ||
                        ((architectureDiagramQ4EWVU46Binding115[
                          architectureDiagramQ4EWVU46Input76
                        ] = architectureDiagramQ4EWVU46Binding13(
                          [
                            architectureDiagramQ4EWVU46Binding142,
                            architectureDiagramQ4EWVU46Binding143,
                          ],
                          architectureDiagramQ4EWVU46Input75,
                        )),
                        architectureDiagramQ4EWVU46Binding116.push(
                          architectureDiagramQ4EWVU46Input76,
                        ));
                    },
                  );
                }
              }
              return architectureDiagramQ4EWVU46Binding115;
            },
            "BFS",
          ),
          architectureDiagramQ4EWVU46Binding56 = [
            architectureDiagramQ4EWVU46Binding55(
              architectureDiagramQ4EWVU46Binding52,
            ),
          ];
        for (; Object.keys(architectureDiagramQ4EWVU46Binding54).length > 0; )
          architectureDiagramQ4EWVU46Binding56.push(
            architectureDiagramQ4EWVU46Binding55(
              Object.keys(architectureDiagramQ4EWVU46Binding54)[0],
            ),
          );
        this.dataStructures = {
          adjList: architectureDiagramQ4EWVU46Binding51,
          spatialMaps: architectureDiagramQ4EWVU46Binding56,
          groupAlignments: architectureDiagramQ4EWVU46Binding50,
        };
      }
      return this.dataStructures;
    }
    setElementForId(
      architectureDiagramQ4EWVU46Input88,
      architectureDiagramQ4EWVU46Input89,
    ) {
      this.elements[architectureDiagramQ4EWVU46Input88] =
        architectureDiagramQ4EWVU46Input89;
    }
    getElementById(architectureDiagramQ4EWVU46Input90) {
      return this.elements[architectureDiagramQ4EWVU46Input90];
    }
    getConfig() {
      return chunk5PVQY5BWR({
        ...architectureDiagramQ4EWVU46Binding20,
        ...chunkICPOFSXXY().architecture,
      });
    }
    getConfigField(architectureDiagramQ4EWVU46Input87) {
      return this.getConfig()[architectureDiagramQ4EWVU46Input87];
    }
  };
  architectureDiagramQ4EWVU46Binding22 = chunkAGHRB4JFN(
    (
      architectureDiagramQ4EWVU46Input60,
      architectureDiagramQ4EWVU46Input61,
    ) => {
      chunk4BX2VUABN(
        architectureDiagramQ4EWVU46Input60,
        architectureDiagramQ4EWVU46Input61,
      );
      architectureDiagramQ4EWVU46Input60.groups.map((item) =>
        architectureDiagramQ4EWVU46Input61.addGroup(item),
      );
      architectureDiagramQ4EWVU46Input60.services.map((item) =>
        architectureDiagramQ4EWVU46Input61.addService({
          ...item,
          type: "service",
        }),
      );
      architectureDiagramQ4EWVU46Input60.junctions.map((item) =>
        architectureDiagramQ4EWVU46Input61.addJunction({
          ...item,
          type: "junction",
        }),
      );
      architectureDiagramQ4EWVU46Input60.edges.map((item) =>
        architectureDiagramQ4EWVU46Input61.addEdge(item),
      );
    },
    "populateDb",
  );
  architectureDiagramQ4EWVU46Binding23 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (architectureDiagramQ4EWVU46Input46) => {
      let architectureDiagramQ4EWVU46Binding126 = await mermaidParserCoreN(
        "architecture",
        architectureDiagramQ4EWVU46Input46,
      );
      chunkAGHRB4JFI.debug(architectureDiagramQ4EWVU46Binding126);
      let architectureDiagramQ4EWVU46Binding127 =
        architectureDiagramQ4EWVU46Binding23.parser?.yy;
      if (
        !(
          architectureDiagramQ4EWVU46Binding127 instanceof
          architectureDiagramQ4EWVU46Binding21
        )
      )
        throw Error(
          "parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
        );
      architectureDiagramQ4EWVU46Binding22(
        architectureDiagramQ4EWVU46Binding126,
        architectureDiagramQ4EWVU46Binding127,
      );
    }, "parse"),
  };
  architectureDiagramQ4EWVU46Binding24 = chunkAGHRB4JFN(
    (architectureDiagramQ4EWVU46Input40) => `
  .edge {
    stroke-width: ${architectureDiagramQ4EWVU46Input40.archEdgeWidth};
    stroke: ${architectureDiagramQ4EWVU46Input40.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${architectureDiagramQ4EWVU46Input40.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${architectureDiagramQ4EWVU46Input40.archGroupBorderColor};
    stroke-width: ${architectureDiagramQ4EWVU46Input40.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`,
    "getStyles",
  );
  architectureDiagramQ4EWVU46Binding25 = chunkAGHRB4JFN(
    (architectureDiagramQ4EWVU46Input72) =>
      `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${architectureDiagramQ4EWVU46Input72}</g>`,
    "wrapIcon",
  );
  $ = {
    prefix: "mermaid-architecture",
    height: 80,
    width: 80,
    icons: {
      database: {
        body: architectureDiagramQ4EWVU46Binding25(
          '<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      server: {
        body: architectureDiagramQ4EWVU46Binding25(
          '<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>',
        ),
      },
      disk: {
        body: architectureDiagramQ4EWVU46Binding25(
          '<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>',
        ),
      },
      internet: {
        body: architectureDiagramQ4EWVU46Binding25(
          '<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      cloud: {
        body: architectureDiagramQ4EWVU46Binding25(
          '<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      unknown: chunkU2HBQHQKO,
      blank: {
        body: architectureDiagramQ4EWVU46Binding25(""),
      },
    },
  };
  _e = chunkAGHRB4JFN(async function (
    architectureDiagramQ4EWVU46Input7,
    architectureDiagramQ4EWVU46Input8,
    architectureDiagramQ4EWVU46Input9,
    architectureDiagramQ4EWVU46Input10,
  ) {
    let architectureDiagramQ4EWVU46Binding33 =
        architectureDiagramQ4EWVU46Input9.getConfigField("padding"),
      architectureDiagramQ4EWVU46Binding34 =
        architectureDiagramQ4EWVU46Input9.getConfigField("iconSize"),
      architectureDiagramQ4EWVU46Binding35 =
        architectureDiagramQ4EWVU46Binding34 / 2,
      architectureDiagramQ4EWVU46Binding36 =
        architectureDiagramQ4EWVU46Binding34 / 6,
      architectureDiagramQ4EWVU46Binding37 =
        architectureDiagramQ4EWVU46Binding36 / 2;
    await Promise.all(
      architectureDiagramQ4EWVU46Input8.edges().map(async (item) => {
        let {
            source,
            sourceDir,
            sourceArrow,
            sourceGroup,
            target,
            targetDir,
            targetArrow,
            targetGroup,
            label,
          } = architectureDiagramQ4EWVU46Binding18(item),
          {
            x: architectureDiagramQ4EWVU46Binding38,
            y: architectureDiagramQ4EWVU46Binding39,
          } = item[0].sourceEndpoint(),
          { x: _x, y } = item[0].midpoint(),
          { x, y: _y } = item[0].targetEndpoint(),
          architectureDiagramQ4EWVU46Binding40 =
            architectureDiagramQ4EWVU46Binding33 + 4;
        if (
          (sourceGroup &&
            (architectureDiagramQ4EWVU46Binding7(sourceDir)
              ? (architectureDiagramQ4EWVU46Binding38 +=
                  sourceDir === "L"
                    ? -architectureDiagramQ4EWVU46Binding40
                    : architectureDiagramQ4EWVU46Binding40)
              : (architectureDiagramQ4EWVU46Binding39 +=
                  sourceDir === "T"
                    ? -architectureDiagramQ4EWVU46Binding40
                    : architectureDiagramQ4EWVU46Binding40 + 18)),
          targetGroup &&
            (architectureDiagramQ4EWVU46Binding7(targetDir)
              ? (x +=
                  targetDir === "L"
                    ? -architectureDiagramQ4EWVU46Binding40
                    : architectureDiagramQ4EWVU46Binding40)
              : (_y +=
                  targetDir === "T"
                    ? -architectureDiagramQ4EWVU46Binding40
                    : architectureDiagramQ4EWVU46Binding40 + 18)),
          !sourceGroup &&
            architectureDiagramQ4EWVU46Input9.getNode(source)?.type ===
              "junction" &&
            (architectureDiagramQ4EWVU46Binding7(sourceDir)
              ? (architectureDiagramQ4EWVU46Binding38 +=
                  sourceDir === "L"
                    ? architectureDiagramQ4EWVU46Binding35
                    : -architectureDiagramQ4EWVU46Binding35)
              : (architectureDiagramQ4EWVU46Binding39 +=
                  sourceDir === "T"
                    ? architectureDiagramQ4EWVU46Binding35
                    : -architectureDiagramQ4EWVU46Binding35)),
          !targetGroup &&
            architectureDiagramQ4EWVU46Input9.getNode(target)?.type ===
              "junction" &&
            (architectureDiagramQ4EWVU46Binding7(targetDir)
              ? (x +=
                  targetDir === "L"
                    ? architectureDiagramQ4EWVU46Binding35
                    : -architectureDiagramQ4EWVU46Binding35)
              : (_y +=
                  targetDir === "T"
                    ? architectureDiagramQ4EWVU46Binding35
                    : -architectureDiagramQ4EWVU46Binding35)),
          item[0]._private.rscratch)
        ) {
          let architectureDiagramQ4EWVU46Binding41 =
            architectureDiagramQ4EWVU46Input7.insert("g");
          if (
            (architectureDiagramQ4EWVU46Binding41
              .insert("path")
              .attr(
                "d",
                `M ${architectureDiagramQ4EWVU46Binding38},${architectureDiagramQ4EWVU46Binding39} L ${_x},${y} L${x},${_y} `,
              )
              .attr("class", "edge")
              .attr(
                "id",
                `${architectureDiagramQ4EWVU46Input10}-${chunk5PVQY5BWS(
                  source,
                  target,
                  {
                    prefix: "L",
                  },
                )}`,
              ),
            sourceArrow)
          ) {
            let architectureDiagramQ4EWVU46Binding137 =
                architectureDiagramQ4EWVU46Binding7(sourceDir)
                  ? architectureDiagramQ4EWVU46Binding4[sourceDir](
                      architectureDiagramQ4EWVU46Binding38,
                      architectureDiagramQ4EWVU46Binding36,
                    )
                  : architectureDiagramQ4EWVU46Binding38 -
                    architectureDiagramQ4EWVU46Binding37,
              architectureDiagramQ4EWVU46Binding138 =
                architectureDiagramQ4EWVU46Binding8(sourceDir)
                  ? architectureDiagramQ4EWVU46Binding4[sourceDir](
                      architectureDiagramQ4EWVU46Binding39,
                      architectureDiagramQ4EWVU46Binding36,
                    )
                  : architectureDiagramQ4EWVU46Binding39 -
                    architectureDiagramQ4EWVU46Binding37;
            architectureDiagramQ4EWVU46Binding41
              .insert("polygon")
              .attr(
                "points",
                architectureDiagramQ4EWVU46Binding3[sourceDir](
                  architectureDiagramQ4EWVU46Binding36,
                ),
              )
              .attr(
                "transform",
                `translate(${architectureDiagramQ4EWVU46Binding137},${architectureDiagramQ4EWVU46Binding138})`,
              )
              .attr("class", "arrow");
          }
          if (targetArrow) {
            let architectureDiagramQ4EWVU46Binding139 =
                architectureDiagramQ4EWVU46Binding7(targetDir)
                  ? architectureDiagramQ4EWVU46Binding4[targetDir](
                      x,
                      architectureDiagramQ4EWVU46Binding36,
                    )
                  : x - architectureDiagramQ4EWVU46Binding37,
              architectureDiagramQ4EWVU46Binding140 =
                architectureDiagramQ4EWVU46Binding8(targetDir)
                  ? architectureDiagramQ4EWVU46Binding4[targetDir](
                      _y,
                      architectureDiagramQ4EWVU46Binding36,
                    )
                  : _y - architectureDiagramQ4EWVU46Binding37;
            architectureDiagramQ4EWVU46Binding41
              .insert("polygon")
              .attr(
                "points",
                architectureDiagramQ4EWVU46Binding3[targetDir](
                  architectureDiagramQ4EWVU46Binding36,
                ),
              )
              .attr(
                "transform",
                `translate(${architectureDiagramQ4EWVU46Binding139},${architectureDiagramQ4EWVU46Binding140})`,
              )
              .attr("class", "arrow");
          }
          if (label) {
            let architectureDiagramQ4EWVU46Binding57 =
                architectureDiagramQ4EWVU46Binding9(sourceDir, targetDir)
                  ? "XY"
                  : architectureDiagramQ4EWVU46Binding7(sourceDir)
                    ? "X"
                    : "Y",
              architectureDiagramQ4EWVU46Binding58 = 0;
            architectureDiagramQ4EWVU46Binding58 =
              architectureDiagramQ4EWVU46Binding57 === "X"
                ? Math.abs(architectureDiagramQ4EWVU46Binding38 - x)
                : architectureDiagramQ4EWVU46Binding57 === "Y"
                  ? Math.abs(architectureDiagramQ4EWVU46Binding39 - _y) / 1.5
                  : Math.abs(architectureDiagramQ4EWVU46Binding38 - x) / 2;
            let architectureDiagramQ4EWVU46Binding59 =
              architectureDiagramQ4EWVU46Binding41.append("g");
            if (
              (await chunkU2HBQHQKN(
                architectureDiagramQ4EWVU46Binding59,
                label,
                {
                  useHtmlLabels: false,
                  width: architectureDiagramQ4EWVU46Binding58,
                  classes: "architecture-service-label",
                },
                chunkICPOFSXXB(),
              ),
              architectureDiagramQ4EWVU46Binding59
                .attr("dy", "1em")
                .attr("alignment-baseline", "middle")
                .attr("dominant-baseline", "middle")
                .attr("text-anchor", "middle"),
              architectureDiagramQ4EWVU46Binding57 === "X")
            )
              architectureDiagramQ4EWVU46Binding59.attr(
                "transform",
                "translate(" + _x + ", " + y + ")",
              );
            else if (architectureDiagramQ4EWVU46Binding57 === "Y")
              architectureDiagramQ4EWVU46Binding59.attr(
                "transform",
                "translate(" + _x + ", " + y + ") rotate(-90)",
              );
            else if (architectureDiagramQ4EWVU46Binding57 === "XY") {
              let architectureDiagramQ4EWVU46Binding102 =
                architectureDiagramQ4EWVU46Binding12(sourceDir, targetDir);
              if (
                architectureDiagramQ4EWVU46Binding102 &&
                architectureDiagramQ4EWVU46Binding10(
                  architectureDiagramQ4EWVU46Binding102,
                )
              ) {
                let architectureDiagramQ4EWVU46Binding104 =
                    architectureDiagramQ4EWVU46Binding59
                      .node()
                      .getBoundingClientRect(),
                  [
                    architectureDiagramQ4EWVU46Binding105,
                    architectureDiagramQ4EWVU46Binding106,
                  ] = architectureDiagramQ4EWVU46Binding14(
                    architectureDiagramQ4EWVU46Binding102,
                  );
                architectureDiagramQ4EWVU46Binding59
                  .attr("dominant-baseline", "auto")
                  .attr(
                    "transform",
                    `rotate(${-1 * architectureDiagramQ4EWVU46Binding105 * architectureDiagramQ4EWVU46Binding106 * 45})`,
                  );
                let architectureDiagramQ4EWVU46Binding107 =
                  architectureDiagramQ4EWVU46Binding59
                    .node()
                    .getBoundingClientRect();
                architectureDiagramQ4EWVU46Binding59.attr(
                  "transform",
                  `
                translate(${_x}, ${y - architectureDiagramQ4EWVU46Binding104.height / 2})
                translate(${(architectureDiagramQ4EWVU46Binding105 * architectureDiagramQ4EWVU46Binding107.width) / 2}, ${(architectureDiagramQ4EWVU46Binding106 * architectureDiagramQ4EWVU46Binding107.height) / 2})
                rotate(${-1 * architectureDiagramQ4EWVU46Binding105 * architectureDiagramQ4EWVU46Binding106 * 45}, 0, ${architectureDiagramQ4EWVU46Binding104.height / 2})
              `,
                );
              }
            }
          }
        }
      }),
    );
  }, "drawEdges");
  architectureDiagramQ4EWVU46Binding26 = chunkAGHRB4JFN(async function (
    architectureDiagramQ4EWVU46Input15,
    architectureDiagramQ4EWVU46Input16,
    architectureDiagramQ4EWVU46Input17,
    architectureDiagramQ4EWVU46Input18,
  ) {
    let architectureDiagramQ4EWVU46Binding60 =
        architectureDiagramQ4EWVU46Input17.getConfigField("padding") * 0.75,
      architectureDiagramQ4EWVU46Binding61 =
        architectureDiagramQ4EWVU46Input17.getConfigField("fontSize"),
      architectureDiagramQ4EWVU46Binding62 =
        architectureDiagramQ4EWVU46Input17.getConfigField("iconSize") / 2;
    await Promise.all(
      architectureDiagramQ4EWVU46Input16.nodes().map(async (item) => {
        let architectureDiagramQ4EWVU46Binding66 =
          architectureDiagramQ4EWVU46Binding19(item);
        if (architectureDiagramQ4EWVU46Binding66.type === "group") {
          let { h: _h, w, x1, y1 } = item.boundingBox(),
            architectureDiagramQ4EWVU46Binding67 =
              architectureDiagramQ4EWVU46Input15.append("rect");
          architectureDiagramQ4EWVU46Binding67
            .attr(
              "id",
              `${architectureDiagramQ4EWVU46Input18}-group-${architectureDiagramQ4EWVU46Binding66.id}`,
            )
            .attr("x", x1 + architectureDiagramQ4EWVU46Binding62)
            .attr("y", y1 + architectureDiagramQ4EWVU46Binding62)
            .attr("width", w)
            .attr("height", _h)
            .attr("class", "node-bkg");
          let architectureDiagramQ4EWVU46Binding68 =
              architectureDiagramQ4EWVU46Input15.append("g"),
            architectureDiagramQ4EWVU46Binding69 = x1,
            architectureDiagramQ4EWVU46Binding70 = y1;
          if (architectureDiagramQ4EWVU46Binding66.icon) {
            let architectureDiagramQ4EWVU46Binding125 =
              architectureDiagramQ4EWVU46Binding68.append("g");
            architectureDiagramQ4EWVU46Binding125.html(
              `<g>${await chunkU2HBQHQKR(
                architectureDiagramQ4EWVU46Binding66.icon,
                {
                  height: architectureDiagramQ4EWVU46Binding60,
                  width: architectureDiagramQ4EWVU46Binding60,
                  fallbackPrefix: $.prefix,
                },
              )}</g>`,
            );
            architectureDiagramQ4EWVU46Binding125.attr(
              "transform",
              "translate(" +
                (architectureDiagramQ4EWVU46Binding69 +
                  architectureDiagramQ4EWVU46Binding62 +
                  1) +
                ", " +
                (architectureDiagramQ4EWVU46Binding70 +
                  architectureDiagramQ4EWVU46Binding62 +
                  1) +
                ")",
            );
            architectureDiagramQ4EWVU46Binding69 +=
              architectureDiagramQ4EWVU46Binding60;
            architectureDiagramQ4EWVU46Binding70 +=
              architectureDiagramQ4EWVU46Binding61 / 2 - 1 - 2;
          }
          if (architectureDiagramQ4EWVU46Binding66.label) {
            let architectureDiagramQ4EWVU46Binding103 =
              architectureDiagramQ4EWVU46Binding68.append("g");
            await chunkU2HBQHQKN(
              architectureDiagramQ4EWVU46Binding103,
              architectureDiagramQ4EWVU46Binding66.label,
              {
                useHtmlLabels: false,
                width: w,
                classes: "architecture-service-label",
              },
              chunkICPOFSXXB(),
            );
            architectureDiagramQ4EWVU46Binding103
              .attr("dy", "1em")
              .attr("alignment-baseline", "middle")
              .attr("dominant-baseline", "start")
              .attr("text-anchor", "start");
            architectureDiagramQ4EWVU46Binding103.attr(
              "transform",
              "translate(" +
                (architectureDiagramQ4EWVU46Binding69 +
                  architectureDiagramQ4EWVU46Binding62 +
                  4) +
                ", " +
                (architectureDiagramQ4EWVU46Binding70 +
                  architectureDiagramQ4EWVU46Binding62 +
                  2) +
                ")",
            );
          }
          architectureDiagramQ4EWVU46Input17.setElementForId(
            architectureDiagramQ4EWVU46Binding66.id,
            architectureDiagramQ4EWVU46Binding67,
          );
        }
      }),
    );
  }, "drawGroups");
  architectureDiagramQ4EWVU46Binding27 = chunkAGHRB4JFN(async function (
    architectureDiagramQ4EWVU46Input11,
    architectureDiagramQ4EWVU46Input12,
    architectureDiagramQ4EWVU46Input13,
    architectureDiagramQ4EWVU46Input14,
  ) {
    let architectureDiagramQ4EWVU46Binding42 = chunkICPOFSXXB();
    for (let architectureDiagramQ4EWVU46Binding43 of architectureDiagramQ4EWVU46Input13) {
      let architectureDiagramQ4EWVU46Binding44 =
          architectureDiagramQ4EWVU46Input12.append("g"),
        architectureDiagramQ4EWVU46Binding45 =
          architectureDiagramQ4EWVU46Input11.getConfigField("iconSize");
      if (architectureDiagramQ4EWVU46Binding43.title) {
        let architectureDiagramQ4EWVU46Binding112 =
          architectureDiagramQ4EWVU46Binding44.append("g");
        await chunkU2HBQHQKN(
          architectureDiagramQ4EWVU46Binding112,
          architectureDiagramQ4EWVU46Binding43.title,
          {
            useHtmlLabels: false,
            width: architectureDiagramQ4EWVU46Binding45 * 1.5,
            classes: "architecture-service-label",
          },
          architectureDiagramQ4EWVU46Binding42,
        );
        architectureDiagramQ4EWVU46Binding112
          .attr("dy", "1em")
          .attr("alignment-baseline", "middle")
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle");
        architectureDiagramQ4EWVU46Binding112.attr(
          "transform",
          "translate(" +
            architectureDiagramQ4EWVU46Binding45 / 2 +
            ", " +
            architectureDiagramQ4EWVU46Binding45 +
            ")",
        );
      }
      let architectureDiagramQ4EWVU46Binding46 =
        architectureDiagramQ4EWVU46Binding44.append("g");
      if (architectureDiagramQ4EWVU46Binding43.icon)
        architectureDiagramQ4EWVU46Binding46.html(
          `<g>${await chunkU2HBQHQKR(
            architectureDiagramQ4EWVU46Binding43.icon,
            {
              height: architectureDiagramQ4EWVU46Binding45,
              width: architectureDiagramQ4EWVU46Binding45,
              fallbackPrefix: $.prefix,
            },
          )}</g>`,
        );
      else if (architectureDiagramQ4EWVU46Binding43.iconText) {
        architectureDiagramQ4EWVU46Binding46.html(
          `<g>${await chunkU2HBQHQKR("blank", {
            height: architectureDiagramQ4EWVU46Binding45,
            width: architectureDiagramQ4EWVU46Binding45,
            fallbackPrefix: $.prefix,
          })}</g>`,
        );
        let architectureDiagramQ4EWVU46Binding92 =
            architectureDiagramQ4EWVU46Binding46
              .append("g")
              .append("foreignObject")
              .attr("width", architectureDiagramQ4EWVU46Binding45)
              .attr("height", architectureDiagramQ4EWVU46Binding45)
              .append("div")
              .attr("class", "node-icon-text")
              .attr(
                "style",
                `height: ${architectureDiagramQ4EWVU46Binding45}px;`,
              )
              .append("div")
              .html(
                chunkICPOFSXXR(
                  architectureDiagramQ4EWVU46Binding43.iconText,
                  architectureDiagramQ4EWVU46Binding42,
                ),
              ),
          architectureDiagramQ4EWVU46Binding93 =
            parseInt(
              window
                .getComputedStyle(
                  architectureDiagramQ4EWVU46Binding92.node(),
                  null,
                )
                .getPropertyValue("font-size")
                .replace(/\D/g, ""),
            ) ?? 16;
        architectureDiagramQ4EWVU46Binding92.attr(
          "style",
          `-webkit-line-clamp: ${Math.floor((architectureDiagramQ4EWVU46Binding45 - 2) / architectureDiagramQ4EWVU46Binding93)};`,
        );
      } else
        architectureDiagramQ4EWVU46Binding46
          .append("path")
          .attr("class", "node-bkg")
          .attr(
            "id",
            `${architectureDiagramQ4EWVU46Input14}-node-${architectureDiagramQ4EWVU46Binding43.id}`,
          )
          .attr(
            "d",
            `M0,${architectureDiagramQ4EWVU46Binding45} V5 Q0,0 5,0 H${architectureDiagramQ4EWVU46Binding45 - 5} Q${architectureDiagramQ4EWVU46Binding45},0 ${architectureDiagramQ4EWVU46Binding45},5 V${architectureDiagramQ4EWVU46Binding45} Z`,
          );
      architectureDiagramQ4EWVU46Binding44
        .attr(
          "id",
          `${architectureDiagramQ4EWVU46Input14}-service-${architectureDiagramQ4EWVU46Binding43.id}`,
        )
        .attr("class", "architecture-service");
      let { width, height } = architectureDiagramQ4EWVU46Binding44
        .node()
        .getBBox();
      architectureDiagramQ4EWVU46Binding43.width = width;
      architectureDiagramQ4EWVU46Binding43.height = height;
      architectureDiagramQ4EWVU46Input11.setElementForId(
        architectureDiagramQ4EWVU46Binding43.id,
        architectureDiagramQ4EWVU46Binding44,
      );
    }
    return 0;
  }, "drawServices");
  be = chunkAGHRB4JFN(function (
    architectureDiagramQ4EWVU46Input41,
    architectureDiagramQ4EWVU46Input42,
    architectureDiagramQ4EWVU46Input43,
    architectureDiagramQ4EWVU46Input44,
  ) {
    architectureDiagramQ4EWVU46Input43.forEach((item) => {
      let architectureDiagramQ4EWVU46Binding118 =
          architectureDiagramQ4EWVU46Input42.append("g"),
        architectureDiagramQ4EWVU46Binding119 =
          architectureDiagramQ4EWVU46Input41.getConfigField("iconSize");
      architectureDiagramQ4EWVU46Binding118
        .append("g")
        .append("rect")
        .attr("id", `${architectureDiagramQ4EWVU46Input44}-node-${item.id}`)
        .attr("fill-opacity", "0")
        .attr("width", architectureDiagramQ4EWVU46Binding119)
        .attr("height", architectureDiagramQ4EWVU46Binding119);
      architectureDiagramQ4EWVU46Binding118.attr(
        "class",
        "architecture-junction",
      );
      let { width, height } =
        architectureDiagramQ4EWVU46Binding118._groups[0][0].getBBox();
      architectureDiagramQ4EWVU46Binding118.width = width;
      architectureDiagramQ4EWVU46Binding118.height = height;
      architectureDiagramQ4EWVU46Input41.setElementForId(
        item.id,
        architectureDiagramQ4EWVU46Binding118,
      );
    });
  }, "drawJunctions");
  chunkU2HBQHQKA([
    {
      name: $.prefix,
      icons: $,
    },
  ]);
  cytoscape.use(architectureDiagramQ4EWVU46Binding1.default);
  chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper1, "addServices");
  chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper2, "addJunctions");
  chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper3, "positionNodes");
  chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper4, "addGroups");
  chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper5, "addEdges");
  chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper6, "getAlignments");
  chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper7, "getRelativeConstraints");
  chunkAGHRB4JFN(architectureDiagramQ4EWVU46Helper8, "layoutArchitecture");
  ArchitectureDiagramQ4EWVU46 = {
    parser: architectureDiagramQ4EWVU46Binding23,
    get db() {
      return new architectureDiagramQ4EWVU46Binding21();
    },
    renderer: {
      draw: chunkAGHRB4JFN(
        async (
          architectureDiagramQ4EWVU46Input26,
          architectureDiagramQ4EWVU46Input27,
          architectureDiagramQ4EWVU46Input28,
          architectureDiagramQ4EWVU46Input29,
        ) => {
          let architectureDiagramQ4EWVU46Binding76 =
            architectureDiagramQ4EWVU46Input29.db;
          architectureDiagramQ4EWVU46Binding76.setDiagramId(
            architectureDiagramQ4EWVU46Input27,
          );
          let architectureDiagramQ4EWVU46Binding77 =
              architectureDiagramQ4EWVU46Binding76.getServices(),
            architectureDiagramQ4EWVU46Binding78 =
              architectureDiagramQ4EWVU46Binding76.getJunctions(),
            architectureDiagramQ4EWVU46Binding79 =
              architectureDiagramQ4EWVU46Binding76.getGroups(),
            architectureDiagramQ4EWVU46Binding80 =
              architectureDiagramQ4EWVU46Binding76.getEdges(),
            architectureDiagramQ4EWVU46Binding81 =
              architectureDiagramQ4EWVU46Binding76.getDataStructures(),
            architectureDiagramQ4EWVU46Binding82 = chunk426QAEUCN(
              architectureDiagramQ4EWVU46Input27,
            ),
            architectureDiagramQ4EWVU46Binding83 =
              architectureDiagramQ4EWVU46Binding82.append("g");
          architectureDiagramQ4EWVU46Binding83.attr(
            "class",
            "architecture-edges",
          );
          let architectureDiagramQ4EWVU46Binding84 =
            architectureDiagramQ4EWVU46Binding82.append("g");
          architectureDiagramQ4EWVU46Binding84.attr(
            "class",
            "architecture-services",
          );
          let architectureDiagramQ4EWVU46Binding85 =
            architectureDiagramQ4EWVU46Binding82.append("g");
          architectureDiagramQ4EWVU46Binding85.attr(
            "class",
            "architecture-groups",
          );
          await architectureDiagramQ4EWVU46Binding27(
            architectureDiagramQ4EWVU46Binding76,
            architectureDiagramQ4EWVU46Binding84,
            architectureDiagramQ4EWVU46Binding77,
            architectureDiagramQ4EWVU46Input27,
          );
          be(
            architectureDiagramQ4EWVU46Binding76,
            architectureDiagramQ4EWVU46Binding84,
            architectureDiagramQ4EWVU46Binding78,
            architectureDiagramQ4EWVU46Input27,
          );
          let architectureDiagramQ4EWVU46Binding86 =
            await architectureDiagramQ4EWVU46Helper8(
              architectureDiagramQ4EWVU46Binding77,
              architectureDiagramQ4EWVU46Binding78,
              architectureDiagramQ4EWVU46Binding79,
              architectureDiagramQ4EWVU46Binding80,
              architectureDiagramQ4EWVU46Binding76,
              architectureDiagramQ4EWVU46Binding81,
            );
          await _e(
            architectureDiagramQ4EWVU46Binding83,
            architectureDiagramQ4EWVU46Binding86,
            architectureDiagramQ4EWVU46Binding76,
            architectureDiagramQ4EWVU46Input27,
          );
          await architectureDiagramQ4EWVU46Binding26(
            architectureDiagramQ4EWVU46Binding85,
            architectureDiagramQ4EWVU46Binding86,
            architectureDiagramQ4EWVU46Binding76,
            architectureDiagramQ4EWVU46Input27,
          );
          architectureDiagramQ4EWVU46Helper3(
            architectureDiagramQ4EWVU46Binding76,
            architectureDiagramQ4EWVU46Binding86,
          );
          chunkICPOFSXXQ(
            undefined,
            architectureDiagramQ4EWVU46Binding82,
            architectureDiagramQ4EWVU46Binding76.getConfigField("padding"),
            architectureDiagramQ4EWVU46Binding76.getConfigField("useMaxWidth"),
          );
        },
        "draw",
      ),
    },
    styles: architectureDiagramQ4EWVU46Binding24,
  };
})();
export { ArchitectureDiagramQ4EWVU46 as diagram };
