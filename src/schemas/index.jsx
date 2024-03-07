import * as Yup from "yup";

export const signUpSchema = Yup.object({  
  name: Yup.string().matches(/^[A-Za-z\s]+$/, 'Please enter only characters and spaces')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
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
export const AnnouncementSchema = Yup.object({
  title: Yup.string().matches(/^[A-Za-z]+$/, 'Title contain only characters')
    .min(2, 'Name must be at least 4 characters')
    .max(25, 'Name must be at most 25 characters')
    .required('Please enter post Title'),   
    summary: Yup.string().matches(/^[A-Za-z]+$/, 'Summary contain only characters')
    .min(15, 'summary must be at least 15 characters')
    .max(40, 'summary must be at most 40 characters')

    .required('Please enter post Summary'),
   
    
    
    description: Yup.string().matches(/^[A-Za-z]+$/, 'Description contain only characters')
    .min(20, 'summary must be at least 20 characters')
    .max(50, 'summary must be at most 50 characters')

    .required('Please enter post Description'),

    // AnnouncementDate: Yup.string().max(25).required("Enter Post Date"),

    AnnouncementDate: Yup.string()
    .matches(
      /^(19[0-9][0-9]|20[0-4][0-9]|2050)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      "Invalid date format. Use YYYY-MM-DD format."
    )
    
    .required("Enter Post Date"),


});


export const CourseMaterialSchema = Yup.object({
  CourseName: Yup.string().matches(/^[A-Za-z]+$/, 'Title contain only characters')
    .min(2, 'Name must be at least 2 characters')
    .max(25, 'Name must be at most 25 characters')
    .required('Please enter post Title'),   

    CourseCode: Yup.string().matches(/^[A-Za-z]{2}\d{3,4}$/, 'Course code must start with 2 characters followed by 3 or 4 numbers')
    .min(5, 'Course code must be at least 5 characters')
    .max(6, 'Course code must be either 5 or 6 characters')
    .required('Please enter the course code'),



    Department: Yup.string().max(25).required("Enter Department"),
   
    DriveLink: Yup.string().matches(/^https:\/\/drive\.google\.com\/.*$/, 'Please enter a valid Google Drive link')
    .required('Please enter a Google Drive link'),
});

export const EventsSchema = Yup.object({
  title: Yup.string().matches(/^[A-Za-z]+$/, 'Title contain only characters')
    .min(2, 'Name must be at least 4 characters')
    .max(25, 'Name must be at most 25 characters')
    .required('Please enter post Title'),   
    
    
    description: Yup.string().matches(/^[A-Za-z]+$/, 'Description contain only characters')
    .min(20, 'summary must be at least 20 characters')
    .max(50, 'summary must be at most 50 characters')
    .required('Please enter post Description'),

 
    EventDate: Yup.string()
    .matches(
      /^(19[0-9][0-9]|20[0-4][0-9]|2050)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      "Invalid date format. Use YYYY-MM-DD format."
    )
    
    .required("Enter Post Date"),


});