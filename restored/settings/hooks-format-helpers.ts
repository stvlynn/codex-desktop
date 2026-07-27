// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Format / path helpers for hooks-settings (dd/ud/ld/fd/l_/tmt/Tl/u_).

import { hooksEventMessages } from "./hooks-event-messages";
import type { HooksIntlShape } from "./hooks-types";

/** Bundle export `Tl` / init `K6c` — sets hooks-settings route constants. */
export const HOOKS_SETTINGS_SECTION_ID = "hooks-settings";
export const HOOKS_SETTINGS_BASE_PATH = "/settings";

export function ensureHooksSettingsRouteInit(): void {}

/** Bundle `XKc` / export `dd` — fallback "Hook {index}" title. */
export function formatFallbackHookTitle(index: number, intl: HooksIntlShape): string {
  return intl.formatMessage(hooksEventMessages.fallbackHookTitle, {
    index: index + 1,
  });
}

/** Bundle `JKc` / export `ud` — localized hook event label. */
export function formatHookEventLabel(eventName: string, intl: HooksIntlShape): string {
  switch (eventName) {
    case "preToolUse":
      return intl.formatMessage(hooksEventMessages.preToolUse);
    case "permissionRequest":
      return intl.formatMessage(hooksEventMessages.permissionRequest);
    case "postToolUse":
      return intl.formatMessage(hooksEventMessages.postToolUse);
    case "preCompact":
      return intl.formatMessage(hooksEventMessages.preCompact);
    case "postCompact":
      return intl.formatMessage(hooksEventMessages.postCompact);
    case "sessionStart":
      return intl.formatMessage(hooksEventMessages.sessionStart);
    case "sessionEnd":
      return intl.formatMessage(hooksEventMessages.sessionEnd);
    case "userPromptSubmit":
      return intl.formatMessage(hooksEventMessages.userPromptSubmit);
    case "subagentStart":
      return intl.formatMessage(hooksEventMessages.subagentStart);
    case "subagentStop":
      return intl.formatMessage(hooksEventMessages.subagentStop);
    case "stop":
      return intl.formatMessage(hooksEventMessages.stop);
    default:
      return eventName;
  }
}

/** Bundle `YKc` / export `ld` — localized hook event description. */
export function formatHookEventDescription(eventName: string, intl: HooksIntlShape): string {
  switch (eventName) {
    case "preToolUse":
      return intl.formatMessage(hooksEventMessages.preToolUseDescription);
    case "permissionRequest":
      return intl.formatMessage(
        hooksEventMessages.permissionRequestDescription,
      );
    case "postToolUse":
      return intl.formatMessage(hooksEventMessages.postToolUseDescription);
    case "preCompact":
      return intl.formatMessage(hooksEventMessages.preCompactDescription);
    case "postCompact":
      return intl.formatMessage(hooksEventMessages.postCompactDescription);
    case "sessionStart":
      return intl.formatMessage(hooksEventMessages.sessionStartDescription);
    case "sessionEnd":
      return intl.formatMessage(hooksEventMessages.sessionEndDescription);
    case "userPromptSubmit":
      return intl.formatMessage(hooksEventMessages.userPromptSubmitDescription);
    case "subagentStart":
      return intl.formatMessage(hooksEventMessages.subagentStartDescription);
    case "subagentStop":
      return intl.formatMessage(hooksEventMessages.subagentStopDescription);
    case "stop":
      return intl.formatMessage(hooksEventMessages.stopDescription);
    default:
      return "";
  }
}

/** Bundle `ZKc` / export `fd` — strip marketplace suffix from plugin id. */
export function pluginIdBasename(pluginId: string | null | undefined): string | null {
  if (pluginId == null) return null;
  return pluginId.split("@")[0] || null;
}

/**
 * Bundle `QHs` / export `l_` — display basename for a path (or explicit name).
 */
export function displayNameFromPath(path: string | null | undefined, explicitName?: string | null): string | null {
  if (explicitName && explicitName.trim().length > 0) {
    return explicitName.trim();
  }
  if (!path) return null;
  const trimmed = path.trim();
  if (!trimmed) return null;
  const parts = trimmed.split(/[/\\]+/).filter(Boolean);
  return parts[parts.length - 1] ?? trimmed;
}

/**
 * Bundle `Iwe` / export `tmt` — plugin detail deep-link under /skills/plugins.
 */
export function buildPluginDetailPath(input: {
  hostId?: string;
  pluginId: string;
  marketplacePath?: string;
  pluginName?: string;
  remoteMarketplaceName?: string;
  deepLinkMode?: string;
  [key: string]: unknown;
}): string {
  const params = new URLSearchParams();
  if (input.hostId) params.set("hostId", String(input.hostId));
  if (input.marketplacePath) {
    params.set("marketplacePath", String(input.marketplacePath));
  }
  if (input.pluginName) params.set("pluginName", String(input.pluginName));
  if (input.remoteMarketplaceName) {
    params.set("remoteMarketplaceName", String(input.remoteMarketplaceName));
  }
  if (input.deepLinkMode) {
    params.set("deepLinkMode", String(input.deepLinkMode));
  }
  const query = params.toString();
  const encoded = encodeURIComponent(input.pluginId).replaceAll("%40", "@");
  return `/skills/plugins/${encoded}${query ? `?${query}` : ""}`;
}

/** Bundle export `u_` / init `eUs` — empty ESM init retained as no-op. */
export function ensureHooksHelpersInit(): void {}
