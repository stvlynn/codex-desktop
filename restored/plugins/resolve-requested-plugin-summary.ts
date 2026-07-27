// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `b4i` / export `Vz`.

import { isPluginRuntimeId } from "./is-plugin-runtime-id";

const SHARE_CONTEXT_REMOTE_ID_RE = /^(?:plugins~)?Plugin_[0-9a-f]{32}$/;

function normalizeRemotePluginId(value: string): string {
  return value.startsWith("plugins~") ? value.slice(8) : value;
}

function remotePluginIdsMatch(left: string, right: string): boolean {
  if (left === right) return true;
  if (
    !SHARE_CONTEXT_REMOTE_ID_RE.test(left) ||
    !SHARE_CONTEXT_REMOTE_ID_RE.test(right)
  ) {
    return false;
  }
  return normalizeRemotePluginId(left) === normalizeRemotePluginId(right);
}

type PluginSummaryRow = {
  plugin: {
    id: string;
    source: { type: string };
    remotePluginId?: string | null;
    shareContext?: { remotePluginId?: string | null } | null;
  };
};

function matchesLocalShareContext(
  row: PluginSummaryRow,
  requestedId: string,
): boolean {
  const remoteId = row.plugin.shareContext?.remotePluginId;
  return (
    row.plugin.source.type === "local" &&
    remoteId != null &&
    remotePluginIdsMatch(remoteId, requestedId)
  );
}

function matchesPluginId(row: PluginSummaryRow, requestedId: string): boolean {
  return isPluginRuntimeId(requestedId)
    ? row.plugin.source.type === "remote" &&
        row.plugin.remotePluginId != null &&
        remotePluginIdsMatch(row.plugin.remotePluginId, requestedId)
    : row.plugin.id === requestedId;
}

/** Resolve plugin summary row for a requested plugin id with optional fallback. */
export function resolveRequestedPluginSummary<
  T extends PluginSummaryRow,
>(input: {
  fallbackRequestedPluginId?: string | null;
  plugins: readonly T[];
  requestedPluginId: string;
}): T | null {
  const { fallbackRequestedPluginId, plugins, requestedPluginId } = input;
  if (isPluginRuntimeId(requestedPluginId)) {
    const shared = plugins.find((row) =>
      matchesLocalShareContext(row, requestedPluginId),
    );
    if (shared != null) return shared;
  }
  const direct =
    plugins.find((row) => matchesPluginId(row, requestedPluginId)) ?? null;
  if (
    direct != null ||
    fallbackRequestedPluginId == null ||
    fallbackRequestedPluginId === requestedPluginId
  ) {
    return direct;
  }
  return resolveRequestedPluginSummary({
    plugins,
    requestedPluginId: fallbackRequestedPluginId,
  });
}
