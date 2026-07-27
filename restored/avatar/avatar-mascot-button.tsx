// Restored from ref/webview/assets/avatar-mascot-button-DbJheYLr.js
// Avatar mascot button + draggable notification badge.
// Stage 3: Out/uvt/Dut→persisted-atom; wft→cx; aft→reducedMotion; hft dropped.

import {
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import {
  CodexAvatar,
  type CodexAvatarAssetRef,
  type CodexAvatarProps,
  type CodexAvatarState,
} from "../avatar/codex-avatar";
import {
  createPersistedAtom,
  ensurePersistedAtomInit,
  useAtomPair,
} from "../boundaries/persisted-atom";
import { useTurnSourcesReducedMotion } from "../boundaries/turn-sources-runtime";
import { cx } from "../ui/cx";
ensurePersistedAtomInit();
const MOVE_THRESHOLD_PX = 4;
const CORNER_CLASS: Record<string, string> = {
  "top-start": "top-0 left-0",
  "top-end": "top-0 right-0",
  "bottom-start": "bottom-0 left-0",
  "bottom-end": "right-7 bottom-0",
};
const badgeCornerAtom = createPersistedAtom(
  "avatar-mascot-notification-badge-corner",
  "top-end",
);
export type AvatarMascotResizeHandle = {
  ariaLabel?: string;
  onLostPointerCapture?: (event: ReactPointerEvent<HTMLButtonElement>) => void;
  onPointerCancel?: (event: ReactPointerEvent<HTMLButtonElement>) => void;
  onPointerDown?: (event: ReactPointerEvent<HTMLButtonElement>) => void;
  onPointerEnter?: (event: ReactPointerEvent<HTMLButtonElement>) => void;
  onPointerLeave?: (event: ReactPointerEvent<HTMLButtonElement>) => void;
  onPointerMove?: (event: ReactPointerEvent<HTMLButtonElement>) => void;
  onPointerUp?: (event: ReactPointerEvent<HTMLButtonElement>) => void;
};
export type AvatarNotificationBadge = {
  onClick: () => void;
  [key: string]: unknown;
};
function cornerFromPointer(args: {
  avatarBounds: DOMRect;
  clientX: number;
  clientY: number;
}): string {
  const { avatarBounds, clientX, clientY } = args;
  const vertical =
    clientY < avatarBounds.top + avatarBounds.height / 2 ? "top" : "bottom";
  const horizontal =
    clientX < avatarBounds.left + avatarBounds.width / 2 ? "start" : "end";
  return `${vertical}-${horizontal}`;
}

/** Notification badge overlay for the mascot (bundle export `n`, kept private). */
function AvatarMascotNotificationBadge(props: {
  animatesExit?: boolean;
  ignoresReducedMotion?: boolean;
  notificationBadge: AvatarNotificationBadge;
  presentationPosition?: string;
}): ReactNode {
  const {
    ignoresReducedMotion = false,
    notificationBadge,
    presentationPosition,
  } = props;
  const [corner, setCorner] = useAtomPair(badgeCornerAtom) as [
    string,
    (next: string) => void,
  ];
  const [dragOffset, setDragOffset] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const dragRef = useRef<{
    hasMoved: boolean;
    pointerId: number;
    startClientX: number;
    startClientY: number;
  } | null>(null);
  const suppressClickRef = useRef(false);
  const reducedMotion = useTurnSourcesReducedMotion() && !ignoresReducedMotion;
  const resolvedCorner = presentationPosition ?? corner;
  void reducedMotion;
  return (
    <button
      type="button"
      className={cx(
        "absolute z-20 flex size-5 cursor-grab items-center justify-center rounded-full bg-token-charts-red text-[10px] font-semibold text-white shadow-sm active:cursor-grabbing",
        CORNER_CLASS[resolvedCorner] ?? CORNER_CLASS["top-end"],
      )}
      style={
        dragOffset
          ? {
              transform: `translate(${dragOffset.x}px, ${dragOffset.y}px)`,
            }
          : undefined
      }
      data-testid="avatar-mascot-notification-badge"
      onClick={(event) => {
        event.stopPropagation();
        if (suppressClickRef.current) {
          suppressClickRef.current = false;
          event.preventDefault();
          return;
        }
        notificationBadge.onClick();
      }}
      onPointerDown={(event) => {
        if (event.button !== 0) return;
        event.stopPropagation();
        event.currentTarget.setPointerCapture?.(event.pointerId);
        dragRef.current = {
          hasMoved: false,
          pointerId: event.pointerId,
          startClientX: event.clientX,
          startClientY: event.clientY,
        };
      }}
      onPointerMove={(event) => {
        const drag = dragRef.current;
        if (drag == null || drag.pointerId !== event.pointerId) return;
        event.stopPropagation();
        const dx = event.clientX - drag.startClientX;
        const dy = event.clientY - drag.startClientY;
        if (
          !drag.hasMoved &&
          Math.abs(dx) < MOVE_THRESHOLD_PX &&
          Math.abs(dy) < MOVE_THRESHOLD_PX
        ) {
          return;
        }
        event.preventDefault();
        drag.hasMoved = true;
        setDragOffset({
          x: dx,
          y: dy,
        });
      }}
      onPointerUp={(event) => {
        const drag = dragRef.current;
        if (drag == null || drag.pointerId !== event.pointerId) return;
        event.stopPropagation();
        dragRef.current = null;
        if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
          event.currentTarget.releasePointerCapture?.(event.pointerId);
        }
        if (!drag.hasMoved) return;
        const bounds = event.currentTarget
          .closest("[data-avatar-mascot='true']")
          ?.getBoundingClientRect();
        if (bounds != null) {
          setCorner(
            cornerFromPointer({
              avatarBounds: bounds,
              clientX: event.clientX,
              clientY: event.clientY,
            }),
          );
        }
        setDragOffset(null);
        event.preventDefault();
        suppressClickRef.current = true;
        window.setTimeout(() => {
          suppressClickRef.current = false;
        }, 0);
      }}
      onPointerCancel={(event) => {
        const drag = dragRef.current;
        if (drag == null || drag.pointerId !== event.pointerId) return;
        event.stopPropagation();
        dragRef.current = null;
        setDragOffset(null);
        if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
          event.currentTarget.releasePointerCapture?.(event.pointerId);
        }
      }}
    />
  );
}

