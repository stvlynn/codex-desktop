// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `MGs` / export `t_` (+ companions `Vhs` / `NGs`).

const FIVE_HOUR_WINDOW_MINS = 300;
const WEEKLY_WINDOW_MINS = 7 * 1440;
const MONTHLY_WINDOW_MINS = 30 * 1440;

export type RateLimitBucket = {
  windowDurationMins?: number | null;
};

/** True when a rate-limit bucket has a positive window. */
export function hasPositiveRateLimitWindow(bucket: RateLimitBucket | null | undefined): boolean {
  return bucket != null && (bucket.windowDurationMins ?? 0) > 0;
}

/** Stable key for a rate-limit window bucket. */
export function rateLimitBucketKey(bucket: RateLimitBucket, role: string, index: number): string {
  const minutes = bucket.windowDurationMins ?? 0;
  if (Math.abs(minutes - FIVE_HOUR_WINDOW_MINS) <= 1) return "five-hour";
  if (Math.abs(minutes - WEEKLY_WINDOW_MINS) <= 1) return "weekly";
  if (Math.abs(minutes - MONTHLY_WINDOW_MINS) <= 1) return "monthly";
  return `${role}-${index}-${minutes}`;
}

export type RateLimitWindowRow = {
  key: string;
  bucket: RateLimitBucket;
  limitName: unknown;
};

/** Primary/secondary rate-limit window rows for a usage entry. */
export function rateLimitWindowRows(args: {
  entry: {
    limitName: unknown;
    snapshot: {
      primary?: RateLimitBucket | null;
      secondary?: RateLimitBucket | null;
    };
  };
  keyPrefix: string;
}): RateLimitWindowRow[] {
  const { entry, keyPrefix } = args;
  const ordered = [
    { bucket: entry.snapshot.primary, role: "primary" },
    { bucket: entry.snapshot.secondary, role: "secondary" },
  ]
    .filter((row) => hasPositiveRateLimitWindow(row.bucket))
    .sort(
      (left, right) =>
        (left.bucket!.windowDurationMins ?? 0) -
        (right.bucket!.windowDurationMins ?? 0),
    );
  if (ordered.length === 0) return [];
  const seen = new Map<string, number>();
  return ordered.map(({ bucket, role }, index) => {
    const baseKey = rateLimitBucketKey(bucket!, role, index);
    const count = seen.get(baseKey) ?? 0;
    seen.set(baseKey, count + 1);
    return {
      key: `${keyPrefix}-${count === 0 ? baseKey : `${baseKey}-${role}`}`,
      bucket: bucket!,
      limitName: entry.limitName,
    };
  });
}
