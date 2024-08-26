import { connection } from "../db/dbutils.js";

export const fetchContact=(req,res)=>{

        const qry="select * from contact";

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in fetching contact details from databse"});
                        }
                        else{
                              res.status(200).send(result);  
                        }
        })
}

export const fetchContactByUsername=(req,res)=>{

        const username=req.params.username;
        const qry= `select * from contact
                        where username='${username}'`;

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in fetching Contact by username details from databse"});
                        }
                        else{
                              res.status(200).send(result);  
                        }
        })
}

export const saveContact=(req,res)=>{

        const {username,email,phone,feedback}=req.body;

        console.log(req.body);
        const qry= `insert into contact
                        value ('${username}','${email}','${phone}','${feedback}')`;

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in saving contact details in databse"});
                        }
                        else{
                              res.status(200).send({message:"conatcts saved in database."});  
                        }
        })
}

export const updateContact=(req,res)=>{
        const {username,email,phone,feedback}=req.body;
        const user=req.params.username;

        const qry= `update contact
                        set username='${username}',email='${email}',phone='${phone}',feedback='${feedback}'
                        where username='${user}'`;

                        

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in updating contacts details from databse"});
                        }
                        else{
                              res.status(200).send({message:"contacts updated in database."});  
                        }
        })
}

export const deleteContact=(req,res)=>{
      
        const user=req.params.username;

        const qry= `delete from contact
                        where username='${user}'`;

                        

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in deleting contacts details from databse"});
                        }
                        else{
                              res.status(200).send({message:"contacts deleted from database."});  
                        }
        })
}