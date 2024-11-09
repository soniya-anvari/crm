import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Form from '../modules/Form'
import moment from 'moment'

function EditCustomer({customer,id}) {
    const router=useRouter()    

    const [form,setForm]=useState({})
    let date;
    if (customer)
       date=customer.date?moment(customer.date).utc().format('YYYY-MM-DD'):"";
    
    useEffect(()=>{
      setForm({
        name:customer.name,
        lastName:customer.lastName,
        email:customer.email,
        phone:customer.phone||"",
        address:customer.address || "",
        portalCode:customer.portalCode ||"",
        products:customer.products ||"",
        date
  
      })
    },[customer])
    
    const editHandler=async()=>{
        try {
            const res=await fetch(`/api/edit/${router.query.customerId}`,{method:"PATCH",body:JSON.stringify({data:form})})
            const data=await res.json()
            if (data.status=="success")
              router.push('/')            
        } catch (error) {
            console.log(error)
        }
    }
    const cancleHandler=()=>{
      router.push('/')
    }
 
  return (
    <div className='customer-page'>
      <h4>Customer Page</h4>
        <Form form={form} setForm={setForm} />
        <div className='customer-page__buttons'>
          <button className='first' onClick={cancleHandler}>Cancel</button>
          <button className='second' onClick={editHandler}>Edit</button>

        </div>
    </div>
  )
}

export default EditCustomer