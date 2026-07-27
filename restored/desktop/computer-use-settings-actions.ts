// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `u_u`/`d_u`/`f_u` / exports `yt`/`xt`/`bt`.
// Thin wrappers over desktop computer-use settings RPC.

import { awaitWithAbort } from "../utils/await-with-abort";
import { getDesktopServices } from "./desktop-services";

type ComputerUseSettingsApi = {
  removeAppApproval?: (id: string) => PromiseLike<unknown> & object;
  setSoundMode?: (mode: string) => PromiseLike<unknown> & object;
  setLockedUseEnabled?: (enabled: boolean) => PromiseLike<unknown> & object;
};

function computerUseSettings(): ComputerUseSettingsApi {
  return (
    (getDesktopServices()?.computerUseSettings as ComputerUseSettingsApi) ?? {}
  );
}

/** Bundle `u_u` / export `yt`. */
export function removeComputerUseAppApproval(appId: string): Promise<unknown> {
  const api = computerUseSettings();
  if (api.removeAppApproval == null) {
    return Promise.reject(Error("Computer use settings unavailable"));
  }
  return awaitWithAbort(api.removeAppApproval(appId));
}

/** Bundle `d_u` / export `xt`. */
export function setComputerUseSoundMode(mode: string): Promise<unknown> {
  const api = computerUseSettings();
  if (api.setSoundMode == null) {
    return Promise.reject(Error("Computer use settings unavailable"));
  }
  return awaitWithAbort(api.setSoundMode(mode));
}

/** Bundle `f_u` / export `bt`. */
export function setComputerUseLockedUseEnabled(
  enabled: boolean,
): Promise<unknown> {
  const api = computerUseSettings();
  if (api.setLockedUseEnabled == null) {
    return Promise.reject(Error("Computer use settings unavailable"));
  }
  return awaitWithAbort(api.setLockedUseEnabled(enabled));
}
