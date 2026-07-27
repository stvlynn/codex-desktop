// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `Bw`) / export `w5`.

export type CallSitesConnectorAppToolPeers = {
  postJson: (
    path: string,
    body: string,
    headers: unknown,
  ) => Promise<{ body: unknown }>;
  headers: () => unknown;
  parseResponse: (body: unknown) => {
    error?: unknown;
    result?: {
      isError?: boolean;
      structuredContent?: unknown;
    };
  };
  captureException: (
    error: Error,
    context: {
      fingerprint: string[];
      tags: Record<string, string>;
    },
  ) => void;
};

let peers: CallSitesConnectorAppToolPeers | null = null;

/** Wire sites connector HTTP peers once companions land. */
export function setCallSitesConnectorAppToolPeers(
  next: CallSitesConnectorAppToolPeers,
): void {
  peers = next;
}

/**
 * Bundle export `w5` / internal `Bw`.
 * Call a Sites connector app tool and optionally validate structured content.
 */
export async function callSitesConnectorAppTool(
  toolName: string,
  toolArguments: unknown,
  schema: {
    safeParse: (value: unknown) => { success: boolean; data?: unknown };
  },
  resourceUri?: string | null,
): Promise<unknown> {
  if (peers == null) {
    throw new Error("CallSitesConnectorAppTool peers are not configured");
  }
  const { body } = await peers.postJson(
    "/wham/apps",
    JSON.stringify({
      id: 1,
      jsonrpc: "2.0",
      method: "tools/call",
      params: {
        arguments: toolArguments,
        name: toolName,
        ...(resourceUri == null
          ? {}
          : { _meta: { _codex_apps: { resource_uri: resourceUri } } }),
      },
    }),
    peers.headers(),
  );
  const parsed = peers.parseResponse(body);
  if (
    "error" in parsed ||
    parsed.result?.isError === true ||
    parsed.result?.structuredContent == null
  ) {
    const error = new Error("Sites tool call failed");
    peers.captureException(error, {
      fingerprint: ["sites-connector-tool-call-failed", toolName],
      tags: { connector: "sites", toolName },
    });
    throw error;
  }
  const structured = parsed.result.structuredContent;
  const validated = schema.safeParse(structured);
  return validated.success ? validated.data : structured;
}
