// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jPr` / export `eQ` — helper via extractFn(jPr); Jf→hostMessageBus.

import { hostMessageBus } from "./host-message-bus.ts";

/** Dispatch host message to open the create-remote-project modal. */
export function openCreateRemoteProjectModal(
  args: {
    hostId?: unknown;
    setActive?: unknown;
  } = {},
): void {
  const { hostId, setActive } = args;
  hostMessageBus.dispatchHostMessage({
    type: "open-create-remote-project-modal",
    hostId,
    setActive,
  });
}
