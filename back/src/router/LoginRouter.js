import express from "express";
import { checkUser } from "../controller/LoginController.js";

const LoginRouter=express.Router();

LoginRouter.post("/",checkUser);


export default LoginRouter;