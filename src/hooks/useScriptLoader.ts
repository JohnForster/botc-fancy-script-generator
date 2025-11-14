import { useState, useEffect } from "preact/hooks";
import { parseScript } from "../utils/scriptParser";
import { sortScript } from "botc-script-checker";
import type { Script } from "botc-script-checker";
import { nightOrders } from "botc-script-checker/src/data/nightOrders";
import {
  NightOrderEntry,
  NightOrders,
  ParsedScript,
} from "botc-character-sheet";

export function useScriptLoader() {
  const [script, setScript] = useState<ParsedScript | null>(null);
  const [rawScript, setRawScript] = useState<Script | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [scriptText, setScriptText] = useState("");
  const [isScriptSorted, setIsScriptSorted] = useState(true);
  const [nightOrdersState, setNightOrdersState] = useState<NightOrders>({
    first: [],
    other: [],
  });

  const checkIfSorted = (currentScript: Script): boolean => {
    try {
      const sorted = sortScript(currentScript);
      return JSON.stringify(currentScript) === JSON.stringify(sorted);
    } catch {
      return true; // Assume sorted if we can't check
    }
  };

  const calculateNightOrders = (
    parsedScript: ParsedScript,
    rawScriptData: Script
  ): NightOrders => {
    // Create a map from the raw script to get firstNight/otherNight values for custom characters
    const rawCharMap = new Map<
      string,
      { firstNight?: number; otherNight?: number }
    >();
    for (const element of rawScriptData) {
      if (
        typeof element === "object" &&
        element !== null &&
        "id" in element &&
        element.id !== "_meta"
      ) {
        const char = element as any;
        if (char.firstNight !== undefined || char.otherNight !== undefined) {
          rawCharMap.set(char.id.toLowerCase(), {
            firstNight: char.firstNight,
            otherNight: char.otherNight,
          });
        }
      }
    }

    // Helper to get position of a character or marker
    const getPosition = (
      entry: NightOrderEntry,
      nightType: "firstNight" | "otherNight",
      orderList: string[]
    ): number => {
      const id = typeof entry === "string" ? entry : entry.id;
      const officialIndex = orderList.indexOf(id);

      if (officialIndex !== -1) {
        return officialIndex;
      }

      // Check if it's a custom character with a numeric position
      const customData = rawCharMap.get(id);
      const customValue =
        nightType === "firstNight"
          ? customData?.firstNight
          : customData?.otherNight;

      if (customValue !== undefined && customValue > 0) {
        return customValue;
      }

      return Infinity; // Characters without night actions go to the end
    };

    // Build night order with characters and markers
    const buildNightOrder = (
      characters: NightOrderEntry[],
      nightType: "firstNight" | "otherNight"
    ): NightOrderEntry[] => {
      const orderList =
        nightType === "firstNight"
          ? nightOrders.firstNight
          : nightOrders.otherNight;

      // Filter characters that have actions for this night
      const activeChars = characters.filter((char) => {
        const position = getPosition(char, nightType, orderList);
        return position !== Infinity;
      });

      const charsAndMarkers: NightOrderEntry[] =
        nightType === "firstNight"
          ? [...activeChars, "dawn", "dusk", "minioninfo", "demoninfo"]
          : [...activeChars, "dawn", "dusk"];

      // Sort characters by position
      charsAndMarkers.sort((a, b) => {
        return (
          getPosition(a, nightType, orderList) -
          getPosition(b, nightType, orderList)
        );
      });

      return charsAndMarkers;
    };

    return {
      first: buildNightOrder(parsedScript.characters, "firstNight"),
      other: buildNightOrder(parsedScript.characters, "otherNight"),
    };
  };

  const loadScript = (json: Script) => {
    setRawScript(json);
    const parsed = parseScript(json);
    setScript(parsed);
    setScriptText(JSON.stringify(json, null, 2));
    setIsScriptSorted(checkIfSorted(json));
    setNightOrdersState(calculateNightOrders(parsed, json));
    setError(null);

    return parsed; // Return parsed script for color loading
  };

  const handleScriptTextChange = (newText: string) => {
    setScriptText(newText);

    // Try to parse and update in real-time
    try {
      const json = JSON.parse(newText);
      setRawScript(json);
      const parsed = parseScript(json);
      setScript(parsed);
      setIsScriptSorted(checkIfSorted(json));
      setNightOrdersState(calculateNightOrders(parsed, json));
      setError(null);

      return parsed; // Return parsed script for color loading
    } catch (err) {
      // Keep the error state but don't block typing
      setError(err instanceof Error ? err.message : "Invalid JSON format");
      return null;
    }
  };

  const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        loadScript(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to parse JSON");
        setScript(null);
        setRawScript(null);
      }
    };
    reader.readAsText(file);
  };

  const handleSort = () => {
    if (!rawScript) return;

    try {
      const sorted = sortScript(rawScript);
      setRawScript(sorted);
      const parsed = parseScript(sorted);
      setScript(parsed);
      setScriptText(JSON.stringify(sorted, null, 2));
      setIsScriptSorted(true);
      setNightOrdersState(calculateNightOrders(parsed, sorted));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sort script");
    }
  };

  const updateScriptMetadata = (updatedScript: Script) => {
    setRawScript(updatedScript);
    setScriptText(JSON.stringify(updatedScript, null, 2));
  };

  const handleSaveScript = () => {
    if (!rawScript) return;

    // Get script name from metadata or use default
    const scriptName = script?.metadata?.name || "custom-script";
    const filename = `${scriptName.toLowerCase().replace(/\s+/g, "-")}.json`;

    // Create blob and download
    const blob = new Blob([scriptText], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Setup paste event listener
  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const pastedText = event.clipboardData?.getData("text");
      if (!pastedText) return;

      try {
        const json = JSON.parse(pastedText);
        loadScript(json);
      } catch (err) {
        // Ignore paste if it's not valid JSON
        console.log("Pasted content is not valid JSON, ignoring");
      }
    };

    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  // Update page title when script changes
  useEffect(() => {
    if (script?.metadata?.name) {
      document.title = `${script.metadata.name} Fancy`;
    } else {
      document.title = "Blood on the Clocktower - Script PDF Maker";
    }
  }, [script?.metadata?.name]);

  return {
    script,
    rawScript,
    error,
    scriptText,
    isScriptSorted,
    nightOrders: nightOrdersState,
    loadScript,
    handleScriptTextChange,
    handleFileUpload,
    handleSort,
    handleSaveScript,
    updateScriptMetadata,
  };
}
