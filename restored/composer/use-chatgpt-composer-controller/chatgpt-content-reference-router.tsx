// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Content-reference type router (Helper243).

import { useChatgptComposerControllerHelper107 } from "./chatgpt-image-group-directive";
import {
  useChatgptComposerControllerHelper119,
  useChatgptComposerControllerHelper121,
  useChatgptComposerControllerHelper122,
  useChatgptComposerControllerHelper123,
} from "./chatgpt-product-carousel-references";
import { useChatgptComposerControllerHelper208 } from "./chatgpt-product-sports-stock-surfaces";
import { useChatgptComposerControllerHelper182 } from "./chatgpt-map-content-reference";
import {
  useChatgptComposerControllerHelper179,
  useChatgptComposerControllerHelper180,
} from "./chatgpt-code-link-title-citations";
import {
  useChatgptComposerControllerHelper223,
  useChatgptComposerControllerHelper236,
  useChatgptComposerControllerHelper238,
  useChatgptComposerControllerHelper241,
  useChatgptComposerControllerHelper242,
} from "./chatgpt-product-sports-stock-surfaces";
import { useChatgptComposerControllerHelper181 } from "./chatgpt-location-search-attribution";
import {
  $g as useChatgptComposerControllerFollowupQueryChip,
  M_ as useChatgptComposerControllerFileContentReference,
  H_ as useChatgptComposerControllerEntityRichCard,
  Y_ as useChatgptComposerControllerForecastCard,
} from "./chatgpt-forecast-file-content-references";
import {
  useChatgptComposerControllerHelper66,
  useChatgptComposerControllerHelper67,
  useChatgptComposerControllerHelper68,
} from "./chatgpt-content-reference-cards";
import { useChatgptComposerControllerHelper79 } from "./chatgpt-news-carousel-references";
import { chatgptHiddenContentReferenceTypes as slot302 } from "./ensure-chatgpt-markdown-directives-registry-init";
import { getChatgptContentReferenceRouterPeers } from "./chatgpt-content-reference-router-peers";

const $g = useChatgptComposerControllerFollowupQueryChip;
const M_ = useChatgptComposerControllerFileContentReference;
const H_ = useChatgptComposerControllerEntityRichCard;
const Y_ = useChatgptComposerControllerForecastCard;

