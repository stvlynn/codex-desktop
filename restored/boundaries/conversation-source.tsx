// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source / virtualized thread list + find highlight adapter.
// Stage 3: app-initial aliases → semantic modules; ESM inits dropped.
// Flat boundary: mechanical helper names retained (alias-out promote).
// Flat boundary facade — vendored oversized conversation source runtime module.

import { esmInit } from "../runtime/rolldown-runtime";
import * as React from "react";
import { flushSync } from "react-dom";
import { jsx } from "react/jsx-runtime";
import { type ReactNode } from "react";
import {
  animate,
  useMotionValue,
  useMotionValueEvent,
} from "../vendor/framer-motion";
import { useEventCallback } from "../hooks/use-event-callback";
import { divideByWindowZoom, useWindowZoom } from "../hooks/use-window-zoom";
import { ShellLayoutMetricsContext } from "../app-shell/shell-layout-metrics-context";
import {
  shellPanelPinnedDerivedAtom,
  shouldKeepPanelPinned,
} from "../app-shell/shell-panel-pin";
import {
  rightPanelShellOpenAtom,
  sidebarOpenAtom,
} from "../navigation/app-shell-atoms";
import { readPrefersReducedMotionAtom } from "../motion/use-prefers-reduced-motion";
import { DEFAULT_SPRING_TRANSITION } from "../ui/default-spring-transition";
import { cx } from "../ui/cx";
import { getResizeObserverEntrySize } from "../utils/create-resize-observer";
import { appScopeAtom, createScopedSignal } from "./app-scope-runtime";
import {
  useAppScopeAtomValue,
  useAppScopeValue,
} from "./composer-appscope-atoms";
import { CODEX_THREAD_FIND_ACTIVE_EVENT } from "../thread/thread-find-active-event";
import {
  conversationFindActiveMatchAtom,
  conversationFindResultAtom,
} from "../thread/thread-find-atoms";
import {
  buildMatchSnippet,
  conversationMatchId,
  findTextOffsets,
  groupConversationMatchesByUnitKey,
} from "../thread/thread-find-match-ids";
import {
  clearThreadFindMarks,
  searchDomForMatches,
  setContentSearchMatchId,
} from "../thread/thread-find-dom";
import { scrollMatchIntoView } from "../thread/thread-find-scroll";
import { mutationRecordsAffectContent } from "../thread/thread-find-mutation";
import { useThreadScrollController } from "../thread/thread-scroll-controller-context";
import {
  adjustDistanceAfterLayoutChange,
  buildThreadVirtualizerLayout,
  distanceFromBottomForTurn,
  rangeAroundAnchorKey,
  visibleRangeFromDistance,
} from "../utils/thread-virtualizer";
function conversationSourceHelper1(conversationSourceInput15) {
  let conversationSourceBinding164 = React.useRef(null),
    conversationSourceBinding165 = (conversationSourceInput41) => {
      conversationSourceBinding164.current ??= window.setTimeout(() => {
        conversationSourceBinding164.current = null;
        conversationSourceInput41();
      }, conversationSourceInput15);
    };
  let conversationSourceBinding166 = conversationSourceBinding165,
    conversationSourceBinding167 = () => {
      conversationSourceBinding164.current != null &&
        (window.clearTimeout(conversationSourceBinding164.current),
        (conversationSourceBinding164.current = null));
    };
  let conversationSourceBinding168 = conversationSourceBinding167;
  return {
    schedule: conversationSourceBinding166,
    cancel: conversationSourceBinding168,
  };
}
export type ConversationFindHighlightProps = {
  containerRef: React.RefObject<HTMLElement | null>;
  contextId: string;
};
export function conversationSourceD(
  conversationSourceInput6: ConversationFindHighlightProps,
) {
  let { containerRef, contextId } = conversationSourceInput6,
    conversationSourceBinding105 = useAppScopeValue(conversationFindResultAtom),
    conversationSourceBinding106 = useAppScopeValue(
      conversationFindActiveMatchAtom,
    ),
    conversationSourceBinding107 =
      conversationSourceBinding105?.contextId === contextId
        ? conversationSourceBinding105
        : null,
    conversationSourceBinding108 =
      conversationSourceBinding107 == null
        ? null
        : (conversationSourceBinding106?.id ?? null),
    conversationSourceBinding109 = React.useRef(null),
    { schedule, cancel } = conversationSourceHelper1(80),
    conversationSourceBinding110 = () => {
      let conversationSourceBinding132 = containerRef.current;
      if (conversationSourceBinding132 == null) return;
      clearThreadFindMarks(conversationSourceBinding132, {
        includeShadowRoots: false,
      });
      let conversationSourceBinding133 = conversationSourceBinding109.current;
      if (
        (conversationSourceBinding133 != null &&
          (conversationSourceBinding133.classList.remove(
            CODEX_THREAD_FIND_ACTIVE_EVENT,
          ),
          (conversationSourceBinding109.current = null)),
        conversationSourceBinding107 == null)
      )
        return;
      let conversationSourceBinding134 = groupConversationMatchesByUnitKey(
          conversationSourceBinding107.matches,
        ),
        conversationSourceBinding135 = new Map();
      if (
        (conversationSourceBinding132
          .querySelectorAll("[data-content-search-unit-key]")
          .forEach((item) => {
            let conversationSourceBinding193 =
              item.dataset.contentSearchUnitKey;
            if (conversationSourceBinding193 == null) return;
            let conversationSourceBinding194 = conversationSourceBinding134.get(
              conversationSourceBinding193,
            );
            conversationSourceBinding194 == null ||
              conversationSourceBinding194.length === 0 ||
              searchDomForMatches({
                target: item,
                query: conversationSourceBinding107.query,
                maxMatches: conversationSourceBinding194.length,
                includeShadowRoots: false,
              }).matches.forEach((_item, index) => {
                let conversationSourceBinding241 =
                  conversationSourceBinding194[index];
                conversationSourceBinding241 != null &&
                  (setContentSearchMatchId({
                    element: _item,
                    matchId: conversationSourceBinding241.id,
                  }),
                  conversationSourceBinding135.set(
                    conversationSourceBinding241.id,
                    _item,
                  ));
              });
          }),
        conversationSourceBinding108 == null)
      )
        return;
      let conversationSourceBinding136 = conversationSourceBinding135.get(
        conversationSourceBinding108,
      );
      conversationSourceBinding136 != null &&
        (conversationSourceBinding136.classList.add(
          CODEX_THREAD_FIND_ACTIVE_EVENT,
        ),
        (conversationSourceBinding109.current = conversationSourceBinding136));
    };
  let conversationSourceBinding111 = React.useEffectEvent(
      conversationSourceBinding110,
    ),
    conversationSourceBinding112 = () => {
      let conversationSourceBinding214 = containerRef.current;
      if (
        conversationSourceBinding214 == null ||
        (conversationSourceBinding111(),
        conversationSourceBinding107?.runId == null)
      )
        return;
      let conversationSourceBinding215 = new MutationObserver(
        (conversationSourceInput59) => {
          mutationRecordsAffectContent(conversationSourceInput59) &&
            schedule(conversationSourceBinding111);
        },
      );
      return (
        conversationSourceBinding215.observe(conversationSourceBinding214, {
          childList: true,
          subtree: true,
          characterData: true,
        }),
        () => {
          conversationSourceBinding215.disconnect();
          cancel();
        }
      );
    };
  let conversationSourceBinding113 = conversationSourceBinding107?.runId,
    conversationSourceBinding114;
  conversationSourceBinding114 = [
    conversationSourceBinding113,
    conversationSourceBinding108,
    cancel,
    containerRef,
    contextId,
    schedule,
  ];
  React.useEffect(conversationSourceBinding112, conversationSourceBinding114);
}
export type ConversationSourceListProps = {
  entries: Array<{
    turnKey: string;
    estimatedHeightPx?: number;
  }>;
  RowComponent: (props: Record<string, unknown>) => ReactNode;
  onApiChange?: (api: unknown) => void;
  onVisibleContentReady?: () => void;
  className?: string;
  gapPx?: number;
  getBottomScrollPaddingPx?: () => number;
  onLatestTurnHeightChange?: (change: unknown) => void;
  preserveMeasuredTurnViewport?: boolean;
  getPendingRestoreScrollDistanceFromBottomPx?: () => number | null;
  restoreScrollDistanceFromBottomPx?: () => void;
  initialRestoreState?: {
    turnHeightsByKey?: Record<string, number>;
  } | null;
  latestTurnFooter?: ReactNode;
  latestTurnFooterKey?: string | null;
  onRestoreStateChange?: (state: unknown) => void;
  onViewportChange?: (viewport: {
    viewportStartPx: number;
    viewportEndPx: number;
  }) => void;
  latestTurnSynchronousMeasurementKey?: string | null;
};
export function conversationSourceC({
  entries,
  RowComponent,
  onApiChange,
  onVisibleContentReady,
  className,
  gapPx = 12,
  getBottomScrollPaddingPx,
  onLatestTurnHeightChange,
  preserveMeasuredTurnViewport = false,
  getPendingRestoreScrollDistanceFromBottomPx,
  restoreScrollDistanceFromBottomPx,
  initialRestoreState,
  latestTurnFooter,
  latestTurnFooterKey,
  onRestoreStateChange,
  onViewportChange,
  latestTurnSynchronousMeasurementKey: conversationSourceInput1,
}: ConversationSourceListProps) {
  let conversationSourceBinding20 = useThreadScrollController(),
    conversationSourceBinding21 = useWindowZoom(),
    [conversationSourceBinding22, conversationSourceBinding23] = React.useState(
      initialRestoreState?.turnHeightsByKey ?? conversationSourceBinding13,
    ),
    [conversationSourceBinding24, conversationSourceBinding25] =
      React.useState(null),
    [conversationSourceBinding26, conversationSourceBinding27] = React.useState(
      () => {
        let conversationSourceBinding247 = conversationSourceHelper8(
          getBottomScrollPaddingPx,
        );
        return conversationSourceHelper3(
          entries,
          conversationSourceHelper9(
            conversationSourceBinding20.getLastScrollDistanceFromBottomPx(),
            conversationSourceBinding247,
          ),
          gapPx,
          initialRestoreState,
        );
      },
    ),
    [conversationSourceBinding28, conversationSourceBinding29] =
      React.useState(null),
    conversationSourceBinding30 = React.useRef(null),
    conversationSourceBinding31 = React.useRef(conversationSourceBinding22),
    conversationSourceBinding32 = React.useRef(conversationSourceBinding26),
    conversationSourceBinding33 = React.useRef(new Map()),
    conversationSourceBinding34 = React.useRef(new Map()),
    conversationSourceBinding35 = React.useRef(new Map()),
    conversationSourceBinding36 = React.useRef(new Map()),
    conversationSourceBinding37 = React.useRef(null),
    conversationSourceBinding38 = React.useRef(null),
    conversationSourceBinding39 = React.useRef(false),
    conversationSourceBinding40 = React.useMemo(() => {
      return buildThreadVirtualizerLayout({
        entries,
        gapPx,
        measuredHeightsByKey: conversationSourceBinding22,
      });
    }, [entries, gapPx, conversationSourceBinding22]),
    conversationSourceBinding41 = React.useRef(conversationSourceBinding40),
    conversationSourceBinding42 = React.useRef(null),
    conversationSourceBinding43 = conversationSourceBinding26.renderedRange;
  if (conversationSourceBinding28 != null) {
    let conversationSourceBinding220 = distanceFromBottomForTurn({
      layout: conversationSourceBinding40,
      turnKey: conversationSourceBinding28.turnKey,
      viewportHeightPx: conversationSourceBinding26.viewportHeightPx,
    });
    conversationSourceBinding220 != null &&
      (conversationSourceBinding43 = visibleRangeFromDistance({
        distanceFromBottomPx: conversationSourceBinding220,
        layout: conversationSourceBinding40,
        overscanCount: 2,
        viewportHeightPx: conversationSourceBinding26.viewportHeightPx,
      }));
  } else if (
    !conversationSourceHelper7(
      conversationSourceBinding26.turnKeys,
      conversationSourceBinding40.turnKeys,
    )
  ) {
    let conversationSourceBinding242 =
      conversationSourceBinding26.turnKeys[
        conversationSourceBinding26.renderedRange.startIndex
      ];
    conversationSourceBinding242 != null &&
      (conversationSourceBinding43 =
        rangeAroundAnchorKey({
          anchorKey: conversationSourceBinding242,
          layout: conversationSourceBinding40,
          previousRange: conversationSourceBinding43,
        }) ?? conversationSourceBinding43);
  }
  let conversationSourceBinding44 = useEventCallback(() => {
      conversationSourceBinding37.current ??
        restoreScrollDistanceFromBottomPx?.();
    }),
    conversationSourceBinding45 = useEventCallback(
      (conversationSourceInput24) => {
        conversationSourceInput24.latestTurnHeightChange != null &&
          onLatestTurnHeightChange?.(
            conversationSourceInput24.latestTurnHeightChange,
          );
        conversationSourceInput24.restoreScrollDistanceFromBottom
          ? conversationSourceBinding44()
          : conversationSourceInput24.scrollDistanceFromBottomPx != null &&
            conversationSourceBinding20.compensateScrollToDistanceFromBottomPx(
              conversationSourceInput24.scrollDistanceFromBottomPx,
            );
      },
    ),
    conversationSourceBinding46 = useEventCallback(
      (conversationSourceInput29, conversationSourceInput30) => {
        if (conversationSourceBinding37.current != null) return;
        let conversationSourceBinding221 = conversationSourceHelper4({
          current: conversationSourceBinding32.current,
          distanceFromBottomPx: conversationSourceInput29,
          layout: conversationSourceBinding40,
          viewportHeightPx: conversationSourceInput30,
        });
        conversationSourceBinding221 !== conversationSourceBinding32.current &&
          ((conversationSourceBinding32.current = conversationSourceBinding221),
          conversationSourceBinding27(conversationSourceBinding221));
      },
    ),
    conversationSourceBinding47 = useEventCallback(
      (conversationSourceInput35, conversationSourceInput36) => {
        if (onViewportChange == null) return;
        let conversationSourceBinding233 = Math.max(
          0,
          Math.min(
            conversationSourceBinding40.totalHeightPx,
            conversationSourceBinding40.totalHeightPx -
              conversationSourceInput35,
          ),
        );
        onViewportChange({
          viewportEndPx: conversationSourceBinding233,
          viewportStartPx: Math.max(
            0,
            conversationSourceBinding233 - conversationSourceInput36,
          ),
        });
      },
    ),
    conversationSourceBinding48 = useEventCallback(
      (conversationSourceInput39) => {
        queueMicrotask(() => {
          conversationSourceBinding30.current === conversationSourceInput39 &&
            (conversationSourceInput39.complete(),
            (conversationSourceBinding30.current = null));
          conversationSourceBinding29((conversationSourceInput61) => {
            return conversationSourceInput61 === conversationSourceInput39
              ? null
              : conversationSourceInput61;
          });
        });
      },
    ),
    conversationSourceBinding49 = useEventCallback(
      (
        conversationSourceInput26,
        conversationSourceInput27,
        conversationSourceInput28,
      ) => {
        return (
          conversationSourceBinding30.current?.complete(),
          new Promise((conversationSourceInput34) => {
            let conversationSourceBinding229 = {
              align: conversationSourceInput28?.align ?? "center",
              complete: conversationSourceInput34,
              getTargetElement: conversationSourceInput27,
              turnKey: conversationSourceInput26,
            };
            conversationSourceBinding30.current = conversationSourceBinding229;
            conversationSourceBinding29(conversationSourceBinding229);
          })
        );
      },
    ),
    conversationSourceBinding50 = useEventCallback(
      (conversationSourceInput33) => {
        let conversationSourceBinding226 =
          conversationSourceBinding40.turnIndexByKey.get(
            conversationSourceInput33,
          );
        if (conversationSourceBinding226 == null) return null;
        let conversationSourceBinding227 =
            conversationSourceBinding40.topOffsetsPx[
              conversationSourceBinding226
            ],
          conversationSourceBinding228 =
            conversationSourceBinding40.heightsPx[conversationSourceBinding226];
        return conversationSourceBinding227 == null ||
          conversationSourceBinding228 == null
          ? null
          : {
              endPx:
                conversationSourceBinding227 + conversationSourceBinding228,
              startPx: conversationSourceBinding227,
            };
      },
    ),
    conversationSourceBinding51 = useEventCallback(() => {
      let conversationSourceBinding186 = 0,
        conversationSourceBinding187 = null;
      for (let [
        conversationSourceBinding231,
        conversationSourceBinding232,
      ] of conversationSourceBinding36.current) {
        conversationSourceBinding186 += conversationSourceBinding232;
        (conversationSourceBinding187 == null ||
          conversationSourceBinding187.compareDocumentPosition(
            conversationSourceBinding231,
          ) === Node.DOCUMENT_POSITION_FOLLOWING) &&
          (conversationSourceBinding187 = conversationSourceBinding231);
      }
      conversationSourceBinding187 != null &&
        onLatestTurnHeightChange?.({
          heightDeltaPx: null,
          heightPx: null,
          bottomViewportOverflowPx: conversationSourceHelper12({
            scrollElement: conversationSourceBinding20.getScrollElement(),
            turnElement: conversationSourceBinding187,
            windowZoom: conversationSourceBinding21,
          }),
          turnElement: conversationSourceBinding187,
          followContentHeightPx: conversationSourceBinding186,
        });
    }),
    conversationSourceBinding52 = useEventCallback(
      (conversationSourceInput4, conversationSourceInput5 = true) => {
        let conversationSourceBinding81 = conversationSourceBinding37.current,
          conversationSourceBinding82 = conversationSourceBinding31.current,
          conversationSourceBinding83 = conversationSourceBinding82,
          conversationSourceBinding84 = 0,
          conversationSourceBinding85 = false,
          conversationSourceBinding86 = null,
          conversationSourceBinding87 = 0,
          conversationSourceBinding88 = 0,
          conversationSourceBinding89 =
            conversationSourceBinding20.getLastScrollDistanceFromBottomPx(),
          conversationSourceBinding90 = conversationSourceHelper8(
            getBottomScrollPaddingPx,
          ),
          conversationSourceBinding91 = conversationSourceHelper9(
            conversationSourceBinding89,
            conversationSourceBinding90,
          ),
          conversationSourceBinding92 = preserveMeasuredTurnViewport
            ? null
            : (getPendingRestoreScrollDistanceFromBottomPx?.() ?? null),
          conversationSourceBinding93 =
            conversationSourceBinding81 == null
              ? conversationSourceBinding91
              : conversationSourceBinding32.current.distanceFromBottomPx;
        for (let [
          conversationSourceBinding173,
          {
            element: conversationSourceBinding174,
            heightPx: conversationSourceBinding175,
          },
        ] of conversationSourceInput4) {
          let conversationSourceBinding178 =
            conversationSourceBinding34.current.get(
              conversationSourceBinding173,
            );
          if (conversationSourceBinding178 !== conversationSourceBinding174)
            continue;
          let conversationSourceBinding179 = Math.max(
              1,
              conversationSourceBinding175,
            ),
            conversationSourceBinding180 =
              conversationSourceBinding82[conversationSourceBinding173];
          if (conversationSourceBinding180 === conversationSourceBinding179)
            continue;
          conversationSourceBinding83 === conversationSourceBinding82 &&
            (conversationSourceBinding83 = {
              ...conversationSourceBinding82,
            });
          conversationSourceBinding83[conversationSourceBinding173] =
            conversationSourceBinding179;
          let conversationSourceBinding181 =
              conversationSourceBinding180 == null
                ? 0
                : conversationSourceBinding179 - conversationSourceBinding180,
            conversationSourceBinding182 =
              conversationSourceBinding40.turnIndexByKey.get(
                conversationSourceBinding173,
              );
          if (conversationSourceBinding182 == null) continue;
          let conversationSourceBinding183 =
            conversationSourceBinding182 ===
            conversationSourceBinding40.turnKeys.length - 1;
          conversationSourceBinding183 &&
            ((conversationSourceBinding85 = true),
            (conversationSourceBinding84 += conversationSourceBinding181),
            (conversationSourceBinding86 = conversationSourceBinding178));
          let conversationSourceBinding184 =
            conversationSourceBinding179 -
            (conversationSourceBinding40.heightsPx[
              conversationSourceBinding182
            ] ?? conversationSourceBinding179);
          conversationSourceBinding87 += conversationSourceBinding184;
          let conversationSourceBinding185 =
            conversationSourceBinding40.bottomOffsetsPx[
              conversationSourceBinding182
            ] ?? 0;
          conversationSourceBinding184 !== 0 &&
            conversationSourceBinding185 <= conversationSourceBinding93 &&
            (preserveMeasuredTurnViewport ||
              (getPendingRestoreScrollDistanceFromBottomPx != null &&
                !conversationSourceBinding183)) &&
            (conversationSourceBinding88 += conversationSourceBinding184);
        }
        if (conversationSourceBinding83 === conversationSourceBinding82)
          return false;
        let conversationSourceBinding94 =
            preserveMeasuredTurnViewport &&
            conversationSourceHelper10(
              conversationSourceBinding89,
              conversationSourceBinding90,
            ),
          conversationSourceBinding95 =
            conversationSourceBinding81?.restoreScrollDistanceFromBottom ||
            conversationSourceBinding92 != null,
          conversationSourceBinding96 = null;
        conversationSourceBinding95 ||
          (conversationSourceBinding96 = conversationSourceBinding94
            ? 0
            : conversationSourceBinding88 === 0
              ? (conversationSourceBinding81?.scrollDistanceFromBottomPx ??
                null)
              : (conversationSourceBinding81?.scrollDistanceFromBottomPx ??
                  conversationSourceBinding89) + conversationSourceBinding88);
        let conversationSourceBinding97 =
          conversationSourceBinding32.current.distanceFromBottomPx;
        conversationSourceBinding95
          ? (conversationSourceBinding97 =
              conversationSourceBinding92 ?? conversationSourceBinding97)
          : conversationSourceBinding96 != null &&
            (conversationSourceBinding97 = conversationSourceHelper9(
              conversationSourceBinding96,
              conversationSourceBinding90,
            ));
        let conversationSourceBinding98 = buildThreadVirtualizerLayout({
          entries,
          gapPx,
          measuredHeightsByKey: conversationSourceBinding83,
        });
        conversationSourceBinding42.current ??= conversationSourceBinding40;
        let conversationSourceBinding99 = conversationSourceHelper4({
            current: conversationSourceBinding32.current,
            distanceFromBottomPx: conversationSourceBinding97,
            layout: conversationSourceBinding98,
            viewportHeightPx:
              conversationSourceBinding32.current.viewportHeightPx,
          }),
          conversationSourceBinding100 =
            conversationSourceBinding81?.latestTurnHeightChange,
          conversationSourceBinding101 =
            conversationSourceBinding86 ??
            conversationSourceBinding100?.turnElement ??
            null,
          conversationSourceBinding102 = {
            latestTurnHeightChange:
              conversationSourceBinding85 ||
              conversationSourceBinding100 != null
                ? {
                    heightDeltaPx:
                      (conversationSourceBinding100?.heightDeltaPx ?? 0) +
                      conversationSourceBinding84,
                    heightPx:
                      conversationSourceBinding98.heightsPx.at(-1) ?? null,
                    bottomViewportOverflowPx: conversationSourceHelper12({
                      scrollElement:
                        conversationSourceBinding20.getScrollElement(),
                      turnElement: conversationSourceBinding101,
                      windowZoom: conversationSourceBinding21,
                    }),
                    turnElement: conversationSourceBinding101,
                    followContentHeightPx: null,
                  }
                : null,
            restoreScrollDistanceFromBottom: conversationSourceBinding95,
            scrollDistanceFromBottomPx: conversationSourceBinding96,
            turnHeightsByKey: conversationSourceBinding83,
          },
          conversationSourceBinding103 = () => {
            conversationSourceBinding31.current = conversationSourceBinding83;
            conversationSourceBinding23(conversationSourceBinding83);
            conversationSourceBinding99 !==
              conversationSourceBinding32.current &&
              ((conversationSourceBinding32.current =
                conversationSourceBinding99),
              conversationSourceBinding27(conversationSourceBinding99));
          };
        return (
          (conversationSourceBinding37.current = conversationSourceBinding102),
          preserveMeasuredTurnViewport &&
            conversationSourceBinding87 !== 0 &&
            conversationSourceBinding88 === 0 &&
            !conversationSourceBinding94 &&
            !conversationSourceBinding95 &&
            conversationSourceBinding20.preserveScrollPositionForNextLayout(),
          conversationSourceInput5
            ? flushSync(conversationSourceBinding103)
            : conversationSourceBinding103(),
          true
        );
      },
    ),
    conversationSourceBinding53 = useEventCallback(() => {
      if (conversationSourceBinding38.current != null)
        return conversationSourceBinding38.current;
      let conversationSourceBinding170 = new ResizeObserver(
        (conversationSourceInput18) => {
          let conversationSourceBinding195 = new Map(),
            conversationSourceBinding196 = false;
          for (let conversationSourceBinding206 of conversationSourceInput18) {
            let conversationSourceBinding208 =
              conversationSourceBinding33.current.get(
                conversationSourceBinding206.target,
              );
            if (conversationSourceBinding208 == null) continue;
            let { height } = getResizeObserverEntrySize(
              conversationSourceBinding206,
            );
            switch (conversationSourceBinding208.kind) {
              case "turn":
                conversationSourceBinding195.set(
                  conversationSourceBinding208.turnKey,
                  {
                    element: conversationSourceBinding206.target,
                    heightPx: height,
                  },
                );
                break;
              case "latest-turn-follow-content":
                conversationSourceBinding36.current.set(
                  conversationSourceBinding208.element,
                  height,
                );
                conversationSourceBinding196 = true;
                break;
            }
          }
          conversationSourceBinding52(conversationSourceBinding195);
          conversationSourceBinding196 && conversationSourceBinding51();
        },
      );
      return (
        (conversationSourceBinding38.current = conversationSourceBinding170),
        conversationSourceBinding170
      );
    }),
    conversationSourceBinding54 = useEventCallback(
      (conversationSourceInput19, conversationSourceInput20) => {
        if (conversationSourceInput20 == null) return;
        conversationSourceBinding33.current.set(conversationSourceInput20, {
          kind: "turn",
          turnKey: conversationSourceInput19,
        });
        conversationSourceBinding34.current.set(
          conversationSourceInput19,
          conversationSourceInput20,
        );
        conversationSourceBinding35.current.set(
          conversationSourceInput19,
          conversationSourceInput20,
        );
        let conversationSourceBinding205 = conversationSourceBinding53();
        return (
          conversationSourceBinding205.observe(conversationSourceInput20),
          () => {
            conversationSourceBinding205.unobserve(conversationSourceInput20);
            conversationSourceBinding33.current.delete(
              conversationSourceInput20,
            );
            conversationSourceBinding35.current.get(
              conversationSourceInput19,
            ) === conversationSourceInput20 &&
              conversationSourceBinding35.current.delete(
                conversationSourceInput19,
              );
            conversationSourceBinding34.current.get(
              conversationSourceInput19,
            ) === conversationSourceInput20 &&
              conversationSourceBinding34.current.delete(
                conversationSourceInput19,
              );
          }
        );
      },
    ),
    conversationSourceBinding55 = useEventCallback(() => {
      let conversationSourceBinding222 = entries.at(-1)?.turnKey;
      if (conversationSourceBinding222 == null) return;
      let conversationSourceBinding223 =
        conversationSourceBinding34.current.get(conversationSourceBinding222);
      if (conversationSourceBinding223 == null) return;
      let conversationSourceBinding224 =
        conversationSourceBinding223.offsetHeight;
      conversationSourceBinding224 <= 0 ||
        conversationSourceBinding52(
          new Map([
            [
              conversationSourceBinding222,
              {
                element: conversationSourceBinding223,
                heightPx: conversationSourceBinding224,
              },
            ],
          ]),
          false,
        );
    }),
    _e = useEventCallback((conversationSourceInput25) => {
      if (conversationSourceInput25 == null) return;
      conversationSourceBinding33.current.set(conversationSourceInput25, {
        element: conversationSourceInput25,
        kind: "latest-turn-follow-content",
      });
      conversationSourceBinding36.current.set(conversationSourceInput25, 0);
      let conversationSourceBinding218 = conversationSourceBinding53();
      return (
        conversationSourceBinding218.observe(conversationSourceInput25),
        () => {
          conversationSourceBinding218.unobserve(conversationSourceInput25);
          conversationSourceBinding33.current.delete(conversationSourceInput25);
          conversationSourceBinding36.current.delete(conversationSourceInput25);
        }
      );
    });
  React.useLayoutEffect(() => {
    let conversationSourceBinding209 = conversationSourceBinding35.current;
    if (conversationSourceBinding209.size === 0) return;
    conversationSourceBinding35.current = new Map();
    let conversationSourceBinding210 = new Map();
    for (let [
      conversationSourceBinding237,
      conversationSourceBinding238,
    ] of conversationSourceBinding209) {
      if (
        conversationSourceBinding34.current.get(
          conversationSourceBinding237,
        ) !== conversationSourceBinding238
      )
        continue;
      let conversationSourceBinding243 =
        conversationSourceBinding238.offsetHeight;
      conversationSourceBinding243 > 0 &&
        conversationSourceBinding210.set(conversationSourceBinding237, {
          element: conversationSourceBinding238,
          heightPx: conversationSourceBinding243,
        });
    }
    if (
      conversationSourceBinding210.size > 0 &&
      conversationSourceBinding52(conversationSourceBinding210, false)
    )
      for (let [
        conversationSourceBinding252,
        conversationSourceBinding253,
      ] of conversationSourceBinding209)
        conversationSourceBinding34.current.get(
          conversationSourceBinding252,
        ) === conversationSourceBinding253 &&
          conversationSourceBinding35.current.set(
            conversationSourceBinding252,
            conversationSourceBinding253,
          );
  });
  React.useLayoutEffect(() => {
    conversationSourceInput1 != null && conversationSourceBinding55();
  }, [conversationSourceInput1, conversationSourceBinding55]);
  React.useLayoutEffect(() => {
    let conversationSourceBinding246 = conversationSourceBinding37.current;
    conversationSourceBinding246 == null ||
      conversationSourceBinding246.turnHeightsByKey !==
        conversationSourceBinding22 ||
      ((conversationSourceBinding37.current = null),
      conversationSourceBinding45(conversationSourceBinding246));
  }, [conversationSourceBinding45, conversationSourceBinding22]);
  React.useEffect(() => {
    if (onApiChange != null)
      return (
        onApiChange({
          getEntryGeometry: conversationSourceBinding50,
          scrollToKey: conversationSourceBinding49,
        }),
        () => {
          onApiChange(null);
        }
      );
  }, [conversationSourceBinding50, onApiChange, conversationSourceBinding49]);
  React.useEffect(() => {
    if (
      onVisibleContentReady == null ||
      conversationSourceBinding39.current ||
      conversationSourceBinding24 == null ||
      (entries.length > 0 && conversationSourceBinding34.current.size === 0)
    )
      return;
    let conversationSourceBinding197 = null,
      conversationSourceBinding198 = window.requestAnimationFrame(() => {
        conversationSourceBinding197 = window.requestAnimationFrame(() => {
          conversationSourceBinding39.current = true;
          conversationSourceBinding44();
          onVisibleContentReady();
        });
      });
    return () => {
      window.cancelAnimationFrame(conversationSourceBinding198);
      conversationSourceBinding197 != null &&
        window.cancelAnimationFrame(conversationSourceBinding197);
    };
  }, [
    entries.length,
    onVisibleContentReady,
    conversationSourceBinding44,
    conversationSourceBinding24,
  ]);
  React.useEffect(() => {
    let conversationSourceBinding211 = conversationSourceBinding33.current,
      conversationSourceBinding212 = conversationSourceBinding34.current,
      conversationSourceBinding213 = conversationSourceBinding36.current;
    return () => {
      conversationSourceBinding38.current?.disconnect();
      conversationSourceBinding38.current = null;
      conversationSourceBinding211.clear();
      conversationSourceBinding212.clear();
      conversationSourceBinding35.current.clear();
      conversationSourceBinding213.clear();
      conversationSourceBinding37.current = null;
      conversationSourceBinding30.current?.complete();
      conversationSourceBinding30.current = null;
    };
  }, []);
  React.useLayoutEffect(() => {
    if (onRestoreStateChange != null)
      return () => {
        onRestoreStateChange(
          conversationSourceHelper11(
            conversationSourceBinding31.current,
            conversationSourceBinding32.current.turnKeys,
            conversationSourceBinding32.current.renderedRange,
          ),
        );
      };
  }, [onRestoreStateChange]);
  let {
    addScrollListener,
    addUserScrollListener,
    getScrollElement: _conversationSourceD,
  } = conversationSourceBinding20;
  React.useLayoutEffect(() => {
    let conversationSourceBinding188 = _conversationSourceD();
    if (conversationSourceBinding188 == null) return;
    let conversationSourceBinding189 = () => {
        return (
          conversationSourceBinding188.clientHeight ||
          conversationSourceBinding32.current.viewportHeightPx ||
          800
        );
      },
      conversationSourceBinding190 = addScrollListener(
        (conversationSourceInput51) => {
          let conversationSourceBinding254 = conversationSourceHelper9(
            conversationSourceInput51,
            conversationSourceHelper8(getBottomScrollPaddingPx),
          );
          conversationSourceBinding46(
            conversationSourceBinding254,
            conversationSourceBinding189(),
          );
        },
      ),
      conversationSourceBinding191 = addUserScrollListener(
        (conversationSourceInput58) => {
          conversationSourceBinding47(
            conversationSourceHelper9(
              conversationSourceInput58,
              conversationSourceHelper8(getBottomScrollPaddingPx),
            ),
            conversationSourceBinding189(),
          );
        },
      ),
      conversationSourceBinding192 = new ResizeObserver(
        (conversationSourceInput40) => {
          let conversationSourceBinding239 = conversationSourceInput40[0];
          if (conversationSourceBinding239 == null) return;
          let { height } = getResizeObserverEntrySize(
            conversationSourceBinding239,
          );
          conversationSourceBinding46(
            conversationSourceBinding32.current.distanceFromBottomPx,
            height,
          );
          conversationSourceBinding44();
        },
      );
    return (
      conversationSourceBinding192.observe(conversationSourceBinding188),
      () => {
        conversationSourceBinding190();
        conversationSourceBinding191();
        conversationSourceBinding192.disconnect();
      }
    );
  }, [
    addScrollListener,
    addUserScrollListener,
    getBottomScrollPaddingPx,
    _conversationSourceD,
    conversationSourceBinding47,
    conversationSourceBinding44,
    conversationSourceBinding24,
    conversationSourceBinding46,
  ]);
  React.useLayoutEffect(() => {
    if (conversationSourceBinding28 == null) return;
    let conversationSourceBinding122 =
      conversationSourceBinding20.getScrollElement();
    if (conversationSourceBinding122 == null) return;
    let conversationSourceBinding123 = new Map();
    for (let [
      conversationSourceBinding244,
      conversationSourceBinding245,
    ] of conversationSourceBinding34.current) {
      let conversationSourceBinding250 =
        conversationSourceBinding245.offsetHeight;
      conversationSourceBinding250 > 0 &&
        conversationSourceBinding123.set(conversationSourceBinding244, {
          element: conversationSourceBinding245,
          heightPx: conversationSourceBinding250,
        });
    }
    if (
      conversationSourceBinding52(conversationSourceBinding123, false) ||
      conversationSourceBinding37.current != null
    )
      return;
    let conversationSourceBinding124 = conversationSourceBinding34.current.get(
        conversationSourceBinding28.turnKey,
      ),
      conversationSourceBinding125 =
        conversationSourceBinding124 == null
          ? null
          : (conversationSourceBinding28.getTargetElement?.(
              conversationSourceBinding124,
            ) ?? conversationSourceBinding124),
      conversationSourceBinding126 =
        conversationSourceBinding124 == null ||
        conversationSourceBinding125 == null
          ? conversationSourceHelper13({
              align: conversationSourceBinding28.align,
              layout: conversationSourceBinding40,
              turnKey: conversationSourceBinding28.turnKey,
              viewportHeightPx: conversationSourceBinding122.clientHeight,
            })
          : conversationSourceHelper14({
              align: conversationSourceBinding28.align,
              layout: conversationSourceBinding40,
              targetElement: conversationSourceBinding125,
              turnElement: conversationSourceBinding124,
              turnKey: conversationSourceBinding28.turnKey,
              viewportHeightPx: conversationSourceBinding122.clientHeight,
              windowZoom: conversationSourceBinding21,
            });
    if (conversationSourceBinding126 == null) {
      conversationSourceBinding48(conversationSourceBinding28);
      return;
    }
    conversationSourceBinding20.scrollToDistanceFromBottomPx(
      conversationSourceBinding126 +
        conversationSourceHelper8(getBottomScrollPaddingPx),
      "instant",
      "user",
    );
    conversationSourceBinding46(
      conversationSourceBinding126,
      conversationSourceBinding122.clientHeight,
    );
    conversationSourceBinding48(conversationSourceBinding28);
  }, [
    conversationSourceBinding52,
    conversationSourceBinding40,
    conversationSourceBinding28,
    conversationSourceBinding20,
    conversationSourceBinding48,
    getBottomScrollPaddingPx,
    conversationSourceBinding46,
    conversationSourceBinding21,
  ]);
  React.useLayoutEffect(() => {
    if (conversationSourceBinding37.current != null) return;
    let conversationSourceBinding148 = conversationSourceBinding41.current,
      conversationSourceBinding149 =
        conversationSourceBinding42.current ?? conversationSourceBinding40;
    if (
      ((conversationSourceBinding42.current = null),
      (conversationSourceBinding41.current = conversationSourceBinding40),
      !preserveMeasuredTurnViewport ||
        conversationSourceBinding28 != null ||
        conversationSourceBinding148 === conversationSourceBinding149)
    )
      return;
    let conversationSourceBinding150 = conversationSourceHelper8(
        getBottomScrollPaddingPx,
      ),
      conversationSourceBinding151 =
        conversationSourceBinding20.getLastScrollDistanceFromBottomPx(),
      conversationSourceBinding152 = conversationSourceHelper9(
        conversationSourceBinding151,
        conversationSourceBinding150,
      );
    if (
      (getPendingRestoreScrollDistanceFromBottomPx?.() ?? null) != null ||
      conversationSourceHelper10(
        conversationSourceBinding151,
        conversationSourceBinding150,
      )
    )
      return;
    let conversationSourceBinding153 = conversationSourceHelper6({
      distanceFromBottomPx: conversationSourceBinding152,
      layout: conversationSourceBinding148,
      measuredHeightsByKey: conversationSourceBinding31.current,
      nextLayout: conversationSourceBinding149,
      viewportHeightPx: conversationSourceBinding32.current.viewportHeightPx,
    });
    if (conversationSourceBinding153 == null) return;
    let conversationSourceBinding154 = adjustDistanceAfterLayoutChange({
      anchorKey: conversationSourceBinding153,
      distanceFromBottomPx: conversationSourceBinding152,
      nextLayout: conversationSourceBinding149,
      previousLayout: conversationSourceBinding148,
    });
    conversationSourceBinding154 == null ||
      conversationSourceBinding154 === conversationSourceBinding152 ||
      (conversationSourceBinding46(
        conversationSourceBinding154,
        conversationSourceBinding32.current.viewportHeightPx,
      ),
      conversationSourceBinding20.compensateScrollToDistanceFromBottomPx(
        conversationSourceBinding154 + conversationSourceBinding150,
      ));
  }, [
    getBottomScrollPaddingPx,
    getPendingRestoreScrollDistanceFromBottomPx,
    conversationSourceBinding40,
    conversationSourceBinding28,
    preserveMeasuredTurnViewport,
    conversationSourceBinding20,
    conversationSourceBinding46,
  ]);
  React.useLayoutEffect(() => {
    conversationSourceBinding28 ??
      (conversationSourceBinding46(
        conversationSourceBinding32.current.distanceFromBottomPx,
        conversationSourceBinding32.current.viewportHeightPx,
      ),
      conversationSourceBinding44());
  }, [
    entries.length,
    conversationSourceBinding28,
    conversationSourceBinding44,
    conversationSourceBinding46,
  ]);
  let be = latestTurnFooterKey ?? entries.at(-1)?.turnKey;
  return (
    <div
      ref={conversationSourceBinding25}
      className={cx("relative shrink-0", className)}
      style={{
        height: `${conversationSourceBinding40.totalHeightPx}px`,
      }}
    >
      <div
        className="flex flex-col"
        style={{
          gap: `${gapPx}px`,
          marginTop: `${conversationSourceBinding40.topOffsetsPx[conversationSourceBinding43.startIndex] ?? 0}px`,
        }}
      >
        {entries
          .slice(
            conversationSourceBinding43.startIndex,
            conversationSourceBinding43.endIndex,
          )
          .map((item, index) => {
            let conversationSourceBinding177 =
              conversationSourceBinding43.startIndex + index;
            return jsx(
              conversationSourceBinding14 as React.ComponentType<
                Record<string, unknown>
              >,
              {
                entry: item,
                latestTurnFollowContentRef:
                  conversationSourceBinding177 === entries.length - 1 &&
                  onLatestTurnHeightChange != null
                    ? _e
                    : undefined,
                latestTurnFooter:
                  item.turnKey === be ? latestTurnFooter : undefined,
                RowComponent,
                constrainedHeightPx:
                  conversationSourceBinding177 !== entries.length - 1 &&
                  conversationSourceBinding28?.turnKey !== item.turnKey &&
                  conversationSourceBinding22[item.turnKey] == null
                    ? conversationSourceBinding40.heightsPx[
                        conversationSourceBinding177
                      ]
                    : undefined,
                observeTurnElement: conversationSourceBinding54,
              },
              item.turnKey,
            );
          })}
      </div>
    </div>
  );
}
function conversationSourceHelper2(conversationSourceInput7) {
  let {
      entry,
      latestTurnFollowContentRef,
      latestTurnFooter,
      RowComponent,
      constrainedHeightPx,
      observeTurnElement,
    } = conversationSourceInput7,
    { turnKey } = entry,
    conversationSourceBinding116 = (conversationSourceInput62) => {
      return observeTurnElement(turnKey, conversationSourceInput62);
    };
  let conversationSourceBinding117 = useEventCallback(
      conversationSourceBinding116,
    ),
    conversationSourceBinding118 =
      constrainedHeightPx == null
        ? undefined
        : {
            height: constrainedHeightPx,
            overflow: "hidden",
          };
  let conversationSourceBinding119 = (
    <RowComponent
      entry={entry}
      latestTurnFooter={latestTurnFooter}
      latestTurnFollowContentRef={latestTurnFollowContentRef}
    />
  );
  let conversationSourceBinding120 = (
    <div
      ref={conversationSourceBinding117}
      className="[&_[data-virtualized-turn-content]]:[content-visibility:visible]"
      data-turn-key={turnKey}
    >
      {conversationSourceBinding119}
    </div>
  );
  return (
    <div style={conversationSourceBinding118}>
      {conversationSourceBinding120}
    </div>
  );
}
function conversationSourceHelper3(
  conversationSourceInput11,
  conversationSourceInput12,
  conversationSourceInput13,
  conversationSourceInput14,
) {
  let conversationSourceBinding155 = buildThreadVirtualizerLayout({
      entries: conversationSourceInput11,
      gapPx: conversationSourceInput13,
      measuredHeightsByKey:
        conversationSourceInput14?.turnHeightsByKey ??
        conversationSourceBinding13,
    }),
    conversationSourceBinding157 = Math.min(
      conversationSourceInput12,
      conversationSourceBinding155.totalHeightPx,
    ),
    conversationSourceBinding158 = visibleRangeFromDistance({
      distanceFromBottomPx: conversationSourceBinding157,
      layout: conversationSourceBinding155,
      overscanCount: 2,
      viewportHeightPx: 800,
    });
  return {
    distanceFromBottomPx: conversationSourceBinding157,
    renderedRange:
      (conversationSourceInput14?.renderedWindow == null
        ? null
        : rangeAroundAnchorKey({
            anchorKey: conversationSourceInput14.renderedWindow.anchorKey,
            layout: conversationSourceBinding155,
            previousRange: {
              startIndex: 0,
              endIndex: Math.min(
                conversationSourceInput14.renderedWindow.count,
                conversationSourceBinding158.endIndex -
                  conversationSourceBinding158.startIndex,
              ),
            },
          })) ?? conversationSourceBinding158,
    turnKeys: conversationSourceBinding155.turnKeys,
    viewportHeightPx: 800,
  };
}
function conversationSourceHelper4({
  current,
  distanceFromBottomPx,
  layout,
  viewportHeightPx,
}) {
  let conversationSourceBinding160 = Math.min(
      distanceFromBottomPx,
      layout.totalHeightPx,
    ),
    conversationSourceBinding161 = visibleRangeFromDistance({
      distanceFromBottomPx: conversationSourceBinding160,
      layout,
      overscanCount: 2,
      viewportHeightPx,
    }),
    conversationSourceBinding162 = conversationSourceHelper5(
      current.renderedRange,
      conversationSourceBinding161,
    )
      ? current.renderedRange
      : conversationSourceBinding161;
  return current.distanceFromBottomPx === conversationSourceBinding160 &&
    current.viewportHeightPx === viewportHeightPx &&
    current.renderedRange.startIndex ===
      conversationSourceBinding162.startIndex &&
    current.renderedRange.endIndex === conversationSourceBinding162.endIndex &&
    conversationSourceHelper7(current.turnKeys, layout.turnKeys)
    ? current
    : {
        distanceFromBottomPx: conversationSourceBinding160,
        renderedRange: conversationSourceBinding162,
        turnKeys: layout.turnKeys,
        viewportHeightPx,
      };
}
function conversationSourceHelper5(
  conversationSourceInput45,
  conversationSourceInput46,
) {
  return (
    conversationSourceInput45.startIndex <=
      conversationSourceInput46.startIndex &&
    conversationSourceInput45.endIndex >= conversationSourceInput46.endIndex
  );
}
function conversationSourceHelper6({
  distanceFromBottomPx,
  layout,
  measuredHeightsByKey,
  nextLayout,
  viewportHeightPx,
}) {
  let conversationSourceBinding207 = visibleRangeFromDistance({
    distanceFromBottomPx,
    layout,
    overscanCount: 0,
    viewportHeightPx,
  });
  for (
    let conversationSourceBinding240 = conversationSourceBinding207.startIndex;
    conversationSourceBinding240 < conversationSourceBinding207.endIndex;
    conversationSourceBinding240 += 1
  ) {
    let conversationSourceBinding248 =
      layout.turnKeys[conversationSourceBinding240];
    if (
      conversationSourceBinding248 != null &&
      measuredHeightsByKey[conversationSourceBinding248] != null &&
      nextLayout.turnIndexByKey.has(conversationSourceBinding248)
    )
      return conversationSourceBinding248;
  }
  return null;
}
function conversationSourceHelper7(
  conversationSourceInput43,
  conversationSourceInput44,
) {
  return (
    conversationSourceInput43 === conversationSourceInput44 ||
    (conversationSourceInput43.length === conversationSourceInput44.length &&
      conversationSourceInput43.every((item, index) => {
        return item === conversationSourceInput44[index];
      }))
  );
}
function conversationSourceHelper8(conversationSourceInput54) {
  return Math.max(0, conversationSourceInput54?.() ?? 0);
}
function conversationSourceHelper9(
  conversationSourceInput55,
  conversationSourceInput56,
) {
  return Math.max(0, conversationSourceInput55 - conversationSourceInput56);
}
function conversationSourceHelper10(
  conversationSourceInput52,
  conversationSourceInput53,
) {
  return conversationSourceInput52 <= (conversationSourceInput53 > 0 ? 0 : 24);
}
function conversationSourceHelper11(
  conversationSourceInput21,
  conversationSourceInput22,
  conversationSourceInput23,
) {
  let conversationSourceBinding216 = {};
  for (let conversationSourceBinding251 of conversationSourceInput22) {
    let conversationSourceBinding255 =
      conversationSourceInput21[conversationSourceBinding251];
    conversationSourceBinding255 != null &&
      (conversationSourceBinding216[conversationSourceBinding251] =
        conversationSourceBinding255);
  }
  let conversationSourceBinding217 =
    conversationSourceInput22[conversationSourceInput23.startIndex];
  return Object.keys(conversationSourceBinding216).length === 0 ||
    conversationSourceBinding217 == null
    ? null
    : {
        renderedWindow: {
          anchorKey: conversationSourceBinding217,
          count:
            conversationSourceInput23.endIndex -
            conversationSourceInput23.startIndex,
        },
        turnHeightsByKey: conversationSourceBinding216,
      };
}
function conversationSourceHelper12({
  scrollElement,
  turnElement,
  windowZoom,
}) {
  return scrollElement == null || turnElement == null
    ? 0
    : divideByWindowZoom(
        turnElement.getBoundingClientRect().bottom -
          scrollElement.getBoundingClientRect().bottom,
        windowZoom,
      );
}
function conversationSourceHelper13({
  align,
  layout,
  turnKey,
  viewportHeightPx,
}) {
  if (align === "center")
    return distanceFromBottomForTurn({
      layout,
      turnKey,
      viewportHeightPx,
    });
  let conversationSourceBinding219 = layout.turnIndexByKey.get(turnKey);
  return conversationSourceBinding219 == null
    ? null
    : Math.max(
        0,
        (layout.bottomOffsetsPx[conversationSourceBinding219] ?? 0) +
          (layout.heightsPx[conversationSourceBinding219] ?? 0) -
          10,
      );
}
function conversationSourceHelper14({
  align,
  layout,
  targetElement,
  turnElement,
  turnKey,
  windowZoom,
  viewportHeightPx,
}) {
  let conversationSourceBinding199 = layout.turnIndexByKey.get(turnKey);
  if (conversationSourceBinding199 == null) return null;
  let conversationSourceBinding200 = turnElement.getBoundingClientRect(),
    conversationSourceBinding201 = targetElement.getBoundingClientRect(),
    conversationSourceBinding202 = divideByWindowZoom(
      conversationSourceBinding201.top - conversationSourceBinding200.top,
      windowZoom,
    ),
    conversationSourceBinding203 = divideByWindowZoom(
      conversationSourceBinding201.height,
      windowZoom,
    ),
    conversationSourceBinding204 =
      (layout.bottomOffsetsPx[conversationSourceBinding199] ?? 0) +
      (layout.heightsPx[conversationSourceBinding199] ?? 0) -
      conversationSourceBinding202;
  return align === "top"
    ? Math.max(0, conversationSourceBinding204 - 10)
    : Math.max(
        0,
        conversationSourceBinding204 -
          conversationSourceBinding203 / 2 -
          viewportHeightPx / 2,
      );
}
var conversationSourceBinding13: Record<string, number> = {};
var conversationSourceBinding14: unknown;
export const conversationSourceL = esmInit(() => {
  conversationSourceBinding14 = React.memo(conversationSourceHelper2);
});
function conversationSourceHelper15(conversationSourceInput42) {
  let conversationSourceBinding249 = (conversationSourceInput42 - 736) / 2;
  return conversationSourceBinding249 < 180
    ? "overlay"
    : conversationSourceBinding249 < 400
      ? "shift"
      : "gutter";
}
function conversationSourceHelper16({ displayMode, isPinned, isPopoverOpen }) {
  return {
    displayMode,
    shouldHideInlineImmediately: displayMode === "overlay" && isPopoverOpen,
    shouldShow: isPinned && displayMode !== "overlay",
  };
}
function conversationSourceHelper17({ displayMode, isPinned }) {
  return isPinned && displayMode === "shift"
    ? -(300 + conversationSourceBinding15) / 2
    : 0;
}
var conversationSourceBinding15,
  conversationSourceBinding16 = esmInit(() => {
    conversationSourceBinding15 = 16;
  }),
  conversationSourceBinding17,
  conversationSourceS,
  conversationSourceO = esmInit(() => {
    conversationSourceBinding17 = {
      displayMode: "overlay",
      isPopoverOpen: false,
    };
    conversationSourceS = createScopedSignal(
      appScopeAtom,
      conversationSourceBinding17,
    );
  });
