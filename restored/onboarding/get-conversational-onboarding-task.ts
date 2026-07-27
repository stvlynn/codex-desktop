// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kMl`) / export `Us`.

export type GetConversationalOnboardingTaskPeers = {
  GMl: (...args: unknown[]) => unknown;
  zMl: (...args: unknown[]) => unknown;
};

let peers: GetConversationalOnboardingTaskPeers | null = null;

/** Wire getConversationalOnboardingTask peers once companions land. */
export function setGetConversationalOnboardingTaskPeers(next: GetConversationalOnboardingTaskPeers): void {
  peers = next;
}

/**
 * Bundle export `Us` / internal `kMl`.
 */
export function getConversationalOnboardingTask(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("getConversationalOnboardingTask peers are not configured");
  }

  let n = e.get(peers.GMl, t);
  if (n == null) throw Error(`Unknown conversational onboarding task: ${t}`);
  return e.set(peers.zMl, {
    entry: n,
    taskId: t
  }), n;
}
