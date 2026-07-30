// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Latest-turn follow-mode scroll state machine for VirtualizedTurnList.

export type LatestTurnFollowMode =
  | "static"
  | "user_follow"
  | "prework_follow"
  | "prework_watch";

export type LatestTurnPhase = "idle" | "prework" | "final_answer";

export type LatestTurnScrollState = {
  followMode: LatestTurnFollowMode;
};

export type LatestTurnScrollEvent =
  | {
      type: "latest_turn_follow_content_changed";
      followContentOverflowPx: number;
      latestTurnPhase: LatestTurnPhase;
    }
  | {
      type: "latest_turn_phase_changed";
      latestTurnPhase: LatestTurnPhase;
      previousLatestTurnPhase: LatestTurnPhase;
    }
  | { type: "latest_turn_placed" }
  | { type: "latest_turn_removed" }
  | {
      type: "scroll_distance_changed";
      distanceFromBottomPx: number;
      latestTurnPhase: LatestTurnPhase;
    }
  | {
      type: "scroll_to_bottom";
      latestTurnPhase: LatestTurnPhase;
    };

export const NEAR_BOTTOM_EPSILON_PX = 24;

export function createLatestTurnScrollState(
  options: { followMode?: LatestTurnFollowMode } = {},
): LatestTurnScrollState {
  return { followMode: options.followMode ?? "static" };
}

function withFollowMode(
  state: LatestTurnScrollState,
  followMode: LatestTurnFollowMode,
): LatestTurnScrollState {
  return state.followMode === followMode ? state : { ...state, followMode };
}

export function reduceLatestTurnScrollState(
  state: LatestTurnScrollState,
  event: LatestTurnScrollEvent,
): LatestTurnScrollState {
  switch (event.type) {
    case "latest_turn_follow_content_changed":
      return event.latestTurnPhase !== "prework" ||
        state.followMode !== "prework_watch"
        ? state
        : event.followContentOverflowPx > 0
          ? withFollowMode(state, "prework_follow")
          : state;
    case "latest_turn_phase_changed": {
      let next = state;
      if (
        event.previousLatestTurnPhase !== "prework" &&
        event.latestTurnPhase === "prework"
      ) {
        if (next.followMode === "static") {
          next = withFollowMode(next, "prework_watch");
        }
        if (next.followMode === "user_follow") {
          next = withFollowMode(next, "prework_follow");
        }
      }
      if (
        event.previousLatestTurnPhase === "prework" &&
        event.latestTurnPhase === "final_answer"
      ) {
        next = withFollowMode(
          next,
          next.followMode === "prework_follow" ? "user_follow" : "static",
        );
      }
      if (
        event.previousLatestTurnPhase !== "idle" &&
        event.latestTurnPhase === "idle" &&
        next.followMode !== "user_follow"
      ) {
        next = withFollowMode(next, "static");
      }
      return next;
    }
    case "latest_turn_placed":
    case "latest_turn_removed":
      return withFollowMode(state, "static");
    case "scroll_distance_changed":
      return event.distanceFromBottomPx <= NEAR_BOTTOM_EPSILON_PX
        ? state
        : state.followMode === "prework_follow"
          ? withFollowMode(state, "prework_watch")
          : state.followMode === "user_follow"
            ? withFollowMode(
                state,
                event.latestTurnPhase === "prework"
                  ? "prework_watch"
                  : "static",
              )
            : state;
    case "scroll_to_bottom":
      return withFollowMode(
        state,
        event.latestTurnPhase === "prework" ? "prework_follow" : "user_follow",
      );
  }
}

export function isViewportPreservingFollowMode(
  followMode: LatestTurnFollowMode,
): boolean {
  return followMode === "static" || followMode === "prework_watch";
}

export function deriveLatestTurnPhaseFromTurn(turn: {
  status?: string;
  items?: ReadonlyArray<{ type?: string; phase?: string }>;
  firstTurnWorkItemStartedAtMs?: number | null;
  finalAssistantStartedAtMs?: number | null;
}): LatestTurnPhase {
  if (turn.status !== "inProgress") return "idle";
  let sawCommentary = false;
  for (const item of turn.items ?? []) {
    if (item.type !== "agentMessage") continue;
    if (item.phase === "commentary") {
      sawCommentary = true;
      continue;
    }
    return "final_answer";
  }
  if (sawCommentary || turn.firstTurnWorkItemStartedAtMs != null) {
    return "prework";
  }
  return turn.finalAssistantStartedAtMs == null ? "idle" : "final_answer";
}

export function deriveLatestTurnPhaseInfoFromTurn(turn: {
  status?: string;
  items?: ReadonlyArray<{
    type?: string;
    phase?: string;
    restoreMessage?: { id?: string };
  }>;
  firstTurnWorkItemStartedAtMs?: number | null;
  finalAssistantStartedAtMs?: number | null;
}): {
  isInProgress: boolean;
  latestSteeringUserMessageKey: string | null;
  phase: LatestTurnPhase;
} {
  let latestSteeringUserMessageKey: string | null = null;
  const items = turn.items ?? [];
  for (let index = items.length - 1; index >= 0; index -= 1) {
    const item = items[index];
    if (item?.type === "steeringUserMessage") {
      latestSteeringUserMessageKey = item.restoreMessage?.id ?? null;
      break;
    }
  }
  return {
    isInProgress: turn.status === "inProgress",
    latestSteeringUserMessageKey,
    phase: deriveLatestTurnPhaseFromTurn(turn),
  };
}
