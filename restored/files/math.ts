// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bgn`) / export `h7`.

export type BindMathPeers = {
  Au: (...args: unknown[]) => unknown;
  cgn: (...args: unknown[]) => unknown;
  dgn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fgn: (...args: unknown[]) => unknown;
  lgn: (...args: unknown[]) => unknown;
  mgn: (...args: unknown[]) => unknown;
  pgn: (...args: unknown[]) => unknown;
  ugn: (...args: unknown[]) => unknown;
  ygn: (...args: unknown[]) => unknown;
};

let peers: BindMathPeers | null = null;

/** Wire bindMath peers once companions land. */
export function setBindMathPeers(next: BindMathPeers): void {
  peers = next;
}

/**
 * Bundle export `h7` / internal `bgn`.
 */
export function bindMath() {
  if (peers == null) {
    throw new Error("bindMath peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(),
      peers.lgn(),
      (ygn = {
        breaks: !0,
        gfm: !0,
        tokenizer: {
          del(e) {
            return peers.e.startsWith(`~~`) ? !1 : void 0;
          },
        },
        extensions: [
          ...(peers.cgn.extensions ?? []),
          {
            name: `math`,
            level: `block`,
            start(e) {
              return peers.fgn(peers.e, [`\\[`, `$$`]);
            },
            tokenizer(e) {
              return peers.ugn(peers.e);
            },
          },
          {
            name: `math`,
            level: `inline`,
            start(e) {
              let t = peers.e.indexOf(`\\(`);
              return t === -1 ? void 0 : t;
            },
            tokenizer(e) {
              return peers.dgn(peers.e);
            },
          },
          {
            name: `codexDirective`,
            level: `inline`,
            start(e) {
              return peers.pgn(peers.e);
            },
            tokenizer(e) {
              let t = peers.mgn(peers.e);
              if (t != null)
                return {
                  type: `codexDirective`,
                  raw: t.fullText,
                  name: `codex-file-citation`,
                  attributes: {
                    path: t.path,
                    line_range_start: String(t.lineRangeStart),
                    ...(t.lineRangeEnd == null
                      ? {}
                      : {
                          line_range_end: String(t.lineRangeEnd),
                        }),
                  },
                  block: !1,
                };
            },
          },
        ],
      }));
  });
}
