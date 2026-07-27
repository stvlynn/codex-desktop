// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `p_u`) / export `ht`.

export type BindComputerUseAppApprovalsPeers = {
  Hf: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  wM: (...args: unknown[]) => unknown;
};

let peers: BindComputerUseAppApprovalsPeers | null = null;

/** Wire bindComputerUseAppApprovals peers once companions land. */
export function setBindComputerUseAppApprovalsPeers(next: BindComputerUseAppApprovalsPeers): void {
  peers = next;
}

/**
 * Bundle export `ht` / internal `p_u`.
 */
export function bindComputerUseAppApprovals() {
  if (peers == null) {
    throw new Error("bindComputerUseAppApprovals peers are not configured");
  }

  return peers.Ia(peers.Q, () => ({
    queryFn: ({ signal: e }) =>
      peers.wM(peers.gp.computerUseSettings.getAppApprovals(), e),
    queryKey: [`computer-use-app-approvals`],
    refetchOnMount: `always`,
    refetchOnWindowFocus: !0,
    staleTime: peers.Hf.ONE_MINUTE,
  }));
}
