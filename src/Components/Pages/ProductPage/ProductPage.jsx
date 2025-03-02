import { useParams } from "react-router-dom"

const ProductPage = () => {
    const {id,category} = useParams();
  return (
    <div style={{height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}> 
        <h1 className="text-primary">Product Page</h1>
        <h2>Product ID: {id}</h2>
        <h2>Product Category: {category}</h2>
    </div>
  )
}

export default ProductPage
