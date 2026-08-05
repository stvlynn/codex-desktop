// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Product / sports / stock / time / video / title content-reference surfaces
// (Helper208–242 + Value274–299).

import {
  ensureComposerEsm_JL_Init as appInitialJL,
  ensureComposerEsm_Tft_Init as appInitialTft,
  ensureComposerEsm_oL_Init as AppInitialOL,
  ensureComposerEsm_wct_Init as appInitialWct,
  ensureComposerEsm_I__Init as _appInitialI,
  ensureComposerEsm_MI_Init as _appInitialMI,
} from "../../../composer/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../../boundaries/react-cjs-runtime";
import { extractContentReferenceProducts as appInitialPI } from "../../../content/extract-content-reference-products";
import { extractProductCitations as appInitialHI } from "../../../content/extract-product-citations";
import { extractProductReviews as appInitialGI } from "../../../content/extract-product-reviews";
import { getContentReferenceDisplayMode as _appInitialTI } from "../../../content/get-content-reference-display-mode";
import { pickContentReferenceUrl as AppInitialSI } from "../../../content/pick-content-reference-url";
import { InlineMention as appInitialQL } from "../../../composer/inline-mention";
import { isChatgptMessageNode as _AppInitialNI } from "../../../conversation/is-chatgpt-message-node";
import { MemoizedFormattedMessage as appInitialGft } from "../../../i18n/memoized-formatted-message";
import {
  ensureIntlFormattersInit as appInitialHft,
  useIntl as appInitialJft,
} from "../../../i18n/use-intl";
import { AppIconCct as appInitialCct } from "../../../icons/app-icon-cct";
import { findModelVersionOptionId as _AppInitialOI } from "../../../models/find-model-version-option-id";
import { NavigationAllowContext as _appInitialIL } from "../../../navigation/navigation-allow-context";
import { ThreadResourceCard as _appInitialYI } from "../../../thread/thread-resource-card";
import { cx as appInitialWft } from "../../../ui/cx";
import {
  zodArray as _appInitialFT,
  zodLiteral as appInitialYT,
  zodObject as appInitialXT,
  zodString as appInitialCT,
} from "../../../vendor/zod";
const __appInitialCT = appInitialCT;
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../../runtime/rolldown-runtime";
import {
  useChatgptComposerControllerHelper64,
  useChatgptComposerControllerHelper68,
  useChatgptComposerControllerHelper70,
} from "../chatgpt-content-reference-cards";
import { useChatgptComposerControllerHelper65 } from "../chatgpt-composer-confirmation-link";
import {
  useChatgptComposerControllerHelper73,
  useChatgptComposerControllerHelper74,
} from "../chatgpt-content-reference-link-card";
import {
  $d,
  useChatgptComposerControllerHelper75,
  useChatgptComposerControllerHelper76,
  useChatgptComposerControllerHelper77,
  useChatgptComposerControllerHelper78,
} from "../chatgpt-news-reference-helpers";
import {
  useChatgptComposerControllerHelper31,
  ensureChatgptBrowserHostContextInit,
} from "../chatgpt-browser-host-context";

const slot43 = ensureChatgptBrowserHostContextInit;
import {
  useChatgptComposerControllerHelper114,
  useChatgptComposerControllerHelper119,
  slot122,
  slot125,
} from "../chatgpt-product-carousel-references";
import {
  E_ as useChatgptComposerControllerSafeContentReferenceHref,
  O_ as useChatgptComposerControllerContentReferenceAnchor,
  D_ as useChatgptComposerControllerMapsAttributionPeerInit,
  j_ as useChatgptComposerControllerLocationSearchPeerInit,
} from "../chatgpt-forecast-file-content-references";

const AppInitialGft = appInitialGft;
const AppInitialQL = appInitialQL;
const E_ = useChatgptComposerControllerSafeContentReferenceHref;
const O_ = useChatgptComposerControllerContentReferenceAnchor;
const D_ = useChatgptComposerControllerMapsAttributionPeerInit;
const j_ = useChatgptComposerControllerLocationSearchPeerInit;

/** Residual stub peers still registered on the open boundary. */
const slot81 = rolldownRuntimeN(() => {});
const slot85 = rolldownRuntimeN(() => {});
const slot88 = rolldownRuntimeN(() => {});
const slot91 = rolldownRuntimeN(() => {});
const slot92 = rolldownRuntimeN(() => {});

