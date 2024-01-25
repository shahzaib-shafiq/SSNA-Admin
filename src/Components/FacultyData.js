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
  name: "",
  phone: "",
  email: "",
  address: "",
  Education: "",
  University: "",
  Department: "",
  areaOfIntrest: "",
  id: ""

};



// const FacultyData = () => {

//   const [img, setImg] = useState('');
//   const {
//     values,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues,
//     validationSchema: signUpSchema,
//     onSubmit: (values, action) => {
//       const { name, phone, email, address, Education, Department, University, areaOfIntrest, id } = values;

//       if (name && phone && email && address && Education && Department && University && areaOfIntrest, id) {
//         const res = fetch(
//           "https://ssna-admin-default-rtdb.firebaseio.com/FacultyDataBase.json",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               name,
//               phone,
//               email,
//               address,
//               Education,
//               Department,
//               University,
//               areaOfIntrest,
//               id,
//               img: img
//             }),
//           }
//         );

//         // Reset form values
//         action.resetForm();
//       }
//     },
//   });

//   const handleUpload = (e) => {
//     console.log(e.target.files[0])

//     const imgs = ref(imagedb, `FacultyImgs/${v4()}`)
//     uploadBytes(imgs, e.target.files[0]).then(data => {
//       console.log(data, "imgs")
//       getDownloadURL(data.ref).then(val => {
//         setImg(val)

//       })
//     })
//   }

//   return (

//     // <div>

//     //     <div/>


//     //     <div className="container">
//     //       <div className="modal">
//     //         <div className="modal-container">
//     //           <div className="modal-left">
//     //             <Link to='/HomePage'>
//     //               <Button variant='contained' size='medium' endIcon={<HomeIcon />}>
//     //                Home Page
//     //               </Button>
//     //             </Link>

//     //             <h1 className="modal-title">Add a New Faculty Member</h1>

//     //              {/* <form onSubmit={handleSubmit}>
//     //               <div className="input-block">
//     //                 <label htmlFor="name" className="input-label">
//     //                   Name
//     //                 </label>
//     //                 <input
//     //                   type="name"
//     //                   autoComplete="off"
//     //                   name="name"
//     //                   id="name"
//     //                   placeholder="Name"
//     //                   value={values.name}
//     //                   onChange={handleChange}
//     //                   onBlur={handleBlur}

//     //                 />
//     //                 {errors.name && touched.name ? (
//     //                   <p className="form-error">{errors.name}</p>
//     //                 ) : null}
//     //               </div>

//     //               <div className="input-block">
//     //                 <label htmlFor="email" className="input-label">
//     //                   Email
//     //                 </label>
//     //                 <input
//     //                   type="email"
//     //                   autoComplete="off"
//     //                   name="email"
//     //                   id="email"
//     //                   placeholder="Email"
//     //                   value={values.email}
//     //                   onChange={handleChange}
//     //                   onBlur={handleBlur}
//     //                 />
//     //                 {errors.email && touched.email ? (
//     //                   <p className="form-error">{errors.email}</p>
//     //                 ) : null}
//     //               </div>




//     //               <div className="input-block">
//     //                 <label htmlFor="email" className="input-label">
//     //                   Extension
//     //                 </label>
//     //                 <input
//     //                   type="number"
//     //                   autoComplete="off"
//     //                   name="phone"
//     //                   id="phone"
//     //                   placeholder="Ext"
//     //                   value={values.phone}
//     //                   onChange={handleChange}
//     //                   onBlur={handleBlur}
//     //                 />


//     //                 {errors.phone && touched.phone ? (
//     //                   <p className="form-error">{errors.phone}</p>
//     //                 ) : null}

//     //               </div>




//     //               <div className="input-block">
//     //                 <label htmlFor="email" className="input-label">
//     //                   Office Adress
//     //                 </label>
//     //                 <input
//     //                   type="text"
//     //                   autoComplete="off"
//     //                   name="address"
//     //                   id="address"
//     //                   placeholder="Office Address"
//     //                   value={values.address}
//     //                   onChange={handleChange}
//     //                   onBlur={handleBlur}
//     //                 />
//     //                 {errors.address && touched.address ? (
//     //                   <p className="form-error">{errors.address}</p>
//     //                 ) : null}
//     //               </div>


//     //               <div className="input-block">
//     //                 <label htmlFor="email" className="input-label">
//     //                   Qualification
//     //                 </label>
//     //                 <select
//     //                   name="Education"
//     //                   id="Education"
//     //                   value={values.Education}
//     //                   onChange={handleChange}
//     //                   onBlur={handleBlur}
//     //                   className="dropdown"
//     //                 >
//     //                   <option className="dropdownoption" value="">Qualification</option>
//     //                   <option className="dropdownoption" value="BS">BS</option>
//     //                   <option className="dropdownoption" value="MS">MS</option>
//     //                   <option className="dropdownoption" value="PHD">PHD</option>

