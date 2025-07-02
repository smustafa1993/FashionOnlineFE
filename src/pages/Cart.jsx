import { useEffect, useState } from "react"
import { GetCart, ClearCart } from "../services/Cart"
import CartItem from "../components/Cart"
import { Link, useNavigate } from "react-router"
import { toast } from "react-toastify"

const Cart = ({ user }) => {
  const [cart, setCart] = useState(null)
  const handleCart = async () => {
    try {
      const data = await GetCart()
      setCart(data)
    } catch (error) {
      console.error("Failed to fetch cart:", error)
    }
  }

  useEffect(() => {handleCart()}, [])

  const calculateTotal = () => {
    if (!cart.items) return 0
    else
    return cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  }
  let navigate = useNavigate()
  const handleCheckout = async () => {

    try {
      await ClearCart()
      await handleCart()
      navigate("/products")
      toast("Purchase Complete!")
    } catch (error) {
      console.error("Checkout failed:", error)
    }
  }

  return (
    <>
      <h1>Your Cart</h1>
      <div className="cart-items">
{cart && cart.items && cart.items.length > 0 ? (
          cart.items.map((item) => (
            <CartItem
              key={item.product._id}
              item={item}
              user={user}
              refreshCart={handleCart}
            />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

{cart && cart.items && cart.items.length > 0 && (
  <div className="cart-footer">
    <h3>Total: {calculateTotal().toFixed(2)} BHD</h3>
    <button onClick={handleCheckout}>
      Checkout
    </button>
  </div>
)}

    </>
  )
}

export default Cart
