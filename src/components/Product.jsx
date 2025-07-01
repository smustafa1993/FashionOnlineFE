import { Link, useNavigate } from "react-router"

const Product = ({product, user}) => {
    const navigate = useNavigate()

    const handleAdd = () => {
        if(user){
            console.log("Adding to cart")
            //add a navigate to the cart page
        }else {
            navigate("/register")
        }
    }
    return(
        <>
        <div className="prodcard">
            <Link to={`/products/${product._id}`}>
                <img src={product.img} alt={product.img}/>
            </Link>    
            <h3>{product.name}</h3>
            <h4>{product.price} BHD</h4>
            <button onClick={handleAdd}>
                Add to Cart
            </button>
        </div>        
        

        </>
    )
}
export default Product