export function conversationSourceA(conversationSourceInput10: {
  set: (atom: unknown, updater: unknown) => void;
}) {
  let conversationSourceBinding138 = useAppScopeValue(rightPanelShellOpenAtom),
    conversationSourceBinding139 = useAppScopeValue(sidebarOpenAtom),
    conversationSourceBinding140 = React.useContext(ShellLayoutMetricsContext),
    conversationSourceBinding141 = useMotionValue(0),
    conversationSourceBinding142 =
      conversationSourceBinding140?.mainContentTargetWidth ??
      conversationSourceBinding141,
    conversationSourceBinding143;
  conversationSourceBinding143 = (conversationSourceInput60) => {
    conversationSourceHelper20(
      conversationSourceInput10,
      conversationSourceInput60,
    );
  };
  useMotionValueEvent(
    conversationSourceBinding142,
    "change",
    conversationSourceBinding143,
  );
  let conversationSourceBinding144 = () => {
    conversationSourceHelper20(
      conversationSourceInput10,
      conversationSourceBinding142.get(),
    );
  };
  let conversationSourceBinding145;
  conversationSourceBinding145 = [
    conversationSourceBinding138,
    conversationSourceBinding139,
    conversationSourceBinding142,
    conversationSourceInput10,
  ];
  React.useLayoutEffect(
    conversationSourceBinding144,
    conversationSourceBinding145,
  );
  let conversationSourceBinding146, conversationSourceBinding147;
  conversationSourceBinding146 = () => {
    return () => {
      conversationSourceInput10.set(
        conversationSourceS,
        conversationSourceHelper18,
      );
    };
  };
  conversationSourceBinding147 = [conversationSourceInput10];
  React.useLayoutEffect(
    conversationSourceBinding146,
    conversationSourceBinding147,
  );
}
function conversationSourceHelper18(conversationSourceInput47) {
  return conversationSourceInput47.isPopoverOpen
    ? {
        ...conversationSourceInput47,
        isPopoverOpen: false,
      }
    : conversationSourceInput47;
}
export function conversationSourceI(
  conversationSourceInput2: unknown,
  conversationSourceInput3?:
    | boolean
    | {
        resetKey: string;
      },
) {
  let conversationSourceBinding57 =
      conversationSourceInput3 === undefined ? true : conversationSourceInput3,
    conversationSourceBinding58 = shouldKeepPanelPinned(
      useAppScopeAtomValue(
        shellPanelPinnedDerivedAtom,
        conversationSourceBinding57,
      ),
      conversationSourceBinding57,
    ),
    conversationSourceBinding59 = useAppScopeValue(rightPanelShellOpenAtom),
    conversationSourceBinding60 = useAppScopeValue(sidebarOpenAtom),
    conversationSourceBinding61 = useAppScopeValue(conversationSourceS),
    conversationSourceBinding62 =
      conversationSourceBinding61.isPopoverOpen ||
      (typeof conversationSourceBinding57 != "boolean" &&
        conversationSourceBinding58),
    conversationSourceBinding63 = useAppScopeValue(
      readPrefersReducedMotionAtom,
    ),
    conversationSourceBinding64 = React.useContext(ShellLayoutMetricsContext),
    conversationSourceBinding65 = useMotionValue(0),
    conversationSourceBinding66 =
      conversationSourceBinding64?.mainContentTargetWidth ??
      conversationSourceBinding65,
    conversationSourceBinding67 = useMotionValue(
      conversationSourceHelper19({
        isPinned: conversationSourceBinding58,
        mainContentTargetWidth: conversationSourceBinding66.get(),
      }),
    ),
    conversationSourceBinding68 = React.useRef(null),
    conversationSourceBinding69 = conversationSourceBinding67.get();
  let conversationSourceBinding70 = React.useRef(conversationSourceBinding69),
    conversationSourceBinding71 = React.useRef(conversationSourceInput2),
    conversationSourceBinding72 = conversationSourceHelper16({
      displayMode: conversationSourceBinding61.displayMode,
      isPinned: conversationSourceBinding58,
      isPopoverOpen: conversationSourceBinding62,
    }),
    conversationSourceBinding73,
    conversationSourceBinding74;
  conversationSourceBinding73 = () => {
    if (conversationSourceBinding71.current === conversationSourceInput2)
      return;
    conversationSourceBinding71.current = conversationSourceInput2;
    let conversationSourceBinding230 = conversationSourceHelper19({
      isPinned: conversationSourceBinding58,
      mainContentTargetWidth: conversationSourceBinding66.get(),
    });
    conversationSourceBinding70.current = conversationSourceBinding230;
    conversationSourceBinding68.current?.stop();
    conversationSourceBinding67.set(conversationSourceBinding230);
  };
  conversationSourceBinding74 = [
    conversationSourceBinding67,
    conversationSourceInput2,
    conversationSourceBinding58,
    conversationSourceBinding66,
  ];
  React.useLayoutEffect(
    conversationSourceBinding73,
    conversationSourceBinding74,
  );
  let conversationSourceBinding75;
  conversationSourceBinding75 = (conversationSourceInput37) => {
    let conversationSourceBinding235 = conversationSourceHelper19({
      isPinned: conversationSourceBinding58,
      mainContentTargetWidth: conversationSourceInput37,
    });
    conversationSourceBinding70.current !== conversationSourceBinding235 &&
      ((conversationSourceBinding70.current = conversationSourceBinding235),
      conversationSourceBinding68.current?.stop(),
      (conversationSourceBinding68.current = conversationSourceHelper21(
        conversationSourceBinding67,
        conversationSourceBinding235,
        conversationSourceBinding63,
      )));
  };
  useMotionValueEvent(
    conversationSourceBinding66,
    "change",
    conversationSourceBinding75,
  );
  let conversationSourceBinding76 = () => {
    let conversationSourceBinding234 = conversationSourceHelper19({
      isPinned: conversationSourceBinding58,
      mainContentTargetWidth: conversationSourceBinding66.get(),
    });
    conversationSourceBinding70.current !== conversationSourceBinding234 &&
      ((conversationSourceBinding70.current = conversationSourceBinding234),
      conversationSourceBinding68.current?.stop(),
      (conversationSourceBinding68.current = conversationSourceHelper21(
        conversationSourceBinding67,
        conversationSourceBinding234,
        conversationSourceBinding63,
      )));
  };
  let conversationSourceBinding77;
  conversationSourceBinding77 = [
    conversationSourceBinding67,
    conversationSourceBinding58,
    conversationSourceBinding59,
    conversationSourceBinding60,
    conversationSourceBinding66,
    conversationSourceBinding63,
  ];
  React.useEffect(conversationSourceBinding76, conversationSourceBinding77);
  let conversationSourceBinding78, conversationSourceBinding79;
  conversationSourceBinding78 = () => {
    return () => {
      conversationSourceBinding68.current?.stop();
    };
  };
  conversationSourceBinding79 = [];
  React.useEffect(conversationSourceBinding78, conversationSourceBinding79);
  return {
    contentShift: conversationSourceBinding67,
    shouldHideInlineImmediately:
      conversationSourceBinding72.shouldHideInlineImmediately,
    shouldShow: conversationSourceBinding72.shouldShow,
  };
}
function conversationSourceHelper19({ isPinned, mainContentTargetWidth }) {
  return conversationSourceHelper17({
    displayMode: conversationSourceHelper15(mainContentTargetWidth),
    isPinned,
  });
}
function conversationSourceHelper20(
  conversationSourceInput31,
  conversationSourceInput32,
) {
  let conversationSourceBinding225 = conversationSourceHelper15(
    conversationSourceInput32,
  );
  conversationSourceInput31.set(
    conversationSourceS,
    (conversationSourceInput38) => {
      let conversationSourceBinding236 =
        conversationSourceBinding225 === "overlay" &&
        conversationSourceInput38.isPopoverOpen;
      return conversationSourceInput38.displayMode ===
        conversationSourceBinding225 &&
        conversationSourceInput38.isPopoverOpen === conversationSourceBinding236
        ? conversationSourceInput38
        : {
            displayMode: conversationSourceBinding225,
            isPopoverOpen: conversationSourceBinding236,
          };
    },
  );
}
function conversationSourceHelper21(
  conversationSourceInput48,
  conversationSourceInput49,
  conversationSourceInput50,
) {
  return conversationSourceInput50
    ? (conversationSourceInput48.set(conversationSourceInput49), null)
    : animate(
        conversationSourceInput48,
        conversationSourceInput49,
        DEFAULT_SPRING_TRANSITION,
      );
}
export const conversationSourceR = esmInit(() => {
  conversationSourceBinding16();
  conversationSourceO();
});
export type ConversationSearchAdapter = {
  contextId: string;
  getTurns: () => Array<{
    units: Array<{
      text: string;
      unitId?: string;
      turnKey?: string;
    }>;
    turnKey?: string;
  }>;
  scrollAdapter: {
    getTurnContainer: (turnKey: string) => ParentNode | null;
    scrollToTurn: (
      turnKey: string,
      opts?: {
        signal?: AbortSignal;
      },
    ) => Promise<void>;
  };
};
export function conversationSourceT({
  contextId,
  getTurns,
  scrollAdapter,
}: ConversationSearchAdapter) {
  return {
    domain: "conversation",
    contextId,
    async search(conversationSourceInput57) {
      return conversationSourceHelper22(conversationSourceInput57, getTurns());
    },
    async ensureVisible(conversationSourceInput16, conversationSourceInput17) {
      if (
        conversationSourceInput16.domain !== "conversation" ||
        conversationSourceInput16.contextId !== contextId
      )
        return;
      let conversationSourceBinding172 = scrollAdapter.getTurnContainer(
        conversationSourceInput16.turnKey,
      );
      if (conversationSourceBinding172 == null) {
        if (
          conversationSourceInput17?.signal?.aborted ||
          (conversationSourceInput17?.signal == null
            ? await scrollAdapter.scrollToTurn(
                conversationSourceInput16.turnKey,
              )
            : await scrollAdapter.scrollToTurn(
                conversationSourceInput16.turnKey,
                {
                  signal: conversationSourceInput17.signal,
                },
              ),
          conversationSourceInput17?.signal?.aborted)
        )
          return;
        conversationSourceBinding172 = scrollAdapter.getTurnContainer(
          conversationSourceInput16.turnKey,
        );
      }
      conversationSourceBinding172 != null &&
        (await scrollMatchIntoView({
          container: conversationSourceBinding172,
          matchId: conversationMatchId(conversationSourceInput16),
          includeShadowRoots: false,
          signal: conversationSourceInput17?.signal,
        }));
    },
  };
}
function conversationSourceHelper22(
  conversationSourceInput8,
  conversationSourceInput9,
) {
  let conversationSourceBinding127 = conversationSourceInput8.query.trim();
  if (conversationSourceBinding127.length === 0)
    return {
      domain: conversationSourceInput8.domain,
      contextId: conversationSourceInput8.contextId,
      query: conversationSourceBinding127,
      matches: [],
      totalMatches: 0,
      isCapped: false,
    };
  let conversationSourceBinding128 = [],
    conversationSourceBinding129 = 0,
    conversationSourceBinding130 = 0,
    conversationSourceBinding131 = false;
  for (let conversationSourceBinding159 of conversationSourceInput9)
    for (let conversationSourceBinding171 of conversationSourceBinding159.units) {
      let conversationSourceBinding176 = conversationSourceBinding171.text;
      if (conversationSourceBinding176.length === 0) continue;
      let { offsets, totalMatches, isCapped } = findTextOffsets(
        conversationSourceBinding176,
        conversationSourceBinding127,
        conversationSourceBinding19 - conversationSourceBinding128.length,
      );
      conversationSourceBinding129 += totalMatches;
      isCapped && (conversationSourceBinding131 = true);
      for (let { start, end } of offsets) {
        conversationSourceBinding130 += 1;
        conversationSourceBinding128.push({
          id: `conversation:${conversationSourceBinding159.turnKey}:${conversationSourceBinding171.unitId}:${start}`,
          ordinal: conversationSourceBinding130,
          location: {
            domain: "conversation",
            contextId: conversationSourceInput8.contextId,
            turnKey: conversationSourceBinding159.turnKey,
            unitId: conversationSourceBinding171.unitId,
            start,
            end,
          },
          snippet: buildMatchSnippet(conversationSourceBinding176, start, end),
        });
      }
    }
  return {
    domain: conversationSourceInput8.domain,
    contextId: conversationSourceInput8.contextId,
    query: conversationSourceBinding127,
    matches: conversationSourceBinding128,
    totalMatches: conversationSourceBinding129,
    isCapped: conversationSourceBinding131,
  };
}
var conversationSourceBinding19;
export const conversationSourceN = esmInit(() => {
  conversationSourceBinding19 = 250;
});
export { conversationSourceO, conversationSourceS };

// --- qg-full-green: IMPORT_MAP export stubs ---
export const conversationSourceU: any = undefined;
