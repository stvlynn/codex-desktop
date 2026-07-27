// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qxa` / export `tI`.

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";
import { asRecord } from "../utils/as-record";
import { hasDilField } from "./has-dil-field";
import { pickContentReferenceTitle } from "./pick-content-reference-title";

export type ContentReferenceDisplayMode = "hidden" | "alt" | "inline" | "block";

export function getContentReferenceDisplayMode(
  ref: Record<string, unknown>,
): ContentReferenceDisplayMode {
  const type = nonEmptyStringOrNull(ref.type);
  if (type == null) {
    return pickContentReferenceTitle(ref) == null ? "hidden" : "alt";
  }
  switch (type) {
    case "invalid":
    case "hidden":
    case "conversation_context_citation":
    case "status":
    case "optimistic_image_citation":
    case "optimistic_image_inline":
    case "attribution_footer":
    case "sports":
      return "hidden";
    case "file":
    case "python":
    case "container":
    case "title_citation":
    case "link_title":
    case "location_search":
    case "time":
    case "entity":
    case "product_entity":
    case "grouped_webpages":
    case "grouped_webpages_v2":
    case "grouped_webpages_model_predicted_fallback":
    case "attribution":
    case "image_inline":
    case "strix":
    case "followup_a":
    case "followup_memory_a":
    case "url":
    case "webpage":
    case "webpage_extended":
      return "inline";
    case "image_v2":
    case "nav_list":
    case "tldr":
    case "sports_standings":
    case "sports_schedule":
    case "navigation":
    case "checkout_confirmation":
    case "video":
    case "file_navlist":
    case "entity_metadata":
    case "calculator":
    case "stock":
    case "forecast":
    case "businesses_map":
    case "map":
    case "products":
    case "explore_more":
    case "product_group":
    case "product_reviews":
    case "product_rationale":
    case "product_show_more_header":
    case "image_group":
    case "dil":
    case "writing":
      return "block";
    case "client_defined_widget": {
      const mode = nonEmptyStringOrNull(asRecord(ref.data)?.display_mode);
      return mode === "block" || mode === "inline" || mode === "alt"
        ? mode
        : "block";
    }
    case "product":
      return nonEmptyStringOrNull(ref.render_as) === "table"
        ? "inline"
        : "block";
    case "sources_footnote":
      return "inline";
    case "alt_text":
      return nonEmptyStringOrNull(ref.render_as) === "latex" ? "inline" : "alt";
    default:
      return hasDilField(ref) ? "block" : "alt";
  }
}
