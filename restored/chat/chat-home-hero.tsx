// Restored from ref/webview/assets/chat-home-hero-CD3CTj6M.js
// Chat home rotating headline + temporary-chat splash.
// Stage 3: app-initial aliases → semantic modules; ESM inits dropped.
// Note: polished checkpoint merged Hft/hft — hft→motion, Hft init dropped.

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "../vendor/framer-motion";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { identity } from "../utils/identity";
export type ChatHomeHeroProps = {
  isTemporaryChat: boolean;
  locationKey: string;
};
type MessageDescriptor = {
  id: string;
  defaultMessage: string;
  description: string;
};
const HERO_MESSAGES = identity({
  temporaryChat: {
    id: "chatgptConversations.home.temporaryHero",
    defaultMessage: "Temporary Chat",
    description:
      "Primary heading on the ChatGPT temporary chat home page in Codex Desktop",
  },
  readyWhenYouAre: {
    id: "chatgptConversations.home.hero.readyWhenYouAre",
    defaultMessage: "Ready when you are.",
    description:
      "One of four rotating headlines on the Chat home page in Codex Desktop. It invites an end user to begin a chat and should remain a short, friendly single-line headline.",
  },
  onYourMind: {
    id: "chatgptConversations.home.hero.onYourMind",
    defaultMessage: "What’s on your mind today?",
    description:
      "One of four rotating headlines on the Chat home page in Codex Desktop. It invites an end user to begin a chat and should remain a short, friendly single-line headline.",
  },
  agendaToday: {
    id: "chatgptConversations.home.hero.agendaToday",
    defaultMessage: "What’s on the agenda today?",
    description:
      "One of four rotating headlines on the Chat home page in Codex Desktop. It invites an end user to begin a chat and should remain a short, friendly single-line headline.",
  },
  shouldWeBegin: {
    id: "chatgptConversations.home.hero.shouldWeBegin",
    defaultMessage: "Where should we begin?",
    description:
      "One of four rotating headlines on the Chat home page in Codex Desktop. It invites an end user to begin a chat and should remain a short, friendly single-line headline.",
  },
});
const ROTATING_HEADLINES: MessageDescriptor[] = [
  HERO_MESSAGES.readyWhenYouAre,
  HERO_MESSAGES.onYourMind,
  HERO_MESSAGES.agendaToday,
  HERO_MESSAGES.shouldWeBegin,
];
let lastLocationKey: string | undefined;
let headlineIndex = -1;
function headlineForLocation(locationKey: string): MessageDescriptor {
  if (locationKey !== lastLocationKey) {
    lastLocationKey = locationKey;
    headlineIndex = (headlineIndex + 1) % ROTATING_HEADLINES.length;
  }
  return ROTATING_HEADLINES[headlineIndex]!;
}
function ChatHomeHeroHeadline({
  headline,
  isTemporaryChat,
}: {
  headline: MessageDescriptor;
  isTemporaryChat: boolean;
}): ReactNode {
  const style = {
    viewTransitionName: "var(--vt-splash-screen-headline)",
  } as const;
  const invisibleMeasure = (
    <h1
      aria-hidden={true}
      className="heading-xl invisible font-normal whitespace-pre-wrap"
    >
      <MemoizedFormattedMessage {...headline} />
    </h1>
  );
  const animated = (
    <AnimatePresence initial={false} mode="wait">
      {isTemporaryChat ? (
        <motion.div
          key="temporary-chat-content"
          animate={{
            opacity: 1,
          }}
          className="absolute inset-x-0 bottom-0 flex min-w-0 flex-col items-center gap-4"
          exit={{
            opacity: 0,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              y: 0,
            }}
            className="flex min-w-0 flex-col items-center gap-3"
            exit={{
              y: 24,
            }}
            initial={{
              y: 24,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h1 className="heading-xl font-normal whitespace-pre-wrap text-token-foreground">
              <MemoizedFormattedMessage {...headline} />
            </h1>
            <p className="text-base leading-6 text-token-text-secondary">
              <MemoizedFormattedMessage
                id="chatgptConversations.home.temporaryDescription"
                defaultMessage="This chat won't appear in your conversation history"
                description="Short explanatory text shown on the ChatGPT temporary chat home page in Codex Desktop"
              />
            </p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="chat-home-headline"
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="absolute inset-x-0 bottom-0"
          exit={{
            opacity: 0,
            y: -4,
            transition: {
              duration: 0,
            },
          }}
          initial={{
            opacity: 0,
            y: -4,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <h1 className="heading-xl font-normal whitespace-pre-wrap text-token-foreground">
            <MemoizedFormattedMessage {...headline} />
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
  return (
    <div
      className="relative w-full min-w-0 text-center select-none"
      style={style}
    >
      {invisibleMeasure}
      {animated}
    </div>
  );
}

/** Bundle export `ChatHomeHero` / local `l`. */
export function ChatHomeHero({
  isTemporaryChat,
  locationKey,
}: ChatHomeHeroProps): ReactNode {
  const headline = isTemporaryChat
    ? HERO_MESSAGES.temporaryChat
    : headlineForLocation(locationKey);
  return (
    <div className="mx-auto w-[min(100%,var(--thread-content-max-width))] min-w-0 px-panel">
      <ChatHomeHeroHeadline
        headline={headline}
        isTemporaryChat={isTemporaryChat}
      />
    </div>
  );
}
