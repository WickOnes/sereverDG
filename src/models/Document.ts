export class Document {
  constructor(private name: string, public file: string) {}

  static generateDocument(data: any, template: string) {
    // Functional for generate document

    const file = JSON.stringify(data);
    return new Document(data.name, file);
  }
}
