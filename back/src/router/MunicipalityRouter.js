import express from "express";
import { deleteMunicipality, fetchMunicipality, fetchMunicipalityByUsername, saveMunicipality, updateMunicipality } from "../controller/MunicipalityController.js";



const MunicipalityRouter=express.Router();

MunicipalityRouter.get("/",fetchMunicipality);
MunicipalityRouter.get("/:username",fetchMunicipalityByUsername);
MunicipalityRouter.post("/",saveMunicipality);
MunicipalityRouter.put("/:username",updateMunicipality);
MunicipalityRouter.delete("/:username",deleteMunicipality);

export default MunicipalityRouter;