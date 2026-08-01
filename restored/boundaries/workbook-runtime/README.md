# workbook-runtime (intentional oversized terminal)

**Chunk:** `workbook-C49Dgk1_`  
**Public path:** `boundaries/workbook-runtime/index.ts` (~7.9k LOC remaining)  
**IMPORT_MAP:** `vendor: "runtime"`, `classification: "vendor-runtime"`, `openBoundary: true`

## Decision

**Not npm-first.** This is Codex’s popcorn workbook / spreadsheet / presentation / document engine (formula + worksheet + D3 charts + mermaid + xlsx validation), not a stock package such as HyperFormula, SheetJS, Univer, or FortuneSheet.

## Domain inventory (wave-1)

| Domain                                                                                               | Approx locus (pre-drain) | Notes                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shape geometry enum + name map                                                                       | ~16k–17k                 | **Drained** → `workbook/shape-geometry.ts` + `workbook/chart-proto-name-maps/`                                                                                                                                                                |
| Chart/presentation proto ↔ camelCase bridges                                                         | Binding404 cluster       | **Drained** with shape maps                                                                                                                                                                                                                   |
| Theme / pattern fill (Hie)                                                                           | ~15.7k–16.2k             | **Drained** → `workbook/theme-color/`                                                                                                                                                                                                         |
| Fill value object (workbookCt)                                                                       | ~15.6k                   | **Drained (wave-4)** → `workbook/fill/`                                                                                                                                                                                                       |
| Stylesheet Bae / Binding424                                                                          | ~15.5k–16.4k             | **Drained (wave-5)** → `workbook/stylesheet/`                                                                                                                                                                                                 |
| Line Binding431 stroke VO                                                                            | ~15.7k                   | **Drained (wave-6)** → `workbook/line/`                                                                                                                                                                                                       |
| Color-resolve helpers (Tae/St)                                                                       | ~15.4k                   | **Drained (wave-7)** → `workbook/color-resolve/`                                                                                                                                                                                              |
| TextStyle VO (workbookVt)                                                                            | ~15.5k–16.2k             | **Drained (wave-8)** → `workbook/text-style/`                                                                                                                                                                                                 |
| TextStyle CSS / shadow parsers                                                                       | ~14.9k–15.7k             | **Drained (wave-9)** → `workbook/text-style/`                                                                                                                                                                                                 |
| Placeholder-style helpers (Vae/Uae/helper97+)                                                        | ~15.0k                   | **Drained (wave-10)** → `workbook/presentation-theme/`                                                                                                                                                                                        |
| Font metrics + grapheme segmenter                                                                    | ~15.3k–15.8k             | **Drained (wave-10)** → `workbook/font-metrics/`                                                                                                                                                                                              |
| Math LaTeX + plain-text                                                                              | ~15.1k                   | **Drained (wave-12)** → `workbook/math-plain-text/`                                                                                                                                                                                           |
| MathML codec                                                                                         | ~15.1k                   | **Drained (wave-13)** → `workbook/math-ml/`                                                                                                                                                                                                   |
| Font-stack / math-font / typography units                                                            | ~15.1k                   | **Drained (wave-14)** → `workbook/font-stack/`                                                                                                                                                                                                |
| Worksheet / spreadsheet core                                                                         | ~50k–72k, ~210k–230k     | Range/table/drawing APIs                                                                                                                                                                                                                      |
| Presentation + Mermaid hooks                                                                         | ~142k–174k               | Theme palettes drained → `workbook/presentation-theme/`; Mermaid/collab remain                                                                                                                                                                |
| Formula / xlsx validation                                                                            | ~177k–230k               | Serial dates, workbook validation (`WorkbookN`)                                                                                                                                                                                               |
| SSF number-format (`Binding571`)                                                                     | ~2.9k                    | **Drained (wave-24)** → `vendor/ssf` npm shim (`ssf@0.11.2`)                                                                                                                                                                                  |
| jStat stats (`qXe`)                                                                                  | ~8.1k                    | **Drained (wave-25)** → `vendor/jstat` npm shim (`jstat@1.9.6`)                                                                                                                                                                               |
| Bessel (`JXe`)                                                                                       | ~0.57k                   | **Drained (wave-25)** → `vendor/bessel` npm shim (`bessel@1.0.2`)                                                                                                                                                                             |
| Cell-XF / numFmt / col-row extents (`helper223`–`Binding586`)                                        | ~0.7k                    | **Drained (wave-26)** → `workbook/cell-xf-format/`                                                                                                                                                                                            |
| Worksheet autofit (`Tle` / `Binding232`–`Rle`)                                                       | ~0.7k                    | **Drained (wave-27)** → `workbook/worksheet-autofit/`                                                                                                                                                                                         |
| RangeFormat (`Binding337` + `helper240`–`Jle` + `Binding589`–`593`/`Yle`)                            | ~1.8k                    | **Drained (wave-28)** → `workbook/range-format/`                                                                                                                                                                                              |
| Icon-set (`Binding594`/`helper256`–`259`)                                                            | ~0.13k                   | **Drained (wave-29)** → `workbook/icon-set/`                                                                                                                                                                                                  |
| TextRun/Paragraph VOs (`Binding597`–`612`/`Xle`/`Zle`/`helper260`–`261`)                             | ~0.58k                   | **Drained (wave-29)** → `workbook/text-run/`                                                                                                                                                                                                  |
| Style-tokens (`Qle`/`Binding613`–`621`/`helper262`–`271`/`iue`/`aue`/`_x`)                           | ~0.43k                   | **Drained (wave-30)** → `workbook/style-tokens/`                                                                                                                                                                                              |
| Text-selection (`Binding622`/`623` / WorkbookClass6)                                                 | ~1.06k                   | **Drained (wave-31)** → `workbook/text-selection/`                                                                                                                                                                                            |
| Document glue                                                                                        | scattered                | DOCX protobuf already faced under `workbook/document-*`                                                                                                                                                                                       |
| Shape utility-class / border-radius / shadow→effect                                                  | ~15.6k (post-mde)        | **Drained (wave-38)** → `workbook/shape-utility/`                                                                                                                                                                                             |
| Path-geometry polyline / rect-edge helpers                                                           | ~15.7k (post-bde)        | **Drained (wave-38)** → `workbook/path-geometry/`                                                                                                                                                                                             |
| Image-source VO / payload normalize                                                                  | ~15.7k (post-Mde)        | **Drained (wave-39)** → `workbook/image-source/`                                                                                                                                                                                              |
| Image element VO (Binding660)                                                                        | ~15.7k (post-source)     | **Drained (wave-40)** → `workbook/image-element/`                                                                                                                                                                                             |
| Thread/chart/CF mutation builders (Yde…helper319)                                                    | ~15.7k (post-image)      | **Drained (wave-41)** → `workbook/mutation-ops/`                                                                                                                                                                                              |
| Sparkline/DV/shape/image mutation (Sfe…Wfe) + helper333                                              | ~15.7k (post-mutation)   | **Drained (wave-42)** → `workbook/mutation-ops/` + `worksheet-attachment/`                                                                                                                                                                    |
| CF/DV VO+API (helper322…Bpe)                                                                         | ~1.2k (post-Binding662)  | **Drained (wave-43)** → `workbook/conditional-format/` + `data-validation/`                                                                                                                                                                   |
| Formula/token/WorkbookR (Vpe…workbookF)                                                              | ~1.4k (post-Binding662)  | **Drained (wave-44)** → `workbook/formula/`                                                                                                                                                                                                   |
| Fill-from / formula-address (dme…helper336)                                                          | ~0.4k (post-formula)     | **Drained (wave-45)** → `workbook/range-fill/` + `formula-address/`                                                                                                                                                                           |
| Range VO (Binding672/675 + bme/xme/Sme)                                                              | ~3.0k                    | **Drained (wave-46)** → `workbook/range/`                                                                                                                                                                                                     |
| PivotCaches (Binding676 / Cme)                                                                       | ~1.1k                    | **Drained (wave-47)** → `workbook/pivot-caches/`                                                                                                                                                                                              |
| Slicers (Binding677–684 / Tme/Eme)                                                                   | ~0.42k                   | **Drained (wave-48)** → `workbook/slicers/`                                                                                                                                                                                                   |
| PivotTable (Binding369 / `_u`)                                                                       | ~0.85k                   | **Drained (wave-49)** → `workbook/pivot-table/` (peeled)                                                                                                                                                                                      |
| Field VOs (Binding343–361 + enums 335/336 + Class53)                                                 | ~2.7k                    | **Drained (wave-50)** → `workbook/pivot-fields/`                                                                                                                                                                                              |
| Formula array/eval (helper31–61 + $u Binding370–374)                                                 | ~1.1k                    | **Drained (wave-51)** → `workbook/formula-array/`                                                                                                                                                                                             |
| PivotLayout/cache hydrate (Binding334/wne + Cne/el/332/333 + helper24/hre)                           | ~0.37k                   | **Drained (wave-52)** → `workbook/pivot-table/` + `workbook/pivot-caches/`                                                                                                                                                                    |
| Yjs + lib0 (`Binding1`–`331` / `no` / `Bte`)                                                         | ~9.5k                    | **Drained (wave-53)** → `vendor/yjs` npm shim (`yjs@13.6.27`)                                                                                                                                                                                 |
| Three.js (`Binding929`/`Xbe` + MathUtils helpers)                                                    | ~15.3k                   | **Drained (wave-54)** → `vendor/three` npm shim (`three@0.170.0`)                                                                                                                                                                             |
| highlight.js grammars (`wke`…`aAe` + `oAe`/`sAe`; contiguous after Binding1574/`Cke`)                | ~7.9k                    | **Drained (wave-55)** → `boundaries/highlight-js` npm shim (`highlight.js@^11.11.1`)                                                                                                                                                          |
| Zod (`helper789` / `$Zod*` / Binding1790–1799; Binding1790 var tail = recipes kept)                  | ~6.4k                    | **Drained (wave-56)** → `vendor/zod` npm shim (`zod@^4.4.3`)                                                                                                                                                                                  |
| presentation recipes (`Binding1800`/`qWe`…`Yqe` + `Xqe`/`Zqe`/`aJe`)                                 | ~7.3k                    | **Drained (wave-57)** → `workbook/presentation-recipes/`                                                                                                                                                                                      |
| compose-layout engine (`Binding1390`/`MDe`…`Binding1488`)                                            | ~3.9k                    | **Drained (wave-58)** → `workbook/compose-layout/`                                                                                                                                                                                            |
| WorkbookN / `__workbookT` (`Binding1996`)                                                            | ~4.4k                    | **Drained (wave-59)** → `workbook/workbook-core/`                                                                                                                                                                                             |
| Worksheet drawings (`helper373`…`Sve` + `Binding740`–`789`)                                          | ~3.1k                    | **Drained (wave-60)** → `workbook/worksheet-drawings/`                                                                                                                                                                                        |
| Drawing-layout + sparklines (`Lve`/`Binding790`–`815`/`_D`)                                          | ~1.6k                    | **Drained (wave-61)** → `workbook/worksheet-drawings/` + `workbook/sparklines/`                                                                                                                                                               |
| Mermaid→slide adapters (`Binding1687` / gitGraph·sequence·class·treeView)                            | ~3.0k                    | **Drained (wave-62)** → `workbook/mermaid-slide-adapters/`                                                                                                                                                                                    |
| decimal.js (`helper939`…/`Binding1906`/`lit`/`Vit`)                                                  | ~4.4k                    | **Drained (wave-63)** → `vendor/decimal` npm shim (`decimal.js@10.6.0`)                                                                                                                                                                       |
| D3 chart helpers                                                                                     | imports + mid body       | Prefer existing `vendor/d3-*` / ensure-\* stubs                                                                                                                                                                                               |
| graphlib Graph + dagre layout (`Binding1671` / `wNe` / `YNe`)                                        | ~3.6k                    | **Drained (wave-73)** → `vendor/graphlib` + `vendor/dagre` npm shims                                                                                                                                                                          |
| Image asset + connector routing (`Binding723`–`735` / `Jge` / `Yge`…`pve`)                           | ~3.1k                    | **Drained (wave-74)** → `workbook/image-connector/`                                                                                                                                                                                           |
| Chart asset (`She`/`Che`…`Binding721`/`722`)                                                         | ~2.4k                    | **Drained (wave-75)** → `workbook/chart-asset/`                                                                                                                                                                                               |
| Table VO (`fhe`/`yhe`/`xhe` + Binding700–702)                                                        | ~1.0k                    | **Drained (wave-76)** → `workbook/table-vo/`                                                                                                                                                                                                  |
| Charts collection (`CEe`/`REe`/`Binding1299`/`workbookC`)                                            | ~1.0k                    | **Drained (wave-77)** → `workbook/charts-collection/`                                                                                                                                                                                         |
| Mermaid flowchart (`$Ne`/Binding1675/`OPe`/Binding1685/`NPe`/`PPe`)                                  | ~0.8k                    | **Drained (wave-78)** → `workbook/mermaid-flowchart/`                                                                                                                                                                                         |
| Deck kinds (`wRe`/`qRe`/Binding1738–1748)                                                            | ~0.9k                    | **Drained (wave-79)** → `workbook/deck-kinds/`                                                                                                                                                                                                |
| Shape element (`Binding736`/`739`)                                                                   | ~0.76k                   | **Drained (wave-80)** → `workbook/shape-element/`                                                                                                                                                                                             |
| Slides collection (`_workbookY`/`_workbookV`)                                                        | ~0.91k                   | **Drained (wave-81)** → `workbook/slides-collection/`                                                                                                                                                                                         |
| Constraint solver (`bDe` / Binding1364–1368)                                                         | ~0.76k                   | **Drained (wave-82)** → `workbook/constraint-solver/`                                                                                                                                                                                         |
| Constraint solver prelude (Binding1350–1363)                                                         | ~0.39k                   | **Drained (wave-83)** → `workbook/constraint-solver/`                                                                                                                                                                                         |
| Formula opcodes (`Z_t`/`X_t`)                                                                        | ~0.50k                   | **Drained (wave-83)** → `workbook/formula-opcodes/`                                                                                                                                                                                           |
| Table element (`_workbookH`/`eDe`…`cDe`/`_workbookM`)                                                | ~0.72k                   | **Drained (wave-84)** → `workbook/table-element/`                                                                                                                                                                                             |
| Table row/range/columns/borders (`YEe`/`Binding1321`/`QEe`/`$Ee`)                                    | ~0.58k                   | **Drained (wave-85)** → `workbook/table-row-range/`                                                                                                                                                                                           |
| Formula registry (`$dt`/`Xdt`/`Zdt`/`Binding1947`)                                                   | ~0.57k                   | **Drained (wave-86)** → `workbook/formula-registry/`                                                                                                                                                                                          |
| Presentation slide (`Z$`/`X$`/`cLe`/`sLe`)                                                           | ~0.79k                   | **Drained (wave-87)** → `workbook/presentation-slide/`                                                                                                                                                                                        |
| Table cell (`JEe`/`Binding1315`)                                                                     | ~0.43k                   | **Drained (wave-88)** → `workbook/table-row-range/` (reunite)                                                                                                                                                                                 |
| Worksheets collection (`TXe`/`wXe`/`CXe`/`EXe`)                                                      | ~0.40k                   | **Drained (wave-88)** → `workbook/sheet/`                                                                                                                                                                                                     |
| Chart canvas paint (`helper579`–`585` / `NCe` / `LCe` / `PCe`)                                       | ~1.28k                   | **Drained (wave-89)** → `workbook/chart-paint/`                                                                                                                                                                                               |
| Doc-op apply (`helper1024` / `Zht` / `Qht`…`ggt` / `_gt`)                                            | ~1.26k                   | **Drained (wave-90)** → `workbook/doc-op-apply/`                                                                                                                                                                                              |
| Three.js chart paint (`helper521` / `Qbe` / `$be`)                                                   | ~0.97k                   | **Drained (wave-90)** → `workbook/three-chart-paint/`                                                                                                                                                                                         |
| Unit convert (`N1e`)                                                                                 | ~0.52k                   | **Drained (wave-91)** → `workbook/unit-convert/`                                                                                                                                                                                              |
| Named ranges (`IXe` / `LXe` / `RXe` / `zXe`)                                                         | ~0.37k                   | **Drained (wave-91)** → `workbook/named-ranges/`                                                                                                                                                                                              |
| Styles Yjs (`helper1030`…`Cgt` / `Ogt` / `kgt`)                                                      | ~0.45k                   | **Drained (wave-91)** → `workbook/styles-yjs/`                                                                                                                                                                                                |
| Chart legend (`helper491` / `lbe`)                                                                   | ~0.71k                   | **Drained (wave-92)** → `workbook/chart-legend/`                                                                                                                                                                                              |
| Shape path (`helper605`–`607`)                                                                       | ~0.42k                   | **Drained (wave-92)** → `workbook/shape-path/`                                                                                                                                                                                                |
| Excel HTML clipboard (`Wpt` / `Gpt` / `Kpt`)                                                         | ~0.37k                   | **Drained (wave-92)** → `workbook/html-table-export/`                                                                                                                                                                                         |
| Chart JSX lower (`dke` / `fke` / `helper722`–`742` / `_ke`)                                          | ~1.59k                   | **Drained (wave-93)** → `workbook/chart-jsx-lower/`                                                                                                                                                                                           |
| Compose JSX lower (`vke` / `helper745` / `Cke`)                                                      | ~1.22k                   | **Drained (wave-93)** → `workbook/compose-jsx-lower/`                                                                                                                                                                                         |
| Chart axis ticks (`helper462`)                                                                       | ~0.40k                   | **Drained (wave-94)** → `workbook/chart-axis-ticks/`                                                                                                                                                                                          |
| Shape geometry paint (`helper616`)                                                                   | ~0.38k                   | **Drained (wave-94)** → `workbook/shape-geometry-paint/`                                                                                                                                                                                      |
| Table frame layout (`workbookA`)                                                                     | ~0.36k                   | **Drained (wave-94)** → `workbook/table-frame-layout/`                                                                                                                                                                                        |
| Slide canvas render (`vEe`)                                                                          | ~0.33k                   | **Drained (wave-94)** → `workbook/slide-canvas-render/`                                                                                                                                                                                       |
| Bar-direction series (`Dbe`)                                                                         | ~0.25k                   | **Drained (wave-95)** → `workbook/chart-bar-direction/`                                                                                                                                                                                       |
| Bar/column series (`helper501`)                                                                      | ~0.27k                   | **Drained (wave-95)** → `workbook/chart-bar-series/`                                                                                                                                                                                          |
| Radar chart paint (`Txe`)                                                                            | ~0.27k                   | **Drained (wave-95)** → `workbook/chart-radar/`                                                                                                                                                                                               |
| Category plot layout (`Xxe`)                                                                         | ~0.28k                   | **Drained (wave-95)** → `workbook/chart-plot-layout/`                                                                                                                                                                                         |
| Category axes (`Tbe`)                                                                                | ~0.18k                   | **Drained (wave-96)** → `workbook/chart-category-axes/`                                                                                                                                                                                       |
| Scatter series (`nCe`+`uxe`)                                                                         | ~0.28k                   | **Drained (wave-96)** → `workbook/chart-scatter-series/`                                                                                                                                                                                      |
| Histogram axes (`gCe`)                                                                               | ~0.22k                   | **Drained (wave-96)** → `workbook/chart-histogram-axes/`                                                                                                                                                                                      |
| Chart data table (`helper561`)                                                                       | ~0.18k                   | **Drained (wave-96)** → `workbook/chart-data-table/`                                                                                                                                                                                          |
| Scatter axes (`helper570`)                                                                           | ~0.19k                   | **Drained (wave-96)** → `workbook/chart-scatter-axes/`                                                                                                                                                                                        |
| Three-cam fit (`rxe`)                                                                                | ~0.24k                   | **Drained (wave-97)** → `workbook/three-chart-camera/`                                                                                                                                                                                        |
| Chart trendline (`helper525`)                                                                        | ~0.16k                   | **Drained (wave-97)** → `workbook/chart-trendline/`                                                                                                                                                                                           |
| Scatter scale (`helper540`)                                                                          | ~0.17k                   | **Drained (wave-97)** → `workbook/chart-scatter-scale/`                                                                                                                                                                                       |
| Paint images (`Fwe`)                                                                                 | ~0.18k                   | **Drained (wave-97)** → `workbook/paint-images/`                                                                                                                                                                                              |
| Constraint auto-layout (`ODe`/`kDe`)                                                                 | ~0.70k                   | **Drained (wave-97)** → `workbook/constraint-layout/`                                                                                                                                                                                         |
| Selection style grid (`Upt`)                                                                         | ~0.18k                   | **Drained (wave-97)** → `workbook/selection-style-grid/`                                                                                                                                                                                      |
| Chart data labels (`helper500`)                                                                      | ~0.20k                   | **Drained (wave-98)** → `workbook/chart-data-labels/`                                                                                                                                                                                         |
| Legend plot layout (`jxe`/`wSe`)                                                                     | ~0.36k                   | **Drained (wave-98)** → `workbook/chart-legend-plot/`                                                                                                                                                                                         |
| Category axis labels (`Nxe`…`Lxe`)                                                                   | ~0.43k                   | **Drained (wave-98)** → `workbook/chart-category-axis-labels/`                                                                                                                                                                                |
| Box-whisker (`ECe`/`OCe`/`jCe`)                                                                      | ~0.58k                   | **Drained (wave-98)** → `workbook/chart-box-whisker/`                                                                                                                                                                                         |
| Chart line series (`helper528`)                                                                      | ~0.17k                   | **Drained (wave-99)** → `workbook/chart-line-series/`                                                                                                                                                                                         |
| Chart group scales (`helper423`)                                                                     | ~0.15k                   | **Drained (wave-99)** → `workbook/chart-group-scales/`                                                                                                                                                                                        |
| Shape path endpoints (`Vwe`)                                                                         | ~0.15k                   | **Drained (wave-99)** → `workbook/shape-path-endpoints/`                                                                                                                                                                                      |
| Table cell paint (`STe`)                                                                             | ~0.15k                   | **Drained (wave-99)** → `workbook/table-cell-paint/`                                                                                                                                                                                          |
| Text-frame embeds (`helper643`)                                                                      | ~0.15k                   | **Drained (wave-99)** → `workbook/text-frame-embeds/`                                                                                                                                                                                         |
| Slide image paint (`$Te`)                                                                            | ~0.15k                   | **Drained (wave-99)** → `workbook/slide-image-paint/`                                                                                                                                                                                         |
| Chart legend layout (`helper490`)                                                                    | ~0.15k                   | **Drained (wave-100)** → `workbook/chart-legend-layout/`                                                                                                                                                                                      |
| Chart area series (`helper529`)                                                                      | ~0.12k                   | **Drained (wave-100)** → `workbook/chart-area-series/`                                                                                                                                                                                        |
| Chart histogram bars (`sCe`)                                                                         | ~0.14k                   | **Drained (wave-100)** → `workbook/chart-histogram-bars/`                                                                                                                                                                                     |
| Chart surface map (`Kye`)                                                                            | ~0.14k                   | **Drained (wave-100)** → `workbook/chart-surface-map/`                                                                                                                                                                                        |
| Compose inline text (`NOe`)                                                                          | ~0.14k                   | **Drained (wave-100)** → `workbook/compose-inline-text/`                                                                                                                                                                                      |
| Chart waterfall bar (`dCe`)                                                                          | ~0.13k                   | **Drained (wave-100)** → `workbook/chart-waterfall-bar/`                                                                                                                                                                                      |
| Chart pie series (`helper496`)                                                                       | ~0.13k                   | **Drained (wave-101)** → `workbook/chart-pie-series/`                                                                                                                                                                                         |
| Chart bubble series (`aCe`)                                                                          | ~0.12k                   | **Drained (wave-101)** → `workbook/chart-bubble-series/`                                                                                                                                                                                      |
| Sparkline paint (`YCe`)                                                                              | ~0.12k                   | **Drained (wave-101)** → `workbook/sparkline-paint/`                                                                                                                                                                                          |
| Icon-set symbols (`helper594`)                                                                       | ~0.14k                   | **Drained (wave-101)** → `workbook/icon-set-symbols/`                                                                                                                                                                                         |
| Formula IRR (`F0e`)                                                                                  | ~0.14k                   | **Drained (wave-101)** → `workbook/formula-irr/`                                                                                                                                                                                              |
| HTML paste (`wmt`)                                                                                   | ~0.13k                   | **Drained (wave-101)** → `workbook/html-paste/`                                                                                                                                                                                               |
| Formula AST remap (`helper1022`)                                                                     | ~0.12k                   | **Drained (wave-101)** → `workbook/formula-ast-remap/`                                                                                                                                                                                        |
| Pie data labels (`fbe`)                                                                              | ~0.11k                   | **Drained (wave-102)** → `workbook/chart-pie-series/`                                                                                                                                                                                         |
| Treemap plot layout (`Cbe`)                                                                          | ~0.11k                   | **Drained (wave-102)** → `workbook/chart-treemap-plot-layout/`                                                                                                                                                                                |
| Histogram bins (`helper555`)                                                                         | ~0.11k                   | **Drained (wave-102)** → `workbook/chart-histogram-bins/`                                                                                                                                                                                     |
| Funnel segments (`helper576`)                                                                        | ~0.12k                   | **Drained (wave-102)** → `workbook/chart-funnel-segments/`                                                                                                                                                                                    |
| Sheet hidden boundaries (`ewe`)                                                                      | ~0.11k                   | **Drained (wave-102)** → `workbook/sheet-hidden-boundaries/`                                                                                                                                                                                  |
| Slide background paint (`RTe`)                                                                       | ~0.16k                   | **Drained (wave-102)** → `workbook/slide-background-paint/`                                                                                                                                                                                   |
| Formula matrix inverse (`Alt`)                                                                       | ~0.12k                   | **Drained (wave-102)** → `workbook/formula-matrix-inverse/`                                                                                                                                                                                   |
| Axis auto domain (`bye`)                                                                             | ~0.13k                   | **Drained (wave-103)** → `workbook/chart-axis-auto-domain/`                                                                                                                                                                                   |
| Bar segments (`helper421`)                                                                           | ~0.10k                   | **Drained (wave-103)** → `workbook/chart-bar-series/`                                                                                                                                                                                         |
| Pie 3D paint (`txe`)                                                                                 | ~0.12k                   | **Drained (wave-103)** → `workbook/three-chart-paint/`                                                                                                                                                                                        |
| Line stack layers (`axe`)                                                                            | ~0.10k                   | **Drained (wave-103)** → `workbook/chart-line-series/`                                                                                                                                                                                        |
| Combo groups (`yxe`)                                                                                 | ~0.10k                   | **Drained (wave-103)** → `workbook/chart-combo-groups/`                                                                                                                                                                                       |
| Funnel bars (`vCe`)                                                                                  | ~0.10k                   | **Drained (wave-103)** → `workbook/chart-funnel-segments/`                                                                                                                                                                                    |
| Shape path densify (`dTe`)                                                                           | ~0.11k                   | **Drained (wave-103)** → `workbook/shape-path-densify/`                                                                                                                                                                                       |
| Compose element snapshot (`helper678`)                                                               | ~0.10k                   | **Drained (wave-103)** → `workbook/compose-element-snapshot/`                                                                                                                                                                                 |
| YEARFRAC (`helper884`)                                                                               | ~0.11k                   | **Drained (wave-103)** → `workbook/formula-yearfrac/`                                                                                                                                                                                         |
| Scatter axis plan (`helper545`)                                                                      | ~0.09k                   | **Drained (wave-104)** → `workbook/chart-scatter-axes/`                                                                                                                                                                                       |
| Title band (`uSe`)                                                                                   | ~0.10k                   | **Drained (wave-104)** → `workbook/chart-legend-plot/`                                                                                                                                                                                        |
| Series values (`helper551`)                                                                          | ~0.15k                   | **Drained (wave-104)** → `workbook/chart-series-values/`                                                                                                                                                                                      |
| Icon-set paint (`uwe`…`ywe`)                                                                         | ~0.48k                   | **Drained (wave-104)** → `workbook/icon-set-paint/`                                                                                                                                                                                           |
| Table columns (`$B`)                                                                                 | ~0.16k                   | **Drained (wave-104)** → `workbook/table-cell-paint/`                                                                                                                                                                                         |
| Panel/surface JSX (`JOe`)                                                                            | ~0.10k                   | **Drained (wave-104)** → `workbook/compose-jsx-lower/`                                                                                                                                                                                        |
| XIRR (`Z0e`)                                                                                         | ~0.09k                   | **Drained (wave-104)** → `workbook/formula-irr/`                                                                                                                                                                                              |
| Lambda detect (`helper1008`)                                                                         | ~0.09k                   | **Drained (wave-104)** → `workbook/formula-ast-remap/`                                                                                                                                                                                        |
| HTML paste cell/table (`Dmt`/`Jpt`)                                                                  | ~0.20k                   | **Drained (wave-104)** → `workbook/html-paste/`                                                                                                                                                                                               |
| Line/column sparkline (`XCe`/`ZCe`)                                                                  | ~0.16k                   | **Drained (wave-105)** → `workbook/sparkline-paint/`                                                                                                                                                                                          |
| Cell edge stroke (`helper600`)                                                                       | ~0.09k                   | **Drained (wave-105)** → `workbook/canvas-paint/`                                                                                                                                                                                             |
| Trim path start (`uTe`)                                                                              | ~0.09k                   | **Drained (wave-105)** → `workbook/shape-path-densify/`                                                                                                                                                                                       |
| Floating placement (`jTe`)                                                                           | ~0.09k                   | **Drained (wave-105)** → `workbook/floating-placement/`                                                                                                                                                                                       |
| Slide text group (`nEe`)                                                                             | ~0.11k                   | **Drained (wave-105)** → `workbook/slide-canvas-render/`                                                                                                                                                                                      |
| Treemap tiles (`Yye`)                                                                                | ~0.09k                   | **Drained (wave-105)** → `workbook/chart-treemap-tiles/`                                                                                                                                                                                      |
| Code-block plugin (`cAe`/`vAe`)                                                                      | ~0.18k                   | **Drained (wave-105)** → `workbook/presentation-code-block/`                                                                                                                                                                                  |
| Sheet chart painter (`zCe`/`BCe`/`VCe`)                                                              | ~0.14k                   | **Drained (wave-106)** → `workbook/canvas-paint/`                                                                                                                                                                                             |
| Table cell style bands (`helper384`)                                                                 | ~0.08k                   | **Drained (wave-106)** → `workbook/table-styles/`                                                                                                                                                                                             |
| Chart card paint (`ASe`)                                                                             | ~0.08k                   | **Drained (wave-106)** → `workbook/chart-card-paint/`                                                                                                                                                                                         |
| Paragraph snapshot (`helper685`)                                                                     | ~0.08k                   | **Drained (wave-106)** → `workbook/compose-element-snapshot/`                                                                                                                                                                                 |
| Formula dep SCCs (`VXe`)                                                                             | ~0.08k                   | **Drained (wave-106)** → `workbook/formula-dep-scc/`                                                                                                                                                                                          |
| Criteria column match (`helper896`)                                                                  | ~0.08k                   | **Drained (wave-106)** → `workbook/formula-criteria-match/`                                                                                                                                                                                   |
| RATE solver (`W0e`)                                                                                  | ~0.08k                   | **Drained (wave-106)** → `workbook/formula-irr/`                                                                                                                                                                                              |
| Matrix determinant (`klt`)                                                                           | ~0.08k                   | **Drained (wave-106)** → `workbook/formula-matrix-inverse/`                                                                                                                                                                                   |
| Paste target resolve (`Tmt`/`Emt`)                                                                   | ~0.09k                   | **Drained (wave-106)** → `workbook/html-paste/`                                                                                                                                                                                               |
| Range-ref remap (`Bht`/`helper1023`)                                                                 | ~0.10k                   | **Drained (wave-106)** → `workbook/formula-ast-remap/`                                                                                                                                                                                        |
| Trendline label (`helper524`)                                                                        | ~0.08k                   | **Drained (wave-107)** → `workbook/chart-trendline/`                                                                                                                                                                                          |
| Bubble scale fit (`helper539`)                                                                       | ~0.07k                   | **Drained (wave-107)** → `workbook/chart-scatter-scale/`                                                                                                                                                                                      |
| Histogram aggregate bins (`_Se`)                                                                     | ~0.08k                   | **Drained (wave-107)** → `workbook/chart-histogram-bins/`                                                                                                                                                                                     |
| Donut arc labels (`qSe`)                                                                             | ~0.08k                   | **Drained (wave-107)** → `workbook/chart-pie-series/`                                                                                                                                                                                         |
| Waterfall series (`pCe`)                                                                             | ~0.08k                   | **Drained (wave-107)** → `workbook/chart-waterfall-bar/`                                                                                                                                                                                      |
| Custom path draw/clip (`Rwe`/`cTe`)                                                                  | ~0.16k                   | **Drained (wave-107)** → `workbook/shape-path/`                                                                                                                                                                                               |
| Path endpoint metrics (`mTe`)                                                                        | ~0.08k                   | **Drained (wave-107)** → `workbook/shape-path-densify/`                                                                                                                                                                                       |
| Table border strokes (`bTe`/`xTe`)                                                                   | ~0.12k                   | **Drained (wave-107)** → `workbook/table-cell-paint/`                                                                                                                                                                                         |
| Slide view overlay (`dEe` cluster)                                                                   | ~0.27k                   | **Drained (wave-107)** → `workbook/slide-canvas-render/`                                                                                                                                                                                      |
| Theme typefaces (`VDe`)                                                                              | ~0.09k                   | **Drained (wave-107)** → `workbook/presentation-theme/`                                                                                                                                                                                       |
| Formula dep edges (`WXe`)                                                                            | ~0.11k                   | **Drained (wave-107)** → `workbook/formula-dep-scc/`                                                                                                                                                                                          |
| GROWTH (`pQe`)                                                                                       | ~0.08k                   | **Drained (wave-107)** → `workbook/formula-growth/`                                                                                                                                                                                           |
| YIELD/PRICEDISC (`k0e`/`H0e`)                                                                        | ~0.15k                   | **Drained (wave-107)** → `workbook/formula-securities/`                                                                                                                                                                                       |
| Legend entries + map measure (`ibe`/`abe`)                                                           | ~0.13k                   | **Drained (wave-108)** → `workbook/chart-legend-layout/`                                                                                                                                                                                      |
| Manual layout (`helper455`/`456`/`458`)                                                              | ~0.11k                   | **Drained (wave-108)** → `workbook/chart-legend-plot/`                                                                                                                                                                                        |
| Combo render groups (`helper532`)                                                                    | ~0.06k                   | **Drained (wave-108)** → `workbook/chart-combo-groups/`                                                                                                                                                                                       |
| Used-range bounds (`UTe`/`HTe`)                                                                      | ~0.07k                   | **Drained (wave-108)** → `workbook/worksheet-used-range/`                                                                                                                                                                                     |
| DATEDIF (`helper876`)                                                                                | ~0.07k                   | **Drained (wave-108)** → `workbook/formula-datedif/`                                                                                                                                                                                          |
| Complex real/imag (`helper893`/`$4`)                                                                 | ~0.14k                   | **Drained (wave-108)** → `workbook/formula-complex/`                                                                                                                                                                                          |
| CUMIPMT + DB (`E0e`/`D0e`)                                                                           | ~0.13k                   | **Drained (wave-108)** → `workbook/formula-financial/`                                                                                                                                                                                        |
| CF date/color-scale/data-bar (`oht`/`Nht`/`Pht`)                                                     | ~0.21k                   | **Drained (wave-108)** → `workbook/conditional-format/`                                                                                                                                                                                       |
| Compose box factory (`helper713`)                                                                    | ~0.06k                   | **Drained (wave-109)** → `workbook/compose-jsx-lower/`                                                                                                                                                                                        |
| MATCH (`DZe`)                                                                                        | ~0.06k                   | **Drained (wave-109)** → `workbook/formula-match/`                                                                                                                                                                                            |
| Stacked domain (`helper389`/`390`/`_ye`)                                                             | ~0.09k                   | **Drained (wave-109)** → `workbook/chart-stacked-domain/`                                                                                                                                                                                     |
| Series marker (`helper480`)                                                                          | ~0.06k                   | **Drained (wave-109)** → `workbook/chart-line-series/`                                                                                                                                                                                        |
| Sunburst layout (`BSe`+cluster)                                                                      | ~0.21k                   | **Drained (wave-109)** → `workbook/chart-sunburst-layout/`                                                                                                                                                                                    |
| Element text layout (`XDe`/`helper676`)                                                              | ~0.14k                   | **Drained (wave-109)** → `workbook/element-text-layout/`                                                                                                                                                                                      |
| Data-label text (`helper495`)                                                                        | ~0.08k                   | **Drained (wave-109)** → `workbook/chart-data-labels/`                                                                                                                                                                                        |
| Shape.add normalize (`hze`)                                                                          | ~0.07k                   | **Drained (wave-109)** → `workbook/shape-element/`                                                                                                                                                                                            |
| Round-rect path (`NSe`)                                                                              | ~0.06k                   | **Drained (wave-109)** → `workbook/shape-path/`                                                                                                                                                                                               |
| Criteria predicate (`I8e`/`F8e`+owned)                                                               | ~0.21k                   | **Drained (wave-110)** → `workbook/formula-criteria-predicate/`                                                                                                                                                                               |
| Table cells snapshot (`iOe`+cluster)                                                                 | ~0.19k                   | **Drained (wave-110)** → `workbook/compose-element-snapshot/`                                                                                                                                                                                 |
| Flatten compose children (`QOe`/`helper712`)                                                         | ~0.09k                   | **Drained (wave-110)** → `workbook/compose-jsx-lower/`                                                                                                                                                                                        |
| CUMPRINC/DDB/PPMT (`T0e`/`O0e`/`P0e`)                                                                | ~0.17k                   | **Drained (wave-110)** → `workbook/formula-financial/`                                                                                                                                                                                        |
| Path commands bbox (`tTe`)                                                                           | ~0.06k                   | **Drained (wave-110)** → `workbook/shape-path/`                                                                                                                                                                                               |
| Unique columns (`Ost`/`kst`/`Ast`)                                                                   | ~0.08k                   | **Drained (wave-110)** → `workbook/formula-unique/`                                                                                                                                                                                           |
| Table style bands (`fye`/`dye`/`helper386`+owned)                                                    | ~0.32k                   | **Drained (wave-112)** → `workbook/table-styles/`                                                                                                                                                                                             |
| Axis title paint (`helper460`+453/457/459)                                                           | ~0.08k                   | **Drained (wave-111)** → `workbook/chart-axis-ticks/`                                                                                                                                                                                         |
| Slice mid labels (`ube`/`dbe`)                                                                       | ~0.10k                   | **Drained (wave-111)** → `workbook/chart-pie-series/`                                                                                                                                                                                         |
| Pastel materials (`Zbe`/`helper519`)                                                                 | ~0.07k                   | **Drained (wave-111)** → `workbook/three-chart-paint/`                                                                                                                                                                                        |
| Error bars (`fxe`/`helper527`+owned)                                                                 | ~0.10k                   | **Drained (wave-111)** → `workbook/chart-line-series/`                                                                                                                                                                                        |
| Title layout (`lSe`+547–549)                                                                         | ~0.14k                   | **Drained (wave-111)** → `workbook/chart-legend-plot/`                                                                                                                                                                                        |
| Card lines (`helper562`/`563`)                                                                       | ~0.08k                   | **Drained (wave-111)** → `workbook/chart-card-paint/`                                                                                                                                                                                         |
| Waterfall connector label (`fCe`)                                                                    | ~0.06k                   | **Drained (wave-111)** → `workbook/chart-waterfall-bar/`                                                                                                                                                                                      |
| Connector route path (`pTe`)                                                                         | ~0.06k                   | **Drained (wave-111)** → `workbook/shape-path-endpoints/`                                                                                                                                                                                     |
| Code-block position (`bAe`+owned)                                                                    | ~0.11k                   | **Drained (wave-111)** → `workbook/presentation-code-block/`                                                                                                                                                                                  |
| Tick planner (`helper440`+Iye/Lye/Rye)                                                               | ~0.21k                   | **Drained (wave-112)** → `workbook/chart-axis-ticks/`                                                                                                                                                                                         |
| Plot-area reserve (`helper546`)                                                                      | ~0.05k                   | **Drained (wave-112)** → `workbook/chart-scatter-axes/`                                                                                                                                                                                       |
| Rounded-rect arcTo (`swe`/`Swe`)                                                                     | ~0.10k                   | **Drained (wave-112)** → `workbook/shape-path/`                                                                                                                                                                                               |
| Stroke shape line (`Lwe`/`helper648`)                                                                | ~0.10k                   | **Drained (wave-112)** → `workbook/shape-geometry-paint/`                                                                                                                                                                                     |
| Scale domain helpers (`helper388`/`391`/`403`/`Mye`)                                                 | ~0.28k                   | **Drained (wave-113)** → `workbook/chart-group-scales/`                                                                                                                                                                                       |
| Axis paint (`helper433`/`438`/`RCe`/`KSe`)                                                           | ~0.30k                   | **Drained (wave-113)** → `workbook/chart-axis-ticks/` + `chart-paint/`                                                                                                                                                                        |
| Treemap paths/labels (`helper475`/`PSe`)                                                             | ~0.15k                   | **Drained (wave-113)** → `workbook/chart-treemap-tiles/`                                                                                                                                                                                      |
| Series peels (`hxe`/`Cxe`/`cxe`/`Oxe`)                                                               | ~0.35k                   | **Drained (wave-113)** → area/radar/trendline/scatter-scale                                                                                                                                                                                   |
| Data-table + sparklines (`UCe`/`JCe`)                                                                | ~0.14k                   | **Drained (wave-113)** → `chart-data-table/` + `canvas-paint/`                                                                                                                                                                                |
| Connector stroke unlock (`Qwe`+611/618–623)                                                          | ~0.37k                   | **Drained (wave-113)** → `workbook/shape-geometry-paint/`                                                                                                                                                                                     |
| Rounded connector corner (`FPe`)                                                                     | ~0.05k                   | **Drained (wave-113)** → `workbook/image-connector/`                                                                                                                                                                                          |
| Bar plot scales (`hbe`+407/410/414/497/mbe)                                                          | ~0.08k                   | **Drained (wave-114)** → `workbook/chart-group-scales/`                                                                                                                                                                                       |
| Map legend ramp + accent (`helper489`/Wye/Uye)                                                       | ~0.07k                   | **Drained (wave-114)** → legend-layout + theme-color                                                                                                                                                                                          |
| Legend row pack (`sbe`/`cbe`)                                                                        | ~0.09k                   | **Drained (wave-114)** → `workbook/chart-legend-layout/`                                                                                                                                                                                      |
| Secondary value axis (`_xe`+530/531)                                                                 | ~0.17k                   | **Drained (wave-114)** → `workbook/chart-axis-ticks/`                                                                                                                                                                                         |
| Chart number format (`helper439`/`478` SSF)                                                          | ~0.03k                   | **Drained (wave-114)** → `workbook/chart-axis-ticks/`                                                                                                                                                                                         |
| Manual layout rect (`$L`/558/559)                                                                    | ~0.06k                   | **Drained (wave-114)** → `workbook/chart-plot-layout/`                                                                                                                                                                                        |
| Clip paint rect (`helper601`)                                                                        | ~0.09k                   | **Drained (wave-114)** → `workbook/canvas-paint/`                                                                                                                                                                                             |
| Cubic bezier split (`helper626`/`627`)                                                               | ~0.06k                   | **Drained (wave-114)** → `workbook/path-geometry/`                                                                                                                                                                                            |
| Embedded workbook paint (`BTe`/`VTe`/`WTe`)                                                          | ~0.11k                   | **Drained (wave-114)** → `workbook/text-frame-embeds/`                                                                                                                                                                                        |
| Semantic JSX tags (`MOe`/`XOe`/`YOe`/`ZOe`+Binding154)                                               | ~0.55k                   | **Drained (wave-115)** → `workbook/compose-jsx-lower/`                                                                                                                                                                                        |
| Layout blob (`PDe`/`BDe`/`FDe`/`vOe`+693)                                                            | ~0.35k                   | **Drained (wave-115)** → `workbook/compose-element-snapshot/`                                                                                                                                                                                 |
| Dead chart paint (`CSe`/`SSe`/560)                                                                   | ~0.09k                   | **Deleted (wave-115)**                                                                                                                                                                                                                        |
| Log chart scale (`yye`)                                                                              | ~0.04k                   | **Drained (wave-116)** → `workbook/chart-group-scales/`                                                                                                                                                                                       |
| Diagonal stroke (`helper593`)                                                                        | ~0.04k                   | **Drained (wave-116)** → `workbook/canvas-paint/`                                                                                                                                                                                             |
| Semantic tag style (`ROe`+704–711)                                                                   | ~0.17k                   | **Drained (wave-116)** → `workbook/compose-jsx-lower/`                                                                                                                                                                                        |
| Element fit (`LIe`/`RIe`/`Y$`)                                                                       | ~0.10k                   | **Drained (wave-116)** → `workbook/presentation-element-fit/`                                                                                                                                                                                 |
| Formula token/args (`$Xe`+836–853/`BXe`)                                                             | ~0.58k                   | **Drained (wave-116)** → formula-token-utils + dep-scc                                                                                                                                                                                        |
| XLSX validate (`Tpt`/`Apt`/`kpt`+catalog)                                                            | ~0.60k                   | **Drained (wave-116)** → `workbook/xlsx-workbook-validate/`                                                                                                                                                                                   |
| Presentation edit (`lLe`..`bLe`)                                                                     | ~0.25k                   | **Drained (wave-117)** → `workbook/presentation-edit/`                                                                                                                                                                                        |
| HTML cell/table helpers (`Ypt`..`1013`/`Qpt`)                                                        | ~0.55k                   | **Drained (wave-117)** → `workbook/html-paste/`                                                                                                                                                                                               |
| Chart raster (`Amt`..`Zmt`/`jmt`)                                                                    | ~0.56k                   | **Drained (wave-117)** → `workbook/chart-raster/`                                                                                                                                                                                             |
| Grid frame layout (`helper672`/`ADe`+`jDe`)                                                          | ~0.31k                   | **Drained (wave-118)** → `workbook/grid-frame-layout/`                                                                                                                                                                                        |
| Formula SORT/FILTER (`helper967`..`Ict`/`Tct`/`Pct`)                                                 | ~1.28k                   | **Drained (wave-118)** → `workbook/formula-sort-filter/`                                                                                                                                                                                      |
| Formula criteria/SUMIF/RANDARRAY (`helper976`..`Rut`/`Llt`/`Lut`)                                    | ~1.35k                   | **Drained (wave-119)** → `workbook/formula-criteria-lookup/`                                                                                                                                                                                  |
| Formula TEXTSPLIT/REGEX (`vdt`..`Jdt`/`bdt`/`Edt`)                                                   | ~0.70k                   | **Drained (wave-119)** → `workbook/formula-text-split/`                                                                                                                                                                                       |
| CF icon-set + color-scale (`Fht`/`Iht`)                                                              | ~0.11k                   | **Drained (wave-119)** → `workbook/cf-icon-color-scale/`                                                                                                                                                                                      |
| Formula call-dispatch (`helper996`..`Hft`/`Nft`/`eft`/`Tft`)                                         | ~0.79k                   | **Drained (wave-120)** → `workbook/formula-call-dispatch/`                                                                                                                                                                                    |
| Formula range-index (`Uft`/`Wft`/`Gft`/`Kft`)                                                        | ~0.30k                   | **Drained (wave-120)** → `workbook/formula-range-index/`                                                                                                                                                                                      |
| Formula structured-ref (`qft`..`tpt`)                                                                | ~0.20k                   | **Drained (wave-120)** → `workbook/formula-structured-ref/`                                                                                                                                                                                   |
| CF cell-value compare (`Rht`)                                                                        | ~0.04k                   | **Drained (wave-120)** → `workbook/cf-icon-color-scale/`                                                                                                                                                                                      |
| Formula scalar-funcs (`isNonNullArg`..`days360`/`qQe`/`z$e`)                                         | ~2.71k                   | **Drained (wave-121)** → `workbook/formula-scalar-funcs/`                                                                                                                                                                                     |
| Bond basis + ACCRINT (`oat`/`sat`/`Kat`/`parseSettlementMaturity`..)                                 | ~0.36k                   | **Drained (wave-121)** → `workbook/formula-bond-basis/`                                                                                                                                                                                       |
| Formula financial annuity (`helper897`..`Q0e` / `w0e` / `fv`/`pmt`)                                  | ~0.63k                   | **Drained (wave-122)** → `workbook/formula-financial/`                                                                                                                                                                                        |
| Bond RECEIVED/YIELD wrappers (`lat`/`uat`/`dat`/`fat`)                                               | ~0.10k                   | **Drained (wave-122)** → `workbook/formula-bond-basis/`                                                                                                                                                                                       |
| Formula AVERAGEA + error tokens (`$3`/`Q2e`/`l4e`/`_4e`)                                             | ~0.09k                   | **Drained (wave-122)** → `workbook/formula-average-a/`                                                                                                                                                                                        |
| Shape/text/image style apply (`fze`/`gze`/`_ze` + `pze`/`mze`/`vze`)                                 | ~0.17k                   | **Drained (wave-123)** → `workbook/shape-style-apply/`                                                                                                                                                                                        |
| DSUM criteria matrix (`P8e`/`j8e`/`M8e`/`N8e`/`helper926`)                                           | ~0.08k                   | **Drained (wave-123)** → `workbook/formula-dsum-criteria/`                                                                                                                                                                                    |
| Formula AVERAGEIF + flatten (`g4e`/`helper913`/`914`)                                                | ~0.09k                   | **Drained (wave-123)** → `workbook/formula-averageif/`                                                                                                                                                                                        |
| Worksheet metadata clone (`apt`)                                                                     | ~0.04k                   | **Drained (wave-123)** → `workbook/worksheet-metadata-clone/`                                                                                                                                                                                 |
| Formula text replace (`ppt`/`mpt`)                                                                   | ~0.06k                   | **Drained (wave-123)** → `workbook/formula-text-replace/`                                                                                                                                                                                     |
| CF dxf color maps (`jht`)                                                                            | ~0.04k                   | **Drained (wave-123)** → `workbook/cf-dxf-color-maps/`                                                                                                                                                                                        |
| FILTER-by-mask (`Lst`)                                                                               | ~0.04k                   | **Drained (wave-123)** → `workbook/formula-sort-filter/`                                                                                                                                                                                      |
| Plot-area manualLayout (`bSe`)                                                                       | ~0.04k                   | **Drained (wave-123)** → `workbook/chart-plot-layout/`                                                                                                                                                                                        |
| Formula criteria shape (`a3e`/`h6e`/`helper916`/`f4e`/`d6e`)                                         | ~0.24k                   | **Drained (wave-125)** → `workbook/formula-criteria-shape/`                                                                                                                                                                                   |
| Chart axis reserve (`_be`/`vbe`/`ybe` + mid 429..436)                                                | ~0.14k                   | **Drained (wave-125)** → `workbook/chart-axis-reserve/`                                                                                                                                                                                       |
| Continuous scale (`_O`)                                                                              | ~0.04k                   | **Drained (wave-125)** → `workbook/chart-group-scales/`                                                                                                                                                                                       |
| Measure embed (`NTe`)                                                                                | ~0.04k                   | **Drained (wave-125)** → `workbook/text-frame-embeds/`                                                                                                                                                                                        |
| CF range stats (`mht`/`Sht`/`helper1020`/`1015`)                                                     | ~0.19k                   | **Drained (wave-125)** → `workbook/cf-range-stats/`                                                                                                                                                                                           |
| Chart axis scale domain (`bbe`/`helper402`/`406`/`wye`…)                                             | ~0.70k body              | **Drained (wave-126)** → `workbook/chart-axis-scale-domain/` + presentation-aid/ref + series-endpoint + formula-complex 886/892 + iSe + fill-empty + r3e                                                                                      |
| CF engine unlock (`fht`/`aht`/`kht`/`Wht`/`Ght`) + text-measure + Yut                                | ~0.9k body               | **Drained (wave-131)** → cf-engine + text-measure + formula-value-coerce + formula-and $0e + dead qxe/xwe                                                                                                                                     |
| Stroke/picture/text mids + D-stats/weeknum + CF unlock (`helper473`/`482`/`Jwe`/`639`/`l0e`/`Aht`/…) | ~0.7k body               | **Drained (wave-130)** → stroke-resolve + picture-fill-paint + text-element-build + contrast-text + formula-weeknum + formula-d-stats + eng-mids 917 + sheet-hidden twe + axis 536 + GDe + Aht/Mht                                            |
| Sheet-range-map + uuid-v4 + formula-ast-walk + paint/cfvo mids (`helper587`/`jwe`/`UEe`/`1038`/…)    | ~0.7k body               | **Drained (wave-129)** → sheet-range-map + image-svg-decode + stable-id uuid-v4 + formula-ast-walk + cfvo-resolve + paint-mids + eng-mids F1e/I1e/q1e + mid-paint Xwe/Zwe                                                                     |
| Formula eng mids + date-months + A1/matrix/DSUM/add-months + paint mids (`s1e`/`F9e`/`Mst`/…)        | ~0.80k body              | **Drained (wave-128)** → formula-eng-mids + date-months + a1-address + matrix-transpose + dsum-agg + date-add-months + compose-attach-children + doc-shape + bin-width + paint-checkbox + shape-fill/geometry-apply + mid-paint-helpers       |
| Formula BYROW/BYCOL + mids (`Yot`/`YIe`/`Uat`/`tSe`/`zye`/`Rxe`…)                                    | ~0.87k body              | **Drained (wave-127)** → formula-byrow + compose-code-children + bond-pv + chart-data-label-font + text-frame-resolve + marker/effects/table + presentation-images + unique-rows + sheet-catalog + newton + dead category-time/label-overflow |
| Formula SKEW + samples (`W4e`/`s4e`/`c4e`/`helper912`)                                               | ~0.11k                   | **Drained (wave-124)** → `workbook/formula-skew/`                                                                                                                                                                                             |
| Path ordinal colors (`helper477`)                                                                    | ~0.04k                   | **Drained (wave-124)** → `workbook/chart-path-colors/`                                                                                                                                                                                        |
| Draw shape paths (`helper608`)                                                                       | ~0.04k                   | **Drained (wave-124)** → `workbook/shape-path/`                                                                                                                                                                                               |
| Icon badge + rating bars (`lwe`/`helper595`)                                                         | ~0.08k                   | **Drained (wave-124)** → `workbook/icon-set-paint/`                                                                                                                                                                                           |
| Nice chart scale (`helper398`)                                                                       | ~0.04k                   | **Drained (wave-124)** → `workbook/chart-group-scales/`                                                                                                                                                                                       |
| Placement-or-bbox (`MTe`)                                                                            | ~0.04k                   | **Drained (wave-124)** → `workbook/floating-placement/`                                                                                                                                                                                       |
| Chart categories (`helper419`/`Aye`/`jye`)                                                           | ~0.06k                   | **Drained (wave-124)** → `workbook/chart-category-axes/`                                                                                                                                                                                      |
| Shared-formula A1 shift (`helper589`..`592`)                                                         | ~0.12k                   | **Drained (wave-124)** → `workbook/formula-shared-refs/`                                                                                                                                                                                      |
| Dynamic-array / XLDAPR meta (`opt`..`bpt`/`_pt`)                                                     | ~0.25k                   | **Drained (wave-124)** → `workbook/xlsx-dynamic-array-meta/`                                                                                                                                                                                  |
| Hierarchy data-table paint (`DSe`..`ISe`)                                                            | ~0.16k                   | **Drained (wave-124)** → `workbook/chart-data-table/`                                                                                                                                                                                         |
| Text-frame style (`helper689`+`cOe`..`hOe`/`EOe`)                                                    | ~0.14k                   | **Drained (wave-124)** → `workbook/text-frame-style/`                                                                                                                                                                                         |

