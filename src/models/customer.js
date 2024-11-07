const { Schema, models, model } = require("mongoose");

const customerSchema=new Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    lastName:{
        type:String,
        required:true,
        minLength:1
    },
    email:{
        type:String,
        required:true,
        minLength:1
    },
    phone:String,
    address:String,
    postalCode:Number,
    date:Date,//تاریخ عضویت  در سایت //The date of joining the site
    products:{
        type:Array,
        default:[]
    },
    createdAt:{ 
        //تاریخ عضویت در دیتابیس 
        // Date of membership in the database
        type:Date,
        default:()=>Date.now(),
        immutable:true //غیر قابل تغییر بودن  // Being immutable
    },
    updateAt:{
        type:Date,
        default:()=>Date.now(), //هرگاه اطلاعات کاربر تغییر کند بروز میشود  // It will be updated whenever the user information changes
    }
})
const Customer=models.Customer || model("Customer",customerSchema)
export default Customer;