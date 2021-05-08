const express = require("express");
const Student1 = require("./models/student");
const app = express();
require("./db/connect");
const Student1 = require("./models/student");
const studentRouter = require("./routers/student");
const port=process.env.PORT || 8000;

const router = new express.Router();
//router.get('/rath',(req,res)=>{
    //res.send("Hello");
//});
app.use(studentRouter);



app.use(express.json());
app.post('/student',(req,res) =>
{
//res.send("Hello Vicky");
const user = new Student1(req.body);
user.save().then(()=>{
    res.status(201).send(user);
}).catch((e)=>{
    res.status(201).send(e);

})
});


app.post('/students',async(req,res)=>{
    
try{
    const user = new Student1(req.body);
    const createuser = await user.save();
    res.status(201).send(createuser);

}catch(e){
    res.status(201).send(e);
}
   
  
});


app.get('/students',async(req,res)=>{
try{
const studentsData = await Student1.find();
res.status(201).send(studentsData);
}catch(e){
    res.status(201).send(e);
}
});
app.get('/students/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
    const studentData = await Student1.findById(_id);
    if(!studentData){
        res.status(404).send();
    }
    else
    {
        res.status(201).send(studentData)
    }
    
    }catch(e){
        res.status(500).send(e);
    }
    });

    app.delete('/students/:id',async(req,res)=>{
        try{
            const id=req.params.id;
           const deleteStudent = await Student1.findByIdAndDelete(id);
           if(!req.params.id){
               return res.status(404).send();
           }
           res.send(deleteStudent);


        }catch(e){
            res.status(500).send(e);
        } 


    });
    
app.patch("/students/:id",async(req,res)=>
{
try{
    const _id=req.params.id;
    const updateStudents = await Student1.findByIdAndUpdate(_id,req.body,{
        new:true
    });
    res.send(updateStudents);

}catch(e){
    res.status(404).send(e);

}
})
app.listen(port,()=>
{
    console.log(`Connection is at ${port}`);
});