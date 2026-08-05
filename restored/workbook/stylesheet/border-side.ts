// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-5: single border edge (legacy Binding420 / WorkbookClass44).

import { WorkbookColor } from "../theme-color";
import { colorsEqual } from "./style-value-utils";

export class BorderSide {
  style: string | undefined;
  color: WorkbookColor | undefined;
  weight: number | undefined;

  style;
  color;
  weight;
  constructor(styleCfg6381?: Record<string, any> | null) {
    let styleBind16541 = styleCfg6381?.style;
    this.style =
      styleBind16541 && styleBind16541.trim() !== ""
        ? styleBind16541
        : undefined;
    this.weight = styleCfg6381?.indexedColorId;
    this.color = styleCfg6381?.color
      ? new WorkbookColor({
          type: "proto",
          proto: styleCfg6381.color,
        })
      : undefined;
  }
  clone() {
    let styleBind18678 = new BorderSide();
    return (
      (styleBind18678.style = this.style),
      (styleBind18678.weight = this.weight),
      (styleBind18678.color = this.color),
      styleBind18678
    );
  }
  equals(styleCfg8733: BorderSide | null | undefined): boolean {
    return styleCfg8733
      ? this.style === styleCfg8733.style &&
          this.weight === styleCfg8733.weight &&
          colorsEqual(this.color, styleCfg8733.color)
      : false;
  }
  toProto() {
    if (
      (this.style === undefined || this.style.trim() === "") &&
      this.color === undefined &&
      this.weight === undefined
    )
      return;
    let styleBind12032 = {};
    return (
      this.style !== undefined &&
        this.style.trim() !== "" &&
        (styleBind12032.style = this.style),
      this.weight !== undefined &&
        (styleBind12032.indexedColorId = this.weight),
      this.color && (styleBind12032.color = this.color.toProto()),
      styleBind12032
    );
  }
}
