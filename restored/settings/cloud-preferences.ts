// Restored from ref/webview/assets/cloud-preferences-B2FohNg2.js
// Cloud user preference queries + filename-pattern validators.
// Stage 3: _vt→useMutation; Vct/zct→cloud-api-client; Avt/Tvt/fdt already mapped.

import { useQueryClient } from "../hooks/use-query-client";
import { useQuery } from "../hooks/use-query";
import { useMutation } from "../hooks/use-mutation";
import { QueryStaleTimes } from "../config/query-stale-times";
import { cloudApiClient, ensureCloudApiClientInit } from "./cloud-api-client";

ensureCloudApiClientInit();

const USER_PREFERENCES_KEY = ["cloud-user-preferences"] as const;
const PREFERENCES_CONFIG_KEY = ["cloud-preferences-config"] as const;

export type FilenamePatternToken = {
  value: string;
  example: string;
  char_count: number;
};

export type FilenamePatternError =
  | "bracket-mismatch"
  | "missing-pattern"
  | "invalid-pattern"
  | "too-long"
  | "leading-slash"
  | "invalid-characters"
  | null;

/** Bundle export `a` — query `/wham/settings/user`. */
export function useCloudUserPreferences() {
  return useQuery({
    queryKey: USER_PREFERENCES_KEY,
    queryFn: () => cloudApiClient.safeGet("/wham/settings/user"),
    retry: false,
    staleTime: QueryStaleTimes.FIVE_MINUTES,
  });
}

/** Bundle export `i` — query `/wham/settings/configs/user-preferences`. */
export function useCloudPreferencesConfig() {
  return useQuery({
    queryKey: PREFERENCES_CONFIG_KEY,
    queryFn: () =>
      cloudApiClient.safeGet("/wham/settings/configs/user-preferences"),
    retry: false,
    staleTime: QueryStaleTimes.FIVE_MINUTES,
  });
}

/** Bundle export `o` — mutate `/wham/settings/user` and update the cache. */
export function useUpdateCloudUserPreferences() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: unknown) =>
      cloudApiClient.safePatch("/wham/settings/user", { requestBody: body }),
    onSuccess: (data: unknown) => {
      queryClient.setQueryData(USER_PREFERENCES_KEY, data);
    },
  });
}

function applyPatternTokens(
  pattern: string,
  tokens: FilenamePatternToken[],
  replace: (token: FilenamePatternToken) => string,
): string {
  let result = pattern;
  for (const token of tokens) {
    result = result.replaceAll(token.value, replace(token));
  }
  return result;
}

/**
 * Bundle export `n` — validate a cloud filename pattern against tokens / limits.
 */
export function validateCloudFilenamePattern(
  pattern: string,
  maxLength: number,
  tokens: FilenamePatternToken[],
): FilenamePatternError {
  const open = (pattern.match(/{/g) ?? []).length;
  if (open !== (pattern.match(/}/g) ?? []).length) return "bracket-mismatch";
  if (open === 0) return "missing-pattern";
  const allowed = tokens.map((token) => token.value);
  if ((pattern.match(/{([^}]+)}/g) ?? []).some((m) => !allowed.includes(m))) {
    return "invalid-pattern";
  }
  const expanded = applyPatternTokens(pattern, tokens, (token) =>
    "x".repeat(token.char_count),
  );
  if (expanded.length > maxLength) return "too-long";
  if (expanded.startsWith("/")) return "leading-slash";
  return /^[a-zA-Z0-9./\-_]+$/.test(expanded) ? null : "invalid-characters";
}

/** Bundle export `t` — expand a pattern with token examples for preview. */
export function previewCloudFilenamePattern(
  pattern: string,
  tokens: FilenamePatternToken[],
): string {
  return applyPatternTokens(pattern, tokens, (token) => token.example);
}

/** Bundle export `r` — Rolldown ESM init retained as no-op. */
export function ensureCloudPreferencesInit(): void {}