export function useChatgptComposerControllerHelper243(request328: any) {
  const UseChatgptComposerControllerHelper107 =
    useChatgptComposerControllerHelper107;
  const UseChatgptComposerControllerHelper119 =
    useChatgptComposerControllerHelper119;
  const UseChatgptComposerControllerHelper208 =
    useChatgptComposerControllerHelper208;
  const UseChatgptComposerControllerHelper182 =
    useChatgptComposerControllerHelper182;
  const UseChatgptComposerControllerHelper123 =
    useChatgptComposerControllerHelper123;
  const UseChatgptComposerControllerHelper179 =
    useChatgptComposerControllerHelper179;
  const UseChatgptComposerControllerHelper241 =
    useChatgptComposerControllerHelper241;
  const UseChatgptComposerControllerHelper180 =
    useChatgptComposerControllerHelper180;
  const UseChatgptComposerControllerHelper181 =
    useChatgptComposerControllerHelper181;
  const UseChatgptComposerControllerHelper238 =
    useChatgptComposerControllerHelper238;
  const UseChatgptComposerControllerHelper121 =
    useChatgptComposerControllerHelper121;
  const G = $g;
  const UseChatgptComposerControllerHelper67 =
    useChatgptComposerControllerHelper67;
  const UseChatgptComposerControllerHelper79 =
    useChatgptComposerControllerHelper79;
  const UseChatgptComposerControllerHelper223 =
    useChatgptComposerControllerHelper223;
  const UseChatgptComposerControllerHelper242 =
    useChatgptComposerControllerHelper242;
  const UseChatgptComposerControllerHelper122 =
    useChatgptComposerControllerHelper122;
  const UseChatgptComposerControllerHelper236 =
    useChatgptComposerControllerHelper236;
  const UseChatgptComposerControllerHelper177 =
    getChatgptContentReferenceRouterPeers().renderClientDefinedWidget;
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;
  const UseChatgptComposerControllerHelper66 =
    useChatgptComposerControllerHelper66;
  let {
    contentReferenceIndex,
    contentReferenceType,
    isTerminalInline,
    reference,
    turnContext,
  } = request328;
  if (
    reference.type === "hidden" &&
    contentReferenceType != null &&
    slot302.has(contentReferenceType)
  )
    return null;
  switch (contentReferenceType) {
    case "image_group":
    case "image_v2": {
      let slot12286 = turnContext?.conversationId,
        slot12287;
      return (
        <UseChatgptComposerControllerHelper107
          contentReferenceIndex={contentReferenceIndex}
          conversationId={slot12286}
          reference={reference}
        />
      );
    }
    case "products":
    case "product_group": {
      let slot14828;
      return <UseChatgptComposerControllerHelper119 reference={reference} />;
    }
    case "product":
    case "product_entity":
    case "explore_more":
    case "product_reviews":
    case "product_rationale":
    case "product_show_more_header": {
      let slot14829;
      return <UseChatgptComposerControllerHelper208 reference={reference} />;
    }
    case "map":
    case "businesses_map": {
      let slot14830;
      return <UseChatgptComposerControllerHelper182 reference={reference} />;
    }
    case "grouped_webpages":
    case "grouped_webpages_v2":
    case "grouped_webpages_model_predicted_fallback":
    case "url":
    case "webpage":
    case "webpage_extended":
    case "sources_footnote": {
      let slot13792;
      return (
        <UseChatgptComposerControllerHelper123
          isTerminalInline={isTerminalInline}
          reference={reference}
        />
      );
    }
    case "file": {
      let slot13725;
      return (
        <M_
          contentReferenceIndex={contentReferenceIndex}
          reference={reference}
        />
      );
    }
    case "python":
    case "container": {
      let slot14758;
      return <UseChatgptComposerControllerHelper179 reference={reference} />;
    }
    case "title_citation": {
      let slot14759;
      return <UseChatgptComposerControllerHelper241 reference={reference} />;
    }
    case "link_title": {
      let slot14760;
      return <UseChatgptComposerControllerHelper180 reference={reference} />;
    }
    case "location_search": {
      let slot14761;
      return <UseChatgptComposerControllerHelper181 reference={reference} />;
    }
    case "time": {
      let slot14762;
      return <UseChatgptComposerControllerHelper238 reference={reference} />;
    }
    case "attribution":
    case "strix": {
      let slot14763;
      return <UseChatgptComposerControllerHelper121 reference={reference} />;
    }
    case "followup_a":
    case "followup_memory_a": {
      let slot14764;
      return <H_ reference={reference} />;
    }
    case "entity": {
      let slot11743;
      return turnContext == null ? null : (
        <G
          contentReferenceIndex={contentReferenceIndex}
          reference={reference}
          turnContext={turnContext}
        />
      );
    }
    case "image_inline": {
      let slot13793;
      return (
        <UseChatgptComposerControllerHelper67
          isTerminalInline={isTerminalInline}
          reference={reference}
        />
      );
    }
    case "nav_list":
    case "tldr":
    case "navigation":
    case "file_navlist": {
      let slot14765;
      return <UseChatgptComposerControllerHelper79 reference={reference} />;
    }
    case "sports_standings":
    case "sports_schedule": {
      let slot14766;
      return <UseChatgptComposerControllerHelper223 reference={reference} />;
    }
    case "checkout_confirmation":
    case "entity_metadata":
      return null;
    case "video": {
      let slot14767;
      return <UseChatgptComposerControllerHelper242 reference={reference} />;
    }
    case "calculator": {
      let slot14768;
      return <UseChatgptComposerControllerHelper122 reference={reference} />;
    }
    case "stock": {
      let slot14769;
      return <UseChatgptComposerControllerHelper236 reference={reference} />;
    }
    case "forecast": {
      let slot14770;
      return <Y_ reference={reference} />;
    }
    case "client_defined_widget": {
      let slot14771;
      return <UseChatgptComposerControllerHelper177 reference={reference} />;
    }
    case "writing": {
      let slot14772;
      return <UseChatgptComposerControllerHelper68 reference={reference} />;
    }
    case "dil":
    case "hidden":
    case null:
      return null;
    default: {
      let slot13794;
      return (
        <UseChatgptComposerControllerHelper66
          isTerminalInline={isTerminalInline}
          reference={reference}
        />
      );
    }
  }
}
