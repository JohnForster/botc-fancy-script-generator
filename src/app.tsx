import { useState, useEffect } from "preact/hooks";
import { CharacterSheet } from "./components/CharacterSheet";
import {
  parseScript,
  groupCharactersByTeam,
  findJinxes,
  ParsedScript,
} from "./utils/scriptParser";
import { sortScript } from "botc-script-checker";
import type { Script } from "botc-script-checker";
import exampleScript from "./data/example-script.json";
import "./app.css";

export function App() {
  const [script, setScript] = useState<ParsedScript | null>(null);
  const [rawScript, setRawScript] = useState<Script | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [color, setColor] = useState("#74131B");
  const [showAuthor, setShowAuthor] = useState(true);
  const [showJinxes, setShowJinxes] = useState(true);
  const [showSwirls, setShowSwirls] = useState(true);
  const [includeMargins, setIncludeMargins] = useState(false);
  const [isScriptSorted, setIsScriptSorted] = useState(true);
  const [scriptText, setScriptText] = useState("");

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
    setError(null);
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
      setError(null);
    } catch (err) {
      // Keep the error state but don't block typing
      setError(err instanceof Error ? err.message : "Invalid JSON format");
    }
  };

  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      // Get pasted text
      const pastedText = event.clipboardData?.getData("text");
      if (!pastedText) return;

      // Try to parse as JSON
      try {
        const json = JSON.parse(pastedText);
        loadScript(json);
      } catch (err) {
        // Ignore paste if it's not valid JSON - user might be pasting something else
        console.log("Pasted content is not valid JSON, ignoring");
      }
    };

    // Add paste event listener
    document.addEventListener("paste", handlePaste);

    // Cleanup
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []); // Empty dependency array since loadScript is stable

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
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sort script");
    }
  };

  const handleLoadExample = () => {
    loadScript(exampleScript as Script);
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
              Upload JSON
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="file-input"
            />
            <div className="or">or</div>
            <div className="paste-hint">Paste directly with ctrl+V / ⌘+V</div>
          </div>

          {!script && (
            <div className="example-section">
              <button onClick={handleLoadExample} className="example-button">
                Load Example Script
              </button>
            </div>
          )}

          {script && (
            <>
              <div className="controls-grid">
                <div className="control-group">
                  <label className="control-group-label">Appearance</label>
                  <div className="control-group-content">
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

                    <div className="toggle-section">
                      <label className="toggle-label">
                        <input
                          type="checkbox"
                          checked={showAuthor}
                          onChange={(e) =>
                            setShowAuthor(
                              (e.target as HTMLInputElement).checked
                            )
                          }
                          className="toggle-input"
                        />
                        <span className="toggle-text">Show Author</span>
                      </label>
                    </div>

                    <div className="toggle-section">
                      <label className="toggle-label">
                        <input
                          type="checkbox"
                          checked={showJinxes}
                          onChange={(e) =>
                            setShowJinxes(
                              (e.target as HTMLInputElement).checked
                            )
                          }
                          className="toggle-input"
                        />
                        <span className="toggle-text">Show Jinxes</span>
                      </label>
                    </div>

                    <div className="toggle-section">
                      <label className="toggle-label">
                        <input
                          type="checkbox"
                          checked={showSwirls}
                          onChange={(e) =>
                            setShowSwirls(
                              (e.target as HTMLInputElement).checked
                            )
                          }
                          className="toggle-input"
                        />
                        <span className="toggle-text">Show Swirls</span>
                      </label>
                    </div>

                    <div className="toggle-section">
                      <label className="toggle-label">
                        <input
                          type="checkbox"
                          checked={includeMargins}
                          onChange={(e) =>
                            setIncludeMargins(
                              (e.target as HTMLInputElement).checked
                            )
                          }
                          className="toggle-input"
                        />
                        <span className="toggle-text">Include Margins</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="control-group">
                  <label className="control-group-label">Actions</label>
                  <div className="control-group-content">
                    <button onClick={handleSort} className="sort-button">
                      Sort Script
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="print-button"
                    >
                      Print
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {script && (
          <div className="script-editor-section">
            <div className="script-editor-header">
              <label className="script-editor-label">Edit Script JSON:</label>
              <button className="update-button">Update</button>
            </div>
            <textarea
              className="script-editor-textarea"
              value={scriptText}
              onChange={(e) =>
                handleScriptTextChange((e.target as HTMLTextAreaElement).value)
              }
              rows={20}
              spellcheck={false}
            />
          </div>
        )}

        {!isScriptSorted && script && (
          <div className="warning-message">
            <strong>⚠️ Script Not Sorted:</strong> This script doesn't follow
            the official sorting order. Click "Sort Script" to fix this.
          </div>
        )}

        {error && <div className="error-message">{error}</div>}
      </div>

      {script && (
        <div className="preview-section">
          <div className="sheet-wrapper">
            <CharacterSheet
              title={script.metadata?.name || "Custom Script"}
              author={showAuthor ? script.metadata?.author : undefined}
              characters={groupCharactersByTeam(script.characters)}
              color={color}
              jinxes={
                showJinxes && rawScript
                  ? findJinxes(script.characters, rawScript)
                  : []
              }
              showSwirls={showSwirls}
              includeMargins={includeMargins}
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
            Upload a JSON script file or paste JSON anywhere on the page
          </p>
        </div>
      )}
    </div>
  );
}
