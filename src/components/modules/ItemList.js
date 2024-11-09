import FormInput from "./FormInput";

function ItemList({form,setForm}) {
    const {products}=form;
    const addHandler=()=>{
        setForm({...form,products:[...products,{name:"",price:"",qty:""}]})
        console.log(products)
    }
    const changHandler=(e,index)=>{
        const newProducts=[...products]
        newProducts[index][e.target.name]=e.target.value
        setForm({...form,products:newProducts})



    }
    const deleteHandler=(index)=>{
        const newProducts=products.filter((item,i)=>i!==index) // or => const newProducts=[...products] __ newProducts.splice(index,1)
        setForm({...form,products:newProducts})

    }
  return (
   
    <div className="item-list">
        <p>Purchased Products</p>
        {products&&products?.map((product,index)=>(
            <div key={index } className="form-input__list">

            <FormInput name="name" label="Product Name" type="text" value={product.name} 
            onChange={(e)=>changHandler(e,index)} /> 
            <div>
                
            <FormInput name="price" label="Product Price" type="text" value={product.price} 
            onChange={(e)=>changHandler(e,index)} /> 
            
            <FormInput name="qty" label="Product Qty" type="number" value={product.qty} 
            onChange={(e)=>changHandler(e,index)} /> 

            </div>
            <button onClick={()=>deleteHandler(index)}>Remove</button>
            </div>

        )
        )}
        <button onClick={addHandler}>Add Item</button>
    </div>
  )
}

export default ItemList