import { htmlToImage, htmlToPdf } from "../utils/utils";

export class Document {
  constructor(private name: string, public file: any, private path?: string) {}

  static async generateDocument(data: any, template: string) {
    if (data)
      Object.keys(data).forEach((key) => {
        template = template.replaceAll(`{${key}}`, data[key]);
      });

    const pdf = await htmlToPdf(template);
    const image = await htmlToImage(template);
    return new Document(data.name, image);
  }
}
