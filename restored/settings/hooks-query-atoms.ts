// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — invalidateHooksQueries via extractFn(internal `W4i`) / export `kz`.
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { BindableAtom } from "../boundaries/composer-appscope-atoms";
function placeholder(brand: string): BindableAtom {
  return {
    __brand: brand,
    get() {
      throw new Error(`AppScope atom "${brand}" is not configured`);
    },
    set() {
      throw new Error(`AppScope atom "${brand}" is not configured`);
    },
  };
}

/** Bundle `J4i` / export `Az`. */
export let writeHooksStateMutationAtom: BindableAtom = placeholder(
  "writeHooksStateMutationAtom",
);

/** Bundle `q4i` / export `Dz`. */
export let listHooksForHostQueryAtom: BindableAtom = placeholder(
  "listHooksForHostQueryAtom",
);

/** Bundle `Z8n` / export `X4`. */
export let localProjectRootsAtom: BindableAtom = placeholder(
  "localProjectRootsAtom",
);

/** Bundle `Q8n` / export `a3`. */
export let workspaceRootOptionsQueryAtom: BindableAtom = placeholder(
  "workspaceRootOptionsQueryAtom",
);

/** Bundle `r5n` / export `r3`. */
export let selectedRemoteProjectAtom: BindableAtom = placeholder(
  "selectedRemoteProjectAtom",
);
export function bindHooksQueryAtoms(next: {
  writeHooksStateMutationAtom?: BindableAtom;
  listHooksForHostQueryAtom?: BindableAtom;
  localProjectRootsAtom?: BindableAtom;
  workspaceRootOptionsQueryAtom?: BindableAtom;
  selectedRemoteProjectAtom?: BindableAtom;
}): void {
  if (next.writeHooksStateMutationAtom) {
    writeHooksStateMutationAtom = next.writeHooksStateMutationAtom;
  }
  if (next.listHooksForHostQueryAtom) {
    listHooksForHostQueryAtom = next.listHooksForHostQueryAtom;
  }
  if (next.localProjectRootsAtom) {
    localProjectRootsAtom = next.localProjectRootsAtom;
  }
  if (next.workspaceRootOptionsQueryAtom) {
    workspaceRootOptionsQueryAtom = next.workspaceRootOptionsQueryAtom;
  }
  if (next.selectedRemoteProjectAtom) {
    selectedRemoteProjectAtom = next.selectedRemoteProjectAtom;
  }
}
export type InvalidateHooksQueriesPeers = {
  hooksQueryKeyPrefix: readonly unknown[];
  broadcastInvalidation: (key: readonly unknown[]) => void;
};
let invalidatePeers: InvalidateHooksQueriesPeers | null = null;

/** Wire hooks query invalidation peers once companions land. */
export function setInvalidateHooksQueriesPeers(
  next: InvalidateHooksQueriesPeers,
): void {
  invalidatePeers = next;
}

/**
 * Bundle `W4i` / export `kz`.
 * Invalidate hooks queries for a host (optional broadcast).
 */
export async function invalidateHooksQueries(
  queryClient: {
    invalidateQueries: (opts: {
      predicate: (query: { queryKey: unknown[] }) => boolean;
      refetchType?: string;
    }) => Promise<unknown>;
  },
  hostId: string,
  options: {
    broadcast?: boolean;
    refetchType?: string;
  } = {},
): Promise<void> {
  if (invalidatePeers == null) {
    throw new Error("InvalidateHooksQueries peers are not configured");
  }
  const { broadcast = false, refetchType } = options;
  await queryClient.invalidateQueries({
    predicate: ({ queryKey }) => {
      return (
        queryKey[0] === invalidatePeers!.hooksQueryKeyPrefix[0] &&
        queryKey[1] === hostId
      );
    },
    refetchType,
  });
  if (broadcast) {
    invalidatePeers.broadcastInvalidation(invalidatePeers.hooksQueryKeyPrefix);
  }
}

/** Bundle export `Oz` / init `Y4i` — Rolldown ESM init retained as no-op. */
export function ensureHooksQueriesInit(): void {}

// --- missing-relative-export aliases ---
export { writeHooksStateMutationAtom as WriteHooksStateMutationAtom };
