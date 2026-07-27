// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `Ucc`) / export `Uf`.

export type HideConversationalOnboardingPluginTaskPeers = {
  hiddenByNode: WeakMap<object, Set<unknown>>;
  logInfo: (
    message: string,
    payload: { safe: Record<string, unknown> },
  ) => void;
  persistHidden: (ctx: { node: object }, task: unknown) => void;
};

let peers: HideConversationalOnboardingPluginTaskPeers | null = null;

/** Wire hideConversationalOnboardingPluginTask peers once companions land. */
export function setHideConversationalOnboardingPluginTaskPeers(
  next: HideConversationalOnboardingPluginTaskPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Uf` / internal `Ucc`.
 * Hide a conversational onboarding plugin task once per node.
 */
export function hideConversationalOnboardingPluginTask(
  ctx: { node: object },
  task: unknown,
  pluginName: unknown,
): void {
  if (peers == null) {
    throw new Error(
      "HideConversationalOnboardingPluginTask peers are not configured",
    );
  }
  let hidden = peers.hiddenByNode.get(ctx.node);
  if (hidden == null) {
    hidden = new Set();
    peers.hiddenByNode.set(ctx.node, hidden);
  }
  if (hidden.has(task)) return;
  hidden.add(task);
  peers.logInfo("Conversational onboarding plugin task hidden", {
    safe: { pluginName, task },
  });
  peers.persistHidden(ctx, task);
}
