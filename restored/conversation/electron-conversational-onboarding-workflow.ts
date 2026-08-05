// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LPc`) / export `xf`.

export type BindElectronConversationalOnboardingWorkflowPeers = {
  A2: (...args: unknown[]) => unknown;
  FPc: (...args: unknown[]) => unknown;
  IPc: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  od: (...args: unknown[]) => unknown;
};

let peers: BindElectronConversationalOnboardingWorkflowPeers | null = null;

/** Wire bindElectronConversationalOnboardingWorkflow peers once companions land. */
export function setBindElectronConversationalOnboardingWorkflowPeers(
  next: BindElectronConversationalOnboardingWorkflowPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xf` / internal `LPc`.
 */
export function bindElectronConversationalOnboardingWorkflow() {
  if (peers == null) {
    throw new Error(
      "bindElectronConversationalOnboardingWorkflow peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.od(),
      peers.Im(),
      (FPc = `electron:conversational-onboarding-workflow`),
      (IPc = {
        declinedTasks: [],
        phase: `role`,
        selectedRole: null,
        selectedTask: null,
        permissionStatus: `not-requested`,
      }),
      (A2 = peers.Pm(peers.FPc, peers.IPc)));
  });
}