## Why it stays in `boundaries/`

Full Stage-3 rewrite of a ~230kLOC flat dump is not a single-session deliverable. The file is a documented **vendor-runtime** terminal so full-tree QG does not false-fail on cryptic bindings / flat size. The `// Flat boundary … vendored` header is the per-file exemption (eligible only under `boundaries/`).

## Exit criteria

1. Split coherent domains out of the dump into `workbook/` (spreadsheet, presentation, document, formula, chart helpers).
2. Replace this path with a thin barrel (or delete once all consumers remapped).
3. Clear `openBoundary` and drop the vendored flat-boundary header.
4. `quality-gate.ts` on the promoted `workbook/*` modules (not `--vendored`).

## Wave-1 progress

- Extracted ~1.2k LOC: OOXML shape-geometry enum + 55 chart/presentation proto name-map bridges.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.

## Wave-2 progress

- Extracted theme scheme color sets, named CSS colors, color transform/parse helpers, `WorkbookColor`, and `PatternFill`.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.

## Wave-3 progress

- Extracted classic CSS named colors (Eae), ChatGPT theme + style defaults (Mae/jae), slide placeholder role maps, and warm alternate ChatGPT theme (Sle).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.

## Wave-4 progress

- Extracted Fill value object (`workbookCt`), gradient-kind maps, fill proto helpers, CSS value tokenizers, and gradient fill string parser.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~Stylesheet Bae/Binding424~~ (done wave-5).

