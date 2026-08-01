// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Product carousel / attribution / calculator / webpage group (Helper114–123).

import { ensureComposerEsm_oL_Init as AppInitialOL } from "../../../composer/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../../boundaries/react-cjs-runtime";
import { extractContentReferenceProducts as appInitialPI } from "../../../content/extract-content-reference-products";
import { extractWebpageContentReferences as appInitialEI } from "../../../content/extract-webpage-content-references";
import { isChatgptMessageNode as _AppInitialNI } from "../../../conversation/is-chatgpt-message-node";
import { resolveSafeMarkdownHref as AppInitialAL } from "../../../markdown/resolve-safe-markdown-href";
import { NavigationAllowContext as _appInitialIL } from "../../../navigation/navigation-allow-context";
import { ThreadResourceCard as _appInitialYI } from "../../../thread/thread-resource-card";
import { rolldownRuntimeN } from "../../../runtime/rolldown-runtime";
import {
  useChatgptComposerControllerHelper31,
  ensureChatgptBrowserHostContextInit,
} from "../chatgpt-browser-host-context";
import { useChatgptComposerControllerHelper24 } from "../chatgpt-markdown-citation-directive";
import { useChatgptComposerControllerHelper65 } from "../chatgpt-composer-confirmation-link";
import {
  useChatgptComposerControllerHelper64,
  useChatgptComposerControllerHelper68,
} from "../chatgpt-content-reference-cards";
import { useChatgptComposerControllerHelper76 } from "../chatgpt-news-reference-helpers";
import { setChatgptContentReferenceFootnoteRenderer } from "../chatgpt-content-reference-footnote-registry";

/** Boundary still owns Value43; call through browser-host ensure bridge. */
const slot43 = ensureChatgptBrowserHostContextInit;
const slot81 = rolldownRuntimeN(() => {});
const slot88 = rolldownRuntimeN(() => {});
const slot92 = rolldownRuntimeN(() => {});

/** Residual stub peers still registered on the open boundary. */
const slot85 = rolldownRuntimeN(() => {});

