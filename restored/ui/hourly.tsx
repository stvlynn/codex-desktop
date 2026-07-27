// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gCe`) / export `pmt`.

export type BindHourlyPeers = {
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  cCe: (...args: unknown[]) => unknown;
  dCe: (...args: unknown[]) => unknown;
  dl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fCe: (...args: unknown[]) => unknown;
  hCe: (...args: unknown[]) => unknown;
  lCe: (...args: unknown[]) => unknown;
  mCe: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  pCe: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sCe: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  uCe: (...args: unknown[]) => unknown;
};

let peers: BindHourlyPeers | null = null;

/** Wire bindHourly peers once companions land. */
export function setBindHourlyPeers(next: BindHourlyPeers): void {
  peers = next;
}

/**
 * Bundle export `pmt` / internal `gCe`.
 */
export function bindHourly() {
  if (peers == null) {
    throw new Error("bindHourly peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), sCe = [`MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`], new Map(peers.sCe.map((e, t) => [peers.e, t])), peers.sCe.slice(0, 5), cCe = peers.pl(peers.sCe), lCe = peers.X().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/), uCe = peers.ol(peers.cCe).min(1).refine(e => new Set(peers.e).size === peers.e.length), dCe = peers.sl({
      type: peers.ml(`hourly`),
      intervalHours: peers.rl().int().positive(),
      days: peers.uCe.optional()
    }).strict(), fCe = peers.sl({
      type: peers.ml(`daily`),
      time: peers.lCe
    }).strict(), pCe = peers.sl({
      type: peers.ml(`weekdays`),
      time: peers.lCe
    }).strict(), mCe = peers.sl({
      type: peers.ml(`weekly`),
      days: peers.uCe,
      time: peers.lCe
    }).strict(), hCe = peers.dl(`type`, [peers.dCe, peers.fCe, peers.pCe, peers.mCe]), peers.sl({
      name: peers.X().trim().min(1),
      prompt: peers.X().trim().min(1),
      schedule: peers.hCe
    }).strict();
  });
}
