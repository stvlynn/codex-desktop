// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Tool-icon chips for ChatGPT reasoning-group preamble rows.

import { AddContextSquareIcon as appInitialOlt } from "../../icons/add-context-square-icon";
import { AppIconB as appInitialB } from "../../icons/app-icon-b";
import { AppIcondb as appInitialDb } from "../../icons/app-icon-db";
import { AppIconGg as appInitialGg } from "../../icons/app-icon-gg";
import { AppIconIR as appInitialIR } from "../../icons/app-icon-ir";
import { AppIconis as AppInitialIs } from "../../icons/app-icon-is";
import { AppIconJtt as appInitialJtt } from "../../icons/app-icon-jtt";
import { AppIconLV as appInitialLV } from "../../icons/app-icon-lv";
import { AppIconMA as appInitialMA } from "../../icons/app-icon-ma";
import { AppIconoG as AppInitialOG } from "../../icons/app-icon-og";
import { AppIconyl as appInitialYl } from "../../icons/app-icon-yl";
import { TerminalFileIcon as appInitialSU } from "../../icons/terminal-file-icon";
import { AppLogoImage as appInitialKG } from "../../ui/app-logo-image";
import { CopyButton as _appInitialAR } from "../../ui/copy-button";

function useChatgptComposerControllerHelper265(request2276) {
  let { resolvedApps, shouldBlockExternalEgress, toolIcons } = request2276,
    slot6649 = toolIcons
      ?.flatMap((request3538, request3539) => {
        const AppInitialKG = appInitialKG;
        const AppInitialLV = appInitialLV;
        let slot9172 = request3538.trim(),
          slot9173 = useChatgptComposerControllerHelper266(
            slot9172,
            `${slot9172}-${String(request3539)}`,
          );
        if (slot9173 != null) return [slot9173];
        let slot9174 = resolvedApps.find((item) => {
            return [item.logoUrl, item.logoUrlDark].some((_item) => {
              return (
                _item === slot9172 ||
                (slot9172.startsWith("/") && _item?.endsWith(slot9172))
              );
            });
          }),
          slot9175 =
            slot9174 == null
              ? useChatgptComposerControllerHelper267(slot9172, resolvedApps)
              : null;
        return slot9174 == null && slot9175 == null
          ? []
          : [
              <AppInitialKG
                key={`${slot9172}-${String(request3539)}`}
                alt=""
                appInfo={slot9174}
                className="size-5 shrink-0"
                fallback={<AppInitialLV aria-hidden={true} />}
                loadRemote={!shouldBlockExternalEgress}
                logoUrl={slot9175}
              />,
            ];
      })
      .slice(0, 2);
  let slot6650 = slot6649;
  if (slot6650 == null || slot6650.length === 0) return null;
  return (
    <span className="mt-0.5 flex h-5 shrink-0 items-center -space-x-1">
      {slot6650}
    </span>
  );
}
function useChatgptComposerControllerHelper266(request1631, request1632) {
  const AppInitialLV = appInitialLV;
  const AppInitialDb = appInitialDb;
  const AppInitialYl = appInitialYl;
  const AppInitialSU = appInitialSU;
  const AppInitialB2 = appInitialB;
  const AppInitialGg = appInitialGg;
  const AppInitialAR = _appInitialAR;
  const AppInitialJtt = appInitialJtt;
  const AppInitialIR = appInitialIR;
  const AppInitialOlt = appInitialOlt;
  const AppInitialMA = appInitialMA;
  switch (request1631) {
    case "api_tool":
      return (
        <AppInitialLV
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "approved":
      return (
        <AppInitialDb
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "book-open":
      return (
        <AppInitialOG
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "brush-stroke":
      return (
        <AppInitialYl
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "code":
    case "run-command":
      return (
        <AppInitialSU
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "code-searching":
      return (
        <AppInitialB2
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "denied":
      return (
        <AppInitialGg
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "edit-files":
      return (
        <AppInitialAR
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "globe":
      return (
        <AppInitialJtt
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "library":
    case "/images/ecosystem/apps/library/icon.png":
      return (
        <AppInitialIs
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "list-files":
      return (
        <AppInitialIR
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "stop":
      return (
        <AppInitialOlt
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    case "thoughts":
      return (
        <AppInitialMA
          key={request1632}
          aria-hidden={true}
          className="size-5 shrink-0"
        />
      );
    default:
      return null;
  }
}
function useChatgptComposerControllerHelper267(request5407, request5408) {
  if (request5407.startsWith("/") && !request5407.startsWith("//")) {
    let slot13534 = request5408
      .find((item) => {
        return item.installUrl?.trim();
      })
      ?.installUrl?.trim();
    if (slot13534 == null) return null;
    try {
      let slot15341 = new URL(request5407, slot13534);
      return slot15341.protocol === "http:" || slot15341.protocol === "https:"
        ? slot15341.toString()
        : null;
    } catch {
      return null;
    }
  }
  return request5407.startsWith("data:") ||
    request5407.startsWith("https://") ||
    request5407.startsWith("connectors://")
    ? request5407
    : null;
}

export {
  useChatgptComposerControllerHelper265,
  useChatgptComposerControllerHelper266,
  useChatgptComposerControllerHelper267,
};
