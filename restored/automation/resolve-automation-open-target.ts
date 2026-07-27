// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `las` / export `$S`.

export type AutomationOpenTarget =
  | { type: "exact"; locator: unknown }
  | { type: "new"; hostId: string }
  | { type: "resume"; hostId: string };

/** Map automation open source → conversation open target. */
export function resolveAutomationOpenTarget(
  source: { source: string; locator?: unknown },
  hostId: string,
): AutomationOpenTarget | undefined {
  switch (source.source) {
    case "composer_button_existing_thread":
      return { type: "exact", locator: source.locator };
    case "composer_button_new_thread":
      return { type: "new", hostId };
    case "avatar_overlay_button_new_thread":
    case "global_hotkey_new_thread":
      return { type: "resume", hostId };
    default:
      return undefined;
  }
}
