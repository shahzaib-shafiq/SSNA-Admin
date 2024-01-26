// import React, { useState } from "react";
// import { imagedb } from "./config";
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
// import { v4 } from 'uuid';
// import { Link } from 'react-router-dom'
// import Button from '@mui/material/Button';
// import HomeIcon from '@mui/icons-material/Home';
// const Announcements
//   = () => {
//     const [userData, setUserData] = useState({

//       Title: "",
//       Announcement: "",
//       AnnouncementDate: "",
//       description: ""
//     });
// //errors handling
//     const [errorMsg, setErrorMsg] = useState("");
//     const [img, setImg] = useState('');
//     const [sucessMsg, setSucessMsg] = useState("");
//     let name, value;
//     const postUserData = (event) => {


//       name = event.target.name;
//       value = event.target.value;
//       const inputValue = event.target.value;
//       // Regular expression to allow only English characters
//       const onlyEnglishRegex = /^[a-zA-Z\s]+$/;
//       // Check if the input matches the regular expression
//       if (onlyEnglishRegex.test(inputValue) || inputValue === '') {
//         // Update the state only if the input is valid or empty
//         setUserData({ Title: inputValue });

//       }
//       setUserData({ ...userData, [name]: value });
//     };


//     // Function to generate a random 6-digit ID
//     const generateRandomId = () => {
//       return Math.floor(1000000 + Math.random() * 9000000).toString();
//     };


//     const submitData = async (event) => {
//       event.preventDefault();
//       const { Title, Announcement, AnnouncementDate, description } = userData;

//       if (
//         Title.length < 4 || Title.length > 20 ||
//         Announcement.length < 4 || Announcement.length > 20 ||
//         description.length < 4 || description.length > 30 ||
//         isNaN(Date.parse(AnnouncementDate))
//       ) {
//         setErrorMsg("Enter Data Between 4-20 characters");
//         return;
//       }

//       if (
//         !isNaN(parseInt(Title)) ||
//         !isNaN(parseInt(Announcement)) ||
//         !isNaN(parseInt(description)) ||
//         isNaN(Date.parse(AnnouncementDate))
//       ) {
//         setErrorMsg("Please enter valid data in the Field");
//         return;
//       }


//       if (Title && Announcement && AnnouncementDate && description) {
//         const randomId = generateRandomId();

//         const res = await fetch(
//           //`https://ssna-admin-default-rtdb.firebaseio.com/Announcements/${randomId}.json`,
//           `https://ssna-admin-default-rtdb.firebaseio.com/Announcements.json`,


//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               Title,
//               Announcement,
//               AnnouncementDate,
//               description,
//               id: randomId,
//               img:img
//             }),
//           }
//         );

//         if (res.ok) {
//           setUserData({
//             Title: "",
//             Announcement: "",
//             AnnouncementDate: "",
//             description: "",
//           });
//           setSucessMsg("Announcement Created"); // Set success message here
//         } else {
//           setErrorMsg("Failed to store data");
//         }
//       } else {
//         setErrorMsg("Please fill in all the data");
//       }
//     };

//     const handleUpload = (e) => {
//       console.log(e.target.files[0])

//       const imgs = ref(imagedb, `AnnouncementImgs/${v4()}`)
//       uploadBytes(imgs, e.target.files[0]).then(data => {
//         console.log(data, "imgs")
//         getDownloadURL(data.ref).then(val => {
//           setImg(val)

//         })
//       })

//     }


//     return (
//       <>

//         <section className="contactus-section">
//           <div className="container">
//             <div className="row">
//               <div className="col-12 col-lg-10 mx-auto">
//               <Link to='/HomePage'>
//                   <Button variant='contained' size='medium' endIcon={<HomeIcon />}>
//                    Home Page
//                   </Button>
//                 </Link>

//                 <div className="row">
//                   <div className="contact-leftside col-12 col-lg-5">
//                     <h1 className="main-heading fw-bold">
//                     Post   <br /> Announcement
//                     </h1>
//                     <br></br>


//                   </div>

//                   {/* right side contact form  */}
//                   <div className="contact-rightside col-12 col-lg-7">
//                     <form method="POST">
//                       <div className="row">
//                         <label htmlFor="email" className="input-label">
//                           Enter Post Title
//                         </label>
//                         <div className="col-12 col-lg-6 contact-input-feild">
//                           <input
//                             type="text"
//                             name="Title"
//                             maxLength="20"
//                             id=""
//                             className="form-control"
//                             placeholder="Announcement Title"
//                             value={userData.Title}
//                             onChange={postUserData}
//                           />
//                         </div>

//                         <label htmlFor="email" className="input-label">
//                           Enter Summary
//                         </label>
//                         <div className="col-12 col-lg-6 contact-input-feild">
//                           <input
//                             type="text"
//                             name="Announcement"
//                             id=""
//                             maxLength="100"
//                             className="form-control"
//                             placeholder="Announcement"
//                             value={userData.Announcement}
//                             onChange={postUserData}
//                           />
//                         </div>

