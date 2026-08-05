// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Plain moderation disclaimer card chrome.

import { AppIcont0 as appInitialT0 } from "../../icons/app-icon-t0";
import { cx as appInitialWft } from "../../ui/cx";
import { useChatgptComposerControllerHelper247 } from "./chatgpt-safe-streaming-markdown";
import { useChatgptComposerControllerHelper251 } from "./chatgpt-trusted-contact-disclaimer-helpers";

const tx = { a: useChatgptComposerControllerHelper251 };

function useChatgptComposerControllerHelper249(request1588) {
  const AppInitialT0 = appInitialT0;
  const UseChatgptComposerControllerHelper247 =
    useChatgptComposerControllerHelper247;
  let { className, content, conversationId, footer, icon } = request1588,
    slot5373 = appInitialWft(
      "flex items-center gap-6 self-start rounded-2xl border border-token-border-default px-3 py-2.5 text-sm text-token-text-primary md:p-4",
      className,
    );
  let slot5374 = icon ?? (
    <AppInitialT0
      aria-hidden={true}
      className="icon-lg shrink-0 text-token-text-secondary"
    />
  );
  let slot5375 = {
    kind: "assistant-message",
  };
  let slot5376 = (
    <UseChatgptComposerControllerHelper247
      className={
        "text-sm [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>p:first-child]:font-semibold"
      }
      components={tx}
      conversationId={conversationId}
      cwd={null}
      isStreaming={false}
      textStyle={slot5375}
    >
      {content}
    </UseChatgptComposerControllerHelper247>
  );
  let slot5377 = footer == null ? null : <div className="mt-3">{footer}</div>;
  let slot5378 = (
    <div className="min-w-0 grow pt-[2px]">
      {slot5376}
      {slot5377}
    </div>
  );
  let slot5379 = (
    <div className="flex min-w-0 grow items-start gap-3">
      {slot5374}
      {slot5378}
    </div>
  );
  return <div className={slot5373}>{slot5379}</div>;
}

export { useChatgptComposerControllerHelper249 };
