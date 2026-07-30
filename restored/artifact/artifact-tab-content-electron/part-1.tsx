// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 1/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const ArtifactTabContentHelper20: any = undefined;
const ArtifactTabContentHelper51: any = undefined;
const _n: any = undefined;
const _r: any = undefined;
const atlas: any = undefined;
const basalt: any = undefined;
const bloom: any = undefined;
const crest: any = undefined;
const drift: any = undefined;
const eddy: any = undefined;
const fern: any = undefined;
const nimbus: any = undefined;
const ultra: any = undefined;
const umbra: any = undefined;
const willow: any = undefined;
const zeal: any = undefined;

import type { ReactNode } from "react";
import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../boundaries/app-scope-runtime";
import {
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Z8_Init,
} from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../boundaries/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { Chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildSkillMentionMarkdown } from "../../composer/build-skill-mention-markdown";
import { composerNavigation } from "../../composer/composer-navigation";
import { deferredComposerBV } from "../../composer/deferred-composer-bv";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { conversationArchiveInFlightAtom } from "../../conversation/conversation-page-family-atoms";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { findCachedConversationItem } from "../../conversation/find-cached-conversation-item";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { openFileInPanelTab } from "../../files/open-file-in-panel-tab";
import { ensureDebugPanelParsersInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import { UseInfiniteListQuery } from "../../hooks/use-infinite-list-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { IsLocalOrNullValue } from "../../hosts/is-local-or-null-value";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconJO } from "../../icons/app-icon-jo";
import { AppIconMH } from "../../icons/app-icon-mh";
import { AppIconMZ } from "../../icons/app-icon-mz";
import { AppIconOH } from "../../icons/app-icon-oh";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconYj } from "../../icons/app-icon-yj";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ImageFileIcon } from "../../icons/image-file-icon";
import { LoadingPreviewIcon } from "../../icons/loading-preview-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import {
  findSidebarSectionElement,
  readScrollTop,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { newConversationEntrypointId } from "../../navigation/new-conversation-entrypoint-id";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { fileSourceBrowserMessages } from "../../review/file-source-browser-messages";
