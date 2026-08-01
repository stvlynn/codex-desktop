// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dqr`) / export `SX`.

import {
  createAppScopeQueryAtom,
  type BindableAtom,
} from "../composer/composer-appscope-atoms";

export type McpCapabilityCatalogEntry = {
  entrypoint: string;
  server: string;
  tool: { name: string };
  [key: string]: unknown;
};

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensureMcpCapabilityCatalogInit(): void {}

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensureMcpCapabilityHostViewInit(): void {}

/**
 * Bundle export `SX` / internal `Dqr` — global-entrypoint MCP capability
 * catalog, open boundary placeholder until wired to the real catalog source.
 */
export const mcpGlobalCapabilityCatalogAtom: BindableAtom<
  McpCapabilityCatalogEntry[]
> = createAppScopeQueryAtom<McpCapabilityCatalogEntry[]>([]);

import type { ReactNode } from "react";

export type McpCapabilityHostViewPeers = {
  render: (view: McpCapabilityCatalogEntry) => ReactNode;
};
let peers: McpCapabilityHostViewPeers | null = null;

/** Wire McpCapabilityHostView peers once companions land. */
export function setMcpCapabilityHostViewPeers(
  next: McpCapabilityHostViewPeers,
): void {
  peers = next;
}

/**
 * Bundle export — hosts a single MCP capability's tool/server view.
 */
export function McpCapabilityHostView(props: {
  view: McpCapabilityCatalogEntry;
}): ReactNode {
  if (peers == null) {
    throw new Error("McpCapabilityHostView peers are not configured");
  }
  return peers.render(props.view);
}
