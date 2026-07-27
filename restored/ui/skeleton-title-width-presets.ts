// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `i5s`) / export `bm`.

export type SkeletonTitleWidthPresetsPeers = {
  J: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  m1: (...args: unknown[]) => unknown;
  n5s: (...args: unknown[]) => unknown;
  r5s: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: SkeletonTitleWidthPresetsPeers | null = null;

/** Wire skeletonTitleWidthPresets peers once companions land. */
export function setSkeletonTitleWidthPresetsPeers(next: SkeletonTitleWidthPresetsPeers): void {
  peers = next;
}

/**
 * Bundle export `bm` / internal `i5s`.
 */
export function skeletonTitleWidthPresets() {
  if (peers == null) {
    throw new Error("skeletonTitleWidthPresets peers are not configured");
  }

  return peers.e(() => {
    n5s = peers.c(), peers.sd(), m1 = peers.J(), r5s = [{
      key: `first`,
      secondLineWidth: `w-1/2`,
      titleWidth: `w-2/3`
    }, {
      key: `second`,
      secondLineWidth: `w-2/5`,
      titleWidth: `w-1/2`
    }, {
      key: `third`,
      secondLineWidth: `w-3/5`,
      titleWidth: `w-3/4`
    }, {
      key: `fourth`,
      secondLineWidth: `w-1/3`,
      titleWidth: `w-5/12`
    }, {
      key: `fifth`,
      secondLineWidth: `w-1/2`,
      titleWidth: `w-7/12`
    }];
  });
}
