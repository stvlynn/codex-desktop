// Restored from ref/webview/assets/use-home-directory-CROe_CvY.js
// Thin AppScope query wrapper for a host's home directory path.
// Stage 3: I_t→useAppScopeAtomValue; Q4→homeDirectoryQueryAtom; e3 init; Ivt dropped.

import { useAppScopeAtomValue } from "../boundaries/composer-appscope-atoms";
import {
  ensureHomeDirectoryQueriesInit,
  homeDirectoryQueryAtom,
} from "./home-directory-query";

ensureHomeDirectoryQueriesInit();

type HomeDirectoryQueryResult = {
  data?: { homeDirectory?: string | null } | null;
};

/**
 * Bundle export `r` — query atom value for `{ hostId }` → home directory payload.
 */
export function useHomeDirectoryQuery(
  hostId: string | null | undefined,
): HomeDirectoryQueryResult {
  const params =
    hostId == null ? undefined : ({ hostId } as { hostId: string });
  return useAppScopeAtomValue(
    homeDirectoryQueryAtom,
    params,
  ) as HomeDirectoryQueryResult;
}

/**
 * Bundle export `n` — convenience accessor for `.data?.homeDirectory`.
 */
export function useHomeDirectory(
  hostId: string | null | undefined,
): string | null | undefined {
  return useHomeDirectoryQuery(hostId).data?.homeDirectory;
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureUseHomeDirectoryInit(): void {}
