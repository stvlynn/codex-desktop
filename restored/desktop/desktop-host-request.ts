// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Host request helper (`Bf` / export `hdt`; init `Vf` / export `mdt`).
// Accepts the abortController-shaped options used by auth URL helpers.

import { invokeDesktopRpc, type InvokeDesktopRpc } from "./invoke-desktop-rpc";
export type DesktopHostRequestOptions = {
  abortController?: AbortController;
  params?: unknown;
  select?: (body: unknown) => unknown;
  signal?: AbortSignal;
  source?: unknown;
  [key: string]: unknown;
};
let requestImpl:
  | ((method: string, options?: DesktopHostRequestOptions) => Promise<unknown>)
  | null = null;

/** Wire a host request impl that understands abortController. */
export function bindDesktopHostRequest(
  next: (
    method: string,
    options?: DesktopHostRequestOptions,
  ) => Promise<unknown>,
): void {
  requestImpl = next;
}

/**
 * Bundle export `hdt` — send a desktop host request.
 * Falls back to {@link invokeDesktopRpc} mapping abortController→signal.
 */
export async function desktopHostRequest(
  method: string,
  options?: DesktopHostRequestOptions,
): Promise<unknown> {
  if (requestImpl != null) {
    return requestImpl(method, options);
  }
  const { abortController, signal, ...rest } = options ?? {};
  return invokeDesktopRpc(method, {
    ...rest,
    signal: signal ?? abortController?.signal,
  } as Parameters<InvokeDesktopRpc>[1]);
}

/** Bundle export `mdt` — Rolldown ESM init retained as no-op. */
export function ensureDesktopHostRequestInit(): void {}
