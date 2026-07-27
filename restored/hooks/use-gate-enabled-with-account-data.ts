// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `b$l`) / export `Ri`.

import type { ReactNode } from "react";

export type UseGateEnabledWithAccountDataPeers = {
  useFeatureGateEnabled: (gateId: string) => boolean;
  gateId: string;
  useAccountQuery: () => { data?: { id: string; plan_type?: unknown } | null };
  isEligiblePlan: (planType: unknown) => boolean;
  AccountView: (props: { accountId: string }) => ReactNode;
};

let peers: UseGateEnabledWithAccountDataPeers | null = null;

/** Wire UseGateEnabledWithAccountData peers once companions land. */
export function setUseGateEnabledWithAccountDataPeers(
  next: UseGateEnabledWithAccountDataPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ri` / internal `b$l`.
 * When a Statsig gate is on and account plan qualifies, render account UI.
 */
export function useGateEnabledWithAccountData(): ReactNode {
  if (peers == null) {
    throw new Error("UseGateEnabledWithAccountData peers are not configured");
  }
  const enabled = peers.useFeatureGateEnabled(peers.gateId);
  const { data } = peers.useAccountQuery();
  if (!enabled || data == null || !peers.isEligiblePlan(data.plan_type)) {
    return null;
  }
  return peers.AccountView({ accountId: data.id });
}
