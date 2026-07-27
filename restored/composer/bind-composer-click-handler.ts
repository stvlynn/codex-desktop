// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `Yt`) / export `gvt`.

export type BindComposerClickHandlerPeers = {
  propsKey: symbol | string;
  formatError: (code: number, eventName: unknown, type: string) => string;
  interactiveEventNames: Set<string>;
};

let peers: BindComposerClickHandlerPeers | null = null;

/** Wire bindComposerClickHandler peers once companions land. */
export function setBindComposerClickHandlerPeers(
  next: BindComposerClickHandlerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gvt` / internal `Yt`.
 * Resolve a DOM event handler from fiber props, respecting disabled.
 */
export function bindComposerClickHandler(
  fiber: {
    stateNode:
      | (Record<string | symbol, unknown> & {
          type?: string;
          disabled?: boolean;
        })
      | null;
  },
  eventName: string,
): unknown {
  if (peers == null) {
    throw new Error("BindComposerClickHandler peers are not configured");
  }
  const node = fiber.stateNode;
  if (node === null) return null;
  const props =
    (node[peers.propsKey as never] as
      | Record<string, unknown>
      | null
      | undefined) ?? null;
  if (props === null) return null;
  let handler = props[eventName];
  let blocked = false;
  if (peers.interactiveEventNames.has(eventName)) {
    let enabled = !node.disabled;
    if (!enabled) {
      const type = node.type;
      enabled = !(
        type === "button" ||
        type === "input" ||
        type === "select" ||
        type === "textarea"
      );
    }
    blocked = !enabled;
  }
  if (blocked) return null;
  if (handler && typeof handler !== "function") {
    throw new Error(peers.formatError(231, eventName, typeof handler));
  }
  return handler;
}
