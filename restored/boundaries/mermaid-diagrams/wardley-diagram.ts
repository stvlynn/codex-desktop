// Restored from ref/webview/assets/wardleyDiagram-NUSXRM2D-DgEI1b7c.js
// Mermaid wardley diagram definition (primary).
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
import { esmInit } from "../../runtime/rolldown-runtime";
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
  c as _chunkICPOFSXXC,
  v as _chunkICPOFSXXV,
} from "../../diagrams/mermaid-config-alt";
import {
  n as chunk426QAEUCN,
  t as chunk426QAEUCT,
} from "../../diagrams/select-svg-element-alt";
import {
  n as chunk4BX2VUABN,
  t as chunk4BX2VUABT,
} from "../../diagrams/populate-common-db";
import {
  mermaidParserCoreN,
  mermaidParserCoreT,
} from "../../diagrams/mermaid-parser-core";
function wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DInput72) {
  let wardleyDiagramNUSXRM2DBinding205 = chunkICPOFSXXB();
  return chunkICPOFSXXR(
    wardleyDiagramNUSXRM2DInput72.trim(),
    wardleyDiagramNUSXRM2DBinding205,
  );
}
function wardleyDiagramNUSXRM2DHelper2() {
  return chunkICPOFSXXB()["wardley-beta"];
}
function wardleyDiagramNUSXRM2DHelper3(
  wardleyDiagramNUSXRM2DInput17,
  wardleyDiagramNUSXRM2DInput18,
  wardleyDiagramNUSXRM2DInput19,
  wardleyDiagramNUSXRM2DInput20,
  wardleyDiagramNUSXRM2DInput21,
  wardleyDiagramNUSXRM2DInput22,
  wardleyDiagramNUSXRM2DInput23,
  wardleyDiagramNUSXRM2DInput24,
  wardleyDiagramNUSXRM2DInput25,
) {
  wardleyDiagramNUSXRM2DBinding8.addNode({
    id: wardleyDiagramNUSXRM2DInput17,
    label: wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DInput18),
    x: wardleyDiagramNUSXRM2DInput19,
    y: wardleyDiagramNUSXRM2DInput20,
    className: wardleyDiagramNUSXRM2DInput21,
    labelOffsetX: wardleyDiagramNUSXRM2DInput22,
    labelOffsetY: wardleyDiagramNUSXRM2DInput23,
    inertia: wardleyDiagramNUSXRM2DInput24,
    sourceStrategy: wardleyDiagramNUSXRM2DInput25,
  });
}
function wardleyDiagramNUSXRM2DHelper4(
  wardleyDiagramNUSXRM2DInput36,
  wardleyDiagramNUSXRM2DInput37,
  wardleyDiagramNUSXRM2DInput38 = false,
  wardleyDiagramNUSXRM2DInput39,
  wardleyDiagramNUSXRM2DInput40,
) {
  wardleyDiagramNUSXRM2DBinding8.addLink({
    source: wardleyDiagramNUSXRM2DInput36,
    target: wardleyDiagramNUSXRM2DInput37,
    dashed: wardleyDiagramNUSXRM2DInput38,
    label: wardleyDiagramNUSXRM2DInput39,
    flow: wardleyDiagramNUSXRM2DInput40,
  });
}
function wardleyDiagramNUSXRM2DHelper5(
  wardleyDiagramNUSXRM2DInput46,
  wardleyDiagramNUSXRM2DInput47,
  wardleyDiagramNUSXRM2DInput48,
) {
  wardleyDiagramNUSXRM2DBinding8.addTrend({
    nodeId: wardleyDiagramNUSXRM2DInput46,
    targetX: wardleyDiagramNUSXRM2DInput47,
    targetY: wardleyDiagramNUSXRM2DInput48,
  });
}
function wardleyDiagramNUSXRM2DHelper6(
  wardleyDiagramNUSXRM2DInput41,
  wardleyDiagramNUSXRM2DInput42,
  wardleyDiagramNUSXRM2DInput43,
) {
  wardleyDiagramNUSXRM2DBinding8.addAnnotation({
    number: wardleyDiagramNUSXRM2DInput41,
    coordinates: wardleyDiagramNUSXRM2DInput42,
    text: wardleyDiagramNUSXRM2DInput43
      ? wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DInput43)
      : undefined,
  });
}
function wardleyDiagramNUSXRM2DHelper7(
  wardleyDiagramNUSXRM2DInput64,
  wardleyDiagramNUSXRM2DInput65,
  wardleyDiagramNUSXRM2DInput66,
) {
  wardleyDiagramNUSXRM2DBinding8.addNote({
    text: wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DInput64),
    x: wardleyDiagramNUSXRM2DInput65,
    y: wardleyDiagramNUSXRM2DInput66,
  });
}
function wardleyDiagramNUSXRM2DHelper8(
  wardleyDiagramNUSXRM2DInput55,
  wardleyDiagramNUSXRM2DInput56,
  wardleyDiagramNUSXRM2DInput57,
) {
  wardleyDiagramNUSXRM2DBinding8.addAccelerator({
    name: wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DInput55),
    x: wardleyDiagramNUSXRM2DInput56,
    y: wardleyDiagramNUSXRM2DInput57,
  });
}
function wardleyDiagramNUSXRM2DHelper9(
  wardleyDiagramNUSXRM2DInput49,
  wardleyDiagramNUSXRM2DInput50,
  wardleyDiagramNUSXRM2DInput51,
) {
  wardleyDiagramNUSXRM2DBinding8.addDeaccelerator({
    name: wardleyDiagramNUSXRM2DHelper1(wardleyDiagramNUSXRM2DInput49),
    x: wardleyDiagramNUSXRM2DInput50,
    y: wardleyDiagramNUSXRM2DInput51,
  });
}
function wardleyDiagramNUSXRM2DHelper10(
  wardleyDiagramNUSXRM2DInput76,
  wardleyDiagramNUSXRM2DInput77,
) {
  wardleyDiagramNUSXRM2DBinding8.setAnnotationsBox(
    wardleyDiagramNUSXRM2DInput76,
    wardleyDiagramNUSXRM2DInput77,
  );
}
function wardleyDiagramNUSXRM2DHelper11(
  wardleyDiagramNUSXRM2DInput93,
  wardleyDiagramNUSXRM2DInput94,
) {
  wardleyDiagramNUSXRM2DBinding8.setSize(
    wardleyDiagramNUSXRM2DInput93,
    wardleyDiagramNUSXRM2DInput94,
  );
}
function wardleyDiagramNUSXRM2DHelper12(wardleyDiagramNUSXRM2DInput95) {
  wardleyDiagramNUSXRM2DBinding8.startPipeline(wardleyDiagramNUSXRM2DInput95);
}
function wardleyDiagramNUSXRM2DHelper13(
  wardleyDiagramNUSXRM2DInput74,
  wardleyDiagramNUSXRM2DInput75,
) {
  wardleyDiagramNUSXRM2DBinding8.addPipelineComponent(
    wardleyDiagramNUSXRM2DInput74,
    wardleyDiagramNUSXRM2DInput75,
  );
}
function wardleyDiagramNUSXRM2DHelper14(wardleyDiagramNUSXRM2DInput12) {
  let wardleyDiagramNUSXRM2DBinding176 = {};
  wardleyDiagramNUSXRM2DInput12.xLabel &&
    (wardleyDiagramNUSXRM2DBinding176.xLabel = wardleyDiagramNUSXRM2DHelper1(
      wardleyDiagramNUSXRM2DInput12.xLabel,
    ));
  wardleyDiagramNUSXRM2DInput12.yLabel &&
    (wardleyDiagramNUSXRM2DBinding176.yLabel = wardleyDiagramNUSXRM2DHelper1(
      wardleyDiagramNUSXRM2DInput12.yLabel,
    ));
  wardleyDiagramNUSXRM2DInput12.stages &&
    (wardleyDiagramNUSXRM2DBinding176.stages =
      wardleyDiagramNUSXRM2DInput12.stages.map((item) =>
        wardleyDiagramNUSXRM2DHelper1(item),
      ));
  wardleyDiagramNUSXRM2DInput12.stageBoundaries &&
    (wardleyDiagramNUSXRM2DBinding176.stageBoundaries =
      wardleyDiagramNUSXRM2DInput12.stageBoundaries);
  wardleyDiagramNUSXRM2DBinding8.setAxes(wardleyDiagramNUSXRM2DBinding176);
}
function wardleyDiagramNUSXRM2DHelper15(wardleyDiagramNUSXRM2DInput92) {
  return wardleyDiagramNUSXRM2DBinding8.getNode(wardleyDiagramNUSXRM2DInput92);
}
function wardleyDiagramNUSXRM2DHelper16() {
  return wardleyDiagramNUSXRM2DBinding8.build();
}
function wardleyDiagramNUSXRM2DHelper17() {
  wardleyDiagramNUSXRM2DBinding8.clear();
  _chunkICPOFSXXA();
}
var wardleyDiagramNUSXRM2DBinding1,
  wardleyDiagramNUSXRM2DBinding2,
  wardleyDiagramNUSXRM2DBinding3,
  wardleyDiagramNUSXRM2DBinding4,
  wardleyDiagramNUSXRM2DBinding5,
  wardleyDiagramNUSXRM2DBinding6,
  wardleyDiagramNUSXRM2DBinding7,
  wardleyDiagramNUSXRM2DBinding8,
  wardleyDiagramNUSXRM2DBinding9,
  wardleyDiagramNUSXRM2DBinding10,
  wardleyDiagramNUSXRM2DBinding11,
  wardleyDiagramNUSXRM2DBinding12,
  WardleyDiagramNUSXRM2D;
