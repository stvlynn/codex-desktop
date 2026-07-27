// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zal`) / export `$c`.

export type BuildComputerUseNativeAppTelemetryPayloadPeers = {
  Bal: (...args: unknown[]) => unknown;
  Gal: (...args: unknown[]) => unknown;
  Hal: (...args: unknown[]) => unknown;
  Jal: (...args: unknown[]) => unknown;
  Ual: (...args: unknown[]) => unknown;
  Val: (...args: unknown[]) => unknown;
  Xal: (...args: unknown[]) => unknown;
};
let peers: BuildComputerUseNativeAppTelemetryPayloadPeers | null = null;

/** Wire buildComputerUseNativeAppTelemetryPayload peers once companions land. */
export function setBuildComputerUseNativeAppTelemetryPayloadPeers(
  next: BuildComputerUseNativeAppTelemetryPayloadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$c` / internal `zal`.
 */
export function buildComputerUseNativeAppTelemetryPayload({
  completed,
  intl,
  serverName,
  matchingApp,
  nativeDesktopAppMetadata,
  platform = "macOS",
  source,
  toolArguments,
  toolResult,
  toolName,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error(
      "buildComputerUseNativeAppTelemetryPayload peers are not configured",
    );
  }
  let u = peers.Val({
    toolArguments,
    toolName,
  });
  if (u != null) return u;
  let d = peers.Jal({
      matchingApp,
      toolName,
    }),
    f = peers.Gal({
      matchingApp,
      toolName,
    }),
    p =
      f == null
        ? (peers.Bal(source, intl) ??
          peers.Xal({
            matchingApp,
            toolName,
          }))
        : intl.formatMessage(completed ? f.completed : f.active);
  return (
    (peers.Ual(serverName) ?? peers.Hal(matchingApp))?.({
      completed,
      fallbackLabel: p,
      intl,
      matchingApp,
      nativeDesktopAppMetadata: nativeDesktopAppMetadata ?? null,
      platform,
      toolArguments,
      toolKey: d,
      toolResult: toolResult ?? null,
    }) ?? p
  );
}
