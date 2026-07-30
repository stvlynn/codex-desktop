// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Error / pending-loading footer for a ChatGPT browser-conversation row.

import { _useChatgptComposerControllerS } from "./chatgpt-pending-loading-indicator";

export function useChatgptComposerControllerHelper312(request3879: {
  errorMessage?: string | null;
  showPendingLoadingMessage?: boolean;
}) {
  const UseChatgptComposerControllerS = _useChatgptComposerControllerS;
  let { errorMessage, showPendingLoadingMessage } = request3879,
    slot9749 = showPendingLoadingMessage ? (
      <UseChatgptComposerControllerS />
    ) : null;
  let slot9750 =
    errorMessage == null ? null : (
      <div className="rounded-xl border border-token-charts-red/30 bg-token-charts-red/10 p-4 text-sm text-token-foreground">
        {errorMessage}
      </div>
    );
  return (
    <>
      {slot9749}
      {slot9750}
    </>
  );
}

export const ChatgptConversationRowFooter =
  useChatgptComposerControllerHelper312;
