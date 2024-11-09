import Customer from "@/models/customer"
import connectDB from "@/utils/connectDB"
export default async function handler (req,res){
    try{
        await connectDB()
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"error to connecting to DB"})
        return 
    }
    if (req.method=="PATCH"){
        const id=req.query.customerId
        const data=JSON.parse(req.body).data
        console.log('dd',data)
        try{
            const user=await Customer.findOne({_id:id})
            user.name=data.name
            user.lastName=data.lastName
            user.email=data.email
            user.phone=data.phone
            user.address=data.address
            user.portalCode=data.portalCode
            user.products=data.products
            user.upadtedAt=Date.now()
            user.save()
            res.status(200).json({status:"success",data:user})


        }catch(error)
        {
            console.log(error)
            res.status(500).json({status:"failed",message:"Error in Retrieving from DB"})
        }        
        

    }
}