## Wave-5 progress

- Extracted Stylesheet (`Bae`/`Binding424`), SpreadsheetFont/BorderSide/Borders/CellXf/NumberFormat (`Binding419`–`423`), and stylesheet helpers (border/fill clone, deep-clone, theme dxf).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept; Tae color resolver wired into helpers.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~Line Binding431~~ (done wave-6).

## Wave-6 progress

- Extracted Line stroke VO (`Binding431`), dash/compound style parsers + proto↔name maps (`Binding427`–`430`, `Yae`, `Xae`), and `ensureLineInit` (`Binding432`).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~color-resolve helpers~~ (done wave-7); TextStyle VO (`workbookVt` / Binding437 cluster).

## Wave-7 progress

- Extracted color-resolve helpers (`Sae`, `Cae`, `wae`, hex/value accessors, `Tae`, `workbookSt`) → `workbook/color-resolve/`.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept; Tae wire retained for stylesheet.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~TextStyle VO + alignment/autofit/caps~~ (done wave-8); ~~text-style CSS parsers~~ (done wave-9); worksheet/spreadsheet core.

## Wave-8 progress

- Extracted TextStyle VO (`workbookVt`), Binding437, `workbookBt` ensure, and alignment/autofit/capitalization helpers (`$f`/`$ae`/helper100–102, `eoe`/`toe`/`roe`/helper105, `ioe`/`aoe`) → `workbook/text-style/`.
- Left `noe` / `workbookYt` / helper103–104 in boundary (shadow-CSS + declaration parsers); wired `noe` into TextStyle.shadow.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~text-style CSS parsers~~ (done wave-9); worksheet/spreadsheet core clusters, or residual presentation placeholder helpers.

## Wave-9 progress

- Extracted CSS declaration parsers (`workbookHelper 80/81`, `iae`/`aae`/`oae`…`hae`, `tae`/`nae`), shadow-CSS (`workbookHelper 82/83`, `_ae`, `noe`), and TextStyle patch helpers (`workbookYt`, `workbookHelper 103/104`) → `workbook/text-style/`.
- Left `gae`/`workbookEt` EMU converters in boundary (still used by geometry mid-body); `rae`/`Binding411` re-exported as ensures.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~placeholder-style helpers + font-metrics~~ (done wave-10); worksheet/spreadsheet core clusters, or residual TextStyle style-resolve (`helper110`/`workbookT`).

## Wave-10 progress

- Extracted presentation placeholder-style helpers (`Vae`/`Uae`/`Wae`/`helper97`–`99`/`Gae`/`Kae`/`qae`/`Hae`) → `workbook/presentation-theme/placeholder-style.ts`.
- Extracted font-family match + OffscreenCanvas metrics cache + grapheme segmenter (`soe`…`goe`, `workbookMt`/`Ht`, `workbookPt`/`Ft`, `Soe`) → `workbook/font-metrics/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, and TextStyle style-resolve (`helper106`–`110`/`workbookT`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~TextStyle style-resolve + glyph-advance~~ (done wave-11); worksheet/spreadsheet core clusters (range/table/drawing), or math-plain-text helpers near the drained locus.

## Wave-11 progress

- Extracted TextStyle style-resolve (`helper106`–`111`, `_p`, `workbookT`/`workbookGt`/`Binding438`) → `workbook/text-style/`.
- Extracted glyph-advance / ink-bounds cache (`$p` / `Binding456`) → `workbook/font-metrics/glyph-advance-cache.ts`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, and `ooe` geometry helper in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Next: ~~math-plain-text (Coe/helper121+)~~ (done wave-12); ~~MathML cluster (`helper127`+/Doe/Eoe)~~ (done wave-13); ~~font-stack helpers (`helper147`+)~~ (done wave-14); math-layout engine (`lse`/`use`/`helper154+`/`Hse`), or worksheet/spreadsheet core if a clean slice appears.

## Wave-12 progress

- Extracted math LaTeX parser (`Coe` / `Binding464`) + AST→plain-text helpers (`helper121`–`126`, `woe`, `Toe`) + unicode maps (`Binding457`–`463`) → `workbook/math-plain-text/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and MathML cluster (`helper127`+/Doe/Eoe) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~MathML cluster (`helper127`+/Doe/Eoe)~~ (done wave-13); ~~font-stack helpers (`helper147`+)~~ (done wave-14); math-layout engine (`lse`/`use`/`helper154+`/`Hse`), or worksheet/spreadsheet core if a clean slice appears.

## Wave-13 progress

