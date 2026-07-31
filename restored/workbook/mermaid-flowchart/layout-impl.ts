// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: px parse + dagre mermaid graph layout (legacy parsePx/$Ne/Binding1675).
// Stage-3 wave-78 cohesive mermaid-flowchart impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Graph as workbookBinding1671 } from "../../vendor/graphlib";
import { layout as dagreLayout } from "../../vendor/dagre";
import {
  workbookBinding1615,
  workbookBinding1616,
} from "../mermaid-slide-helpers";
import { workbookBinding1675 } from "./fc-slots";

const workbookBinding1672 = () => {};
const YNe = () => {};
function wNe(fcIn7398: any, _fcIn7399?: any): void {
  dagreLayout(fcIn7398);
}

let XNe: any;
let ZNe: any;
let QNe: any;

export function parseMermaidLayoutPx(
  fcIn4501: any,
  fcIn4502: any,
  fcIn4503: any,
) {
  if (fcIn4501 === undefined) return fcIn4502;
  if (typeof fcIn4501 == "number") {
    if (!Number.isFinite(fcIn4501))
      throw Error(`${fcIn4503} must be a finite px value.`);
    return fcIn4501;
  }
  let fcBind13746 = /^(-?(?:\d+|\d*\.\d+))px$/.exec(fcIn4501.trim());
  if (!fcBind13746)
    throw Error(`${fcIn4503} must be a number or a "[number]px" string.`);
  let fcBind13747 = Number(fcBind13746[1]);
  if (!Number.isFinite(fcBind13747))
    throw Error(`${fcIn4503} must be a finite px value.`);
  return fcBind13747;
}
export const $Ne = esmInit(() => {
  workbookBinding1672();
  YNe();
  workbookBinding1616();
  XNe = 50;
  ZNe = 74;
  QNe = 16;
  workbookBinding1675 = (fcIn939, fcIn940, fcIn941 = {}) => {
    let fcBind5968 = new workbookBinding1671({
        multigraph: true,
      }),
      fcBind5969 = parseMermaidLayoutPx(
        fcIn941.padding,
        QNe,
        "mermaid layout padding",
      );
    fcBind5968.setGraph({
      rankdir: fcIn941.rankDir ?? "TB",
      nodesep: parseMermaidLayoutPx(
        fcIn941.nodeSep,
        XNe,
        "mermaid layout nodeSep",
      ),
      ranksep: parseMermaidLayoutPx(
        fcIn941.rankSep,
        ZNe,
        "mermaid layout rankSep",
      ),
    });
    fcBind5968.setDefaultEdgeLabel(() => ({}));
    fcIn939.forEach((item) => {
      let fcBind13189 = item.width !== undefined && item.height !== undefined,
        fcBind13190 = fcBind13189
          ? {
              width: item.width,
              height: item.height,
            }
          : workbookBinding1615(item.label),
        fcBind13191 = fcBind13189
          ? Math.ceil(fcBind13190.width)
          : Math.max(40, Math.ceil(fcBind13190.width + fcBind5969 * 2)),
        fcBind13192 = fcBind13189
          ? Math.ceil(fcBind13190.height)
          : Math.max(28, Math.ceil(fcBind13190.height + fcBind5969 * 2));
      fcBind5968.setNode(item.id, {
        width: fcBind13191,
        height: fcBind13192,
      });
    });
    fcIn940.forEach((item) => {
      fcBind5968.setEdge(item.from, item.to, {}, item.id);
    });
    wNe(fcBind5968, {});
    let fcBind5970 = new Map();
    return (
      fcIn939.forEach((item) => {
        let fcBind13992 = fcBind5968.node(item.id),
          fcBind13993 = item.width ?? fcBind13992.width,
          fcBind13994 = item.height ?? fcBind13992.height,
          fcBind13995 = fcBind13992.x,
          fcBind13996 = fcBind13992.y;
        fcBind5970.set(item.id, {
          ...item,
          width: fcBind13993,
          height: fcBind13994,
          left: fcBind13995 - fcBind13993 / 2,
          top: fcBind13996 - fcBind13994 / 2,
          centerX: fcBind13995,
          centerY: fcBind13996,
        });
      }),
      {
        nodes: fcBind5970,
        edges: fcIn940,
      }
    );
  };
});
