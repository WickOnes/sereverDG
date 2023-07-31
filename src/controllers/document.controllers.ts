import { Document } from "../models/Document";
import * as fs from "node:fs";
export default class DocumentController {
  constructor() {}
  async createDocument(req: any, res: any) {
    console.log("body:", req.body);
    try {
      const data = req.body.data;
      const doc = await Document.generateDocument(data, templates[0].template);

      const path = "result.png";
      fs.appendFileSync(path, doc.file);
      return res.download(path);
    } catch (error) {
      res.send({ message: error });
    }
  }

  async getDocumentsList(req: any, res: any) {
    const list = templates.map((v) => {
      const { template, ...res } = v;
      return res;
    });

    console.log(list);

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
      {
        placeholder: "Торговий агент",
        name: "tradeName",
      },
      {
        placeholder: "Тип ТТ",
        name: "typeTradePoint",
      },
      {
        placeholder: "Продукція",
        name: "product",
        type: "checkbox",
        value: ["шоко", "корм", "ригли"],
      },
      {
        placeholder: "День візиту",
        name: "visitDey",
      },
      {
        placeholder: "Назва клієнта",
        name: "clientName",
      },
      {
        placeholder: "Адреса доставки",
        name: "address",
      },
      {
        placeholder: "Форма оплати",
        name: "formPay",
        type: "radio",
        value: ["нал2ф", "чек/факт", "чек/кр", "б/н"],
      },
      {
        placeholder: "Відтермінування",
        name: "postponement",
      },
      {
        placeholder: "Прайс",
        name: "price",
      },
      {
        placeholder: "Контакти",
        name: "contact",
      },
      {
        placeholder: "Телефон",
        name: "phone",
      },
    ],
  },
];
