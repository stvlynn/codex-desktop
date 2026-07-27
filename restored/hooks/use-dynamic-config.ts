// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Mh` / export `nlt` — Statsig-style dynamic config reader.

type Client = {
  getDynamicConfig: (name: string, fallback: unknown) => unknown;
};

let useClient: (() => { client: Client }) | null = null;

export function setDynamicConfigClient(hook: () => { client: Client }): void {
  useClient = hook;
}

export function useDynamicConfig<T>(name: string, fallback: T): T {
  if (useClient == null) {
    throw new Error("useDynamicConfig client has not been configured");
  }
  const { client } = useClient();
  return client.getDynamicConfig(name, fallback) as T;
}
