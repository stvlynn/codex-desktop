// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Dwa` / export `OF`.
// Statsig dynamic config id `2668276729`; parser left injectable.

export const CODEX_CHATGPT_HANDOFF_DYNAMIC_CONFIG_ID = "2668276729";

type DynamicConfigReader = {
  getDynamicConfig: (id: string) => { value: unknown };
};

type StoreLike = {
  get: (token: unknown) => DynamicConfigReader | null | undefined;
};

type HandoffConfigParser = (value: unknown) => unknown;

let statsigToken: unknown = null;
let parseHandoffConfig: HandoffConfigParser | null = null;

/** Wire Statsig reader token (`Th` in the bundle). */
export function setHandoffStatsigToken(token: unknown): void {
  statsigToken = token;
}

/** Wire handoff config parser (`Owa` in the bundle). */
export function setHandoffConfigParser(parser: HandoffConfigParser): void {
  parseHandoffConfig = parser;
}

export function getCodexChatgptHandoffConfig(store: StoreLike): unknown {
  const value = store
    .get(statsigToken)
    ?.getDynamicConfig(CODEX_CHATGPT_HANDOFF_DYNAMIC_CONFIG_ID).value;
  return parseHandoffConfig?.(value) ?? value ?? null;
}
