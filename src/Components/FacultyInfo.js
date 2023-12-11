import React, { useState } from "react";
import { imagedb } from "./config";
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid';
const FacultyInfo = () => {
  
  
  const [userData, setUserData] = useState({
    Name: "",
    phone: "",
    email: "",
    address: "",
    Education: "",
    University: "",
    Department: "",
    areaOfIntrest: "",
    id: "",
    
  });


  const [img,setImg]=useState('');

  let name, value;


  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    



    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase

  const submitData = async (event) => {
    event.preventDefault();
    const { Name, phone, email, address, Education, Department, University, areaOfIntrest,id } = userData;

    if (Name && phone && email && address && Education && Department && University && areaOfIntrest,id) {
      const res = fetch(
        "https://ssna-admin-default-rtdb.firebaseio.com/FacultyDataBase.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
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

      if (res) {
        setUserData({
          Name: "",
          phone: "",
          email: "",
          address: "",
          Education: "",
          Department: "",
          University: "",
          areaOfIntrest: "",
          id:""
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }


  };

  // // JavaScript function to validate email format
  // const validateEmail = (e) => {
  //   const { value } = e.target;
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //   if (!emailRegex.test(value)) {
  //     // Invalid email format, handle the error (e.g., show an error message)
  //     console.log('Please enter a valid email address.');
  //     // You can set an error state or display an error message to the user
  //   } else {
  //     // Valid email format
  //     console.log('Valid email address.');
  //     // Clear error state or hide error message if previously shown
  //   }
  // };


  const handleUpload=(e)=>{
    console.log(e.target.files[0])

    const imgs=ref(imagedb,`Imgs${v4()}`)
  uploadBytes(imgs,e.target.files[0]).then(data=>{
    console.log(data,"imgs")
    getDownloadURL(data.ref).then(val=>{
      setImg(val)

    })
  })
  
  }
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
    name="id"
    maxLength="6"
    id=""
    className="form-control"
    placeholder="EID"
    value={userData.id}
    onChange={postUserData}
  />
</div>
</div>


                    <div className="row">

                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="Name"
                          maxLength="20"
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
                          maxLength="3"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}

                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="email"
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
                          maxLength="20"
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
                        <select
                          name="Education"
                          id=""
                          className="form-control wider-dropdown"
                          value={userData.Education}
                          onChange={postUserData}
                        >
                          <option value="">Qualification</option>
                          <option value="BS">BS</option>
                          <option value="MS">MS</option>
                          <option value="PHD">PHD</option>
                        </select>

                      </div>
                    </div>



                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <select
                          name="Department"
                          id=""
                          className="form-control wider-dropdown"
                          value={userData.Department}
                          onChange={postUserData}
                        >
                          <option value="">Department</option>
                          <option value="CS">CS</option>
                          <option value="SE">SE</option>
                          <option value="EE">EE</option>
                          <option value="AI">AI</option>
                          <option value="CYS">CYS</option>
                          <option value="BBA">BBA</option>



                        </select>

                      </div>
                    </div>


                    {/* New Daata */}
                    <div className="row">

                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="University"
                          maxLength="40"
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
                          name="areaOfIntrest"
                          maxLength="50"
                          id=""
                          className="form-control"
                          placeholder="Area of Intrest"
                          value={userData.areaOfIntrest}
                          onChange={postUserData}
                        />


                      </div>
                    </div>

                    


                      <div className="col-12 contact-input-feild">
                        <input
                          type="file"
                          className="wider-dropdown"

                          onChange={(e)=>handleUpload(e)}

                        />
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