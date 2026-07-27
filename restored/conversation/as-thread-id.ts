// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Identity brand for conversation / thread ids (`kl` / export `vgt`).

/**
 * Bundle `kl` / export `vgt`.
 * No-op brand; callers often write `isClientNewThreadId(id) ? id : asThreadId(id)`.
 */
export function asThreadId<T extends string>(threadId: T): T {
  return threadId;
}
