// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: lower panel/surface compose JSX tags (legacy JOe).
// Stage-3 wave-104.

import { cjlH } from "./boundary-hooks";

void cjlH;

export function lowerPanelSurfaceTag(
  cjlIn860: any,
  cjlIn861: any,
  cjlIn862: any,
) {
  cjlH.assertAllowedProps(cjlIn860, cjlIn861.props, cjlH.panelPropAllowlist);
  let cjlBind5531 = cjlH.flattenChildren(
      cjlIn862.toChildArray(cjlIn861.props.children),
      cjlIn860,
      cjlIn862,
    ),
    cjlBind5532 = cjlH.resolveTagKind(cjlIn860, cjlIn861.props),
    cjlBind5533 = cjlH.styleFromProps(cjlIn861.props),
    cjlBind5534 = cjlIn862.readRef(cjlIn861.props.ref, cjlIn860);
  if (
    !(
      cjlBind5532 === "panel" ||
      cjlBind5534 !== undefined ||
      cjlIn861.props.surface === true ||
      cjlH.hasVisualChrome(cjlBind5533)
    )
  ) {
    let cjlBind10262 = cjlH.createBoxElement(
      cjlBind5532,
      {
        name: cjlH.elementName(cjlIn861.props),
        width: cjlH.sizeToken(cjlIn861.props.width, "width") ?? "fill",
        height: cjlH.sizeToken(cjlIn861.props.height, "height"),
        gap: cjlIn861.props.gap,
        align: cjlIn861.props.align,
        justify: cjlIn861.props.justify,
        padding: cjlIn861.props.padding,
        columns: cjlIn861.props.columns,
        rows: cjlIn861.props.rows,
        autoRows: cjlIn861.props.autoRows,
        columnGap: cjlIn861.props.columnGap,
        rowGap: cjlIn861.props.rowGap,
        alignItems: cjlIn861.props.alignItems,
        justifyItems: cjlIn861.props.justifyItems,
        columnSpan: cjlIn861.props.columnSpan,
        rowSpan: cjlIn861.props.rowSpan,
      },
      cjlBind5531,
      cjlIn860,
    );
    return (
      cjlIn862.registerRef(cjlBind10262, cjlBind5534, cjlIn860),
      cjlBind10262
    );
  }
  let cjlBind5535 = cjlH.attachChildren(
      cjlBind5532 === "panel" ? nke(cjlIn861.props) : cjlBind5532,
      cjlIn861.props,
      cjlBind5531,
      cjlIn860,
    ),
    cjlBind5536 = cjlH.createShapeElement(
      {
        name: cjlH.elementName(cjlIn861.props),
        width: cjlH.sizeToken(cjlIn861.props.width, "width") ?? "fill",
        height: cjlH.sizeToken(cjlIn861.props.height, "height"),
        columnSpan: _J(cjlIn861.props.columnSpan, "columnSpan"),
        rowSpan: _J(cjlIn861.props.rowSpan, "rowSpan"),
        align: cjlIn861.props.align,
        justify: cjlIn861.props.justify,
        padding: cjlIn861.props.padding,
        fill: cjlBind5533.fill,
        line: cjlBind5533.line,
        borderRadius: cjlBind5533.borderRadius,
        shadow: cjlBind5533.shadow,
        materialize:
          cjlIn860 === "surface" || cjlBind5534 !== undefined
            ? true
            : undefined,
      },
      cjlBind5535,
    );
  return (
    cjlIn862.registerRef(cjlBind5536, cjlBind5534, cjlIn860),
    cjlBind5536
  );
}

/** Legacy alias. */
export const JOe = lowerPanelSurfaceTag;
