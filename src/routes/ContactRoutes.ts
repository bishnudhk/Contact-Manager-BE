import {Router} from "express";
import * as contactController from "../controller/contactController"; 

const router = Router();
router.get("/",contactController.getAllContacts); 
router.post("/add",contactController.createContact);
router.get("/:id",contactController.getContactById);
router.get("/:name",contactController.getContactByName);
router.put("/:id",contactController.updateContact);
router.delete("/:id",contactController.deleteContact);

export default router;