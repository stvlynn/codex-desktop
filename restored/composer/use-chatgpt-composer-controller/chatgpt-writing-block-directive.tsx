// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Writing-mode markdown directive (registry key WRITING_MODE_ID / Helper32).

import {
  appScopeAtom as appInitialFft,
  useAppScope as appInitialLT,
} from "../../boundaries/app-scope-runtime";
import {
  useAppScopeAtomValue as appInitialIT,
  chatgptConversationServerIdAtom as appInitialFP,
  chatgptThreadDerivedAtomBP as appInitialBP,
} from "../../boundaries/composer-appscope-atoms";
import { flushChatgptConversation as AppInitialKS } from "../../chatgpt/flush-chatgpt-conversation";
import { scheduleWritingBlockUpdate as AppInitialJS } from "../../chatgpt/schedule-writing-block-update";
import { alignToneSectionIds as appInitialE7 } from "../../composer/align-tone-section-ids";
import { EmailWritingBlockView as appInitialIl } from "../../composer/email-writing-block-view";
import { toToneStylePayload as appInitialA7 } from "../../composer/to-tone-style-payload";
import { ToneSectionEditor as appInitialHl } from "../../composer/tone-section-editor";
import { updateToneSectionContent as appInitialPl } from "../../composer/update-tone-section-content";
import { WritingBlockRenderer as AppInitialMl } from "../../composer/writing-block-renderer";
import { ACTIVE_OPTION_ID_KEY as AppInitialS7 } from "../../config/active-option-id-key";
import { parseWritingBlocks as appInitialSI } from "../../content/parse-writing-blocks";
import { updateElicitationOptionContent as AppInitialL7 } from "../../conversation/update-elicitation-option-content";
import { updateWritingBlockInMessage } from "../../conversation/update-writing-block-in-message";
import { useEventCallback as appInitialJlt } from "../../hooks/use-event-callback";
import { useToneSectionSelection as appInitialVl } from "../../hooks/use-tone-section-selection";
import { useChatgptComposerControllerHelper31 } from "./chatgpt-browser-host-context";
import {
  useChatgptComposerControllerHelper34,
  useChatgptComposerControllerHelper35,
  useChatgptComposerControllerHelper36,
  useChatgptComposerControllerHelper37,
} from "./chatgpt-writing-block-metadata";

export function useChatgptComposerControllerHelper32(
  request2823: Record<string, unknown> & {
    isStreaming?: boolean;
  },
) {
  let slot7718 =
      useChatgptComposerControllerHelper31(),
    slot7719 =
      slot7718?.isStreaming ?? false,
    slot7720 = (
      request8269,
    ) => {
      return (request8379) => {
        const AppInitialIl = appInitialIl;
        return (
          <AppInitialIl
            context={request8379}
            emailMetadata={useChatgptComposerControllerHelper36(
              request8269,
            )}
            editorKey={undefined}
            isStreaming={
              slot7718?.isStreaming ?? false
            }
            variant={request8269.variant}
          />
        );
      };
    };
  let slot7721 = (
    request7603,
  ) => {
    const UseChatgptComposerControllerHelper33 =
      useChatgptComposerControllerHelper33;
    let slot13955 =
        request7603.id,
      slot13956 =
        slot13955 == null
          ? undefined
          : slot7718?.writingBlockIndexes?.[
              slot13955
            ];
    return slot7718 == null ||
      slot13955 == null ||
      slot13956 == null ? null : (
      <UseChatgptComposerControllerHelper33
        directive={request7603}
        id={slot13955}
        index={slot13956}
        turnContext={slot7718}
      />
    );
  };
  return (
    <AppInitialMl
      {...request2823}
      isStreaming={slot7719}
      renderExtension={slot7720}
      renderPersisted={slot7721}
      testId="chatgpt-writing-block"
    />
  );
}

