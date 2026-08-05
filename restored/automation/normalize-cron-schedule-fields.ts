// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xZc`) / export `Uu`.

export type NormalizeCronScheduleFieldsPeers = {
  MZc: (...args: unknown[]) => unknown;
  NZc: (...args: unknown[]) => unknown;
  XZc: (...args: unknown[]) => unknown;
  YZc: (...args: unknown[]) => unknown;
  _Qc: (...args: unknown[]) => unknown;
  c3: (...args: unknown[]) => unknown;
  gQc: (...args: unknown[]) => unknown;
  hQc: (...args: unknown[]) => unknown;
  i3: (...args: unknown[]) => unknown;
  l3: (...args: unknown[]) => unknown;
  mQc: (...args: unknown[]) => unknown;
  n3: (...args: unknown[]) => unknown;
  qZc: (...args: unknown[]) => unknown;
  s3: (...args: unknown[]) => unknown;
  vQc: (...args: unknown[]) => unknown;
};

let peers: NormalizeCronScheduleFieldsPeers | null = null;

/** Wire normalizeCronScheduleFields peers once companions land. */
export function setNormalizeCronScheduleFieldsPeers(
  next: NormalizeCronScheduleFieldsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Uu` / internal `xZc`.
 */
export function normalizeCronScheduleFields(e: unknown) {
  if (peers == null) {
    throw new Error("normalizeCronScheduleFields peers are not configured");
  }

  let t = peers.MZc(e);
  if (t == null || t.hasMultipleTimeValues) return null;
  let n = {
    interval: Math.max(1, Math.round(t.interval)),
    weekdays: t.weekdays,
    month: 1,
    monthDays: [1],
    time: t.time,
    minute: t.minute ?? 0,
  };
  switch (t.freq) {
    case peers.n3.HOURLY:
      return peers.s3(t, peers.gQc) &&
        peers.c3(t.origOptions.byminute) != null &&
        peers.i3(t.weekdays, peers.l3)
        ? {
            ...n,
            frequency: `hourly`,
          }
        : null;
    case peers.n3.DAILY:
      return peers.s3(t, peers.mQc) && peers.NZc(t)
        ? {
            ...n,
            frequency: `daily`,
          }
        : null;
    case peers.n3.WEEKLY:
      return peers.s3(t, peers.hQc) &&
        peers.NZc(t) &&
        t.origOptions.byweekday != null &&
        !peers.XZc(t.origOptions.byweekday)
        ? {
            ...n,
            frequency: `weekly`,
          }
        : null;
    case peers.n3.MONTHLY: {
      let e = peers.qZc(t.origOptions.bymonthday);
      return peers.s3(t, peers._Qc) && peers.NZc(t) && peers.YZc(e)
        ? {
            ...n,
            frequency: `monthly`,
            monthDays: e,
          }
        : null;
    }
    case peers.n3.YEARLY: {
      let e = peers.qZc(t.origOptions.bymonth),
        r = peers.qZc(t.origOptions.bymonthday);
      return peers.s3(t, peers.vQc) &&
        peers.NZc(t) &&
        e.length === 1 &&
        e[0] != null &&
        Number.isInteger(e[0]) &&
        e[0] >= 1 &&
        e[0] <= 12 &&
        peers.YZc(r)
        ? {
            ...n,
            frequency: `yearly`,
            month: e[0],
            monthDays: r,
          }
        : null;
    }
    case peers.n3.SECONDLY:
    case peers.n3.MINUTELY:
      return null;
  }
}
