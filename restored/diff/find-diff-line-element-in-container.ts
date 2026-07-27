// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `xBi`) / export `eU`.

export type FindDiffLineElementInContainerArgs = {
  container: ParentNode;
  lineNumber: number | string;
  side?: "additions" | "deletions" | string;
  includeShadowRoots?: boolean;
};

export type FindDiffLineElementInContainerPeers = {
  lineAttr: (line: string) => string;
  walkRoots: (
    container: ParentNode,
    opts: { includeShadowRoots?: boolean },
  ) => Iterable<ParentNode>;
  queryInRoot: (opts: { root: ParentNode; selector: string }) => Element | null;
};

let peers: FindDiffLineElementInContainerPeers | null = null;

/** Wire diff line element lookup peers once companions land. */
export function setFindDiffLineElementInContainerPeers(
  next: FindDiffLineElementInContainerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eU` / internal `xBi`.
 * Find a diff line element inside a container (optional shadow roots).
 */
export function findDiffLineElementInContainer(
  args: FindDiffLineElementInContainerArgs,
): Element | null {
  if (peers == null) {
    throw new Error("FindDiffLineElementInContainer peers are not configured");
  }
  const { container, lineNumber, side, includeShadowRoots } = args;
  const lineSel = peers.lineAttr(`${lineNumber}`);
  const sideSel =
    side === "additions"
      ? "[data-additions]"
      : side === "deletions"
        ? "[data-deletions]"
        : null;
  for (const root of peers.walkRoots(container, { includeShadowRoots })) {
    if (sideSel != null) {
      const el = peers.queryInRoot({
        root,
        selector: `${sideSel}${lineSel}`,
      });
      if (el) return el;
    } else {
      const el = peers.queryInRoot({ root, selector: lineSel });
      if (el) return el;
    }
  }
  return null;
}
