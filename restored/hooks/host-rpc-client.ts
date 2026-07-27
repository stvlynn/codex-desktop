// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$T`) / export `H3`.

import {
  invokeDesktopRpc,
  type InvokeDesktopRpcOptions,
} from "../desktop/invoke-desktop-rpc";

export type HostConfigLike = {
  id: string;
  kind: string;
  [key: string]: unknown;
};

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensureHostConfigIdInit(): void {}

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensureHostRpcClientsInit(): void {}

/**
 * Bundle export `H3` / internal `$T`.
 */
export function getHostConfigId(host: HostConfigLike): string {
  return host.id;
}

export type HostRpcClient = {
  domain: string;
  request: (options: {
    method: string;
    params?: unknown;
    signal?: AbortSignal;
  }) => Promise<unknown>;
};

/**
 * Bundle-neighborhood `K3`/`U3` — domain-scoped RPC client routed through the
 * desktop host bridge (`invokeDesktopRpc`).
 */
export function getHostRpcClient(domain: string): HostRpcClient {
  return {
    domain,
    request: ({ method, params, signal }) => {
      const options: InvokeDesktopRpcOptions = {
        params,
        signal,
        source: domain,
      };
      return invokeDesktopRpc(`${domain}:${method}`, options);
    },
  };
}
