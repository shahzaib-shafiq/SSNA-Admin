import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { CourseMaterialSchema } from "../schemas";
import { imagedb } from "./config";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
const initialValues = {
  CourseName:"",
  CourseCode:"",
  Department:"",
  DriveLink:"",

  
};

const CourseMaterial = () => {

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
    validationSchema: CourseMaterialSchema,
    onSubmit: (values, action) => {
      const { CourseName, CourseCode,Department,DriveLink } = values;

      if (CourseName && CourseCode &&Department&&DriveLink) {
        const randomId = generateRandomId();
        const res = fetch(
          "https://ssna-admin-default-rtdb.firebaseio.com/CourseMaterial.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              CourseName,
              CourseCode,
              Department,
              DriveLink,
              
            }),
          }
        );

        // Reset form values
        action.resetForm();
      }
    },
  });

 
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
                <h1 className="modal-CourseName font-sans font-bold">Add Course Material</h1>
                <br></br>

                <form onSubmit={handleSubmit} >
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                      <div class="md:col-span-5">
                      <label for="full_name">Course Name</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="name"
                        autoComplete="off"
                        name="CourseName"
                        id="CourseName"
                        placeholder="Course Title"
                        value={values.CourseName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.CourseName && touched.CourseName ? (
                        <p className="form-error">{errors.CourseName}</p>
                      ) : null}
                    </div>

              

                    <div class="md:col-span-3">
                      <label for="address">Course Code</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="text"
                        autoComplete="off"
                        name="CourseCode"
                        id="CourseCode"
                        placeholder="CS 101"
                        value={values.CourseCode}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                      {errors.CourseCode && touched.CourseCode ? (
                        <p className="form-error">{errors.CourseCode}</p>
                      ) : null}
                    </div>

                           
                    
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
                        <option value="">Select Department</option>
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


                    <div class="md:col-span-3">
                      <label for="address">Course Drive Link</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="text"
                        autoComplete="off"
                        name="DriveLink"
                        id="DriveLink"
                        placeholder="Link"
                        value={values.DriveLink}
                        onChange={handleChange}
                        onBlur={handleBlur} />



                      {errors.DriveLink && touched.DriveLink ? (
                        <p className="form-error">{errors.DriveLink}</p>
                      ) : null}
                    </div>

                      

                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button
                          type="submit"
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Course Material</button>
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




export default CourseMaterial;