// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `gun`) / export `E7`.

export type RunGateWithOptionalExposureLogPeers = {
  readGate: (
    client: unknown,
    gate: unknown,
    opts: { disableExposureLog: boolean },
  ) => { get: (key: unknown, fallback: unknown) => unknown };
  gateKey: unknown;
  schema: {
    safeParse: (value: unknown) => {
      success: boolean;
      data?: {
        desktop_context_section?: unknown;
        workspace_dependencies_section?: unknown;
      };
    };
  };
};

let peers: RunGateWithOptionalExposureLogPeers | null = null;

/** Wire runGateWithOptionalExposureLog peers once companions land. */
export function setRunGateWithOptionalExposureLogPeers(
  next: RunGateWithOptionalExposureLogPeers,
): void {
  peers = next;
}

/**
 * Bundle export `E7` / internal `gun`.
 * Evaluate a Statsig gate payload and return desktop/workspace sections.
 */
export function runGateWithOptionalExposureLog(
  client: unknown,
  gate: unknown,
  options: { disableExposureLog?: boolean } = {},
): {
  desktopContextSection: unknown;
  workspaceDependenciesSection: unknown;
} | null {
  if (peers == null) {
    throw new Error("RunGateWithOptionalExposureLog peers are not configured");
  }
  if (client == null || gate == null) return null;
  const parsed = peers.schema.safeParse(
    peers
      .readGate(client, peers.gateKey, {
        disableExposureLog: options.disableExposureLog ?? false,
      })
      .get(gate, {}),
  );
  if (!parsed.success) return null;
  const desktopContextSection = parsed.data?.desktop_context_section;
  const workspaceDependenciesSection =
    parsed.data?.workspace_dependencies_section;
  if (desktopContextSection == null && workspaceDependenciesSection == null) {
    return null;
  }
  return { desktopContextSection, workspaceDependenciesSection };
}
