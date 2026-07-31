// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// Virtualized conversation turn list (row window + height reconciliation).

import * as React from "react";
import { flushSync } from "react-dom";
import { type ReactNode } from "react";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useWindowZoom } from "../../hooks/use-window-zoom";
import { cx } from "../../ui/cx";
import { getResizeObserverEntrySize } from "../../utils/create-resize-observer";
import {
  adjustDistanceAfterLayoutChange,
  buildThreadVirtualizerLayout,
  distanceFromBottomForTurn,
  rangeAroundAnchorKey,
  visibleRangeFromDistance,
} from "../../utils/thread-virtualizer";
import { useThreadScrollController } from "../../thread/thread-scroll-controller-context";
import { emptyTurnHeightsByKey } from "./virtualized-conversation-list-state";
import { MemoizedVirtualizedConversationRow } from "./virtualized-conversation-row";
import {
  createInitialViewportState,
  reconcileViewportState,
  turnKeysEqual,
  readBottomPaddingPx,
  subtractBottomPadding,
  isPinnedNearBottom,
  snapshotRestoreState,
  computeBottomOverflowPx,
  distanceForTurnAlign,
  distanceForTargetElement,
  findMeasuredAnchorKey,
} from "./virtualized-conversation-list-helpers";

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
export function VirtualizedConversationList({
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
  latestTurnSynchronousMeasurementKey: useConversationSourceOpts1,
}: ConversationSourceListProps) {
  let conversationSourceBinding20 = useThreadScrollController(),
    conversationSourceBinding21 = useWindowZoom(),
    [conversationSourceBinding22, conversationSourceBinding23] = React.useState(
      initialRestoreState?.turnHeightsByKey ?? emptyTurnHeightsByKey,
    ),
    [conversationSourceBinding24, conversationSourceBinding25] =
      React.useState(null),
    [conversationSourceBinding26, conversationSourceBinding27] = React.useState(
      () => {
        let conversationSourceBinding247 = readBottomPaddingPx(
          getBottomScrollPaddingPx,
        );
        return createInitialViewportState(
          entries,
          subtractBottomPadding(
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
    !turnKeysEqual(
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
      (useConversationSourceOpts24) => {
        useConversationSourceOpts24.latestTurnHeightChange != null &&
          onLatestTurnHeightChange?.(
            useConversationSourceOpts24.latestTurnHeightChange,
          );
        useConversationSourceOpts24.restoreScrollDistanceFromBottom
          ? conversationSourceBinding44()
          : useConversationSourceOpts24.scrollDistanceFromBottomPx != null &&
            conversationSourceBinding20.compensateScrollToDistanceFromBottomPx(
              useConversationSourceOpts24.scrollDistanceFromBottomPx,
            );
      },
    ),
    conversationSourceBinding46 = useEventCallback(
      (useConversationSourceOpts29, useConversationSourceOpts30) => {
        if (conversationSourceBinding37.current != null) return;
        let conversationSourceBinding221 = reconcileViewportState({
          current: conversationSourceBinding32.current,
          distanceFromBottomPx: useConversationSourceOpts29,
          layout: conversationSourceBinding40,
          viewportHeightPx: useConversationSourceOpts30,
        });
        conversationSourceBinding221 !== conversationSourceBinding32.current &&
          ((conversationSourceBinding32.current = conversationSourceBinding221),
          conversationSourceBinding27(conversationSourceBinding221));
      },
    ),
    conversationSourceBinding47 = useEventCallback(
      (useConversationSourceOpts35, useConversationSourceOpts36) => {
        if (onViewportChange == null) return;
        let conversationSourceBinding233 = Math.max(
          0,
          Math.min(
            conversationSourceBinding40.totalHeightPx,
            conversationSourceBinding40.totalHeightPx -
              useConversationSourceOpts35,
          ),
        );
        onViewportChange({
          viewportEndPx: conversationSourceBinding233,
          viewportStartPx: Math.max(
            0,
            conversationSourceBinding233 - useConversationSourceOpts36,
          ),
        });
      },
    ),
    conversationSourceBinding48 = useEventCallback(
      (useConversationSourceOpts39) => {
        queueMicrotask(() => {
          conversationSourceBinding30.current === useConversationSourceOpts39 &&
            (useConversationSourceOpts39.complete(),
            (conversationSourceBinding30.current = null));
          conversationSourceBinding29((useConversationSourceOpts61) => {
            return useConversationSourceOpts61 === useConversationSourceOpts39
              ? null
              : useConversationSourceOpts61;
          });
        });
      },
    ),
    conversationSourceBinding49 = useEventCallback(
      (
        useConversationSourceOpts26,
        useConversationSourceOpts27,
        useConversationSourceOpts28,
      ) => {
        return (
          conversationSourceBinding30.current?.complete(),
          new Promise((useConversationSourceOpts34) => {
            let conversationSourceBinding229 = {
              align: useConversationSourceOpts28?.align ?? "center",
              complete: useConversationSourceOpts34,
              getTargetElement: useConversationSourceOpts27,
              turnKey: useConversationSourceOpts26,
            };
            conversationSourceBinding30.current = conversationSourceBinding229;
            conversationSourceBinding29(conversationSourceBinding229);
          })
        );
      },
    ),
    conversationSourceBinding50 = useEventCallback(
      (useConversationSourceOpts33) => {
        let conversationSourceBinding226 =
          conversationSourceBinding40.turnIndexByKey.get(
            useConversationSourceOpts33,
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
          bottomViewportOverflowPx: computeBottomOverflowPx({
            scrollElement: conversationSourceBinding20.getScrollElement(),
            turnElement: conversationSourceBinding187,
            windowZoom: conversationSourceBinding21,
          }),
          turnElement: conversationSourceBinding187,
          followContentHeightPx: conversationSourceBinding186,
        });
    }),
    conversationSourceBinding52 = useEventCallback(
      (useConversationSourceOpts4, useConversationSourceOpts5 = true) => {
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
          conversationSourceBinding90 = readBottomPaddingPx(
            getBottomScrollPaddingPx,
          ),
          conversationSourceBinding91 = subtractBottomPadding(
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
        ] of useConversationSourceOpts4) {
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
            isPinnedNearBottom(
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
            (conversationSourceBinding97 = subtractBottomPadding(
              conversationSourceBinding96,
              conversationSourceBinding90,
            ));
        let conversationSourceBinding98 = buildThreadVirtualizerLayout({
          entries,
          gapPx,
          measuredHeightsByKey: conversationSourceBinding83,
        });
        conversationSourceBinding42.current ??= conversationSourceBinding40;
        let conversationSourceBinding99 = reconcileViewportState({
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
                    bottomViewportOverflowPx: computeBottomOverflowPx({
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
          useConversationSourceOpts5
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
        (useConversationSourceOpts18) => {
          let conversationSourceBinding195 = new Map(),
            conversationSourceBinding196 = false;
          for (let conversationSourceBinding206 of useConversationSourceOpts18) {
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
      (useConversationSourceOpts19, useConversationSourceOpts20) => {
        if (useConversationSourceOpts20 == null) return;
        conversationSourceBinding33.current.set(useConversationSourceOpts20, {
          kind: "turn",
          turnKey: useConversationSourceOpts19,
        });
        conversationSourceBinding34.current.set(
          useConversationSourceOpts19,
          useConversationSourceOpts20,
        );
        conversationSourceBinding35.current.set(
          useConversationSourceOpts19,
          useConversationSourceOpts20,
        );
        let conversationSourceBinding205 = conversationSourceBinding53();
        return (
          conversationSourceBinding205.observe(useConversationSourceOpts20),
          () => {
            conversationSourceBinding205.unobserve(useConversationSourceOpts20);
            conversationSourceBinding33.current.delete(
              useConversationSourceOpts20,
            );
            conversationSourceBinding35.current.get(
              useConversationSourceOpts19,
            ) === useConversationSourceOpts20 &&
              conversationSourceBinding35.current.delete(
                useConversationSourceOpts19,
              );
            conversationSourceBinding34.current.get(
              useConversationSourceOpts19,
            ) === useConversationSourceOpts20 &&
              conversationSourceBinding34.current.delete(
                useConversationSourceOpts19,
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
    observeLatestTurnFollowContent = useEventCallback(
      (useConversationSourceOpts25) => {
        if (useConversationSourceOpts25 == null) return;
        conversationSourceBinding33.current.set(useConversationSourceOpts25, {
          element: useConversationSourceOpts25,
          kind: "latest-turn-follow-content",
        });
        conversationSourceBinding36.current.set(useConversationSourceOpts25, 0);
        let conversationSourceBinding218 = conversationSourceBinding53();
        return (
          conversationSourceBinding218.observe(useConversationSourceOpts25),
          () => {
            conversationSourceBinding218.unobserve(useConversationSourceOpts25);
            conversationSourceBinding33.current.delete(
              useConversationSourceOpts25,
            );
            conversationSourceBinding36.current.delete(
              useConversationSourceOpts25,
            );
          }
        );
      },
    );
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
    useConversationSourceOpts1 != null && conversationSourceBinding55();
  }, [useConversationSourceOpts1, conversationSourceBinding55]);
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
          snapshotRestoreState(
            conversationSourceBinding31.current,
            conversationSourceBinding32.current.turnKeys,
            conversationSourceBinding32.current.renderedRange,
          ),
        );
      };
  }, [onRestoreStateChange]);
  let { addScrollListener, addUserScrollListener, getScrollElement } =
    conversationSourceBinding20;
  React.useLayoutEffect(() => {
    let conversationSourceBinding188 = getScrollElement();
    if (conversationSourceBinding188 == null) return;
    let conversationSourceBinding189 = () => {
        return (
          conversationSourceBinding188.clientHeight ||
          conversationSourceBinding32.current.viewportHeightPx ||
          800
        );
      },
      conversationSourceBinding190 = addScrollListener(
        (useConversationSourceOpts51) => {
          let conversationSourceBinding254 = subtractBottomPadding(
            useConversationSourceOpts51,
            readBottomPaddingPx(getBottomScrollPaddingPx),
          );
          conversationSourceBinding46(
            conversationSourceBinding254,
            conversationSourceBinding189(),
          );
        },
      ),
      conversationSourceBinding191 = addUserScrollListener(
        (useConversationSourceOpts58) => {
          conversationSourceBinding47(
            subtractBottomPadding(
              useConversationSourceOpts58,
              readBottomPaddingPx(getBottomScrollPaddingPx),
            ),
            conversationSourceBinding189(),
          );
        },
      ),
      conversationSourceBinding192 = new ResizeObserver(
        (useConversationSourceOpts40) => {
          let conversationSourceBinding239 = useConversationSourceOpts40[0];
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
    getScrollElement,
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
          ? distanceForTurnAlign({
              align: conversationSourceBinding28.align,
              layout: conversationSourceBinding40,
              turnKey: conversationSourceBinding28.turnKey,
              viewportHeightPx: conversationSourceBinding122.clientHeight,
            })
          : distanceForTargetElement({
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
        readBottomPaddingPx(getBottomScrollPaddingPx),
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
    let conversationSourceBinding150 = readBottomPaddingPx(
        getBottomScrollPaddingPx,
      ),
      conversationSourceBinding151 =
        conversationSourceBinding20.getLastScrollDistanceFromBottomPx(),
      conversationSourceBinding152 = subtractBottomPadding(
        conversationSourceBinding151,
        conversationSourceBinding150,
      );
    if (
      (getPendingRestoreScrollDistanceFromBottomPx?.() ?? null) != null ||
      isPinnedNearBottom(
        conversationSourceBinding151,
        conversationSourceBinding150,
      )
    )
      return;
    let conversationSourceBinding153 = findMeasuredAnchorKey({
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
  let footerTurnKey = latestTurnFooterKey ?? entries.at(-1)?.turnKey;
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
            return (
              <MemoizedVirtualizedConversationRow
                key={item.turnKey}
                entry={item}
                latestTurnFollowContentRef={
                  conversationSourceBinding177 === entries.length - 1 &&
                  onLatestTurnHeightChange != null
                    ? observeLatestTurnFollowContent
                    : undefined
                }
                latestTurnFooter={
                  item.turnKey === footerTurnKey ? latestTurnFooter : undefined
                }
                RowComponent={RowComponent}
                constrainedHeightPx={
                  conversationSourceBinding177 !== entries.length - 1 &&
                  conversationSourceBinding28?.turnKey !== item.turnKey &&
                  conversationSourceBinding22[item.turnKey] == null
                    ? conversationSourceBinding40.heightsPx[
                        conversationSourceBinding177
                      ]
                    : undefined
                }
                observeTurnElement={conversationSourceBinding54}
              />
            );
          })}
      </div>
    </div>
  );
}
