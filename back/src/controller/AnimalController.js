import { connection } from "../db/dbutils.js";

export const fetchAnimal=(req,res)=>{

        const qry="select * from animal";

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in fetching Animal details from databse"});
                        }
                        else{
                              res.status(200).send(result);  
                        }
        })
}

export const fetchAnimalByAname=(req,res)=>{

        const aname=req.params.aname;
        const qry= `select * from animal
                        where aname='${aname}'`;

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in fetching Animal by username details from databse"});
                        }
                        else{
                              res.status(200).send(result);  
                        }
        })
}

export const fetchAnimalById=(req,res)=>{

        const username=req.params.id;
        const qry= `select * from animal
                        where username='${id}'`;

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in fetching Animal by id details from databse"});
                        }
                        else{
                              res.status(200).send(result);  
                        }
        })
}

export const saveAnimal=(req,res)=>{

       
       
        const {username,phone,email,file,location,msg,situation,org,aname}=req.body;
        

        const qry= `insert into animal(username,phone,email,file,location,msg,situation,org,aname)
                        value ('${username}','${phone}','${email}','${file}','${location}','${msg}','${situation}','${org}','${aname}')`;

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in saving animal details in databse"});
                        }
                        else{
                              res.status(200).send(result);  
                        }
        })
}



export const updateAnimal=(req,res)=>{
        const {username,phone,email,file,location,msg,situation,org,aname}=req.body;
        const user=req.params.aname;
console.log(user);
        const qry= `update animal
                        set username='${username}',email='${email}',phone='${phone}',file='${file}',location='${location}',
                        msg='${msg}',situation='${situation}',org='${org}',aname='${aname}'
                        where aname='${user}'`;

                        

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in updating animal details from databse"});
                        }
                        else{
                              res.status(200).send({message:"animal updated in database."});  
                        }
        })
}

export const deleteAnimal=(req,res)=>{
      
        const user=req.params.aname;
console.log(user);
        const qry= `delete from animal
                        where aname='${user}'`;

                        

        connection.query(qry,(error,result)=>{
                if(error)
                        {
                                res.status(501).send({message:"there is probem in deleting animal  details from databse"});
                        }
                        else{
                              res.status(200).send({message:"animal deleted from database."});  
                        }
        })
}