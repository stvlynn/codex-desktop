// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `tJa`) / export `cM`.

import type { ReactElement, ReactNode } from "react";

export type AtMentionSectionsListProps = {
  className?: string;
  sections: Array<
    { items?: Array<{ key: string } & Record<string, unknown>> } & Record<
      string,
      unknown
    >
  >;
  onUpdateSelectedMention: (mention: unknown | null) => void;
  onAddContext: (mention: unknown) => void;
  onRequestClose: () => void;
  placement?: string;
  query?: string;
  chromeVariant?: string;
  isHomeMenu?: boolean;
  keyboardEventTarget?: unknown;
};

export type AtMentionSectionsListPeers = {
  flattenMentionEntries: (
    section: AtMentionSectionsListProps["sections"][number],
  ) => Array<[string, unknown]>;
  mapSectionForList: (
    section: AtMentionSectionsListProps["sections"][number],
  ) => unknown;
  FormattedMessage: (props: {
    id: string;
    defaultMessage: string;
    description?: string;
  }) => ReactNode;
  MentionListSurface: (props: Record<string, unknown>) => ReactElement;
};

let peers: AtMentionSectionsListPeers | null = null;

/** Wire at-mention list peers once companions land. */
export function setAtMentionSectionsListPeers(
  next: AtMentionSectionsListPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cM` / internal `tJa`.
 * Render at-mention sections list with highlight/select wiring.
 */
export function AtMentionSectionsList(
  props: AtMentionSectionsListProps,
): ReactElement {
  if (peers == null) {
    throw new Error("AtMentionSectionsList peers are not configured");
  }
  const {
    className,
    sections,
    onUpdateSelectedMention,
    onAddContext,
    onRequestClose,
    placement = "top",
    query = "",
    chromeVariant = "default",
    isHomeMenu = false,
    keyboardEventTarget,
  } = props;
  const byKey = new Map(
    sections.flatMap((section) => peers!.flattenMentionEntries(section)),
  );
  const noResults = peers.FormattedMessage({
    id: "composer.atMentionList.noResults",
    defaultMessage: "No results",
    description:
      "Shown when there are no mention results matching the search query",
  });
  const onHighlight = (item: { key: string } | null) => {
    onUpdateSelectedMention(
      item == null ? null : (byKey.get(item.key) ?? null),
    );
  };
  const onSelect = (item: { key: string }) => {
    const mention = byKey.get(item.key);
    if (mention != null) {
      onUpdateSelectedMention(mention);
      onAddContext(mention);
    }
  };
  return peers.MentionListSurface({
    className,
    chromeVariant,
    isActive: true,
    isHomeMenu,
    keyboardEventTarget,
    noResults,
    onHighlight,
    onRequestClose,
    placement,
    onSelect,
    query,
    sections: sections.map((section) => peers!.mapSectionForList(section)),
  });
}
