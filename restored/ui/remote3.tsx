// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `V$r`) / export `NJ`.

export type BindRemote3Peers = {
  Au: (...args: unknown[]) => unknown;
  B$r: (...args: unknown[]) => unknown;
  F$r: (...args: unknown[]) => unknown;
  Fm: (...args: unknown[]) => unknown;
  GM: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  I$r: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  KM: (...args: unknown[]) => unknown;
  L$r: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R$r: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  cN: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  projectKey: (...args: unknown[]) => unknown;
  z$r: (...args: unknown[]) => unknown;
};

let peers: BindRemote3Peers | null = null;

/** Wire bindRemote3 peers once companions land. */
export function setBindRemote3Peers(next: BindRemote3Peers): void {
  peers = next;
}

/**
 * Bundle export `NJ` / internal `V$r`.
 */
export function bindRemote3() {
  if (peers == null) {
    throw new Error("bindRemote3 peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.Au(), peers.ed(), peers.KM(), peers.Im(), F$r = peers.Pm(`last-used-continue-in-mode`, `local`), I$r = peers.Fm(e => `composer-mode-by-project:${peers.e}`, void 0), L$r = peers.Ta(peers.GM, () => null), cN = peers.Ta(peers.Q, () => null), R$r = peers.Oa(peers.Q, (e, {
      get: t
    }) => {
      let n = t(peers.cN);
      return n != null && n.key === peers.e ? n.mode : null;
    }), z$r = peers.Ma(peers.Q, ({
      get: e
    }) => {
      let t = peers.e(peers.F$r);
      return t === `remote` ? `local` : t ?? `local`;
    }), B$r = peers.Oa(peers.GM, (e, {
      get: t
    }) => {
      let n = t(peers.L$r);
      return n?.projectKey === peers.e ? n.mode : t(peers.I$r, peers.e) ?? `local`;
    });
  });
}
