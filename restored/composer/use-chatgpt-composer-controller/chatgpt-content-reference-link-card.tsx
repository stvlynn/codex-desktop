// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Content-reference thumbnail link card (Helper73–74).

import { ensureComposerEsm_oL_Init as AppInitialOL } from "../../composer/composer-esm-inits";
import { ThreadResourceCard as _appInitialYI } from "../../thread/thread-resource-card";
import {
  jsxRuntime as appInitialJvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { resolveSafeMarkdownHref as _appInitialIL } from "../../markdown/resolve-safe-markdown-href";
import { cx as appInitialWft } from "../../ui/cx";
import { RemoteHrefIcon as AppInitialHL } from "../../ui/remote-href-icon";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import { useChatgptComposerControllerHelper31 } from "./chatgpt-browser-host-context";
import { useChatgptComposerControllerHelper65 } from "./chatgpt-composer-confirmation-link";

void _appInitialYI;

var slot86,
  slot87,
  slot88 = rolldownRuntimeN(() => {
    slot86 = appInitialIvt();
    AppInitialOL();
    /* streaming drained */
    /* drained */
    /* slot85 drained */
    slot87 = appInitialJvt();
  });
export function useChatgptComposerControllerHelper73(request1087: any) {
  const UseChatgptComposerControllerHelper74 =
    useChatgptComposerControllerHelper74;
  let {
      imageAspectClassName = "aspect-[4/3]",
      subtitle,
      thumbnailUrl,
      title,
      url,
    } = request1087,
    slot4381 =
      useChatgptComposerControllerHelper31()?.shouldBlockExternalEgress ===
      true,
    slot4382 =
      thumbnailUrl == null ? (
        <div
          className={appInitialWft(
            imageAspectClassName,
            "flex w-20 shrink-0 items-center justify-center rounded bg-token-bg-tertiary",
          )}
        >
          {url == null ? null : (
            <AppInitialHL
              className="icon-md"
              href={url}
              loadRemote={!slot4381}
            />
          )}
        </div>
      ) : slot4381 ? (
        <div
          className={appInitialWft(
            imageAspectClassName,
            "w-20 shrink-0 rounded bg-token-bg-tertiary",
          )}
        />
      ) : (
        <img
          alt={title}
          className={appInitialWft(
            imageAspectClassName,
            "m-0 w-20 shrink-0 rounded object-cover",
          )}
          src={thumbnailUrl}
        />
      );
  let slot4383 = (
    <div className="line-clamp-2 font-medium text-token-text-primary">
      {title}
    </div>
  );
  let slot4384 =
    subtitle == null ? null : (
      <div className="mt-1 line-clamp-2 text-token-text-secondary">
        {subtitle}
      </div>
    );
  let slot4385 = (
    <div className="min-w-0">
      {slot4383}
      {slot4384}
    </div>
  );
  let slot4386 = (
    <div className="flex min-w-0 gap-3 rounded-md border border-token-border-light bg-token-bg-primary p-2">
      {slot4382}
      {slot4385}
    </div>
  );
  let slot4387 = slot4386;
  return url == null ? (
    slot4387
  ) : (
    <UseChatgptComposerControllerHelper74
      className="block no-underline"
      href={url}
    >
      {slot4387}
    </UseChatgptComposerControllerHelper74>
  );
}
export function useChatgptComposerControllerHelper74(request4252: any) {
  const UseChatgptComposerControllerHelper65 =
    useChatgptComposerControllerHelper65;
  let { children, className, href } = request4252,
    slot10217 = href == null ? null : _appInitialIL(href);
  let slot10218 = slot10217;
  if (slot10218 == null) return null;
  let slot10219 = appInitialWft("cursor-interaction", className);
  return (
    <UseChatgptComposerControllerHelper65
      className={slot10219}
      href={slot10218}
      initiator="markdown_link_click"
    >
      {children}
    </UseChatgptComposerControllerHelper65>
  );
}
