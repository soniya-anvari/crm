import Link from "next/link"
import { useRouter } from "next/router"

function Card({customer}) {
  const router =useRouter()
  const deleteHandler=async()=>{
    try {
      const res=await fetch(`/api/customer`,{method:"DELETE",body:JSON.stringify({id:customer._id})})

      const data=await res.json()
      if (data.status=="success")
        router.reload()


    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className="card">
        <div className="card__details">
            <p>
                {customer.name} {customer.lastName}
            </p>
            <p>{customer.email}</p>
        </div>
        <div className="card__buttons">
            <button onClick={deleteHandler}>Delete</button>
            <Link href={`/edit/${customer._id}`}>Edit</Link>
            <Link href={`/customer/${customer._id}`}>Detail</Link>
        </div>
    </div>
  )
}

export default Card