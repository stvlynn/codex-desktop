// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Bra` / export `HL` — favicon/avatar for an href with fallback glyph.

import type { ComponentType, ReactNode } from "react";
import { useState } from "react";
import { cx } from "./cx";

type IconProps = { className?: string; "aria-hidden"?: boolean };

let resolveCandidates: (href: string) => string[] = () => [];
let MailtoIcon: ComponentType<IconProps> | null = null;
let LinkIcon: ComponentType<IconProps> | null = null;

export function setRemoteHrefIconDeps(args: {
  resolveCandidates: (href: string) => string[];
  MailtoIcon: ComponentType<IconProps>;
  LinkIcon: ComponentType<IconProps>;
}): void {
  resolveCandidates = args.resolveCandidates;
  MailtoIcon = args.MailtoIcon;
  LinkIcon = args.LinkIcon;
}

export type RemoteHrefIconProps = {
  href: string;
  className?: string;
  loadRemote?: boolean;
};

export function RemoteHrefIcon({
  href,
  className,
  loadRemote = true,
}: RemoteHrefIconProps): ReactNode {
  const candidates = loadRemote ? resolveCandidates(href) : [];
  const [loaded, setLoaded] = useState<string | null>(null);
  const showImage = loaded != null && candidates.includes(loaded);
  const Fallback = /^mailto:/i.test(href) ? MailtoIcon : LinkIcon;
  return (
    <span className={cx("relative inline-block shrink-0", className)}>
      <span
        className={cx(
          "absolute inset-0 flex items-center justify-center rounded-full text-token-foreground/55",
          !showImage && "bg-token-foreground/15",
        )}
      >
        {showImage || Fallback == null ? null : (
          <Fallback aria-hidden className="size-[70%]" />
        )}
      </span>
      {candidates.map((src) => (
        <img
          key={src}
          alt=""
          className={cx(
            "absolute inset-0 h-full w-full rounded-2xs object-contain",
            loaded === src ? "opacity-100" : "opacity-0",
          )}
          decoding="async"
          draggable={false}
          onLoad={() => {
            setLoaded((prev) =>
              prev != null && candidates.includes(prev) ? prev : src,
            );
          }}
          referrerPolicy="no-referrer"
          src={src}
        />
      ))}
    </span>
  );
}
