// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TDo`) / export `uk`.

export type BindBindFile2Peers = {
  Au: (...args: unknown[]) => unknown;
  BKn: (...args: unknown[]) => unknown;
  CDo: (...args: unknown[]) => unknown;
  KEo: (...args: unknown[]) => unknown;
  Uat: (...args: unknown[]) => unknown;
  aDo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  oKn: (...args: unknown[]) => unknown;
  tGt: (...args: unknown[]) => unknown;
  wDo: (...args: unknown[]) => unknown;
  yS: (...args: unknown[]) => unknown;
};

let peers: BindBindFile2Peers | null = null;

/** Wire bindBindFile2 peers once companions land. */
export function setBindBindFile2Peers(next: BindBindFile2Peers): void {
  peers = next;
}

/**
 * Bundle export `uk` / internal `TDo`.
 */
export function bindBindFile2() {
  if (peers == null) {
    throw new Error("bindBindFile2 peers are not configured");
  }

  return peers.e(() => {
    (peers.tGt(),
      peers.Au(),
      peers.Uat(),
      peers.yS(),
      peers.BKn(),
      peers.oKn(),
      peers.KEo(),
      peers.aDo(),
      (CDo = [`provided`, `read`, `created`, `updated`]),
      (wDo = /h\t*t\t*t\t*p|www\./iu));
  });
}
