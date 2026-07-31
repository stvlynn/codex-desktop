// Restored from ref/webview/assets/new-chat-suggestion-source-debug-state-D2osy-li.js
// Ambient / new-chat suggestion status atoms + debug override signal.
// Stage 3: $ut/Oft/jft/kft → persisted-atom-store; remaining AppScope aliases mapped.

import { appScopeAtom } from "../runtime/app-scope-runtime";
import {
  createAppScopeDerivedAtom,
  createAppScopeQueryAtom,
} from "../boundaries/composer-appscope-atoms";
import { createPersistedScopeSignal } from "../boundaries/turn-sources-runtime";
import {
  clearPersistedAtomsByPrefix,
  createNamedAppScopeQueryAtom,
  ensurePersistedAtomStoreInit,
  getPersistedAtomItem,
} from "../boundaries/persisted-atom-store";
import { getAnnouncementTtlMs } from "../account/announcement-ttl-ms";
ensurePersistedAtomStoreInit();
export type SuggestionScope = {
  domain?: string | null;
  hostId: string;
  plan?: string | null;
  projectRoot?: string | null;
};
type SuggestionRow = {
  id: string;
  status?: string;
};
type StatusMap = Record<string, Record<string, unknown>>;
function projectKey(projectRoot: string | null | undefined): string {
  return projectRoot ?? "";
}
function statusStorageKey(scope: SuggestionScope): string {
  return scope.domain == null
    ? `${"ambient-suggestions:default-statuses"}:${scope.hostId}:${projectKey(scope.projectRoot)}`
    : `${"ambient-suggestions:default-statuses"}:${scope.hostId}:${projectKey(scope.projectRoot)}:${scope.domain}`;
}
function defaultStatusKey(scope: SuggestionScope): string {
  return `${"ambient-suggestions:default-statuses"}:${scope.hostId}:${projectKey(scope.projectRoot)}`;
}
function defaultStatuses(scope: SuggestionScope): unknown {
  return getPersistedAtomItem(defaultStatusKey(scope), undefined);
}
function pendingSuggestions(
  ids: string[],
  suggestions: SuggestionRow[],
): SuggestionRow[] {
  const pending: SuggestionRow[] = [];
  for (const id of ids) {
    const match = suggestions.find((row) => {
      return row.id === id;
    });
    if (match?.status === "pending") pending.push(match);
    if (pending.length === 3) break;
  }
  return pending;
}

/** Bundle export `n` — debug override for suggestion source. */
export const newChatSuggestionSourceDebugOverride = createPersistedScopeSignal(
  "electron:new-chat-suggestion-source-debug-override",
  null,
);

/** Status map atom (bundle ambient-suggestions:default-statuses). */
export const defaultStatusesAtom = createPersistedScopeSignal(
  "ambient-suggestions:default-statuses",
  {} as StatusMap,
);

/** Bundle export `i` — ambient suggestions query atom. */
export const ambientSuggestionsQueryAtom = createNamedAppScopeQueryAtom(
  appScopeAtom,
  "ambient-suggestions",
  ({ projectRoot }) => {
    return {
      enabled: projectRoot != null,
    };
  },
);

/** Bundle export `o` — ambient suggestions refresh query atom. */
export const ambientSuggestionsRefreshQueryAtom = createNamedAppScopeQueryAtom(
  appScopeAtom,
  "ambient-suggestions-refresh",
  ({ domain, hostId, plan, projectRoot }) => {
    return {
      enabled: projectRoot != null,
      gcTime: getAnnouncementTtlMs(plan as string | null | undefined),
      params: {
        domain,
        hostId,
        projectRoot,
      },
      select: () => {
        return true;
      },
      staleTime: getAnnouncementTtlMs(plan as string | null | undefined),
    };
  },
);

/** Bundle export `r` — null select atom placeholder. */
export const ambientSuggestionsNullSelectAtom = createAppScopeQueryAtom(
  appScopeAtom,
  () => {
    return null;
  },
);

