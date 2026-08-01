// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide.add() code/mermaid JSX normalize (legacy VIe nest).
// Stage-3 wave-133.

import { isPresentationJsxElement } from "../compose-jsx-lower";
import { nLe, tLe } from "../presentation-slide";

export function VIe(props: any) {
  if (isPresentationJsxElement(props)) {
    if (props.type === "mermaid") return HIe(props.props);
    if (props.type === "code") return UIe(props.props);
    throw Error(
      "<mermaid> or <code> are the only JSX nodes accepted by slide.add().",
    );
  }
  if (WIe(props) || GIe(props))
    return {
      config: props,
    };
  throw Error(
    "slide.add() requires a code or Mermaid plugin config, <code>, or <mermaid> JSX node.",
  );
}
export function HIe(event: any) {
  for (let ppaBind20907 of Object.keys(event))
    if (!tLe.has(ppaBind20907))
      throw Error(
        `Unsupported presentation JSX prop \`${ppaBind20907}\` on <mermaid>.`,
      );
  eLe(event.children);
  let ppaBind13588 = event.code;
  if (!KIe(ppaBind13588))
    throw Error("<mermaid> requires `code` as a string or string array.");
  return {
    config: {
      plugin: "mermaid",
      code: ppaBind13588,
      position: event.position,
      options: event.options,
    },
    ref: event.ref,
  };
}
export function UIe(event: any) {
  for (let ppaBind20995 of Object.keys(event))
    if (!nLe.has(ppaBind20995))
      throw Error(
        `Unsupported presentation JSX prop \`${ppaBind20995}\` on <code>.`,
      );
  let ppaBind12312 = JIe(event.code, event.children);
  if (!qIe(ppaBind12312))
    throw Error("<code> requires `code` or string children.");
  return {
    config: {
      plugin: "code",
      code: ppaBind12312,
      language: ZIe(event, "language"),
      fileName: ZIe(event, "fileName"),
      position: event.position,
      showHeader: QIe(event, "showHeader"),
      fit: $Ie(event),
    },
    ref: event.ref,
  };
}
export function WIe(props: any) {
  return (
    typeof props == "object" &&
    !!props &&
    !Array.isArray(props) &&
    "plugin" in props &&
    props.plugin === "mermaid"
  );
}
export function GIe(props: any) {
  return (
    typeof props == "object" &&
    !!props &&
    !Array.isArray(props) &&
    "plugin" in props &&
    props.plugin === "code"
  );
}
export function KIe(props: any) {
  return (
    typeof props == "string" ||
    (Array.isArray(props) && props.every((item) => typeof item == "string"))
  );
}
export function qIe(ppaIn10538: any) {
  return (
    typeof ppaIn10538 == "string" ||
    (Array.isArray(ppaIn10538) &&
      ppaIn10538.every((item) => typeof item == "string"))
  );
}
export function JIe(ppaIn14048: any, ppaIn14049: any) {
  return ppaIn14048 === undefined ? YIe(ppaIn14049) : ppaIn14048;
}
export function ZIe(ppaIn9146: any, ppaIn9147: any) {
  let ppaBind19718 = ppaIn9146[ppaIn9147];
  if (ppaBind19718 !== undefined) {
    if (typeof ppaBind19718 != "string")
      throw Error(`<code> prop \`${ppaIn9147}\` must be a string.`);
    return ppaBind19718;
  }
}
export function QIe(ppaIn9079: any, ppaIn9080: any) {
  let ppaBind19660 = ppaIn9079[ppaIn9080];
  if (ppaBind19660 !== undefined) {
    if (typeof ppaBind19660 != "boolean")
      throw Error(`<code> prop \`${ppaIn9080}\` must be a boolean.`);
    return ppaBind19660;
  }
}
export function $Ie(ppaIn8606: any) {
  let ppaBind19114 = ppaIn8606.fit;
  if (ppaBind19114 !== undefined) {
    if (ppaBind19114 !== "content" && ppaBind19114 !== "frame")
      throw Error('<code> prop `fit` must be "content" or "frame".');
    return ppaBind19114;
  }
}
export function eLe(ppaIn8745: any) {
  if (
    !(ppaIn8745 == null || ppaIn8745 === false) &&
    !(
      Array.isArray(ppaIn8745) &&
      ppaIn8745.every((item) => item == null || item === false)
    )
  )
    throw Error("<mermaid> does not accept children.");
}

export const normalizeAddConfig = VIe;
