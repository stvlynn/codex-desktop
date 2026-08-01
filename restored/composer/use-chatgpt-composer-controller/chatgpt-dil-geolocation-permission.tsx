// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// DIL widget geolocation permission dialog (Helper46–50).

import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import {
  ensureComposerEsm_GS_Init as appInitialG,
  ensureComposerEsm_YS_Init as appInitialY,
  ensureComposerEsm_udt_Init as appInitialUdt,
} from "../../composer/composer-esm-inits";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit as appInitialHft } from "../../i18n/use-intl";
import { appLogger as appInitialDdt } from "../../logging/app-logger";
import { Button as appInitialYut } from "../../ui/button";
import { DialogBody as _appInitialB } from "../../ui/dialog-body";
import { DialogClose as appInitialJ } from "../../ui/dialog-close";
import { DialogFooter as appInitialV } from "../../ui/dialog-footer";
import { DialogHeader as _appInitialH } from "../../ui/dialog-header";
import { DialogOverlay as appInitialQ } from "../../ui/dialog-overlay";
import { DialogSection as appInitialU } from "../../ui/dialog-section";
import { DialogWithTrigger as appInitialK } from "../../ui/dialog-with-trigger";
import { rolldownRuntimeN, rolldownRuntimeS } from "../../runtime/rolldown-runtime";

function appInitialBut(): void {}

