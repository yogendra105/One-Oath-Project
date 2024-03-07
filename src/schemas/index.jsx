import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string()
    .matches(/^\+[1-9]\d{1,14}$/, "Invalid phone number") 
    .required("Please enter your phone number"),
  message: Yup.string()
    .max(500, "Message must be 500 characters or less")
    .required("Please enter your message"),
});
