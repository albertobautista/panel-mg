/**
 * Utility function to download a file
 * @param filename - Name of the file to download
 * @param pdfPath - Path to the PDF file
 */
export const downloadPDF = (filename: string, pdfPath: string) => {
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Utility function to download multiple files
 * @param files - Array of objects with filename and path
 */
export const downloadMultiplePDFs = (
  files: { filename: string; path: string }[]
) => {
  files.forEach((file, index) => {
    setTimeout(() => {
      downloadPDF(file.filename, file.path);
    }, index * 500); // Delay between downloads to prevent browser blocking
  });
};
