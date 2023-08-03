import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must not be less than 6 characters")
    .max(40, "Password must not be exceed 40 characters")
    .required("Password is required"),
});

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  username: Yup.string().required("Firstname is required"),
  password: Yup.string()
    .min(6, "Password must not be less than 6 characters")
    .required("Password is required"),
  repassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const trimSchema = Yup.object().shape({
  url: Yup.string().url("URL is not valid").required("URL is required"),
  customAlias: Yup.string(),
});