// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ucc`) / export `Uf`.

export type HideConversationalOnboardingPluginTaskPeers = {
  Hcc: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  ilc: (...args: unknown[]) => unknown;
};

let peers: HideConversationalOnboardingPluginTaskPeers | null = null;

/** Wire hideConversationalOnboardingPluginTask peers once companions land. */
export function setHideConversationalOnboardingPluginTaskPeers(next: HideConversationalOnboardingPluginTaskPeers): void {
  peers = next;
}

/**
 * Bundle export `Uf` / internal `Ucc`.
 */
export function hideConversationalOnboardingPluginTask(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error(
      "hideConversationalOnboardingPluginTask peers are not configured",
    );
  }

  let r = peers.ilc.get(e.node);
  (r ?? ((r = new Set()), peers.ilc.set(e.node, r)),
    !r.has(t) &&
      (r.add(t),
      peers.Wf.info(`Conversational onboarding plugin task hidden`, {
        safe: {
          pluginName: n,
          task: t,
        },
      }),
      peers.Hcc(e, t)));
}
