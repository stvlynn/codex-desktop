// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `V2` / export `Qd`.

import type { ReactNode } from "react";
import { cx } from "../ui/cx";

export type ChatMessageContentProps = {
  children?: ReactNode;
  className?: string;
  padding?: "default" | "offset" | string;
};

export function ChatMessageContent({
  children,
  className,
  padding = "default",
}: ChatMessageContentProps): ReactNode {
  const base = cx("min-w-0 text-size-chat", className);
  if (padding === "offset") {
    return (
      <div className={cx(base, "relative overflow-visible py-0")}>
        {children}
      </div>
    );
  }
  return <div className={cx(base, "py-0")}>{children}</div>;
}
