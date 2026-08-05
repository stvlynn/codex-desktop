// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `roc`) / export `Tp`.

export type RunImportingStatusTaskPeers = {
  aoc: (...args: unknown[]) => unknown;
};

let peers: RunImportingStatusTaskPeers | null = null;

/** Wire runImportingStatusTask peers once companions land. */
export function setRunImportingStatusTaskPeers(
  next: RunImportingStatusTaskPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Tp` / internal `roc`.
 */
async function runImportingStatusTask(e, t) {
  if (peers == null) {
    throw new Error("runImportingStatusTask peers are not configured");
  }

  e.set(peers.aoc, {
    status: `importing`,
    startedAtMs: Date.now(),
  });
  try {
    (await t(),
      e.set(peers.aoc, {
        status: `success`,
        completedAtMs: Date.now(),
      }));
  } catch (t) {
    throw (
      e.set(peers.aoc, {
        status: `error`,
        completedAtMs: Date.now(),
      }),
      t
    );
  }
}
