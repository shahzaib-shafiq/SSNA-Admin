import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { AnnouncementSchema } from "../schemas";
import { imagedb } from "./config";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import ssnalogo from '../assets/ssnalogo.png';
import homepagelogo from '../assets/homepagelogo.png';
const initialValues = {
  title: "",
  AnnouncementLink: "",
  description: "",
  AnnouncementDate: "",
};
const Announcements = () => {
const generateRandomId = () => {
    return Math.floor(1000000 + Math.random() * 9000000).toString();
  };
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
    onSubmit : async (values, action) => {
      const { title, AnnouncementLink, description, AnnouncementDate } = values;
    
      if (title && AnnouncementLink && description && AnnouncementDate ) {
        const randomId = generateRandomId();
        try {
          await fetch(
            "https://ssna-admin-default-rtdb.firebaseio.com/Announcements.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title,
                AnnouncementLink,
                description,
                AnnouncementDate,
                id: randomId,
                
              }),
            }
          );
    
          Swal.fire({
            title: 'Success!',
            text: 'Announcement posted successfully!',
            icon: 'success'
          });
    
          // Reset form values
          action.resetForm();
        } catch (error) {
          console.error("Error posting announcement: ", error);
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

  return (
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center  bg-blue-200">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <h2 class="font-semibold text-xl text-gray-600">Add New Announcement</h2>
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
                <br></br>
                <form onSubmit={handleSubmit}>
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label for="full_name">Post Title</label>
                      <input
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
                      <label for="address">Announcement Link</label>
                      <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        type="text"
                        autoComplete="off"
                        name="AnnouncementLink"
                        id="AnnouncementLink"
                        placeholder="Announcement Link"
                        value={values.AnnouncementLink}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                      {errors.AnnouncementLink && touched.AnnouncementLink ? (
                        <p className="form-error">{errors.AnnouncementLink}</p>
                      ) : null}
                    </div>                
                    <div class="md:col-span-5"
                    >
                      <label for="address">Description</label>
                      <textarea


                        rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                        type="text"
                        autoComplete="off"
                        name="description"
                        id="description"
                        placeholder="Description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}

                      ></textarea>
                      {errors.description && touched.description ? (
                        <p className="form-error">{errors.description}</p>
                      ) : null}
                    </div>
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
                      />
                      {errors.AnnouncementDate && touched.AnnouncementDate ? (
                        <p className="form-error">{errors.AnnouncementDate}</p>
                      ) : null}
                    </div>
                      <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button
                          type="submit"
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Post Announcement
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <a href="/Homepage" class="md:absolute bottom-0 right-0 p-4 float-right">
          <img
            src={homepagelogo}
            alt="Buy Me A Coffee"
            class="transition-all rounded-full w-14  hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
          />
        </a>
      </div>
    </div>
  );
};

export default Announcements;
