import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GetProdById } from "../services/Prod"
import DeleteProdBtn from "../components/DeleteProdBtn"
import EditProdBtn from "../components/EditProdBtn"

const ProdDetail = ({user}) => {
    const { id } = useParams()
    const [product, setProduct] = useState(null) 
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)
    const [edited, setEdited] = useState(false)
    let navigate = useNavigate()

    const handleDelete = () => {
        navigate("/products")
    }

    useEffect(() => {
        const handleProd = async () => {
            try {
                setLoading(true)
                setErr(null)

                const data = await GetProdById(id)
                setProduct(data)
            } catch (error) {
                setErr(error)
            } finally {
                setLoading(false)
            }
            const data = await GetProdById(id)
            setProduct(data)
        }
        if(id) {
            handleProd()
        }
        
    }, [id, edited])
    if (loading){
        return <div>Loading product details</div>
    }

    if(err){
        return <div>Error loading product</div>
    }
    return(
        <>
        <div className="prod">
            <h3>{product.name}</h3>
            <img src={product.img}/>
            <h4>{product.description}</h4>
            <p>Price: {product.price} BHD</p>
            <p>Stock: {product.stock}</p>

            {/* Here if user is false it will not render this part
            then again if user.isAdmin is not true also no render */}
            { user && user.isAdmin && (
                <div className="prodaction">
                    <DeleteProdBtn id={product._id} handleDeleteSub={handleDelete} />
                    <EditProdBtn id={product._id}  setEdited={setEdited}/>
                </div>
            )}

        </div>
        </>
    )
}
export default ProdDetail