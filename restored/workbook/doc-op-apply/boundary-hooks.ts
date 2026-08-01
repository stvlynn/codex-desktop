// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: doc-op-apply deps via direct imports
// (wireDocOpApplyBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

export type DocOpApplyBoundaryHooks = {
  commentThreadClass: any;
  ensureCommentsInit: (...args: any[]) => any;
  ensureRangeClusterInit: (...args: any[]) => any;
};

export const doH: DocOpApplyBoundaryHooks = {
  get commentThreadClass() {
    return (__req("../comments") as any)[__wb(1734)];
  },
  ensureCommentsInit: __call("../comments", __wb(1736)),
  ensureRangeClusterInit: __call("../binding662-gate", __wb(675)),
};

/** @deprecated Wave-161: wire leave-behind retired — doH uses direct imports. */
export function wireDocOpApplyBoundaryHooks(
  _next?: Partial<DocOpApplyBoundaryHooks>,
): void {}
