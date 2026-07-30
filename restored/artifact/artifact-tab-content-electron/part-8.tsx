// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 8/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const $t: any = undefined;
const ArtifactTabContentHelper11: any = undefined;
const ArtifactTabContentHelper16: any = undefined;
const ArtifactTabContentHelper17: any = undefined;
const ArtifactTabContentHelper19: any = undefined;
const ArtifactTabContentHelper21: any = undefined;
const ArtifactTabContentHelper29: any = undefined;
const ArtifactTabContentHelper3: any = undefined;
const ArtifactTabContentHelper30: any = undefined;
const ArtifactTabContentHelper31: any = undefined;
const ArtifactTabContentHelper33: any = undefined;
const ArtifactTabContentHelper4: any = undefined;
const ArtifactTabContentHelper43: any = undefined;
const ArtifactTabContentHelper45: any = undefined;
const ArtifactTabContentHelper46: any = undefined;
const ArtifactTabContentHelper5: any = undefined;
const ArtifactTabContentHelper50: any = undefined;
const ArtifactTabContentHelper51: any = undefined;
const ArtifactTabContentHelper52: any = undefined;
const ArtifactTabContentHelper53: any = undefined;
const ArtifactTabContentHelper54: any = undefined;
const ArtifactTabContentHelper55: any = undefined;
const ArtifactTabContentHelper58: any = undefined;
const ArtifactTabContentHelper62: any = undefined;
const ArtifactTabContentHelper63: any = undefined;

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

/** QG unbound stub */
const dotnetSidecar: any = undefined;
/** QG unbound stub */
const importScripts: any = undefined;

