import {IncreaseQty,DecreaseQty,RemoveFromCart} from '../services/Cart'


const CartItem = ({ item, refreshCart }) => {
  const { product, quantity } = item

  const handleIncrease = async () => {
    try {
      await IncreaseQty({ productId: product._id })
      refreshCart()
    } catch (error) {
      console.error("Error increasing quantity:", error)
    }
  }

  

  const handleDecrease = async () => {
    try {
      await DecreaseQty({ productId: product._id })
      refreshCart()
    } catch (error) {
      console.error("Error decreasing quantity:", error)
    }
  }

  const handleRemove = async () => {
    try {
      await RemoveFromCart({ productId: product._id })
      refreshCart()
    } catch (error) {
      console.error("Error removing from cart:", error)
    }
  }

  return (
    <div className="cart-item">
      <div className="cart-item-name">
        <h4>{product.name}</h4>
      </div>
      <div className="cart-item-price">
        <p>{product.price} BHD</p>
      </div>
      <div className="cart-item-qty">
        <button onClick={handleDecrease} className="qty-btn">-</button>
        <span className="qty-number">{quantity}</span>
        <button onClick={handleIncrease} className="qty-btn">+</button>
      </div>
      <div className="cart-item-remove">
        <button onClick={handleRemove} className="remove-btn">Remove</button>
      </div>
    </div>
  )
}

export default CartItem
