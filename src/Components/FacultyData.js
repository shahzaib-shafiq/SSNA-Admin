import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../Styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

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

const FacultyData = () => {
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
              id
            }),
          }
        );

        // Reset form values
        action.resetForm();
      }
    },
  });

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome Admin!</h1>
                <p className="modal-desc">
                  Add a New Faculty Member
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
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


                  
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>




                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Extension
                    </label>
                    <input
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




                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Office Adress
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="address"
                      id="address"
                      placeholder="Office Address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.address && touched.address ? (
                      <p className="form-error">{errors.address}</p>
                    ) : null}
                  </div>


                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Education
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="Education"
                      id="Education"
                      placeholder="Education"
                      value={values.Education}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Education && touched.Education ? (
                      <p className="form-error">{errors.Education}</p>
                    ) : null}
                  </div>


                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Department
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="Department"
                      id="Department"
                      placeholder="Department"
                      value={values.Department}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Department && touched.Department ? (
                      <p className="form-error">{errors.Department}</p>
                    ) : null}
                  </div>


                  
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      University
                    </label>
                    <input
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


                  
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Area of Intrest
                    </label>
                    <input
                      type="text"
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


                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Faculty ID
                    </label>
                    <input
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
            
                 <div className="modal-buttons">
                    <a href="#" className="">
                      Add a Faculty Member
                    </a>
                    <button className="input-button" type="submit">
                      Register Faculty
                    </button>
                  </div>
                </form>

              </div>
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default FacultyData;