# Codex Desktop — restored-tree workflow helpers
#
# There is no root package.json. The deobfuscated app sources live in
# restored/; ref/ is the extracted ChatGPT.app Electron package (reference
# only) and is not wired to boot from restored/.
#
# Closest working paths today:
#   make dev   — smoke-load restored modules, then run skill Bun unit tests
#   make build — bun-bundle the restored webview entry → dist/restored/
#   make check — quality-gate.ts over restored/ (canonical restore check)
#
# Gap: full Electron/webview boot from restored/ is not wired yet (no Vite
# Forge config points at restored/). `make dev` does not start a long-lived
# Electron server.

SKILL_DIR := .agents/skills/deobfuscate-javascript
RESTORED  := restored
ENTRY     := $(RESTORED)/app/webview-entry.ts
DIST_DIR  := dist/restored

.DEFAULT_GOAL := help

.PHONY: help dev build check

help:
	@printf '%s\n' \
	  'Targets:' \
	  '  make dev    Smoke-load restored sources, then run skill unit tests' \
	  '  make build  Bundle restored webview entry with bun → $(DIST_DIR)/' \
	  '  make check  Run quality-gate.ts on $(RESTORED)/' \
	  '' \
	  'Note: Full Electron boot from restored/ is not wired yet.'

# Smoke-import restored modules (Bun, no DOM), then run the only existing
# unit-test harness (deobfuscate-javascript skill tests via bun test).
dev:
	bun scripts/restored-smoke.ts
	cd $(SKILL_DIR) && bun test

# Bundle the restored webview entry. Dynamic imports stay lazy, so the
# emitted chunk is a thin shell — still a real, runnable build command.
build:
	mkdir -p $(DIST_DIR)
	bun build $(ENTRY) --outdir=$(DIST_DIR) --target=browser

# Canonical restored-tree quality gate (IMPORT_MAP + per-file checks).
check:
	bun $(SKILL_DIR)/scripts/quality-gate.ts $(RESTORED)