- Extracted MathML codec (`helper127`–`146`, `Doe`/`Eoe`, token splitters, attr maps, `Binding466`–`482` / `$m`) → `workbook/math-ml/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and font-stack helpers (`helper147`+) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~font-stack / math-font helpers (`helper147`+/Binding483+)~~ (done wave-14); math-layout engine (`lse`/`use`/`helper154+`/`Hse`), or worksheet/spreadsheet core if a clean slice appears.

## Wave-14 progress

- Extracted CSS font-stack (`helper147`–`149`, `sse`, `Binding483`–`489`) + math-font names (`Binding490`–`494`) + TeX layout constants (`helper150`–`151` / `_h` / `cse`) + typography units (`helper152`–`153` / `_workbookDt` / `Binding495`–`496` / `workbookUt`) → `workbook/font-stack/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and math-layout engine (`lse`/`use`/`helper154+`/`Hse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~math-layout engine (`lse`/`use`/`helper154+`/`Hse`)~~ (done wave-15); worksheet/spreadsheet core if a clean slice appears, or effects/`_g` cluster.

## Wave-15 progress

- Extracted math-layout engine (`lse`/`use`/`helper154`–`180` / `*se` node layouters / `Hse` + `Binding497`–`515`) → `workbook/math-layout/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~effects/`_g` + document-style cluster~~ (done wave-16); worksheet/spreadsheet core if a clean slice appears, or placeholder-resolve neighbors.

## Wave-16 progress

- Extracted effects/`_g` (`Binding516`) + contiguous document-style / theme-style cluster (`helper181`–`188`, `workbookLt`/`It`/`Nt`/`Rt`, `WorkbookAt`, `workbookDollar`) → `workbook/document-style/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~placeholder-resolve / `_workbookTt` neighbors~~ (done wave-17); `yce`/text-layout engine (`kce`/`j_`) if a clean slice appears, or worksheet/spreadsheet core.

## Wave-17 progress

- Extracted `_workbookTt` + placeholder-resolve neighbors (`helper189`–`193`, `ece`/`tce`/`nce`, `Binding521`) + theme typeface (`helper194`–`196`, `Binding522`) + contiguous layout helpers through auto-number format (`helper197`/`198`, `rce`/`ice`, `ace`/`$g`, docx-scheme parsers, `i_`/`a_`/`vce`) → `workbook/placeholder-resolve/`.
- Lifted DOCX scheme constants (`v_`/`y_`/`b_`/`x_`/`S_`/`C_`/`w_`/`T_`/`O_`/`A_`) out of `kce`; left `yce` + text-layout engine (`kce`/`j_`) in boundary.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~`yce`/text-layout engine (`kce`/`j_`)~~ (done wave-18); worksheet/spreadsheet core if a clean slice appears.

## Wave-18 progress

- Extracted `yce` + line-box helpers (`bce`…`Oce`) + text-layout engine (`kce`/`j_`) with lifted constants (`l_`/`u_`/`d_`/`f_`/`p_`/`m_`/`h_`/`g_`/`__`/`E_`/`D_`/`k_`) → `workbook/text-layout/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary (engine uses a local `remainingSpaceAfterPriorOverlap` stand-in).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~canvas line-dash / gradient / pattern fill~~ (done wave-19); worksheet/spreadsheet core if a clean slice appears, or fill-resolve neighbors (`helper200+`/`workbookHelper212`).

## Wave-19 progress

- Extracted canvas line-dash (`M_`/`N_`) + gradient stop/blend (`Ace`…`L_`) + linear/radial gradient painters (`Pce`/`Fce`/`Ice`/`Lce`) + pattern tile painters (`R_`/`z_`/`Rce`) + pattern fill resolve (`zce`…`Wce`/`Gce`) → `workbook/canvas-fill/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~fill-resolve neighbors (`helper200+` / picture-fill / `workbookHelper212`)~~ (done wave-20); worksheet/spreadsheet core if a clean slice appears.

## Wave-20 progress

- Extracted picture pixel/effect pipeline (`helper200`…`ule`/`Binding542`) + fill emptiness/gradient-kind helpers (`dle`/`fle`/`ple`) + picture-fill (`mle`/`hle`/`gle`) + canvas fill-resolve (`workbookHelper212`/`Binding543`) → `workbook/canvas-fill/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~`helper213`/`yle` text canvas renderer (+ `helper214`)~~ (done wave-21); worksheet/spreadsheet core if a clean line-range slice appears, or text-box inset neighbors (`ble`/`Binding215+`).

## Wave-21 progress

- Extracted polar/shadow offset (`helper213`/`Binding544`/`Binding545`) + explicit-none fill (`helper214`) + line-cap/join (`_le`/`vle`) + text canvas renderer (`yle`/`Binding546`/`Binding547`) → `workbook/text-canvas/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~text-box inset neighbors (`ble`/`Binding215+`/`workbookZ`)~~ (done wave-22); worksheet/spreadsheet core if a clean line-range slice appears, or design-token Binding558+ neighbors.

## Wave-22 progress

- Extracted default text-box insets (`ble`/`Binding548`–`550`) + inset resolvers (`Binding215`–`217`/`xle`/`Binding219`) + master paragraph defaults (`Binding218`) + layout box (`Binding220`) + layout/render (`workbookQ`/`Binding221`/`workbookX`) + cluster ensure (`workbookZ`) → `workbook/text-box/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~design-token Binding558+ / WorkbookTheme~~ (done wave-23); worksheet/spreadsheet core or SSF Binding571 if a clean npm/line-range path appears.

## Wave-23 progress

- Extracted design-token resolvers (`Binding558`–`565`) + default scheme colors/text styles (`Binding566`/`_y`) + `WorkbookTheme` (`workbookJ`/`Binding567`–`568`/`workbookY`) + theme-from-proto (`helper222`) + scheme color aliases (`Binding569`–`570`) → `workbook/design-tokens/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and SSF `Binding571` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~SSF Binding571~~ (done wave-24); worksheet/spreadsheet core if a clean line-range slice appears.

## Wave-24 progress

- Replaced inlined SSF `Binding571` (`ssf@0.11.2`, version + `DO_NOT_EXPORT_SSF` fingerprint) with `vendor/ssf` npm shim; boundary keeps thin `workbookBinding571 = () => workbookSsf` for existing `toEsm(...)` call-sites.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shim + boundary `--no-cache --allow-open-boundaries`; vendor-npm-preflight PASS.
- Boundary LOC ≈ 177434.
- Next: ~~jStat qXe + Bessel JXe~~ (done wave-25); worksheet/spreadsheet core if a clean line-range slice appears, or post-SSF cell-XF helpers (helper223+).

## Wave-25 progress

- Replaced inlined jStat `qXe` (`jstat@1.9.6`, UMD `jStat` fingerprint) + Bessel `JXe` (`bessel@1.0.2`, `DO_NOT_EXPORT_BESSEL` fingerprint) with `vendor/jstat` + `vendor/bessel` npm shims; boundary keeps thin `qXe`/`JXe` factories for existing `toEsm(..., 1)` call-sites.
- Worksheet/spreadsheet core still not cuttable as a clean line-range cluster (RangeFormat Binding589+ entangled with in-boundary VO classes; cell-XF helper223–231 is the next contiguous post-SSF neighbor ~0.6–3k LOC).
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shims + boundary `--no-cache --allow-open-boundaries`; vendor-npm-preflight PASS.
- Boundary LOC ≈ 177434.
- Next: ~~post-SSF cell-XF / numFmt / col-row extents (helper223–Binding586)~~ (done wave-26); RangeFormat Binding589 once VO deps (workbookBinding337/339/420/421) are drained.

## Wave-26 progress

- Extracted cell-XF apply/color helpers (`helper223`–`227`/`Cle`) + SSF numFmt table (`Binding572`–`577`) + default digit-width (`helper228`/`Binding578`–`581`) + SSF cell-value format (`wle`/`helper229`/`Binding582`–`583`) + col-row extents (`helper230`–`231`/`Binding584`) + font-face name strip (`Binding585`–`586`) → `workbook/cell-xf-format/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and RangeFormat `Binding589` (entangled with in-boundary VOs) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~worksheet helpers after Binding586 (`Tle`/`Binding232`–`Rle`)~~ (done wave-27); RangeFormat Binding589 once VO deps (workbookBinding337/339/420/421) are drained.

## Wave-27 progress

- Extracted worksheet autofit cluster: solid-fill (`Tle`) + merge text-style (`Binding232`/`Binding587`) + dropdown padding (`Ele`/`$y`/`Binding233`/`Binding588`) + col/row span parse (`Dle`/`Ole`) + styleIndex maps (`Binding234`–`236`) + measure cell text (`kle`/`Ale`/`Binding237`) + format/table/validation helpers (`Binding238`–`239`/`jle`/`Mle`/`Nle`/`Ple`/`Fle`) + autofit columns/rows (`Ile`/`Lle`) + cluster ensure (`Rle`) → `workbook/worksheet-autofit/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and RangeFormat `Binding589` (entangled with in-boundary VOs Binding337/339/420/421) in boundary.
- Vendor scan: no additional stock npm fingerprints in the post-586 locus (SSF/jStat/Bessel already drained).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~RangeFormat Binding589 once VO deps drained~~ (done wave-28); next contiguous post-RangeFormat neighbor (icon-set Binding594+) or remaining pivot VO cluster.

## Wave-28 progress

- Extracted RangeFormat unlock cluster: horizontalAlignment enum (`Binding337`, peeled from pivot `Binding339` init) + fill/font/border clone helpers (`helper240`–`244`) + 2D array shape (`zle`/`Ble`) + border/color/alignment helpers (`helper245`–`255`/`Ule`/`Wle`/`_b`/`Gle`/`Kle`/`qle`/`Jle`) + RangeFormatFill/RangeFormat/Font/Borders/BorderEdge (`Binding589`–`593`) + cluster ensure (`Yle`) → `workbook/range-format/`.
- VO status: `Binding420`/`421` already drained (wave-5 stylesheet); `Binding337` drained this wave; `Binding339` remains as pivot-enum init for 335/336/338 only (no longer required by RangeFormat).
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, and `_workbookEt`/`Qse` clamp helpers in boundary.
- Boundary wired via line-range drain + AST Binding337 peel (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-RangeFormat icon-set + text-run/paragraph VOs~~ (done wave-29); remaining pivot VO surface (335/336/338) or next contiguous Qle/font-weight cluster.

## Wave-29 progress

- Extracted conditional-format icon-set catalog (`Binding594`–`596`) + name/count helpers (`helper256`–`259`) → `workbook/icon-set/`.
- Extracted TextRun/TextRuns/Paragraph/Paragraphs VOs (`Binding597`–`603`/`Xle`/`Zle`) + paragraphStyle clone (`helper260`) + list/numbered defaults (`Binding604`–`612`/`helper261`) → `workbook/text-run/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~contiguous post-text-run `Qle`/font-weight CSS / style token maps~~ (done wave-30); Binding622/623 text-selection class or remaining pivot VO surface (335/336/338).

## Wave-30 progress

- Extracted Tailwind-like style token maps (`Qle`/`Binding613`–`619`/`$le`/`eue`/`tue`/`nue`/`rue`) + className parser (`helper262`) + cluster ensure (`Binding620`) → `workbook/style-tokens/`.
- Extracted style-config helpers (`helper263`–`271`/`iue`/`aue`/`_x`) + ensure (`Binding621`, peeled from shared var with Binding622/623) → `workbook/style-tokens/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, pivot enums `Binding335`/`336`/`338`, and text-selection `Binding622`/`623` in boundary.
- Boundary wired via line-range drain + Binding621 peel (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~Binding622/623 text-selection class (WorkbookClass6)~~ (done wave-31); remaining pivot VO surface (335/336/338) or WorkbookClass4 / helper272+ detached-text cluster.

## Wave-31 progress

- Extracted TextSelection VO (`Binding622`/`WorkbookClass6`) with method peels (compare + replace/insertAfter/run-split/mutation helpers) → `workbook/text-selection/`.
- Extracted cluster ensure (`Binding623`) → `workbook/text-selection/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, pivot enums `Binding335`/`336`/`338`, and WorkbookClass4 / helper272+ detached-text cluster in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~WorkbookClass4 / helper272–285 detached-text cluster~~ (done wave-32); remaining pivot VO surface (335/336/338) or next contiguous post-helper286 geometry cluster.

## Wave-32 progress

- Extracted detached-text input helpers (`helper272`–`285` + math/run/paragraph converters) → `workbook/detached-text/`.
- Extracted DetachedText VO (`Binding626`/`WorkbookClass4`) with style accessor + style-apply peels → `workbook/detached-text/`.
- Extracted stub host (`Binding625`) + helper/class ensures (`workbookK`/`Binding627`) → `workbook/detached-text/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-helper286 geometry/transform cluster (helper286–290 / Class11)~~ (done wave-33); remaining pivot VO surface (335/336/338) or next contiguous post-kue/plugin / helper291+ preset-shape cluster.

## Wave-33 progress

- Extracted element-frame resolver (`helper286`) + rotation unit helpers (`helper287`–`289` / Binding629) → `workbook/geometry-transform/`.
- Extracted canvas transform helpers (`Eue` / `helper290`) + FrameBbox VO (`Binding632` / WorkbookClass11) → `workbook/geometry-transform/`.
- Extracted deps/rotation/class ensures (`Binding628` / `$x` / `Oue`) → `workbook/geometry-transform/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-kue / helper291+ preset-shape formula cluster~~ (done wave-34); remaining pivot VO surface (335/336/338) or next contiguous post-Rue / id-gen cluster.

## Wave-34 progress

- Extracted granola plugin accessors (`kue`/`Aue`/`jue`/`Mue`) + slots (`Binding633`–`636`) → `workbook/preset-shape/`.
- Extracted preset-shape registry (`WorkbookW`/`helper291`/`Binding637`–`638`) + formula engine (`Pue`/`helper292`–`294`/`Binding639`–`641`) → `workbook/preset-shape/`.
- Extracted guide eval + text-frame rect (`Iue`/`helper295`–`297`/`Binding642`–`644`) → `workbook/preset-shape/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, Rue/zue/Bue/Vue/Hue autofit helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Rue autofit / UUID helpers (workbookHelper298+)~~ (done wave-35); remaining pivot VO surface (335/336/338) or next contiguous post-workbookHelper303 style-ref / element VO cluster.

## Wave-35 progress

- Extracted text-element autofit metrics (`Rue`/`zue`/`Bue`/`Vue`) + deps ensure (`Hue`) → `workbook/text-element-autofit/`.
- Extracted UUID / hash / scoped-id helpers (`Uue`/`workbookHelper298`–`302`/`workbookV`/`Gue`/`Kue`/`que`/`Jue`/`tde`/`nde`) + constants/ensures (`workbookH`/`Binding647`) → `workbook/stable-id/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, style-ref `workbookHelper303`/`ide`, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-workbookHelper303 style-ref / `_workbookZ` element VO~~ (done wave-36); remaining pivot VO surface (335/336/338) or next contiguous post-ode mime-sniff / helper304+ cluster.

## Wave-36 progress

- Extracted style-ref helpers (`workbookHelper303`/`ide`) + positive-id guard (`ade`) → `workbook/slide-element/`.
- Extracted base slide Element VO (`_workbookZ`) + cluster ensure (`workbookB`) → `workbook/slide-element/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, mime-sniff `ode`/`sde`/Binding648+, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-ode mime-sniff / Binding648–654 / sde/pde/mde~~ (done wave-37); remaining helper304+ border-radius/utility parsers, or pivot VO surface (335/336/338).

## Wave-37 progress

- Extracted content-type + magic-byte mime sniff (`ode`/`Binding648`/`sde`) → `workbook/image-mime/`.
- Extracted PNG/GIF/JPEG/WEBP size readers + probe (`Binding649`/`cde`/`lde`/`ude`/`dde`/`fde`/`Binding650`/`pde`) → `workbook/image-mime/`.
- Extracted object-fit contain/cover + letterbox helpers (`Binding651`–`654`/`mde`) → `workbook/image-mime/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, helper304+ border-radius/utility parsers (`hde`/`gde`/`_de`/`Binding655`…), and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~helper304+ border-radius / utility-class / shadow parsers~~ (done wave-38); remaining pivot VO surface (335/336/338), or post-Mde image/shape VO cluster.

## Wave-38 progress

- Verified helper82/83 are text-style re-exports only (no residual boundary bodies); workbookHelper68/`workbookCt` already drained — helper304+ peel is cycle-free.
- Extracted border-radius tokens + shape utility-class parser + borderRadius coerce + shadow→effectReference (`hde`/`gde`/`_de`/`helper304`/`Binding655`/`vde`/`yde`/`helper305`/`bde`) → `workbook/shape-utility/`.
- Extracted contiguous path-geometry helpers (`xde`/`Sde`/`helper306`–`310`/`Cde`/`wde`/`Tde`/`Ede`/`Dde`/`Ode`/`kde`/`Ade`/`jde`) → `workbook/path-geometry/`.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, `Mde`/image+shape VO neighbors (`Binding656`/`Nde`/`$S`/…), and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Mde image/shape VO cluster~~ (done wave-39); Binding660 Image class, or pivot Binding335/336/338 + Class53 if a clean peel appears.

## Wave-39 progress

- Extracted roundRect adj helpers (`Binding656`/`Nde`/`$S`/`Pde`) → `workbook/image-source/`.
- Extracted image payload / options normalize (`Fde`/`Ide`/`helper311`–`313`/`Lde`/`Rde`/`zde`/`Bde`/`Vde`/`Ude`/`Wde`/`Hde`/`Gde`/`Kde`) → `workbook/image-source/`.
- Extracted constants (`Binding657`/`qde`/`Binding658`/`Jde`/`Binding659`) → `workbook/image-source/`; left Binding660 Image class + slim Binding661 in boundary.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, thin `Mde` ensure, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~Binding660 Image class~~ (done wave-40); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Yde chart/thread VO cluster.

## Wave-40 progress

- Extracted Binding660 Image element VO → `workbook/image-element/`.
- Extracted Binding661 drained ensure half → `ensureImageElementInit`; thin residual Binding661 keeps `workbookEt` + `Mde`.
- Left thin `Mde` in boundary (Binding412 → `gae` intentionally retained).
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Yde thread/chart/CF mutation builders~~ (done wave-41); sparkline Sfe+ / data-validation Efe+, or pivot Binding335/336/338 + Class53 if cleanly separable.

## Wave-41 progress

- Extracted thread mutation builders (`Yde`/`Xde`/`Zde`) → `workbook/mutation-ops/`.
- Extracted chart.add/set builders (`Qde`/`$de`/`efe`…`helper314`) → `workbook/mutation-ops/`.
- Extracted conditionalformat.add + fill/color serializers (`pfe`/`mfe`…`helper319`) → `workbook/mutation-ops/`.
- Left sparkline (`Sfe`+) + data-validation (`Efe`+) in boundary; re-exported `workbookHelper319` for sparkline color peels.
- Left `gae`/`workbookEt` EMU converters, chart `Zae`/`Qae`, `ooe` geometry helper, `_workbookEt`/`Qse` clamp helpers, and pivot enums `Binding335`/`336`/`338` in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~sparkline Sfe+ / data-validation Efe+~~ (done wave-42); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Binding662 VO cluster.

## Wave-42 progress

- Extracted sparkline builders (`Sfe`/`Cfe`/`wfe`/`Tfe`/`helper320`) → `workbook/mutation-ops/`.
- Extracted data-validation builders (`Efe`…`Nfe`) → `workbook/mutation-ops/`.
- Extracted shape.add/set builders (`Pfe`…`helper321`) → `workbook/mutation-ops/`.
- Extracted image.add/set builders (`Vfe`/`Hfe`/`Ufe`/`Wfe`) → `workbook/mutation-ops/`.
- Extracted worksheet owner WeakMap (`helper333`/`Binding669`) → `workbook/worksheet-attachment/`.
- Left Binding662/`_C` init gate, pivot enums Binding335/336/338 + Class53, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Binding662 CF/DV VO cluster~~ (done wave-43); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Vpe formula/token cluster.

## Wave-43 progress

- Extracted CF helpers + rule factory (`helper322`…`lpe`) → `workbook/conditional-format/`.
- Extracted CF dataBar/iconSet/cfvo builders (`upe`…`ype`) + Binding663/xpe/Spe/Cpe → `workbook/conditional-format/`.
- Extracted DV builders (`Tpe`…`helper326`) + Lpe/Rpe/Binding664/zpe/Binding665 → `workbook/data-validation/`.
- Left Binding662/`_C` init gate, pivot enums Binding335/336/338 + Class53, Vpe+ formula/token cluster, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Vpe formula/token/WorkbookR cluster~~ (done wave-44); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-dme fill-from / address cluster.

## Wave-44 progress

- Extracted formula char classifiers (`Vpe`/`helper327`/`Hpe`/`Upe`) → `workbook/formula/`.
- Extracted token scanners (`Wpe`…`Ype`) + tokenizer (`WorkbookR`) → `workbook/formula/`.
- Extracted A1/structured-ref helpers (`Zpe`/`WorkbookI`/`workbookL`/`helper329`/`workbookP`…) → `workbook/formula/`.
- Extracted formula parser (`ume`) + ensure (`workbookF`) + `parseFormula` (`helper328`) → `workbook/formula/`.
- Left Binding662/`_C` init gate, dme+ fill-from helpers, pivot enums Binding335/336/338 + Class53, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-dme fill-from / formula-address helpers~~ (done wave-45); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Binding669 Range VO / address-utils cluster.

## Wave-45 progress

- Extracted fill-from core (`dme`/`helper330`/`331`/`fme`/`pme`/`mme`) + ensure (`hme`) → `workbook/range-fill/`.
- Extracted Excel serial/date coerce (`helper332`/`gme`) + typed cell coerce (`helper336`) → `workbook/range-fill/`.
- Extracted A1 shift + A1↔R1C1 converters (`helper334`/`_me`/`helper335`/`vme`/`yme`) + worksheet limits → `workbook/formula-address/`.
- Left Binding662/`_C` init gate, Binding669+/Binding675 Range VO init, pivot enums Binding335/336/338 + Class53, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~Binding675 Range VO / serial-date init~~ (done wave-46); pivot Binding335/336/338 + Class53 if cleanly separable, or Binding676 PivotCaches if peelable under flat limit.

## Wave-46 progress

- Extracted Range VO (`Binding672`/`WorkbookClass2`) with method peels (write/fill/copy/formulas/nav/matrix) → `workbook/range/`.
- Extracted DV guard (`bme`), ISO date-time RE (`xme`), sparklines helper (`Sme`); wired Binding670/671/673/674 to existing epoch/limit constants.
- Left Binding662/`_C` init gate, pivot enums Binding335/336/338 + Class53, Binding676 PivotCaches, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~Binding676 PivotCaches~~ (done wave-47); pivot Binding335/336/338 + Class53 if cleanly separable, or next contiguous post-Cme slicer / PivotTable VO cluster.

## Wave-47 progress

- Extracted PivotCaches VO (`Binding676`/`Cme`) with method peels (`#l` render-layout + leaf `#E`/`#k`/`#M`) → `workbook/pivot-caches/`.
- Wired boundary pivot proto helpers (`helper8`/`27`/`28`/`29`, Binding332, `_re`) via `wirePivotCachesBoundaryHooks`.
- Left Binding662/`_C` init gate, pivot enums Binding335/336/338 + Class53, slicer Binding677+, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-Cme slicer Binding677+~~ (done wave-48); pivot Binding335/336/338 + Class53 if cleanly separable, or PivotTable Binding369/`_u` (peel under flat limit).

## Wave-48 progress

- Extracted slicer / Slicers VO (`Binding677`–`684` / `helper337` / `wme` / `Tme`/`Eme`) → `workbook/slicers/`.
- Wired layout refresh via existing `pivot-caches` `refreshPivotTableLayout` hook; boundary keeps thin `Tme`/`Eme` aliases for `Binding683`/`684`.
- Left Binding662/`_C` init gate, pivot enums Binding335/336/338 + Class53, PivotTable Binding369/`_u`, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~field VO cluster Binding343–361 + enums 335/336 + Class53~~ (done wave-50); next contiguous post-helper31 formula/array cluster, or Binding334/wne + cache el/332.

## Wave-49 progress

- Extracted PivotTable VO (`Binding369`/`_u`) with peels (`rebuildCache` + `#D` filter descriptor) + helpers 25–30/`_re`/`vre`/WeakMaps → `workbook/pivot-table/`.
- Extracted layout enum `Binding338` (`PivotLayoutType`); left `Binding335`/`336` + Class53 in boundary (still required by PivotField/DataField VO cluster).
- Wired field-VO ctors / filter tokens / `el`/`helper22`/`24` via `wirePivotTableBoundaryHooks`; pivot-caches proto hooks now re-export from pivot-table.
- Left Binding662/`_C` init gate, pivot enums Binding335/336 + Class53 + field VOs, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: field VO cluster Binding343–361 (+ enums 335/336 + Class53), or next contiguous post-helper31 formula/array cluster; continue scanning for stock vendor fingerprints.

## Wave-50 progress

- Extracted field VO cluster (`Binding343`–`361`) with enums `Binding335`/`336` + Class53 (`Binding341`/PivotShowAs) + layout refresh helpers (`helper8`–`21`) + filter tokens (`dre`/`fre`/`pre`) → `workbook/pivot-fields/`.
- Reused `PivotLayoutType` from pivot-table for `Binding338`; left `Binding334`/wne, cache `el`/`Binding332`/`333`, and `helper24`/`hre` in boundary.
- Wired via `ensurePivotFieldsInit` + thin boundary stubs; `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 177434.
- Next: ~~post-helper31 formula/array cluster~~ (done wave-51); Binding334/wne + cache el/332/333, or next contiguous post-gae residual.

## Wave-51 progress

- Extracted formula array/eval cluster (`helper31`–`61` + `Are`/`Ore`/`kre`/`jre`/`Mre`/`Nre` + `$u` Binding370–374) → `workbook/formula-array/`.
- Left `Binding334`/wne, cache `el`/`Binding332`/`333`, `helper24`/`hre`, Binding662/`_C`, and intentional terminals in boundary.
- Wired via thin boundary stubs + `ensureFormulaArrayInit` (`$u`); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 176346.
- Next: ~~Binding334/wne + cache hydrate leftovers~~ (done wave-52); next contiguous post-gae residual (or Binding662/`_C` when finally clean); continue scanning for stock vendor fingerprints.

## Wave-52 progress

- Extracted PivotLayout (`Binding334`/`wne`), cache hydrate (`Cne`/`$c`/`el`), PivotCacheModel (`Binding332`/`333`), and cell-hint helpers (`helper24`/`hre`) → `workbook/pivot-table/` + `workbook/pivot-caches/`.
- Peeled residual field/table glue stubs between layout and formula-array; boundary hooks now re-export real modules (wire kept as no-op).
- Left Binding662/`_C`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Wired via thin boundary stubs + `ensurePivotLayoutInit` / `ensurePivotCacheModelInit`; `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 176004.
- Next: contiguous post-gae residual, or Binding662/`_C` when finally clean; continue scanning for stock vendor fingerprints.

## Wave-53 progress

- Replaced inlined Yjs + lib0 (`workbookBinding1`…`zte` + `Bte` + `no`/`Binding187`–`331`, ~9.5k LOC) with `vendor/yjs` npm shim (`yjs@13.6.27`).
- Kept thin boundary aliases for external CRDT surface: `_o`=`Doc`, `is`=`UndoManager`, `Binding265`=`Array`, `Binding266`=`Map`, `Binding210`=`applyUpdate`, `Binding211`=`encodeStateAsUpdate`, `os`=`decodeUpdate`, `workbookAt`=`mergeUpdates`, `workbookKt`=no-op init.
- Left Binding662/`_C`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shim + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 166535.
- Next: contiguous post-gae residual / worksheet core / chart proto neighbors, or Binding662/`_C` when finally clean; continue scanning for stock vendor fingerprints (e.g. THREE remnants).

## Wave-54 progress

- Replaced inlined Three.js (`helper502`…`Ybe` + `Binding929`/`Xbe`, ~15.3k LOC) with `vendor/three` npm shim (`three@0.170.0`).
- Kept thin boundary aliases for external 3D surface: `Binding957`=`Vector3`, `Binding1041`=`Color`, `Binding1060`=`BufferGeometry`, `Binding1099`=`Line`, `Binding1091`=`LineBasicMaterial`, `Binding1073`=`Group`, `Binding972`=`Vector4`, `Binding973`=`Box3`, `Binding954`=`MathUtils`, `Binding1103`=`MeshPhysicalMaterial`, `Binding1101`=`CylinderGeometry`, `Binding1100`=`CanvasTexture`, `Binding1090`=`Sprite`, `Binding1077`=`SpriteMaterial`, `Binding1072`=`BoxGeometry`, `$P`=`Mesh`, `Binding1135`=no-op init.
- Left Binding662/`_C`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shim + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 151261.
- Next: Binding1574 (~8.2k) / Binding1790 (~8.0k) / Binding1996 (~4.5k), or Binding740 / `The` / `BYe`; continue scanning for stock vendor fingerprints.

## Wave-55 progress

- Identified Binding1574 as layout-element kind/prop Sets (`Cke`, ~258 LOC) — app schema, not vendor. Contiguous ~8.2k block = Cke + stock highlight.js language pack.
- Replaced inlined highlight.js grammars (`wke`…`aAe`) + `oAe`/`sAe` registerLanguage bootstrap (~7.9k LOC) with existing `boundaries/highlight-js` npm shim (`Core()` → `highlight.js@^11.11.1`).
- Kept thin boundary aliases: `Binding1591`=`Core()`, `sAe`=no-op init. Retained Binding1574/`Cke` in boundary.
- Left Binding662/`_C`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on highlight-js shim + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 143331.
- Next: Binding1790 (~8.0k Zod cluster) / Binding1996 (~4.5k) / Binding1390 (~3.8k) / Binding740 (~3.0k), or `The`/`BYe`; continue scanning for stock vendor fingerprints.

## Wave-56 progress

- Confirmed Binding1790 fingerprints as stock Zod (`ZodType` / `ZodPipe` / `ZodReadonly` / `$Zod*`). Binding1790's ~8.0k var chain is Zod public API (~1.0k) + presentation-recipe schemas (~7k) — only the Zod slice + preceding `$Zod*` core were cut.
- Replaced inlined Zod (`helper789` / Binding1751… / `$Zod*` / Binding1790–1799, ~6.4k LOC) with existing `vendor/zod` npm shim (`zod@^4.4.3`).
- Kept thin boundary aliases for recipe consumers: `helper816`=`zodString`, `helper817`=`zodNumber`, `helper818`=`zodArray`, `helper819`=`zodObject`, `YUe`=`zodEnum`, `Binding1799`=`ensureZodRuntime`. Recipe cluster `qWe`… retained.
- Left Binding662/`_C`, Binding1574/`Cke`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shim + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 136962.
- Next: Binding1996 (~4.5k) / Binding1390 (~3.8k) / Binding740 (~3.0k), or `The`/`BYe`; continue scanning for stock vendor fingerprints.

## Wave-57 progress

- Extracted presentation-recipe cluster (`Binding1800`/`qWe`…`Yqe` + `Xqe`/`Zqe`/`aJe` registry, ~7.3k LOC) → `workbook/presentation-recipes/`.
- Compose-layout builders stay in-boundary; recipes call them via `layout-hooks` wired from thin `aJe` stub.
- Left `dJe` presentation templates + Google Slides adapter (`pJe`/`SJe`), Binding662/`_C`, Binding1574/`Cke`, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 129681.
- Next: Binding1996 (~4.5k) / Binding1390 (~3.8k) / Binding740 (~3.0k), or `The`/`BYe`; continue scanning for stock vendor fingerprints.

## Wave-58 progress

- Identified Binding1996 as WorkbookN/`__workbookT` core class (~4.4k, feature property bags + collab + calc) — **not vendor**; single private-field class needs Range-style method peel (deferred).
- Extracted Binding1390 compose-layout engine (`MDe`/`NDe`/helper673–675 + Binding1393 case-transform + Binding1465 measure + Binding1485 apply + Binding1488 theme tokens, ~3.9k LOC) → `workbook/compose-layout/`.
- Left public compose DSL (`Binding1490`–`1528`/`DOe`/`OOe`), Google Slides adapter (`pJe`/`SJe`), Binding662/`_C`, Binding1574/`Cke`, Binding1996/WorkbookN, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 125862.
- Next: Binding1996 WorkbookN class peel / compose DSL Binding1490–1528 / Binding740 (~3.0k) / `The`/`BYe` / Google Slides `pJe`/`SJe`.

## Wave-59 progress

- Extracted Binding1996 WorkbookN / `__workbookT` method bodies (~4.4k) → `workbook/workbook-core/` Range-style peels; class shell + `#opsHost` retained in open boundary (flat exemption).
- Wired boundary via `wireWorkbookCoreEnv` + thin WorkbookN init (line-range drain; no mega-file StrReplace); `openBoundary` kept.
- Left Binding662/`_C`, Binding1574/`Cke`, public compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 123201.
- Next: compose DSL Binding1490–1528 / Binding740 (~3.0k) / `The`/`BYe` / Google Slides `pJe`/`SJe`.

## Wave-60 progress

- Extracted worksheet-drawings cluster (`helper373`/`yve`/`bve`/`helper374`/`xve` + `Sve` + Binding740–789 anchors/chart·shape·image drawings, ~3.1k LOC) → `workbook/worksheet-drawings/`.
- Left `Lve` + Binding790 drawing-layout helpers, compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, Binding662/`_C`, Binding1574/`Cke`, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 120160 (was 123201).
- Next: Binding790 layout helpers / compose DSL Binding1490–1528 / `The`/`BYe` / Google Slides `pJe`/`SJe`.

## Wave-61 progress

- Extracted Binding790 contiguous cluster (`Lve` + Binding790–803 drawing-layout + Binding804–815/`_D` cell/sparkline VOs, ~1.6k LOC) → `workbook/worksheet-drawings/drawing-layout.ts` + `workbook/sparklines/`.
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, `The`/`BYe`, Binding662/`_C`, Binding1574/`Cke`, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 118625 (was 120164).
- Next: compose DSL Binding1490–1528 / `The`/`BYe` / Google Slides `pJe`/`SJe` / Binding1687 (~3.0k) / Binding1906 (~2.4k).

## Wave-62 progress

- Identified Binding1687 (~3.0k) as Codex Mermaid→presentation slide adapters (gitGraph / sequence / class·state·er·requirement·mindmap / treeView + `P$` registry) — **not** stock `mermaid` npm (custom slide-element emitters).
- Extracted contiguous cluster → `workbook/mermaid-slide-adapters/` (split under flat limit).
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, `The`/`BYe`, Binding1906/1967, Binding662/`_C`, Binding1574/`Cke`, earlier mermaid helpers (Binding1615–1685 / flowchart `NPe` / chart-like `zAe`), and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 115720 (was 118625).
- Next: ~~Binding1906 decimal.js~~ (done wave-63); Binding1967 (~2.4k) / `BYe` (~2.4k) / `The` (~2.2k) / Binding1827 (~2.3k) / compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe`.

## Wave-63 progress

- Confirmed Binding1906 contiguous cluster as stock `decimal.js` (`[DecimalError]`, `Symbol.toStringTag="Decimal"`, `nodejs.util.inspect.custom`, LN10/PI strings, `lit` factory). Full body is helper939…Pit + Binding1906/`$`/`Vit` (~4.4k), not only the ~2.4k Binding1906 var init.
- Replaced inlined decimal.js with `vendor/decimal` npm shim (`decimal.js@10.6.0`).
- Kept thin boundary aliases: `Binding1926`=`Decimal` constructor, `Vit`=`ensureDecimalInit` (no-op) for `rot()`/`Uat` call-sites.
- Left bond helpers (Prt/Lrt), Binding1967, `BYe`, `The`, Binding1827, Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shim + boundary `--no-cache --allow-open-boundaries`; vendor-npm-preflight PASS.
- Boundary LOC ≈ 111324.
- Next: Binding1967 (~2.4k) / `BYe` (~2.4k) / Binding1827 (~2.3k) / `The` (~2.2k) / compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe` / earlier mermaid helpers Binding1615–1685.

## Wave-64 progress

- Identified Binding1967 contiguous cluster as Codex entity-query / snapshot helpers (NOT vendor): Kgt…e_t find/truncate + R_t kind maps/query ops + B_t path-split + J_t thread-comment serializers (~2.3k LOC).
- Extracted → `workbook/entity-query/` (split under flat limit).
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, `The`/`BYe`, Binding1827/SXe sheet API, Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Also drained `Ygt` find/inspect helper into `find-cells.ts` (was contiguous with Kgt…Jgt).
- Boundary LOC ≈ 109187 (was 111324; Δ −2,137).
- Next: Binding1827/SXe (~2.3–2.8k sheet/range API) / `BYe` canvas paint (~2.4k) / compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe` / earlier mermaid helpers Binding1615–1685 / Ume table-styles (~1.4k).

## Wave-65 progress

- Identified Binding1827 contiguous cluster as Codex Sheet / worksheet API (NOT vendor): GYe…gXe helpers + Binding1826/aXe auto-heights + `_Xe` FreezePanes + Binding1828/`SXe` Sheet class + `yXe` null-sheet + `bXe`/`xXe` cell VOs (~2.8k LOC).
- Extracted → `workbook/sheet/` (prototype installers split under flat limit; private fields demoted to public `_x` for cross-file methods).
- Left `BYe` canvas paint, compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 106544 (was 109187; Δ −2,643).
- Next: `BYe` canvas paint (~2.4k) / compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe` / earlier mermaid helpers Binding1615–1685 / Ume table-styles (~1.4k).

## Wave-66 progress

- Identified BYe contiguous cluster as Codex spreadsheet canvas painter (NOT vendor): `bYe` shape overlay + Binding1818/`xYe` emu maps + SYe…Helper831 paint helpers + `BYe` (~2.4k) + Binding1822–1824 paint consts (~3.2k LOC).
- Extracted → `workbook/canvas-paint/` (BYe split across setup/cells/cell-interactive/overlays via mutable paint bag under flat limit).
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, `The`, Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 103388 (was 106544; Δ -3156).
- Next: compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe` / `The` (~2.2k) / earlier mermaid helpers Binding1615–1685 / Ume table-styles (~1.4k).

## Wave-67 progress

- Identified `The` contiguous cluster as Codex chart axis/series/legend/trendline VOs (NOT vendor): Ohe/`The` Axis number-format + Axis (`Binding705`) + Ahe…zhe series options + Binding712 legend + Hhe…Jhe plot extras + Yhe…nge markers/points + ige trendline (~2.2k LOC).
- Extracted → `workbook/chart-elements/` (split under flat limit).
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`, Binding1831/`xLe`, Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 101269 (was 103388; Δ -2119).
- Next: compose DSL Binding1490–1528 / Google Slides `pJe`/`SJe` / Binding1831/`xLe` (~1.9k) / Binding1592 (~1.5k) / Ume table-styles (~1.4k) / earlier mermaid helpers Binding1615–1685.

## Wave-68 progress

- Identified contiguous `Binding1831`/`Binding1874` cluster as Codex Excel formula-stats wrappers over jstat/bessel (NOT vendor body): error consts + date serial mode + TYPE + BETA…Z.TEST distribution catalog + short aliases (~1.9k LOC).
- Extracted → `workbook/formula-stats/` (split under flat limit; helpers remain in boundary via `fsH` hooks; jstat/bessel via `vendor/*` + `toEsm`).
- Left compose DSL Binding1490–1528, Google Slides `pJe`/`SJe`/`oJe`, `xLe` walnut/comments cluster, Binding1592, Binding662/`_C`, Binding1574/`Cke`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 99489 (was 101269; Δ -1780).
- Next: `xLe` walnut layout consts (peel before comments/`_C`) / compose DSL Binding1490–1528 / Google Slides `oJe`/`pJe`/`SJe` (~1.4k) / Binding1592 (~1.5k) / Ume table-styles / formula helpers that feed Binding1831.

## Wave-69 progress

- Identified contiguous `Binding1592`/`SAe`…`QAe` cluster as Codex mermaid-slide helpers (NOT vendor): code theme tokens + text measure/run-style/scratch-slide + chart-like timeline/gantt plugins + fallback plugin + state/mind/arrow geometry (~1.4k LOC).
- Extracted → `workbook/mermaid-slide-helpers/` (split under flat limit; `workbookEt`/`_workbookS`/`_workbookO` remain in boundary via `mshH` hooks). Feeds existing `mermaid-slide-adapters` wire.
- Left compose DSL Binding1490–1528, Google Slides `oJe`/`pJe`/`SJe`, `xLe` walnut/comments (incl. `_C`), Ume table-styles, Binding662/`_C`, Binding1574/`Cke`, flowchart `NPe`/`PPe` + graph layout Binding1675/1685, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 98173 (was 99489; Δ -1316).
- Next: Google Slides `oJe`/`pJe`/`SJe` (~1.4k) / Ume table-styles (~1.4k) / clean `xLe` walnut peel before comments/`_C` (~660) / compose DSL Binding1490–1528 / flowchart `NPe` cluster.

## Wave-70 progress

- Identified contiguous `Nme`/`Ume`/`ahe` cluster as Codex Excel table/pivot style presets (NOT vendor): region names + preset color/font/fill/line/DXF templates + resolve helpers + style registry (~1.95k LOC).
- Extracted → `workbook/table-styles/` (split under flat limit; `wr`/`Zn`/`tr` via `presentation-protobuf`).
- Left compose DSL Binding1490–1528, Google Slides `oJe`/`pJe`/`SJe`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, flowchart `NPe`/`PPe` + graph layout Binding1675/1685, Table VO `fhe`/`ohe`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 96321 (was 98173; Δ -1852).
- Next: Google Slides `oJe`/`pJe`/`SJe` (~1.4k) / clean `xLe` walnut peel before comments/`_C` (~660) / compose DSL Binding1490–1528 / flowchart `NPe` cluster / Table VO `fhe`.

## Wave-71 progress

- Identified contiguous `oJe`/`pJe`/`SJe` cluster as Codex Google Slides adapter (NOT vendor): presentation templates + EMU/PT helpers + Slides↔presentation bridge class (~1.36k LOC).
- Extracted → `workbook/google-slides-adapter/` (class peeled via prototype installers under flat limit; `workbookEt`/`Z$`/`Binding739`/`Binding1389`/`Binding736`/`of`/`Binding410` remain in boundary via `gsaH` hooks).
- Left compose DSL Binding1490–1528, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, flowchart `NPe`/`PPe` + graph layout Binding1675/1685, Table VO `fhe`/`ohe`, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 95036 (was 96321; Δ -1285).
- Next: clean `xLe` walnut peel before comments/`_C` (~660) / compose DSL Binding1490–1528 / flowchart `NPe` cluster / Table VO `fhe`.

## Wave-72 progress

- Identified contiguous Binding1490–1528/`DOe`/`OOe` cluster as Codex presentation compose DSL (NOT vendor): layout MIME/meta + size modes + element builders (row/col/grid/table/image/shape) (~886 LOC).
- Extracted → `workbook/compose-dsl/` (split under flat limit; Binding661/739/1489/`_workbookH`/433/1213/1330/1328 remain in boundary via `cdslH` hooks; fill/design-tokens/compose-layout/etc. imported directly).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, flowchart `NPe`/`PPe` + graph layout Binding1675/1685, Table VO `fhe`/`ohe`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 94271 (was 95036; Δ -765).
- Next: flowchart `NPe`/`PPe` + Binding1675/1685 (~0.8k) / Table VO `fhe`/`ohe` (~0.5k) / clean `xLe` walnut peel before comments/`_C` (~660).

## Wave-73 progress

- Identified contiguous inlined `graphlib` Graph (`Binding1671`/`rje`) + `dagre` layout (`wNe`/`YNe`/network-simplex/order/position, ~3.6k LOC) as stock vendor (NOT Codex) — already shimmed at `vendor/graphlib` + `vendor/dagre`.
- Replaced inlined body with thin aliases: `Binding1671`=`Graph`, `Binding1672`/`YNe`=no-op ensures, `wNe`→`dagre.layout`.
- Left flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe`, Table VO `fhe`/`ohe`, Chart `Binding721`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on vendor shims + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 90666 (was 94271; Δ -3605).
- Next: flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe` (~0.8k) / Table VO `fhe`+Tables/DataTables (~1.0k) / Chart Binding721 (~0.7k) / image+path Binding723–735 (~3.0k mixed) / clean `xLe` walnut peel before comments/`_C`.

## Wave-74 progress

- Identified contiguous Binding723–735 cluster as Codex image-asset decode (EMF/WMF/SVG/bitmap `Jge`/`Binding728`) + connector pathfinding/routing (`Yge`…`pve` + `Binding734`/`735`) (~3.1k LOC) — NOT vendor.
- Extracted → `workbook/image-connector/` (split under flat limit via `icR` bag; path-geometry / geometry-transform / preset-shape / stable-id imported directly).
- Left Chart Binding721 (needs Che→Ege prelude), Binding736 Shape, flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe`, Table VO `fhe`/`ohe`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 87615 (was 90666; Δ -3051).
- Next: Chart Binding721 + Che→Ege prelude (~2.4k) / flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe` (~0.8k) / Table VO `fhe`+Tables (~1.0k) / clean `xLe` walnut peel before comments/`_C`.

## Wave-75 progress

- Identified contiguous She/Che→Ege + Binding721/722 cluster as Codex chart-asset / series VO (NOT vendor): area-grouping + axis patches + trendline collection + series fill/stroke + chart option VOs + regression helpers + Chart class (~2.4k LOC).
- Extracted → `workbook/chart-asset/` (split under flat limit; `Zae`/`Qae` remain in boundary via `caH` hooks; chart-elements / fill / line / text-style imported directly).
- Left Binding736 Shape, flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe`, Table VO `fhe`/`ohe`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 85270 (was 87616; Δ -2346).
- Next: Binding736 Shape (~?) / flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe` (~0.8k) / Table VO `fhe`+Tables (~1.0k) / clean `xLe` walnut peel before comments/`_C`.

## Wave-76 progress

- Identified contiguous fhe/yhe/xhe cluster as Codex Excel Table / Tables / DataTables VO (NOT vendor): header/totals helpers + Table class (`fhe`/Binding702) + Tables collection (`yhe`/`vhe`) + DataTables (`xhe`/`bhe`) (~1.0k LOC).
- Extracted → `workbook/table-vo/` (split under flat limit; address-utils + table-styles/`ahe`/`Wme` imported directly).
- Left Binding736 Shape, flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS`, `cDe`/`_workbookH`, `REe` chart-ref, `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 84295 (was 85270; Δ -975).
- Next: Binding736 Shape (~0.76k) / flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe` (~0.79k) / `REe`+Charts collection (~1.0k) / `cDe`+`_workbookH` table-element (~0.8k) / clean `xLe` walnut peel before comments/`_C`.

## Wave-77 progress

- Identified contiguous CEe…workbookC cluster as Codex presentation ChartReference element + Charts collection (NOT vendor): default bbox (`CEe`) + chart option patches + `REe` aid + Binding1298/1299 chart-ref + `workbookS`/`workbookC` (~0.98k LOC).
- Extracted → `workbook/charts-collection/` (split under flat limit; chart-elements / slide-element / geometry-transform `frameUnitToEmu` imported directly; intentional `workbookEt` call dropped — EMU via `frameUnitToEmu`).
- Left Binding736 Shape, flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe`, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS`, `cDe`/`_workbookH`, `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 83337 (was 84295; Δ -958).
- Next: Binding736 Shape (~0.76k) / flowchart `$Ne`/Binding1675/1685 + `NPe`/`PPe` (~0.79k) / `cDe`+`_workbookH` table-element (~0.8k) / clean `xLe` walnut peel before comments/`_C`.

## Wave-78 progress

- Identified contiguous helper784/`$Ne`/Binding1675/`OPe`/Binding1685/`NPe`/`PPe` cluster as Codex mermaid flowchart layout+render+plugin (NOT vendor): px parse + dagre graph layout + scratch-slide render helpers + flowchart plugin (~0.81k LOC).
- Extracted → `workbook/mermaid-flowchart/` (split under flat limit; mermaid-slide-helpers Binding1615/1616/1618/1620/1667/`KAe`/`XAe`/`QAe`/`UAe`/`ZAe` + vendor graphlib/dagre imported directly).
- Left Binding736 Shape, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS`, `cDe`/`_workbookH`, `qRe` deck kinds, `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 82535 (was 83337; Δ -802).
- Next: Binding736 Shape (~0.76k) / `qRe` deck kinds (~0.82k) / `_workbookY` slides collection (~0.75k) / `bDe` (~0.74k) / `_workbookS` presentation ensure (~1.2k leave) / clean `xLe` walnut peel before comments/`_C`.

## Wave-79 progress

- Identified contiguous `wRe`/`qRe`/Binding1738–1748 cluster as Codex deck kind token maps + field parsers + NDJSON builders + snapshot query (NOT vendor): kind/field alias maps, include/exclude filters, slide/layout/shape builders, truncated NDJSON export (~0.92k LOC).
- Extracted → `workbook/deck-kinds/` (impl + query under flat limit; `ensureStableIdConstantsInit` / `randomBase36Id` from `workbook/stable-id`).
- Left Binding736 Shape, `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), `cDe`/`_workbookH`, `_workbookY` slides (~0.75k), `bDe` (~0.74k), `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 81619 (was 82535; Δ -916).
- Next: Binding736/739 Shape (~0.76k) / `_workbookY` slides collection (~0.75k) / `bDe` (~0.74k) / `_workbookS` presentation ensure (~1.2k leave) / clean `xLe` walnut peel before comments/`_C`.

## Wave-80 progress

- Identified contiguous Binding739/736 Shape cluster as Codex presentation Shape element VO (NOT vendor): Shape class + fill-config predicate + line cap/join/end maps + connector hit-pad (~755 LOC).
- Extracted → `workbook/shape-element/` (single impl under flat limit; `Mde`/Binding412/`gae` remain in boundary via `seH` hooks; slide-element / fill / line / image-connector / shape-utility / preset-shape / geometry-transform imported directly; intentional `workbookEt` ensure dropped — unused in class body).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), `cDe`/`_workbookH`, `_workbookY` slides (~0.75k), `bDe` (~0.74k), `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 80878 (was 81619; Δ -741).
- Next: `_workbookY` slides collection (~0.75k) / `bDe` (~0.74k) / `_workbookS` presentation ensure (~1.2k leave) / clean `xLe` walnut peel before comments/`_C`.

## Wave-81 progress

- Identified contiguous helper660–665/`GEe`/`KEe`/`qEe` + `_workbookY`/`_workbookV`/Binding1313 cluster as Codex presentation slide shapes collection (NOT vendor): connector geometry helpers + shape-props builders + Shapes VO + edge map (~913 LOC).
- Extracted → `workbook/slides-collection/` (helpers + collection impl under flat limit; Binding1312/`helper659` remain in boundary via `scH` hooks; shape-element / image-connector / preset-shape / shape-geometry / stable-id / yjs imported directly; empty `workbookKt` stub dropped as noop).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), `cDe`/`_workbookH`, `bDe` (~0.74k), `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 79982 (was 80878; Δ -896).
- Next: `bDe` (~0.74k) / `_workbookS` presentation ensure (~1.2k leave) / clean `xLe` walnut peel before comments/`_C`.

