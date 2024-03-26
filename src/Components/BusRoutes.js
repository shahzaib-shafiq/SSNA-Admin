import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { TimetableSchema } from "../schemas";
import { imagedb } from "./config";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'; // Import SweetAlert2
import ssnalogo from '../assets/ssnalogo.png';
import homepagelogo from '../assets/homepagelogo.png';

const initialValues = {
  EventDate: "",
};

const BusRoutes = () => {
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
    validationSchema: TimetableSchema,
    onSubmit: async (values, action) => {
      const { EventDate } = values;

      if (EventDate&&img) {
        const randomId = generateRandomId();
        try {
          await fetch(
            "https://ssna-admin-default-rtdb.firebaseio.com/BusRoutes.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                EventDate,
                id: randomId,
                img: img
              }),
            }
          );
          Swal.fire({
            
            title: 'Success!',
            text: 'BusRoutes posted successfully!',
            icon: 'success'
          });

          action.resetForm();

        } catch (error) {
          console.error("Error posting BusRoutes: ", error);
          Swal.fire({
            
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      } else {
        console.error("Image URL is missing or form fields are incomplete.");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Image URL is missing or form fields are incomplete!',
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    }
  });
          const handleUpload = (e) => {
            const file = e.target.files[0];
            if (file) {
              const imgs = ref(imagedb, `BusRoutes/${v4()}`);
              uploadBytes(imgs, file).then(data => {
                getDownloadURL(data.ref).then(url => {
                  setImg(url); // Set the image URL here
                });
              }).catch(error => {
                console.error("Error uploading image: ", error);
              });
            }
          };
        
  return (
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center  bg-blue-200">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <h2 class="font-semibold text-xl text-gray-600">Add Bus Routes</h2>
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
                    <div class="md:col-span-2">
                      <label for="city">Upload Date</label>
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
                      />
                      {errors.EventDate && touched.EventDate ? (
                        <p className="form-error">{errors.EventDate}</p>
                      ) : null}
                    </div>
                    <div class="md:col-span-2">
                      <label for="state">Upload CSV/XLSX File</label>
                      <input
                        type="file"
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="user_avatar_help"
                        id="user_avatar"
                        accept=".xlsx"
                        onChange={(e) => handleUpload(e)}
                      />
                    </div>
                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button
                          type="submit"
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload Bus Routes</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <a href="/Homepage" class="md:absolute bottom-0 right-0 p-4 float-right">
          <img src={homepagelogo} alt="Buy Me A Coffee" class="transition-all rounded-full w-14  hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"></img>
        </a>
      </div>
    </div>
  );
}

export default BusRoutes;