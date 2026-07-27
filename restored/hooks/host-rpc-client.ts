// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `$T`) / export `H3`.

export type HostConfigLike = {
  id: string;
  kind?: string;
  [key: string]: unknown;
};

export type HostRpcRequest = {
  method: string;
  params?: Record<string, unknown>;
  signal?: AbortSignal;
};

export type HostRpcClient = {
  request: (args: HostRpcRequest) => Promise<unknown>;
};

type HostKind = "git" | "computer-use" | string;

const clients = new Map<HostKind, HostRpcClient>();

/**
 * Bundle export `H3` / internal `$T`.
 * Read the stable host id from a host config.
 */
export function getHostConfigId(host: HostConfigLike): string {
  return host.id;
}

/**
 * Bundle export `K3` — lazy host RPC client for a service kind.
 */
export function getHostRpcClient(kind: HostKind): HostRpcClient {
  const existing = clients.get(kind);
  if (existing) return existing;
  const client: HostRpcClient = {
    request() {
      throw new Error(`Host RPC client "${kind}" peers are not configured`);
    },
  };
  clients.set(kind, client);
  return client;
}

/** Wire a real host RPC client implementation for a kind. */
export function bindHostRpcClient(kind: HostKind, client: HostRpcClient): void {
  clients.set(kind, client);
}

/** Bundle export `G3` — Rolldown ESM init retained as no-op. */
export function ensureHostRpcClientsInit(): void {}

/** Bundle export `U3` — Rolldown ESM init retained as no-op. */
export function ensureHostConfigIdInit(): void {}
