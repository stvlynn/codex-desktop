// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: parseComposeInput (legacy vke/yke/split-background-children).

import {
  isPresentationJsxElement,
  PRESENTATION_JSX_ELEMENT,
  PRESENTATION_JSX_FRAGMENT,
} from "../chart-jsx-lower";
import { cjlH } from "./boundary-hooks";
import {
  lowerComposeChildren,
  lowerComposeElement,
  collectRefsByPath,
  toComposeChildArray,
  isAlreadyLowered,
} from "./lower-element-impl";

void isPresentationJsxElement;
void PRESENTATION_JSX_ELEMENT;
void PRESENTATION_JSX_FRAGMENT;
void cjlH;
void lowerComposeChildren;
void lowerComposeElement;
void collectRefsByPath;
void toComposeChildArray;
void isAlreadyLowered;

export function parseComposeInput(cjIn2650: any) {
  if (isAlreadyLowered(cjIn2650))
    return {
      node: cjIn2650,
      refsByPath: new Map(),
      background: undefined,
    };
  if (isPresentationJsxElement(cjIn2650) && cjIn2650.type === "slide")
    return parseSlideComposeInput(cjIn2650);
  if (isPresentationJsxElement(cjIn2650) && cjIn2650.type === "background")
    throw Error("<background> can only be used inside <slide>.");
  let cjBind10133 = new WeakMap(),
    cjBind10134 = lowerComposeChildren(
      [cjIn2650],
      cjBind10133,
      new Set(),
      "slide.compose",
    );
  if (cjBind10134.length !== 1)
    throw Error(
      "slide.compose JSX input must resolve to exactly one compose node. Wrap siblings with <row>, <column>, <grid>, or <group>.",
    );
  let cjBind10135 = cjBind10134[0];
  if (!cjBind10135)
    throw Error("slide.compose JSX input did not produce a compose node.");
  let cjBind10136 = new Map();
  return (
    collectRefsByPath(cjBind10135, cjBind10133, cjBind10136, "0"),
    {
      node: cjBind10135,
      refsByPath: cjBind10136,
      background: undefined,
    }
  );
}
export function parseSlideComposeInput(cjIn3173: any) {
  let cjBind11331 = new WeakMap(),
    cjBind11332 = new Set(),
    cjBind11333 = cjIn3173.props,
    { children, background } = splitBackgroundChildren(
      toComposeChildArray(cjBind11333.children),
      {
        fill: cjBind11333.background,
        ref: cjBind11333.backgroundRef,
      },
    ),
    { background: _background, backgroundRef, ...rest } = cjBind11333,
    cjBind11334 = lowerComposeElement(
      {
        $$type: PRESENTATION_JSX_ELEMENT,
        type: "section",
        props: {
          ...rest,
          width: rest.width ?? "fill",
          height: rest.height ?? "fill",
          children,
        },
      },
      cjBind11331,
      cjBind11332,
    ),
    cjBind11335 = new Map();
  return (
    collectRefsByPath(cjBind11334, cjBind11331, cjBind11335, "0"),
    {
      node: cjBind11334,
      refsByPath: cjBind11335,
      background,
    }
  );
}
export function splitBackgroundChildren(cjIn2005: any, cjIn2006: any) {
  let cjBind8823 = [],
    cjBind8824 =
      cjIn2006.fill !== undefined || cjIn2006.ref !== undefined
        ? {
            ...cjIn2006,
          }
        : undefined;
  return (
    cjIn2005.forEach((item) => {
      if (Array.isArray(item)) {
        let cjBind21512 = splitBackgroundChildren(item, cjBind8824 ?? {});
        cjBind8823.push(...cjBind21512.children);
        cjBind8824 = cjBind21512.background;
        return;
      }
      if (!(item == null || typeof item == "boolean")) {
        if (
          isPresentationJsxElement(item) &&
          item.type === PRESENTATION_JSX_FRAGMENT
        ) {
          let cjBind20648 = splitBackgroundChildren(
            toComposeChildArray(item.props.children),
            cjBind8824 ?? {},
          );
          cjBind8823.push(...cjBind20648.children);
          cjBind8824 = cjBind20648.background;
          return;
        }
        if (isPresentationJsxElement(item) && item.type === "background") {
          if (
            toComposeChildArray(item.props.children).some(
              (_item) =>
                _item != null &&
                _item !== false &&
                !isComposeFormattingWhitespace(_item),
            )
          )
            throw Error("<background> does not accept children.");
          cjBind8824 = {
            ...cjBind8824,
            fill: item.props.fill,
            ref: item.props.ref,
          };
          return;
        }
        cjBind8823.push(item);
      }
    }),
    {
      children: cjBind8823,
      background: cjBind8824,
    }
  );
}
