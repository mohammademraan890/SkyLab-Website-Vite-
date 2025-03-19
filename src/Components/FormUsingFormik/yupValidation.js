import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  username: Yup.string().required("Username is required."),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required."),
  phone: Yup.string()
    .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  Age: Yup.number().required("Age is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be atleast 8 characters long."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Enter password first"),
  gender: Yup.string().required("Please select your gender"),
  country: Yup.string().required("Please select your country"),
  color: Yup.string().required("Please pick a color"),

  time: Yup.string().required("Please select a time"),

  date: Yup.date()
    .required("Please select a date")
    .max(new Date(), "Date cannot be in the future"),

  range: Yup.number()
    .min(0, "Minimum value is 0")
    .max(100, "Maximum value is 100")
    .required("Please select a range"),

  interests: Yup.array()
    .min(1, "Select at least one interest")
    .required("Interests are required"),
  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});
export default validationSchema;
