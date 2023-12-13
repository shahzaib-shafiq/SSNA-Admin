import React from 'react'
import Button from '@mui/material/Button';
import '../Styles/HomePage.css';
import LogoutIcon from '@mui/icons-material/Logout';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import {Link} from 'react-router-dom'

export default function HomePage() {


  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div>
      <h1 className='pageheading'>Welcome Admin </h1>

      <div className="container">

      <Link to='/FacultyData'>
          <Button variant='contained' size='medium' endIcon={<PersonAddIcon />}>
            Add Faculty
          </Button>
        </Link>

        <Link to='/announcement'>
          <Button variant='contained' size='medium' endIcon={<AnnouncementIcon />}>
            Announcement
          </Button>
        </Link>
      
      <Button variant="contained" endIcon={<LogoutIcon />}
      
      onClick={logout}>
        Signout
      </Button>

      </div>

    </div>
  );
}