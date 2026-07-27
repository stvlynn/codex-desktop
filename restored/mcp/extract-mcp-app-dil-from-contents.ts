// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Oqi` / export `cV` — find MCP-app DIL payload in contents.
// Zod schema left injectable.

type DilParseResult = {
  success: boolean;
  data?: { mimeType?: string; [key: string]: unknown };
};

type SafeParseFn = (value: unknown) => DilParseResult;

let safeParse: SafeParseFn | null = null;

/** Wire DIL content schema (`Xqi` in the bundle). */
export function setMcpAppDilContentParser(fn: SafeParseFn): void {
  safeParse = fn;
}

export function extractMcpAppDilFromContents(
  message:
    | {
        contents?: unknown[];
      }
    | null
    | undefined,
): Record<string, unknown> | null {
  let found: Record<string, unknown> | null = null;
  for (const part of message?.contents ?? []) {
    const parsed = safeParse?.(part);
    if (!parsed?.success || parsed.data == null) continue;
    if (parsed.data.mimeType === "text/x-dil;profile=mcp-app") {
      found ??= { htmlFallback: null, ...parsed.data };
    }
  }
  return found;
}