## Wave-82 progress

- Identified contiguous helper669 + `gDe`/`_De`/`vDe`/`yDe` + Binding1364–1368/`bDe` cluster as Codex Cassowary/kiwi constraint Solver (NOT vendor): nearZero + Solver/Symbol/Row + SymbolType enum (~763 LOC).
- Extracted → `workbook/constraint-solver/` (nearZero + impl under flat limit; Expression/Strength/Constraint/PairMap Binding1352/1357/1358/1359/1360/1361/1363 remain in boundary via `csH` hooks; `xDe` var-chain re-anchored after peel).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), `cDe`/`_workbookH`, `jgt` sheet-meta, and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 79255 (was 79982; Δ -727).
- Next: no remaining ≥700 safe peels — only leave-behinds (`_workbookS` ~1.2k, WorkbookN shell ~1.8k) or strategy change (lower bar / peel Expression+Strength prelude with solver / walnut `xLe`).

## Wave-83 progress

- Re-scan ≥400 esmInit clusters: WorkbookN ~1845 (leave), `_workbookS` ~1236 (leave), `_workbookH` ~568, `$dt` ~566, `Z_t` ~498, `Z$` ~460. No ≥700 safe peels.
- Expanded constraint-solver with Expression/Strength/Constraint/PairMap/Variable prelude (helper668 + Binding1350–1363 + hDe, ~387 LOC); `csH` leave-behind hooks cleared.
- Extracted self-contained Excel formula opcode map `Z_t`/`X_t` (~498 LOC) → `workbook/formula-opcodes/`.
- Deferred `_workbookH`/`$dt` (heavy boundary ensure fan-out) and leave-behinds `_workbookS`/WorkbookN shell.
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS`, `cDe`/`_workbookH`, `$dt`, `Z$`, `jgt` sheet-meta, and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 78381 (was 79255; Δ -874).
- Next: `_workbookH`+eDe..cDe table-element (~0.7k) / `$dt` formula registry (~0.57k) / clean `xLe` walnut / leave-behinds only if consumers clean.

## Wave-84 progress

- Identified contiguous eDe…cDe + `_workbookH`/`_workbookM` cluster as Codex presentation Table element VO (NOT vendor): style-id resolve, cell-margin/column-track helpers, preview trim, Table class (~719 LOC).
- Extracted → `workbook/table-element/` (single impl under flat limit; YEe/Binding1321/QEe/`$Ee`/Binding1330 remain in boundary via `teH` hooks; slide-element / fill / geometry-transform / stable-id imported directly; intentional `workbookEt` ensure dropped — `of`/`workbookTt` from geometry-transform).
- Compose-dsl `ensureWorkbookH` hook cleared → direct `ensureTableElementInit` import.
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), YEe…Binding1330 table support (~0.6k), `$dt` formula registry (~0.57k), `Z$` (~460), and intentional terminals (`gae`/`workbookEt`, `ooe`, chart `Zae`/`Qae`, `_workbookEt`/`Qse`) in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 77713 (was 78381; Δ -668).
- Next: YEe…`$Ee` table row/range/columns/borders (~0.58k) / `$dt` formula registry (~0.57k) / clean `xLe` walnut / `Z$` (~460) / leave-behinds only if consumers clean.

## Wave-85 progress

- Identified contiguous YEe…`$Ee` cluster as Codex presentation table row/range/columns/borders (NOT vendor): Binding1316 row + XEe/ZEe helpers + Binding1317–1320 range + Binding1322–1323 columns + Binding1324 borders (~582 LOC).
- Extracted → `workbook/table-row-range/` (single impl under flat limit; JEe/Binding1315 remain in boundary via `trH` hooks; Binding1312/helper659 via slides-collection `scH`; text-style / fill / geometry-transform / line imported directly; intentional `workbookEt` ensure dropped).
- Table-element `teH` wire now resolves YEe/Binding1321/QEe/`$Ee`/Binding1316–1324 from imported module; Binding1330/1327 leave-behind unchanged.
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), JEe/Binding1315 (~0.39k), Binding1330 compose tracks, `$dt` formula registry (~0.57k), `Z$` (~460), and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 77155 (was 77713; Δ -558).
- Next: `$dt` formula registry (~0.57k) / clean `xLe` walnut / `Z$` (~460) / JEe cell (~0.39k) / leave-behinds only if consumers clean.

## Wave-86 progress

- Identified contiguous Xdt/Zdt/`$dt` cluster as Codex Excel formula name→impl registry (NOT vendor): lookup helpers + Binding1947 map + Qdt error bag (~580 LOC).
- Extracted → `workbook/formula-registry/` (single impl under flat limit; 17 formula-impl ensures remain in boundary via `frH` hooks; 502 hoisted impl `function`s wired once via compact `setFormulaImplBag`; `workbookBinding1874`/`Z2e` from formula-stats; Ydt leave-behind).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), JEe/Binding1315 (~0.39k), `Z$` (~460), and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 76686 (was 77155; Δ -469).
- Next: `Z$` presentation slide (~0.46k) / JEe table cell (~0.39k reunite with table-row-range) / clean `xLe` walnut / leave-behinds only if consumers clean.

## Wave-87 progress

- Identified contiguous `Z$`/`X$` + `cLe`/`sLe` cluster as Codex presentation Slide VO + Slides collection (NOT vendor): JSX prop sets + title helpers + slide/list classes (~788 LOC).
- Extracted → `workbook/presentation-slide/` (slide-vo + slides-list under flat limit; element/notes/background/placeholder/layout/add helpers remain in boundary via `psH` hooks; `scH` for Binding1312/helper659; compose-layout/theme/geometry/stable-id imported directly).
- Left `xLe` walnut/comments (incl. `_C`), Binding662/`_C`, Binding1574/`Cke`, WorkbookN shell, `_Ye`/`_workbookS` (~1.2k leave), JEe/Binding1315 (~0.39k), and intentional terminals in boundary.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 75978 (was 76686; Δ -708).
- Next: JEe table cell (~0.39k reunite with table-row-range) / clean `xLe` walnut / leave-behinds (`WorkbookN`/`_workbookS`) only if consumers clean — or lower peel bar / strategy change.

## Wave-88 progress

- Re-scanned ≥300 clusters: WorkbookN (~1845 leave), `_workbookS`/`_workbookO` (~1236 leave), helper585 (~924 chart paint), Zht (~596), $be (~578), … JEe (~389), zXe (~368), TXe (~364), kgt (~361).
- Skipped full `_workbookS`/`_workbookO`: consumers already hooked (canvas-paint / mermaid-slide-helpers) but 45-ensure fan-out still entangled with presentation leave-behinds (jLe…aYe / WorkbookN) — unsafe this wave.
- Reunited `JEe`/`Binding1315` (+ `_workbookG` / helper666) → `workbook/table-row-range/table-cell-impl.ts`; cleared `trH` JEe hooks; Paragraphs/Fill/Line/TextStyle/DetachedText/geometry/scH/Qt imported directly; intentional `workbookEt` ensure dropped.
- Peeled `CXe`+`TXe`/`wXe`+`EXe` → `workbook/sheet/worksheets-collection-impl.ts`; kme/Binding686 logger via `shH` hooks; Sheet/yXe via sheet bag.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on changed modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 75165 (was 75978; Δ -813).
- Next: zXe named-ranges (~0.37k) / kgt styles-yjs (~0.36k) / clean `xLe` walnut / partial WorkbookN method peel / `_workbookS` only after presentation leave-behind ensures drain.

## Wave-89 progress

- Re-scanned ≥300 clusters: WorkbookN (~1845 leave), `_workbookS`/`_workbookO` (~1236 leave), helper579–585 chart paint (~1282 contiguous), Zht (~596), $be (~578), N1e (~522), helpers 491/722/745/462/607 (~471–375), zXe (~368), kgt (~361), Kpt/Qbe (~352/328).
- Skipped full `_workbookS`/`_workbookO`: 45-ensure fan-out still entangled with presentation leave-behinds (jLe…aYe / WorkbookN) — unsafe this wave.
- Peeled contiguous chart canvas paint `helper579`–`585` + `NCe`/`FCe`/`ICe`/`LCe`/`PCe` → `workbook/chart-paint/` (prelude + paint body under flat limit); ~45 chart helper leave-behinds via `cpH` hooks; `Cn`/`Mn`/`Yn`/`tr`/`workbookX`/`helper212`/`Binding721` imported directly.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 73958 (was 75165; Δ -1207).
- Next: zXe named-ranges (~0.37k) / kgt styles-yjs (~0.36k) / Zht export (~0.60k) / clean `xLe` walnut / partial WorkbookN method peel / `_workbookS` only after presentation leave-behind ensures drain.

## Wave-90 progress

- Re-scanned ≥300 clusters: WorkbookN (~1845 leave), `_workbookS`/`_workbookO` (~1236 leave), Zht (~596) + contiguous converters/\_gt (~1261 total), $be (~578) + Qbe/helper521 (~971 contiguous), N1e (~522), helpers 491/722/745/462/607 (~471–375), zXe (~368), kgt (~361), Kpt (~352).
- Skipped full `_workbookS`/`_workbookO` (45-ensure fan-out) and WorkbookN leave-behind.
- `$be` is app 3D chart paint — **not** covered by `vendor/three` (wave-54 stock three@0.170.0 shim).
- Peeled doc-op apply `helper1024`/`Zht` + `Qht`…`ggt`/`Binding1964`/`_gt` → `workbook/doc-op-apply/` (apply + converters under flat limit); comment-thread class + range/comments ensures via `doH` hooks; spreadsheetVn / chart-proto maps / getAttachedWorksheet imported directly.
- Peeled contiguous `helper521`/`Qbe`/`$be` → `workbook/three-chart-paint/`; three.js via `vendor/three`; chart helpers + SSF/camera via `tcH` hooks; chart-paint now imports `paintThreeChart` directly (dropped `cpH.paintThreeChart`).
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 71784 (was 73958; Δ -2174).
- Next: N1e unit-convert (~0.52k) / zXe named-ranges (~0.37k) / kgt styles-yjs (~0.36k) / helpers 491+ / `_workbookS` only after presentation leave-behind ensures drain.

## Wave-91 progress

- Re-scanned ≥300 clusters: WorkbookN (~1845 leave), `_workbookS`/`_workbookO` (~1236 leave), N1e (~522), helpers 491/722/745/462/607 (~471–375), zXe (~368), kgt (~361), Binding1486 (~626), Kpt (~352), vEe (~332).
- Skipped full `_workbookS`/`_workbookO` (45-ensure fan-out) and WorkbookN leave-behind; deferred chart helpers 491+ (fan-in to many chart leave-behinds).
- Peeled `N1e` → `workbook/unit-convert/`; coerce inlined; `#VALUE!`/`#N/A` from formula-stats; `a7e` still wraps `N1e`.
- Peeled `IXe`/`LXe`/`RXe`/`zXe` → `workbook/named-ranges/`; formula/address/attachment direct; Binding675 via `nrH`.
- Peeled contiguous `helper1030`…`Cgt`/`Ogt`/`kgt` → `workbook/styles-yjs/`; Fill/Font/Borders/stylesheet + yjs Map/Array direct.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 70467 (was 71784; Δ -1317).
- Next: helpers 491/722/745 (~0.47–0.41k) / Kpt (~0.35k) / vEe (~0.33k) / Binding1486 (~0.63k) / `_workbookS` only after presentation leave-behind ensures drain.

