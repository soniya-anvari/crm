import Customer from "@/models/customer";
import connectDB from "@/utils/connectDB";
import MainPage from "../components/template/HomePage";
function Index({customers}) {
  return (
    <>
    <MainPage customers={customers} />
    </>
  )
}

export default Index;
export async function getServerSideProps(){
  try {
    await connectDB()
    const customers=await Customer.find()
    return {
      props:{customers:JSON.parse(JSON.stringify(customers))}
    }
    
  } catch (error) {
    return {
      notFound:true
    }
    
  }
  
}