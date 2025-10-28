import { useState } from "preact/hooks";
import { logUsage } from "../utils/logger";
import type { ParsedScript } from "../utils/scriptParser";
import type { Script } from "botc-script-checker";
import type { ScriptOptions } from "../types/options";

export function usePdfGeneration() {
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const generatePDF = async (
    rawScript: Script,
    script: ParsedScript,
    options: ScriptOptions
  ) => {
    // Show modal and reset state
    setShowPdfModal(true);
    setPdfLoading(true);
    setPdfBlob(null);
    setPdfUrl(null);
    setPdfError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_PDF_API_URL}/api/generate-pdf`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Origin: window.location.origin,
          },
          body: JSON.stringify({
            script: rawScript,
            options: {
              color: options.color,
              showAuthor: options.showAuthor,
              showJinxes: options.showJinxes,
              useOldJinxes: options.useOldJinxes,
              showSwirls: options.showSwirls,
              includeMargins: options.includeMargins,
              solidTitle: options.solidHeader,
              iconScale: options.iconScale,
              compactAppearance: options.compactAppearance,
              showBackingSheet: options.showBackingSheet,
            },
            filename: `${script.metadata?.name || "script"}.pdf`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to generate PDF: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPdfBlob(blob);
      setPdfUrl(url);
      setPdfLoading(false);

      logUsage(script);
    } catch (error) {
      console.error("Error generating PDF:", error);
      setPdfError(
        "Failed to generate PDF. Please try the browser print option instead."
      );
      setPdfLoading(false);
    }
  };

  const downloadPDF = (scriptName?: string) => {
    if (!pdfBlob) return;

    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${scriptName || "script"}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const closePdfModal = () => {
    setShowPdfModal(false);
    setPdfBlob(null);
    setPdfError(null);

    // Clean up the blob URL
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
    }
  };

  return {
    showPdfModal,
    pdfLoading,
    pdfUrl,
    pdfError,
    generatePDF,
    downloadPDF,
    closePdfModal,
  };
}
