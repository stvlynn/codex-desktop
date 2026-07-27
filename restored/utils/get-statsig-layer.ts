// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ph` / export `elt`.

/** Thin wrapper: `client.getLayer(name, options)`. */
export function getStatsigLayer(
  client: { getLayer: (name: string, options?: unknown) => unknown },
  name: string,
  options?: unknown,
): unknown {
  return client.getLayer(name, options);
}
