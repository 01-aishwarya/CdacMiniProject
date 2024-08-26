import express from "express";
import {deleteUser, fetchUser, fetchUserByUsername, saveUser, updateUser} from "../controller/UserController.js";

const UserRouter=express.Router();

UserRouter.get("/",fetchUser);
UserRouter.get("/:username",fetchUserByUsername);
UserRouter.post("/",saveUser);
UserRouter.put("/:username",updateUser);
UserRouter.delete("/:username",deleteUser);

export default UserRouter;