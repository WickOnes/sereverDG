import { htmlToPdf } from "../utils/utils";

export class Document {
  constructor(private name: string, public file: any, private path?: string) {}

  static async generateDocument(data: any, template: string) {
    Object.keys(data).forEach((key) => {
      template = template.replaceAll(`{${key}}`, data[key]);
    });

    const pdf = await htmlToPdf(template);
    return new Document(data.name, pdf);
  }
}
