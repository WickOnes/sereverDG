import { Document } from "../models/Document";

export default class DocumentController {
  async createDocument(req: any, res: any) {
    const data = req.body;

    const doc = Document.generateDocument(data, "ASDÑK");

    return res.status(200).json(doc);
  }

  async getDocument() {}
}
