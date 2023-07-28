import { Router } from "express";
import DocumentController from "../controllers/document.controllers";

const router = Router();
const controller = new DocumentController();

router.post("", controller.createDocument);

export const DocumentRouter = router;
