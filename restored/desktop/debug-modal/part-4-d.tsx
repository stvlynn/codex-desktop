// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 4/17
/* split-lane-import-depth:1 */
// AST split 4/6

import { Birch } from "./part-4-b";

function Lagoon(ultra8) {
  let { window } = ultra8,
    vapor8 = String(window.windowId),
    wheat8 = {
      label: "Window",
      value: vapor8,
    };
  let yarn8 = String(window.ownerWebContentsId),
    zephyr8 = {
      label: "Owner webContents",
      value: yarn8,
    };
  let acorn8 = window.activeConversationId ?? "none",
    bloom8 = {
      label: "Active conversation",
      value: acorn8,
    };
  let coral8 = window.activeBrowserTabId ?? "none",
    drift8 = {
      label: "Active browser tab",
      value: coral8,
    };
  let eagle8 = String(window.pendingAttachCount),
    frost8 = {
      label: "Pending attaches",
      value: eagle8,
    };
  let glide8 = String(window.pendingAdoptedWebviewCount),
    honey8 = {
      label: "Pending adopted webviews",
      value: glide8,
    };
  let iris8 = String(window.pendingLegacyWebviewCount),
    jewel8 = {
      label: "Pending legacy webviews",
      value: iris8,
    };
  let knoll8 = String(window.transferredConversationStateCount),
    lunar8 = {
      label: "Transferred states",
      value: knoll8,
    };
  let moss8 = String(window.ignoredConversationCount),
    north8 = {
      label: "Ignored conversations",
      value: moss8,
    };
  let orbit8 = [
    wheat8,
    zephyr8,
    bloom8,
    drift8,
    frost8,
    honey8,
    jewel8,
    lunar8,
    north8,
  ];
  let pine8 = `owner ${window.ownerWebContentsId}`,
    quest8 = `window ${window.windowId}`;
  return (
    <Birch
      {...{
        details: orbit8,
        subtitle: pine8,
        title: quest8,
      }}
    />
  );
}