## Wave-92 progress

- Re-scanned ≥300 clusters: WorkbookN (~1946 leave), `_workbookS`/`vYe` (~1240 leave), `xLe` (~1770 walnut), helpers 491+lbe (~706), 722/745/462 (~467–403), Binding1344 (~528), Kpt (~370), helper605–607 (~423), vEe (~332). Binding1486 (~626 scan) is a thin Proxy + import span — not a real peel.
- Skipped full `_workbookS`/`_workbookO` (45-ensure fan-out) and WorkbookN leave-behind; skipped KJe/aYe presentation leave-behind cluster.
- Peeled `helper491`+`lbe` → `workbook/chart-legend/`; leave-behind chart helpers via `clH`; legend consts inlined; chart-paint imports `paintChartLegend` (dropped `cpH.bh491`).
- Peeled `helper605`–`607` → `workbook/shape-path/`; TAU/deg↔rad/PATH_EPS inlined; `evalShapeFormula` from preset-shape.
- Peeled `Wpt`/`Gpt`/`Kpt` → `workbook/html-table-export/`; wr + address metrics + SSF ensure; WorkbookN env keeps aliases.
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 69013 (was 70467; Δ -1454).
- Next: helpers 722/745 (~0.47–0.41k) / vEe (~0.33k) / workbookA (~0.36k) / Binding1344 (~0.53k) / `_workbookS` only after presentation leave-behind ensures drain.

## Wave-93 progress

- Re-scanned ≥300 clusters: WorkbookN (~1946 leave), `_workbookS`/`vYe` (~1240 leave), `xLe` (~1770 walnut), helper722 (~467), helper745 (~408), helper462 (~403), workbookA (~362), vEe (~332). Binding1344 is ~185 real class (false ≥300 var-span). yrt constants-only.
- Skipped `_workbookS`/`WorkbookN` / KJe–aYe; deferred helper462/vEe/workbookA.
- Peeled `dke`/`fke`/`helper722`–`742`/`_ke` → `workbook/chart-jsx-lower/`.
- Peeled `vke`/`yke`/`helper743`–`762`/`Cke` → `workbook/compose-jsx-lower/`; `cjlH` for helper700/701/qOe/lke/uke.
- Boundary wired via line-range drain; `openBoundary` kept.
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 66294 (was 69013; Δ -2719).
- Next: helper462 (~0.40k) / helper616 (~0.38k) / workbookA (~0.36k) / vEe (~0.33k) / clean `xLe` / `_workbookS` after presentation leave-behind drain.

## Wave-94 progress

- Re-scanned ≥300 clusters: WorkbookN (~1946 leave), `_workbookS`/`vYe` (~1240 leave), `xLe` (~1770 walnut), helper462 (~403), helper616 (~380), workbookA (~362), vEe (~332). No other true top-level ≥300 after wave-93.
- Skipped `_workbookS`/`WorkbookN` / KJe–aYe / `xLe`.
- Peeled `helper462` → `workbook/chart-axis-ticks/` (`catH` for helpers 405/422/424–440/446/460/461 + Nye/Vye); axis consts inlined; chart-paint imports `paintChartAxisTicks` (dropped `cpH.bh462`).
- Peeled `helper616` → `workbook/shape-geometry-paint/` (`sgpH`); fill/frame/color direct imports; connector helpers via hooks.
- Peeled `workbookA` → `workbook/table-frame-layout/` (`tflH`); table default consts inlined; text/fill via direct imports.
- Peeled `vEe` → `workbook/slide-canvas-render/` (`scrH`); `layoutTableFrame` + `paintChartElement` direct imports.
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on new modules + chart-paint + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 64914 (was 66294; Δ -1380).
- Next: helper501 / Xxe / Txe / Dbe (taken by wave-95).

## Wave-95 progress

- Re-scanned ≥200 clusters: WorkbookN/Binding1996 (~1862 leave), `_workbookS`/`vYe` (~1240 leave), `Xxe` (~280), `Vht` (~270), `Txe` (~268), `helper501` (~266), `Dbe`/`rze`/`kht` (~254), `Uft` (~229), `gCe` (~222), `ODe` (~210), `Kht` (~208). `jCe` is a 7-line stub (not a real peel).
- Skipped `_workbookS`/WorkbookN / KJe–aYe / `xLe`; deferred `rze` (vYe leave-behind caller), `kht` (WorkbookN leave-behind), `Vht`/`Kht` CF init/class, `Uft`/`ODe`.
- Peeled `Dbe` → `workbook/chart-bar-direction/` (`cbdH`); chart-paint `paintFunnel` → `paintBarDirectionSeries` (hook was misnamed for BAR_DIRECTION_BAR).
- Peeled `helper501` → `workbook/chart-bar-series/` (`cbsH`); chart-paint dropped `bh501`; boundary alias keeps `yxe` caller.
- Peeled `Txe` → `workbook/chart-radar/` (`crH` + `Cxe`); chart-paint `paintBoxWhisker` → `paintRadarChart` (hook was misnamed for RADAR).
- Peeled `Xxe` → `workbook/chart-plot-layout/` (`cplH` + `Nxe`); Binding1173/1174 inlined; boundary alias keeps `helper559` caller.
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on four modules + chart-paint + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 63920 (was 64914; Δ -994).
- Next: `gCe` (~0.22k doughnut) / `nCe` (~0.19k line) / `rze` after `_workbookS` ensure drain / `kht` after WorkbookN / clean `xLe`.

## Wave-96 progress

- Re-scanned ≥180 clusters: WorkbookN (~1.8k leave), `_workbookS`/`vYe` (~1.2k leave), `rze`/`kht` blocked leave-behinds, `Vht`/`Uft`/`ODe`/`Kht` deferred (CF/class/constraint), `rxe` (~236 three-cam), `gCe` (~222), `nCe` (~187), `Tbe` (~177), `helper561` (~183), `helper570` (~182). `jCe` is a 7-line stub (skip).
- Skipped `_workbookS`/WorkbookN / KJe–aYe / `xLe`; deferred `rze`/`kht`/`Vht`/`Uft`/`ODe`/`Kht`/`rxe`.
- Peeled `Tbe` (+ `wbe`) → `workbook/chart-category-axes/` (`ccaH`); chart-paint `paintRadar` → `paintCategoryAxes` (hook was misnamed).
- Peeled `nCe` (+ `QSe`/`$Se`/`eCe`/`tCe`/`uxe`) → `workbook/chart-scatter-series/` (`cssH`); chart-paint `paintLine` → `paintScatterSeries` (hook was misnamed).
- Peeled `gCe` (+ `hCe`) → `workbook/chart-histogram-axes/` (`chaH`); chart-paint `paintDoughnut` → `paintHistogramAxes` (hook was misnamed).
- Peeled `helper561` → `workbook/chart-data-table/` (`cdtH`); chart-paint dropped `bh561`.
- Peeled `helper570` (+ `helper569`) → `workbook/chart-scatter-axes/` (`csaH`); chart-paint dropped `bh570`.
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on five modules + chart-paint + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 62936 (was 63920; Δ -984).
- Next: `rxe` (~0.24k three-cam) / `ODe` (~0.21k) after constraint readiness / `rze` after `_workbookS` / `kht` after WorkbookN / clean `xLe`.

## Wave-97 progress

- Re-scanned ≥160 clusters: WorkbookN (~1.8k leave), `_workbookS`/`vYe` (~1.2k leave), `rze`/`kht` blocked leave-behinds, `rxe` (~249), `helper540` (~191), `Fwe` (~187), `helper525` (~184), `Upt` (~183), `ODe` (~210) + contiguous auto-layout (`Binding1369`…`kDe` ~700).
- Skipped `_workbookS`/WorkbookN / KJe–aYe / `xLe`; deferred `rze`/`kht`; `Vht`/`Uft`/`Kht` still not top-level peels (env bag / class).
- Peeled `rxe` → `workbook/three-chart-camera/` (`tccH.cameraDir` ← Binding1142/ixe).
- Peeled `helper525` → `workbook/chart-trendline/` (`ctlH`); chart-paint dropped `bh525`.
- Peeled `helper540` → `workbook/chart-scatter-scale/` (`csscH`); chart-paint dropped `bh540`.
- Peeled `Fwe` → `workbook/paint-images/` (`piH` bitmap caches ← Binding1254/1255).
- Peeled `Binding1369`…`kDe` (incl. `EDe`/`DDe`/`ODe`) → `workbook/constraint-layout/`; presentation-slide ensures keep working via aliases.
- Peeled `Upt` → `workbook/selection-style-grid/` (`ssgH.bh229`).
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on six modules + chart-paint + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 61416 (was 62936; Δ -1520).
- Next: `rze` after `_workbookS` / `kht` after WorkbookN / mid peels (`jxe`/`wSe`/`ECe`/`Nxe`) / clean `xLe`.

## Wave-98 progress

- Re-scanned ≥200 clusters with fixed brace matching: most prior inventory mid-hits were **FALSE** (`helper659`/`667`/`jgt`/`vrt`/`SEe`/`GJe`/`helper378`/`wIe`/`helper654`/`helper821`/`uvt` tiny; `ADe`/`Rwe` <80 after default-`{}` fix). `ict` ~6k was a false mega-span.
- Real ≥180: WorkbookN (~1.9k leave), `_workbookS` (~1.3k leave), `rze`/`kht` blocked, `Uft`/`Kht`/`Vht` deferred classes/env, **`jCe` is NOT a stub** (~260 box-whisker paint; prior "7-line stub" was a false hit).
- Peeled `helper500` → `workbook/chart-data-labels/` (`cdlH`).
- Peeled `jxe`+`wSe` → `workbook/chart-legend-plot/` (`clpH`); chart-paint imports `layoutLegendPlot`.
- Peeled `Nxe`…`Lxe` → `workbook/chart-category-axis-labels/` (`calH`); plot-layout imports `paintCategoryAxisLabels`.
- Peeled box-whisker `SCe`…`ECe`+`OCe`+`helper578`/`ACe`/`jCe` → `workbook/chart-box-whisker/`; fixed misnamed `paintHistogram`/`paintWaterfall`/`paintCombo` hooks.
- Skipped `xLe`; deferred leave-behinds / `Vht`/`Uft`/`Kht`; did not force `rze`/`kht`.
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on four modules + chart-paint + chart-plot-layout + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 59946 (was 61416; Δ -1470).
- Next: `helper528` (~166 area series) / `Vwe` path bounds / `STe` table paint / `helper423` trendline forecast / leave-behinds when consumers clean / clean `xLe`.

## Wave-99 progress

- Re-scanned ≥140 with default-`{}`-aware brace matching. **FALSE:** `Vht` is an rgba string assign (not a ~270 class). **DEFER:** `Uft` class (~226) / `Kht` class (~205) ensure/class fan-out. **LEAVE:** `rze`/`kht` / WorkbookN / `_workbookS`. Nested `kLe`/`jLe`/`xLe` skipped.
- Real ≥140 taken: `helper528`/`Vwe`/`helper423`/`STe`/`helper643`/`$Te` (also noted `helper490`/`NOe`/`sCe`/`Kye` for later).
- Peeled `helper528` → `workbook/chart-line-series/` (`clnH`; d3-line + trendline/data-label imports).
- Peeled `helper423` → `workbook/chart-group-scales/` (`cgsH`; d3 band/point/linear).
- Peeled `Vwe` → `workbook/shape-path-endpoints/` (workbookGt only).
- Peeled `STe` → `workbook/table-cell-paint/` (`tcpH`).
- Peeled `helper643` → `workbook/text-frame-embeds/` (`tfeH`).
- Peeled `$Te` → `workbook/slide-image-paint/` (`sipH`).
- Skipped leave-behinds / `Uft`/`Kht`; did not force `rze`/`kht`.
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on six modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 59132 (was 59946; Δ -814).
- Next: `helper490` legend layout / `sCe` area paint / `NOe`/`Kye` / `Uft`/`Kht` when ensure-safe / leave-behinds when consumers clean / clean `xLe`.

## Wave-100 progress

- Re-scanned ≥120 after wave-99. **FALSE nest:** `gxe`/`oCe` esmInit close before helper529/sCe (inventory brace over-span). **LEAVE:** `rze`/`kht` / WorkbookN / `_workbookS`. **DEFER:** `Uft`/`Kht`. Nested `xLe` skipped.
- Real mid peels: `helper490`/`helper529`/`sCe`/`Kye`/`NOe` + neighbor `dCe`.
- Peeled `helper490` → `workbook/chart-legend-layout/` (`cllH`; paintTextElement + Cn/Mn/j).
- Peeled `helper529` → `workbook/chart-area-series/` (`casH`; d3-color + tr).
- Peeled `sCe` → `workbook/chart-histogram-bars/` (`chbH`; fixed x/y TDZ rename collision; data-label import).
- Peeled `Kye` → `workbook/chart-surface-map/` (`csmH`; d3-array extent + d3-scale-linear).
- Peeled `NOe` → `workbook/compose-inline-text/` (`citH`).
- Peeled `dCe` → `workbook/chart-waterfall-bar/` (`cwbH`).
- Skipped leave-behinds / `Uft`/`Kht` / `aCe` bubble (optional next).
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on six modules + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 58451 (was 59132; Δ -681).
- Next: `helper594`/`F0e`/`YCe`/`helper496` mids / `aCe` bubble / `Uft`/`Kht` when ensure-safe / leave-behinds when consumers clean.

## Wave-101 progress

- Re-scanned ≥110 after wave-100. **FALSE/ESM:** `ict`/`WEe`/`TIe`/`$nt`/`zwe`/`yEe`/`Oht`/`npt`/`gxe`/`Binding1150`/`_xe`. **LEAVE:** `rze`/`kht` / WorkbookN / `_workbookS` (esm bags still fan out; partial method peel still unsafe). **DEFER:** `Uft`/`Kht`.
- Real mids: `helper594`/`F0e`/`YCe`/`helper496`/`helper1022`/`wmt` + bubble neighbor `aCe`.
- Peeled `helper496` → `workbook/chart-pie-series/` (`cpsH`); chart-paint imports `paintPieSeries` (dropped `bh496`).
- Peeled `aCe` → `workbook/chart-bubble-series/` (`cbsH`); chart-paint `paintMap` → `paintBubbleSeries` (misnamed for BUBBLE).
- Peeled `YCe` → `workbook/sparkline-paint/` (`spkH` for XCe/ZCe + Binding1230–1235).
- Peeled `helper594` → `workbook/icon-set-symbols/` (`icsH` symbol colors).
- Peeled `F0e` → `workbook/formula-irr/` (`irrH`; Binding1835/1838 from formula-stats).
- Peeled `wmt` → `workbook/html-paste/` (`htmH`; `formatA1` direct import).
- Peeled `helper1022` → `workbook/formula-ast-remap/` (`farH.remapRangeRef` ← Bht).
- Skipped leave-behinds / large esm / `Uft`/`Kht`.
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on seven modules + chart-paint + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 57711 (was 58451; Δ -740).
- Next: mid neighbors (`fbe`/`helper576`/`helper555`/`RTe`/`Cbe`/`ewe`/`Alt`) / leave-behinds when `_workbookS`/WorkbookN ensure fan-out shrinks / clean `xLe`.

## Wave-102 progress

- Re-scanned ≥100 after wave-101. **FALSE/ESM:** `ict`/`WEe`/`TIe`/`$nt`/`zwe`/`yEe`/`Oht`/`npt`/`gxe`/`Binding1150`/`_xe`/`helper672@xDe`. **LEAVE:** `rze`/`kht` (WorkbookN/`_workbookS` not top-level).
- Preferred reals: `fbe`/`helper576`/`Alt`/`RTe`/`helper555`/`Cbe`/`ewe` (+ owned `bCe`/`helper646`).
- Peeled `fbe` → `workbook/chart-pie-series/` `paintPieLabels` (direct call; `cpsH` for font/color/fill/stroke).
- Peeled `Cbe` → `workbook/chart-treemap-plot-layout/`; chart-paint `paintTreemap` → `layoutTreemapPlot`.
- Peeled `helper555` → `workbook/chart-histogram-bins/`; chart-paint `bh555` → `computeHistogramBins`.
- Peeled `helper576`+`bCe` → `workbook/chart-funnel-segments/`; chart-paint `bh576` → `computeFunnelSegments`.
- Peeled `ewe` → `workbook/sheet-hidden-boundaries/` (twe cache stays).
- Peeled `RTe`+`helper646` → `workbook/slide-background-paint/`; slide-canvas-render direct import.
- Peeled `Alt` → `workbook/formula-matrix-inverse/` (MINVERSE core; Binding1942/1944 hooks).
- Deferred ≥100 neighbors: `txe`/`yxe`/`axe`/`dTe`/`bye`/`helper421`/`helper678`/`helper884`.
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on modules + chart-paint + slide-canvas-render + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 57000 (was 57711; Δ -711).
- Next: ≥100 chart/series neighbors (`txe`/`yxe`/`axe`/`dTe`/`bye`/`helper421`/`helper678`/`helper884`) / leave-behinds when safe.

## Wave-103 progress

- Re-scanned ≥90 after wave-102. **FALSE/ESM:** `ict`/`WEe`/`TIe`/`$nt`/`zwe`/`yEe`/`Oht`/`npt`/`gxe`/`Binding1150`/`_xe`/`xDe`/`ftt`/`Binding841`/`helper672@xDe`. **LEAVE:** `rze`/`kht` (WorkbookN/`_workbookS` not top-level).
- Preferred reals: `txe`/`dTe`/`helper884`/`axe`/`helper678`/`yxe`/`helper421`/`bye` (+ neighbor `vCe`; owned `xye`/`Sye`/`Cye`/`helper401`/`nxe`/`helper522`/`helper882`/`helper883`).
- Peeled `bye` cluster → `workbook/chart-axis-auto-domain/` (`computeAxisAutoDomain`).
- Peeled `helper421` → `workbook/chart-bar-series/` `computeBarSegments` (bar-direction + three-chart-paint direct import).
- Peeled `txe`+`nxe`+`helper522` → `workbook/three-chart-paint/` `paintPie3d` (chart-paint hook was misnamed `paintBar` for PIE_3D).
- Peeled `axe` → `workbook/chart-line-series/` `stackLineLayers`.
- Peeled `yxe` → `workbook/chart-combo-groups/` (chart-paint hook was misnamed `paintScatter` for COMBO).
- Peeled `vCe` → `workbook/chart-funnel-segments/` `paintFunnelBars` (hook was misnamed `paintBar3d`).
- Peeled `dTe` → `workbook/shape-path-densify/`.
- Peeled `helper678` → `workbook/compose-element-snapshot/`.
- Peeled `helper884`+`882`/`883` → `workbook/formula-yearfrac/`.
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on modules + chart-paint + peers + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 56143 (was 57000; Δ -857).
- Next: newly revealed ≥90 (`helper551`/`uSe`/`helper545`/`uwe`/`JOe`/`Dmt`/`$B`/`Z0e`/`helper1008`) / leave-behinds when safe.

## Wave-104 progress

- Re-scanned ≥85 after wave-103. **FALSE/ESM:** `ict`/`WEe`/`TIe`/`$nt`/`zwe`/`yEe`/`Oht`/`npt`/`gxe`/`Binding1150`/`_xe`/`xDe`/`ftt`/`Binding841`/`helper672@xDe`/`helper391@841`/`hxe@mxe`/`helper601@Twe`/`Amt@kmt`. **LEAVE:** `rze`/`kht` (WorkbookN/`_workbookS` not top-level).
- Preferred reals: `helper551`+`fSe`/`pSe`, `JOe`, `uSe`, `Dmt`+`Omt`, `$B`+`gTe`/`helper633`/`_Te`, `Z0e`, `helper1008`, `helper545`, `uwe`…`ywe` (+ neighbor `Jpt`).
- Peeled `helper545` → `workbook/chart-scatter-axes/` `planScatterAxes`.
- Peeled `uSe` → `workbook/chart-legend-plot/` `reserveTitleBand`.
- Peeled `helper551`+`fSe`/`pSe` → `workbook/chart-series-values/`.
- Peeled `uwe`…`ywe` → `workbook/icon-set-paint/` `paintIconSetGlyph`.
- Peeled `$B` cluster → `workbook/table-cell-paint/` `layoutTableColumns`.
- Peeled `JOe` → `workbook/compose-jsx-lower/` `lowerPanelSurfaceTag`.
- Peeled `Z0e` → `workbook/formula-irr/` `computeXirr`.
- Peeled `helper1008` → `workbook/formula-ast-remap/` `exprContainsLambda`.
- Peeled `Dmt`/`Omt`+`Jpt` → `workbook/html-paste/`.
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on modules + peers + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 54770 (was 56143; Δ -1373).
- Next: newly revealed ≥85 / leave-behinds when safe.

## Wave-105 progress

- Re-scanned ≥80 after wave-104. **FALSE/ESM:** `ict`/`WEe`/`TIe`/`$nt`/`zwe`/`yEe`/`Oht`/`npt`/`gxe`/`Binding1150`/`_xe`/`helper672@xDe`/`helper391@841`/`hxe@mxe`/`helper601@Twe`/`Amt@kmt`. **LEAVE:** `rze`/`kht` (WorkbookN/`_workbookS` not top-level). **Yye** was a false nest@Binding888 — real peel (treemap tiles; `paintAxis` hook name is legacy misnomer).
- Preferred reals: `uTe`, `vAe`, `jTe`, `cAe`, `Yye`, `helper600`, `nEe`, `XCe` (+ neighbors `ZCe`, `tEe`, `helper765`).
- Peeled `XCe`+`ZCe` → `workbook/sparkline-paint/` (leave-behind resolved).
- Peeled `helper600` → `workbook/canvas-paint/` `fillCellBackground`.
- Peeled `uTe` → `workbook/shape-path-densify/` `trimPathStart`.
- Peeled `jTe` → `workbook/floating-placement/` `resolveFloatingPlacement`.
- Peeled `tEe`+`nEe` → `workbook/slide-canvas-render/` `paintSlideText`.
- Peeled `Yye` → `workbook/chart-treemap-tiles/` `layoutTreemapTiles`.
- Peeled `cAe`+`vAe` → `workbook/presentation-code-block/`.
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on modules + peers + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 54138 (was 54798; Δ -660).
- Next: newly revealed ≥80 / leave-behinds when safe.

