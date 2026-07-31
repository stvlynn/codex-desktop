// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-62: class/state/er/requirement/mindmap plugins (legacy cIe / sIe).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  measureTextBlock,
  ensureMeasureTextInit,
  applyRunTextStyle,
  ensureApplyRunTextStyleInit,
  createScratchSlide,
  ensureScratchSlideInit,
  resolveClassTextStyles,
  layoutGraphNodes,
  renderGraphToSlide,
  ensureChartLikePluginsInit,
  ensureFallbackPluginInit,
  ensureFlowchartPluginInit,
  ensureStateGeometryMapsInit,
  ensureArrowGeometryMapsInit,
  ensureConnectorHelpersInit,
  ensureGraphLayoutInit,
  stateNodeGeometry,
  mindNodeGeometry,
  roundedConnectorCorner,
} from "./boundary-hooks";
import { msa } from "./adapters-bag";

export const ensureGraphDiagramsInit = esmInit(() => {
  ensureMeasureTextInit();
  ensureApplyRunTextStyleInit();
  ensureScratchSlideInit();
  ensureStateGeometryMapsInit();
  ensureArrowGeometryMapsInit();
  ensureConnectorHelpersInit();
  ensureGraphLayoutInit();
  ensureMeasureTextInit();
  ensureApplyRunTextStyleInit();
  ensureScratchSlideInit();
  msa.msaSym1 = "accent1";
  msa.classDrawRelation = {
    type: "theme",
    value: msa.msaSym1,
    transform: {
      lighten: 0.8,
    },
  };
  msa.kFe = {
    type: "theme",
    value: msa.msaSym1,
    transform: {
      darken: 0.25,
    },
  };
  msa.seqDrawActors = {
    type: "theme",
    value: msa.msaSym1,
    transform: {
      darken: 0.5,
    },
  };
  msa.jFe = {
    type: "solid",
    color: msa.classDrawRelation,
  };
  msa.msaSym2 = {
    fill: {
      type: "solid",
      color: msa.kFe,
    },
    style: "solid",
    width: 1,
  };
  msa.msaSym3 = msa.seqDrawActors;
  msa.msaSym4 = {
    type: "none",
  };
  msa.classDrawNode = {
    fill: {
      type: "none",
    },
    style: "solid",
    width: 0,
  };
  msa.msaSym5 = {
    color: msa.msaSym3,
    fontSize: 16,
    bold: true,
    align: "center",
    verticalAlign: "middle",
    wrap: "none",
    insets: {
      top: 0,
      right: 8,
      bottom: 0,
      left: 8,
    },
  };
  msa.msaSym6 = {
    color: msa.msaSym3,
    fontSize: 14,
    align: "left",
    verticalAlign: "top",
    wrap: "none",
    insets: {
      top: 4,
      right: 10,
      bottom: 4,
      left: 10,
    },
  };
  msa.classRelationGeom = 168;
  msa.msaSym7 = 34;
  msa.classConvert = 20;
  msa.FFe = 10;
  msa.seqConvert = 28;
  msa.classMethodText = 28;
  msa.stateConvert = 64;
  msa.zFe = 96;
  msa.msaSym8 = 18;
  msa.msaSym9 = 15;
  msa.seqDrawMessages = {
    type: "solid",
    color: {
      type: "theme",
      value: "bg1",
    },
  };
  msa.erConvert = (msaIn8342) => {
    switch (msaIn8342) {
      case "BT":
      case "LR":
      case "RL":
      case "TB":
        return msaIn8342;
      default:
        return "TB";
    }
  };
  msa.msaSym10 = (msaIn15549) => msaIn15549.getDisplayDetails().displayText;
  msa.msaSym11 = (msaIn15753) =>
    Math.max(msa.seqConvert, msaIn15753 * msa.classConvert + msa.FFe);
  msa.seqDrawActivations = (msaIn6215, msaIn6216, msaIn6217) => {
    let msaBind16297 = measureTextBlock(msaIn6215, {
        fontSize: msa.msaSym5.fontSize,
        fontWeight: "bold",
      }),
      msaBind16298 = [...msaIn6216, ...msaIn6217].map((item) =>
        measureTextBlock(item, {
          fontSize: msa.msaSym6.fontSize,
        }),
      ),
      msaBind16299 = Math.max(0, ...msaBind16298.map((item) => item.width));
    return Math.max(
      msa.classRelationGeom,
      Math.ceil(
        Math.max(msaBind16297.width, msaBind16299) + msa.classMethodText * 2,
      ),
    );
  };
  msa.erNormalize = (props) =>
    Array.from(props.values()).map((item) => {
      let msaBind12141 = item.members.map((_item) => msa.msaSym10(_item)),
        msaBind12142 = item.methods.map((_item) => msa.msaSym10(_item)),
        msaBind12143 = item.label || item.id,
        msaBind12144 = msa.msaSym11(msaBind12141.length),
        msaBind12145 = msa.msaSym11(msaBind12142.length);
      return {
        id: item.id,
        label: msaBind12143,
        members: msaBind12141,
        methods: msaBind12142,
        style: resolveClassTextStyles(item.styles ?? []),
        width: msa.seqDrawActivations(msaBind12143, msaBind12141, msaBind12142),
        height: msa.msaSym7 + msaBind12144 + msaBind12145,
        titleHeight: msa.msaSym7,
        memberHeight: msaBind12144,
        methodHeight: msaBind12145,
      };
    });
  msa.msaSym12 = (msaIn5397) => {
    switch (msaIn5397) {
      case 0:
        return "aggregation";
      case 1:
        return "extension";
      case 2:
        return "composition";
      case 3:
        return "dependency";
      case 4:
        return "lollipop";
      default:
        return "none";
    }
  };
  msa.reqNormalize = (props) => ({
    ...msa.msaSym2,
    style: props.relation?.lineType === 1 ? "dashed" : "solid",
  });
  msa.seqDrawNotes = (props) =>
    props.map((item, index) => ({
      id: `class-relation-${index}`,
      from: item.id1,
      to: item.id2,
      label: item.title || item.text || undefined,
      startMarker: msa.msaSym12(item.relation?.type1),
      endMarker: msa.msaSym12(item.relation?.type2),
      line: msa.reqNormalize(item),
    }));
  msa.classMemberText = (props) => {
    let msaBind15409 = 1 / 0,
      msaBind15410 = 1 / 0;
    return (
      props.forEach((item) => {
        msaBind15409 = Math.min(msaBind15409, item.left);
        msaBind15410 = Math.min(msaBind15410, item.top);
      }),
      !Number.isFinite(msaBind15409) || !Number.isFinite(msaBind15410)
        ? {
            offsetX: 0,
            offsetY: 0,
          }
        : {
            offsetX: msaBind15409,
            offsetY: msaBind15410,
          }
    );
  };
  msa.qFe = (msaIn2945, msaIn2946, msaIn2947) => {
    let msaBind10867 = msaIn2946.centerX - msaIn2945.centerX,
      msaBind10868 = msaIn2946.centerY - msaIn2945.centerY;
    return msaIn2947 === "LR"
      ? msaBind10867 >= 0
        ? {
            from: "right",
            to: "left",
          }
        : {
            from: "left",
            to: "right",
          }
      : msaIn2947 === "RL"
        ? msaBind10867 <= 0
          ? {
              from: "left",
              to: "right",
            }
          : {
              from: "right",
              to: "left",
            }
        : msaIn2947 === "BT"
          ? msaBind10868 <= 0
            ? {
                from: "top",
                to: "bottom",
              }
            : {
                from: "bottom",
                to: "top",
              }
          : msaBind10868 >= 0
            ? {
                from: "bottom",
                to: "top",
              }
            : {
                from: "top",
                to: "bottom",
              };
  };
  msa.msaSym13 = (msaIn7116, msaIn7117, msaIn7118, msaIn7119, msaIn7120) => {
    let msaBind17457 = msaIn7116.shapes.add({
      geometry: "textbox",
      name: msaIn7117,
      position: msaIn7119,
      fill: msa.msaSym4,
      line: msa.classDrawNode,
    });
    return (
      (msaBind17457.text = msaIn7118),
      applyRunTextStyle(msaBind17457, msaIn7120),
      (msaBind17457.zIndex = 4),
      msaBind17457
    );
  };
  msa.msaSym14 = (
    msaIn6817,
    msaIn6818,
    msaIn6819,
    msaIn6820,
    msaIn6821,
    msaIn6822,
  ) => {
    let msaBind17142 = msaIn6817.shapes.add({
      geometry: "line",
      name: msaIn6818,
      position: {
        left: msaIn6819,
        top: msaIn6820,
        width: msaIn6821,
        height: 0,
      },
      fill: msa.msaSym4,
      line: msaIn6822,
    });
    return ((msaBind17142.zIndex = 3), msaBind17142);
  };
  msa.classNodeStyle = (msaIn932, msaIn933, msaIn934, msaIn935, msaIn936) => {
    let msaBind5942 = msaIn934.left - msaIn935,
      msaBind5943 = msaIn934.top - msaIn936,
      msaBind5944 = msaIn933.style.fill ?? msa.jFe,
      msaBind5945 = msaIn933.style.line ?? msa.msaSym2,
      msaBind5946 = msaIn932.shapes.add({
        geometry: "rect",
        name: `mermaid.class.node:${msaIn933.id}`,
        position: {
          left: msaBind5942,
          top: msaBind5943,
          width: msaIn934.width,
          height: msaIn934.height,
        },
        fill: msaBind5944,
        line: msaBind5945,
      });
    msaBind5946.zIndex = 2;
    let msaBind5947 = msaBind5943 + msaIn933.titleHeight,
      msaBind5948 = msaBind5947 + msaIn933.memberHeight;
    return (
      msa.msaSym14(
        msaIn932,
        `mermaid.class.divider:${msaIn933.id}:members`,
        msaBind5942,
        msaBind5947,
        msaIn934.width,
        msaBind5945,
      ),
      msa.msaSym14(
        msaIn932,
        `mermaid.class.divider:${msaIn933.id}:methods`,
        msaBind5942,
        msaBind5948,
        msaIn934.width,
        msaBind5945,
      ),
      msa.msaSym13(
        msaIn932,
        `mermaid.class.title:${msaIn933.id}`,
        msaIn933.label,
        {
          left: msaBind5942,
          top: msaBind5943,
          width: msaIn934.width,
          height: msaIn933.titleHeight,
        },
        {
          ...msa.msaSym5,
          ...(msaIn933.style.text ?? {}),
        },
      ),
      msaIn933.members.length > 0 &&
        msa.msaSym13(
          msaIn932,
          `mermaid.class.members:${msaIn933.id}`,
          msaIn933.members.join("\msa.msaSym19"),
          {
            left: msaBind5942,
            top: msaBind5947,
            width: msaIn934.width,
            height: msaIn933.memberHeight,
          },
          {
            ...msa.msaSym6,
            ...(msaIn933.style.text ?? {}),
          },
        ),
      msaIn933.methods.length > 0 &&
        msa.msaSym13(
          msaIn932,
          `mermaid.class.methods:${msaIn933.id}`,
          msaIn933.methods.join("\msa.msaSym19"),
          {
            left: msaBind5942,
            top: msaBind5948,
            width: msaIn934.width,
            height: msaIn933.methodHeight,
          },
          {
            ...msa.msaSym6,
            ...(msaIn933.style.text ?? {}),
          },
        ),
      msaBind5946
    );
  };
  msa.msaSym15 = (msaIn5787) => {
    switch (msaIn5787) {
      case "aggregation":
      case "composition":
        return {
          type: "diamond",
        };
      case "dependency":
        return {
          type: "arrow",
        };
      case "lollipop":
        return {
          type: "oval",
        };
      default:
        return;
    }
  };
  msa.mindNormalize = (msaIn1807, msaIn1808, msaIn1809, msaIn1810) => {
    let msaBind8333 = msaIn1807.left - msaIn1809,
      msaBind8334 = msaIn1807.top - msaIn1810,
      msaBind8335 = msaIn1807.centerX - msaIn1809,
      msaBind8336 = msaIn1807.centerY - msaIn1810;
    switch (msaIn1808) {
      case "top":
        return {
          left: msaBind8335 - msa.msaSym8 / 2,
          top: msaBind8334 - msa.msaSym9,
          width: msa.msaSym8,
          height: msa.msaSym9,
          rotation: 180,
        };
      case "left":
        return {
          left: msaBind8333 - msa.msaSym9,
          top: msaBind8336 - msa.msaSym8 / 2,
          width: msa.msaSym9,
          height: msa.msaSym8,
          rotation: 90,
        };
      case "right":
        return {
          left: msaBind8333 + msaIn1807.width,
          top: msaBind8336 - msa.msaSym8 / 2,
          width: msa.msaSym9,
          height: msa.msaSym8,
          rotation: 270,
        };
      default:
        return {
          left: msaBind8335 - msa.msaSym8 / 2,
          top: msaBind8334 + msaIn1807.height,
          width: msa.msaSym8,
          height: msa.msaSym9,
        };
    }
  };
  msa.msaSym16 = (
    msaIn7195,
    msaIn7196,
    msaIn7197,
    msaIn7198,
    msaIn7199,
    msaIn7200,
    msaIn7201,
  ) => {
    let msaBind17562 = msaIn7195.shapes.add({
      geometry: "triangle",
      name: msaIn7196,
      position: msa.mindNormalize(msaIn7197, msaIn7198, msaIn7199, msaIn7200),
      fill: msa.seqDrawMessages,
      line: msaIn7201,
    });
    return ((msaBind17562.zIndex = 3), msaBind17562);
  };
  msa.reqConvert = (msaIn10484, msaIn10485) => ({
    ...msaIn10484,
    rankDir: msaIn10485,
    nodeSep: msaIn10484?.nodeSep ?? msa.stateConvert,
    rankSep: msaIn10484?.rankSep ?? msa.zFe,
  });
  msa.classLayoutConvert = (msaIn603, msaIn604, msaIn605, msaIn606) => {
    let { slide } = createScratchSlide(),
      msaBind4618 = msa.erConvert(msaIn605?.rankDir ?? msaIn606),
      msaBind4619 = msa.erNormalize(msaIn603),
      msaBind4620 = msa.seqDrawNotes(msaIn604),
      msaBind4621 = layoutGraphNodes(
        msaBind4619.map((item) => ({
          id: item.id,
          label: item.label,
          width: item.width,
          height: item.height,
        })),
        msaBind4620.map((item) => ({
          id: item.id,
          from: item.from,
          to: item.to,
          label: item.label,
        })),
        msa.reqConvert(msaIn605, msaBind4618),
      ),
      { offsetX, offsetY } = msa.classMemberText(msaBind4621.nodes),
      msaBind4622 = new Map(),
      msaBind4623 = {};
    return (
      msaBind4619.forEach((item) => {
        let msaBind19503 = msaBind4621.nodes.get(item.id);
        if (!msaBind19503) return;
        let msaBind19504 = msa.classNodeStyle(
          slide,
          item,
          msaBind19503,
          offsetX,
          offsetY,
        );
        msaBind4622.set(item.id, msaBind19504);
        msaBind4623[item.id] = msaBind19504.id;
      }),
      msaBind4620.forEach((item) => {
        let msaBind6880 = msaBind4622.get(item.from),
          msaBind6881 = msaBind4622.get(item.to),
          msaBind6882 = msaBind4621.nodes.get(item.from),
          msaBind6883 = msaBind4621.nodes.get(item.to);
        if (!msaBind6880 || !msaBind6881 || !msaBind6882 || !msaBind6883)
          return;
        let msaBind6884 = msa.qFe(msaBind6882, msaBind6883, msaBind4618);
        slide.shapes.add({
          geometry: "connector",
          from: msaBind6880,
          to: msaBind6881,
          fromIdx: slide.shapes.getConnectionSiteIndex(
            msaBind6880,
            msaBind6884.from,
          ),
          toIdx: slide.shapes.getConnectionSiteIndex(
            msaBind6881,
            msaBind6884.to,
          ),
          kind: "straight",
          head: msa.msaSym15(item.startMarker),
          tail: msa.msaSym15(item.endMarker),
          line: item.line,
        });
        item.startMarker === "extension" &&
          msa.msaSym16(
            slide,
            `mermaid.class.marker:${item.id}:start`,
            msaBind6882,
            msaBind6884.from,
            offsetX,
            offsetY,
            item.line,
          );
        item.endMarker === "extension" &&
          msa.msaSym16(
            slide,
            `mermaid.class.marker:${item.id}:end`,
            msaBind6883,
            msaBind6884.to,
            offsetX,
            offsetY,
            item.line,
          );
      }),
      {
        elements: slide.toProto().elements ?? [],
        idMap: msaBind4623,
      }
    );
  };
  msa.stateNormalize = (msaIn2920, msaIn2921) => ({
    nodes: Array.from(msaIn2920.values()).map((item) => {
      let msaBind14586 =
        typeof item.description == "string"
          ? item.description
          : Array.isArray(item.description)
            ? item.description.join("\msa.msaSym19")
            : item.id;
      return {
        id: item.id,
        label: msaBind14586,
        geometry: stateNodeGeometry(item.type),
        style: resolveClassTextStyles(item.styles ?? []),
      };
    }),
    edges: msaIn2921.map((item, index) => ({
      id: `state-edge-${index}`,
      from: item.id1,
      to: item.id2,
      label: item.relationTitle || undefined,
      arrowEnd: "arrow",
    })),
  });
  msa.erLayoutConvert = (msaIn2803, msaIn2804) => ({
    nodes: Array.from(msaIn2803.values()).map((item) => {
      let msaBind14109 = item.attributes.map((_item) => {
        let msaBind20124 = _item.keys?.length
          ? ` (${_item.keys.join(",")})`
          : "";
        return `${_item.name}${_item.type ? ` : ${_item.type}` : ""}${msaBind20124}`;
      });
      return {
        id: item.id,
        label: [item.label, ...msaBind14109]
          .filter(Boolean)
          .join("\msa.msaSym19"),
        geometry: "rect",
        style: resolveClassTextStyles(item.cssStyles ?? []),
      };
    }),
    edges: msaIn2804.map((item, index) => ({
      id: `msa.msaSym18-${index}`,
      from: item.entityA,
      to: item.entityB,
      label: item.relSpec?.relType || undefined,
      arrowEnd: "arrow",
    })),
  });
  msa.reqLayoutConvert = (msaIn1649, msaIn1650, msaIn1651) => {
    let msaBind7895 = [];
    return (
      msaIn1649.forEach((item) => {
        msaBind7895.push({
          id: item.name,
          label: [item.name, item.requirementId, item.text]
            .filter(Boolean)
            .join("\msa.msaSym19"),
          geometry: "rect",
          style: {
            fill: "#eef5ff",
            line: {
              fill: "#6d8ccc",
              style: "solid",
            },
          },
        });
      }),
      msaIn1650.forEach((item) => {
        msaBind7895.push({
          id: item.name,
          label: [item.name, item.docRef].filter(Boolean).join("\msa.msaSym19"),
          geometry: "rect",
          style: {
            fill: "#f7f7f7",
            line: {
              fill: "#888888",
              style: "solid",
            },
          },
        });
      }),
      {
        nodes: msaBind7895,
        edges: msaIn1651.map((item, index) => ({
          id: `req-${index}`,
          from: item.src,
          to: item.dst,
          label: item.type,
          arrowEnd: "arrow",
        })),
      }
    );
  };
  msa.msaSym17 = (msaIn12262, msaIn12263 = []) =>
    msaIn12262
      ? (msaIn12263.push(msaIn12262),
        msaIn12262.children?.forEach((msaIn16538) =>
          msa.msaSym17(msaIn16538, msaIn12263),
        ),
        msaIn12263)
      : msaIn12263;
  msa.mindLayoutConvert = (msaIn3062) => {
    let msaBind11139 = msa.msaSym17(msaIn3062).map((item) => ({
        id: `mind-${item.id}`,
        label: item.descr,
        geometry: mindNodeGeometry(item.type),
        style: resolveClassTextStyles(
          item.class ? [`class:${item.class}`] : [],
        ),
      })),
      msaBind11140 = [];
    return (
      msa.msaSym17(msaIn3062).forEach((item) => {
        item.children?.forEach((msaIn7673) => {
          msaBind11140.push({
            id: `mind-edge-${item.id}-${msaIn7673.id}`,
            from: `mind-${item.id}`,
            to: `mind-${msaIn7673.id}`,
            arrowEnd: "none",
          });
        });
      }),
      {
        nodes: msaBind11139,
        edges: msaBind11140,
      }
    );
  };
  msa.classDiagramPlugin = {
    id: "class",
    supports: (msaIn12376) =>
      msaIn12376 === "class" ||
      msaIn12376 === "classDiagram" ||
      msaIn12376 === "classDiagram-v2",
    convert: async (msaIn8067, msaIn8068) => {
      let msaBind18578 = msaIn8067.db;
      return msa.classLayoutConvert(
        msaBind18578.getClasses(),
        msaBind18578.getRelations(),
        msaIn8068.options.layout,
        msaBind18578.getDirection?.(),
      );
    },
  };
  msa.stateDiagramPlugin = {
    id: "state",
    supports: (msaIn12377) =>
      msaIn12377 === "state" ||
      msaIn12377 === "stateDiagram" ||
      msaIn12377 === "stateDiagram-v2",
    convert: async (msaIn7343, msaIn7344) => {
      let msaBind17744 = msaIn7343.db,
        msaBind17745 = msa.stateNormalize(
          msaBind17744.getStates(),
          msaBind17744.getRelations(),
        );
      return renderGraphToSlide({
        nodes: msaBind17745.nodes,
        edges: msaBind17745.edges,
        layout: msaIn7344.options.layout,
      });
    },
  };
  msa.erDiagramPlugin = {
    id: "msa.msaSym18",
    supports: (msaIn16442) => msaIn16442 === "msa.msaSym18",
    convert: async (msaIn5683, msaIn5684) => {
      let msaBind15573 = msaIn5683.db,
        msaBind15574 = msa.erLayoutConvert(
          msaBind15573.getEntities(),
          msaBind15573.getRelationships(),
        ),
        msaBind15575 =
          msaIn5684.options.layout?.rankDir ?? msaBind15573.getDirection?.();
      return renderGraphToSlide({
        nodes: msaBind15574.nodes,
        edges: msaBind15574.edges,
        layout: {
          ...msaIn5684.options.layout,
          rankDir: msaBind15575,
        },
      });
    },
  };
  msa.requirementPlugin = {
    id: "requirement",
    supports: (msaIn16121) => msaIn16121 === "requirement",
    convert: async (msaIn5409, msaIn5410) => {
      let msaBind15167 = msaIn5409.db,
        msaBind15168 = msa.reqLayoutConvert(
          msaBind15167.getRequirements(),
          msaBind15167.getElements(),
          msaBind15167.getRelationships(),
        ),
        msaBind15169 =
          msaIn5410.options.layout?.rankDir ?? msaBind15167.getDirection?.();
      return renderGraphToSlide({
        nodes: msaBind15168.nodes,
        edges: msaBind15168.edges,
        layout: {
          ...msaIn5410.options.layout,
          rankDir: msaBind15169,
        },
      });
    },
  };
  msa.mindmapPlugin = {
    id: "mindmap",
    supports: (msaIn16264) => msaIn16264 === "mindmap",
    convert: async (msaIn6263, msaIn6264) => {
      let msaBind16374 = msaIn6263.db,
        msaBind16375 = msa.mindLayoutConvert(msaBind16374.getMindmap()),
        msaBind16376 = msaIn6264.options.layout?.rankDir ?? "LR";
      return renderGraphToSlide({
        nodes: msaBind16375.nodes,
        edges: msaBind16375.edges,
        layout: {
          ...msaIn6264.options.layout,
          rankDir: msaBind16376,
        },
      });
    },
  };
  msa.graphDiagramPlugins = [
    msa.classDiagramPlugin,
    msa.stateDiagramPlugin,
    msa.erDiagramPlugin,
    msa.requirementPlugin,
    msa.mindmapPlugin,
  ];
});
