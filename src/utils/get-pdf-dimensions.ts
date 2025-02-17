import { PDFDocument } from "pdf-lib";
import OnyxContract from "../assets/pdf/onyxcontract.pdf";

export async function getPdfDimensions() {
  const existingPdfBytes = await fetch(OnyxContract).then((res) =>
    res.arrayBuffer()
  );

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();

  pages.forEach((page, index) => {
    console.log(
      `Página ${index + 1}: ${page.getWidth()} x ${page.getHeight()}`
    );

    console.log(`Página ${index + 1}: ${page.getX()} x ${page.getY()}`);
  });
}
