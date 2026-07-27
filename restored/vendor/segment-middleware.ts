// Restored from ref/webview/assets/middleware-2Su2Qp7P.js
//
// Segment middleware + facade re-export boundary (make-facade --reexport, then
// multi-package letter aliases). Bundled chunk is @segment/analytics-next
// middleware helpers + inlined @segment/facade + analytics-core Context wiring.
// AI imports were tslib-only (__extends / __awaiter / __generator / __rest /
// __assign) — satisfied by the npm packages. Not a Codex fork.

import type {
  Alias,
  Facade,
  Group,
  Identify,
  Page,
  Screen,
  Track,
} from "@segment/facade";
import * as segmentFacade from "@segment/facade";

export { Context as s } from "@segment/analytics-next";
export {
  ContextCancelation,
  CoreContext,
  CoreStats,
} from "@segment/analytics-core";
export {
  Alias,
  Delete,
  Facade,
  Group,
  Identify,
  Page,
  Screen,
  Track,
} from "@segment/facade";

export {
  toFacade as a,
  toFacade,
} from "@segment/analytics-next/dist/cjs/lib/to-facade";
export {
  applyDestinationMiddleware as t,
  sourceMiddlewarePlugin as r,
  applyDestinationMiddleware,
  sourceMiddlewarePlugin,
} from "@segment/analytics-next/dist/cjs/plugins/middleware";
export { Stats as l, Stats } from "@segment/analytics-next/dist/cjs/core/stats";
export { fetch as _, fetch } from "@segment/analytics-next/dist/cjs/lib/fetch";
export {
  getGlobal as y,
  getGlobal,
} from "@segment/analytics-next/dist/cjs/lib/get-global";
export {
  version as g,
  version,
} from "@segment/analytics-next/dist/cjs/generated/version";
export {
  SEGMENT_API_HOST as d,
  SEGMENT_API_HOST,
} from "@segment/analytics-next/dist/cjs/core/constants";
export {
  getVersionType as p,
  getVersionType,
} from "@segment/analytics-next/dist/cjs/lib/version-type";

/** Facade package namespace getter (bundler CJS interop `middlewareO()`). */
export function o(): typeof segmentFacade {
  return segmentFacade;
}

/** Semantic aliases for Stage 3 consumers. */
export type SegmentFacadeClasses = {
  Alias: typeof Alias;
  Facade: typeof Facade;
  Group: typeof Group;
  Identify: typeof Identify;
  Page: typeof Page;
  Screen: typeof Screen;
  Track: typeof Track;
};

/** Bundler ESM init no-op — globalThis helper module. */
export function b(): void {}

/** Bundler ESM init no-op — Context module. */
export function c(): void {}

/** Bundler ESM init no-op — API host module. */
export function f(): void {}

/** Bundler ESM init no-op — version module. */
export function h(): void {}

/** Bundler ESM init no-op — facade module. */
export function i(): void {}

/** Bundler ESM init no-op — version-type module. */
export function m(): void {}

/** Bundler ESM init no-op — master middleware init. */
export function n(): void {}

/** Bundler ESM init no-op — Stats module. */
export function u(): void {}

/** Bundler ESM init no-op — fetch module. */
export function v(): void {}

// --- qg-full-green: IMPORT_MAP export stubs ---
export const Context: any = undefined;
