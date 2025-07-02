import Client from "./api"

export const CreateProd = async (data) => {
    try {
        const res = await Client.post("/products", data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetProds = async () => {
    try {
        const res = await Client.get("/products")
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetProdById = async (id) => {
    try {
        const res = await Client.get(`/products/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteProd = async (id) => {
    try {
        const res = await Client.delete(`/products/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UpdateProd = async (id, product) => {
    try {
        const res = await Client.put(`/products/${id}`, product)
        return res.data
    } catch (error) {
        throw error
    }
}