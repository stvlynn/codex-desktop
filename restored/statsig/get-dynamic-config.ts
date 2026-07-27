// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `xnt` — thin helper.

/** Read a Statsig dynamic config value. */
export function getDynamicConfig(
  client: { getDynamicConfig: (name: string, options?: unknown) => unknown },
  name: string,
  options?: unknown,
): unknown {
  return client.getDynamicConfig(name, options);
}
