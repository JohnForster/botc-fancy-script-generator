import { h } from "preact";
import { useState } from "preact/hooks";
import { CharacterSheet } from "./components/CharacterSheet";
import {
  parseScript,
  groupCharactersByTeam,
  ParsedScript,
} from "./utils/scriptParser";
import { generatePDF } from "./utils/pdfGenerator";
import { sortScript } from "botc-script-checker";
import type { Script } from "botc-script-checker";
import "./app.css";

export function App() {
  const [script, setScript] = useState<ParsedScript | null>(null);
  const [rawScript, setRawScript] = useState<Script | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [color, setColor] = useState("#74131B");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        setRawScript(json);
        const parsed = parseScript(json);
        setScript(parsed);
        setError(null);
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
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sort script");
    }
  };

  const handleDownloadPDF = async () => {
    if (!script) return;

    setIsGenerating(true);
    try {
      const scriptName = script.metadata?.name || "script";
      const filename = `${scriptName
        .replace(/[^a-z0-9]/gi, "_")
        .toLowerCase()}.pdf`;
      await generatePDF("character-sheet", filename);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate PDF");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="app">
      <div className="controls">
        <h1 className="app-title">
          Blood on the Clocktower Fancy Script Generator
        </h1>

        <div className="control-panel">
          <div className="upload-section">
            <label htmlFor="file-upload" className="upload-label">
              Upload Script JSON
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="file-input"
            />
          </div>

          {script && (
            <>
              <div className="color-picker-section">
                <label htmlFor="sidebar-color" className="color-label">
                  Script Color:
                </label>
                <input
                  id="sidebar-color"
                  type="color"
                  value={color}
                  onChange={(e) =>
                    setColor((e.target as HTMLInputElement).value)
                  }
                  className="color-input"
                />
              </div>

              <button onClick={handleSort} className="sort-button">
                Sort Script
              </button>
              <button onClick={() => window.print()} className="print-button">
                Print
              </button>
            </>
          )}
        </div>

        {error && <div className="error-message">{error}</div>}
      </div>

      {script && (
        <div className="preview-section">
          <div className="sheet-wrapper">
            <CharacterSheet
              title={script.metadata?.name || "Custom Script"}
              author={script.metadata?.author}
              characters={groupCharactersByTeam(script.characters)}
              color={color}
            />
          </div>
        </div>
      )}

      {!script && !error && (
        <div className="placeholder">
          <svg
            className="placeholder-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="placeholder-text">
            Upload a JSON script file to get started
          </p>
        </div>
      )}
    </div>
  );
}
