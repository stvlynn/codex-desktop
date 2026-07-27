// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Kind → icon component map (bundle local `XL` filled in init `ZL`).

import type { ComponentType, SVGProps } from "react";
import type { ArtifactFileKind } from "./resolve-artifact-file-kind";
import { ArtifactDocumentFileIcon } from "../icons/artifact-document-file-icon";
import { BuildFileIcon } from "../icons/build-file-icon";
import { CodeFileIcon } from "../icons/code-file-icon";
import { CppFileIcon } from "../icons/cpp-file-icon";
import { CssFileIcon } from "../icons/css-file-icon";
import { DocumentFileIcon } from "../icons/document-file-icon";
import { FolderFileIcon } from "../icons/folder-file-icon";
import { GearIcon } from "../icons/gear-icon";
import { GenericFileIcon } from "../icons/generic-file-icon";
import { HashesFileIcon } from "../icons/hashes-file-icon";
import { HtmlFileIcon } from "../icons/html-file-icon";
import { ImageFileIcon } from "../icons/image-file-icon";
import { JavaFileIcon } from "../icons/java-file-icon";
import { JavascriptFileIcon } from "../icons/javascript-file-icon";
import { JsonFileIcon } from "../icons/json-file-icon";
import { LoadingPreviewIcon } from "../icons/loading-preview-icon";
import { NotebookFileIcon } from "../icons/notebook-file-icon";
import { PdfFileIcon } from "../icons/pdf-file-icon";
import { PhpFileIcon } from "../icons/php-file-icon";
import { PresentationFileIcon } from "../icons/presentation-file-icon";
import { PythonFileIcon } from "../icons/python-file-icon";
import { ReactFileIcon } from "../icons/react-file-icon";
import { RustFileIcon } from "../icons/rust-file-icon";
import { ShellFileIcon } from "../icons/shell-file-icon";
import { SpreadsheetFileIcon } from "../icons/spreadsheet-file-icon";
import { TerminalFileIcon } from "../icons/terminal-file-icon";
import { TypescriptFileIcon } from "../icons/typescript-file-icon";

export type ArtifactFileKindIcon = ComponentType<SVGProps<SVGSVGElement>>;

/** Icon components keyed by `ArtifactFileKind` (bundle local `XL`). */
const ARTIFACT_FILE_KIND_ICONS: Record<ArtifactFileKind, ArtifactFileKindIcon> =
  {
    artifactDocument: ArtifactDocumentFileIcon,
    code: CodeFileIcon,
    document: DocumentFileIcon,
    file: GenericFileIcon,
    css: CssFileIcon,
    cplusplus: CppFileIcon,
    folder: FolderFileIcon,
    html: HtmlFileIcon,
    java: JavaFileIcon,
    javascript: JavascriptFileIcon,
    image: ImageFileIcon,
    yaml: GenericFileIcon,
    json: JsonFileIcon,
    notebook: NotebookFileIcon,
    pdf: PdfFileIcon,
    php: PhpFileIcon,
    python: PythonFileIcon,
    react: ReactFileIcon,
    rust: RustFileIcon,
    shell: ShellFileIcon,
    skill: LoadingPreviewIcon,
    spreadsheet: SpreadsheetFileIcon,
    build: BuildFileIcon,
    presentation: PresentationFileIcon,
    hashes: HashesFileIcon,
    terminal: TerminalFileIcon,
    typescript: TypescriptFileIcon,
    toml: GearIcon,
  };

/** Look up the icon component for a resolved artifact file kind. */
export function getArtifactFileKindIcon(kind: ArtifactFileKind): ArtifactFileKindIcon {
  return ARTIFACT_FILE_KIND_ICONS[kind];
}
