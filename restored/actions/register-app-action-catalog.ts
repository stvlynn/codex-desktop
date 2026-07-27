// Restored from ref/webview/assets/register-app-actions-CsKK5KzE.js
// App action type catalog, registry signature, and dynamic-tool guidance.

import type { AppActionHandlerContext } from "../navigation/create-app-action-handler";

export type { AppActionHandlerContext } from "../navigation/create-app-action-handler";

/** Registered dynamic-tool action type strings (Zod `type` literals). */
export const APP_ACTION_TYPES = [
  "app.appearance.get",
  "app.appearance.get_available_themes",
  "app.appearance.set_mode",
  "app.appearance.set_theme",
  "app.get_summary",
  "app.help",
  "windows.nav.back",
  "windows.nav.forward",
  "windows.review.collapse_all",
  "windows.review.expand_all",
  "windows.review.file_set_expanded",
  "windows.review.scroll",
  "windows.review.scroll_to_file",
  "windows.review.set_fullscreen",
  "windows.review.set_view",
  "windows.review.toggle",
  "windows.show_home",
  "windows.show_thread",
  "windows.sidebar.project_set_collapsed",
  "windows.sidebar.project_set_show_all",
  "windows.sidebar.scroll",
  "windows.sidebar.section_set_collapsed",
  "windows.sidebar.select_project",
  "windows.sidebar.toggle",
  "windows.tabs.open",
  "windows.terminal.toggle",
  "windows.timeline.scroll",
  "windows.timeline.scroll_to_turn",
] as const;
export type AppActionType = (typeof APP_ACTION_TYPES)[number];
export type AppActionHelpEntry = {
  type: string;
  jsonSchema: string;
};
export type AppActionHelpPayload = {
  schemaVersion: 1;
  prompt: string;
  actions: AppActionHelpEntry[];
};

/** Dispatch surface returned by the app-initial action-runner factory. */
export type AppActionRegistry = (
  payload: {
    type: AppActionType;
  } & Record<string, unknown>,
  context?: AppActionHandlerContext,
) => Promise<unknown>;

/** Operator guidance embedded in `app.help` responses. */
export const APP_DYNAMIC_TOOL_GUIDANCE =
  'You can inspect or operate the Codex desktop app itself by calling this dynamic tool with exactly one JSON action payload.\n\nUse this dynamic tool only for Codex Desktop UI state and actions, such as windows, sidebars, review panels, appearance, and Codex settings. It can show workspace files, browser tabs, terminals, and reviews inside Codex with windows.tabs.open. Use the relevant browser, shell, or file tool to inspect or interact with their contents.\n\nUse {"type":"app.get_summary"} before acting on anything that depends on the visible UI, such as "my first pinned thread", "the second project", "the visible review file", or current panel state. The summary returns stable references such as thread ids, project ids, file paths, panel open state, and scroll positions. Use those references exactly in follow-up actions.\n\nUse {"type":"app.help","action":"windows.show_thread"} to inspect one action, or {"type":"app.help"} to inspect every registered action schema.';
