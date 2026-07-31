// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-107: theme font collection hooks (helper695).

export type ThemeFontsBoundaryHooks = {
  trimName: (...args: any[]) => any;
  normalizeFontFace: (...args: any[]) => any;
};

export const ptfH: ThemeFontsBoundaryHooks = {} as ThemeFontsBoundaryHooks;

export function wireThemeFontsBoundaryHooks(
  next: ThemeFontsBoundaryHooks,
): void {
  Object.assign(ptfH, next);
}
