// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Rwe` / export `omt`. Companion `pTe` plugin-id regex.

const PLUGIN_RUNTIME_ID_RE =
  /^(?:plugins_[0-9a-f]{32}|(?:plugins~)?Plugin_[0-9a-f]{32}|plugin_[A-Za-z0-9][A-Za-z0-9_-]{0,247})$/;

/** True when value looks like a Codex plugin runtime id. */
export function isPluginRuntimeId(value: string): boolean {
  return PLUGIN_RUNTIME_ID_RE.test(value);
}
