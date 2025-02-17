// const PATCH_FILE_URL =
//   "./patch-4.MPQ";
// export function downloadPatchFile(): string[] {
//   downloadFile(PATCH_FILE_URL, "patch-4.MPQ");
//   return [PATCH_FILE_URL, "patch-4.MPQ"];
// }

// function downloadFile(url: string, filename: string) {
//   const anchor = document.createElement("a");
//   anchor.href = url;
//   anchor.download = filename;
//   document.body.appendChild(anchor);
//   anchor.click();
//   document.body.removeChild(anchor);
// }

const PATCH_FILE_URL = "/patch/patch-4.MPQ"; // Ensure the file is in the `public` folder

export function downloadPatchFile(): string[] {
  downloadFile(PATCH_FILE_URL, "patch-4.MPQ");
  return [PATCH_FILE_URL, "patch-4.MPQ"];
}

function downloadFile(url: string, filename: string) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(blobUrl);
    })
    .catch(error => console.error("Download failed:", error));
}
