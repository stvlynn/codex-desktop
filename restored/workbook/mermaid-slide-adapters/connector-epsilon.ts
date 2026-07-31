// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-62: connector geometry epsilon (legacy Binding1687 / LPe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { msa } from "./adapters-bag";

export const CONNECTOR_EPSILON = 0.5;

export const ensureConnectorEpsilonInit = esmInit(() => {
  msa.CONNECTOR_EPSILON = CONNECTOR_EPSILON;
});
