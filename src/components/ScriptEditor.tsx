interface ScriptEditorProps {
  scriptText: string;
  error: string | null;
  onScriptChange: (text: string) => void;
  onSave: () => void;
}

export function ScriptEditor({
  scriptText,
  error,
  onScriptChange,
  onSave,
}: ScriptEditorProps) {
  return (
    <div className="script-editor-section">
      <div className="script-editor-header">
        <label className="script-editor-label">Edit Script JSON:</label>
        <div className="script-editor-buttons">
          <button className="update-button">Update</button>
          <button onClick={onSave} className="update-button">
            Save
          </button>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
      <textarea
        className="script-editor-textarea"
        value={scriptText}
        onChange={(e) => onScriptChange((e.target as HTMLTextAreaElement).value)}
        rows={20}
        spellcheck={false}
      />
    </div>
  );
}
