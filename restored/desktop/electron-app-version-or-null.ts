// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Srt` — pure helper.

/** Read Electron bridge Sentry app version, or `null`. */
export function electronAppVersionOrNull(): string | null {
  const version = (
    window as Window & {
      electronBridge?: { getSentryInitOptions?: () => { appVersion?: string } };
    }
  ).electronBridge?.getSentryInitOptions?.().appVersion;
  return version?.trim() || null;
}
