// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Hook returning whether / how to open a local thread in a new window
// (bundle `tBl` / export `Do`).

import { OPEN_THREAD_IN_NEW_WINDOW_FEATURE_GATE_ID } from "../feature-gates/feature-gate-ids";

export type OpenThreadInNewWindowArgs = {
  conversationId: string | null | undefined;
};

export type OpenThreadInNewWindowResult = {
  canOpenThreadInNewWindow: boolean;
  openThreadInNewWindow: () => void;
};

type FeatureGateCheck = (gateId: string) => boolean;
type HostDispatch = {
  dispatchMessage: (
    channel: "open-in-new-window",
    payload: { path: string },
  ) => void;
};

/**
 * @param checkFeatureGate - Statsig/feature-gate reader (`kh` in the bundle)
 * @param host - desktop host bridge (`Jf` in the bundle)
 * @param localThreadPath - builds `/local/:conversationId` (`lu` / `hTe` in the bundle)
 */
export function useOpenThreadInNewWindow(
  { conversationId }: OpenThreadInNewWindowArgs,
  checkFeatureGate: FeatureGateCheck,
  host: HostDispatch,
  localThreadPath: (conversationId: string) => string = (id) => "/local/" + id,
): OpenThreadInNewWindowResult {
  const canOpenThreadInNewWindow =
    checkFeatureGate(OPEN_THREAD_IN_NEW_WINDOW_FEATURE_GATE_ID) &&
    conversationId != null;

  const openThreadInNewWindow = () => {
    if (!canOpenThreadInNewWindow || conversationId == null) return;
    host.dispatchMessage("open-in-new-window", {
      path: localThreadPath(conversationId),
    });
  };

  return { canOpenThreadInNewWindow, openThreadInNewWindow };
}
