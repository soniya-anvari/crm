import { useState } from "react"
import Form from "../modules/Form"
import { useRouter } from "next/router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function AddCustomerPage() {
    const router=useRouter()
    const [form,setForm]=useState({
        name:"",
        lastName:"",
        email:"",
        phone:"",
        address:"",
        postalCode:"",
        date:"",
        products:[]
    })
    const cancelHandler=()=>{
        setForm({
            name:"",
            lastName:"",
            email:"",
            phone:"",
            address:"",
            postalCode:"",
            date:"",
            products:[]
        })
        router.push('/') 
    }
    const saveHandler=async()=>{
            try {
              const res=await fetch('/api/customer',{method:'POST'
              ,body:JSON.stringify({data:form})
              ,headers:{"Content-Type":"application/json"}})
              const data=await res.json()
              console.log(data)
              if (data.status=="success")
                router.push('/')
            else{
                 toast.error(data.message);
            }
              
            } catch (error) {
              console.log(error)
              
            }
          
    }
  return (
    <div className="customer-page">
        <h4>Add New Customer</h4>
        <Form form={form} setForm={setForm} />
        <div className="customer-page__buttons">
            <button className="first" onClick={cancelHandler}>Cancel</button>
            <button className="second" onClick={saveHandler}>Save</button>

        </div>
        <ToastContainer />
    </div>
  )
}

export default AddCustomerPage