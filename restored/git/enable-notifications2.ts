// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `osc`) / export `mp`.

export type BindEnableNotifications2Peers = {
  $oc: (...args: unknown[]) => unknown;
  IN: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  asc: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  esc: (...args: unknown[]) => unknown;
  isc: (...args: unknown[]) => unknown;
  jVs: (...args: unknown[]) => unknown;
  nsc: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  rsc: (...args: unknown[]) => unknown;
  tsc: (...args: unknown[]) => unknown;
};

let peers: BindEnableNotifications2Peers | null = null;

/** Wire bindEnableNotifications2 peers once companions land. */
export function setBindEnableNotifications2Peers(
  next: BindEnableNotifications2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `mp` / internal `osc`.
 */
export function bindEnableNotifications2() {
  if (peers == null) {
    throw new Error("bindEnableNotifications2 peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers.IN(),
      peers.jVs(),
      peers.qx(),
      ($oc = `2214619544`),
      (esc = 10),
      (tsc = [
        `enable_notifications`,
        `create_automation`,
        `triage_github_prs`,
        `catch_up_linear`,
      ]),
      (nsc = [
        `enable_notifications`,
        `create_automation`,
        `summarize_inbox`,
        `catch_up_updates_and_blockers`,
        `summarize_current_priorities`,
      ]),
      (rsc = new Set([`gmail`, `google-calendar`, `google-drive`])),
      (isc = {
        product_management: `review_roadmaps_and_projects`,
        design: `review_design_briefs`,
        marketing: `review_campaigns`,
        sales: `review_account_plans`,
        finance: `review_forecasts`,
        operations: `review_operating_plans`,
        people_hr: `review_people_plans_and_policies`,
        legal: `review_contracts_and_policies`,
        student: `review_class_materials`,
      }),
      (asc = peers.ol(peers.X().min(1))));
  });
}
