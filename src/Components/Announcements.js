import React, { useState } from "react";
import { imagedb } from "./config";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid';

const Announcements
  = () => {
    const [userData, setUserData] = useState({

      Title: "",
      Announcement: "",
      AnnouncementDate: "",
      description: ""
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [img, setImg] = useState('');
    const [sucessMsg, setSucessMsg] = useState("");
    let name, value;
    const postUserData = (event) => {


      name = event.target.name;
      value = event.target.value;
      const inputValue = event.target.value;
      // Regular expression to allow only English characters
      const onlyEnglishRegex = /^[a-zA-Z\s]+$/;
      // Check if the input matches the regular expression
      if (onlyEnglishRegex.test(inputValue) || inputValue === '') {
        // Update the state only if the input is valid or empty
        setUserData({ Title: inputValue });
        
      }
      setUserData({ ...userData, [name]: value });
    };


    // Function to generate a random 6-digit ID
    const generateRandomId = () => {
      return Math.floor(1000000 + Math.random() * 9000000).toString();
    };


    const submitData = async (event) => {
      event.preventDefault();
      const { Title, Announcement, AnnouncementDate, description } = userData;

      if (
        Title.length < 4 || Title.length > 20 ||
        Announcement.length < 4 || Announcement.length > 20 ||
        description.length < 4 || description.length > 30 ||
        isNaN(Date.parse(AnnouncementDate))
      ) {
        setErrorMsg("Enter Data Between 4-20 characters");
        return;
      }

      if (
        !isNaN(parseInt(Title)) ||
        !isNaN(parseInt(Announcement)) ||
        !isNaN(parseInt(description)) ||
        isNaN(Date.parse(AnnouncementDate))
      ) {
        setErrorMsg("Please enter valid data in the Field");
        return;
      }


      if (Title && Announcement && AnnouncementDate && description) {
        const randomId = generateRandomId();

        const res = await fetch(
          //`https://ssna-admin-default-rtdb.firebaseio.com/Announcements/${randomId}.json`,
          `https://ssna-admin-default-rtdb.firebaseio.com/Announcements.json`,
          

          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Title,
              Announcement,
              AnnouncementDate,
              description,
              id: randomId,
              img:img
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
          setSucessMsg("Announcement Created"); // Set success message here
        } else {
          setErrorMsg("Failed to store data");
        }
      } else {
        setErrorMsg("Please fill in all the data");
      }
    };

    const handleUpload = (e) => {
      console.log(e.target.files[0])

      const imgs = ref(imagedb, `AnnouncementImgs/${v4()}`)
      uploadBytes(imgs, e.target.files[0]).then(data => {
        console.log(data, "imgs")
        getDownloadURL(data.ref).then(val => {
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
                    Post   <br /> Announcement
                    </h1>
                    <br></br>
                    

                  </div>

                  {/* right side contact form  */}
                  <div className="contact-rightside col-12 col-lg-7">
                    <form method="POST">

                      <div className="row">
                        <label htmlFor="email" className="input-label">
                          Enter Post Title
                        </label>
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

                        <label htmlFor="email" className="input-label">
                          Enter Summary
                        </label>
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

                        <label htmlFor="email" className="input-label">
                          Enter Post Description
                        </label>
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

                        <label htmlFor="email" className="input-label">
                          Enter Announcement Date
                        </label>

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
                            onChange={(e) => handleUpload(e)}

                          />
                        </div>
                      </div>
                      {errorMsg && (
                        <div className="col-12 text-danger mt-2">
                          {errorMsg}

                        </div>
                      )}
                      {
                        sucessMsg && (
                          <div className="col-12 text-success mt-2">
                            {sucessMsg}
                          </div>
                        )}
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
