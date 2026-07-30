// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Apps SDK ecosystem widget launch / MCP bridge (Helper56–63) + Mapbox token.

import { ensureComposerEsm_tst_Init as appInitialTst } from "../../boundaries/composer-esm-inits";
import { toConnectorOrMcpTarget as appInitialAV } from "../../apps/to-connector-or-mcp-target";
import {
  mcpCallToolResultSchema as appInitialOt,
  mcpResultSchema as appInitialEst,
} from "../../mcp/mcp-result-schemas";
import { identity as AppInitialWmt } from "../../utils/identity";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import {
  zodEnum as appInitialDT,
  zodJsonValue as appInitialVT,
  zodLiteral as appInitialYT,
  zodObject as appInitialXT,
  zodRecord as appInitialST,
  zodString as appInitialCT,
} from "../../vendor/zod";

let chatgptDilMapboxAccessToken = "";

export async function useChatgptComposerControllerHelper56(args: any) {
  let { chatGptConversationId, client, payload, sourceMessageId } = args;
  let slot4998 = {
      ...slot69.parse(payload),
      chatGptConversationId,
      sourceMessageId,
    },
    slot4999 = {
      app_uri: slot4998.appUri,
      conversation_id:
        slot4998.chatGptConversationId,
      launcher_host: "chatgpt",
      template_pointer: slot4998.template,
      tool_input: slot4998.toolInput,
      tool_name: slot4998.toolName,
    },
    slot5000 =
      await client.bootstrapEcosystemLauncher(
        slot4999,
      ),
    slot5001 =
      slot5000.status === "auto_install_required"
        ? await client.autoInstallEcosystemLauncher(
            slot4999,
          )
        : slot5000,
    slot5002 =
      slot5001.reason?.trim();
  switch (slot5001.status) {
    case "ready":
      break;
    case "connect_required":
      throw Error(
        slot5002 ||
          "Connect this app before opening it in Codex.",
      );
    case "auth_required":
      throw Error(
        slot5002 ||
          "Sign in to Codex before opening this app.",
      );
    case "blocked":
      throw Error(
        slot5002 ||
          "This app is blocked from opening.",
      );
    case "not_found":
      throw Error(
        slot5002 ||
          "This app is no longer available.",
      );
  }
  let slot5003 =
      useChatgptComposerControllerHelper60(
        slot5001.normalized_app_uri,
      ) ?? slot4998.appUri,
    slot5004 = {
      ...slot4998,
      appUri: slot5003,
    },
    [
      slot5005,
      slot5006,
    ] = await Promise.all([
      client.launchEcosystemWidget({
        app_uri: slot5003,
        conversation_id:
          slot4998.chatGptConversationId,
        launcher_host: "chatgpt",
        mode: slot4998.mode,
        template: slot4998.template,
        tool_input: slot4998.toolInput,
        tool_name: slot4998.toolName,
        view_params: slot4998.viewParams ?? null,
      }),
      client.getEcosystemWidget({
        launcher_host: "chatgpt",
        template_pointer: slot4998.template,
        uri: slot5003,
      }),
    ]);
  if (slot5005.tool_response == null)
    throw Error(
      slot5005.missing_widget_reason ??
        "The app did not return a widget tool result.",
    );
  let slot5007 =
      slot5005.widget?.chatgpt_sdk,
    slot5008 =
      slot5005.tool_response_metadata ??
      useChatgptComposerControllerHelper59(
        slot5007?.tool_response_metadata,
      ) ??
      slot5005.tool_response._meta,
    slot5009 = appInitialOt.parse(
      useChatgptComposerControllerHelper61({
        ...slot5005.tool_response,
        ...(slot5008 == null
          ? {}
          : {
              _meta: slot5008,
            }),
      }),
    );
  return {
    mcpRequestOverride: useChatgptComposerControllerHelper57({
      appUri:
        useChatgptComposerControllerHelper60(
          slot5007?.resolved_pineapple_uri,
        ) ?? slot5003,
      chatGptConversationId,
      client,
      messageId:
        slot5005.widget?.tool_message_id ??
        sourceMessageId ??
        null,
      originMetadata: slot5007,
    }),
    request: slot5004,
    toolResult: slot5009,
    widget: slot5006,
  };
}
function useChatgptComposerControllerHelper57({
  appUri,
  chatGptConversationId,
  client,
  messageId,
  originMetadata,
}) {
  return {
    forwardedRequestMethods: slot70,
    handleRequest: async (request6608) => {
      let slot12940 =
          useChatgptComposerControllerHelper58(
            appUri,
            request6608,
            originMetadata,
          ),
        slot12941 = appInitialST(
          appInitialCT(),
          appInitialVT(),
        ).parse(slot12940.params ?? {}),
        slot12942 = await client.callEcosystemMcp({
          app_uri: appUri,
          conversation_id: chatGptConversationId,
          launcher_host: "chatgpt",
          message_id: messageId,
          method: slot12940.method,
          params: slot12941,
        });
      return appInitialEst.parse(
        useChatgptComposerControllerHelper61(
          slot12942,
        ),
      );
    },
  };
}
function useChatgptComposerControllerHelper58(
  request3907,
  request3908,
  request3909,
) {
  if (request3908.method !== "tools/call")
    return request3908;
  let slot9819 =
      useChatgptComposerControllerHelper59(
        request3908.params,
      ),
    slot9820 =
      useChatgptComposerControllerHelper60(
        slot9819?.name,
      );
  if (slot9820 == null)
    return request3908;
  let slot9821 =
      slot9820.startsWith("/")
        ? slot9820.split("/").filter(Boolean)
        : [slot9820],
    slot9822 =
      slot9821.at(-1),
    slot9823 =
      request3907.startsWith(
        slot71,
      )
        ? useChatgptComposerControllerHelper60(
            request3907.slice(13),
          )
        : null,
    slot9824 =
      useChatgptComposerControllerHelper59(
        request3909,
      ),
    slot9825 =
      useChatgptComposerControllerHelper60(
        slot9824?.attribution_id,
      ) ??
      useChatgptComposerControllerHelper60(
        slot9824?.[
          slot72
        ],
      ) ??
      (slot9823 === "all" ||
      slot9823?.includes("+") === true
        ? null
        : slot9823);
  if (
    slot9822 == null ||
    slot9825 == null
  )
    return request3908;
  let slot9826 =
      useChatgptComposerControllerHelper60(
        slot9824?.link_id,
      ) ??
      useChatgptComposerControllerHelper60(
        slot9824?.[
          slot74
        ],
      ),
    slot9827 =
      slot9821.length === 3
        ? slot9821.at(-2)
        : undefined,
    slot9828 =
      slot9826 ??
      slot9827,
    slot9829 =
      useChatgptComposerControllerHelper59(
        slot9819?._meta,
      ) ?? {};
  return {
    ...request3908,
    params: {
      ...slot9819,
      _meta: {
        ...slot9829,
        [slot73]:
          slot9822,
        [slot72]:
          slot9825,
        ...(slot9828 == null
          ? {}
          : {
              [slot74]:
                slot9828,
            }),
      },
      name: slot9822,
    },
  };
}
function useChatgptComposerControllerHelper59(
  request10652,
) {
  return typeof request10652 == "object" &&
    request10652 &&
    !Array.isArray(request10652)
    ? request10652
    : null;
}
function useChatgptComposerControllerHelper60(
  request10746,
) {
  return typeof request10746 == "string" &&
    request10746.trim().length > 0
    ? request10746
    : null;
}
function useChatgptComposerControllerHelper61(
  request8872,
) {
  let slot14906 =
    useChatgptComposerControllerHelper59(request8872);
  if (slot14906 == null)
    return request8872;
  let slot14907 =
    useChatgptComposerControllerHelper63(
      slot14906,
      ["_meta"],
    );
  return Array.isArray(slot14906.content)
    ? {
        ...slot14907,
        content: slot14906.content.map(
          useChatgptComposerControllerHelper62,
        ),
      }
    : slot14907;
}
function useChatgptComposerControllerHelper62(
  request8534,
) {
  let slot14583 =
    useChatgptComposerControllerHelper59(request8534);
  if (slot14583 == null)
    return request8534;
  let slot14584 =
      useChatgptComposerControllerHelper63(
        slot14583,
        ["_meta", "annotations"],
      ),
    slot14585 =
      useChatgptComposerControllerHelper59(
        slot14583.resource,
      );
  return slot14585 == null
    ? slot14584
    : {
        ...slot14584,
        resource: useChatgptComposerControllerHelper63(
          slot14585,
          ["_meta"],
        ),
      };
}
function useChatgptComposerControllerHelper63(
  request10418,
  request10419,
) {
  let slot15745 = {
    ...request10418,
  };
  for (let slot16157 of request10419)
    slot15745[
      slot16157
    ] ??
      delete slot15745[
        slot16157
      ];
  return slot15745;
}
var _d,
  slot69,
  slot70,
  slot71,
  slot72,
  slot73,
  slot74,
  slot75 = rolldownRuntimeN(() => {
    appInitialTst();
    appInitialCT();
    _d = appInitialXT({
      entityId: appInitialCT().min(1),
      entityType: appInitialDT(["product", "place", "spotlight", "account"]),
      entrypointLabel: appInitialCT().min(1),
      entrypointType: appInitialYT("button"),
      intentType: appInitialDT([
        "checkout",
        "reservation",
        "service",
        "onboarding",
        "account_detail",
      ]),
      surface: appInitialDT([
        "search_results",
        "new_thread_home",
        "mattress_accounts_tab",
      ]),
    });
    slot69 = appInitialXT({
      appUri: appInitialCT().min(1),
      logging: _d,
      mode: appInitialDT(["fullscreen", "modal"]),
      template: appInitialCT().min(1),
      toolInput: appInitialST(appInitialCT(), appInitialVT()),
      toolName: appInitialCT().min(1),
      viewParams: appInitialST(appInitialCT(), appInitialVT())
        .nullable()
        .optional(),
    });
    slot70 = [
      "tools/call",
      "tools/list",
      "resources/read",
      "resources/list",
      "resources/templates/list",
      "prompts/list",
    ];
    slot71 = "connectors://";
    slot72 = "openai/connector_id";
    slot73 = "openai/action_name";
    slot74 = "openai/link_id";
  }),
  slot76,
  slot77,
  slot78 = rolldownRuntimeN(() => {
    chatgptDilMapboxAccessToken = "pk.eyJ1Ijoib2FpLWRhdGEiLCJhIjoiY20yYW84aTZ1MGh6bzJwcHpsY2R6OWxyeiJ9.V2VlnBphK96gruxcrHtt-Q";
    slot77 = chatgptDilMapboxAccessToken;
  });

export { chatgptDilMapboxAccessToken };
