import express from "express";
import {connection} from "./src/db/dbutils.js";
import UserRouter from "./src/router/UserRouter.js";
import ContactRouter from "./src/router/ContactRouter.js";
import MunicipalityRouter from "./src/router/MunicipalityRouter.js";
import AnimalRouter from "./src/router/AnimalRouter.js";
import cors from "cors";
import LoginRouter from "./src/router/LoginRouter.js";

const app=express();//server creted
const PORT=2400;

app.use(cors());
app.use(express.json()); // middlweware, // url  mid : > fun/controller // 
app.use("/users",UserRouter);
app.use("/contacts",ContactRouter);
app.use("/muni",MunicipalityRouter);
app.use("/animal",AnimalRouter);
app.use("/login",LoginRouter);


app.listen(PORT,()=>{

        connection.connect((err)=>{
                if(err)
                        {
                                
                                console.log("there is problem to connect with database " + err);
                        }
                        else{
                                console.log("connected with database");
                        }
        });
        console.log("Server is on port 2400");
})