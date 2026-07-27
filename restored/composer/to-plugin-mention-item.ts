// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Map a plugin install into a mention list item (bundle `P1r`/`R1r` / export `_J`).

import { buildPluginUri } from "./app-plugin-uri";
import {
  defaultPluginMentionLabels,
  type PluginMentionLabels,
} from "./format-plugin-mention-labels";

export type PluginMentionPlugin = {
  id: string;
  name: string;
  interface?: { brandColor?: string | null } | null;
};

export type PluginMentionSource = {
  plugin: PluginMentionPlugin;
  displayName?: string | null;
  description?: string | null;
  composerIconPath?: string | null;
  logoPath?: string | null;
};

export type PluginMentionItemFields = {
  name: string;
  displayName: string;
  path: string;
  description: string;
  iconSmall: string;
  brandColor?: string;
};

export type PluginMentionItem = PluginMentionItemFields & {
  kind: "plugin";
};

function resolveComposerIconPath(source: PluginMentionSource): string {
  return source.composerIconPath ?? source.logoPath ?? "";
}

function resolveBrandColor(
  pluginInterface: PluginMentionPlugin["interface"],
): string | undefined {
  const color = pluginInterface?.brandColor;
  if (color == null || color.length === 0) return undefined;
  return color;
}

/**
 * Normalize plugin fields for mention menus (`P1r`).
 * Browser / Computer Use swap in localized short labels.
 */
export function toPluginMentionFields(source: PluginMentionSource, labels: PluginMentionLabels = defaultPluginMentionLabels(),
): PluginMentionItemFields {
  const pluginName = source.plugin.name;
  let displayName = source.displayName ?? pluginName;
  let name = pluginName;
  if (pluginName === "browser") {
    displayName = labels.browserUse;
    name = displayName;
  } else if (pluginName === "computer-use") {
    displayName = labels.computerUse;
    name = displayName;
  }
  const brandColor = resolveBrandColor(source.plugin.interface);
  return {
    name,
    displayName,
    path: buildPluginUri(source.plugin.id),
    description: source.description ?? "",
    iconSmall: resolveComposerIconPath(source),
    ...(brandColor != null ? { brandColor } : {}),
  };
}

/** Mention list item with `kind: "plugin"` (`R1r` / `_J`). */
export function toPluginMentionItem(source: PluginMentionSource, labels?: PluginMentionLabels): PluginMentionItem {
  return { kind: "plugin", ...toPluginMentionFields(source, labels) };
}