import { setReviewScrollTarget } from "../../review/set-review-scroll-target";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../../runtime/vite-preload";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { usePetsSettingsController } from "../../settings/use-pets-settings-controller";
import { setRightPanelConversation } from "../../shell/set-right-panel-conversation";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import {
  conversationFindActiveMatchAtom,
  conversationFindResultAtom,
} from "../../thread/thread-find-atoms";
import {
  ArtifactPreviewStatus,
  ensureArtifactPreviewStatusInit,
} from "../../ui/artifact-preview-status";
import { Badge, ensureBadgeInit } from "../../ui/badge";
import { cx } from "../../ui/cx";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { macOS4 } from "../../ui/mac-os4";
import { MemoizedValueBridge } from "../../ui/memoized-value-bridge";
import { CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import {
  ensureArtifactAnalyticsInit,
  logArtifactAnnotationModeEnabled,
  logArtifactAnnotationStarted,
  logArtifactAnnotationSubmitted,
  logArtifactRefreshClicked,
} from "../artifact-analytics";
import {
  buildArtifactAnnotationCommentForTarget,
  collectRemovedArtifactAnnotationIds,
  ensureArtifactAnnotationCommentInit,
  filterArtifactAnnotationCommentsForPath,
  nextArtifactAnnotationCommentLine,
  removeArtifactAnnotationCommentsForPath,
} from "../artifact-annotation-comment";
import { ArtifactPreviewDownloadButton } from "../artifact-preview-download-button";
import { ArtifactPreviewPageNav } from "../artifact-preview-page-nav";
import { ArtifactPreviewZoomToFitLabel } from "../artifact-preview-zoom-to-fit-label";
import { artifactTabLoading } from "../artifact-tab-loading";
import { hypotDistance } from "../hypot-distance";

const deferredUiBA: any = undefined;
/** Unresolved companion (missing-export:artifact/notebook-preview-open-actions.tsx) */
const NotebookPreviewOpenActions: any = undefined;
/** Unresolved companion (jsx-collision:ensurePluginMentionPromptInit@browser/browser-use-helpers.ts) */
const AppInitialCN: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-dh.tsx) */
const deferredUiDH: any = undefined;
/** Unresolved companion (jsx-collision:ensureComposerEsm_DN_Init@boundaries/composer-esm-inits.ts) */
const AppInitialDN: any = undefined;
/** Unresolved companion (jsx-collision:ensureThreadFindStoreInit@thread/thread-find-atoms.ts) */
const AppInitialGH: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-gr.ts) */
const deferredUiGR: any = undefined;
/** Unresolved companion (jsx-collision:useConfigNoticesApi@settings/use-config-notices-api.ts) */
const AppInitialGX: any = undefined;
/** Unresolved companion (missing-export:artifact/zoom-percent-menu-control.tsx) */
const ZoomPercentMenuControl: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-hx.ts) */
const deferredUiHX: any = undefined;
/** Unresolved companion (jsx-collision:pickPreferredOpenTarget@files/pick-preferred-open-target.ts) */
const AppInitialIH: any = undefined;
/** Unresolved companion (jsx-collision:ensureComposerEsm_NH_Init@boundaries/composer-esm-inits.ts) */
const AppInitialNH: any = undefined;
/** Unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Unresolved companion (missing-export:clipboard/write-clipboard-contents.ts) */
const writeClipboardContents: any = undefined;
/** Unresolved companion (missing-export:projects/delete-project-and-maybe-navigate.ts) */
const deleteProjectAndMaybeNavigate: any = undefined;
/** Unresolved companion (missing-export:plugins/skills.tsx) */
const AppInitialQ3: any = undefined;
/** Unresolved companion (jsx-collision:registerPendingNavigationHandler@navigation/pending-navigation-bridge.ts) */
const AppInitialQV: any = undefined;
/** Unresolved companion (jsx-collision:ensureWindowsTabsOpenInit@navigation/windows-tabs-open.ts) */
const AppInitialRH: any = undefined;
/** Unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Unresolved companion (missing-export:browser/skills3.tsx) */
const Skills3: any = undefined;
/** Unresolved companion (jsx-collision:formatSkillScopeLabel@skills/skill-scope-labels.ts) */
const AppInitialVj: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-vv.ts) */
const deferredUiVV: any = undefined;
/** Unresolved companion (jsx-collision:deferredVX@ui/deferred-vx.ts) */
const AppInitialVX: any = undefined;
/** Unresolved companion (missing-export:runtime/vite-preload.ts) */
const vitePreload: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-wr-2.ts) */
const deferredUiWR: any = undefined;
/** Unresolved companion (jsx-collision:collectUniqueMappedPresenceEntries@shell/collect-unique-mapped-presence-entries.ts) */
const AppInitialX: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-xr.ts) */
const deferredUiXR: any = undefined;
/** Unresolved companion (jsx-collision:flushPendingNavigation@navigation/pending-navigation-bridge.ts) */
const AppInitialXV: any = undefined;
/** Unresolved companion (missing-export:artifact/artifact-template.tsx) */
const ArtifactTemplate: any = undefined;
/** Unresolved companion (jsx-collision:ensureThreadFindSnippetPadInit@thread/thread-find-atoms.ts) */
const AppInitialYH: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-yo2.tsx) */
const DeferredUiYO2: any = undefined;
/** Unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const PreviewInlineMeta: any = undefined;

export type ArtifactTabContentProps = {
  artifactTemplateSkill?: unknown;
  artifactType?: string;
  chromeMode?: string;
  hostId?: string;
  importKind?: string;
  path?: string;
  tabId?: string | null;
  title?: string;
  [key: string]: unknown;
};

const __vite__mapDeps = (
  copper,
  gamma = __vite__mapDeps,
  onyx = gamma.f ||
    (gamma.f = [
      "../../runtime/vite-browser-external",
      "../../runtime/rolldown-runtime",
      "../../workbook/workbook",
      "../../boundaries/workbook-runtime/index",
      "./app-initial-C-fROkKo.js",
      "./app-initial-Czet5G9g.css",
      "../../boundaries/lodash-reduce-runtime",
      "../../boundaries/lodash-base-for",
      "../../boundaries/lodash-is-empty",
      "../../utils/spreadsheet-address-utils",
      "../../workbook/presentation-protobuf",
      "../../workbook/spreadsheet-protobuf",
      "../../boundaries/d3-hierarchy",
      "../../boundaries/highlight-js",
      "../../boundaries/lodash-hNqv-runtime",
      "../../boundaries/lodash-merge-internals",
      "../../workbook/document-type-exports",
      "../../workbook/document-protobuf",
      "../../workbook/presentation-type-exports",
      "../../workbook/spreadsheet-type-exports",
      "../../editors/popcorn-electron-document-panel",
      "../../editors/remote-text-edit-session/index",
      "./remote-text-edit-session-CW-aJKLZ.css",
      "../../editors/feature-catalog",
      "../../editors/popcorn-page-number-navigation",
      "../../editors/popcorn-electron-presentation-panel",
      "../../ui/dnd-axis-lock-modifiers",
      "../../editors/popcorn-electron-surface-style",
      "./PopcornElectronPresentationPanel-pMDpowHW.css",
      "../../editors/popcorn-electron-workbook-panel",
      "../../preview/docx-preview-panel",
      "../artifact-analytics",
      "../artifact-annotation-comment",
      "../../ui/artifact-preview-status",
      "../notebook-preview-panel",
      "../../preview/pdf-preview-panel",
      "./pdf-preview-panel-BHPFKiOr.css",
    ]),
) => copper.map((item) => onyx[item]);
function ArtifactTabContentHelper1() {
  let [reef, amber] = birch.useState(false),
    cedar,
    delta;
  return (
    (cedar = () => {
      if (reef) return;
      let ember = requestAnimationFrame(() => {
        amber(true);
      });
      return () => {
        cancelAnimationFrame(ember);
      };
    }),
    (delta = [reef]),
    birch.useEffect(cedar, delta),
    reef
  );
}
var flint,
  birch,
  grove = esmInit(() => {
    flint = reactCompilerRuntime();
    birch = commonJsInit(react(), 1);
  });
function ArtifactTabContentHelper2() {
  return NativeContextMenuSurface("839469903");
}
var haven = esmInit(() => {
    ensureSkillsPageHelpersInit();
  }),
  ivory,
  jade,
  kelp,
  lotus,
  maple = esmInit(() => {
    ivory = "Walnut";
    jade = {
      hash: "sha256-sjsMVysLjcxgcuUI50S6O1mxf0HEyb20+LLmasvFZOY=",
      fingerprinting: {
        "DocumentFormat.OpenXml.Framework.kx8sy06e2n.wasm":
          "DocumentFormat.OpenXml.Framework.wasm",
        "DocumentFormat.OpenXml.3gyp7qg2ju.wasm": "DocumentFormat.OpenXml.wasm",
        "Google.Protobuf.ze35jf5cfr.wasm": "Google.Protobuf.wasm",
        "System.Collections.Concurrent.wjwe8brmug.wasm":
          "System.Collections.Concurrent.wasm",
        "System.Collections.NonGeneric.0ku6qyjc24.wasm":
          "System.Collections.NonGeneric.wasm",
        "System.Collections.Specialized.3y0ddcns0p.wasm":
          "System.Collections.Specialized.wasm",
        "System.Collections.w05yo53crc.wasm": "System.Collections.wasm",
        "System.ComponentModel.Primitives.hb7wv7k7l6.wasm":
          "System.ComponentModel.Primitives.wasm",
        "System.ComponentModel.TypeConverter.nbi8jwvoti.wasm":
          "System.ComponentModel.TypeConverter.wasm",
        "System.ComponentModel.532obf5i8p.wasm": "System.ComponentModel.wasm",
        "System.Console.3ba803x3x0.wasm": "System.Console.wasm",
        "System.Diagnostics.DiagnosticSource.mtflw9mg2d.wasm":
          "System.Diagnostics.DiagnosticSource.wasm",
        "System.IO.Compression.51lcbkghcn.wasm": "System.IO.Compression.wasm",
        "System.IO.Packaging.ejb20qp7p2.wasm": "System.IO.Packaging.wasm",
        "System.Linq.Expressions.uexl3asr38.wasm":
          "System.Linq.Expressions.wasm",
        "System.Linq.9zrsvh45js.wasm": "System.Linq.wasm",
        "System.Memory.u2yq7mz35u.wasm": "System.Memory.wasm",
        "System.Net.Http.q5h3nhzunv.wasm": "System.Net.Http.wasm",
        "System.Net.Primitives.b9l506qabv.wasm": "System.Net.Primitives.wasm",
        "System.ObjectModel.b04axcx41p.wasm": "System.ObjectModel.wasm",
        "System.Private.CoreLib.myczr4ux0t.wasm": "System.Private.CoreLib.wasm",
        "System.Private.Uri.fymch43h0d.wasm": "System.Private.Uri.wasm",
        "System.Private.Xml.Linq.700vjph5e9.wasm":
          "System.Private.Xml.Linq.wasm",
        "System.Private.Xml.lh7quw8cvk.wasm": "System.Private.Xml.wasm",
        "System.Runtime.InteropServices.JavaScript.bhcvtyxzwc.wasm":
          "System.Runtime.InteropServices.JavaScript.wasm",
        "System.Security.Cryptography.giqdcsuhsx.wasm":
          "System.Security.Cryptography.wasm",
        "System.Text.RegularExpressions.62o7zr7ple.wasm":
          "System.Text.RegularExpressions.wasm",
        "System.v2bpr4wvug.wasm": "System.wasm",
        "System.Xml.Linq.oyxx9bz5vb.wasm": "System.Xml.Linq.wasm",
        "Walnut.w458yq30q0.wasm": "Walnut.wasm",
        "dotnet.native.xk4h31owf3.js": "dotnet.native.js",
        "dotnet.native.tj9dxbl64y.wasm": "dotnet.native.wasm",
        "dotnet.js": "dotnet.js",
        "dotnet.runtime.7zon98f8ky.js": "dotnet.runtime.js",
      },
      jsModuleNative: {
        "dotnet.native.xk4h31owf3.js":
          "sha256-cTgQ12PTBych68x0yRJ7lx8QDyvyrnow6WgADYQ3D+o=",
      },
      jsModuleRuntime: {
        "dotnet.runtime.7zon98f8ky.js":
          "sha256-zWiDiXCfePn0/nLx2lSoJaVxxUIAaYKqTG9DTZqR/Mw=",
      },
      wasmNative: {
        "dotnet.native.tj9dxbl64y.wasm":
          "sha256-Z/GlQHE1K97q0wgtwnVGFUyI33kd2KhR8BJnL/SoRKw=",
      },
      coreAssembly: {
        "System.Private.CoreLib.myczr4ux0t.wasm":
          "sha256-oiha0AmkYf3YiynS2LsLknEFUXLzPqagOdACdbgylNQ=",
        "System.Runtime.InteropServices.JavaScript.bhcvtyxzwc.wasm":
          "sha256-7yXbhEkcc8Z0444h0GqrWBSrjBRMr0/DzjQD14t+3lU=",
      },
      assembly: {
        "DocumentFormat.OpenXml.Framework.kx8sy06e2n.wasm":
          "sha256-OF57xYYSGSMcas2H9mn2epzRu0iz5sPH1Zpi8ZH6+/U=",
        "DocumentFormat.OpenXml.3gyp7qg2ju.wasm":
          "sha256-owkTdfcVtPB7JtDKnjardiiGDCHnxlNtCrLfL0JpNi8=",
        "Google.Protobuf.ze35jf5cfr.wasm":
          "sha256-i38brCJSYmpsUEG3n34uEuDFfLxkrlECq4wIOMlpBiY=",
        "System.Collections.Concurrent.wjwe8brmug.wasm":
          "sha256-tB8VxZjKe2uNYWW1T5TTWeu7k1aCsSMt5DZQpwj0ek4=",
        "System.Collections.NonGeneric.0ku6qyjc24.wasm":
          "sha256-MDKU4gYdidRTMQVjpesyIBsU7MP9Dxas/JCu2lH6nUg=",
        "System.Collections.Specialized.3y0ddcns0p.wasm":
          "sha256-C5Mze3lEzelhXwxEhhquOJg4X/+gYKW/DUyMtN04yRk=",
        "System.Collections.w05yo53crc.wasm":
          "sha256-EDaYG4b6qBL47qD23s6ODzN5bU9i4vLjGkKlckbaXoA=",
        "System.ComponentModel.Primitives.hb7wv7k7l6.wasm":
          "sha256-DejZV1V6xsxl/lwHQk2lbk6y30SCv3nOMQOx6CCUFOA=",
        "System.ComponentModel.TypeConverter.nbi8jwvoti.wasm":
          "sha256-PY5wohIQEtPbatUTgQhw6VzwxNlGOTtl7VJUXaitoFQ=",
        "System.ComponentModel.532obf5i8p.wasm":
          "sha256-b4iNGlol1ferx39Yfq0xU0w0tImGc9ZSZmtvNHhsGSY=",
        "System.Console.3ba803x3x0.wasm":
          "sha256-L6JCmoDe7qEEWbyx96cdbEq2OCVkgMrs0hwFioG7/ZY=",
        "System.Diagnostics.DiagnosticSource.mtflw9mg2d.wasm":
          "sha256-pnjH4HUNf7zoCpPV2f9zQqCGbLEQYvsLcD08SKMe0Cs=",
        "System.IO.Compression.51lcbkghcn.wasm":
          "sha256-hw/tnNOgnB2RkB+YOGiYDTIlvAdoZ5oJHsOmzzopzgc=",
        "System.IO.Packaging.ejb20qp7p2.wasm":
          "sha256-FmH8uRx5Ltr4iImKrvn8KFhC0qZ863olZEkXoHrw1Ak=",
        "System.Linq.Expressions.uexl3asr38.wasm":
          "sha256-mpifHmq40AW2OfhIBXHMDPcOsmD0Psac75fwGHCGiDU=",
        "System.Linq.9zrsvh45js.wasm":
          "sha256-pV+6jky0dSBIdy79TGGsJiPBxwvDkzw7csUNQ2x/IcQ=",
        "System.Memory.u2yq7mz35u.wasm":
          "sha256-Bp5H8O2x2jIWcArDR+P7KPzlwh0wgFhlWae3/l6dhyk=",
        "System.Net.Http.q5h3nhzunv.wasm":
          "sha256-YnutGnbe5TvEVxl7O0Xaxs2p/NnOzHN3Z2B6utxKLEs=",
        "System.Net.Primitives.b9l506qabv.wasm":
          "sha256-3/LwgZki5PJK+LE64REw21xwUx14tjdMKDDIeIL6oHM=",
        "System.ObjectModel.b04axcx41p.wasm":
          "sha256-y7OjsdbZvz8Lq3AOyLZwX8Or9GlLwoARwr7n0VBtOOE=",
        "System.Private.Uri.fymch43h0d.wasm":
          "sha256-N7Ba8x029qFBu7yFg68KQHkANAYoX+4520dYmCEumAc=",
        "System.Private.Xml.Linq.700vjph5e9.wasm":
          "sha256-OacvDbpjA/X4OZ1SCVwKk0Xr8JKcbPZqKBuj1LR0SqE=",
        "System.Private.Xml.lh7quw8cvk.wasm":
          "sha256-aYZKV5UFs8IGjTPpyjFkY2G/RLeutL6+OgvKAOMy4yw=",
        "System.Security.Cryptography.giqdcsuhsx.wasm":
          "sha256-eGOdKZLpIspVn0VEr8CySvUmNQQHtpEGGNoF/SEjvwE=",
        "System.Text.RegularExpressions.62o7zr7ple.wasm":
          "sha256-couvRXok+6C971UjgVpYCCC5ueE3IQSuCwfXB+pthUg=",
        "System.v2bpr4wvug.wasm":
          "sha256-V0+qqJsDHNUBCJjD4bkeDVr+f+Orz+wNldNNIxrsd+4=",
        "System.Xml.Linq.oyxx9bz5vb.wasm":
          "sha256-ME/lD8PZteQCLi6BaWR7la1wp8SbfwTDxEtk8BRee8I=",
        "Walnut.w458yq30q0.wasm":
          "sha256-APq2cxfx+wa5zX4igqUWzzoOVPWMTQZbSGLTonvKm6k=",
      },
    };
    kelp = "invariant";
    lotus = {
      mainAssemblyName: ivory,
      resources: jade,
      debugLevel: 0,
      linkerEnabled: true,
      globalizationMode: kelp,
    };
  });
function ArtifactTabContentHelper3(nova, olive) {
  let pearl = null,
    quartz = new Promise(function (raven, sage) {
      pearl = {
        isDone: false,
        promise: null,
        resolve: (tide) => {
          pearl.isDone || ((pearl.isDone = true), raven(tide), nova && nova());
        },
        reject: (umber) => {
          pearl.isDone ||
            ((pearl.isDone = true), sage(umber), olive && olive());
        },
      };
    });
  pearl.promise = quartz;
  let violet = quartz;
  return (
    (violet[willow] = pearl),
    {
      promise: violet,
      promise_control: pearl,
    }
  );
}
function ArtifactTabContentHelper4(xenon) {
  return xenon[willow];
}
function $t(yarn) {
  (yarn &&
    (function (zinc) {
      return zinc[willow] !== undefined;
    })(yarn)) ||
    ArtifactTabContentHelper51(false, "Promise is not controllable");
}
function ArtifactTabContentHelper5(apex) {
  bloom = apex;
}
function ArtifactTabContentHelper6(coral) {
  if (drift.diagnosticTracing) {
    let echo = typeof coral == "function" ? coral() : coral;
    console.debug(fern + echo);
  }
}
function ArtifactTabContentHelper7(glade, ...haze) {
  console.info(fern + glade, ...haze);
}
function ArtifactTabContentHelper8(iris, ...jazz) {
  console.info(iris, ...jazz);
}
function ArtifactTabContentHelper9(kite, ...lane) {
  console.warn(fern + kite, ...lane);
}
function ArtifactTabContentHelper10(mist, ...nook) {
  if (nook && nook.length > 0 && nook[0] && typeof nook[0] == "object") {
    if (nook[0].silent) return;
    if (nook[0].toString)
      return void console.error(fern + mist, nook[0].toString());
  }
  console.error(fern + mist, ...nook);
}
function on(opal, pine, quill) {
  return function (...ridge) {
    try {
      let silk = ridge[0];
      if (silk === undefined) silk = "undefined";
      else if (silk === null) silk = "null";
      else if (typeof silk == "function") silk = silk.toString();
      else if (typeof silk != "string")
        try {
          silk = JSON.stringify(silk);
        } catch {
          silk = silk.toString();
        }
      pine(
        quill
          ? JSON.stringify({
              method: opal,
              payload: silk,
              arguments: ridge.slice(1),
            })
          : [opal + silk, ...ridge.slice(1)],
      );
    } catch (talon) {
      ultra.error(`proxyConsole failed: ${talon}`);
    }
  };
}
function ArtifactTabContentHelper11(vale, wave, zephyr) {
  atlas = wave;
  bloom = vale;
  ultra = {
    ...wave,
  };
  let brine = `${zephyr}/console`
    .replace("https://", "wss://")
    .replace("http://", "ws://");
  crest = new WebSocket(brine);
  crest.addEventListener("error", ArtifactTabContentHelper14);
  crest.addEventListener("close", ArtifactTabContentHelper15);
  (function () {
    for (let dusk of eddy)
      atlas[dusk] = on(`console.${dusk}`, ArtifactTabContentHelper13, true);
  })();
}
function ArtifactTabContentHelper12(fjord) {
  let gust = 30,
    helm = () => {
      crest
        ? crest.bufferedAmount == 0 || gust == 0
          ? (fjord && ArtifactTabContentHelper8(fjord),
            (function () {
              for (let ink of eddy)
                atlas[ink] = on(`console.${ink}`, ultra.log, false);
            })(),
            crest.removeEventListener("error", ArtifactTabContentHelper14),
            crest.removeEventListener("close", ArtifactTabContentHelper15),
            crest.close(1e3, fjord),
            (crest = undefined))
          : (gust--, globalThis.setTimeout(helm, 100))
        : fjord && ultra && ultra.log(fjord);
    };
  helm();
}
function ArtifactTabContentHelper13(jewel) {
  crest && crest.readyState === WebSocket.OPEN
    ? crest.send(jewel)
    : ultra.log(jewel);
}
function ArtifactTabContentHelper14(knoll) {
  ultra.error(`[${bloom}] proxy console websocket error: ${knoll}`, knoll);
}
function ArtifactTabContentHelper15(lagoon) {
  ultra.debug(`[${bloom}] proxy console websocket closed: ${lagoon}`, lagoon);
}
function ArtifactTabContentHelper16() {
  let meadow = Object.values(nimbus),
    orbit = Object.values(_r),
    plume = ArtifactTabContentHelper20(meadow),
    ripple = ArtifactTabContentHelper20(orbit),
    shard = plume + ripple;
  if (shard === 0) return;
  let thorn = umbra ? "%c" : "",
    vista = umbra
      ? [
          "background: purple; color: white; padding: 1px 3px; border-radius: 3px;",
          "font-weight: bold;",
          "font-weight: normal;",
        ]
      : [],
    wisp = drift.config.linkerEnabled
      ? ""
      : "\nThis application was built with linking (tree shaking) disabled. \nPublished applications will be significantly smaller if you install wasm-tools workload. \nSee also https://aka.ms/dotnet-wasm-features";
  console.groupCollapsed(
    `${thorn}dotnet${thorn} Loaded ${_n(shard)} resources${thorn}${wisp}`,
    ...vista,
  );
  meadow.length &&
    (console.groupCollapsed(`Loaded ${_n(plume)} resources from cache`),
    console.table(nimbus),
    console.groupEnd());
  orbit.length &&
    (console.groupCollapsed(`Loaded ${_n(ripple)} resources from network`),
    console.table(_r),
    console.groupEnd());
  console.groupEnd();
}
async function ArtifactTabContentHelper17() {
  let yonder = zeal;
  if (yonder) {
    let anvil = (await yonder.keys()).map(async (item) => {
      item.url in basalt || (await yonder.delete(item));
    });
    await Promise.all(anvil);
  }
}
function ArtifactTabContentHelper18(cinder) {
  return `${cinder.resolvedUrl}.${cinder.hash}`;
}
