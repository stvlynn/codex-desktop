// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: flatten compose JSX children (legacy QOe / fragment flatten).
// Stage-3 wave-110.

import { workbookBinding1501 } from "../compose-dsl";
import {
  isPresentationJsxElement,
  PRESENTATION_JSX_FRAGMENT,
} from "../chart-jsx-lower";
import { cjlH } from "./boundary-hooks";

void workbookBinding1501;
void isPresentationJsxElement;
void PRESENTATION_JSX_FRAGMENT;
void cjlH;

export function flattenFragments(cjlIn5919: any, cjlIn5920: any) {
  let cjlBind15914 = [];
  return (
    cjlIn5919.forEach((item) => {
      if (Array.isArray(item)) {
        cjlBind15914.push(...flattenFragments(item, cjlIn5920));
        return;
      }
      if (
        isPresentationJsxElement(item) &&
        item.type === PRESENTATION_JSX_FRAGMENT
      ) {
        cjlBind15914.push(
          ...flattenFragments(
            cjlIn5920.toChildArray(item.props.children),
            cjlIn5920,
          ),
        );
        return;
      }
      cjlBind15914.push(item);
    }),
    cjlBind15914
  );
}

export function flattenComposeChildren(
  cjlIn1695: any,
  cjlIn1696: any,
  cjlIn1697: any,
) {
  let cjlBind8009 = flattenFragments(cjlIn1695, cjlIn1697),
    cjlBind8010 = [],
    cjlBind8011 = [],
    cjlBind8012 = () => {
      if (cjlBind8011.length === 0) return;
      let cjlBind14306 = cjlH.bh701(
        cjlBind8011,
        {
          contextTag: `<${cjlIn1696}>`,
        },
        {
          lowerRun: cjlIn1697.lowerRun,
          toChildArray: cjlIn1697.toChildArray,
          isFormattingWhitespace: cjlIn1697.isFormattingWhitespace,
        },
      );
      cjlBind8011 = [];
      !(typeof cjlBind14306 == "string" && cjlBind14306.length === 0) &&
        cjlBind8010.push(
          workbookBinding1501(cjlBind14306, {
            width: "fill",
          }),
        );
    };
  return (
    cjlBind8009.forEach((item) => {
      if (
        !(
          item == null ||
          typeof item == "boolean" ||
          cjlIn1697.isFormattingWhitespace(item)
        )
      ) {
        if (cjlH.isInlineOrTextChild(item)) {
          cjlBind8011.push(item);
          return;
        }
        if ((cjlBind8012(), cjlH.isLoweredKindBag(item))) {
          cjlBind8010.push(item);
          return;
        }
        if (!isPresentationJsxElement(item))
          throw Error(`<${cjlIn1696}> contains an unsupported child.`);
        if (item.type === PRESENTATION_JSX_FRAGMENT)
          throw Error(`<${cjlIn1696}> contains an unexpected fragment.`);
        cjlBind8010.push(cjlIn1697.lowerElement(item));
      }
    }),
    cjlBind8012(),
    cjlBind8010
  );
}

/** Legacy alias. */
export const QOe = flattenComposeChildren;
