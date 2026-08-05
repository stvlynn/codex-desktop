// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HIt`) / export `Bit`.

export type BindDeferredUiBitPeers = {
  FIt: (...args: unknown[]) => unknown;
  IIt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiBitPeers | null = null;

/** Wire bindDeferredUiBit peers once companions land. */
export function setBindDeferredUiBitPeers(next: BindDeferredUiBitPeers): void {
  peers = next;
}

/**
 * Bundle export `Bit` / internal `HIt`.
 */
export function bindDeferredUiBit() {
  if (peers == null) {
    throw new Error("bindDeferredUiBit peers are not configured");
  }

  return peers.e(() => {
    (peers.FIt(),
      peers.IIt({
        dateTime: `%x, %X`,
        date: `%-m/%-d/%Y`,
        time: `%-I:%M:%S %p`,
        periods: [`AM`, `PM`],
        days: [
          `Sunday`,
          `Monday`,
          `Tuesday`,
          `Wednesday`,
          `Thursday`,
          `Friday`,
          `Saturday`,
        ],
        shortDays: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
        months: [
          `January`,
          `February`,
          `March`,
          `April`,
          `May`,
          `June`,
          `July`,
          `August`,
          `September`,
          `October`,
          `November`,
          `December`,
        ],
        shortMonths: [
          `Jan`,
          `Feb`,
          `Mar`,
          `Apr`,
          `May`,
          `Jun`,
          `Jul`,
          `Aug`,
          `Sep`,
          `Oct`,
          `Nov`,
          `Dec`,
        ],
      }));
  });
}
