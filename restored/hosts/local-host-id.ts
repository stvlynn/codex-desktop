// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Canonical id for the local (non-remote) host in host-config lookups.

/** Host id used for the machine running the desktop app (`H_` / `Tot`). */
export const LOCAL_HOST_ID = "local";

/**
 * Default host-config id alias (`lOt` / `Eot`) — identical to {@link LOCAL_HOST_ID}
 * after the `U_` init assigns `lOt = H_`.
 */
export const DEFAULT_HOST_CONFIG_ID = LOCAL_HOST_ID;

/** Fallback host-config row for the local machine (`dOt`). */
export type LocalHostConfig = {
  id: typeof LOCAL_HOST_ID;
  display_name: "Local";
  kind: "local";
};

export const DEFAULT_LOCAL_HOST: LocalHostConfig = {
  id: LOCAL_HOST_ID,
  display_name: "Local",
  kind: "local",
};
