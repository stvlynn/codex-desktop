// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Zod schemas + leaf handlers for ChatGPT inline DIL markdown actions.

import { writeClipboardContents } from "../../clipboard/write-clipboard-contents";
import { appLogger } from "../../logging/app-logger";
import { openHrefViaBrowserBridge } from "../../navigation/open-href-via-browser-bridge";
import {
  zodArray,
  zodBigInt,
  zodBoolean,
  zodJsonValue,
  zodLiteral,
  zodNumber,
  zodObject,
  zodRecord,
  zodString,
  zodUnion,
  zodUnknown,
} from "../../vendor/zod";

/** Residual Value54 ESM init — schemas are eager module-level constants here. */
export function ensureChatgptDilActionSchemasInit(): void {}

export const knownChatgptDilActions = new Set([
  "add_to_calendar",
  "card.open",
  "card.save",
  "card.share",
  "card.thumbs_down",
  "card.thumbs_up",
  "close_hermes_sidebar",
  "copy_node",
  "launch_ecosystem_widget",
  "ledger_set_sensitive_values_hidden",
  "mattress_ledger_open_account_link",
  "mattress_onboarding_card_click",
  "open_entity_detail",
  "open_file_citation",
  "open_hermes_sidebar",
  "open_product_detail",
  "request_link_to_connector",
  "share",
]);

export const copyValueSchema = zodObject({
  value: zodUnion([
    zodString(),
    zodNumber(),
    zodBoolean(),
    zodBigInt(),
  ]).optional(),
}).passthrough();

export const openUrlSchema = zodObject({
  url: zodString().min(1),
}).passthrough();

export const openImageLightboxSchema = zodObject({
  images: zodArray(
    zodObject({
      attribution: zodString().trim().min(1).nullable().optional().catch(null),
      content_url: zodString().trim().min(1),
      title: zodString().trim().min(1).nullable().optional().catch(null),
      url: zodString().trim().min(1).nullable().optional().catch(null),
    }).passthrough(),
  ),
  selected_index: zodNumber().int().nonnegative(),
}).passthrough();

export const emailMailtoSchema = zodObject({
  "email.body": zodString().optional(),
  "email.subject": zodString().optional(),
  "email.to": zodString().optional(),
  email: zodObject({
    body: zodString().optional(),
    subject: zodString().optional(),
    to: zodString().optional(),
  }).optional(),
}).passthrough();

export const logEventSchema = zodObject({
  event_name: zodString().optional(),
}).passthrough();

export const issueNewTurnSchema = zodObject({
  action: zodString().optional().catch(undefined),
  append_to_current_leaf: zodLiteral(true).optional().catch(undefined),
  message_metadata: zodRecord(zodString(), zodJsonValue())
    .optional()
    .catch(undefined),
  query: zodString().trim().min(1),
}).catchall(zodJsonValue());

export const openEntityDetailSchema = zodObject({
  category: zodString().trim().min(1).optional().catch(undefined),
  extraParams: zodRecord(zodString(), zodUnknown()).optional().catch(undefined),
  query: zodString().trim().min(1),
});

export function useChatgptComposerControllerHelper44(
  rawUrl: string,
): URL | null {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl, window.location.origin);
  } catch {
    return null;
  }
  return parsed.protocol !== "http:" && parsed.protocol !== "https:"
    ? null
    : parsed;
}

export function useChatgptComposerControllerHelper45(
  payload: Record<string, unknown>,
): { body?: string; subject?: string; to?: string } | null {
  const parsed = emailMailtoSchema.safeParse(payload);
  if (!parsed.success) return null;
  const data = parsed.data as {
    "email.body"?: string;
    "email.subject"?: string;
    "email.to"?: string;
    email?: { body?: string; subject?: string; to?: string };
  };
  const to = data["email.to"] ?? data.email?.to;
  const subject = data["email.subject"] ?? data.email?.subject;
  const body = data["email.body"] ?? data.email?.body;
  return !to && !subject && !body ? null : { body, subject, to };
}

export function useChatgptComposerControllerHelper43(payload: unknown): void {
  const parsed = logEventSchema.safeParse(payload);
  appLogger.info("Inline DIL source log_event action received", {
    safe: {
      eventName: parsed.success ? parsed.data.event_name : undefined,
    },
  });
}

export function useChatgptComposerControllerHelper40(payload: unknown): void {
  const parsed = openUrlSchema.safeParse(payload);
  if (!parsed.success) return;
  const href = useChatgptComposerControllerHelper44(parsed.data.url);
  if (href != null) {
    openHrefViaBrowserBridge({
      href: href.toString(),
      initiator: "markdown_link_click",
    });
  }
}

export function useChatgptComposerControllerHelper41(
  payload: unknown,
  openImageLightbox?: (args: {
    images: Array<{
      attribution: string | null;
      destinationUrl: string | null;
      src: string;
      title: string | null;
    }>;
    selectedIndex: number;
  }) => void,
): void {
  const parsed = openImageLightboxSchema.safeParse(payload);
  if (!parsed.success) return;
  const selected = parsed.data.images[parsed.data.selected_index];
  if (selected == null) return;
  if (openImageLightbox != null) {
    openImageLightbox({
      images: parsed.data.images.map((item) => ({
        attribution: item.attribution ?? null,
        destinationUrl:
          item.url == null
            ? null
            : (useChatgptComposerControllerHelper44(item.url)?.toString() ??
              null),
        src: item.content_url,
        title: item.title ?? null,
      })),
      selectedIndex: parsed.data.selected_index,
    });
    return;
  }
  useChatgptComposerControllerHelper40({
    url: selected.url ?? selected.content_url,
  });
}

export function useChatgptComposerControllerHelper42(
  payload: Record<string, unknown> | null | undefined,
): void {
  const email = useChatgptComposerControllerHelper45(payload ?? {});
  if (email == null) return;
  const params = new URLSearchParams();
  if (email.subject) params.set("subject", email.subject);
  if (email.body) params.set("body", email.body);
  const query = params.toString();
  openHrefViaBrowserBridge({
    href: `mailto:${email.to ?? ""}${query ? `?${query}` : ""}`,
    initiator: "open_in_browser_bridge",
    openTarget: "external-browser",
  });
}

export async function useChatgptComposerControllerHelper39(
  payload: unknown,
): Promise<void> {
  const parsed = copyValueSchema.safeParse(payload);
  if (!parsed.success) return;
  const { value } = parsed.data;
  if (value != null) await writeClipboardContents(value.toString());
}
