// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-154: text-frame-insets boundary hooks.

export type TextFrameInsetsHooks = {
  ensureTextFrameInsetDeps: () => void;
  twipToCssPx: (n: number) => number;
  getWorkbookGt: () => number;
};

export const tfiH: TextFrameInsetsHooks = {} as TextFrameInsetsHooks;

export function wireTextFrameInsetsHooks(next: TextFrameInsetsHooks): void {
  Object.assign(tfiH, next);
}
