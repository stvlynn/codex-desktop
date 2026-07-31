// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Residual markdown-registry peer inits still owned by the open boundary body.
// Value303 calls through this bridge so the ensure cluster can live in composer/.

export type ChatgptMarkdownRegistryPeerInits = {
  productCarousel: () => void;
  calculatorFallback: () => void;
  attributionSources: () => void;
  contentReferenceFootnote: () => void;
  sportsCodeSurface: () => void;
  sportsLabelSurface: () => void;
  entityNav: () => void;
  stubChromeA: () => void;
  entityRichCard: () => void;
  forecastSurface: () => void;
  stockSurface: () => void;
  imageGroupDirective: () => void;
  videoSurface: () => void;
  mapsAttribution: () => void;
  mapboxMapWidget: () => void;
  stubChromeB: () => void;
  productEntitySurface: () => void;
  webpageGroupSurface: () => void;
  fileNavSurface: () => void;
  navigationListSurface: () => void;
  strixSurface: () => void;
  titleCitationSurface: () => void;
};

let peerInits: ChatgptMarkdownRegistryPeerInits | null = null;

export function setChatgptMarkdownRegistryPeerInits(
  peers: ChatgptMarkdownRegistryPeerInits,
): void {
  peerInits = peers;
}

export function ensureChatgptMarkdownRegistryPeerInits(): void {
  if (peerInits == null) return;
  peerInits.productCarousel();
  peerInits.calculatorFallback();
  peerInits.attributionSources();
  peerInits.contentReferenceFootnote();
  peerInits.sportsCodeSurface();
  peerInits.sportsLabelSurface();
  peerInits.entityNav();
  peerInits.stubChromeA();
  peerInits.entityRichCard();
  peerInits.forecastSurface();
  peerInits.stockSurface();
  peerInits.imageGroupDirective();
  peerInits.videoSurface();
  peerInits.mapsAttribution();
  peerInits.mapboxMapWidget();
  peerInits.stubChromeB();
  peerInits.productEntitySurface();
  peerInits.webpageGroupSurface();
  peerInits.fileNavSurface();
  peerInits.navigationListSurface();
  peerInits.strixSurface();
  peerInits.titleCitationSurface();
}
