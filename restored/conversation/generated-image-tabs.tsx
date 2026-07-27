// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Sdl` / export `Tc` — generated image preview tabs (shell).

import type { ComponentType, ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { codexLocalconversationGeneratedImageTabMessages as msgs } from "./codex-localconversation-generated-image-tab-messages";

type AnyProps = Record<string, unknown>;

let TabsImpl: ComponentType<AnyProps> | null = null;

export function setGeneratedImageTabsImpl(impl: ComponentType<AnyProps>): void {
  TabsImpl = impl;
}

export type GeneratedImageTabsProps = {
  images?: Array<{ src?: string; previewSrc?: string; [key: string]: unknown }>;
  conversationImages?: unknown[];
  conversationTitle?: string;
  [key: string]: unknown;
};

export function GeneratedImageTabs(props: GeneratedImageTabsProps): ReactNode {
  if (TabsImpl != null) {
    return (
      <TabsImpl
        {...props}
        formatTabTitle={(imageNumber: number) => (
          <FormattedMessage
            {...msgs.title}
            values={{
              conversationTitle: props.conversationTitle ?? "",
              imageNumber,
            }}
          />
        )}
      />
    );
  }
  const images = props.images ?? [];
  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <FormattedMessage
            {...msgs.title}
            values={{
              conversationTitle: props.conversationTitle ?? "",
              imageNumber: index + 1,
            }}
          />
          <img
            alt=""
            src={image.src ?? image.previewSrc ?? ""}
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
    </div>
  );
}
