// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Content-reference card / inline / block renderers (Helper64, 66–72).

import { getContentReferenceDisplayMode as _appInitialTI } from "../../content/get-content-reference-display-mode";
import { pickContentReferenceDisplayTitle as _AppInitialOI } from "../../content/pick-content-reference-display-title";
import { pickContentReferenceLabel as AppInitialAI } from "../../content/pick-content-reference-label";
import { pickContentReferenceUrl as AppInitialSI } from "../../content/pick-content-reference-url";
import { isChatgptMessageNode as _AppInitialNI } from "../../conversation/is-chatgpt-message-node";
import { resolveSafeMarkdownHref as _appInitialIL } from "../../markdown/resolve-safe-markdown-href";
import {
  ensureComposerEsm_LL_Init as appInitialLL,
  ensureComposerEsm_cL_Init as appInitialCL,
} from "../../boundaries/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { cx as appInitialWft } from "../../ui/cx";
import { RemoteHrefIcon as AppInitialHL } from "../../ui/remote-href-icon";
import { rolldownRuntimeN, rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import { useChatgptComposerControllerHelper24 } from "./chatgpt-markdown-citation-directive";
import { useChatgptComposerControllerHelper31 } from "./chatgpt-browser-host-context";
import { useChatgptComposerControllerHelper65 } from "./chatgpt-composer-confirmation-link";

export function useChatgptComposerControllerHelper64(request3789: any) {
  let { children, title } = request3789,
    slot9592 =
      title == null ? null : (
        <div className="mb-2 font-semibold text-token-text-primary">
          {title}
        </div>
      );
  return (
    <div
      className="my-3 max-w-[40rem] rounded-lg border border-token-border-light bg-token-bg-secondary p-3 text-sm text-token-text-primary"
      data-testid="chatgpt-content-reference-card"
    >
      {slot9592}
      {children}
    </div>
  );
}
var slot79,
  slot80,
  slot81 = rolldownRuntimeN(() => {
    slot79 = appInitialIvt();
    slot80 = appInitialJvt();
  });
var slot82,
  slot83,
  slot84,
  slot85 = rolldownRuntimeN(() => {
    slot82 = appInitialIvt();
    slot83 = rolldownRuntimeS(appInitialLvt(), 1);
    appInitialCL();
    appInitialLL();
    /* drained */
    slot84 = appInitialJvt();
  });
export function useChatgptComposerControllerHelper66(request3606: any) {
  const UseChatgptComposerControllerHelper67 =
    useChatgptComposerControllerHelper67;
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;
  const UseChatgptComposerControllerHelper70 =
    useChatgptComposerControllerHelper70;
  let { isTerminalInline, reference } = request3606;
  switch (_appInitialTI(reference)) {
    case "inline": {
      let slot13869;
      return (
        <UseChatgptComposerControllerHelper67
          isTerminalInline={isTerminalInline}
          reference={reference}
        />
      );
    }
    case "block": {
      let slot14810;
      return <UseChatgptComposerControllerHelper68 reference={reference} />;
    }
    case "alt": {
      let slot14811;
      return <UseChatgptComposerControllerHelper70 reference={reference} />;
    }
    case "hidden":
      return null;
  }
}
export function useChatgptComposerControllerHelper67(request2985: any) {
  const UseChatgptComposerControllerHelper70 =
    useChatgptComposerControllerHelper70;
  const UseChatgptComposerControllerHelper24 =
    useChatgptComposerControllerHelper24;
  let { isTerminalInline, reference } = request2985,
    slot8019 = AppInitialSI(reference);
  let slot8020 =
      slot8019,
    slot8021 = _AppInitialOI(reference);
  let slot8022 =
    slot8021;
  if (slot8022 == null) {
    let slot15021;
    return <UseChatgptComposerControllerHelper70 reference={reference} />;
  }
  if (slot8020 == null) {
    let slot13881;
    return (
      <span className="text-token-text-secondary">
        {slot8022}
      </span>
    );
  }
  let slot8023 = {
    label: slot8022,
    title: slot8022,
    url: slot8020,
  };
  return (
    <UseChatgptComposerControllerHelper24
      attributes={slot8023}
      isTerminalInline={isTerminalInline}
    />
  );
}
export function useChatgptComposerControllerHelper68(request777: any) {
  const UseChatgptComposerControllerHelper71 =
    useChatgptComposerControllerHelper71;
  let { reference } = request777,
    slot3663 = _AppInitialOI(reference);
  let slot3664 =
      slot3663,
    slot3665 = AppInitialAI(reference);
  let slot3666 =
      slot3665,
    slot3667 = _AppInitialNI(reference);
  let slot3668 =
      slot3667,
    slot3669,
    slot3670,
    slot3671,
    slot3672,
    slot3673,
    slot3674,
    slot3675,
    slot3676;
  slot3670 = Symbol.for(
    "react.early_return_sentinel",
  );
  bb0: {
    let slot5917 =
      useChatgptComposerControllerHelper72(reference);
    if (
      slot3664 == null &&
      slot3666 == null &&
      slot3668 == null &&
      slot5917.length === 0
    ) {
      slot3670 = null;
      break bb0;
    }
    let slot5918;
    {
      let slot15692 = AppInitialSI(reference);
      slot5918 =
        slot15692 == null
          ? null
          : _appInitialIL(slot15692);
    }
    slot3669 =
      slot5918;
    slot3671 =
      "my-3 max-w-[36rem] rounded-lg border border-token-border-light bg-token-bg-secondary px-3 py-2 text-sm text-token-text-primary";
    slot3672 = "chatgpt-content-reference-card";
    slot3673 =
      slot3664 == null ? null : (
        <div className="font-medium text-token-text-primary">
          {slot3664}
        </div>
      );
    slot3674 =
      slot3666 == null ? null : (
        <div className="mt-1 line-clamp-2 text-token-text-secondary">
          {slot3666}
        </div>
      );
    slot3675 =
      slot3668 == null ||
      slot3668 ===
        slot3664 ? null : (
        <div className="mt-1 line-clamp-2 text-token-text-secondary">
          {slot3668}
        </div>
      );
    slot3676 =
      slot5917.length === 0 ? null : (
        <div className="mt-2 flex flex-col gap-1">
          {slot5917.map(
            useChatgptComposerControllerHelper69,
          )}
        </div>
      );
  }
  if (
    slot3670 !==
    Symbol.for("react.early_return_sentinel")
  )
    return slot3670;
  let slot3677 = (
    <div
      className={slot3671}
      data-testid={slot3672}
    >
      {slot3673}
      {slot3674}
      {slot3675}
      {slot3676}
    </div>
  );
  let slot3678 =
    slot3677;
  if (slot3669 == null)
    return slot3678;
  return (
    <UseChatgptComposerControllerHelper71
      href={slot3669}
    >
      {slot3678}
    </UseChatgptComposerControllerHelper71>
  );
}
export function useChatgptComposerControllerHelper69(request9523: any, request9524: any) {
  return (
    <div
      key={`${request9523}-${String(request9524)}`}
      className="truncate"
    >
      {request9523}
    </div>
  );
}
export function useChatgptComposerControllerHelper70(request6636: any) {
  let { reference } = request6636,
    slot12980 = _AppInitialNI(reference);
  let slot12981 =
    slot12980;
  return slot12981 == null ? null : (
    <>{slot12981}</>
  );
}
export function useChatgptComposerControllerHelper71(request5268: any) {
  const UseChatgptComposerControllerHelper65 =
    useChatgptComposerControllerHelper65;
  let { children, href } = request5268;
  return (
    <UseChatgptComposerControllerHelper65
      className="block max-w-fit cursor-interaction rounded-lg no-underline outline-none focus-visible:ring-2 focus-visible:ring-token-focus-border"
      href={href}
      initiator="markdown_link_click"
    >
      {children}
    </UseChatgptComposerControllerHelper65>
  );
}
export function useChatgptComposerControllerHelper72(request5780: any) {
  return (
    Array.isArray(request5780.items)
      ? request5780.items
      : []
  )
    .map((item) => {
      if (typeof item != "object" || !item) return null;
      let slot13315 =
          "title" in item ? item.title : null,
        slot13316 =
          "name" in item ? item.name : null;
      return typeof slot13315 == "string" &&
        slot13315.trim().length > 0
        ? slot13315
        : typeof slot13316 == "string" &&
            slot13316.trim().length > 0
          ? slot13316
          : null;
    })
    .filter((item) => {
      return item != null;
    })
    .slice(0, 4);
}
