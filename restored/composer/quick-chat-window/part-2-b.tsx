// Restored from ref/webview/assets/quick-chat-window-_GO18s8K.js
// Wave FZ — full polished body from `quick-chat-window-_GO18s8K/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 36 (verified 102/137).
// AST split 2/3 — lane b (dock/resize handlers, stacked conversation panels)
/* split-lane-import-depth:1 */

import { CodexRemoteSshConnectionAction } from "../../analytics/codex-remote-ssh-connection-action";
import { AppQueryClientProvider } from "../../app/app-query-client-provider";
import {
  _useChatgptComposerControllerR,
  useChatgptComposerControllerA as UseChatgptComposerControllerA,
  useChatgptComposerControllerV as UseChatgptComposerControllerV,
} from "../../composer/use-chatgpt-composer-controller";
import { quickChatSurfaceCollapsedAtom } from "../../windows/quick-chat-atoms";
import {
  attachQuickChatProject,
  setQuickChatDockPosition,
  setQuickChatSize,
} from "../../windows/quick-chat-surface-helpers";
import { QuickChatWindowHelper24 } from "./part-2-a";

/** split companion stub */
const QuickChatWindowHelper9: any = undefined;
/** split companion stub */
const tide: any = undefined;
/** split companion stub */
const umbra: any = undefined;
/** split companion stub */
const wave: any = undefined;
/** split companion stub */
const willow: any = undefined;

export function north(reefPrime: any, sagePrime: any, topazPrime: any) {
  return Math.min(Math.max(reefPrime, sagePrime), topazPrime);
}

export function createQuickChatWindowDockHandlers(props: any) {
  let {
    acornPrime,
    bloomPrime,
    canyonPrime,
    cragPrime,
    domePrime,
    eddyPrime,
    frostPrime,
    knollPrime,
    mossPrime,
    northPrime,
    wheatPrime,
  } = props;
  let ledgePrime = (bafflePrime, capstanPrime) => {
    let diaphragmPrime =
        capstanPrime === undefined
          ? {
              height: cragPrime,
              width: domePrime,
            }
          : capstanPrime,
      elbowPrime = umbra(frostPrime, diaphragmPrime, acornPrime, bloomPrime),
      ferrulePrime = {
        x: elbowPrime.x + mossPrime.get(),
        y: elbowPrime.y + northPrime.get(),
      },
      grommetPrime = umbra(bafflePrime, diaphragmPrime, acornPrime, bloomPrime);
    mossPrime.stop();
    northPrime.stop();
    mossPrime.jump(ferrulePrime.x - grommetPrime.x);
    northPrime.jump(ferrulePrime.y - grommetPrime.y);
    bafflePrime !== frostPrime &&
      tide.flushSync(() => {
        setQuickChatDockPosition(wheatPrime, bafflePrime, {
          source: CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_DRAG,
          surface: knollPrime,
        });
      });
    AppQueryClientProvider(mossPrime, 0, wave);
    AppQueryClientProvider(northPrime, 0, wave);
  };
  let nookPrime = (headerPrime, injectorPrime) => {
    let jumperPrime = willow(
        frostPrime,
        headerPrime,
        {
          height: cragPrime,
          width: domePrime,
        },
        mossPrime.get(),
        injectorPrime.width,
        acornPrime,
        bloomPrime,
      ),
      kerfPrime = eddyPrime.y + northPrime.get() + cragPrime,
      louverPrime = umbra(frostPrime, injectorPrime, acornPrime, bloomPrime),
      manifoldPrime = north(
        kerfPrime - injectorPrime.height,
        16,
        acornPrime - injectorPrime.height - 16,
      );
    mossPrime.stop();
    northPrime.stop();
    tide.flushSync(() => {
      canyonPrime(injectorPrime);
    });
    mossPrime.jump(jumperPrime);
    northPrime.jump(manifoldPrime - louverPrime.y);
  };
  let pondPrime = (nipPrime) => {
    setQuickChatSize(wheatPrime, nipPrime, {
      source:
        CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_RESIZE_HANDLE,
      surface: knollPrime,
    });
    ledgePrime(frostPrime, nipPrime);
  };
  let rapidsPrime = (outletPrime, packingPrime) => {
    attachQuickChatProject(wheatPrime, outletPrime, packingPrime);
  };
  let updraftPrime = (reducerPrime) => {
    wheatPrime.set(quickChatSurfaceCollapsedAtom, reducerPrime);
  };
  return { ledgePrime, nookPrime, pondPrime, rapidsPrime, updraftPrime };
}

export function QuickChatWindowStackedPanels(props: any) {
  let {
    _n,
    conversationId,
    glenPrime,
    knobPrime,
    lagoonPrime,
    maplePrime,
    nestPrime,
    nimbusPrime,
    variant,
  } = props;
  return lagoonPrime.map((item, index) => (
    <QuickChatWindowHelper9
      key={item.conversationId}
      {...{
        ancestors: [
          {
            id: conversationId,
            label: nimbusPrime,
            onClick: () => {
              knobPrime(0);
            },
          },
          ...lagoonPrime.slice(0, index).map((_item, _index) => ({
            id: _item.conversationId,
            label: _item.title,
            onClick: () => {
              knobPrime(_index + 1);
            },
          })),
        ],
        isActive: nestPrime == null && index === lagoonPrime.length - 1,
        minimizeLabel: variant === "floating" ? maplePrime : undefined,
        onMinimize:
          variant === "floating"
            ? () => {
                glenPrime(
                  CodexRemoteSshConnectionAction.CODEX_QUICK_CHAT_SOURCE_CLOSE_BUTTON,
                );
              }
            : undefined,
        title: item.title,
        variant: variant,
        children: [
          index === lagoonPrime.length - 1 ? (
            <_useChatgptComposerControllerR
              {...{
                conversationId: item.conversationId,
              }}
            />
          ) : null,
          <QuickChatWindowHelper24
            {...{
              footer: null,
              scrollOrigin: "top",
              variant: variant,
              children: (
                <UseChatgptComposerControllerV
                  {...{
                    value: _n,
                    children: (
                      <UseChatgptComposerControllerA
                        {...{
                          browserConversationId: undefined,
                          conversationId: item.conversationId,
                          renderInitialContentAsComplete: true,
                          renderMode: "sidebar",
                        }}
                      />
                    ),
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  ));
}
