// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `m2n`) / export `i6`.

export type BindBindDocxPeers = {
  Au: (...args: unknown[]) => unknown;
  HT: (...args: unknown[]) => unknown;
  Il: (...args: unknown[]) => unknown;
  N_: (...args: unknown[]) => unknown;
  XUn: (...args: unknown[]) => unknown;
  c2n: (...args: unknown[]) => unknown;
  d2n: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  f2n: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  l2n: (...args: unknown[]) => unknown;
  o2n: (...args: unknown[]) => unknown;
  p0n: (...args: unknown[]) => unknown;
  p2n: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  s2n: (...args: unknown[]) => unknown;
  u0n: (...args: unknown[]) => unknown;
  u2n: (...args: unknown[]) => unknown;
  w0n: (...args: unknown[]) => unknown;
  x0n: (...args: unknown[]) => unknown;
};

let peers: BindBindDocxPeers | null = null;

/** Wire bindBindDocx peers once companions land. */
export function setBindBindDocxPeers(next: BindBindDocxPeers): void {
  peers = next;
}

/**
 * Bundle export `i6` / internal `m2n`.
 */
export function bindBindDocx() {
  if (peers == null) {
    throw new Error("bindBindDocx peers are not configured");
  }

  return peers.e(() => {
    ((o2n = peers.r(peers.Il(), 1)),
      peers.Au(),
      peers.XUn(),
      peers.HT(),
      peers.jf(),
      peers.N_(),
      peers.u0n(),
      peers.p0n(),
      peers.x0n(),
      peers.w0n(),
      (s2n = new Set([
        `avif`,
        `csv`,
        `doc`,
        `docx`,
        `gif`,
        `jpeg`,
        `jpg`,
        `pdf`,
        `png`,
        `ppt`,
        `pptx`,
        `tsv`,
        `webp`,
        `xls`,
        `xlsm`,
        `xlsx`,
      ])),
      (c2n = new Set([...peers.s2n, `md`, `mdx`])),
      (l2n = [`work`, `.codex_scratch`]),
      (u2n = /\bhttps?:\/\/[^\s<>)"'`]+/gi),
      (d2n = /[.,;!?]+$/u),
      (f2n = /[()[\]]/u),
      (p2n = new Set(` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`)));
  });
}
