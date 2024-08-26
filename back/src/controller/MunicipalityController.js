import { connection } from "../db/dbutils.js";

export const fetchMunicipality=(req,res)=>{

        const qry="select * from gov";

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in fetching Municipality details from databse"});
                        }
                        else{
                              res.status(200).send(result);  
                        }
        })
}

export const fetchMunicipalityByUsername=(req,res)=>{

        const username=req.params.username;
        const qry= `select * from gov
                        where username='${username}'`;

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in fetching Municipality by username details from databse"});
                        }
                        else{
                              res.status(200).send(result);  
                        }
        })
}

export const saveMunicipality=(req,res)=>{

        const {username,status,msg}=req.body;

        const qry= `insert into gov
                        value ('${username}','${status}','${msg}')`;

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in saving Municipality details in databse"});
                        }
                        else{
                              res.status(200).send({message:"conatcts saved in database."});  
                        }
        })
}

export const updateMunicipality=(req,res)=>{
        const {username,status,msg}=req.body;
        const user=req.params.username;

        const qry= `update gov
                        set id='${username}',status='${status}',msg='${msg}'
                        where username='${user}'`;

                        

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in updating Municipality details from databse"});
                        }
                        else{
                              res.status(200).send({message:"contacts updated in database."});  
                        }
        })
}

export const deleteMunicipality=(req,res)=>{
      
        const username=req.params.username;

        const qry= `delete from gov
                        where username='${username}'`;

                        

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in deleting Municipality details from databse"});
                        }
                        else{
                              res.status(200).send({message:"contacts deleted from database."});  
                        }
        })
}