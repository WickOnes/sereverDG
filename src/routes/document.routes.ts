import { Router } from "express";
import DocumentController from "../controllers/document.controllers";

const router = Router();
const controller = new DocumentController();

router.post("", controller.createDocument);
router.get("", controller.getDocumentsList);
router.get("/:id", controller.getDocument);

export const DocumentRouter = router;
