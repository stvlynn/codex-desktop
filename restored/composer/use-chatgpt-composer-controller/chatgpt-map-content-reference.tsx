// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Map / businesses_map content-reference widgets (Helper182–207 + Value273).

import {
  ensureComposerEsm_oL_Init as AppInitialOL,
} from "../../boundaries/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { extractMapEntitiesFromContentReference as appInitialDI } from "../../content/extract-map-entities-from-content-reference";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit as appInitialHft } from "../../i18n/use-intl";
import {
  NavigationAllowContext as _appInitialIL,
} from "../../navigation/navigation-allow-context";
import { ThreadResourceCard as _appInitialYI } from "../../thread/thread-resource-card";
import { rolldownRuntimeN, rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import {
  chatgptMapboxGlRuntime as slot249,
  chatgptMapboxGlWorkerUrl as slot250,
  ensureChatgptMapboxGlWorkerUrlInit as slot251,
  ensureChatgptMapboxGlStubInit as slot252,
  _v,
} from "../../boundaries/chatgpt-mapbox-gl-runtime";
import {
  useChatgptComposerControllerHelper31,
  ensureChatgptBrowserHostContextInit,
} from "./chatgpt-browser-host-context";
import { useChatgptComposerControllerHelper65 } from "./chatgpt-composer-confirmation-link";
import { useChatgptComposerControllerHelper68 } from "./chatgpt-content-reference-cards";
import { chatgptDilMapboxAccessToken as slot77 } from "./chatgpt-dil-ecosystem-widget-launch";

/** Boundary still owns Value43; call through browser-host ensure bridge. */
const slot43 = ensureChatgptBrowserHostContextInit;

/** Residual stub peers still registered on the open boundary. */
const slot78 = rolldownRuntimeN(() => {});
const slot85 = rolldownRuntimeN(() => {});
const slot88 = rolldownRuntimeN(() => {});

export function useChatgptComposerControllerHelper182(request6235: any) {
  const UseChatgptComposerControllerHelper183 =
    useChatgptComposerControllerHelper183;
  let { reference } = request6235;
  switch (useChatgptComposerControllerHelper196(reference)) {
    case "map":
    case "businesses_map": {
      let slot14821;
      return <UseChatgptComposerControllerHelper183 reference={reference} />;
    }
    case null:
      return null;
    default:
      return null;
  }
}
function useChatgptComposerControllerHelper183(
  request926,
) {
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;
  const UseChatgptComposerControllerHelper189 =
    useChatgptComposerControllerHelper189;
  const UseChatgptComposerControllerHelper184 =
    useChatgptComposerControllerHelper184;
  const UseChatgptComposerControllerHelper191 =
    useChatgptComposerControllerHelper191;
  const UseChatgptComposerControllerHelper186 =
    useChatgptComposerControllerHelper186;
  let { reference } = request926,
    slot3983 =
      useChatgptComposerControllerHelper31(),
    slot3984,
    slot3985,
    slot3986,
    slot3987;
  slot3987 = Symbol.for(
    "react.early_return_sentinel",
  );
  bb0: {
    if (
      ((slot3985 = appInitialDI(reference)),
      slot3985.length === 0)
    ) {
      slot3987 = (
        <UseChatgptComposerControllerHelper68 reference={reference} />
      );
      break bb0;
    }
    slot3984 =
      useChatgptComposerControllerHelper201(reference);
    slot3986 =
      slot3985.filter(
        useChatgptComposerControllerHelper203,
      );
  }
  if (
    slot3987 !==
    Symbol.for("react.early_return_sentinel")
  )
    return slot3987;
  let slot3988 =
    slot3986;
  if (
    slot3988.length === 0 ||
    slot3983?.shouldBlockExternalEgress === true
  ) {
    let slot13623;
    return (
      <div className="my-3 max-w-[36rem]">
        {
          <UseChatgptComposerControllerHelper189
            places={slot3985}
          />
        }
      </div>
    );
  }
  let slot3989 =
      useChatgptComposerControllerHelper202(reference) ? "pb-2" : "pt-4",
    slot3990 = `${String(slot3984)}px`,
    slot3991 = {
      maxHeight: slot3990,
      opacity: 1,
    };
  let slot3992 = {
    height: slot3984,
  };
  let slot3993 = (
    <UseChatgptComposerControllerHelper184
      places={slot3988}
    />
  );
  let slot3994,
    slot3995;
  slot3994 = (
    <div className="pointer-events-none absolute inset-0 z-2 rounded-3xl ring-1 ring-token-border-default/50 ring-inset" />
  );
  slot3995 = (
    <UseChatgptComposerControllerHelper191 />
  );
  let slot3996 = (
    <div className="relative h-full overflow-hidden rounded-3xl">
      {slot3993}
      {slot3994}
      {slot3995}
    </div>
  );
  let slot3997 = (
    <div
      className="rounded-3xl bg-[rgba(244,240,239,0.5)] dark:bg-[rgba(38,43,61,0.5)]"
      style={slot3992}
    >
      {slot3996}
    </div>
  );
  let slot3998 = (
    <div
      className={slot263}
      style={slot3991}
    >
      {slot3997}
    </div>
  );
  let slot3999 = (
    <div className={slot3989}>
      {slot3998}
    </div>
  );
  let slot4000 = (
    <UseChatgptComposerControllerHelper186
      places={slot3985}
    />
  );
  return (
    <div
      className="not-prose my-3 max-w-[36rem]"
      data-testid="businesses-map-widget"
    >
      {slot3999}
      {slot4000}
    </div>
  );
}
function useChatgptComposerControllerHelper184(
  request1662,
) {
  let { places } = request1662,
    slot5567 =
      slot255.useRef(null),
    slot5568,
    slot5569;
  slot5568 = () => {
    let slot7279 =
        slot5567.current,
      slot7280 =
        useChatgptComposerControllerHelper204(places);
    if (
      slot7279 == null ||
      slot7280 == null ||
      !slot254.default.supported()
    )
      return;
    slot254.default.accessToken =
      slot77;
    slot254.default.workerUrl =
      slot250;
    let slot7281;
    try {
      slot7281 =
        new slot254.default.Map({
          attributionControl: false,
          bearing: 0,
          center: slot7280,
          container: slot7279,
          cooperativeGestures: true,
          pitch: 0,
          renderWorldCopies: false,
          style: slot257,
          zoom: 12,
        });
    } catch {
      return;
    }
    slot7281.addControl(
      new slot254.default.NavigationControl({
        showCompass: false,
      }),
      "top-right",
    );
    let slot7282 =
        new slot254.default.LngLatBounds(),
      slot7283 = [];
    return (
      places.forEach((item) => {
        let slot14281 =
          useChatgptComposerControllerHelper205(item);
        slot14281 != null &&
          (slot7282.extend(
            slot14281,
          ),
          slot7283.push(
            new slot254.default.Marker({
              element: useChatgptComposerControllerHelper206(item),
            })
              .setLngLat(slot14281)
              .addTo(slot7281),
          ));
      }),
      slot7281.fitBounds(
        slot7282,
        {
          duration: 0,
          maxZoom: slot264,
          padding: {
            bottom: $v,
            left: slot259,
            right: slot260,
            top: slot258,
          },
        },
      ),
      () => {
        slot7283.forEach(
          useChatgptComposerControllerHelper185,
        );
        slot7281.remove();
      }
    );
  };
  slot5569 = [places];
  slot255.useEffect(
    slot5568,
    slot5569,
  );
  return (
    <div className="absolute inset-0">
      <div
        ref={slot5567}
        className="chatgpt-mapbox h-full w-full"
        data-testid="chatgpt-map-canvas"
      />
    </div>
  );
}
function useChatgptComposerControllerHelper185(
  request11381,
) {
  return request11381.remove();
}
function useChatgptComposerControllerHelper186(
  request3730,
) {
  const AppInitialGft = appInitialGft;
  let { places } = request3730,
    slot9506 = (
      <AppInitialGft
        id="chatgpt.contentReferences.map.accessiblePlaces"
        defaultMessage="Map places"
        description="Screen-reader-only heading for places shown on a map content reference"
      />
    );
  let slot9507 = places.map(
    useChatgptComposerControllerHelper187,
  );
  return (
    <div className="sr-only" data-testid="chatgpt-map-accessible-place-list">
      {slot9506}
      <ul>{slot9507}</ul>
    </div>
  );
}
function useChatgptComposerControllerHelper187(
  request8890,
  request8891,
) {
  return (
    <li
      key={`${request8890.name}-${String(request8891)}`}
    >
      <span>{request8890.name}</span>
      {useChatgptComposerControllerHelper200(
        request8890,
      ).map(useChatgptComposerControllerHelper188)}
    </li>
  );
}
function useChatgptComposerControllerHelper188(
  request10935,
) {
  return (
    <span key={request10935}>
      {" "}
      {request10935}
    </span>
  );
}
function useChatgptComposerControllerHelper189(
  request2906,
) {
  const AppInitialGft = appInitialGft;
  let { places } = request2906,
    slot7865 = (
      <div className="font-medium text-token-text-primary">
        {
          <AppInitialGft
            id="chatgpt.contentReferences.localResults.title"
            defaultMessage="Local results"
            description="Title for a local business map content reference card"
          />
        }
      </div>
    );
  let slot7866 = places
    .slice(0, 5)
    .map(useChatgptComposerControllerHelper190);
  return (
    <div
      className="rounded-lg border border-token-border-light bg-token-bg-secondary px-3 py-2 text-sm text-token-text-primary"
      data-testid="chatgpt-content-reference-card"
    >
      {slot7865}
      <div className="mt-3 flex flex-col gap-2">
        {slot7866}
      </div>
    </div>
  );
}
function useChatgptComposerControllerHelper190(
  request10650,
  request10651,
) {
  const UseChatgptComposerControllerHelper192 =
    useChatgptComposerControllerHelper192;
  return (
    <UseChatgptComposerControllerHelper192
      key={`${request10650.name}-${String(request10651)}`}
      place={request10650}
    />
  );
}
function useChatgptComposerControllerHelper191() {
  const UseChatgptComposerControllerHelper195 =
    useChatgptComposerControllerHelper195;
  const AppInitialGft = appInitialGft;
  let slot6604,
    slot6605,
    slot6606;
  slot6604 = (
    <span aria-hidden={true}>{slot267}</span>
  );
  slot6605 = (
    <UseChatgptComposerControllerHelper195 href="https://www.mapbox.com/about/maps">
      {slot271}
    </UseChatgptComposerControllerHelper195>
  );
  slot6606 = (
    <span aria-hidden={true}>{slot268}</span>
  );
  return (
    <div className="absolute start-3 bottom-3 z-[1001] rounded-full bg-token-main-surface-primary/80 px-2 py-1 text-[10px] font-light whitespace-nowrap text-token-text-primary backdrop-blur-xl">
      {slot6604}
      {slot6605}
      {slot6606}
      {
        <UseChatgptComposerControllerHelper195 href="https://www.mapbox.com/legal/end-user-terms">
          <AppInitialGft
            id="chatgpt.contentReferences.map.attribution.terms"
            defaultMessage="Terms"
            description="Link to Mapbox's terms of service in map attribution"
          />
        </UseChatgptComposerControllerHelper195>
      }
      <span aria-hidden={true}>{slot269}</span>
      {
        <UseChatgptComposerControllerHelper195 href="http://www.openstreetmap.org/about">
          {slot272}
        </UseChatgptComposerControllerHelper195>
      }
    </div>
  );
}
function useChatgptComposerControllerHelper192(
  request1557,
) {
  const UseChatgptComposerControllerHelper195 =
    useChatgptComposerControllerHelper195;
  let { place } = request1557,
    slot5294 =
      useChatgptComposerControllerHelper197(place);
  let slot5295 =
      slot5294,
    slot5296 =
      useChatgptComposerControllerHelper198(place);
  let slot5297 =
      slot5296,
    slot5298 =
      useChatgptComposerControllerHelper207(place.address);
  let slot5299 =
    useChatgptComposerControllerHelper207(place.price_str);
  let slot5300 = [
    slot5298,
    slot5297,
    slot5299,
  ].filter(useChatgptComposerControllerHelper194);
  let slot5301 =
      slot5300,
    slot5302 =
      useChatgptComposerControllerHelper199(place);
  let slot5303 =
      slot5302,
    slot5304 =
      slot5295 == null ? (
        place.name
      ) : (
        <UseChatgptComposerControllerHelper195
          href={slot5295}
        >
          {place.name}
        </UseChatgptComposerControllerHelper195>
      );
  let slot5305 = (
    <div className="font-medium text-token-text-primary">
      {slot5304}
    </div>
  );
  let slot5306 =
    slot5301.length === 0 ? null : (
      <div className="mt-1 flex flex-wrap gap-x-1 text-token-text-secondary">
        {slot5301.map(
          useChatgptComposerControllerHelper193,
        )}
      </div>
    );
  let slot5307 =
    slot5303 == null ? null : (
      <div className="mt-1 text-token-text-secondary">
        {slot5303}
      </div>
    );
  return (
    <div className="rounded-md border border-token-border-light p-2">
      {slot5305}
      {slot5306}
      {slot5307}
    </div>
  );
}
function useChatgptComposerControllerHelper193(
  request8057,
  request8058,
) {
  return (
    <span key={request8057}>
      {request8058 === 0 ? null : (
        <span aria-hidden={true}>{slot270}</span>
      )}
      {request8057}
    </span>
  );
}
function useChatgptComposerControllerHelper194(
  request11385,
) {
  return request11385 != null;
}
function useChatgptComposerControllerHelper195(
  request5505,
) {
  const UseChatgptComposerControllerHelper65 =
    useChatgptComposerControllerHelper65;
  let { children, href } = request5505;
  return (
    <UseChatgptComposerControllerHelper65
      className="cursor-interaction underline decoration-current underline-offset-2 hover:text-token-text-primary"
      href={href}
      initiator="markdown_link_click"
    >
      {children}
    </UseChatgptComposerControllerHelper65>
  );
}
function useChatgptComposerControllerHelper196(
  request10493,
) {
  return typeof request10493.type == "string" &&
    request10493.type.length > 0
    ? request10493.type
    : null;
}
function useChatgptComposerControllerHelper197(
  request9801,
) {
  let slot15599 =
    useChatgptComposerControllerHelper207(
      request9801.provider_url,
    ) ??
    useChatgptComposerControllerHelper207(
      request9801.website_url,
    );
  return slot15599 == null
    ? null
    : (_appInitialIL(slot15599) ?? null);
}
function useChatgptComposerControllerHelper198(
  request8748,
) {
  return request8748.rating == null
    ? null
    : request8748.review_count == null
      ? slot265.format(
          request8748.rating,
        )
      : `${slot265.format(request8748.rating)} (${slot266.format(request8748.review_count)})`;
}
function useChatgptComposerControllerHelper199(
  request9443,
) {
  let slot15358 =
    request9443.categories
      ?.map(useChatgptComposerControllerHelper207)
      .filter((request11638) => {
        return request11638 != null;
      });
  return slot15358 == null ||
    slot15358.length === 0
    ? null
    : slot15358.join(", ");
}
function useChatgptComposerControllerHelper200(
  request9936,
) {
  return [
    useChatgptComposerControllerHelper207(
      request9936.address,
    ),
    useChatgptComposerControllerHelper198(
      request9936,
    ),
    useChatgptComposerControllerHelper207(
      request9936.price_str,
    ),
    useChatgptComposerControllerHelper199(
      request9936,
    ),
  ].filter((item) => {
    return item != null;
  });
}
function useChatgptComposerControllerHelper201(
  request11347,
) {
  return useChatgptComposerControllerHelper202(
    request11347,
  )
    ? slot262
    : slot261;
}
function useChatgptComposerControllerHelper202(
  request10885,
) {
  return (
    typeof request10885.start_idx == "number" &&
    request10885.start_idx < 4
  );
}
function useChatgptComposerControllerHelper203(
  request11089,
) {
  return (
    request11089.latitude != null &&
    request11089.longitude != null
  );
}
function useChatgptComposerControllerHelper204(
  request10019,
) {
  for (let slot15882 of request10019) {
    let slot16019 =
      useChatgptComposerControllerHelper205(
        slot15882,
      );
    if (slot16019 != null)
      return slot16019;
  }
  return null;
}
function useChatgptComposerControllerHelper205(
  request9556,
) {
  return request9556.latitude == null ||
    request9556.longitude == null
    ? null
    : {
        lat: request9556.latitude,
        lng: request9556.longitude,
      };
}
function useChatgptComposerControllerHelper206(
  request6635,
) {
  let slot12977 = document.createElement("div");
  if (
    ((slot12977.className = "chatgpt-map-marker"),
    (slot12977.title =
      request6635.name),
    request6635.rating == null)
  )
    return (
      slot12977.setAttribute(
        "aria-label",
        request6635.name,
      ),
      slot12977
    );
  let slot12978 =
    slot265.format(
      request6635.rating,
    );
  return (
    (slot12977.textContent =
      slot12978),
    slot12977.setAttribute(
      "aria-label",
      `${request6635.name}, ${slot12978}`,
    ),
    slot12977
  );
}
function useChatgptComposerControllerHelper207(
  request10769,
) {
  return typeof request10769 == "string" &&
    request10769.trim().length > 0
    ? request10769
    : null;
}
let slot253: any;
let slot254: any;
let slot255: any;
let slot256: any;
let slot257: any;
let slot258: any;
let slot259: any;
let slot260: any;
let $v: any;
let slot261: any;
let slot262: any;
let slot263: any;
let slot264: any;
let slot265: any;
let slot266: any;
let slot267: any;
let slot268: any;
let slot269: any;
let slot270: any;
let slot271: any;
let slot272: any;
const slot273 = rolldownRuntimeN(() => {
    slot253 = appInitialIvt();
    slot254 = rolldownRuntimeS(
      slot249(),
      1,
    );
    slot251();
    slot255 = rolldownRuntimeS(appInitialLvt(), 1);
    appInitialHft();
    AppInitialOL();
    _appInitialYI();
    slot85();
    slot78();
    slot43();
    slot88();
    _v();
    slot252();
    slot256 = appInitialJvt();
    slot257 = "mapbox://styles/mapbox/streets-v12";
    slot258 = 50;
    slot259 = 20;
    slot260 = 20;
    $v = 20;
    slot261 = 400;
    slot262 = 300;
    slot263 =
      "relative overflow-hidden motion-safe:transition-[max-height,opacity] motion-safe:duration-relaxed motion-safe:ease-out";
    slot264 = 13.5;
    slot265 = new Intl.NumberFormat(undefined, {
      maximumFractionDigits: 1,
      minimumFractionDigits: 1,
    });
    slot266 = new Intl.NumberFormat(undefined);
    slot267 = "© ";
    slot268 = " ";
    slot269 = " © ";
    slot270 = "· ";
    slot271 = "Mapbox";
    slot272 = "OpenStreetMap";
});

export const ensureChatgptMapContentReferenceInit = slot273;
