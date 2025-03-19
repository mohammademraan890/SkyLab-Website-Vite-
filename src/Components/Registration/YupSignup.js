import * as Yup from "yup";
const validationSchema = Yup.object({
  name: Yup.string().required("Enter Name first"),
  username: Yup.string()
    .required("Enter username."),
    // .oneOf(["admin", "test"], "Enter valid username")
    // .transform((value) => value.toLowerCase()),
  email: Yup.string().email("Enter valid Email").required("Email is required."),
  // password: Yup.string()
  //   .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{9}$/, "Password must be exactly 9 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character")
  //   .required("Password is required."),
  password: Yup.string()
    .matches(/^.{9}$/, "Password must be exactly 9 characters long")
    .required("Password is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("This field is required."),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  DOB: Yup.date().max(new Date(), "Date cannot be in the future").required("Enter DOB first"),
  address: Yup.string().required("Enter Adress here."),
  gender: Yup.string().required("Gender is required.")
});
export default validationSchema;
