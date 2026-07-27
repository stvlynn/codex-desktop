// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Analytics StableID helper (`xh` / export `flt`) used by desktop auth URLs.

export type AnalyticsStableId = {
  StableID: {
    get: (token: string) => string;
  };
};

let analyticsStableIdImpl: AnalyticsStableId | null = null;

/** Wire the analytics StableID SDK once available. */
export function bindAnalyticsStableId(next: AnalyticsStableId): void {
  analyticsStableIdImpl = next;
}

/** Bundle export `flt` — analytics module exposing StableID.get. */
export function getAnalyticsStableId(): AnalyticsStableId {
  if (analyticsStableIdImpl == null) {
    return {
      StableID: {
        get: () => "",
      },
    };
  }
  return analyticsStableIdImpl;
}

/** Rolldown ESM init retained as no-op. */
export function ensureAnalyticsStableIdInit(): void {}
