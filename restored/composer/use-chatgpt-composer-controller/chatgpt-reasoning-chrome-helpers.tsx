// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Reasoning-group expand chrome + thinking label for ChatGPT browser rows.

import { ChatMessageContent as appInitialQd } from "../../chat/chat-message-content";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { AppIconYlt as appInitialYlt } from "../../icons/app-icon-ylt";
import { rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import { cx as appInitialWft } from "../../ui/cx";
import { DEFAULT_MOTION_TRANSITION as appInitialS1 } from "../../ui/default-motion-transition";
import { ShimmerText as appInitialBp } from "../../ui/shimmer-text";
import { motion as _appInitialHft } from "../../vendor/framer-motion";

reactCompilerRuntime();
const slot334 = rolldownRuntimeS(react(), 1) as {
  useState: (
    init: boolean,
  ) => [boolean, (updater: (prev: boolean) => boolean) => void];
};

function useChatgptComposerControllerHelper263(request11506) {
  return !request11506;
}

function useChatgptComposerControllerHelper264() {
  const AppInitialBp = appInitialBp;
  const AppInitialGft = appInitialGft;
  return (
    <div className="flex min-w-0 items-center text-token-text-tertiary">
      {
        <AppInitialBp className="min-w-0 truncate">
          <AppInitialGft
            id="chatgptConversations.reasoning.thinking"
            defaultMessage="Thinking"
            description="Status shown while a ChatGPT response is reasoning"
          />
        </AppInitialBp>
      }
    </div>
  );
}

function useChatgptComposerControllerHelper262(request969) {
  const AppInitialQd = appInitialQd;
  const AppInitialYlt = appInitialYlt;
  const Div = _appInitialHft.div;
  let { canExpand, children, title } = request969,
    [slot4076, slot4077] = slot334.useState(false);
  if (!canExpand) {
    let slot12486;
    return (
      <AppInitialQd padding="offset">
        <div className="flex min-w-0 items-center text-token-text-tertiary select-none">
          {title}
        </div>
      </AppInitialQd>
    );
  }
  let slot4078 = () => {
    slot4077(useChatgptComposerControllerHelper263);
  };
  let slot4079 = slot4076 && "rotate-90",
    slot4080 = appInitialWft(
      "icon-xs shrink-0 transition-transform duration-relaxed",
      slot4079,
    );
  let slot4081 = <AppInitialYlt className={slot4080} />;
  let slot4082 = (
    <button
      type="button"
      className="inline-flex max-w-full min-w-0 cursor-interaction items-center gap-0.5 self-start p-0 text-left text-token-text-tertiary select-none hover:text-token-text-primary"
      onClick={slot4078}
      aria-expanded={slot4076}
    >
      {title}
      {slot4081}
    </button>
  );
  let slot4083 = slot4076 ? "auto" : 0,
    slot4084 = +!!slot4076,
    slot4085 = {
      height: slot4083,
      opacity: slot4084,
    };
  let slot4086 = !slot4076,
    slot4087 = !slot4076,
    slot4088 = slot4076 ? "auto" : "none",
    slot4089 = {
      pointerEvents: slot4088,
    };
  let slot4090 = <div className="flex flex-col gap-4 pt-4">{children}</div>;
  let slot4091 = (
    <Div
      data-testid="chatgpt-reasoning-recap-body"
      initial={false}
      animate={slot4085}
      aria-hidden={slot4086}
      inert={slot4087}
      className="overflow-hidden"
      style={slot4089}
      transition={appInitialS1}
    >
      {slot4090}
    </Div>
  );
  return (
    <AppInitialQd padding="offset">
      <div className="flex flex-col">
        {slot4082}
        {slot4091}
      </div>
    </AppInitialQd>
  );
}

export {
  useChatgptComposerControllerHelper262,
  useChatgptComposerControllerHelper263,
  useChatgptComposerControllerHelper264,
};
