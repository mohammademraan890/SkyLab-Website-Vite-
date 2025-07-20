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
import { useContext, useEffect, useRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";

import validationSchema from "./ProfileYup";
import { AuthContext } from "../../Contexts/Auth";
import IMask from "imask";

const Profile = () => {
  const { dispatch, State } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const { LoginUserData, RegisterationData } = State;

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldError,
    setFieldValue,
    getFieldProps,
    setValues,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      phone: "",
      DOB: "",
      address: "",
      gender: "",
      CNIC: "", // ✅ include CNIC here too
    },
    validationSchema,
    onSubmit: (values, action) => {
      if (
        RegisterationData?.some(
          (user) =>
            user?.email === values?.email && LoginUserData?.email !== user.email
        )
      ) {
        setFieldError("email", "Email already exists. Please use another one.");
        return;
      }

      const updatedProfile = { ...LoginUserData, ...values };

      dispatch({ type: "EditProfile", updatedData: updatedProfile });
      toast.success("Your account is eddited.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
      });
      action.resetForm();
    },
  });

  const CNICRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    if (CNICRef.current) {
      const mask = IMask(CNICRef.current, {
        mask: [
          {
            mask: '*****-*******-*',
            definitions: {
              '*': /[A-Za-z0-9@#$%-]/
            },
          },
        ],
      });

      mask.on('accept', () => {
        setFieldValue('CNIC', mask.value);
      });
    }
    if (phoneRef.current) {
      const mask = IMask(phoneRef.current, {
        mask: "{+92} 000 0000000",
        // lazy:false
      });
      mask.on("accept", () => {
        setFieldValue("phone", mask.value);
      });
    }
  }, []);

  useEffect(() => {
    // console.log(profile);
    if (LoginUserData) {
      setValues(LoginUserData);
      phoneRef.current.value = LoginUserData.phone || "";
      CNICRef.current.value = LoginUserData.CNIC || "";
    }
  }, [LoginUserData]);
  const nameErr = touched?.name && errors?.name;
  const usernameErr = touched?.username && errors?.username;
  const emailErr = touched?.email && errors?.email;
  const phoneErr = touched?.phone && errors?.phone;
  const CNICErr = touched?.CNIC && errors?.CNIC;
  const passwordErr = touched?.password && errors?.password;
  const addressErr = touched?.address && errors?.address;
  const DOBErr = touched?.DOB && errors?.DOB;
  return (
    <div className="loginPage FormEditPage">
      <ToastContainer />
      <div className="wraper">
        <div className="title">Profile Data</div>
        <form onSubmit={handleSubmit}>
          <div className="formRow row gap-2">
            <TextField
              className="col"
              label="Name"
              margin="dense"
              variant="outlined"
              {...getFieldProps("name")}
              error={nameErr}
              helperText={nameErr && errors?.name}
            />
            <TextField
              className="col"
              label="Username"
              margin="dense"
              variant="outlined"
              {...getFieldProps("username")}
              error={usernameErr}
              helperText={usernameErr && errors?.username}
              disabled
            />

            <TextField
              className="col"
              label="Email"
              type="email"
              margin="dense"
              variant="outlined"
              {...getFieldProps("email")}
              error={emailErr}
              helperText={emailErr && errors?.email}
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
                {...getFieldProps("password")}
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
              <FormHelperText>{passwordErr && errors?.password}</FormHelperText>
            </FormControl>
            <TextField
              name="CNIC"
              inputRef={CNICRef}
              className="col"
              type="text"
              label="CNIC"
              margin="dense"
              variant="outlined"
              placeholder="XXXXX-XXXXXXX-X"
              error={CNICErr}
              helperText={CNICErr && errors.CNIC}
            />
          </div>
          <div className="formRow row gap-2">
            <TextField
              name="phone"
              inputRef={phoneRef}
              label="Phone Number"
              margin="dense"
              className="col"
              variant="outlined"
              error={phoneErr}
              helperText={phoneErr && errors.phone}
            />

            <TextField
              className="col"
              label="Date of Birth"
              type="date"
              margin="dense"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              {...getFieldProps("DOB")}
              error={DOBErr}
              helperText={DOBErr && errors?.DOB}
            />
          </div>
          <TextField
            className="col"
            label="Enter Address"
            fullWidth
            type="text"
            margin="dense"
            variant="outlined"
            {...getFieldProps("address")}
            error={addressErr}
            helperText={addressErr && errors?.address}
          />
          <FormControl
            component="fieldset"
            margin="dense"
            error={touched?.gender && Boolean(errors?.gender)}
          >
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={values?.gender}
              onChange={handleChange}
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
            <FormHelperText>{touched?.gender && errors?.gender}</FormHelperText>
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
