// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Host ↔ webview message bus singleton (bundle `qf`/`Jf`/`Yf`;
// exports `cdt`/`sdt`). Thin typed facade matching
// `dispatchHostMessage` usage in register-app-actions.

export type HostMessage = {
  type: string;
} & Record<string, unknown>;

export type HostMessageHandler = (
  message: HostMessage,
  reply: (type: string, payload?: Record<string, unknown>) => void,
) => void;

type HostPostMessage = (message: unknown) => void;

let postMessageToHost: HostPostMessage | null = null;
const handlers = new Map<string, Set<HostMessageHandler>>();

function replyToHost(
  type: string,
  payload: Record<string, unknown> = {},
): void {
  if (postMessageToHost == null) {
    throw new Error("VS Code API is unavailable");
  }
  postMessageToHost({ ...payload, type });
}

function deliverMessage(type: string, message: HostMessage): void {
  const set = handlers.get(type);
  if (set == null) return;
  for (const handler of set) {
    handler(message, replyToHost);
  }
}

/**
 * Bundle `Jf` / export `cdt` — singleton host message bus.
 */
export const hostMessageBus = {
  /**
   * Bundle `dispatchHostMessage` — deliver a typed host command locally
   * (and to the host when a postMessage bridge is bound).
   */
  dispatchHostMessage(message: HostMessage): void {
    deliverMessage(message.type, message);
  },

  dispatchMessage(type: string, payload: Record<string, unknown> = {}): void {
    replyToHost(type, payload);
  },

  subscribe(type: string, handler: HostMessageHandler): () => void {
    const set = handlers.get(type) ?? new Set<HostMessageHandler>();
    set.add(handler);
    handlers.set(type, set);
    return () => {
      const current = handlers.get(type);
      if (current == null) return;
      current.delete(handler);
      if (current.size === 0) handlers.delete(type);
    };
  },

  /**
   * Bind the host `postMessage` implementation (bundle `wZe` bridge).
   */
  bindPostMessage(postMessage: HostPostMessage | null): void {
    postMessageToHost = postMessage;
  },
};

/**
 * Bundle `Yf` / export `sdt` — original ESM init that constructed `Jf`.
 * Singleton lives at module scope; no-op for side-effect callers.
 */
export function ensureHostMessageBusInit(): void {}
