import { useFormik } from "formik";
import "../FormUsingFormik/Formikform.css";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import validationSchema from "./YUP";
import "./FormikTable.css";
import Swal from "sweetalert2";

const FormikTable = () => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  // const [CNICArr, setCNICArr]= useState([])
  // const arr=[1,2,3,4,5]
  // localStorage.setItem("arrayNum",JSON.stringify(arr));
  // const storedarr= localStorage.getItem("arrayNum")
  // let arraysNum=JSON.parse(storedarr)
  // arraysNum.push("100")
  // console.log(arraysNum)
  useEffect(()=>{
    let FormData=localStorage.getItem("formData")
    let parseData= JSON.parse(FormData)
    if(parseData){
      setFilteredData(parseData)
      setProductData(parseData)
    }

    console.log(localStorage,localStorage.length)
  },[])
  useEffect(()=>{
    localStorage.setItem("formData",JSON.stringify(filteredData))
    // console.log("Hellllooo")
  },[filteredData])
  const tableFields = useFormik({
    initialValues: {
      name: "",
      username: "",
      QTY: "",
      phone: "",
      color: "",
      country: "",
      CNIC: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (editIndex === null) {
        addSubmittedData(values);
      } else {
        const newCNIC = values.CNIC;
        let checkCNIC = productData.some(
          (product, index) => product.CNIC === newCNIC && index !== editIndex
        );
        if (checkCNIC) {
          toast?.error("Enter different CNIC.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          let newData = [...productData];
          newData[editIndex] = values;
          setProductData(newData);
          setFilteredData(newData);
          tableFields.resetForm();
        }
      }

      console.log(values);

      setEditIndex(null);
    },
  });

  function addSubmittedData(values) {
    const newCNIC = values.CNIC;
    let checkCNIC = productData?.some((product) => product.CNIC === newCNIC);
    if (checkCNIC) {
      console.log("same");
      toast?.error("Enter different CNIC.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      console.log("unique");
      setProductData([...productData, values]);
      setFilteredData([...productData, values]);
      tableFields.resetForm();

      toast?.success("Form submittd successfully.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }
   const deleteProduct = (indexToRemove) => {
    setFilteredData(
      productData?.filter((item, index) => index !== indexToRemove)
    );
    setProductData(
      productData?.filter((item, index) => index !== indexToRemove)
    );
    Swal.fire({
      title: "Deleted Successfully",
      icon: "success",
      draggable: true,
    });
  };

  const editProduct = (dataIndex) => {
    const selectedData = productData[dataIndex];

    tableFields?.setValues(selectedData);
    setEditIndex(dataIndex);
    window.scrollTo(0, 130);

    // console.log(selectedData);
  };
  // function selectionHandle(){
  //   const selectedValue=selectionRef.current.value
  //   return selectedValue
  // }
  function handleSearch(e) {
    // console.log(e?.target?.value)
    const typedValue = e?.target?.value?.toLowerCase();
    if (!typedValue) {
      setFilteredData(productData);
    } else {
      // let selectedType= selectionHandle()
      setFilteredData(
        productData?.filter(
          (product) =>
            product?.name?.toLowerCase()?.includes(typedValue) ||
            product?.username?.toLowerCase()?.includes(typedValue) ||
            product?.color?.toLowerCase()?.includes(typedValue) ||
            product?.phone?.toLowerCase()?.includes(typedValue) ||
            product?.country?.toLowerCase()?.includes(typedValue)
        )
      );
    }
  }
//  let arrData= localStorage?.getItem("Arr")

//  console.log( arrData.split(","))
  //   console.log(tableFields);
  return (
    <div className="Formikform">
      <ToastContainer />
      <div className="containar mx-5">
        <div className="title">Product Form</div>
        <div className="content">
          <form onSubmit={tableFields?.handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <label className="details" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  placeholder="Enter your name"
                  name="name"
                  onChange={(e) => {
                    tableFields?.setFieldValue("name", e.target.value);
                  }}
                  value={tableFields?.values?.name}
                  onBlur={() => {
                    tableFields?.setFieldTouched("name", true, true);
                  }}
                />
                {tableFields?.touched?.name && tableFields?.errors?.name && (
                  <p className="text-danger errorMessage">
                    {tableFields?.errors?.name}
                  </p>
                )}
              </div>
              <div className="input-box">
                <label className="details" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  name="username"
                  onChange={tableFields?.handleChange}
                  value={tableFields?.values?.username}
                  onBlur={tableFields?.handleBlur}
                />
                {tableFields?.touched?.username &&
                  tableFields?.errors?.username && (
                    <p className="text-danger errorMessage">
                      {tableFields?.errors?.username}
                    </p>
                  )}
              </div>
              <div className="input-box">
                <label className="details" htmlFor="CNIC">
                  CNIC
                </label>
                <input
                  type="text"
                  id="CNIC"
                  placeholder="Enter your CNIC."
                  {...tableFields.getFieldProps("CNIC")}
                />
                {tableFields?.touched?.CNIC && tableFields?.errors?.CNIC && (
                  <p className="text-danger errorMessage">
                    {tableFields?.errors?.CNIC}
                  </p>
                )}
              </div>
              <div className="input-box">
                <label className="details" htmlFor="ProductNumber">
                  QTY:{" "}
                </label>  
                <input
                  type="number"
                  id="ProductNumber"
                  placeholder="Enter Products Number"
                  name="QTY"
                  onChange={tableFields?.handleChange}
                  value={tableFields?.values.QTY}
                  onBlur={tableFields?.handleBlur}
                />
                {tableFields?.touched?.QTY && tableFields?.errors?.QTY && (
                  <p className="text-danger errorMessage">
                    {tableFields?.errors?.QTY}
                  </p>
                )}
              </div>
              <div className="input-box">
                <label className="details" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your number"
                  {...tableFields?.getFieldProps("phone")}
                />
                {tableFields?.touched?.phone && tableFields?.errors?.phone && (
                  <p className="text-danger errorMessage">
                    {tableFields?.errors?.phone}
                  </p>
                )}
              </div>
            </div>
            <div className="color-details">
              <input
                type="radio"
                value="Red"
                onChange={tableFields?.handleChange}
                checked={tableFields?.values?.color === "Red"}
                name="color"
                id="dot-1"
                onBlur={tableFields?.handleBlur}
              />
              <input
                type="radio"
                value="Green"
                onChange={tableFields?.handleChange}
                checked={tableFields?.values?.color === "Green"}
                name="color"
                id="dot-2"
                onBlur={tableFields?.handleBlur}
              />
              <input
                type="radio"
                value="Blue"
                name="color"
                onChange={tableFields?.handleChange}
                checked={tableFields?.values?.color === "Blue"}
                id="dot-3"
                onBlur={tableFields?.handleBlur}
              />
              <label className="color-title">Select Color</label>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="color">Red</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="color">Green</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="color">Blue</span>
                </label>
              </div>
              {tableFields?.touched?.color && tableFields?.errors?.color && (
                <p className="text-danger errorMessage">
                  {tableFields?.errors?.color}
                </p>
              )}
            </div>

            <div className="input-box">
              <label className="details fw-bold mb-1 mt-3" htmlFor="country">
                Select Country
              </label>
              <select
                id="country"
                name="country"
                className="form-select"
                onChange={tableFields?.handleChange}
                value={tableFields?.values?.country}
                onBlur={tableFields?.handleBlur}
              >
                <option value="">-- Select a Country --</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>

              {tableFields?.touched?.country &&
                tableFields?.errors?.country && (
                  <p className="text-danger errorMessage">
                    {tableFields?.errors?.country}
                  </p>
                )}
            </div>

            <div className="button">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <h2 className="text-white mb-3">Product Data:</h2>
      <div className="d-flex gap-4">
        <div className="searchProducts d-flex align-items-center gap-1">
          <input
            type="text"
            onChange={handleSearch}
            className="form-control "
          />
        </div>
        {/* <select className="form-select " onChange={selectionHandle} ref={selectionRef} aria-label="Default select example">
        <option defaultChecked>--Select By--</option>
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="phone">Phone Number</option>
        <option value="color">Color</option>
        <option value="country">Country</option>
      </select> */}
      </div>
      <table className="formData containar productItems table table-striped table-bordered text-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>CNIC</th>
            <th>QTY</th>
            <th>Phone</th>
            <th>Color</th>
            <th>Country</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.CNIC}</td>
              <td>{data.QTY}</td>
              <td>{data.phone}</td>
              <td>{data.color}</td>
              <td>{data.country}</td>
              <td>
                <button
                  className="DataBtn pencil btn btn-warning"
                  onClick={() => editProduct(index)}
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>
              </td>
              <td>
                <button
                  className="DataBtn del btn btn-danger"
                  onClick={() => deleteProduct(index)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-danger" onClick={(()=>{ 
        

          // localStorage.removeItem("arrayNum") 
          localStorage.clear() 

          console.log(localStorage, localStorage.length , localStorage.key(0))
        
        
        
        })}>Clear Storage</button>
     
    </div>
  );
};

export default FormikTable;