export function useChatgptComposerControllerHelper33(
  request240: {
    directive: any;
    id: string;
    index: number;
    turnContext: any;
  },
) {
  const AppInitialHl = appInitialHl;
  let {
      directive,
      id: __id,
      index,
      turnContext,
    } = request240,
    slot1660 = appInitialLT(appInitialFft),
    slot1661 = appInitialIT(
      appInitialFP,
      turnContext.conversationId,
    ),
    slot1662 = appInitialIT(
      appInitialBP,
      turnContext.conversationId,
    ),
    slot1663,
    slot1664,
    slot1665;
  {
    let slot11902 =
      turnContext.messageId == null
        ? undefined
        : appInitialSI(
            slot1662?.[turnContext.messageId]
              ?.message?.metadata,
          )[__id];
    slot1664 =
      slot11902?.metadata ?? directive.metadata;
    slot1663 =
      slot11902?.content ?? directive.content;
    slot1665 =
      slot11902 == null
        ? directive.toneSections
        : appInitialE7({
            content: slot1663,
            metadata: slot1664,
          });
  }
  let slot1666 =
      slot1665,
    slot1667 =
      useChatgptComposerControllerHelper36(directive);
  let slot1668 =
      slot1667,
    slot1669 =
      useChatgptComposerControllerHelper37(
        slot1664?.bcc,
      ) ?? slot1668.bcc;
  let slot1670 =
    useChatgptComposerControllerHelper37(
      slot1664?.cc,
    ) ?? slot1668.cc;
  let slot1671 =
    useChatgptComposerControllerHelper37(
      slot1664?.recipient,
    ) ?? slot1668.recipient;
  let slot1672 =
    useChatgptComposerControllerHelper37(
      slot1664?.subject,
    ) ?? slot1668.subject;
  let slot1673 = {
    bcc: slot1669,
    cc: slot1670,
    recipient: slot1671,
    subject: slot1672,
    writingBlockMetadata: slot1664,
  };
  let slot1674 =
      slot1673,
    slot1675 = `${turnContext.conversationId}\n${turnContext.turnId ?? ""}\n${__id}`,
    slot1676 =
      turnContext.messageId != null &&
      slot1662?.[turnContext.messageId]?.message !=
        null,
    slot1677 = (
      request2917,
    ) => {
      if (
        slot1661 == null ||
        turnContext.messageId == null
      )
        return;
      let slot7885 = {
          content: slot1663,
          id: __id,
          index,
          metadata: {
            ...directive.metadata,
            ...(directive.variant === "email"
              ? {
                  bcc: directive.emailMetadata.bcc ?? null,
                  cc: directive.emailMetadata.cc ?? null,
                  recipient: directive.emailMetadata.recipient ?? null,
                  subject: directive.emailMetadata.subject ?? null,
                }
              : {}),
            ...appInitialA7(slot1666),
          },
          title: directive.title,
          variant: directive.variant ?? "unknown",
        },
        slot7886 = updateWritingBlockInMessage({
          blockId: __id,
          conversationId: turnContext.conversationId,
          fallbackWritingBlock: slot7885,
          messageId: turnContext.messageId,
          scope: slot1660,
          update: request2917,
        });
      slot7886 != null &&
        AppInitialJS(slot1660, {
          blockId: __id,
          conversationId: turnContext.conversationId,
          messageId: turnContext.messageId,
          serverConversationId: slot1661,
          writingBlock: slot7886,
        });
    };
  let slot1678 = appInitialJlt(
      slot1677,
    ),
    slot1679 =
      slot1661 != null &&
      turnContext.messageId != null &&
      slot1676,
    slot1680 = (
      request11255,
    ) => {
      slot1678({
        metadata: {
          [AppInitialS7]: request11255,
        },
      });
    };
  let slot1681 = {
    isPersistenceReady: slot1679,
    isStreaming: turnContext.isStreaming,
    metadata: slot1664,
    onPersistSelection: slot1680,
    toneSections: slot1666,
  };
  let slot1682 = appInitialVl(
      slot1681,
    ),
    slot1683 = (
      request4844,
      request4845,
    ) => {
      let slot10986 = appInitialPl({
        nextContent: request4844,
        toneSectionId: request4845,
        toneSections: slot1666,
      });
      if (
        slot10986.activeToneSectionId == null ||
        slot10986.toneSections == null
      ) {
        slot1678({
          content: slot10986.content,
        });
        return;
      }
      let slot10987 =
          slot10986.toneSections.findIndex(
            (item) => {
              return (
                item.id ===
                slot10986.activeToneSectionId
              );
            },
          ),
        slot10988 = AppInitialL7(
          slot1664,
          {
            id: slot10986.activeToneSectionId,
            index: slot10987,
          },
          request4844,
        );
      slot1678({
        content: slot10986.content,
        metadata: {
          ...appInitialA7(slot10986.toneSections),
          ...slot10988,
          [AppInitialS7]:
            slot10986.activeToneSectionId,
        },
      });
    };
  let slot1684 = appInitialJlt(
      slot1683,
    ),
    slot1685 = (
      request11224,
    ) => {
      slot1678({
        metadata: {
          subject: request11224,
        },
      });
    };
  let slot1686 = appInitialJlt(
      slot1685,
    ),
    slot1687 = (
      request11228,
      request11229,
    ) => {
      slot1678({
        metadata: {
          [request11228]:
            request11229,
        },
      });
    };
  let slot1688 = appInitialJlt(
      slot1687,
    ),
    slot1689 = (
      request10791,
    ) => {
      slot1678({
        metadata: request10791,
      });
      AppInitialKS(
        slot1660,
        turnContext.conversationId,
      ).catch(useChatgptComposerControllerHelper35);
    };
  let slot1690 = appInitialJlt(
      slot1689,
    ),
    slot1691 = () => {
      AppInitialKS(
        slot1660,
        turnContext.conversationId,
      ).catch(useChatgptComposerControllerHelper34);
    };
  let slot1692 = appInitialJlt(
      slot1691,
    ),
    slot1693 =
      slot1661 == null ||
      turnContext.messageId == null
        ? undefined
        : slot1675,
    slot1694 =
      slot1693 != null && !turnContext.isStreaming,
    slot1695 =
      slot1693 == null
        ? undefined
        : slot1692,
    slot1696 =
      slot1693 == null
        ? undefined
        : slot1684,
    slot1697 =
      slot1693 == null
        ? undefined
        : slot1688,
    slot1698 =
      slot1693 == null
        ? undefined
        : slot1686,
    slot1699 = (
      request5781,
    ) => {
      const AppInitialIl = appInitialIl;
      return (
        <AppInitialIl
          context={request5781}
          editorKey={slot1693}
          emailMetadata={slot1674}
          isStreaming={turnContext.isStreaming}
          onEmailMetadataChange={
            slot1693 == null
              ? undefined
              : slot1690
          }
          serverConversationId={
            slot1693 == null
              ? undefined
              : (slot1661 ?? undefined)
          }
          showMagicEditAction={
            turnContext.messageId != null && !turnContext.isStreaming
          }
          variant={directive.variant}
          writingBlockId={
            slot1693 == null ? undefined : __id
          }
        />
      );
    };
  return (
    <AppInitialHl
      activeToneSectionId={
        slot1682.activeToneSectionId
      }
      content={slot1663}
      editorKey={slot1693}
      emailMetadata={slot1674}
      isEditable={slot1694}
      onBlur={slot1695}
      onContentChange={slot1696}
      onRecipientChange={slot1697}
      onSubjectChange={slot1698}
      onToneSectionSelect={
        slot1682.selectToneSection
      }
      render={slot1699}
      testId="chatgpt-writing-block"
      title={directive.title}
      toneSections={slot1682.displayedToneSections}
      variant={directive.variant}
    />
  );
}
