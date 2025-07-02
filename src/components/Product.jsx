import { Link, useNavigate } from "react-router"
import { AddToCart } from "../services/Cart"
import { toast } from "react-toastify"


const Product = ({ product, user }) => {
  const navigate = useNavigate()

  const handleAdd = async () => {
    if (user) {
      try {
        await AddToCart({ productId: product._id, quantity: 1 })
        toast("Added to cart")
        // navigate("/cart") // Optional: comment this out if you want to stay on products page
      } catch (error) {
        console.error("Failed to add to cart:", error)
      }
    } else {
      navigate("/signin")
    }
  }

  return (
    <div className="prodcard">
      <Link to={`/products/${product._id}`}>
        <img src={product.img} alt={product.name} />
      </Link>
      <h3>{product.name}</h3>
      <h4>{product.price} BHD</h4>
      <button onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
