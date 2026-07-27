// Restored from ref/webview/assets/register-app-actions-CsKK5KzE.js
// Codex desktop dynamic-tool action registry (appearance, windows, UI navigation).
// Stage 3: 95/95 app-initial aliases mapped (tabs.open + shell `__esm` facades).

import {
  APP_ACTION_TYPES,
  APP_DYNAMIC_TOOL_GUIDANCE,
  type AppActionRegistry,
} from "./register-app-action-catalog";
import { runnerByType } from "./register-app-action-handlers";

export {
  APP_ACTION_TYPES,
  APP_DYNAMIC_TOOL_GUIDANCE,
} from "./register-app-action-catalog";
export type { AppActionRegistry } from "./register-app-action-catalog";

/**
 * Registry of Codex Desktop UI actions exposed to the dynamic app tool.
 * Appearance + windows.* (incl. get_summary / review.set_* / terminal.toggle /
 * tabs.open) are wired via DOM, host bus, and AppScope-adjacent bindable
 * atom / opener facades. All 95 app-initial aliases for this consumer map.
 */
export const appActionRegistry: AppActionRegistry = async (
  payload: Parameters<AppActionRegistry>[0],
  context: Parameters<AppActionRegistry>[1] = {},
) => {
  const type = payload.type;
  const run = runnerByType.get(type);
  if (run == null) {
    throw new Error(`Unsupported app action: ${type}`);
  }
  return run(payload, context);
};
