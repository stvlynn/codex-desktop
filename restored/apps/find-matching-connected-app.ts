// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `NKn` / export `o5` — match connected apps by server/tool/function tokens.
// Tokenizers / matchers left injectable; result cached per apps list.

type Tokenize = (value: string) => string;
type AppTokens = (app: unknown) => string[];
type TokenEquals = (a: string, b: string) => boolean;
type TokenIncludes = (needle: string, haystack: string) => boolean;

let tokenize: Tokenize | null = null;
let appTokens: AppTokens | null = null;
let tokenEquals: TokenEquals | null = null;
let tokenIncludes: TokenIncludes | null = null;

const cache = new WeakMap<
  object,
  Map<string, Map<string, Map<string, unknown>>>
>();

export function setConnectedAppTokenize(fn: Tokenize): void {
  tokenize = fn;
}
export function setConnectedAppTokensExtractor(fn: AppTokens): void {
  appTokens = fn;
}
export function setConnectedAppTokenEquals(fn: TokenEquals): void {
  tokenEquals = fn;
}
export function setConnectedAppTokenIncludes(fn: TokenIncludes): void {
  tokenIncludes = fn;
}

export function findMatchingConnectedApp(args: {
  apps: unknown[];
  functionName: string;
  serverName: string;
  toolName: string;
}): unknown | null {
  const appsKey = args.apps as unknown as object;
  let byServer = cache.get(appsKey);
  if (!byServer) {
    byServer = new Map();
    cache.set(appsKey, byServer);
  }
  let byTool = byServer.get(args.serverName);
  if (!byTool) {
    byTool = new Map();
    byServer.set(args.serverName, byTool);
  }
  let byFn = byTool.get(args.toolName);
  if (!byFn) {
    byFn = new Map();
    byTool.set(args.toolName, byFn);
  }
  if (byFn.has(args.functionName)) {
    return byFn.get(args.functionName) ?? null;
  }

  const tok = tokenize ?? ((value) => value.toLowerCase());
  const equals = tokenEquals ?? ((a, b) => a === b);
  const includes =
    tokenIncludes ?? ((needle, haystack) => haystack.includes(needle));
  const tokensFor = appTokens ?? (() => []);

  const serverTok = tok(args.serverName);
  const toolTok = tok(args.toolName);
  const fnToks = args.functionName
    .split("__")
    .map(tok)
    .filter((part) => part.length > 0);

  for (const app of args.apps) {
    const tokens = tokensFor(app);
    if (
      tokens.some((token) => equals(token, serverTok)) ||
      tokens.some((token) => includes(toolTok, token)) ||
      fnToks.some((fnTok) => tokens.some((token) => includes(fnTok, token)))
    ) {
      byFn.set(args.functionName, app);
      return app;
    }
  }
  byFn.set(args.functionName, null);
  return null;
}
