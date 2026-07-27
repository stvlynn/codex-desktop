// Restored from ref/webview/assets/remote-connections-page-Z1id7lGr.js
// Remote connections route redirect (gate → settings/connections, else home).
// Stage 3: app-initial aliases → semantic modules; ZX/P5 ESM inits dropped.

import type { ReactNode } from "react";
import { Navigate } from "../boundaries/react-router-navigation";
import { useIsRemoteConnectionsFeatureEnabled } from "../hosts/remote-connections-feature";

/** Bundle export `RemoteConnectionsPage` / local `s`. */
export function RemoteConnectionsPage(): ReactNode {
  if (!useIsRemoteConnectionsFeatureEnabled()) {
    return <Navigate to="/" replace />;
  }
  return <Navigate to="/settings/connections" replace />;
}
