// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Xk` / export `K$` — dialog shell with optional trigger + close.

import type { ComponentType, ReactNode, Ref } from "react";

type AnyProps = Record<string, unknown>;

let Root: ComponentType<AnyProps> | null = null;
let Trigger: ComponentType<AnyProps> | null = null;
let Portal: ComponentType<AnyProps> | null = null;
let Overlay: ComponentType<AnyProps> | null = null;
let Content: ComponentType<AnyProps> | null = null;
let Close: ComponentType<AnyProps> | null = null;

export function setDialogWithTriggerImpls(args: {
  Root: ComponentType<AnyProps>;
  Trigger: ComponentType<AnyProps>;
  Portal: ComponentType<AnyProps>;
  Overlay: ComponentType<AnyProps>;
  Content: ComponentType<AnyProps>;
  Close?: ComponentType<AnyProps>;
}): void {
  Root = args.Root;
  Trigger = args.Trigger;
  Portal = args.Portal;
  Overlay = args.Overlay;
  Content = args.Content;
  Close = args.Close ?? null;
}

export type DialogWithTriggerProps = {
  children?: ReactNode;
  triggerContent?: ReactNode;
  triggerAsChild?: boolean;
  triggerRef?: Ref<unknown>;
  contentClassName?: string;
  contentOverflow?: string;
  contentProps?: AnyProps;
  dialogCloseClassName?: string;
  dialogCloseLabel?: string;
  headerActions?: ReactNode;
  overlayClassName?: string;
  portalContainer?: Element | null;
  showDialogClose?: boolean;
  shouldIgnoreClickOutside?: boolean;
  unstyledContent?: boolean;
  viewportSized?: boolean;
  size?: string;
  [key: string]: unknown;
};

export function DialogWithTrigger(props: DialogWithTriggerProps): ReactNode {
  if (
    Root == null ||
    Trigger == null ||
    Portal == null ||
    Overlay == null ||
    Content == null
  ) {
    throw new Error("DialogWithTrigger impls have not been configured");
  }
  const {
    children,
    triggerContent,
    triggerAsChild = true,
    triggerRef,
    contentClassName,
    contentProps,
    dialogCloseClassName,
    dialogCloseLabel,
    headerActions,
    overlayClassName,
    portalContainer,
    showDialogClose = true,
    ...rootProps
  } = props;
  return (
    <Root {...rootProps}>
      {triggerContent != null ? (
        <Trigger asChild={triggerAsChild} ref={triggerRef}>
          {triggerContent}
        </Trigger>
      ) : null}
      <Portal container={portalContainer}>
        <Overlay className={overlayClassName} />
        <Content className={contentClassName} {...(contentProps ?? {})}>
          {headerActions}
          {showDialogClose && Close != null ? (
            <Close
              className={dialogCloseClassName}
              aria-label={dialogCloseLabel}
            />
          ) : null}
          {children}
        </Content>
      </Portal>
    </Root>
  );
}