/**
 * Bundle export `t` — interactive avatar mascot button.
 */
export function AvatarMascotButton(props: {
  ariaLabel?: string;
  assetRef: CodexAvatarAssetRef | string;
  className?: string;
  lookFrame?: number | null;
  notificationBadge?: AvatarNotificationBadge | null;
  onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void;
  resizeHandle?: AvatarMascotResizeHandle | null;
  spriteVersionNumber?: number;
  spritesheetUrl?: string;
  state?: CodexAvatarState | string;
  style?: CSSProperties;
  transientState?: CodexAvatarState | string | null;
}): ReactNode {
  const {
    ariaLabel,
    assetRef,
    className,
    lookFrame,
    notificationBadge,
    onContextMenu,
    resizeHandle,
    spriteVersionNumber = 1,
    spritesheetUrl,
    state = "idle",
    style,
    transientState,
  } = props;
  const [hoverJump, setHoverJump] = useState(false);
  const resolvedState = (transientState ??
    (hoverJump ? "jumping" : state)) as CodexAvatarState;
  const lookEnabled =
    resolvedState === "idle" ||
    resolvedState === "running" ||
    resolvedState === "waving";
  const hasBadge = notificationBadge != null;
  const interactive = hasBadge || resizeHandle != null;
  return (
    <div
      className={cx(
        "codex-avatar-button relative flex cursor-interaction items-center justify-center active:cursor-grabbing",
        className,
      )}
      data-avatar-mascot="true"
      data-testid="avatar-mascot-button"
      aria-hidden={ariaLabel == null && !interactive ? true : undefined}
      aria-label={ariaLabel}
      role={ariaLabel != null ? (interactive ? "group" : "img") : undefined}
      onContextMenu={onContextMenu}
      onPointerEnter={() => setHoverJump(true)}
      onPointerLeave={() => setHoverJump(false)}
      style={style}
    >
      <CodexAvatar
        assetRef={assetRef as CodexAvatarAssetRef}
        className="relative z-10"
        lookFrame={
          lookEnabled ? (lookFrame as CodexAvatarProps["lookFrame"]) : null
        }
        spriteVersionNumber={
          spriteVersionNumber as CodexAvatarProps["spriteVersionNumber"]
        }
        spritesheetUrl={spritesheetUrl}
        state={resolvedState}
      />
      {hasBadge ? (
        <AvatarMascotNotificationBadge notificationBadge={notificationBadge} />
      ) : null}
      {resizeHandle == null ? null : (
        <div
          className="group absolute right-0 bottom-0 z-30 flex size-12 cursor-default items-end justify-end rounded-[8px] text-token-text-secondary hover:text-token-foreground"
          data-testid="avatar-overlay-resize-hover-target"
        >
          <button
            type="button"
            aria-label={resizeHandle.ariaLabel}
            className="no-drag codex-avatar-resize-handle flex size-5 cursor-nwse-resize touch-none items-center justify-center rounded-[6px] border border-token-border-default/80 bg-token-bg-primary p-1 opacity-0 shadow-lg shadow-black/20 backdrop-blur-sm group-hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none"
            data-testid="avatar-overlay-resize-handle"
            onLostPointerCapture={resizeHandle.onLostPointerCapture}
            onPointerCancel={resizeHandle.onPointerCancel}
            onPointerDown={resizeHandle.onPointerDown}
            onPointerEnter={resizeHandle.onPointerEnter}
            onPointerLeave={resizeHandle.onPointerLeave}
            onPointerMove={resizeHandle.onPointerMove}
            onPointerUp={resizeHandle.onPointerUp}
          >
            <svg
              viewBox="0 0 12 12"
              className="size-3"
              data-testid="avatar-overlay-resize-icon"
            >
              <path
                d="M1.75 5V1.75H5M7 10.25h3.25V7M2 2l8 8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

/** Bundle export `r` — Rolldown ESM init. */
export function ensureAvatarMascotButtonInit(): void {
  ensurePersistedAtomInit();
}
