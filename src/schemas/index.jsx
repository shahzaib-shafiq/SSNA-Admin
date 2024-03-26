import * as Yup from "yup";

export const FacultySchema = Yup.object({
  name: Yup.string().matches(/^[A-Za-z\s]+$/, 'Please enter only characters in name')
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name must be at most 20 characters')
    .required('Please enter your name'),

  email: Yup.string()
    .email("Invalid email address")
    .matches(/^[a-zA-Z._]+@nu\.edu\.pk$/, "Must be a valid NU email address")
    .required("Please enter your email"),

  phone: Yup.string().min(3).max(3)
    .matches(/^\d{3}$/, 'Must be a 3-digit number')
    .required("Enter 3 Digit Office Extension"),

  address: Yup.string().max(45).required("Enter Office Adress"),

  Education: Yup.string().max(25).required("Enter Education"),
  Department: Yup.string().max(25).required("Enter Department"),
  University: Yup.string().max(45).max(25).required("Enter University"),
  areaOfIntrest: Yup.string().max(25).matches(/^[A-Za-z\s]+$/, 'Enter Valid Area of Intrest')
    .min(2, 'Name must be at least 2 characters')
    .max(450, 'Name must be at most 50 characters')
    .required('Please enter Area of Intrest'),
  id: Yup.string().matches(/^[0-9_]+$/, "Must be a valid 6 Digit Id ").min(6).max(6).required("Enter ID"),

});
export const AnnouncementSchema = Yup.object({

  //Number at any pos
  title: Yup.string()
    .matches(/^[A-Za-z0-9 ]*$/, 'Title can contain only characters, numbers, and spaces')
    .min(2, 'Name must be at least 4 characters')
    .max(25, 'Name must be at most 25 characters')
    .required('Please enter post Title'),

  description: Yup.string().matches(/^[A-Za-z\s]+$/, 'Enter Announcement Description')
    .min(20, 'Description must be at least 20 characters')
    .max(60, 'Name must be at most 60 characters')
    .required('Please Enter Description'),

  AnnouncementDate: Yup.string()
    .matches(
      /^(19[0-9][0-9]|20[0-4][0-9]|2050)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      "Invalid date format. Use YYYY-MM-DD format."
    )
    .required("Enter Post Date"),
    AnnouncementLink: Yup.string()
    .matches(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/, 
      'Please enter a valid URL'
    )
    .required('Please enter a URL'),
  

});


export const CourseMaterialSchema = Yup.object({
  CourseName: Yup.string().matches(/^[A-Za-z\s]+$/, 'Please Enter Course Name')
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name must be at most 20 characters')
    .required('Please enter course Name'),

  CourseCode: Yup.string().matches(/^[A-Za-z]{2}\d{3,4}$/, 'Course code must start with 2 characters followed by 3 or 4 numbers')
    .min(5, 'Course code must be at least 5 characters')
    .max(6, 'Course code must be either 5 or 6 characters')
    .required('Please enter the course code'),



  Department: Yup.string().max(25).required("Enter Department"),

  DriveLink: Yup.string().matches(/^https:\/\/drive\.google\.com\/.*$/, 'Please enter a valid Google Drive link')
    .required('Please enter a Google Drive link'),
});

export const EventsSchema = Yup.object({
  title: Yup.string().matches(/^[A-Za-z\s]+$/, 'Enter Event Name')
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name must be at most 20 characters')
    .required('Please enter Event Name'),
  description: Yup.string().matches(/^[A-Za-z]+$/, 'Description contain only characters')
    .min(20, 'summary must be at least 20 characters')
    .max(60, 'summary must be at most 60 characters')
    .required('Please enter post Description'),
  EventDate: Yup.string()
    .matches(
      /^(19[0-9][0-9]|20[0-4][0-9]|2050)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      "Invalid date format. Use YYYY-MM-DD format."
    )

    .required("Enter Post Date"),


});

export const TimetableSchema = Yup.object({
  Department: Yup.string().max(25).required("Enter Department"),
  EventDate: Yup.string()
    .matches(
      /^(19[0-9][0-9]|20[0-4][0-9]|2050)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      "Invalid date format. Use YYYY-MM-DD format."
    )
    .required("Enter Post Date"),


});