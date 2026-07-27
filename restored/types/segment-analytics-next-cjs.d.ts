// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Ambient module bridges for @segment/analytics-next CJS subpaths.

declare module "@segment/analytics-next/dist/cjs/lib/to-facade" {
  import type { Options } from "@segment/facade";
  import type { Facade } from "@segment/facade";

  export type SegmentFacade = Facade & { obj: unknown };
  export function toFacade(evt: unknown, options?: Options): SegmentFacade;
}

declare module "@segment/analytics-next/dist/cjs/plugins/middleware" {
  import type { Plugin } from "@segment/analytics-next";

  export type MiddlewareFunction = (middleware: {
    payload: unknown;
    integrations?: Record<string, unknown>;
    next: (payload: unknown | null) => void;
  }) => void | Promise<void>;

  export type DestinationMiddlewareFunction = (middleware: {
    payload: unknown;
    integration: string;
    next: (payload: unknown | null) => void;
  }) => void | Promise<void>;

  export function applyDestinationMiddleware(
    destination: string,
    evt: unknown,
    middleware: DestinationMiddlewareFunction[],
  ): Promise<unknown | null>;

  export function sourceMiddlewarePlugin(fn: MiddlewareFunction, integrations: Record<string, unknown> | undefined): Plugin;
}

declare module "@segment/analytics-next/dist/cjs/core/stats" {
  import type { CoreStats } from "@segment/analytics-core";

  export class Stats extends CoreStats {
    static initRemoteMetrics(options?: unknown): void;
  }
}

declare module "@segment/analytics-next/dist/cjs/lib/fetch" {
  export const fetch: typeof globalThis.fetch;
}

declare module "@segment/analytics-next/dist/cjs/lib/get-global" {
  export function getGlobal(): typeof globalThis | null;
}

declare module "@segment/analytics-next/dist/cjs/generated/version" {
  export const version: string;
}

declare module "@segment/analytics-next/dist/cjs/core/constants" {
  export const SEGMENT_API_HOST: string;
}

declare module "@segment/analytics-next/dist/cjs/lib/version-type" {
  export function getVersionType(): "web" | "npm";
  export function setVersionType(version: "web" | "npm"): void;
}

declare module "@segment/analytics-next/dist/cjs/lib/priority-queue/persisted" {
  import type { PriorityQueue } from "@segment/analytics-core";

  export class PersistedPriorityQueue extends PriorityQueue {
    constructor(maxAttempts: number, key: string);
  }
}

declare module "@segment/analytics-next/dist/cjs/core/connection" {
  export function isOnline(): boolean;
  export function isOffline(): boolean;
}

declare module "@segment/analytics-next/dist/cjs/lib/p-while" {
  export function pWhile<T>(
    condition: (value: T | undefined) => boolean,
    action: () => T | PromiseLike<T>,
  ): Promise<void>;
}

declare module "@segment/analytics-next/dist/cjs/lib/merged-options" {
  export function mergedOptions(cdnSettings: unknown, options: unknown): Record<string, unknown>;
}

declare module "@segment/analytics-next/dist/cjs/core/stats/metric-helpers" {
  export interface RecordIntegrationMetricProps {
    integrationName: string;
    methodName: string;
    didError?: boolean;
    type: "classic" | "action";
  }

  export function recordIntegrationMetric(
    ctx: { stats: { increment: (...args: unknown[]) => void } },
    props: RecordIntegrationMetricProps,
  ): void;
}

declare module "@segment/analytics-next/dist/cjs/plugins/ajs-destination" {
  export function ajsDestinations(...args: unknown[]): unknown[];
  export class LegacyDestination {
    constructor(...args: unknown[]);
  }
}

declare module "@segment/analytics-next/dist/cjs/plugins/remote-middleware" {
  export function remoteMiddlewares(...args: unknown[]): Promise<unknown[]>;
}

declare module "@segment/analytics-next/dist/cjs/plugins/schema-filter" {
  export function schemaFilter(...args: unknown[]): unknown;
}

declare module "@segment/analytics-next/dist/cjs/plugins/legacy-video-plugins" {
  export function loadLegacyVideoPlugins(...args: unknown[]): Promise<void>;
}
