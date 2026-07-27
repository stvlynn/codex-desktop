// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Shared types for hooks-settings helpers.

import type { HookSourceKind } from "./hooks-constants";

export type HookTrustStatus =
  | "trusted"
  | "untrusted"
  | "modified"
  | "managed"
  | string;

export type HookEntry = {
  key: string;
  eventName: string;
  source?: string | null;
  pluginId?: string | null;
  enabled?: boolean;
  trustStatus?: HookTrustStatus;
  displayOrder?: number;
  currentHash?: string;
  sourcePath?: string;
  isManaged?: boolean;
  [key: string]: unknown;
};

export type HookLoadIssue = {
  path?: string;
  message?: string;
  [key: string]: unknown;
};

export type HookProjectBucket = {
  cwd: string;
  hooks: HookEntry[];
  warnings: string[];
  errors: HookLoadIssue[];
  [key: string]: unknown;
};

export type HookSourceSelection =
  | { source: "project"; projectRoot: string }
  | { source: "plugin"; pluginId?: string | null }
  | { source: Exclude<HookSourceKind, "project" | "plugin"> }
  | { source: string; projectRoot?: string; pluginId?: string | null };

export type HookSourceSection =
  | {
      id: "project";
      projectEntries: Array<HookProjectBucket & { cwd: string }>;
    }
  | {
      id: "plugin";
      entry: HookProjectBucket;
      pluginEntries: Array<{
        pluginId: string | null;
        entry: HookProjectBucket;
      }>;
    }
  | {
      id: Exclude<HookSourceKind, "project" | "plugin">;
      entry: HookProjectBucket;
    };

export type HookEventSummary = {
  eventName: string;
  active: number;
  installed: number;
  needsReview: number;
};

export type HooksIntlShape = {
  formatMessage: (
    descriptor: { id?: string; defaultMessage?: string; description?: string },
    values?: Record<string, unknown>,
  ) => string;
};
