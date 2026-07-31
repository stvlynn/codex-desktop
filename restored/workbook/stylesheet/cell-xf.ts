// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-5: cell XF (format) record (legacy Binding422).

export class CellXf {
  fontId: number | undefined;
  fillId: number | undefined;
  borderId: number | undefined;
  xfId: number | undefined;
  featurePropertyBagIndex: number | undefined;
  numberFormatId: number | undefined;
  wrapText: boolean | undefined;
  horizontalAlignment: string | undefined;
  verticalAlignment: string | undefined;
  applyFont: boolean | undefined;
  applyFill: boolean | undefined;
  applyBorder: boolean | undefined;
  applyNumberFormat: boolean | undefined;
  applyAlignment: boolean | undefined;

      fontId;
      fillId;
      borderId;
      xfId;
      featurePropertyBagIndex;
      numberFormatId;
      wrapText;
      horizontalAlignment;
      verticalAlignment;
      applyFont;
      applyFill;
      applyBorder;
      applyNumberFormat;
      applyAlignment;
      constructor(styleCfg2463?: Record<string, any> | null) {
        let styleBind9770 = styleCfg2463 ?? {};
        this.fontId = styleBind9770.fontId;
        this.fillId = styleBind9770.fillId;
        this.borderId = styleBind9770.borderId;
        this.xfId = styleBind9770.xfId;
        this.featurePropertyBagIndex =
          styleBind9770.featurePropertyBagIndex;
        this.numberFormatId = styleBind9770.numFmtId;
        this.wrapText = styleBind9770.wrapText;
        this.horizontalAlignment = styleBind9770.horizontalAlignment;
        this.verticalAlignment = styleBind9770.verticalAlignment;
        this.applyFont = styleBind9770.applyFont;
        this.applyFill = styleBind9770.applyFill;
        this.applyBorder = styleBind9770.applyBorder;
        this.applyNumberFormat = styleBind9770.applyNumberFormat;
        this.applyAlignment = styleBind9770.applyAlignment;
      }
      equals(styleCfg2362: CellXf): boolean {
        return (
          this.fontId === styleCfg2362.fontId &&
          this.fillId === styleCfg2362.fillId &&
          this.borderId === styleCfg2362.borderId &&
          this.xfId === styleCfg2362.xfId &&
          this.featurePropertyBagIndex ===
            styleCfg2362.featurePropertyBagIndex &&
          this.numberFormatId === styleCfg2362.numberFormatId &&
          this.wrapText === styleCfg2362.wrapText &&
          this.horizontalAlignment === styleCfg2362.horizontalAlignment &&
          this.verticalAlignment === styleCfg2362.verticalAlignment &&
          this.applyFont === styleCfg2362.applyFont &&
          this.applyFill === styleCfg2362.applyFill &&
          this.applyBorder === styleCfg2362.applyBorder &&
          this.applyNumberFormat === styleCfg2362.applyNumberFormat &&
          this.applyAlignment === styleCfg2362.applyAlignment
        );
      }
      toProto() {
        let styleBind9520 = {};
        return (
          (styleBind9520.fontId = this.fontId),
          (styleBind9520.fillId = this.fillId),
          (styleBind9520.borderId = this.borderId),
          (styleBind9520.xfId = this.xfId),
          (styleBind9520.featurePropertyBagIndex =
            this.featurePropertyBagIndex),
          (styleBind9520.numFmtId = this.numberFormatId),
          (styleBind9520.wrapText = this.wrapText),
          (styleBind9520.horizontalAlignment = this.horizontalAlignment),
          (styleBind9520.verticalAlignment = this.verticalAlignment),
          (styleBind9520.applyFont = this.applyFont),
          (styleBind9520.applyFill = this.applyFill),
          (styleBind9520.applyBorder = this.applyBorder),
          (styleBind9520.applyNumberFormat = this.applyNumberFormat),
          (styleBind9520.applyAlignment = this.applyAlignment),
          styleBind9520
        );
      }
    
}
