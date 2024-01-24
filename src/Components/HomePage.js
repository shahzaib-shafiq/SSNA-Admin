import React from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { Link } from 'react-router-dom';
import bgImg from '../assets/img1.jpg';

const logout = () => {
  localStorage.clear();
};

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <section>
        <div className="register">
          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
          <div className="col-1">
            <h2>Admin Module</h2>
            <span></span>
            <form id='form' className='flex flex-col'>
              <Link to='/FacultyData'>
                <Button className="styledButton" variant='contained' size='medium' endIcon={<PersonAddIcon />}>
                  Add Faculty
                </Button>
              </Link>
              <Link to='/announcement'>
                <Button className="styledButton" variant='contained' size='medium' endIcon={<AnnouncementIcon />}>
                  Announcement
                </Button>
              </Link>
              <Link to='/'>
                <Button className="styledButton" variant="contained" endIcon={<LogoutIcon />} onClick={logout}>
                  Signout
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
