import express from "express";
import { deleteAnimal, fetchAnimal, fetchAnimalByAname, fetchAnimalById, saveAnimal, updateAnimal,  } from "../controller/AnimalController.js";


const AnimalRouter=express.Router();

AnimalRouter.get("/",fetchAnimal);
AnimalRouter.get("/:aname",fetchAnimalByAname);

AnimalRouter.post("/",saveAnimal);
AnimalRouter.put("/:aname",updateAnimal);
AnimalRouter.delete("/:aname",deleteAnimal);

export default AnimalRouter;