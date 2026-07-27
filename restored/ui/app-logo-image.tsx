// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_P` / export `kG` — app logo with remote/dark variants + fallback.

import type { ReactNode } from "react";
import { useState } from "react";
import { cx } from "./cx";

export type AppLogoImageProps = {
  alt?: string;
  appInfo?: { name?: string; [key: string]: unknown } | null;
  className?: string;
  knownAppId?: string | null;
  loadRemote?: boolean;
  logoUrl?: string | null;
  logoDarkUrl?: string | null;
  fallback?: ReactNode;
};

export function AppLogoImage({
  alt,
  appInfo,
  className,
  loadRemote = true,
  logoUrl,
  logoDarkUrl,
  fallback,
}: AppLogoImageProps): ReactNode {
  const [failed, setFailed] = useState(false);
  const src = logoUrl ?? logoDarkUrl ?? null;
  if (!loadRemote || src == null || failed) {
    return (
      <span
        className={cx("inline-flex items-center justify-center", className)}
      >
        {fallback ?? appInfo?.name?.slice(0, 1) ?? "?"}
      </span>
    );
  }
  return (
    <img
      alt={alt ?? appInfo?.name ?? ""}
      className={className}
      src={src}
      onError={() => setFailed(true)}
      referrerPolicy="no-referrer"
    />
  );
}
