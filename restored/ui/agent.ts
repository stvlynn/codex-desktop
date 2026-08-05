// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `r_e`) / export `Yht`.

export type BindAgentPeers = {
  Pl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  e_e: (...args: unknown[]) => unknown;
  n_e: (...args: unknown[]) => unknown;
  t_e: (...args: unknown[]) => unknown;
  trim: (...args: unknown[]) => unknown;
};

let peers: BindAgentPeers | null = null;

/** Wire bindAgent peers once companions land. */
export function setBindAgentPeers(next: BindAgentPeers): void {
  peers = next;
}

/**
 * Bundle export `Yht` / internal `r_e`.
 */
export function bindAgent() {
  if (peers == null) {
    throw new Error("bindAgent peers are not configured");
  }

  return peers.e(() => {
    ((e_e = {
      Dev: `dev`,
      Agent: `agent`,
      Nightly: `nightly`,
      InternalAlpha: `internal-alpha`,
      PublicBeta: `public-beta`,
      Prod: `prod`,
    }),
      (t_e = Object.values(peers.e_e)),
      (n_e = [
        peers.e_e.Dev,
        peers.e_e.Agent,
        peers.e_e.Nightly,
        peers.e_e.InternalAlpha,
      ]),
      (Pl = {
        ...peers.e_e,
        values: peers.t_e,
        help: peers.t_e.join(`, `),
        isValid(e) {
          return peers.t_e.includes(peers.e);
        },
        parse(e) {
          let t = peers.e?.trim();
          return t && peers.Pl.isValid(t) ? t : null;
        },
        isInternal(e) {
          return peers.n_e.includes(peers.e);
        },
        allowDebugMenu(e) {
          return peers.Pl.isInternal(peers.e);
        },
        supportsReactScan(e) {
          return (
            peers.e === peers.Pl.Dev ||
            peers.e === peers.Pl.Agent ||
            peers.e === peers.Pl.Nightly
          );
        },
      }));
  });
}
