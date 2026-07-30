// Restored from ref/webview/assets/primary-composer-at-mention-list-D371HJCH.js
// Wave FY — full polished body from `primary-composer-at-mention-list-D371HJCH/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 9/14).
// Wave FZ-support — PascalCase invalid JSX tags: renamedId→PrimaryComposerAtMentionListHelper1.

import { ensureComposerEsm_KM_Init } from "../boundaries/composer-esm-inits";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { esmInit } from "../runtime/rolldown-runtime";
import { AvatarCornerBadge } from "../ui/avatar-corner-badge";
import { SeededActiveSvgIcon } from "../ui/seeded-active-svg-icon";
import { ensureListKeyboardNavigationInit } from "../ui/use-list-keyboard-navigation";
import { formatUrlHostPath } from "../utils/format-url-host-path";
import { isMcpCapabilityKind } from "./is-mcp-capability-kind";

/** Wave FY unresolved companion (missing-export:hosts/deferred-hosts-am.ts) */
const deferredHostsAM: any = undefined;
/** Wave FY unresolved companion (missing-export:artifacts/get-artifact-download-blob.ts) */
const getArtifactDownloadBlob: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureKeyboardShortcutsHMInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialHM: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSeededAvatarInit@ui/seeded-avatar.tsx) */
const AppInitialSM: any = undefined;
/** Wave FY unresolved companion (jsx-collision:localConversationIdFromValue@conversation/local-conversation-id-from-value.ts) */
const AppInitialUM: any = undefined;
export function PrimaryComposerAtMentionList(lemon: unknown) {
  let source, rest;
  if ({
    source,
    ...rest
  } = lemon, isMcpCapabilityKind(source)) {
    let marble;
    return <AppInitialSM {...lemon} />;
  }
  return <PrimaryComposerAtMentionListHelper1 {...{
    ...rest
  }} />;
}
function PrimaryComposerAtMentionListHelper1(copper) {
  let {
    backgroundAgents = [],
    className,
    chromeVariant = "default",
    excludedAgentConversationIds = [],
    excludedThreadIds = [],
    hostId,
    isHomeMenu = false,
    keyboardEventTarget,
    leadingItems: _PrimaryComposerAtMentionList = [],
    onAddContext,
    onRequestClose,
    onUpdateSelectedMention,
    placement = "top",
    query,
    fileSearchRootPaths,
    skillRoots,
    threadSearchRoots
  } = copper;
  let delta = backgroundAgents;
  let echo = excludedAgentConversationIds;
  let falcon = excludedThreadIds;
  let gamma = _PrimaryComposerAtMentionList,
    harbor = {
      excludedThreadIds: falcon,
      hostId,
      query,
      roots: threadSearchRoots
    };
  let indigo = formatUrlHostPath(harbor),
    jade = {
      backgroundAgents: delta,
      excludedAgentConversationIds: echo,
      hostId,
      query,
      roots: fileSearchRootPaths,
      skillRoots,
      threadSource: indigo
    };
  let {
      sections
    } = getArtifactDownloadBlob(jade),
    kite = ensureComposerEsm_KM_Init(sections, query, gamma);
  return <SeededActiveSvgIcon {...{
    className,
    chromeVariant: chromeVariant,
    isHomeMenu: isHomeMenu,
    keyboardEventTarget,
    onAddContext,
    onRequestClose,
    onUpdateSelectedMention,
    placement: placement,
    query,
    sections: kite
  }} />;
}
var alpha, bravo;
esmInit(() => {
  alpha = reactCompilerRuntime();
  AvatarCornerBadge();
  ensureListKeyboardNavigationInit();
  deferredHostsAM();
  AppInitialHM();
  AppInitialUM();
})();

/** Wave FY: bind no longer required after full body promote */
export function bindPrimaryComposerAtMentionList(_next: unknown): void {}
export function ensurePrimaryComposerAtMentionListInit(): void {}
