// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// ChatGPT DIL widget markdown directive (registry AppInitialWF / Helper93).
// Value103–111 Dil React/CSS/lazy init stays in the open boundary.

import {
  appScopeAtom as appInitialFft,
  useAppScope as appInitialLT,
} from "../../boundaries/app-scope-runtime";
import { writingBlocksControllerAtom as appInitialCI } from "../../boundaries/composer-appscope-atoms";
import {
  chatgptDilRendererLazy as $f,
  chatgptDilReact,
  chatgptDilRendererCustomCss,
} from "../../boundaries/use-chatgpt-composer-controller";
import { useChatgptComposerControllerHelper46 } from "./chatgpt-dil-geolocation-permission";
import { useChatgptComposerControllerHelper52 } from "./chatgpt-dil-ecosystem-widget";
import {
  chatgptDilMapboxAccessToken,
  useChatgptComposerControllerHelper56,
} from "./chatgpt-dil-ecosystem-widget-launch";
import { useChatgptComposerControllerHelper79 } from "./chatgpt-news-carousel-references";
import {
  useChatgptComposerControllerHelper91,
  useChatgptComposerControllerHelper92,
} from "./chatgpt-entity-tab-launch";
import { isLocalChatgptId as appInitialVI } from "../../chatgpt/is-local-chatgpt-id";
import { isElectronPlatform as _AppInitialNl } from "../../config/is-electron-platform";
import { submitComposerPromptIfIdle as appInitialN } from "../../conversation/submit-composer-prompt-if-idle";
import { extractNewsCarouselNavList as appInitialFI } from "../../content/extract-news-carousel-nav-list";
import { asThreadId as appInitialVgt } from "../../conversation/as-thread-id";
import { usePreferredColorScheme as appInitialYU } from "../../hooks/use-preferred-color-scheme";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { appLogger as appInitialDdt } from "../../logging/app-logger";
import { NavigationAllowContext as appInitialIL } from "../../navigation/navigation-allow-context";
import { getAppearanceThemeMode as appInitialVU } from "../../settings/get-appearance-theme-mode";
import { ElectronOnly as appInitialG1 } from "../../ui/electron-only";
import { useChatgptComposerControllerHelper31 } from "./chatgpt-browser-host-context";
import { useChatgptComposerControllerHelper38 } from "./chatgpt-dil-action-dispatch";
import {
  useChatgptComposerControllerB,
  useChatgptComposerControllerV,
} from "./ensure-chatgpt-composer-controller-context-inits";

import {
  useChatgptComposerControllerHelper94,
  useChatgptComposerControllerHelper95,
  useChatgptComposerControllerHelper96,
  useChatgptComposerControllerHelper97,
  useChatgptComposerControllerHelper98,
  useChatgptComposerControllerHelper99,
  useChatgptComposerControllerHelper100,
  useChatgptComposerControllerHelper101,
  useChatgptComposerControllerHelper103,
} from "./chatgpt-dil-widget-helpers";

const _appInitial8 = appInitialFft;