//                         <label htmlFor="email" className="input-label">
//                           Enter Post Description
//                         </label>
//                         <div className="col-12 col-lg-6 contact-input-feild">
//                           <input
//                             type="text"
//                             name="description"
//                             id=""
//                             maxLength="100"
//                             className="form-control"
//                             placeholder="Description"
//                             value={userData.description}
//                             onChange={postUserData}
//                           />
//                         </div>

//                         <label htmlFor="email" className="input-label">
//                           Enter Announcement Date
//                         </label>

//                         <div className="col-12 col-lg-6 contact-input-feild">
//                           <input
//                             type="date"
//                             name="AnnouncementDate"

//                             className="form-control wider-dropdown"
//                             id="start"

//                             value={userData.AnnouncementDate}
//                             onChange={postUserData}
//                             min="2018-01-01"
//                             max="2050-12-31"
//                           />


//                         </div>

//                         <div className="col-12 contact-input-feild">
//                           <input
//                             type="file"
//                             className="wider-dropdown"
//                             onChange={(e) => handleUpload(e)}

//                           />
//                         </div>
//                       </div>
//                       {errorMsg && (
//                         <div className="col-12 text-danger mt-2">
//                           {errorMsg}

//                         </div>
//                       )}
//                       {
//                         sucessMsg && (
//                           <div className="col-12 text-success mt-2">
//                             {sucessMsg}
//                           </div>
//                         )}
//                       <button
//                         type="submit"
//                         className="btn btn-style w-100"
//                         onClick={submitData}>
//                         Submit
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   };

// export default Announcements;


//
import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { imagedb } from "./config";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

const initialValues = {

  Title: "",
  Summary: "",
  Description: "",
  Date: "",
  id: ""


};



const Announcements = () => {
  // Function to generate a random 6-digit ID
  const generateRandomId = () => {
    return Math.floor(1000000 + Math.random() * 9000000).toString();
  };


  const [img, setImg] = useState('');
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      const { Title, Summary, Description, Date } = values;

      if (Title && Summary && Description && Date) {
        const id = generateRandomId();


        const res = fetch(
          `https://ssna-admin-default-rtdb.firebaseio.com/Announcements.json`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Title,
              Summary,
              Description,
              Date,
              id,
              img: img
            }),
          }
        );

        // Reset form values
        action.resetForm();
      }
    },
  });

  const handleUpload = (e) => {
    console.log(e.target.files[0])
    const imgs = ref(imagedb, `FacultyImgs/${v4()}`)
    uploadBytes(imgs, e.target.files[0]).then(data => {
      console.log(data, "imgs")
      getDownloadURL(data.ref).then(val => {
        setImg(val)

      })
    })
  }

  return (
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <h2 class="font-semibold text-xl text-gray-600">Responsive Form</h2>
          <p class="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>

          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              {/* <div class="text-gray-600">
            <p class="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div> */}

              <div className="text-gray-600 flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png"
                  alt="Personal Details Image"
                  className="w-18 h-18 mr-2"
                />
              </div>
              <div class="lg:col-span-2">
                <h1 className="modal-title font-sans font-bold">Add New Announcement</h1>
                <br></br>

                <form onSubmit={handleSubmit}  method="POST">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                    <div class="md:col-span-5">
                      <label for="full_name">Enter Post Title</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="text"
                        name="Title"
                        maxLength="20"
                        id="Title"
                        placeholder="Announcement Title"
                        value={values.Title}
                        onChange={handleChange}
                      ></input>

                      {errors.name && touched.name ? (
                        <p className="form-error">{errors.name}</p>
                      ) : null}
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Enter Summary</label>

                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="text"
                        name="Announcement"
                        id="Summary"
                        maxLength="100"

                        placeholder="Announcement"
                        value={values.Summary}
                        onChange={handleChange}
                      ></input>

                      {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}

                    </div>

                    <div class="md:col-span-3">
                      <label for="address">Enter Post Description</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="text"
                        name="description"
                        id="Description"
                        maxLength="100"

                        placeholder="Description"
                        value={values.Description}
                        onChange={handleChange}

                      ></input>

                      {errors.address && touched.address ? (
                        <p className="form-error">{errors.address}</p>
                      ) : null}
                    </div>




                    {/* Add other Fields */}


                    <div class="md:col-span-2">
                      <label for="state">Event Date</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="date"
                        name="AnnouncementDate"
                        id="Date"

                        value={values.Date}
                        onChange={handleChange}
                        min="2018-01-01"
                        max="2050-12-31"

                      />

                      {errors.University && touched.University ? (
                        <p className="form-error">{errors.University}</p>
                      ) : null}
                    </div>

                    <div class="md:col-span-2">
                      <label for="state">Post Image</label>
                      <input
                        type="file"
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"
                        onChange={(e) => handleUpload(e)}

                      />


                    </div>





                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button
                          type="submit"
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register Faculty</button>
                      </div>
                    </div>

                  </div>
                </form>



              </div>
            </div>
          </div>
        </div>

        <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" class="md:absolute bottom-0 right-0 p-4 float-right">
          <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"></img>
        </a>
      </div>
    </div>
  );
}




export default Announcements;
