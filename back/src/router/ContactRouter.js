import express from "express";

import { deleteContact, fetchContact, fetchContactByUsername, saveContact, updateContact } from "../controller/ContactController.js";

const ContactRouter=express.Router();

ContactRouter.get("/",fetchContact);
ContactRouter.get("/:username",fetchContactByUsername);
ContactRouter.post("/",saveContact);
ContactRouter.put("/:username",updateContact);
ContactRouter.delete("/:username",deleteContact);

export default ContactRouter;