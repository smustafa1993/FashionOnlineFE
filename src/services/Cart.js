import Client from "./api"

export const GetCart = async () => {
  try {
    const res = await Client.get("/carts")
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddToCart = async (data) => {
  try {
    const res = await Client.post("/carts/addtocart", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const RemoveFromCart = async (data) => {
  try {
    const res = await Client.post("/carts/removefromcart", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const IncreaseQty = async (data) => {
  try {
    const res = await Client.post("/carts/increase", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DecreaseQty = async (data) => {
  try {
    const res = await Client.post("/carts/decrease", data)
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
