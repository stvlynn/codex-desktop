// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Shared react-query staleTime / gcTime presets (bundle `Hf` / export `fdt`).

export const QueryStaleTimes = {
  FIVE_SECONDS: 5_000,
  FIFTEEN_SECONDS: 15_000,
  THIRTY_SECONDS: 30_000,
  ONE_MINUTE: 60_000,
  FIVE_MINUTES: 5 * 60_000,
  TEN_MINUTES: 10 * 60_000,
  SIX_HOURS: 360 * 60_000,
  INFINITE: Number.POSITIVE_INFINITY,
} as const;

export type QueryStaleTimeKey = keyof typeof QueryStaleTimes;
