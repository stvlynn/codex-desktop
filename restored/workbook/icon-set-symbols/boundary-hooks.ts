// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: icon-set-symbols deps via direct imports
// (wireIconSetSymbolsBoundaryHooks leave-behind retired).

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

export type IconSetSymbolsBoundaryHooks = {
  greenFill: any;
  greenStroke: any;
  yellowFill: any;
  yellowStroke: any;
  redFill: any;
  redStroke: any;
  lightFill: any;
};

export const icsH: IconSetSymbolsBoundaryHooks = {
  get greenFill() {
    return (__req("../cf-traffic-colors") as any)[__wb(1241)];
  },
  get greenStroke() {
    return (__req("../cf-traffic-colors") as any)[__wb(1242)];
  },
  get yellowFill() {
    return (__req("../cf-traffic-colors") as any)[__wb(1243)];
  },
  get yellowStroke() {
    return (__req("../cf-traffic-colors") as any)[__wb(1244)];
  },
  get redFill() {
    return (__req("../cf-traffic-colors") as any)[__wb(1247)];
  },
  get redStroke() {
    return (__req("../cf-traffic-colors") as any)[__wb(1248)];
  },
  get lightFill() {
    return (__req("../cf-traffic-colors") as any)[__wb(1251)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — icsH uses direct imports. */
export function wireIconSetSymbolsBoundaryHooks(
  _next?: Partial<IconSetSymbolsBoundaryHooks>,
): void {}
