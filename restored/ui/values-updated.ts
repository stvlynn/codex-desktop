// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dh`) / export `clt`.

export type ValuesUpdatedPeers = {
  Da: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  Th: (...args: unknown[]) => unknown;
  bnt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
};

let peers: ValuesUpdatedPeers | null = null;

/** Wire valuesUpdated peers once companions land. */
export function setValuesUpdatedPeers(next: ValuesUpdatedPeers): void {
  peers = next;
}

/**
 * Bundle export `clt` / internal `Dh`.
 */
export function valuesUpdated() {
  if (peers == null) {
    throw new Error("valuesUpdated peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.ed(), Th = peers.Ta(peers.Q, null), bnt = peers.Ta(peers.Q, []), Eh = peers.Da(peers.Q, e => !1, {
      onMount: (e, t) => {
        let {
            key: n
          } = t,
          r = t.get(peers.Th);
        return r != null && peers.e(r.checkGate(n)), t.set(peers.bnt, e => peers.e.includes(n) ? peers.e : [...peers.e, n]), () => {
          t.set(peers.bnt, e => peers.e.filter(e => peers.e !== n));
        };
      }
    });
  });
}
