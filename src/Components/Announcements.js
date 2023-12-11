import React, { useState } from "react";

const Announcements
 = () => {
  const [userData, setUserData] = useState({
    Title: "",
    Announcement: "",
    AnnouncementDate:""
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { Title, Announcement,AnnouncementDate } = userData;

    if (Title && Announcement&&AnnouncementDate) {
      const res = fetch(
        "https://ssna-admin-default-rtdb.firebaseio.com/Announcements.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Title,
            Announcement,
            AnnouncementDate
           
          }),
        }
      );

      if (res) {
        setUserData({
          Title: "",
          Announcement: "",
          AnnouncementDate: "",
       
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
                    Post An Announcement
                  </p>
                   {/* <figure>
                    <img
                       src="./images/SSNALogo.png"
                      alt="SSNA logo"
                      className="img-fluid"
                    /> 
                  </figure>  */}
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

export default Announcements
;
