// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `G1c`) / export `Yl`.

export type OpenAutomationDetailTabPeers = {
  q1c: (...args: unknown[]) => unknown;
};
let peers: OpenAutomationDetailTabPeers | null = null;

/** Wire openAutomationDetailTab peers once companions land. */
export function setOpenAutomationDetailTabPeers(
  next: OpenAutomationDetailTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Yl` / internal `G1c`.
 */
export function openAutomationDetailTab({
  scope,
  automationId,
  title,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("openAutomationDetailTab peers are not configured");
  }
  peers.q1c({
    scope,
    request: {
      type: "automation",
      automationId,
    },
    tabId: `automation:${automationId}`,
    title,
  });
}
