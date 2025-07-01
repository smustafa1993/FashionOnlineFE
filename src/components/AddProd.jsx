import { useState } from "react"
import { CreateProd } from "../services/Prod"
import { useNavigate } from 'react-router-dom'

const AddProd = () => {
    let navigate = useNavigate()

    const initialState = {
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        img: "",
        color: ""
    }

    const [formVals, setFormVals] = useState(initialState)

    const handleChange = (e) => {
        setFormVals({...formVals, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const price = parseFloat(formVals.price)
        const stock = parseInt(formVals.stock)
        let img = ""

        if(!formVals.img){
            img = "https://i.postimg.cc/y6bnGJ6y/noimg.jpg"
        }

        try {
            await CreateProd({
            ...formVals,
            price: price,
            stock: stock,
            img: img
        }) 

        setFormVals(initialState);
        navigate("/products");
        } catch (error) {
            throw error
        }    
    }
    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="name">Name *</label>
                    <input
                        onChange={handleChange}
                        id="name"
                        type="text"
                        placeholder="Blue Shirt"
                        value={formVals.name}
                        required
                        autoComplete="name"
                    />
               </div> 
               <div className="input-wrapper">
                    <label htmlFor="description">Description</label>
                    <input
                        onChange={handleChange}
                        id="description"
                        type="text"
                        placeholder="Handsome Blue Shirt"
                        value={formVals.description}
                        autoComplete="description"
                    />
               </div>   
               <div className="input-wrapper">
                    <label htmlFor="category">Category</label>
                    <input
                        onChange={handleChange}
                        id="category"
                        type="text"
                        placeholder="Shirt"
                        value={formVals.category}
                        autoComplete="category"
                    />
               </div>       
               <div className="input-wrapper">
                    <label htmlFor="price">Price *</label>
                    <input
                        onChange={handleChange}
                        id="price"
                        type="number"
                        step="0.01"
                        value={formVals.price}
                        required
                        autoComplete="price"
                    />
               </div>
               <div className="input-wrapper">
                    <label htmlFor="stock">Stock *</label>
                    <input
                        onChange={handleChange}
                        id="stock"
                        type="number"
                        value={formVals.stock}
                        required
                        autoComplete="stock"
                    />
               </div>  
               <div className="input-wrapper">
                    <label htmlFor="img">Image</label>
                    <input
                        onChange={handleChange}
                        id="img"
                        type="text"
                        value={formVals.img}
                        autoComplete="img"
                    />
               </div>  
               <div className="input-wrapper">
                    <label htmlFor="color">Color</label>
                    <input
                        onChange={handleChange}
                        id="color"
                        type="text"
                        value={formVals.color}
                        autoComplete="img"
                    />
               </div> 
                <button>
                    Add Product
                </button>               
            </form>
        </div>
        </>
    )
}
export default AddProd