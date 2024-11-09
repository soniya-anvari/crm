import Customer from "@/models/customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req,res){
    try{
        await connectDB()
    }catch(err){
        console.log(err)
        res.status(500).json({message:"error to connecting to DB"})
        return 
    }
    if (req.method == "GET"){
        const id=req.query.customerId
        console.log(id)
        try{
            const customer=await Customer.findOne({_id:id})
            res.status(200).json({status:"success",data:customer})
        }
        catch(err){
            res.status(500).json({status:"failed",message:"Error in Retrieving from DB"})
        }
    }
    
        
}