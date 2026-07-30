// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Inline DIL (dynamic interactive link) action dispatch for ChatGPT markdown.

import { appLogger } from "../../logging/app-logger";
import {
  issueNewTurnSchema,
  knownChatgptDilActions,
  openEntityDetailSchema,
  useChatgptComposerControllerHelper39,
  useChatgptComposerControllerHelper40,
  useChatgptComposerControllerHelper41,
  useChatgptComposerControllerHelper42,
  useChatgptComposerControllerHelper43,
} from "./chatgpt-dil-action-helpers";

export type ChatgptDilActionHandlers = {
  issueNewTurn?: (args: {
    appendToCurrentLeaf?: boolean;
    messageMetadata?: unknown;
    query: string;
    widgetState?: Record<string, unknown>;
  }) => Promise<void> | void;
  launchEcosystemWidget?: (
    payload: Record<string, unknown>,
  ) => Promise<void> | void;
  openEntityDetail?: (args: {
    category: string;
    extraParams?: unknown;
    query: string;
  }) => Promise<void> | void;
  openImageLightbox?: Parameters<
    typeof useChatgptComposerControllerHelper41
  >[1];
};

export async function useChatgptComposerControllerHelper38(
  action: {
    payload?: Record<string, unknown> | null;
    type?: string;
  },
  {
    issueNewTurn,
    launchEcosystemWidget,
    openEntityDetail,
    openImageLightbox,
  }: ChatgptDilActionHandlers = {},
): Promise<void> {
  const actionType =
    typeof action.payload?.action == "string"
      ? action.payload.action
      : action.type;
  switch (actionType) {
    case "copy":
      await useChatgptComposerControllerHelper39(action.payload);
      return;
    case "email.mailto":
      useChatgptComposerControllerHelper42(action.payload ?? {});
      return;
    case "issue_new_turn": {
      if (issueNewTurn == null)
        throw Error("DIL follow-up prompts are not supported in Codex");
      const parsed = issueNewTurnSchema.safeParse(action.payload);
      if (!parsed.success) return;
      const {
        action: _action,
        append_to_current_leaf,
        message_metadata,
        query,
        ...rest
      } = parsed.data as Record<string, unknown> & {
        append_to_current_leaf?: boolean;
        message_metadata?: unknown;
        query: string;
      };
      await issueNewTurn({
        appendToCurrentLeaf: append_to_current_leaf,
        messageMetadata: message_metadata,
        query,
        widgetState: Object.keys(rest).length === 0 ? undefined : rest,
      });
      return;
    }
    case "log_event":
      useChatgptComposerControllerHelper43(action.payload);
      return;
    case "launch_ecosystem_widget":
      if (launchEcosystemWidget == null) break;
      await launchEcosystemWidget(action.payload ?? {});
      return;
    case "open_entity_detail": {
      if (openEntityDetail == null) break;
      const parsed = openEntityDetailSchema.safeParse(action.payload);
      if (!parsed.success) return;
      await openEntityDetail({
        category: parsed.data.category ?? "ask_sidebar",
        extraParams: parsed.data.extraParams,
        query: parsed.data.query,
      });
      return;
    }
    case "open_image_lightbox":
      useChatgptComposerControllerHelper41(action.payload, openImageLightbox);
      return;
    case "open_url":
      useChatgptComposerControllerHelper40(action.payload);
      return;
    case "request_location_permission": {
      const { geolocation } = navigator;
      appLogger.info("Inline DIL location permission request received", {
        safe: { geolocationAvailable: geolocation != null },
      });
      geolocation?.getCurrentPosition(
        () => {
          appLogger.info("Inline DIL location permission request succeeded");
        },
        (error) => {
          appLogger.warning("Inline DIL location permission request failed", {
            safe: { errorCode: error.code },
          });
        },
        { timeout: 1e4 },
      );
      return;
    }
    default:
      break;
  }
  appLogger.info("Inline DIL source action unsupported", {
    safe: {
      actionType,
      isKnownChatGPTDILAction:
        actionType != null && knownChatgptDilActions.has(actionType),
    },
  });
}
