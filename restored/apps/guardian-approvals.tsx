// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `n4r`) / export `Fq`.

export type BindGuardianApprovalsPeers = {
  Ap: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  X2r: (...args: unknown[]) => unknown;
  Z2r: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  e4r: (...args: unknown[]) => unknown;
  ime: (...args: unknown[]) => unknown;
  kp: (...args: unknown[]) => unknown;
  od: (...args: unknown[]) => unknown;
  t4r: (...args: unknown[]) => unknown;
};

let peers: BindGuardianApprovalsPeers | null = null;

/** Wire bindGuardianApprovals peers once companions land. */
export function setBindGuardianApprovalsPeers(next: BindGuardianApprovalsPeers): void {
  peers = next;
}

/**
 * Bundle export `Fq` / internal `n4r`.
 */
export function bindGuardianApprovals() {
  if (peers == null) {
    throw new Error("bindGuardianApprovals peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.Ap(), peers.od(), peers.Z2r(), e4r = peers.kp(peers.ime, {}, {
      getOnInit: !1
    }), t4r = peers.kp(peers.X2r, {}, {
      getOnInit: !1
    });
  });
}

/**
 * `Fq` is an ESM module-init thunk (registers atoms as a side effect), not a
 * component — consumers only import it to keep the chunk's import graph
 * live, so alias the real export under the name they expect.
 */
export { bindGuardianApprovals as GuardianApprovals };
