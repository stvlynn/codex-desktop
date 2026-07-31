// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: paragraph/run snapshot VO (legacy helper685).
// Stage-3 wave-106.

import { cesH } from "./boundary-hooks";

void cesH;

export function snapshotParagraphs(cesIn1182: any, cesIn1183: any) {
  let cesBind6700 = cesIn1182.paragraphs.items
    .map((item, index) => {
      let cesBind7333 = item.runs.items
          .map((_item, _index) => {
            let cesBind21272 = cesH.bh689(
              cesH.runPlain(item, _item),
              cesIn1183,
            );
            return {
              index: _index + 1,
              text: _item.text,
              ...cesBind21272,
            };
          })
          .filter((_item) => _item.text.length > 0),
        cesBind7334 = cesH.bh695(item.toPlainText());
      if (!cesBind7334 && cesBind7333.length === 0) return;
      let cesBind7335 = cesH.bh689(
          item.resolvedTextStyle ?? item.textStyle,
          cesIn1183,
        ),
        cesBind7336 = item.bulletCharacter,
        cesBind7337 = cesH.bh696(item.marginLeft),
        cesBind7338 = cesH.bh696(item.indent),
        cesBind7339 = cesH.bh696(item.lineSpacingPercent),
        cesBind7340 = cesH.bh696(item.spaceBefore),
        cesBind7341 = cesH.bh696(item.spaceAfter),
        cesBind7342 = cesH.bh695(item.styleId);
      return {
        index: index + 1,
        ...(cesBind7334 === undefined
          ? {}
          : {
              text: cesBind7334,
            }),
        ...(cesBind7336 === undefined
          ? {}
          : {
              bulletCharacter: cesBind7336,
            }),
        ...(cesBind7337 === undefined
          ? {}
          : {
              marginLeft: cesBind7337,
            }),
        ...(cesBind7338 === undefined
          ? {}
          : {
              indent: cesBind7338,
            }),
        ...(cesBind7339 === undefined
          ? {}
          : {
              lineSpacingPercent: cesBind7339,
            }),
        ...(cesBind7340 === undefined
          ? {}
          : {
              spaceBefore: cesBind7340,
            }),
        ...(cesBind7341 === undefined
          ? {}
          : {
              spaceAfter: cesBind7341,
            }),
        ...(cesBind7342 === undefined
          ? {}
          : {
              styleId: cesBind7342,
            }),
        ...(cesBind7335 === undefined
          ? {}
          : {
              resolvedTextStyle: cesBind7335,
            }),
        runs: cesBind7333,
      };
    })
    .filter((item) => item !== undefined);
  return cesBind6700.length > 0 ? cesBind6700 : undefined;
}

/** Legacy alias. */
export const workbookHelper685 = snapshotParagraphs;
