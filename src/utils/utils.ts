import puppeteer from "puppeteer";

export async function htmlToPdf(html: any) {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "domcontentloaded" });
  await page.emulateMediaType("screen");

  const PDF = await page.pdf({
    printBackground: false,
    format: "A4",
  });

  await browser.close();

  return PDF;
}
