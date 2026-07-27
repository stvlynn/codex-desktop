// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dql`) / export `Pa`.

export type TextTokenDescriptionForegroundPeers = {
  $m: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  Eql: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Nw: (...args: unknown[]) => unknown;
  Sql: (...args: unknown[]) => unknown;
  Tql: (...args: unknown[]) => unknown;
  V5: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dE: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fE: (...args: unknown[]) => unknown;
  i$e: (...args: unknown[]) => unknown;
  mfs: (...args: unknown[]) => unknown;
  r$e: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  wql: (...args: unknown[]) => unknown;
};
let peers: TextTokenDescriptionForegroundPeers | null = null;

/** Wire textTokenDescriptionForeground peers once companions land. */
export function setTextTokenDescriptionForegroundPeers(
  next: TextTokenDescriptionForegroundPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Pa` / internal `Dql`.
 */
export function textTokenDescriptionForeground() {
  if (peers == null) {
    throw new Error("textTokenDescriptionForeground peers are not configured");
  }
  return peers.e(() => {
    const Re = peers.r$e;
    const DE = peers.dE;
    wql = peers.c();
    peers.sd();
    peers.$u();
    peers.Nw();
    peers.mfs();
    peers.Sql();
    peers.$m();
    peers.fE();
    peers.i$e();
    peers.K_();
    V5 = peers.J();
    Tql = {
      connecting: <Re />,
      restarting: <Re />,
      connected: (
        <span
          aria-hidden={true}
          className="block size-2 rounded-full bg-green-500"
        />
      ),
      disconnected: (
        <span
          aria-hidden={true}
          className="block size-2 rounded-full bg-gray-400"
        />
      ),
      error: <DE />,
    };
    Eql = {
      connecting: {
        dotClassName: "text-token-description-foreground",
        iconClassName: "motion-safe:animate-spin",
      },
      restarting: {
        dotClassName: "text-token-charts-blue",
        iconClassName: "motion-safe:animate-spin text-token-charts-blue",
      },
      connected: {
        dotClassName: "text-token-charts-green",
      },
      disconnected: {
        dotClassName: "text-token-description-foreground",
      },
      error: {
        dotClassName: "text-token-charts-red",
        iconClassName: "text-token-charts-red",
      },
    };
  });
}
