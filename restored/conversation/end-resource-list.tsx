// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `skl` / export `hc` — end-of-turn resource rows with show-more.

import type { ReactNode } from "react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { localconversationEndResourceMessages as msgs } from "./localconversation-end-resource-messages";

export type EndResourceListProps = {
  turnId?: string;
  conversationId?: string;
  cwd?: string;
  hostId?: string;
  inputMessageId?: string;
  items?: ReactNode[];
  initialVisibleCount?: number;
  renderItem?: (item: unknown, index: number) => ReactNode;
  resources?: unknown[];
  [key: string]: unknown;
};

export function EndResourceList({
  items,
  resources,
  renderItem,
  initialVisibleCount = 3,
}: EndResourceListProps): ReactNode {
  const [expanded, setExpanded] = useState(false);
  const rows =
    items ??
    (resources ?? []).map((resource, index) =>
      renderItem ? renderItem(resource, index) : null,
    );
  if (rows.length === 0) return null;
  const visible = expanded ? rows : rows.slice(0, initialVisibleCount);
  const hidden = rows.length - visible.length;
  return (
    <div className="divide-y divide-token-border">
      {visible}
      {hidden > 0 ? (
        <button type="button" onClick={() => setExpanded(true)}>
          <FormattedMessage {...msgs.showMore} values={{ count: hidden }} />
        </button>
      ) : null}
    </div>
  );
}