function useChatgptComposerControllerHelper114(request497: any) {
  const UseChatgptComposerControllerHelper65 =
    useChatgptComposerControllerHelper65;
  let { product } = request497,
    slot2712 = useChatgptComposerControllerHelper31(),
    slot2713 = useChatgptComposerControllerHelper116(product);
  let slot2714 = slot2713,
    slot2715 = useChatgptComposerControllerHelper115(product);
  let slot2716 = slot2715,
    slot2717 =
      useChatgptComposerControllerHelper118(product.featured_tag) ??
      useChatgptComposerControllerHelper118(product.description);
  let slot2718 = slot2717,
    slot2719 = useChatgptComposerControllerHelper118(product.price);
  let slot2720 = slot2719,
    slot2721 = useChatgptComposerControllerHelper118(product.merchants);
  let slot2722 = slot2721,
    slot2723 = useChatgptComposerControllerHelper117(product);
  let slot2724 = slot2723,
    slot2725 = product.showcase_metadata?.background?.primary,
    slot2726 = useChatgptComposerControllerHelper118(slot2725);
  let slot2727 = slot2726,
    slot2728 =
      slot2727 == null
        ? undefined
        : {
            backgroundColor: slot2727,
          };
  let slot2729 =
    slot2714 != null && slot2712?.shouldBlockExternalEgress !== true ? (
      <img
        alt={product.title}
        className="absolute inset-0 m-0 h-full w-full object-contain"
        src={slot2714}
      />
    ) : (
      <div className="absolute inset-0" aria-hidden={true} />
    );
  let slot2730 = (
    <div
      className="relative aspect-[13/16] w-full overflow-clip rounded-xl bg-[#F3F3F3] dark:bg-[#F3F3F3]"
      style={slot2728}
    >
      {slot2729}
    </div>
  );
  let slot2731 = (
    <div className="line-clamp-2 text-sm font-medium text-token-foreground">
      {product.title}
    </div>
  );
  let slot2732 =
    slot2718 == null ? null : (
      <div className="line-clamp-2 text-sm text-token-text-secondary">
        {slot2718}
      </div>
    );
  let slot2733 =
    slot2720 != null || slot2722 != null ? (
      <div className="flex min-w-0 gap-1 text-sm text-token-text-secondary">
        {slot2720 == null ? null : <span>{slot2720}</span>}
        {slot2720 != null && slot2722 != null ? (
          <span aria-hidden={true}>{slot121}</span>
        ) : null}
        {slot2722 == null ? null : <span className="truncate">{slot2722}</span>}
      </div>
    ) : null;
  let slot2734 =
    slot2724 == null ? null : (
      <div className="text-sm text-token-text-secondary">{slot2724}</div>
    );
  let slot2735 = (
    <div className="flex min-w-0 flex-col gap-1 px-1">
      {slot2731}
      {slot2732}
      {slot2733}
      {slot2734}
    </div>
  );
  let slot2736 = (
    <>
      {slot2730}
      {slot2735}
    </>
  );
  let slot2737 = slot2736;
  if (slot2716 == null) {
    let slot12910;
    return (
      <div
        className="flex w-[10.5rem] shrink-0 snap-start flex-col gap-2 pb-2"
        data-testid="chatgpt-product-card"
      >
        {slot2737}
      </div>
    );
  }
  return (
    <UseChatgptComposerControllerHelper65
      className="group flex w-[10.5rem] shrink-0 cursor-interaction snap-start flex-col gap-2 rounded-xl pb-2 no-underline outline-none focus-visible:ring-2 focus-visible:ring-token-focus-border"
      data-testid="chatgpt-product-card"
      href={slot2716}
      initiator="markdown_link_click"
    >
      {slot2737}
    </UseChatgptComposerControllerHelper65>
  );
}
function useChatgptComposerControllerHelper115(request7833: any) {
  let slot14116 = request7833.offers?.find((request11316) => {
      return (
        request11316.available === true &&
        useChatgptComposerControllerHelper118(request11316.url) != null
      );
    }),
    slot14117 = request7833.offers?.find((request11581) => {
      return useChatgptComposerControllerHelper118(request11581.url) != null;
    }),
    slot14118 =
      useChatgptComposerControllerHelper118(slot14116?.url) ??
      useChatgptComposerControllerHelper118(slot14117?.url) ??
      useChatgptComposerControllerHelper118(request7833.url);
  return slot14118 == null ? null : (_appInitialIL(slot14118) ?? null);
}
function useChatgptComposerControllerHelper116(request9176: any) {
  let slot15141 =
    useChatgptComposerControllerHelper118(
      request9176.showcase_metadata?.image?.url,
    ) ??
    request9176.image_urls?.find((request11662) => {
      return AppInitialAL(request11662);
    });
  return slot15141 == null ? null : (AppInitialAL(slot15141) ?? null);
}
function useChatgptComposerControllerHelper117(request8535: any) {
  if (request8535.rating == null) return null;
  let slot14587 = slot119.format(request8535.rating);
  return request8535.num_reviews == null || request8535.num_reviews < 100
    ? slot14587
    : `${slot14587} (${slot120.format(request8535.num_reviews)})`;
}
function useChatgptComposerControllerHelper118(request10564: any) {
  let slot15801 = request10564?.trim();
  return slot15801 == null || slot15801.length === 0 ? null : slot15801;
}
let slot117: any;
let slot118: any;
let slot119: any;
let slot120: any;
let slot121: any;
const slot122 = rolldownRuntimeN(() => {
  slot117 = appInitialIvt();
  AppInitialOL();
  slot85();
  slot43();
  slot118 = appInitialJvt();
  slot119 = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  });
  slot120 = new Intl.NumberFormat(undefined, {
    compactDisplay: "short",
    maximumFractionDigits: 1,
    notation: "compact",
  });
  slot121 = "·";
});
function useChatgptComposerControllerHelper119(request2822: any) {
  let { reference } = request2822,
    slot7710,
    slot7711,
    slot7712,
    slot7713,
    slot7714;
  slot7714 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let slot13640 = appInitialPI(reference);
    if (slot13640.length === 0) {
      slot7714 = null;
      break bb0;
    }
    slot7712 = "my-3";
    slot7713 = "chatgpt-product-carousel";
    slot7710 =
      "hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto py-1";
    slot7711 = slot13640.map(useChatgptComposerControllerHelper120);
  }
  if (slot7714 !== Symbol.for("react.early_return_sentinel")) return slot7714;
  let slot7715 = <div className={slot7710}>{slot7711}</div>;
  return (
    <div className={slot7712} data-testid={slot7713}>
      {slot7715}
    </div>
  );
}
function useChatgptComposerControllerHelper120(
  request10252: any,
  request10253: any,
) {
  const UseChatgptComposerControllerHelper114 =
    useChatgptComposerControllerHelper114;
  return (
    <UseChatgptComposerControllerHelper114
      key={request10252.id ?? `${request10252.title}-${String(request10253)}`}
      product={request10252}
    />
  );
}
let slot123: any;
let slot124: any;
const slot125 = rolldownRuntimeN(() => {
  slot123 = appInitialIvt();
  _appInitialYI();
  slot122();
  slot124 = appInitialJvt();
});
function useChatgptComposerControllerHelper121(request5523: any) {
  let { reference } = request5523,
    slot11804 = _AppInitialNI(reference);
  let slot11805 = slot11804;
  return slot11805 == null ? null : (
    <span className="rounded bg-token-bg-secondary px-0.5">{slot11805}</span>
  );
}
let slot126: any;
let slot127: any;
const slot128 = rolldownRuntimeN(() => {
  slot126 = appInitialIvt();
  _appInitialYI();
  slot127 = appInitialJvt();
});
function useChatgptComposerControllerHelper122(request2376: any) {
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;
  const UseChatgptComposerControllerHelper64 =
    useChatgptComposerControllerHelper64;
  let { reference } = request2376,
    slot6890 = useChatgptComposerControllerHelper76(reference.expression);
  let slot6891 = slot6890,
    slot6892 = useChatgptComposerControllerHelper76(reference.result);
  let slot6893 = slot6892;
  if (slot6891 == null && slot6893 == null) {
    let slot15024;
    return <UseChatgptComposerControllerHelper68 reference={reference} />;
  }
  let slot6894 =
    slot6891 == null ? null : (
      <div className="font-mono text-sm text-token-text-secondary">
        {slot6891}
      </div>
    );
  let slot6895 =
    slot6893 == null ? null : (
      <div className="mt-1 text-2xl font-semibold text-token-text-primary">
        {useChatgptComposerControllerHelper76(reference.prefix)}
        {slot6893}
        {useChatgptComposerControllerHelper76(reference.suffix)}
      </div>
    );
  return (
    <UseChatgptComposerControllerHelper64>
      {slot6894}
      {slot6895}
    </UseChatgptComposerControllerHelper64>
  );
}
let slot129: any;
let slot130: any;
const slot131 = rolldownRuntimeN(() => {
  slot129 = appInitialIvt();
  slot81();
  slot88();
  slot92();
  slot130 = appInitialJvt();
});
function useChatgptComposerControllerHelper123(request3123: any) {
  let { isTerminalInline, reference } = request3123,
    slot8290,
    slot8291;
  slot8291 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let slot11393 = appInitialEI(reference);
    if (slot11393.length === 0) {
      slot8291 = null;
      break bb0;
    }
    let slot11394;
    slot11394 = (request7411, request7412) => {
      const UseChatgptComposerControllerHelper24 =
        useChatgptComposerControllerHelper24;
      return (
        <UseChatgptComposerControllerHelper24
          key={`${request7411.attributes.url}-${String(request7412)}`}
          attributes={request7411.attributes}
          isTerminalInline={isTerminalInline}
          sources={request7411.sources}
        />
      );
    };
    slot8290 = slot11393.map(slot11394);
  }
  if (slot8291 !== Symbol.for("react.early_return_sentinel")) return slot8291;
  return <>{slot8290}</>;
}

setChatgptContentReferenceFootnoteRenderer(
  useChatgptComposerControllerHelper123,
);

export function getChatgptProductCarouselSurfaces() {
  return {
    useChatgptComposerControllerHelper114,
    useChatgptComposerControllerHelper119,
    useChatgptComposerControllerHelper121,
    useChatgptComposerControllerHelper122,
    useChatgptComposerControllerHelper123,
    slot122,
    slot125,
    slot128,
    slot131,
  };
}
