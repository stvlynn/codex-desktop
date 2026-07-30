// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Email / writing-block metadata helpers used by the writing-mode markdown directive.

/** No-op catch handlers retained for wire parity with residual Helper34/35. */
export function useChatgptComposerControllerHelper34(): void {}
export function useChatgptComposerControllerHelper35(): void {}

export function useChatgptComposerControllerHelper36(directive: {
  emailMetadata?: Record<string, unknown>;
  metadata?: unknown;
}): Record<string, unknown> {
  return {
    ...directive.emailMetadata,
    writingBlockMetadata: directive.metadata,
  };
}

export function useChatgptComposerControllerHelper37(
  value: unknown,
): string | undefined {
  return typeof value == "string" ? value : undefined;
}
