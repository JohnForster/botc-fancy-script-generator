import { ScriptOptions } from "botc-character-sheet";
import { CollapsibleSection } from "../ui";
import { UploadSection } from "./UploadSection";
import { ColorPicker } from "./ColorPicker";
import { AppearanceOptions } from "./AppearanceOptions";
import { CharacterSheetOptions } from "./CharacterSheetOptions";
import { CharacterSheetBackOptions } from "./CharacterSheetBackOptions";
import { PrintOptions } from "./PrintOptions";
import { ActionButtons } from "./ActionButtons";
import { PaperType } from "../../types/options";
import { ScriptEditor } from "../ScriptEditor";

// Derive paper type from dimensions
function getPaperType(width: number): PaperType {
  return width === 216 ? "Letter" : "A4";
}

interface ScriptControlsProps {
  hasScript: boolean;
  options: ScriptOptions;
  isScriptSorted: boolean;
  scriptText: string;
  error: string | null;
  onFileUpload: (event: Event) => void;
  onPasteButton: () => void;
  onLoadExample: () => void;
  onLoadExampleTeensyville: () => void;
  onColorChange: (color: string | string[]) => void;
  onColorArrayChange: (index: number, color: string) => void;
  onAddColor: () => void;
  onRemoveColor: (index: number) => void;
  onOptionChange: <K extends keyof ScriptOptions>(
    key: K,
    value: ScriptOptions[K],
  ) => void;
  onSort: () => void;
  onGeneratePDF: () => void;
  onPrint: () => void;
  onScriptChange: (text: string) => void;
  onSave: () => void;
}

export function ScriptControls({
  hasScript,
  options,
  isScriptSorted,
  scriptText,
  error,
  onFileUpload,
  onPasteButton,
  onLoadExample,
  onLoadExampleTeensyville,
  onColorChange,
  onColorArrayChange,
  onAddColor,
  onRemoveColor,
  onOptionChange,
  onSort,
  onGeneratePDF,
  onPrint,
  onScriptChange,
  onSave,
}: ScriptControlsProps) {
  const paperType = getPaperType(options.dimensions.width);

  const handlePaperChange = (paper: PaperType) => {
    if (paper === "A4") {
      onOptionChange("dimensions", {
        ...options.dimensions,
        width: 210,
        height: 297,
      });
    } else {
      onOptionChange("dimensions", {
        ...options.dimensions,
        width: 216,
        height: 279,
      });
    }
  };

  return (
    <>
      <h1 className="app-title">
        Blood on the Clocktower Fancy Script Generator
      </h1>

      <div className="control-panel">
        <UploadSection
          hasScript={hasScript}
          error={error}
          onFileUpload={onFileUpload}
          onPasteButton={onPasteButton}
          onLoadExample={onLoadExample}
          onLoadExampleTeensyville={onLoadExampleTeensyville}
        />

        {hasScript && (
          <>
            <p style={{ textAlign: "center", margin: 0 }}>
              If you have any feedback, please let me know{" "}
              <a href="https://forms.gle/z1yeAW7x91X4Uc4H8">here</a>.
            </p>
            <ActionButtons
              isScriptSorted={isScriptSorted}
              error={error}
              onSort={onSort}
              onGeneratePDF={onGeneratePDF}
              onPrint={onPrint}
            />

            <CollapsibleSection title="General">
              <ColorPicker
                color={options.color}
                onColorChange={onColorChange}
                onColorArrayChange={onColorArrayChange}
                onAddColor={onAddColor}
                onRemoveColor={onRemoveColor}
              />
              <AppearanceOptions
                showNightSheet={options.showNightSheet}
                onShowNightSheetChange={(value) =>
                  onOptionChange("showNightSheet", value)
                }
                teensyMode={options.teensy}
                onTeensyModeChange={(value) => onOptionChange("teensy", value)}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Character Sheet" defaultOpen={false}>
              <CharacterSheetOptions
                overleaf={options.overleaf}
                appearance={options.appearance}
                showAuthor={options.showAuthor}
                showJinxes={options.showJinxes}
                inlineJinxIcons={options.inlineJinxIcons}
                useOldJinxes={options.useOldJinxes}
                showSwirls={options.showSwirls}
                solidTitle={options.solidTitle}
                iconScale={options.iconScale}
                onOverleafChange={(value) => onOptionChange("overleaf", value)}
                onAppearanceChange={(value) =>
                  onOptionChange("appearance", value)
                }
                onShowAuthorChange={(value) =>
                  onOptionChange("showAuthor", value)
                }
                onShowJinxesChange={(value) =>
                  onOptionChange("showJinxes", value)
                }
                onInlineJinxIconsChange={(value) =>
                  onOptionChange("inlineJinxIcons", value)
                }
                onUseOldJinxesChange={(value) =>
                  onOptionChange("useOldJinxes", value)
                }
                onShowSwirlsChange={(value) =>
                  onOptionChange("showSwirls", value)
                }
                onSolidTitleChange={(value) =>
                  onOptionChange("solidTitle", value)
                }
                onIconScaleChange={(value) =>
                  onOptionChange("iconScale", value)
                }
              />
            </CollapsibleSection>

            {options.overleaf !== "none" && (
              <CollapsibleSection
                title="Character Sheet Back"
                defaultOpen={false}
              >
                <CharacterSheetBackOptions
                  overleaf={options.overleaf}
                  displayNightOrder={options.displayNightOrder}
                  displayPlayerCounts={options.displayPlayerCounts}
                  formatMinorWords={options.formatMinorWords}
                  onDisplayNightOrderChange={(value) =>
                    onOptionChange("displayNightOrder", value)
                  }
                  onDisplayPlayerCountsChange={(value) =>
                    onOptionChange("displayPlayerCounts", value)
                  }
                  onFormatMinorWordsChange={(value) =>
                    onOptionChange("formatMinorWords", value)
                  }
                />
              </CollapsibleSection>
            )}

            <CollapsibleSection title="Print Options" defaultOpen={false}>
              <PrintOptions
                numberOfCharacterSheets={options.numberOfCharacterSheets}
                paperType={paperType}
                dimensions={options.dimensions}
                onNumberOfCharacterSheetsChange={(value) =>
                  onOptionChange("numberOfCharacterSheets", value)
                }
                onPaperChange={handlePaperChange}
                onMarginChange={(value) =>
                  onOptionChange("dimensions", {
                    ...options.dimensions,
                    margin: value,
                  })
                }
                onBleedChange={(value) =>
                  onOptionChange("dimensions", {
                    ...options.dimensions,
                    bleed: value,
                  })
                }
              />
            </CollapsibleSection>

            <CollapsibleSection title="Edit Script JSON" defaultOpen={false}>
              <ScriptEditor
                scriptText={scriptText}
                onScriptChange={onScriptChange}
                onSave={onSave}
              />
            </CollapsibleSection>
          </>
        )}
      </div>
    </>
  );
}
