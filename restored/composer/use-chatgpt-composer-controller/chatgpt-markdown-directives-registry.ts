// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Mutable markdown directive registry filled by the residual boundary ESM init.

let chatgptMarkdownDirectives: Record<string | symbol, unknown> = {};

export function setChatgptMarkdownDirectives(
  directives: Record<string | symbol, unknown>,
): void {
  chatgptMarkdownDirectives = directives;
}

export function getChatgptMarkdownDirectives(): Record<
  string | symbol,
  unknown
> {
  return chatgptMarkdownDirectives;
}

export function useChatgptComposerControllerHelper246(): Record<
  string | symbol,
  unknown
> {
  return getChatgptMarkdownDirectives();
}

let ensureMarkdownDirectivesInitImpl: (() => void) | null = null;

/** Boundary registers Value308 here so extracted Value311 avoids a circular import. */
export function setEnsureChatgptMarkdownDirectivesInit(fn: () => void): void {
  ensureMarkdownDirectivesInitImpl = fn;
}

export function ensureChatgptMarkdownDirectivesInit(): void {
  ensureMarkdownDirectivesInitImpl?.();
}
