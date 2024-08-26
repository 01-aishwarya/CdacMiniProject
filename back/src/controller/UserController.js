import { connection } from "../db/dbutils.js";

export const fetchUser=(req,res)=>{

        const qry="select * from user";

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in fetching user details from databse"});
                        }
                        else{
                              res.status(200).send(result);  
                        }
        })
}

export const fetchUserByUsername=(req,res)=>{

        const username=req.params.username;
        const qry= `select * from user
                        where username='${username}'`;

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in fetching user by username details from databse"});
                        }
                        else{
                              res.status(200).send(result);  
                        }
        })
}

export const saveUser=(req,res)=>{

        const {email,username, password,phone,category}=req.body;
        
     

        const qry= `insert into user
                        value ('${email}','${username}','${password}','${phone}','${category}')`;

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in saving user details from databse"});
                        }
                        else{
                              res.status(200).send({message:"user saved in database."});  
                        }
        })
}

export const updateUser=(req,res)=>{
        const {email,username, password,phone ,category}=req.body;
        const user=req.params.username;

        // rea.body;
        // req.params.username;

        const qry= `update user
                        set email='${email}',username='${username}',password='${password}',phone='${phone}',category='${category}'
                        where username='${user}' `;

                        

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in updating user details from databse"});
                        }
                        else{
                              res.status(200).send({message:"user updated in database."});  
                        }
        })
}

export const deleteUser=(req,res)=>{
      
        const user=req.params.username;

        const qry= `delete from user
                        where username='${user}'`;

                        

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in deleting user details from databse"});
                        }
                        else{
                              res.status(200).send({message:"user deleted from database."});  
                        }
        })
}