function useChatgptComposerControllerHelper93(
  request399,
) {
  const UseChatgptComposerControllerHelper79 =
    useChatgptComposerControllerHelper79;
  const Suspense = chatgptDilReact.Suspense;
  const F = $f;
  const UseChatgptComposerControllerHelper46 =
    useChatgptComposerControllerHelper46;
  const UseChatgptComposerControllerHelper52 =
    useChatgptComposerControllerHelper52;
  const AppInitialG1 = appInitialG1;
  let { attributes, rawText } = request399,
    slot2371 = appInitialLT(_appInitial8),
    slot2372 =
      useChatgptComposerControllerHelper31(),
    slot2373 = _AppInitialNl("electron");
  let slot2374 =
      slot2373,
    slot2375 =
      chatgptDilReact.useContext(appInitialIL),
    slot2376 =
      chatgptDilReact.useContext(
        useChatgptComposerControllerB,
      ),
    slot2377 =
      chatgptDilReact.useContext(
        useChatgptComposerControllerV,
      ),
    slot2378 = appInitialJft(),
    { widget, widgetName, widgetRefId } = useChatgptComposerControllerHelper96({
      attributes,
      rawText,
    }),
    slot2379 = appInitialFI(widgetName, widget),
    slot2380 = appInitialYU(appInitialVU()),
    slot2381 =
      chatgptDilReact.useRef(null),
    slot2382 =
      chatgptDilReact.useRef(null),
    slot2383 =
      slot2372?.dilViewState?.root ??
      (widgetRefId
        ? slot2372?.dilViewState?.widgets?.[
            widgetRefId
          ]
        : undefined),
    slot2384 =
      widgetRefId?.match(/^(.+):\d+$/s)?.[1] ??
      slot2372?.messageId,
    slot2385 = {
      launch: (request5386) => {
        if (slot2372 == null)
          throw Error("Cannot launch an app outside a conversation.");
        let slot11627 =
          slot2372.browserConversationId ??
          slot2372.conversationId;
        if (appInitialVI(slot11627))
          throw Error(
            "Wait for this conversation to finish saving, then try again.",
          );
        return useChatgptComposerControllerHelper56({
          chatGptConversationId: slot11627,
          client: slot2371.get(appInitialCI),
          payload: request5386,
          sourceMessageId: slot2384,
        });
      },
      onError: useChatgptComposerControllerHelper94,
    };
  let slot2386 =
      useChatgptComposerControllerHelper92(
        slot2385,
      ),
    slot2387,
    slot2388;
  if (
    ((slot2387 = () => {
      useChatgptComposerControllerHelper95(
        slot2381.current,
        slot2383,
        slot2382,
      );
    }),
    (slot2388 = [
      slot2383,
    ]),
    chatgptDilReact.useEffect(
      slot2387,
      slot2388,
    ),
    widget == null ||
      slot2372?.shouldBlockExternalEgress ===
        true ||
      slot2375 === "restricted")
  )
    return null;
  if (slot2379 != null) {
    let slot15023;
    return (
      <UseChatgptComposerControllerHelper79
        reference={slot2379}
      />
    );
  }
  let slot2389 = (
    request11231,
  ) => {
    slot2381.current =
      request11231;
    useChatgptComposerControllerHelper95(
      request11231,
      slot2383,
      slot2382,
    );
  };
  let slot2390 = widget,
    slot2391 = (
      request9132,
    ) => {
      appInitialDdt.error("ChatGPT DIL renderer error", {
        safe: {
          widgetName: widget.type,
        },
        sensitive: {
          error: request9132,
        },
      });
    };
  let slot2392 = (
    request2821,
  ) => {
    return useChatgptComposerControllerHelper38(
      request2821,
      {
        issueNewTurn: async (request5978) => {
          let { appendToCurrentLeaf, messageMetadata, query } =
            request5978;
          if (slot2372 == null)
            throw Error("ChatGPT DIL follow-up requires a turn context");
          await appInitialN(slot2371, {
            conversationId:
              slot2372.conversationId,
            messageMetadata,
            parentMessageId: appendToCurrentLeaf
              ? undefined
              : slot2384,
            prompt: query,
          });
        },
        launchEcosystemWidget: slot2374
          ? slot2386.launch
          : undefined,
        openEntityDetail: async (request4832) => {
          let { category, extraParams, query } =
            request4832;
          if (
            slot2372 == null ||
            slot2384 == null
          )
            throw Error("ChatGPT DIL entity detail requires a turn context");
          let slot10953 = {
            category,
            extraParams: extraParams ?? null,
            locale: slot2378.locale,
            messageId: slot2384,
            query,
            sourceConversationId:
              slot2372.conversationId,
          };
          if (slot2376 != null) {
            slot2376(
              slot10953,
            );
            return;
          }
          await useChatgptComposerControllerHelper91(
            slot2371,
            slot10953,
          );
        },
        openImageLightbox: slot2377 ?? undefined,
      },
    );
  };
  let slot2393 = (
    <Suspense fallback={null}>
      <F
        className="block [font-family:var(--vscode-font-family,var(--font-sans-default))] text-token-foreground"
        theme={slot2380}
        customCss={chatgptDilRendererCustomCss}
        initialState={slot2383}
        mapboxAccessToken={chatgptDilMapboxAccessToken}
        onLoad={slot2389}
        widget={slot2390}
        onError={slot2391}
        onAction={slot2392}
      />
    </Suspense>
  );
  let slot2394 = (
    <UseChatgptComposerControllerHelper46 />
  );
  let slot2395 =
    slot2386.dialog == null ||
    slot2372 == null ? null : (
      <UseChatgptComposerControllerHelper52
        conversationId={appInitialVgt(
          slot2372.browserConversationId ??
            slot2372.conversationId,
        )}
        hostId={slot2372.hostId}
        onClose={slot2386.close}
        state={slot2386.dialog}
      />
    );
  let slot2396 = (
    <AppInitialG1 electron={true}>
      {slot2395}
    </AppInitialG1>
  );
  return (
    <div
      className="my-3 w-full max-w-[760px]"
      data-testid="chatgpt-dil-widget"
      data-widget-name={widget.type}
    >
      {slot2393}
      {slot2394}
      {slot2396}
    </div>
  );
}
function useChatgptComposerControllerHelper102(
  request6196,
) {
  const UseChatgptComposerControllerHelper93 =
    useChatgptComposerControllerHelper93;
  let { reference, widgetRefId } = request6196,
    slot12532 =
      useChatgptComposerControllerHelper103(reference, widgetRefId);
  let slot12533 =
    slot12532;
  return slot12533 == null ? null : (
    <UseChatgptComposerControllerHelper93
      rawText={slot12533}
    />
  );
}

export {
  useChatgptComposerControllerHelper93,
  useChatgptComposerControllerHelper102,
};

