// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: compose JSX inline text children (legacy NOe).
// Stage-3 wave-100.

import { citH } from "./boundary-hooks";

void citH;

export function lowerInlineTextChildren(
  citIn574: any,
  citIn575: any,
  citIn576: any,
) {
  let citBind4541 = [
      {
        runs: [],
      },
    ],
    citBind4542 = () => {
      let citBind21068 = citBind4541[citBind4541.length - 1];
      if (citBind21068) return citBind21068;
      let citBind21069 = {
        runs: [],
      };
      return (citBind4541.push(citBind21069), citBind21069);
    },
    citBind4543 = () => {
      citBind4541.push({
        runs: [],
      });
    },
    citBind4544 = (citIn7926, citIn7927, citIn7928) => {
      let citBind18406 = citBind4542(),
        citBind18407 = citIn7928
          ? citH.mergeRunOverride(citIn7928, citIn7927)
          : citIn7927.textStyle || citIn7927.link
            ? {
                run: citIn7926,
                textStyle: citIn7927.textStyle,
                link: citIn7927.link,
              }
            : citIn7926;
      citBind18406.runs.push(citBind18407);
    },
    citBind4545 = (citIn870, citIn871) => {
      if (Array.isArray(citIn870)) {
        citIn870.forEach((item) => citBind4545(item, citIn871));
        return;
      }
      if (
        !(
          citIn870 == null ||
          typeof citIn870 == "boolean" ||
          citIn576.isFormattingWhitespace(citIn870)
        )
      ) {
        if (typeof citIn870 == "string" || typeof citIn870 == "number") {
          let citBind21030 =
            typeof citIn870 == "number"
              ? String(citIn870)
              : citH.collapseText(citIn870);
          citBind21030.length > 0 && citBind4544(citBind21030, citIn871);
          return;
        }
        if (!citH.bh697(citIn870))
          throw Error(`${citIn575} contains an unsupported text child.`);
        if (citIn870.type === citH.fragmentSymbol) {
          citIn576
            .toChildArray(citIn870.props.children)
            .forEach((item) => citBind4545(item, citIn871));
          return;
        }
        if (typeof citIn870.type != "string")
          throw Error(`${citIn575} contains an unsupported text child.`);
        if (citIn870.type === "run") {
          let citBind22215 = citIn576.lowerRun(citIn870);
          citBind4544(citBind22215.run, citIn871, citBind22215);
          return;
        }
        if (citIn870.type === "br") {
          citBind4543();
          return;
        }
        if (citIn870.type === "paragraph")
          throw Error(
            `${citIn575} does not accept nested <paragraph> children in inline text mode.`,
          );
        if (citIn870.type === "small") {
          let citBind19986 = citH.bh704(citIn871, {
            textStyle: {
              fontSize: "11px",
            },
          });
          citIn576
            .toChildArray(citIn870.props.children)
            .forEach((item) => citBind4545(item, citBind19986));
          return;
        }
        if (citH.bh698(citIn870.type)) {
          citH.bh710(citIn870.type, citIn870.props, citH.semanticInlineTags);
          let citBind19397 = citH.bh704(
            citIn871,
            citH.semanticTagStyle(citIn870.type, citIn870.props),
          );
          citIn576
            .toChildArray(citIn870.props.children)
            .forEach((item) => citBind4545(item, citBind19397));
          return;
        }
        throw Error(
          `${citIn575} only accepts raw text, inline semantic tags, <run>, <paragraph>, and fragments.`,
        );
      }
    };
  for (
    citIn574.forEach((item) => citBind4545(item, {}));
    citBind4541.length > 1 &&
    citH.isEmptyParagraph(citBind4541[citBind4541.length - 1]);
  )
    citBind4541.pop();
  return citBind4541.length > 0
    ? citBind4541
    : [
        {
          runs: [""],
        },
      ];
}

/** Legacy alias. */
export const NOe = lowerInlineTextChildren;
