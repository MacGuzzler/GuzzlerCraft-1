const PATCH_FILE_URL =
  "src\\classicwow\\wotlk\\myserver\\downloads\\patch-4.MPQ";
export function downloadPatchFile(): string[] {
  downloadFile(PATCH_FILE_URL, "patch-4.MPQ");
  return [PATCH_FILE_URL, "patch-4.MPQ"];
}

function downloadFile(url: string, filename: string) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}