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
import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";

import ProfileYup from "./ProfileYup";
import secureLocalStorage from "react-secure-storage";
import { AuthContext } from "../../Contexts/Auth";

const Profile = () => {
  const {encryptData,dispatch,State} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const storedData = secureLocalStorage?.getItem("registrationData");

  const profile = State?.RegisteredUserData
  const signupFormik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      DOB: "",
      address: "",
      gender: "",
    },
    ProfileYup,
    onSubmit: (values) => {
      const isEmailExist = storedData?.some(
        (user) => user?.email === values?.email && profile.email !== user.email
      );
      const isUsernameExist = storedData?.some(
        (user) =>
          user?.username === values?.username &&
        user?.username !== profile?.username  
      );

      if (isEmailExist) {
        signupFormik?.setFieldError(
          "email",
          "Email already exists. Please use another one."
        );
        return;
      }
      if (isUsernameExist) {
        signupFormik?.setFieldError(
          "username",
          "Username already exists. Please use another one."
        );
        return;
      }
      if (
        values?.username?.toLowerCase() === "admin" &&
        profile?.username?.toLowerCase() !== "admin"
      ) {
        signupFormik.setFieldError("username", "Your are not a admin.");
        return;
      }
      const EditLogin= {
        name:values.name,
        username: values.username,
        role: values.username === "admin" ? "admin" : "user",
        user_id: values.username === "admin" ? 1 : 0 , 
      }
      const encryptedLoginData= encryptData(EditLogin)
      // console.log(encryptedLoginData)
      localStorage?.setItem("LoginData",encryptedLoginData)
      const updatedProfile = { ...profile, ...values };
      const updatedData = storedData?.map((user) =>
        user?.username === profile?.username ? updatedProfile : user
    );
    // console.log(updatedData);
    // console.log(updatedProfile);
    secureLocalStorage?.setItem("registrationData", updatedData);
    dispatch({type:"EditProfile"})
      toast.success("Your account is eddited.", {
        position: "top-right",
      });
      
    },
    
    
  });
  useEffect(()=>{
    // console.log(profile);
    if(profile){
      signupFormik?.setValues(profile)
    }
    },[profile])
  const nameErr = signupFormik?.touched?.name && signupFormik?.errors?.name;
  // const usernameErr =
  //   signupFormik?.touched?.username && signupFormik?.errors?.username;
  const emailErr = signupFormik?.touched?.email && signupFormik?.errors?.email;
  const phoneErr = signupFormik?.touched?.phone && signupFormik?.errors?.phone;
  const passwordErr =
    signupFormik?.touched?.password && signupFormik?.errors?.password;
  const addressErr =
    signupFormik?.touched?.address && signupFormik?.errors?.address;
  const DOBErr = signupFormik?.touched?.DOB && signupFormik?.errors?.DOB;
  return (
    <div className={`loginPage FormEditPage `}>
      <ToastContainer />
      <div className="wraper">
        <div className="title">Profile Data</div>
        <form onSubmit={signupFormik?.handleSubmit}>
          <div className="formRow row gap-2">
            <TextField
              className="col"
              label="Name"
              margin="dense"
              variant="outlined"
              {...signupFormik?.getFieldProps("name")}
              error={nameErr}
              helperText={nameErr && signupFormik?.errors?.name}
            />
           
            <TextField
              className="col"
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
          </div>
          <div className="formRow row gap-2">
            <TextField
              className="col"
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
              signupFormik?.touched?.gender &&
              Boolean(signupFormik?.errors?.gender)
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
            <input type="submit" value="Edit Account" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
