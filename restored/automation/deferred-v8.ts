// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$w`) / export `V8`.

export type DeferredV8Peers = {
  AJn: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  BGn: (...args: unknown[]) => unknown;
  DJn: (...args: unknown[]) => unknown;
  EJn: (...args: unknown[]) => unknown;
  Ex: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Gqn: (...args: unknown[]) => unknown;
  Hen: (...args: unknown[]) => unknown;
  Jat: (...args: unknown[]) => unknown;
  LGn: (...args: unknown[]) => unknown;
  MDt: (...args: unknown[]) => unknown;
  MJn: (...args: unknown[]) => unknown;
  M_: (...args: unknown[]) => unknown;
  Mo: (...args: unknown[]) => unknown;
  N_: (...args: unknown[]) => unknown;
  OJn: (...args: unknown[]) => unknown;
  PGn: (...args: unknown[]) => unknown;
  QKn: (...args: unknown[]) => unknown;
  Qqn: (...args: unknown[]) => unknown;
  SDt: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  WSt: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  Yw: (...args: unknown[]) => unknown;
  cu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eJn: (...args: unknown[]) => unknown;
  jGn: (...args: unknown[]) => unknown;
  jJn: (...args: unknown[]) => unknown;
  kJn: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  pwe: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rg: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  tJn: (...args: unknown[]) => unknown;
  uDt: (...args: unknown[]) => unknown;
  uxt: (...args: unknown[]) => unknown;
  wDt: (...args: unknown[]) => unknown;
  wSt: (...args: unknown[]) => unknown;
};

let peers: DeferredV8Peers | null = null;

/** Wire deferredV8 peers once companions land. */
export function setDeferredV8Peers(next: DeferredV8Peers): void {
  peers = next;
}

/**
 * Bundle export `V8` / internal `$w`.
 */
export function deferredV8() {
  if (peers == null) {
    throw new Error("deferredV8 peers are not configured");
  }

  return peers.e(() => {
    ((EJn = peers.r(peers.cu(), 1)),
      (DJn = peers.r(peers.pwe(), 1)),
      (OJn = peers.r(peers.Mo(), 1)),
      peers.Au(),
      peers.Sl(),
      peers.jGn(),
      peers.PGn(),
      peers.rg(),
      peers.Ex(),
      peers.M_(),
      peers.LGn(),
      peers.Jat(),
      peers.uxt(),
      peers.Hen(),
      peers.Gf(),
      peers.N_(),
      peers.BGn(),
      peers.Yw(),
      peers.QKn(),
      peers.Gqn(),
      peers.WSt(),
      peers.Qqn(),
      peers.uDt(),
      peers.SDt(),
      peers.wDt(),
      peers.MDt(),
      peers.eJn(),
      peers.tJn(),
      peers.wSt(),
      (kJn = peers
        .sl({
          kind: peers.pl([`cron`, `heartbeat`]),
          name: peers.X().trim().min(1),
          rrule: peers.X().trim().min(1),
        })
        .strip()),
      (AJn = peers
        .sl({
          automationId: peers.X().trim().min(1),
          mode: peers.pl([`create`, `update`, `delete`]).optional(),
          deleteStatus: peers.pl([`deleted`, `not_found`]).optional(),
          snapshot: peers.kJn.nullable().optional(),
        })
        .strip()),
      (jJn = /^Reconnecting(?:\.\.\.)?\s+(\d+)\/(\d+)$/),
      (MJn = `realtime-delegation-`));
  });
}
