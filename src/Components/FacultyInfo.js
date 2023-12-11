import React, { useState } from "react";

const FacultyInfo = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    Education: "",
    Department:"",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, Education,Department } = userData;

    if (firstName && lastName && phone && email && address && Education && Department) {
      const res = fetch(
        "https://ssna-admin-default-rtdb.firebaseio.com/FacultyDataBase.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            Education,
            Department
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          Education: "",
          Department:"",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                  Welcome   <br /> Admin 
                  </h1>
                  
                  <p className="main-hero-para">
                    
                    <br></br>
                    Enter Faculty Information
                  </p>
                   <figure>
                    {/* <img
                       src="./images/SSNALogo.png"
                      alt="SSNA logo"
                      className="img-fluid"
                    />  */}
                  </figure> 
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">


                 {/* img
                 id 
                    */}

                    
                    <div className="row">
                      
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="Name"
                          id=""
                          className="form-control"
                          placeholder="Full Name"
                          value={userData.Name}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Office Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="Education"
                          id=""
                          className="form-control"
                          placeholder="Education"
                          value={userData.Education}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                   

                    <div className="row">

                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="Department"
                          id=""
                          className="form-control"
                          placeholder="Department"
                          value={userData.Department}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                   

{/* New Daata */}
                    <div className="row">
                      
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="University"
                          id=""
                          className="form-control"
                          placeholder="University"
                          value={userData.University}
                          onChange={postUserData}
                        />


                      </div>
                    </div>
                   

                      <div className="row">
                      
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="Area_of_Intrest"
                          id=""
                          className="form-control"
                          placeholder="Area of Intrest"
                          value={userData.Area_of_Intrest}
                          onChange={postUserData}
                        />

                        
                      </div>
                    </div>
                   

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultyInfo;