// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oKn`) / export `l5`.

export type BindGithubPeers = {
  aKn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iKn: (...args: unknown[]) => unknown;
  rKn: (...args: unknown[]) => unknown;
};

let peers: BindGithubPeers | null = null;

/** Wire bindGithub peers once companions land. */
export function setBindGithubPeers(next: BindGithubPeers): void {
  peers = next;
}

/**
 * Bundle export `l5` / internal `oKn`.
 */
export function bindGithub() {
  if (peers == null) {
    throw new Error("bindGithub peers are not configured");
  }

  return peers.e(() => {
    rKn = new Set([`GH`, `IA`, `MCP`, `API`, `CI`, `CLI`, `LLM`, `PDF`, `PR`, `UI`, `URL`, `SQL`, `TW`, `GPU`, `CPU`]), iKn = new Map([[`openai`, `OpenAI`], [`openaideveloperdocs`, `OpenAI Developer Docs`], [`openapi`, `OpenAPI`], [`github`, `GitHub`], [`pagerduty`, `PagerDuty`], [`datadog`, `DataDog`], [`sharepoint`, `SharePoint`], [`sqlite`, `SQLite`], [`fastapi`, `FastAPI`]]), aKn = new Set([`and`, `or`, `to`, `up`, `with`]);
  });
}
