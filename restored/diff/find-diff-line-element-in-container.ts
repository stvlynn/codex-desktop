// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xBi`) / export `eU`.

export type FindDiffLineElementInContainerPeers = {
  CBi: (...args: unknown[]) => unknown;
  DBi: (...args: unknown[]) => unknown;
  PBi: (...args: unknown[]) => unknown;
  SBi: (...args: unknown[]) => unknown;
};
let peers: FindDiffLineElementInContainerPeers | null = null;

/** Wire findDiffLineElementInContainer peers once companions land. */
export function setFindDiffLineElementInContainerPeers(
  next: FindDiffLineElementInContainerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eU` / internal `xBi`.
 */
export function findDiffLineElementInContainer({
  container,
  lineNumber,
  side,
  includeShadowRoots,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("findDiffLineElementInContainer peers are not configured");
  }
  let i = peers.PBi(`${lineNumber}`),
    a =
      side === "additions"
        ? "[data-additions]"
        : side === "deletions"
          ? "[data-deletions]"
          : null;
  for (let t of peers.DBi(container, {
    includeShadowRoots,
  })) {
    if (a != null) {
      let e =
        peers.CBi({
          root: t,
          selector: `${a}[data-line="${i}"]`,
        }) ??
        peers.CBi({
          root: t,
          selector: `${a} [data-line="${i}"]`,
        }) ??
        peers.CBi({
          root: t,
          selector: `[data-line="${i}"] ${a}`,
        });
      if (e != null) return e;
      if (peers.SBi(t)) continue;
    }
    let e = peers.CBi({
      root: t,
      selector: `[data-line="${i}"]`,
    });
    if (e != null) return e;
  }
  return null;
}
