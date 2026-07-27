// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Wq`) / export `$D`.

export type BindDiffStatDigitStack0Peers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Jzo: (...args: unknown[]) => unknown;
  Kzo: (...args: unknown[]) => unknown;
  Uq: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  qzo: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindDiffStatDigitStack0Peers | null = null;

/** Wire bindDiffStatDigitStack0 peers once companions land. */
export function setBindDiffStatDigitStack0Peers(next: BindDiffStatDigitStack0Peers): void {
  peers = next;
}

/**
 * Bundle export `$D` / internal `Wq`.
 */
export function bindDiffStatDigitStack0() {
  if (peers == null) {
    throw new Error("bindDiffStatDigitStack0 peers are not configured");
  }

  return peers.e(() => {
    Kzo = peers.c(), peers.sd(), peers.$u(), Uq = peers.J(), qzo = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`], Jzo = {
      0: `diff-stat-digit-stack-0`,
      1: `diff-stat-digit-stack-1`,
      2: `diff-stat-digit-stack-2`,
      3: `diff-stat-digit-stack-3`,
      4: `diff-stat-digit-stack-4`,
      5: `diff-stat-digit-stack-5`,
      6: `diff-stat-digit-stack-6`,
      7: `diff-stat-digit-stack-7`,
      8: `diff-stat-digit-stack-8`,
      9: `diff-stat-digit-stack-9`
    };
  });
}
