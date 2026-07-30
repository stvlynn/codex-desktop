// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Moderation disclaimer list for ChatGPT browser rows.

import { NavigationAllowContext as appInitialIL } from "../../navigation/navigation-allow-context";
import { tryParseJsonText as _appInitialLF } from "../../utils/try-parse-json-text";
import { useChatgptComposerControllerHelper249 } from "./chatgpt-moderation-disclaimer-card";
import { useChatgptComposerControllerHelper250 } from "./chatgpt-trusted-contact-disclaimer-card";

function useChatgptComposerControllerHelper248(
  request1921,
) {
  const Provider = appInitialIL.Provider;
  let {
    conversationId,
    hostId,
    moderationDisclaimers,
    shouldBlockExternalEgress,
  } = request1921;
  if (moderationDisclaimers == null || moderationDisclaimers.length === 0)
    return null;
  let slot6070 = shouldBlockExternalEgress
      ? "restricted"
      : "allow",
    slot6071;
  {
    let slot8644;
    slot8644 = (
      request4011,
      request4012,
    ) => {
      let { disclaimers, disclaimerMetadata, disclaimerType } =
          request4011,
        slot9916 = _appInitialLF(disclaimerType)
          ? disclaimerType
          : undefined;
      return disclaimers.map((item, index) => {
        const UseChatgptComposerControllerHelper249 =
          useChatgptComposerControllerHelper249;
        const UseChatgptComposerControllerHelper250 =
          useChatgptComposerControllerHelper250;
        return slot9916 == null ? (
          <UseChatgptComposerControllerHelper249
            key={`${String(request4012)}-${String(index)}-${item}`}
            className="w-fit"
            content={item}
            conversationId={conversationId}
          />
        ) : (
          <UseChatgptComposerControllerHelper250
            key={`${String(request4012)}-${String(index)}-${item}`}
            conversationId={conversationId}
            disclaimerMetadata={disclaimerMetadata}
            disclaimerType={slot9916}
            hostId={hostId}
          />
        );
      });
    };
    slot6071 = moderationDisclaimers.flatMap(
      slot8644,
    );
  }
  let slot6072 = (
    <div className="mt-3 flex flex-col gap-2">
      {slot6071}
    </div>
  );
  return (
    <Provider value={slot6070}>
      {slot6072}
    </Provider>
  );
}

export { useChatgptComposerControllerHelper248 };
export { useChatgptComposerControllerHelper249 } from "./chatgpt-moderation-disclaimer-card";
export { useChatgptComposerControllerHelper250 } from "./chatgpt-trusted-contact-disclaimer-card";
