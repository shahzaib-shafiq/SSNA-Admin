import React from 'react';
import Button from '@mui/material/Button';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { Link } from 'react-router-dom';
import fastcfd from '../assets/fastcfd.jpg';


const Dashboard = () => {
  return (
    <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <section>
        <div className="register">
          <div className="col-2">
            <img src={fastcfd} alt="" />
          </div>
          <div className="col-1">
            <h1 className="font-serif font-bold ">Admin Opreations </h1>
            <span></span>
            <form id='form' className='flex flex-col'>
              <Link to='/CourseMaterial'>
                <Button className="styledButton w-45 h-12 p-2" variant='contained' size='medium' endIcon={<PersonAddIcon />}>
                  Course Material
                </Button>
              </Link>
              <Link to='/Announcements'>
                <Button className="styledButton w-45 h-12 p-2" variant='contained' size='medium' endIcon={<AnnouncementIcon />}>
                  Announcements
                </Button>
              </Link>
              <Link to='/FacultyData'>
                <Button className="styledButton w-45 h-12 p-2" variant='contained' size='medium' endIcon={<PersonAddIcon />}>
                  Add New Faculty
                </Button>
              </Link>
              
              <Link to='/UpcomingEvents'>
                <Button className="styledButton w-45 h-12 p-2" variant='contained' size='medium' endIcon={<AnnouncementIcon />}>
                  Upcoming Events
                </Button>
              </Link>


              <Link to='/Timetable'>
                <Button className="styledButton w-45 h-12 p-2" variant='contained' size='medium' endIcon={<AnnouncementIcon />}>
                  Manage Timetable
                </Button>
              </Link>


              <Link to='/BusRoutes'>
                <Button className="styledButton w-45 h-12 p-2" variant='contained' size='medium' endIcon={<AnnouncementIcon />}>
                Manage BusRoutes
                </Button>
              </Link>



              <a href="/" class="md:absolute bottom-0 right-0 p-4 float-right">
                <img src="https://w7.pngwing.com/pngs/253/714/png-transparent-logout-heroicons-ui-icon-thumbnail.png" alt="Buy Me A Coffee" class="transition-all rounded-full w-14  hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"></img>
              </a>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
