import { useState, useEffect, useRef } from "preact/hooks";
import { parseScript } from "../utils/scriptParser";
import { sortScript } from "botc-script-checker";
import type { Script } from "botc-script-checker";
import { NightOrders, ParsedScript } from "botc-character-sheet";
import { calculateNightOrders } from "../utils/nightOrders";
import { downloadBlob } from "../utils/downloadFile";
import JSON5 from "json5";

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
  const parseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const checkIfSorted = (currentScript: Script): boolean => {
    try {
      const sorted = sortScript(currentScript);
      return JSON.stringify(currentScript) === JSON.stringify(sorted);
    } catch {
      return true; // Assume sorted if we can't check
    }
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

    // Clear any pending parse timeout
    if (parseTimeoutRef.current) {
      clearTimeout(parseTimeoutRef.current);
    }

    // Debounce parsing to avoid expensive operations on every keystroke
    parseTimeoutRef.current = setTimeout(() => {
      try {
        const json = JSON5.parse(newText);
        setRawScript(json);
        const parsed = parseScript(json);
        setScript(parsed);
        setIsScriptSorted(checkIfSorted(json));
        setNightOrdersState(calculateNightOrders(parsed, json));
        setError(null);
      } catch (err) {
        console.error(err);
        // Keep the error state but don't block typing
        setError(err instanceof Error ? err.message : "Invalid JSON format");
      }
    }, 300);
  };

  const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON5.parse(e.target?.result as string);
        loadScript(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to parse JSON");
        setScript(null);
        setRawScript(null);
      }
    };
    reader.readAsText(file);
  };

  const handlePasteButton = async () => {
    if (!navigator.clipboard?.readText) {
      setError(
        "Clipboard access isn't available in this browser (it requires HTTPS). Try pasting into the JSON editor manually instead.",
      );
      return;
    }

    try {
      const pastedText = await navigator.clipboard.readText();
      const json = JSON5.parse(pastedText);
      loadScript(json);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to read clipboard",
      );
    }
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
    downloadBlob(blob, filename);
  };

  // Load script from URL query parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scriptParam = params.get("script");
    const scriptUrlParam = params.get("script_url");

    // Prioritize inline script over URL
    if (scriptParam) {
      try {
        const decoded = decodeURIComponent(scriptParam);
        const json = JSON5.parse(decoded);
        loadScript(json);
      } catch (err) {
        console.error("Failed to load script from URL:", err);
        setError(
          err instanceof Error ? err.message : "Failed to parse script from URL"
        );
      }
    } else if (scriptUrlParam) {
      const url = decodeURIComponent(scriptUrlParam);
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          return response.text();
        })
        .then((text) => {
          const json = JSON5.parse(text);
          loadScript(json);
        })
        .catch((err) => {
          console.error("Failed to fetch script from URL:", err);
          setError(
            err instanceof Error ? err.message : "Failed to fetch script from URL"
          );
        });
    }
  }, []);

  // Setup paste event listener
  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const pastedText = event.clipboardData?.getData("text");
      if (!pastedText) return;

      try {
        const json = JSON5.parse(pastedText);
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

  // Cleanup parse timeout on unmount
  useEffect(() => {
    return () => {
      if (parseTimeoutRef.current) {
        clearTimeout(parseTimeoutRef.current);
      }
    };
  }, []);

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
    handlePasteButton,
    handleSort,
    handleSaveScript,
    updateScriptMetadata,
  };
}
