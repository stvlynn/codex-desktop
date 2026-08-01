// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic helpers: formula Error VO + validate-options normalize (legacy Binding199x cluster).
// Stage-3 wave-144.

export function makeFormulaErrorValue(code: any): { kind: string; code: any } {
  return {
    kind: "Error",
    code,
  };
}

export function normalizeValidateOptions(options: any): any {
  if (options?.validate)
    return options.validate === true ? {} : options.validate;
}

export const workbookHelper1035 = makeFormulaErrorValue;
export const uvt = normalizeValidateOptions;