## Wave-106 progress

- Re-scanned ≥75 after wave-105. **FALSE/ESM:** `ict`/`_xe@1150`/`helper672@xDe`/`helper391@841`/`hxe@mxe`/`helper601@Twe`/`Amt@kmt`/`helper438@866`/`PDe@1489`/`BTe@zTe`. **LEAVE:** `rze`/`kht` (WorkbookN/`_workbookS` not top-level).
- Preferred reals: `zCe`, `VXe`, `helper384`, `ASe`, `Bht`, `helper685`, `helper896`, `W0e`, `klt`, `Tmt` (+ neighbors `BCe`/`VCe`, `Emt`, `helper1023`).
- `zCe` verified as peelable paintCharts dispatcher (not leave-behind glue); `_z` kept (extra caller).
- Peeled `zCe`+`BCe`+`VCe` → `workbook/canvas-paint/` `paintCharts`.
- Peeled `helper384` → `workbook/table-styles/` `resolveTableCellStyleBands`.
- Peeled `ASe` → `workbook/chart-card-paint/`.
- Peeled `helper685` → `workbook/compose-element-snapshot/` `snapshotParagraphs`.
- Peeled `VXe` → `workbook/formula-dep-scc/`.
- Peeled `helper896` → `workbook/formula-criteria-match/`.
- Peeled `W0e` → `workbook/formula-irr/` `computeRate`.
- Peeled `klt` → `workbook/formula-matrix-inverse/` `computeDeterminant`.
- Peeled `Tmt`+`Emt` → `workbook/html-paste/` (leave-behind resolved).
- Peeled `Bht`+`helper1023` → `workbook/formula-ast-remap/` (leave-behind resolved).
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on modules + peers + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 53312 (was 54143; Δ -831).
- Next: newly revealed ≥75–90 / leave-behinds when safe.

## Wave-107 progress

- Re-scanned ≥70 after wave-106. **FALSE/ESM:** `ict`/`_xe@1150`/`helper672@xDe`/`helper391@841`/`hxe@mxe`/`helper601@Twe`/`Amt@kmt`/`helper438@866`/`PDe@1489`/`BTe@zTe`. **LEAVE:** `rze`/`kht`/`WorkbookN`/`_workbookS`. **SKIP:** `Qwe` (heavy leave-behinds), `CSe` (dead).
- Preferred reals + owned neighbors: `Rwe`/`cTe`/`dEe`-cluster/`qSe`/`VDe`+HDe/`pQe`/`k0e`/`H0e`/`pCe`/`mTe`/`helper524`/`_Se`/`helper539`/`bTe`+`xTe`/`UXe`+`WXe`+`GXe`.
- Boundary wired via single-pass line-range drain; `openBoundary` kept.
- QG PASS on modules + peers + boundary `--no-cache --allow-open-boundaries`.
- Boundary LOC ≈ 52005 (was 53308; Δ -1303).
- Next: newly revealed ≥70–85 / `Qwe` when leave-behinds thin / leave-behinds when safe.

## Wave 108 (Stage-3 mid peel)

- Boundary 52006 → 51226 (Δ -780)
- Peeled: ibe+abe, helper455/456/458, helper532, UTe+HTe, helper876, helper893+$4, E0e+D0e, oht+uht, Nht+Pht
- Skipped FALSE ict nests (Llt/kpt/…), Qwe leave-behinds, CSe dead, FALSE/ESM inventory
- openBoundary remains while mega still large

## Wave 109 (Stage-3 mid peel)

- Boundary 51226 → 50500 (Δ -726)
- Peeled: helper713, DZe, helper389+\_ye+390, helper480, BSe+VSe/HSe/USe/567/WSe, XDe+ZDe/QDe+helper676, helper495+492/493/494, hze+helper786, NSe
- Skipped Qwe (leave-behinds), I8e/iOe/QOe heavy, FALSE/ESM nests, rze/kht
- WorkbookN/\_workbookS: still no top decls (method-peeled)
- openBoundary remains while mega still large

## Wave 110 (Stage-3 preferred + mid peel)

- Boundary 50500 → 49748 (Δ -752)
- Peeled: I8e+F8e+L8e+927/928/929+R8e/z8e/B8e/V8e/H8e/U8e; iOe+aOe+oOe+sOe+686/687/688/rOe; QOe+helper712; T0e/O0e/P0e; tTe; Ost+kst+Ast
- Skipped Qwe (leave-behinds $we/618/623/611), fye (Binding836), ADe/BDe/dbe heavy, FALSE/ESM, rze/kht
- WorkbookN/\_workbookS: still no top decls (method-peeled)
- openBoundary remains while mega still large

## Wave 111 (Stage-3 preferred + mid peel)

- Boundary 49748 → 48990 (Δ -758)
- Peeled: helper453/454/457/459/460; ube+dbe; Zbe+519; dxe+526+fxe+527; helper547→lSe; helper562+563; fCe; pTe+629; bAe+766/xAe/767
- Deferred table bands (fye/dye/386): leave-behinds helper339/340 + Binding836/pye
- Skipped Qwe (leave-behinds $we/618/623/611), ADe/helper672 (Binding137x), BDe (690/691/695), helper440 cluster, helper648/Lwe, FALSE/ESM, rze/kht
- openBoundary remains while mega still large

## Wave 112 (Stage-3 preferred + mid peel)

- Boundary 48990 → 48247 (Δ -743)
- Peeled: helper380→fye + helper386/mye/hye (Binding835 inlined; pye/Binding836 kept); helper546; helper440+Iye+441/442/Lye/Rye/443; swe/Swe; Lwe+647/648
- helper339/340 already wired from table-vo (wave-76) — unlocked bands
- Skipped Qwe (leave-behinds $we/618/623/611), ADe/helper672, BDe (690/691/695), Binding836/pye, FALSE/ESM, rze/kht
- openBoundary remains while mega still large

## Wave 113 (Stage-3 preferred + stroke unlock)

- Boundary 48247 → 46792 (Δ -1455)
- Peeled: helper388/391/403+417/Mye; helper433/438/428+RCe/KSe; helper475+Xye; PSe+565/566+LSe; cxe/hxe/Cxe; Oxe+Dxe+534; UCe+588+WCe; JCe; FPe; helper611+Qwe stroke cluster (618–623/$we/eTe/nTe/rTe/iTe/aTe/oTe/sTe/lTe)
- Skipped pye/Binding836 (Binding836 absent), helper489 (SSF), helper603, hbe extras, ADe/BDe, rze, kht FALSE
- openBoundary remains while mega still large

## Wave 114 (Stage-3 preferred peels)

- Boundary 46792 → 46077 (Δ -715)
- Peeled: hbe+mbe+407/410/414/497; helper489+Wye/Uye; sbe/cbe; \_xe+530/531; helper439/478 (SSF); $L/558/559; helper601; helper626/627; BTe/VTe/WTe
- Skipped helper603 (ESM Map), helper853 (formula nest), PDe/BDe (incomplete), MOe/XOe (Binding154 ESM), ADe/rze/kht/ict, pye
- openBoundary remains while mega still large

## Wave 115 (Stage-3 preferred peels)

- Boundary 46076 → 45128 (Δ -948)
- Peeled: MOe/XOe/YOe/ZOe + Binding154 Sets inlined; HOe/POe/VOe/UOe/$q/702–721/ake; PDe/BDe/FDe/vOe + 690–696/693/bOe/xOe; dead CSe/SSe/560
- Skipped helper603 (Nwe Map ESM), helper853 (841/850 still local nest), ADe/rze/kht/ict, pye
- Leave-behind: ADe needs helper672; BDe cluster now drained; rze still blocked on mutation helpers
- openBoundary remains while mega still large

## Wave 116 (Stage-3 preferred + ict-false mid-file)

- Boundary 45128 → 43777 (Δ -1351)
- Peeled: yye; helper593; ROe+AOe+BOe+zOe+704/705/706/707/711/IOe; LIe+RIe+Y$; BXe; ZXe/$Xe/836–853 nest; Tpt/Ept/Apt/kpt+validation catalog+\_WorkbookI
- Confirmed **ict FALSE HIT** (brace matcher sib=340); mid-file Apt/kpt/Tpt are real top-level peels; ict body now ~14 LOC after peel
- Skipped helper603 (Nwe Map ESM), ADe+672, rze, kht, Amt chart-raster nest
- Leave-behind: helper853 now drained; ADe still needs helper672; rze still blocked
- openBoundary remains while mega still large

## Wave 117 (Stage-3 preferred edit/html/chart-raster)

- Boundary 43777 → 42495 (Δ -1282)
- Peeled: lLe..bLe presentation-edit cluster; Ypt..helper1013/Qpt html-paste helpers; Amt..Zmt chart-raster nest (incl. jmt)
- Confirmed all ≥40 inventory entries are REAL (sib=1); ict already cleared wave-116
- Skipped Llt/Lut/bdt (formula-registry entangled); helper603 (Nwe); ADe+672; rze; kht
- Leave-behind: ADe still needs helper672; rze/kht still blocked
- openBoundary remains while mega still large

## Wave 118 (Stage-3 preferred mid-file + leave-behind unlock)

- Boundary 42495 → 40982 (Δ -1513)
- Peeled: helper672+ADe grid-frame-layout (Binding1372–1386/jDe inlined); helper967..Ict formula-sort-filter (Tct/Pct/wct + SORT/FILTER helpers; Binding1939–1941/Hct inlined; helper962/966 via hooks)
- Confirmed all ≥40 inventory entries are REAL (sib=1)
- Skipped Llt/Lut/bdt/Edt/Tft/qft (adjacent helper nests); helper603 (Nwe); rze; kht; sat/oat; qQe/z$e
- Leave-behind: ADe+672 **unlocked/drained**; rze/kht still blocked; helper603 still needs Nwe Map ESM
- openBoundary remains while mega still large

## Wave 119 (Stage-3 preferred mid-file + text + CF)

- Boundary 40982 → 39071 (Δ -1911)
- Peeled: helper976..Rut formula-criteria-lookup (Llt/Lut/iut/Out/rlt/tlt/Gct; Binding1942–1944/But inlined; math thin-wrappers via hooks); vdt..Jdt formula-text-split (bdt/Edt; Binding1945/1946 inlined); Fht/Iht cf-icon-color-scale
- Confirmed ≥40 inventory entries REAL (sib=1)
- Skipped eft/Tft/qft/tpt (Nft/Uft ESM); helper603 (Nwe); sat/oat; qQe/z$e/\_4e/879; rze; kht body
- Leave-behind: rze/kht still blocked (kht now imports Fht); helper603 still needs Nwe Map ESM
- openBoundary remains while mega still large

## Wave 120 (Stage-3 preferred mid-file + Nft/Uft ESM + CF)

- Boundary 39072 → 37827 (Δ -1245)
- Peeled: helper996..Hft/Nft formula-call-dispatch (eft/Tft); helper1007..Kft formula-range-index (Uft/Wft/Gft/Kft); qft..tpt formula-structured-ref; Rht cf-cell-compare
- Confirmed Nft/Uft ESM nests real and included; ≥40 inventory entries REAL
- Skipped helper603 (Nwe); sat/oat (Kat); qQe/z$e/\_4e/879 (859 nest); rze; kht
- Leave-behind: rze/kht still blocked; helper603 still needs Nwe Map ESM
- openBoundary remains while mega still large

## Wave 121 (Stage-3 preferred formula nest + sat/oat·Kat)

- Boundary 37827 → 34979 (Δ -2848)
- Peeled: isNonNullArg..days360 formula-scalar-funcs (owns average nest; preferred qQe/z$e/days360); oat/sat + Kat + parseSettlementMaturity..isBondError formula-bond-basis (Binding1896/1927–1932 via hooks)
- Skipped \_4e (Q2e/l4e); helper603 (Nwe Map ESM); rze; kht
- Leave-behind: rze still 1 caller in WorkbookN apply; kht still in ensure bag; helper603 still needs Nwe Map ESM
- QG PASS on new modules + boundary `--no-cache --allow-open-boundaries`; full tree with `--allow-open-boundaries --allow-flat --allow-mechanical-names`
- openBoundary remains while mega still large

## Wave 122 (Stage-3 preferred \_4e + mid-batch financial)

- Boundary 34979 → 34213 (Δ -766)
- Peeled: formula-financial annuity helper897..Q0e (w0e/fv/npvArgs/pmt; closes ffinH fn899/fn901); formula-bond-basis lat/uat/dat/fat; formula-average-a $3/Q2e/l4e/\_4e (owns Q2e/l4e for preferred \_4e)
- Skipped P8e (j8e/I8e); fze..\_ze (rze callsites); helper603 (Nwe); rze; kht
- Leave-behind: rze still WorkbookN.apply; kht still ensure bag; helper603 still needs Nwe Map ESM
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`; full tree with `--allow-open-boundaries --allow-flat --allow-mechanical-names`
- openBoundary remains while mega still large

## Wave 123 (Stage-3 preferred fze/P8e/g4e + mid helpers)

- Boundary 34213 → 33826 (Δ -387)
- Peeled: shape-style-apply fze..vze (rze callers import); formula-dsum-criteria j8e..P8e; formula-averageif helper913/914+p4e..g4e; apt; ppt+mpt; jht (kht caller); Lst; bSe+helper557
- Skipped W4e (s4e nest); mht/Sht (helper1015 fan-out); helper603 (Nwe); rze; kht
- Leave-behind: rze still WorkbookN.apply (now imports fze/gze/\_ze/mze); kht still ensure bag (now imports jht); helper603 still needs Nwe Map ESM
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`; full tree with `--allow-open-boundaries --allow-flat --allow-mechanical-names`
- openBoundary remains while mega still large

## Wave 124 (Stage-3 preferred W4e/s4e + mid helpers ≥35)

- Boundary 33826 → 32801 (Δ -1025)
- Peeled: formula-skew s4e..helper912+W4e; chart-path-colors helper477; shape-path helper608; icon-set-paint lwe+595; chart-group-scales helper398; floating-placement MTe; chart-category-axes 419+Aye+jye; formula-shared-refs 589..592; xlsx-dynamic-array-meta opt..bpt (\_pt); chart-data-table DSe..ISe; text-frame-style 689..hOe+EOe
- Skipped: \_be/bbe (chart fan-out); a3e/h6e (helper916 shared with f4e); helper483 (Bn+Binding908); helper603 (Nwe); rze/kht leave-behinds
- Leave-behind: rze still imports fze/gze/\_ze/mze — needs yze/bze/dze + ensure fan-out; kht imports jht — needs mht/Sht/helper1015
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`; full tree with `--allow-open-boundaries --allow-flat --allow-mechanical-names`
- openBoundary remains while mega still large

## Wave 125 (Stage-3 preferred a3e/h6e/\_be + mid peels)

- Boundary 32803 → 32266 (Δ -537)
- Peeled: formula-criteria-shape helper902..903/915/916/f4e/a3e/d3e/d6e/920/921/h6e; chart-axis-reserve 429/430/434..436+\_be/vbe/ybe; chart-group-scales \_O; text-frame-embeds NTe; cf-range-stats 1014/1015/sht/cht/Sht/pht/mht/1020
- Skipped: bbe (402/406 fan-out); helper483 (Binding908); helper892; Yot/ZRe; helper603 (Nwe); rze/yze/bze/dze; kht (ensure bag)
- Leave-behind: rze still needs yze/bze/dze + ensure; kht now has mht/Sht/1015 owned — still needs ensure/Sht peers in bag; bbe needs helper402/406 nest
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`; full tree with `--allow-open-boundaries --allow-flat --allow-mechanical-names`
- openBoundary remains while mega still large

## Wave 126 (Stage-3 preferred bbe nest + yze/ZRe/483/892)

- Boundary 32266 → 31568 (Δ -698)
- Peeled: chart-axis-scale-domain bbe + bh402/wye/bh406 nest (+399/400/404..416/xbe/Sbe); presentation-aid ZRe/JRe/YRe + eze; presentation-ref yze/bze/dze; chart-series-endpoint bh479/483; formula-complex bh886/892; chart-plot-layout iSe; fill-empty bh574/iCe; formula-criteria-shape r3e+922/923
- Skipped: Yot nest; helper603 (Nwe Map ESM); rze (WorkbookN.apply — yze/bze/dze owned, ensure fan-out remains); kht (ensure bag still large)
- Leave-behind: rze path partially unlocked (yze/bze/dze owned); kht still blocked on ensure bag; bbe nest now owned
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: Yot nest / remaining ≥30 mids (YIe/F9e/Uat/zye/…) / rze after ensure readiness / kht after ensure bag / helper603 after Nwe Map ESM

## Wave 127 (Stage-3 preferred Yot nest + mids)

- Boundary 31568 → 30699 (Δ -869)
- Peeled: formula-byrow Yot/Jot nest; compose-code-children YIe; bond Uat/Kit/Wat/gat/\_at; tSe; text-frame-resolve; QCe/TTe/Kwe; presentation-images; Dst/jgt/vrt; dead zye/Bye/Rxe/Vxe
- Skipped: F9e (N9e/date bag); s1e nest; Mst; helper603; rze/kht
- QG PASS; openBoundary kept

## Wave 128 (Stage-3 preferred F9e/s1e/Mst + ≥28 mids)

- Boundary 30699 → 29902 (Δ -797)
- Peeled: formula-eng-mids s1e/P1e/X1e/r0e/Y1e/o0e/z1e/h0e/s2e+889/890/895; formula-date-months F9e/N9e/\_9e; Mst; A8e; v8e; A7e; compose-attach-children dollarOe/eke; cvt; gSe; owe; Gwe; helper614/qwe; mid-paint 470/481/523/596/617/\_Ee/700
- Skipped: helper603 (Nwe Map ESM); rze/kht leave-behinds; helper587/jwe/UEe/1038 (non-ensure outs)
- Leave-behind: rze still needs vYe ensure fan-out; kht still needs Aht/Mht/fht+ensure bag
- Remaining ≥28: rze/kht/helper603/587/jwe/UEe/1038
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: helper587/jwe/UEe/1038 mids / rze after vYe ensure / kht after ensure bag / helper603 after Nwe Map ESM

## Wave 129 (Stage-3 preferred 587/jwe/UEe/1038 + ≥20 mids)

- Boundary 29902 → 29234 (Δ -668)
- Peeled: sheet-range-map helper587/HCe/586/GCe/KCe/\_z; image-svg-decode Awe/jwe; stable-id uuid-v4 BEe/VEe/UEe/659 (cleared scH); formula-ast-walk 1036/Q_t/1037/$\_t/evt/1038/tvt/avt; mid-paint Xwe/Zwe; dead bwe/ySe; cfvo wht/Tht/Eht/Dht; paint Vye/Zye/awe/597; eng-mids F1e/I1e/q1e/$1e
- Skipped: helper603 (Nwe Map ESM); rze (vYe ensure fan-out); kht (Aht/Mht/fht+ensure bag)
- Leave-behind: rze still needs vYe ensure fan-out; kht still needs Aht/Mht/fht+bag; helper603 after Nwe Map ESM
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: remaining ≥20 mids / rze after vYe ensure / kht after ensure bag / helper603 after Nwe Map ESM

## Wave 130 (Stage-3 preferred ≥20–27 batch + CF unlock)

- Boundary 29234 → 28518 (Δ -716)
- Peeled: stroke-resolve 463/465/468–474/482; axis helper536; twe+nwe; picture 609/615/Jwe/Ywe; text wTe/639/640; GDe; JSe; weeknum u1e/y1e; D-stats l0e..y0e; eng-mids 917; dollarXe→chart-data-labels; CF unlock Aht/1021/Mht
- Skipped: helper603 (Nwe Map ESM); rze (vYe/\_workbookS ensure); kht (fht+aht bag); fht (aht still gated)
- Leave-behind: rze still needs vYe ensure fan-out; kht closer (Aht/Mht owned, fht/aht remain); helper603 after Nwe Map ESM
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: remaining ≥20 mids / fht+aht bag → kht / rze after vYe ensure / helper603 after Nwe Map ESM

## Wave 131 (Stage-3 CF engine unlock + preferred mids)

- Boundary 28519 → 27658 (Δ -861)
- Peeled: cf-engine (tht..xht + epoch + kht/Lht/zht + Wht/Ght); text-measure 427/432/437; formula-value-coerce Yut; dead qxe/xwe; formula-and $0e (false-dead, kept via jot)
- Skipped: helper603 (Nwe Map ESM); rze (vYe/\_workbookS ensure); helper935/i4e/Prt/a6e nests; helper891/894 cluster
- Leave-behind: rze still needs vYe/\_workbookS ensure fan-out; kht **unlocked**; helper603 after Nwe Map ESM
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: remaining ≥20 mids / rze after vYe ensure / helper603 after Nwe Map ESM / helper935 nests

## Wave 132 (Stage-3 rze unlock + preferred ≥20 batch)

- Boundary 27660 → 26826 (Δ -834)
- Peeled: presentation-apply rze nest (ize/785/787/aze/oze/sze/cze/lze/uze/788 via prefH); bezier-stroke Uwe/610/Wwe/612/613/fTe/624/625/628/630; compose-code-html-walk 763 nest; IPe; formula-complex H1e..e0e/891/894 + eng-mids V1e; formula-pair-series i4e; formula-value-coerce D3e/O3e
- Skipped: helper603 (Nwe Map ESM); helper935 nest (H7e/w7e); Prt (Irt ensure); a6e (Binding1879 ensure); ETe nest (Binding1275 ensure)
- Leave-behind: rze **unlocked**; helper603 still needs Nwe Map ESM; \_workbookS ensure bag still large (vYe map remains)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: helper935/Prt/a6e/ETe nests / remaining ≥18 mids / helper603 after Nwe Map ESM

## Wave 133 (Stage-3 preferred nests + ≥18/21 mid batch)

- Boundary 26826 → 26127 (Δ -699)
- Peeled: formula-date-months helper930–935/H7e/G7e/C9e; formula-bond-basis Prt+Irt; formula-value-coerce 904–907/t4e/a6e; formula-eng-mids i2e/o2e; table-frame-layout ETe/DTe/641/644/ITe; text-frame-embeds PTe; entity-query bgt/vgt; chart-histogram-bins 553/hSe + chart-bin-width 554; compose-element-snapshot 682/683/WDe; chart-waterfall-bar uCe; icon-set-paint 599; presentation-plugin-add VIe nest
- Skipped: helper603 (Nwe Map ESM); Nrt/jrt/Mrt remain hooked; \_workbookS/vYe ensure bag still large
- Leave-behind: helper603 needs Nwe Map ESM; vYe/\_workbookS bag still large (no clean owned cluster this wave)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: remaining ≥18 mids / Nrt bag / helper603 after Nwe Map ESM / \_workbookS peel if clean

## Wave 134 (Stage-3 preferred ≥16–22 mid batch)

- Boundary 26127 → 25337 (Δ -790)
- Peeled: bond COUP\* wat/Eat/Dat/Oat/kat/Lat; dist wrappers h3e…Z3e + d4e/z4e + helper908/909; lookup-text mst/hst/gst nest; unique pst/Est/Tst; chart/compose/paint mids (Qye/obe/mSe/394/Nye/tke/hEe/…); dead Cwe/Qxe
- Skipped: helper603 (Nwe Map ESM); Nrt/jrt/Mrt bag; qOe (Binding1536/1538); IIe (NIe); helper464 (\_A)
- Leave-behind: helper603 needs Nwe Map ESM; vYe/\_workbookS bag still large; Nrt bag still ensure-fan-out
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: remaining ≥16 mids / Nrt after coupon ensure peel / helper603 after Nwe Map ESM / \_workbookS if clean

## Wave 135 (Stage-3 qOe unlock + financial/chart/eng ≥15 batch)

- Boundary 25337 → 24669 (Δ -668)
- Peeled: compose qOe nest (Binding1532–1539/kOe/698/699/lke) + rke; IIe/wIe (NIe hooked); financial aliases Uit…Fat + zot/ost/Bct; dist W3e/$3e/T6e/E6e; chart 466/476/535/537/538/602/645/lCe; eng radix c1e/h1e/E1e/D1e/O1e/k1e/A1e/j1e/M1e/c0e+885; workbookN; zDe
- Skipped: helper603 (Nwe Map ESM); Nrt/jrt/Mrt bag; helper464 (\_A); live nests 338/375/378/825/936; dAe/WJe/GJe/jXe; i0e (841/$4); 642 (Binding1273 bag); 446 (Binding874)
- Leave-behind: helper603 needs Nwe Map ESM; vYe/\_workbookS bag still large; Nrt bag still ensure-fan-out; NIe remains in mermaid init bag
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: remaining ≥15 / Nrt after coupon ensure / helper603 after Nwe Map ESM / i0e after complex coerce peel

