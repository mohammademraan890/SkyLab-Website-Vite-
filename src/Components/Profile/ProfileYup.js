import * as Yup from "yup";
const validationSchema = Yup.object({
  name: Yup.string().required("Enter Name first"),
  username: Yup.string()
    .required("Enter username."),
  email: Yup.string().email("Enter valid Email").required("Email is required."),
  password: Yup.string()
    .matches(/^.{9}$/, "Password must be exactly 9 characters long")
    .required("Password is required."),
  phone: Yup.string()
    .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  DOB: Yup.date().max(new Date(), "Date cannot be in the future").required("Enter DOB first"),
  address: Yup.string().required("Enter Adress here."),
  gender: Yup.string().required("Gender is required.")
});
export default validationSchema;
