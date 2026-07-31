// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-90: doc-op-apply boundary hooks
// (comment thread class + range/comments ensure leave-behinds).

export type DocOpApplyBoundaryHooks = {
  commentThreadClass: any;
  ensureCommentsInit: (...args: any[]) => any;
  ensureRangeClusterInit: (...args: any[]) => any;
};

/** Live bag — wired from workbook-runtime after peel. */
export const doH: DocOpApplyBoundaryHooks = {} as DocOpApplyBoundaryHooks;

export function wireDocOpApplyBoundaryHooks(
  next: DocOpApplyBoundaryHooks,
): void {
  Object.assign(doH, next);
}