//     //                 </select>
//     //                 {errors.Education && touched.Education ? (
//     //                   <p className="form-error">{errors.Education}</p>
//     //                 ) : null}
//     //               </div>


//     //               <div className="input-block">
//     //                 <label htmlFor="email" className="input-label">
//     //                   Department
//     //                 </label>
//     //                 <select
//     //                   name="Department"
//     //                   id="Department"
//     //                   value={values.Department}
//     //                   onChange={handleChange}
//     //                   onBlur={handleBlur}
//     //                   className="dropdown"
//     //                 >
//     //                   <option className="dropdownoption" value="">Department</option>
//     //                   <option  className="dropdownoption" value="CS">CS</option>
//     //                   <option className="dropdownoption" value="SE">SE</option>
//     //                   <option className="dropdownoption" value="EE">EE</option>
//     //                   <option className="dropdownoption" value="AI">AI</option>
//     //                   <option className="dropdownoption" value="CYS">CYS</option>
//     //                   <option className="dropdownoption" value="BBA">BBA</option>
//     //                 </select>

//     //                 {errors.Department && touched.Department ? (
//     //                   <p className="form-error">{errors.Department}</p>
//     //                 ) : null}
//     //               </div>

//     //               <div className="input-block">
//     //                 <label htmlFor="email" className="input-label">
//     //                   University
//     //                 </label>
//     //                 <input
//     //                   type="text"
//     //                   autoComplete="off"
//     //                   name="University"
//     //                   id="University"
//     //                   placeholder="University"
//     //                   value={values.University}
//     //                   onChange={handleChange}
//     //                   onBlur={handleBlur}
//     //                 />
//     //                 {errors.University && touched.University ? (
//     //                   <p className="form-error">{errors.University}</p>
//     //                 ) : null}
//     //               </div>


//     //               <div className="input-block">
//     //                 <label htmlFor="email" className="input-label">
//     //                   Area of Intrest
//     //                 </label>
//     //                 <input
//     //                   type="text"
//     //                   autoComplete="off"
//     //                   name="areaOfIntrest"
//     //                   id="areaOfIntrest"
//     //                   placeholder="Area of Intrest"
//     //                   value={values.areaOfIntrest}
//     //                   onChange={handleChange}
//     //                   onBlur={handleBlur}
//     //                 />
//     //                 {errors.areaOfIntrest && touched.areaOfIntrest ? (
//     //                   <p className="form-error">{errors.areaOfIntrest}</p>
//     //                 ) : null}
//     //               </div>


//     //               <div className="input-block">
//     //                 <label htmlFor="email" className="input-label">
//     //                   Faculty ID
//     //                 </label>
//     //                 <input
//     //                   type="text"
//     //                   autoComplete="off"
//     //                   name="id"
//     //                   id="id"
//     //                   placeholder="Faculty ID"
//     //                   value={values.id}
//     //                   onChange={handleChange}
//     //                   onBlur={handleBlur}
//     //                 />
//     //                 {errors.id && touched.id ? (
//     //                   <p className="form-error">{errors.id}</p>
//     //                 ) : null}
//     //               </div>

//     //               <div className="col-12 contact-input-feild">
//     //                 <div className="input-block">
//     //                   <label htmlFor="email" className="input-label">Faculty Image</label>
//     //                   <input
//     //                     type="file"
//     //                     className="wider-dropdown"
//     //                     onChange={(e) => handleUpload(e)}

//     //                   />
//     //                 </div>
//     //               </div>


//     //               <div className="modal-buttons">

//     //                 <button className="input-button" type="submit">
//     //                   Register Faculty
//     //                 </button>
//     //               </div>
//     //             </form> */}


//     //           </div>


//     // </div>


//     //           {/* <div className="modal-right">
//     //             <img
//     //               src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
//     //               alt=""
//     //             />
//     //           </div> */}
//     //         </div>
//     //       </div>
//     //     </div>


// <div className="min-h-screen py-40" style={{backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)'}}>
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
//           <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url('images/Register-Background.png')`}}>
//             <h1 className="text-white text-3xl mb-3">Welcome</h1>
//             <div>
//               <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 py-16 px-12">
//             <h2 className="text-3xl mb-4">Register</h2>
//             <p className="mb-4">
//               Create your account. It’s free and only take a minute
//             </p>
//             <form action="#">
//               <div className="grid grid-cols-2 gap-5">
//                 <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2"></input>
//                 <input type="text" placeholder="Surname" className="border border-gray-400 py-1 px-2"></input>
//               </div>
//               <div className="mt-5">
//                 <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full"></input>
//               </div>
//               <div className="mt-5">
//                 <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full"></input>
//               </div>
//               <div className="mt-5">
//                 <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full"></input>
//               </div>
//               <div className="mt-5 flex items-center">
//                 <input type="checkbox" className="border border-gray-400 mr-2"></input>
//                 <span>
//                   I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &amp; <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
//                 </span>
//               </div>
//               <div className="mt-5">
//                 <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };


