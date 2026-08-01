// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: add code-block shapes from plugin (legacy cAe).
// Stage-3 wave-105.

import { pcbH } from "./boundary-hooks";

void pcbH;

export function addFromCodePlugin(pcbIn903: any, pcbIn904: any) {
  let pcbBind5730 = pcbH.parseCodeMeta(pcbIn904),
    pcbBind5731 = pcbBind5730.code,
    pcbBind5732 = pcbBind5730.label,
    pcbBind5733 = pcbIn904.showHeader ?? pcbBind5732 !== undefined,
    pcbBind5734 = pcbH.resolveFit(pcbIn904),
    pcbBind5735 = pcbH.computePosition(
      pcbIn903,
      pcbIn904.position,
      pcbBind5731,
      pcbBind5733,
      pcbBind5734,
    ),
    pcbBind5736 = pcbBind5733 ? pcbH.headerHeight : 0,
    pcbBind5737 = [],
    pcbBind5738 = pcbIn903.shapes.add({
      geometry: "roundRect",
      name: "code.block.container",
      position: pcbBind5735,
      fill: pcbH.theme.containerFill,
      line: {
        style: "solid",
        fill: pcbH.theme.containerLine,
        width: 1,
      },
      borderRadius: 24,
    });
  if ((pcbBind5737.push(pcbBind5738), pcbBind5733)) {
    let pcbBind12561 = pcbIn903.shapes.add({
      geometry: "textbox",
      name: "code.block.header",
      position: {
        left: pcbBind5735.left,
        top: pcbBind5735.top,
        width: pcbBind5735.width,
        height: pcbBind5736,
      },
      fill: {
        type: "none",
      },
    });
    pcbBind12561.text = pcbBind5732 ?? "code";
    pcbBind12561.text.fontSize = pcbH.fontSize;
    pcbBind12561.text.typeface = pcbH.typeface;
    pcbBind12561.text.color = pcbH.theme.headerText;
    pcbBind12561.text.wrap = "none";
    pcbBind12561.text.verticalAlignment = "middle";
    pcbBind12561.text.insets = {
      left: pcbH.padX,
      right: pcbH.padY,
      top: 0,
      bottom: 0,
    };
    pcbBind5737.push(pcbBind12561);
  }
  let pcbBind5739 = pcbIn903.shapes.add({
    geometry: "textbox",
    name: "code.block.text",
    position: {
      left: pcbBind5735.left,
      top: pcbBind5735.top + pcbBind5736,
      width: pcbBind5735.width,
      height: Math.max(0, pcbBind5735.height - pcbBind5736),
    },
    fill: {
      type: "none",
    },
  });
  return (
    (pcbBind5739.text.fontSize = pcbH.fontSize),
    (pcbBind5739.text.typeface = pcbH.typeface),
    (pcbBind5739.text.color = pcbH.theme.codeText),
    (pcbBind5739.text = pcbBind5730.paragraphs),
    (pcbBind5739.text.lineSpacing = pcbH.padToken / pcbH.fontSize),
    (pcbBind5739.text.wrap = "none"),
    (pcbBind5739.text.verticalAlignment = "top"),
    (pcbBind5739.text.insets = {
      left: pcbH.padX,
      right: pcbH.padY,
      top: pcbBind5733 ? pcbH.lineHeight : pcbH.radius,
      bottom: pcbH.maxLines,
    }),
    pcbBind5737.push(pcbBind5739),
    pcbBind5737
  );
}

/** Legacy alias. */
export const cAe = addFromCodePlugin;
