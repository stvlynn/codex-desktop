// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oV` / export `YI`.

import type { ElementType, ReactNode } from "react";
import { cx } from "../ui/cx";

export type ThreadResourceCardProps = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
};

export function ThreadResourceCard({
  as,
  children,
  className,
}: ThreadResourceCardProps): ReactNode {
  const Tag = (as ?? "div") as ElementType;
  const merged = cx(
    "flex max-w-full flex-col overflow-hidden rounded-lg bg-token-dropdown-background/50 text-token-foreground [--thread-resource-card-row-padding-x:0.75rem] electron:elevation-stroke extension:border extension:border-token-border extension:bg-token-input-background/50 extension:shadow-sm",
    className,
  );
  return <Tag className={merged}>{children}</Tag>;
}
