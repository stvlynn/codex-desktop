// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$xa` / export `pI`.
// Zod product schemas left injectable until those parsers are restored.

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";

type ProductsParser = (ref: Record<string, unknown>) => unknown[] | null;
type ProductParser = (ref: Record<string, unknown>) => unknown | null;

let parseProducts: ProductsParser | null = null;
let parseProduct: ProductParser | null = null;

/** Wire products-list parser (`HSa` in the bundle). */
export function setContentReferenceProductsParser(parser: ProductsParser): void {
  parseProducts = parser;
}

/** Wire single-product parser (`USa` in the bundle). */
export function setContentReferenceProductParser(parser: ProductParser): void {
  parseProduct = parser;
}

export function extractContentReferenceProducts(ref: Record<string, unknown>): unknown[] {
  switch (nonEmptyStringOrNull(ref.type)) {
    case "products":
    case "explore_more":
    case "product_group":
      return parseProducts?.(ref) ?? [];
    case "product":
    case "product_entity": {
      const product = parseProduct?.(ref);
      return product == null ? [] : [product];
    }
    case "dil":
    case "grouped_webpages":
    case "grouped_webpages_model_predicted_fallback":
    case "grouped_webpages_v2":
    case "hidden":
    case "image_group":
    case "image_v2":
    case "sources_footnote":
    case "url":
    case "webpage":
    case "webpage_extended":
    case null:
      return [];
    default:
      return [];
  }
}
