interface PdfModalProps {
  isOpen: boolean;
  isLoading: boolean;
  pdfUrl: string | null;
  error: string | null;
  onClose: () => void;
  onDownload: () => void;
}

export function PdfModal({
  isOpen,
  isLoading,
  pdfUrl,
  error,
  onClose,
  onDownload,
}: PdfModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {isLoading && (
          <>
            <div className="modal-spinner"></div>
            <h2 className="modal-title">Generating Script PDF</h2>
            <p className="modal-text">This may take a minute...</p>
          </>
        )}

        {!isLoading && pdfUrl && (
          <>
            <svg
              className="modal-success-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="modal-title">Script Ready!</h2>
            <p className="modal-text">Script successfully PDFerised</p>

            <div className="pdf-preview-container">
              <iframe
                src={pdfUrl}
                className="pdf-preview"
                title="PDF Preview"
              />
            </div>

            <div className="modal-buttons">
              <button
                onClick={onDownload}
                className="modal-button modal-button-primary"
              >
                Download PDF
              </button>
              <button
                onClick={onClose}
                className="modal-button modal-button-secondary"
              >
                Close
              </button>
            </div>
          </>
        )}

        {!isLoading && error && (
          <>
            <svg
              className="modal-error-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="modal-title">Generation Failed</h2>
            <p className="modal-text">{error}</p>
            <div className="modal-buttons">
              <button
                onClick={onClose}
                className="modal-button modal-button-secondary"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
