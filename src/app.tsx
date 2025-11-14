import { useState, useEffect } from "preact/hooks";
import { CharacterSheet, SheetBack, NightSheet } from "botc-character-sheet";
import "botc-character-sheet/style.css";
import { groupCharactersByTeam, findJinxes } from "./utils/scriptParser";
import { logUsage } from "./utils/logger";
import type { Script } from "botc-script-checker";
import exampleScript from "./data/example-script.json";
import { useScriptLoader } from "./hooks/useScriptLoader";
import { usePdfGeneration } from "./hooks/usePdfGeneration";
import { ScriptControls } from "./components/ScriptControls";
import { ScriptEditor } from "./components/ScriptEditor";
import { PdfModal } from "./components/PdfModal";
import { DEFAULT_OPTIONS, type ScriptOptions } from "./types/options";
import "./app.css";

export function App() {
  const {
    script,
    rawScript,
    error,
    scriptText,
    isScriptSorted,
    nightOrders, // Available for future use - contains first/other night characters
    loadScript,
    handleScriptTextChange,
    handleFileUpload,
    handleSort,
    handleSaveScript,
    updateScriptMetadata,
  } = useScriptLoader();

  const {
    showPdfModal,
    pdfLoading,
    pdfUrl,
    pdfError,
    generatePDF,
    downloadPDF,
    closePdfModal,
  } = usePdfGeneration();

  const [options, setOptions] = useState<ScriptOptions>(DEFAULT_OPTIONS);

  // Auto-adjust icon scale when appearance changes
  useEffect(() => {
    if (options.appearance === "compact") {
      setOptions((prev) => ({ ...prev, iconScale: 1.5 }));
    } else if (options.appearance === "super-compact") {
      setOptions((prev) => ({ ...prev, iconScale: 1.4 }));
    } else {
      setOptions((prev) => ({ ...prev, iconScale: 1.6 }));
    }
  }, [options.appearance]);

  const updateOption = <K extends keyof ScriptOptions>(
    key: K,
    value: ScriptOptions[K]
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  const handleLoadExample = () => {
    const parsed = loadScript(exampleScript as Script);
    // Load color from metadata if present
    if (
      parsed?.metadata?.colour &&
      typeof parsed.metadata.colour === "string"
    ) {
      updateOption("color", parsed.metadata.colour);
    }
  };

  const handleColorChange = (newColor: string) => {
    updateOption("color", newColor);

    // Update the colour in the script metadata
    if (!rawScript) return;

    const updatedScript = rawScript.map((element) => {
      if (typeof element === "object" && element !== null && "id" in element) {
        if (element.id === "_meta") {
          return { ...element, colour: newColor };
        }
      }
      return element;
    });

    updateScriptMetadata(updatedScript);
  };

  const handleScriptChange = (newText: string) => {
    const parsed = handleScriptTextChange(newText);
    // Load color from metadata if present
    if (
      parsed?.metadata?.colour &&
      typeof parsed.metadata.colour === "string"
    ) {
      updateOption("color", parsed.metadata.colour);
    }
  };

  const handlePrint = () => {
    if (script) {
      logUsage(script, { method: "print", options });
    }
    window.print();
  };

  const handleGeneratePDF = () => {
    if (!rawScript || !script) return;
    if (script) {
      logUsage(script, { method: "generate", options });
    }
    generatePDF(rawScript, script, options, nightOrders);
  };

  const handleDownloadPDF = () => {
    downloadPDF(script?.metadata?.name);
  };

  return (
    <div className="app">
      <div className="controls">
        <ScriptControls
          hasScript={!!script}
          options={options}
          isScriptSorted={isScriptSorted}
          onFileUpload={handleFileUpload}
          onLoadExample={handleLoadExample}
          onColorChange={handleColorChange}
          onOptionChange={updateOption}
          onSort={handleSort}
          onGeneratePDF={handleGeneratePDF}
          onPrint={handlePrint}
        />

        {script && (
          <>
            <ScriptEditor
              scriptText={scriptText}
              error={error}
              onScriptChange={handleScriptChange}
              onSave={handleSaveScript}
            />
          </>
        )}
      </div>

      {script && (
        <div className="preview-section">
          <div className="sheet-wrapper">
            <CharacterSheet
              title={script.metadata?.name || "Custom Script"}
              author={options.showAuthor ? script.metadata?.author : undefined}
              characters={groupCharactersByTeam(script.characters)}
              color={options.color}
              jinxes={
                options.showJinxes && rawScript
                  ? findJinxes(
                      script.characters,
                      rawScript,
                      options.useOldJinxes
                    )
                  : []
              }
              showSwirls={options.showSwirls}
              includeMargins={options.includeMargins}
              solidTitle={options.solidTitle}
              iconScale={options.iconScale}
              appearance={options.appearance}
            />

            {options.showBackingSheet && (
              <SheetBack
                title={script.metadata?.name || "Custom Script"}
                color={options.color}
                includeMargins={options.includeMargins}
                firstNightOrder={nightOrders.first}
                otherNightOrder={nightOrders.other}
                formatMinorWords={options.formatMinorWords}
                displayNightOrder={options.displayNightOrder}
              />
            )}

            {options.showNightSheet && (
              <NightSheet
                firstNightOrder={nightOrders.first}
                otherNightOrder={nightOrders.other}
                includeMargins={options.includeMargins}
                title={script.metadata?.name || "Custom Script"}
                color={options.color}
              />
            )}
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

      <PdfModal
        isOpen={showPdfModal}
        isLoading={pdfLoading}
        pdfUrl={pdfUrl}
        error={pdfError}
        onClose={closePdfModal}
        onDownload={handleDownloadPDF}
      />
    </div>
  );
}
