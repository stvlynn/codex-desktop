// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cE`) / export `b3`.

export type BindRemoteControlConnectionFailedErrorPeers = {
  Da: (...args: unknown[]) => unknown;
  F6n: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  I6n: (...args: unknown[]) => unknown;
  L6n: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  P6n: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R6n: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  sE: (...args: unknown[]) => unknown;
  status: (...args: unknown[]) => unknown;
};

let peers: BindRemoteControlConnectionFailedErrorPeers | null = null;

/** Wire bindRemoteControlConnectionFailedError peers once companions land. */
export function setBindRemoteControlConnectionFailedErrorPeers(
  next: BindRemoteControlConnectionFailedErrorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `b3` / internal `cE`.
 */
export function bindRemoteControlConnectionFailedError() {
  if (peers == null) {
    throw new Error(
      "bindRemoteControlConnectionFailedError peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.ed(),
      peers.Gf(),
      (P6n = class extends Error {
        constructor() {
          (super(`Remote control failed to connect`),
            (this.name = `RemoteControlConnectionFailedError`));
        }
      }),
      (F6n = new WeakMap()),
      (I6n = 5e3),
      (sE = peers.Da(peers.Q, (e) => null)),
      (L6n = peers.Da(peers.Q, (e) => !1)),
      (R6n = peers.Oa(peers.Q, (e, { get: t }) => {
        let n = t(peers.sE, peers.e);
        return (
          !t(peers.L6n, peers.e) &&
          (n?.status === `connecting` || n?.status === `connected`)
        );
      })));
  });
}
