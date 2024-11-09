import Card from "../modules/Card"

function HomePage({customers}) {
  return (
    
    <>
    {customers.map(customer=>
        <Card key={customer._id} customer={customer} />
    )}</>
  )
}

export default HomePage