export function useChatgptComposerControllerHelper46() {
  const AppInitialJ2 = appInitialJ;
  const AppInitialGft = appInitialGft;
  const AppInitialU2 = appInitialU;
  const AppInitialH = _appInitialH;
  const AppInitialQ = appInitialQ;
  const AppInitialYut = appInitialYut;
  const AppInitialV = appInitialV;
  const AppInitialB2 = _appInitialB;
  const AppInitialK = appInitialK;
  let [
      slot3232,
      slot3233,
    ] = slot56.useState(null),
    slot3234 =
      slot56.useRef(null),
    slot3235,
    slot3236;
  if (
    ((slot3235 = () => {
      let slot13371 =
        useChatgptComposerControllerHelper47(
          (request9013) => {
            if (slot3234.current != null) {
              request9013.resolve(false);
              return;
            }
            slot3234.current =
              request9013;
            slot3233(
              request9013,
            );
          },
        );
      return () => {
        slot3234.current?.resolve(false);
        slot3234.current = null;
        slot13371();
      };
    }),
    (slot3236 = []),
    slot56.useEffect(
      slot3235,
      slot3236,
    ),
    slot3232 == null)
  )
    return null;
  let slot3237 = (
    request11090,
  ) => {
    slot3232.resolve(
      request11090,
    );
    slot3234.current = null;
    slot3233(null);
  };
  let slot3238 =
      slot3237,
    slot3239 = (
      request11395,
    ) => {
      request11395 ||
        slot3238(false);
    };
  let slot3240 = (event) => {
    event.preventDefault();
    slot3238(true);
  };
  let slot3241 = (
    <AppInitialJ2>
      <AppInitialGft
        id="chatgptConversations.dil.geolocationPermission.title"
        defaultMessage="Allow location access?"
        description="Title for a dialog asking whether ChatGPT widgets can use the user's location"
      />
    </AppInitialJ2>
  );
  let slot3242 = (
    <AppInitialU2>
      <AppInitialH
        title={slot3241}
        subtitle={
          <AppInitialQ>
            <AppInitialGft
              id="chatgptConversations.dil.geolocationPermission.description"
              defaultMessage="This ChatGPT widget wants to use your current location for location-based results"
              description="Description for a dialog asking whether ChatGPT widgets can use the user's location"
            />
          </AppInitialQ>
        }
      />
    </AppInitialU2>
  );
  let slot3243 = () => {
    return slot3238(false);
  };
  let slot3244 = (
    <AppInitialGft
      id="chatgptConversations.dil.geolocationPermission.cancel"
      defaultMessage="Not now"
      description="Cancel button for a dialog asking whether ChatGPT widgets can use the user's location"
    />
  );
  let slot3245 = (
    <AppInitialYut
      type="button"
      color="secondary"
      onClick={slot3243}
    >
      {slot3244}
    </AppInitialYut>
  );
  let slot3246 = (
    <AppInitialYut type="submit">
      <AppInitialGft
        id="chatgptConversations.dil.geolocationPermission.allow"
        defaultMessage="Allow"
        description="Confirm button for a dialog asking whether ChatGPT widgets can use the user's location"
      />
    </AppInitialYut>
  );
  let slot3247 = (
    <AppInitialU2>
      <AppInitialV>
        {slot3245}
        {slot3246}
      </AppInitialV>
    </AppInitialU2>
  );
  let slot3248 = (
    <AppInitialB2 as="form" onSubmit={slot3240}>
      {slot3242}
      {slot3247}
    </AppInitialB2>
  );
  return (
    <AppInitialK
      size="compact"
      open={true}
      showDialogClose={false}
      onOpenChange={slot3239}
    >
      {slot3248}
    </AppInitialK>
  );
}
function useChatgptComposerControllerHelper47(
  request9593,
) {
  return (
    slot59.add(
      request9593,
    ),
    useChatgptComposerControllerHelper48(),
    () => {
      slot59.delete(
        request9593,
      );
      slot59.size === 0 &&
        useChatgptComposerControllerHelper49();
    }
  );
}
function useChatgptComposerControllerHelper48() {
  let slot7819 = navigator.geolocation;
  slot7819 == null ||
    slot61 != null ||
    ((slot61 = {
      clearWatch: slot7819.clearWatch.bind(
        slot7819,
      ),
      getCurrentPosition:
        slot7819.getCurrentPosition.bind(
          slot7819,
        ),
      watchPosition: slot7819.watchPosition.bind(
        slot7819,
      ),
    }),
    (slot7819.getCurrentPosition = (
      request8983,
      request8984,
      request8985,
    ) => {
      useChatgptComposerControllerHelper50().then((value) => {
        if (!value) {
          request8984?.(
            slot58,
          );
          return;
        }
        slot61?.getCurrentPosition(
          request8983,
          request8984,
          request8985,
        );
      });
    }),
    (slot7819.watchPosition = (
      request5964,
      request5965,
      request5966,
    ) => {
      let slot12305 =
        slot63;
      return (
        --slot63,
        slot60.set(
          slot12305,
          {
            cancelled: false,
          },
        ),
        useChatgptComposerControllerHelper50().then((value) => {
          let slot13854 =
            slot60.get(
              slot12305,
            );
          if (
            !(
              slot13854 == null ||
              slot13854.cancelled
            )
          ) {
            if (!value) {
              slot60.delete(
                slot12305,
              );
              request5965?.(
                slot58,
              );
              return;
            }
            slot13854.nativeWatchId =
              slot61?.watchPosition(
                request5964,
                request5965,
                request5966,
              );
          }
        }),
        slot12305
      );
    }),
    (slot7819.clearWatch = (
      request7820,
    ) => {
      let slot14108 =
        slot60.get(
          request7820,
        );
      if (slot14108 != null) {
        slot14108.cancelled = true;
        slot60.delete(
          request7820,
        );
        slot14108.nativeWatchId != null &&
          slot61?.clearWatch(
            slot14108.nativeWatchId,
          );
        return;
      }
      slot61?.clearWatch(
        request7820,
      );
    }));
}
function useChatgptComposerControllerHelper49() {
  let slot13795 = navigator.geolocation;
  slot13795 == null ||
    slot61 == null ||
    ((slot13795.clearWatch =
      slot61.clearWatch),
    (slot13795.getCurrentPosition =
      slot61.getCurrentPosition),
    (slot13795.watchPosition =
      slot61.watchPosition),
    (slot61 = null),
    (slot62 = false),
    slot60.clear());
}
export async function useChatgptComposerControllerHelper50() {
  if (slot62) return true;
  let slot13137 = Array.from(
    slot59,
  ).at(-1);
  return slot13137 == null
    ? (appInitialDdt.warning(
        "ChatGPT DIL geolocation requested without prompt handler",
      ),
      false)
    : new Promise((request9698) => {
        slot13137({
          resolve: (request11230) => {
            request11230 &&
              (slot62 = true);
            request9698(
              request11230,
            );
          },
        });
      });
}
var slot55,
  slot56,
  slot57,
  slot58,
  slot59,
  slot60,
  slot61,
  slot62,
  slot63,
  slot64 = rolldownRuntimeN(() => {
    slot55 = appInitialIvt();
    slot56 = rolldownRuntimeS(appInitialLvt(), 1);
    appInitialHft();
    appInitialBut();
    appInitialY();
    appInitialG();
    appInitialUdt();
    slot57 = appInitialJvt();
    slot58 = {
      code: 1,
      message: "User denied Geolocation",
      PERMISSION_DENIED: 1,
      POSITION_UNAVAILABLE: 2,
      TIMEOUT: 3,
    };
    slot59 = new Set();
    slot60 = new Map();
    slot61 = null;
    slot62 = false;
    slot63 = -1;
  });
