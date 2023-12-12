import React, { useState } from "react";
import { imagedb } from "./config";
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid';
const Announcements
 = () => {
  const [userData, setUserData] = useState({
    
    Title: "",
    Announcement: "",
    AnnouncementDate:"",
    description:""
  });


  const [img,setImg]=useState('');
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({...userData, [name]: value });
  };


     // Function to generate a random 6-digit ID
     const generateRandomId = () => {
      return Math.floor(1000000 + Math.random() * 9000000).toString();
    };


  const submitData = async (event) => {
    event.preventDefault();
    const { Title, Announcement, AnnouncementDate, description } = userData;
  
 
  
    if (Title && Announcement && AnnouncementDate && description) {
      const randomId = generateRandomId();
  
      const res = await fetch(
        `https://ssna-admin-default-rtdb.firebaseio.com/Announcements/${randomId}.json`,
        {
          method: "PUT", // Use PUT to specify the ID
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Title,
            Announcement,
            AnnouncementDate,
            description,
            id: randomId,
          }),
        }
      );
  
      if (res.ok) {
        setUserData({
          Title: "",
          Announcement: "",
          AnnouncementDate: "",
          description: "",
        });
        alert("Data Stored");
      } else {
        alert("Failed to store data");
      }
    } else {
      alert("Please fill in all the data");
    }
  };
  
  const handleUpload=(e)=>{
    console.log(e.target.files[0])

  const imgs=ref(imagedb,`AnnouncementImgs/${v4()}`)
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
                    Post An Announcement
                  </p>
                  
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="Title"
                          maxLength="20"
                          id=""
                          className="form-control"
                          placeholder="Announcement Title"
                          value={userData.Title}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="Announcement"
                          id=""
                          maxLength="100"
                          className="form-control"
                          placeholder="Announcement"
                          value={userData.Announcement}
                          onChange={postUserData}
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="description"
                          id=""
                          maxLength="100"
                          className="form-control"
                          placeholder="Description"
                          value={userData.description}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="date"
                          name="AnnouncementDate"
                          
                          className="form-control wider-dropdown"
                          id="start"
                          
                          value={userData.AnnouncementDate}
                          onChange={postUserData}
                          min="2018-01-01"
                          max="2050-12-31"
                        />

                        
                      </div>

                      <div className="col-12 contact-input-feild">
                        <input
                          type="file"
                          className="wider-dropdown"

                          onChange={(e)=>handleUpload(e)}

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

export default Announcements;
