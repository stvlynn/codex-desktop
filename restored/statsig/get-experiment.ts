// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Snt` — thin helper.

/** Read a Statsig experiment value. */
export function getExperiment(
  client: { getExperiment: (name: string, options?: unknown) => unknown },
  name: string,
  options?: unknown,
): unknown {
  return client.getExperiment(name, options);
}
