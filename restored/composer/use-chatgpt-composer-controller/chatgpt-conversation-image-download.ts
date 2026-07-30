// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// ChatGPT conversation image download request helpers for browser rows.

import { appLogger as appInitialDdt } from "../../logging/app-logger";

function useChatgptComposerControllerHelper104(request8506, request8507) {
  return {
    cacheKey: ["chatgpt-conversation", request8507],
    getDownloadRequest: (request11256) => {
      return useChatgptComposerControllerHelper105({
        client: request8506,
        conversationId: request8507,
        fileId: request11256,
      });
    },
    useDownloadUrlAsImageSrc: true,
  };
}
async function useChatgptComposerControllerHelper105({
  client,
  conversationId,
  fileId,
}) {
  try {
    appInitialDdt.debug("ChatGPT conversation image download request started", {
      safe: {},
      sensitive: {
        conversationId,
        fileId,
      },
    });
    let slot11697 = await client.fileDownloadRequest(fileId, {
      conversationId,
    });
    return (
      appInitialDdt.debug(
        "ChatGPT conversation image download request resolved",
        {
          safe: {
            hasRequestHeaders: slot11697.requestHeaders != null,
          },
          sensitive: {
            conversationId,
            downloadUrl: slot11697.downloadUrl,
            fileId,
          },
        },
      ),
      slot11697
    );
  } catch (slot14450) {
    throw (
      appInitialDdt.warning(
        "ChatGPT conversation image download request failed",
        {
          safe: {},
          sensitive: {
            conversationId,
            error: slot14450,
            fileId,
          },
        },
      ),
      slot14450
    );
  }
}

export {
  useChatgptComposerControllerHelper104,
  useChatgptComposerControllerHelper105,
};
