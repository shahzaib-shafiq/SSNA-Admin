import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { AnnouncementSchema } from "../schemas";
import { imagedb } from "./config";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
const initialValues = {
  
  title:"",
  summary:"",
  description:"",
  AnnouncementDate:"",
};


const Announcements = () => {

//Function to generate a random 6-digit ID
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
    validationSchema: AnnouncementSchema,
    onSubmit: (values, action) => {
      const { title,summary, description,AnnouncementDate } = values;

      if (title && summary && description &&AnnouncementDate) {
        const randomId = generateRandomId();
        const res = fetch(
          "https://ssna-admin-default-rtdb.firebaseio.com/Announcements.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              summary,
              description,
              AnnouncementDate,
              id:randomId,
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
                <h1 className="modal-title font-sans font-bold">Add New Post</h1>
                <br></br>

                <form onSubmit={handleSubmit} >
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                      <div class="md:col-span-5">
                      <label for="full_name">Post Title</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="name"
                        autoComplete="off"
                        name="title"
                        id="title"
                        placeholder="Title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.title && touched.title ? (
                        <p className="form-error">{errors.title}</p>
                      ) : null}
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Summary</label>

                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Summary"

                        type="text"
                        autoComplete="off"
                        name="summary"
                        id=" summary"

                        value={values.summary}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.summary && touched.summary ? (
                        <p className="form-error">{errors.summary}</p>
                      ) : null}

                    </div>

                    <div class="md:col-span-3">
                      <label for="address">Description</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="text"
                        autoComplete="off"
                        name="description"
                        id="description"
                        placeholder="Description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur} />



                      {errors.description && touched.description ? (
                        <p className="form-error">{errors.description}</p>
                      ) : null}
                    </div>

                    {/*     change */}


                    {/* Change Education to Designation here */}


                    {/*     change */}

                    <div class="md:col-span-2">
                      <label for="city">Announcement Date</label>
                      <input
                      type="date"
                        name="AnnouncementDate"
                        id="AnnouncementDate"
                        value={values.AnnouncementDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        min="2018-01-01"
                        max="2050-12-31"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >                       
                      </input>

                      {errors.AnnouncementDate && touched.AnnouncementDate ? (
                        <p className="form-error">{errors.AnnouncementDate}</p>
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