// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 13/17
/* split-lane-import-depth:1 */
// AST split 2/4

import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { ensureGpuTearingDebugSettingsInit } from "../../settings/gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { runAppActionInPrimaryWindow } from "../../shell/run-app-action-in-primary-window";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiYn } from "../../ui/deferred-ui-yn";
import { deferredVM } from "../../ui/deferred-vm";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { ght } from "../../ui/ght";
import { inProgress } from "../../ui/in-progress";
import { setPrimaryRuntimeInstallRelease2 } from "../../ui/set-primary-runtime-install-release2";
import { isUsageRateLimitBlocked } from "../../usage/is-usage-rate-limit-blocked";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { isSvgHyphenatedTag } from "../../utils/is-svg-hyphenated-tag";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { moveArrayItem } from "../../utils/move-array-item";
import { noop } from "../../utils/noop";

import {
  DeferredUiV2,
  Lemon3,
  deferredUiXTStub,
  falcon,
  kelp3,
  violet,
} from "./part-13-a";
import { Bloom3 } from "./part-13-c";
import { clampZoomPercent } from "../../artifact/clamp-zoom-percent";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_MT_Init } from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { MCP_SERVERS_STATUS_PATH } from "../../config/mcp-servers-status-path";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { bindZ2BindableHelper } from "../../hosts/z2-bindable-helper";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { initThreadVirtualizer } from "../../utils/thread-virtualizer";

// Wave5d soft JSX companions.
function Amber2(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

function Id(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

export var _d,
  coral3,
  drift3,
  eagle3,
  frost3,
  glide3,
  honey3,
  iris3,
  jewel3,
  knoll3,
  lunar3,
  moss3 = esmInit(() => {
    _d = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    coral3 = commonJsInit(react(), 1);
    DeferredUiV2();
    clampZoomPercent();
    filterOpenTargets();
    initThreadVirtualizer();
    ensureAppScopeInit();
    ensureAppShellAtomsInit();
    ensureDropdownMenuPopoverInit();
    violet();
    falcon();
    kelp3();
    eagle3 = [];
    frost3 = 56;
    glide3 = 8;
    honey3 = Math.ceil(900 / frost3) + glide3;
    iris3 = [];
    jewel3 = false;
    knoll3 = deferredUiXTStub(appScopeAtom, ({ get }) =>
      Lemon3(
        get(bindZ2BindableHelper, LOCAL_HOST_ID)
          .slice()
          .reverse()
          .flatMap((item) =>
            (get(MCP_SERVERS_STATUS_PATH, item) ?? eagle3).map((_item) => ({
              conversationId: item,
              items: _item.items,
              turnId: _item.turnId,
            })),
          ),
      ),
    );
    lunar3 = coral3.memo(function (acorn23) {
      let { entry, measureLineRef } = acorn23,
        bloom23 = (
          <Id
            {...{
              line: entry.line,
            }}
          />
        );
      return (
        <div ref={measureLineRef} data-debug-line-key={entry.turnKey}>
          {bloom23}
        </div>
      );
    });
  });

function IsIndeterminate(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

function UseColdNavigate(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

function Vapor3(amber23) {
  return amber23.borderBoxSize
    ? (Array.isArray(amber23.borderBoxSize)
        ? amber23.borderBoxSize[0]
        : amber23.borderBoxSize
      ).blockSize
    : amber23.contentRect.height;
}

function Wheat3(basalt23) {
  let { label, language, shouldWrapCode = false, title, value } = basalt23,
    cedar23 = (
      <IsIndeterminate
        {...{
          codeContainerClassName: "max-h-[28rem]",
          content: value,
          language,
          shouldWrapCode: shouldWrapCode,
          title,
          wrapperClassName: "rounded-md",
        }}
      />
    );
  return (
    <Amber2
      {...{
        label,
        children: cedar23,
      }}
    />
  );
}

function Yarn3(daisy23) {
  let { line } = daisy23,
    [ember23, flint23] = coral3.useState(false),
    garnet23 = Zephyr3(line),
    hazel23 = `${line.label} image`,
    ivory23 =
      garnet23 == null ? (
        <span className="block rounded bg-token-main-surface-primary px-2 py-1 text-token-description-foreground">
          {"Preparing image preview…"}
        </span>
      ) : (
        <img
          src={garnet23}
          alt={hazel23}
          className="block max-h-48 max-w-full rounded object-contain"
          referrerPolicy="no-referrer"
          decoding="async"
          loading="lazy"
          fetchPriority="low"
          draggable={false}
        />
      );
  let jasper23 = ivory23,
    kelp23 =
      garnet23 == null ? "Preparing image preview" : "Open full-size image",
    lotus23 =
      garnet23 == null ? "Preparing image preview" : "Open full-size image",
    mint23 = <span className="sr-only">{line.mimeType}</span>;
  let nova23 = (
    <button
      type="button"
      className="cursor-interaction overflow-hidden rounded-md border border-token-border bg-token-main-surface-primary p-1 focus:ring-1 focus:ring-token-focus-border focus:outline-none disabled:cursor-default"
      aria-label={kelp23}
      title={lotus23}
    >
      {jasper23}
      {mint23}
    </button>
  );
  let olive23 = nova23,
    prism23 =
      garnet23 == null ? (
        olive23
      ) : (
        <UseColdNavigate
          {...{
            src: garnet23,
            alt: hazel23,
            open: ember23,
            onOpenChange: flint23,
            imageDecoding: "async",
            imageDraggable: false,
            imageFetchPriority: "low",
            imageLoading: "lazy",
            imageReferrerPolicy: "no-referrer",
            triggerContent: olive23,
          }}
        />
      );
  return (
    <Amber2
      {...{
        label: line.label,
        children: prism23,
      }}
    />
  );
}

function Zephyr3(quill23) {
  let [reef23, sage23] = coral3.useState(null),
    topaz23,
    ultra23;
  return (
    (topaz23 = () => {
      sage23(null);
      let vapor23 = false;
      return (
        Acorn3(() => {
          vapor23 ||
            sage23(
              quill23.src ?? `data:${quill23.mimeType};base64,${quill23.data}`,
            );
        }),
        () => {
          vapor23 = true;
        }
      );
    }),
    (ultra23 = [quill23.data, quill23.mimeType, quill23.src]),
    coral3.useEffect(topaz23, ultra23),
    reef23
  );
}

function Acorn3(wheat23) {
  iris3.push(wheat23);
  Bloom3();
}
