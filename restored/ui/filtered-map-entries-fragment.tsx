// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `P1i`) / export `mB`.

import type { ReactElement, ReactNode } from "react";
import { Fragment } from "react";

export type FilteredMapEntriesFragmentPeers = {
  mapAtom: unknown;
  useAtomValue: (atom: unknown) => Map<unknown, unknown>;
  filterEntry: (entry: [unknown, unknown]) => boolean;
  mapEntry: (entry: [unknown, unknown]) => unknown;
  renderEntry: (mapped: unknown) => ReactNode;
};

let peers: FilteredMapEntriesFragmentPeers | null = null;

/** Wire filtered map-entry peers once companions land. */
export function setFilteredMapEntriesFragmentPeers(
  next: FilteredMapEntriesFragmentPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mB` / internal `P1i`.
 * Render filtered map entries as a Fragment.
 */
export function FilteredMapEntriesFragment(): ReactElement {
  if (peers == null) {
    throw new Error("FilteredMapEntriesFragment peers are not configured");
  }
  const map = peers.useAtomValue(peers.mapAtom);
  return (
    <Fragment>
      {Array.from(map.entries())
        .filter(peers.filterEntry)
        .map(peers.mapEntry)
        .map(peers.renderEntry)}
    </Fragment>
  );
}
