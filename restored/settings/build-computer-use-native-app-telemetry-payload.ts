// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `zal`) / export `$c`.

export type BuildComputerUseNativeAppTelemetryPayloadArgs = {
  completed: boolean;
  intl: { formatMessage: (descriptor: unknown) => unknown };
  serverName?: unknown;
  matchingApp?: unknown;
  nativeDesktopAppMetadata?: unknown;
  platform?: string;
  source?: unknown;
  toolArguments?: unknown;
  toolResult?: unknown;
  toolName?: unknown;
};

export type BuildComputerUseNativeAppTelemetryPayloadPeers = {
  earlyPayload: (args: {
    toolArguments: unknown;
    toolName: unknown;
  }) => unknown;
  resolveToolKey: (args: {
    matchingApp: unknown;
    toolName: unknown;
  }) => unknown;
  resolveStatusMessages: (args: {
    matchingApp: unknown;
    toolName: unknown;
  }) => { completed: unknown; active: unknown } | null | undefined;
  resolveSourceLabel: (
    source: unknown,
    intl: BuildComputerUseNativeAppTelemetryPayloadArgs["intl"],
  ) => unknown;
  resolveFallbackLabel: (args: {
    matchingApp: unknown;
    toolName: unknown;
  }) => unknown;
  resolveFormatter: (
    serverName: unknown,
    matchingApp: unknown,
  ) => ((args: Record<string, unknown>) => unknown) | null | undefined;
};

let peers: BuildComputerUseNativeAppTelemetryPayloadPeers | null = null;

/** Wire computer-use telemetry payload peers once companions land. */
export function setBuildComputerUseNativeAppTelemetryPayloadPeers(
  next: BuildComputerUseNativeAppTelemetryPayloadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$c` / internal `zal`.
 * Build telemetry payload/label for computer-use native app tool calls.
 */
export function buildComputerUseNativeAppTelemetryPayload(
  args: BuildComputerUseNativeAppTelemetryPayloadArgs,
): unknown {
  if (peers == null) {
    throw new Error(
      "BuildComputerUseNativeAppTelemetryPayload peers are not configured",
    );
  }
  const {
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
  } = args;
  const early = peers.earlyPayload({ toolArguments, toolName });
  if (early != null) return early;
  const toolKey = peers.resolveToolKey({ matchingApp, toolName });
  const statusMessages = peers.resolveStatusMessages({ matchingApp, toolName });
  const fallbackLabel =
    statusMessages == null
      ? (peers.resolveSourceLabel(source, intl) ??
        peers.resolveFallbackLabel({ matchingApp, toolName }))
      : intl.formatMessage(
          completed ? statusMessages.completed : statusMessages.active,
        );
  return (
    peers.resolveFormatter(
      serverName,
      matchingApp,
    )?.({
      completed,
      fallbackLabel,
      intl,
      matchingApp,
      nativeDesktopAppMetadata: nativeDesktopAppMetadata ?? null,
      platform,
      toolArguments,
      toolKey,
      toolResult: toolResult ?? null,
    }) ?? fallbackLabel
  );
}
