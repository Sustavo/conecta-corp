import { PDFDocument } from "pdf-lib";
import OnyxContract from "../../assets/pdf/onyxContract.pdf";
import { FormSchemaData } from "../../lib/zod/wizard-form-datas";
import {
  addressFields,
  birthdateFields,
  emailFields,
  nameFields,
  phoneFields,
} from "./fields";

export async function modifyPdf(data: FormSchemaData) {
  const existingPdfBytes = await fetch(OnyxContract).then((res) =>
    res.arrayBuffer()
  );
  const address = `${data.residentialAddress.street}, ${data.residentialAddress.city} - ${data.residentialAddress.state}, ${data.residentialAddress.country}, ${data.residentialAddress.zip}`;

  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  emailFields(firstPage, data.email);
  nameFields(firstPage, data.fullName);
  addressFields(firstPage, address);
  phoneFields(firstPage, data.phone);
  birthdateFields(firstPage, data.birthDate);
  const pdfBytes = await pdfDoc.save();

  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "documento-modificado.pdf";
  link.click();
}
