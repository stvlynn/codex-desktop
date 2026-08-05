// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-5: number format id + formatCode (legacy Binding423).

export class NumberFormat {
  id: number | undefined;
  formatCode: string | undefined;

  id;
  formatCode;
  constructor(styleCfg10766?: Record<string, any> | null) {
    let styleBind21289 = styleCfg10766 ?? {};
    this.id = styleBind21289.id;
    this.formatCode = styleBind21289.formatCode;
  }
  toProto() {
    if (this.id === undefined || this.formatCode === undefined)
      throw Error("Number format requires both id and formatCode");
    return {
      id: this.id,
      formatCode: this.formatCode,
    };
  }
}
