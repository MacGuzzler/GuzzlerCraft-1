const QUESTIE_FILE_URL = "https://macguzzler.github.io/GuzzlerCraft-1/addons/Questie-335.zip"; // Ensure the file is in the `public` folder

export function downloadQuestieFile(): string[] {
  downloadFile(QUESTIE_FILE_URL, "Questie-335.zip");
  return [QUESTIE_FILE_URL, "Questie-335.zip"];
}

function downloadFile(url: string, filename: string) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.blob();
    })
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