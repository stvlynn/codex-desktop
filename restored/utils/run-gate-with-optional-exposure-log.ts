// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gun`) / export `E7`.

export type RunGateWithOptionalExposureLogPeers = {
  Ph: (...args: unknown[]) => unknown;
  _un: (...args: unknown[]) => unknown;
  yun: (...args: unknown[]) => unknown;
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
 */
export function runGateWithOptionalExposureLog(
  e: unknown,
  t: unknown,
  { disableExposureLog = false }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("runGateWithOptionalExposureLog peers are not configured");
  }
  if (e == null || t == null) return null;
  let r = peers.yun.safeParse(
    peers
      .Ph(e, peers._un, {
        disableExposureLog,
      })
      .get(t, {}),
  );
  if (!r.success) return null;
  let { desktop_context_section, workspace_dependencies_section } = r.data;
  return desktop_context_section == null &&
    workspace_dependencies_section == null
    ? null
    : {
        desktopContextSection: desktop_context_section,
        workspaceDependenciesSection: workspace_dependencies_section,
      };
}
