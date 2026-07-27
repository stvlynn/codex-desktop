// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `kMl`) / export `Us`.

export type AtomStoreGetSet = {
  get: (atom: unknown, key: unknown) => unknown;
  set: (atom: unknown, value: unknown) => void;
};

export type GetConversationalOnboardingTaskPeers = {
  taskFamilyAtom: unknown;
  activeTaskAtom: unknown;
};

let peers: GetConversationalOnboardingTaskPeers | null = null;

/** Wire conversational onboarding task peers once companions land. */
export function setGetConversationalOnboardingTaskPeers(
  next: GetConversationalOnboardingTaskPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Us` / internal `kMl`.
 * Look up a conversational onboarding task or throw.
 */
export function getConversationalOnboardingTask(
  store: AtomStoreGetSet,
  taskId: unknown,
): unknown {
  if (peers == null) {
    throw new Error("GetConversationalOnboardingTask peers are not configured");
  }
  const entry = store.get(peers.taskFamilyAtom, taskId);
  if (entry == null) {
    throw new Error(
      `Unknown conversational onboarding task: ${String(taskId)}`,
    );
  }
  store.set(peers.activeTaskAtom, { entry, taskId });
  return entry;
}
