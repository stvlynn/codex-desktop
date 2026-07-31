// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: axis title text paint helper.
// Stage-3 wave-113.

export function paintAxisTitleText(
  cpIn1313: any,
  cpIn1314: any,
  cpIn1315: any,
  cpIn1316: any,
  cpIn1317: any,
) {
  let cpBind7010 = cpIn1314?.trim();
  if (!cpBind7010) return;
  let cpBind7011 = {
    ...cpIn1315,
  };
  (cpBind7011.fontSize === undefined ||
    !Number.isFinite(cpBind7011.fontSize) ||
    cpBind7011.fontSize <= 0) &&
    (cpBind7011.fontSize = Math.round(cpIn1316 * 75));
  let cpBind7012 = workbookQ(
    {
      type: j.ELEMENT_TYPE_TEXT,
      paragraphs: [
        {
          runs: [
            {
              text: cpBind7010,
              citations: [],
              reviewMarkIds: [],
            },
          ],
          inlineNodes: [],
        },
      ],
      textStyle: cpBind7011,
      effects: [],
      children: [],
      citations: [],
      levelsStyles: [],
      id: "axis-title",
    },
    cpIn1313,
    {
      wrap: false,
    },
  );
  if (cpBind7012 === undefined) return;
  let cpBind7013 = cpBind7012.lines[0];
  if (cpBind7013 === undefined) return;
  let cpBind7014 = cpBind7013.segments[0];
  if (cpBind7014 === undefined) return;
  let cpBind7015 = cpBind7012.lines.map((item) =>
      item.segments.map((_item) => _item.text).join(""),
    ),
    cpBind7016 = cpBind7013.heightPx,
    cpBind7017 = cpBind7012.lines.reduce(
      (accumulator, current) => Math.max(accumulator, current.widthPx),
      0,
    ),
    cpBind7018 = cpBind7012.lines.reduce(
      (accumulator, current) => accumulator + current.heightPx,
      0,
    ),
    cpBind7019 = ((cpIn1315?.rotation ?? cpIn1317) * Math.PI) / 180,
    cpBind7020 = cpHelper437(cpBind7017, cpBind7018, cpBind7019);
  return {
    text: cpBind7010,
    lines: cpBind7015,
    lineHeight: cpBind7016,
    contentWidth: cpBind7017,
    contentHeight: cpBind7018,
    rotationRad: cpBind7019,
    width: cpBind7020.width,
    height: cpBind7020.height,
    font: cpBind7014.font,
  };
}
