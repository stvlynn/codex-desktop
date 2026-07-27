// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `jit`) / export `Mct`.

export type CreateDictationTranscriptSessionPeers = {
  createSession: (args: Record<string, unknown>) => {
    start: () => Promise<void>;
    stop: () => Promise<void>;
    onPartial: (cb: (text: string) => void) => () => void;
    onFinal: (cb: (text: string) => void) => () => void;
  };
  defaultLocale: string;
};

let peers: CreateDictationTranscriptSessionPeers | null = null;

/** Wire createDictationTranscriptSession peers once companions land. */
export function setCreateDictationTranscriptSessionPeers(
  next: CreateDictationTranscriptSessionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Mct` / internal `jit`.
 * Create a dictation transcript session with stream handlers.
 */
export function createDictationTranscriptSession(args?: {
  locale?: string;
  onPartial?: (text: string) => void;
  onFinal?: (text: string) => void;
}): {
  start: () => Promise<void>;
  stop: () => Promise<void>;
  dispose: () => void;
} {
  if (peers == null) {
    throw new Error(
      "CreateDictationTranscriptSession peers are not configured",
    );
  }
  const session = peers.createSession({
    locale: args?.locale ?? peers.defaultLocale,
  });
  const unsubs = [
    args?.onPartial ? session.onPartial(args.onPartial) : () => {},
    args?.onFinal ? session.onFinal(args.onFinal) : () => {},
  ];
  return {
    start: () => session.start(),
    stop: () => session.stop(),
    dispose: () => {
      for (const unsub of unsubs) unsub();
    },
  };
}
