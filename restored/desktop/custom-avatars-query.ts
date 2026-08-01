// Restored from ref/webview/assets/custom-avatars-query-BoNA278E.js
// AppScope react-query atoms for custom avatar list + by-id load.
// Stage 3: nvt/tvt→appscope atoms; fdt→QueryStaleTimes; Hut→desktop-services.

import { appScopeAtom } from "../runtime/app-scope-runtime";
import {
  createAppScopeQueryAtom,
  createAppScopeSelectAtom,
} from "../composer/composer-appscope-atoms";
import { QueryStaleTimes } from "../config/query-stale-times";
import { getDesktopServices } from "../desktop/desktop-services";

/** Bundle export `t` — react-query key root for custom avatars. */
export const customAvatarsQueryKey = ["custom-avatars"] as const;

/**
 * Bundle export `r` — list query atom (`nvt` / createAppScopeQueryAtom).
 */
export const customAvatarsQueryAtom = createAppScopeQueryAtom(
  appScopeAtom,
  () => {
    return {
      queryKey: customAvatarsQueryKey,
      queryFn: () => {
        return getDesktopServices()?.customAvatars?.load?.();
      },
      enabled: true,
      networkMode: "always",
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: QueryStaleTimes.INFINITE,
    };
  },
);

/**
 * Bundle export `n` — by-id select atom (`tvt` / createAppScopeSelectAtom).
 */
export const customAvatarByIdQueryAtom = createAppScopeSelectAtom(
  appScopeAtom,
  (avatarId: string) => {
    return {
      queryKey: [...customAvatarsQueryKey, "by-id", avatarId],
      queryFn: () => {
        return getDesktopServices()?.customAvatars?.loadAvatar?.(avatarId);
      },
      enabled: avatarId.startsWith("custom:"),
      gcTime: 0,
      networkMode: "always",
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: QueryStaleTimes.INFINITE,
    };
  },
);

/** Bundle export `i` — Rolldown ESM init retained as no-op. */
export function ensureCustomAvatarsQueryInit(): void {}

// --- missing-relative-export aliases ---
export { customAvatarsQueryKey as customAvatarsQueryI };
export { customAvatarsQueryAtom as customAvatarsQueryN };
