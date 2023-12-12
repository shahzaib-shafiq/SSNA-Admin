import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().matches(/^[A-Za-z]+$/, 'Please enter only characters')
    .min(2, 'Name must be at least 2 characters')
    .max(25, 'Name must be at most 25 characters')

    .required('Please enter your name'),
  email: Yup.string()
    .email("Invalid email address")
    .matches(/^[a-zA-Z._]+@nu\.edu\.pk$/, "Must be a valid NU email address")
    .required("Please enter your email"),

  phone: Yup.string().min(3).max(3)
    .matches(/^\d{3}$/, 'Must be a 3-digit number')
    .required("Enter 3 Digit Office Extension"),

  address: Yup.string().max(25).required("Enter Office Adress"),

  Education: Yup.string().max(25).required("Enter Education"),
  Department: Yup.string().max(25).required("Enter Department"),
  University: Yup.string().max(45).matches(/^[a-zA-Z._]+$/, "Must be a valid University Name").required("Enter University Name"),
  areaOfIntrest: Yup.string().max(25).matches(/^[a-zA-Z._]+$/, "Must be a valid Area of Intrest").required("Enter Area of Intrest"),
  id: Yup.string().matches(/^[0-9_]+$/, "Must be a valid 6 Digit Id ").min(6).max(6).required("Enter ID"),


});
