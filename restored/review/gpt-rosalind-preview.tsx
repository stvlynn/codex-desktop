// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_me`) / export `Ugt`.

export type BindBindGptRosalindPreviewPeers = {
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  dme: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fme: (...args: unknown[]) => unknown;
  gme: (...args: unknown[]) => unknown;
  hme: (...args: unknown[]) => unknown;
  mme: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  pme: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: BindBindGptRosalindPreviewPeers | null = null;

/** Wire bindBindGptRosalindPreview peers once companions land. */
export function setBindBindGptRosalindPreviewPeers(
  next: BindBindGptRosalindPreviewPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ugt` / internal `_me`.
 */
export function bindBindGptRosalindPreview() {
  if (peers == null) {
    throw new Error("bindBindGptRosalindPreview peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      (dme = peers.pl([`pending`, `accepted`, `dismissed`])),
      peers.pl([`science`]).nullable(),
      (fme = peers.sl({
        id: peers.X().min(1),
        title: peers.X(),
        description: peers.X(),
        prompt: peers.X(),
        appIds: peers.ol(peers.X()),
        status: peers.dme,
        createdAtMs: peers.rl(),
        updatedAtMs: peers.rl(),
      })),
      peers.sl({
        projectRoot: peers.X().default(``),
        generatedAtMs: peers.rl().nullable(),
        currentSuggestionIds: peers.ol(peers.X()),
        suggestions: peers.ol(peers.fme),
      }),
      (pme = 300 * 6e4),
      (mme = 1440 * 6e4),
      (hme = /rosalind/i),
      (gme = new Set([
        `gpt-rosalind-preview`,
        `gpt-rosalind-5-5`,
        `heisenberg`,
      ])));
  });
}
