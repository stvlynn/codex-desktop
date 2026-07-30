// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// "Continued from …" branch-source divider for ChatGPT browser rows.

import { Link as AppInitialF5 } from "../../boundaries/react-router-link";
import { conversationWorkPath as appInitialX8 } from "../../conversation/conversation-work-path";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { AppIconNk as appInitialNK } from "../../icons/app-icon-nk";

function useChatgptComposerControllerHelper257(request1638) {
  const AppInitialNK = appInitialNK;
  const AppInitialGft = appInitialGft;
  let { branchSource } = request1638,
    slot5463 = <div className="flex-1 border-t border-current/20" />;
  let slot5464 = <AppInitialNK className="icon-2xs shrink-0" />;
  let slot5465 = (request7990) => {
    return (
      <AppInitialF5
        className="max-w-64 min-w-0 cursor-interaction truncate text-left align-bottom text-token-link hover:underline"
        to={appInitialX8(branchSource.conversationId)}
      >
        {request7990}
      </AppInitialF5>
    );
  };
  let slot5466 = (
    <div className="flex max-w-[70%] min-w-0 items-center gap-1 whitespace-nowrap">
      {slot5464}
      {
        <AppInitialGft
          id="chatgptConversations.branchedFrom"
          defaultMessage={
            "Continued from <conversationLink>{conversationTitle}</conversationLink>"
          }
          description={
            "Divider shown in a chat continued from another ChatGPT chat. {conversationTitle} is the linked title of the source chat."
          }
          values={{
            conversationLink: slot5465,
            conversationTitle: branchSource.title,
          }}
        />
      }
    </div>
  );
  let slot5467 = <div className="flex-1 border-t border-current/20" />;
  return (
    <div className="text-size-chat my-2 flex items-center gap-2 text-token-text-secondary">
      {slot5463}
      {slot5466}
      {slot5467}
    </div>
  );
}

export const ChatgptBranchSourceDivider = useChatgptComposerControllerHelper257;
export { useChatgptComposerControllerHelper257 };
