// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Presentation.apply patch engine (legacy rze nest).
// Stage-3 wave-132 — unlocks rze leave-behind via prefH NotesSlide/CommentThread.

import { X$ as Slide } from "../presentation-slide";
import { ImageElement } from "../image-element";
import { TextSelection } from "../text-selection";
import {
  workbookBinding736 as ShapeElement,
  workbookHelper786,
  hze,
} from "../shape-element";
import { prefH, bze, yze, dze } from "../presentation-ref";
import { fze, gze, mze, _ze, pze, vze } from "../shape-style-apply";

export function rze(paIn203: any, paIn204: any) {
  let paBind3108 = new Map(),
    paBind3109 = {},
    paBind3110 = [],
    paBind3111 = (paIn13326) => {
      paBind3110.push(`TODO: ${paIn13326} is not implemented yet.`);
    },
    paBind3112 = (paIn6115, paIn6116) => {
      if (!paIn6115) return;
      if (!ize(paIn6115)) throw Error(`Alias must start with "@": ${paIn6115}`);
      if (paBind3108.has(paIn6115))
        throw Error(`Alias already defined: ${paIn6115}`);
      let paBind16187 = bze(paIn6116);
      if (!paBind16187)
        throw Error(`Cannot alias target without anchor: ${paIn6115}`);
      paBind3108.set(paIn6115, paIn6116);
      paBind3109[paIn6115] = paBind16187;
    },
    paBind3113 = (paIn9043) => {
      if (ize(paIn9043)) {
        let paBind21440 = paBind3108.get(paIn9043);
        if (!paBind21440) throw Error(`Unknown alias target: ${paIn9043}`);
        return paBind21440;
      }
      return paIn203.resolve(paIn9043);
    };
  for (let paBind3391 of paIn204)
    switch (paBind3391.op) {
      case "slide.add": {
        let paBind18729 = paIn203.slides.add({
          layout: paBind3391.layout,
          layoutId: paBind3391.layoutId,
          width: paBind3391.width,
          height: paBind3391.height,
        });
        paBind3112(paBind3391.as, paBind18729);
        break;
      }
      case "slide.duplicate": {
        let paBind22001 = workbookHelper785(
          paBind3113(paBind3391.target),
          paBind3391.op,
        ).duplicate();
        paBind3112(paBind3391.as, paBind22001);
        break;
      }
      case "slide.remove":
        workbookHelper785(
          paBind3113(paBind3391.target),
          paBind3391.op,
        ).delete();
        break;
      case "slide.background.set": {
        let paBind19143 = workbookHelper785(
          paBind3113(paBind3391.target),
          paBind3391.op,
        );
        paBind3391.fill !== undefined &&
          (paBind19143.background.fill = paBind3391.fill);
        paBind3391.ref !== undefined &&
          (paBind19143.background.ref = yze(paBind3391.ref));
        break;
      }
      case "shape.add": {
        let paBind15439 = workbookHelper785(
          paBind3113(paBind3391.slide),
          paBind3391.op,
        ).shapes.add(hze(paBind3391.props, paBind3113));
        fze(
          paBind15439,
          {
            name: paBind3391.props.name,
            placeholderType: paBind3391.props.placeholderType,
            placeholderIndex: paBind3391.props.placeholderIndex,
          },
          paBind3113,
        );
        paBind3112(paBind3391.as, paBind15439);
        break;
      }
      case "shape.set":
        fze(
          workbookHelper786(paBind3113(paBind3391.target), paBind3391.op),
          paBind3391.props,
          paBind3113,
        );
        break;
      case "shape.remove":
        workbookHelper786(
          paBind3113(paBind3391.target),
          paBind3391.op,
        ).delete();
        break;
      case "text.set":
        workbookHelper788(paBind3113(paBind3391.target), paBind3391.op).set(
          paBind3391.value,
        );
        break;
      case "text.add":
        paBind3111(paBind3391.op);
        break;
      case "text.replace": {
        if (!paBind3391.find) {
          paBind3110.push("text.replace ignored empty find string");
          break;
        }
        let paBind17867 = workbookHelper788(
            paBind3113(paBind3391.target),
            paBind3391.op,
          ),
          paBind17868 = dze(paBind3391.value);
        paBind17867.replace(paBind3391.find, paBind17868);
        break;
      }
      case "text.style.set":
        gze(
          workbookHelper788(paBind3113(paBind3391.target), paBind3391.op),
          paBind3391.props,
        );
        break;
      case "textrange.style.set":
        _ze(cze(paBind3391.target, paBind3113, paIn203), paBind3391.props);
        break;
      case "notes.set": {
        let paBind22153 = aze(paBind3113(paBind3391.target), paBind3391.op);
        paBind22153.text = paBind3391.value;
        break;
      }
      case "notes.append":
      case "notes.clear":
      case "notes.visibility.set":
        paBind3111(paBind3391.op);
        break;
      case "image.add": {
        let paBind21763 = workbookHelper785(
          paBind3113(paBind3391.slide),
          paBind3391.op,
        ).images.add(paBind3391.props);
        paBind3112(paBind3391.as, paBind21763);
        break;
      }
      case "image.set":
        mze(
          workbookHelper787(paBind3113(paBind3391.target), paBind3391.op),
          paBind3391.props,
        );
        break;
      case "image.replace":
        workbookHelper787(paBind3113(paBind3391.target), paBind3391.op).replace(
          paBind3391.props,
        );
        break;
      case "image.remove":
        workbookHelper787(
          paBind3113(paBind3391.target),
          paBind3391.op,
        ).delete();
        break;
      case "table.add":
      case "table.set":
      case "table.remove":
      case "table.merge":
      case "table.values.set":
      case "table.cell.set":
      case "table.column.set":
      case "table.range.set":
        paBind3111(paBind3391.op);
        break;
      case "chart.add":
      case "chart.set":
      case "chart.remove":
        paBind3111(paBind3391.op);
        break;
      case "slide.insert":
      case "slide.move":
      case "slide.frame.set":
      case "slide.layout.set":
        paBind3111(paBind3391.op);
        break;
      case "shape.order":
        paBind3111(paBind3391.op);
        break;
      case "layout.add":
      case "layout.rename":
      case "layout.parent.set":
      case "layout.colorMap.set":
      case "layout.placeholder.add":
        paBind3111(paBind3391.op);
        break;
      case "theme.colorScheme.set":
        paBind3111(paBind3391.op);
        break;
      case "style.set":
        paBind3111(paBind3391.op);
        break;
      case "script.run":
        paBind3111(paBind3391.op);
        break;
      case "autolayout.apply":
        paBind3111(paBind3391.op);
        break;
      case "comments.self.set":
      case "thread.add":
      case "thread.resolve":
      case "thread.reopen":
      case "thread.reaction.toggle":
        paBind3111(paBind3391.op);
        break;
      case "thread.reply":
        oze(paBind3113(paBind3391.target), paBind3391.op).addReply(
          paBind3391.body,
          {
            author: paBind3391.author,
            createdAt: paBind3391.createdAt,
            position: paBind3391.position,
          },
        );
        break;
      default:
        throw Error(`Unsupported patch op: ${String(paBind3391)}`);
    }
  return {
    idMap: paBind3109,
    warnings: paBind3110,
  };
}
export function ize(paIn13614: any) {
  return paIn13614.startsWith("@") && paIn13614.length > 1;
}
export function workbookHelper785(paIn11292: any, paIn11293: any) {
  if (paIn11292 instanceof X$) return paIn11292;
  throw Error(`${paIn11293} requires a slide target.`);
}
export function workbookHelper787(paIn11255: any, paIn11256: any) {
  if (paIn11255 instanceof ImageElement) return paIn11255;
  throw Error(`${paIn11256} requires an image target.`);
}
export function aze(paIn11257: any, paIn11258: any) {
  if (paIn11257 instanceof prefH.NotesSlide) return paIn11257;
  throw Error(`${paIn11258} requires a notes target.`);
}
export function oze(paIn11200: any, paIn11201: any) {
  if (paIn11200 instanceof prefH.CommentThread) return paIn11200;
  throw Error(`${paIn11201} requires a thread target.`);
}
export function sze(paIn11054: any, paIn11055: any) {
  if (paIn11054 instanceof TextSelection) return paIn11054;
  throw Error(`${paIn11055} requires a text range target.`);
}
export function cze(paIn6076: any, paIn6077: any, paIn6078: any) {
  let paBind16129 = lze(paIn6076);
  if (paBind16129) {
    let paBind18695 = bze(paIn6077(paBind16129.alias));
    if (!paBind18695)
      throw Error("textrange.style.set requires an element target.");
    let paBind18696 = uze(paBind18695, paBind16129.start, paBind16129.length);
    return sze(paIn6078.resolve(paBind18696), "textrange.style.set");
  }
  return sze(paIn6077(paIn6076), "textrange.style.set");
}
export function lze(paIn5098: any) {
  if (!paIn5098.startsWith("tr/@")) return;
  let paBind14554 = paIn5098.split("/");
  if (paBind14554.length !== 4)
    throw Error(`Invalid text range alias target: ${paIn5098}`);
  let paBind14555 = paBind14554[1],
    paBind14556 = Number(paBind14554[2]),
    paBind14557 = Number(paBind14554[3]);
  if (!Number.isFinite(paBind14556) || !Number.isFinite(paBind14557))
    throw Error(`Invalid text range offsets in target: ${paIn5098}`);
  return {
    alias: paBind14555,
    start: paBind14556,
    length: paBind14557,
  };
}
export function uze(paIn7930: any, paIn7931: any, paIn7932: any) {
  let paBind18414 = paIn7930.indexOf("/");
  if (paBind18414 <= 0 || paBind18414 === paIn7930.length - 1)
    throw Error(`Invalid element anchor for text range: ${paIn7930}`);
  return `tr/${paIn7930.slice(0, paBind18414)}/${paIn7930.slice(paBind18414 + 1)}/${paIn7931}/${paIn7932}`;
}
export function workbookHelper788(paIn10927: any, paIn10928: any) {
  if (paIn10927 instanceof ShapeElement) return paIn10927.text;
  throw Error(`${paIn10928} requires a shape text target.`);
}

export const applyPresentationOps = rze;
export const isAliasTarget = ize;
export const requireSlideTarget = workbookHelper785;
export const requireImageTarget = workbookHelper787;
export const requireNotesTarget = aze;
export const requireThreadTarget = oze;
export const requireTextRangeTarget = sze;
export const resolveTextRangeStyleTarget = cze;
export const parseTextRangeAlias = lze;
export const composeTextRangeAid = uze;
export const requireShapeTextTarget = workbookHelper788;
