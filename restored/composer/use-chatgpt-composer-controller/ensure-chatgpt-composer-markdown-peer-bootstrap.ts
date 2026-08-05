// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Side-effect bootstrap: register markdown-registry peer inits once charts mountain is loaded.

import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import { setChatgptMarkdownRegistryPeerInits } from "./chatgpt-markdown-registry-peer-inits";
import {
  slot125 as productCarouselInit,
  slot128 as calculatorFallbackInit,
  slot131 as attributionSourcesInit,
} from "./chatgpt-product-carousel-references";
import {
  ensureChatgptSportsLabelSurfaceInit as sportsLabelSurfaceInit,
  ensureChatgptStockSurfaceInit as stockSurfaceInit,
  i_ as entityNavInit,
  R_ as entityRichCardInit,
  J_ as forecastSurfaceInit,
} from "./chatgpt-forecast-file-content-references";
import {
  slot242 as videoSurfaceInit,
  slot248 as mapsAttributionInit,
} from "./chatgpt-location-search-attribution";
import {
  slot278 as productEntitySurfaceInit,
  slot287 as webpageGroupSurfaceInit,
  slot291 as fileNavSurfaceInit,
  slot294 as navigationListSurfaceInit,
  slot296 as strixSurfaceInit,
  slot299 as titleCitationSurfaceInit,
} from "./chatgpt-product-sports-stock-surfaces";
import { ensureChatgptContentReferenceFootnotePeerInit as contentReferenceFootnoteInit } from "./ensure-chatgpt-composer-markdown-fanin-peers";
import { ensureChatgptMapContentReferenceInit as mapboxMapWidgetInit } from "./chatgpt-map-content-reference";
import { ensureChatgptImageGroupDirectiveInit as imageGroupDirectiveInit } from "./chatgpt-image-group-directive";
import { slot233 as sportsCodeSurfaceInit } from "./chatgpt-client-defined-widget-charts";

/** Residual stub chrome peers previously owned by the open boundary. */
const stubChromeA = rolldownRuntimeN(() => {});
const stubChromeB = rolldownRuntimeN(() => {});

setChatgptMarkdownRegistryPeerInits({
  productCarousel: productCarouselInit,
  calculatorFallback: calculatorFallbackInit,
  attributionSources: attributionSourcesInit,
  contentReferenceFootnote: contentReferenceFootnoteInit,
  sportsCodeSurface: sportsCodeSurfaceInit,
  sportsLabelSurface: sportsLabelSurfaceInit,
  entityNav: entityNavInit,
  stubChromeA,
  entityRichCard: entityRichCardInit,
  forecastSurface: forecastSurfaceInit,
  stockSurface: stockSurfaceInit,
  imageGroupDirective: imageGroupDirectiveInit,
  videoSurface: videoSurfaceInit,
  mapsAttribution: mapsAttributionInit,
  mapboxMapWidget: mapboxMapWidgetInit,
  stubChromeB,
  productEntitySurface: productEntitySurfaceInit,
  webpageGroupSurface: webpageGroupSurfaceInit,
  fileNavSurface: fileNavSurfaceInit,
  navigationListSurface: navigationListSurfaceInit,
  strixSurface: strixSurfaceInit,
  titleCitationSurface: titleCitationSurfaceInit,
});

export const ensureChatgptComposerMarkdownPeerBootstrap = rolldownRuntimeN(
  () => {},
);
