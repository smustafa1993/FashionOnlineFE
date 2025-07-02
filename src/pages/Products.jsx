import { useEffect, useState } from "react"
import { GetProds } from "../services/Prod"
import Product from "../components/Product"

const Products = ({user}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const handleProds = async () => {
            const data = await GetProds()
            setProducts(data)
        }
        handleProds()
    }, [])

    return(
        <>
        <h1>You will Shop Here!</h1>
        <div className="prods">
                {products.map((product) => (
                    <Product key={product._id} product={product} user={user}/>
                ))}
        </div>
        </>
    )
}
export default Products