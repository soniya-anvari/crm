import moment from "moment"
import Link from "next/link";
import { useRouter } from "next/router";

function CutomerDetails({customer}) {
    const date=customer.date?moment(customer.date).utc().format('YYYY-MM-DD'):"";
    const router =useRouter()
    const deleteHandler=async()=>{
        
        
        try {
          const res=await fetch(`/api/customer`,{method:"DELETE",body:JSON.stringify({id:customer._id})})
    
          const data=await res.json()
          if (data.status=="success")
            router.push('/')
           
    
    
        } catch (error) {
          console.log(error)
          
        }
      }
  return (
    <div className="customer-detail">
        <h4>Customer`s Details</h4>
        <div className="customer-detail__main">
            <div className="customer-detail__item">
                <span>Name:</span>
                <p>{customer.name}</p>
            </div>
            <div className="customer-detail__item">
                <span>Last Name:</span>
                <p>{customer.lastName}</p>
            </div>
            <div className="customer-detail__item">
                <span>Email:</span>
                <p>{customer.email}</p>
            </div>
            <div className="customer-detail__item">
                <span>Phone:</span>
                <p>{customer.phone}</p>
            </div>
            <div className="customer-detail__item">
                <span>Address:</span>
                <p>{customer.address}</p>
            </div>
            <div className="customer-detail__item">
                <span>Postal Code:</span>
                <p>{customer.postalCode}</p>
            </div>
            <div className="customer-detail__item">
                <span>Date:</span>
                <p>{date}</p>
            </div>
            
        </div>
       
        {customer.products&&<div className="customer-detail__products">
            <p>Name</p>
            <p>Price</p>
            <p>Qty</p>

            {customer.products&&customer?.products.map(product=>(
                <div key={product._id}>
                <p>{product.name}</p>
                <span>{product.price}</span>
                <span>{product.qty}</span>
                </div>
            ))}

        </div>
        }
        <div className="customer-detail__buttons">
            <p>Edit or Delete?</p>
            <button onClick={deleteHandler}>Delete</button>
            <Link href={`/edit/${customer._id}`}>Edit</Link>

        </div>

    </div>
  )
}

export default CutomerDetails