/** Bundle export `c` — derived keys present in the status map. */
export const ambientSuggestionStatusKeysAtom = createAppScopeDerivedAtom(
  appScopeAtom,
  (
    scope: SuggestionScope,
    api: {
      get: (atom: unknown) => unknown;
    },
  ) => {
    const keyed = (api.get(defaultStatusesAtom) as StatusMap | undefined)?.[
      statusStorageKey(scope)
    ];
    const value =
      keyed ?? (scope.domain == null ? defaultStatuses(scope) : null);
    return value == null ? null : Object.keys(value as object);
  },
);

/** Bundle export `a` — whether ambient suggestions have loaded or errored. */
export const ambientSuggestionsSettledAtom = createAppScopeDerivedAtom(
  appScopeAtom,
  (
    _scope: SuggestionScope,
    api: {
      get: (atom: unknown) => unknown;
    },
  ) => {
    const result = api.get(ambientSuggestionsQueryAtom) as {
      data?: unknown;
      isError?: boolean;
    };
    return result?.data != null || result?.isError === true;
  },
);

/** Bundle export `f` — pending suggestion rows for the current scope. */
export const ambientPendingSuggestionsAtom = createAppScopeDerivedAtom(
  appScopeAtom,
  (
    _scope: SuggestionScope,
    api: {
      get: (atom: unknown) => unknown;
    },
  ) => {
    const file = (
      api.get(ambientSuggestionsQueryAtom) as {
        data?: {
          file?: {
            currentSuggestionIds?: string[];
            suggestions?: SuggestionRow[];
          };
        };
      }
    )?.data?.file;
    return pendingSuggestions(
      file?.currentSuggestionIds ?? [],
      file?.suggestions ?? [],
    );
  },
);

/** Bundle export `d` — patch a nested status field for a suggestion scope. */
export function setAmbientSuggestionStatusField(
  store: {
    set: (
      atom: unknown,
      updater: (prev: StatusMap | undefined) => StatusMap,
    ) => void;
  },
  scope: SuggestionScope,
  field: string,
  value: unknown,
): void {
  const key = statusStorageKey(scope);
  store.set(defaultStatusesAtom, (prev) => {
    const map = prev ?? {};
    const current =
      map[key] ??
      ((defaultStatuses(scope) as Record<string, unknown> | undefined) || {});
    if (current[field] === value) return map;
    return {
      ...map,
      [key]: {
        ...current,
        [field]: value,
      },
    };
  });
}

/** Bundle export `l` — clear all ambient suggestion statuses. */
export function clearAmbientSuggestionStatuses(store: {
  set: (atom: unknown, value: StatusMap) => void;
}): void {
  clearPersistedAtomsByPrefix(`${"ambient-suggestions:default-statuses"}:`);
  store.set(defaultStatusesAtom, {});
}

/** Bundle export `u` — update a suggestion status inside the query snapshot. */
export function patchAmbientSuggestionStatus(
  store: {
    query: {
      snapshot: (
        atom: unknown,
        scope: SuggestionScope,
      ) => {
        setData: (
          updater: (
            prev: {
              file?: {
                suggestions?: SuggestionRow[];
              };
            } | null,
          ) => unknown,
        ) => void;
      };
    };
  },
  scope: SuggestionScope,
  suggestionId: string,
  status: string,
): void {
  store.query.snapshot(ambientSuggestionsQueryAtom, scope).setData((prev) => {
    return prev == null
      ? prev
      : {
          file: {
            ...prev.file,
            suggestions: (prev.file?.suggestions ?? []).map((item) => {
              return item.id === suggestionId
                ? {
                    ...item,
                    status,
                  }
                : item;
            }),
          },
        };
  });
}

/** Bundle export `s` — Rolldown ESM init retained as no-op. */
export function ensureNewChatSuggestionSourceDebugStateInit(): void {}

/** Bundle export `t` — debug-override init retained as no-op. */
export function ensureNewChatSuggestionSourceDebugOverrideInit(): void {}
