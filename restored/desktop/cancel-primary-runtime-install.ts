// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$ru` / export `Qn` — cancel in-flight primary runtime install.

import { getDesktopServices } from "./desktop-services";

export type CancelPrimaryRuntimeInstallArgs = {
  hostId: string;
};

/** Bundle `$ru` / export `Qn`. */
export function cancelPrimaryRuntimeInstall(
  args: CancelPrimaryRuntimeInstallArgs,
): Promise<unknown> {
  const runtime = getDesktopServices()?.primaryRuntime as
    | { cancelInstall?: (a: { hostId: string }) => unknown }
    | undefined;
  if (runtime?.cancelInstall == null) {
    return Promise.reject(Error("Primary runtime is unavailable"));
  }
  return Promise.resolve(runtime.cancelInstall({ hostId: args.hostId }));
}
