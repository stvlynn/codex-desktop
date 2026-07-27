// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `JAa` / export `eP`. Stream registry / idle marker left injectable.

type StoreLike = {
  get: (atom: unknown, id?: unknown) => unknown;
};

type StreamClient = {
  cancelStream: (requestId: string) => void;
};

type StreamHandle = {
  markTerminal?: () => void;
  prepareQueuedDraftImmediately?: () => void;
};

let activeRequestAtom: unknown = null;
let streamClientAtom: unknown = null;
let clearLocal: ((store: StoreLike, conversationId: string) => void) | null =
  null;
let markIdle:
  | ((args: { conversationId: string; scope: StoreLike }) => void)
  | null = null;
let abortLocal: ((requestId: string) => void) | null = null;
let getHandle: ((requestId: string) => StreamHandle | undefined) | null = null;

export function setCancelConversationStreamDeps(args: {
  activeRequestAtom: unknown;
  streamClientAtom: unknown;
  clearLocal: (store: StoreLike, conversationId: string) => void;
  markIdle: (args: { conversationId: string; scope: StoreLike }) => void;
  abortLocal?: (requestId: string) => void;
  getHandle?: (requestId: string) => StreamHandle | undefined;
}): void {
  activeRequestAtom = args.activeRequestAtom;
  streamClientAtom = args.streamClientAtom;
  clearLocal = args.clearLocal;
  markIdle = args.markIdle;
  abortLocal = args.abortLocal ?? null;
  getHandle = args.getHandle ?? null;
}

export function cancelConversationStream(store: StoreLike, conversationId: string): void {
  if (clearLocal == null || markIdle == null) {
    throw new Error("cancelConversationStream deps have not been configured");
  }
  const requestId = store.get(activeRequestAtom, conversationId) as
    | string
    | null
    | undefined;
  if (requestId == null) return;
  abortLocal?.(requestId);
  const handle = getHandle?.(requestId);
  handle?.markTerminal?.();
  const client = store.get(streamClientAtom) as StreamClient | undefined;
  client?.cancelStream(requestId);
  clearLocal(store, conversationId);
  markIdle({ conversationId, scope: store });
  handle?.prepareQueuedDraftImmediately?.();
}
