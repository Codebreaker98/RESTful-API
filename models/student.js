const mongoose = require("mongoose");
const validator = require("validator");
const module = require("module");
const studentSchemma = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            minlength:5
        },
        email:{
            type:string,
            required:true,
            unique:[true,"Email id already Present"],
            validate(val){
                if(!validator.isEmail(val)){
                    throw new Error("Invalid Email");


                }
            }
        },
        Phone:{
            type:Number,
            minlength:10,
            maxlength:10,
            required:true,
            unique:true
        },
        Address:{
            type:String,
            required:true
        }
        

        
    });



    const Student1 = new mongoose.model('Student1',studentSchemma);
    
    module.exports = Student1;