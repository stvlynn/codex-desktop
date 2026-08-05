// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g$n`) / export `P6`.

export type ProtobufAnalyticsEventsV1CodexMemorySettingToggledPeers = {
  e: (...args: unknown[]) => unknown;
  h$n: (...args: unknown[]) => unknown;
  m$n: (...args: unknown[]) => unknown;
  p$n: (...args: unknown[]) => unknown;
};

let peers: ProtobufAnalyticsEventsV1CodexMemorySettingToggledPeers | null =
  null;

/** Wire protobufAnalyticsEventsV1CodexMemorySettingToggled peers once companions land. */
export function setProtobufAnalyticsEventsV1CodexMemorySettingToggledPeers(
  next: ProtobufAnalyticsEventsV1CodexMemorySettingToggledPeers,
): void {
  peers = next;
}

/**
 * Bundle export `P6` / internal `g$n`.
 */
export function protobufAnalyticsEventsV1CodexMemorySettingToggled() {
  if (peers == null) {
    throw new Error(
      "protobufAnalyticsEventsV1CodexMemorySettingToggled peers are not configured",
    );
  }

  return peers.e(() => {
    ((p$n = {
      $type: `protobuf_analytics_events.v1.CodexMemorySettingToggled`,
    }),
      (m$n = {
        $type: `protobuf_analytics_events.v1.CodexMemoryResetClicked`,
      }),
      (h$n = {
        $type: `protobuf_analytics_events.v1.CodexMemoryStateSnapshot`,
      }));
  });
}