// export default FacultyData;


{/* 
<form className="max-w-sm mx-auto">
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required></input>
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></input>
    </div>
    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
 */}

 const FacultyData = () => {


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
      const { name, phone, email, address, Education, Department, University, areaOfIntrest, id } = values;

      if (name && phone && email && address && Education && Department && University && areaOfIntrest, id) {
        const res = fetch(
          "https://ssna-admin-default-rtdb.firebaseio.com/FacultyDataBase.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              phone,
              email,
              address,
              Education,
              Department,
              University,
              areaOfIntrest,
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
                <h1 className="modal-title font-sans font-bold">Add New Faculty Member</h1>
                <br></br>

                <form onSubmit={handleSubmit} >
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                    <div class="md:col-span-5">
                      <label for="full_name">Enter Full Name</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"


                        type="name"
                        autoComplete="off"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.name && touched.name ? (
                        <p className="form-error">{errors.name}</p>
                      ) : null}
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>

                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"

                        type="email"
                        autoComplete="off"
                        name="email"
                        id="email"

                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}

                    </div>

                    <div class="md:col-span-3">
                      <label for="address">Office Adress</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="text"
                        autoComplete="off"
                        name="address"
                        id="address"
                        placeholder="Office Address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur} />



                      {errors.address && touched.address ? (
                        <p className="form-error">{errors.address}</p>
                      ) : null}
                    </div>

                    {/*     change */}


                    {/* Change Education to Designation here */}


                    {/*     change */}

                    <div class="md:col-span-2">
                      <label for="city">Designation</label>
                      <select
                        name="Education"
                        id="Education"
                        value={values.Education}
                        onChange={handleChange}
                        onBlur={handleBlur}

                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {/* <option className="dropdownoption" value="">Qualification</option> */}
                        <option className="dropdownoption" value="Professor">Professor</option>
                        <option className="dropdownoption" value="Associate Professor">Associate Professor</option>
                        <option className="dropdownoption" value="Assistant Professor">Assistant Professor</option>

                        <option className="dropdownoption" value="Lecturer">Lecturer</option>
                        <option className="dropdownoption" value=" Instructor"> Instructor</option>



                      </select>
                      {errors.Education && touched.Education ? (
                        <p className="form-error">{errors.Education}</p>
                      ) : null}




                    </div>
                    {/* Add other Fields */}

                    <div class="md:col-span-2">
                      <label for="address">Department</label>
                      <select
                        name="Department"
                        id="Department"
                        value={values.Department}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Department"
                      >

                        <option value="CS">CS</option>
                        <option value="SE">SE</option>
                        <option value="EE">EE</option>
                        <option value="AI">AI</option>
                        <option value="CYS">CYS</option>
                        <option value="BBA">BBA</option>
                      </select>
                      {errors.Department && touched.Department ? (
                        <p className="form-error">{errors.Department}</p>
                      ) : null}
                    </div>

                    <div class="md:col-span-2">
                      <label for="state"> University</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="text"
                        autoComplete="off"
                        name="University"
                        id="University"
                        placeholder="University"
                        value={values.University}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      />

                      {errors.University && touched.University ? (
                        <p className="form-error">{errors.University}</p>
                      ) : null}
                    </div>

                    <div class="md:col-span-1">
                      <label for="address">Extension</label>
                      <input


                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="number"
                        autoComplete="off"
                        name="phone"
                        id="phone"
                        placeholder="Ext"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />


                      {errors.phone && touched.phone ? (
                        <p className="form-error">{errors.phone}</p>
                      ) : null}

                    </div>



                    <div class="md:col-span-2">
                      <label for="country">Area of Intrest</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        ype="text"
                        autoComplete="off"
                        name="areaOfIntrest"
                        id="areaOfIntrest"
                        placeholder="Area of Intrest"
                        value={values.areaOfIntrest}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      />
                      {errors.areaOfIntrest && touched.areaOfIntrest ? (
                        <p className="form-error">{errors.areaOfIntrest}</p>
                      ) : null}
                    </div>

                    <div class="md:col-span-2">
                      <label for="state">Faculty ID</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="text"
                        autoComplete="off"
                        name="id"
                        id="id"
                        placeholder="Faculty ID"
                        value={values.id}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      />

                      {errors.id && touched.id ? (
                        <p className="form-error">{errors.id}</p>
                      ) : null}
                    </div>


                    <div class="md:col-span-2">
                      <label for="state">Faculty Image</label>
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




export default FacultyData;
