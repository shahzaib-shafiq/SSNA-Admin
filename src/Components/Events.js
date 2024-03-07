import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { EventsSchema } from "../schemas";
import { imagedb } from "./config";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid';
import { Link } from 'react-router-dom'
import ssnalogo from '../assets/ssnalogo.png';


const initialValues = { 
  title:"",
  description:"",
  EventDate:"",
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
    validationSchema: EventsSchema,
    onSubmit: (values, action) => {
      const { title, description,EventDate } = values;

      if (title && description &&EventDate) {
        const randomId = generateRandomId();
        const res = fetch(
          "https://ssna-admin-default-rtdb.firebaseio.com/Events.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
              EventDate,
              id:randomId,
              img: img
            }),
          }
        );     
        action.resetForm();
      }
    },
  });

  const handleUpload = (e) => {
    console.log(e.target.files[0])

    const imgs = ref(imagedb, `EventsImgs/${v4()}`)
    uploadBytes(imgs, e.target.files[0]).then(data => {
      console.log(data, "imgs")
      getDownloadURL(data.ref).then(val => {
        setImg(val)

      })
    })
  }

  return (
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center  bg-blue-200">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <h2 class="font-semibold text-xl text-gray-600">Add New Event</h2>
         
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
    



              <div className="text-gray-600 flex items-center">
                <img
                 src={ssnalogo}
                  alt="Personal Details Image"
                  className="w-18 h-18 mr-2"
                />
              </div>
              <div class="lg:col-span-2">
                <h1 className="modal-title font-sans font-bold"></h1>
                <br></br>

                <form onSubmit={handleSubmit} >
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                      <div class="md:col-span-5">
                      <label for="full_name">Event Title</label>
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

                        <div class="md:col-span-2">
                      <label for="city">Event Date</label>
                      <input
                      type="date"
                        name="EventDate"
                        id="EventDate"
                        value={values.EventDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        min="2018-01-01"
                        max="2050-12-31"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >                       
                      </input>

                      {errors.EventDate && touched.EventDate ? (
                        <p className="form-error">{errors.EventDate}</p>
                      ) : null}

                   </div>
                    


                    <div class="md:col-span-2">
                      <label for="state">Event Image</label>
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
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Post Event</button>
                      </div>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <a href="/Homepage"  class="md:absolute bottom-0 right-0 p-4 float-right">
          <img src="https://th.bing.com/th/id/R.610f5abf045d4d6fbab418b2e09cfe99?rik=aL%2fhAM6MWbY9WQ&pid=ImgRaw&r=0" alt="Buy Me A Coffee" class="transition-all rounded-full w-14  hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"></img>
        </a>

      </div>
    </div>
  );
}




export default Announcements;