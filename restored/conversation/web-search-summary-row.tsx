// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Xll` / export `Rc`.

import type { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { codexWebSearchSummaryMessages as msgs } from "./codex-web-search-summary-messages";

type SearchItem = {
  query?: string | null;
  action?: unknown;
  completed?: boolean;
};

let formatDetail: (action: unknown, query: string) => string = () => "";
let DetailText: (chunks: ReactNode) => ReactNode = (c) => c;
let Label: (chunks: ReactNode) => ReactNode = (c) => c;
let SummaryShell: (props: {
  icon?: ReactNode;
  children?: ReactNode;
  status?: string;
  hover?: boolean;
}) => ReactNode = ({ children }) => <>{children}</>;

export function setWebSearchSummaryRowDeps(args: {
  formatDetail: (action: unknown, query: string) => string;
  DetailText?: (chunks: ReactNode) => ReactNode;
  Label?: (chunks: ReactNode) => ReactNode;
  SummaryShell?: typeof SummaryShell;
}): void {
  formatDetail = args.formatDetail;
  if (args.DetailText) DetailText = args.DetailText;
  if (args.Label) Label = args.Label;
  if (args.SummaryShell) SummaryShell = args.SummaryShell;
}

export type WebSearchSummaryRowProps = {
  icon?: ReactNode;
  item: SearchItem;
};

export function WebSearchSummaryRow({
  icon,
  item,
}: WebSearchSummaryRowProps): ReactNode {
  const query = item.query ?? "";
  const detail = formatDetail(item.action, query).trim();
  const status = item.completed ? "completed" : "inProgress";
  const children =
    detail.length > 0 ? (
      <FormattedMessage
        {...msgs.withDetail}
        values={{ detail, detailText: DetailText, label: Label, status }}
      />
    ) : (
      <span className="text-token-conversation-summary-leading group-hover:text-token-foreground">
        <FormattedMessage {...msgs.withoutDetail} values={{ status }} />
      </span>
    );
  return (
    <SummaryShell icon={icon} status={status} hover>
      {children}
    </SummaryShell>
  );
}
