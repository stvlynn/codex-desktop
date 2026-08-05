// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Iit`) / export `jct`.

export type TranscriptionPeers = {
  $nt: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Fit: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Gm: (...args: unknown[]) => unknown;
  Grt: (...args: unknown[]) => unknown;
  Kh: (...args: unknown[]) => unknown;
  Nit: (...args: unknown[]) => unknown;
  Pit: (...args: unknown[]) => unknown;
  Qrt: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  Zrt: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kit: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  srt: (...args: unknown[]) => unknown;
  ttt: (...args: unknown[]) => unknown;
};

let peers: TranscriptionPeers | null = null;

/** Wire transcription peers once companions land. */
export function setTranscriptionPeers(next: TranscriptionPeers): void {
  peers = next;
}

/**
 * Bundle export `jct` / internal `Iit`.
 */
export function transcription() {
  if (peers == null) {
    throw new Error("transcription peers are not configured");
  }

  return peers.e(() => {
    ((Nit = peers.c()),
      (Kh = peers.r(peers.o(), 1)),
      peers._p(),
      peers.ttt(),
      peers.Fh(),
      peers.$nt(),
      peers.Gf(),
      peers.srt(),
      peers.Grt(),
      peers.Zrt(),
      peers.Gm(),
      peers.Yf(),
      peers.Qrt(),
      peers.kit(),
      (Pit = 250),
      (Fit = 595e3));
  });
}
