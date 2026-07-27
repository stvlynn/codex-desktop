// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `A6n`) / export `w3`.

export type AwaitConversationUntilSettledPeers = {
  conversationAtomFamily: unknown;
  resolveSettledValue: (
    conversation: unknown,
    ignoreErrorSnapshot: unknown,
  ) => unknown;
  timeoutMs: number;
};

let peers: AwaitConversationUntilSettledPeers | null = null;

/** Wire await-conversation-until-settled peers once companions land. */
export function setAwaitConversationUntilSettledPeers(
  next: AwaitConversationUntilSettledPeers,
): void {
  peers = next;
}

/**
 * Bundle export `w3` / internal `A6n`.
 * Resolve when a conversation settles, or reject on timeout/error.
 */
export function awaitConversationUntilSettled(
  store: {
    get: (atom: unknown, key: unknown) => unknown;
    watch: (
      selector: (api: {
        get: (atom: unknown, key: unknown) => unknown;
      }) => void,
    ) => () => void;
  },
  conversationId: unknown,
  options: { ignoreCurrentError?: boolean } = {},
): Promise<unknown> {
  if (peers == null) {
    throw new Error("AwaitConversationUntilSettled peers are not configured");
  }
  const { ignoreCurrentError = false } = options;
  const current = store.get(peers.conversationAtomFamily, conversationId);
  const ignoreSnapshot =
    ignoreCurrentError &&
    (current as { status?: string } | null)?.status === "errored"
      ? current
      : null;
  const settled = peers.resolveSettledValue(current, ignoreSnapshot);
  if (settled instanceof Error) return Promise.reject(settled);
  if (settled != null) return Promise.resolve(settled);
  return new Promise((resolve, reject) => {
    let done = false;
    let unwatch: (() => void) | undefined;
    const finish = (value: unknown) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      unwatch?.();
      if (value instanceof Error) reject(value);
      else resolve(value);
    };
    const timer = setTimeout(() => {
      finish(Error("Timed out waiting for remote control to connect"));
    }, peers!.timeoutMs);
    unwatch = store.watch(({ get }) => {
      const next = peers!.resolveSettledValue(
        get(peers!.conversationAtomFamily, conversationId),
        ignoreSnapshot,
      );
      if (next != null) finish(next);
    });
    if (done) unwatch();
  });
}
