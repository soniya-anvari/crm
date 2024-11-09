import { useRouter } from 'next/router'
import React from 'react'

function EditCustomer() {
    const router=useRouter()
    console.log(router)
    const clickHandler=async()=>{
        try {
            const res=await fetch(`/api/edit/${router.query.customerId}`,{method:"PATCH"})
            const data=await res.json()
            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
    }
 
  return (
    <div>
        <button onClick={clickHandler}>Edit</button>
    </div>
  )
}

export default EditCustomer