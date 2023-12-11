import React from 'react'

export default function HomePage() {
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <h1>Home Page</h1>

            <div className="col">

            <button                   
                      className="btn btn-style w-100"
                      onClick={logout}>
                      Add Faculty
                    </button>


                    <button                   
                      className="btn btn-style w-100"
                      onClick={logout}>
                      Announcement
                    </button>



                    <button                   
                      className="btn btn-style w-200"
                      onClick={logout}>
                      Logout
                    </button>

            

                          </div>
            
        </div>
    );
}