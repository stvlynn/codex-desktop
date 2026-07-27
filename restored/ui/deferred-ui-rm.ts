// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sU`) / export `rM`.

export type BindDeferredUiRMPeers = {
  BJa: (...args: unknown[]) => unknown;
  ini: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiRMPeers | null = null;

/** Wire bindDeferredUiRM peers once companions land. */
export function setBindDeferredUiRMPeers(next: BindDeferredUiRMPeers): void {
  peers = next;
}

/**
 * Bundle export `rM` / internal `sU`.
 */
export const bindDeferredUiRM = () => {
  if (peers == null) {
    throw new Error("bindDeferredUiRM peers are not configured");
  }

  let e = (0, peers.BJa.useContext)(peers.ini);
  if (!e)
    throw Error(
      `useComposerController must be used within a ComposerControllerScope`,
    );
  return e;
};