var rail,
  track,
  willow,
  chip,
  eddy,
  fern,
  crest,
  atlas,
  ultra,
  bloom,
  basalt,
  _r,
  nimbus,
  zeal,
  alpine,
  brook,
  stamp,
  jetty,
  isle,
  chrome,
  titan,
  lever,
  pivot,
  tundra,
  yard,
  trail,
  summit,
  lattice,
  joint,
  alpha,
  hinge,
  modal,
  anchor,
  juliet,
  aurora,
  stratus,
  nadir,
  canvas2,
  zindex,
  yarrow,
  route,
  hotel,
  umbra,
  heath,
  zone,
  beam,
  drift,
  sharp,
  canyon,
  lane2,
  avenue,
  fill,
  $r,
  skew,
  tilt,
  card,
  tile,
  tab,
  pipe,
  street,
  plaza = esmInit(() => {
    ensureViteModulepreloadRuntime();
    rail = async () =>
      WebAssembly.validate(
        new Uint8Array([
          0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1,
          6, 0, 6, 64, 25, 11, 11,
        ]),
      );
    track = async () =>
      WebAssembly.validate(
        new Uint8Array([
          0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10,
          10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11,
        ]),
      );
    willow = Symbol.for("wasm promise_control");
    chip = "__mono_message__";
    eddy = ["debug", "log", "trace", "warn", "info", "error"];
    fern = "MONO_WASM: ";
    new Date().valueOf();
    basalt = {};
    _r = {};
    nimbus = {};
    stamp = class {
      constructor(court) {
        this.url = court;
      }
      toString() {
        return this.url;
      }
    };
    jetty = /^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//;
    isle = /[a-zA-Z]:[\\/]/;
    titan = 0;
    lever = [];
    pivot = [];
    tundra = new Map();
    yard = {
      "js-module-threads": true,
      "js-module-globalization": true,
      "js-module-runtime": true,
      "js-module-dotnet": true,
      "js-module-native": true,
    };
    trail = {
      ...yard,
      "js-module-library-initializer": true,
    };
    summit = {
      ...yard,
      dotnetwasm: true,
      heap: true,
      manifest: true,
    };
    lattice = {
      ...trail,
      manifest: true,
    };
    joint = {
      ...trail,
      dotnetwasm: true,
    };
    alpha = {
      dotnetwasm: true,
      symbols: true,
      "segmentation-rules": true,
    };
    hinge = {
      ...trail,
      dotnetwasm: true,
      symbols: true,
      "segmentation-rules": true,
    };
    modal = {
      symbols: true,
      "segmentation-rules": true,
    };
    anchor = false;
    juliet = false;
    aurora = 0;
    stratus = new Set();
    nadir = {
      resource: "assembly",
      assembly: "assembly",
      pdb: "pdb",
      icu: "globalization",
      vfs: "configuration",
      manifest: "manifest",
      dotnetwasm: "dotnetwasm",
      "js-module-dotnet": "dotnetjs",
      "js-module-native": "dotnetjs",
      "js-module-runtime": "dotnetjs",
      "js-module-threads": "dotnetjs",
    };
    canvas2 = "Release";
    zindex = false;
    typeof importScripts != "function" ||
      globalThis.onmessage ||
      (globalThis.dotnetSidecar = true);
    yarrow =
      typeof process == "object" &&
      typeof process.versions == "object" &&
      typeof process.versions.node == "string";
    route = typeof importScripts == "function";
    hotel = route && !(route && typeof dotnetSidecar < "u");
    umbra = typeof window == "object" || (route && !yarrow);
    heath = !umbra && !yarrow;
    zone = {};
    beam = {};
    drift = {};
    sharp = {};
    canyon = {};
    lane2 = false;
    avenue = {};
    fill = {
      config: avenue,
    };
    $r = {
      mono: {},
      binding: {},
      internal: canyon,
      module: fill,
      loaderHelpers: drift,
      runtimeHelpers: zone,
      globalizationHelpers: beam,
      api: sharp,
    };
    (function (yard2) {
      if (lane2) throw Error("Loader module already loaded");
      lane2 = true;
      zone = yard2.runtimeHelpers;
      beam = yard2.globalizationHelpers;
      drift = yard2.loaderHelpers;
      sharp = yard2.api;
      canyon = yard2.internal;
      Object.assign(sharp, {
        INTERNAL: canyon,
        invokeLibraryInitializers: ArtifactTabContentHelper43,
      });
      Object.assign(yard2.module, {
        config: ArtifactTabContentHelper45(avenue, {
          environmentVariables: {},
        }),
      });
      let garden = {
          mono_wasm_bindings_is_ready: false,
          config: yard2.module.config,
          diagnosticTracing: false,
          nativeAbort: (orchard) => {
            throw orchard || Error("abort");
          },
          nativeExit: (grove2) => {
            throw Error("exit:" + grove2);
          },
        },
        thicket = {
          gitHash: "d839c41c85988aadc213e8e42269ecd7883a1790",
          config: yard2.module.config,
          diagnosticTracing: false,
          maxParallelDownloads: 16,
          enableDownloadRetry: true,
          _loaded_files: [],
          loadedFiles: [],
          loadedAssemblies: [],
          libraryInitializers: [],
          workerNextNumber: 1,
          actual_downloaded_assets_count: 0,
          actual_instantiated_assets_count: 0,
          expected_downloaded_assets_count: 0,
          expected_instantiated_assets_count: 0,
          afterConfigLoaded: ArtifactTabContentHelper3(),
          allDownloadsQueued: ArtifactTabContentHelper3(),
          allDownloadsFinished: ArtifactTabContentHelper3(),
          wasmCompilePromise: ArtifactTabContentHelper3(),
          runtimeModuleLoaded: ArtifactTabContentHelper3(),
          loadingWorkers: ArtifactTabContentHelper3(),
          is_exited: ArtifactTabContentHelper52,
          is_runtime_running: ArtifactTabContentHelper53,
          assert_runtime_running: ArtifactTabContentHelper54,
          mono_exit: ArtifactTabContentHelper58,
          createPromiseController: ArtifactTabContentHelper3,
          getPromiseController: ArtifactTabContentHelper4,
          assertIsControllablePromise: $t,
          mono_download_assets: ArtifactTabContentHelper30,
          resolve_single_asset_path: ArtifactTabContentHelper29,
          setup_proxy_console: ArtifactTabContentHelper11,
          set_thread_prefix: ArtifactTabContentHelper5,
          logDownloadStatsToConsole: ArtifactTabContentHelper16,
          purgeUnusedCacheEntriesAsync: ArtifactTabContentHelper17,
          installUnhandledErrorHandler: ArtifactTabContentHelper55,
          retrieve_asset_download: ArtifactTabContentHelper33,
          invokeLibraryInitializers: ArtifactTabContentHelper43,
          exceptions: rail,
          simd: track,
        };
      Object.assign(zone, garden);
      Object.assign(drift, thicket);
    })($r);
    tab = false;
    pipe = false;
    street = new (class {
      withModuleConfig(copse) {
        try {
          return (ArtifactTabContentHelper46(fill, copse), this);
        } catch (glade2) {
          throw (ArtifactTabContentHelper58(1, glade2), glade2);
        }
      }
      withOnConfigLoaded(meadow2) {
        try {
          return (
            ArtifactTabContentHelper46(fill, {
              onConfigLoaded: meadow2,
            }),
            this
          );
        } catch (field2) {
          throw (ArtifactTabContentHelper58(1, field2), field2);
        }
      }
      withConsoleForwarding() {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              forwardConsoleLogsToWS: true,
            }),
            this
          );
        } catch (pasture) {
          throw (ArtifactTabContentHelper58(1, pasture), pasture);
        }
      }
      withExitOnUnhandledError() {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              exitOnUnhandledError: true,
            }),
            ArtifactTabContentHelper55(),
            this
          );
        } catch (ridge2) {
          throw (ArtifactTabContentHelper58(1, ridge2), ridge2);
        }
      }
      withAsyncFlushOnExit() {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              asyncFlushOnExit: true,
            }),
            this
          );
        } catch (peak) {
          throw (ArtifactTabContentHelper58(1, peak), peak);
        }
      }
      withExitCodeLogging() {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              logExitCode: true,
            }),
            this
          );
        } catch (cliff) {
          throw (ArtifactTabContentHelper58(1, cliff), cliff);
        }
      }
      withElementOnExit() {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              appendElementOnExit: true,
            }),
            this
          );
        } catch (bluff) {
          throw (ArtifactTabContentHelper58(1, bluff), bluff);
        }
      }
      withInteropCleanupOnExit() {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              interopCleanupOnExit: true,
            }),
            this
          );
        } catch (dune2) {
          throw (ArtifactTabContentHelper58(1, dune2), dune2);
        }
      }
      withDumpThreadsOnNonZeroExit() {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              dumpThreadsOnNonZeroExit: true,
            }),
            this
          );
        } catch (delta2) {
          throw (ArtifactTabContentHelper58(1, delta2), delta2);
        }
      }
      withWaitingForDebugger(bay) {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              waitForDebugger: bay,
            }),
            this
          );
        } catch (cove) {
          throw (ArtifactTabContentHelper58(1, cove), cove);
        }
      }
      withInterpreterPgo(inlet2, sound) {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              interpreterPgo: inlet2,
              interpreterPgoSaveDelay: sound,
            }),
            avenue.runtimeOptions
              ? avenue.runtimeOptions.push("--interp-pgo-recording")
              : (avenue.runtimeOptions = ["--interp-pgo-recording"]),
            this
          );
        } catch (strait) {
          throw (ArtifactTabContentHelper58(1, strait), strait);
        }
      }
      withConfig(channel) {
        try {
          return (ArtifactTabContentHelper45(avenue, channel), this);
        } catch (canal) {
          throw (ArtifactTabContentHelper58(1, canal), canal);
        }
      }
      withConfigSrc(brook2) {
        try {
          return (
            (brook2 && typeof brook2 == "string") ||
              ArtifactTabContentHelper51(false, "must be file path or URL"),
            ArtifactTabContentHelper46(fill, {
              configSrc: brook2,
            }),
            this
          );
        } catch (creek) {
          throw (ArtifactTabContentHelper58(1, creek), creek);
        }
      }
      withVirtualWorkingDirectory(river) {
        try {
          return (
            (river && typeof river == "string") ||
              ArtifactTabContentHelper51(false, "must be directory path"),
            ArtifactTabContentHelper45(avenue, {
              virtualWorkingDirectory: river,
            }),
            this
          );
        } catch (stream2) {
          throw (ArtifactTabContentHelper58(1, stream2), stream2);
        }
      }
      withEnvironmentVariable(falls, cascade2) {
        try {
          let spring = {};
          return (
            (spring[falls] = cascade2),
            ArtifactTabContentHelper45(avenue, {
              environmentVariables: spring,
            }),
            this
          );
        } catch (well) {
          throw (ArtifactTabContentHelper58(1, well), well);
        }
      }
      withEnvironmentVariables(cistern) {
        try {
          return (
            (cistern && typeof cistern == "object") ||
              ArtifactTabContentHelper51(false, "must be dictionary object"),
            ArtifactTabContentHelper45(avenue, {
              environmentVariables: cistern,
            }),
            this
          );
        } catch (tank) {
          throw (ArtifactTabContentHelper58(1, tank), tank);
        }
      }
      withDiagnosticTracing(basin) {
        try {
          return (
            typeof basin != "boolean" &&
              ArtifactTabContentHelper51(false, "must be boolean"),
            ArtifactTabContentHelper45(avenue, {
              diagnosticTracing: basin,
            }),
            this
          );
        } catch (bowl) {
          throw (ArtifactTabContentHelper58(1, bowl), bowl);
        }
      }
      withDebugging(cup) {
        try {
          return (
            (cup != null && typeof cup == "number") ||
              ArtifactTabContentHelper51(false, "must be number"),
            ArtifactTabContentHelper45(avenue, {
              debugLevel: cup,
            }),
            this
          );
        } catch (mug) {
          throw (ArtifactTabContentHelper58(1, mug), mug);
        }
      }
      withApplicationArguments(...flask) {
        try {
          return (
            (flask && Array.isArray(flask)) ||
              ArtifactTabContentHelper51(false, "must be array of strings"),
            ArtifactTabContentHelper45(avenue, {
              applicationArguments: flask,
            }),
            this
          );
        } catch (vial) {
          throw (ArtifactTabContentHelper58(1, vial), vial);
        }
      }
      withRuntimeOptions(jar) {
        try {
          return (
            (jar && Array.isArray(jar)) ||
              ArtifactTabContentHelper51(false, "must be array of strings"),
            avenue.runtimeOptions
              ? avenue.runtimeOptions.push(...jar)
              : (avenue.runtimeOptions = jar),
            this
          );
        } catch (pot) {
          throw (ArtifactTabContentHelper58(1, pot), pot);
        }
      }
      withMainAssembly(kettle) {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              mainAssemblyName: kettle,
            }),
            this
          );
        } catch (hearth) {
          throw (ArtifactTabContentHelper58(1, hearth), hearth);
        }
      }
      withApplicationArgumentsFromQuery() {
        try {
          if (!globalThis.window)
            throw Error("Missing window to the query parameters from");
          if (globalThis.URLSearchParams === undefined)
            throw Error("URLSearchParams is supported");
          let forge2 = new URLSearchParams(
            globalThis.window.location.search,
          ).getAll("arg");
          return this.withApplicationArguments(...forge2);
        } catch (anvil2) {
          throw (ArtifactTabContentHelper58(1, anvil2), anvil2);
        }
      }
      withApplicationEnvironment(hammer) {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              applicationEnvironment: hammer,
            }),
            this
          );
        } catch (chisel) {
          throw (ArtifactTabContentHelper58(1, chisel), chisel);
        }
      }
      withApplicationCulture(lathe) {
        try {
          return (
            ArtifactTabContentHelper45(avenue, {
              applicationCulture: lathe,
            }),
            this
          );
        } catch (drill) {
          throw (ArtifactTabContentHelper58(1, drill), drill);
        }
      }
      withResourceLoader(saw) {
        try {
          return ((drift.loadBootResource = saw), this);
        } catch (plane) {
          throw (ArtifactTabContentHelper58(1, plane), plane);
        }
      }
      async download() {
        try {
          await (async function () {
            ArtifactTabContentHelper62(fill);
            await ArtifactTabContentHelper50(fill);
            ArtifactTabContentHelper31();
            await ArtifactTabContentHelper19();
            ArtifactTabContentHelper21();
            ArtifactTabContentHelper30();
            await drift.allDownloadsFinished.promise;
          })();
        } catch (rasp) {
          throw (ArtifactTabContentHelper58(1, rasp), rasp);
        }
      }
      async create() {
        try {
          return (
            (this.instance ||= await (async function () {
              return (await ArtifactTabContentHelper63(fill), $r.api);
            })()),
            this.instance
          );
        } catch (clamp) {
          throw (ArtifactTabContentHelper58(1, clamp), clamp);
        }
      }
      async run() {
        try {
          return (
            fill.config ||
              ArtifactTabContentHelper51(false, "Null moduleConfig.config"),
            this.instance || (await this.create()),
            this.instance.runMainAndExit()
          );
        } catch (vise) {
          throw (ArtifactTabContentHelper58(1, vise), vise);
        }
      }
    })();
    heath ||
      typeof globalThis.URL == "function" ||
      ArtifactTabContentHelper51(
        false,
        "This browser/engine doesn't support URL API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features",
      );
    typeof globalThis.BigInt64Array != "function" &&
      ArtifactTabContentHelper51(
        false,
        "This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features",
      );
  });
