import { Document } from "../models/Document";
import * as fs from "node:fs";
export default class DocumentController {
  async createDocument(req: any, res: any) {
    const data = req.body.data;
    const doc = await Document.generateDocument(data, templates[0]);

    const path = "result.pdf";
    fs.appendFileSync(path, doc.file);
    return res.download(path);
  }

  async getDocument() {}
}

const templates = [
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    Test: {name}
  </body>
</html>
`,
];
