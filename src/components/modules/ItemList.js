import FormInput from "./FormInput";

function ItemList({form,setForm}) {
    const {products}=form;
    const addHandler=()=>{
        setForm({...form,products:[...products,{name:"",price:"",qty:""}]})
        console.log(products)
    }
    const changHandler=()=>{

    }
    const deleteHandler=()=>{

    }
  return (
   
    <div className="item-list">
        <p>Purchased Products</p>
        {products.map((product,index)=>(
            <div key={index } className="form-input__list">

            <FormInput name="name" label="Product Name" type="text" value={product.name} 
            onChange={changHandler} /> 
            <div>
                
            <FormInput name="price" label="Product Price" type="text" value={product.price} 
            onChange={changHandler} /> 
            
            <FormInput name="qty" label="Product Qty" type="number" value={product.qty} 
            onChange={changHandler} /> 

            </div>
            <button onClick={deleteHandler}>Remove</button>
            </div>

        )
        )}
        <button onClick={addHandler}>Add Item</button>
    </div>
  )
}

export default ItemList