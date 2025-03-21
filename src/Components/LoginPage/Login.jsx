import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import "./Login.css";
import { useEffect, useState } from "react";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import validationSchema from "./YUP";
import { Link, useLocation, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const loginFormik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const { username, password } = values;
      const signupData = secureLocalStorage?.getItem("registrationData");

      const storedData = signupData?.find(
        (obj) => obj?.username === username && obj?.password === password
      );
      if (storedData) {
       const LoginData = {
          username: username,
          name: username === "admin" ? "admin" : "user",
          role: username === "admin" ? "admin" : "user",
          user_id: username === "admin" ? 1 : 0,
        };
        secureLocalStorage.setItem("LoginData", LoginData);
        loginFormik.handleReset();
        navigate("/home", { state: { showWelcomeToast: true } });
      } else {
        loginFormik?.setFieldError("username", "Username is invalid");
        loginFormik?.setFieldError("password", "Password is invalid");
      }
    },
  });
  
  const usernameError =
    loginFormik?.touched?.username && loginFormik?.errors?.username;
  const passwordError =
    loginFormik?.touched?.password && loginFormik?.errors?.password;
  useEffect(() => {

    if(location?.state?.showToast){
      toast.error("You LoggedOut Successfully.", {
        position: "top-right",
      });
    }
    window.history.replaceState({}, "");
  },[location?.state])
  return (
    <div className="loginPage">
      <ToastContainer />
      <div className="wrapper">
        <div className="title">Login Form</div>
        <form onSubmit={loginFormik?.handleSubmit}>
          <TextField
            id="input-with-icon-textfield"
            label="Username"
            fullWidth
            margin="dense"
            {...loginFormik?.getFieldProps("username")}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment
                    sx={usernameError && { color: "#F44336" }}
                    position="end"
                  >
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            helperText={usernameError && loginFormik?.errors?.username}
            error={usernameError}
          />
          <FormControl
            fullWidth
            variant="outlined"
            error={passwordError}
            margin="dense"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              {...loginFormik?.getFieldProps("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={passwordError && { color: "#F44336" }}
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={() => {
                      setShowPassword((show) => !show);
                    }}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText>
              {passwordError && loginFormik?.errors?.password}
            </FormHelperText>
          </FormControl>

          <div className="field">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member? <Link to="/signup">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
