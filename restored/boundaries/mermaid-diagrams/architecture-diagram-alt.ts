// Restored from ref/webview/assets/architectureDiagram-VXUJARFQ-C77S_aKp.js
// Mermaid architecture diagram definition (alt).
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
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt-dup";
import {
  B as chunkABZYJK2DB,
  C as chunkABZYJK2DC,
  K as chunkABZYJK2DK,
  L as chunkABZYJK2DL,
  V as chunkABZYJK2DV,
  W as chunkABZYJK2DW,
  _ as chunkABZYJK2DUnderscore,
  a as chunkABZYJK2DA,
  b as _chunkABZYJK2DB,
  d as chunkABZYJK2DD,
  k as _chunkABZYJK2DK,
  v as _chunkABZYJK2DV,
  y as chunkABZYJK2DY,
} from "../../diagrams/mermaid-config";
import {
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import { selectSvgElement as chunkEXTU4WIEN, initSelectSvgElementChunk as chunkEXTU4WIET } from "../../diagrams/select-svg-element";
import {
  chunkS3R3BYOJR,
  chunkS3R3BYOJS,
  chunkS3R3BYOJU,
} from "./mermaid-common-utils";
import {
  chunkJA3XYJ7ZI as chunkJA3XYJ7ZA,
  chunkJA3XYJ7ZA as chunkJA3XYJ7ZI,
  chunkJA3XYJ7ZN,
  chunkJA3XYJ7ZR,
  chunkJA3XYJ7ZS,
} from "./mermaid-create-text";
import { populateCommonDb as chunk4BX2VUABN, initPopulateCommonDbChunk as chunk4BX2VUABT } from "../../diagrams/populate-common-db-alt";
import {
  mermaidParserCoreN,
  mermaidParserCoreT,
} from "../../diagrams/mermaid-parser-core-alt";
import cytoscape from "cytoscape";
import cytoscapeFcose from "cytoscape-fcose";
function architectureDiagramVXUJARFQHelper1(
  architectureDiagramVXUJARFQInput43,
  architectureDiagramVXUJARFQInput44,
  architectureDiagramVXUJARFQInput45,
) {
  architectureDiagramVXUJARFQInput43.forEach((item) => {
    architectureDiagramVXUJARFQInput44.add({
      group: "nodes",
      data: {
        type: "service",
        id: item.id,
        icon: item.icon,
        label: item.title,
        parent: item.in,
        width: architectureDiagramVXUJARFQInput45.getConfigField("iconSize"),
        height: architectureDiagramVXUJARFQInput45.getConfigField("iconSize"),
      },
      classes: "node-service",
    });
  });
}
function architectureDiagramVXUJARFQHelper2(
  architectureDiagramVXUJARFQInput51,
  architectureDiagramVXUJARFQInput52,
  architectureDiagramVXUJARFQInput53,
) {
  architectureDiagramVXUJARFQInput51.forEach((item) => {
    architectureDiagramVXUJARFQInput52.add({
      group: "nodes",
      data: {
        type: "junction",
        id: item.id,
        parent: item.in,
        width: architectureDiagramVXUJARFQInput53.getConfigField("iconSize"),
        height: architectureDiagramVXUJARFQInput53.getConfigField("iconSize"),
      },
      classes: "node-junction",
    });
  });
}
function architectureDiagramVXUJARFQHelper3(
  architectureDiagramVXUJARFQInput54,
  architectureDiagramVXUJARFQInput55,
) {
  architectureDiagramVXUJARFQInput55.nodes().map((item) => {
    let architectureDiagramVXUJARFQBinding148 =
      architectureDiagramVXUJARFQBinding19(item);
    architectureDiagramVXUJARFQBinding148.type !== "group" &&
      ((architectureDiagramVXUJARFQBinding148.x = item.position().x),
      (architectureDiagramVXUJARFQBinding148.y = item.position().y),
      architectureDiagramVXUJARFQInput54
        .getElementById(architectureDiagramVXUJARFQBinding148.id)
        .attr(
          "transform",
          "translate(" +
            (architectureDiagramVXUJARFQBinding148.x || 0) +
            "," +
            (architectureDiagramVXUJARFQBinding148.y || 0) +
            ")",
        ));
  });
}
function architectureDiagramVXUJARFQHelper4(
  architectureDiagramVXUJARFQInput62,
  architectureDiagramVXUJARFQInput63,
) {
  architectureDiagramVXUJARFQInput62.forEach((item) => {
    architectureDiagramVXUJARFQInput63.add({
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
function architectureDiagramVXUJARFQHelper5(
  architectureDiagramVXUJARFQInput19,
  architectureDiagramVXUJARFQInput20,
) {
  architectureDiagramVXUJARFQInput19.forEach((item) => {
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
      architectureDiagramVXUJARFQBinding74 =
        architectureDiagramVXUJARFQBinding9(item.lhsDir, item.rhsDir)
          ? "segments"
          : "straight",
      architectureDiagramVXUJARFQBinding75 = {
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
    architectureDiagramVXUJARFQInput20.add({
      group: "edges",
      data: architectureDiagramVXUJARFQBinding75,
      classes: architectureDiagramVXUJARFQBinding74,
    });
  });
}
function architectureDiagramVXUJARFQHelper6(
  architectureDiagramVXUJARFQInput16,
  architectureDiagramVXUJARFQInput17,
  architectureDiagramVXUJARFQInput18,
) {
  let architectureDiagramVXUJARFQBinding63 = chunkAGHRB4JFN(
      (
        architectureDiagramVXUJARFQInput33,
        architectureDiagramVXUJARFQInput34,
      ) =>
        Object.entries(architectureDiagramVXUJARFQInput33).reduce(
          (
            accumulator,
            [
              architectureDiagramVXUJARFQInput35,
              architectureDiagramVXUJARFQInput36,
            ],
          ) => {
            let architectureDiagramVXUJARFQBinding100 = 0,
              architectureDiagramVXUJARFQBinding101 = Object.entries(
                architectureDiagramVXUJARFQInput36,
              );
            if (architectureDiagramVXUJARFQBinding101.length === 1)
              return (
                (accumulator[architectureDiagramVXUJARFQInput35] =
                  architectureDiagramVXUJARFQBinding101[0][1]),
                accumulator
              );
            for (
              let architectureDiagramVXUJARFQBinding110 = 0;
              architectureDiagramVXUJARFQBinding110 <
              architectureDiagramVXUJARFQBinding101.length - 1;
              architectureDiagramVXUJARFQBinding110++
            )
              for (
                let architectureDiagramVXUJARFQBinding114 =
                  architectureDiagramVXUJARFQBinding110 + 1;
                architectureDiagramVXUJARFQBinding114 <
                architectureDiagramVXUJARFQBinding101.length;
                architectureDiagramVXUJARFQBinding114++
              ) {
                let [
                    architectureDiagramVXUJARFQBinding120,
                    architectureDiagramVXUJARFQBinding121,
                  ] =
                    architectureDiagramVXUJARFQBinding101[
                      architectureDiagramVXUJARFQBinding110
                    ],
                  [
                    architectureDiagramVXUJARFQBinding122,
                    architectureDiagramVXUJARFQBinding123,
                  ] =
                    architectureDiagramVXUJARFQBinding101[
                      architectureDiagramVXUJARFQBinding114
                    ];
                if (
                  architectureDiagramVXUJARFQInput18[
                    architectureDiagramVXUJARFQBinding120
                  ]?.[architectureDiagramVXUJARFQBinding122] ===
                  architectureDiagramVXUJARFQInput34
                ) {
                  accumulator[architectureDiagramVXUJARFQInput35] ??= [];
                  accumulator[architectureDiagramVXUJARFQInput35] = [
                    ...accumulator[architectureDiagramVXUJARFQInput35],
                    ...architectureDiagramVXUJARFQBinding121,
                    ...architectureDiagramVXUJARFQBinding123,
                  ];
                } else if (
                  architectureDiagramVXUJARFQBinding120 === "default" ||
                  architectureDiagramVXUJARFQBinding122 === "default"
                ) {
                  accumulator[architectureDiagramVXUJARFQInput35] ??= [];
                  accumulator[architectureDiagramVXUJARFQInput35] = [
                    ...accumulator[architectureDiagramVXUJARFQInput35],
                    ...architectureDiagramVXUJARFQBinding121,
                    ...architectureDiagramVXUJARFQBinding123,
                  ];
                } else {
                  let architectureDiagramVXUJARFQBinding151 = `${architectureDiagramVXUJARFQInput35}-${architectureDiagramVXUJARFQBinding100++}`;
                  accumulator[architectureDiagramVXUJARFQBinding151] =
                    architectureDiagramVXUJARFQBinding121;
                  let architectureDiagramVXUJARFQBinding152 = `${architectureDiagramVXUJARFQInput35}-${architectureDiagramVXUJARFQBinding100++}`;
                  accumulator[architectureDiagramVXUJARFQBinding152] =
                    architectureDiagramVXUJARFQBinding123;
                }
              }
            return accumulator;
          },
          {},
        ),
      "flattenAlignments",
    ),
    [
      architectureDiagramVXUJARFQBinding64,
      architectureDiagramVXUJARFQBinding65,
    ] = architectureDiagramVXUJARFQInput17
      .map((item) => {
        let architectureDiagramVXUJARFQBinding108 = {},
          architectureDiagramVXUJARFQBinding109 = {};
        return (
          Object.entries(item).forEach(
            ([
              architectureDiagramVXUJARFQInput58,
              [
                architectureDiagramVXUJARFQInput59,
                architectureDiagramVXUJARFQInput60,
              ],
            ]) => {
              let architectureDiagramVXUJARFQBinding144 =
                architectureDiagramVXUJARFQInput16.getNode(
                  architectureDiagramVXUJARFQInput58,
                )?.in ?? "default";
              architectureDiagramVXUJARFQBinding108[
                architectureDiagramVXUJARFQInput60
              ] ??= {};
              architectureDiagramVXUJARFQBinding108[
                architectureDiagramVXUJARFQInput60
              ][architectureDiagramVXUJARFQBinding144] ??= [];
              architectureDiagramVXUJARFQBinding108[
                architectureDiagramVXUJARFQInput60
              ][architectureDiagramVXUJARFQBinding144].push(
                architectureDiagramVXUJARFQInput58,
              );
              architectureDiagramVXUJARFQBinding109[
                architectureDiagramVXUJARFQInput59
              ] ??= {};
              architectureDiagramVXUJARFQBinding109[
                architectureDiagramVXUJARFQInput59
              ][architectureDiagramVXUJARFQBinding144] ??= [];
              architectureDiagramVXUJARFQBinding109[
                architectureDiagramVXUJARFQInput59
              ][architectureDiagramVXUJARFQBinding144].push(
                architectureDiagramVXUJARFQInput58,
              );
            },
          ),
          {
            horiz: Object.values(
              architectureDiagramVXUJARFQBinding63(
                architectureDiagramVXUJARFQBinding108,
                "horizontal",
              ),
            ).filter((_item) => _item.length > 1),
            vert: Object.values(
              architectureDiagramVXUJARFQBinding63(
                architectureDiagramVXUJARFQBinding109,
                "vertical",
              ),
            ).filter((_item) => _item.length > 1),
          }
        );
      })
      .reduce(
        (
          [
            architectureDiagramVXUJARFQInput73,
            architectureDiagramVXUJARFQInput74,
          ],
          { horiz, vert },
        ) => [
          [...architectureDiagramVXUJARFQInput73, ...horiz],
          [...architectureDiagramVXUJARFQInput74, ...vert],
        ],
        [[], []],
      );
  return {
    horizontal: architectureDiagramVXUJARFQBinding64,
    vertical: architectureDiagramVXUJARFQBinding65,
  };
}
function architectureDiagramVXUJARFQHelper7(
  architectureDiagramVXUJARFQInput21,
  architectureDiagramVXUJARFQInput22,
) {
  let architectureDiagramVXUJARFQBinding71 = [],
    architectureDiagramVXUJARFQBinding72 = chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQInput96) =>
        `${architectureDiagramVXUJARFQInput96[0]},${architectureDiagramVXUJARFQInput96[1]}`,
      "posToStr",
    ),
    architectureDiagramVXUJARFQBinding73 = chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQInput91) =>
        architectureDiagramVXUJARFQInput91
          .split(",")
          .map((item) => parseInt(item)),
      "strToPos",
    );
  return (
    architectureDiagramVXUJARFQInput21.forEach((item) => {
      let architectureDiagramVXUJARFQBinding94 = Object.fromEntries(
          Object.entries(item).map(
            ([
              architectureDiagramVXUJARFQInput97,
              architectureDiagramVXUJARFQInput98,
            ]) => [
              architectureDiagramVXUJARFQBinding72(
                architectureDiagramVXUJARFQInput98,
              ),
              architectureDiagramVXUJARFQInput97,
            ],
          ),
        ),
        architectureDiagramVXUJARFQBinding95 = [
          architectureDiagramVXUJARFQBinding72([0, 0]),
        ],
        architectureDiagramVXUJARFQBinding96 = {},
        architectureDiagramVXUJARFQBinding97 = {
          L: [-1, 0],
          R: [1, 0],
          T: [0, 1],
          B: [0, -1],
        };
      for (; architectureDiagramVXUJARFQBinding95.length > 0; ) {
        let architectureDiagramVXUJARFQBinding111 =
          architectureDiagramVXUJARFQBinding95.shift();
        if (architectureDiagramVXUJARFQBinding111) {
          architectureDiagramVXUJARFQBinding96[
            architectureDiagramVXUJARFQBinding111
          ] = 1;
          let architectureDiagramVXUJARFQBinding117 =
            architectureDiagramVXUJARFQBinding94[
              architectureDiagramVXUJARFQBinding111
            ];
          if (architectureDiagramVXUJARFQBinding117) {
            let architectureDiagramVXUJARFQBinding124 =
              architectureDiagramVXUJARFQBinding73(
                architectureDiagramVXUJARFQBinding111,
              );
            Object.entries(architectureDiagramVXUJARFQBinding97).forEach(
              ([
                architectureDiagramVXUJARFQInput46,
                architectureDiagramVXUJARFQInput47,
              ]) => {
                let architectureDiagramVXUJARFQBinding129 =
                    architectureDiagramVXUJARFQBinding72([
                      architectureDiagramVXUJARFQBinding124[0] +
                        architectureDiagramVXUJARFQInput47[0],
                      architectureDiagramVXUJARFQBinding124[1] +
                        architectureDiagramVXUJARFQInput47[1],
                    ]),
                  architectureDiagramVXUJARFQBinding130 =
                    architectureDiagramVXUJARFQBinding94[
                      architectureDiagramVXUJARFQBinding129
                    ];
                architectureDiagramVXUJARFQBinding130 &&
                  !architectureDiagramVXUJARFQBinding96[
                    architectureDiagramVXUJARFQBinding129
                  ] &&
                  (architectureDiagramVXUJARFQBinding95.push(
                    architectureDiagramVXUJARFQBinding129,
                  ),
                  architectureDiagramVXUJARFQBinding71.push({
                    [architectureDiagramVXUJARFQBinding2[
                      architectureDiagramVXUJARFQInput46
                    ]]: architectureDiagramVXUJARFQBinding130,
                    [architectureDiagramVXUJARFQBinding2[
                      architectureDiagramVXUJARFQBinding5(
                        architectureDiagramVXUJARFQInput46,
                      )
                    ]]: architectureDiagramVXUJARFQBinding117,
                    gap:
                      1.5 *
                      architectureDiagramVXUJARFQInput22.getConfigField(
                        "iconSize",
                      ),
                  }));
              },
            );
          }
        }
      }
    }),
    architectureDiagramVXUJARFQBinding71
  );
}
function architectureDiagramVXUJARFQHelper8(
  architectureDiagramVXUJARFQInput1,
  architectureDiagramVXUJARFQInput2,
  architectureDiagramVXUJARFQInput3,
  architectureDiagramVXUJARFQInput4,
  architectureDiagramVXUJARFQInput5,
  { spatialMaps, groupAlignments },
) {
  return new Promise((architectureDiagramVXUJARFQInput6) => {
    let architectureDiagramVXUJARFQBinding28 = srcR("body")
        .append("div")
        .attr("id", "cy")
        .attr("style", "display:none"),
      architectureDiagramVXUJARFQBinding29 = cytoscape({
        container: document.getElementById("cy"),
        style: [
          {
            selector: "edge",
            style: {
              "curve-style": "straight",
              label: "data(label)",
              "source-endpoint": "data(sourceEndpoint)",
              "target-endpoint": "data(targetEndpoint)",
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
              "font-size": `${architectureDiagramVXUJARFQInput5.getConfigField("fontSize")}px`,
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
              padding: `${architectureDiagramVXUJARFQInput5.getConfigField("padding")}px`,
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
    architectureDiagramVXUJARFQBinding28.remove();
    architectureDiagramVXUJARFQHelper4(
      architectureDiagramVXUJARFQInput3,
      architectureDiagramVXUJARFQBinding29,
    );
    architectureDiagramVXUJARFQHelper1(
      architectureDiagramVXUJARFQInput1,
      architectureDiagramVXUJARFQBinding29,
      architectureDiagramVXUJARFQInput5,
    );
    architectureDiagramVXUJARFQHelper2(
      architectureDiagramVXUJARFQInput2,
      architectureDiagramVXUJARFQBinding29,
      architectureDiagramVXUJARFQInput5,
    );
    architectureDiagramVXUJARFQHelper5(
      architectureDiagramVXUJARFQInput4,
      architectureDiagramVXUJARFQBinding29,
    );
    let architectureDiagramVXUJARFQBinding30 =
        architectureDiagramVXUJARFQHelper6(
          architectureDiagramVXUJARFQInput5,
          spatialMaps,
          groupAlignments,
        ),
      architectureDiagramVXUJARFQBinding31 = architectureDiagramVXUJARFQHelper7(
        spatialMaps,
        architectureDiagramVXUJARFQInput5,
      ),
      architectureDiagramVXUJARFQBinding32 =
        architectureDiagramVXUJARFQBinding29.layout({
          name: "fcose",
          quality: "proof",
          styleEnabled: false,
          animate: false,
          nodeDimensionsIncludeLabels: false,
          idealEdgeLength(architectureDiagramVXUJARFQInput61) {
            let [
                architectureDiagramVXUJARFQBinding145,
                architectureDiagramVXUJARFQBinding146,
              ] = architectureDiagramVXUJARFQInput61.connectedNodes(),
              { parent } = architectureDiagramVXUJARFQBinding19(
                architectureDiagramVXUJARFQBinding145,
              ),
              { parent: _parent } = architectureDiagramVXUJARFQBinding19(
                architectureDiagramVXUJARFQBinding146,
              );
            return parent === _parent
              ? 1.5 *
                  architectureDiagramVXUJARFQInput5.getConfigField("iconSize")
              : 0.5 *
                  architectureDiagramVXUJARFQInput5.getConfigField("iconSize");
          },
          edgeElasticity(architectureDiagramVXUJARFQInput65) {
            let [
                architectureDiagramVXUJARFQBinding149,
                architectureDiagramVXUJARFQBinding150,
              ] = architectureDiagramVXUJARFQInput65.connectedNodes(),
              { parent } = architectureDiagramVXUJARFQBinding19(
                architectureDiagramVXUJARFQBinding149,
              ),
              { parent: _parent } = architectureDiagramVXUJARFQBinding19(
                architectureDiagramVXUJARFQBinding150,
              );
            return parent === _parent ? 0.45 : 0.001;
          },
          alignmentConstraint: architectureDiagramVXUJARFQBinding30,
          relativePlacementConstraint: architectureDiagramVXUJARFQBinding31,
        });
    architectureDiagramVXUJARFQBinding32.one("layoutstop", () => {
      function architectureDiagramVXUJARFQHelper9(
        architectureDiagramVXUJARFQInput23,
        architectureDiagramVXUJARFQInput24,
        architectureDiagramVXUJARFQInput25,
        architectureDiagramVXUJARFQInput26,
      ) {
        let architectureDiagramVXUJARFQBinding76,
          architectureDiagramVXUJARFQBinding77,
          { x, y } = architectureDiagramVXUJARFQInput23,
          { x: _x, y: _y } = architectureDiagramVXUJARFQInput24;
        architectureDiagramVXUJARFQBinding77 =
          (architectureDiagramVXUJARFQInput26 -
            y +
            ((x - architectureDiagramVXUJARFQInput25) * (y - _y)) / (x - _x)) /
          Math.sqrt(1 + ((y - _y) / (x - _x)) ** 2);
        architectureDiagramVXUJARFQBinding76 = Math.sqrt(
          (architectureDiagramVXUJARFQInput26 - y) ** 2 +
            (architectureDiagramVXUJARFQInput25 - x) ** 2 -
            architectureDiagramVXUJARFQBinding77 ** 2,
        );
        let architectureDiagramVXUJARFQBinding78 = Math.sqrt(
          (_x - x) ** 2 + (_y - y) ** 2,
        );
        architectureDiagramVXUJARFQBinding76 /=
          architectureDiagramVXUJARFQBinding78;
        let architectureDiagramVXUJARFQBinding79 =
          (_x - x) * (architectureDiagramVXUJARFQInput26 - y) -
          (_y - y) * (architectureDiagramVXUJARFQInput25 - x);
        switch (true) {
          case architectureDiagramVXUJARFQBinding79 >= 0:
            architectureDiagramVXUJARFQBinding79 = 1;
            break;
          case architectureDiagramVXUJARFQBinding79 < 0:
            architectureDiagramVXUJARFQBinding79 = -1;
            break;
        }
        let architectureDiagramVXUJARFQBinding80 =
          (_x - x) * (architectureDiagramVXUJARFQInput25 - x) +
          (_y - y) * (architectureDiagramVXUJARFQInput26 - y);
        switch (true) {
          case architectureDiagramVXUJARFQBinding80 >= 0:
            architectureDiagramVXUJARFQBinding80 = 1;
            break;
          case architectureDiagramVXUJARFQBinding80 < 0:
            architectureDiagramVXUJARFQBinding80 = -1;
            break;
        }
        return (
          (architectureDiagramVXUJARFQBinding77 =
            Math.abs(architectureDiagramVXUJARFQBinding77) *
            architectureDiagramVXUJARFQBinding79),
          (architectureDiagramVXUJARFQBinding76 *=
            architectureDiagramVXUJARFQBinding80),
          {
            distances: architectureDiagramVXUJARFQBinding77,
            weights: architectureDiagramVXUJARFQBinding76,
          }
        );
      }
      chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper9, "getSegmentWeights");
      architectureDiagramVXUJARFQBinding29.startBatch();
      for (let architectureDiagramVXUJARFQBinding113 of Object.values(
        architectureDiagramVXUJARFQBinding29.edges(),
      ))
        if (architectureDiagramVXUJARFQBinding113.data?.()) {
          let { x, y } = architectureDiagramVXUJARFQBinding113
              .source()
              .position(),
            { x: _x, y: _y } = architectureDiagramVXUJARFQBinding113
              .target()
              .position();
          if (x !== _x && y !== _y) {
            let architectureDiagramVXUJARFQBinding133 =
                architectureDiagramVXUJARFQBinding113.sourceEndpoint(),
              architectureDiagramVXUJARFQBinding134 =
                architectureDiagramVXUJARFQBinding113.targetEndpoint(),
              { sourceDir } = architectureDiagramVXUJARFQBinding18(
                architectureDiagramVXUJARFQBinding113,
              ),
              [
                architectureDiagramVXUJARFQBinding135,
                architectureDiagramVXUJARFQBinding136,
              ] = architectureDiagramVXUJARFQBinding8(sourceDir)
                ? [
                    architectureDiagramVXUJARFQBinding133.x,
                    architectureDiagramVXUJARFQBinding134.y,
                  ]
                : [
                    architectureDiagramVXUJARFQBinding134.x,
                    architectureDiagramVXUJARFQBinding133.y,
                  ],
              { weights, distances } = architectureDiagramVXUJARFQHelper9(
                architectureDiagramVXUJARFQBinding133,
                architectureDiagramVXUJARFQBinding134,
                architectureDiagramVXUJARFQBinding135,
                architectureDiagramVXUJARFQBinding136,
              );
            architectureDiagramVXUJARFQBinding113.style(
              "segment-distances",
              distances,
            );
            architectureDiagramVXUJARFQBinding113.style(
              "segment-weights",
              weights,
            );
          }
        }
      architectureDiagramVXUJARFQBinding29.endBatch();
      architectureDiagramVXUJARFQBinding32.run();
    });
    architectureDiagramVXUJARFQBinding32.run();
    architectureDiagramVXUJARFQBinding29.ready(
      (architectureDiagramVXUJARFQInput90) => {
        chunkAGHRB4JFI.info("Ready", architectureDiagramVXUJARFQInput90);
        architectureDiagramVXUJARFQInput6(architectureDiagramVXUJARFQBinding29);
      },
    );
  });
}
var architectureDiagramVXUJARFQBinding1,
  architectureDiagramVXUJARFQBinding2,
  architectureDiagramVXUJARFQBinding3,
  architectureDiagramVXUJARFQBinding4,
  architectureDiagramVXUJARFQBinding5,
  architectureDiagramVXUJARFQBinding6,
  architectureDiagramVXUJARFQBinding7,
  architectureDiagramVXUJARFQBinding8,
  architectureDiagramVXUJARFQBinding9,
  architectureDiagramVXUJARFQBinding10,
  architectureDiagramVXUJARFQBinding11,
  architectureDiagramVXUJARFQBinding12,
  architectureDiagramVXUJARFQBinding13,
  architectureDiagramVXUJARFQBinding14,
  architectureDiagramVXUJARFQBinding15,
  architectureDiagramVXUJARFQBinding16,
  architectureDiagramVXUJARFQBinding17,
  architectureDiagramVXUJARFQBinding18,
  architectureDiagramVXUJARFQBinding19,
  architectureDiagramVXUJARFQBinding20,
  architectureDiagramVXUJARFQBinding21,
  architectureDiagramVXUJARFQBinding22,
  architectureDiagramVXUJARFQBinding23,
  architectureDiagramVXUJARFQBinding24,
  architectureDiagramVXUJARFQBinding25,
  $,
  _e,
  architectureDiagramVXUJARFQBinding26,
  architectureDiagramVXUJARFQBinding27,
  be,
  ArchitectureDiagramVXUJARFQ;
esmInit(() => {
  chunkEXTU4WIET();
  chunkJA3XYJ7ZI();
  chunk4BX2VUABT();
  chunkS3R3BYOJU();
  _chunkABZYJK2DK();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  cytoscape();
  architectureDiagramVXUJARFQBinding1 = toEsm(cytoscapeFcose(), 1);
  srcT();
  architectureDiagramVXUJARFQBinding2 = {
    L: "left",
    R: "right",
    T: "top",
    B: "bottom",
  };
  architectureDiagramVXUJARFQBinding3 = {
    L: chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQInput94) =>
        `${architectureDiagramVXUJARFQInput94},${architectureDiagramVXUJARFQInput94 / 2} 0,${architectureDiagramVXUJARFQInput94} 0,0`,
      "L",
    ),
    R: chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQInput92) =>
        `0,${architectureDiagramVXUJARFQInput92 / 2} ${architectureDiagramVXUJARFQInput92},0 ${architectureDiagramVXUJARFQInput92},${architectureDiagramVXUJARFQInput92}`,
      "R",
    ),
    T: chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQInput95) =>
        `0,0 ${architectureDiagramVXUJARFQInput95},0 ${architectureDiagramVXUJARFQInput95 / 2},${architectureDiagramVXUJARFQInput95}`,
      "T",
    ),
    B: chunkAGHRB4JFN(
      (architectureDiagramVXUJARFQInput93) =>
        `${architectureDiagramVXUJARFQInput93 / 2},0 ${architectureDiagramVXUJARFQInput93},${architectureDiagramVXUJARFQInput93} 0,${architectureDiagramVXUJARFQInput93}`,
      "B",
    ),
  };
  architectureDiagramVXUJARFQBinding4 = {
    L: chunkAGHRB4JFN(
      (
        architectureDiagramVXUJARFQInput99,
        architectureDiagramVXUJARFQInput100,
      ) =>
        architectureDiagramVXUJARFQInput99 -
        architectureDiagramVXUJARFQInput100 +
        2,
      "L",
    ),
    R: chunkAGHRB4JFN(
      (
        architectureDiagramVXUJARFQInput103,
        architectureDiagramVXUJARFQInput104,
      ) => architectureDiagramVXUJARFQInput103 - 2,
      "R",
    ),
    T: chunkAGHRB4JFN(
      (
        architectureDiagramVXUJARFQInput101,
        architectureDiagramVXUJARFQInput102,
      ) =>
        architectureDiagramVXUJARFQInput101 -
        architectureDiagramVXUJARFQInput102 +
        2,
      "T",
    ),
    B: chunkAGHRB4JFN(
      (
        architectureDiagramVXUJARFQInput105,
        architectureDiagramVXUJARFQInput106,
      ) => architectureDiagramVXUJARFQInput105 - 2,
      "B",
    ),
  };
  architectureDiagramVXUJARFQBinding5 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput75,
  ) {
    return architectureDiagramVXUJARFQBinding7(
      architectureDiagramVXUJARFQInput75,
    )
      ? architectureDiagramVXUJARFQInput75 === "L"
        ? "R"
        : "L"
      : architectureDiagramVXUJARFQInput75 === "T"
        ? "B"
        : "T";
  }, "getOppositeArchitectureDirection");
  architectureDiagramVXUJARFQBinding6 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput67,
  ) {
    let architectureDiagramVXUJARFQBinding159 =
      architectureDiagramVXUJARFQInput67;
    return (
      architectureDiagramVXUJARFQBinding159 === "L" ||
      architectureDiagramVXUJARFQBinding159 === "R" ||
      architectureDiagramVXUJARFQBinding159 === "T" ||
      architectureDiagramVXUJARFQBinding159 === "B"
    );
  }, "isArchitectureDirection");
  architectureDiagramVXUJARFQBinding7 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput81,
  ) {
    let architectureDiagramVXUJARFQBinding163 =
      architectureDiagramVXUJARFQInput81;
    return (
      architectureDiagramVXUJARFQBinding163 === "L" ||
      architectureDiagramVXUJARFQBinding163 === "R"
    );
  }, "isArchitectureDirectionX");
  architectureDiagramVXUJARFQBinding8 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput82,
  ) {
    let architectureDiagramVXUJARFQBinding164 =
      architectureDiagramVXUJARFQInput82;
    return (
      architectureDiagramVXUJARFQBinding164 === "T" ||
      architectureDiagramVXUJARFQBinding164 === "B"
    );
  }, "isArchitectureDirectionY");
  architectureDiagramVXUJARFQBinding9 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput69,
    architectureDiagramVXUJARFQInput70,
  ) {
    let architectureDiagramVXUJARFQBinding160 =
        architectureDiagramVXUJARFQBinding7(
          architectureDiagramVXUJARFQInput69,
        ) &&
        architectureDiagramVXUJARFQBinding8(architectureDiagramVXUJARFQInput70),
      architectureDiagramVXUJARFQBinding161 =
        architectureDiagramVXUJARFQBinding8(
          architectureDiagramVXUJARFQInput69,
        ) &&
        architectureDiagramVXUJARFQBinding7(architectureDiagramVXUJARFQInput70);
    return (
      architectureDiagramVXUJARFQBinding160 ||
      architectureDiagramVXUJARFQBinding161
    );
  }, "isArchitectureDirectionXY");
  architectureDiagramVXUJARFQBinding10 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput66,
  ) {
    let architectureDiagramVXUJARFQBinding153 =
        architectureDiagramVXUJARFQInput66[0],
      architectureDiagramVXUJARFQBinding154 =
        architectureDiagramVXUJARFQInput66[1],
      architectureDiagramVXUJARFQBinding155 =
        architectureDiagramVXUJARFQBinding7(
          architectureDiagramVXUJARFQBinding153,
        ) &&
        architectureDiagramVXUJARFQBinding8(
          architectureDiagramVXUJARFQBinding154,
        ),
      architectureDiagramVXUJARFQBinding156 =
        architectureDiagramVXUJARFQBinding8(
          architectureDiagramVXUJARFQBinding153,
        ) &&
        architectureDiagramVXUJARFQBinding7(
          architectureDiagramVXUJARFQBinding154,
        );
    return (
      architectureDiagramVXUJARFQBinding155 ||
      architectureDiagramVXUJARFQBinding156
    );
  }, "isArchitecturePairXY");
  architectureDiagramVXUJARFQBinding11 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput78,
  ) {
    return (
      architectureDiagramVXUJARFQInput78 !== "LL" &&
      architectureDiagramVXUJARFQInput78 !== "RR" &&
      architectureDiagramVXUJARFQInput78 !== "TT" &&
      architectureDiagramVXUJARFQInput78 !== "BB"
    );
  }, "isValidArchitectureDirectionPair");
  architectureDiagramVXUJARFQBinding12 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput79,
    architectureDiagramVXUJARFQInput80,
  ) {
    let architectureDiagramVXUJARFQBinding162 = `${architectureDiagramVXUJARFQInput79}${architectureDiagramVXUJARFQInput80}`;
    return architectureDiagramVXUJARFQBinding11(
      architectureDiagramVXUJARFQBinding162,
    )
      ? architectureDiagramVXUJARFQBinding162
      : undefined;
  }, "getArchitectureDirectionPair");
  architectureDiagramVXUJARFQBinding13 = chunkAGHRB4JFN(function (
    [architectureDiagramVXUJARFQInput48, architectureDiagramVXUJARFQInput49],
    architectureDiagramVXUJARFQInput50,
  ) {
    let architectureDiagramVXUJARFQBinding131 =
        architectureDiagramVXUJARFQInput50[0],
      architectureDiagramVXUJARFQBinding132 =
        architectureDiagramVXUJARFQInput50[1];
    return architectureDiagramVXUJARFQBinding7(
      architectureDiagramVXUJARFQBinding131,
    )
      ? architectureDiagramVXUJARFQBinding8(
          architectureDiagramVXUJARFQBinding132,
        )
        ? [
            architectureDiagramVXUJARFQInput48 +
              (architectureDiagramVXUJARFQBinding131 === "L" ? -1 : 1),
            architectureDiagramVXUJARFQInput49 +
              (architectureDiagramVXUJARFQBinding132 === "T" ? 1 : -1),
          ]
        : [
            architectureDiagramVXUJARFQInput48 +
              (architectureDiagramVXUJARFQBinding131 === "L" ? -1 : 1),
            architectureDiagramVXUJARFQInput49,
          ]
      : architectureDiagramVXUJARFQBinding7(
            architectureDiagramVXUJARFQBinding132,
          )
        ? [
            architectureDiagramVXUJARFQInput48 +
              (architectureDiagramVXUJARFQBinding132 === "L" ? 1 : -1),
            architectureDiagramVXUJARFQInput49 +
              (architectureDiagramVXUJARFQBinding131 === "T" ? 1 : -1),
          ]
        : [
            architectureDiagramVXUJARFQInput48,
            architectureDiagramVXUJARFQInput49 +
              (architectureDiagramVXUJARFQBinding131 === "T" ? 1 : -1),
          ];
  }, "shiftPositionByArchitectureDirectionPair");
  architectureDiagramVXUJARFQBinding14 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput64,
  ) {
    return architectureDiagramVXUJARFQInput64 === "LT" ||
      architectureDiagramVXUJARFQInput64 === "TL"
      ? [1, 1]
      : architectureDiagramVXUJARFQInput64 === "BL" ||
          architectureDiagramVXUJARFQInput64 === "LB"
        ? [1, -1]
        : architectureDiagramVXUJARFQInput64 === "BR" ||
            architectureDiagramVXUJARFQInput64 === "RB"
          ? [-1, -1]
          : [-1, 1];
  }, "getArchitectureDirectionXYFactors");
  architectureDiagramVXUJARFQBinding15 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput76,
    architectureDiagramVXUJARFQInput77,
  ) {
    return architectureDiagramVXUJARFQBinding9(
      architectureDiagramVXUJARFQInput76,
      architectureDiagramVXUJARFQInput77,
    )
      ? "bend"
      : architectureDiagramVXUJARFQBinding7(architectureDiagramVXUJARFQInput76)
        ? "horizontal"
        : "vertical";
  }, "getArchitectureDirectionAlignment");
  architectureDiagramVXUJARFQBinding16 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput89,
  ) {
    return architectureDiagramVXUJARFQInput89.type === "service";
  }, "isArchitectureService");
  architectureDiagramVXUJARFQBinding17 = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput88,
  ) {
    return architectureDiagramVXUJARFQInput88.type === "junction";
  }, "isArchitectureJunction");
  architectureDiagramVXUJARFQBinding18 = chunkAGHRB4JFN(
    (architectureDiagramVXUJARFQInput107) =>
      architectureDiagramVXUJARFQInput107.data(),
    "edgeData",
  );
  architectureDiagramVXUJARFQBinding19 = chunkAGHRB4JFN(
    (architectureDiagramVXUJARFQInput108) =>
      architectureDiagramVXUJARFQInput108.data(),
    "nodeData",
  );
  architectureDiagramVXUJARFQBinding20 = chunkABZYJK2DD.architecture;
  architectureDiagramVXUJARFQBinding21 = class {
    constructor() {
      this.nodes = {};
      this.groups = {};
      this.edges = [];
      this.registeredIds = {};
      this.elements = {};
      this.setAccTitle = chunkABZYJK2DV;
      this.getAccTitle = _chunkABZYJK2DV;
      this.setDiagramTitle = chunkABZYJK2DW;
      this.getDiagramTitle = chunkABZYJK2DC;
      this.getAccDescription = chunkABZYJK2DUnderscore;
      this.setAccDescription = chunkABZYJK2DB;
      this.clear();
    }
    static {
      chunkAGHRB4JFN(this, "ArchitectureDB");
    }
    clear() {
      this.nodes = {};
      this.groups = {};
      this.edges = [];
      this.registeredIds = {};
      this.dataStructures = undefined;
      this.elements = {};
      chunkABZYJK2DA();
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
        architectureDiagramVXUJARFQBinding16,
      );
    }
    addJunction({ id, in: _in }) {
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
        architectureDiagramVXUJARFQBinding17,
      );
    }
    getNodes() {
      return Object.values(this.nodes);
    }
    getNode(architectureDiagramVXUJARFQInput87) {
      return this.nodes[architectureDiagramVXUJARFQInput87] ?? null;
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
      if (!architectureDiagramVXUJARFQBinding6(lhsDir))
        throw Error(
          `Invalid direction given for left hand side of edge ${lhsId}--${rhsId}. Expected (L,R,T,B) got ${String(lhsDir)}`,
        );
      if (!architectureDiagramVXUJARFQBinding6(rhsDir))
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
      let architectureDiagramVXUJARFQBinding47 = this.nodes[lhsId].in,
        architectureDiagramVXUJARFQBinding48 = this.nodes[rhsId].in;
      if (
        lhsGroup &&
        architectureDiagramVXUJARFQBinding47 &&
        architectureDiagramVXUJARFQBinding48 &&
        architectureDiagramVXUJARFQBinding47 ==
          architectureDiagramVXUJARFQBinding48
      )
        throw Error(
          `The left-hand id [${lhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`,
        );
      if (
        rhsGroup &&
        architectureDiagramVXUJARFQBinding47 &&
        architectureDiagramVXUJARFQBinding48 &&
        architectureDiagramVXUJARFQBinding47 ==
          architectureDiagramVXUJARFQBinding48
      )
        throw Error(
          `The right-hand id [${rhsId}] is modified to traverse the group boundary, but the edge does not pass through two groups.`,
        );
      let architectureDiagramVXUJARFQBinding49 = {
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
      this.edges.push(architectureDiagramVXUJARFQBinding49);
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
        let architectureDiagramVXUJARFQBinding50 = {},
          architectureDiagramVXUJARFQBinding51 = Object.entries(
            this.nodes,
          ).reduce(
            (
              accumulator,
              [
                architectureDiagramVXUJARFQInput31,
                architectureDiagramVXUJARFQInput32,
              ],
            ) => (
              (accumulator[architectureDiagramVXUJARFQInput31] =
                architectureDiagramVXUJARFQInput32.edges.reduce(
                  (_accumulator, current) => {
                    let architectureDiagramVXUJARFQBinding98 = this.getNode(
                        current.lhsId,
                      )?.in,
                      architectureDiagramVXUJARFQBinding99 = this.getNode(
                        current.rhsId,
                      )?.in;
                    if (
                      architectureDiagramVXUJARFQBinding98 &&
                      architectureDiagramVXUJARFQBinding99 &&
                      architectureDiagramVXUJARFQBinding98 !==
                        architectureDiagramVXUJARFQBinding99
                    ) {
                      let architectureDiagramVXUJARFQBinding147 =
                        architectureDiagramVXUJARFQBinding15(
                          current.lhsDir,
                          current.rhsDir,
                        );
                      architectureDiagramVXUJARFQBinding147 !== "bend" &&
                        ((architectureDiagramVXUJARFQBinding50[
                          architectureDiagramVXUJARFQBinding98
                        ] ??= {}),
                        (architectureDiagramVXUJARFQBinding50[
                          architectureDiagramVXUJARFQBinding98
                        ][architectureDiagramVXUJARFQBinding99] =
                          architectureDiagramVXUJARFQBinding147),
                        (architectureDiagramVXUJARFQBinding50[
                          architectureDiagramVXUJARFQBinding99
                        ] ??= {}),
                        (architectureDiagramVXUJARFQBinding50[
                          architectureDiagramVXUJARFQBinding99
                        ][architectureDiagramVXUJARFQBinding98] =
                          architectureDiagramVXUJARFQBinding147));
                    }
                    if (current.lhsId === architectureDiagramVXUJARFQInput31) {
                      let architectureDiagramVXUJARFQBinding157 =
                        architectureDiagramVXUJARFQBinding12(
                          current.lhsDir,
                          current.rhsDir,
                        );
                      architectureDiagramVXUJARFQBinding157 &&
                        (_accumulator[architectureDiagramVXUJARFQBinding157] =
                          current.rhsId);
                    } else {
                      let architectureDiagramVXUJARFQBinding158 =
                        architectureDiagramVXUJARFQBinding12(
                          current.rhsDir,
                          current.lhsDir,
                        );
                      architectureDiagramVXUJARFQBinding158 &&
                        (_accumulator[architectureDiagramVXUJARFQBinding158] =
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
          architectureDiagramVXUJARFQBinding52 = Object.keys(
            architectureDiagramVXUJARFQBinding51,
          )[0],
          architectureDiagramVXUJARFQBinding53 = {
            [architectureDiagramVXUJARFQBinding52]: 1,
          },
          architectureDiagramVXUJARFQBinding54 = Object.keys(
            architectureDiagramVXUJARFQBinding51,
          ).reduce(
            (accumulator, current) =>
              current === architectureDiagramVXUJARFQBinding52
                ? accumulator
                : {
                    ...accumulator,
                    [current]: 1,
                  },
            {},
          ),
          architectureDiagramVXUJARFQBinding55 = chunkAGHRB4JFN(
            (architectureDiagramVXUJARFQInput41) => {
              let architectureDiagramVXUJARFQBinding115 = {
                  [architectureDiagramVXUJARFQInput41]: [0, 0],
                },
                architectureDiagramVXUJARFQBinding116 = [
                  architectureDiagramVXUJARFQInput41,
                ];
              for (; architectureDiagramVXUJARFQBinding116.length > 0; ) {
                let architectureDiagramVXUJARFQBinding128 =
                  architectureDiagramVXUJARFQBinding116.shift();
                if (architectureDiagramVXUJARFQBinding128) {
                  architectureDiagramVXUJARFQBinding53[
                    architectureDiagramVXUJARFQBinding128
                  ] = 1;
                  delete architectureDiagramVXUJARFQBinding54[
                    architectureDiagramVXUJARFQBinding128
                  ];
                  let architectureDiagramVXUJARFQBinding141 =
                      architectureDiagramVXUJARFQBinding51[
                        architectureDiagramVXUJARFQBinding128
                      ],
                    [
                      architectureDiagramVXUJARFQBinding142,
                      architectureDiagramVXUJARFQBinding143,
                    ] =
                      architectureDiagramVXUJARFQBinding115[
                        architectureDiagramVXUJARFQBinding128
                      ];
                  Object.entries(architectureDiagramVXUJARFQBinding141).forEach(
                    ([
                      architectureDiagramVXUJARFQInput71,
                      architectureDiagramVXUJARFQInput72,
                    ]) => {
                      architectureDiagramVXUJARFQBinding53[
                        architectureDiagramVXUJARFQInput72
                      ] ||
                        ((architectureDiagramVXUJARFQBinding115[
                          architectureDiagramVXUJARFQInput72
                        ] = architectureDiagramVXUJARFQBinding13(
                          [
                            architectureDiagramVXUJARFQBinding142,
                            architectureDiagramVXUJARFQBinding143,
                          ],
                          architectureDiagramVXUJARFQInput71,
                        )),
                        architectureDiagramVXUJARFQBinding116.push(
                          architectureDiagramVXUJARFQInput72,
                        ));
                    },
                  );
                }
              }
              return architectureDiagramVXUJARFQBinding115;
            },
            "BFS",
          ),
          architectureDiagramVXUJARFQBinding56 = [
            architectureDiagramVXUJARFQBinding55(
              architectureDiagramVXUJARFQBinding52,
            ),
          ];
        for (; Object.keys(architectureDiagramVXUJARFQBinding54).length > 0; )
          architectureDiagramVXUJARFQBinding56.push(
            architectureDiagramVXUJARFQBinding55(
              Object.keys(architectureDiagramVXUJARFQBinding54)[0],
            ),
          );
        this.dataStructures = {
          adjList: architectureDiagramVXUJARFQBinding51,
          spatialMaps: architectureDiagramVXUJARFQBinding56,
          groupAlignments: architectureDiagramVXUJARFQBinding50,
        };
      }
      return this.dataStructures;
    }
    setElementForId(
      architectureDiagramVXUJARFQInput84,
      architectureDiagramVXUJARFQInput85,
    ) {
      this.elements[architectureDiagramVXUJARFQInput84] =
        architectureDiagramVXUJARFQInput85;
    }
    getElementById(architectureDiagramVXUJARFQInput86) {
      return this.elements[architectureDiagramVXUJARFQInput86];
    }
    getConfig() {
      return chunkS3R3BYOJR({
        ...architectureDiagramVXUJARFQBinding20,
        ...chunkABZYJK2DY().architecture,
      });
    }
    getConfigField(architectureDiagramVXUJARFQInput83) {
      return this.getConfig()[architectureDiagramVXUJARFQInput83];
    }
  };
  architectureDiagramVXUJARFQBinding22 = chunkAGHRB4JFN(
    (
      architectureDiagramVXUJARFQInput56,
      architectureDiagramVXUJARFQInput57,
    ) => {
      chunk4BX2VUABN(
        architectureDiagramVXUJARFQInput56,
        architectureDiagramVXUJARFQInput57,
      );
      architectureDiagramVXUJARFQInput56.groups.map((item) =>
        architectureDiagramVXUJARFQInput57.addGroup(item),
      );
      architectureDiagramVXUJARFQInput56.services.map((item) =>
        architectureDiagramVXUJARFQInput57.addService({
          ...item,
          type: "service",
        }),
      );
      architectureDiagramVXUJARFQInput56.junctions.map((item) =>
        architectureDiagramVXUJARFQInput57.addJunction({
          ...item,
          type: "junction",
        }),
      );
      architectureDiagramVXUJARFQInput56.edges.map((item) =>
        architectureDiagramVXUJARFQInput57.addEdge(item),
      );
    },
    "populateDb",
  );
  architectureDiagramVXUJARFQBinding23 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (architectureDiagramVXUJARFQInput42) => {
      let architectureDiagramVXUJARFQBinding126 = await mermaidParserCoreN(
        "architecture",
        architectureDiagramVXUJARFQInput42,
      );
      chunkAGHRB4JFI.debug(architectureDiagramVXUJARFQBinding126);
      let architectureDiagramVXUJARFQBinding127 =
        architectureDiagramVXUJARFQBinding23.parser?.yy;
      if (
        !(
          architectureDiagramVXUJARFQBinding127 instanceof
          architectureDiagramVXUJARFQBinding21
        )
      )
        throw Error(
          "parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
        );
      architectureDiagramVXUJARFQBinding22(
        architectureDiagramVXUJARFQBinding126,
        architectureDiagramVXUJARFQBinding127,
      );
    }, "parse"),
  };
  architectureDiagramVXUJARFQBinding24 = chunkAGHRB4JFN(
    (architectureDiagramVXUJARFQInput37) => `
  .edge {
    stroke-width: ${architectureDiagramVXUJARFQInput37.archEdgeWidth};
    stroke: ${architectureDiagramVXUJARFQInput37.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${architectureDiagramVXUJARFQInput37.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${architectureDiagramVXUJARFQInput37.archGroupBorderColor};
    stroke-width: ${architectureDiagramVXUJARFQInput37.archGroupBorderWidth};
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
  architectureDiagramVXUJARFQBinding25 = chunkAGHRB4JFN(
    (architectureDiagramVXUJARFQInput68) =>
      `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${architectureDiagramVXUJARFQInput68}</g>`,
    "wrapIcon",
  );
  $ = {
    prefix: "mermaid-architecture",
    height: 80,
    width: 80,
    icons: {
      database: {
        body: architectureDiagramVXUJARFQBinding25(
          '<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      server: {
        body: architectureDiagramVXUJARFQBinding25(
          '<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>',
        ),
      },
      disk: {
        body: architectureDiagramVXUJARFQBinding25(
          '<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>',
        ),
      },
      internet: {
        body: architectureDiagramVXUJARFQBinding25(
          '<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      cloud: {
        body: architectureDiagramVXUJARFQBinding25(
          '<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      unknown: chunkJA3XYJ7ZS,
      blank: {
        body: architectureDiagramVXUJARFQBinding25(""),
      },
    },
  };
  _e = chunkAGHRB4JFN(async function (
    architectureDiagramVXUJARFQInput7,
    architectureDiagramVXUJARFQInput8,
    architectureDiagramVXUJARFQInput9,
  ) {
    let architectureDiagramVXUJARFQBinding33 =
        architectureDiagramVXUJARFQInput9.getConfigField("padding"),
      architectureDiagramVXUJARFQBinding34 =
        architectureDiagramVXUJARFQInput9.getConfigField("iconSize"),
      architectureDiagramVXUJARFQBinding35 =
        architectureDiagramVXUJARFQBinding34 / 2,
      architectureDiagramVXUJARFQBinding36 =
        architectureDiagramVXUJARFQBinding34 / 6,
      architectureDiagramVXUJARFQBinding37 =
        architectureDiagramVXUJARFQBinding36 / 2;
    await Promise.all(
      architectureDiagramVXUJARFQInput8.edges().map(async (item) => {
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
          } = architectureDiagramVXUJARFQBinding18(item),
          { x: architectureDiagramVXUJARFQBinding38, y: _y } =
            item[0].sourceEndpoint(),
          { x: _x, y } = item[0].midpoint(),
          { x: architectureDiagramVXUJARFQBinding39, y: __y } =
            item[0].targetEndpoint(),
          architectureDiagramVXUJARFQBinding40 =
            architectureDiagramVXUJARFQBinding33 + 4;
        if (
          (sourceGroup &&
            (architectureDiagramVXUJARFQBinding7(sourceDir)
              ? (architectureDiagramVXUJARFQBinding38 +=
                  sourceDir === "L"
                    ? -architectureDiagramVXUJARFQBinding40
                    : architectureDiagramVXUJARFQBinding40)
              : (_y +=
                  sourceDir === "T"
                    ? -architectureDiagramVXUJARFQBinding40
                    : architectureDiagramVXUJARFQBinding40 + 18)),
          targetGroup &&
            (architectureDiagramVXUJARFQBinding7(targetDir)
              ? (architectureDiagramVXUJARFQBinding39 +=
                  targetDir === "L"
                    ? -architectureDiagramVXUJARFQBinding40
                    : architectureDiagramVXUJARFQBinding40)
              : (__y +=
                  targetDir === "T"
                    ? -architectureDiagramVXUJARFQBinding40
                    : architectureDiagramVXUJARFQBinding40 + 18)),
          !sourceGroup &&
            architectureDiagramVXUJARFQInput9.getNode(source)?.type ===
              "junction" &&
            (architectureDiagramVXUJARFQBinding7(sourceDir)
              ? (architectureDiagramVXUJARFQBinding38 +=
                  sourceDir === "L"
                    ? architectureDiagramVXUJARFQBinding35
                    : -architectureDiagramVXUJARFQBinding35)
              : (_y +=
                  sourceDir === "T"
                    ? architectureDiagramVXUJARFQBinding35
                    : -architectureDiagramVXUJARFQBinding35)),
          !targetGroup &&
            architectureDiagramVXUJARFQInput9.getNode(target)?.type ===
              "junction" &&
            (architectureDiagramVXUJARFQBinding7(targetDir)
              ? (architectureDiagramVXUJARFQBinding39 +=
                  targetDir === "L"
                    ? architectureDiagramVXUJARFQBinding35
                    : -architectureDiagramVXUJARFQBinding35)
              : (__y +=
                  targetDir === "T"
                    ? architectureDiagramVXUJARFQBinding35
                    : -architectureDiagramVXUJARFQBinding35)),
          item[0]._private.rscratch)
        ) {
          let architectureDiagramVXUJARFQBinding41 =
            architectureDiagramVXUJARFQInput7.insert("g");
          if (
            (architectureDiagramVXUJARFQBinding41
              .insert("path")
              .attr(
                "d",
                `M ${architectureDiagramVXUJARFQBinding38},${_y} L ${_x},${y} L${architectureDiagramVXUJARFQBinding39},${__y} `,
              )
              .attr("class", "edge")
              .attr(
                "id",
                chunkS3R3BYOJS(source, target, {
                  prefix: "L",
                }),
              ),
            sourceArrow)
          ) {
            let architectureDiagramVXUJARFQBinding137 =
                architectureDiagramVXUJARFQBinding7(sourceDir)
                  ? architectureDiagramVXUJARFQBinding4[sourceDir](
                      architectureDiagramVXUJARFQBinding38,
                      architectureDiagramVXUJARFQBinding36,
                    )
                  : architectureDiagramVXUJARFQBinding38 -
                    architectureDiagramVXUJARFQBinding37,
              architectureDiagramVXUJARFQBinding138 =
                architectureDiagramVXUJARFQBinding8(sourceDir)
                  ? architectureDiagramVXUJARFQBinding4[sourceDir](
                      _y,
                      architectureDiagramVXUJARFQBinding36,
                    )
                  : _y - architectureDiagramVXUJARFQBinding37;
            architectureDiagramVXUJARFQBinding41
              .insert("polygon")
              .attr(
                "points",
                architectureDiagramVXUJARFQBinding3[sourceDir](
                  architectureDiagramVXUJARFQBinding36,
                ),
              )
              .attr(
                "transform",
                `translate(${architectureDiagramVXUJARFQBinding137},${architectureDiagramVXUJARFQBinding138})`,
              )
              .attr("class", "arrow");
          }
          if (targetArrow) {
            let architectureDiagramVXUJARFQBinding139 =
                architectureDiagramVXUJARFQBinding7(targetDir)
                  ? architectureDiagramVXUJARFQBinding4[targetDir](
                      architectureDiagramVXUJARFQBinding39,
                      architectureDiagramVXUJARFQBinding36,
                    )
                  : architectureDiagramVXUJARFQBinding39 -
                    architectureDiagramVXUJARFQBinding37,
              architectureDiagramVXUJARFQBinding140 =
                architectureDiagramVXUJARFQBinding8(targetDir)
                  ? architectureDiagramVXUJARFQBinding4[targetDir](
                      __y,
                      architectureDiagramVXUJARFQBinding36,
                    )
                  : __y - architectureDiagramVXUJARFQBinding37;
            architectureDiagramVXUJARFQBinding41
              .insert("polygon")
              .attr(
                "points",
                architectureDiagramVXUJARFQBinding3[targetDir](
                  architectureDiagramVXUJARFQBinding36,
                ),
              )
              .attr(
                "transform",
                `translate(${architectureDiagramVXUJARFQBinding139},${architectureDiagramVXUJARFQBinding140})`,
              )
              .attr("class", "arrow");
          }
          if (label) {
            let architectureDiagramVXUJARFQBinding57 =
                architectureDiagramVXUJARFQBinding9(sourceDir, targetDir)
                  ? "XY"
                  : architectureDiagramVXUJARFQBinding7(sourceDir)
                    ? "X"
                    : "Y",
              architectureDiagramVXUJARFQBinding58 = 0;
            architectureDiagramVXUJARFQBinding58 =
              architectureDiagramVXUJARFQBinding57 === "X"
                ? Math.abs(
                    architectureDiagramVXUJARFQBinding38 -
                      architectureDiagramVXUJARFQBinding39,
                  )
                : architectureDiagramVXUJARFQBinding57 === "Y"
                  ? Math.abs(_y - __y) / 1.5
                  : Math.abs(
                      architectureDiagramVXUJARFQBinding38 -
                        architectureDiagramVXUJARFQBinding39,
                    ) / 2;
            let architectureDiagramVXUJARFQBinding59 =
              architectureDiagramVXUJARFQBinding41.append("g");
            if (
              (await chunkJA3XYJ7ZN(
                architectureDiagramVXUJARFQBinding59,
                label,
                {
                  useHtmlLabels: false,
                  width: architectureDiagramVXUJARFQBinding58,
                  classes: "architecture-service-label",
                },
                _chunkABZYJK2DB(),
              ),
              architectureDiagramVXUJARFQBinding59
                .attr("dy", "1em")
                .attr("alignment-baseline", "middle")
                .attr("dominant-baseline", "middle")
                .attr("text-anchor", "middle"),
              architectureDiagramVXUJARFQBinding57 === "X")
            )
              architectureDiagramVXUJARFQBinding59.attr(
                "transform",
                "translate(" + _x + ", " + y + ")",
              );
            else if (architectureDiagramVXUJARFQBinding57 === "Y")
              architectureDiagramVXUJARFQBinding59.attr(
                "transform",
                "translate(" + _x + ", " + y + ") rotate(-90)",
              );
            else if (architectureDiagramVXUJARFQBinding57 === "XY") {
              let architectureDiagramVXUJARFQBinding102 =
                architectureDiagramVXUJARFQBinding12(sourceDir, targetDir);
              if (
                architectureDiagramVXUJARFQBinding102 &&
                architectureDiagramVXUJARFQBinding10(
                  architectureDiagramVXUJARFQBinding102,
                )
              ) {
                let architectureDiagramVXUJARFQBinding104 =
                    architectureDiagramVXUJARFQBinding59
                      .node()
                      .getBoundingClientRect(),
                  [
                    architectureDiagramVXUJARFQBinding105,
                    architectureDiagramVXUJARFQBinding106,
                  ] = architectureDiagramVXUJARFQBinding14(
                    architectureDiagramVXUJARFQBinding102,
                  );
                architectureDiagramVXUJARFQBinding59
                  .attr("dominant-baseline", "auto")
                  .attr(
                    "transform",
                    `rotate(${-1 * architectureDiagramVXUJARFQBinding105 * architectureDiagramVXUJARFQBinding106 * 45})`,
                  );
                let architectureDiagramVXUJARFQBinding107 =
                  architectureDiagramVXUJARFQBinding59
                    .node()
                    .getBoundingClientRect();
                architectureDiagramVXUJARFQBinding59.attr(
                  "transform",
                  `
                translate(${_x}, ${y - architectureDiagramVXUJARFQBinding104.height / 2})
                translate(${(architectureDiagramVXUJARFQBinding105 * architectureDiagramVXUJARFQBinding107.width) / 2}, ${(architectureDiagramVXUJARFQBinding106 * architectureDiagramVXUJARFQBinding107.height) / 2})
                rotate(${-1 * architectureDiagramVXUJARFQBinding105 * architectureDiagramVXUJARFQBinding106 * 45}, 0, ${architectureDiagramVXUJARFQBinding104.height / 2})
              `,
                );
              }
            }
          }
        }
      }),
    );
  }, "drawEdges");
  architectureDiagramVXUJARFQBinding26 = chunkAGHRB4JFN(async function (
    architectureDiagramVXUJARFQInput13,
    architectureDiagramVXUJARFQInput14,
    architectureDiagramVXUJARFQInput15,
  ) {
    let architectureDiagramVXUJARFQBinding60 =
        architectureDiagramVXUJARFQInput15.getConfigField("padding") * 0.75,
      architectureDiagramVXUJARFQBinding61 =
        architectureDiagramVXUJARFQInput15.getConfigField("fontSize"),
      architectureDiagramVXUJARFQBinding62 =
        architectureDiagramVXUJARFQInput15.getConfigField("iconSize") / 2;
    await Promise.all(
      architectureDiagramVXUJARFQInput14.nodes().map(async (item) => {
        let architectureDiagramVXUJARFQBinding66 =
          architectureDiagramVXUJARFQBinding19(item);
        if (architectureDiagramVXUJARFQBinding66.type === "group") {
          let { h: _h, w, x1, y1 } = item.boundingBox(),
            architectureDiagramVXUJARFQBinding67 =
              architectureDiagramVXUJARFQInput13.append("rect");
          architectureDiagramVXUJARFQBinding67
            .attr("id", `group-${architectureDiagramVXUJARFQBinding66.id}`)
            .attr("x", x1 + architectureDiagramVXUJARFQBinding62)
            .attr("y", y1 + architectureDiagramVXUJARFQBinding62)
            .attr("width", w)
            .attr("height", _h)
            .attr("class", "node-bkg");
          let architectureDiagramVXUJARFQBinding68 =
              architectureDiagramVXUJARFQInput13.append("g"),
            architectureDiagramVXUJARFQBinding69 = x1,
            architectureDiagramVXUJARFQBinding70 = y1;
          if (architectureDiagramVXUJARFQBinding66.icon) {
            let architectureDiagramVXUJARFQBinding125 =
              architectureDiagramVXUJARFQBinding68.append("g");
            architectureDiagramVXUJARFQBinding125.html(
              `<g>${await chunkJA3XYJ7ZR(
                architectureDiagramVXUJARFQBinding66.icon,
                {
                  height: architectureDiagramVXUJARFQBinding60,
                  width: architectureDiagramVXUJARFQBinding60,
                  fallbackPrefix: $.prefix,
                },
              )}</g>`,
            );
            architectureDiagramVXUJARFQBinding125.attr(
              "transform",
              "translate(" +
                (architectureDiagramVXUJARFQBinding69 +
                  architectureDiagramVXUJARFQBinding62 +
                  1) +
                ", " +
                (architectureDiagramVXUJARFQBinding70 +
                  architectureDiagramVXUJARFQBinding62 +
                  1) +
                ")",
            );
            architectureDiagramVXUJARFQBinding69 +=
              architectureDiagramVXUJARFQBinding60;
            architectureDiagramVXUJARFQBinding70 +=
              architectureDiagramVXUJARFQBinding61 / 2 - 1 - 2;
          }
          if (architectureDiagramVXUJARFQBinding66.label) {
            let architectureDiagramVXUJARFQBinding103 =
              architectureDiagramVXUJARFQBinding68.append("g");
            await chunkJA3XYJ7ZN(
              architectureDiagramVXUJARFQBinding103,
              architectureDiagramVXUJARFQBinding66.label,
              {
                useHtmlLabels: false,
                width: w,
                classes: "architecture-service-label",
              },
              _chunkABZYJK2DB(),
            );
            architectureDiagramVXUJARFQBinding103
              .attr("dy", "1em")
              .attr("alignment-baseline", "middle")
              .attr("dominant-baseline", "start")
              .attr("text-anchor", "start");
            architectureDiagramVXUJARFQBinding103.attr(
              "transform",
              "translate(" +
                (architectureDiagramVXUJARFQBinding69 +
                  architectureDiagramVXUJARFQBinding62 +
                  4) +
                ", " +
                (architectureDiagramVXUJARFQBinding70 +
                  architectureDiagramVXUJARFQBinding62 +
                  2) +
                ")",
            );
          }
          architectureDiagramVXUJARFQInput15.setElementForId(
            architectureDiagramVXUJARFQBinding66.id,
            architectureDiagramVXUJARFQBinding67,
          );
        }
      }),
    );
  }, "drawGroups");
  architectureDiagramVXUJARFQBinding27 = chunkAGHRB4JFN(async function (
    architectureDiagramVXUJARFQInput10,
    architectureDiagramVXUJARFQInput11,
    architectureDiagramVXUJARFQInput12,
  ) {
    let architectureDiagramVXUJARFQBinding42 = _chunkABZYJK2DB();
    for (let architectureDiagramVXUJARFQBinding43 of architectureDiagramVXUJARFQInput12) {
      let architectureDiagramVXUJARFQBinding44 =
          architectureDiagramVXUJARFQInput11.append("g"),
        architectureDiagramVXUJARFQBinding45 =
          architectureDiagramVXUJARFQInput10.getConfigField("iconSize");
      if (architectureDiagramVXUJARFQBinding43.title) {
        let architectureDiagramVXUJARFQBinding112 =
          architectureDiagramVXUJARFQBinding44.append("g");
        await chunkJA3XYJ7ZN(
          architectureDiagramVXUJARFQBinding112,
          architectureDiagramVXUJARFQBinding43.title,
          {
            useHtmlLabels: false,
            width: architectureDiagramVXUJARFQBinding45 * 1.5,
            classes: "architecture-service-label",
          },
          architectureDiagramVXUJARFQBinding42,
        );
        architectureDiagramVXUJARFQBinding112
          .attr("dy", "1em")
          .attr("alignment-baseline", "middle")
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle");
        architectureDiagramVXUJARFQBinding112.attr(
          "transform",
          "translate(" +
            architectureDiagramVXUJARFQBinding45 / 2 +
            ", " +
            architectureDiagramVXUJARFQBinding45 +
            ")",
        );
      }
      let architectureDiagramVXUJARFQBinding46 =
        architectureDiagramVXUJARFQBinding44.append("g");
      if (architectureDiagramVXUJARFQBinding43.icon)
        architectureDiagramVXUJARFQBinding46.html(
          `<g>${await chunkJA3XYJ7ZR(
            architectureDiagramVXUJARFQBinding43.icon,
            {
              height: architectureDiagramVXUJARFQBinding45,
              width: architectureDiagramVXUJARFQBinding45,
              fallbackPrefix: $.prefix,
            },
          )}</g>`,
        );
      else if (architectureDiagramVXUJARFQBinding43.iconText) {
        architectureDiagramVXUJARFQBinding46.html(
          `<g>${await chunkJA3XYJ7ZR("blank", {
            height: architectureDiagramVXUJARFQBinding45,
            width: architectureDiagramVXUJARFQBinding45,
            fallbackPrefix: $.prefix,
          })}</g>`,
        );
        let architectureDiagramVXUJARFQBinding92 =
            architectureDiagramVXUJARFQBinding46
              .append("g")
              .append("foreignObject")
              .attr("width", architectureDiagramVXUJARFQBinding45)
              .attr("height", architectureDiagramVXUJARFQBinding45)
              .append("div")
              .attr("class", "node-icon-text")
              .attr(
                "style",
                `height: ${architectureDiagramVXUJARFQBinding45}px;`,
              )
              .append("div")
              .html(
                chunkABZYJK2DL(
                  architectureDiagramVXUJARFQBinding43.iconText,
                  architectureDiagramVXUJARFQBinding42,
                ),
              ),
          architectureDiagramVXUJARFQBinding93 =
            parseInt(
              window
                .getComputedStyle(
                  architectureDiagramVXUJARFQBinding92.node(),
                  null,
                )
                .getPropertyValue("font-size")
                .replace(/\D/g, ""),
            ) ?? 16;
        architectureDiagramVXUJARFQBinding92.attr(
          "style",
          `-webkit-line-clamp: ${Math.floor((architectureDiagramVXUJARFQBinding45 - 2) / architectureDiagramVXUJARFQBinding93)};`,
        );
      } else
        architectureDiagramVXUJARFQBinding46
          .append("path")
          .attr("class", "node-bkg")
          .attr("id", "node-" + architectureDiagramVXUJARFQBinding43.id)
          .attr(
            "d",
            `M0 ${architectureDiagramVXUJARFQBinding45} v${-architectureDiagramVXUJARFQBinding45} q0,-5 5,-5 h${architectureDiagramVXUJARFQBinding45} q5,0 5,5 v${architectureDiagramVXUJARFQBinding45} H0 Z`,
          );
      architectureDiagramVXUJARFQBinding44
        .attr("id", `service-${architectureDiagramVXUJARFQBinding43.id}`)
        .attr("class", "architecture-service");
      let { width, height } = architectureDiagramVXUJARFQBinding44
        .node()
        .getBBox();
      architectureDiagramVXUJARFQBinding43.width = width;
      architectureDiagramVXUJARFQBinding43.height = height;
      architectureDiagramVXUJARFQInput10.setElementForId(
        architectureDiagramVXUJARFQBinding43.id,
        architectureDiagramVXUJARFQBinding44,
      );
    }
    return 0;
  }, "drawServices");
  be = chunkAGHRB4JFN(function (
    architectureDiagramVXUJARFQInput38,
    architectureDiagramVXUJARFQInput39,
    architectureDiagramVXUJARFQInput40,
  ) {
    architectureDiagramVXUJARFQInput40.forEach((item) => {
      let architectureDiagramVXUJARFQBinding118 =
          architectureDiagramVXUJARFQInput39.append("g"),
        architectureDiagramVXUJARFQBinding119 =
          architectureDiagramVXUJARFQInput38.getConfigField("iconSize");
      architectureDiagramVXUJARFQBinding118
        .append("g")
        .append("rect")
        .attr("id", "node-" + item.id)
        .attr("fill-opacity", "0")
        .attr("width", architectureDiagramVXUJARFQBinding119)
        .attr("height", architectureDiagramVXUJARFQBinding119);
      architectureDiagramVXUJARFQBinding118.attr(
        "class",
        "architecture-junction",
      );
      let { width, height } =
        architectureDiagramVXUJARFQBinding118._groups[0][0].getBBox();
      architectureDiagramVXUJARFQBinding118.width = width;
      architectureDiagramVXUJARFQBinding118.height = height;
      architectureDiagramVXUJARFQInput38.setElementForId(
        item.id,
        architectureDiagramVXUJARFQBinding118,
      );
    });
  }, "drawJunctions");
  chunkJA3XYJ7ZA([
    {
      name: $.prefix,
      icons: $,
    },
  ]);
  cytoscape.use(architectureDiagramVXUJARFQBinding1.default);
  chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper1, "addServices");
  chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper2, "addJunctions");
  chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper3, "positionNodes");
  chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper4, "addGroups");
  chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper5, "addEdges");
  chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper6, "getAlignments");
  chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper7, "getRelativeConstraints");
  chunkAGHRB4JFN(architectureDiagramVXUJARFQHelper8, "layoutArchitecture");
  ArchitectureDiagramVXUJARFQ = {
    parser: architectureDiagramVXUJARFQBinding23,
    get db() {
      return new architectureDiagramVXUJARFQBinding21();
    },
    renderer: {
      draw: chunkAGHRB4JFN(
        async (
          architectureDiagramVXUJARFQInput27,
          architectureDiagramVXUJARFQInput28,
          architectureDiagramVXUJARFQInput29,
          architectureDiagramVXUJARFQInput30,
        ) => {
          let architectureDiagramVXUJARFQBinding81 =
              architectureDiagramVXUJARFQInput30.db,
            architectureDiagramVXUJARFQBinding82 =
              architectureDiagramVXUJARFQBinding81.getServices(),
            architectureDiagramVXUJARFQBinding83 =
              architectureDiagramVXUJARFQBinding81.getJunctions(),
            architectureDiagramVXUJARFQBinding84 =
              architectureDiagramVXUJARFQBinding81.getGroups(),
            architectureDiagramVXUJARFQBinding85 =
              architectureDiagramVXUJARFQBinding81.getEdges(),
            architectureDiagramVXUJARFQBinding86 =
              architectureDiagramVXUJARFQBinding81.getDataStructures(),
            architectureDiagramVXUJARFQBinding87 = chunkEXTU4WIEN(
              architectureDiagramVXUJARFQInput28,
            ),
            architectureDiagramVXUJARFQBinding88 =
              architectureDiagramVXUJARFQBinding87.append("g");
          architectureDiagramVXUJARFQBinding88.attr(
            "class",
            "architecture-edges",
          );
          let architectureDiagramVXUJARFQBinding89 =
            architectureDiagramVXUJARFQBinding87.append("g");
          architectureDiagramVXUJARFQBinding89.attr(
            "class",
            "architecture-services",
          );
          let architectureDiagramVXUJARFQBinding90 =
            architectureDiagramVXUJARFQBinding87.append("g");
          architectureDiagramVXUJARFQBinding90.attr(
            "class",
            "architecture-groups",
          );
          await architectureDiagramVXUJARFQBinding27(
            architectureDiagramVXUJARFQBinding81,
            architectureDiagramVXUJARFQBinding89,
            architectureDiagramVXUJARFQBinding82,
          );
          be(
            architectureDiagramVXUJARFQBinding81,
            architectureDiagramVXUJARFQBinding89,
            architectureDiagramVXUJARFQBinding83,
          );
          let architectureDiagramVXUJARFQBinding91 =
            await architectureDiagramVXUJARFQHelper8(
              architectureDiagramVXUJARFQBinding82,
              architectureDiagramVXUJARFQBinding83,
              architectureDiagramVXUJARFQBinding84,
              architectureDiagramVXUJARFQBinding85,
              architectureDiagramVXUJARFQBinding81,
              architectureDiagramVXUJARFQBinding86,
            );
          await _e(
            architectureDiagramVXUJARFQBinding88,
            architectureDiagramVXUJARFQBinding91,
            architectureDiagramVXUJARFQBinding81,
          );
          await architectureDiagramVXUJARFQBinding26(
            architectureDiagramVXUJARFQBinding90,
            architectureDiagramVXUJARFQBinding91,
            architectureDiagramVXUJARFQBinding81,
          );
          architectureDiagramVXUJARFQHelper3(
            architectureDiagramVXUJARFQBinding81,
            architectureDiagramVXUJARFQBinding91,
          );
          chunkABZYJK2DK(
            undefined,
            architectureDiagramVXUJARFQBinding87,
            architectureDiagramVXUJARFQBinding81.getConfigField("padding"),
            architectureDiagramVXUJARFQBinding81.getConfigField("useMaxWidth"),
          );
        },
        "draw",
      ),
    },
    styles: architectureDiagramVXUJARFQBinding24,
  };
})();
export { ArchitectureDiagramVXUJARFQ as diagram };
