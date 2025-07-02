import Client from "./api"

export const GetCart = async () => {
  try {
    const res = await Client.get("/carts")
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddToCart = async ({ productId, quantity }) => {
  try {
    const res = await Client.post("/carts/addtocart", { productId, quantity })
    return res.data
  } catch (error) {
    throw error
  }
}

export const RemoveFromCart = async ({ productId }) => {
  try {
    const res = await Client.post("/carts/removefromcart", { productId })
    return res.data
  } catch (error) {
    throw error
  }
}

export const IncreaseQty = async ({ productId }) => {
  try {
    const res = await Client.post("/carts/increase", { productId })
    return res.data
  } catch (error) {
    throw error
  }
}

export const DecreaseQty = async ({ productId }) => {
  try {
    const res = await Client.post("/carts/decrease", { productId })
    return res.data
  } catch (error) {
    throw error
  }
}

export const ClearCart = async () => {
  try {
    const res = await Client.post("/carts/clearcart")
    return res.data
  } catch (error) {
    throw error
  }
}
