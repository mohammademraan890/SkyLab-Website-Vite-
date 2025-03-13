import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  username: Yup.string().required("Username is required."),
  QTY: Yup.number().required("Enter QTY").min(1, "Enter valid Quantity"),
  phone: Yup.string()
    .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),

  color: Yup.string().required("Select color first."),
  country: Yup.string().required("Select your country first."),
  CNIC: Yup.string()
  // .matches(/^\d{5}-\d{7}-\d{1}$/, "CNIC must be in the format 12345-1234567-1")
  .matches(/^[0-9]{13}$/, "CNIC must be 13 digits")
    .required("CNIC is required"),
});

export default validationSchema;
