// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wI`) / export `bW`.

export type ParseDiffPatchIntoFileEntriesPeers = {
  QPi: (...args: unknown[]) => unknown;
  TI: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  additionStart: (...args: unknown[]) => unknown;
  cFi: (...args: unknown[]) => unknown;
  dFi: (...args: unknown[]) => unknown;
  deletionStart: (...args: unknown[]) => unknown;
  eFi: (...args: unknown[]) => unknown;
  get: (...args: unknown[]) => unknown;
  lFi: (...args: unknown[]) => unknown;
  nFi: (...args: unknown[]) => unknown;
  oFi: (...args: unknown[]) => unknown;
  pAi: (...args: unknown[]) => unknown;
  sFi: (...args: unknown[]) => unknown;
  tFi: (...args: unknown[]) => unknown;
  uFi: (...args: unknown[]) => unknown;
};
let peers: ParseDiffPatchIntoFileEntriesPeers | null = null;

/** Wire parseDiffPatchIntoFileEntries peers once companions land. */
export function setParseDiffPatchIntoFileEntriesPeers(
  next: ParseDiffPatchIntoFileEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bW` / internal `wI`.
 */
export function parseDiffPatchIntoFileEntries(
  e: unknown,
  { maxFiles }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("parseDiffPatchIntoFileEntries peers are not configured");
  }
  let n = e.length <= peers.lFi,
    r = `${maxFiles ?? "all"}`,
    i = n ? peers.TI.get(e) : undefined,
    a = i?.get(r);
  if ((i && (peers.TI.delete(e), peers.TI.set(e, i)), a)) return a;
  let o = e.includes("GIT binary patch") ? peers.uFi(e) : new Set(),
    s = e.includes("160000") ? peers.dFi(e) : new Set(),
    c,
    l = peers.tFi(e);
  try {
    c = peers.pAi(l.diff, peers.QPi(e));
  } catch (e) {
    peers.Wf.error("Failed to parse diff", {
      safe: {},
      sensitive: {
        error: e,
      },
    });
    c = [];
  }
  let u = [],
    d = 0;
  for (let e of c)
    for (let n of e.files) {
      if (maxFiles !== undefined && u.length >= maxFiles) return u;
      try {
        let e = peers.nFi(n, l.pathsByFileIndex.get(d)),
          { oldPath, newPath } = peers.eFi(e),
          i = peers.oFi(e),
          a = e.hunks,
          c = peers.sFi.default(a, (e) => {
            return e.additionLines;
          }),
          f = peers.sFi.default(a, (e) => {
            return e.deletionLines;
          }),
          p = a.find((item) => {
            return item.additionCount > 0;
          })?.additionStart,
          m = a.find((item) => {
            return item.deletionLines > 0;
          })?.deletionStart;
        u.push({
          metadata: e,
          oldPath,
          newPath,
          additions: c,
          deletions: f,
          get changedBytes() {
            return i().changedBytes;
          },
          get maxChangedLineBytes() {
            return i().maxChangedLineBytes;
          },
          firstAdditionLine: p,
          firstDeletionLine: m,
          isBinary: o.has(d),
          isGitlink: s.has(d),
        });
      } catch (e) {
        peers.Wf.error("Failed to parse diff", {
          safe: {},
          sensitive: {
            name: n.name,
            error: e,
          },
        });
      }
      d += 1;
    }
  if (n) {
    let t = i ?? new Map();
    if (
      (t.set(r, u),
      peers.TI.delete(e),
      peers.TI.set(e, t),
      peers.TI.size > peers.cFi)
    ) {
      let e = peers.TI.keys().next().value;
      e && peers.TI.delete(e);
    }
  }
  return u;
}
