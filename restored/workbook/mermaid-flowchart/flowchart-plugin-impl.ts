// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: flowchart mermaid→slide plugin (legacy kPe/NPe/PPe).
// Stage-3 wave-78 cohesive mermaid-flowchart impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  KAe,
  XAe,
  QAe,
  UAe,
  ZAe,
  workbookBinding1667,
} from "../mermaid-slide-helpers";
import { NPe, workbookBinding1685 } from "./fc-slots";
import { OPe } from "./render-impl";

let APe: any;
let workbookBinding1686: any;
let jPe: any;
let MPe: any;

export function kPe(fcIn10897: any) {
  return fcIn10897.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "");
}
export const PPe = esmInit(() => {
  KAe();
  XAe();
  QAe();
  OPe();
  APe = {
    fill: "#333333",
    style: "solid",
  };
  workbookBinding1686 = (fcIn15751, fcIn15752) => ({
    ...(fcIn15751 ?? APe),
    ...fcIn15752,
  });
  jPe = (fcIn8262, fcIn8263) => {
    let fcBind18777 = fcIn8262.classes.flatMap(
        (item) => fcIn8263.get(item)?.styles ?? [],
      ),
      fcBind18778 = fcIn8262.classes.flatMap(
        (item) => fcIn8263.get(item)?.textStyles ?? [],
      );
    return workbookBinding1667([
      ...fcIn8262.styles,
      ...fcBind18777,
      ...fcBind18778,
    ]);
  };
  MPe = (props) => {
    let fcBind15753 = workbookBinding1667(props.style ?? []);
    return (
      props.stroke === "dotted" &&
        (fcBind15753.line = workbookBinding1686(fcBind15753.line, {
          style: "dotted",
        })),
      props.stroke === "thick" &&
        (fcBind15753.line = workbookBinding1686(fcBind15753.line, {
          width: 2,
        })),
      props.stroke === "invisible" &&
        (fcBind15753.line = workbookBinding1686(fcBind15753.line, {
          width: 0,
        })),
      fcBind15753
    );
  };
  NPe = {
    id: "flowchart",
    supports: (fcIn14973) =>
      fcIn14973 === "flowchart" || fcIn14973 === "flowchart-v2",
    convert: async (fcIn1026, fcIn1027) => {
      let fcBind6226 = fcIn1026.db,
        fcBind6227 = fcBind6226.getClasses?.() ?? new Map(),
        fcBind6228 = workbookBinding1667(
          fcBind6227.get("default")?.textStyles ?? [],
        ).text,
        fcBind6229 = Array.from(fcBind6226.getVertices().values()).map(
          (item) => {
            let fcBind16100 = jPe(item, fcBind6227);
            return {
              id: item.id,
              label: kPe(item.text ?? item.id),
              geometry: UAe(item.type),
              style: {
                ...fcBind16100,
                text: undefined,
              },
              textStyle: {
                ...fcBind6228,
                ...fcBind16100.text,
              },
            };
          },
        ),
        fcBind6230 = fcBind6226.getEdges().map((item, index) => {
          let fcBind13431 = ZAe(item.type),
            fcBind13432 = {
              id: item.id ?? `edge-${index}`,
              from: item.start,
              to: item.end,
              label: item.text ? kPe(item.text) : undefined,
              style: MPe(item),
              arrowStart: fcBind13431.start,
              arrowEnd: fcBind13431.end,
            };
          return (
            item.interpolate && (fcBind13432.kind = "curved"),
            fcBind13432
          );
        }),
        fcBind6231 = (fcBind6226.getSubGraphs?.() ?? []).map((item) => ({
          id: item.id,
          title: item.title,
          nodes: item.nodes,
        })),
        fcBind6232 =
          fcIn1027.options.layout?.rankDir ?? fcBind6226.getDirection?.();
      return workbookBinding1685({
        nodes: fcBind6229,
        edges: fcBind6230,
        subgraphs: fcBind6231,
        layout: {
          ...fcIn1027.options.layout,
          rankDir: fcBind6232,
        },
      });
    },
  };
});
