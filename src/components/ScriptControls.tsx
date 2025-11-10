import { randomColor, type ScriptOptions } from "../types/options";

interface ScriptControlsProps {
  hasScript: boolean;
  options: ScriptOptions;
  isScriptSorted: boolean;
  onFileUpload: (event: Event) => void;
  onLoadExample: () => void;
  onColorChange: (color: string) => void;
  onOptionChange: <K extends keyof ScriptOptions>(
    key: K,
    value: ScriptOptions[K]
  ) => void;
  onSort: () => void;
  onGeneratePDF: () => void;
  onPrint: () => void;
}

export function ScriptControls({
  hasScript,
  options,
  isScriptSorted,
  onFileUpload,
  onLoadExample,
  onColorChange,
  onOptionChange,
  onSort,
  onGeneratePDF,
  onPrint,
}: ScriptControlsProps) {
  return (
    <>
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
            onChange={onFileUpload}
            className="file-input"
          />
          <div className="or">or</div>
          <div className="paste-hint">Paste directly with ctrl+V / ⌘+V</div>
        </div>

        {!hasScript && (
          <div className="example-section">
            <button onClick={onLoadExample} className="example-button">
              Load Example Script
            </button>
          </div>
        )}

        {hasScript && (
          <>
            <p style={{ textAlign: "center", margin: 0 }}>
              If you have any feedback, please let me know{" "}
              <a href="https://forms.gle/z1yeAW7x91X4Uc4H8">here</a>.
            </p>
            <div className="controls-grid">
              <div className="control-group">
                <label className="control-group-label">Appearance</label>
                <div className="control-group-content">
                  <div className="color-picker-section">
                    <label htmlFor="sidebar-color" className="color-label">
                      Change Script Colour:
                    </label>
                    <input
                      id="sidebar-color"
                      type="color"
                      value={options.color}
                      onInput={(e) =>
                        onColorChange((e.target as HTMLInputElement).value)
                      }
                      onChange={(e) =>
                        onColorChange((e.target as HTMLInputElement).value)
                      }
                      className="color-input"
                    />
                  </div>
                  <button
                    onClick={() => onColorChange(randomColor())}
                    className="update-button"
                  >
                    Randomise
                  </button>

                  <div className="toggle-section">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={options.showAuthor}
                        onChange={(e) =>
                          onOptionChange(
                            "showAuthor",
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
                        checked={options.showJinxes}
                        onChange={(e) =>
                          onOptionChange(
                            "showJinxes",
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
                        checked={options.useOldJinxes}
                        onChange={(e) =>
                          onOptionChange(
                            "useOldJinxes",
                            (e.target as HTMLInputElement).checked
                          )
                        }
                        className="toggle-input"
                      />
                      <span className="toggle-text">Use Old Jinxes</span>
                    </label>
                  </div>

                  <div className="toggle-section">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={options.showSwirls}
                        onChange={(e) =>
                          onOptionChange(
                            "showSwirls",
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
                        checked={options.solidTitle}
                        onChange={(e) =>
                          onOptionChange(
                            "solidTitle",
                            (e.target as HTMLInputElement).checked
                          )
                        }
                        className="toggle-input"
                      />
                      <span className="toggle-text">Solid Title</span>
                    </label>
                  </div>

                  <div className="toggle-section">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={options.compactAppearance}
                        onChange={(e) =>
                          onOptionChange(
                            "compactAppearance",
                            (e.target as HTMLInputElement).checked
                          )
                        }
                        className="toggle-input"
                      />
                      <span className="toggle-text">Compact Appearance</span>
                    </label>
                  </div>

                  <div className="toggle-section">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={options.includeMargins}
                        onChange={(e) =>
                          onOptionChange(
                            "includeMargins",
                            (e.target as HTMLInputElement).checked
                          )
                        }
                        className="toggle-input"
                      />
                      <span className="toggle-text">Include Margins</span>
                    </label>
                  </div>

                  <div className="toggle-section">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={options.showBackingSheet}
                        onChange={(e) =>
                          onOptionChange(
                            "showBackingSheet",
                            (e.target as HTMLInputElement).checked
                          )
                        }
                        className="toggle-input"
                      />
                      <span className="toggle-text">Include Backing Sheet</span>
                    </label>
                  </div>

                  <div className="toggle-section">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={options.displayNightOrder}
                        onChange={(e) =>
                          onOptionChange(
                            "displayNightOrder",
                            (e.target as HTMLInputElement).checked
                          )
                        }
                        className="toggle-input"
                      />
                      <span className="toggle-text">
                        Backing Sheet Night Order
                      </span>
                    </label>
                  </div>

                  <div className="toggle-section">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={options.formatMinorWords}
                        onChange={(e) =>
                          onOptionChange(
                            "formatMinorWords",
                            (e.target as HTMLInputElement).checked
                          )
                        }
                        className="toggle-input"
                      />
                      <span className="toggle-text">Shrink Minor Words</span>
                    </label>
                  </div>

                  <div className="slider-section">
                    <label htmlFor="icon-scale" className="slider-label">
                      Icon Scale: {options.iconScale.toFixed(1)}
                    </label>
                    <input
                      id="icon-scale"
                      type="range"
                      min="0.5"
                      max="3"
                      step="0.1"
                      value={options.iconScale}
                      onInput={(e) =>
                        onOptionChange(
                          "iconScale",
                          parseFloat((e.target as HTMLInputElement).value)
                        )
                      }
                      onChange={(e) =>
                        onOptionChange(
                          "iconScale",
                          parseFloat((e.target as HTMLInputElement).value)
                        )
                      }
                      className="slider-input"
                    />
                  </div>
                </div>
              </div>

              <div className="control-group">
                <label className="control-group-label">Actions</label>
                <div className="control-group-content">
                  <button onClick={onSort} className="sort-button">
                    Sort Script
                  </button>
                  <button onClick={onGeneratePDF} className="print-button">
                    Generate PDF
                  </button>
                  <button
                    onClick={onPrint}
                    className="print-button"
                    style={{ marginTop: "8px" }}
                  >
                    Browser Print (Fallback)
                  </button>
                  <p className="print-warning">
                    "Generate PDF" creates a PDF on our server. Use "Browser
                    Print" as a fallback if the server is unavailable.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {!isScriptSorted && hasScript && (
        <div className="warning-message">
          <strong>⚠️ Script Not Sorted:</strong> This script doesn't follow the
          official sorting order. Click "Sort Script" to fix this.
        </div>
      )}
    </>
  );
}