esmInit(() => {
  chunk426QAEUCT();
  chunk4BX2VUABT();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  wardleyDiagramNUSXRM2DBinding1 = chunkAGHRB4JFN(
    (wardleyDiagramNUSXRM2DInput15, wardleyDiagramNUSXRM2DInput16) => {
      let wardleyDiagramNUSXRM2DBinding185 =
        wardleyDiagramNUSXRM2DInput15 <= 1
          ? wardleyDiagramNUSXRM2DInput15 * 100
          : wardleyDiagramNUSXRM2DInput15;
      if (
        wardleyDiagramNUSXRM2DBinding185 < 0 ||
        wardleyDiagramNUSXRM2DBinding185 > 100
      )
        throw Error(
          `${wardleyDiagramNUSXRM2DInput16} must be between 0-1 (decimal) or 0-100 (percentage). Received: ${wardleyDiagramNUSXRM2DInput15}`,
        );
      return wardleyDiagramNUSXRM2DBinding185;
    },
    "toPercent",
  );
  wardleyDiagramNUSXRM2DBinding2 = chunkAGHRB4JFN(
    (
      wardleyDiagramNUSXRM2DInput52,
      wardleyDiagramNUSXRM2DInput53,
      wardleyDiagramNUSXRM2DInput54,
    ) => ({
      x: wardleyDiagramNUSXRM2DBinding1(
        wardleyDiagramNUSXRM2DInput53,
        `${wardleyDiagramNUSXRM2DInput54} evolution`,
      ),
      y: wardleyDiagramNUSXRM2DBinding1(
        wardleyDiagramNUSXRM2DInput52,
        `${wardleyDiagramNUSXRM2DInput54} visibility`,
      ),
    }),
    "toCoordinates",
  );
  wardleyDiagramNUSXRM2DBinding3 = chunkAGHRB4JFN(
    (wardleyDiagramNUSXRM2DInput30) => {
      if (wardleyDiagramNUSXRM2DInput30) {
        if (wardleyDiagramNUSXRM2DInput30 === "+<>") return "bidirectional";
        if (wardleyDiagramNUSXRM2DInput30 === "+<") return "backward";
        if (wardleyDiagramNUSXRM2DInput30 === "+>") return "forward";
      }
    },
    "getFlowFromPort",
  );
  wardleyDiagramNUSXRM2DBinding4 = chunkAGHRB4JFN(
    (wardleyDiagramNUSXRM2DInput11) => {
      if (!wardleyDiagramNUSXRM2DInput11?.startsWith("+")) return {};
      let wardleyDiagramNUSXRM2DBinding164 = /^\+'([^']*)'/.exec(
        wardleyDiagramNUSXRM2DInput11,
      )?.[1];
      return wardleyDiagramNUSXRM2DInput11.includes("<>")
        ? {
            flow: "bidirectional",
            label: wardleyDiagramNUSXRM2DBinding164,
          }
        : wardleyDiagramNUSXRM2DInput11.includes("<")
          ? {
              flow: "backward",
              label: wardleyDiagramNUSXRM2DBinding164,
            }
          : wardleyDiagramNUSXRM2DInput11.includes(">")
            ? {
                flow: "forward",
                label: wardleyDiagramNUSXRM2DBinding164,
              }
            : {
                label: wardleyDiagramNUSXRM2DBinding164,
              };
    },
    "extractFlowFromArrow",
  );
  wardleyDiagramNUSXRM2DBinding5 = chunkAGHRB4JFN(
    (wardleyDiagramNUSXRM2DInput5, wardleyDiagramNUSXRM2DInput6) => {
      if (
        (chunk4BX2VUABN(
          wardleyDiagramNUSXRM2DInput5,
          wardleyDiagramNUSXRM2DInput6,
        ),
        wardleyDiagramNUSXRM2DInput5.size &&
          wardleyDiagramNUSXRM2DInput6.setSize(
            wardleyDiagramNUSXRM2DInput5.size.width,
            wardleyDiagramNUSXRM2DInput5.size.height,
          ),
        wardleyDiagramNUSXRM2DInput5.evolution)
      ) {
        let wardleyDiagramNUSXRM2DBinding156 =
            wardleyDiagramNUSXRM2DInput5.evolution.stages.map((item) =>
              item.secondName
                ? `${item.name.trim()} / ${item.secondName.trim()}`
                : item.name.trim(),
            ),
          wardleyDiagramNUSXRM2DBinding157 =
            wardleyDiagramNUSXRM2DInput5.evolution.stages
              .filter((item) => item.boundary !== undefined)
              .map((item) => item.boundary);
        wardleyDiagramNUSXRM2DInput6.updateAxes({
          stages: wardleyDiagramNUSXRM2DBinding156,
          stageBoundaries: wardleyDiagramNUSXRM2DBinding157,
        });
      }
      if (
        (wardleyDiagramNUSXRM2DInput5.anchors.forEach((item) => {
          let wardleyDiagramNUSXRM2DBinding197 = wardleyDiagramNUSXRM2DBinding2(
            item.visibility,
            item.evolution,
            `Anchor "${item.name}"`,
          );
          wardleyDiagramNUSXRM2DInput6.addNode(
            item.name,
            item.name,
            wardleyDiagramNUSXRM2DBinding197.x,
            wardleyDiagramNUSXRM2DBinding197.y,
            "anchor",
          );
        }),
        wardleyDiagramNUSXRM2DInput5.components.forEach((item) => {
          let wardleyDiagramNUSXRM2DBinding152 = wardleyDiagramNUSXRM2DBinding2(
              item.visibility,
              item.evolution,
              `Component "${item.name}"`,
            ),
            wardleyDiagramNUSXRM2DBinding153 = item.label
              ? (item.label.negX ? -1 : 1) * item.label.offsetX
              : undefined,
            wardleyDiagramNUSXRM2DBinding154 = item.label
              ? (item.label.negY ? -1 : 1) * item.label.offsetY
              : undefined,
            wardleyDiagramNUSXRM2DBinding155 = item.decorator?.strategy;
          wardleyDiagramNUSXRM2DInput6.addNode(
            item.name,
            item.name,
            wardleyDiagramNUSXRM2DBinding152.x,
            wardleyDiagramNUSXRM2DBinding152.y,
            "component",
            wardleyDiagramNUSXRM2DBinding153,
            wardleyDiagramNUSXRM2DBinding154,
            item.inertia,
            wardleyDiagramNUSXRM2DBinding155,
          );
        }),
        wardleyDiagramNUSXRM2DInput5.notes.forEach((item) => {
          let wardleyDiagramNUSXRM2DBinding203 = wardleyDiagramNUSXRM2DBinding2(
            item.visibility,
            item.evolution,
            `Note "${item.text}"`,
          );
          wardleyDiagramNUSXRM2DInput6.addNote(
            item.text,
            wardleyDiagramNUSXRM2DBinding203.x,
            wardleyDiagramNUSXRM2DBinding203.y,
          );
        }),
        wardleyDiagramNUSXRM2DInput5.pipelines.forEach((item) => {
          let wardleyDiagramNUSXRM2DBinding78 =
            wardleyDiagramNUSXRM2DInput6.getNode(item.parent);
          if (
            !wardleyDiagramNUSXRM2DBinding78 ||
            typeof wardleyDiagramNUSXRM2DBinding78.y != "number"
          )
            throw Error(
              `Pipeline "${item.parent}" must reference an existing component with coordinates.`,
            );
          let wardleyDiagramNUSXRM2DBinding79 =
            wardleyDiagramNUSXRM2DBinding78.y;
          wardleyDiagramNUSXRM2DInput6.startPipeline(item.parent);
          item.components.forEach((_item) => {
            let wardleyDiagramNUSXRM2DBinding108 = `${item.parent}_${_item.name}`,
              wardleyDiagramNUSXRM2DBinding109 = _item.label
                ? (_item.label.negX ? -1 : 1) * _item.label.offsetX
                : undefined,
              wardleyDiagramNUSXRM2DBinding110 = _item.label
                ? (_item.label.negY ? -1 : 1) * _item.label.offsetY
                : undefined,
              wardleyDiagramNUSXRM2DBinding111 = wardleyDiagramNUSXRM2DBinding1(
                _item.evolution,
                `Pipeline component "${_item.name}" evolution`,
              );
            wardleyDiagramNUSXRM2DInput6.addNode(
              wardleyDiagramNUSXRM2DBinding108,
              _item.name,
              wardleyDiagramNUSXRM2DBinding111,
              wardleyDiagramNUSXRM2DBinding79,
              "pipeline-component",
              wardleyDiagramNUSXRM2DBinding109,
              wardleyDiagramNUSXRM2DBinding110,
            );
            wardleyDiagramNUSXRM2DInput6.addPipelineComponent(
              item.parent,
              wardleyDiagramNUSXRM2DBinding108,
            );
          });
        }),
        wardleyDiagramNUSXRM2DInput5.links.forEach((item) => {
          let wardleyDiagramNUSXRM2DBinding160 =
              !!item.arrow &&
              (item.arrow.includes("-.->") || item.arrow.includes(".-.")),
            wardleyDiagramNUSXRM2DBinding161 =
              wardleyDiagramNUSXRM2DBinding3(item.fromPort) ??
              wardleyDiagramNUSXRM2DBinding3(item.toPort),
            { flow, label } = wardleyDiagramNUSXRM2DBinding4(item.arrow);
          !wardleyDiagramNUSXRM2DBinding161 &&
            flow &&
            (wardleyDiagramNUSXRM2DBinding161 = flow);
          let wardleyDiagramNUSXRM2DBinding162 = item.linkLabel,
            wardleyDiagramNUSXRM2DBinding163 =
              label ?? wardleyDiagramNUSXRM2DBinding162;
          wardleyDiagramNUSXRM2DInput6.addLink(
            item.from,
            item.to,
            wardleyDiagramNUSXRM2DBinding160,
            wardleyDiagramNUSXRM2DBinding163,
            wardleyDiagramNUSXRM2DBinding161,
          );
        }),
        wardleyDiagramNUSXRM2DInput5.evolves.forEach((item) => {
          let wardleyDiagramNUSXRM2DBinding180 =
            wardleyDiagramNUSXRM2DInput6.getNode(item.component);
          if (wardleyDiagramNUSXRM2DBinding180?.y !== undefined) {
            let wardleyDiagramNUSXRM2DBinding199 =
              wardleyDiagramNUSXRM2DBinding1(
                item.target,
                `Evolve target for "${item.component}"`,
              );
            wardleyDiagramNUSXRM2DInput6.addTrend(
              item.component,
              wardleyDiagramNUSXRM2DBinding199,
              wardleyDiagramNUSXRM2DBinding180.y,
            );
          }
        }),
        wardleyDiagramNUSXRM2DInput5.annotations.length > 0)
      ) {
        let wardleyDiagramNUSXRM2DBinding200 =
            wardleyDiagramNUSXRM2DInput5.annotations[0],
          wardleyDiagramNUSXRM2DBinding201 = wardleyDiagramNUSXRM2DBinding2(
            wardleyDiagramNUSXRM2DBinding200.x,
            wardleyDiagramNUSXRM2DBinding200.y,
            "Annotations box",
          );
        wardleyDiagramNUSXRM2DInput6.setAnnotationsBox(
          wardleyDiagramNUSXRM2DBinding201.x,
          wardleyDiagramNUSXRM2DBinding201.y,
        );
      }
      wardleyDiagramNUSXRM2DInput5.annotation.forEach((item) => {
        let wardleyDiagramNUSXRM2DBinding198 = wardleyDiagramNUSXRM2DBinding2(
          item.x,
          item.y,
          `Annotation ${item.number}`,
        );
        wardleyDiagramNUSXRM2DInput6.addAnnotation(
          item.number,
          [
            {
              x: wardleyDiagramNUSXRM2DBinding198.x,
              y: wardleyDiagramNUSXRM2DBinding198.y,
            },
          ],
          item.text,
        );
      });
      wardleyDiagramNUSXRM2DInput5.accelerators.forEach((item) => {
        let wardleyDiagramNUSXRM2DBinding204 = wardleyDiagramNUSXRM2DBinding2(
          item.x,
          item.y,
          `Accelerator "${item.name}"`,
        );
        wardleyDiagramNUSXRM2DInput6.addAccelerator(
          item.name,
          wardleyDiagramNUSXRM2DBinding204.x,
          wardleyDiagramNUSXRM2DBinding204.y,
        );
      });
      wardleyDiagramNUSXRM2DInput5.deaccelerators.forEach((item) => {
        let wardleyDiagramNUSXRM2DBinding202 = wardleyDiagramNUSXRM2DBinding2(
          item.x,
          item.y,
          `Deaccelerator "${item.name}"`,
        );
        wardleyDiagramNUSXRM2DInput6.addDeaccelerator(
          item.name,
          wardleyDiagramNUSXRM2DBinding202.x,
          wardleyDiagramNUSXRM2DBinding202.y,
        );
      });
    },
    "populateDb",
  );
  wardleyDiagramNUSXRM2DBinding6 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (wardleyDiagramNUSXRM2DInput9) => {
      let wardleyDiagramNUSXRM2DBinding148 = await mermaidParserCoreN(
        "wardley",
        wardleyDiagramNUSXRM2DInput9,
      );
      chunkAGHRB4JFI.debug(wardleyDiagramNUSXRM2DBinding148);
      let wardleyDiagramNUSXRM2DBinding149 =
        wardleyDiagramNUSXRM2DBinding6.parser?.yy;
      if (
        !wardleyDiagramNUSXRM2DBinding149 ||
        typeof wardleyDiagramNUSXRM2DBinding149.addNode != "function"
      )
        throw Error(
          "parser.parser?.yy was not a WardleyDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
        );
      wardleyDiagramNUSXRM2DBinding5(
        wardleyDiagramNUSXRM2DBinding148,
        wardleyDiagramNUSXRM2DBinding149,
      );
    }, "parse"),
  };
  wardleyDiagramNUSXRM2DBinding7 = class {
    constructor() {
      this.nodes = new Map();
      this.links = [];
      this.trends = new Map();
      this.pipelines = new Map();
      this.annotations = [];
      this.notes = [];
      this.accelerators = [];
      this.deaccelerators = [];
      this.axes = {};
    }
    static {
      chunkAGHRB4JFN(this, "WardleyBuilder");
    }
    addNode(wardleyDiagramNUSXRM2DInput10) {
      let wardleyDiagramNUSXRM2DBinding158 = this.nodes.get(
          wardleyDiagramNUSXRM2DInput10.id,
        ) ?? {
          id: wardleyDiagramNUSXRM2DInput10.id,
          label: wardleyDiagramNUSXRM2DInput10.label,
        },
        wardleyDiagramNUSXRM2DBinding159 = {
          ...wardleyDiagramNUSXRM2DBinding158,
          ...wardleyDiagramNUSXRM2DInput10,
          className:
            wardleyDiagramNUSXRM2DInput10.className ??
            wardleyDiagramNUSXRM2DBinding158.className,
          labelOffsetX:
            wardleyDiagramNUSXRM2DInput10.labelOffsetX ??
            wardleyDiagramNUSXRM2DBinding158.labelOffsetX,
          labelOffsetY:
            wardleyDiagramNUSXRM2DInput10.labelOffsetY ??
            wardleyDiagramNUSXRM2DBinding158.labelOffsetY,
        };
      this.nodes.set(
        wardleyDiagramNUSXRM2DInput10.id,
        wardleyDiagramNUSXRM2DBinding159,
      );
    }
    addLink(wardleyDiagramNUSXRM2DInput78) {
      this.links.push(wardleyDiagramNUSXRM2DInput78);
    }
    addTrend(wardleyDiagramNUSXRM2DInput71) {
      this.trends.set(
        wardleyDiagramNUSXRM2DInput71.nodeId,
        wardleyDiagramNUSXRM2DInput71,
      );
    }
    startPipeline(wardleyDiagramNUSXRM2DInput31) {
      this.pipelines.set(wardleyDiagramNUSXRM2DInput31, {
        nodeId: wardleyDiagramNUSXRM2DInput31,
        componentIds: [],
      });
      let wardleyDiagramNUSXRM2DBinding190 = this.nodes.get(
        wardleyDiagramNUSXRM2DInput31,
      );
      wardleyDiagramNUSXRM2DBinding190 &&
        (wardleyDiagramNUSXRM2DBinding190.isPipelineParent = true);
    }
    addPipelineComponent(
      wardleyDiagramNUSXRM2DInput28,
      wardleyDiagramNUSXRM2DInput29,
    ) {
      let wardleyDiagramNUSXRM2DBinding187 = this.pipelines.get(
        wardleyDiagramNUSXRM2DInput28,
      );
      wardleyDiagramNUSXRM2DBinding187 &&
        wardleyDiagramNUSXRM2DBinding187.componentIds.push(
          wardleyDiagramNUSXRM2DInput29,
        );
      let wardleyDiagramNUSXRM2DBinding188 = this.nodes.get(
        wardleyDiagramNUSXRM2DInput29,
      );
      wardleyDiagramNUSXRM2DBinding188 &&
        (wardleyDiagramNUSXRM2DBinding188.inPipeline = true);
    }
    addAnnotation(wardleyDiagramNUSXRM2DInput70) {
      this.annotations.push(wardleyDiagramNUSXRM2DInput70);
    }
    addNote(wardleyDiagramNUSXRM2DInput79) {
      this.notes.push(wardleyDiagramNUSXRM2DInput79);
    }
    addAccelerator(wardleyDiagramNUSXRM2DInput69) {
      this.accelerators.push(wardleyDiagramNUSXRM2DInput69);
    }
    addDeaccelerator(wardleyDiagramNUSXRM2DInput63) {
      this.deaccelerators.push(wardleyDiagramNUSXRM2DInput63);
    }
    setAnnotationsBox(
      wardleyDiagramNUSXRM2DInput44,
      wardleyDiagramNUSXRM2DInput45,
    ) {
      this.annotationsBox = {
        x: wardleyDiagramNUSXRM2DInput44,
        y: wardleyDiagramNUSXRM2DInput45,
      };
    }
    setAxes(wardleyDiagramNUSXRM2DInput67) {
      this.axes = {
        ...this.axes,
        ...wardleyDiagramNUSXRM2DInput67,
      };
    }
    setSize(wardleyDiagramNUSXRM2DInput58, wardleyDiagramNUSXRM2DInput59) {
      this.size = {
        width: wardleyDiagramNUSXRM2DInput58,
        height: wardleyDiagramNUSXRM2DInput59,
      };
    }
    getNode(wardleyDiagramNUSXRM2DInput73) {
      return this.nodes.get(wardleyDiagramNUSXRM2DInput73);
    }
    build() {
      let wardleyDiagramNUSXRM2DBinding84 = [];
      for (let wardleyDiagramNUSXRM2DBinding186 of this.nodes.values()) {
        if (
          typeof wardleyDiagramNUSXRM2DBinding186.x != "number" ||
          typeof wardleyDiagramNUSXRM2DBinding186.y != "number"
        )
          throw Error(
            `Node "${wardleyDiagramNUSXRM2DBinding186.label}" is missing coordinates`,
          );
        wardleyDiagramNUSXRM2DBinding84.push(wardleyDiagramNUSXRM2DBinding186);
      }
      return {
        nodes: wardleyDiagramNUSXRM2DBinding84,
        links: [...this.links],
        trends: [...this.trends.values()],
        pipelines: [...this.pipelines.values()],
        annotations: [...this.annotations],
        notes: [...this.notes],
        accelerators: [...this.accelerators],
        deaccelerators: [...this.deaccelerators],
        annotationsBox: this.annotationsBox,
        axes: {
          ...this.axes,
        },
        size: this.size,
      };
    }
    clear() {
      this.nodes.clear();
      this.links = [];
      this.trends.clear();
      this.pipelines.clear();
      this.annotations = [];
      this.notes = [];
      this.accelerators = [];
      this.deaccelerators = [];
      this.annotationsBox = undefined;
      this.axes = {};
      this.size = undefined;
    }
  };
  wardleyDiagramNUSXRM2DBinding8 = new wardleyDiagramNUSXRM2DBinding7();
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper1, "textSanitizer");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper2, "getConfig");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper3, "addNode");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper4, "addLink");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper5, "addTrend");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper6, "addAnnotation");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper7, "addNote");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper8, "addAccelerator");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper9, "addDeaccelerator");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper10, "setAnnotationsBox");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper11, "setSize");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper12, "startPipeline");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper13, "addPipelineComponent");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper14, "updateAxes");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper15, "getNode");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper16, "getWardleyData");
  chunkAGHRB4JFN(wardleyDiagramNUSXRM2DHelper17, "clear");
  wardleyDiagramNUSXRM2DBinding9 = {
    getConfig: wardleyDiagramNUSXRM2DHelper2,
    addNode: wardleyDiagramNUSXRM2DHelper3,
    addLink: wardleyDiagramNUSXRM2DHelper4,
    addTrend: wardleyDiagramNUSXRM2DHelper5,
    addAnnotation: wardleyDiagramNUSXRM2DHelper6,
    addNote: wardleyDiagramNUSXRM2DHelper7,
    addAccelerator: wardleyDiagramNUSXRM2DHelper8,
    addDeaccelerator: wardleyDiagramNUSXRM2DHelper9,
    setAnnotationsBox: wardleyDiagramNUSXRM2DHelper10,
    setSize: wardleyDiagramNUSXRM2DHelper11,
    startPipeline: wardleyDiagramNUSXRM2DHelper12,
    addPipelineComponent: wardleyDiagramNUSXRM2DHelper13,
    updateAxes: wardleyDiagramNUSXRM2DHelper14,
    getNode: wardleyDiagramNUSXRM2DHelper15,
    getWardleyData: wardleyDiagramNUSXRM2DHelper16,
    clear: wardleyDiagramNUSXRM2DHelper17,
    setAccTitle: chunkICPOFSXXH,
    getAccTitle: _chunkICPOFSXXV,
    setDiagramTitle: chunkICPOFSXXG,
    getDiagramTitle: chunkICPOFSXXC,
    getAccDescription: chunkICPOFSXXUnderscore,
    setAccDescription: chunkICPOFSXXV,
  };
  wardleyDiagramNUSXRM2DBinding10 = [
    "Genesis",
    "Custom Built",
    "Product",
    "Commodity",
  ];
  wardleyDiagramNUSXRM2DBinding11 = chunkAGHRB4JFN(() => {
    let { themeVariables } = chunkICPOFSXXB();
    return {
      backgroundColor:
        themeVariables.wardley?.backgroundColor ??
        themeVariables.background ??
        "#fff",
      axisColor: themeVariables.wardley?.axisColor ?? "#000",
      axisTextColor:
        themeVariables.wardley?.axisTextColor ??
        themeVariables.primaryTextColor ??
        "#222",
      gridColor:
        themeVariables.wardley?.gridColor ?? "rgba(100, 100, 100, 0.2)",
      componentFill: themeVariables.wardley?.componentFill ?? "#fff",
      componentStroke: themeVariables.wardley?.componentStroke ?? "#000",
      componentLabelColor:
        themeVariables.wardley?.componentLabelColor ??
        themeVariables.primaryTextColor ??
        "#222",
      linkStroke: themeVariables.wardley?.linkStroke ?? "#000",
      evolutionStroke: themeVariables.wardley?.evolutionStroke ?? "#dc3545",
      annotationStroke: themeVariables.wardley?.annotationStroke ?? "#000",
      annotationTextColor:
        themeVariables.wardley?.annotationTextColor ??
        themeVariables.primaryTextColor ??
        "#222",
      annotationFill:
        themeVariables.wardley?.annotationFill ??
        themeVariables.background ??
        "#fff",
    };
  }, "getTheme");
  wardleyDiagramNUSXRM2DBinding12 = chunkAGHRB4JFN(() => {
    let wardleyDiagramNUSXRM2DBinding117 = chunkICPOFSXXB()["wardley-beta"];
    return {
      width: wardleyDiagramNUSXRM2DBinding117?.width ?? 900,
      height: wardleyDiagramNUSXRM2DBinding117?.height ?? 600,
      padding: wardleyDiagramNUSXRM2DBinding117?.padding ?? 48,
      nodeRadius: wardleyDiagramNUSXRM2DBinding117?.nodeRadius ?? 6,
      nodeLabelOffset: wardleyDiagramNUSXRM2DBinding117?.nodeLabelOffset ?? 8,
      axisFontSize: wardleyDiagramNUSXRM2DBinding117?.axisFontSize ?? 12,
      labelFontSize: wardleyDiagramNUSXRM2DBinding117?.labelFontSize ?? 10,
      showGrid: wardleyDiagramNUSXRM2DBinding117?.showGrid ?? false,
      useMaxWidth: wardleyDiagramNUSXRM2DBinding117?.useMaxWidth ?? true,
    };
  }, "getConfigValues");
  WardleyDiagramNUSXRM2D = {
    parser: wardleyDiagramNUSXRM2DBinding6,
    db: wardleyDiagramNUSXRM2DBinding9,
    renderer: {
      draw: chunkAGHRB4JFN(
        (
          wardleyDiagramNUSXRM2DInput1,
          wardleyDiagramNUSXRM2DInput2,
          wardleyDiagramNUSXRM2DInput3,
          wardleyDiagramNUSXRM2DInput4,
        ) => {
          chunkAGHRB4JFI.debug(
            "Rendering Wardley map\n" + wardleyDiagramNUSXRM2DInput1,
          );
          let wardleyDiagramNUSXRM2DBinding13 =
              wardleyDiagramNUSXRM2DBinding12(),
            wardleyDiagramNUSXRM2DBinding14 = wardleyDiagramNUSXRM2DBinding11(),
            wardleyDiagramNUSXRM2DBinding15 =
              wardleyDiagramNUSXRM2DBinding13.nodeRadius * 1.6,
            wardleyDiagramNUSXRM2DBinding16 = wardleyDiagramNUSXRM2DInput4.db,
            wardleyDiagramNUSXRM2DBinding17 =
              wardleyDiagramNUSXRM2DBinding16.getWardleyData(),
            wardleyDiagramNUSXRM2DBinding18 =
              wardleyDiagramNUSXRM2DBinding16.getDiagramTitle(),
            wardleyDiagramNUSXRM2DBinding19 =
              wardleyDiagramNUSXRM2DBinding17.size?.width ??
              wardleyDiagramNUSXRM2DBinding13.width,
            wardleyDiagramNUSXRM2DBinding20 =
              wardleyDiagramNUSXRM2DBinding17.size?.height ??
              wardleyDiagramNUSXRM2DBinding13.height,
            wardleyDiagramNUSXRM2DBinding21 = chunk426QAEUCN(
              wardleyDiagramNUSXRM2DInput2,
            );
          wardleyDiagramNUSXRM2DBinding21.selectAll("*").remove();
          _chunkICPOFSXXC(
            wardleyDiagramNUSXRM2DBinding21,
            wardleyDiagramNUSXRM2DBinding20,
            wardleyDiagramNUSXRM2DBinding19,
            wardleyDiagramNUSXRM2DBinding13.useMaxWidth,
          );
          wardleyDiagramNUSXRM2DBinding21.attr(
            "viewBox",
            `0 0 ${wardleyDiagramNUSXRM2DBinding19} ${wardleyDiagramNUSXRM2DBinding20}`,
          );
          let wardleyDiagramNUSXRM2DBinding22 = wardleyDiagramNUSXRM2DBinding21
              .append("g")
              .attr("class", "wardley-map"),
            wardleyDiagramNUSXRM2DBinding23 =
              wardleyDiagramNUSXRM2DBinding21.append("defs");
          wardleyDiagramNUSXRM2DBinding23
            .append("marker")
            .attr("id", `arrow-${wardleyDiagramNUSXRM2DInput2}`)
            .attr("viewBox", "0 0 10 10")
            .attr("refX", 9)
            .attr("refY", 5)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto-start-reverse")
            .append("path")
            .attr("d", "M 0 0 L 10 5 L 0 10 z")
            .attr("fill", wardleyDiagramNUSXRM2DBinding14.evolutionStroke)
            .attr("stroke", "none");
          wardleyDiagramNUSXRM2DBinding23
            .append("marker")
            .attr("id", `link-arrow-end-${wardleyDiagramNUSXRM2DInput2}`)
            .attr("viewBox", "0 0 10 10")
            .attr("refX", 9)
            .attr("refY", 5)
            .attr("markerWidth", 5)
            .attr("markerHeight", 5)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M 0 0 L 10 5 L 0 10 z")
            .attr("fill", wardleyDiagramNUSXRM2DBinding14.linkStroke)
            .attr("stroke", "none");
          wardleyDiagramNUSXRM2DBinding23
            .append("marker")
            .attr("id", `link-arrow-start-${wardleyDiagramNUSXRM2DInput2}`)
            .attr("viewBox", "0 0 10 10")
            .attr("refX", 1)
            .attr("refY", 5)
            .attr("markerWidth", 5)
            .attr("markerHeight", 5)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M 10 0 L 0 5 L 10 10 z")
            .attr("fill", wardleyDiagramNUSXRM2DBinding14.linkStroke)
            .attr("stroke", "none");
          wardleyDiagramNUSXRM2DBinding22
            .append("rect")
            .attr("class", "wardley-background")
            .attr("width", wardleyDiagramNUSXRM2DBinding19)
            .attr("height", wardleyDiagramNUSXRM2DBinding20)
            .attr("fill", wardleyDiagramNUSXRM2DBinding14.backgroundColor);
          let wardleyDiagramNUSXRM2DBinding24 =
              wardleyDiagramNUSXRM2DBinding19 -
              wardleyDiagramNUSXRM2DBinding13.padding * 2,
            wardleyDiagramNUSXRM2DBinding25 =
              wardleyDiagramNUSXRM2DBinding20 -
              wardleyDiagramNUSXRM2DBinding13.padding * 2;
          wardleyDiagramNUSXRM2DBinding18 &&
            wardleyDiagramNUSXRM2DBinding22
              .append("text")
              .attr("class", "wardley-title")
              .attr("x", wardleyDiagramNUSXRM2DBinding19 / 2)
              .attr("y", wardleyDiagramNUSXRM2DBinding13.padding / 2)
              .attr("fill", wardleyDiagramNUSXRM2DBinding14.axisTextColor)
              .attr(
                "font-size",
                wardleyDiagramNUSXRM2DBinding13.axisFontSize * 1.05,
              )
              .attr("font-weight", "bold")
              .attr("text-anchor", "middle")
              .attr("dominant-baseline", "middle")
              .text(wardleyDiagramNUSXRM2DBinding18);
          let wardleyDiagramNUSXRM2DBinding26 = chunkAGHRB4JFN(
              (wardleyDiagramNUSXRM2DInput97) =>
                wardleyDiagramNUSXRM2DBinding13.padding +
                (wardleyDiagramNUSXRM2DInput97 / 100) *
                  wardleyDiagramNUSXRM2DBinding24,
              "projectX",
            ),
            wardleyDiagramNUSXRM2DBinding27 = chunkAGHRB4JFN(
              (wardleyDiagramNUSXRM2DInput96) =>
                wardleyDiagramNUSXRM2DBinding20 -
                wardleyDiagramNUSXRM2DBinding13.padding -
                (wardleyDiagramNUSXRM2DInput96 / 100) *
                  wardleyDiagramNUSXRM2DBinding25,
              "projectY",
            ),
            wardleyDiagramNUSXRM2DBinding28 = wardleyDiagramNUSXRM2DBinding22
              .append("g")
              .attr("class", "wardley-axes");
          wardleyDiagramNUSXRM2DBinding28
            .append("line")
            .attr("x1", wardleyDiagramNUSXRM2DBinding13.padding)
            .attr(
              "x2",
              wardleyDiagramNUSXRM2DBinding19 -
                wardleyDiagramNUSXRM2DBinding13.padding,
            )
            .attr(
              "y1",
              wardleyDiagramNUSXRM2DBinding20 -
                wardleyDiagramNUSXRM2DBinding13.padding,
            )
            .attr(
              "y2",
              wardleyDiagramNUSXRM2DBinding20 -
                wardleyDiagramNUSXRM2DBinding13.padding,
            )
            .attr("stroke", wardleyDiagramNUSXRM2DBinding14.axisColor)
            .attr("stroke-width", 1);
          wardleyDiagramNUSXRM2DBinding28
            .append("line")
            .attr("x1", wardleyDiagramNUSXRM2DBinding13.padding)
            .attr("x2", wardleyDiagramNUSXRM2DBinding13.padding)
            .attr("y1", wardleyDiagramNUSXRM2DBinding13.padding)
            .attr(
              "y2",
              wardleyDiagramNUSXRM2DBinding20 -
                wardleyDiagramNUSXRM2DBinding13.padding,
            )
            .attr("stroke", wardleyDiagramNUSXRM2DBinding14.axisColor)
            .attr("stroke-width", 1);
          let wardleyDiagramNUSXRM2DBinding29 =
              wardleyDiagramNUSXRM2DBinding17.axes.xLabel ?? "Evolution",
            wardleyDiagramNUSXRM2DBinding30 =
              wardleyDiagramNUSXRM2DBinding17.axes.yLabel ?? "Visibility";
          wardleyDiagramNUSXRM2DBinding28
            .append("text")
            .attr("class", "wardley-axis-label wardley-axis-label-x")
            .attr(
              "x",
              wardleyDiagramNUSXRM2DBinding13.padding +
                wardleyDiagramNUSXRM2DBinding24 / 2,
            )
            .attr(
              "y",
              wardleyDiagramNUSXRM2DBinding20 -
                wardleyDiagramNUSXRM2DBinding13.padding / 4,
            )
            .attr("fill", wardleyDiagramNUSXRM2DBinding14.axisTextColor)
            .attr("font-size", wardleyDiagramNUSXRM2DBinding13.axisFontSize)
            .attr("font-weight", "bold")
            .attr("text-anchor", "middle")
            .text(wardleyDiagramNUSXRM2DBinding29);
          wardleyDiagramNUSXRM2DBinding28
            .append("text")
            .attr("class", "wardley-axis-label wardley-axis-label-y")
            .attr("x", wardleyDiagramNUSXRM2DBinding13.padding / 3)
            .attr(
              "y",
              wardleyDiagramNUSXRM2DBinding13.padding +
                wardleyDiagramNUSXRM2DBinding25 / 2,
            )
            .attr("fill", wardleyDiagramNUSXRM2DBinding14.axisTextColor)
            .attr("font-size", wardleyDiagramNUSXRM2DBinding13.axisFontSize)
            .attr("font-weight", "bold")
            .attr("text-anchor", "middle")
            .attr(
              "transform",
              `rotate(-90 ${wardleyDiagramNUSXRM2DBinding13.padding / 3} ${wardleyDiagramNUSXRM2DBinding13.padding + wardleyDiagramNUSXRM2DBinding25 / 2})`,
            )
            .text(wardleyDiagramNUSXRM2DBinding30);
          let wardleyDiagramNUSXRM2DBinding31 =
            wardleyDiagramNUSXRM2DBinding17.axes.stages &&
            wardleyDiagramNUSXRM2DBinding17.axes.stages.length > 0
              ? wardleyDiagramNUSXRM2DBinding17.axes.stages
              : wardleyDiagramNUSXRM2DBinding10;
          if (wardleyDiagramNUSXRM2DBinding31.length > 0) {
            let wardleyDiagramNUSXRM2DBinding55 =
                wardleyDiagramNUSXRM2DBinding22
                  .append("g")
                  .attr("class", "wardley-stages"),
              wardleyDiagramNUSXRM2DBinding56 =
                wardleyDiagramNUSXRM2DBinding17.axes.stageBoundaries,
              wardleyDiagramNUSXRM2DBinding57 = [];
            if (
              wardleyDiagramNUSXRM2DBinding56 &&
              wardleyDiagramNUSXRM2DBinding56.length ===
                wardleyDiagramNUSXRM2DBinding31.length
            ) {
              let wardleyDiagramNUSXRM2DBinding196 = 0;
              wardleyDiagramNUSXRM2DBinding56.forEach((item) => {
                wardleyDiagramNUSXRM2DBinding57.push({
                  start: wardleyDiagramNUSXRM2DBinding196,
                  end: item,
                });
                wardleyDiagramNUSXRM2DBinding196 = item;
              });
            } else {
              let wardleyDiagramNUSXRM2DBinding191 =
                1 / wardleyDiagramNUSXRM2DBinding31.length;
              wardleyDiagramNUSXRM2DBinding31.forEach((item, index) => {
                wardleyDiagramNUSXRM2DBinding57.push({
                  start: index * wardleyDiagramNUSXRM2DBinding191,
                  end: (index + 1) * wardleyDiagramNUSXRM2DBinding191,
                });
              });
            }
            wardleyDiagramNUSXRM2DBinding31.forEach((item, index) => {
              let wardleyDiagramNUSXRM2DBinding71 =
                  wardleyDiagramNUSXRM2DBinding57[index],
                wardleyDiagramNUSXRM2DBinding72 =
                  wardleyDiagramNUSXRM2DBinding13.padding +
                  wardleyDiagramNUSXRM2DBinding71.start *
                    wardleyDiagramNUSXRM2DBinding24,
                wardleyDiagramNUSXRM2DBinding73 =
                  (wardleyDiagramNUSXRM2DBinding72 +
                    (wardleyDiagramNUSXRM2DBinding13.padding +
                      wardleyDiagramNUSXRM2DBinding71.end *
                        wardleyDiagramNUSXRM2DBinding24)) /
                  2;
              index > 0 &&
                wardleyDiagramNUSXRM2DBinding55
                  .append("line")
                  .attr("x1", wardleyDiagramNUSXRM2DBinding72)
                  .attr("x2", wardleyDiagramNUSXRM2DBinding72)
                  .attr("y1", wardleyDiagramNUSXRM2DBinding13.padding)
                  .attr(
                    "y2",
                    wardleyDiagramNUSXRM2DBinding20 -
                      wardleyDiagramNUSXRM2DBinding13.padding,
                  )
                  .attr("stroke", "#000")
                  .attr("stroke-width", 1)
                  .attr("stroke-dasharray", "5 5")
                  .attr("opacity", 0.8);
              wardleyDiagramNUSXRM2DBinding55
                .append("text")
                .attr("class", "wardley-stage-label")
                .attr("x", wardleyDiagramNUSXRM2DBinding73)
                .attr(
                  "y",
                  wardleyDiagramNUSXRM2DBinding20 -
                    wardleyDiagramNUSXRM2DBinding13.padding / 1.5,
                )
                .attr("fill", wardleyDiagramNUSXRM2DBinding14.axisTextColor)
                .attr(
                  "font-size",
                  wardleyDiagramNUSXRM2DBinding13.axisFontSize - 2,
                )
                .attr("text-anchor", "middle")
                .text(item);
            });
          }
          if (wardleyDiagramNUSXRM2DBinding13.showGrid) {
            let wardleyDiagramNUSXRM2DBinding80 =
              wardleyDiagramNUSXRM2DBinding22
                .append("g")
                .attr("class", "wardley-grid");
            for (
              let wardleyDiagramNUSXRM2DBinding81 = 1;
              wardleyDiagramNUSXRM2DBinding81 < 4;
              wardleyDiagramNUSXRM2DBinding81++
            ) {
              let wardleyDiagramNUSXRM2DBinding82 =
                  wardleyDiagramNUSXRM2DBinding81 / 4,
                wardleyDiagramNUSXRM2DBinding83 =
                  wardleyDiagramNUSXRM2DBinding13.padding +
                  wardleyDiagramNUSXRM2DBinding24 *
                    wardleyDiagramNUSXRM2DBinding82;
              wardleyDiagramNUSXRM2DBinding80
                .append("line")
                .attr("x1", wardleyDiagramNUSXRM2DBinding83)
                .attr("x2", wardleyDiagramNUSXRM2DBinding83)
                .attr("y1", wardleyDiagramNUSXRM2DBinding13.padding)
                .attr(
                  "y2",
                  wardleyDiagramNUSXRM2DBinding20 -
                    wardleyDiagramNUSXRM2DBinding13.padding,
                )
                .attr("stroke", wardleyDiagramNUSXRM2DBinding14.gridColor)
                .attr("stroke-dasharray", "2 6");
              wardleyDiagramNUSXRM2DBinding80
                .append("line")
                .attr("x1", wardleyDiagramNUSXRM2DBinding13.padding)
                .attr(
                  "x2",
                  wardleyDiagramNUSXRM2DBinding19 -
                    wardleyDiagramNUSXRM2DBinding13.padding,
                )
                .attr(
                  "y1",
                  wardleyDiagramNUSXRM2DBinding20 -
                    wardleyDiagramNUSXRM2DBinding13.padding -
                    wardleyDiagramNUSXRM2DBinding25 *
                      wardleyDiagramNUSXRM2DBinding82,
                )
                .attr(
                  "y2",
                  wardleyDiagramNUSXRM2DBinding20 -
                    wardleyDiagramNUSXRM2DBinding13.padding -
                    wardleyDiagramNUSXRM2DBinding25 *
                      wardleyDiagramNUSXRM2DBinding82,
                )
                .attr("stroke", wardleyDiagramNUSXRM2DBinding14.gridColor)
                .attr("stroke-dasharray", "2 6");
            }
          }
          let wardleyDiagramNUSXRM2DBinding32 = new Map();
          if (
            (wardleyDiagramNUSXRM2DBinding17.nodes.forEach((item) => {
              wardleyDiagramNUSXRM2DBinding32.set(item.id, {
                x: wardleyDiagramNUSXRM2DBinding26(item.x),
                y: wardleyDiagramNUSXRM2DBinding27(item.y),
                node: item,
              });
            }),
            wardleyDiagramNUSXRM2DBinding17.pipelines.length > 0)
          ) {
            let wardleyDiagramNUSXRM2DBinding43 =
                wardleyDiagramNUSXRM2DBinding22
                  .append("g")
                  .attr("class", "wardley-pipelines"),
              wardleyDiagramNUSXRM2DBinding44 = wardleyDiagramNUSXRM2DBinding22
                .append("g")
                .attr("class", "wardley-pipeline-links");
            wardleyDiagramNUSXRM2DBinding17.pipelines.forEach((item) => {
              if (item.componentIds.length === 0) return;
              let wardleyDiagramNUSXRM2DBinding50 = item.componentIds
                .map((_item) => ({
                  id: _item,
                  pos: wardleyDiagramNUSXRM2DBinding32.get(_item),
                  node: wardleyDiagramNUSXRM2DBinding17.nodes.find(
                    (__item) => __item.id === _item,
                  ),
                }))
                .filter((_item) => _item.pos && _item.node)
                .sort(
                  (
                    wardleyDiagramNUSXRM2DInput99,
                    wardleyDiagramNUSXRM2DInput100,
                  ) =>
                    wardleyDiagramNUSXRM2DInput99.node.x -
                    wardleyDiagramNUSXRM2DInput100.node.x,
                );
              for (
                let wardleyDiagramNUSXRM2DBinding107 = 0;
                wardleyDiagramNUSXRM2DBinding107 <
                wardleyDiagramNUSXRM2DBinding50.length - 1;
                wardleyDiagramNUSXRM2DBinding107++
              ) {
                let wardleyDiagramNUSXRM2DBinding113 =
                    wardleyDiagramNUSXRM2DBinding50[
                      wardleyDiagramNUSXRM2DBinding107
                    ],
                  wardleyDiagramNUSXRM2DBinding114 =
                    wardleyDiagramNUSXRM2DBinding50[
                      wardleyDiagramNUSXRM2DBinding107 + 1
                    ];
                wardleyDiagramNUSXRM2DBinding44
                  .append("line")
                  .attr("class", "wardley-pipeline-evolution-link")
                  .attr("x1", wardleyDiagramNUSXRM2DBinding113.pos.x)
                  .attr("y1", wardleyDiagramNUSXRM2DBinding113.pos.y)
                  .attr("x2", wardleyDiagramNUSXRM2DBinding114.pos.x)
                  .attr("y2", wardleyDiagramNUSXRM2DBinding114.pos.y)
                  .attr("stroke", wardleyDiagramNUSXRM2DBinding14.linkStroke)
                  .attr("stroke-width", 1)
                  .attr("stroke-dasharray", "4 4");
              }
              let wardleyDiagramNUSXRM2DBinding51 = 1 / 0,
                wardleyDiagramNUSXRM2DBinding52 = -1 / 0,
                wardleyDiagramNUSXRM2DBinding53 = 0;
              if (
                (item.componentIds.forEach((_item) => {
                  let wardleyDiagramNUSXRM2DBinding189 =
                    wardleyDiagramNUSXRM2DBinding32.get(_item);
                  wardleyDiagramNUSXRM2DBinding189 &&
                    ((wardleyDiagramNUSXRM2DBinding51 = Math.min(
                      wardleyDiagramNUSXRM2DBinding51,
                      wardleyDiagramNUSXRM2DBinding189.x,
                    )),
                    (wardleyDiagramNUSXRM2DBinding52 = Math.max(
                      wardleyDiagramNUSXRM2DBinding52,
                      wardleyDiagramNUSXRM2DBinding189.x,
                    )),
                    (wardleyDiagramNUSXRM2DBinding53 =
                      wardleyDiagramNUSXRM2DBinding189.y));
                }),
                wardleyDiagramNUSXRM2DBinding51 !== 1 / 0 &&
                  wardleyDiagramNUSXRM2DBinding52 !== -1 / 0)
              ) {
                let wardleyDiagramNUSXRM2DBinding85 =
                    wardleyDiagramNUSXRM2DBinding13.nodeRadius * 4,
                  wardleyDiagramNUSXRM2DBinding86 =
                    wardleyDiagramNUSXRM2DBinding53 -
                    wardleyDiagramNUSXRM2DBinding85 / 2,
                  wardleyDiagramNUSXRM2DBinding87 =
                    wardleyDiagramNUSXRM2DBinding32.get(item.nodeId);
                wardleyDiagramNUSXRM2DBinding87 &&
                  ((wardleyDiagramNUSXRM2DBinding87.x =
                    (wardleyDiagramNUSXRM2DBinding51 +
                      wardleyDiagramNUSXRM2DBinding52) /
                    2),
                  (wardleyDiagramNUSXRM2DBinding87.y =
                    wardleyDiagramNUSXRM2DBinding86 -
                    wardleyDiagramNUSXRM2DBinding15 / 6));
                wardleyDiagramNUSXRM2DBinding43
                  .append("rect")
                  .attr("class", "wardley-pipeline-box")
                  .attr("x", wardleyDiagramNUSXRM2DBinding51 - 15)
                  .attr("y", wardleyDiagramNUSXRM2DBinding86)
                  .attr(
                    "width",
                    wardleyDiagramNUSXRM2DBinding52 -
                      wardleyDiagramNUSXRM2DBinding51 +
                      30,
                  )
                  .attr("height", wardleyDiagramNUSXRM2DBinding85)
                  .attr("fill", "none")
                  .attr("stroke", wardleyDiagramNUSXRM2DBinding14.axisColor)
                  .attr("stroke-width", 1.5)
                  .attr("rx", 4)
                  .attr("ry", 4);
              }
            });
          }
          let wardleyDiagramNUSXRM2DBinding33 = wardleyDiagramNUSXRM2DBinding22
              .append("g")
              .attr("class", "wardley-links"),
            wardleyDiagramNUSXRM2DBinding34 = new Map();
          wardleyDiagramNUSXRM2DBinding17.pipelines.forEach((item) => {
            wardleyDiagramNUSXRM2DBinding34.set(
              item.nodeId,
              new Set(item.componentIds),
            );
          });
          let wardleyDiagramNUSXRM2DBinding35 =
            wardleyDiagramNUSXRM2DBinding17.links.filter(
              (item) =>
                !(
                  !wardleyDiagramNUSXRM2DBinding32.has(item.source) ||
                  !wardleyDiagramNUSXRM2DBinding32.has(item.target) ||
                  wardleyDiagramNUSXRM2DBinding34
                    .get(item.target)
                    ?.has(item.source)
                ),
            );
          wardleyDiagramNUSXRM2DBinding33
            .selectAll("line")
            .data(wardleyDiagramNUSXRM2DBinding35)
            .enter()
            .append("line")
            .attr(
              "class",
              (wardleyDiagramNUSXRM2DInput68) =>
                `wardley-link${wardleyDiagramNUSXRM2DInput68.dashed ? " wardley-link--dashed" : ""}`,
            )
            .attr("x1", (event) => {
              let wardleyDiagramNUSXRM2DBinding121 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.source),
                wardleyDiagramNUSXRM2DBinding122 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.target),
                wardleyDiagramNUSXRM2DBinding123 =
                  wardleyDiagramNUSXRM2DBinding17.nodes.find(
                    (item) => item.id === event.source,
                  ).isPipelineParent
                    ? wardleyDiagramNUSXRM2DBinding15 / Math.sqrt(2)
                    : wardleyDiagramNUSXRM2DBinding13.nodeRadius,
                wardleyDiagramNUSXRM2DBinding124 =
                  wardleyDiagramNUSXRM2DBinding122.x -
                  wardleyDiagramNUSXRM2DBinding121.x,
                wardleyDiagramNUSXRM2DBinding125 =
                  wardleyDiagramNUSXRM2DBinding122.y -
                  wardleyDiagramNUSXRM2DBinding121.y,
                wardleyDiagramNUSXRM2DBinding126 = Math.sqrt(
                  wardleyDiagramNUSXRM2DBinding124 *
                    wardleyDiagramNUSXRM2DBinding124 +
                    wardleyDiagramNUSXRM2DBinding125 *
                      wardleyDiagramNUSXRM2DBinding125,
                );
              return (
                wardleyDiagramNUSXRM2DBinding121.x +
                (wardleyDiagramNUSXRM2DBinding124 /
                  wardleyDiagramNUSXRM2DBinding126) *
                  wardleyDiagramNUSXRM2DBinding123
              );
            })
            .attr("y1", (event) => {
              let wardleyDiagramNUSXRM2DBinding127 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.source),
                wardleyDiagramNUSXRM2DBinding128 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.target),
                wardleyDiagramNUSXRM2DBinding129 =
                  wardleyDiagramNUSXRM2DBinding17.nodes.find(
                    (item) => item.id === event.source,
                  ).isPipelineParent
                    ? wardleyDiagramNUSXRM2DBinding15 / Math.sqrt(2)
                    : wardleyDiagramNUSXRM2DBinding13.nodeRadius,
                wardleyDiagramNUSXRM2DBinding130 =
                  wardleyDiagramNUSXRM2DBinding128.x -
                  wardleyDiagramNUSXRM2DBinding127.x,
                wardleyDiagramNUSXRM2DBinding131 =
                  wardleyDiagramNUSXRM2DBinding128.y -
                  wardleyDiagramNUSXRM2DBinding127.y,
                wardleyDiagramNUSXRM2DBinding132 = Math.sqrt(
                  wardleyDiagramNUSXRM2DBinding130 *
                    wardleyDiagramNUSXRM2DBinding130 +
                    wardleyDiagramNUSXRM2DBinding131 *
                      wardleyDiagramNUSXRM2DBinding131,
                );
              return (
                wardleyDiagramNUSXRM2DBinding127.y +
                (wardleyDiagramNUSXRM2DBinding131 /
                  wardleyDiagramNUSXRM2DBinding132) *
                  wardleyDiagramNUSXRM2DBinding129
              );
            })
            .attr("x2", (event) => {
              let wardleyDiagramNUSXRM2DBinding133 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.source),
                wardleyDiagramNUSXRM2DBinding134 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.target),
                wardleyDiagramNUSXRM2DBinding135 =
                  wardleyDiagramNUSXRM2DBinding17.nodes.find(
                    (item) => item.id === event.target,
                  ).isPipelineParent
                    ? wardleyDiagramNUSXRM2DBinding15 / Math.sqrt(2)
                    : wardleyDiagramNUSXRM2DBinding13.nodeRadius,
                wardleyDiagramNUSXRM2DBinding136 =
                  wardleyDiagramNUSXRM2DBinding133.x -
                  wardleyDiagramNUSXRM2DBinding134.x,
                wardleyDiagramNUSXRM2DBinding137 =
                  wardleyDiagramNUSXRM2DBinding133.y -
                  wardleyDiagramNUSXRM2DBinding134.y,
                wardleyDiagramNUSXRM2DBinding138 = Math.sqrt(
                  wardleyDiagramNUSXRM2DBinding136 *
                    wardleyDiagramNUSXRM2DBinding136 +
                    wardleyDiagramNUSXRM2DBinding137 *
                      wardleyDiagramNUSXRM2DBinding137,
                );
              return (
                wardleyDiagramNUSXRM2DBinding134.x +
                (wardleyDiagramNUSXRM2DBinding136 /
                  wardleyDiagramNUSXRM2DBinding138) *
                  wardleyDiagramNUSXRM2DBinding135
              );
            })
            .attr("y2", (event) => {
              let wardleyDiagramNUSXRM2DBinding139 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.source),
                wardleyDiagramNUSXRM2DBinding140 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.target),
                wardleyDiagramNUSXRM2DBinding141 =
                  wardleyDiagramNUSXRM2DBinding17.nodes.find(
                    (item) => item.id === event.target,
                  ).isPipelineParent
                    ? wardleyDiagramNUSXRM2DBinding15 / Math.sqrt(2)
                    : wardleyDiagramNUSXRM2DBinding13.nodeRadius,
                wardleyDiagramNUSXRM2DBinding142 =
                  wardleyDiagramNUSXRM2DBinding139.x -
                  wardleyDiagramNUSXRM2DBinding140.x,
                wardleyDiagramNUSXRM2DBinding143 =
                  wardleyDiagramNUSXRM2DBinding139.y -
                  wardleyDiagramNUSXRM2DBinding140.y,
                wardleyDiagramNUSXRM2DBinding144 = Math.sqrt(
                  wardleyDiagramNUSXRM2DBinding142 *
                    wardleyDiagramNUSXRM2DBinding142 +
                    wardleyDiagramNUSXRM2DBinding143 *
                      wardleyDiagramNUSXRM2DBinding143,
                );
              return (
                wardleyDiagramNUSXRM2DBinding140.y +
                (wardleyDiagramNUSXRM2DBinding143 /
                  wardleyDiagramNUSXRM2DBinding144) *
                  wardleyDiagramNUSXRM2DBinding141
              );
            })
            .attr("stroke", wardleyDiagramNUSXRM2DBinding14.linkStroke)
            .attr("stroke-width", 1)
            .attr("stroke-dasharray", (wardleyDiagramNUSXRM2DInput98) =>
              wardleyDiagramNUSXRM2DInput98.dashed ? "6 6" : null,
            )
            .attr("marker-end", (wardleyDiagramNUSXRM2DInput35) =>
              wardleyDiagramNUSXRM2DInput35.flow === "forward" ||
              wardleyDiagramNUSXRM2DInput35.flow === "bidirectional"
                ? `url(#link-arrow-end-${wardleyDiagramNUSXRM2DInput2})`
                : null,
            )
            .attr("marker-start", (wardleyDiagramNUSXRM2DInput34) =>
              wardleyDiagramNUSXRM2DInput34.flow === "backward" ||
              wardleyDiagramNUSXRM2DInput34.flow === "bidirectional"
                ? `url(#link-arrow-start-${wardleyDiagramNUSXRM2DInput2})`
                : null,
            );
          wardleyDiagramNUSXRM2DBinding33
            .selectAll("text")
            .data(wardleyDiagramNUSXRM2DBinding35.filter((item) => item.label))
            .enter()
            .append("text")
            .attr("class", "wardley-link-label")
            .attr("x", (event) => {
              let wardleyDiagramNUSXRM2DBinding171 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.source),
                wardleyDiagramNUSXRM2DBinding172 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.target),
                wardleyDiagramNUSXRM2DBinding173 =
                  (wardleyDiagramNUSXRM2DBinding171.x +
                    wardleyDiagramNUSXRM2DBinding172.x) /
                  2,
                wardleyDiagramNUSXRM2DBinding174 =
                  wardleyDiagramNUSXRM2DBinding172.y -
                  wardleyDiagramNUSXRM2DBinding171.y,
                wardleyDiagramNUSXRM2DBinding175 =
                  wardleyDiagramNUSXRM2DBinding172.x -
                  wardleyDiagramNUSXRM2DBinding171.x;
              return (
                wardleyDiagramNUSXRM2DBinding173 +
                (wardleyDiagramNUSXRM2DBinding174 /
                  Math.sqrt(
                    wardleyDiagramNUSXRM2DBinding175 *
                      wardleyDiagramNUSXRM2DBinding175 +
                      wardleyDiagramNUSXRM2DBinding174 *
                        wardleyDiagramNUSXRM2DBinding174,
                  )) *
                  8
              );
            })
            .attr("y", (event) => {
              let wardleyDiagramNUSXRM2DBinding165 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.source),
                wardleyDiagramNUSXRM2DBinding166 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.target),
                wardleyDiagramNUSXRM2DBinding167 =
                  (wardleyDiagramNUSXRM2DBinding165.y +
                    wardleyDiagramNUSXRM2DBinding166.y) /
                  2,
                wardleyDiagramNUSXRM2DBinding168 =
                  wardleyDiagramNUSXRM2DBinding166.x -
                  wardleyDiagramNUSXRM2DBinding165.x,
                wardleyDiagramNUSXRM2DBinding169 =
                  wardleyDiagramNUSXRM2DBinding166.y -
                  wardleyDiagramNUSXRM2DBinding165.y,
                wardleyDiagramNUSXRM2DBinding170 = Math.sqrt(
                  wardleyDiagramNUSXRM2DBinding168 *
                    wardleyDiagramNUSXRM2DBinding168 +
                    wardleyDiagramNUSXRM2DBinding169 *
                      wardleyDiagramNUSXRM2DBinding169,
                );
              return (
                wardleyDiagramNUSXRM2DBinding167 +
                (-wardleyDiagramNUSXRM2DBinding168 /
                  wardleyDiagramNUSXRM2DBinding170) *
                  8
              );
            })
            .attr("fill", wardleyDiagramNUSXRM2DBinding14.axisTextColor)
            .attr("font-size", wardleyDiagramNUSXRM2DBinding13.labelFontSize)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("transform", (event) => {
              let wardleyDiagramNUSXRM2DBinding88 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.source),
                wardleyDiagramNUSXRM2DBinding89 =
                  wardleyDiagramNUSXRM2DBinding32.get(event.target),
                wardleyDiagramNUSXRM2DBinding90 =
                  (wardleyDiagramNUSXRM2DBinding88.x +
                    wardleyDiagramNUSXRM2DBinding89.x) /
                  2,
                wardleyDiagramNUSXRM2DBinding91 =
                  (wardleyDiagramNUSXRM2DBinding88.y +
                    wardleyDiagramNUSXRM2DBinding89.y) /
                  2,
                wardleyDiagramNUSXRM2DBinding92 =
                  wardleyDiagramNUSXRM2DBinding89.x -
                  wardleyDiagramNUSXRM2DBinding88.x,
                wardleyDiagramNUSXRM2DBinding93 =
                  wardleyDiagramNUSXRM2DBinding89.y -
                  wardleyDiagramNUSXRM2DBinding88.y,
                wardleyDiagramNUSXRM2DBinding94 = Math.sqrt(
                  wardleyDiagramNUSXRM2DBinding92 *
                    wardleyDiagramNUSXRM2DBinding92 +
                    wardleyDiagramNUSXRM2DBinding93 *
                      wardleyDiagramNUSXRM2DBinding93,
                ),
                wardleyDiagramNUSXRM2DBinding95 =
                  wardleyDiagramNUSXRM2DBinding93 /
                  wardleyDiagramNUSXRM2DBinding94,
                wardleyDiagramNUSXRM2DBinding96 =
                  -wardleyDiagramNUSXRM2DBinding92 /
                  wardleyDiagramNUSXRM2DBinding94,
                wardleyDiagramNUSXRM2DBinding97 =
                  wardleyDiagramNUSXRM2DBinding90 +
                  wardleyDiagramNUSXRM2DBinding95 * 8,
                wardleyDiagramNUSXRM2DBinding98 =
                  wardleyDiagramNUSXRM2DBinding91 +
                  wardleyDiagramNUSXRM2DBinding96 * 8,
                wardleyDiagramNUSXRM2DBinding99 =
                  (Math.atan2(
                    wardleyDiagramNUSXRM2DBinding93,
                    wardleyDiagramNUSXRM2DBinding92,
                  ) *
                    180) /
                  Math.PI;
              return (
                (wardleyDiagramNUSXRM2DBinding99 > 90 ||
                  wardleyDiagramNUSXRM2DBinding99 < -90) &&
                  (wardleyDiagramNUSXRM2DBinding99 += 180),
                `rotate(${wardleyDiagramNUSXRM2DBinding99} ${wardleyDiagramNUSXRM2DBinding97} ${wardleyDiagramNUSXRM2DBinding98})`
              );
            })
            .text(
              (wardleyDiagramNUSXRM2DInput125) =>
                wardleyDiagramNUSXRM2DInput125.label,
            );
          let wardleyDiagramNUSXRM2DBinding36 = wardleyDiagramNUSXRM2DBinding22
              .append("g")
              .attr("class", "wardley-trends"),
            wardleyDiagramNUSXRM2DBinding37 =
              wardleyDiagramNUSXRM2DBinding17.trends
                .map((item) => {
                  let wardleyDiagramNUSXRM2DBinding100 =
                    wardleyDiagramNUSXRM2DBinding32.get(item.nodeId);
                  if (!wardleyDiagramNUSXRM2DBinding100) return null;
                  let wardleyDiagramNUSXRM2DBinding101 =
                      wardleyDiagramNUSXRM2DBinding26(item.targetX),
                    wardleyDiagramNUSXRM2DBinding102 =
                      wardleyDiagramNUSXRM2DBinding27(item.targetY),
                    wardleyDiagramNUSXRM2DBinding103 =
                      wardleyDiagramNUSXRM2DBinding101 -
                      wardleyDiagramNUSXRM2DBinding100.x,
                    wardleyDiagramNUSXRM2DBinding104 =
                      wardleyDiagramNUSXRM2DBinding102 -
                      wardleyDiagramNUSXRM2DBinding100.y,
                    wardleyDiagramNUSXRM2DBinding105 = Math.sqrt(
                      wardleyDiagramNUSXRM2DBinding103 *
                        wardleyDiagramNUSXRM2DBinding103 +
                        wardleyDiagramNUSXRM2DBinding104 *
                          wardleyDiagramNUSXRM2DBinding104,
                    ),
                    wardleyDiagramNUSXRM2DBinding106 =
                      wardleyDiagramNUSXRM2DBinding13.nodeRadius + 2;
                  return {
                    origin: wardleyDiagramNUSXRM2DBinding100,
                    targetX: wardleyDiagramNUSXRM2DBinding101,
                    targetY: wardleyDiagramNUSXRM2DBinding102,
                    adjustedX2:
                      wardleyDiagramNUSXRM2DBinding105 >
                      wardleyDiagramNUSXRM2DBinding106
                        ? wardleyDiagramNUSXRM2DBinding101 -
                          (wardleyDiagramNUSXRM2DBinding103 /
                            wardleyDiagramNUSXRM2DBinding105) *
                            wardleyDiagramNUSXRM2DBinding106
                        : wardleyDiagramNUSXRM2DBinding101,
                    adjustedY2:
                      wardleyDiagramNUSXRM2DBinding105 >
                      wardleyDiagramNUSXRM2DBinding106
                        ? wardleyDiagramNUSXRM2DBinding102 -
                          (wardleyDiagramNUSXRM2DBinding104 /
                            wardleyDiagramNUSXRM2DBinding105) *
                            wardleyDiagramNUSXRM2DBinding106
                        : wardleyDiagramNUSXRM2DBinding102,
                  };
                })
                .filter((item) => item !== null);
          wardleyDiagramNUSXRM2DBinding36
            .selectAll("line")
            .data(wardleyDiagramNUSXRM2DBinding37)
            .enter()
            .append("line")
            .attr("class", "wardley-trend")
            .attr(
              "x1",
              (wardleyDiagramNUSXRM2DInput123) =>
                wardleyDiagramNUSXRM2DInput123.origin.x,
            )
            .attr(
              "y1",
              (wardleyDiagramNUSXRM2DInput124) =>
                wardleyDiagramNUSXRM2DInput124.origin.y,
            )
            .attr(
              "x2",
              (wardleyDiagramNUSXRM2DInput121) =>
                wardleyDiagramNUSXRM2DInput121.adjustedX2,
            )
            .attr(
              "y2",
              (wardleyDiagramNUSXRM2DInput122) =>
                wardleyDiagramNUSXRM2DInput122.adjustedY2,
            )
            .attr("stroke", wardleyDiagramNUSXRM2DBinding14.evolutionStroke)
            .attr("stroke-width", 1)
            .attr("stroke-dasharray", "4 4")
            .attr("marker-end", `url(#arrow-${wardleyDiagramNUSXRM2DInput2})`);
          let wardleyDiagramNUSXRM2DBinding38 = wardleyDiagramNUSXRM2DBinding22
            .append("g")
            .attr("class", "wardley-nodes")
            .selectAll("g")
            .data(wardleyDiagramNUSXRM2DBinding17.nodes)
            .enter()
            .append("g")
            .attr("class", (wardleyDiagramNUSXRM2DInput27) =>
              [
                "wardley-node",
                wardleyDiagramNUSXRM2DInput27.className
                  ? `wardley-node--${wardleyDiagramNUSXRM2DInput27.className}`
                  : "",
              ]
                .filter(Boolean)
                .join(" "),
            );
          wardleyDiagramNUSXRM2DBinding38
            .filter((item) => item.sourceStrategy === "outsource")
            .append("circle")
            .attr("class", "wardley-outsource-overlay")
            .attr(
              "cx",
              (wardleyDiagramNUSXRM2DInput108) =>
                wardleyDiagramNUSXRM2DBinding32.get(
                  wardleyDiagramNUSXRM2DInput108.id,
                ).x,
            )
            .attr(
              "cy",
              (wardleyDiagramNUSXRM2DInput109) =>
                wardleyDiagramNUSXRM2DBinding32.get(
                  wardleyDiagramNUSXRM2DInput109.id,
                ).y,
            )
            .attr("r", wardleyDiagramNUSXRM2DBinding13.nodeRadius * 2)
            .attr("fill", "#666")
            .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
            .attr("stroke-width", 1);
          wardleyDiagramNUSXRM2DBinding38
            .filter((item) => item.sourceStrategy === "buy")
            .append("circle")
            .attr("class", "wardley-buy-overlay")
            .attr(
              "cx",
              (wardleyDiagramNUSXRM2DInput110) =>
                wardleyDiagramNUSXRM2DBinding32.get(
                  wardleyDiagramNUSXRM2DInput110.id,
                ).x,
            )
            .attr(
              "cy",
              (wardleyDiagramNUSXRM2DInput111) =>
                wardleyDiagramNUSXRM2DBinding32.get(
                  wardleyDiagramNUSXRM2DInput111.id,
                ).y,
            )
            .attr("r", wardleyDiagramNUSXRM2DBinding13.nodeRadius * 2)
            .attr("fill", "#ccc")
            .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
            .attr("stroke-width", 1);
          wardleyDiagramNUSXRM2DBinding38
            .filter((item) => item.sourceStrategy === "build")
            .append("circle")
            .attr("class", "wardley-build-overlay")
            .attr(
              "cx",
              (wardleyDiagramNUSXRM2DInput112) =>
                wardleyDiagramNUSXRM2DBinding32.get(
                  wardleyDiagramNUSXRM2DInput112.id,
                ).x,
            )
            .attr(
              "cy",
              (wardleyDiagramNUSXRM2DInput113) =>
                wardleyDiagramNUSXRM2DBinding32.get(
                  wardleyDiagramNUSXRM2DInput113.id,
                ).y,
            )
            .attr("r", wardleyDiagramNUSXRM2DBinding13.nodeRadius * 2)
            .attr("fill", "#eee")
            .attr("stroke", "#000")
            .attr("stroke-width", 1);
          let wardleyDiagramNUSXRM2DBinding39 =
            wardleyDiagramNUSXRM2DBinding38.filter(
              (item) => item.sourceStrategy === "market",
            );
          wardleyDiagramNUSXRM2DBinding39
            .append("circle")
            .attr("class", "wardley-market-overlay")
            .attr(
              "cx",
              (wardleyDiagramNUSXRM2DInput114) =>
                wardleyDiagramNUSXRM2DBinding32.get(
                  wardleyDiagramNUSXRM2DInput114.id,
                ).x,
            )
            .attr(
              "cy",
              (wardleyDiagramNUSXRM2DInput115) =>
                wardleyDiagramNUSXRM2DBinding32.get(
                  wardleyDiagramNUSXRM2DInput115.id,
                ).y,
            )
            .attr("r", wardleyDiagramNUSXRM2DBinding13.nodeRadius * 2)
            .attr("fill", "white")
            .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
            .attr("stroke-width", 1);
          wardleyDiagramNUSXRM2DBinding38
            .filter(
              (item) =>
                !item.isPipelineParent &&
                item.sourceStrategy !== "market" &&
                item.className !== "anchor",
            )
            .append("circle")
            .attr(
              "cx",
              (wardleyDiagramNUSXRM2DInput116) =>
                wardleyDiagramNUSXRM2DBinding32.get(
                  wardleyDiagramNUSXRM2DInput116.id,
                ).x,
            )
            .attr(
              "cy",
              (wardleyDiagramNUSXRM2DInput117) =>
                wardleyDiagramNUSXRM2DBinding32.get(
                  wardleyDiagramNUSXRM2DInput117.id,
                ).y,
            )
            .attr("r", wardleyDiagramNUSXRM2DBinding13.nodeRadius)
            .attr("fill", wardleyDiagramNUSXRM2DBinding14.componentFill)
            .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
            .attr("stroke-width", 1);
          let wardleyDiagramNUSXRM2DBinding40 =
              wardleyDiagramNUSXRM2DBinding13.nodeRadius * 0.7,
            wardleyDiagramNUSXRM2DBinding41 =
              wardleyDiagramNUSXRM2DBinding13.nodeRadius * 1.2;
          if (
            (wardleyDiagramNUSXRM2DBinding39
              .append("line")
              .attr("class", "wardley-market-line")
              .attr(
                "x1",
                (wardleyDiagramNUSXRM2DInput118) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput118.id,
                  ).x,
              )
              .attr(
                "y1",
                (wardleyDiagramNUSXRM2DInput105) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput105.id,
                  ).y - wardleyDiagramNUSXRM2DBinding41,
              )
              .attr(
                "x2",
                (wardleyDiagramNUSXRM2DInput80) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput80.id,
                  ).x -
                  wardleyDiagramNUSXRM2DBinding41 * Math.cos(Math.PI / 6),
              )
              .attr(
                "y2",
                (wardleyDiagramNUSXRM2DInput81) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput81.id,
                  ).y +
                  wardleyDiagramNUSXRM2DBinding41 * Math.sin(Math.PI / 6),
              )
              .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
              .attr("stroke-width", 1),
            wardleyDiagramNUSXRM2DBinding39
              .append("line")
              .attr("class", "wardley-market-line")
              .attr(
                "x1",
                (wardleyDiagramNUSXRM2DInput82) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput82.id,
                  ).x -
                  wardleyDiagramNUSXRM2DBinding41 * Math.cos(Math.PI / 6),
              )
              .attr(
                "y1",
                (wardleyDiagramNUSXRM2DInput83) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput83.id,
                  ).y +
                  wardleyDiagramNUSXRM2DBinding41 * Math.sin(Math.PI / 6),
              )
              .attr(
                "x2",
                (wardleyDiagramNUSXRM2DInput84) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput84.id,
                  ).x +
                  wardleyDiagramNUSXRM2DBinding41 * Math.cos(Math.PI / 6),
              )
              .attr(
                "y2",
                (wardleyDiagramNUSXRM2DInput85) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput85.id,
                  ).y +
                  wardleyDiagramNUSXRM2DBinding41 * Math.sin(Math.PI / 6),
              )
              .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
              .attr("stroke-width", 1),
            wardleyDiagramNUSXRM2DBinding39
              .append("line")
              .attr("class", "wardley-market-line")
              .attr(
                "x1",
                (wardleyDiagramNUSXRM2DInput86) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput86.id,
                  ).x +
                  wardleyDiagramNUSXRM2DBinding41 * Math.cos(Math.PI / 6),
              )
              .attr(
                "y1",
                (wardleyDiagramNUSXRM2DInput87) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput87.id,
                  ).y +
                  wardleyDiagramNUSXRM2DBinding41 * Math.sin(Math.PI / 6),
              )
              .attr(
                "x2",
                (wardleyDiagramNUSXRM2DInput119) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput119.id,
                  ).x,
              )
              .attr(
                "y2",
                (wardleyDiagramNUSXRM2DInput106) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput106.id,
                  ).y - wardleyDiagramNUSXRM2DBinding41,
              )
              .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
              .attr("stroke-width", 1),
            wardleyDiagramNUSXRM2DBinding39
              .append("circle")
              .attr("class", "wardley-market-dot")
              .attr(
                "cx",
                (wardleyDiagramNUSXRM2DInput120) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput120.id,
                  ).x,
              )
              .attr(
                "cy",
                (wardleyDiagramNUSXRM2DInput107) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput107.id,
                  ).y - wardleyDiagramNUSXRM2DBinding41,
              )
              .attr("r", wardleyDiagramNUSXRM2DBinding40)
              .attr("fill", "white")
              .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
              .attr("stroke-width", 2),
            wardleyDiagramNUSXRM2DBinding39
              .append("circle")
              .attr("class", "wardley-market-dot")
              .attr(
                "cx",
                (wardleyDiagramNUSXRM2DInput88) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput88.id,
                  ).x -
                  wardleyDiagramNUSXRM2DBinding41 * Math.cos(Math.PI / 6),
              )
              .attr(
                "cy",
                (wardleyDiagramNUSXRM2DInput89) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput89.id,
                  ).y +
                  wardleyDiagramNUSXRM2DBinding41 * Math.sin(Math.PI / 6),
              )
              .attr("r", wardleyDiagramNUSXRM2DBinding40)
              .attr("fill", "white")
              .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
              .attr("stroke-width", 2),
            wardleyDiagramNUSXRM2DBinding39
              .append("circle")
              .attr("class", "wardley-market-dot")
              .attr(
                "cx",
                (wardleyDiagramNUSXRM2DInput90) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput90.id,
                  ).x +
                  wardleyDiagramNUSXRM2DBinding41 * Math.cos(Math.PI / 6),
              )
              .attr(
                "cy",
                (wardleyDiagramNUSXRM2DInput91) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput91.id,
                  ).y +
                  wardleyDiagramNUSXRM2DBinding41 * Math.sin(Math.PI / 6),
              )
              .attr("r", wardleyDiagramNUSXRM2DBinding40)
              .attr("fill", "white")
              .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
              .attr("stroke-width", 2),
            wardleyDiagramNUSXRM2DBinding38
              .filter((item) => item.isPipelineParent === true)
              .append("rect")
              .attr(
                "x",
                (wardleyDiagramNUSXRM2DInput103) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput103.id,
                  ).x -
                  wardleyDiagramNUSXRM2DBinding15 / 2,
              )
              .attr(
                "y",
                (wardleyDiagramNUSXRM2DInput104) =>
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput104.id,
                  ).y -
                  wardleyDiagramNUSXRM2DBinding15 / 2,
              )
              .attr("width", wardleyDiagramNUSXRM2DBinding15)
              .attr("height", wardleyDiagramNUSXRM2DBinding15)
              .attr("fill", wardleyDiagramNUSXRM2DBinding14.componentFill)
              .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
              .attr("stroke-width", 1),
            wardleyDiagramNUSXRM2DBinding38
              .filter((item) => item.inertia === true)
              .append("line")
              .attr("class", "wardley-inertia")
              .attr("x1", (wardleyDiagramNUSXRM2DInput13) => {
                let wardleyDiagramNUSXRM2DBinding181 =
                    wardleyDiagramNUSXRM2DBinding32.get(
                      wardleyDiagramNUSXRM2DInput13.id,
                    ),
                  wardleyDiagramNUSXRM2DBinding182 =
                    wardleyDiagramNUSXRM2DInput13.isPipelineParent
                      ? wardleyDiagramNUSXRM2DBinding15 / 2 + 15
                      : wardleyDiagramNUSXRM2DBinding13.nodeRadius + 15;
                return (
                  wardleyDiagramNUSXRM2DInput13.sourceStrategy &&
                    (wardleyDiagramNUSXRM2DBinding182 +=
                      wardleyDiagramNUSXRM2DBinding13.nodeRadius + 10),
                  wardleyDiagramNUSXRM2DBinding181.x +
                    wardleyDiagramNUSXRM2DBinding182
                );
              })
              .attr("y1", (wardleyDiagramNUSXRM2DInput32) => {
                let wardleyDiagramNUSXRM2DBinding192 =
                    wardleyDiagramNUSXRM2DBinding32.get(
                      wardleyDiagramNUSXRM2DInput32.id,
                    ),
                  wardleyDiagramNUSXRM2DBinding193 =
                    wardleyDiagramNUSXRM2DInput32.isPipelineParent
                      ? wardleyDiagramNUSXRM2DBinding15
                      : wardleyDiagramNUSXRM2DBinding13.nodeRadius * 2;
                return (
                  wardleyDiagramNUSXRM2DBinding192.y -
                  wardleyDiagramNUSXRM2DBinding193 / 2
                );
              })
              .attr("x2", (wardleyDiagramNUSXRM2DInput14) => {
                let wardleyDiagramNUSXRM2DBinding183 =
                    wardleyDiagramNUSXRM2DBinding32.get(
                      wardleyDiagramNUSXRM2DInput14.id,
                    ),
                  wardleyDiagramNUSXRM2DBinding184 =
                    wardleyDiagramNUSXRM2DInput14.isPipelineParent
                      ? wardleyDiagramNUSXRM2DBinding15 / 2 + 15
                      : wardleyDiagramNUSXRM2DBinding13.nodeRadius + 15;
                return (
                  wardleyDiagramNUSXRM2DInput14.sourceStrategy &&
                    (wardleyDiagramNUSXRM2DBinding184 +=
                      wardleyDiagramNUSXRM2DBinding13.nodeRadius + 10),
                  wardleyDiagramNUSXRM2DBinding183.x +
                    wardleyDiagramNUSXRM2DBinding184
                );
              })
              .attr("y2", (wardleyDiagramNUSXRM2DInput33) => {
                let wardleyDiagramNUSXRM2DBinding194 =
                    wardleyDiagramNUSXRM2DBinding32.get(
                      wardleyDiagramNUSXRM2DInput33.id,
                    ),
                  wardleyDiagramNUSXRM2DBinding195 =
                    wardleyDiagramNUSXRM2DInput33.isPipelineParent
                      ? wardleyDiagramNUSXRM2DBinding15
                      : wardleyDiagramNUSXRM2DBinding13.nodeRadius * 2;
                return (
                  wardleyDiagramNUSXRM2DBinding194.y +
                  wardleyDiagramNUSXRM2DBinding195 / 2
                );
              })
              .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
              .attr("stroke-width", 6),
            wardleyDiagramNUSXRM2DBinding38
              .append("text")
              .attr("x", (wardleyDiagramNUSXRM2DInput8) => {
                let wardleyDiagramNUSXRM2DBinding145 =
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput8.id,
                  );
                if (wardleyDiagramNUSXRM2DInput8.className === "anchor")
                  return wardleyDiagramNUSXRM2DInput8.labelOffsetX === undefined
                    ? wardleyDiagramNUSXRM2DBinding145.x
                    : wardleyDiagramNUSXRM2DBinding145.x +
                        wardleyDiagramNUSXRM2DInput8.labelOffsetX;
                let wardleyDiagramNUSXRM2DBinding146 =
                  wardleyDiagramNUSXRM2DBinding13.nodeLabelOffset;
                wardleyDiagramNUSXRM2DInput8.sourceStrategy &&
                  wardleyDiagramNUSXRM2DInput8.labelOffsetX === undefined &&
                  (wardleyDiagramNUSXRM2DBinding146 += 10);
                let wardleyDiagramNUSXRM2DBinding147 =
                  wardleyDiagramNUSXRM2DInput8.labelOffsetX ??
                  wardleyDiagramNUSXRM2DBinding146;
                return (
                  wardleyDiagramNUSXRM2DBinding145.x +
                  wardleyDiagramNUSXRM2DBinding147
                );
              })
              .attr("y", (wardleyDiagramNUSXRM2DInput7) => {
                let wardleyDiagramNUSXRM2DBinding118 =
                  wardleyDiagramNUSXRM2DBinding32.get(
                    wardleyDiagramNUSXRM2DInput7.id,
                  );
                if (wardleyDiagramNUSXRM2DInput7.className === "anchor")
                  return wardleyDiagramNUSXRM2DInput7.labelOffsetY === undefined
                    ? wardleyDiagramNUSXRM2DBinding118.y - 3
                    : wardleyDiagramNUSXRM2DBinding118.y +
                        wardleyDiagramNUSXRM2DInput7.labelOffsetY;
                let wardleyDiagramNUSXRM2DBinding119 =
                  -wardleyDiagramNUSXRM2DBinding13.nodeLabelOffset;
                wardleyDiagramNUSXRM2DInput7.sourceStrategy &&
                  wardleyDiagramNUSXRM2DInput7.labelOffsetY === undefined &&
                  (wardleyDiagramNUSXRM2DBinding119 -= 10);
                let wardleyDiagramNUSXRM2DBinding120 =
                  wardleyDiagramNUSXRM2DInput7.labelOffsetY ??
                  wardleyDiagramNUSXRM2DBinding119;
                return (
                  wardleyDiagramNUSXRM2DBinding118.y +
                  wardleyDiagramNUSXRM2DBinding120
                );
              })
              .attr("class", "wardley-node-label")
              .attr("fill", (wardleyDiagramNUSXRM2DInput26) =>
                wardleyDiagramNUSXRM2DInput26.className === "evolved"
                  ? wardleyDiagramNUSXRM2DBinding14.evolutionStroke
                  : wardleyDiagramNUSXRM2DInput26.className === "anchor"
                    ? "#000"
                    : wardleyDiagramNUSXRM2DBinding14.componentLabelColor,
              )
              .attr("font-size", wardleyDiagramNUSXRM2DBinding13.labelFontSize)
              .attr("font-weight", (wardleyDiagramNUSXRM2DInput61) =>
                wardleyDiagramNUSXRM2DInput61.className === "anchor"
                  ? "bold"
                  : "normal",
              )
              .attr("text-anchor", (wardleyDiagramNUSXRM2DInput60) =>
                wardleyDiagramNUSXRM2DInput60.className === "anchor"
                  ? "middle"
                  : "start",
              )
              .attr("dominant-baseline", (wardleyDiagramNUSXRM2DInput62) =>
                wardleyDiagramNUSXRM2DInput62.className === "anchor"
                  ? "middle"
                  : "auto",
              )
              .text(
                (wardleyDiagramNUSXRM2DInput126) =>
                  wardleyDiagramNUSXRM2DInput126.label,
              ),
            wardleyDiagramNUSXRM2DBinding17.annotations.length > 0)
          ) {
            let wardleyDiagramNUSXRM2DBinding42 =
              wardleyDiagramNUSXRM2DBinding22
                .append("g")
                .attr("class", "wardley-annotations");
            if (
              (wardleyDiagramNUSXRM2DBinding17.annotations.forEach((item) => {
                let wardleyDiagramNUSXRM2DBinding54 = item.coordinates.map(
                  (_item) => ({
                    x: wardleyDiagramNUSXRM2DBinding26(_item.x),
                    y: wardleyDiagramNUSXRM2DBinding27(_item.y),
                  }),
                );
                if (wardleyDiagramNUSXRM2DBinding54.length > 1)
                  for (
                    let wardleyDiagramNUSXRM2DBinding115 = 0;
                    wardleyDiagramNUSXRM2DBinding115 <
                    wardleyDiagramNUSXRM2DBinding54.length - 1;
                    wardleyDiagramNUSXRM2DBinding115++
                  )
                    wardleyDiagramNUSXRM2DBinding42
                      .append("line")
                      .attr("class", "wardley-annotation-line")
                      .attr(
                        "x1",
                        wardleyDiagramNUSXRM2DBinding54[
                          wardleyDiagramNUSXRM2DBinding115
                        ].x,
                      )
                      .attr(
                        "y1",
                        wardleyDiagramNUSXRM2DBinding54[
                          wardleyDiagramNUSXRM2DBinding115
                        ].y,
                      )
                      .attr(
                        "x2",
                        wardleyDiagramNUSXRM2DBinding54[
                          wardleyDiagramNUSXRM2DBinding115 + 1
                        ].x,
                      )
                      .attr(
                        "y2",
                        wardleyDiagramNUSXRM2DBinding54[
                          wardleyDiagramNUSXRM2DBinding115 + 1
                        ].y,
                      )
                      .attr("stroke", wardleyDiagramNUSXRM2DBinding14.axisColor)
                      .attr("stroke-width", 1.5)
                      .attr("stroke-dasharray", "4 4");
                wardleyDiagramNUSXRM2DBinding54.forEach((_item) => {
                  let wardleyDiagramNUSXRM2DBinding77 =
                    wardleyDiagramNUSXRM2DBinding42
                      .append("g")
                      .attr("class", "wardley-annotation");
                  wardleyDiagramNUSXRM2DBinding77
                    .append("circle")
                    .attr("cx", _item.x)
                    .attr("cy", _item.y)
                    .attr("r", 10)
                    .attr("fill", "white")
                    .attr("stroke", wardleyDiagramNUSXRM2DBinding14.axisColor)
                    .attr("stroke-width", 1.5);
                  wardleyDiagramNUSXRM2DBinding77
                    .append("text")
                    .attr("x", _item.x)
                    .attr("y", _item.y)
                    .attr("text-anchor", "middle")
                    .attr("dominant-baseline", "central")
                    .attr("font-size", 10)
                    .attr("fill", wardleyDiagramNUSXRM2DBinding14.axisTextColor)
                    .attr("font-weight", "bold")
                    .text(item.number);
                });
              }),
              wardleyDiagramNUSXRM2DBinding17.annotationsBox)
            ) {
              let wardleyDiagramNUSXRM2DBinding45 =
                  wardleyDiagramNUSXRM2DBinding26(
                    wardleyDiagramNUSXRM2DBinding17.annotationsBox.x,
                  ),
                wardleyDiagramNUSXRM2DBinding46 =
                  wardleyDiagramNUSXRM2DBinding27(
                    wardleyDiagramNUSXRM2DBinding17.annotationsBox.y,
                  ),
                wardleyDiagramNUSXRM2DBinding47 =
                  wardleyDiagramNUSXRM2DBinding42
                    .append("g")
                    .attr("class", "wardley-annotations-box"),
                wardleyDiagramNUSXRM2DBinding48 = [
                  ...wardleyDiagramNUSXRM2DBinding17.annotations,
                ]
                  .filter((item) => item.text)
                  .sort(
                    (
                      wardleyDiagramNUSXRM2DInput101,
                      wardleyDiagramNUSXRM2DInput102,
                    ) =>
                      wardleyDiagramNUSXRM2DInput101.number -
                      wardleyDiagramNUSXRM2DInput102.number,
                  ),
                wardleyDiagramNUSXRM2DBinding49 = [];
              if (
                (wardleyDiagramNUSXRM2DBinding48.forEach((item, index) => {
                  let wardleyDiagramNUSXRM2DBinding116 =
                    wardleyDiagramNUSXRM2DBinding47
                      .append("text")
                      .attr("x", wardleyDiagramNUSXRM2DBinding45 + 10)
                      .attr(
                        "y",
                        wardleyDiagramNUSXRM2DBinding46 + 10 + (index + 1) * 16,
                      )
                      .attr("font-size", 11)
                      .attr(
                        "fill",
                        wardleyDiagramNUSXRM2DBinding14.axisTextColor,
                      )
                      .attr("text-anchor", "start")
                      .attr("dominant-baseline", "middle")
                      .text(`${item.number}. ${item.text}`);
                  wardleyDiagramNUSXRM2DBinding49.push(
                    wardleyDiagramNUSXRM2DBinding116,
                  );
                }),
                wardleyDiagramNUSXRM2DBinding49.length > 0)
              ) {
                let wardleyDiagramNUSXRM2DBinding58 = 0,
                  wardleyDiagramNUSXRM2DBinding59 = 0;
                wardleyDiagramNUSXRM2DBinding49.forEach((item) => {
                  let wardleyDiagramNUSXRM2DBinding177 = item.node(),
                    wardleyDiagramNUSXRM2DBinding178 =
                      wardleyDiagramNUSXRM2DBinding177.getComputedTextLength();
                  wardleyDiagramNUSXRM2DBinding58 = Math.max(
                    wardleyDiagramNUSXRM2DBinding58,
                    wardleyDiagramNUSXRM2DBinding178,
                  );
                  let wardleyDiagramNUSXRM2DBinding179 =
                    wardleyDiagramNUSXRM2DBinding177.getBBox();
                  wardleyDiagramNUSXRM2DBinding59 = Math.max(
                    wardleyDiagramNUSXRM2DBinding59,
                    wardleyDiagramNUSXRM2DBinding179.height,
                  );
                });
                let wardleyDiagramNUSXRM2DBinding60 =
                    wardleyDiagramNUSXRM2DBinding58 + 20 + 105,
                  wardleyDiagramNUSXRM2DBinding61 =
                    wardleyDiagramNUSXRM2DBinding48.length * 16 +
                    20 +
                    wardleyDiagramNUSXRM2DBinding59 / 2,
                  wardleyDiagramNUSXRM2DBinding62 =
                    wardleyDiagramNUSXRM2DBinding13.padding,
                  wardleyDiagramNUSXRM2DBinding63 =
                    wardleyDiagramNUSXRM2DBinding19 -
                    wardleyDiagramNUSXRM2DBinding13.padding -
                    wardleyDiagramNUSXRM2DBinding60,
                  wardleyDiagramNUSXRM2DBinding64 =
                    wardleyDiagramNUSXRM2DBinding13.padding,
                  wardleyDiagramNUSXRM2DBinding65 =
                    wardleyDiagramNUSXRM2DBinding20 -
                    wardleyDiagramNUSXRM2DBinding13.padding -
                    wardleyDiagramNUSXRM2DBinding61;
                wardleyDiagramNUSXRM2DBinding45 = Math.max(
                  wardleyDiagramNUSXRM2DBinding62,
                  Math.min(
                    wardleyDiagramNUSXRM2DBinding45,
                    wardleyDiagramNUSXRM2DBinding63,
                  ),
                );
                wardleyDiagramNUSXRM2DBinding46 = Math.max(
                  wardleyDiagramNUSXRM2DBinding64,
                  Math.min(
                    wardleyDiagramNUSXRM2DBinding46,
                    wardleyDiagramNUSXRM2DBinding65,
                  ),
                );
                wardleyDiagramNUSXRM2DBinding49.forEach((item, index) => {
                  item
                    .attr("x", wardleyDiagramNUSXRM2DBinding45 + 10)
                    .attr(
                      "y",
                      wardleyDiagramNUSXRM2DBinding46 + 10 + (index + 1) * 16,
                    );
                });
                wardleyDiagramNUSXRM2DBinding47
                  .insert("rect", "text")
                  .attr("x", wardleyDiagramNUSXRM2DBinding45)
                  .attr("y", wardleyDiagramNUSXRM2DBinding46)
                  .attr("width", wardleyDiagramNUSXRM2DBinding60)
                  .attr("height", wardleyDiagramNUSXRM2DBinding61)
                  .attr("fill", "white")
                  .attr("stroke", wardleyDiagramNUSXRM2DBinding14.axisColor)
                  .attr("stroke-width", 1.5)
                  .attr("rx", 4)
                  .attr("ry", 4);
              }
            }
          }
          if (wardleyDiagramNUSXRM2DBinding17.notes.length > 0) {
            let wardleyDiagramNUSXRM2DBinding112 =
              wardleyDiagramNUSXRM2DBinding22
                .append("g")
                .attr("class", "wardley-notes");
            wardleyDiagramNUSXRM2DBinding17.notes.forEach((item) => {
              let wardleyDiagramNUSXRM2DBinding150 =
                  wardleyDiagramNUSXRM2DBinding26(item.x),
                wardleyDiagramNUSXRM2DBinding151 =
                  wardleyDiagramNUSXRM2DBinding27(item.y);
              wardleyDiagramNUSXRM2DBinding112
                .append("text")
                .attr("x", wardleyDiagramNUSXRM2DBinding150)
                .attr("y", wardleyDiagramNUSXRM2DBinding151)
                .attr("text-anchor", "start")
                .attr("font-size", 11)
                .attr("fill", wardleyDiagramNUSXRM2DBinding14.axisTextColor)
                .attr("font-weight", "bold")
                .text(item.text);
            });
          }
          if (wardleyDiagramNUSXRM2DBinding17.accelerators.length > 0) {
            let wardleyDiagramNUSXRM2DBinding66 =
              wardleyDiagramNUSXRM2DBinding22
                .append("g")
                .attr("class", "wardley-accelerators");
            wardleyDiagramNUSXRM2DBinding17.accelerators.forEach((item) => {
              let wardleyDiagramNUSXRM2DBinding68 =
                  wardleyDiagramNUSXRM2DBinding26(item.x),
                wardleyDiagramNUSXRM2DBinding69 =
                  wardleyDiagramNUSXRM2DBinding27(item.y),
                wardleyDiagramNUSXRM2DBinding70 = `
        M ${wardleyDiagramNUSXRM2DBinding68} ${wardleyDiagramNUSXRM2DBinding69 - 15}
        L ${wardleyDiagramNUSXRM2DBinding68 + 60 - 20} ${wardleyDiagramNUSXRM2DBinding69 - 15}
        L ${wardleyDiagramNUSXRM2DBinding68 + 60 - 20} ${wardleyDiagramNUSXRM2DBinding69 - 15 - 8}
        L ${wardleyDiagramNUSXRM2DBinding68 + 60} ${wardleyDiagramNUSXRM2DBinding69}
        L ${wardleyDiagramNUSXRM2DBinding68 + 60 - 20} ${wardleyDiagramNUSXRM2DBinding69 + 15 + 8}
        L ${wardleyDiagramNUSXRM2DBinding68 + 60 - 20} ${wardleyDiagramNUSXRM2DBinding69 + 15}
        L ${wardleyDiagramNUSXRM2DBinding68} ${wardleyDiagramNUSXRM2DBinding69 + 15}
        Z
      `;
              wardleyDiagramNUSXRM2DBinding66
                .append("path")
                .attr("d", wardleyDiagramNUSXRM2DBinding70)
                .attr("fill", "white")
                .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
                .attr("stroke-width", 1);
              wardleyDiagramNUSXRM2DBinding66
                .append("text")
                .attr("x", wardleyDiagramNUSXRM2DBinding68 + 30)
                .attr("y", wardleyDiagramNUSXRM2DBinding69 + 15 + 15)
                .attr("text-anchor", "middle")
                .attr("font-size", 10)
                .attr("fill", wardleyDiagramNUSXRM2DBinding14.axisTextColor)
                .attr("font-weight", "bold")
                .text(item.name);
            });
          }
          if (wardleyDiagramNUSXRM2DBinding17.deaccelerators.length > 0) {
            let wardleyDiagramNUSXRM2DBinding67 =
              wardleyDiagramNUSXRM2DBinding22
                .append("g")
                .attr("class", "wardley-deaccelerators");
            wardleyDiagramNUSXRM2DBinding17.deaccelerators.forEach((item) => {
              let wardleyDiagramNUSXRM2DBinding74 =
                  wardleyDiagramNUSXRM2DBinding26(item.x),
                wardleyDiagramNUSXRM2DBinding75 =
                  wardleyDiagramNUSXRM2DBinding27(item.y),
                wardleyDiagramNUSXRM2DBinding76 = `
        M ${wardleyDiagramNUSXRM2DBinding74 + 60} ${wardleyDiagramNUSXRM2DBinding75 - 15}
        L ${wardleyDiagramNUSXRM2DBinding74 + 20} ${wardleyDiagramNUSXRM2DBinding75 - 15}
        L ${wardleyDiagramNUSXRM2DBinding74 + 20} ${wardleyDiagramNUSXRM2DBinding75 - 15 - 8}
        L ${wardleyDiagramNUSXRM2DBinding74} ${wardleyDiagramNUSXRM2DBinding75}
        L ${wardleyDiagramNUSXRM2DBinding74 + 20} ${wardleyDiagramNUSXRM2DBinding75 + 15 + 8}
        L ${wardleyDiagramNUSXRM2DBinding74 + 20} ${wardleyDiagramNUSXRM2DBinding75 + 15}
        L ${wardleyDiagramNUSXRM2DBinding74 + 60} ${wardleyDiagramNUSXRM2DBinding75 + 15}
        Z
      `;
              wardleyDiagramNUSXRM2DBinding67
                .append("path")
                .attr("d", wardleyDiagramNUSXRM2DBinding76)
                .attr("fill", "white")
                .attr("stroke", wardleyDiagramNUSXRM2DBinding14.componentStroke)
                .attr("stroke-width", 1);
              wardleyDiagramNUSXRM2DBinding67
                .append("text")
                .attr("x", wardleyDiagramNUSXRM2DBinding74 + 30)
                .attr("y", wardleyDiagramNUSXRM2DBinding75 + 15 + 15)
                .attr("text-anchor", "middle")
                .attr("font-size", 10)
                .attr("fill", wardleyDiagramNUSXRM2DBinding14.axisTextColor)
                .attr("font-weight", "bold")
                .text(item.name);
            });
          }
        },
        "draw",
      ),
    },
    styles: chunkAGHRB4JFN(() => "", "styles"),
  };
})();
export { WardleyDiagramNUSXRM2D as diagram };
