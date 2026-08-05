// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// ChatGPT DIL widget parse/helpers (Helper94–101, 103).

import { appLogger as appInitialDdt } from "../../logging/app-logger";
import { zodObject, zodString } from "../../vendor/zod";

const dilWidgetNodeSchema = zodObject({
  type: zodString(),
}).passthrough();

export function useChatgptComposerControllerHelper94(error: unknown): void {
  appInitialDdt.error("ChatGPT ecosystem widget launch failed", {
    safe: {},
    sensitive: { error },
  });
}

export function useChatgptComposerControllerHelper95(
  renderer: { setState: (state: unknown, flag: boolean) => void } | null,
  state: unknown,
  cacheRef: { current: string | null },
): void {
  if (renderer == null || state == null) return;
  const serialized = JSON.stringify(state);
  if (serialized !== cacheRef.current) {
    cacheRef.current = serialized;
    renderer.setState(state, false);
  }
}

export function useChatgptComposerControllerHelper97({
  attributes,
  rawText,
}: {
  attributes?: { payload?: unknown };
  rawText?: string | null;
}): string | null {
  const payload = attributes?.payload;
  if (typeof payload == "string" && payload.length > 0) {
    try {
      return decodeURIComponent(payload);
    } catch (error) {
      appInitialDdt.warning("Failed to decode ChatGPT DIL directive payload", {
        safe: {},
        sensitive: { error },
      });
      return null;
    }
  }
  return rawText ?? null;
}

export function useChatgptComposerControllerHelper100(
  value: unknown,
): Record<string, unknown> | null {
  return typeof value == "object" && value
    ? Object.fromEntries(Object.entries(value as Record<string, unknown>))
    : null;
}

export function useChatgptComposerControllerHelper101(
  value: unknown,
): string | null {
  return typeof value == "string" && value.trim().length > 0 ? value : null;
}

export function useChatgptComposerControllerHelper99(child: unknown): unknown {
  return typeof child == "string"
    ? child.trim().length > 0
      ? child
      : null
    : useChatgptComposerControllerHelper98(child);
}

export function useChatgptComposerControllerHelper98(
  value: unknown,
): Record<string, unknown> | null {
  const parsed = dilWidgetNodeSchema.safeParse(value);
  if (!parsed.success) return null;
  const data = parsed.data as {
    type: string;
    props?: unknown;
    children?: unknown[];
    [key: string]: unknown;
  };
  const props = useChatgptComposerControllerHelper100(data.props);
  const children = Array.isArray(data.children)
    ? data.children
        .map(useChatgptComposerControllerHelper99)
        .filter((item) => item != null)
    : [];
  const { children: _children, props: _props, ...rest } = data;
  return {
    ...rest,
    ...props,
    type: data.type,
    ...(children.length > 0 ? { children } : {}),
  };
}

export function useChatgptComposerControllerHelper96({
  attributes,
  rawText,
}: {
  attributes?: { payload?: unknown };
  rawText?: string | null;
}): {
  widget: Record<string, unknown> | null;
  widgetName: string | null;
  widgetRefId: string | null;
} {
  const payload = useChatgptComposerControllerHelper97({ attributes, rawText });
  if (payload == null || payload.trim().length === 0) {
    return { widget: null, widgetName: null, widgetRefId: null };
  }
  try {
    const parsed = JSON.parse(payload);
    const wrapped = useChatgptComposerControllerHelper100(parsed);
    return {
      widget: useChatgptComposerControllerHelper98(
        (wrapped?.dil as unknown) ?? parsed,
      ),
      widgetName: useChatgptComposerControllerHelper101(wrapped?.name),
      widgetRefId: useChatgptComposerControllerHelper101(wrapped?.widgetRefId),
    };
  } catch (error) {
    appInitialDdt.warning("Failed to parse ChatGPT DIL directive payload", {
      safe: {},
      sensitive: { error },
    });
    return { widget: null, widgetName: null, widgetRefId: null };
  }
}

export function useChatgptComposerControllerHelper103(
  reference: Record<string, unknown>,
  widgetRefId: string | undefined,
): string | null {
  const dil = reference.dil;
  if (dil == null) return null;
  try {
    return (
      JSON.stringify({
        dil,
        ...(typeof reference.dil_version == "string"
          ? { dil_version: reference.dil_version }
          : {}),
        ...(typeof reference.dil_url == "string"
          ? { dil_url: reference.dil_url }
          : {}),
        ...(typeof reference.name == "string" ? { name: reference.name } : {}),
        ...(typeof reference.contains_pii == "boolean"
          ? { contains_pii: reference.contains_pii }
          : {}),
        widgetRefId,
      }) ?? null
    );
  } catch {
    return null;
  }
}
