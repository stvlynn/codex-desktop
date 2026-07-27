// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `u3`) / export `Bu`.

export type BindDeferredBuPeers = {
  AT: (...args: unknown[]) => unknown;
  MM: (...args: unknown[]) => unknown;
  MXc: (...args: unknown[]) => unknown;
  QXc: (...args: unknown[]) => unknown;
  _Qc: (...args: unknown[]) => unknown;
  a3: (...args: unknown[]) => unknown;
  aQc: (...args: unknown[]) => unknown;
  cQc: (...args: unknown[]) => unknown;
  dQc: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fQc: (...args: unknown[]) => unknown;
  gQc: (...args: unknown[]) => unknown;
  hQc: (...args: unknown[]) => unknown;
  iQc: (...args: unknown[]) => unknown;
  l3: (...args: unknown[]) => unknown;
  lQc: (...args: unknown[]) => unknown;
  mQc: (...args: unknown[]) => unknown;
  n3: (...args: unknown[]) => unknown;
  oQc: (...args: unknown[]) => unknown;
  pQc: (...args: unknown[]) => unknown;
  sQc: (...args: unknown[]) => unknown;
  uQc: (...args: unknown[]) => unknown;
  uZc: (...args: unknown[]) => unknown;
  vQc: (...args: unknown[]) => unknown;
  yQc: (...args: unknown[]) => unknown;
};

let peers: BindDeferredBuPeers | null = null;

/** Wire bindDeferredBu peers once companions land. */
export function setBindDeferredBuPeers(next: BindDeferredBuPeers): void {
  peers = next;
}

/**
 * Bundle export `Bu` / internal `u3`.
 */
export function bindDeferredBu() {
  if (peers == null) {
    throw new Error("bindDeferredBu peers are not configured");
  }

  return peers.e(() => {
    (peers.AT(),
      peers.MXc(),
      peers.QXc(),
      peers.MM(),
      peers.uZc(),
      (l3 = Array.from(peers.a3)),
      (iQc = [`MO`, `TU`, `WE`, `TH`, `FR`]),
      (aQc = [`SA`, `SU`]),
      (oQc = `09:00`),
      (sQc = `MO`),
      (cQc = 60),
      (lQc = 1440),
      (uQc = 10080),
      (dQc = new Set([`freq`, `interval`, `dtstart`, `tzid`])),
      (fQc = new Set([...peers.dQc, `byweekday`, `byminute`])),
      (pQc = new Set([...peers.fQc, `byhour`])),
      (mQc = new Set([`freq`, `interval`, `byhour`, `byminute`])),
      (hQc = new Set([...peers.mQc, `byweekday`])),
      (gQc = new Set([`freq`, `interval`, `byminute`, `byweekday`])),
      (_Qc = new Set([...peers.mQc, `bymonthday`])),
      (vQc = new Set([...peers._Qc, `bymonth`])),
      (yQc = {
        MO: peers.n3.MO,
        TU: peers.n3.TU,
        WE: peers.n3.WE,
        TH: peers.n3.TH,
        FR: peers.n3.FR,
        SA: peers.n3.SA,
        SU: peers.n3.SU,
      }));
  });
}
