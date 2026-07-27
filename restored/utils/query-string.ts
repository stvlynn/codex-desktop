// Restored from ref/webview/assets/query-string-IX2M6DS-.js
// Segment analytics-next query-string plugin helper (ajs_uid / ajs_aid / ajs_event).
// Stage 3: IMPORT_MAP-rewritten deps; analytics-core via vendor npm shim.

import {
  isPlainObject,
  t as initAnalyticsCore,
} from "../vendor/segment-analytics-core";
import {
  gracefulDecodeURIComponent,
  initGracefulDecodeURIComponent,
} from "./graceful-decode-uri-component";
type AnalyticsQueryStringClient = {
  options: {
    useQueryString?: {
      aid?: RegExp;
      uid?: RegExp;
    };
  };
  setAnonymousId: (id: string) => void;
  identify: (userId: string, traits: Record<string, unknown>) => unknown;
  track: (event: string, properties: Record<string, unknown>) => unknown;
};
function pickPrefixedKeys(
  prefix: string,
  query: Record<string, string>,
): Record<string, string> {
  return Object.keys(query).reduce<Record<string, string>>((acc, key) => {
    if (key.startsWith(prefix)) {
      acc[key.slice(prefix.length)] = query[key]!;
    }
    return acc;
  }, {});
}

/**
 * Parse `ajs_*` query params from a URL and apply identify/track/anonymousId.
 * Bundle export `queryString` / local `s`.
 */
export function queryString(analytics: AnalyticsQueryStringClient, url: string): Promise<unknown[]> {
  const anchor = document.createElement("a");
  anchor.href = url;
  const query = anchor.search
    .slice(1)
    .split("&")
    .reduce<Record<string, string>>((acc, pair) => {
      const [rawKey, rawValue] = pair.split("=");
      if (rawKey) {
        acc[rawKey] = gracefulDecodeURIComponent(rawValue ?? "");
      }
      return acc;
    }, {});
  const pending: unknown[] = [];
  const ajsUid = query.ajs_uid;
  const ajsEvent = query.ajs_event;
  const ajsAid = query.ajs_aid;
  const options = isPlainObject(analytics.options.useQueryString)
    ? analytics.options.useQueryString
    : {};
  const aidPattern = options.aid === undefined ? /.+/ : options.aid;
  const uidPattern = options.uid === undefined ? /.+/ : options.uid;
  if (ajsAid) {
    const anonymousId = Array.isArray(ajsAid) ? ajsAid[0] : ajsAid;
    if (aidPattern.test(anonymousId)) {
      analytics.setAnonymousId(anonymousId);
    }
  }
  if (ajsUid) {
    const userId = Array.isArray(ajsUid) ? ajsUid[0] : ajsUid;
    if (uidPattern.test(userId)) {
      const traits = pickPrefixedKeys("ajs_trait_", query);
      pending.push(analytics.identify(userId, traits));
    }
  }
  if (ajsEvent) {
    const eventName = Array.isArray(ajsEvent) ? ajsEvent[0] : ajsEvent;
    const properties = pickPrefixedKeys("ajs_prop_", query);
    pending.push(analytics.track(eventName, properties));
  }
  return Promise.all(pending);
}
initGracefulDecodeURIComponent();
initAnalyticsCore();
