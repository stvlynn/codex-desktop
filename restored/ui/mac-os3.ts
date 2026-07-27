// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `W5n`) / export `O4`.

export type MacOS3Peers = {
  DD: (...args: unknown[]) => unknown;
  Dh: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  Gw: (...args: unknown[]) => unknown;
  H5n: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IE: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PE: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  SD: (...args: unknown[]) => unknown;
  U5n: (...args: unknown[]) => unknown;
  Ww: (...args: unknown[]) => unknown;
  allowAppshots: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
};

let peers: MacOS3Peers | null = null;

/** Wire macOS3 peers once companions land. */
export function setMacOS3Peers(next: MacOS3Peers): void {
  peers = next;
}

/**
 * Bundle export `O4` / internal `W5n`.
 */
export function macOS3() {
  if (peers == null) {
    throw new Error("macOS3 peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.DD(), peers.Gw(), peers.IE(), peers.ed(), peers.Dh(), H5n = peers.Oa(peers.Q, (e, {
      get: t
    }) => {
      if (t(peers.Ww) !== `macOS` || !t(peers.Eh, `1304276663`)) return !1;
      let {
        data: n
      } = t(peers.PE, {
        hostId: peers.e
      });
      return n != null && n.requirements?.allowAppshots !== !1;
    }), U5n = peers.Ma(peers.Q, ({
      get: e
    }) => peers.e(peers.H5n, peers.e(peers.SD)));
  });
}
