import { connection } from "../db/dbutils.js";

export const checkUser=(req,res)=>{

        const {username, password}=req.body;
        
     

        const qry= `select * from user
         where username='${username}' and password='${password}' `;

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in ching user details from databse"});
                        }
                        else{
                              res.status(200).send(result);  
                        }
        })
}
