const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/studentsapi",
{
useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true,
useFindAndModify:false
}).then(()=>{
    console.log("Connection is Successful");
}).catch((e)=>{
    console.log("Failed Connection")
});
