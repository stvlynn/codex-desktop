// Restored from ref/webview/assets/metric-helpers-CshXbF1V.js
//
// Segment metric/queue helpers re-export boundary. Bundled chunk is
// @segment/analytics-next PersistedPriorityQueue + connection + pWhile +
// mergedOptions + recordIntegrationMetric (PriorityQueue base from
// analytics-core). AI imports were tslib-only — satisfied by npm packages.
// Not a Codex fork.

export {
  ON_REMOVE_FROM_FUTURE,
  PriorityQueue,
  attempt,
  ensure,
} from "@segment/analytics-core";
export { Emitter, createDeferred } from "@segment/analytics-generic-utils";

export {
  PersistedPriorityQueue as s,
  PersistedPriorityQueue,
} from "@segment/analytics-next/dist/cjs/lib/priority-queue/persisted";
export {
  isOnline as f,
  isOffline as d,
  isOnline,
  isOffline,
} from "@segment/analytics-next/dist/cjs/core/connection";
export {
  pWhile as o,
  pWhile,
} from "@segment/analytics-next/dist/cjs/lib/p-while";
export {
  mergedOptions as i,
  mergedOptions,
} from "@segment/analytics-next/dist/cjs/lib/merged-options";
export {
  recordIntegrationMetric as n,
  recordIntegrationMetric,
} from "@segment/analytics-next/dist/cjs/core/stats/metric-helpers";

/** Bundler ESM init no-op — pWhile module. */
export function a(): void {}

/** Bundler ESM init no-op — PersistedPriorityQueue module. */
export function c(): void {}

/** Bundler ESM init no-op — PriorityQueue peer init. */
export function l(): void {}

/** Bundler ESM init no-op — mergedOptions module. */
export function r(): void {}

/** Bundler ESM init no-op — empty tail. */
export function t(): void {}

/** Bundler ESM init no-op — environment/localStorage gate. */
export function u(): void {}
