// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// PopoverMenu leading / label / meta / avatar slots (`Lqo`/`Bqo`/`Vqo`/`Rqo`/`zqo`).

import type { ReactElement } from "react";

import { cx } from "../cx";
import {
  ITEM_LEADING_INNER_CLASS,
  ITEM_LEADING_SIZE_CLASS,
  ITEM_META_TONE_CLASS,
  ITEM_META_VARIANT_CLASS,
} from "./constants";
import type {
  PopoverMenuItemAvatarButtonProps,
  PopoverMenuItemAvatarGroupProps,
  PopoverMenuItemLabelProps,
  PopoverMenuItemLeadingProps,
  PopoverMenuItemMetaProps,
} from "./types";

/** Bundle `Lqo` — leading glyph / preview / status slot. */
export function PopoverMenuItemLeading(
  props: PopoverMenuItemLeadingProps,
): ReactElement {
  const { children, className, variant = "glyph", ...rest } = props;
  const innerClass = ITEM_LEADING_INNER_CLASS[variant];

  return (
    <span
      {...rest}
      className={cx(
        "flex shrink-0 items-center justify-start",
        ITEM_LEADING_SIZE_CLASS[variant],
        className,
      )}
      data-slot="thread-summary-panel-item-leading"
    >
      {innerClass == null ? (
        children
      ) : (
        <span
          className={cx(
            "flex shrink-0 items-center justify-center",
            innerClass,
          )}
        >
          {children}
        </span>
      )}
    </span>
  );
}

/** Bundle `Rqo` — avatar-sized button. */
export function PopoverMenuItemAvatarButton(
  props: PopoverMenuItemAvatarButtonProps,
): ReactElement {
  const { children, className, type = "button", ...rest } = props;

  return (
    <button
      {...rest}
      className={cx(
        "flex size-4 cursor-interaction items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border [&>img]:size-4 [&>svg]:size-4",
        className,
      )}
      data-slot="thread-summary-panel-item-avatar-button"
      type={type}
    >
      {children}
    </button>
  );
}

/** Bundle `zqo` — avatar cluster. */
export function PopoverMenuItemAvatarGroup(
  props: PopoverMenuItemAvatarGroupProps,
): ReactElement {
  const { children, className, ...rest } = props;

  return (
    <span
      {...rest}
      className={cx(
        "flex shrink-0 items-center gap-token-button-composer-gap [&_img]:size-4 [&_svg]:size-4",
        className,
      )}
      data-slot="thread-summary-panel-item-avatar-group"
    >
      {children}
    </span>
  );
}

/** Bundle `Bqo` — primary label. */
export function PopoverMenuItemLabel(
  props: PopoverMenuItemLabelProps,
): ReactElement {
  const { children, className, truncate = true, ...rest } = props;

  return (
    <span
      {...rest}
      className={cx(
        "min-w-0 flex-1 text-base",
        truncate && "text-fade-truncate",
        className,
      )}
      data-slot="thread-summary-panel-item-label"
    >
      {children}
    </span>
  );
}

/** Bundle `Vqo` — trailing meta text/icon. */
export function PopoverMenuItemMeta(
  props: PopoverMenuItemMetaProps,
): ReactElement {
  const {
    children,
    className,
    tone = "muted",
    truncate = false,
    variant = "text",
    visibility = "always",
    ...rest
  } = props;

  return (
    <span
      {...rest}
      className={cx(
        "flex items-center",
        truncate ? "max-w-1/2 min-w-0 shrink" : "shrink-0",
        ITEM_META_TONE_CLASS[tone],
        ITEM_META_VARIANT_CLASS[variant],
        visibility === "interaction" &&
          "opacity-0 group-focus-visible/summary-panel-item:opacity-100 group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:opacity-100",
        className,
      )}
      data-slot="thread-summary-panel-item-meta"
    >
      {truncate ? (
        <span className="text-fade-truncate">{children}</span>
      ) : (
        children
      )}
    </span>
  );
}
