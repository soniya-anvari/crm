import { useRouter } from 'next/router';
import CustomerDetails from '../../components/template/CutomerDetails';
import { useEffect, useState } from 'react';
function  index() {
    const router=useRouter()
  const [customer,setCustomer]=useState([])
  
  useEffect(()=>{
    const  editHandler=async()=>{
      try{
          console.log(router.query)
          const res=await fetch(`/api/customer/${router.query.customerId}`)
          const data=await res.json()
          console.log(data.data)
          setCustomer(data.data)
      }
      catch(err){
          console.log(err)
      }
    }
    if(router.isReady)
      editHandler()

      },[router.isReady])
  return (
    <div>
        <CustomerDetails customer={customer} />
    </div>
  )
}

export default index;