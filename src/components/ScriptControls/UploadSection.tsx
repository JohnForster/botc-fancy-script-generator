interface UploadSectionProps {
  hasScript: boolean;
  error: string | null;
  onFileUpload: (event: Event) => void;
  onPasteButton: () => void;
  onLoadExample: () => void;
  onLoadExampleTeensyville: () => void;
}

export function UploadSection({
  hasScript,
  error,
  onFileUpload,
  onPasteButton,
  onLoadExample,
  onLoadExampleTeensyville,
}: UploadSectionProps) {
  const isMac = navigator.userAgent.includes("Mac");
  return (
    <>
      <div className="upload-section">
        <label htmlFor="file-upload" className="upload-label">
          Upload JSON
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".json,.json5"
          onChange={onFileUpload}
          className="file-input"
        />
        <div className="or">or</div>
        <div className="paste-hint">
          Paste directly with {isMac ? "⌘" : "ctrl"}+V
        </div>
        <button
          type="button"
          onClick={onPasteButton}
          className="paste-button"
        >
          Paste JSON
        </button>
      </div>

      {!hasScript && error && <div className="error-message">{error}</div>}

      {!hasScript && (
        <div className="example-section">
          <button onClick={onLoadExample} className="example-button">
            Load Example Script
          </button>
          <button onClick={onLoadExampleTeensyville} className="example-button">
            Load Example Teensyville
          </button>
        </div>
      )}
    </>
  );
}
