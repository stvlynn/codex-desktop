// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Its`) / export `KC`.

export type BindBindSendCliRequestForHostPeers = {
  FZt: (...args: unknown[]) => unknown;
  Fts: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindBindSendCliRequestForHostPeers | null = null;

/** Wire bindBindSendCliRequestForHost peers once companions land. */
export function setBindBindSendCliRequestForHostPeers(next: BindBindSendCliRequestForHostPeers): void {
  peers = next;
}

/**
 * Bundle export `KC` / internal `Its`.
 */
export function bindBindSendCliRequestForHost() {
  if (peers == null) {
    throw new Error("bindBindSendCliRequestForHost peers are not configured");
  }

  return peers.e(() => {
    (peers.Hb(),
      (Fts = {
        avatar_overlay_button_new_thread:
          peers.FZt
            .CODEX_REALTIME_VOICE_SESSION_START_SOURCE_AVATAR_OVERLAY_BUTTON_NEW_THREAD,
        composer_button_existing_thread:
          peers.FZt
            .CODEX_REALTIME_VOICE_SESSION_START_SOURCE_COMPOSER_BUTTON_EXISTING_THREAD,
        composer_button_new_thread:
          peers.FZt
            .CODEX_REALTIME_VOICE_SESSION_START_SOURCE_COMPOSER_BUTTON_NEW_THREAD,
        global_hotkey_new_thread:
          peers.FZt
            .CODEX_REALTIME_VOICE_SESSION_START_SOURCE_GLOBAL_HOTKEY_NEW_THREAD,
      }));
  });
}
