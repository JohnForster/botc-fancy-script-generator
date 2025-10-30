import type { ParsedScript } from "./scriptParser";

const FIREBASE_URL = "https://logusage-dvbaqkhwga-uc.a.run.app";

export const logUsage = async (
  script: ParsedScript,
  other: { [key: string]: any } = {}
) => {
  // Only log usage in production environment
  if (import.meta.env.DEV) {
    return;
  }

  fetch(FIREBASE_URL, {
    method: "POST",
    body: JSON.stringify({
      app: "script-pdf-maker",
      title: script.metadata?.name || "Untitled",
      author: script.metadata?.author || "Unknown",
      characterCount: script.characters.length,
      ...other,
    }),
    headers: {
      "x-password": "dungeon-mister",
      "Content-Type": "application/json",
    },
  }).catch(console.error);
};
