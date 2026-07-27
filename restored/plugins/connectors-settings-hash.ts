// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `n7r` companion for `pK`.

/** Hash/query fragment for Connectors settings deep link. */
export function connectorsSettingsHash(
  connectorId: string,
  options: { addConnectorLink?: boolean } = {},
): string {
  const params = new URLSearchParams([["connector", connectorId]]);
  if (options.addConnectorLink) params.set("add-connector-link", "true");
  params.set("product-sku", "CODEX");
  params.set("referrer", "codex");
  return `settings/Connectors?${params.toString()}`;
}
