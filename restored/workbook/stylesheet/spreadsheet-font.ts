// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-5: spreadsheet font value object (legacy Binding419 / WorkbookClass42).

import { WorkbookColor } from "../theme-color";
import { colorsEqual } from "./style-value-utils";

export class SpreadsheetFont {
  bold: boolean | undefined;
  italic: boolean | undefined;
  size: number | undefined;
  name: string | undefined;
  color: WorkbookColor | undefined;

  bold;
  italic;
  size;
  name;
  color;
  constructor(styleCfg5635?: Record<string, any>) {
    let styleBind15490 = styleCfg5635 ?? {};
    this.bold = styleBind15490.bold;
    this.italic = styleBind15490.italic;
    this.size = styleBind15490.fontSize;
    this.name = styleBind15490.typeface;
    this.color = styleBind15490.fill?.color
      ? new WorkbookColor({
          type: "proto",
          proto: styleBind15490.fill.color,
        })
      : undefined;
  }
  clone() {
    let styleBind16866 = new SpreadsheetFont();
    return (
      (styleBind16866.bold = this.bold),
      (styleBind16866.italic = this.italic),
      (styleBind16866.size = this.size),
      (styleBind16866.name = this.name),
      (styleBind16866.color = this.color),
      styleBind16866
    );
  }
  equals(styleCfg7274: SpreadsheetFont): boolean {
    return (
      this.bold === styleCfg7274.bold &&
      this.italic === styleCfg7274.italic &&
      this.size === styleCfg7274.size &&
      this.name === styleCfg7274.name &&
      colorsEqual(this.color, styleCfg7274.color)
    );
  }
  toProto() {
    let styleBind12356 = {};
    if (
      ((styleBind12356.bold = this.bold),
      (styleBind12356.italic = this.italic),
      (styleBind12356.fontSize = this.size),
      (styleBind12356.typeface = this.name),
      this.color)
    ) {
      let styleBind17645 = this.color.toProto();
      styleBind17645 &&
        (styleBind12356.fill = {
          type: 0,
          color: styleBind17645,
          gradientStops: [],
          pictureEffects: [],
        });
    }
    return styleBind12356;
  }
}
