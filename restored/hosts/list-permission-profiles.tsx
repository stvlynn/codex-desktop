// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kN`) / export `Iq`.

export type BindListPermissionProfilesPeers = {
  DD: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  I2r: (...args: unknown[]) => unknown;
  Kg: (...args: unknown[]) => unknown;
  L2r: (...args: unknown[]) => unknown;
  R2r: (...args: unknown[]) => unknown;
  VM: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Ym: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fr: (...args: unknown[]) => unknown;
  k2r: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  vM: (...args: unknown[]) => unknown;
};

let peers: BindListPermissionProfilesPeers | null = null;

/** Wire bindListPermissionProfiles peers once companions land. */
export function setBindListPermissionProfilesPeers(next: BindListPermissionProfilesPeers): void {
  peers = next;
}

/**
 * Bundle export `Iq` / internal `kN`.
 */
export function bindListPermissionProfiles() {
  if (peers == null) {
    throw new Error("bindListPermissionProfiles peers are not configured");
  }

  return peers.e(() => {
    L2r = peers.c(), peers.fr(), peers.Ho(), R2r = peers.r(peers.o(), 1), peers.vM(), peers.DD(), peers.Vf(), peers.Kg(), peers.Ym(), peers.k2r(), peers.VM(), peers.I2r(), peers.Gf();
  });
}
