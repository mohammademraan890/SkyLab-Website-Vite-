import { useLocation, useNavigate } from "react-router-dom";
import "./QueryParameter.css";
import { categoryBtns, Products } from "../Data/Data";
import { useEffect, useState } from "react";

const QueryParameter = () => {
  const [productType, setProductType] = useState(null);
  // const [message, setMessage] = useState("Initial Render");

  let location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location?.search);
  console.log(params)
  const category = params?.get("category");
console.log(category)
  // useLayoutEffect(() => {
  //   const start = Date.now();
  //   while (Date.now() - start < 10000) {
  //     // Block for 5 seconds
  //   }
  //   setMessage(`Show after 10 seconds`);
  // }, []);

  // useLayoutEffect(()=>{
  //     setTimeout(() => {
  //       setMessage(`Show after 3 seconds`);
  //     }, 3000);
  // },[])

  useEffect(() => {
    setProductType(category || "all");
  }, [category]);

  return (
    <div className="ProductSec custom-container text-center">
      {/* <h2>{message}</h2> */}
      <div>
        <h2 className="my-4">Products</h2>
        {categoryBtns?.map((btn) => {
          return (
            <button
              key={btn?.id}
              onClick={() => navigate(`?category=${btn?.category}`)}
              className={`btn btn-primary mx-2 ${
                btn?.category === productType ? "active" : ""
              }`}
            >
              {btn?.name}
            </button>
          );
        })}
      </div>
      <div className="products">
        {Products?.map((product) => {
          return (
            (productType === "all" || product?.category === productType) && (
              <div key={product?.id} className="productBox">
                <h5>{product?.name}</h5>
                <b>Price: {product?.price} Rs </b>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default QueryParameter;
