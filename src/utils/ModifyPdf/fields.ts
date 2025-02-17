import { PDFPage, rgb } from "pdf-lib";

export const emailFields = (page: PDFPage, value: string) => {
  page.drawText(value, {
    x: 35,
    y: 775,
    size: 14,
    color: rgb(0, 0, 0),
  });

  page.drawText(value, {
    x: 35,
    y: 495,
    size: 14,
    color: rgb(0, 0, 0),
  });

  page.drawText(value, {
    x: 35,
    y: 360,
    size: 14,
    color: rgb(0, 0, 0),
  });
};

export const nameFields = (page: PDFPage, value: string) => {
  page.drawText(value, {
    x: 80,
    y: 607,
    size: 14,
    color: rgb(0, 0, 0),
  });

  page.drawText(value, {
    x: 80,
    y: 467,
    size: 14,
    color: rgb(0, 0, 0),
  });
};

export const addressFields = (page: PDFPage, value: string) => {
  page.drawText(value, {
    x: 45,
    y: 582,
    size: 10,
    color: rgb(0, 0, 0),
  });

  page.drawText(value, {
    x: 45,
    y: 437,
    size: 10,
    color: rgb(0, 0, 0),
  });

  page.drawText(value, {
    x: 117,
    y: 90,
    size: 10,
    color: rgb(0, 0, 0),
  });
};

export const phoneFields = (page: PDFPage, value: string) => {
  page.drawText(value, {
    x: 35,
    y: 837,
    size: 10,
    color: rgb(0, 0, 0),
  });

  page.drawText(value, {
    x: 35,
    y: 562,
    size: 10,
    color: rgb(0, 0, 0),
  });

  page.drawText(value, {
    x: 35,
    y: 410,
    size: 10,
    color: rgb(0, 0, 0),
  });
};

export const birthdateFields = (page: PDFPage, value: string) => {
  page.drawText(value, {
    x: 500,
    y: 507,
    size: 10,
    color: rgb(0, 0, 0),
  });

  page.drawText(value, {
    x: 500,
    y: 362,
    size: 10,
    color: rgb(0, 0, 0),
  });
};
