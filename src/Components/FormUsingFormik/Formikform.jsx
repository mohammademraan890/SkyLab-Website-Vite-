import { useFormik } from "formik";
import "./Formikform.css";
import validationSchema from "./yupValidation.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useEffect, useState } from "react";
// import { useEffect } from "react";

const Formicform = () => {
  const Formikform = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      Age: "",
      password: "",
      confirmPassword: "",
      gender: "",
      country: "",
      color: "#000000",
      time: "",
      date: "",
      range: "",
      interests: [],
      terms: false,
    },
    // initialErrors:{
    //   confirmPassword: "Enter Password First."
    // },
    // initialTouched:{
    //   confirmPassword: true,
    // },
    initialStatus: "Enter your credentials",
    validationSchema,
    onSubmit: (values, { setStatus }) => {
      // console.log(values);
      setStatus("Form is submitted");
      toast.success("Form submittd successfully.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      Formikform.resetForm();
      console.log(values);
    },
  });
  // useEffect(()=>{
  //   if(!Formikform?.values?.password || Formikform?.errors?.password){
  //     Formikform.setFieldError("confirmPassword","Fill the password Field First")
  //   }

  // },[Formikform?.values?.password , Formikform?.errors?.password])
  // const [showArea,setShowArea] = useState(false)
  //   useEffect(()=>{
  //     if(showArea){
  //       Formicform.registerField("area",{
  //         validate:(value)=>
  //           value ? undefined : "Enter details here."
  //       })
  //     }
  //   },[ShowArea])
  console.log(Formikform);
  const EmailMeta = Formikform.getFieldMeta("email");
  // console.log(EmailMeta);
  // console.log(validationSchema);
  // console.log(Formikform.getFieldProps("phone"));
  return (
    <div className="Formikform">
      <ToastContainer />
      <div className="containar mx-5">
        {Formikform.status && (
          <h1 className="text-danger text-center">{Formikform.status}</h1>
        )}
        <div className="title">Registration</div>
        <div className="content">
          <form onSubmit={Formikform?.handleSubmit}>
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
                    Formikform.setFieldValue("name", e.target.value);
                  }}
                  value={Formikform?.values?.name}
                  onBlur={() => {
                    Formikform.setFieldTouched("name", true, true);
                  }}
                />
                {Formikform?.touched?.name && Formikform?.errors?.name && (
                  <p className="text-danger errorMessage">
                    {Formikform?.errors?.name}
                  </p>
                )}
                {/* <button
                  className="btn btn-dark"
                  onClick={() => {
                    Formikform.setFieldValue("name", "Hello world", false);
                    Formikform.setFieldTouched("name", false, false);
                  }}
                >
                  test
                </button> */}
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
                  onChange={Formikform?.handleChange}
                  value={Formikform?.values?.username}
                  onBlur={Formikform?.handleBlur}
                />
                {Formikform?.touched?.username &&
                  Formikform?.errors?.username && (
                    <p className="text-danger errorMessage">
                      {Formikform?.errors?.username}
                    </p>
                  )}
              </div>
              <div className="input-box">
                <label className="details" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={Formikform?.handleChange}
                  value={EmailMeta?.value}
                  onBlur={Formikform?.handleBlur}
                />
                {EmailMeta?.touched && EmailMeta?.error && (
                  <p className="text-danger errorMessage">
                    {Formikform?.errors?.email}
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
                  {...Formikform.getFieldProps("phone")}
                />
                {Formikform?.touched?.phone && Formikform?.errors?.phone && (
                  <p className="text-danger errorMessage">
                    {Formikform?.errors?.phone}
                  </p>
                )}
              </div>
              <div className="input-box">
                <label className="details" htmlFor="phone">
                  Your Age
                </label>
                <input
                  type="number"
                  id="Age"
                  name="Age"
                  placeholder="Enter your Age"
                  onChange={Formikform?.handleChange}
                  value={Formikform?.values?.Age}
                  onBlur={Formikform?.handleBlur}
                />
                {Formikform?.touched?.Age && Formikform?.errors?.Age && (
                  <p className="text-danger errorMessage">
                    {Formikform?.errors?.Age}
                  </p>
                )}
              </div>
              <div className="input-box">
                <label className="details" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  onChange={Formikform?.handleChange}
                  value={Formikform?.values?.password}
                  onBlur={Formikform?.handleBlur}
                />
                {Formikform?.touched?.password &&
                  Formikform?.errors?.password && (
                    <p className="text-danger errorMessage">
                      {Formikform?.errors?.password}
                    </p>
                  )}
              </div>
              <div className="input-box">
                <label className="details" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  onChange={Formikform?.handleChange}
                  value={Formikform?.values?.confirmPassword}
                  onBlur={Formikform?.handleBlur}
                />
                {Formikform?.touched?.confirmPassword &&
                  Formikform?.errors?.confirmPassword && (
                    <p className="text-danger errorMessage">
                      {Formikform?.errors?.confirmPassword}
                    </p>
                  )}
              </div>
            </div>
            <div className="gender-details">
              <input
                type="radio"
                value="Male"
                onChange={Formikform?.handleChange}
                checked={Formikform?.values?.gender === "Male"}
                name="gender"
                id="dot-1"
                onBlur={Formikform?.handleBlur}
              />
              <input
                type="radio"
                value="Female"
                onChange={Formikform?.handleChange}
                checked={Formikform?.values?.gender === "Female"}
                name="gender"
                id="dot-2"
                onBlur={Formikform?.handleBlur}
              />
              <input
                type="radio"
                value="Other"
                name="gender"
                onChange={Formikform?.handleChange}
                checked={Formikform?.values?.gender === "Other"}
                id="dot-3"
                onBlur={Formikform?.handleBlur}
              />
              <label className="gender-title">Gender</label>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
              {Formikform?.touched?.gender && Formikform?.errors?.gender && (
                <p className="text-danger errorMessage">
                  {Formikform?.errors?.gender}
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
                onChange={Formikform?.handleChange}
                value={Formikform?.values?.country}
                onBlur={Formikform?.handleBlur}
              >
                <option value="">-- Select a Country --</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>

              {Formikform?.touched?.country && Formikform?.errors?.country && (
                <p className="text-danger errorMessage">
                  {Formikform?.errors?.country}
                </p>
              )}
            </div>
            <div className="input-box mt-3">
              <label className="details" htmlFor="color">
                Pick a Color: &nbsp;
              </label>
              <input
                type="color"
                id="color"
                name="color"
                onChange={Formikform?.handleChange}
                value={Formikform?.values?.color}
                onBlur={Formikform?.handleBlur}
              />
              {Formikform?.touched?.color && Formikform?.errors?.color && (
                <p className="text-danger errorMessage">
                  {Formikform?.errors?.color}
                </p>
              )}
            </div>

            <div className="input-box mt-3">
              <label className="details" htmlFor="time">
                Select Time: &nbsp;
              </label>
              <input
                type="time"
                id="time"
                name="time"
                onChange={Formikform?.handleChange}
                value={Formikform?.values?.time}
                onBlur={Formikform?.handleBlur}
              />
              {Formikform?.touched?.time && Formikform?.errors?.time && (
                <p className="text-danger errorMessage">
                  {Formikform?.errors?.time}
                </p>
              )}
            </div>

            <div className="input-box mt-3">
              <label className="details" htmlFor="date">
                Select Date: &nbsp;
              </label>
              <input
                type="date"
                id="date"
                name="date"
                onChange={Formikform?.handleChange}
                value={Formikform?.values?.date}
                onBlur={Formikform?.handleBlur}
              />
              {Formikform?.touched?.date && Formikform?.errors?.date && (
                <p className="text-danger errorMessage">
                  {Formikform.errors.date}
                </p>
              )}
            </div>

            <div className="input-box mt-3">
              <label className="details" htmlFor="range">
                Select Range (0-100): &nbsp;
              </label>
              <input
                type="range"
                id="range"
                name="range"
                min="0"
                max="100"
                onChange={Formikform?.handleChange}
                value={Formikform?.values?.range}
                onBlur={Formikform?.handleBlur}
              />
              <span>{Formikform?.values?.range}</span>
              {Formikform?.touched?.range && Formikform?.errors?.range && (
                <p className="text-danger errorMessage">
                  {Formikform.errors.range}
                </p>
              )}
            </div>
            <div className="input-box">
              <label className="details fw-bold mb-1 mt-3">
                Select Interests
              </label>

              <div>
                <input
                  type="checkbox"
                  id="sports"
                  name="interests"
                  value="Sports"
                  onChange={Formikform.handleChange}
                  checked={Formikform?.values?.interests?.includes("Sports")}
                />
                <label htmlFor="sports"> Sports &nbsp;</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="music"
                  name="interests"
                  value="Music"
                  onChange={Formikform.handleChange}
                  checked={Formikform.values.interests.includes("Music")}
                />
                <label htmlFor="music"> Music &nbsp;</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="reading"
                  name="interests"
                  value="Reading"
                  onChange={Formikform.handleChange}
                  checked={Formikform.values.interests.includes("Reading")}
                />
                <label htmlFor="reading"> Reading &nbsp;</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="sleeping"
                  name="interests"
                  value="Sleeping"
                  onChange={Formikform.handleChange}
                  checked={Formikform.values.interests.includes("Sleeping")}
                />
                <label htmlFor="sleeping"> Sleeping &nbsp;</label>
              </div>

              {Formikform.touched.interests && Formikform.errors.interests && (
                <p className="text-danger errorMessage">
                  {Formikform.errors.interests}
                </p>
              )}
            </div>
            <div className="input-box mt-3 ms-auto">
              <label htmlFor="terms">
                {" "}
                Accept our terms and conditions &nbsp;
              </label>
              <input
                type="checkbox"
                id="terms"
                name="terms"
                onChange={Formikform.handleChange}
                checked={Formikform.values.terms}
              />
              {Formikform.touched.terms && Formikform.errors.terms && (
                <p className="text-danger errorMessage">
                  {Formikform.errors.terms}
                </p>
              )}
            </div>
            <div className="button">
              <input
                type="button"
                value="Reset Form "
                onClick={() => Formikform?.resetForm()}
                // onClick={()=>Formikform.resetForm({values:{name:"Imran",interests: [],}})}
              />
            </div>
            <div className="button">
              <input
                type="button"
                value="Validate password Field"
                onClick={() => {
                  Formikform?.setFieldTouched("password", true);
                  Formikform?.validateField("password");
                }}
                // onClick={()=>Formikform.resetForm({values:{name:"Imran",interests: [],}})}
              />
            </div>
            <div className="button">
              <input
                type="button"
                value="Modify the whole Form"
                onClick={() => {
                 Formikform.setFormikState((prevState)=>(
                  {...prevState,
                    values:{...prevState.values ,name:"Imran",username:"usman",email:"efuher@uefeu",phone:"12345678901"},
                    touched:{...prevState.touched, name:true, username:true , email:true, phone:true},
                    // errors:{...prevState.errors, name:"Enter name first" , username:"Enter userName", email:"Enter valid Email" , phone:"Enter Correct Phone"}
                  }))
                 Formikform.validateForm()
                }}
                // onClick={()=>Formikform.resetForm({values:{name:"Imran",interests: [],}})}
              />
            </div>
            <div className="button">
              <input
                type="button"
                value="set values"
                onClick={() => {
                  Formikform?.setValues({
                    ...Formikform.values,
                    password: 12345678,
                    name: "Imran",
                    username: "hello",
                  });
                  // Formikform?.validateForm()
                }}
              />
            </div>
            <div className="button">
              <input
                type="button"
                value="set errors"
                onClick={() => {
                  Formikform?.setTouched({
                    username: true,
                    name: true,
                    password: true,
                  });

                  setTimeout(() => {
                    Formikform?.setErrors({
                      username: "Enter password field",
                      name: "Enter Name",
                      password: "Add strong password",
                    });
                  }, 0);
                }}
              />
            </div>
            <div className="button">
              <input
                type="submit"
                value="Register"
                // disabled={!Formikform.dirty || !Formikform.isValid}
                // style={{
                //   cursor:
                //     !Formikform.dirty || !Formikform.isValid
                //       ? "not-allowed"
                //       : "pointer",
                // }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formicform;
