import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import "./Registration.css";
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import validationSchema from "./YupSignup";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registrationData, setRegistrationData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedData = secureLocalStorage?.getItem("registrationData");
    // console.log(storedData)
    if (storedData && registrationData?.length === 0) {
      setRegistrationData(storedData);
      
    } else {
      secureLocalStorage?.setItem("registrationData", registrationData);
      console.log(registrationData);
    }
  }, [registrationData]);
  const signupFormik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      DOB: "",
      address: "",
      gender: "",
    },

    validationSchema,
    onSubmit: (values) => {
      // console.log(values);
      const signupData = secureLocalStorage?.getItem("registrationData") ;

      const isEmailExist = signupData?.find(
        (obj) => obj?.email === values?.email
      );
      const isUsernameExist = signupData?.find(
        (obj) => obj.username === values.username
      );

      if (isEmailExist || isUsernameExist) {
        if (isEmailExist) {
          signupFormik?.setFieldError(
            "email",
            "Email already exists. Please use another one."
          );
        }
        if (isUsernameExist) {
          signupFormik?.setFieldError(
            "username",
            "Username is already exists. Please use another one."
          );
        }
        return;
      }

      setRegistrationData([...registrationData, values]);
      console.log(registrationData)

      navigate("/");
      signupFormik?.handleReset();
    },
  });
  const nameErr = signupFormik?.touched?.name && signupFormik?.errors?.name;
  const usernameErr =signupFormik?.touched?.username && signupFormik?.errors?.username;
  const emailErr = signupFormik?.touched?.email && signupFormik?.errors?.email;
  const phoneErr = signupFormik?.touched?.phone && signupFormik?.errors?.phone;
  const passwordErr =
    signupFormik?.touched?.password && signupFormik?.errors?.password;
  const confirmPasswordErr =
    signupFormik?.touched?.confirmPassword &&
    signupFormik?.errors?.confirmPassword;
  const addressErr =
    signupFormik?.touched?.address && signupFormik?.errors?.address;
  const DOBErr = signupFormik?.touched?.DOB && signupFormik?.errors?.DOB;
  return (
    <div className="loginPage registrationPage">
      <div className="wraper">
        <div className="title">Signup Form</div>
        <form onSubmit={signupFormik?.handleSubmit}>
          <div className="formRow row gap-2">
            <TextField
              className="col"
              id="input-with-icon-textfield"
              label="Name"
              margin="dense"
              variant="outlined"
              {...signupFormik?.getFieldProps("name")}
              error={nameErr}
              helperText={nameErr && signupFormik?.errors?.name}
            />
            <TextField
              className="col"
              id="input-with-icon-textfield"
              label="Username"
              margin="dense"
              variant="outlined"
              {...signupFormik?.getFieldProps("username")}
              error={usernameErr}
              helperText={usernameErr && signupFormik?.errors?.username}
            />
            <TextField
              className="col"
              id="input-with-icon-textfield"
              label="Email"
              type="email"
              margin="dense"
              variant="outlined"
              {...signupFormik?.getFieldProps("email")}
              error={emailErr}
              helperText={emailErr && signupFormik?.errors?.email}
            />
          </div>
          <div className="row gap-2">
            <FormControl
              className="col"
              fullWidth
              variant="outlined"
              margin="dense"
              error={passwordErr}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...signupFormik?.getFieldProps("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={passwordErr && { color: "#F44336" }}
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
                {passwordErr && signupFormik?.errors?.password}
              </FormHelperText>
            </FormControl>
            <FormControl
              className="col"
              fullWidth
              variant="outlined"
              margin="dense"
              error={confirmPasswordErr}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...signupFormik?.getFieldProps("confirmPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={confirmPasswordErr && { color: "#F44336" }}
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
                label="Confirm password"
              />
              <FormHelperText>
                {confirmPasswordErr && signupFormik?.errors?.confirmPassword}
              </FormHelperText>
            </FormControl>
          </div>
          <div className="formRow row gap-2">
            <TextField
              className="col"
              id="input-with-icon-textfield"
              label="Phone Number"
              type="number"
              margin="dense"
              variant="outlined"
              {...signupFormik?.getFieldProps("phone")}
              error={phoneErr}
              helperText={phoneErr && signupFormik?.errors?.phone}
            />
            <TextField
              className="col"
              id="input-with-icon-textfield"
              label="Date of Birth"
              type="date"
              margin="dense"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              {...signupFormik?.getFieldProps("DOB")}
              error={DOBErr}
              helperText={DOBErr && signupFormik?.errors?.DOB}
            />
          </div>
          <TextField
            className="col"
            id="input-with-icon-textfield"
            label="Enter Address"
            fullWidth
            type="text"
            margin="dense"
            variant="outlined"
            {...signupFormik?.getFieldProps("address")}
            error={addressErr}
            helperText={addressErr && signupFormik?.errors?.address}
          />
          <FormControl
            component="fieldset"
            margin="dense"
            error={
              signupFormik.touched.gender && Boolean(signupFormik.errors.gender)
            }
          >
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={signupFormik?.values?.gender}
              onChange={signupFormik?.handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            <FormHelperText>
              {signupFormik?.touched?.gender && signupFormik?.errors?.gender}
            </FormHelperText>
          </FormControl>

          <div className="field">
            <input type="submit" value="Signup" />
          </div>
          <div className="signup-link">
            Already have an account <Link to="/">Login now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
