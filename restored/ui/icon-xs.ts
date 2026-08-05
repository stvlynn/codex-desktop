// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fZ`) / export `SS`.

export type IconXsPeers = {
  Aus: (...args: unknown[]) => unknown;
  Cus: (...args: unknown[]) => unknown;
  Eus: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kus: (...args: unknown[]) => unknown;
  uZ: (...args: unknown[]) => unknown;
};

let peers: IconXsPeers | null = null;

/** Wire iconXs peers once companions land. */
export function setIconXsPeers(next: IconXsPeers): void {
  peers = next;
}

/**
 * Bundle export `SS` / internal `fZ`.
 */
export function iconXs() {
  if (peers == null) {
    throw new Error("iconXs peers are not configured");
  }

  return peers.e(() => {
    ((kus = peers.c()),
      peers.Ho(),
      peers.Cus(),
      peers.Eus(),
      peers.uZ(),
      (Aus = peers.J()));
  });
}
