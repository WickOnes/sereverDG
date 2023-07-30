import { Document } from "../models/Document";
import * as fs from "node:fs";
export default class DocumentController {
  constructor() {}
  async createDocument(req: any, res: any) {
    const data = req.body.data;
    const doc = await Document.generateDocument(data, templates[0].template);

    const path = "result.pdf";
    fs.appendFileSync(path, doc.file);

    return res.download(path);
  }

  async getDocumentsList(req: any, res: any) {
    const list = templates.map((v) => {
      const { template, ...res } = v;
      return res;
    });

    res.send(list);
  }

  async getDocument(req: any, res: any) {
    res.send();
  }
}

const templates = [
  {
    id: 0,
    name: "First Document",
    template: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head><body>Test: {name}</body></html>`,
    dataList: [
      { name: "address", placeholder: "address" },
      { name: "FullName", placeholder: "Full Name" },
      { name: "phone", placeholder: "+380" },
      { name: "address", placeholder: "address" },
    ],
  },
  {
    id: 1,
    name: "Second Document",
    template: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head><body>Test: {name}</body></html>`,
    dataList: [
      { name: "address", placeholder: "address" },
      { name: "FullName", placeholder: "Full Name" },
      { name: "phone", placeholder: "+380" },
      { name: "address", placeholder: "address" },
    ],
  },
];
