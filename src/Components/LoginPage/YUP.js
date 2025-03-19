import * as Yup from "yup"; 
const validationSchema = Yup.object({
    // username: Yup.string().required("Enter username.").oneOf(["admin", "test"], "Enter valid username") .transform(value => value.toLowerCase()),
    username: Yup.string().required("Enter username."),
    password: Yup.string().matches(/^.{9}$/, "Password must be exactly 9 characters").required("Password is required.")
})
export default validationSchema