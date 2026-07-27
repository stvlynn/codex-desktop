// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Whether the signed-in identity may use Codex (`vme` / export `zgt`).

/** Plans that may use Codex via ChatGPT auth (`xme`). */
export const CODEX_CHATGPT_AUTH_PLANS = [
  "plus",
  "pro",
  "business",
  "team",
  "self_serve_business_usage_based",
] as const;

export type CodexChatGptAuthPlan = (typeof CODEX_CHATGPT_AUTH_PLANS)[number];

/** Bundle `bme` (co-located). */
export function isOpenAiEmployeeEmail(email: string | null | undefined): boolean {
  return email?.toLowerCase().endsWith("@openai.com") === true;
}

export type CanUseCodexWithChatGptAuthProps = {
  email: string | null | undefined;
  plan: string | null | undefined;
};

/** Bundle `yme` (co-located). */
export function canUseCodexWithChatGptAuth({
  email,
  plan,
}: CanUseCodexWithChatGptAuthProps): boolean {
  return (
    isOpenAiEmployeeEmail(email) ||
    CODEX_CHATGPT_AUTH_PLANS.some((allowed) => allowed === plan)
  );
}

export type CanAuthenticateForCodexProps = {
  authMethod: string | null | undefined;
  email: string | null | undefined;
  plan: string | null | undefined;
};

/**
 * Bundle `vme` / export `zgt`.
 * API-key auth always qualifies; ChatGPT auth requires employee email or a
 * paid / team plan.
 */
export function canAuthenticateForCodex({
  authMethod,
  email,
  plan,
}: CanAuthenticateForCodexProps): boolean {
  if (authMethod === "apikey") return true;
  if (authMethod === "chatgpt") {
    return canUseCodexWithChatGptAuth({ email, plan });
  }
  return false;
}
