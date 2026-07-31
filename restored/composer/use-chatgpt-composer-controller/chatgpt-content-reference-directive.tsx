// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// ChatGPT content-reference markdown directive (registry appInitialZF / Helper244).

import { hasDilField as AppInitialVI } from "../../content/has-dil-field";
import { identity as _appInitialRI } from "../../utils/identity";
import { useChatgptComposerControllerHelper243 } from "./chatgpt-content-reference-router";
import { useChatgptComposerControllerHelper31 } from "./chatgpt-browser-host-context";
import { useChatgptComposerControllerHelper102 } from "./chatgpt-dil-widget-directive";
import { useChatgptComposerControllerHelper107 } from "./chatgpt-image-group-directive";
import {
  useChatgptComposerControllerD,
  useChatgptComposerControllerE,
  useChatgptComposerControllerHelper18,
} from "./parse-chatgpt-citation-attributes";

function useChatgptComposerControllerHelper244(
  request1202,
) {
  const UseChatgptComposerControllerHelper107 =
    useChatgptComposerControllerHelper107;
  const UseChatgptComposerControllerHelper102 =
    useChatgptComposerControllerHelper102;
  const UseChatgptComposerControllerHelper243 =
    useChatgptComposerControllerHelper243;
  let { attributes, isTerminalInline } = request1202,
    slot4687 =
      useChatgptComposerControllerHelper31(),
    index,
    slot4688,
    reference,
    slot4689,
    slot4690,
    slot4691;
  slot4691 = Symbol.for(
    "react.early_return_sentinel",
  );
  bb0: {
    let slot8992 =
        useChatgptComposerControllerHelper245(
          attributes,
          slot4687?.contentReferences,
        ),
      slot8993;
    if (
      ((slot8993 =
        useChatgptComposerControllerHelper18(attributes)),
      (slot4688 =
        slot8993),
      (slot4689 =
        slot8992 != null &&
        typeof slot8992.reference.type ==
          "string" &&
        slot8992.reference.type.length > 0
          ? slot8992.reference.type
          : null),
      (slot4688 === "image_group" ||
        slot4688 === "image_v2") &&
        (slot8992 == null ||
          slot4689 === "hidden"))
    ) {
      let slot13185;
      slot13185 = {
        type: slot4688,
      };
      slot4691 = (
        <UseChatgptComposerControllerHelper107
          contentReferenceIndex={
            slot8992?.index ?? 0
          }
          conversationId={slot4687?.conversationId}
          reference={slot13185}
        />
      );
      break bb0;
    }
    if (slot8992 == null) {
      slot4691 = null;
      break bb0;
    }
    ({ index, reference } = slot8992);
    slot4690 = AppInitialVI(reference);
  }
  if (
    slot4691 !==
    Symbol.for("react.early_return_sentinel")
  )
    return slot4691;
  if (slot4690) {
    let slot12907 =
        slot4687?.contentReferenceMessageIds?.[
          index
        ] ?? slot4687?.messageId,
      slot12908 =
        slot12907
          ? `${slot12907}:${String(index)}`
          : undefined,
      slot12909;
    return (
      <UseChatgptComposerControllerHelper102
        reference={reference}
        widgetRefId={slot12908}
      />
    );
  }
  let slot4692 =
    slot4689 === "hidden"
      ? slot4688
      : slot4689;
  return (
    <UseChatgptComposerControllerHelper243
      contentReferenceIndex={index}
      contentReferenceType={slot4692}
      isTerminalInline={isTerminalInline}
      reference={reference}
      turnContext={slot4687}
    />
  );
}
function useChatgptComposerControllerHelper245(
  request6403,
  request6404,
) {
  if (request6404 == null) return null;
  let slot12721 = useChatgptComposerControllerE(
    request6403,
  );
  if (slot12721 != null) {
    let slot15867 =
      request6404[
        slot12721
      ];
    return slot15867 == null
      ? null
      : {
          index: slot12721,
          reference: slot15867,
        };
  }
  let slot12722 = useChatgptComposerControllerD(
    request6403,
  );
  if (slot12722 == null) return null;
  let slot12723 =
    request6404.findIndex((item) => {
      return _appInitialRI(item) === slot12722;
    });
  if (slot12723 === -1) return null;
  let slot12724 =
    request6404[
      slot12723
    ];
  return slot12724 == null
    ? null
    : {
        index: slot12723,
        reference: slot12724,
      };
}

export {
  useChatgptComposerControllerHelper244,
  useChatgptComposerControllerHelper245,
};
