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
    if (req.method=='POST'){
        console.log(req.body)
        const data=req.body.data
        if (!data.name || !data.lastName || !data.email)
            return res.status(400).json({status:"failed",message:"Invalid Data"})
        try{
            const customer=await Customer.create(data)
            res.status(201).json({status:"success",message:"data created",data:customer})


        }
        catch(err){
            console.log(err)

            return res.status(500).json({status:"failed",message:"Error in Storing data in DB"})

        }
            }
}