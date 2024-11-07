import mongoose from "mongoose";

async function connectDB(){
    if (mongoose.connections[0].readyState) return
     // اگر قبلا به دیتابیس متصل شده  است  ریترن شود
     // Return if it has already been connected to the database
     else{
       await  mongoose.connect(process.env.MONGO_URI) 
       //connect to db
       //اتصال به دیتابیس
       console.log("connect db")
       
     }
}
export default connectDB;