function useChatgptComposerControllerHelper208(request2142: any) {
  const UseChatgptComposerControllerHelper119 =
    useChatgptComposerControllerHelper119;
  const UseChatgptComposerControllerHelper210 =
    useChatgptComposerControllerHelper210;
  const UseChatgptComposerControllerHelper209 =
    useChatgptComposerControllerHelper209;
  const Y = _y;
  const UseChatgptComposerControllerHelper213 =
    useChatgptComposerControllerHelper213;
  const UseChatgptComposerControllerHelper214 =
    useChatgptComposerControllerHelper214;
  let { reference } = request2142;
  switch (useChatgptComposerControllerHelper217(reference)) {
    case "products":
    case "product_group":
    case "explore_more": {
      let slot14822;
      return <UseChatgptComposerControllerHelper119 reference={reference} />;
    }
    case "product": {
      let slot13370;
      return _appInitialTI(reference) === "inline" ? (
        <UseChatgptComposerControllerHelper210 reference={reference} />
      ) : (
        <UseChatgptComposerControllerHelper209 reference={reference} />
      );
    }
    case "product_entity": {
      let slot14823;
      return <UseChatgptComposerControllerHelper210 reference={reference} />;
    }
    case "product_reviews": {
      let slot14824;
      return <Y reference={reference} />;
    }
    case "product_rationale": {
      let slot14825;
      return <UseChatgptComposerControllerHelper213 reference={reference} />;
    }
    case "product_show_more_header": {
      let slot14754;
      return <UseChatgptComposerControllerHelper214 reference={reference} />;
    }
    case null:
      return null;
    default:
      return null;
  }
}
function useChatgptComposerControllerHelper209(request4686: any) {
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;
  const UseChatgptComposerControllerHelper114 =
    useChatgptComposerControllerHelper114;
  let { reference } = request4686,
    slot10824 = appInitialPI(reference);
  let slot10825 = slot10824[0];
  if (slot10825 == null) {
    let slot15040;
    return <UseChatgptComposerControllerHelper68 reference={reference} />;
  }
  return (
    <div className="my-3 max-w-fit">
      {<UseChatgptComposerControllerHelper114 product={slot10825} />}
    </div>
  );
}
function useChatgptComposerControllerHelper210(request2008: any) {
  const UseChatgptComposerControllerHelper216 =
    useChatgptComposerControllerHelper216;
  let { reference } = request2008,
    slot6183,
    slot6184,
    slot6185,
    slot6186;
  slot6186 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let slot8641 = appInitialPI(reference)[0];
    if (slot8641 == null) {
      slot6186 = null;
      break bb0;
    }
    slot6184 = [
      slot8641.title,
      useChatgptComposerControllerHelper222(slot8641.price),
      useChatgptComposerControllerHelper222(slot8641.merchants),
    ].filter(useChatgptComposerControllerHelper211);
    slot6183 = (
      <span className="inline-flex max-w-full items-baseline gap-1 rounded bg-token-bg-secondary px-1 text-token-text-primary">
        <span className="truncate font-medium">{slot8641.title}</span>
        {useChatgptComposerControllerHelper222(slot8641.price) ==
        null ? null : (
          <span className="text-token-text-secondary">{slot8641.price}</span>
        )}
        {useChatgptComposerControllerHelper222(slot8641.merchants) ==
        null ? null : (
          <span className="truncate text-token-text-secondary">
            {slot8641.merchants}
          </span>
        )}
      </span>
    );
    slot6185 = useChatgptComposerControllerHelper218(slot8641);
  }
  if (slot6186 !== Symbol.for("react.early_return_sentinel")) return slot6186;
  let slot6187 = slot6185;
  if (slot6187 == null) return slot6183;
  let slot6188 = slot6184.join(" ");
  return (
    <UseChatgptComposerControllerHelper216
      aria-label={slot6188}
      href={slot6187}
    >
      {slot6183}
    </UseChatgptComposerControllerHelper216>
  );
}
function useChatgptComposerControllerHelper211(request11386: any) {
  return request11386 != null;
}
function _y(request1958: any) {
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;
  const AppInitialGft = appInitialGft;
  const UseChatgptComposerControllerHelper215 =
    useChatgptComposerControllerHelper215;
  let { reference } = request1958,
    slot6115 = _appInitialI(reference);
  let slot6116 = slot6115,
    slot6117,
    slot6118;
  slot6118 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let slot7368 = appInitialGI(reference);
    if (slot6116 == null && slot7368.length === 0) {
      let slot14691;
      slot14691 = (
        <UseChatgptComposerControllerHelper68 reference={reference} />
      );
      slot6118 = slot14691;
      break bb0;
    }
    let slot7369 = (
      <AppInitialGft
        id="chatgpt.contentReferences.productReviews.title"
        defaultMessage="Product reviews"
        description="Title for a product reviews content reference card"
      />
    );
    let slot7370;
    slot7370 =
      slot6116 == null ? null : (
        <div className="text-token-text-secondary">{slot6116}</div>
      );
    slot6117 = (
      <UseChatgptComposerControllerHelper215 title={slot7369}>
        {slot7370}
        {slot7368.length === 0 ? null : (
          <div className="mt-3 flex flex-col gap-2">
            {slot7368.slice(0, 3).map(useChatgptComposerControllerHelper212)}
          </div>
        )}
      </UseChatgptComposerControllerHelper215>
    );
  }
  return slot6118 === Symbol.for("react.early_return_sentinel")
    ? slot6117
    : slot6118;
}
function useChatgptComposerControllerHelper212(
  request2669: any,
  request2670: any,
) {
  const UseChatgptComposerControllerHelper216 =
    useChatgptComposerControllerHelper216;
  let slot7402 = useChatgptComposerControllerHelper222(request2669.source),
    slot7403 =
      useChatgptComposerControllerHelper222(request2669.theme) ??
      slot7402 ??
      useChatgptComposerControllerHelper220(
        useChatgptComposerControllerHelper222(request2669.cite_url) ??
          useChatgptComposerControllerHelper222(request2669.cite),
      ),
    slot7404 = useChatgptComposerControllerHelper219(
      useChatgptComposerControllerHelper222(request2669.cite_url) ??
        useChatgptComposerControllerHelper222(request2669.cite),
    ),
    slot7405 = useChatgptComposerControllerHelper221(
      request2669.rating,
      request2669.num_reviews,
    );
  return (
    <div
      key={`${slot7403 ?? "review"}-${String(request2670)}`}
      className="rounded-md border border-token-border-light p-2"
    >
      {slot7403 == null ? null : (
        <div className="font-medium text-token-text-primary">{slot7403}</div>
      )}
      {useChatgptComposerControllerHelper222(request2669.summary) ==
      null ? null : (
        <div className="mt-1 text-token-text-secondary">
          {request2669.summary}
        </div>
      )}
      {slot7405 == null && slot7402 == null ? null : (
        <div className="mt-1 flex flex-wrap gap-2 text-token-text-secondary">
          {slot7405 == null ? null : <span>{slot7405}</span>}
          {slot7402 == null ? null : slot7404 == null ? (
            <span>{slot7402}</span>
          ) : (
            <UseChatgptComposerControllerHelper216 href={slot7404}>
              {slot7402}
            </UseChatgptComposerControllerHelper216>
          )}
        </div>
      )}
    </div>
  );
}
function useChatgptComposerControllerHelper213(request1920: any) {
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;
  const AppInitialGft = appInitialGft;
  const UseChatgptComposerControllerHelper215 =
    useChatgptComposerControllerHelper215;
  let { reference } = request1920,
    slot6065 = _appInitialMI(reference);
  let slot6066 = slot6065,
    slot6067,
    slot6068;
  slot6068 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let slot7300 = appInitialHI(reference);
    if (slot6066 == null && slot7300.length === 0) {
      let slot14692;
      slot14692 = (
        <UseChatgptComposerControllerHelper68 reference={reference} />
      );
      slot6068 = slot14692;
      break bb0;
    }
    let slot7301 = (
      <AppInitialGft
        id="chatgpt.contentReferences.productRationale.title"
        defaultMessage="Why this product"
        description="Title for a product recommendation rationale content reference card"
      />
    );
    let slot7302;
    slot7302 =
      slot6066 == null ? null : (
        <div className="text-token-text-secondary">{slot6066}</div>
      );
    slot6067 = (
      <UseChatgptComposerControllerHelper215 title={slot7301}>
        {slot7302}
        {slot7300.length === 0 ? null : (
          <div className="mt-2 flex flex-wrap gap-2">
            {slot7300.slice(0, 3).map(by)}
          </div>
        )}
      </UseChatgptComposerControllerHelper215>
    );
  }
  return slot6068 === Symbol.for("react.early_return_sentinel")
    ? slot6067
    : slot6068;
}
function by(request8477: any, request8478: any) {
  const UseChatgptComposerControllerHelper216 =
    useChatgptComposerControllerHelper216;
  let slot14540 = useChatgptComposerControllerHelper219(
      useChatgptComposerControllerHelper222(request8477.url),
    ),
    slot14541 =
      useChatgptComposerControllerHelper222(request8477.title) ??
      useChatgptComposerControllerHelper220(
        useChatgptComposerControllerHelper222(request8477.url),
      );
  return slot14540 == null || slot14541 == null ? null : (
    <UseChatgptComposerControllerHelper216
      key={`${slot14540}-${String(request8478)}`}
      href={slot14540}
    >
      {slot14541}
    </UseChatgptComposerControllerHelper216>
  );
}
function useChatgptComposerControllerHelper214(request3229: any) {
  const UseChatgptComposerControllerHelper215 =
    useChatgptComposerControllerHelper215;
  let { reference } = request3229,
    slot8576 = useChatgptComposerControllerHelper222(reference.label);
  let slot8577 = slot8576,
    slot8578 = useChatgptComposerControllerHelper222(reference.query);
  let slot8579 = slot8578,
    slot8580 = slot8577 ?? _AppInitialOI(reference);
  let slot8581 = slot8580;
  if (slot8581 == null && slot8579 == null) return null;
  let slot8582 =
    slot8579 == null || slot8579 === slot8581 ? null : (
      <div className="text-token-text-secondary">{slot8579}</div>
    );
  return (
    <UseChatgptComposerControllerHelper215 title={slot8581}>
      {slot8582}
    </UseChatgptComposerControllerHelper215>
  );
}
function useChatgptComposerControllerHelper215(request3541: any) {
  let { children, title } = request3541,
    slot9182 = (
      <div className="font-medium text-token-text-primary">{title}</div>
    );
  let slot9183 = <div className="mt-1">{children}</div>;
  return (
    <div
      className="my-3 max-w-[36rem] rounded-lg border border-token-border-light bg-token-bg-secondary px-3 py-2 text-sm text-token-text-primary"
      data-testid="chatgpt-content-reference-card"
    >
      {slot9182}
      {slot9183}
    </div>
  );
}
function useChatgptComposerControllerHelper216(request4061: any) {
  const UseChatgptComposerControllerHelper65 =
    useChatgptComposerControllerHelper65;
  let { children, href, ...rest } = request4061;
  return (
    <UseChatgptComposerControllerHelper65
      {...rest}
      className="cursor-interaction text-token-text-secondary underline decoration-current underline-offset-2 hover:text-token-text-primary"
      href={href}
      initiator="markdown_link_click"
    >
      {children}
    </UseChatgptComposerControllerHelper65>
  );
}
function useChatgptComposerControllerHelper217(request10494: any) {
  return typeof request10494.type == "string" && request10494.type.length > 0
    ? request10494.type
    : null;
}
function useChatgptComposerControllerHelper218(request11359: any) {
  return useChatgptComposerControllerHelper219(
    useChatgptComposerControllerHelper222(request11359.url),
  );
}
function useChatgptComposerControllerHelper219(request11185: any) {
  return request11185 == null ? null : (_appInitialIL(request11185) ?? null);
}
function useChatgptComposerControllerHelper220(request9592: any) {
  if (request9592 == null) return null;
  try {
    return new URL(request9592).hostname || request9592;
  } catch {
    return request9592;
  }
}
function useChatgptComposerControllerHelper221(
  request9476: any,
  request9477: any,
) {
  return request9476 == null
    ? null
    : request9477 == null
      ? slot276.format(request9476)
      : `${slot276.format(request9476)} (${slot277.format(request9477)})`;
}
function useChatgptComposerControllerHelper222(request10770: any) {
  return typeof request10770 == "string" && request10770.trim().length > 0
    ? request10770
    : null;
}
let slot274: any;
let slot275: any;
let slot276: any;
let slot277: any;
const slot278 = rolldownRuntimeN(() => {
  slot274 = appInitialIvt();
  appInitialHft();
  AppInitialOL();
  _appInitialYI();
  slot85();
  slot122();
  slot125();
  slot88();
  slot275 = appInitialJvt();
  slot276 = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  });
  slot277 = new Intl.NumberFormat(undefined);
});

export function getChatgptProductContentSurfaces() {
  return {
    useChatgptComposerControllerHelper208,
    slot278,
  };
}
