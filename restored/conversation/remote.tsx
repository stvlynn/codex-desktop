// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HFi`) / export `iW`.

export type BindBindRemotePeers = {
  BFi: (...args: unknown[]) => unknown;
  LFi: (...args: unknown[]) => unknown;
  RFi: (...args: unknown[]) => unknown;
  VFi: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  zFi: (...args: unknown[]) => unknown;
};

let peers: BindBindRemotePeers | null = null;

/** Wire bindBindRemote peers once companions land. */
export function setBindBindRemotePeers(next: BindBindRemotePeers): void {
  peers = next;
}

/**
 * Bundle export `iW` / internal `HFi`.
 */
export function bindBindRemote() {
  if (peers == null) {
    throw new Error("bindBindRemote peers are not configured");
  }

  return peers.e(() => {
    (peers.RFi(),
      (zFi = peers.LFi({
        method: `current-branch`,
        getParams: (e) => ({
          operationSource: peers.e.operationSource,
          root: peers.e.root,
        }),
        getOptions: (e) => {
          let t = {
            operationSource: peers.e.operationSource,
            root: peers.e.root,
          };
          return {
            liveQuery:
              peers.e.retainRepoWatch === !1
                ? void 0
                : {
                    method: `current-branch`,
                    params: t,
                  },
            select: (e) => peers.e.branch,
            staleTime: 1 / 0,
          };
        },
      })),
      (BFi = peers.zFi.fromMetadata$),
      (VFi = peers.zFi.fromTarget$));
  });
}
