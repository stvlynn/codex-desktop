// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wqc` / export `sd` — hooks source + event-name constants.

/** Ordered hook config source kinds (bundle `Sqc`). */
export const HOOK_SOURCE_KINDS = [
  "plugin",
  "user",
  "admin",
  "project",
  "sessionFlags",
  "unknown",
] as const;

export type HookSourceKind = (typeof HOOK_SOURCE_KINDS)[number];

/** Ordered hook event names shown in settings (bundle `Cqc`). */
export const HOOK_EVENT_NAMES = [
  "preToolUse",
  "permissionRequest",
  "postToolUse",
  "preCompact",
  "postCompact",
  "sessionStart",
  "userPromptSubmit",
  "subagentStart",
  "subagentStop",
  "stop",
] as const;

export type HookEventName = (typeof HOOK_EVENT_NAMES)[number];

/** Bundle export `sd` / init `wqc` — Rolldown ESM init retained as no-op. */
export function ensureHooksConstantsInit(): void {}
