import React, { useState } from "react";
import { useFormik } from "formik";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import ssnalogo from '../assets/ssnalogo.png';
import homepagelogo from '../assets/homepagelogo.png';
import { EventsSchema } from "../schemas";
import { imagedb } from "./config";

const initialValues = {
  title: "",
  description: "",
  EventDate: "",
};

const BusRoutes = () => {
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
      const { title, description, EventDate } = values;

      if (title && description && EventDate && img) {
        fetch("https://ssna-admin-default-rtdb.firebaseio.com/BusRoutes.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            EventDate,
            img: img
          }),
        });
        action.resetForm();
      }
    },
  });

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgs = ref(imagedb, `BusRoutes/${v4()}`)
      uploadBytes(imgs, file).then(data => {
        getDownloadURL(data.ref).then(val => {
          setImg(val);
        });
      });
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center bg-blue-200">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Add Bus Routes</h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600 flex items-center">
                <img
                  src={ssnalogo}
                  alt="Personal Details Image"
                  className="w-18 h-18 mr-2"
                />
              </div>
              <div className="lg:col-span-2">
                <h1 className="modal-title font-sans font-bold"></h1>
                <br></br>

                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2">
                      <label htmlFor="state">Upload Bus Routes</label>
                      <input
                        type="file"
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="user_avatar_help"
                        id="user_avatar"
                        accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        onChange={(e) => handleUpload(e)}
                      />
                    </div>
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Upload Routes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <a href="/Homepage" className="md:absolute bottom-0 right-0 p-4 float-right">
          <img
            src={homepagelogo}
            alt="Buy Me A Coffee"
            className="transition-all rounded-full w-14  hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default BusRoutes;
