// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Entity side-panel tab open + async launch dialog state (Helper91–92).

import { ensureComposerEsm_UL_Init as AppInitialUL } from "../../composer/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { AppIconEP as ___AppInitialP } from "../../icons/app-icon-ep";
import { ensureIntlFormattersInit as appInitialHft } from "../../i18n/use-intl";
import {
  ensureAppShellAtomsInit as appInitialI0,
  rightPanelController as appInitialA0,
} from "../../navigation/app-shell-atoms";
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";
import {
  ensureChatgptComposerControllerAuxInitS as useChatgptComposerControllerS,
  useChatgptComposerControllerHelper90,
} from "./set-chatgpt-conversation-selection-target";
import { useChatgptComposerControllerT } from "./track-chatgpt-composer-download";
import { useChatgptComposerControllerW } from "./ensure-chatgpt-composer-controller-profile-init";

function _AppInitialM(): void {}

var slot93,
  slot94,
  _f,
  slot95 = rolldownRuntimeN(() => {
    slot93 = appInitialIvt();
    appInitialHft();
    AppInitialUL();
    /* ThreadResourceCard materialization */
    /* drained */
    /* drained */
    /* drained */
    /* drained */
    /* drained */
    slot94 = appInitialJvt();
    _f = 30;
  });
export function useChatgptComposerControllerHelper91(
  request6426: any,
  request6427: any,
) {
  const AppInitialP2 = ___AppInitialP;
  let { cancel, completion, conversationId } = useChatgptComposerControllerT(
      request6426,
      request6427,
    ),
    slot12752 = useChatgptComposerControllerHelper90();
  return (
    appInitialA0.openTab(request6426, slot12752, {
      activate: true,
      icon: <AppInitialP2 className="icon-sm" />,
      id: `chatgpt-entity:${conversationId}`,
      onClose: cancel,
      props: {
        conversationId,
      },
      title: request6427.query,
    }),
    Promise.resolve()
  );
}
var slot97,
  slot98 = rolldownRuntimeN(() => {
    appInitialI0();
    _AppInitialM();
    useChatgptComposerControllerW();
    useChatgptComposerControllerS();
    slot97 = appInitialJvt();
  });
export function useChatgptComposerControllerHelper92(args: any) {
  let { launch, onError } = args;
  let slot10118 = slot101.useRef(0),
    slot10119 = slot101.useRef(null),
    [slot10120, slot10121] = slot101.useState(null);
  return {
    close: () => {
      slot10118.current += 1;
      slot10119.current = null;
      slot10121(null);
    },
    dialog: slot10120,
    launch: async (request5832) => {
      if (slot10119.current != null) return;
      let slot12152 = slot10118.current + 1;
      slot10118.current = slot12152;
      slot10119.current = slot12152;
      slot10121({
        kind: "loading",
      });
      try {
        let slot15581 = await launch(request5832);
        if (slot10118.current !== slot12152) return;
        slot10121({
          kind: "ready",
          result: slot15581,
        });
      } catch (slot15872) {
        onError(slot15872);
        slot10118.current === slot12152 &&
          slot10121({
            kind: "error",
          });
      } finally {
        slot10119.current === slot12152 && (slot10119.current = null);
      }
    },
  };
}
var slot101,
  slot102 = rolldownRuntimeN(() => {
    slot101 = rolldownRuntimeS(appInitialLvt(), 1);
  });
