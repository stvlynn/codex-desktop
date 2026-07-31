// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-5: cell border box (legacy Binding421 / WorkbookClass34).

import { BorderSide } from "./border-side";

export class Borders {
  top: BorderSide | undefined;
  bottom: BorderSide | undefined;
  left: BorderSide | undefined;
  right: BorderSide | undefined;
  diagonal: BorderSide | undefined;
  diagonalUp: boolean | undefined;
  diagonalDown: boolean | undefined;

      top;
      bottom;
      left;
      right;
      diagonal;
      diagonalUp;
      diagonalDown;
      constructor(styleCfg4160?: Record<string, any> | null) {
        this.top = styleCfg4160?.top
          ? new BorderSide(styleCfg4160.top)
          : undefined;
        this.bottom = styleCfg4160?.bottom
          ? new BorderSide(styleCfg4160.bottom)
          : undefined;
        this.left = styleCfg4160?.left
          ? new BorderSide(styleCfg4160.left)
          : undefined;
        this.right = styleCfg4160?.right
          ? new BorderSide(styleCfg4160.right)
          : undefined;
        this.diagonal = styleCfg4160?.diagonal
          ? new BorderSide(styleCfg4160.diagonal)
          : undefined;
        this.diagonalUp = styleCfg4160?.diagonalUp;
        this.diagonalDown = styleCfg4160?.diagonalDown;
      }
      clone() {
        let styleBind12099 = new Borders();
        return (
          (styleBind12099.top = this.top ? this.top.clone() : undefined),
          (styleBind12099.bottom = this.bottom
            ? this.bottom.clone()
            : undefined),
          (styleBind12099.left = this.left
            ? this.left.clone()
            : undefined),
          (styleBind12099.right = this.right
            ? this.right.clone()
            : undefined),
          (styleBind12099.diagonal = this.diagonal
            ? this.diagonal.clone()
            : undefined),
          (styleBind12099.diagonalUp = this.diagonalUp),
          (styleBind12099.diagonalDown = this.diagonalDown),
          styleBind12099
        );
      }
      equals(styleCfg4688: Borders | null | undefined): boolean {
        return styleCfg4688
          ? this.#e(this.top, styleCfg4688.top) &&
              this.#e(this.bottom, styleCfg4688.bottom) &&
              this.#e(this.left, styleCfg4688.left) &&
              this.#e(this.right, styleCfg4688.right) &&
              this.#e(this.diagonal, styleCfg4688.diagonal) &&
              this.diagonalUp === styleCfg4688.diagonalUp &&
              this.diagonalDown === styleCfg4688.diagonalDown
          : false;
      }
      hasValues() {
        return !!(
          this.top ||
          this.bottom ||
          this.left ||
          this.right ||
          this.diagonal ||
          this.diagonalUp ||
          this.diagonalDown
        );
      }
      toProto() {
        let styleBind13637 = {};
        return (
          (styleBind13637.top = this.top?.toProto()),
          (styleBind13637.bottom = this.bottom?.toProto()),
          (styleBind13637.left = this.left?.toProto()),
          (styleBind13637.right = this.right?.toProto()),
          (styleBind13637.diagonal = this.diagonal?.toProto()),
          (styleBind13637.diagonalUp = this.diagonalUp),
          (styleBind13637.diagonalDown = this.diagonalDown),
          styleBind13637
        );
      }
      #e(styleCfg12281, styleCfg12282) {
        return !styleCfg12281 && !styleCfg12282
          ? true
          : !styleCfg12281 || !styleCfg12282
            ? false
            : styleCfg12281.equals(styleCfg12282);
      }
    
}
