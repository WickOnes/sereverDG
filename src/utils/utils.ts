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

export async function htmlToImage(html: string) {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  await page.setContent(html);
  const content = await page.$("body");
  const imageBuffer = await content?.screenshot({ omitBackground: true });

  return imageBuffer;
}