## Wave 136 (Stage-3 preferred nests + ≥12 mid/dead batch)

- Boundary 24669 → 24017 (Δ -652)
- Peeled: granola-log 338 nest; helper375; schema-meta 378/Xve/Jve/Yve+Binding820–823; presentation-code-block lAe…hAe (dAe); stub-context 825/gYe/HLe; embedded-font-codec WJe/GJe/VJe/HJe/UJe; theme AXe/jXe; date A9e/936; complex i0e/a0e; bessel x1e…w1e; financial Hit…Hat; dead kxe/541/Bxe/542/Uxe/Wxe/nke/\_workbookK
- Skipped: helper603 (Nwe Map ESM); helper464 (\_A); 446 (Binding874); 642 (Binding1273); wirePresentationRecipes; Nrt/jrt/Mrt; vYe/\_workbookS
- Leave-behind: helper603 needs Nwe Map ESM; vYe/\_workbookS bag still large; Nrt bag still ensure-fan-out; 446/642 still ensure-gated on Binding874/1273
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: remaining ≥12 / Binding874→446 / Binding1273→642 / helper603 after Nwe / Nrt after coupon ensure

## Wave 137 (Stage-3 Binding874/1273 unlock + ≥12 mid/formula batch)

- Boundary 24017 → 23611 (Δ -406)
- Peeled: category-time 444/446/451/452 (+ Binding874/$k); floating 642; group-scales vye/395/396; chart 420/431/nbe/sxe/xxe/550/654/Zae/Qae; compose 680/jOe/701/FOe; formula thin b4e…gdt + dist o3e…e8e + zct
- Skipped: helper603 (Nwe Map ESM); helper464 (\_A); wirePresentationRecipes; Nrt/jrt/Mrt; vYe/\_workbookS; 575 (Binding1216); I4e/E3e/918/911 nests
- Leave-behind: helper603 needs Nwe Map ESM; vYe/\_workbookS bag still large; Nrt bag still ensure-fan-out; Binding1273 remains in \_workbookJ (literal 1 owned by floating-placement)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: remaining ≥12 / helper603 after Nwe / Nrt after coupon ensure / I4e after helper910 peel

## Wave 138 (Stage-3 I4e/910 + E3e/918 nest + Owe/vTe/575/484 batch)

- Boundary 23611 → 23081 (Δ -530)
- Peeled: formula 910/911 + I4e nest + T3e/E3e/918…Q3e + stubs; 880/881/f5e/p5e/m5e; vTe; helper575; Owe/Dwe/kwe/Mwe; $A/484/488; helper467; dead zxe/eSe
- Skipped: helper603 (Nwe Map ESM); helper464 (\_A); wirePresentationRecipes; 572/573 (wOe); 820/821 (CJe); AJe nest; helper934 (931)
- Leave-behind: helper603 still needs Nwe Map ESM; helper464 (\_A); wirePresentationRecipes false inventory
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: remaining ≥10 / helper572 after wOe peel / 820 after CJe / AJe nest / helper603 after Nwe

## Wave 139 (Stage-3 CJe/820 + helper603 + 572/wOe + AJe + ≥10 batch)

- Boundary 23080 → 22668 (Δ -412)
- Peeled: presentation-presence CJe+820/821 + AJe/DJe/EJe/OJe/kJe; image-svg-decode helper603 (local Map); shape-geometry-paint 571/572/573/wOe; slide-image-paint JTe/YTe/XTe/ZTe; chart-group-scales 424/425; chart-pie-series 568; mid-paint 598; floating ATe; table-frame LTe; compose GOe/TOe; formula-date 934
- Skipped: helper464 (\_A); wirePresentationRecipes; live formula nests (g1e/L1e/887/v1e/t0e/n0e/n2e/Qnt/$2/$7/Agt/667/oYe/379)
- Leave-behind: helper603 **unlocked** (Nwe Map ESM replaced by module-local cache); helper464 (\_A); wirePresentationRecipes false inventory; Nwe stub remains for Iwe→zge side-effect
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: remaining ≥10 live nests / helper464 after \_A / formula g1e… wrappers / oYe scheme parse

## Wave 140 (Stage-3 helper464/_A + formula/theme nests + ≥8 wire batch)

- Boundary 22668 → 22316 (Δ -352)
- Peeled: canvas-fill helper464+_A (fix stroke-resolve `_A` import); formula-date time parts l1e…b1e + Qnt; formula-eng-mids erf/radix t0e/n0e/887… + IFS n2e/Lot/Vot/Rot; font-stack oYe/sYe/822; presentation-theme $2; presentation-presence $7; sheet-catalog Agt; wire/dead ≥8 (422/ebe/KTe/yTe+635/684/eOe/_Oe/SOe/COe/ike/cke + dead 418/Hxe/xSe/ooe)
- Skipped: helper667 (Binding1344); helper379 (Binding833); wirePresentationRecipes; vYe/_workbookS
- Leave-behind: helper464 **unlocked** (_A owned in canvas-fill); wirePresentationRecipes false inventory; Nwe stub remains for Iwe→zge; vYe 1-line stub
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: remaining ≥8 live (667/379 nests, Cot/rst/…); Nrt after coupon ensure; _workbookS when presentation leave-behinds drain

## Wave 141 (Stage-3 Binding833/667 + formula ≥8)

- Boundary 22315 → 21976 (Δ -339)
- Peeled: merged-range-index Binding833+helper379+oye; placeholder-resolve helper667; formula-eng-mids series wrappers t2e/r2e/$2e/u4e…n3e + lookup mids Cot/Pot/Iot/963/Bot/965/rst/ist/sst; chart $O/$I; true-dead Qse/$ye only
- Skipped: Binding1344 class (deps Binding1340/1294/1342 remain); _3e/v3e (Binding1858); Dot/Tot/Eot stack; wire-only ≥6 (387/426/485…/OTe/kTe/UDe — kept for hooks); wirePresentationRecipes; vYe/_workbookS; helper824
- Leave-behind: wirePresentationRecipes false inventory; Nwe stub for Iwe→zge; vYe 1-line stub; _workbookS still entangled (~1.2k, no clean owned slice)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: Binding1344 when 1340/1294/1342 drain; formula _3e/v3e + Dot stack; wire-owned ≥6 peels into chart/compose modules; _workbookS when presentation leave-behinds clear

## Wave 142 (Stage-3 Binding1344 nest + formula ≥5–8 + wire)

- Boundary 21976 → 21035 (Δ -941)
- Peeled: slide-layout Binding1294/xEe/SEe + Binding1340/1338/1339 + Binding1342 + Binding1344/uDe; formula-eng-mids dist/stats wrappers (_3e/v3e/s3e…O8e + stubs) + Dot/Tot/Eot/962 eval-context; wire ≥6–7 into chart/compose/table/text; helper376 collab-snapshot; helper824 font-stack
- Skipped: wirePresentationRecipes; vYe; Nwe/Iwe; _workbookS (~1.2k); Binding1875/_6e bag; Binding1345/dDe (imports Binding1344)
- Leave-behind: wirePresentationRecipes false inventory; Nwe stub for Iwe→zge; vYe 1-line stub; _workbookS still entangled; slide-layout hooks for GAP (_workbookB/_workbookF/Binding1302/1304/1335/1336)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: peel GAP element VO leave-behinds (_workbookB/F/1302/…) to unlock thinner slide-layout hooks; remaining ≥5 formula/mids; _workbookS when presentation leave-behinds clear
## Wave 143 (Stage-3 GAP element VOs + formula/date ≥5 + wire)

- Boundary 21036 → 20245 (Δ -791)
- Peeled: slide-layout GAP (_workbookB/X, Binding1302/1304, _workbookF/P, Binding1335–1337, _U/lDe); formula-eng-mids D* wrappers (_8e…O8e/k8e/924–925); formula-date-months Met/937/938/stt/ltt/dtt + l5e/d5e/g5e/J5e; wire qye/Gye/WOe/631/486/498/461; dead Gxe/Jxe/Kxe
- Skipped: pye (Binding836 leave); hTe (Binding1265 ensure bag); wirePresentationRecipes; vYe; Nwe/Iwe; _workbookS (~1.2k); Binding1330 compose tracks
- Leave-behind: wirePresentationRecipes false inventory; Nwe stub for Iwe→zge; vYe 1-line stub; _workbookS still entangled
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: Binding836→pye / Binding1265→hTe / remaining ≥5; _workbookS when presentation leave-behinds clear

## Wave 144 (Stage-3 Binding836/1265 unlock + collab nest + ≥3 batch)

- Boundary 20245 → 19422 (Δ -823)
- Peeled: collab-snapshot Binding816/817 + Binding818/819 + helper377/qve + Binding824–832/aye; table-styles pye/Binding836/gye; shape-geometry-paint hTe/Binding1265; stubs _workbookEt/helper1035/uvt/_Ye; compose LDe/RDe/681/gOe/KOe
- Skipped: formula ≥3 wrappers (cross-barrel callee risk); wirePresentationRecipes; vYe; Nwe/Iwe; _workbookS (~1.2k); presentation Binding1812+/Pgt wrappers (still import Binding818)
- Leave-behind: wirePresentationRecipes false inventory; Nwe stub for Iwe→zge; vYe 1-line stub; _workbookS still entangled (presentation leave-behinds + Binding1812 collab fan-out)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: presentation Binding1812+/tYe collab wrappers after Binding818; formula ≥3 batch; _workbookS when presentation leave-behinds clear

## Wave 145 (Stage-3 Binding1812/tYe + Pgt/Wgt unlock + _workbookL)

- Boundary 19422 → 18710 (Δ -712)
- Peeled: collab-snapshot presentation owner-sync Binding1812…tYe/eYe; spreadsheet owner-sync Pgt…Wgt/Ggt; font-stack helper823/cYe/_workbookC/_workbookL
- Skipped: formula ≥3 wrappers (defer to next wave); wirePresentationRecipes; vYe; Nwe/Iwe; full _workbookS (~1.2k — presentation recipe/ensure fan-out still live)
- Leave-behind: wirePresentationRecipes false inventory; Nwe stub for Iwe→zge; vYe 1-line stub; _workbookS still entangled (rYe/aYe/WorkbookN/jLe… leave-behinds)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: formula ≥3 contiguous wrappers; peel rYe/aYe/iYe presentation leave-behinds; reassess _workbookS when ensure fan-out shrinks

## Wave 146 (Stage-3 rYe/aYe + NLe + formula ≥3 batches)

- Boundary 18710 → 17981 (Δ -729)
- Peeled: presentation-artifacts rYe/nYe/Binding1816 + aYe/iYe; presentation-list-styles MLe/NLe; formula wrappers e2e…q4e + S6e…s8e + K8e…_5e + x5e…b7e + iot…Fot + Wut…_dt
- Skipped: wirePresentationRecipes; vYe; Nwe/Iwe; jLe (kLe/OLe bag); full _workbookS (~1.2k — ensure fan-out still ~40+ local); b5e stub kept (K8e uses local epoch)
- Leave-behind: wirePresentationRecipes false inventory; Nwe stub for Iwe→zge; vYe 1-line stub; _workbookS still entangled (jLe/WorkbookN/FLe…/compose DSL)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: jLe after kLe/OLe; remaining ≥3 formula; reassess _workbookS when ensure fan-out shrinks further

## Wave 147 (Stage-3 kLe/jLe scripts + master defaults + citations + layouts)

- Boundary 17979 → 17445 (Δ -534)
- Peeled: presentation-scripts kLe/OLe + jLe/ALe; presentation-master-defaults FLe/PLe…QLe/ZLe; presentation-citations bEe/Binding1289–1290; slide-layout dDe/fDe/Binding1345–1346
- Skipped: wirePresentationRecipes; vYe; Nwe/Iwe; full _workbookS (~1.2k); comments walnut sRe/fRe; mDe/pDe; b5e
- Leave-behind: wirePresentationRecipes false inventory; Nwe stub for Iwe→zge; vYe 1-line stub; _workbookS still entangled (WorkbookN/compose DSL/yEe/mDe…)
- _workbookS top ensure calls: 44 → 44; **local esm defs among them: ~22 → 11** (drained jLe/FLe/LLe/zLe/VLe/WLe/XLe/QLe/bEe/dDe/fDe to imports). Remaining local: yEe, workbookD, _workbookT, mDe, workbookEt, CRe, nze, Cze, aJe, WorkbookN, Binding1489
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: mDe/pDe placeholder catalog; yEe ensure bag; WorkbookN method peels; reassess `_workbookS` peel when local ensures drop further

## Wave 148 (Stage-3 mDe/pDe + asset collections + compose tracks + nze + qht)

- Boundary 17445 → 16801 (Δ -644)
- Peeled: placeholder-styles pDe/mDe/Binding1347–1349; presentation-assets workbookD/E + _workbookT/W; compose-layout Binding1330/1325–1329/$H; presentation-patch nze/tze; spreadsheet-view-state qht/Kht
- Skipped: wirePresentationRecipes; vYe; Nwe/Iwe; full _workbookS (~1200 still entangled); comments walnut sRe/fRe; CRe (sRe/fRe dep); yEe/workbookEt/Cze/aJe/Binding1489 thin; WorkbookN; PIe/Bwe/Binding1888; b5e
- Leave-behind: wirePresentationRecipes false inventory; Nwe stub for Iwe→zge; vYe 1-line stub; _workbookS still entangled
- _workbookS top ensures: 44 → 44; **local esm defs among them: 11 → 7** (remaining: yEe, workbookEt, CRe, Cze, aJe, WorkbookN, workbookBinding1489)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: peel yEe/workbookEt/Cze thin bags if clean; WorkbookN method peels; sRe/fRe comments when walnut clears; reassess `_workbookS` when local ensures near zero

## Wave 149 (Stage-3 Bwe/PIe + workbookEt + thin ensures + Binding1888 stub collapse)

- Boundary 16800 → 15698 (Δ -1102)
- Peeled: shape-geometry-paint Bwe/Binding1260–1264; mermaid-convert DIe/PIe/FIe/NIe; emu-units workbookEt/of/Tt; workbook-shell-ensures yEe/Cze/aJe/Binding1489; formula-date-epoch O7e/1885–1888 (collapsed ~220 exclusive empty stubs)
- Skipped: wirePresentationRecipes; vYe; Nwe/Iwe; full _workbookS; comments walnut sRe/fRe; CRe; WorkbookN method peels; b5e
- Leave-behind: wirePresentationRecipes false inventory; Nwe stub for Iwe→zge; vYe 1-line stub; _workbookS still entangled
- _workbookS top ensures: 44 → 44; **local esm defs among them: 7 → 2** (remaining: CRe, WorkbookN)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: WorkbookN method peels; sRe/fRe comments when walnut clears; peel `_workbookS` when local ensures ≈0; remaining ≥3 inventory

## Wave 150 (Stage-3 comments walnut sRe…CRe)

- Boundary 15698 → 14620 (Δ -1078)
- Peeled: comments cluster sRe/fRe/Binding1733/_Re/Binding1736/xRe/WorkbookD/CRe → `workbook/comments/`
- Skipped: wirePresentationRecipes; vYe; Nwe/Iwe; full _workbookS; WorkbookN shell; b5e
- Leave-behind: wirePresentationRecipes false inventory; Nwe stub for Iwe→zge; vYe 1-line stub; _workbookS still entangled (WorkbookN only local ensure)
- _workbookS top ensures: 44 → 44; **local esm defs among them: 2 → 1** (remaining: WorkbookN)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries`
- openBoundary remains while mega still large
- Next: WorkbookN ensure/shell peel when clean; peel `_workbookS` when local ensures ≈0; remaining ≥3 inventory

## Wave 151 (Stage-3 WorkbookN + _workbookS shells)

- Boundary 14620 → 11891 (Δ -2729)
- Peeled: WorkbookN ensure/shell + __workbookT → `workbook/workbook-core/`; _workbookS + vYe + WorkbookClass3 + yYe → `workbook/presentation-doc/`
- Skipped: wirePresentationRecipes; Nwe/Iwe; b5e; mid-gap nests (kXe/FXe/ipt/Ngt/Xht/…)
- Leave-behind: WorkbookN deps/env bag via `wireWorkbookNHooks`; presentation-doc leave-behinds via `wirePresentationDocHooks`
- _workbookS top ensures: 44 → (imported); **local esm defs among them: 1 → 0** (remaining: none)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries --allow-flat`
- openBoundary remains while mega still large
- Next: mid-gap nests between former shells; thin stubs Nwe/Iwe/b5e; wirePresentationRecipes false inventory; closeout when thin

## Wave 152 (Stage-3 mid-gap nests + thin stubs)

- Boundary 11891 → 11255 (Δ -636)
- Peeled: proto-item-collection kXe/DXe/OXe; presentation-theme FXe/PXe/MXe/NXe; table-area-resolver npt/ipt/rpt; dynamic-array-meta Cpt; alias-patch-recorder Xht/Yht/Jht; worksheet-topology Ngt/Mgt; col-row-address Y_t; lazy-workbook-loaders svt/ovt; paint-images Nwe/Iwe Maps; formula-date-epoch b5e
- Fixed: canvas-paint ensureNwe/ensureIwe now call real Nwe/Iwe (was sheet-hidden `nwe` + empty `iwe`)
- Skipped: wirePresentationRecipesFromBoundary (boundary glue); workbookBinding1389 / Nrt / workbookBinding1901 (heavier deps); HXe/KXe empty stubs
- Leave-behind: wirePresentationRecipes false inventory; remaining mid nests (uke/Ort/Binding1389/Nrt…)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries --allow-flat`
- openBoundary remains while mega still large
- Next: workbookBinding1389 slide-element nest; Nrt/workbookBinding1901 formula financial; uke semantic tags; remaining ≥5 inventory

## Wave 153 (Stage-3 Binding1389 + bond coupon/price + semantic tags)

- Boundary 11255 → 10525 (Δ -730)
- Peeled: speaker-notes Binding1389/1387/1388; formula-bond-basis Srt/Ort/Binding1901/Nrt (jrt/Mrt); compose-jsx-lower Binding1531/1544/uke prop sets
- Skipped: workbookBinding1229/913 (chart ensure fan-out); HXe/KXe empty stubs; wirePresentationRecipesFromBoundary; rot leave-behind
- Leave-behind: Binding412 via cjlH.ensureBinding412; rot VALUE/NUM/epoch bag; chart mid nests Binding913/1229
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries --allow-flat`
- openBoundary remains while mega still large
- Next: Binding913/1229 chart ensure cluster; rot; remaining ≥50 inventory; closeout when thin

## Wave 154 (Stage-3 chart-layout ensures + formula error/epoch bags)

- Boundary 10525 → 9650 (Δ -875)
- Peeled: chart-layout-ensures Binding840…1229 + qCe + $Ce; text-frame-insets _workbookJ; formula-date-epoch Binding1880/G8e/rot/nst/Uct/Uut/Ydt
- Skipped: HXe/KXe empty stubs; wirePresentationRecipesFromBoundary
- Leave-behind: thin interleaved formula stubs (c8e/g8e/wot/x7e); no ≥20 nests remain (largest `_C` ~18)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries --allow-flat`
- openBoundary remains while mega still ~9.6k (not thin enough for safe closeout)
- Next: remaining ≥10–18 nests (`_C`/`Binding675`/`fEe`/`wwe`/`Cme`/`eht`); wirePresentationRecipes; closeout when thin

## Wave 155 (Stage-3 mid-ensure residue + recipe wire)

- Boundary 9650 → 9607 (Δ -43)
- Peeled: cf-traffic-colors wwe; guide-layout-consts fEe/Binding1259/Binding1238/workbookO; binding662-gate _C/Binding675/Cme/Tme/Eme/_u/gae…661; shell-mid-ensures QTe/eEe/rEe/…; chart-paste-hints eht/kmt; formula-thin-stubs c8e/x7e/wot/g8e/HXe/KXe; wirePresentationRecipesFromCompose
- Skipped: vendor hljs/graphlib/zod/ssf leave comments; helper31–59 thin formula-array aliases (already drained callees)
- Leave-behind: binding662-gate + shell-mid-ensures + chart-paste-hints still use wire*Hooks (cf-traffic/guide/formula-thin now direct-import)
- QG PASS on new/changed modules + boundary `--no-cache --allow-open-boundaries --allow-flat`
- openBoundary remains while mega still ~9.6k (wire block offsets peel LOC)
- Nest inventory: **no ≥5 esm nests remain** in mega
- Next: slim binding662/shell-mid wires via direct imports; helper31–59 aliases; closeout when thin

## Wave 156 (Stage-3 wire slim + helper/vendor peel)

- Boundary 9607 → 9271 (Δ -336)
- `binding662-gate` / `shell-mid-ensures` / `chart-paste-hints`: retired wire leave-behinds → direct module imports
- helper31–59 formula-array aliases → import renames; dead helper31/35/37 dropped
- Dead vendor comment shims (ssf/hljs/graphlib/zod/Xqe/wNe) removed; consumers already use module/npm paths
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept (~9353 LOC still above thin closeout bar)

### Wave 156b follow-up

- Slimmed `workbook-shell-ensures` / `text-frame-insets` / `chart-layout-ensures` wires → direct imports
- Dropped dead ensure* cluster aliases + helper24 wrapper + leftover jstat/bessel comment shims
- `openBoundary` kept

## Wave 157 (Stage-3 wire slim — WorkbookN / presentation-doc / sheet)

- Boundary 9271 → 8778 (Δ -493)
- Retired `wireWorkbookNHooks` / `wirePresentationDocHooks` / `wireSheetBoundaryHooks` leave-behinds → direct imports in owning modules (`workbook-core/ensure-workbook-n-deps.ts`, `presentation-doc-impl`, `sheet/boundary-hooks`)
- Peeled thin Yjs aliases (`_o`/`is`/Binding210–266/`os`), empty `lvt`/`qpt`/`ygt`/`xgt`, and Binding1824/1826/1935/helper832/`_gt`/`jYe` mega aliases; public `workbookAt`/`workbookKt` retained
- Fixed presentation-doc `Zqe` leave-behind to `runPresentationRecipe` (wave-156 rename residue)
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept
- QG PASS on sheet + workbook-core + presentation-doc + boundary `--no-cache --allow-open-boundaries`
- Next: slim `wireFormulaCriteriaLookupBoundaryHooks` / `wireCanvasPaintBoundaryHooks` / other large wires; reassess openBoundary closeout when mega is thin enough

## Wave 158 (Stage-3 wire slim — criteria/canvas/slide/registry/mermaid/layout)

- Boundary 8779 → 8376 (Δ -403)
- Retired `wireFormulaCriteriaLookupBoundaryHooks` / `wireCanvasPaintBoundaryHooks` / `wirePresentationSlideBoundaryHooks` / `wireFormulaRegistryBoundaryHooks` / `wireMermaidSlideAdapterHooks` / `wireSlideLayoutBoundaryHooks` → direct imports in owning modules
- Cycle edges: presentation-plugin-add → `ps-slots`; image-connector → `connector-epsilon`
- Kept: `setFormulaImplBag` mega bag (formula impls still in boundary)
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept
- QG PASS on changed modules + boundary `--no-cache --allow-open-boundaries`
- Next: slim remaining mid-size wires (compose-jsx-lower / chart-legend-layout / table-element / …); reassess openBoundary closeout when mega is thin enough

## Wave 159 (Stage-3 wire slim — mid-size leave-behinds)

- Boundary 8376 → 7871 (Δ -505)
- Retired 13 mid-size wires → direct imports: compose-jsx-lower, chart-legend-layout, table-element, worksheet-drawings, compose-element-snapshot, formula-stats, compose-dsl, google-slides-adapter, entity-query, shape-geometry-paint, chart-group-scales, slide-canvas-render, chart-pie-series
- Same-package / reverse-cycle deps use createRequire lazies; Binding433 inlined as no-op; entity-query xgt/ygt inlined off workbook-core
- Kept: `setFormulaImplBag` mega bag; chart-paint / chart-axis-ticks wires (next)
- Boundary wired via line-range drain (no mega-file StrReplace); `openBoundary` kept
- QG PASS on changed modules + boundary `--no-cache --allow-open-boundaries`
- Next: slim chart-paint / chart-axis-ticks + remaining mid wires; reassess openBoundary closeout when mega is thin enough


