// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `C6c` / export `Dl` — fork/copy actions for assistant turns.
// Heavy deps left injectable.

import type { ComponentType, ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { assistantMessageContentForkMessages as msgs } from "./assistant-message-content-fork-messages";

type AnyProps = Record<string, unknown>;

let CopyAction: ComponentType<AnyProps> | null = null;
let ForkAction: ComponentType<AnyProps> | null = null;
let useAlwaysShow: ((turnId?: string) => boolean) | null = null;

export function setAssistantMessageActionsDeps(args: {
  CopyAction: ComponentType<AnyProps>;
  ForkAction: ComponentType<AnyProps>;
  useAlwaysShow?: (turnId?: string) => boolean;
}): void {
  CopyAction = args.CopyAction;
  ForkAction = args.ForkAction;
  useAlwaysShow = args.useAlwaysShow ?? null;
}

export type AssistantMessageActionsProps = {
  alwaysShowActions?: boolean;
  turnId?: string;
  autoReviewStats?: unknown;
  hookStats?: unknown;
  children?: ReactNode;
  [key: string]: unknown;
};

export function AssistantMessageActions(props: AssistantMessageActionsProps): ReactNode {
  const always =
    props.alwaysShowActions === true || useAlwaysShow?.(props.turnId) === true;
  return (
    <div
      className={
        always
          ? "flex h-full items-center gap-0.5"
          : "flex h-full items-center gap-0.5 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100"
      }
    >
      {ForkAction != null ? (
        <ForkAction
          aria-label={<FormattedMessage {...msgs.forkAriaLabel} />}
          title={<FormattedMessage {...msgs.forkTooltip} />}
          {...props}
        />
      ) : null}
      {CopyAction != null ? <CopyAction {...props} /> : null}
      {props.children}
    </div>
  );
}
