import React from 'react'

import Button from '@mui/material/Button';
import '../Styles/HomePage.css';
import LogoutIcon from '@mui/icons-material/Logout';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AnnouncementIcon from '@mui/icons-material/Announcement';


export default function HomePage() {
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div>
      <h1 className='pageheading'>Welcome Admin </h1>


      <div className="container">

      <Button variant="contained" size="medium"
       onClick={logout}
     
       endIcon={<PersonAddIcon />}
     >Add Faculty</Button>
      

      <Button variant="contained" size="medium" endIcon={<AnnouncementIcon />}
      
      onClick={logout}
    
      >Announcement</Button>
      
      
      <Button variant="contained" endIcon={<LogoutIcon />}
      
      onClick={logout}>
        Signout
      </Button>

      </div>

    </div>
  );
}